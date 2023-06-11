const ATTT4 = {
    ATTT01: {
        title: `Khái niệm`,
        index: [
            ['Mã hóa khóa đối xứng là gì?', 'ATTT011', `
            <ul>
            <li>Mã hóa khóa đối xứng (hay còn gọi là mã hóa khóa đồng bộ) là một thuật toán mà trong đó cả hai quá trình
              mã hóa và giải mã đều dung một khóa</li>
            <li>Để đảm bảo tính an toàn, khóa này phải được giữ bí mật. Vì thế các thuật toán mã hóa khóa đồng bộ này
              còn có tên gọi khác lã mã hóa với khóa bí mật (secret key cryptography)</li>
            <li>Một điều cần lưu ý là khi một người mã hóa một thông điệp gốc (plaintext) thành thông điệp mã hóa bằng
              một khóa K (thuật toán mã hóa) (ciphertext) rồi gửi ciphertext cho đối tác thì đối tác muốn giải mã cũng
              cần phải có khóa K, nghĩa là trước đó hai đối tác đã phải trao đổi cho nhau chia sẻ để cùng biết được khóa
              K</li>
          </ul>

          <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse111" role="button" aria-expanded="false"
              aria-controls="collapse111">
              Ví dụ 1
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse112" role="button" aria-expanded="false"
              aria-controls="collapse112">
              Ví dụ 2
            </a>
          </p>

          <div>
            <div class="collapse" id="collapse111">
              <div class="card card-body">
                <p>Ví dụ 1:</p>
                <ul>
                  <li>Gậy mã hóa của người Sparte: các đối tác phải bàn giao cho nhau để sở hữu những cây gậy giống nhau
                    trước khi trao đổi thông điệp</li>
                  <li>Caesar muốn cho tướng lĩnh dưới quyền đọc được mật thư của mình thì trước khi ra đi các tướng lĩnh
                    phải được hoàng đế triệu tập vào phòng kín để báo cho biết số bước xoay vòng và tất nhiên điều này
                    (chìa khóa) phải được giữ kín</li>
                </ul>
              </div>
            </div>
            <div class="collapse" id="collapse112">
              <div class="card card-body">
                <p>Ví dụ 2</p>
                <p>Giả sử nếu An chỉ gửi thông điệp đã mã hóa cho Bình mà không hề báo trước về thuật toán mã hóa đã sử
                  dụng, Bình sẽ chẳng hiểu trong thông điệp của An muốn nói gì. Vì thế bắt buộc An phải thông báo cho
                  Bình về chìa khóa và thuật toán sử dụng tại một thời điểm nào đó trước đấy</p>

                <center>
                  <img src="./assets/img/ATTT/Chap3/img1.png" alt="">
                </center>
              </div>
            </div>
          </div>

            `],
            ['Thuật toán mã hóa theo khối (block ciphers)', 'ATTT012', `
            <p><b>Thuật toán mã hóa theo khối (Block ciphers)</b></p>

            <ul>
              <li>Trong đó từng khối dữ liệu trong văn bản gốc ban đầu được thay thế bằng một khối dữ liệu khác có cùng độ
                dài.</li>
              <li>Độ dài mỗi khối gọi là kích thước khối (block size), thường được tính bằng đơn vị bit</li>
              <li>Ví dụ thuật toán:
                <br>
                3 - Way có kích thước khối bằng 96 bit
              </li>
              <li>Một số thuật toán khối thông dụng là: DES, 3DES, RC5, RC6, 3-Way, CAST, Camelia, Blowfish, MARS,
                Serpent, Twofish, GOST...</li>
            </ul>
  
            `],
            ['Thuật toán mã hóa theo dòng (stream ciphers)', 'ATTT013', `
            <p><b>Thuật toán mã hóa theo dòng (stream ciphers)</b></p>

            <ul>
              <li>Trong đó dữ liệu đầu vào được mã hóa từng bit một</li>
              <li>Các thuật toán dòng có tốc độ nhanh hơn các thuật toán khối, được dùng khi khối lượng dữ liệu cần mã hóa
                chưa được biết trước, ví dụ trong kết nối không dây. Có thể coi thuật toán dòng là thuật toán khối với
                kích thước mỗi khối là 1 bit</li>
              <li>Một số thuật toán dòng thông dụng: RC4, A5/1, A5/2, Chameleon</li>
            </ul>
  
            `]
        ]
    }, 
    ATTT02: {
        title: `Tiêu chuẩn mã hóa dữ liệu (DES)`,
        index: [
            ['Khái niệm', 'ATTT021', `
            <p><b>Tiêu chuẩn mã hóa dữ liệu (DES)</b></p>

            <ul>
              <li>Tiêu chuẩn mã hóa dữ liệu DES (Data Encryption Standard) là một phương pháp mật mã hóa được FIPS
                (Federal Information Processing Stardard: Tiêu chuẩn xử lý thông tin Liên Bang Hoa Kỳ) chọn làm chuẩn
                chính thức vào năm 1976</li>
              <li>Thuật toán mã hóa theo tiêu chuẩn DES gọi là DEA (Data Encryption Algorithm)</li>
              <li><span style="color: red;">Tiền thân của thuật toán DES là thuật toán Lucifer, một thuật toán do IBM phát
                  triển</span></li>
              <li>DES là một mã khối, mỗi khối gồm 64 bit trong đó dành 8 bit để kiểm lỗi (Parity checking) còn lại 56 bit
                khóa
                <br>
                <center>
                  <img src="./assets/img/ATTT/Chap3/img2.png" alt="">
                </center>
              </li>
              <li>Số khóa của không gian khóa k là 2<sup>56</sup></li>
              <li>Có 16 chu trình giống nhau trong quá trình xử lý. Ngoài ra còn có hai lần hoán vị đầu và cuối (Initial and final permutation: IP & FP)</li>
              <li>Hai quá trình này có tính chất đối nhau</li>
              <li>IP và FP đáp ứng cho quá trình đưa thông tin vào và lấy thông tin ra từ các khối phần cứng
                <br>
                <center>
                  <img src="./assets/img/ATTT/Chap3/img3.png" alt="">
                </center>
              </li>
              <li>Trước khi đi vào 16 chu trình chính, khối thông tin 64 bit được tách làm hai phần 32 bit và mỗi phần sẽ được xử lý tuần tự (quá trình này còn được là mạng Feistel)</li>
              <li>Cấu trúc của thuật toán (mạng Feistel) đảm bảo rằng quá trình mã hóa và giải mã diễn ra tương tự</li>
              <li>Điểm khác nhau chỉ ở chỗ các khóa con được sử dụng theo trình tự ngược nhau. Điều này giúp cho việc thực hiện thuật toán trở nên đơn giản, đặc biệt là khi thực hiện bằng phần cứng</li>
            </ul>
  
            `],
            [`Tuyển ngặt (Exclusive OR) &oplus;`, 'ATTT022', `
            <p><b>Tuyển ngặt (Exclusive OR) &oplus;</b></p>
            <ul>
              <li>Ký hiệu &oplus; (trong hình) thể hiện phép toán XOR (hàm "tuyển ngặt": Exclusive OR) hay là hàm "cộng theo modulo 2"</li>
              <li>Hàm F làm biến đổi một khối 32 bit đang xử lý với một khóa con</li>
              <li>Đầu ra sau F được kết hợp khối 32 bit còn lại và hai phần được tráo đổi để xử lý trong chu trình kế tiếp. Sau chu trình cuối cùng thì 2 nửa không bị tráo đổi; đây là đặc điểm của cấu trúc</li>
              <li>Feistel khiến cho quá trình mã hóa và giải mã trở nên giống nhau</li>
            </ul>
  
            `],
            ['Đồng dư thức module', 'ATTT023', `
            <p><b>Đồng dư thức module</b></p>

            <p>Hàm modulo có thể hiểu một cách đơn giản chính là số dư trong phép chia các số nguyên. Muốn tính X modulo Y (ký hiệu: X mod Y) ta chỉ cần làm phép chia X cho Y và tìm số dư trong phép chia đó, nói khác đi: ta trừ vào X bội số lớn nhất của Y bé hơn X. Rõ ràng X mod Y chỉ có thể lấy các giá trị từ 0, 1, ..., cho đến Y - 1.</p>
  
            <ul style="list-style-type: none;">
              <li>25 mod 5 = 0</li>
              <li>15 mod 7 = 1</li>
              <li>33 mod 12 = 9</li>
              <li>203 mod 256 = 203</li>
            </ul>
  
            <p>Trong số học, hai số nguyên A và B được gọi là "đồng dư theo modulo N" nếu chúng có cùng số dư trong phép chia cho N. Ta ký hiệu: A &equiv; B (mod N) và đọc là "A đồng dư với B theo modulo N". <b>Biểu thức gọi là đồng dư thức</b></p>
  
            <p>Hàm Feistel (F): hoạt động trên khối 32 bit gồm 4 giai đoạn.</p>
            <ul style="list-style-type: none;">
              <li>Bước 1. Mở rộng 32 bit đầu vào được mở rộng thành 48 bit sử dụng thuật toán hoán vị mở rộng (expansion permutation) với việc nhân đôi một số bit. Giai đoạn này được ký hiệu là E trong sơ đồ</li>
              <li>Bước 2. Trộn khóa: 48 bit thu được sau quá trình mở rộng được XOR với khóa con. <span style="color: red;">Mười sau khóa con 48 bit được tạo ra từ khóa chính 56 bit theo một chu trình tạo khóa con</span> (key schedule)</li>
              <li>Bước 3. Thay thế: 48 bit sau khi trộn được chia làm 8 khối con 6 bit và được xử lý qua hộp thay thế S-box. Đầu ra của mỗi khối 6 bit là một khối 4 bit theo một chuyển đổi phi tuyến được thực hiện bằng một bảng tra. Khối S-box đảm bảo phần quan trọng cho độ an toàn của DES. Nếu không có S-box thì quá trình sẽ là tuyến tính và việc thám mã sẽ rất đơn giản</li>
              <li>Bước 4. Hoán vị: Cuối cùng, 32 bit thu được sau S-box sẽ được sắp xếp lại theo một thứ tự cho trước (còn gọi là P-box)</li>
              <li><span style="color:red;">Trong hệ mã khối, sử dụng bảng thay thế số liệu (s-box) cho biểu thức tính toán để tăng tốc độ tính toán</span></li>
              <li><span style="color: red;">DES có 8 hộp s-box</span></li>
            </ul>
  
            <center>
              <img class="col-12 col-sm-6" src="./assets/img/ATTT/Chap3/img4.png" alt="">
            </center>
  
  
            <ul>
              <li>Quá trình luân phiên sử dụng S-box và sự hoán vị các bit cũng như quá trình mở rộng đã thực hiện được tính chất gọi là sự xáo trộn và khuếch tán (confusion and diffusion)</li>
              <li>Đây là yêu cầu cần có của một thuật toán mã hóa Claude Shannon phát hiện trong những năm 1940</li>
            </ul>
  
            `],
            ['Quá trình tạo khóa con (Sub-key)', 'ATTT024', `
            <p><b>Quá trình tạo khóa con (sub-key)</b></p>

            <center>
              <img class="col-12 col-sm-6" src="./assets/img/ATTT/Chap3/img5.png" alt="">
              <p>Mô tả thuật toán tạo khóa con cho các chu trình</p>
            </center>
  
            <ol>
              <li>Từ 64 bit ban đầu của khóa => 56 bit được chọn (Permuted Choice 1, hay PC-1); 8 bit còn lại bị loại bỏ</li>
              <li>56 bit thu được chia làm 2 phần bằng nhau, mỗi phần được xử lý độc lập</li>
              <li>Sau mỗi chu trình, mỗi phần được dịch đi 1 hoặc 2 bit (tùy thuộc từng chu trình)</li>
              <li><span style="color:red;">Các khóa con 48 bit</span> được tạo thành bởi thuật toán lựa chọn 2 (Permuted Choice 2, hay PC-2) gồm 24 bit từ mỗi phần</li>
            </ol>
  
            <p>Quá trình tạo khóa con khi thực hiện giải mã cũng diễn ra tương tự nhưng các khóa con được tạo theo thứ tự ngược lại</p>
            <p>Ngoài ra sau mỗi chu trình, khóa sẽ được dịch chuyển phải thay vì dịch chuyển trái như mã hóa</p>
  
            `],
            ['Lịch sử của DES', 'ATTT025', `
            <p><b>Lịch sử của DES</b></p>

            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse251" role="button" aria-expanded="false" aria-controls="collapse251">
                Những năm 60 của thế kỷ XX
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse252" role="button" aria-expanded="false" aria-controls="collapse252">
                Thập kỷ 70 của thế kỷ XX
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse253" role="button" aria-expanded="false" aria-controls="collapse253">
                Năm 1972
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse254" role="button" aria-expanded="false" aria-controls="collapse254">
                Từ năm 1977
              </a>
            </p>
  
            <div>
              <div class="collapse" id="collapse251">
                <div class="card card-body">
                  <p><b>Những năm 60 của thế kỷ XX</b></p>
                  
                  <p>Cho đến trước những năm 60 của thế kỷ XX, công nghệ bảo mật thông tin hầu như là độc quyền của các cơ quan an ninh quốc phòng của các Nhà nước, chẳng hạn như ở Mỹ là Cơ quan an ninh quốc gia NSA (National Security Agency).</p>
                </div>
              </div>
              <div class="collapse" id="collapse252">
                <div class="card card-body">
                  <p><b>Từ thập kỷ 70 của thế kỷ XX</b></p>
  
                  <p>Nhu cầu giao dịch xã hội và kinh tế trên phạm vi toàn cầu đòi hỏi một sự phát triển mạnh mẽ về lĩnh vực bảo mật thông tin, cụ thể là trong các vấn đề lập mã và giải mã. Nhiều công ty ra đời và phát triển nhiều công cụ bảo mật nhưng không có một sự thẩm định đáng tin cậy nào cho những công cụ đó.</p>
  
                  <p>
                    Sau năm 1970 với sự phát triển của máy tính điện tử, Feistel đã thực hiện được điều đó cho nên độ phức tạp của DEA trội hẳn so với các thuật toán mã hóa trước đây. NIST đã yêu cầu NSA trợ giúp phát triển DEA và NSA đã đáp ứng. Tuy nhiên có người cho rằng NSA đãđề nghị giảm độ dài khóa do IBM đưa ra lúc ban đầu là 128 bit xuống chỉ còn 56 bit sau này là vì lo ngại mức độ bảo mật quá cao, vượt khỏi trình độ khống chế của NSA thời đó và như thế có khả năng ảnh hưởng đến vấn đề an toàn bảo mật của quốc gia.
                  </p>
                </div>
              </div>
              <div class="collapse" id="collapse253">
                <div class="card card-body">
                  <p><b>Năm 1972</b></p>
  
                  <p>Viện quốc gia về tiêu chuẩn và công nghệ,
                    nay là Viện quốc gia về tiêu chuẩn NIST (National Institute of Standards and Technolgy) của Mỹ quyết định chủ trì vấn đề này và đề xuất việc xây dựng một tiêu chuẩn quốc gia về bảo mật dữ liệu lấy tên là Tiêu chuẩn mã hóa dữ liệu (quốc gia) DES (Data Encryption Standard) và năm 1974 NIST đã chọn một thuật toán mã hóa do IBM giới thiệu làm thuật toán đạt tiêu chuẩn và gắn tên cho thuật toán đó là Thuật toán mã hóa tiêu chuẩn DEA (Data Encryption Algorithm).</p>
  
                  <p>Ý tưởng chính của thuật toán DEA do một nhà lập trình của IBM là Horst Feistel sáng tạo, là việc thực hiện lặp nhiều chu trình mã hóa bằng cả các luật thay thế và các luật chuyển vị của mã hóa cổ điển.</p>
  
                  <p>Trước kia, chỉ với các công cụ cơ giới việc thực hiện lặp các quá trình chuyển vị rất khó khăn nên các công cụ mã hóa phức tạp trước đây (như máy Enigma) chỉ sử dụng các thay thế lặp, không dùng chuyển vị.</p>
                </div>
              </div>
              <div class="collapse" id="collapse254">
                <div class="card card-body">
                  <p><b>Từ năm 1977</b></p>
  
                  <ul>
                    <li>Từ năm 1977 NIST phổ biến công khai tiêu chuẩn DES và quy định cứ sau 5 năm sẽ xem xét lại một lần.</li>
                    <li>Vào các năm 1983, 1987 và 1993 DES đều được công nhận gia thời hạn sử dụng thêm 5 năm tiếp sau.</li>
                    <li>Cho đến năm 1997, do sự phát triển tốc độ của máy tính điện tử và những kết quả nghiên cứu mới về thám mã, DES bắt đầu bộc lộ những bất cập và NIST đặt vấn đề tìm cách thay thế DES bằng các thuật toán mã hóa mới có độ bảo mật cao hơn qua các kỳ thi tuyển chọn các thuật toán mã hóa tiên tiến AEA (Advanced Encryption Algorithm).</li>
                  </ul>
                </div>
              </div>
       
            </div>
  
            `],
        ]
    },
    ATTT03: {
        title: `An toàn và sự giải mã`,
        index: [
            ['Khái niệm', 'ATTT031', `
            <p><b>Khái niệm</b></p>

            <p>Thuật toán DES được sử dụng là một chuẩn mã hóa trong thương
              mại và mặc dù đã có nhiều nghiên cứu về phá mã DES hơn bất kỳ
              phương pháp mã hóa khối nào khác, nhưng phương pháp phá mã
              thực tế nhất hiện nay vẫn là tấn công bằng bạo lực.</p>
  
            `],
            ['Đặc tính mật mã hóa của DES', 'ATTT032', `
            <p><b>Đặc tính mật mã hóa của DES</b></p>

            <p>Nhiều đặc tính mật mã hóa của DES đã được xác định và từ đó đã có ba phương pháp phá mã khác được xác định với mức độ phức tạp nhỏ hơn tấn công bạo lực, tuy nhiên các phương pháp này đòi hỏi một số lượng plaintext quá lớn (để tấn công lựa chọn tần suất trong plaintext) nên hầu như không thực hiện được trong thực tế.</p>
            `],
            ['Tấn công bạo lực', 'ATTT033', `
            <p><b>Tấn công bạo lực</b></p>

            <ul>
              <li>Đối với bất cứ phương pháp mã hóa nào, kiểu tấn công cơ bản
                nhất là tấn công bằng bạo lực: thử lần lượt tất cả các khóa có thể cho đến khi tìm ra khóa đúng. Độ dài của khóa sẽ xác định số lượng phép thử tối đa cần thực hiện và do đó thể hiện tính khả thi của phương pháp</li>
              <li>Trong trường hợp của DES, nghi ngờ về độ an toàn của nó đã
                được đặt ra ngay từ khi nó chưa trở thành tiêu chuẩn. Người ta cho rằng chính NSA đã ủng hộ IBM giảm độ dài khóa từ 128 bit xuống 64 bit và tiếp tục xuống 56 bit. (Điều này dẫn đến suy đoán rằng NSA đã có thể có hệ thống tính toán đủ mạnh để phá vỡ khóa 56 bit ngay từ những năm 1970).</li>
            </ul>
            `],
            ['Hệ thống phá mã DES và điểm yếu của nó', 'ATTT034', `
            <p><b>Hệ thống phá mã DES và điểm yếu của nó</b></p>

            <p>Hệ thống phá mã DES của Hiệp hội EFF được xây dựng với ngân
              sách 250.000 USD (vào thời đó). Hệ thống bao gồm 1536 bộ vi xử lý thiết kế riêng và có khả năng duyệt hết mọi khóa DES trong vòng vài ngày.</p>
            <p>
              Trong giới nghiên cứu, nhiều đề xuất về các hệ thống phá mã DES được đề ra. Năm 1977 Diffie và Hellman dự thảo một hệ thống có giá khoảng 20 triệu USD và có khả năng phá khóa DES trong 1 ngày. Năm 1993, Wiener dự thảo một hệ thống khác có khả năng phá mã trong vòng 7 giờ với giá 1 triệu USD
            </p>
            <p>
              Những điểm yếu của DES được thực sự chứng minh vào cuối những năm 1990. Vào năm 1997, công ty bảo mật RSA đã tài trợ một loạt những cuộc thi với giải thưởng 10.000 USD cho đội đầu tiên phá mã được một bản tin mã hóa bằng DES. Đội chiến thắng trong cuộc thi này là dự án DESCHALL với những người lãnh đạo là Rocke Verser, Matt Curtin và Justin Dolske. Họ đã sử dụng hàng nghìn máy tính nối mạng để phá mã.
            </p>
            <p>
              Khả năng phá mã DES được chứng minh thêm lần nữa vào năm 1998 khi tổ chức Electronic Frontier Foundation (EFF), một tổ chức hoạt động cho quyền công dân trên Internet, xây dựng một hệ thống chuyên biệt để phá mã với giá thành 250.000 USD
            </p>
            <p>
              Động cơ thúc đẩy EFF trong hành động này là nhằm chứng minh DES có thể bị phá vỡ trên lý thuyết cũng như trên thực tế: "Nhiều người không tin vào chân lý này cho đến khi họ nhìn thấy sự việc bằng chính mắt mình. Xây dựng một bộ máy có thể phá khóa DES trong vòng vài ngày là cách duy nhất chứng tỏ với mọi người rằng họ không thể đảm bảo an ninh thông tin dựa vào DES."
            </p>
  
            `],
            ['Các kiểu tấn công khác hiệu quả hơn phương pháp bạo lực', 'ATTT035', `
            <p><b>Các kiểu tấn công khác hiệu quả hơn phương pháp bạo lực</b></p>

            <p>Các kiểu tấn công khác hiệu quả hơn phương pháp bạo lực:</p>
            <ul>
              <li>Phá mã vi sai DC (Differential Cryptanalysis): 2<sup>43</sup> plaintexts (Matsui, 1993).</li>
              <li>Phá mã tuyến tính LC (Linear Cryptanalysis)</li>
              <li>Phá mã Davies (Davies' attack): 2<sup>50</sup> plaintexts, độ phức tạp là 2<sup>50</sup> và tỷ lệ thành công là 51%.</li>
            </ul>
            <p>Ngoài ra còn có những kiểu tấn công dựa trên bản thu gọn của DES (DES với ít hơn 16 chu trình).</p>
            `],
            ['Cách giải mã', 'ATTT036', `
            <p>Thuật toán mã hóa theo chuẩn DES có tính chất bù nghĩa là:</p>
            <center>
              <p>E<sub>K</sub>(P) = C &hArr; E<sub>K</sub> - (<span style="border-top: 1px solid black;">P</span>) = (<span style="border-top: 1px solid black;">C</span>)</p>
            </center>
  
            <p>Trong đó <span style="border-top: 1px solid black;">X</span> là phần bù của x theo từng bit (1 thay bằng 0 và ngược lại). E là bản mã hóa của E với khóa K. <b>P</b> và <b>C</b> là plaintext (trước khi mã hóa) và ciphertext (sau khi mã hóa). Do tính bù, ta có thể giảm độ phức tạp của tấn công bạo lực xuống 2 lần (tương ứng với 1 bit) với điều kiện là ta có thể lựa chọn plaintext</p>
  
            <p>DES còn có 4 khóa yếu (weak keys). Khi sử dụng khóa yếu thì mã hóa (E) và giải mã (D) sẽ cho ra cùng kết quả:</p>
            <center>
              <p>E<sub>K</sub>(E<sub>K</sub>(P)) = P hoặc tương đương E<sub>K</sub> = D<sub>K</sub></p>
            </center>
            <p>
              Bên cạnh đó, còn có 6 cặp khóa nửa yếu (semi-weak keys). Mã hóa với một khóa trong cặp K1, tương đương với giải mã với khóa còn lại K2:
            </p>
            <center>
              <p>E<sub>K1</sub>(E<sub>K2</sub>(P)) = P hoặc tương đương E<sub>K</sub> = D<sub>K</sub></p>
            </center>
  
            `]
        ]
    },
    ATTT04: {
        title: 'Tiêu chuẩn mã hóa tiên tiến (AES)',
        index: [
            ['Sự ra đời AES', 'ATTT041', `
            <p><b>Sự ra đời AES</b></p>

          <p>Từ cuối thập niên 1980, đầu thập niên 1990, xuất phát từ những lo ngại về độ an toàn và tốc độ thấp khi áp dụng bằng phần mềm, giới nghiên cứu đã đề xuất khá nhiều thuật toán mã hóa khối để thay thế DES. Những ví dụ tiêu biểu bao gồm: RC5, Blowwfish, IDEA (International Data Encryption Algorithm: Thuật toán mã hóa dữ liệu quốc tế), NewDES, SAFER và FEAL. Hầu hết những thuật toán này có thể được dùng từ khóa 64 bit của DES mặc dù chúng thường được thiết kế hoạt động với từ khóa 64 bit hay 128 bit. Bản thân DES cũng cải tiến để có thể được dùng an toàn hơn.</p>

          <p>Năm 2001, sau một cuộc thi quốc tế, NIST đã chọn ra một thuật toán mới là Tiêu chuẩn mã hóa tiên tiến AES (Advanced Encryption Standard) để thay thế cho DES. Thuật toán được trình diện dưới tên là Rijndael. Những thuật toán khác có tên trong danh sách cuối cùng của cuộc thi AES gồm: RC6, Serpent, MARS và Twofish</p>

          <p>AES là thuật toán mã hóa khối được chính phủ Hoa kỳ áp dụng làm tiêu chuẩn mã hóa thay cho tiêu chuẩn DES trước đó. Giống như tiêu chuẩn DES, AES được kỳ vọng áp dụng trên phạm vi toàn thế giới và đã được nghiên cứu rất kỹ lưỡng. AES được chấp thuận làm tiêu chuẩn liên bang bởi Viện Tiêu chuẩn và Cộng nghệ quốc gia Hoa Kỳ (NIST) trong một quá trình tiều chuẩn hóa kéo dài 5 năm</p>

          <p>Thuật toán được thiết kế bởi hai nhà mật mã học người Bỉ: Joan Daemen và Vincent Rijmen. Thuật toán được đặt tên là "Rijndael" khi tham gia cuộc thi thiết kế AES theo cách ghép tên của hai đồng tác giả</p>

          <p>Thuật toán được dựa trên bản thiết kế Square có trước đó của Daemen và Rijmen; còn Square lại được thiết kế dựa trên Shark, khác với DES sử dụng mạng Feistel, Rijndel sử dụng mạng thay thế - chuyển vị. AES có thể dễ dàng thực hiện với tốc độ cao bằng phần mềm hoặc phần cứng và không đòi hỏi nhiều bộ nhớ. Do là một tiêu chuẩn mã hóa mới, AES đang được triển khai sử dụng rộng rãi hàng loạt.</p>
            `],
            ['Mô tả thuật toán AES', 'ATTT042', `
            <p><b>Mô tả thuật toán AES</b></p>

            <p>AES chỉ làm việc với khối dữ liệu 128 bit và có <span style="color: red;">3 khóa chủ có độ dài 128, 192 hoặc 256 bit</span> trong khi Rijndael có thể làm việc với dữ liệu và khóa có độ dài bất kỳ là bội số của 32 bit nằm trong khoảng từ 128 tới 256 bit.</p>
  
            <p>Các khóa con sử dụng trong các chu tình được tạo bởi quá trình tạo khóa con Rijndael. Hầu hết các phép toán trong thuật toán AES đều thực hiện trong một trường hữu hạn.</p>
  
            <p>AES việc với từng khối dữ liệu 4x4 bytes</p>
            `],
            ['Quá trình mã hóa', 'ATTT043', `
            <p><b>Quá trình mã hóa gồm 4 bước</b></p>
            <ol>
              <li>AddRoundKey: mỗi byte của khối được kết hợp với khóa con, các khóa con này được tạo ra từ quá trình tạo khóa con Rijndael</li>
              <li>SubBytes: đây là phép thế (phi tuyến) trong đó mỗi byte sẽ được thế bằng một byte khác theo bảng tra (Rijndael S-box)</li>
              <li>ShiftRows: đổi chỗ, các hàng trong khối được dịch vòng</li>
              <li>MixColumns: quá trình trộn làm việc theo các cột trong khối theo một phép biến đổi tuyến tính. Tại chu trình cuối thì bước MixColumns được thay thế bằng bước AddRoundKey.</li>
            </ol>
  
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse431" role="button" aria-expanded="false" aria-controls="collapse431">
                Bước AddRoundKey
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse432" role="button" aria-expanded="false" aria-controls="collapse432">
                Bước SubBytes
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse433" role="button" aria-expanded="false" aria-controls="collapse433">
                Bước ShiftRows
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse434" role="button" aria-expanded="false" aria-controls="collapse434">
                Bước MixColumns
              </a>
            </p>
  
            <div>
              <div class="collapse" id="collapse431">
                <div class="card card-body">
                 <p><b>Bước AddRoundKey</b></p>
  
                 <p>Tại bước này, khóa con được kết hợp với các khối. Khóa con trong mỗi chu trình được tạo ra từ khóa chính với quá trình tạo khóa con Rijndael; mỗi khóa con có độ dài giống như các khối. Quá trình kết hợp được thực hiện bằng cách XOR từng bit của khóa con với khối dữ liệu</p>
  
                 <center>
                  <img src="./assets/img/ATTT/Chap3/img14.png" alt="" class="col-12 col-sm-10">
                 </center>
                </div>
              </div>
              <div class="collapse" id="collapse432">
                <div class="card card-body">
                 <p><b>Bước SubBytes</b></p>
  
                 <p>Các byte được thế thông qua bảng tra S-box. Đây chính là quá trình phi tuyến của thuật toán. Hộp S-box này được tạo ra từ 1 một phép nghịch đảo trong trường hữu hạn GF (28) có tính chất phi tuyến. Để chống lại các tấn công dựa trên các đặc tính đại số, hộp S-box này được tạo nên bằng cách kết hợp phép nghịch đảo với một phép biến đổi affine khả nghịch. Hộp S-box này cũng được chọn để tránh các điểm bất động (fixed point)</p>
  
                 <center>
                  <img src="./assets/img/ATTT/Chap3/img15.png" alt="" class="col-12 col-sm-10">
                 </center>
                </div>
              </div>
              <div class="collapse" id="collapse433">
                <div class="card card-body">
                 <p><b>Bước ShiftRows</b></p>
  
                 <p>Các hàng được dịch vòng một số vị trí nhất định. Đối với AES, hàng đầu được giữ nguyên. Mỗi byte của hàng thứ 2 được dịch trái một vị trí. Tương tự, các hàng thứ 3 và 4 được dịch 2 và 3 vị trí. Do vậy, mỗi cột khối đầu ra của bước này sẽ bao gồm các byte ở đủ 4 cột khối đầu vào. Đối với Rijndael với độ dài khối khác nhau thì số vị trí dịch chuyển cũng khác nhau.</p>
  
                 <center>
                  <img src="./assets/img/ATTT/Chap3/img16.png" alt="" class="col-12 col-sm-10">
                 </center>
                </div>
              </div>
              <div class="collapse" id="collapse434">
                <div class="card card-body">
                 <p><b>Bước MixColumns</b></p>
  
                 <p>Bốn byte trong từng cột được kết hợp lại theo một phép biến đổi tuyến tính khả nghịch. Mỗi khối 4 byte đầu vào sẽ cho một khối 4 byte ở đầu ra với tính chất là mỗi byte ở đầu vào đều ảnh hưởng tới cả 4 byte đầu ra. Cùng với bước ShiftRows, MixColumns đã tạo ra tính chất khuếch tán cho thuật toán</p>
                 <center>
                  <img src="./assets/img/ATTT/Chap3/img17.png" class="col-12 col-sm-10" alt="">
                 </center>
                </div>
              </div>
            </div>
            `],
            ['Tối ưu hóa', 'ATTT044', `
            <p><b>Tối ưu hóa</b></p>

            <p>Đối với các hệ thống 32 bit hoặc lớn hơn, ta có thể tăng tốc độc thực hiện các thuật toán bằng cách sát nhập các bước SubBytes, ShiftRows, MixColumns và chuyển chúng thành dạng bảng</p>
  
            <p>Có 4 bảng với 256 mục, mỗi mục là 1 từ 32 bit, 4 bảng này chiếm 4096 byte trong bộ nhớ. Khi đó, mỗi chu trình sẽ được bao gồm 16 lần tra bảng và 12 lần thực hiện phép XOR 32 bit cùng với 4 phép XOR trong bước AddRoundKey</p>
  
            <p>Trong trường hợp kích thước các bảng vẫn lớn so với thiết bị thực hiện thì chỉ dùng một bảng và tra bảng kết hợp với hoán vị vòng quanh</p>
            `],
            ['Độ an toàn AES', 'ATTT045', `
            <p><b>Độ an toàn AES</b></p>

            <p>Dạng tấn công lên AES duy nhất thành công là tấn công kênh bên (side channel attack). cần thực hiên 2<sup>120</sup> plaintext</p>
            <p>Tháng 4/2005, Daniel J. Bernstein công bố 1 tấn công lên hệ thống mã hóa AES trong OpenSSL. Một máy chủ được thiết kế để đưa ra tối đa thông tin về thời gian có thể thu được và cuộc tấn công cần tới 200 triệu plaintext lựa chọn. Một số người cho rằng tấn công không thể thực hiện được trên Internet với khoảng cách vài điểm mạng.</p>
            <p>Tháng 10/2005, Adi Shamir và 2 nhà nghiên cứu khác có 1 bài nghiên cứu minh họa một vài dạng khác. Trong đó, một tấn công có thể lấy được khóa AES với 800 lần ghi trong 65 mili giây</p>
            `],
            ['Ưu nhược điểm của mã hóa đối xứng', 'ATTT046', `
            <p><b>Ưu và nhược điểm của mã hóa đối xứng</b></p>
          
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse461" role="button" aria-expanded="false" aria-controls="collapse461">
                Ưu điểm
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse462" role="button" aria-expanded="false" aria-controls="collapse462">
                Nhược điểm
              </a>
            </p>
  
            <div>
              <div class="collapse" id="collapse461">
                <div class="card card-body">
                  <p><b>Ưu điểm</b></p>
                  <p>Ưu điểm nổi bật của mã hóa đối xứng là tốc độ lập mã, giải mã khá nhanh chóng. Hiện nay có nhiều phần mềm thương mại hỗ trợ thuật toán mã hóa đối xứng hiện hữu và rất phổ dụng</p>
                  <p>Ưu điểm thứ hai là tuy có nhiều nghiên cứu tham mã đã thực hiện nhưng với các thuật toán được cải tiến gần đây như 3-DES và nhất là AES thì độ bảo mật khá cao, trong thực tế việc phá mã cũng không dễ dàng</p>
                </div>
              </div>
              <div class="collapse" id="collapse462">
                <div class="card card-body">
                  <p><b>Nhược điểm</b></p>
                  <p>Nhược điểm lớn nhất của thuật toán mã hóa đối xứng là vấn đề <span style="color:red;">chuyển giao chìa khóa giữa các đối tác</span>, đặc biệt là trong môi trường mở</p>
                  <p>Ví dụ: việc trao đổi thông điệp giữa An và Bình, Bình nhận được thông điệp mã hóa của An, muốn giải mã được thì Bình phải có chìa khóa mật mã của An. An không thể chuyển giao khóa mã đồng thời với thông điệp vì vậy thì việc mã hóa trở thành vô tác dụng</p>
                  <p>Vì vật An phải dùng một phương pháp nào đó để chuyển giao khóa giải mã cho Bình trước khi gửi thông điệp. Mà dù dùng phương thức thông tin nào trong môi trường mở: gửi thư, Email, gọi điện thoại, v.v... thì vẫn có nguy cơ có người thứ ba nắm được khóa mã và kết quả vẫn như thế!</p>
                  <p>Mã đối xứng <span style="color: red">không đảm bảo tính toàn vẹn dữ liệu</span></p>
                  <p>Ví dụ: Giả sử thư của An gửi cho Bình đã lọt vào tay Công. Công không hiểu gì về nội dung thông điệp nhưng vẫn có thể thêm bớt dữ liệu làm thay đổi, sai lệch nội dung thông điệp rồi vãn gửi tiếp cho Bình: Bình không thể biết là thông điệp đã bị thay đổi nội dung</p>
  
  
                </div>
              </div>
            </div>
            `],
            ['Một số phần mềm mã hóa đối xứng', 'ATTT047', `
            <p><b>Một số phần mềm mã hóa đối xứng</b></p>

            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse471" role="button" aria-expanded="false" aria-controls="collapse471">
                Blowfish
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse472" role="button" aria-expanded="false" aria-controls="collapse472">
                CAST
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse473" role="button" aria-expanded="false" aria-controls="collapse473">
                IDEA
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse474" role="button" aria-expanded="false" aria-controls="collapse474">
                RC2
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse475" role="button" aria-expanded="false" aria-controls="collapse475">
                RC4
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse476" role="button" aria-expanded="false" aria-controls="collapse476">
                RC6
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse477" role="button" aria-expanded="false" aria-controls="collapse477">
                Serpent
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse478" role="button" aria-expanded="false" aria-controls="collapse478">
                Twofish
              </a>
            </p>
    
            <div>
              <div class="collapse" id="collapse471">
                <div class="card card-body">
                 <p><b>Blowfish</b></p>
                  <p>Blowfish là một thuật toàn mã hóa đối xứng (65 bit cipher) do Bruce Schneier thiết kế năm 1993. Blowfish có các độ dài khóa từ 32 đến 448 bit. Người ta đã nghiên cứu phân tích khá kỹ về các thuộc tính của Blowfish và nó cũng được đánh giá là một thuật toán mã hóa mạnh</p>
                </div>
              </div>
              <div class="collapse" id="collapse472">
                <div class="card card-body">
                 <p><b>CAST</b></p>
    
                 <p>CAST được đặt theo tên viết tắt của các nhà phát minh ra nó là Carlise Adams, và Stafford Tavares. CAST là một thuật toán mã hóa rất phổ biến, mã hóa khối cipher 64 bit và cho phép độ dài khóa lên đến 128 bit</p>
    
                </div>
              </div>
              <div class="collapse" id="collapse473">
                <div class="card card-body">
                 <p><b>IDEA</b></p>
                  <p>Thuật toán mã hóa dữ liệu quốc tế IDEA (International Data Encryption Algorithm) là một thuật toán mã hóa đối xứng do TS. X.Lai và GS. J.Massey xây dựng nhằm thay thế thuật toán DES chuẩn. IDEA cũng sử dụng khóa có độ dài là 128 bit. Kích thước lớn của khóa làm cho IDEA rất khó bị phá vỡ bằng tấn công bạo lực do thời gian duyệt tất cả các khả năng có thể có của khóa là quá lớn</p>
                </div>
              </div>
              <div class="collapse" id="collapse474">
                <div class="card card-body">
                 <p><b>RC2</b></p>
                  <p>RC2 là một thuật mã hóa có kích thước khóa thay đổi. Ron Rivest đã thiết kế RC2 cho Công ty An toàn dữ liệu RSA nhưng mọi chi tiết vẫn giữ bí mật, chưa được công bố</p>
                </div>
              </div>
              <div class="collapse" id="collapse475">
                <div class="card card-body">
                 <p><b>RC4</b></p>
                 <p>RC4 cũng là một thuật toán do Ron Rivest phát triển năm 1987. Đấy là một thuật toán mã hóa dòng với khóa có kích thước thay đổi. Kích thước khóa của RC4 có thể đặt tới 2048 bit (thông thường là 256 bit)</p>
                </div>
              </div>
              <div class="collapse" id="collapse476">
                <div class="card card-body">
                 <p><b>RC6</b></p>
    
                 <p>RC6 là thuật toán mã hóa khối xứng do Ron Rivest, Matt Robshaw, Ray Sidney, và Yiqun Lisa Yin thiết kế nhằm đáp ứng yêu cầu của cuộc thi AES (Advanced Encryption Standard). Thuật toán RC6 là phần mềm lọt vào chung kết của cuộc thi đó và được chọn là phần mềm mã hóa tiên tiến tiêu chuẩn (AES)</p>
                </div>
              </div>
              <div class="collapse" id="collapse477">
                <div class="card card-body">
                 <p><b>Serpent</b></p>
                  <p>Serpent là thuật toán mã hóa khối đối xứng do Ross Anderson, Eli Biham and Lars Knudsen phát triển. Serpent có thể làm việc với nhiều tổ hợp khóa có độ dài khác nhau. Serpent cũng là 1 trong 5 phần mềm lọt vào chung kết cuộc thi AES</p>
                </div>
              </div>
              <div class="collapse" id="collapse478">
                <div class="card card-body">
                 <p><b>Twofish</b></p>
                  <p>Twofish là một thuật toán mã hóa đối xứng khối, có kích thước khối là 128 và chấp nhận các khóa có mọi đội dài đến 256 bit. Twofish do Bruce Schneier, John Kelsey, Chris Hall, Niels Ferguson, David Wagner and Doug Whiting thiết kế. Viên quốc gia về tiêu chuẩn và công nghệ NIST (The National Institute of Standard and Technology) đã chấp nhận đầu tư để Twofish trở thành một trong các dự án thay thế cho thuật toán mã hóa DES trước đây.</p>
                </div>
              </div>
            </div>
            `],
        ]
    },
    ATTT08: {
      title: 'Video bài giảng',
      index: [
          ['ĐH Trà Vinh', 'ATTT081', `
                    <p>Bài giảng <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220126_AntoanvaBaomatThongtin/Video/Chuong4.mp4" target="_blank">Link</a></p>
                `],
          ['Youtube', 'ATTT082', ``],
      ]
  }
}