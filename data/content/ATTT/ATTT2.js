var ATTT2 = {
  ATTT01: {
    title: 'Lý thuyết thông tin',
    index: [
      ['Giới thiệu Entropy và trường hợp tổng quát', 'ATTT011', `
            <h5>Giới thiệu Entropy và trường hợp tổng quát</h5>

            <ul>
              <li>Được giới thiệu năm 1948 bởi Claude Elmwood Shannon</li>
              <li>Entropy là gì?
                <ul>
                  <li>Lý thuyết thông tin định nghĩa khối lượng thông tin trong một thông báo là số bít nhỏ nhất cần thiết
                    để mã hóa tất cả những nghĩa có thể thông báo đó</li>
                  <li>H(M) = log<sub>2</sub>n</li>
                </ul>
              </li>
              <li>Trong trường hợp tổng quát, Entropy của một thông báo là log<sub>2</sub>n, với n là số khả năng có thể
                (ý nghĩa) của thông báo</li>
            </ul>
  
            <center>
              <h1>H(M) = log<sub>2</sub>n</h1>
            </center>
  
            <p>Ví dụ</p>
            <ul>
              <li>Entropy của thông báo gioi_tinh là 1 bít, ký hiệu H (gioi_tinh) = 1</li>
              <li>Entropy của thông báo số ngày trong tuần là nhỏ hơn 3 bits</li>
            </ul>
  
            <div class="row">
              <div class="col-12 col-sm-3">
                <p>Ví dụ</p>
                <p style="text-align: justify;">trường ngay_thang trong một cơ sở dữ liệu chứa không quá 3 bít thông
                  tin, bởi vì thông tin ngày có thể mã hoá với 3 bít dữ liệu:</p>
              </div>
              <div class="col-12 col-sm-3">
                <ul>
                  <li>000 = Sunday</li>
                  <li>001 = Monday</li>
                  <li>010 = Tuesday</li>
                  <li>011 = Wednesday</li>
                  <li>100 = Thursday</li>
                  <li>101 = Friday</li>
                  <li>110 = Saturday</li>
                  <li>111 is unused</li>
                </ul>
              </div>
              <div class="col-12 col-sm-3">
                <p>Trường gioi_tinh của một cơ sở dữ liệu chỉ chứa 1 bit thông tin, nó có thể lưu trữ như một trong hai
                  xâu ký tự ASCII: Nam, Nữ</p>
              </div>
            </div>
  
            `],
      ['Tốc độ của ngôn ngữ (Rate of Language)', 'ATTT012', `
            
            <h5>Tốc độ của ngôn ngữ</h5>
  
            <center>
              <h4>r = H(M) / N</h4>
            </center>
            <pre>N: là độ dài của thông báo và M là một thông điệp có độ dài N</pre>
  
            <ul>
              <li>Ví dụ: tốc độ của tiếng Anh bình thường là 0.28 do đó mỗi chữ cái tiếng Anh có 1.3 bit nghĩa.</li>
              <li>Tốc độ tuyệt đối (absolute rate) của một ngôn ngữ là số bits lớn nhất cần thiết để mã hóa các
                ký tự của ngôn ngữ đó. Nếu có L ký tự trong một ngôn ngữ, thì tốc độ tuyệt đối là:
                <br>
                <center>
                  <h4>R = log<sub>2</sub>L</h4>
                </center>
              </li>
              <li>Ví dụ: đối với tiếng Anh gồm 26 chữ cái, tốc độ tuyệt đối là log<sub>2</sub>26 = 4.7 bits/chữ cái</li>
            </ul>
            `],
      ['Độ dư thừa (Redundancy)', 'ATTT013', `
            <h5>Độ dư thừa (Redundancy)</h5>
            <ul>
              <li>Độ dư thừa (Redundancy) của một ngôn ngữ ký hiệu là D và D tiếng Anh:
                <ul>
                  <li>D = 1 - 0.28 = 0.72 letters/letter = R - r</li>
                  <li>Đối với D = 4.7 - 1.3 = 3.4 bits/letter</li>
                </ul>
              </li>
              <li>Như vậy mỗi chữ cái có 1.3 bit nghĩa và 3.4 bit dư thừa (xấp xỉ 72%)</li>
            </ul>
            `],
      ['Tính an toàn của hệ thống mã hóa', 'ATTT014', `
            <h5>Tính an toàn của hệ thống mã hóa</h5>
            <ul>
              <li>Mục đích của người dò mã là:
                <ul>
                  <li>phát hiện ra khóa sử dụng của hệ mã (K-key)</li>
                  <li>bản gốc (P-plaintext)</li>
                </ul>
              </li>
              <li>Hệ thống mã hoá chỉ an toàn tuyệt đối nếu nếu số khoá có thể sử dụng ít nhất phải bằng số
                thông báo có thể.</li>
              <li>Ngoại trừ các hệ mã an toàn tuyệt đối, các bản mã thường chứa một số thông tin đúng với bản gốc
                , điều này là không thể tránh được.</li>
              <li>Một thuật toán mật mã tốt giữ cho thông tin bị tiết lộ ở mức nhỏ nhất và khai thác tốt những thông
                tin này để phát hiện ra bản gốc.</li>
              <li>Người thám mã sử dụng sự dư thừa tự nhiên của ngôn ngữ để làm giảm số khả năng có thể có của
                bản rõ. Nhiều thông tin dư thừa của ngôn ngữ, sẽ dễ dàng hơn cho quá trình thám mã. Chính vì lý do
                này mà nhiều mô hình mã hóa sử dụng thuật toán nén bản rõ để giảm kích thước văn bản trước khi mã
                hoá chúng. Vì quá trình nén làm giảm sự dư thừa của thông báo. Entropy của một hệ mã mật là kích
                thước của không gian khoá (Keyspace).
                <center>
                  <p>H(K) = log2(number of keys)</p>
                </center>
              </li>
            </ul>
            `],
      ['Độ an toàn của hệ thống mã mật (Unicity Distance)', 'ATTT015', `
            <h5>Unicity Distance</h5>

          <ul>
            <li>Shannon cũng đưa ra một khái niệm gọi là Unicity Distance (ký hiệu U) để đánh giá độ an toàn của một hệ
              mật mã. Đối với một hệ mật mã U của nó là:
              <center>
                <h5>U = H(K)/D</h5>
              </center>
            </li>
            <li>Đây là số nhỏ nhất các bản mã cần thiết để có thể tiến hành thám mã theo cách thử tất cả các khóa có thể
              (brute-force attack) thành công. Chẳng hạn đối với hệ mã thay thế đơn âm (như Caesar) trên bảng chữ cái
              tiếng Anh ta sẽ có:
              <center>
                <h5>H(K) = log<sub>2</sub>26! = 87.D = 3.4 => U = 25.5</h5>
              </center>
            </li>
            <li>Điều này có nghĩa là nếu chúng ta có khoảng 25 chữ cái bản mã chúng ta chỉ có thể thử để khớp với một
              bản rõ</li>
          </ul>
            `],
      ['2 kỹ thuật che dấu sự dư thừa thông tin', 'ATTT016', `
            <h5>2 kỹ thuật cơ bản để che dấu sự dư thừa thông tin:</h5>
            <ul>
              <li>Kỹ thuật lộn xộn (Confusion): che dấu mối quan hệ giữa bản rõ và bản gốc. Kỹ thuật này làm thất bại các
                cố gắng nghiên cứu mã để tìm kiếm thông tin dư thừa và thống kê mẫu. Phương pháp dễ nhất để thực hiện điều
                này là thông qua kỹ thuật thay thế. Một hệ mã hóa thay thế đơn giản, chẳng hạn hệ mã dịch vòng Caesar, dựa
                trên nên tảng của sự thay thế các chữ cái của bản rõ, nghĩa là chữ cái này được thay thế bằng chữ cái khác
              </li>
              <li>Kỹ thuật rườm rà (Diffusion): làm mất đi sự dư thừa của bản rõ bằng cách tăng sự phụ thuộc vào bản rõ
                (và khóa). Công việc tìm kiếm sự dư thừa của người thám mã sẽ rất mất thời gian và phức tạp, cách đơn giản
                nhất tạo ra sự rườm rà là thông qua việc đổi chỗ (hay còn gọi là kỹ thuật hoán vị)</li>
            </ul>
            `]
    ]
  },
  ATTT02: {
    title: 'Lý thuyết độ phức tạp',
    index: [
      ['Giới thiệu', 'ATTT021', `
            <ul>
              <li>Lý thuyết độ phức tạp cung cấp một phương pháp để phân tích độ phức tạp tính toán của thuật toán và các
                kỹ thuật mã hóa khác nhau. Nó so sánh các thuật toán mã hóa, kỹ thuật và phát hiện ra độ an toàn của các
                thuật toán đó. Lý thuyết thông tin đã cho chúng ta biết rằng một thuật toán mã hóa có thể bị bại lộ. Còn
                lý thuyết độ phức tạp cho biết khả năng bị thám mã của một hệ mã mật.</li>
              <li>Độ phức tạp thời gian của thuật toán là một hàm của kích thước dữ liệu input của thuật toán đó. Thuật
                toán có độ phức thời gian f (n) đối với mọi n và kích thước bước n, nghĩa là số bước thực hiện của thuật
                toán lớn hơn f(n) bước</li>
              <li>Độ phức tạp thời gian thuật toán phụ thuộc vào mô hình của các thuật toán, số các bước nhỏ hơn nếu các
                hoạt động được tập trung một bước (chẳng hạn như các vòng lặp, các lời gọi hàm...)</li>
            </ul>
            `],
      ['Độ an toàn tính toán', 'ATTT022', `
            <h5>Độ an toàn tính toán</h5>
          <ul>
            <li>Định nghĩa: Một hệ mật được gọi là an toàn về mặt tính toán nếu có một thuật toán tốt nhất để phá bỏ nó
              thì cần ít nhất N phép toán, với N là một số rất lớn nào đó</li>
            <li>Tuy nhiên trong thực tế, không có một hệ mật nào chứng tỏ là an toàn theo định nghĩa trên. Vì vậy, trên
              thực tế, người ta gọi hệ mật là "an toàn tính toán" nếu có một thuật toán để phá nó nhưng đòi hỏi thời
              gian lớn đến mức không chấp nhận được (thuật toán có độ phức tạp hàm mũ hoặc thuộc lớp các bài toán có độ
              phức tạp NP)</li>
            <li>Một cách tiếp cận khác về độ "an toàn tính toán" là quy nó về một bài toán đã được nghiên cứu kỹ và được
              coi là khó</li>
          </ul>
            `],
      ['Độ an toàn không điều kiện', 'ATTT023', `
            <h5>Độ an toàn không điều kiện</h5>
            <ul>
              <li>Một hệ mật được coi là an toàn không điều kiện khi nó không thể bị phá ngay cả với khả năng tính
                toán không hạn chế.</li>
              <li>Rõ ràng là “độ an toàn không điều kiện” không thể nghiên cứu theo quan điểm độ phức tạp tí nh toán vì
                thờ i gian tí nh toán là không hạn chế. Vì vậy, ở đây lý thuyết xác suất sẽ được đề cập để nghiên cứu
                về “an toàn không điều kiện”.</li>
            </ul>
            <p style="text-align: justify;">
              <b>Định lý Shannon</b>
              <br>
              Giả sử (P,C,K,E,D) là một hệ mặt, khi đó hệ mật đạt được độ mật hoàn thiện khi và chỉ khi |K| &ge; |C|.
              Trong trường hợp |K| = |C| = |P|, hệ mật đạt độ mật hoàn thiện khi và chỉ khi mỗi khóa K được dùng với xác
              xuất bằng nhau, bằng 1/|K| và với mỗi x &sub; P, mỗi y &sub; C có một khóa K duy nhất sao cho eK(x) = y.[5]
            </p>
            `],
      ['Lý thuyết toán học', 'ATTT024', `
            <h5>Lý thuyết toán học</h5>

            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse241" role="button" aria-expanded="false"
                aria-controls="collapse241">
                Modulo số học
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse242" role="button" aria-expanded="false"
                aria-controls="collapse242">
                Số nguyên tố
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse243" role="button" aria-expanded="false"
                aria-controls="collapse243">
                Ước số chung lớn nhất
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse244" role="button" aria-expanded="false"
                aria-controls="collapse244">
                Phần tử nghịch đảo
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse245" role="button" aria-expanded="false"
                aria-controls="collapse245">
                Phương trình đồng dư bậc nhất 1 ẩn
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse246" role="button" aria-expanded="false"
                aria-controls="collapse246">
                Các thuật toán kiểm tra số nguyên tố
              </a>
            </p>
  
            <div>
              <div class="collapse" id="collapse241">
                <div class="card card-body">
                  <h5>Modulo số học</h5>
                  <ul>
                    <li>Về cơ bản a = b(mod n) nếu a = b + kn trong đo k là một số nguyên. Nếu a và b dương và a nhỏ hơn
                      n, chúng ta có thể gọi a là phần dư của b khi chia cho n. Nói chung a và b đều là phần dư khi chia
                      cho n. Người ta còn gọi b là thặng dư của a theo modulo n và a là đồng dư của b theo modulo n</li>
                    <li>Modulo số học cũng giống như một số học bình thường, bao gồm các phép toán giao hoán, kết hợp và
                      phân phối. Mặt khác giảm mỗi giá trị trung gian trong suốt quá trình tính toán.
  
                      <ul>
                        <li>(a+b) mod n = ((a mod n) + (b mod n)) mod n</li>
                        <li>(a-b) mod n = ((a mod n) - (b mod n)) mod n</li>
                        <li>(axb) mod n = ((a mod n) x (b mod n)) mod n</li>
                        <li>(ax(b+c)) mod n = (((axb) mod n) + ((axc) mod n)) mod n</li>
                      </ul>
                    </li>
  
                  </ul>
                </div>
              </div>
              <div class="collapse" id="collapse242">
                <div class="card card-body">
                  <h5>Số nguyên tố</h5>
                  <ul>
                    <li>Số nguyên tố là một số lớn hơn 1, nhưng chỉ chia hết cho 1 và chính nó, ngoài ra không còn số nào
                      nó có thể chia hết nữa</li>
                    <li>Số 2 là một số nguyên tố đầu tiên và là số nguyên tố chẵn duy nhất. Do vậy 7, 17, 53, 73, 2521,
                      2365347723339 cũng là số nguyên tố</li>
                    <li>Số lượng số nguyên tố là vô tận</li>
                    <li>Hệ mật mã thường sử dụng số nguyên tố lớn cỡ 512 bits và thậm chí lớn hơn như vậy</li>
                  </ul>
                </div>
              </div>
              <div class="collapse" id="collapse243">
                <div class="card card-body">
                  <h5>Ước số chung lớn nhất</h5>
  
                  <ul>
                    <li>Hai số a và n được gọi là hai số nguyên tố cùng nhau nếu chúng không có thừa số chung nào
                      khác 1, hay nói một cách khác, nếu ước số chung lớn nhất của a và n là bằng 1.</li>
                    <li>GCD(a,n)=1, (GCD-Greatest Common Divisor)</li>
                    <li>Số 15 và 28 là hai số nguyên tố cùng nhau, nhưng 15 và 27 thì không phải là hai số nguyên tố
                      cùng nhau do có ước số chung là 1 và 3, dễ dàng thấy 13 và 500 cũng là một cặp số nguyên tố
                      cùng nhau.</li>
                    <li>Một số nguyên tố sẽ là nguyên tố cùng nhau với tất cả các số nguyên tố khác trừ các bội
                      số của nó.</li>
                    <li>Một cách dễ nhất để tính toán ra ước số chung lớn nhất của hai số là nhờ vào thuật toán
                      Euclid.</li>
                    <li>Vành Z<sub>n</sub> (vành đồng dư module N)
                      <ul>
                        <li>Tập các số nguyên Z<sub>n</sub> = {0, 1, ..., N - 1} trong đó N là một số tự nhiên dương với
                          hai phép toán cộng (+) và nhân (-) được định nghĩa như sau tạo thành một vành đồng dư modulo N
                          (hay còn gọi là tập thặng dư đầy đủ theo modulo N):
                          <ul>
                            <li>Phép cộng: &forall;a,b &isin; Z<sub>N</sub>: a+b = (a+b) mod N</li>
                            <li>Phép nhân: &forall;a,b &isin; Z<sub>N</sub>: a.b = (a*b) mod N</li>
                          </ul>
                        </li>
                        <li>Theo tính chất của modulo số học chúng ta dễ dàng nhận thấy Z<sub>n</sub> là một vành giao
                          hoán và kết hợp. Hầu hết các tính toán trong các hệ mã mật đều được thực hiện trên một vành
                          Z<sub>n</sub> nào đó</li>
                        <li>Trên vành Z<sub>n</sub> số 0 là phần tử trung hòa vì a + 0 = 0 + a = a, &forall;a &isin;
                          eZ<sub>n</sub>, số 1 được gọi là phần tử đơn vị vì a.1 = 1.a = &forall;a &isin; Z<sub>N</sub>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="collapse" id="collapse244">
                <div class="card card-body">
                  <h5>Phần tử nghịch đảo</h5>
                  <ul>
                    <li>Trên trường số thức R, số nghịch đảo của 5 là 1/5, bởi 5 x 1/5 = 1. Còn trên một vành số nguyên
                      Z<sub>n</sub> người ta đưa ra khái niệm về số nghịch đảo của một số như sau:
                      <ul>
                        <li>Giả sử a &isin; Z<sub>n</sub> và tồn tại b &isin; Z<sub>n</sub>, sao cho a.b = (a*b) mod N =
                          1. Khi đó b được gọi là phần tử nghịch đảo của a trên Z<sub>n</sub> và ký hiệu a<sub>-1</sub> =
                          b</li>
                        <li>Việc tìm phần tử nghịch đảo của một số a &isin; Z<sub>N</sub> cho trước thực chất tương đương
                          với việc tìm hai số b và k sao cho: a.b = k.N + 1 trong đó b, k &isin; Z<sub>n</sub>. Hay viết
                          gọn lại là a<sup>1</sup> = b (mod N)</li>
                        <li>Định lý về sự tồn tại của phần tử nghịch đảo: Nếu GCD(a, N) = 1 thì tồn tại duy nhất 1 số b
                          &isin; Z<sub>N</sub> là phần tử nghịch đảo của a, nghĩa là thỏa mãn a.b = (a*b) mod N = 1</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="collapse" id="collapse245">
                <div class="card card-body">
                  <h5>Phương trình đồng dư bậc nhất 1 ẩn</h5>
  
                  <ul>
                    <li>Phương trình đồng dư bậc nhất 1 ẩn là phương trình có dạng: <br>
                      ax = b (mod N) trong a, b = Z<sub>N</sub> là các hệ số còn x là ẩn số.
                    </li>
                    <li>Nếu như GCD(a, N) = 1 chúng ta có thể tìm a<sub>1</sub> sau đó nhân vào 2 về của phương trình và
                      tìm ra nghiệm một cách dễ dàng tuy nhiên nếu g = GCD(a,N) là một giá trị khác 1 thì sao? Khi đó bài
                      toán có thể vô nghiệm hoặc có nhiều nhiệm. Chúng ta xét định lý sau:
                      <br>
                      Giả sử g = GCD(a, N) và nếu b chia hết cho g thì phương trình đồng dư bậc nhất 1 ẩn:
                      <ul>
                        <li>ax = b (mod N) sẽ có g nghiệm có dạng</li>
                        <li>x = ((b/g)X<sub>0</sub> + t(n/g)) (mod N) </li>
                        <li>và X<sub>0</sub> là nghiệm của phương trình (a/g)x = 1 (mod N/g)</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="collapse" id="collapse246">
                <div class="card card-body">
                  <h5>Các thuật toán kiểm tra số nguyên tố</h5>
  
                  <ul>
                    <li>Hàm một phía (one-way functions) là một khái niệm cơ bản của mã hóa công khai. Việc nhân hai số
                      nguyên tố là một ví dụ về hàm một phía, nhân các số nguyên tố lớn để tạo thành một hợp số là dễ,
                      nhưng công việc ngược lại nhân tích một số nguyên lơn thành dạng thừa số nguyên tố lại là một bài
                      toán khó (chưa có một thuật toản tốt)</li>
                    <li>Các thuật toán mã hóa công khai đều cần phải sử dụng các số nguyên tố. Có một số phương pháp để
                      sinh ra số nguyên tố và hầu hết chúng đều dựa trên các thuật toán kiểm tra tính nguyên tố của một số
                      nguyên</li>
                  </ul>
  
                  <p>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse2461" role="button"
                      aria-expanded="false" aria-controls="collapse2461">
                      Thuật toán Soloway-Strassen
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse2462" role="button"
                      aria-expanded="false" aria-controls="collapse2462">
                      Thuật toán Rabin-Miller
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse2463" role="button"
                      aria-expanded="false" aria-controls="collapse2463">
                      Thuật toán Lehman
                    </a>
                  </p>
  
                  <div>
                    <div class="collapse" id="collapse2461">
                      <div class="card card-body">
                        <h5>Thuật toán Soloway-Strassen</h5>
  
                        <p>Thuật toán Soloway-Strassen: Soloway và Strassen đã phát triển thuật toán có thể kiểm tra số
                          nguyên tố. Thuật toán này sử dụng hàm Jacobi</p>
  
                        <ol>
                          <li>Chọn ngẫu nhiên một số a nhỏ hơn p</li>
                          <li>Nếu ước số chung lớn nhất gcd(a,p) &ne; 1 thì p là hợp số</li>
                          <li>Tính j = a<sup>(p-1)/2</sup> mod p</li>
                          <li>Tính số Jacobi J(a,p)</li>
                          <li>Nếu j &ne; J(a,p) thì p không phải là số nguyên tố</li>
                          <li>Nếu j = J(a,p) thì nói p có thể là số nguyên tố với chắc chắn 50%</li>
                        </ol>
  
                        <p>Lặp lại các bước này n lần, mỗi lần với một giá trị ngẫu nhiên khác nhau của a. Phần dư của hợp
                          số n phép thử là không quá 2<sup>n</sup></p>
                      </div>
                    </div>
                    <div class="collapse" id="collapse2462">
                      <div class="card card-body">
                        <h5>Thuật toán Rabin-Miller</h5>
  
                        <p>Đầu tiên là chọn ngẫu nhiên một số p để kiểm tra. Viết p dưới dạng p = 1 + 2<sup>b</sup>m trong
                          đó m là một số lẻ</p>
  
                        <p>Sau đây là thuật toán:</p>
                        <ol>
                          <li>Chọn một số ngẫu nhiên a, và giả sử a nhỏ hơn p</li>
                          <li>Đặt j = 0 và z = a<sup>m</sup> mod p</li>
                          <li>Nếu z = 1, hoặc z = p - 1 thì p đã bước qua kiểm tra và có thể là số nguyên tố</li>
                          <li>Nếu j > 0 và z = 1 thì p không phải là số nguyên tố</li>
                          <li>Đặt j = j + 1. Nếu j < b và z &ne; p - 1 thì đặt z=z<sup>p</sup> mod p và trở lại bước 4
                          </li>
                          <li>Nếu j = b và z &ne; p - 1, thì p không phải là số nguyên tố</li>
                        </ol>
                      </div>
                    </div>
                    <div class="collapse" id="collapse2463">
                      <div class="card card-body">
                        <h5>Thuật toán Lehman</h5>
                        <ol>
                          <li>Chọn ngẫu nhiên một số n để kiểm tra</li>
                          <li>Chắc chắn rằng n không chia hết cho các số nguyên tố nhỏ như 2,3,5,7 và 11</li>
                          <li>Chọn ngẫu nhiên 100 số a<sub>1</sub>, a<sub>2</sub>, ..., a<sub>100</sub> giữa 1 và n-1</li>
                          <li>Tính a<sub>i</sub><sup>(n-1)/2</sup>(mod n) cho tất cả a<sub>i</sub> =
                            a<sub>1</sub>,...,a<sub>100</sub>. Dừng lại nếu bạn tìm thấy a<sub>1</sub> sao cho phép kiểm
                            tra sai</li>
                          <li>
                            Nếu a<sub>1</sub><sup>(n-1)/2</sup> = 1 (mod n) với &forall; i, thì n có thể là hợp số
                            <br>
                            Nếu a<sub>1</sub><sup>(n-1)/2</sup> &ne; 1 hoặc -1 (mod n) với &forall; i bất kỳ, thì n là hợp
                            số.
                            <br>
                            Nếu a<sub>1</sub><sup>(n-1)/2</sup> = 1 hoặc -1 (mod n) với &forall; với &forall; i &ne; 1,
                            thì n là số nguyên tố
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            `]
    ]
  },
  ATTT03: {
    title: 'Một số ký hiệu toán học',
    index: [
      ['Ký hiệu Jacobi (Jacobi Symbol)', 'ATTT031', `
            
            <p>Ký hiệu Jacobi được viết là J(a,n), nó là sự khái quát hóa của ký hiệu Lagrang, nó định nghĩa cho bất kỳ cặp số
            nguyên a và n nào. Ký hiệu Jacobi là một chức năng trên tập số thặng dư thấp của ước số n và có thể tính toán
            theo công thức sau:</p>
          <ul>
            <li>Nếu n là số nguyên tố, thì J(a,n) = 1 nếu a là thặng dự bậc hai modulo n</li>
            <li>Nếu n là số nguyên tố, thì J(a,n) = -1 nếu a không là thặng dư bậc hai modulo n.</li>
            <li>Nếu n không phải là số nguyên tố thì Jacobi (a,n) sẽ được tính theo công thức sau:
              <br>
              <center>
                <h5>J(a,n) = J(h,p<sub>1</sub>)xJ(h,p<sub>2</sub>)x...xJ(h,p<sub>m</sub>)</h5>
              </center>
              <br>
              với p<sub>1</sub>, p<sub>2</sub>, ... , p<sub>m</sub> là các thừa số lớn nhất của n
            </li>
          </ul>

            `],
    ]
  },
  ATTT04: {
    title: 'Video bài giảng',
    index: [
      ['ĐH Trà Vinh', 'ATTT041', `
                  <p>Bài giảng <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220126_AntoanvaBaomatThongtin/Video/Chuong2.mp4" target="_blank">Link</a></p>
              `],
      ['Youtube', 'ATTT042', ``],
    ]
  }
}