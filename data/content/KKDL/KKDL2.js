const KKDL2 = {
    KKDL01: {
        title: 'Vai trò của hiểu dữ liệu',
        index: [
            ["Giới thiệu", "KKDL011", `
            <center>
            <img src="./assets/img/KKDL/chap2/img1.png" class="col-12 col-sm-8" alt="">
            <img src="./assets/img/KKDL/chap2/img2.png" class="col-12 col-sm-8" alt="">
            <p>Mô hình quá trình khai phá dữ liệu hướng miền ứng dụng [CYZ10]: <br>Bước P3 "<b><u>Hiểu dữ liệu</u></b>", Bước
              P4 "<b><u>Tiền xử lý dữ liệu</u></b>"</p>
          </center>
            `],
            ["Hiểu dữ liệu qua hai phiên bản sách", "KKDL012", `
            <center>
      <img src="./assets/img/KKDL/chap2/img3.png" class="col-12 col-sm-8" alt="">
      <p>Thay đổi đáng kể từ phiên bản 2006 -> 2011: Phiên bản 2011 nhấn mạnh <b>Hiểu dữ liệu</b></p>
    </center>
            `],
        ]
    },
    KKDL02: {
        title: 'Đối tượng DL và kiểu thuộc tính',
        index: [
            ["Giới thiệu", "KKDL021", `
                <ul>
                    <li>Kiểu tập dữ liệu</li>
                    <li>Đối tượng dữ liệu</li>
                    <li>Thuộc tính dữ liệu</li>
                </ul>
            `],
            ["Kiểu tập dữ liệu", "KKDL022", `
            <ul>
            <li>Bản ghi
              <ul>
                <li>Bản ghi quan hệ</li>
                <li>Ma trận DL, chẳng hạn: ma trận số, bảng chéo...</li>
                <li>Dữ liệu tài liệu: Tài liệu văn bản dùng vector tần số từ...</li>
                <li>Dữ liệu giao dịch</li>
              </ul>
              <center>
                <img class="col-12" src="./assets/img/KKDL/chap2/img4.png" alt="">
              </center>
            </li>
            <li>Đồ thị và mạng
              <ul>
                <li>World Wide Web</li>
                <li>Mạng xã hội và mạng thông tin</li>
                <li>Cấu trúc phân tử</li>
              </ul>
            </li>
            <li>Thứ tự
              <ul>
                <li>Dữ liệu Video: dãy các ảnh</li>
                <li>Dữ liệu thời gian: chuỗi thời gian</li>
                <li>Dữ liệu dãy: dãy giao dịch</li>
                <li>Dữ liệu dãy gene</li>
              </ul>
            </li>
            <li>Không gian, ảnh và đa phương tiện
              <ul>
                <li>DL không gian: bản đồ</li>
                <li>Dữ liệu ảnh</li>
                <li>Dữ liệu video</li>
              </ul>
            </li>
          </ul>
            `],
            ["Đặc trưng quan trọng của DL có cấu trúc", "KKDL023", `
            <ul>
      <li>Kích thước <br>
        &dotsquare; Tai hóa của kích thước lớn
      </li>
      <li>Thưa <br>
        &dotsquare; Chỉ mang tính hiện diện
      </li>
      <li>Phân tích <br>
        &dotsquare; Mẫu phụ thuộc quy mô
      </li>
      <li>Phân bố <br>
        &dotsquare; Tập trung và phân tán
      </li>
    </ul>

            `],
            ["Đối tượng dữ liệu", "KKDL024", `
            <ul>
      <li>Tập dữ liệu được tạo nên từ các đối tượng dữ liệu</li>
      <li>MỖi đối tượng dữ liệu (data object) trình bày 1 thực thể</li>
      <li>VD
        <br>
        &dotsquare; CSDL bán hàng: Khách hàng, mục lưu, doanh số
        <br>
        &dotsquare; CSDL y tế: bệnh nhân, điều trị
        <br>
        &dotsquare; CSDL đại học: sinh viên, giáo sư, môn học
      </li>
      <li>Tên khác: mẫu (samples), ví dụ (examples), thể hiện (intances), điểm DL (data points), đối tượng (objects), bộ
        (tuples)</li>
      <li>Đối tượng DL được mô tả bằng các thuộc tính (attributes)</li>
      <li>Dòng CSDL -> đối tượng DL; cột -> thuộc tính</li>
    </ul>
            `],
            ["Thuộc tính", "KKDL025", `
            <ul>
      <li>Thuộc tính _Attribute (hoặc chiều _dimension, đặc trưng _features, biến _variables): một trường DL biểu diễn
        một thuộc tính/đặc trưng của một đối tượng DL
        <br>
        VD: ChisoKH, tên, địa chỉ
      </li>
      <li>Kiểu
        <ul>
          <li>Định danh</li>
          <li>Nhị phân</li>
          <li>Số: định lượng
            <ul>
              <li>Cỡ khoảng</li>
              <li>Cỡ tỷ lệ</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
            `],
            ["Kiểu thuộc tính", "KKDL026", `
            <ul>
            <li>Định danh: lớp, trạng thái, hoặc "tên đồ vật"
              <ul>
                <li>Hair_color= {auburn, black, blond, brown, grey, red, white}</li>
                <li>Tình trạng hôn nhân (marital status), nghề nghiệp (occupation), số ID (ID numbers), mã zip bưu điện (zip
                  codes)</li>
              </ul>
            </li>
            <li>Nhị phân
              <ul>
                <li>Thuộc tính định danh hai trạng thái (0 và 1)</li>
                <li>Nhị phân đối xứng: Cả hai kết quả quan trọng như nhau</li>
                <li>Chẳng hạn, giới tính</li>
                <li>Nhị phân phi ĐX: kết quả không quan trọng như nhau</li>
                <li>Chẳng hạn, kiểm tra y tế (tích cực/tiêu cực)</li>
                <li>Quy ước: gán 1 cho kết quả quan trọng nhất (chẳng hạn, dương tính HIV)</li>
              </ul>
            </li>
            <li>Có thứ tự
              <ul>
                <li>Các giá trị có thứ tự mang nghĩa (xếp hạng) nhưng độ lớn các giá trị liên kết: không được biết</li>
                <li>Size = {small, medium, large}, grades, army rankings</li>
              </ul>
            </li>
          </ul>
            `],
            ["Kiểu thuộc tính số", "KKDL027", `
            <ul>
      <li>Số lượng (nguyên hoặc thực)</li>
      <li>Khoảng
        <ul>
          <li>Được đo theo kích thước các đơn vi cùng kích thước</li>
          <li>Các giá trị có thứ tự</li>
          <li>Chẳng hạn, nhiệt độ theo C<sup>0</sup> hoặc F<sup>0</sup>, ngày lịch</li>
          <li>Không làm điểm "true zero-point"</li>
        </ul>
      </li>
      <li>Tỷ lệ
        <ul>
          <li>zero-point vốn có</li>
          <li>Các giá trị là một bậc của độ đo so với đơn vị đo lường (10 K<sup>0</sup> là hai lần cao hơn 5
            K<sup>0</sup>)</li>
        </ul>
      </li>
    </ul>

            `],
            ["Thuộc tính rời rạc", "KKDL028", `
            <ul>
      <li>Chỉ cố một tập hữu hạn hoặc hữu hạn đếm được các giá trị</li>
      <li>Chẳng hạn, mã zip, nghệ nghiệp hoặc tập các từ trong một tập tài liệu</li>
      <li>Đôi lúc trình bày như các biến nguyên</li>
      <li>Lưu ý: Thuộc tính nhị phân là trường hợp riêng của thuộc tính rời rạc</li>
    </ul>
            `],
            ["Thuộc tính liên tục", "KKDL029", `
            <ul>
      <li>Có rất nhiều các giá trị thuộc tính</li>
      <li>Như nhiệt độ, chiều cao, trọng lượng</li>
      <li>Thực tế, giá trị thực chỉ tính và trình bảng bằng sử dụng một hữu hạn chữ số</li>
      <li>Thuộc tính liên tục được trình bày phổ biến như biến dấu phẩy động</li>
    </ul>
            `],
            ["Tương tự và phân biệt", "KKDL0230", `
            <ul>
      <li>Tương tự
        <ul>
          <li>Độ đo bằng số cho biết hai đối tượng giống nhau ra sao</li>
          <li>Giá trí càng cao khi hai đối tượng càng giống nhau</li>
          <li>Thường thuộc đoạn [0,1]</li>
        </ul>
      </li>
      <li>Phân biệt - dissimilarity (như khoảng cách)
        <ul>
          <li>Độ đo bằng số cho biết hai đối tượng khác nhau ra sao</li>
          <li>Càng thấp khi các đối tượng càng giống nhau</li>
          <li>Phân biệt tối thiểu là 0</li>
          <li>Giới hạn trên tùy</li>
        </ul>
      </li>
      <li>Gần - proximity chỉ dẫn tới tương tự hoặc phân biệt</li>
    </ul>
            `]
        ]
    },
    KKDL03: {
        title: 'Mô tả thống kê cơ bản của dữ liệu',
        index: [
            ["Giới thiệu", "KKDL031", `
            <ul>
      <li>Độ đo tập trung của dữ liệu
        <ul>
          <li>Độ đo trung bình</li>
          <li>Độ đo trung vị</li>
          <li>Mode</li>
        </ul>
      </li>
      <li>Độ đo phân tác của dữ liệu</li>
    </ul>
            `],
            ["Độ đo tập trung của dữ liệu", "KKDL032", `
            <ul>
      <li>Độ đo trung bình
        <center>
          <img class="col-12 col-sm-8" src="./assets/img/KKDL/chap2/img5.png" alt="">
        </center>
      </li>
      <li>Độ đo trung vị
        <center>
          <img src="./assets/img/KKDL/chap2/img6.png" class="col-12 col-sm-8" alt="">
        </center>
      </li>
      <li>Mode
        <center>
          <img src="./assets/img/KKDL/chap2/img7.png" class="col-12 col-sm-8" alt="">
        </center>
      </li>
    </ul>
            `],
            ["Độ đo phân tán của dữ liệu", "KKDL033", `
            <ul>
      <li>Độ lệch chuẩn (Standard deviation): Phân bố dữ liệu xung quanh kỳ vọng</li>
      <li>Cực tiêu (minimum) và cực đại (maximum): giá trị nhỏ nhất và giá trị lớn nhất</li>
      <li>Độ đo phân tán:
        <ul>
          <li>[Min, Max]: giá trị k% là giá trị x sao cho |y &isin; D: min &le;y&lt;x|/|y&isin;D|=k%</li>
          <li>Q1 = 25%, Q2 = 50%, Q3 = 75% interquartile range (IQR): Q3 - Q1</li>
          <li>Min, Q1, Median, Q3, Max</li>
        </ul>
      </li>
      <li>Bảng tần suất (Frequency tables): Phân bố tần suất giá trị của các biến</li>
      <li>Lược đồ (Histograms): Cung cấp kỹ thuật đồ họa biểu diễn tần số giá trị của một biến</li>
    </ul>
            `],
            ["Trực quan hóa dữ liệu", "KKDL034", `
            <ul>
      <li>Biểu đồ tần suất (Frequency Histograms)
        <ul>
          <li>Là phương pháp biểu diễn tóm tắt sự phân bố của một thuộc tính cho trước nào đó dưới dạng trực quan</li>
          <li>Biểu đồ tần suất ứng với một thuộc tính A nào đó sẽ chia sự phân bố dữ liệu của A thành các tập không giao
            nhau gọi là bucket (thường thì độ rộng của các bucket là bằng nhau)</li>
          <li>Mỗi bucket được biểu diễn bằng một hình chữ nhật có chiều cao tương ứng là số lượng hay tần suất của các
            giá trị có trong bucket</li>
        </ul>
        <center>
          <img class="col-12 col-sm-8" src="./assets/img/KKDL/chap2/img8.png" alt="">
        </center>
      </li>
      <li>Đồ thị quantile plot
        <center>
          <img class="col-12 col-sm-8" src="./assets/img/KKDL/chap2/img9.png" alt="">
        </center>
      </li>
      <li>Đồ thị quantile-quantile plot
        <center>
          <img class="col-12 col-sm-8" src="./assets/img/KKDL/chap2/img10.png" alt="">
        </center>
      </li>
      <li>Đồ thị scatter plot
        <center>
          <img class="col-12 col-sm-8" src="./assets/img/KKDL/chap2/img11.png" alt="">
        </center>
      </li>
      <li>Loes curve
        <center>
          <img class="col-12 col-sm-8" src="./assets/img/KKDL/chap2/img12.png" alt="">
        </center>
      </li>
    </ul>
            `]
        ]
    },
    KKDL04: {
        title: 'Độ đo tương tự và phân biệt',
        index: [
            ["Giới thiệu", "KKDL041", `
            <ul>
      <li>Tương tự
        <ul>
          <li>Độ đo bằng số cho biết 2 đối tượng giống nhau ra sao</li>
          <li>Giá trí càng cao khi 2 đối tượng càng giống nhau</li>
          <li>Thường thuộc đoạn [0,1]</li>
        </ul>
      </li>
      <li>Phân biệt - Dissimilarity (như khoảng cách)
        <ul>
          <li>Độ đo bằng số cho biết hai đối tượng khác nhau ra sao</li>
          <li>Càng thấp khi các đối tường càng giống nhau</li>
          <li>Phân biệt tối thiểu là 0</li>
          <li>Giới hạn trên tùy</li>
        </ul>
      </li>
      <li>Gần - proximity chỉ dẫn tới tương tự hoặc phân biệt</li>
    </ul>
            `],
            ["Khái niệm khoảng cách trong thống kê", "KKDL042", `
            <ul>
            <li style="text-align: justify;">Dữ liệu thống kê thường được tổ chức ở dạng ma trận trong đó các
              cột đại diện cho các biến ngẫu nhiên (giả sử là n) còn các hàng là
              các mẫu quan sát (giả sử là m). Mỗi mẫu quan sát này được xem là
              một điểm trong không gian có số chiều bằng số biến ngẫu nhiên.
              Tập hợp các mẫu quan sát sẽ tạo thành một “đám mây” của các
              điểm đó phân bố trong không gian n chiều. Rất nhiều các công cụ
              thống kê dựa trên việc tính toán khoảng cách của các điểm trong
              các “đám mây” như vậy.</li>
            <li>Khoảng cách Minkowski
              <br>
              <center>
                <img class="col-12" src="./assets/img/KKDL/chap2/img13.png" alt="">
              </center>
              <p>i = (x<sub>i1</sub>, x<sub>i2</sub>,..., x<sub>ip</sub>) và j = (x<sub>j1</sub>,
                x<sub>j2</sub>,...,x<sub>jp</sub>) là 2 phần tử dữ liệu trong p-dimensional, q &ge; 1</p>
              <p>Nếu q = 1, d là khoảng cách Manhattan
                <center>
                  <img class="col-12" src="./assets/img/KKDL/chap2/img14.png" alt="">
                </center>
              </p>
              <p>Nếu q = 2, d là khoảng cách Euclid
                <center>
                  <img class="col-12" src="./assets/img/KKDL/chap2/img15.png" alt="">
                </center>
              <p>Tính chất</p>
              <ul>
                <li>d(i,j)&ge;0</li>
                <li>d(i,i)=0</li>
                <li>d(i,j)=d(j,i)</li>
                <li>d(i,j)&le;d(i,k)+d(k,j)</li>
              </ul>
              </p>
            </li>
          </ul>
            `],
            ["Ma trận dữ liệu và ma trận phân biệt", "KKDL043", `
            <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-sm-6">
          <p><b>Ma trận DL</b></p>
          <ul>
            <li>n điểm DL có p chiều</li>
            <li>Hai chế độ
              <center>
                <img src="./assets/img/KKDL/chap2/img16.png" class="col-12 col-sm-8" alt="">
              </center>
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm-6">
          <p><b>Ma trận phân biệt</b></p>
          <ul>
            <li>n điểm DL nhưng chỉ ghi khoảng cách</li>
            <li>Ma trận tam giác</li>
            <li>Chế độ đơn</li>
          </ul>
          <center>
            <img src="./assets/img/KKDL/chap2/img17.png" class="col-12 col-sm-8" alt="">
          </center>
        </div>
      </div>
    </div>
            `],
            ["Ví dụ: Ma trận DL và ma trận phân biệt", "KKDL044", `
            <center>
      <img src="./assets/img/KKDL/chap2/img18.png" class="col-12 col-sm-8" alt="">
    </center>
            `],
            ["Phân biệt giữa các biến nhị phân", "KKDL045", `
            <div>
      <center>
        <img src="./assets/img/KKDL/chap2/img19.png" class="col-12 col-sm-8" alt="">
      </center>
      <ul>
        <li>Giới tính: thuộc tính nhị phân đối xứng</li>
        <li>Các thuộc tính còn lại: nhị phân phi đối xứng</li>
        <li>Cho giá trị Y và P là 1, và giá trị N là 0</li>
      </ul>
      <center>
        <img src="./assets/img/KKDL/chap2/img20.png" class="col-12 col-sm-8" alt="">
        <img src="./assets/img/KKDL/chap2/img21.png" class="col-12 col-sm-8" alt="">
      </center>
    </div>
            `]
        ]
    },
    KKDL05: {
        title: 'Tiền xử lý dữ liệu',
        index: [
            ["Giới thiệu", "KKDL051", `
                <ul>
                    <li>Kỹ thuật làm sạch dữ liệu</li>
                    <li>Kỹ thuật tích hợp dữ liệu</li>
                    <li>Kỹ thuật thu gọn dữ liệu</li>
                    <li>Kỹ thuật chuyển dạng dữ liệu</li>
                </ul>      
            `],
            ["Làm sạch dữ liệu", "KKDL052", `
            <div>
            <p>Xử lý các giá trị bị thiếu</p>
            <ol>
              <li>Bỏ qua bản ghi thiếu</li>
              <li>Thực hiện thủ công</li>
              <li>Dùng hằng số toàn cục</li>
              <li>Sử dụng các độ do hướng trọng tâm của dữ liệu</li>
              <li>Sử dụng giá trị bình quân hay trung vị</li>
              <li>Sử dụng giá trị có khả năng cao nhất</li>
            </ol>
          </div>
            `],
            ["Làm sạch dữ liệu", "KKDL053", `
            <div>
      <p>Xử lý các dữ liệu nhiễu</p>
      <ol>
        <li>Phương pháp binning</li>
        <li>Phương pháp hồi quy</li>
        <li>Phương pháp phân tích ngoại lai</li>
      </ol>
    </div>
            `],
            ["Tích hợp dữ liệu", "KKDL054", `
            <div>
      <ul>
        <li>Là phương pháp hợp nhất dữ liệu từ nhiều nguồn khác nhau</li>
        <li>Các vấn đề cần giải quyết trong tích hợp dữ liệu
          <ol>
            <li>Nhận diện thực thể</li>
            <li>Dư thừa dữ liệu và phân tích độ tương quan</li>
            <li>Phát hiện các bộ lặp</li>
            <li>Phát hiện xung đột trong dữ liệu và mức độ trừu tượng</li>
          </ol>
        </li>
      </ul>
    </div>
            `],
            ["Chuyển đổi dữ liệu", "KKDL055", `
            <div>
      <ul>
        <li>Dữ liệu sẽ được chuyển đổi hoặc hợp nhất vào các định dạng phù hợp cho việc khai phá dữ liệu</li>
        <li>Các chiến lược chuyển đổi dữ liệu
          <ol>
            <li>Làm mịn</li>
            <li>Tổng hợp</li>
            <li>Khái quát hóa</li>
            <li>Xây dựng các thuộc tính</li>
            <li>Chuẩn hóa</li>
            <li>Rời rạc hóa</li>
          </ol>
        </li>
        <li>Chuẩn hóa dữ liệu
          <ul>
            <li>Chuẩn hó Min-Max: thực hiện việc chuẩn hóa tuyến tính trên dữ liệu gốc. Giả sử minA và maxA là giá trị nhỏ nhất và lớn nhất của tính A. Chuẩn hóa min-max sẽ ánh xạ giá trị v của A sang giá trị v' nằm trong khoảng [new_minA, new_maxA] bằng công thức sau:
              <center>
                <img src="./assets/img/KKDL/chap2/img22.png" class="col-12 col-sm-8" alt="">
              </center>
            </li>
            <li>Chuẩn hóa min-max bảo đảm mối quan hệ giữa các giá trị của dữ liệu gốc. Nó sẽ phát hiện ra được các lỗi "vượt quá giới hạn" nếu các dữ liệu input trong tương lai rơi ra ngoài khoảng giá trị ban đầu của A.</li>
            <li>Chuẩn hóa dữ liệu
              <ul>
                <li>Chuẩn hóa z-score: Trong chuẩn hóa z-score, các giá trị của thuộc tính A sẽ được chuẩn hóa dựa trên giá trị trung bình và độ lệch chuẩn của A. Một giá trị v của A sẽ được chuẩn hóa thành giá trị v' bằng công thức sau:
                  <center>
                    <img src="./assets/img/KKDL/chap2/img23.png" alt="">
                  </center>
                  <ul>
                    <li>&micro;<sub>A</sub>: giá trị trung bình của A</li>
                    <li>&sigma;<sub>A</sub>: độ lệch chuẩn A</li>
                  </ul>
                </li>
                <li>Phương pháp chuẩn hóa này hữu ích trong trường hợp ta không biết được giá trị nhỏ nhất và lớn nhất của A, hoặc khi có những giá trị cá biết (outlier) "thống trị" chuẩn hóa min-max</li>
                <li>Chuẩn hóa dữ liệu
                  <ul>
                    <li>Chuẩn hóa bằng tỉ lệ thập phân (decimal scaling): Theo phương pháp này, giá trị v sẽ được chuẩn hóa bằng cách dời dấu phẩy thập phân của nó, dựa vào giá trị tuyệt đối lớn nhất của A. Một giá trị v sẽ được chuẩn hóa thành v' bởi công thức sau:
                      <center>
                        <img class="col-12 col-sm-6" src="./assets/img/KKDL/chap2/img24.png" alt="">
                      </center>
                    </li>
                    <li>Trong đó j là số nguyên nhỏ nhất sao cho Max(|v'|) < 1</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
            `],
            ["Phương pháp thu gọn dữ liệu", "KKDL056", `
            <div>
            <ul>
              <li>Giảm chiều dữ liệu</li>
              <li>Giảm số lượng dữ liệu</li>
              <li>Giảm chiều dữ liệu
                <ul>
                  <li>Lựa chọn tập thuộc tính
                    <ol>
                      <li>Lựa chọn dần từng thuộc tính</li>
                      <li>Loại bỏ dần từng thuộc tính</li>
                      <li>Kết hợp cả lựa chọn và loại bỏ thuộc tính</li>
                      <li>Sử dụng cây quyết định</li>
                    </ol>
                  </li>
                  <li>Giảm chiều bằng phương pháp biến đổi
                    <ol>
                      <li>Biến đổi rời rạc dạng song</li>
                      <li>Phân tích thành phần chính</li>
                    </ol>
                  </li>
                  <li>Giảm số lượng dữ liệu
                    <ol>
                      <li>Tổng hợp khối dữ liệu</li>
                      <li>Mô hình hồi quy và tuyến tính logarit</li>
                      <li>Biểu đồ tần suất</li>
                      <li>Phân cụm</li>
                      <li>Lấy mẫu</li>
                    </ol>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
            `],
            ["Rời rạc hóa và sinh cây khái niệm phân cấp", "KKDL057",
                `
        <div>
      Đối với dữ liệu số
      <ul>
        <li>Phương pháp binning</li>
        <li>Phương pháp phân tích biểu đồ tần suất</li>
        <li>Phân cụm, cây quyết định và phân tích tương quan</li>
      </ul>
    </div>
        `
            ]
        ]
    },
    KKDL08: {
        title: 'Video bài giảng',
        index: [
            ["Video bài giảng", "KKDL081", `
                <p>Lý thuyết: <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220109_Khaikhoangdulieu/Video/Ly%20thuyet/Chuong02.mp4" target="__blank">Link</a></p>

                <p>Thực hành: <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220109_Khaikhoangdulieu/Video/Thuc%20hanh/TH2.mp4" target="__blank">Link</a></p>
            `]
        ]
    }
}