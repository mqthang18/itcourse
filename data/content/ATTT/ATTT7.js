const ATTT7 = {
  ATTT01: {
    title: 'Giới thiệu',
    index: [
      ['Nội dung', 'ATTT011', `
            <ul>
                <li><b>Mã hóa đối xứng</b></li>
                <li><b>Mã hóa công khai</b></li>
                <li>Một số mốc lịch sử
                    <ul>
                    <li>Năm 1874, William Stanley Jevons -> mối quan hệ giữa các hàm một chiều (one-way function)</li>
                    <li>Năm 1976, Whitfield Diffle và Martin Hellman công bố một hệ thống mật mã hóa khóa bất đối xứng trong đó
                        nêu ra phương pháp trao đổi khóa công khai</li>
                    <li>Kể từ thập kỷ 1970, đã có rất nhiều thuật toán mã hóa, tạo chữ ký số, thỏa thuận khóa... được phát triển
                    </li>
                    </ul>
                </li>
            </ul>
            `]
    ]
  },
  ATTT02: {
    title: 'Mã hóa công khai',
    index: [
      ['Nội dung', 'ATTT021', `
            <p>
      <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse01" role="button" aria-expanded="false"
        aria-controls="collapse01">
        Mã hóa khóa công khai
      </a>
      <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse02" role="button" aria-expanded="false"
        aria-controls="collapse02">
        Sơ đồ tạo và chuyển giao khóa công khai
      </a>
      <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse03" role="button" aria-expanded="false"
        aria-controls="collapse03">
        Phong bì số dạng đơn giản
      </a>
    </p>
    <div class="collapse" id="collapse01"  style="text-align: justify;">
      <div class="card card-body">
        <h4>Mã hóa khóa công khai</h4>
        <ul>
          <li><b>Mã hóa khóa công khai: dạng mã hóa cho phép người dùng trao đổi các thông tin mật mà không cần phải
              trao đổi các khóa bí mật trước đó</b></li>
          <li>Sử dụng một cặp khóa có quan hệ toán học với nhau là khóa công khai (Public key) và khóa riêng (Private
            key) hay khóa bí mật (secret key)</li>
          <li>Mục đích:
            <ul>
              <li>Mã hóa</li>
              <li>Tạo chữ ký số</li>
              <li>Thỏa thuận khác</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="collapse" id="collapse02" style="text-align: justify;">
      <div class="card card-body">
        <h4>Sơ đồ tạo và chuyển giao khóa công khai</h4>
        <center>
          <img src="./assets/img/ATTT/Chap7/img1.png" alt="" class="col-12 col-sm-8">
          <p>Chuyển giao khóa công khai</p>
        </center>
      </div>
    </div>
    <div class="collapse" id="collapse03" style="text-align: justify;">
      <div class="card card-body">
        <h4>Phong bì số dạng đơn giản</h4>
        <ul>
          <li>Mã đối xứng có nhược điểm căn bản là sự không an toàn khi chuyển giao khóa trong môi trường không tin cậy
          </li>
          <li>Mã đối xứng đảm bảo được an toàn trong việc chuyển giao khóa mã nhưng lại có nhược điểm là tốc độ lập mã,
            giải mã rất chậm</li>
          <li>Phong bì số (Digital envelope) là một biện pháp kết hợp của hai loại mã đối xứng và bất đối xứng để chuyển
            giao thông điệp an toàn và tin cậy</li>
          <li>Dùng sơ đồ trao đổi khóa công khai nói trên làm một phong bì số để chuyển giao khóa mã đối xứng cho đối
            tác của mình trong môi trường giao dịch không tin cậy</li>
        </ul>

        <div>
          <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse031" role="button" aria-expanded="false"
              aria-controls="collapse031">
              Các bước thực hiện
            </a>
          </p>
          <div class="collapse" id="collapse031">
            <div class="card card-body">
              <h4>Các bước thực hiện</h4>
              <p><b>Bước 1. Tạo phong bì số</b></p>
              <ul>
                <li>A tạo khóa công khai E1 gửi cho B, giữ khóa riêng D1</li>
                <li>B tạo khóa riêng D2 (của B) giữ cho mình, tạo khóa công khai E2 (của B), dùng E1 (nhận từ A) mã hóa:
                  E1(E2) = E'2 gửi E'2 cho A</li>
                <li>Chỉ có A sở hữu khóa riêng D1 nên giải mã được: E1(E'2) = E2. Từ đó chỉ có A và B cùng sở hữu khóa
                  công khai E2 (do B tạo)</li>
              </ul>
              <p><b>Bước 2. CHuyển giao khóa đối xứng</b></p>
              <ul>
                <li>A tạo khóa đối xứng K dùng E2 mã hóa: E2(K) = K' gửi cho B</li>
                <li>B dùng D2 giải mã: D2(K') = K</li>
                <li>Chỉ có A và B cùng biết khóa K, từ đó giao dịch bằng khóa đối xứng K</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
            `]
    ]
  },
  ATTT03: {
    title: 'Thuật toán RSA',
    index: [
      ['Nội dung', 'ATTT031', `
            <div>
      <p>
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse31" role="button" aria-expanded="false"
          aria-controls="collapse31">
          Giới thiệu thuật toán
        </a>
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse32" role="button" aria-expanded="false"
          aria-controls="collapse32">
          Ví dụ và thuật toán RSA
        </a>
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse33" role="button" aria-expanded="false"
          aria-controls="collapse33">
          Ưu và nhước điểm của RSA
        </a>
      </p>
      <div>
        <div class="collapse" id="collapse31">
          <div class="card card-body">
            <h4>Giới thiệu thuật toán</h4>

            <ul>
              <ul>
                <li>RSA là một hệ mã hóa bất đối xứng được phát triển bởi Ron Rivest, Adi Shamir và Leonard Adleman (tên
                  của nó cũng chính là tên viết tắt của 3 tác giả này) và được sử dụng rộng rãi trong công tác mã hóa và
                  công nghệ chữ ký điện tử</li>
                <li>Trong hệ mã hóa này, public key có thể chia sẻ công khai cho tất cả mọi người</li>
                <li>Hoạt động của RSA dựa trên 4 bước chính: sinh khóa, chia sẻ key, mã hóa và giải mã</li>
              </ul>
            </ul>
          </div>
        </div>
        <div class="collapse" id="collapse32">
          <div class="card card-body">
            <h4>Ví dụ và thuật toán RSA</h4>

            <div>
              <p>Ví dụ</p>

              <ul>
                <li>Giả sử An và Bình cần trao đổi thông tin bí mật thông qua một kênh không an toàn (ví dụ như qua
                  Internet)</li>
                <li>Với thuật toán RSA, An đầu tiên cần tạo ra cho mình một cặp khóa gồm khóa công khai E và khóa bí mật
                  D theo các bước sau:
                  <br>
                  <p><b>Mô tả thuật toán</b></p>
                  <ol>
                    <li>Chọn 2 số nguyên tố khá lớn (>1024 bit) P và Q, P &ne; Q</li>
                    <li>Lấy tích số: N = PQ, N được gọi là modulo mã hóa</li>
                    <li>Chọn số E sao cho: 1 < E < PQ, E và (P-1)(Q-1) nguyên tố cùng nhau (vậy E phải chọn là một số
                        lẻ). E được gọi là số mũ mã hóa</li>
                    <li>Tính số D sao cho tích số DE = 1[mod(P-1)(Q-1)] có nghĩa là tích số DE chia cho tích số
                      (P-1)(Q-1) có số dư là 1, hay là DE - 1 chia hết cho (P-1)(Q-1). Ta dùng phương pháp thử dần các
                      số nguyên X sao cho có được: D = [X(P-1)(Q-1)+1]/E là số nguyên. D được gọi là số mũ giải mã</li>
                  </ol>
                  <p>Khóa công khai An gửi cho Bình (qua đường thông tin bất kỳ) là cặp số [N,E]</p>
                  <p>Khóa bí mật An giữ cho riêng mình là cặp số [N,D]</p>
                </li>
              </ul>
            </div>

            <div>
              <p><b>Mã hóa</b></p>

              <ul style="list-style-type: '- ';">
                <li>Bình nhận được khóa công khai của An gửi. Bình có thông tin điệp gốc (plaintext) T (thông điệp đã
                  được số hóa, T thực ra là một con số dạng nhị phân được đổi thành số thập phân nào đó) cần gửi cho An
                </li>
                <li>Bình mã hóa bằng phép toán: TE mod N = C; T = plaintext, C = ciphertext. Phép toán "lũy thừa theo
                  modulo" có nghĩa là lấy T lũy thừa E rồi chia cho N và lấy số dư</li>
                <li>Bình gửi thông điệp mã hóa C cho An</li>
              </ul>
            </div>

            <div>
              <p><b>Giải mã</b></p>

              <ul style="list-style-type: '- ';">
                <li>An nhận được C</li>
                <li>An giải mã bằng phép toán: C<sup>0</sup> mod N = T</li>
                <li>Như vậy là ở đây ta cần phải chứng minh được rằng: (T<sup>E</sup> mod N)<sup>0</sup> mod N = T</li>
              </ul>
            </div>

            <div>
              <p><b>Một số lưu ý:</b></p>

              <ul>
                <li>Các số nguyên tố thường được chọn bằng phương pháp thử ngẫu nhiên</li>
                <li>Các bước 3 và 4 có thể được thực hiện bằng giải thuật Euclid mở rộng</li>
              </ul>
            </div>

            <div>
              <p><b>Một dạng khác của khóa bí mật</b></p>

              <ul style="list-style-type: '- ';">
                <li>P và Q, hai số nguyên tố chọn ban đầu</li>
                <li>D mod (P-1) và D mod (Q-1) (thường được ký hiệu là DmP1 và DmQ1)</li>
                <li>(1/Q) mod P (thường được gọi là iQmP)
                  <br>
                  <ul style="list-style-type: '* ';">
                    <li>giải mã và lặp mã nhanh hơn với việc sử dụng định lý số dư Trung Hoa</li>
                    <li>khóa phải giữ bí mật</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="collapse" id="collapse33">
          <div class="card card-body">
            <h4>Ưu và nhược điểm của RSA</h4>

            <div>
              <p><b>Ưu điểm</b></p>
              <p>Mã RSA có độ bảo mật cao: hầu như không có thuật toán giải tổng quát mà phải dò thử dần</p>
            </div>

            <div>
              <p><b>Nhược điểm</b></p>

              <ul>
                <li>Thuật toán RSA thực hiện một dãy phép tính lũy thừa modulo khá lớn</li>
                <li>Khóa công khai = O(k2) bước tính toán, Khóa riêng = O(k3),</li>
                <li>Tổng quát mã RSA có độ phức tạp tính toán là O(k4) - k là số bit của modulo. Vì vậy mã RSA có nhược
                  điểm đầu tiên là tốc độ lập mã và giải mã rất chậm</li>
                <li>Một nhược điểm lớn khác của mã RSA là nguy cơ về "tính tin cậy"</li>
              </ul>
            </div>


            <div>

              <p>Dùng sơ đồ trao đổi khóa công khai để đảm bảo an toàn và tin cậy cho cả hai phía gửi và nhận tin. Sơ đồ
                trao đổi khóa công khai gồm các bước</p>
              <ul style="list-style-type: '- ';">
                <li>A tạo một cặp khóa, khóa công khai (của A) là E1 cho B và khóa riêng D1 giữ cho mình</li>
                <li>B tạo khóa riêng D2, khóa công khai E2 (của B)</li>
                <li>Dùng E1 nhận được của A để mã hóa E2: E1(E2) = E'2, B gửi E'2 cho A và giữ D2 cho riêng mình</li>
                <li>A nhận được E'2, giải mã bằng D1 (Chỉ mình A có D1): Chỉ có A độc được E2. Khi đó chỉ có 2 đối tác A
                  và B cùng sở hữu khóa công khai E2</li>
                <li>A có thông điệp gốc P, dùng E2 (của B mã hóa thông điệp: E2(P) = C, gửi thông điệp mã hóa (bằng khóa
                  công khai của B) cho B chắc chắn chỉ có B đọc được</li>
                <li>B: nhận chắc chắn do A gửi, đọc: D2(C) = P</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
            
            `]
    ]
  },
  ATTT04: {
    title: 'Một số hệ mật mã khóa công khai khác',
    index: [
      ['Nội dung', 'ATTT032', `
            <h4>Một số hệ mật mã khóa công khai khác</h4>
    <ul>
      <li>Hệ mật mã ElGamal: Dựa trên bài toán Logarit rời rạc</li>
      <li>Hệ mật ãm đường cong Elliptic: Dựa trên cấu trúc đại số của các đường cong elliptic trên những trường hữu hạn
      </li>
    </ul>


    <div>
      <p>
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse41" role="button" aria-expanded="false"
          aria-controls="collapse41">
          Hệ mật mã Elgamal
        </a>
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse42" role="button" aria-expanded="false"
          aria-controls="collapse42">
          Hệ mật mã đường cong Elliptic
        </a>
      </p>
      <div>
        <div class="collapse" id="collapse41">
          <div class="card card-body">
            <h4>Hệ mật mã Elgamal</h4>
            <p>Logarit rời rạc</p>
            <ul>
              <li>Một Logarit thông thường log<sub>a</sub>(b) là nghiệm của phương trình a<sup>x</sup>=b trong trường số
                thực hay số phức</li>
              <li>Nếu g và h là phần tử của một nhóm cyclic hữu hạn G thì một nghiệm của một phương trình
                g<sup>x</sup>=h cũng được gọi là Logarit cơ số g của h trong nhóm G</li>
            </ul>
            <div>
              <p><b>Ví dụ</b></p>
              <p>Xét nhóm (Z<sub>p</sub>)<sup>x</sup> là tập hợp các lớp tương đương {1,...,p-1} đối với phép nhân theo
                modulo của một số nguyên tố p. Nếu muốn tìm lũy thừa k của 1 số trong nhóm đó ta chỉ việc lấy lũy thừa k
                của số nguyên đó rồi chia kết quả thu được cho p và lấy số dư. Phép toán đó gọi là phép lũy thừa rời rạc
                hay lũy thừa modulo.</p>
            </div>
            <ul>
              <li>Tạo khóa công khai ElGamal
                <ul>
                  <li>An và Bình có chung (công khai) một số nguyên tố p và một số sinh g (generator)</li>
                  <li>An chọn một số ngẫu nhiên a và tính A = g<sup>a</sup>, Bình cũng chọn một số ngẫu nhiên b và tính
                    B = g<sup>b</sup></li>
                  <li>Khóa công khai của An là A và khóa riêng là a; tương tự như vậy, khóa công khai của Bình là B còn
                    khóa riêng là b.</li>
                </ul>
              </li>
              <li>Mã hóa và giải mã thông điệp:
                <ul>
                  <li>Nếu Bình muốn gửi một thông điệp m cho An, Bình sẽ chọn ngẫu nhiên một số k bé hơn p rồi tính:
                    <br>
                    <center>
                      c<sub>1</sub> = g<sup>k</sup> mod p; c<sub>2</sub> = A<sup>k</sup>*m mod p tiếp đó gửi
                      c<sub>1</sub> và c<sub>2</sub> cho An.
                    </center>
                  </li>
                  <li>An sử dụng c<sub>1</sub> và c<sub>2</sub> để tái hiện thông điệp bằng cách tính:
                    <br>
                    <center>
                      c<sub>1</sub><sup>-a</sup>*c<sub>2</sub> mod p = m bởi vì rằng:
                      <br>
                      c<sub>1</sub><sup>-a</sup>*c<sub>2</sub> mod p = (g<sup>k</sup>)<sup>-a</sup>*A<sup>k</sup>*m =
                      g<sup>-a</sup>*<sup>k</sup>*A<sup>k</sup>*m
                      = (g<sup>a</sup>)<sup>-k</sup>*A<sup>k</sup>*m = A<sup>-k</sup>*A<sup>k</sup>*m= 1*m = m
                    </center>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="collapse" id="collapse42">
          <div class="card card-body">
            <h4>Hệ mật mã đường cong Elliptic</h4>


            <div class="container-fluid">
              <div class="row">
                <div class="col-12 col-sm-6">
                  <ul>
                    <li>Mật mã đường cong elliptic ECC (Elliptic Curve Cryptography) là một dạng mã hóa khóa công khai
                      dựa
                      trên cấu trúc đại số của các đường cong elliptic trên những trường hữu hạn</li>
                    <li>Việc sử dụng các đường cong elliptic trong mật mã học do Koblitz và Victor S, Miller đề xuất vào
                      năm
                      1985</li>
                    <li>Đường cong elliptic là một đường cong phẳng chứa những điểm có tọa độ thỏa mãn phương trình bên
                      dưới</li>
                  </ul>
                </div>
                <div class="col-12 col-sm-6">
                  <center>
                    <b>y<sup>2</sup> = x<sup>3</sup> + ax + b</b>
                    <br>
                    <img src="./assets/img/ATTT/Chap7/img2.png" alt="" class="col-12 col-sm-8">
                  </center>
                </div>
              </div>
              <ul>
                <li>Đường cong elip không phải hình elip (hình bầu dục), nhưng được biểu diễn dưới dạng một đường vòng
                  giao tại hai trục. ECC dựa vào các thuộc tính của một loại phương trình cụ thể được tạo từ nhóm (tập
                  hợp các phần tử cùng với phép toán hai ngôi kết hợp hai phần tử bất kỳ của tập hợp thành một phần tử
                  thứ ba)</li>
                <li>Đồ thị xuất phát từ các điểm nơi giao nhau giữa đường cong và hai trục. Lấy điểm đó nhân với một số
                  để tìm thêm điểm tiếp theo, nhưng rất khó để biết cần nhân với số nào cho dù kết quả và điểm tiếp theo
                  đã được cho trước</li>
                <li>Giúp tạo mật mã nhanh hơn, nhỏ hơn và mạnh hơn</li>
                <li>ECC tạo ra các mật mã thông qua thuộc tính của phương trình đường cong elip thay cho phương pháp sử
                  dụng những số nguyên tố lớn truyền thống</li>
                <li>Công nghệ này có thể được sử dụng cùng với hầu hết những phương thức mã hóa công khai như RSA và
                  Diffie-Hellman</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
            `]
    ]
  },
  ATTT011: {
    title: 'Video bài giảng',
    index: [
      ['ĐH Trà Vinh', 'ATTT0111', `
                      <p>Bài giảng <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220126_AntoanvaBaomatThongtin/Video/Chuong7.mp4" target="_blank">Link</a></p>
                  `],
      ['Youtube', 'ATTT0112', ``],
    ]
  }
}