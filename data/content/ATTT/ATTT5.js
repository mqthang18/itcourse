const ATTT5 = {
    ATTT01: {
        title: 'Giới thiệu về DES',
        index: [
            ['Giới thiệu', 'ATTT011', `
            <ul>
                <li>DES (Data Encryption Standard) là chuẩn mã hóa dữ liệu đầu tiên trên thế giới, do Cơ quan an ninh Quốc gia Hoa
                    Kỳ (NSA) đề xuất trên cơ sở cải tiến thuật toán Lucifer do hãng IBM công bố năm 1964</li>
                <li>DES đã được sử dụng rộng rãi ở Hoa Kỳ và nhiều quốc gia khác trong các thập kỷ 70, 80, 90 cho đến khi được
                    thay thế bởi Tiêu chuẩn mã hóa dữ liệu tiên tiến AES (Advanced Encryption Standard) vào năm 2002</li>
            </ul>
            `]
        ]
    },
    ATTT02: {
        title: 'Đặc điểm của DES',
        index: [
            ['Đặc điểm của DES', 'ATTT021', `
            <ul>
                <li>DES là thuật toán mã hóa khối, độ dài mỗi khối là 64 bit</li>
                <li>Khóa dùng trong DES có độ dài toàn bộ là 64 bit. Tuy nhiên chỉ có 56 bit thực sự được sử dụng; 8 bit còn lại
                    chỉ dùng cho việc kiểm tra.</li>
                <li>DES xuất ra Bản mã 64 bit</li>
                <li>Thuật toán được thực hiện 16 vòng</li>
                <li>Mã hóa và giải mã được sử dụng cùng một khóa</li>
            </ul>
            `]
        ]
    },
    ATTT03: {
        title: 'Lưu đồ thuật toán mã hóa',
        index: [
            ['Lưu đồ thuật toán mã hóa', 'ATTT031', `
            <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-sm-6">
          <ul>
            <li>Một block dữ liệu sẽ được hoán vị khởi tạo (Initial Permutation) IP trước khi thực hiện tính toán mã hóa
              với key</li>
            <li>Cuối cùng, kết quả tính toán với key sẽ được hoán vị lần nữa để tạo ra, đây là hoán vị đảo của hoán vị
              khởi tạo gọi là (Inverse Initial Permutatio) IP-1</li>
            <li>Việc tính toán dựa trên key được định nghĩa đơn giản trong một hàm f, gọi là hàm mã hóa, và một hàm KS,
              gọi là hàm phân phối key (key schedule)</li>
            <li>Hàm KS là hàm tạo ra các khóa vòng (round key) cho các lần lặp mã hóa. Có tất cả 16 khóa vòng từ K1 đến
              K16</li>
          </ul>
        </div>
        <div class="col-12 col-sm-6">
          <center>
            <img src="./assets/img/ATTT/Chap5/img2.png" alt="" class="col-12 col-sm-8">
          </center>
        </div>
      </div>
    </div>
    <center>
      <img src="./assets/img/ATTT/Chap5/img3.png" alt="" class="col-12 col-sm-8">
    </center>

            `]
        ]
    },
    ATTT04: {
        title: 'Hoán vị khởi tạo IP',
        index: [
            ['Hoán vị khởi tạo IP', 'ATTT041', `
            <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-sm-6">
          <ul>
            <li>Hoán vị là thay đổi vị trí các bit trong một chuỗi giá trị nhưng không làm thay đổi giá trị của các bit này</li>
            <li>Đầu vào: 64 bit dữ liệu đầu vào, gọi là plaintext</li>
            <li>IP là một phép hoán vị vị trí của các ký tự trong mỗi từ 64 bit, từ vị trí 1 đến vị trí thứ 64</li>
            <li>Chuỗi bit đầu vào được đánh số từ 1 - 64 (tính từ trái qua phải). Sau đó, các bit này được thay đổi vị trí như sơ đồ IP, bit số 58 được đặt vào vị trí đầu tiên, bit số 50 đặt vào vị trí thứ 2. Cứ như vậy, bit thứ 7 được đặt vào vị trí cuối cùng</li>
          </ul>
        </div>
        <div class="col-12 col-sm-6">
          <center>
            <img src="./assets/img/ATTT/Chap5/img4.png" alt="" class="col-12 col-sm-10">
          </center>
        </div>
      </div>
    </div>


    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-sm-6">
          <ul>
            <li>Sau hoán vị, chuỗi bit mới được phân ra làm hai đoạn, mỗi đoạn 32 bit để bắt đầu vào quy trình tính toán mã hóa với key</li>
            <li>Đoạn bên trái ký hiệu là L, đoạn bên phải ký hiệu là R</li>
            <li>Đoạn L gồm các bit từ số 1 đến bit số 32, đoạn R gồm các bit từ bit số 33 đến bit số 64. Đoạn L của lần tính toán sau sẽ chính là đoạn R của lần tính toán trước</li>
            <li>Đoạn R của lần tính toán sau sẽ được tính từ đoạn R trước đó qua hàm mã hóa f(R,K) rồi XOR với đoạn L của lần tính trước đó</li>
          </ul>

          <center>
            <p>L<sub>n+1</sub> = R<sub>n</sub></p>
            <p>R<sub>n+1</sub> = L<sub>n</sub>&oplus;f(R<sub>n</sub>,K<sub>n+1</sub>)</p>
          </center>
        </div>
        <div class="col-12 col-sm-6">
          <center>
            <img src="./assets/img/ATTT/Chap5/img5.png" alt="" class="col-12 col-sm-8">
          </center>
        </div>
      </div>
    </div>
            `]
        ]
    },
    ATTT05: {
        title: 'Hàm mã hóa F(R,K)',
        index: [
            ['Hàm mã hóa F(R,K)', 'ATTT051', `
            <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-sm-6">
          <p>Đầu tiên, 32 bit của đoạn R được đánh số từ 1 -> 32 theo thứ tự từ trái sang phải. Giá trị này sẽ được chuyển đổi thông qua bảng tra E để tạo thành một giá trị 48 bit. Bit đầu tiên trong chuỗi giá trị 48 bit là bit số 32 của R, bit thứ 2 là bit số 1 của R, bit thứ 3 là bit số 2 của R và bit cuối cùng là bit số 1 của R</p>

          <center>
            <img src="./assets/img/ATTT/Chap5/img16.png" alt="" class="col-12 col-sm-10">
          </center>
        </div>
        <div class="col-12 col-sm-6">
          <center>
            <img src="./assets/img/ATTT/Chap5/img6.png" alt="" class="col-12 col-sm-12">
          </center>
        </div>
      </div>
    </div>
            `]
        ]
    },
    ATTT06: {
        title: 'Sơ đồ thuật toán sinh khóa G tạo từ các khóa',
        index: [
            ['Sơ đồ thuật toán', 'ATTT061', `
            <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-sm-6">
          <p>Khóa mật mã K là một từ 56 bit, ta chia thành 8 đoạn, mỗi đoạn 7 bit, ta thêm cho mỗi đoạn 7 bit đó một bit tính thử chẵn lẻ vào vị trí cuối để được một từ 64 bit, ta vẫn ký hiệu là K, từ mới K này là từ xuất phát cho quá trình tính toán của thuật toán G</p>

          <p>Bảng không có các số 8, 16, 24, 32, 40, 48, 56, 64 là vị trí của những bit được thêm vào khi hình thành từ mới K</p>
        </div>
        <div class="col-12 col-sm-6">
          <center>
            <img src="./assets/img/ATTT/Chap5/img7.png" alt="" class="col-12 col-lg-6">
          </center>
        </div>
      </div>
    </div>
            `]
        ]
    },
    ATTT07: {
        title: 'Hàm mở rộng E',
        index: [
            ['Hàm mở rộng', 'ATTT071', `
            <p>Hàm mở rộng E sẽ tăng độ dài Ri-1 từ 32 bit đến 48 bit bằng cách thay đổi thứ tự các bit cũng như lặp lại các bit. Việc thực hiện này nhằm hai mục đích:</p>
    <ul>
      <li>Làm độ dài của Ri-1 cùng cỡ với khóa K để thực hiện việc cộng modulo XOR</li>
      <li>Cho kết quả dài hơn để có thể được nén trong suốt quá trình thay thế. Tuy nhiên, cả hai mục đích này nhằm một mục tiêu chính là bảo mật dữ liệu. Bằng cách cho phép 1 bit có thể chèn vào hai vị trí thay thế, sự phụ thuộc của các bit đầu ra với các bit đầu sẽ trải rộng ra.</li>
    </ul>

    <center>
      <img src="./assets/img/ATTT/Chap5/img8.png" alt="" class="col-6 col-sm-6">
    </center>
            `]
        ]
    },
    ATTT08: {
        title: 'Các hộp S-BOX',
        index: [
            ['S-Box', 'ATTT081', `
            <p>Sau khi thực hiện phép XOR giữa E(Ri-1) và Ki, kết quả thu được chuỗi 48 bit chia làm 8 khối đưa vào 8 hộp S-box. Mỗi hộp S-Box sẽ có 6 bit đầu vào và 4 bit đầu ra. Kết quả thu được là một chuỗi 32 bit tiếp tục vào hộp P-Box</p>
            <ul>
                <li>Mỗi hàng trong mỗi hộp S là hoán vị của các số nguyên từ 0 đến 15</li>
                <li>Các hộp S-box phi tuyến tính. Nói cách khác, đầu ra khối phải là biến đổi tuyến tính của đầu vào</li>
                <li>Sự thay đổi của một bit, hai bit hoặc nhiều hơn sẽ dẫn đến sự biến đổi ở đầu ra</li>
                <li>Nếu hai đầu vào của một S-box bất kì chi phí khác nhau 2 bit ở giữa (bit 3 và 4) thì đầu ra sẽ khác nhau ít nhất 2 bit</li>
            </ul>

            <center>
                <img src="./assets/img/ATTT/Chap5/img9.png" alt="" class="col-12 col-sm-10">
            </center>
            `]
        ]
    },
    ATTT09: {
        title: 'Hộp P-Box',
        index: [
            ['P-Box', 'ATTT091', `
            <p>Mỗi 4 bit đầu ra của các hộp S-box sẽ được ghép lại, theo thứ tự các hộp và được đem vào hộp P-box. Hộp P-box đơn giản chỉ là hoán vị các bit với nhau</p>

    <center>
      <img src="./assets/img/ATTT/Chap5/img10.png" alt="" class="col-12 col-sm-6">
    </center>
            `]
        ]
    },
    ATTT010: {
        title: 'Giải mã DES',
        index: [
            ['Giải mã', 'ATTT011', `
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-sm-6">
                    <center>
                        <img src="./assets/img/ATTT/Chap5/img11.png" alt="" class="col-12">
                    </center>
                    </div>
                    <div class="col-12 col-sm-6">
                    <p>Quá trình giải mã của DES cũng tương tự quá trình mã hóa. Chỉ khác nhau ở: Li = Ri-1. Ri = Li - 1 XOR f(Ri - 1, K16 - i + 1)</p>
                    <p>Như vậy, khóa K của hàm F sẽ đi từ khóa K16 đến khóa K1</p>
                    </div>
                </div>
            </div>
            `]
        ]
    }
}