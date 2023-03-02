

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
                'outside': `
                    <h4>Mục tiêu</h4>
                    <ul>
                        <li>Hiểu và nắm vững các khái niệm lý thuyết xếp hang, xích Markov
                            và các định nghĩa, đặc trưng của phân phối xác xuất.</li>
                        <li>Nắm cơ bản các phương pháp dự báo và đồ thị cân bằng</li>
                    </ul>
                    <h4>Nội dung</h4>
                    <ol>
                        <li>Khái niệm
                            <ul>
                                <li>Lý thuyết xếp hàng</li>
                                <li>Xích Markov</li>
                                <li>Các khái niệm xác xuất cơ bản</li>
                            </ul>
                        </li>
                        <li>
                            Các phương pháp
                            <ul>
                                <li>Hệ thức Chapman-Kolmogorov và dự báo ngắn hạn</li>
                                <li>Phân phối dừng và dự báo dài hạn</li>
                            </ul>
                        </li>
                        <li>Phương pháp Đồ thị cân bằng ngẫu nhiên</li>
                    </ol>
                `,
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
                outside: `
                <h2>Mục tiêu</h2>
                <p>Hiểu được các tham số, các yếu tố ảnh hưởng đến một hệ thống hàng chờ thông qua một số ví dụ cụ thể</p>
                <h2>Nội dung</h2>
                <ol>
                    <li>Mô hình mạng các hàng chờ</li>
                    <li>Mạng đơn với 1 hàng chờ</li>
                    <li>Mạng đa liên kết các trung tâm phục vụ</li>
                    <li>Mô hình mạng đa lớp</li>
                    <li>Ứng dụng mô hình xếp hàng</li>
                </ol>
                `,
                tableContent: LTXH03
            },
            LTXH4: {
                title: 'Các công thức cần nhớ',
                outside: `
                    <p>Công thức cần nhớ: <a href="https://docs.google.com/document/d/1xCQO9RyL4ueG8OD6S7GlI_rYYg9FGoPhdgBrYuILUEE/edit?usp=sharing" target="_blank">Link</a></p>
                    <p>Các bài toán chương 2: <a href="https://docs.google.com/document/d/1UcDCdMaDPLKsEhFYcwS9sLukmwOUTq4HJfHFF3JpOFA/edit?usp=sharing" target="_blank">Link</a></p>
                    <p>Các bài toán chương 3: <a href="https://docs.google.com/document/d/1XNgezU9buR0hyVZqajnUK3iw9rHBNQttcBAcb_1lunw/edit?usp=sharing" target="_blank">Link</a></p>
                `,
                tableContent: ''
            }
        }
    }, 
    {
        id: 'TMDT',
        label: 'Thương mại điện tử',
        chapter: {
            TMDT1: {
                title: 'Tổng quan về thương mại điện tử',
                outside: `
                    <h2>Tình huống khởi động bài</h2>
                    <div id="TinhHuongKhoiDong">
                        <p>Theo Hiệp hội Thương mại điện tử Việt Nam (VECOM), thương mại điện tử nước ta năm 2020 tăng trưởng
                            khoảng 15% so với 2019, đạt quy mô khoảng 13,2 tỷ USD và tiếp tục tăng trưởng vững chắc trong năm 2021
                            ở mức trên 30% và đạt quy mô 15 tỷ USD. Tốc độ tăng trưởng trung bình của thương mại điện tử giai đoạn
                            2016 – 2019 khoảng 30%</p>
                        <p>Theo Báo cáo Thương mại điện tử Đông Nam Á 2020 của Google, Temasek và Bain&Company, thương mại
                            điện tử Việt Nam năm 2020 tăng 16% và đạt quy mô trên 14 tỷ USD. Trong đó, lĩnh vực bán lẻ hàng hóa trực
                            tuyến tăng 46%, gọi xe và đồ ăn công nghệ tăng 34%, tiếp thị, giải trí và trò chơi trực tuyến tăng 18%, riêng
                            lĩnh vực du lịch trực tuyến giảm 28%. Báo cáo này cũng dự đoán tốc độ tăng trưởng trung bình giai đoạn 2020
                            – 2025 là 29% và tới năm 2025 quy mô thương mại điện tử nước ta đạt 52 tỷ USD.</p>
                        <p>Theo Hội thẻ Ngân hàng Việt Nam, doanh số thanh toán chi tiêu theo kênh thương mại điện tử sáu tháng đầu
                            năm 2020 tăng trưởng 17%. Trong đó, doanh số thanh toán chi tiêu thẻ nội địa theo kênh thương mại điện tử
                            tăng tới 81%. Ngược lại, chi tiêu thẻ quốc tế tại kênh thương mại điện tử giảm 16%.
                            Câu hỏi: Lĩnh vực bán lẻ trực tuyến gọi xe, đồ ăn được thực hiện thông qua hệ thống mạng Internet, Intranet
                            hay Extranet?
                            2</p>
                    </div>
                    
                    <h2>Mục tiêu bài học</h2>
                    <ul>
                        <li>Hiểu được thế nào là giao dịch thương mại điện tử</li>
                        <li>Nắm được các cách phân loại thương mại điện tử</li>
                        <li>Hiểu các điều kiện để thương mại điện tử phát triển được</li>
                        <li>Biết phân biệt và áp dụng các mô hình doanh thu thương mại điện tử</li>
                        <li>Hiểu các giai đoạn phát triển của thương mại điện tử.</li>
                    </ul>
                
                    <h2>Cấu trúc nội dung</h2>
                    <div>
                        <p>1.1. Định nghĩa và đặc trưng của thương mại điện tử</p>
                        <p>1.2. Các loại hình giao dịch trong thương mại điện tử</p>
                        <p>1.3. Lợi ích và hạn chế của thương mại điện tử</p>
                        <p>1.4. Ảnh hưởng của thương mại điện tử</p>
                        <p>1.5. Điều kiện để phát triển thương mại điện tử</p>
                    </div>
            
                `,
                tableContent: TMDT01
            },
            TMDT2: {
                title: 'Nền tảng hạ tầng của thương mại điện tử',
                outside: `
                    <h2>Tính huống khởi động bài</h2>
                    <ul>
                        <li>Amazon là một công ty công nghệ quốc gia của Mỹ được thành lập vào năm 1994 tại Bellevue, Washington
                            do Jeff Bezos sáng lập, tập trung chủ yếu vào các hoạt động thương mại điện tử, trí tuệ nhân tạo cũng như
                            điện toán đám mây. Ngày nay, Amazon được xem là một trong 4 ông lớn của công nghệ thế giới, bên cạnh
                            Google, Apple và Facebook.</li>
                        <li>Ban đầu từ mảng bán sách, Amazon đã mở rộng thêm đa dạng lĩnh vực từ bán sách trực tuyến, cung cấp
                            video, âm thanh (mp3), audiobook,... đến các sản phẩm công nghệ như phần mềm, trò chơi, đồ may mặc,
                            thực phẩm, trang sức,... Từ một nhà sách trực tuyến phục vụ nhu cầu mua bán và trao đổi hàng hóa trên
                            internet, sau nhiều năm phát triển, giờ đây, Amazon đã trở thành một trong các công ty hàng đầu về lĩnh
                            vực thương mại điện tử đa quốc gia trên toàn thế giới</li>
                        <li>Hiện nay, “Amazon” đã trở thành một trong những tập đoàn bán lẻ trực tuyến hàng đầu thế giới nổi tiếng
                            trên toàn thế giới, với doanh số bán hàng chiếm khoảng 44% tổng doanh số thương mại điện tử tại Hoa Kỳ.</li>
                        <li>Cơ sở hạ tầng đám mây toàn cầu AWS là nền tảng đám mây bảo mật, rộng lớn và đáng tin cậy nhất, cung
                            cấp trên 200 dịch vụ với đầy đủ tính năng từ các trung tâm dữ liệu trên toàn cầu.
                            <br>
                            Câu hỏi: AWS là gì?
                        </li>
                    </ul>
                
                    <h2>Mục tiêu bài học</h2>
                    <ul>
                        <li>Hiểu về mạng máy tính, các loại mạng máy tính, mạng Internet và một số thuật ngữ về internet ứng dụng trong thương mại điện tử</li>
                        <li>Biết và trình bày được những nguyên lý cơ bản về xây dựng hệ thống website thương mại điện tử trong doanh nghiệp.</li>
                        <li>Hiểu và phân biệt được một số mô hình website thương mại điện tử và website bán hàng điển hình.</li>
                        <li>Hiểu và trình bày được quy trình xây dựng kế hoạch kinh doanh điện tử.</li>
                        <li>Thực hành xây dựng website bằng wordpress.</li>
                    </ul>

                    <h2>Cấu trúc nội dung</h2>
                    <div>
                        <p>2.1. Tổng quan về cơ sở hạ tầng của thương mại điện tử</p>
                        <p>2.2. Hạ tầng công nghệ của thương mại điện tử</p>
                        <p>2.3. website thương mại điện tử</p>
                        <p>2.4. Ứng dụng wordpress xây dựng website thương mại điện tử</p>
                    </div>
                `,
                tableContent: TMDT02
            },
            TMDT3: {
                'title': 'Các mô hình kinh doanh trong thương mại điện tử',
                'outside': `
                    <h2>TÌNH HUỐNG KHỞI ĐỘNG BÀI</h2>
                    <div>
                    <p>Thương mại điện tử Tiki kinh doanh theo mô hình kết nối giữa doanh nghiệp, người bán hàng nhỏ lẻ với người
                        tiêu dùng nhằm tạo sự nhanh chóng, thuận tiện, tiết kiệm thời gian cho quá trình mua sắm trực tuyến.</p>
                    <p>Trên thương mại điện tử Tiki hiện nay có rất nhiều cá nhân, doanh nghiệp, các nhãn hàng, thương hiệu với đủ
                        sản phẩm khác nhau tham gia kinh doanh.</p>
                    <p>Khách hàng có thể dễ dàng thấy một sản phẩm cùng lúc nhưng với các mức giá khác nhau. Do đó, dù là mua
                        sắm offline hay online, người tiêu dùng cần tìm hiểu kỹ các thông tin sản phẩm, xem review, bình luận từ
                        những người mua trước để tránh mua sản phẩm kém chất lượng.</p>
                    <p>Về phía Tiki cũng đã và đang kiểm soát chặt chẽ về chất lượng sản phẩm của người bán. Đồng thời cũng gợi
                        ý những thương hiệu, nhãn hàng được kiểm duyệt để giúp khách hàng yên tâm hơn.</p>
                    <p>Câu hỏi: Mô hình của Tiki là mô hình kinh doanh nào?</p>
                    </div>
                
                    <h2>MỤC TIÊU BÀI HỌC</h2>
                    <ul>
                    <li>Giúp sinh viên hiểu về loại hình kinh doanh B2C, B2B, B2C.</li>
                    <li>Hiểu thế nào là giao dịch TMĐT B2C.</li>
                    <li>Hiểu được các yếu tố thúc đẩy phát triển TMĐT B2B.</li>
                    <li>Hiểu được bản chất khái niệm TMĐT B2B.</li>
                    <li>Biết cách tìm hiểu thông tin về giao dịch TMĐT B2C của Việt Nam và thế giới.</li>
                    <li>Nắm bắt được các loại công nghệ ứng dụng trong giao dịch điện tử bán lẻ.</li>
                    <li>Nắm bắt xu hướng biến đổi trong giao dịch điện tử bán lẻ B2C.</li>
                    <li>Nắm được những ưu điểm, nhược điểm của giao dịch B2B.</li>
                    <li>Ứng dụng TMĐT B2B trong các hoạt động TMQT.</li>
                    </ul>
                
                    <h2>CẤU TRÚC NỘI DUNG</h2>
                    <div>
                    <p>3.1 Thị trường trong thương mại điện tử</p>
                    <p>3.2 Một số mô hình kinh doanh chủ yếu trong thương mại điện tử B2C</p>
                    <p>3.3 Một số mô hình kinh doanh chủ yếu trong thương mại điện tử B2B</p>
                    <p>3.4 Chính phủ điện tử</p>
                    </div>
                `,
                'tableContent': TMDT03
            },
            TMDT4: {
                'title': 'Thanh toán trong thương mại điện tử',
                'outside': `
                    <h2>TÌNH HUỐNG KHỞI ĐỘNG BÀI</h2>
                    <div>
                        <p>Nhằm giảm thiểu ô nhiễm môi trường và giải quyết vấn đề tắc nghẽn giao thông, Ủy ban nhân dân Thành phố
                            Hà Nội phát động chương trình “Tháng không khói xe”. Căn cứ vào chương trình này, công ty sản xuất xe đạp
                            A đã cung cấp dịch vụ cho thuê xe đạp trực tuyến. Công ty A triển khai dịch vụ này tới 30 điểm cho thuê trong
                            nội thành Hà Nội, khách hàng có nhu cầu thuê xe đạp sẽ lên website để xem kiểu dáng sản phẩm, điểm thuê
                            nào phù hợp nhất với lộ trình, điều kiện thuê và chi phí, các điều kiện và điều khoản trong hợp đồng ký kết...
                            sau đó sẽ kê khai thông tin chi tiết và ký hợp đồng thuê xe</p>
                        <p><b>Câu hỏi</b></p>
                        <p>Các hình thức thanh toán trực tuyến nào có thể được công ty A sử dụng để chấp nhận thanh toán từ phía
                            khách hàng và thực hiện hợp đồng?</p>
                    </div>
                    
                    <h2>MỤC TIÊU BÀI HỌC</h2>
                    <ul>
                        <li>Xác định được các công cụ/công nghệ sử dụng trong thanh toán trực tuyến, các rủi ro có thể xảy ra</li>
                        <li>Hiểu được giao dịch thanh toán thẻ, các thương hiệu thẻ quốc tế, và hệ thống vận hành giao dịch sử dụng thẻ</li>
                    </ul>
                
                    <h2>CẤU TRÚC NỘI DUNG</h2>
                    <div>
                        <p>4.1 Các công cụ thanh toán trực tuyến</p>
                        <p>4.2 Thẻ thanh toán</p>
                        <p>4.3 Các công cụ thanh toán khác</p>
                    </div>
                `,
                'tableContent': TMDT04
            },
            TMDT5: {
                'title': 'Chiến lược kinh doanh thương mại điện tử và marketing trực tuyến',
                'outside': `
                    <h2>Tình huống khởi động bài</h2>
                    <div>
                        <p>Tequila Cascahuin được thành lập năm 1904 tại Jalisco, Mexico. Năm 1999 công ty sử dụng 80 lao động, chủ yếu
                            phục vụ công việc trồng cây và chưng cất tinh dầu. Vào giữa năm 1998, công ty đưa lên mạng một website có hai
                            ngôn ngữ là Tiếng Anh và Tây Ban Nha và khuếch trương bằng cách giới thiệu nó cho các phòng thương mại, các
                            trung tâm thương mại thế giới và các nhà nhập khẩu. Website của công ty cũng được đăng ký trên các danh bạ về
                            ngành rượu bia. Trong vòng một năm, công ty đã giành được nhiều khách hàng mới từ Achentina, Trung Quốc,
                            Pháp, Philippine, Mỹ với kết quả là doanh số bán hàng bổ sung lên tới 3,5 triệu USD/năm.</p>
                        <ul>
                            <li>Điểm mạnh: Được công nhận và ổn định như một doanh nghiệp có tiếng tăm ở Mexico cung cấp loại rượu Tequila
                                tốt nhất</li>
                            <li>Điểm yếu: Nhận thư điện tử mất nhiều thời gian, nhưng chiến lược thư điện tử cũng lại là nguyên nhân cho sự
                                thành công của công ty.</li>
                            <li>Cơ hội: Mở rộng hoạt động của công ty thông qua việc sử dụng Internet và tiếp thị bằng thư điện tử</li>
                            <li>Thách thức: Ngày càng có nhiều công ty hiểu ra sức mạnh của chiến lược tiếp thị bằng thư điện tử và điều đó làm
                                cho chiến lược của công ty không còn là độc nhất nữa và hiệu quả của nó sẽ giảm đi</li>
                        </ul>
                        <p>Câu hỏi: Công ty Tequila Cascahuin đã sử dụng kỹ thuật chiến lược nào để làm rõ mục tiêu đầu tư và xác định
                            những yếu tố khách quan – chủ quan có thể ảnh hưởng đến quá trình đạt được mục tiêu đó?</p>
                    </div>
                    
                    <h2>Mục tiêu bài học</h2>
                    <ul>
                        <li>Hiểu được khái niệm về chiến lược kinh doanh thương mại điện tử trong doanh nghiệp.</li>
                        <li>Biết được chu trình xây dựng chiến lược trong doanh nghiệp.</li>
                        <li>Áp dụng được các mô hình phân tích các yếu tố ảnh hưởng đến hoạt động kinh doanh thương mại điện tử
                        của doanh nghiệp.</li>
                        <li>Hiểu được marketing trực tuyến ảnh hưởng như thế nào tới chiến lược kinh doanh thương mại điện tử.</li>
                        <li>Triển khai được một số hoạt động liên quan đến marketing trực tuyến</li>
                    </ul>
                    
                    <h2>Cấu trúc nội dung</h2>
                    <div>
                        <p>5.1 Chiến lược kinh doanh thương mại điện tử</p>
                        <p>5.2 Phân tích thị trường</p>
                        <p>5.3 Marketing trực tuyến</p>
                        <p>5.4 Mối quan hệ giữa thương mại điện tử và marketing trực tuyến</p>
                    </div>
                `,
                'tableContent': TMDT05
            },
            TMDT6: {
                'title': 'An ninh/an toàn thương mại điện tử',
                'outside': `                
                    <h2>TÌNH HUỐNG KHỞI ĐỘNG BÀI</h2>
                    <div>
                        <p>Trong bài nghiên cứu đăng trên trang web của Viện Chính sách công và các vấn đề toàn cầu của Canada,
                            Ông Pesic, chuyên gia về các vấn đề chính trị, kinh tế, quốc phòng và an ninh cho rằng, thương mại điện tử là
                            lĩnh vực đang phải đối mặt với các mối đe dọa an ninh mạng nhiều nhất, bao gồm cả những ảnh hưởng đến
                            tính riêng tư, chủ quyền dữ liệu, vị trí của các trung tâm dữ liệu, an ninh dữ liệu và luật pháp. Cách đây 30
                            năm, chỉ có 32% giá trị thị trường của 500 công ty dựa trên các tài sản vô hình, chủ yếu là sở hữu trí tuệ. Ngày
                            nay, con số này là 80%, đặt ra vấn đề bảo vệ những tài sản này trước nguy cơ bị tội phạm mạng đánh cắp là
                            điều quan trọng. Do đó, an ninh mạng nhằm bảo vệ quyền sở hữu trí tuệ có tầm quan trọng lớn hơn đối với
                            doanh nghiệp, Chính phủ và giới học giả.</p>
                        <p>Theo ông Pesic, các doanh nghiệp thương mại điện tử phải tự bảo vệ mình bằng cách đảm bảo an ninh cho
                            hệ thống máy tính, kênh truyền thông, máy chủ và mã hóa dữ liệu của khách hàng. Bảo vệ nên bắt đầu với
                            các chiến dịch giáo dục về phạm vi và các loại rủi ro xâm nhập khu vực thương mại điện tử và các thành phố
                            thông minh bằng cách sử dụng mạng Internet.</p>
                        <p>Câu hỏi: Theo ông Pesic, các doanh nghiệp thương mại điện tử phải tự bảo vệ mình bằng cách đảm bảo an
                            ninh như mã hóa dữ liệu của khách hàng, vậy có thể mã hóa như thế nào?</p>
                    </div>

                    <h2>Mục tiêu bài học</h2>
                    <ul>
                        <li>Nhận diện được những rủi ro về an ninh, an toàn trong kinh doanh thương mại điện tử.</li>
                        <li>Nắm được các phương pháp phòng rủi ro về an ninh, an toàn thương mại điện tử.</li>
                        <li>Hiểu được các giải pháp an ninh/an toàn dành cho thương mại điện tử.</li>
                    </ul>

                    <h2>Cấu trúc nội dung</h2>
                    <div>
                        <p>6.1 Rủi ro trong thương mại điện tử</p>
                        <p>6.2 Các đặc điểm có thể phát sinh rủi ro</p>
                        <p>6.3 Một số giải pháp đảm bảo an ninh trong thương mại điện tử</p>
                        <p>6.4 Chính sách và pháp luật của Việt Nam về thương mại điện tử</p>
                    </div>
                `,
                'tableContent': TMDT06
            },
            TMDT7: {
                title: 'Một số câu hỏi khó nhớ',
                outside: `
                    <p>Tên tổ chức: <a href="https://docs.google.com/document/d/1yTep71iose10AHzfhZ_11to2N_ZgVH76pGo-JsT3cWY/edit?usp=sharing" target="_blank">Link</a></p>
                    <p>Các bộ luật: <a href="https://docs.google.com/document/d/1h49H021GAQVn-cGdmSNZrlieBLS2r8xZHCcGMfcdVRc/edit?usp=sharing" target="_blank">Link</a></p>
                    <p>Các hình thức kinh doanh điện tử: <a href="https://docs.google.com/document/d/1t9TZ1bR42eJ4D5WOs8ORiFVwWJ6nT6F3Q8kvreZdYsY/edit?usp=sharing" target="_blank">Link</a></p>
                `,
                tableContent: {}
            }
        }
    },
    {
        id: 'PTTKHT',
        label: 'Phân tích thiết kế hệ thống',
        chapter: {
            PTTKHT1: {
                title: `Tổng quan về phân tích, thiết kế hệ thống thông tin`,
                outside: `
                <div>
                    <h3>Tình huống khởi động bài</h3>
                    <p>Ngày nay, ứng dụng công nghệ thông tin vào các hoạt động sản xuất, kinh doanh của doanh nghiệp đã mang
                    lại những hiệu quả nhất định. Việc ứng dụng công nghệ thông tin không chỉ đơn giản là áp dụng tốt cho hoạt
                    động sản xuất kinh doanh của doanh nghiệp mà chúng ta không thể phủ nhận vai trò của CNTT trong các hoạt
                    động cũng như lĩnh vực của đời sống xã hội. Hiện nay các trang web thương mại điện tử trên thế giới cũng
                    như ở Việt Nam đã áp dụng hết sức thành công. Ví dụ: 10 năm trở về trước trang web Amazon là một trang
                    web hết sức hiệu quả, Amazon đang kinh doanh thua lỗ đã trở nên lãi khoảng 70.000.000$/năm. Ngoài ra,
                    Ebay, Shopee hay những trang web thương mại điện tử khác ở Việt Nam như: Vật giá, Chợ điện tử, Tiki,
                    Lazada.vn, Sendo.vn... cũng đang phát triển rất thành công.</p>
                    <p>Câu hỏi: Các website thương mại điện tử (Amazon, Ebay, Shopee, Vật giá, Chợ điện tử, Tiki, Lazada.vn,
                    Sendo.vn) trên có phải hệ thống thông tin không? Nó có vai trò như thứ nào đối với doanh nghiệp?</p>
                </div>
                
                <div>
                    <h3>Mục tiêu bài học</h3>
                
                    <ul>
                    <li>Trình bày được định nghĩa, đặc điểm, các thành phần của hệ thống thông tin, các mô hình, chu kỳ và các giai
                        đoạn phát triển hệ thống thông tin như mô hình thác nước (waterfall), mô hình lặp, mô hình tăng trưởng, quy
                        trình phát triển hệ thống thông tin,...</li>
                    <li>Xác định được bản chất, vai trò và vị trí của hệ thống thông tin quản lý trong một tổ chức.</li>
                    <li>Tổng quan được cách thức tiến hành theo từng bước để phát triển được một hệ thống thông tin có hiệu quả và
                        hiệu lực cho một tổ chức kinh tế xã hội.</li>
                    <li>Chỉ ra được phác họa những nguyên nhân cơ bản của yêu cầu đổi mới hệ thống thông tin.</li>
                    <li>Xác định được cơ cấu tổ chức và vai trò của đội ngũ phát triển hệ thống thông tin quản lý</li>
                    </ul>
                </div>
                
                <div>
                    <h3>Cấu trúc nội dung</h3>
                
                    <ol>
                    <li>Tổng quan về hệ thống thông tin</li>
                    <li>Phát triển hệ thống thông tin</li>
                    <li>Các mô hình phát triển hệ thống thông tin</li>
                    <li>Quy trình phát triển hệ thống thông tin</li>
                    <li>Quy trình tổng quát phân tích và thiết kế hệ thống thông tin</li>
                    </ol>
                </div>
                `,
                tableContent: PTTKHT1
            },
            PTTKHT2: {
                title: `Khảo sát và lập kế hoạch`,
                outside: ``,
                tableContent: PTTKHT2
            },
            PTTKHT3: {
                title: `Phân tích hệ thống hướng chức năng`,
                outside: ``,
                tableContent: PTTKHT3
            },
            PTTKHT4: {
                title: `Thiết kế hệ thống`,
                outside: ``,
                tableContent: PTTKHT4
            },
            PTTKHT5: {
                title: `Thiết kế cơ sở dữ liệu`,
                outside: ``,
                tableContent: PTTKHT5
            },
            PTTKHT5: {
                title: `Phân tích và thiết kế hệ thống thông tin theo hướng đối tượng`,
                outside: ``,
                tableContent: PTTKHT6
            }
        }
    }
]

// console.log(Subject[0].chapter.CA_chap0.tableContent.P11.title)
// console.log(Object.keys(Subject[0].chapter.CA_chap0.tableContent))


