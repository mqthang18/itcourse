const ATTT8 = {
    ATTT01: {
        title: 'Khái niệm',
        index: [
            ['Nội dung', 'ATTT011', `
                <p>Dùng để lấy một bộ phần nhỏ của thông điệp là một giải thuật toán học (một ánh xạ một - một (một chiều)) ứng với
                mỗi khối dữ liệu một giá trị băm duy nhất.</p>

                <p>Một chiều: mỗi khối dữ liệu gốc qua một hàm băm sẽ cho một giá trị băm duy nhất, tuy vậy có thể có một giá trị
                băm ứng với hai khối dữ liệu gốc khác nhau vì vậy không thể từ giá trị băm tìm ngược lại khối dữ liệu đã sinh ra
                nó.</p>

                <p>Nếu hai giá trị băm khác nhau thì chắc chắn hai khối dữ liệu tạo ra chúng là khác nhau</p>
                <p>Hàm băm được đánh giá là tốt nếu số đụng độ xảy ra rất nhỏ</p>

                
            `]
        ]
    },
    ATTT02: {
        title: 'Phương pháp băm',
        index: [
            ['Các phương pháp tạo hàm băm', 'ATTT021', `
                <h4>Các phương pháp tạo hàm băm</h4>

                <ul>
                    <li>Một hàm băm tốt phải thỏa mãn các điều kiện sau:
                    <ul>
                        <li>Tính toán nhanh</li>
                        <li>Các khóa được phân bố đều trong bảng</li>
                        <li>Ít xảy ra đụng độ</li>
                        <li>Xử lý được các loại khóa có kiểu dữ liệu khác nhau</li>
                    </ul>
                    </li>
                    <li>Có 2 phương pháp chính tạo hàm băm:
                    <ul>
                        <li>Phương pháp cộng nhân</li>
                        <li>Phương pháp quay vòng</li>
                    </ul>
                    </li>
                </ul>
            `],
            ['Phương pháp băm kiểu cộng và nhân', 'ATTT022', `
            <h4>Phương pháp băm kiểu cộng và nhân</h4>

          <ul>
            <li>Duyệt dọc theo chuỗi dữ liệu và liên tục cộng thêm vào một giá trị xuất phát từ một giá trị được tính
              cho mỗi
              phần tử dữ liệu</li>
            <li>Giá trị tăng thêm ứng với mỗi phân tử thường được tính dưới dạng nhân với một số nguyên tố nào đó</li>
          </ul>
            `],
            ['Phương pháp băm bằng cách quay vòng', 'ATTT023', `
            <h4>Phương pháp băm bằng cách quay vòng</h4>

            <p>Cộng thêm vào mỗi phần tử trong dãy một giá trị giống như phương pháp băm kiểu cộng <b>nhưng giá trị cộng
                thêm được xét từ cả hai phía, bên trái và bên phải, tính toán để cộng thêm vào tại mỗi phần tử</b></p>
            `]
        ]
    },
    ATTT03: {
        title: 'Các dạng hàm băm thông dụng',
        index: [
            ['Nội dung', 'ATTT031', `
            <ul>
      <li><b>RS Hash Function:</b> Một hàm băm đơn giản từ thuật toán Robert Sedgwicks</li>
      <li><b>JS Hash Function:</b> Hàm băm tính từ hai phía do Justin Sobel đề xuất</li>
      <li><b>PJW Hash Function:</b> Thuật toán băm dựa trên công trình của Peter J. Weinberger thuộc phòng thí nghiệm AT&T BELL</li>
      <li><b>BKDR Hash Function:</b> Hàm băm này được mô tả trong tác phẩm của Brian Kernighan và Dennis Ritchie's "The C Programming Language" (Ngôn ngữ lập trình C)</li>
      <li><b>SDBM Hash Function:</b> Đây là dạng hàm băm được chọn sử dụng trong các dự án mã nguồn mơ SDBM</li>
      <li><b>DJB Hash Function</b> do GS. Daniel J. Bernstein xây dựng và giới thiệu lần đầu tiên trên newsgroup comp.lang.c. Đây là một trong những hàm băm hiệu quả nhất từ trước đến nay đẫ được công bố.</li>
      <li><b>Message Digest (MD) algorithms:</b> Những dãy thuật toán hướng byte, sản sinh ra một giá trị băm 128 bit cho các thông điệp có độ dài bất kỳ
        <ul>
          <li><b>MD2 (RFC 1319)</b>: được thiết kế cho những hệ thống có bộ nhớ hạn chế chẳng hạn như các thẻ thông minh</li>
          <li><b>MD4 (RFC 1320)</b>: do Rivest phát triển, tương tự như MD2 nhưng được thiết kế cho những quá trình xử lý nhanh trong phần mềm. <b>MD5 (RFC 1321)</b>: cũng do Rivest phát triển sau khi phát hiện một số nhược điểm của MD4; sơ đồ này tương tự như MD4 nhưng hoạt động chậm hơn do phải xử lý nhiều trên dữ liệu gốc</li>
          <li>MD5 được tích hợp vào nhiều sản phẩm dù rằng vẫn còn một số nhược điểm mà nhà mật mã học người Đức Hans Dobbertin đã chỉ ra năm 1996</li>
        </ul>
      </li>
      <li><b>Sercure Hash Algorithm (SHA)</b>: Thuật toán của chuẩn hàm băm an toàn của NIST. NIST's Secure Hash Standard (SHS). SHA-1 tạo ra một giá trị băm 160 bit ban đầu được công bố với tên gọi là FIPS 180-1 và RFC 3174. FIPS 180-2 (tức là SHA-2) mô tả 5 thuật toán trong chuẩn SHS: SHA-1 cùng với SHA-224, SHA-256, SHA-384, SHA-512 có thể tạo ra giá trị băm có độ dài 224, 256, 384, hoặc 512 bit</li>
      <li><b>RIPEMD</b>: Một dãy thuật toán biến đổi thông điệp (message digest) thoạt đầu xuất phát từ dự án RIPE (RACE Integrity Primitives Evaluation). RIPEMD-160 do Hans Dobbertin, Antoon Bosselaers, và Bart Preneel thiết kế và tối ưu hóa cho quá trình xử lý 32 bit nhằm thay thế cho hàm băm 128 bit đang phổ biến thời đó. Có những phiên bảng khác là <b>RIPEMD-256</b>, <b>RIPEMD-320</b>, <b>RIPEMD-128</b></li>
      <li><b>HAVAL (HASH OF VARIABLE LENGTH)</b>: Hàm băm có độ dài biến thiên. Do Y. Zheng, J. Pieprzyk và J. Seberrry, là 1 hàm băm với nhiều cấp độ an toàn khác nhau HAVAL có thể tạo ra các giá trị băm với độ dài 128, 160, 192, 224 hoặc 256 bit</li>
      <li><b>Whirlpool:</b> là 1 hàm băm tương đối mới do V. Rijmen và P.S.L.M. Barreto thiết kế. Whirlpool làm việc trên các thông điệp có độ dài không quá 2256 bit và tạo ra giá trị băm với 512 bit. Thiết kế của Whirlbool rất khác biệt với thiết kế của MD5 và SHA-1, làm cho nó chống lại được những tấn công mà các hàm băm khác không được chống được.</li>
      <li><b>Tiger</b>: Do Ross Anderson và Eli Biham thiết kế. Tiger được thiết kế đảm bảo an toàn cao chạy hiệu quả với bộ xử lý 64 bit nên đã thay thế dễ dàng MD4, MD5, SHA và SHA-1 trong những ứng dụng khác... Tiger/192 tạo nên đầu ra 192 bit và tương thích với kiến trúc 64 bit; Tiger/128 và Tiger/160 tạo ra giá trị băm có độ dài 128 và 160 bit, để tương thích với các hàm băm đã nêu trên.</li>
    </ul>
            
            `]
        ]
    },
    ATTT04: {
        title: 'Công dụng của hàm băm',
        index: [
            ['Nội dung', 'ATTT041', `
            <ul>
      <li>Hàm băm thường được dùng để xây dựng các bảng băm tức là bảng ghi các giá trị băm ứng với một số khối dữ liệu mẫu: khi cần so sánh hai khối dữ liệu nào đó (thường có kích thước rất lớn) ta chỉ cần so sánh các giá trị băm có kích thước rất nhỏ của chúng: điều này rất có ích
        <center>
          <img class="col-12 col-sm-8" src="./assets/img/ATTT/Chap8/img1.png"></img>
        </center>
      </li>
      <li>Các hàm băm dành cho việc phát hiện và sửa lỗi tập trung phân biệt các trường hợp mà dữ liệu đã bị làm nhiều trong quá trình truyền tin, giá trị băm tương đối nhỏ có thể được dùng để kiểm chứng rằng một tệp dữ liệu có kích thước tùy ý đã bị sửa đổi hay không</li>
      <li>Hàm băm được dùng để phát hiện lỗi truyền dữ liệu như sau. Phía bên gửi, hàm băm được tính cho dữ liệu được gửi, giá trị băm này được gửi cùng dữ liệu. Phía bên nhận, hàm băm lại được tính lần nữa, nếu các giá tị băm không trùng nhau thì lỗi đã xảy ra ở đâu đó trong quá trình truyền.</li>
      <li>Tạo phong bì số an toàn
        <center>
          <img src="./assets/img/ATTT/Chap8/img2.png" class="col-12 col-sm-8" alt="">
        </center>
      </li>
      <li>Chữ ký điện tử
        <center>
          <img src="./assets/img/ATTT/Chap8/img3.png" class="col-12 col-sm-8" alt="">
        </center>
      </li>
    </ul>
            `]
        ]
    },
    ATTT05: {
        title: 'Hàm băm MD5',
        index: [
            ['Nội dung', 'ATTT051', `
            <ul>
      <li>MD5 được phát minh bởi Ron Rivest ,người đã tham gia xây dựng RSA.MD5 viết tắt của chữ Message Digest,được phát triển lên từ MD4 và trước đó là MD2,do MD2 và MD4 không còn an toàn.</li>
      <li>Kích thước của MD5 là 128 bit được tính giá trị của thông điệp có kích thước tối đa 2^4 bit</li>
      <li>Thuật toán MD5
        <center>
          <img src="./assets/img/ATTT/Chap8/img4.png" alt="" class="col-12 col-sm-8">
        </center>
      </li>
      <li>Cú pháp hàm F
        <center>
          <img src="./assets/img/ATTT/Chap8/img5.png" alt="" class="col-12 col-sm-8">
        </center>
      </li>
    </ul>
            `]
        ]
    },
    ATTT06: {
        title: 'Hàm băm SHA1',
        index: [
            ['Nội dung', 'ATTT061', `
            <ul>
      <li>SHA được phát triển bởi cục quốc gia an ninh Hoa Kỳ gọi tắt là(NSA) và được xuất bản thành chuẩn của chính phủ Hoa Kỳ bởi viện công nghệ và chuẩn quốc gia Hoa Kỳ(NIST) vào năm 1993 và được gọi là SHA-0.</li>
      <li>Năm thuật giải SHA là SHA-1 (trả lại kết quả dài 160 bit), SHA-224 (trả lại kết quả dài 224 bit), SHA-256 (trả lại kết quả dài 256 bit), SHA-384 (trả lại kết quả dài 384 bit), và SHA-512 (trả lại kết quả dài 512 bit).</li>
      <li>SHA-1 được sử dụng rộng rãi trong nhiều ứng dụng và giao thức an ninh khác nhau, bao gồm TLS và SSL, PGP, SSH, S/MIME, và IPSec.SHA-1 được coi là thuật giải thay thế MD5, một thuật giải băm 128 bit phổ biến khác.</li>
    </ul>
            `]
        ]
    }
}