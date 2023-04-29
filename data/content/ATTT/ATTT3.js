const ATTT3 = {
    ATTT01: {
        title: `Thuật toán thay thế (Substitution Cipher)`,
        index: [
            ['Thuật toán', 'ATTT011', `
            <div>
            <p>Thuật toán thay thế (Substitution) là thuật toán mã hóa trong đó từng ký tự (hoặc từng nhóm ký tự) của
                plaintext được thay thế bằng một (hay một nhóm) ký tự khác. Thuật toán atbash của người Hebrew hay thuật
                toán vòng của Caesar đều là các thuật toán thay thế. Chính ý tưởng của mã vòng Caesar đã được ứng dụng
                trong máy Enigma.</p>

            <p>Có 4 kỹ thuật thay thế sau đây:</p>
            <ul>
                <li>Thay thế đơn (A simple substitution cipher)</li>
                <li>Thay thế đồng âm (A homophonic substitution cipher )</li>
                <li>Thay thế đa mẫu tự (A polyalphbetic substitution cipher)</li>
                <li>Thay thế đa sơ đồ (A polygram substitution cipher)</li>
            </ul>

            <p>là thuật toán mã hóa trong đó các ký tự trong văn bản ban đầu chỉ thay đổi vị trí cho nhau còn bản thân
                các ký tự không hề bị biến đổi.</p>

            <center>
                <img src="./assets/img/ATTT/Chap3/img6.png" class="col-12 col-sm-8" alt="">
            </center>
        </div>

            `]
        ]
    },
    ATTT02: {
        title: `Thuật toán chuyển vị (Tranposition)`,
        index: [
            ['Ví dụ','ATTT021',`
            <p><b>Ví dụ</b></p>
            <p>Đổi chỗ cột đơn giản, bản rõ được viết theo hàng ngang trên trang giấy với độ dài cố định, và bản
                mã được đọc theo hàng dọc</p>

            <center>
                <img class="col-12 col-sm-10" src="./assets/img/ATTT/Chap3/img7.png" alt="">
            </center>
            `],
            ['Đảo ngược toàn bộ bản rõ','ATTT022',`
            <p><b>Đảo ngược toàn bộ bản rõ</b></p>

            <p>Nghĩa là bản rõ được viết theo thứ tự ngược lại để tạo ra bản mã. Đây là phương pháp mã hóa đơn
                giản nhất vì vậy không đảm bảo an toàn</p>

            <p>Ví dụ: bản rõ "Transcription cipher" được mã hóa thành "REHPICNOITISOPSNART"</p>

            <p>Mã hóa theo mẫu hình học: bản rõ được xếp lại theo một mẫu hình học nào đó, thường là một mảng
                hoặc ma trận hai chiều</p>

            <p>Ví dụ: bản rõ "LIECHTENSTEINER" được viết thành ma trận 3x5 theo hàng như sau:</p>
            <center>
                <img src="./assets/img/ATTT/Chap3/img8.png" alt="" class="col-12 col-sm-10">
            </center>
            <p>Nếu lấy các ký tự ra theo số thứ tự cột 2,4,1,3,5 thì sẽ có bản mã "IEICSELTEENNHTR"</p>
            `]
        ]
    },
    ATTT03: {
        title: `Hệ mã đổi chỗ (Tranposition Cipher)`,
        index: [
            ['Đối chỗ cột', 'ATTT031', `
            <p>Đổi chỗ cột: Đầu tiên đổi chỗ các ký tự trong bản rõ thành dạng hình chữ nhật theo cột, sau đó các cột
            được sắp xếp lại và các chữ cái được lấy ra theo hàng ngang</p>

        <p>Ví dụ: bản rõ gốc "NGAY MAI BAT DAU CHIEN DICH XYZ" được viết dưới dạng ma trận 5x5 theo cột như sau:</p>

        <center>
            <img src="./assets/img/ATTT/Chap3/img9.png" alt="" class="col-12 col-sm-8">
        </center>
            `]
        ]
    },
    ATTT04: {
        title: `Một số hệ mã cổ điển`,
        index: [
            ['Các hệ mã cổ điển', 'ATTT041',`
                <ul>
                    <li>Hệ mã Caesar</li>    
                    <li>Hệ mã Affine</li>    
                    <li>Hệ mã Vigenere</li>    
                    <li>Hệ mã Hill</li>    
                </ul>
            `]
        ]
    },
    ATTT05: {
        title: `Các thuật toán mã hóa hiện đại`,
        index: [
            ['Thuật toán mã hóa hiện đại', 'ATTT051', `
            <center>
                <img src="./assets/img/ATTT/Chap3/img10.png" alt="" class="col-12 col-sm-8">
            </center>
            <p>a. Mã hóa khóa bí mật (đối xứng). SKC sử dụng một khóa cho cả mã hóa và giải mã</p>

            <center>
                <img src="./assets/img/ATTT/Chap3/img11.png" class="col-12 col-sm-8" alt="">
            </center>
            <p>b. Mã hóa khóa công khai (bất đối xứng). PKC sử dụng hai khóa, một khóa để mã hóa và khóa còn lại để giải mã
            </p>

            <center>
                <img src="./assets/img/ATTT/Chap3/img12.png" alt="" class="col-12 col-sm-8">
            </center>
            <p>c. Hàm băm (mã hóa một chiều). Hàm băm không có chìa khóa do plaintext không tìm ngược lại được ciphertext
            </p>
            `]
        ]
    },
    ATTT06: {
        title: `Mã đối xứng`,
        index: [
            ['Giới thiệu', 'ATTT061', `
                <ul>
                    <li>Cả hai quá trình mã hóa và giải mã đều dùng một khóa</li>
                    <li>Khóa này phải được giữ bí mật</li>
                    <li>Tên gọi khác là mã hóa với khóa bí mật (secret key cryptography)</li>
                    <li>DES và AES</li>
                </ul>

                <center>
                    <img src="./assets/img/ATTT/Chap3/img13.png" alt="" class="col-12 col-sm-8">
                </center>
            `],
            ['Hai nhóm phụ', 'ATTT062', `
            <p><b>Mã hóa đối xứng có thể phân thành hai nhóm phụ:</b></p>
        <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse61" role="button" aria-expanded="false"
                aria-controls="collapse61">
                Thuật toán mã hóa theo khối (Block ciphers)
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse62" role="button" aria-expanded="false"
                aria-controls="collapse62">
                Thuật toán mã hóa theo dòng (Stream ciphers)
            </a>
        </p>

        <div>
            <div class="collapse" id="collapse61">
                <div class="card card-body">
                    <p><b>Thuật toán mã hóa theo khối (Block ciphers)</b></p>

                    <p>Trong đó từng khối dữ liệu trong văn bản gốc ban đầu được thay thế bằng một khối dữ liệu khác có
                        cùng độ dài. Độ dài mỗi khối gọi là kích thước khối (block size), thường được tính bằng đơn vị
                        bit. Ví dụ thuật toán 3-Way có kích thước khối bằng 96 bit. Một số thuật toán khối thông dụng
                        là: DES, 3DES, RC5, RC6, 3-WAY, CAST, CAMELIA, Blowfish, MARS, Serpent, Twofish, GOST...</p>
                </div>
            </div>
            <div class="collapse" id="collapse62">
                <div class="card card-body">
                    <p><b>Thuật toán mã hóa theo dòng (Stream ciphers)</b></p>

                    <p>Dữ liệu đầu vào được mã hóa từng bit một. Các thuật toán dòng có tốc độ nhanh hơn các thuật toán
                        khối, được dùng khi khối lượng dữ liệu cần mã hóa chưa được biết trước, ví dụ trong kết nối
                        không dây. Có thể coi thuật toán khối với kích thước mỗi khối là 1 bit. Một số thuật toán dòng
                        thông dụng: RC4, A5/1, A5/2, Chameleon</p>

                </div>
            </div>
        </div>
            `]
        ]
    },
    ATTT07: {
        title: 'Mã hóa khóa công khai',
        index: [
            ['Khái niệm', 'ATTT071', `
            <p>Mã hóa khóa công khai là một dạng mã hóa cho phép người dùng trao đổi các thông tin mật mã mà không cần phải trao đổi các khóa bí mật trước đó. Điều này được thực hiện bằng cách sử dụng một cặp khóa có quan hệ toán học với nhau là khóa công khai (public key) và khóa riêng (private key) hay khóa bí mật (secret key)</p>
            <p>Trong mật mã khóa công khai, khóa riêng cần phải giữa bí mật trong khi khóa công khai được phổ biến công khai. Trong 2 khóa, một dùng để mã hóa và khóa còn lại dùng để giải mã</p>
            `],
            ['Mục đích sử dụng', 'ATTT072', `
            <p>Mục đích sử dụng</p>

            <p>Hệ thống mật mã hóa khóa công khai có thể sử dụng với các mục đích:</p>

            <ul>
              <li>Mã hóa: giữ bí mật thông tin và chỉ có người có khóa bí mật mới giải mã được</li>
              <li>Tạo chữ ký số: cho phép kiểm tra một văn bản xem nó có phải đã được tạo với một khóa bí mật nào đó hay không</li>
              <li>Thỏa thuận khóa: cho phép thiết lập khóa để trao đổi thông tin mật giữa hai bên</li>
            </ul>

            <p>RSA</p>
            `]
        ]
    }
}