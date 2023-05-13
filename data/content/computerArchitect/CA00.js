var CA_chap0 = {
    'CA01': {
        'title': 'Máy tính và các thành phần cơ bản của máy tính',
        'index': [
            ['Một số khái niệm cơ bản và phân loại máy tính', 'CA011', `
            - <span style="font-weight: 500;">Máy tính</span>: là một thiết bị có khả năng thực hiện các phép tính và các hoạt động logic. Hầu hết các tính đều là máy tính điện tử. <br>
            - <span style="font-weight: 500;">Nguyên tắc cơ bản của máy tính điện tử</span>: Hoạt động theo chương trình được lưu trữ trong bộ nhớ của máy tính. <br>
            - <span style="font-weight: 500;">Phân loại máy tính điện tử:</span> <br>
            + Máy tính lớn (mainframe); <br>
            + Máy tính cỡ trung bình (minicomputer); <br>
            + Máy vi tính (microcomputer), máy tính cá nhân (Personal computer - PC).   
            `],
            ['Sơ đồ khối và nguyên tắc thông tin tín hiệu trong máy tính', 'CA012', `
                <span style="font-weight: 600;">Sơ đồ khối của máy tính</span>
                <ol>
                    <li>Màn hình</li>
                    <li>Modem</li>
                    <li>Hệ thống xử lí</li>
                    <li>Chuột</li>
                    <li>Loa</li>
                    <li>Máy in</li>
                    <li>Bàn phím</li>
                </ol>
                <br>
                <p>
                Một hệ thống máy tính thường có <span style="font-weight: 700;">3 thành phần cơ bản</span>: <span style="color: red;">Bộ vi xử lý</span> + <span style="color: green;">Bộ nhớ</span> + <span style="color: blue;">Thiết bị ngoại vi</span>
                </p>
                <center>
                    <img class="img-scale" src="./assets/img/CA/CA01/ComponentsComputer.png" alt="ComponentsComputer">
                </center>
                <p>Sơ đồ tổng thể của hệ thống máy tính</p>
                <span style="font-weight: 700;">Nguyên tắc thông tin tín hiệu giữa CPU và các thành phần trong máy tính</span>
                <br>
                <p>CPU trao đổi tín hiệu với các thành phần qua hệ thông BUS.</p>
                <p>BUS: là một hệ thống các đường truyền tín hiệu, mỗi đường truyền 1 bit tín hiệu</p>
                <p>Hệ thống máy tính thường có 3 loại BUS:</p>
                <ol>
                    <li>Bus địa chỉ</li>
                    <li>Bus dữ liệu</li>
                    <li>Bus điều khiển</li>
                </ol>
            `],
            ['Các thiết bị ngoại vi cơ bản', 'CA013', `
                Các thiết bị tạo môi trường tương tác giữa người dùng và hệ thống máy tính <br>
                Các thiết bị vào <br>
                Các thiết bị ra
            `]
        ]
    },
    'CA02': {
        'title': 'Các phép tính số trong máy vi tính',
        'index': [
            ['Các hệ đếm', 'CA021', `
                <p><span style="font-weight: 600;">Hệ đếm thông dụng của con người</span></p>
                <ul>
                    <li>Sử dụng 10 kí hiệu là 10 con số;</li>
                    <li>Các số được biểu diễn theo cách kí hiệu theo vị trí;</li>
                    Số X = a<sub>n</sub>a<sub>n-1</sub>...a<sub>1</sub>a<sub>0</sub>a<sub>-1</sub>a<sub>-2</sub>...a<sub>-m</sub>
                    <center>x = &sum;<sup>n</sup><sub>i=-m</sub>a<sub>ix10<sup>i</sup></sub></center>
                    <li>Ví dụ: Số 125.5 = 1x10<sup>2</sup>+2x10<sup>1</sup>+5x10<sup>0</sup></li>
                </ul>
                <p><span style="font-weight: 600;">Hệ đếm 2 (nhị phân)</span></p>
                <ul>
                    <li>Hệ đếm thông dụng của MTĐT;</li>
                    <li>Sử dụng 2 kí hiệu là 2 con số 0, 1;</li>
                    <li>Các số được biểu diễn theo cách kí hiệu theo vị trí;</li>
                    <li>Số X = a<sub>n</sub>a<sub>n-1</sub>...a<sub>0</sub>a<sub>-1</sub>a<sub>-2</sub>...a<sub>-m</sub> có giá trị là: <br> 
                    <center>X = &sum;<sup>n</sup><sub>i=-m</sub>a<sub>i</sub>x2<sup>i</sup></center>
                    </li>
                    <li>Ví dụ: Số 0110 = 0x2<sup>3</sup> + 1x2<sup>2</sup> + 1x2<sup>1</sup>+ 0x2<sup>0</sup></li>
                    <li>
                        <span style="color: red; font-weight: 600;">Bit bên trái nhất gọi là bit MSB (Most Significant Bit)</span>: Bit có trọng số cao nhất;
                    </li>
                    <li>
                        <span style="color: red; font-weight: 600;">Bit bên phải nhất gọi là bit LSB (Least Significant Bit):</span> Bit có trọng số thấp nhất;
                        <ul>
                            <li>Hệ hexa (hệ 16)</li>
                            <li>Hệ octal (hệ 8)</li>
                        </ul>
                    </li>
                </ul>
            `],
            ['Mã hóa kí tự', 'CA022',
                `
                    <p>Tập kí tự: Bao gồm tập các chữ cái, tập các con số, và một số các kí hiệu đặc biệt.</p>
                    <p>Có 3 bảng mã thông dụng: Baudot, ASCII, EBCDIC</p>
                    <p>Bảng mã ASCII:</p>
                    <ul>
                        <li>Mã hóa các kí tự</li>
                        <li>Mỗi kí tự mã hóa bởi 8 bit (1 byte)</li>
                        <li>Có 256 kí tự</li>
                        <li>Mỗi kí tự có một mã từ 0 - 255 (hệ 10) hoặc 00000000 - 11111111 (hệ 2)</li>
                    </ul>
                `
            ],
            ['Các mã phát hiện và sửa lỗi', 'CA023', `
                <p>Khi truyền tín hiệu giữa các thành phần trong hệ thống có thể tín hiệu bị ảnh hưởng bởi nhiễu, thiết bị... => Cần có các phương pháp phát hiện và sửa các lỗi</p>

                <p><b><u>Phương pháp thông dụng là sử dụng các mã phát hiện và sửa lỗi</u></b></p>

                <ul>
                    <li><b><a href="https://youtu.be/KurQgKC27wI" class="text-decoration-none" target="_blank">Phát hiện lỗi với bit chẵn lẻ (parity)</a></b>
                        <ul>
                            <li>Truyền một dãy bit sẽ thêm một bit gọi là bit chẵn lẻ;</li>
                            <li>Bit parity chẵn (lẻ) là bit thêm vào để làm cho số lượng bit 1 trở thành số chẵn (lẻ)</li>
                        </ul>
                    </li>
                    <li>
                        Ví dụ: sử dụng parity chẵn
                        <ul>
                            <li>Dãy bit cần truyền là 0110 1000 thì bit cần thêm là 1;</li>
                            <li>Dãy bit cần truyền là 0110 1001 thì bit cần thêm là 0;</li>
                        </ul>
                        Phát hiện lỗi: Bên thu khi nhận được dãy bit sẽ dựa vào bit chẵn lẻ để phát hiện lỗi.
                    </li>
                    <li>
                        <b><a href="https://youtu.be/zU47irYKtc4?t=287" target="_blank" class="text-decoration-none">Phát hiện lỗi bit chẵn lẻ cho khối dữ liệu (parity)</a></b>
                        <ul>
                            <li>Truyền một khối các bit</li>
                            <li>Sử dụng 2 loại bit kiểm chẵn lẻ: bit chẵn lẻ theo chiều dọc (VRC) và bit chẵn lẻ theo chiều ngang (LRC)</li>
                            <li>Ví dụ <br>
                                <center>
                                    <img alt="Use LRC for data block" src="./assets/img/CA/CA01/LRC_datablock.png" class="img-f-scale img-scale"></img>
                                <center>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p><b><a href="https://youtu.be/At8I1Xn3TTQ" class="text-decoration-none" target="_blank">Phát hiện lỗi bằng mã dư thừa CRC (Cyclic Redundancy Check)</a></b></p>
                        Sử dụng khi đọc dữ liệu từ đĩa từ <br>
                        Dây bit sẽ được bổ sung mã kiểm soát lỗi CRC trước khi truyền. <br>
                        Nguyên lí mã CRC:
                        <ul>
                            <li>K bit cho bản tin cần truyền</li>
                            <li>Bên phát tạo ra chuỗi n bit cho khung kiểm tra FCS (Frame Check sequence) sao cho frame gửi đi (n+k bit) chia hết cho 1 số P (n+1 bit) xác định trước</li>
                            <li>
                                Bên thu chia frame nhận được cho cùng một số P và nếu không có dư => Không có lỗi
                            </li>
                        </ul>
                        <p><b>Bài tập ví dụ mã CRC</b>: 
                        Cho 1 dữ liệu X: 100100, được mã hóa bởi dạng CRC với số chia (đa thức sinh) có dạng 1101
                        <br>
                        a) Tìm CRC? <a href="https://youtu.be/XwStKgBEz-s?t=187" target="_blank">Giải</a> <br>
                        b) Tìm chuỗi dữ liệu phát theo dạng CRC? <a href="https://youtu.be/XwStKgBEz-s?t=522" target="_blank">Giải</a> <br>
                        c) Bên nhận, nhận được dữ liệu Y: 100100001 và Z: 111100001. Hãy cho biết dãy dữ liệu nào lỗi? <a href="https://youtu.be/XwStKgBEz-s?t=699" target="_blank">Giải</a>
                        </p>
                    </li>
                    <li><b><a href="#" class="text-decoration-none" target="_blank">Mã sửa lỗi Hamming</a></b>
                        <ul>
                            <li>Mã Hamming là sự cải tiến của mã kiểm tra chẵn lẻ;</li>
                            <li>Nếu sử dụng r bit chẵn lẻ thì sẽ kiểm tra được 2<sup>n</sup>-1 bit dữ liệu;</li>
                            <li>Vị trí các bit cần chèn là các lũy thừa của cơ số 2 như 1,2,3,4,8,...,2<sup>r-1</sup></li>
                            <li>Tổng số bit truyền đi là r+n</li>
                        </ul>
                        <b>Ví dụ 1</b>: Cần truyền đi chuỗi bit M 1101100111 (10 bit) <br>
                        <br>
                        Giải <br>
                        Bước 1. Tìm tổng số bit của dãy cần truyền => D = 10 <br>
                        Bước 2. Dựa vào bất đẳng thức: P + D + 1 < 2<sup>P</sup> => P = 4, mà P = r <br>
                        Bước 3. Từ P = r, ta xác định được cần truyền vào 4 bit chẵn lẻ <br>
                        Bước 4. Theo công thức tìm vị trí thêm vào là: pos = 2<sup>r-1</sup>, với r: 1 -> 4 => pos = [2<sup>0</sup>, 2<sup>1</sup>, 2<sup>2</sup>, 2<sup>3</sup>] = [1,2,4,8]
                        <br>
                        ==>>Cần 4 bit chẵn lẻ thêm vào chuỗi bit, gọi C<sub>8</sub>, C<sub>4</sub>, C<sub>2</sub>, C<sub>1</sub> là các bit chẵn lẻ sẽ thêm vào các vị trí 8,4,2,1

                        <br>

                        Dãy bit là: 110110C<sub>8</sub>011C<sub>4</sub>1C<sub>2</sub>C<sub>1</sub>

                        <br>

                        Cộng module 2 tất cả các vị trí khác không trong dãy vừa sinh ra, đó là các vị trí: 14, 13, 11, 10, 6, 5, 3
                        <br>
                        <b>Ví dụ 2</b>. Cho dãy dữ liệu 1011 1011. Xác định chuỗi hamming lẻ? - <a href="https://youtu.be/_NMOKl9FXVg" target="_blank" class="text-decoration-none">Giải</a>

                        <br>
                        <b>Ví dụ 3</b>. Cho dãy dữ liệu hamming có dạng: 1100 1101 1110. Hãy tìm bit bị hỏng? - <a href="https://youtu.be/wqJSKHuGfDg" target="_blank">Giải</a>
                    </li>
                </ul>
            `],
            ['Biểu diễn số nguyên không dấu và có dấu', 'CA024', `
                Một số nhị phân n bit sẽ biểu diễn được 2<sup>n</sup> số nguyên không dấu có giá trị 0 - (2<sup>n</sup>-1). <br>
                Ví dụ: Sử dụng 1 byte = 8 bit có thể biểu diễn được các số nguyên từ 0 - 255. <br>
                Để biểu diễn số nguyên có dấu ta sử dụng bit tận cùng bên trái làm bit dấu:
                <ul>
                    <li>Bit = 0 biểu diễn số dương</li>
                    <li>Bit = 1 biểu diễn số âm</li>
                </ul>

                <br>
                Với n bit có thể biểu diễn các số có dấu từ <span style="color:red;">- (2<sup>n-1</sup>)->+(2<sup>n-1</sup>-1)</span>
                <br>
                <span sytle="font-weight: 600;">Số bù 1</span>
                <ul>
                    <li>Số bù 1 của một số nhị phân là một số nhị phân mà khi cộng với số nhị phân đã cho thì tất cả các bit đều bằng 1</li>
                    <li>Tìm số bù 1: Số bù 1 của một số được sinh ra bằng cách đảo các bit 0 thành 1 và bit 1 thành 0.</li>
                </ul>
                <br>
                Ví dụ: Số 1011 có số bù 1 là: 0100

                <span style="font-weight: 600;">Số bù 2</span>
                <ul>
                    <li>Số bù 2 của một số bằng số bù 1 của 1 số đó và cộng thêm với 1</li>
                </ul>
                <br>
                Ví dụ: số 1011 có số bù 2 là 0101
                A - B = A + (-B): Phép trừ được thực hiện thông qua phép cộng. Để thực hiện A-B ta lấy A cộng với số bù 2 của B (Vì số bù 2 của B là -B).
            `],
            ['Biểu diễn số có dấu chấm động', 'CA025', `
                Mỗi số dấu chấm động được biểu diễn bằng dạng: m*re
                <ul>
                    <li>Trong đó: m là phần định trị, r là cơ số và e là số mũ</li>
                    <li>Thường cơ số r biết trước</li>
                    <li>Chỉ cần 2 thông tin để lưu số dấu chấm động: m và e</li>
                    <li>Phần định trị là một số có dấu (số nguyên, phân số);</li>
                    <li>Phần mũ là số nguyên có dấu</li>
                </ul>
                <br>
                Ví dụ: số + 6132.789 dạng số khoa học là: 0.6132789E+04
                <center>    <img alt="Phan-dinh-tri-phan-mu" src=""></img></center>
                <br>
                Số này được lưu trữ trong máy tính dưới dạng số BCD như sau: 0 0110 0001 0011 0010 0111 1000 1001 0 0100

                <br>
                Chuân IEEE 754 <br>
                Có 2 dạng: Chính xác đơn 32 bit và chính xác kép 64 bit <br>
                Mỗi số thực X được biểu diễn như sau:
                X = (-1)x1xmx2<sup>E-127</sup>
                <img src="" alt="S-E-M"></img>
                <ul>
                    <li>các bit của e bằng 0, các bit của m bằng 0 thì X = &plusmn;0</li>
                    <li>Các bit của e bằng 1, các bit của m bằng 0 thì X = &plusmn;&infin;</li>
                    <li>Các bit của e bằng 1, còn m có ít nhất 1 bit bằng 1, thì nó không biểu diễn cho số nào cả (NaN - not a number)</li>
                </ul>
            `],
            ['Các phép toán trong hệ nhị phân', 'CA026', `
                <span style="font-weight: 600;">Phép cộng</span>
                <br>
                <ul>
                    <li>Cộng 2 bit nhị phân
                        <br>
                        <center>
                        <img src="#" alt="cong-2-bit-nhi-phan"></img>
                        </center>
                    </li>
                    <li>
                        Cộng 2 số nhị phân không dấu
                        <br>
                        <p>Thực hiện cộng từ trái qua phải </p>
                        <p>Ví dụ</p>
                        <img src="#" alt="Cong-2-so-nhi-phan-khong-dau"></img>

                    </li>
                </ul>
                    <span style="font-weight:600;">Phép trừ</span>
                       
                        <br>
                        Trừ 2 bit nhị phân 
                        <img src="#" alt="Tru-hai-bit-nhi-phan"></img>
                    <br>
                    <span style="font-weight: 600">Phép chia</span>
                    <br>
                    <ul>
                    <li>
             
                        <p>Chia 2 số nhị phân</p>

                        <p>Thực hiện: chia 2 số nhị phân được thực hiện bình thường như chia 2 số thập phân</p>

                        <p>Ví dụ: 10011111 1100</p>
                        <center>
                            <img src="#" alt="Chia 2 so nhi phan"></img>
                        </center>
                    </li>
                </ul>

                <br>
                <span style="font-weight: 600;">Biểu diễn số có dấu</span><br> Để biểu diễn số nhị phân có dấu, ta sử dụng một bit ở tận cùng bên trái làm bit dấu, thường quy ước bit đầu = 0 là số dương; bit đầu = 1 là số âm; Các bit còn lại là bit giá trị. </span>
                <center>
                    <img src="#" alt="Bit-dau">
                </center>
                <br>
                Cách biểu diễn này dẫn đến có 2 giá trị 0 (Ví dụ +0 = -0). Đồng thời cách biểu diễn này thường dẫn đến sai sót khi thực hiện phép toán
                <center>
                    <img src="#" alt="sai-sot-khi-thuc-hien-phep-toan">
                </center>
            `],

        ]
    },
    'CA03': {
        'title': 'Các mạch điện tử số trong máy vi tính',
        'index': [
            ['Đại số logic', 'CA031', ``],
            ['Các mạch điện tử logic', 'CA032', ``],
            ['Mạch số học và logic (ALU)', 'CA033', ``]
        ]
    }
}








