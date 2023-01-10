const CN00 = 
    { 
            'CN11': {
                'title': 'Giới thiệu mạng máy tính',
                'index': [
                    ['Khái niệm','CN111',`
                        <center>
                            <img src="./assets/img/CN/CN1/khai_niem_CN.png" style="width:100%;">
                        </center>
                    `],
                    ['Máy tính và các thiết bị mạng','CN112',`
                        <center>
                            <img src="./assets/img/CN/CN1/maytinh_va_cacthietbi.png" style="width:100%;">
                        </center>
                    `],
                    ['Kiến trúc mạng','CN113',`
                        <center>
                            <img src="./assets/img/CN/CN1/kientrucmang.png" style="width:100%;">
                        </center>
                    `],
                    ['Giao thức mạng (protocol)','CN114',`
                        <center>
                            <img src="./assets/img/CN/CN1/giaothucmang.png" style="width:100%;">
                        </center>
                    `],
                    ['Phân loại mạng','CN115',`
                        <center>
                            <img src="./assets/img/CN/CN1/phanloaimang.png" style="width:100%;">
                        </center>
                    `],
                    ['Dịch vụ mạng','CN116',`
                    
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
            'CN16':{
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
;