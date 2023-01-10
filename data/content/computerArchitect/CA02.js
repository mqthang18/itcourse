var CA_chap2 = {
    'CA21': {
        'title': 'Bộ nhớ bán dẫn',
        'index': [
            ['Phân loại các chip nhớ', 'CA211',
                `
                Chia bộ nhớ bán dẫn thành 3 loại chính:
                <ul>
                    <li>Bộ nhớ cố định (ROM)</li>
                    <li>Bộ nhớ bán cố định</li>
                    <li>Bộ nhớ đọc/ghi (RAM)</li>
                </ul>
                <center>
                    <img src="#" alt="So-do-phan-cap-bo-nho-trong-tinh">
                </center>
                <center>
                    <img src="#" alt="ROM-PROM-EPROM-EEPROM">
                </center>
                <center>
                    <img src="#" alt="SRAM-DRAM">
                </center>
            `
            ],
            ['Nguyên lí hoạt động của các linh kiện nhớ bán dẫn', 'CA212',
                `
            <h4>ROM</h4>
            <ul>
                    <li>Bộ nhớ chỉ đọc</li>
                    <li>Nội dung ghi bởi nhà sản xuất</li>
                    <li>Tạo ra từ các diode dẫn điện 1 chiều</li>
                    <li>Một ma trận các diode</li>
                    <li>Các điểm vắt chéo diode tương ứng bit 0</li>
                    <li>Các điểm còn lại tương ứng với bit 1</li>
            </ul>
            <center>
                <img src="#" alt="so-do-cau-tao-Rom">
            </center>
            <h4>FROM</h4>
            <ul>
                <li>Bộ nhớ chỉ đọc</li>
                <li>Cho phép người dùng ghi thông tin 1 lần</li>
                <li>Cấu tạo là các diode dẫn điện 1 chiều và các cầu trì</li>
                <li>Khi cần ghi thông tin 1 vào điểm nào thì cho dòng điện đủ lớn để làm đứt cầu trì</li>
            </ul>
            <center>
                <img src="#" alt="So-do-cau-tao-PROM">
            </center>

            <h4>EPPROM</h4>
            <ul>
                <li>Cho phép xóa, ghi thông tin nhiều lần</li>
                <li>Cấu tạo dựa trên các transistor MOS</li>
                <li>Dữ liệu ghi vào bằng xung điện 50 ms, +20V</li>
                <li>Xóa thông tin bằng các tia tử ngoại</li>
            </ul>
            <center>
                    <img src="#" alt="So-do-cau-tao-EPROM">
            </center>
            <h4>EEPROM</h4>
            Là hai loại EPROM có thể xóa dữ liệu bằng phương pháp điện

            <h4>RAM (Random Access Memory)</h4>
            <ul>
                    <li>Bộ nhớ đọc/ghi</li>
                    <li>Truy cập dữ liệu ngẫu nhiên</li>
                    <li>Dữ liệu mất khi mất điện</li>
            </ul>

            <h4>DRAM (Dynamic RAM)</h4>
            <ul>
                <li>Cấu trúc 1 bit Dram được tạo bởi 1 tụ điện (lưu trữ điện) và 1 transistor trường</li>
                <li>Transistor được sử dụng như 1 công tắc để chọn tụ điện</li>
                <li>Luôn có hiện tường rò điện từ tụ điện ra ngoài => chu kì làm tươi với DRAM</li>
            </ul>
            <center>
                    <img src="#" alt="so-do-cau-tao-DRAM">
            </center>

            <h4>SRAM (Static Random Access Memory)</h4>
            <ul>
                <li>Bộ nhớ đọc/ghi</li>
                <li>Các phần tử cơ bản của SRAM là mạch lật (Flip-Flop)</li>
                <li>Mỗi bit SRAM được tạo bởi 2 transistor trường</li>
                <li>SRAM không cần chu làm tươi</li>
            </ul>
            `
            ]
        ]
    },
    'CA22': {
        'title': 'Bộ nhớ chính',
        'index': [
            ['Tổ chức của một chip DRAM', 'CA221', `
                <b>Bộ nhớ DRAM là 1 ma trận bit nhớ. Tổ chức theo từ với sự lựa chọn tuyến tính</b>
                <ul>
                    <li>Bộ nhớ là 1 ma trận các từ nhớ</li>
                    <li>Số hàng: w (w từ nhớ)</li>
                    <li>Số cột: B (B bit nhớ cho 1 từ nhớ)</li>
                    <li>Cần một bộ nhớ giải mã hàng cho phép chọn một trong w từ</li>
                </ul>

                <b>Tổ chức theo kiểu giải mã 2 bước</b>
                <ul>
                    <li>Ma trận nhớ bao gồm w hàng (mỗi hàng là 1 S từ logic)</li>
                    <li>Mỗi từ logic gồm B bit (1 từ vật lí)</li>
                    <li>Cần 2 bộ giải mã: Giải mã hàng và bộ giải mã cột</li>
                </ul>
                <center>
                    <img src="#" alt="Giai-ma-hang-tu-1-den-4">
                </center>
                <b>Sơ đồ khối chip nhớ RAM</b>
                <ul>
                    <li>RAS: chân chọn hàng</li>
                    <li>CAS: Chân chọn cột</li>
                    <li>WE: Chân cho phép đọc/ghi dữ liệu</li>
                    <li>Mỗi chip nhớ thường có n hàng và m cột</li>
                    <li>N = m = 1024 thì chip nhớ có dung lượng 1 Mb và có 1.048.576 transistor</li>
                </ul>
            `],
            ['Các chế độ làm tươi DRAM', 'CA222', `
                Điện tích trên 1 tụ điện trong 1 ô nhớ của DRAM sẽ bị phóng điện => Số liệu bị thay đổi.
                <br>
                Khi đọc/ghi bộ nhớ thì DRAM được làm tươi tự động. 
                <br>
                <b>Chỉ kích hoạt RAS (RAS - Only - Refresh)</b>

                <b>Kích hoạt CAS trước RAS (CAS - before - RAS - refresh)</b>
                <br>
                <ul>
                        <li>DRAM sử dụng 1 mạch logic làm tươi riêng</li>
                        <li>Quá trình làm tươi được tự thực hiện bởi chip DRAM</li>
                        <li>Địa chỉ làm tươi được phát ra từ bên trong bởi bộ đệm địa chỉ</li>
                </ul>

                <b>Làm tươi ẩn (Hiden - Refresh)</b>
                <br>
                <ul>
                        <li>Chu kì làm tươi dấu sau chu kì đọc bộ nhớ</li>
                        <li>Bộ đếm phát ra địa chỉ làm tươi</li>
                </ul>
            `],
            ['Các chế độ làm tươi nhanh DRAM', 'CA223', `
                <ul>
                    <li>
                        <b>Chế độ trang</b>
                        <br>
                        <ul>
                            <li>Địa chỉ cột thay đổi, địa chỉ hàng giữ nguyên</li>
                            <li>Để khởi phát quá trình đọc, mạch điều khiển kích hoạt tín hiệu <span style="border-top: 1px solid black;">RAS</span> sau đó kích hoạt tín hiệu <span style="border-top: 1px solid black;">CAS</span> bị cấm trong 1 thời gian ngắn, sau đó được kích hoạt lại</li>
                        </ul>
                    </li>
                    <li>
                        <b>Chế độ cột tĩnh</b>
                        <ul>
                            <li>Tăng nhanh tốc độ làm tươi DRAM</li>
                            <li>Tín hiệu <span style="border-top: 1px;">CAS</span> giữ nguyên không đổi ở mức thấp</li>
                            <li>Mạch điều khiển DRAM tự phát hiện các thay đổi trên các tin hiệu cột</li>
                        </ul>
                    </li>
                    <li>Chế độ Nibble</li>
                    <li>Chế độ nối tiếp</li>
                    <li>Chế độ đan xen</li>
                </ul>
            `]
        ]
    },
    'CA23': {
        'title': 'Cơ chế quản lí bộ nhớ theo phân trang',
        'index': [
            ['Phương pháp phân trang bộ nhớ', 'CA231', `
                <ul>
                    <li>Bộ nhớ logic được chia thành các phần có kích thước bằng nhau gọi là các (Page)</li>
                    <li>Bộ nhớ vật lí được chia thành các phần bằng nhau và bằng kích thước của trang (Frame)</li>
                    <li>Hệ điều hành quản lí quá trình thực hiện chương trình qua các bảng trang (Page Table)</li>
                    <li>Bảng trang sẽ cho biết vị trí của các khung trang</li>
                    <li>Cấu trúc của hệ thống quản lí trang gồm 3 phần: Thư mục trang (Page directory), bảng trang (Page Table) và trang (Page)</li>
                    <li>Thư mục trang, bảng trang và trang có cùng kích thước là 4 KB</li>
                    <li>Thư mục trang</li>
                </ul>
                <p>Kích thước: 4 KB</p>
                <p>Chứa 1024 điểm vào (Page Directory Entry - PDE)</p>
                <p>PDE: kích thước 32 bit, 20 bit địa chỉ bảng trang</p>
                <p>Cấu trúc PDE</p>
                <center>
                        <img src="#" alt="dia-chi-bang-trang">
                </center>
                <p>Phần 20 bit địa chỉ bảng trang sẽ xác định bảng trang cần truy cập</p>
                <p>Phần 12 bit thấp luôn bằng 0</p>
                <p>Bit 1 và 2 của PDE xác định các mức đặc quyền và quyền đọc/ghi các trang</p>
            `],
            ['Cơ chế truy nhập bộ nhớ theo trang', 'CA232',
                `
            <center>
                <img src="#" alt="Co-che-phan-trang"></img>
            </center>
        `
            ]
        ]
    },
    'CA24': {
        'title': 'Bộ nhớ cache',
        'index': [
            ['Tổ chức bộ nhớ cache', 'CA241', `
                <ul>
                    <li>Cache là bộ nhớ đệm truy nhập nhanh</li>
                    <li>Đệm giữa CPU và RAM</li>
                    <li>Tốc độ cache nhanh hơn RAM</li>
                    <li>Dung lượng cache nhỏ hơn RAM</li>
                    <li>Cache được điều khiển bởi bộ điều khiển cache</li>
                    <li>Cache lưu trữ các dữ liệu thường xuyên được CPU dùng đến</li>
                    <li>Khi truy cập dữ liệu nếu dữ liệu đã có ở cache gọi là: Cache hit</li>
                    <li>Khi truy cập dữ liệu nếu dữ liệu không có ở cache gọi là: Cache miss

                        <center>
                            <img src="#" alt="so-do-bo-nho-cache">
                        </center>
                    </li>
                    <li>
                        <b>Tổ chức cache</b>
                        <ul>
                            <li>Bộ nhớ chính có 2<sup>n</sup> từ nhớ</li>
                            <li>Cache được chia thành C hàng (line), mỗi hàng có K từ nhớ</li>
                            <li>Bộ nhớ chính được chia thành M khối (block), mỗi khối có K từ nhớ M = <sup>2<sup>n</sup></sup>&frasl;<sub>K</sub>
                            <center>
                                <img src="#" alt="CPU-Bo-nho-cache-Bo-nho-chinh">
                            </center>
                            </li>
                        </ul>

                        <p>Ví dụ</p>
                        <p>Dung lượng cache 64 KB (m=16)</p>
                        <p>Mỗi hàng kích thước 4 bytes</p>
                        <p>C = 16 K (2<sup>14</sup>) hàng, mỗi hàng kích thước 4 bytes</p>
                        <p>M = <sup>2<sup>34</sup></sup>&frasl;<sub>4</sub> = 4 M (222) </p>
                    </li>
                </ul>
            `],
            ['Các thao tác đọc/ghi bộ nhớ khi có bộ nhớ cache', 'CA242', `
            <h4>Thao tác bộ đọc bộ nhớ</h4>
            <ul>
                <li>Bộ điều khiển cache đọc khối dữ liệu trong cache (số thứ tự trùng với số thứ tự khối trong địa chỉ trên bus)</li>
                <li>Bộ điều khiển cache xác định xem số hiệu thẻ của khối trong cache này có trùng với số hiệu thẻ trong địa chỉ bus không.</li>
                <li>Nếu trùng thì xảy ra cache hit -> một từ dữ liệu được đọc từ cache vào CPU. Ngược lại xảy ra cache miss -> một từ dữ liệu được đọc từ bộ nhớ chính (RAM)
                </li>
            </ul>
            <center>
                <img src="#" alt="du-lieu-ra-bus">
            </center>
           <h4>Ghi bộ nhớ</h4>
           <ul>
                <li>
                    <b>Write through</b>
                    <ul>
                        <li>Trường hợp cache hit: Thông tin trong cache và bộ nhớ chính đều được cập nhật (ghi đè)</li>
                        <li>Trường hợp cache miss: Thông tin được cập nhật vào bộ nhớ chính</li>
                    </ul>
                </li>
                <li>
                    <b>Write back</b>
                    <ul>
                        <li>Trường hợp cache hit: Dữ liệu chỉ được ghi vào cache mà chưa được ghi vào bộ nhớ chính và thiết lập cờ F.</li>
                        <li>Khi cần nạp dữ liệu khác từ bộ nhớ chính vào cache thì sẽ ghi các thành phần dữ liệu được đánh dấu trong cache vào bộ nhớ chính</li>
                    </ul>
                </li>
                <li>
                    <b>Các phương pháp ánh xạ bộ nhớ chính và bộ nhớ cache</b>
                    
                    <ul>
                        <li>Phương pháp ánh xạ trực tiếp (Direct mapping)</li>
                        <li>Mỗi block được ánh xạ tới 1 line duy nhất trong cache;</li>
                        <li>B<sub>j</sub>->L<sub>j mod m</sub></li>
                        <li>Địa chỉ N bit phát ra từ CPU gồm:
                            <ul>
                                <li>Trường word: W bit, xác định 1 từ nhớ trong block hay line</li>
                                <li>Trường Line: L bit, xác định một line trong cache</li>
                                <li>Trường Tag: T bit, T = N - (W+L)</li>
                            </ul>
                        </li>
                    </ul>
                    <center>
                        <img src="#" alt="Truong-Tag">
                    </center>
                    <center>
                        <img src="#" alt="Memory-address_Cache-miss_Main-memory">
                    </center>
                    <div>
                        <table>
                            <tr>
                                <th>Cache line</th>
                                <th>Main memory blocks</th>
                            </tr>
                            <tr>
                                <td>0</td>
                                <td>0, C, 2C, 3C,..., 2<sup>2</sup>-C</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1, C+1, 2C+1,..., 2<sup>S</sup>-C+1</td>
                            </tr>
                            <tr>
                                <td>C-1</td>
                                <td>C-1,2C-1,...,2<sup>S</sup>-1</td>
                            </tr>
                        </table>
                    </div>
                    <b>Ưu điểm</b>
                    <ul>
                        <li>Đơn giản</li>
                        <li>Chi phí ít</li>
                    </ul>

                    <b>Nhược điểm</b>
                    <br>
                    Các block phải đặt vào các line cố định trong cache -> tỉ lệ cache miss cao
                    <ul>
                        <li>Phương pháp ánh xạ liên kết tập hợp</li>
                        <li>Mỗi tập (set) gồm 1 số line: 2,4,...line/1 set</li>
                        <li>Cache được chia thành các tập (Set)</li>
                        <li>Thường được dùng nhóm gồm 2 hàng (2 - way set associative cache system)</li>
                        <li>Mỗi block sẽ được ánh xạ vào một set xác định</li>
                    </ul>
                </li>
           </ul>
           <p><i>B<sub>0</sub>->S<sub>0</sub></i></p>
           <p><i>B<sub>1</sub>->S<sub>1</sub></i></p>
           <p><i>B<sub>2</sub>->S<sub>2</sub></i></p>
           <p>N bit địa chỉ được chia thành:</p>
           <ul>
            <li>T bit cho trường Tag</li>
            <li>W bit cho trường Word, xác định 1 từ trong block hay line</li>
            <li>S bit cho trường Set, xác định 1 set trong cache</li>
           </ul>
           <center>
                <img src="#" alt="Bo-nho-chinh">
           </center>

           <br>
           Ví dụ. <br>
           Đề
           <p>- Bộ nhớ chính: 4 GB</p>
           <p>- Dung lượng cache: 256 KB</p>
           <p>- Kích thước line: 32 byte</p>
           <p>Xác định địa chỉ cho các trường W (Word), T (Tag), L (Line)?</p>
           <hr>
           <p>4 GB = 2<sup>32</sup> => N = 32 bit</p>
           <p>Line = 32 byte = 2<sup>5</sup>=>W=5</p>
           <p>Số line trong cache = <sup>2<sup>18</sup></sup>/<sub>2<sup>5</sup></sub></p> = 2<sup>13</sup> LINE (256 KB = 2<sup>18</sup> bytes)

           <p>Một set có 4 LINE = 2<sup>2</sup> LINE</p>
           <p>Số set trong cache là: <sup>2<sup>13</sup></sup>/<sub>2<sup>2</sup></sub>=2<sup>11</sup>=>S=11</p>
           <p>T=32-(11+5)=16</p>
           <center>
            <img src="#" alt="Anh-minh-hoa-ket-qua">
           </center>
            `],
            ['Phương pháp ánh xạ liên kết toàn phần', 'CA243', `
            <p>Mỗi block có thể nạp vào 1 line bất kỳ trong cache</p>
            <p>Trường địa chỉ gồm 2 thành phần</p>
            <ul>
                 <li>Trường Word: Xác định một từ trong line hay block</li>
                 <li>Trường Tag: Xác định block của bộ nhớ chính</li>
                 <li>So sánh trường Tag với tất cả các Tag trong bộ nhớ chính</li>
            </ul>
            <center>
                 <img src="#" alt="cache-miss_Bonhochinh">
            </center>
            `]
        ]
    }
}

