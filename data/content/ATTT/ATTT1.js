var ATTT1 = {
    ATTT01: {
        title: 'Nhu cầu về bảo mật thông tin',
        index: [
            ['3 hình thức đe dọa', 'ATTT011', `
                <ul>
                <li>Phá hoại: kẻ thù phá hỏng thiết bị phần cứng hoặc phần mềm hoạt động trên hệ thống</li>
                <li>Sửa đổi: Tài sản của hệ thống bị sửa đổi trái phép. Điều này thường làm cho hệ thống không làm đúng chức
                    năng của nó. Chẳng hạn như thay đổi mật khẩu, quyền người dùng trong hệ thống làm họ không thể truy cập
                    vào hệ thống để làm việc</li>
                <li>Can thiệp: Tài sản bị truy cập bởi những người không có thẩm quyền truyền thông thực hiện trên hệ thống
                    bị ngăn chặn, sửa đổi</li>
                </ul>  
            `],
            ['3 loại đối tượng đe dọa', 'ATTT012', `
                <p>Các đe dọa đối với một hệ thống thông tin có thể đến từ nhiều
                nguồn và được thực hiện bởi các đối tượng khác nhau. Có thể chia thành 3 loại đối tượng như sau:</p>
                <ul>
                <li>Các đối tượng từ ngay bên trong hệ thống (insider), đây là những người có quyền truy cập hợp pháp đối
                    với hệ thống</li>
                <li>Những đối tượng bên ngoài hệ thống (hacker, cracker), các đối tượng này tấn công qua những đường kết nối
                    với hệ thống như Internet chẳng hạn.</li>
                <li>Thứ ba là các phần mềm (chẳng hạn như spyware, adware ...) chạy trên hệ thống.</li>
                </ul>
            `]
        ]
    },
    ATTT02: {
        title: 'Các biện pháp ngăn chặn',
        index: [
            ['3 biện pháp ngăn chặn', 'ATTT021', `
            <ul>
                <li><b>Điều khiển thông qua phần mềm:</b> dựa vào các cơ chế an toàn bảo mật của hệ thống nền (hệ điều hành), các
                    thuật toán mật mã học</li>
                <li><b>Điều khiển thông qua phần cứng:</b> các cơ chế bảo mật, các thuật toán mật mã học được cứng hóa để sử dụng
                </li>
                <li><b>Điều khiển thông qua các chính sách của tổ chức:</b> ban hành các qui định của tổ chức nhằm đảm bảo tính an
                    toàn bảo mật của hệ thống.</li>
                </ul>
            `]
        ]
    },
    ATTT03: {
        title: '3 mục tiêu - 2 nguyên tắc của ATTT',
        index: [
            ['3 mục tiêu', 'ATTT031', `
                <ul>
                    <li>Tính bí mật</li>
                    <li>Tính toàn vẹn dữ liệu</li>
                    <li>Tính sẵn dùng</li>
                </ul>
            `],
            ['2 nguyên tắc', 'ATTT032', `
                <ul>
                    <li>Việc thẩm định về bảo mật phải là khó và cần tính tới tất cả các tình huống khả năng tấn công có thể được thực hiện.</li>
                    <li>Tài sản được bảo vệ cho tới khi hết giá trị sử dụng hoặc hết ý nghĩa bí mật.</li>
                </ul>
            `]
        ]
    },
    ATTT04: {
        title: 'Mật mã học - CRYPTOLOGY',
        index: [
            ['Một số khái niệm', 'ATTT041', `
            <ul>
                <li>Mật mã học bao gồm 2 lĩnh vực: <b>mã hóa</b> (cryptography) và <b>thám mã</b></li>
                <li>Mã hóa: nghiên cứu các thuật toán và phương thức để đảm bảo tính bí mật và xác thực của thông tin (thường là dưới dạng các văn bản lưu trữ trên máy tính). Các sản phẩm của lĩnh vực này là các hệ mã mật các hàm băm, các hệ chữ ký điện tử, các cơ chế phân phối, quản lý khóa và các giao thức mật mã."</li>
                <li>Thám mã: Nghiên cứu các phương pháp phá mã hoặc tạo mã giả. Sản phẩm của lĩnh vực này là các phương pháp thám mã các phương pháp giả mạo chữ ký, các phương pháp tấn công các hàm băm và các giao thức mật mã.</li>
                <li>Mã hóa (cryptography) là một ngành khoa học của các phương pháp truyền tin bảo mật. Trong tiếng Hy Lạp, “Crypto” (krypte) có nghĩa là che dấu hay đảo lộn, còn “Graphy” (grafik) có nghĩa là từ</li>
                <li>
                Có 2 phương thức mã hoá cơ bản: thay thế và hoán vị:
                <ul>
                    <li>Phương thức mã hoá thay thế là phương thức mã hoá mà từng ký tự gốc hay một nhóm ký tự gốc của bản rõ được thay thế bởi các từ, các ký hiệu khác hay kết hợp với nhau cho phù hợp với một phương thức nhất định và khoá.</li>
                    <li>Phương thức mã hoá hoán vị là phương thức mã hoá mà các từ mã của bản rõ được sắp xếp lại theo một phương thức nhất định.</li>
                </ul>
                </li>
            </ul>
            `]
        ]
    },
    ATTT05: {
        title: 'Mô hình truyền tin cơ bản của mật mã học và luật KIRCHOFF',
        index: [
            ['Giới thiệu', 'ATTT051', `
                <center>
                    <img src="./assets/img/ATTT/Chap1/img1.png" alt="">
                </center>
                <ul>
                    <li>Trong mô hình này:
                    <br><b>Người gửi S (Sender)</b> muốn gửi một thông điệp X (Message – là một bản rõ ) tới người nhận R (Receiver) qua một kênh truyền không an toàn (Insecured Channel)
                    <br><b>Kẻ địch E (Enemy)</b> có thể nghe trộm, hay sửa đổi thông tin X. 
                    <br>Vì vậy, S sử dụng phép biến đổi, tức mã hoá (E-Encryption) lên thông tin X ở dạng đọc được (Plaintext) để tạo ra một đoạn văn bản được mã hoá Y (C-Ciphertext) không thể hiểu được theo một quy luật thông thường sử dụng một thông tin bí mật được gọi là <b>khoá K (Key)</b>, khoá K chính là thông số điều khiển cho phép biến đổi từ bản rõ X sang bản mã Y (chỉ các bên tham gia truyền tin S và R mới có thể biết khóa này).</li>
                    <li>Giải mã (D-Decryption) là quá trình ngược lại cho phép người nhận thu được thông tin X ban đầu từ đoạn mã hoá Y sử dụng khóa giải mã K, (chú ý là khóa giải mã và khóa mã hóa có thể khác nhau hoặc là một tùy thuộc vào hệ mã sử dụng).</li>
                </ul>
            `]
        ]
    },
    ATTT06: {
        title: 'Lịch sử của mật mã học',
        index: [
            ['Giới thiệu', 'ATTT061', `
                <center>
                    <img src="./assets/img/ATTT/chap1/img2.png" alt="">
                </center>
            `]
        ]
    },
    ATTT07: {
        title: 'Phân loại các thuật toán mật mã học',
        index: [
            ['Phân loại', 'ATTT071', `
            <ul>
                <li>Tiêu chí thứ nhất là dựa vào các dịch vụ an toàn bảo mâṭ mà các thuâṭ toán cung cấp:
                    <ul>
                    <li>Symmetric Key Cryptosytems</li>
                    <li>Public Key Cryptosystems</li>
                    <li>Digital Signature Algorithms</li>
                    <li>Hash functions</li>
                    </ul>
                </li>
                <li>Dựa trên cách thức xử lý input
                    <ul>
                    <li>Các thuật toán mã hóa khối (chẳng hạn như DES, AES ... ) xử lý bản rõ dưới các đơn vị cơ bản là các khối có kích thước giống nhau.</li>
                    <li>Các thuật toán mã hóa dòng (RC4 ...) coi bản rõ là một luồng bit, byte liên tục.</li>
                    </ul>
                </li>
            </ul>
        `]
        ]
    },
    ATTT08: {
        title: `Một số ứng dụng với mật mã học`,
        index: [
            ['Ứng dụng', 'ATTT081', `
                <ul>
                    <li>Bảo mật (Confidentiality)</li>
                    <li>Xác thực hóa (Authentication)</li>
                    <li>Toàn vẹn (Integrity)</li>
                    <li>Dịch vụ không thể chối từ (Non-Repudiation)</li>
                    <li>Chữ ký điện tử , dịch vụ chứng thực danh tính (Identification)</li>
                </ul>
            `]
        ]
    }
}