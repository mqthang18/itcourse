const CSTTNT2 = {
    CSTTNT01: {
        title: "Giải quyết vấn đề bằng kỹ thuật tìm kiếm",
        index: [
            ['Nội dung', 'CSTTNT011', `
            <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-sm-6">
          <ul>
            <li>Tại sao phải tìm kiếm?</li>
            <li>Không gian tìm kiếm?</li>
          </ul>
        </div>
        <div class="col-12 col-sm-6">
          <center>
            <img src="./assets/img/CSTTNT/chap1/img4.png" alt="" class="col-12 col-sm-8">
          </center>
        </div>
      </div>
      
    </div>
            `]
        ]
    },
    CSTTNT02: {
        title: "Biểu diễn vấn đề trong không gian tìm kiếm",
        index: [
            ['Giới thiệu', 'CSTTNT021', `
            <div class="container-fluid">
              <div class="row">
                <div class="col-12">
                  <ul>
                    <li>Trạng thái ban đầu</li>
                    <li>Một tập hơp các toán tử. Trong đó mỗi toán tử mô tả một hành động hoặc một phép biến đổi có thể đưa một
                      trạng thái tới một trạng thái khá</li>
                    <li>Tập hợp tất cả các trạng thái có thể đạt tới từ trạng thái ban đầu bằng cách áp dụng một dãy toán tử,
                      lập thành không gian trạng thái của vấn đề</li>
                    <li>Ký hiệu:
                      <br>
                      <ul>
                        <li>Không gian trạng thái U, trạng thái ban đầu u<sub>0</sub> (u<sub>0</sub> &isin; U)</li>
                        <li>Toán tử R: ánh xạ R: U -> u<sub>0</sub></li>
                      </ul>
                    </li>
                    <li>Một tập hợp T các trạng thái kết thúc (trạng thái đích). T là tập con của không gian U.</li>
                  </ul>
                </div>
              </div>
            </div>
            `],
            ['Bài toán triệu phú và kẻ cướp', 'CSTTNT022', `
            <div>
            <p>Có ba nhà triệu phú và ba tên cướp ở bên bờ phải một con sông, cùng một chiếc thuyền chở được một hoặc
              hai người. Hãy tìm cách đưa mọi người qua sông sao cho không để lại ở bên bờ sông kẻ cướp nhiều hơn triệu
              phú</p>

            <hr>
            <ul>
              <li><b>Trạng thái đầu</b>: (3,3,1)</li>
              <li><b>Các toán tử</b>. Có năm toán tử tương ứng với hành động thuyền chở qua sông
                <ul>
                  <li>1 triệu phú</li>
                  <li>hoặc 1 kẻ cướp</li>
                  <li>hoặc 2 triệu phú</li>
                  <li>hoặc 2 kẻ cướp</li>
                  <li>hoặc 1 triệu phủ và 1 kẻ cướp</li>
                </ul>
              </li>
              <li>Trạng thái kết thúc là (0,0,0)</li>
            </ul>

          </div>
            `],
            ['Bài toán đố tám ô', 'CSTTNT023', `
            <p>Cho hình chữ nhật được chia thành chín ô như trên hình dưới, trong đó tám ô được đánh số từ 1 đến 8 và
              một ô trống. Có thể thay đổi vị trí các số bằng cách di chuyển ô trống. Mỗi lần di chuyển, ô trống có thể
              đổi chỗ với một ô số ở ngay phía trên, phía dưới, bên phải hoặc bên trái. Yêu cầu của bài toán là thực
              hiện các di chuyển để chuyển từ một sắp xếp các ô (ví dụ trên hình bên trái) sang một cách sắp xếp khác
              (hình bên phải)</p>

            <div class="container-fluid">
              <div class="row">
                <div class="col-12 col-sm-6">
                  <center>
                    <img class="col-12" src="./assets/img/CSTTNT/chap1/chap5.png" alt="">
                  </center>
                </div>
                <div class="col-12 col-sm-6">
                  <center>
                    <img class="col-12" src="./assets/img/CSTTNT/chap1/img5.png" alt="">
                  </center>
                </div>
              </div>
            </div>
            <hr>
            <ul>
              <li>Không gian trạng thái là tập tất cả các trạng thái có thể có và tập các toán tử của bài toán.</li>
              <li>Không gian trạng thái là một bộ bốn, ký hiệu: K= (T, S, G, F).</li>
              <li>Trong đó,
                <ol>
                  <li>T: tập tất cả các trạng thái có thể có của bài toán</li>
                  <li>S: trạng thái ban đầu</li>
                  <li>G: tập các trạng thái đích</li>
                  <li>F: tập các toán tử</li>
                </ol>
              </li>
            </ul>
            `],
            ['Bài toán đong nước', 'CSTTNT024', `
              <div>
                <p>Sử dụng ba can 3 lít, 5 lít và 9 lít, làm thế nào để đong được 7 lít nước</p>
                <p>Bài toán này được phát biểu lại theo 5 thành phần như sau:</p>
                <ul>
                  <li>Trạng thái: Gọi số nước có trong 3 can lần lượt là a,b,c (a &le; 3, b &lt; 5, c &lt; 9), khi đó bộ ba
                    (a,b,c) là trạng thái của bài toán</li>
                  <li>Trạng thái đầu: (0, 0, 0) // cả ba can đều rỗng</li>
                  <li>Trạng thái đích: (-, -, 7) // can thứ 3 chứa 7 lít nước</li>
                  <li>Phép chuyển trạng thái: từ trạng thái (a,b,c) có thể chuyển sang trạng thái (x,y,z) thông qua các thao
                    tác nhu làm rỗng 1 can, chuyển từ can này sang can kia đến khi hết nước ở can nguồn hoặc can đích bị đầy
                  </li>
                  <li>Chi phí mỗi phép chuyển trạng thái: mỗi phép chuyển trạng thái có chi phí là 1</li>
                </ul>
              </div>
            `],
            ['Bài toán trò chơi 8 số', 'CSTTNT025', `
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 col-sm-6">
                  <p style="text-align: justify;">Trong bảng ô vuông 3 hàng, 3 cột , mỗi ô chứa một số nằm trong phạm vi
                    từ 1 đến 8 sao cho không có 2 ô có cùng giá trị, có một ô trong bảng bị trống (không chứa giá trị
                    nào cả. Xuất phát từ một sắp xếp nào đó các số trong bảng, hãy dịch chuyển ô trống sang phải, sang
                    trái, lên trên hoặc xuống dưới (nếu có thể được) để đưa về bảng ban đầu (H1) về bảng qui ước trước
                    (H2)</p>

                  <div class="container">
                    <div class="row">
                      <div class="col-6">
                        <center>
                          <img src="./assets/img/CSTTNT/chap1/img6.png" alt="" class="col-12">
                        </center>
                      </div>
                      <div class="col-6">
                        <center>
                          <img src="./assets/img/CSTTNT/chap1/img7.png" alt="" class="col-12">
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6">
                  <p><b>Không gian trạng thái</b></p>

                  <p>T = {(a<sub>ij</sub>)<sub>3x3</sub> / 0 <= a<sub>ij</sub>
                      <= 8 và a<sub>ij</sub>
                        <> a<sub>kl</sub> với i<>j hoặc k<>l}</p>
                  <p>S = Ma trận xuất phát của bài toán</p>
                  <p>G = Ma trận cuối cùng của bài toán (các số nằm theo vị trí yêu cầu)</p>
                  <p>F = {fl, fr, fu, fd}</p>
                </div>
              </div>
            </div>
            `],
            ['Không gian trạng thái của bài toán tháp hà nội N = 3', 'CSTTNT026', `
            <ul>
              <li>T = {(x1, x2, x3)/xi &isin; {1,2,3}}</li>
              <li>S = (1, 1, 1)</li>
              <li>G = {(3, 3, 3)}</li>
              <li>F = Tập các khả năng có thể chuyển đĩa đã xác định trong phần trước</li>
            </ul>
            `],
        ]
    },
    CSTTNT03: {
        title: "Biểu diễn không gian trạng thái dưới dạng đồ thị",
        index: [
            ["Nội dung", "CSTTNT031", `
            <p>Theo ngôn ngữ đồ thị, không gian trạng thái tương ứng với một định hướng trong đó: Các trạng thái tương ứng với
      các đỉnh trong đồ thị, nếu tồn tại toán tử chuyển trạng thái thì có cung (s,t)</p>

    <center>
      <table class="table">
        <thead>
          <tr>
            <th>KGTT</th>
            <th>Đồ thị</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Trạng thái</td>
            <td>Đỉnh</td>
          </tr>
          <tr>
            <td>Toán tử</td>
            <td>Cung</td>
          </tr>
          <tr>
            <td>Dãy các trạng thái liên tiếp</td>
            <td>Đường đi</td>
          </tr>
        </tbody>
      </table>
    </center>

    <p>Cho đồ thị G = (V,E), giả sử V = {1,2,...,n}. Có hai cách thường dùng để biểu diễn đồ thị G lưu trữ trong máy
      tính</p>
    <ul>
      <li>Biểu diễn bằng ma trận kề
        <br>
        <center>
          <img src="./assets/img/CSTTNT/chap1/img8.png" alt="" class="col-12 col-sm-6">
        </center>
      </li>
      <li>Biểu diễn danh sách kề
        <br>
        <center>
          <img src="./assets/img/CSTTNT/chap1/img9.png" alt="" class="col-12 col-sm-6">
        </center>
      </li>
    </ul>
            `]
        ]
    },
    CSTTNT04: {
        title: "Các chiến lược tìm kiếm",
        index: [
            ["Nội dung", "CNTTNT041", `
            <ul>
      <li>Tìm kiếm mù (blind search)

        <ul>
          <li>Tìm kiếm theo bề rộng</li>
          <li>Tìm kiếm theo chiều sâu</li>
        </ul>
      </li>
      <li>Tìm kiếm theo kinh nghiệm (heristic search)</li>
    </ul>

    <p>Thuật toán tìm kiếm tổng quát</p>
    <p>Search(Q, S, G, P) (Q: không gian trạng thái, S: trạng thái bắt đầu, G: đích, P: hành động)</p>
    <p><b>Đầu vào</b>: bài toán tìm kiếm với 4 thành phần như trên</p>
    <p><b>Đầu ra</b>: trạng thái đích</p>
    <hr>
    <p>Khởi tạo: O <- S (O: tập các nút biên, bước này khởi tạo giá trị ban đầu cho O bằng S)</p>
        <p>While (O &ne; &empty;) do</p>
        <ol>
          <li>Chọn nút n &isin; O và xóa n khỏi O</li>
          <li>If n &isin; G, return (đường đi tới n)</li>
          <li>Thêm P(n) vào O</li>
        </ol>
        <p>Return: không có lời giải</p>
            `]
        ]
    },
    CSTTNT05: {
        title: "CÁC TIÊU CHUẨN ĐÁNH GIÁ THUẬT TOÁN TÌM KIẾM",
        index: [
            ["Nội dung", "CSTTNT051", `
            <ul>
      <li><b>Tính đầy đủ</b>: giải thuật có tìm được lời giải của bài toán không nếu bài toán tồn tại lời giải</li>
      <li><b>Tính tối ưu</b>: Giải thuật có tìm ra lời giải có chi phí tối ưu (nhỏ nhất hoặc lớn nhất tùy theo ngữ cảnh
        của bài toán)?</li>
      <li><b>Độ phức tạp tính toán</b>: thời gian của giải thuật có kích cỡ như thế nào đối với bài toán?</li>
      <li><b>Yêu cầu bộ nhớ</b>: Kích cỡ của bộ nhớ cần cho giải thuật? Trong giải thuật tổng quát ở trên, kích cỡ bộ
        nhớ chủ yêu phụ thuộc vào cấu trúc dữ liệu lưu các trạng thái là của cây tìm kiếm</li>
    </ul>
            `]
        ]
    }
}