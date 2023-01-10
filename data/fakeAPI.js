

var subjectTemplate = `
<div id="subject" class="bg-light min-vh-30 rounded">
    
    <div v-for="subject in Subjects">

        <button :id="'btn'+subject.id" type="button" class="btn btn-light w-100" v-on:click="collapsible('btn'+subject.id, subject.id)">
        <i class="fa fa-angle-right"></i>
        <a :href="'#'+subject.id" class="text-decoration-none">{{subject.label}}</a>
        </button>
        <div v-bind:id="subject.id" class="child-chap show-not">
            <p v-for="chap in Object.keys(subject.chapter)"><a class="text-dark text-decoration-none cc-chap" v-bind:href="'#'+chap" v-on:click="GetTemplate(subject.id, chap)">{{subject.chapter[chap].title}}</a></p>
            
        </div>
    </div>
</div>
`


const Subject = [
    {
        'id': 'database',
        'label': 'Cơ sở dữ liệu',
        'chapter': {
            'database_1': {
                'title': 'Các cách tiếp cận cơ sở dữ liệu',
                'outside': `
                    <iframe frameborder="0" style="width:100%;height:600px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=GeneralDB_chapI.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1R5tvKChKTXWmztn8L3qn1eyf-WiF5hu6%26export%3Ddownload"></iframe>
                `,
                'tableContent': {}
            },
            'database_2': {
                title: 'Đại số quan hệ',
                outside: `
                    <iframe frameborder="0" style="width:100%;height:600px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#G1KpBw-aNd9zObe7s6iKjIxhNuaOags8fh"></iframe>
                `,
                tableContent: {}
            },
            'database_3': {
                title: 'Ràng buộc toàn vẹn CSDL',
                outside: `
                    <iframe frameborder="0" style="width:100%;height:600px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#G1ATCJoJR14LZmvyUc5dilhYRU5j_PJIG3"></iframe>
                `,
                tableContent: {}
            },
            'database_4': {
                title: 'Chuẩn hóa lược đồ quan hệ',
                outside: `
                    <iframe frameborder="0" style="width:100%;height:600px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#G1qCTkQBqR5dzGgqptKmBMSmP063BdlLDo"></iframe>
                `,
                tableContent: {}
            },
            'database_5': {
                title: 'Ngôn ngữ SQL',
                outside: `
                    <iframe frameborder="0" style="width:100%;height:600px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#G1toYp02rb46PRFBMhQpm2iY9PQXd2yIqv"></iframe>
                `,
                tableContent: {}
            }
        }
    },
    {
        'id': 'computerArchitect',
        'label': 'Kiến trúc máy tính',
        'chapter': {
            'CA_chap0': {
                'title': 'Kiến trúc cơ bản của máy vi tính',
                'tableContent': CA_chap0
            },
            'CA_chap1': {
                'title': 'Đơn vị xử lý trung tâm',
                'tableContent': CA_chap1
            },
            'CA_chap2': {
                'title': 'Tổ chức bộ nhớ trong máy tính',
                'tableContent': CA_chap2
            },
            'CA_chap3': {
                'title': 'Cấu trúc BUS trong máy vi tính',
                'outside': `
                <iframe frameborder="0" style="width:100%;height:600px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#G1XRSxXYSWJILak_WUKE2cshLow3qVhc6t"></iframe>
                    <center>
                        <img src="./assets/img/CA/CA04/Diagram_Devices.png" alt="cpu-types"></img>
                    </center>
                    - Bus là thành phần kết nối các thành phần trong hệ thống máy tính<br>
                    - Chu kỳ bus là quá trình xảy ra trên bus để truyền tải dữ liệu<br>
                    - Lượng dữ liệu tối đa được chuyển qua bus trong một khoảng thời gian gọi là tốc độ truyền tải tối đa (băng thông - bandwidth)<br>
                    - Băng thông là yếu tố ảnh hưởng đến tốc độ của máy tính<br>
                    Bd = <sup>Vxn</sup>/<sub>m</sub> <br>
                    <ul>
                        <li>Bd: Băng thông (MB/s)</li>
                        <li>V: Tốc độ Bus (MHz)</li>
                        <li>N: Số byte trong 1 lần truyền</li>
                        <li>M: Số chu kì đồng hồ cho mỗi lần truyền</li>
                    </ul>
                    Một hệ thống máy tính thường có nhiều loại bus
                `,
                'tableContent': CA_chap3
            },
            'CA_chap4': {
                'title': 'Các chip bổ trợ trong máy vi tính',
                'outside': `<iframe frameborder="0" style="width:100%;height:600px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Chap5.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1PFbcY83jz3tRyvnklYkxwS6SfYEtbWbE%26export%3Ddownload"></iframe>`,
                'tableContent': CA_chap4
            },
            'CA_chap5': {
                'title': 'Bộ nhớ ngoài của máy vi tính',
                'outside': `<iframe frameborder="0" style="width:100%;height:600px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Chap6.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D131ordGFAN8yokY5CUMBrWmADkrhE25D6%26export%3Ddownload"></iframe>`,
                'tableContent': CA_chap5
            },
            'CA_chap6': {
                'title': 'Ghép nối máy vi tính với thiết bị ngoại vi',
                'outside': `
                <iframe frameborder="0" style="width:100%;height:600px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Chap7.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1b9zuGe8SRmNQ6dN7K8tszUQqLb5qYA4M%26export%3Ddownload"></iframe>
                `,
                'tableContent': CA_chap6
            }
        }
    },
    {
        'id': 'computerNetwork',
        'label': 'Mạng máy tính',
        'chapter': {
            'CN_chap0': {
                'title': 'Tổng quan về mạng máy tính',
                'outside': `<iframe frameborder="0" style="width:100%;height:500px;" src="https://viewer.diagrams.net/?tags=%7B%7D&target=blank&highlight=0000ff&edit=_blank&layers=1&nav=1&title=ChapI.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1HMXNn5VEX5RB1m8W3Y2zxFTq1fpf-z3s%26export%3Ddownload"></iframe>`,
                'tableContent': {
                    'CN11': {
                        'title': 'Giới thiệu mạng máy tính',
                        'index': [
                            ['Khái niệm', 'CN111', `
                                <center>
                                    <img src="./assets/img/CN/CN1/khai_niem_CN.png" style="width:100%;">
                                </center>
                            `],
                            ['Máy tính và các thiết bị mạng', 'CN112', `
                                <center>
                                    <img src="./assets/img/CN/CN1/maytinh_va_cacthietbi.png" style="width:100%;">
                                </center>
                            `],
                            ['Kiến trúc mạng', 'CN113', `
                                <center>
                                    <img src="./assets/img/CN/CN1/kientrucmang.png" style="width:100%;">
                                </center>
                            `],
                            ['Giao thức mạng (protocol)', 'CN114', `
                                <center>
                                    <img src="./assets/img/CN/CN1/giaothucmang.png" style="width:100%;">
                                </center>
                            `],
                            ['Phân loại mạng', 'CN115', `
                                <center>
                                    <img src="./assets/img/CN/CN1/phanloaimang.png" style="width:100%;">
                                </center>
                            `],
                            ['Dịch vụ mạng', 'CN116', `
                            
                                <center>
                                    <img src="./assets/img/CN/CN1/dichvumang.png" style="width:100%;">
                                </center>
                            `],
                        ]
                    },
                    'CN12': {
                        'title': 'Cấu trúc mạng máy tính',
                        'index': [
                            ['Biên mạng', 'CN121', `
                                <center>
                                    <img src="./assets/img/CN/CN1/bienmang.png" style="width:100%;">
                                </center>
                            `],
                            ['Lõi mạng', 'CN122', `
                                <center>
                                    <img src="./assets/img/CN/CN1/loimang.png" style="width: 100%;">
                                </center>
                            `]
                        ]
                    },
                    'CN13': {
                        'title': 'Độ trễ, độ mất gói, thông lượng mạng chuyển mạch gói',
                        'index': [

                        ]
                    },
                    'CN14': {
                        'title': 'Kiến trúc phân tầng và mô hình OSI',
                        'index': [

                        ]
                    },
                    'CN15': {
                        'title': 'Mô hình TCP/IP',
                        'index': [

                        ]
                    },
                    'CN16': {
                        'title': 'Bài tập',
                        'index': [
                            ['Đề 1', 'CA161', `
                                R1 gửi một gói tin kích thước 512B tới nút mạng R2. Bỏ qua d(proc) và d(queuing), tính d(R1-to-R2) (tốc độ lan truyền trên liên kết là 3×l0^8 m/s).

                                <center>
                                    <img src="./assets/img/CN/CN1/de1.png" class="img-f-scale img-scale">
                                </center>

                                <br>
                                <h5>Giải</h5>
                                <br>
                                <center>
                                    <img src="./assets/img/CN/CN1/giai_de1.png" class="img-f-scale img-scale">
                                </center>

                                <br>
                                Bỏ qua d<sub>proc</sub> và d<sub>queuing</sub> => Cho 2 d này bằng 0
                                <br> Tính d<sub>trans</sub> và d<sub>prop</sub>, ta có: 
                                <ul>
                                    <li>d<sub>trans</sub> = L/R(s) = 512/100 (B/Mbps) = (512x8)/(100x10^6) (b/bps hay s)</li>
                                    <li>d<sub>prop</sub> = d/s = 150/3×l0^8</li>
                                </ul>
                                

                                <br>=> d<sub>nodal</sub> = 0 + 0 + d<sub>trans</sub> + d<sub>prop</sub> = (512x8)/(100x10^6) + (150/3×l0^8)
                                <br>
                                Tham khảo để chuyển Mbps thành bps <a href="https://thietbimaycongnghiep.net/mbps-la-gi/" target="_blank">Link</a>
                            `],
                            ['Đề 2', 'CA162', `
                                <p style="text-align: justify;">
                                Tính hai tham số quan trọng trong hiệu năng mạng máy tính là propagation delay và transmission delay. Cho hai nút mạng A và B kết nối bởi một liên kết có tốc độ là R bps. Giả sử hai nút mạng có khoảng cách là m mét và tốc độ lan truyền trên liên kết là s mét/giây. Nút mạng A gửi một gói tin kích thước L tới nút mạng B. <br>
                                a) Tính propagation delay, dprop, theo m và s <br>
                                b) Tính thời gian truyền của gói tin, dtrans, theo L và R <br>
                                c) Bỏ qua processing delay và queuing delay, tính the end-to-end delay <br>
                                d) Giả sử nút mạng A bắt đầu truyền gói tin tại t = 0. Tại t = d<sub>trans</sub>, bit cuối cùng của gói tin đang ở nút mạng A, trên đường truyền, hay đã tới nút mạng B? <br>
                                e) Giả sử d<sub>prop</sub> lớn hơn d<sub>trans</sub>. Tại t = d<sub>trans</sub>, bit đầu tiên của gói tin đang ở nút mạng A, trên đường truyền, hay đã tới nút mạng B? <br>
                                f) Giả sử d<sub>prop</sub> nhỏ hơn d<sub>trans</sub>. Tại t = d<sub>trans</sub>, bit đầu tiên của gói tin đang ở nút mạng A, trên đường truyền, hay đã tới nút mạng B? <br>
                                g) Giả sử s = 2,5 . 108 m/s, L = 120 bit, R = 56 kbps. Tìm khoảng cách m để dprop bằng d<sub>trans</sub>.                                
                                </p>
                                <br> 
                                a) d<sub>prop</sub> = L/R (s)
                                b) d<sub>trans</sub> = d/s (s)
                                c) t = 0 mà tốc độ truyền là R bps => bit cuối cùng của gói tin đang ở nút mạng A
                            `]
                        ]
                    }
                }
            },
            'CN_chap1': {
                'title': 'Tầng ứng dụng (Application layer)',
                'outside': `<iframe frameborder="0" style="width:100%;height:600px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#G1bqxF66L9o4BJ_VuHe11mWZWu_CSg6UCL"></iframe>`,
                'tableContent': CN01
            },
            'CN_chap2': {
                'title': 'Tầng giao vận (Transport layer)',
                'outside': `<iframe frameborder="0" style="width:100%;height:600px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=ChapIII_TransportLayer.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1txy2aMa8W4SMPZSbpfb_rqDZgRwreOz7%26export%3Ddownload"></iframe>`,
                'tableContent': CN02
            },
            'CN_chap3': { 'title': 'Tầng mạng (Network layer)', 'tableContent': CN03 },
            'CN_chap4': { 'title': 'Tầng liên kết (Link layer)', 'tableContent': CN04 },
        }
    },
    {
        'id': 'ComputerSystem',
        'label': 'Hệ thống máy tính',
        'chapter': {
            'CS_chap1': {
                'title': 'Tổng quan về hệ điều hành',
                'tableContent': CS01
            },
            'CS_chap2': {
                'title': 'Quản lý tiến trình',
                'tableContent': CS02
            },
            'CS_chap3': {
                'title': 'Lập lịch',
                'tableContent': CS03
            },
            'CS_chap4': {
                'title': 'Cấp phát và quản lý bộ nhớ',
                'outside': `
                    <h4>MỤC TIÊU BÀI HỌC</h4>
                    <ul>
                        <li>Nắm được các khái niệm cơ bản về bộ nhớ</li>
                        <li>Hiểu được các kiểu địa chỉ nhớ và cách chuyển đổi giữa các kiểu bộ nhớ</li>
                        <li>Hiểu được các cơ chế và mô hình quản lý bộ nhớ</li>
                    </ul>
                `,
                'tableContent': CS04
            },
            'CS_chap5': {
                'title': 'Hệ thống tệp tin',
                'outside': outside_CS5,
                'tableContent': Cs05
            }
        }
    },
    {
        'id': 'LTDT',
        'label': 'Lý thuyết đồ thị',
        'chapter': {
            'LTDT_chap1': {
                'title': 'Đại cương về đồ thị',
                'outside': `
                <iframe frameborder="0" style="width:100%;height:600px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Chap1.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1vmP8XybulFOfLNvGcwrt8KGN0ggM1mDp%26export%3Ddownload"></iframe>
                    <h2>Mục lục</h2>
                    <ul>
                        <li>1. Đồ thị và sự biểu diễn đồ thị</li>
                        <li>2. Đường đi, chu trình và tính liên thông</li>
                        <li>3. Các đơn đồ thị đặc biệt và sự đẳng cấu</li>
                    </ul>
                `,
                'tableContent': LTDT01
            },
            'LTDT_chap2': {
                'title': 'Các bài toán về đường đi',
                'outside': `
                `,
                'tableContent': LTDT02
            },
            'LTDT_chap3': {
                'title': 'Đồ thị phẳng',
                'outside': `
                    <h2>Giới thiệu</h2>
                    <center>
                        <img style="width: 100%;" src="./assets/img/LTDT/3/dothiphang.jpg" alt="dothiphang">
                    </center>
                    <p>Có thể vẽ đồ thị K<sub>3,3</sub> trên một mặt phẳng sao cho không có hai cạnh nào cặt nhau?</p>
                `,
                'tableContent': LTDT03
            },
            'LTDT_chap4': {
                'title': 'Cây',
                'outside': `
                    <h2>Nội dung</h2>
                    <ol>
                        <li>Các khái niệm cơ bản về cây</li>
                        <li>Cây nhị phân và phép duyệt cây</li>
                        <li>Bài toán tìm cây khung nhỏ nhất</li>
                    </ol>
                `,
                'tableContent': LTDT04
            }
        }
        // https://youtube.com/playlist?list=PLux-_phi0Rz3Kx5SPqIRyGR1gDVb5DY1x
    },
    {
        'id': 'webdesign',
        'label': 'Thiết kế Web',
        'chapter': {
            'Webdesign1': {
                'title': 'Tổng quan về thiết kế web',
                'outside': `
                    <h3>Mục tiêu ngược học đạt được</h3>
                    <ul>
                        <li>Xác định Internet và các thuật ngữ chính có liên quan</li>
                        <li>Nhận biết các giao thức Internet</li>
                        <li>Thảo luận về các trình duyệt web</li>
                        <li>Mô tả các loại và các mục đích của website</li>
                        <li>Xác định công cụ tạo trang web</li>
                        <li>Nhận diện các ngôn ngữ liên quan đến thiết kế và lập trình web</li>
                        <li>Tải và sử dụng một công cụ</li>
                        <li>Tạo và xem một trang web HTML</li>
                    </ul>     
                `,
                'tableContent': webdesign01,
            },
            'Webdesign2': {
                'title': 'Ngôn ngữ HTML',
                'outside': `
                    <h2>Mục tiêu người học đạt được:</h2>
                    <ul>
                        <li>Xác định cấu trúc trang HTML</li>
                        <li>Vận dụng các phần tử HTML</li>
                        <li>Xác định các thuộc tính của phần tử HTML</li>
                        <li>Sử dụng các đối tượng trong thiết kế giao diện
                            <ul>
                                <li>Văn bản - danh sách - bảng biểu</li>
                                <li>Âm thanh - video - hình ảnh</li>
                                <li>Liên kết - Frame</li>
                                <li>Biểu mẫu</li>
                            </ul>
                        </li>
                    </ul>
                `,
                'tableContent': webdesign02,
            },
            'Webdesign3': {
                'title': 'Bảng định kiểu CSS',
                'outside': `
                    <h2>Mục tiêu người học đạt được:</h2>
                    <ul>
                        <li>Xác định cú pháp CSS</li>
                        <li>Vận dụng linh hoạt các bộ chọn của CSS</li>
                        <li>Xác định cách chèn tài liệu vào trang HTML</li>
                        <li>Xác định cách chú thích trong tài liệu CSS</li>
                        <li>Vận dụng linh hoạt các thuộc tính của CSS
                            <br>
                            <ul>
                                <li>Văn bản: màu chữ, màu nền, font chữ, canh lề, kiểu chữ</li>
                                <li>Khung viền, khoảng cách lề, khoảng cách giữa nội dung và đường viền</li>
                            </ul>
                        </li>
                    </ul>
                `,
                'tableContent': webdesign03,
            },
            'Webdesign4': {
                'title': 'Ngôn ngữ Javascript',
                'outside': `
                    <h2>Mục tiêu người học đạt được</h2>
                    <ul>
                        <li>Xác định cách nhúng mã nguồn Javascript (JS) vào trang HTML</li>
                        <li>Xác định câu lệnh Javascript</li>
                        <li>Xác định cú pháp ngôn ngữ JS</li>
                        <li>Xác định cách chú thích trong tài liệu JS</li>
                        <li>Xác định cách khai báo biến</li>
                        <li>Xác định các phép toán, kiểu dữ liệu</li>
                        <li>Vận dụng phương pháp tổ chức mã nguồn theo hàm</li>
                        <li>Xác định các sự kiện và sử dụng các hộp thoại</li>
                        <li>Cài đặt hàm kiểm tra dữ liệu trên form</li>
                    </ul>
                `,
                'tableContent': webdesign04,
            },
            'Webdesign5': {
                'title': 'Thiết kế responsive',
                'outside': `
                    <h2>Mục tiêu người học đạt được</h2>
                    <ul>
                        <li>Xác định các thông tin tổng quan về Bootstrap</li>
                        <li>Biết cách tải và sử dụng Bootstrap</li>
                        <li>Sử dụng các đối tượng trong thiết kế giao diện
                            <br>
                            <ul>
                                <li>Grid, Typography, Table, Image</li>
                                <li>Navigation, Form Inputs, Button</li>
                            </ul>
                        </li>
                    </ul>
                `,
                'tableContent': webdesign05,
            }
        }

    },
    {
        id: 'LTXH',
        label: 'Lý thuyết xếp hàng',
        chapter: {
            LTXH1: {
                'title': 'Tổng quan về lý thuyết xếp hàng',
                'outside': ``,
                'tableContent': LTXH01 
            },
            LTXH2: {
                title: 'Lý thuyết xếp hàng',
                outside: `
                    <h4>Mục tiêu</h4>
                    <ul>
                        <li>Mục tiêu của chương này là trình bày những nguyên lý chung của Lý thuyết xếp hàng và phân tích tính toán
                            đối với một số hệ thống xếp hàng phổ biến trong thực tế như: M/M/1, M/M/2, và M/M/s</li>
                        <li>Bài toán đánh giá tính hiệu quả của hệ thống cũng sẽ được đề cập đến thông qua giá trị của thông số đặc
                            trưng</li>
                    </ul>
                    <h4>Nội dung</h4>
                    <ol>
                        <li>Lý thuyết xếp hàng</li>
                        <li>Hệ thống M/M/1</li>
                        <li>Hệ thống M/M/2</li>
                        <li>Hệ thống M/M/s</li>
                    </ol>
                `,
                tableContent: LTXH02
            },
            LTXH3: {
                title: 'Phân tích và đánh giá hệ thống',
                outside: ``,
                tableContent: LTXH03
            }
        }
    }
]

// console.log(Subject[0].chapter.CA_chap0.tableContent.P11.title)
// console.log(Object.keys(Subject[0].chapter.CA_chap0.tableContent))


