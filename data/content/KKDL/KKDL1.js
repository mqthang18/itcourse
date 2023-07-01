const KKDL1 = {
  KKDL01: {
    title: 'Nội dung',
    index: [
      ["Nhu cầu về khai phá dữ liệu", "KKDL011", `
                <ul>
                    <li>Tình trạng bùng nổ dữ liệu</li>
                    <li>Nghành công nghiệp dựa trên dữ liệu</li>
                </ul>
            `],
      ["Tình trạng bùng nổ dữ liệu", "KKDL012", `
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 col-sm-6">
                        <center>
                            <img class="w-100" src="./assets/img/KKDL/chap1/img1.png" alt="">
                        </center>
                        </div>
                        <div class="col-12 col-sm-6">
                        <center><p style="font-size: 2vw;">Xu thế tối ưu chi phí sản xuất mạch bán dẫn</p></center>
                        </div>
                    </div>
                </div>
            `],
      ["Về mặt công nghệ", "KKDL013", `
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 col-sm-6">
                        <center><img src="./assets/img/KKDL/chap1/img2.png" alt="" class="col-12"></center>
                        </div>
                        <div class="col-12 col-sm-6">
                        <center><img src="./assets/img/KKDL/chap1/img3.png" alt="" class="col-12"></center>
                        </div>
                    </div>
                </div>
            `],
      ["Tiến hóa Công nghệ CSDL", "KKDL014", `
            <center>
                <img src="./assets/img/KKDL/chap1/img4.png" alt="" class="col-12">
            </center>
            `],
      ["Công nghệ mạng", "KKDL015", `
                <center>
                    <img class="col-12 col-sm-8" src="./assets/img/KKDL/chap1/img5.png" alt="">
                </center>
            `],
      ["Sự phát triển của xã hội thông tin", "KKDL016", `
                <center>
                    <img class="col-12 col-sm-8" src="./assets/img/KKDL/chap1/img6.png" alt="">
                </center>
            `],
      ["Chi phí tạo lập dữ liệu", "KKDL017", `
                <ul>
                    <li>Giá tạo dữ liệu ngày càng rẻ hơn
                        <ul>
                        <li>Chiều hướng giá tạo mới dữ liệu giảm dần</li>
                        <li>0,5 xu Mỹ/1 GB vào năm 2009 giảm tới 0,02 xu Mỹ / 1 GB vào năm 2020</li>
                        </ul>
                    </li>
                    <li>Dung lượng tổng thể tăng
                        <ul>
                        <li>Độ dốc tăng càng cao</li>
                        <li>Đạt 35 ZB vào năm 2020</li>
                        </ul>
                    </li>
                </ul>
            `],
      ["Nghành công nghiệp dữ liệu", "KKDL018", `
                <ul>
                    <li>Nghành công nghiệp quản lý và phân tích dữ liệu</li>
                    <li>Nhân lực khoa học dữ liệu</li>
                </ul>
            `]
    ]
  },
  KKDL02: {
    title: 'Khái niệm KDD và KPDL',
    index: [
      ["Giới thiệu", "KKDL021", `
                <div>
                    <p>Trích chọn các mẫu hoặc tri thức hấp dẫn (không tầm thường, ẩn, chưa biết và hữu dụng tiềm năng) từ một tập hợp
                        lớn dữ liệu</p>
                    <p style="text-align: right;"><i>(Frawley, Piatetski-Shapiro và Matheus, 1996)</i></p>
                    <center>
                        <img class="col-12 col-sm-8" src="./assets/img/KKDL/chap1/img7.png" alt="">
                    </center>
                </div>
            `],
      ["Quá trình KDD (FPS96)", "KKDL022", `
                <center>
                    <img class="col-12 col-sm-8" src="./assets/img/KKDL/chap1/img8.png" alt="">
                    <p>[FPS96] Usama M. Fayyad, Gregory Piatetsky-Shapiro, Padhraic Smyth (1996). From Data Mining to Knowledge
                    Discovery: An Overview, Advances in Knowledge Discovery and Data Mining 1996: 1-34</p>
                </center>
            `],
      ["Dữ liệu và mẫu", "KKDL023", `
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-sm-6">
                    <ul>
                        <li>Dữ liệu (tập dữ liệu)
                        <ul>
                            <li>tập F gồm hữu hạn các trường (sự kiện)</li>
                            <li>KDD: phải gồm rất nhiều trường hợp</li>
                        </ul>
                        </li>
                        <li>Mẫu
                        <ul>
                            <li>Trong KDD: ngôn ngữ L để biểu diễn các tập con các sự kiện (dữ liệu) thuộc vào tập sự kiện F,</li>
                            <li>Mẫu: biểu thức E trong ngôn ngữ L &lt;-&gt; tập con F<sub>E</sub> tương ứng các sự kiện trong F, E được gọi là mẫu nếu nó đơn giản hơn so với việc liệt kê các sự kiện thuộc F<sub>E</sub></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                    <div class="col-12 col-sm-6">
                    <center>
                        <img src="./assets/img/KKDL/chap1/img9.png" alt="" class="col-12">
                        <p>Nếu a*[Thu nhập] + b*Nợ &lt; 0, mẫu có giá trị lớn hơn</p>
                    </center>
                    </div>
                </div>
                </div>
            `],
      ["Tính mới và hữu dụng tiềm năng", "KKDL024", `
            <div>
      <ul>
        <li>Tính mới: Mẫu phải là mới trong một miền xem xét nào đó, ít nhất là hệ thống đang được xem xét</li>
        <li>Hữu dụng tiềm năng: Mẫu cần có khả năng chỉ dẫn tới các tác động hữu dụng và được đo bởi một hàm tiện ích</li>
      </ul>
    </div>
            
            `],
      ["Tính hiểu được, tính hấp dẫn và tri thức", "KKDL025", `
            <div>
      <ul>
        <li>Tính hiểu được: Mẫu phải hiểu được</li>
        <li>Tính hấp dẫn: độ đo tổng thể về mẫu là sự kết hợp của các tiêu chí giá trị, mới, hữu ích và dễ hiểu</li>
        <li>Tri thức: Một mẫu E &isin; L được gọi là tri thức nếu như đối với một lớp người sử dụng nào đó, chỉ ra được một ngưỡng i &isin; M<sub>i</sub> mà độ hấp dẫn I(E,F,C,N,U,S) &gt; i</li>
      </ul>
    </div>
            `],

    ]
  },
  KKDL03: {
    title: 'KPDL và xử lý CSDL truyền thông',
    index: [
      ["Khai phá dữ liệu và KDD", "KKDL026", `
        <ul>
    <li>Fayyad, Piatetsky-Shapiro, Smyth:
      <ul>
        <li>KDD: là một quá trình nhiều bước thực hiện</li>
        <li>Khai phá dữ liệu là một bước chính yêu</li>
      </ul>
      Frawley, Piatetski-Shapiro và Matheus
    </li>
    <li>Khái phá dữ liệu là một bước trong quá t rình phát hiện tri thức trong CSDL, thi hành một thuật toán khai phá dữ liệu để tìm ra các mẫu từ dữ liệu theo khuôn dạng thích hợp</li>
  </ul>
        `],
      ["Các bước trong quá trình KDD", "KKDL027", `
            <ul>
                <li>Học từ miền ứng dụng</li>
                <li>Chuẩn bị dữ liệu và tiền xử lý</li>
                <li>Thu gọn và chuyển đổi dữ liệu</li>
                <li>Chọn lựa các năng (hàm) KPDL</li>
                <li>Chọn (các) thuật toán KPDL</li>
                <li>Bước KPDL: tìm mẫu hấp dẫn</li>
                <li>Đánh giá mẫu và trình diễn tri thức</li>
                <li>Sử dụng tri thức phát hiện được</li>
            </ul>
        `],

    ]
  },
  KKDL04: {
    title: 'Kiểu dữ liệu trong KPDL',
    index: [
      ["KPDL: Các kiểu dữ liệu", "KKDL028", `
        <ul>
        <li>CSDL quan hệ</li>
        <li>Kho dữ liệu</li>
        <li>CSDL giao dịch</li>
        <li>CSDL mở rộng và kho chứa thông tin
          <ul>
            <li>CSDL quan hệ - đối tượng</li>
            <li>Dữ liệu không gian và thời gian</li>
            <li>Dữ liệu chuỗi thời gian</li>
            <li>Dữ liệu dòng</li>
            <li>Dữ liệu đa phương tiện</li>
            <li>Dữ liệu không đồng nhất và thừa kế</li>
            <li>CSDL Text & WWW</li>
          </ul>
        </li>
      </ul>
        `],
      ["Kiểu dữ liệu được phân tích/khai phá", "KKDL029", `
        <div>
  <center>
    <img class="col-12" src="./assets/img/KKDL/chap1/img10.png" alt="">
  </center>
  <center>
    <img class="col-12" src="./assets/img/KKDL/chap1/img11.png" alt="">
  </center>
</div>
        `],
      ["KPDL: Kiểu mẫu được khai phá", "KKDL0210", `
        <ul>
  <li>Chức năng chung
    <ul>
      <li>KPDL mô tả: tóm tắt, phân cụm, luật kết hợp...</li>
      <li>KPDL dự đoán: phân lớp, hồi quy...</li>
    </ul>
  </li>
  <li>Các bài toán điển hình
    <ul>
      <li>Mô tả khái niệm</li>
      <li>Quan hệ kết hợp</li>
      <li>Phân lớp</li>
      <li>Phân cụm</li>
      <li>Hồi quy</li>
      <li>Mô hình phụ thuộc</li>
      <li>Phát hiện biến đổi và độ lệch</li>
      <li>Phân tích định hướng mẫu, các bài toán khác</li>
    </ul>
  </li>
</ul>
        `],
      ["Phân cấp phương pháp KPDL", "KKDL0211", `
        <div>
  <center>
    <img src="./assets/img/KKDL/chap1/img12.png" alt="" class="col-12 col-sm-8">
    <p>L. Rokach and O. Maimon (2015). <i>Data miming with Decision Trees and Applications.</i> World Scientific
      Publishing</p>
  </center>
</div>
        `],
      ["KPDL: Sơ đồ phân loại (chức năng)", "KKDL0212", `
        <ul>
  <li>Mô tả khái niệm: Đặc trưng và phân biệt
    <ul>
      <li>Tìm các đặc trưng và tính chất của khái niệm</li>
      <li>Tổng quát hóa, tóm tắt, phát hiện đặc trưng ràng buộc, tương phản, chẳng hạn, các vùng khô so sánh với ướt
      </li>
      <li>Bài toán mô tả điển hình: Tóm tắt (tìm mô tả cô đọng)</li>
      <li>Kỳ vọng, phương sai</li>
      <li>Tóm tắt văn bản</li>
    </ul>
  </li>
  <li>Quan hệ kết hợp
    <ul>
      <li>Quan hệ kết hợp giữa các biến dữ liệu: Tương quan và nhân quả</li>
      <li>Luật kết hợp: X -> Y</li>
    </ul>
  </li>
</ul>
        `],

    ]
  },
  KKDL05: {
    title: 'Các bài toán khai phá dữ liệu điển hình',
    index: [
      ["Các bài toán KPDL: Chức năng KPDL", "KKDL0213", `
        <ul>
  <li>Phân lớp và Dự báo</li>
  <li>Phân lớp</li>
  <li>Phân cụm</li>
  <li>Phân tích cụm</li>
  <li>Phân tích bất thường</li>
  <li>Phát hiện biến đổi và độ lệch</li>
  <li>Hồi quy</li>
  <li>Mô hình phụ thuộc
    <ul>
      <li>xây dựng mô hình phụ thuộc: tìm một mô hình mô tả sự phụ thuộc có ý nghĩa giữa các biến</li>
      <li>mức cấu trúc
        <ul>
          <li>dạng đồ thị</li>
          <li>biến là phụ thuộc bộ phận vào các biến khác</li>
        </ul>
      </li>
      <li>mức định lượng: tính phụ thuộc khi sử dụng việc đo tính theo giá trị số</li>
    </ul>
  </li>
  <li>Phân tích xu hướng và tiến hóa
    <ul>
      <li>Xu hướng và độ lệch: phân tích hồi quy</li>
      <li>Khai phá mẫu tuần tự, phân tích chu kỳ</li>
      <li>Phân tích dựa trên tương tự</li>
    </ul>
  </li>
  <li>Phân tích định hướng mẫu khác hoặc phân tích thống kê</li>
</ul>
        `],
      ["KPDL: Sơ đồ phân loại (Chức năng)", "KKDL0214", `
        <ul>
  <li>Phân loại theo khung nhìn
    <ul>
      <li>Kiểu dữ liệu được KP</li>
      <li>Kiểu tri thức cần phát hiện</li>
      <li>Kiểu kỹ thuật được dùng</li>
      <li>Kiểu miền ứng dụng</li>
    </ul>
  </li>
</ul>
        `],
      ["Khung nhìn đa chiều của KPDL", "KKDL0215", `
        <ul>
  <li>KPDL có thể sinh ra tới hàng nghìn mẫu: Không phải tất cả đều hấp dẫn
    <ul>
      <li>Tiếp cận gợi ý: KPDL hướng người dùng, dựa trên câu hỏi, hướng đích</li>
    </ul>
  </li>
  <li>Độ đo hấp dẫn
    <ul>
      <li>Mẫu là hấp dẫn nếu dễ hiểu, có giá trị theo dữ liệu mới/kiểm tra với độ chắc chắn, hữu dụng tiềm năng, mới
        lạ hoặc xác nhận các giả thiết mà người dùng tìm kiếm để xác thực</li>
    </ul>
  </li>
  <li>Độ đo hấp dẫn khách quan và chủ quan
    <ul>
      <li>Khách quan: dựa trên thông kê và cấu trúc của mẫu, chẳng hạn, độ hỗ trợ, độ tin cậy, ...</li>
      <li>Chủ quan: dựa trên sự tin tưởng của người dùng đối với dữ liệu, chẳng hạn sự không chờ đón, tính mới mẻ,
        tác động được...</li>
    </ul>
  </li>
  <li>Dữ liệu được khai phá
    <ul>
      <li>Quan hệ, KDL, giao dịch, dòng, hướng đối tượng/quan hệ, tích cực, không gian, chuỗi thời gian, văn bản, đa
        phương tiện, không đồng nahats, kế thừa, WWW</li>
    </ul>
  </li>
  <li>Tri thức được khai phá
    <ul>
      <li>Đặc trưng, phân biệt, kết hợp, phân lớp, phân cụm, xu hướng/độ lệch, phân tích bất thường...</li>
      <li>Các chức năng phức/tích hợp và KPDL các mức phù hợp</li>
    </ul>
  </li>
  <li>Kỹ thuật được dùng
    <ul>
      <li>Định hướng CSDL, KDL (OLAP), học máy, thống kê, trực quan hóa...</li>
    </ul>
  </li>
  <li>Ứng dụng phù hợp
    <ul>
      <li>Bán lẻ, viễn thông, ngân hàng, phân tích gian lận, KPDL sinh học, phân tích thị trường chứng khoán, KP văn
        bản, KP web...</li>
    </ul>
  </li>
</ul>
        `],
      ["Mọi mẫu khai phá được đều hấp dẫn?", "KKDL0216", `
        <ul>
        <li>KPDL có thể sinh ra tới hàng nghìn mẫu: Không phải tất cả đều hấp dẫn
          <ul>
            <li>Tiếp cận gợi ý: KPDL hướng người dùng, dựa trên câu hỏi, hướng đích</li>
          </ul>
        </li>
        <li>Độ đo hấp dẫn
          <ul>
            <li>Mẫu là hấp dẫn nếu dễ hiểu, có giá trị theo dữ liệu mới/kiểm tra với độ chắc chắn, hữu dụng tiềm năng, mới
              lạ hoặc xác nhận các giả thiết mà người dùng tìm kiếm để xác thực</li>
          </ul>
        </li>
        <li>Độ đo hấp dẫn khách quan và chủ quan
          <ul>
            <li>Khách quan: dựa trên thông kê và cấu trúc của mẫu, chẳng hạn, độ hỗ trợ, độ tin cậy, ...</li>
            <li>Chủ quan: dựa trên sự tin tưởng của người dùng đối với dữ liệu, chẳng hạn sự không chờ đón, tính mới mẻ,
              tác động được...</li>
          </ul>
        </li>
      </ul>
        `],
      ["Tìm được tất cả và chỉ các mẫu hấp dẫn", "KKDL0217", `
        <ul>
        <li>Tìm được mọi mẫu hấp dẫn: Về tính đầy đủ
          <ul>
            <li>Hệ thống KHDL có khả năng tìm mọi mẫu hấp dẫn?</li>
            <li>Tìm kiếm mày mò (heuristic) &lt;&gt; tìm kiếm đầy đủ</li>
            <li>Kết hợp &lt;&gt; phân lớp &lt;&gt; phân cụm</li>
          </ul>
        </li>
        <li>Tìm chỉ các mẫu hấp dẫn: Về tính tối ưu
          <ul>
            <li>Hệ thống KPDL có khả năng tìm ra đúng các mẫu hấp dẫn?</li>
            <li>Tiếp cận
              <ul>
                <li>Đầu tiên tìm tổng thể tất cả các mẫu sau đó lọc bỏ các mẫu không hấp dẫn</li>
                <li>Sinh ra chỉ các mẫu hấp dẫn -- tối ưu hóa câu hỏi khai phá</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
        `],
      ["KPDL: Các công nghệ chính", "KKDL0218", `
        <div>
        <center>
          <img class="col-12 col-sm-8" src="./assets/img/KKDL/chap1/img13.png" alt="">
          <img class="col-12 col-sm-8" src="./assets/img/KKDL/chap1/img14.png" alt="">
        </center>
      </div>
        `],
      ["Thống kê toán học với KPDL", "KKDL0219", `
        <ul>
  <li>Nhiều điểm chung giữa KPDL với thống kê:
    <ul>
      <li>Đặc biệt như phân tích dữ liệu thăm dò (EDA: Exploratory Data Analysis) cũng như dự báo [Fied97, HD03]
      </li>
      <li>Hệ thống KDD thường gắn kết với các thủ tục thống kê đặc biệt, đối với mô hình dữ liệu và nắm bắt nhiễu
        trong một khung cảnh phát hiện tri thức tổng thể</li>
      <li>Các phương pháp KPDL dựa theo thống kê nhận được sự quan tâm đặc biệt</li>
    </ul>
  </li>
  <li>Phân biệt giữa bài toán thống kê và bài toán khai phá dữ liệu
    <ul>
      <li>
        Bài toán kiểm định giả thiết thống kê: cho trước một giả thiết + tập dữ liệu quan sát được.
        <br>
        Cần kiểm tra xem tập dữ liệu quan sát được có phù hợp với giả thiết thống kê hay không/ giả thiết thống kê
        có đúng trên toàn bộ dữ liệu quan sát được hay không
      </li>
      <li>Bài toán học khai phá dữ liệu: mô hình chưa có trước. Mô hình kết quả phải phù hợp với tập toàn bộ dữ liệu
        -> cần đảm bảo các tham số mô hình không phụ thuộc vào cách chọn tập dữ liệu học. Bài toán học KPDL đòi hỏi
        tập dữ liệu học/tập dữ liệu kiểm tra cần "đại diện" cho toàn bộ dữ liệu trong miền ứng dụng và cần độc lập
        nhau. Một số trường hợp: hai tập dữ liệu này (hoặc tập dữ liệu kiểm tra) được công bố dưới dạng chuẩn.</li>
      <li>Về thuật ngữ: KPDL: biến ra/biến mục tiêu, thuật toán khai phá dữ liệu, thuộc tính/đặc trưng, bản ghi...
        XLDLTK: biến phụ thuộc, thủ tục thống kê, biến giải thích, quan sát...</li>
    </ul>
  </li>
</ul>
        `],
      ["Học máy với KPDL", "KKDL0220", `
        <ul>
        <li>Học máy
          <ul>
            <li>Cách máy tính có thể học (nâng cao năng lực) dựa trên dữ liệu</li>
            <li>Các chương trình máy tính tự động học được các mẫu phức tạp và ra quyết định thông minh dựa trên dữ liệu,
              ví dụ, "học được chữ viết tay trên thư thông qua một tập ví dụ"</li>
            <li>Học máy là lĩnh vực nghiên cứu phát triển nhanh</li>
          </ul>
        </li>
        <li>Một số nội dung học máy với khai phá dữ liệu
          <ul>
            <li>Học giám sát (supervised learning) là đồng nghĩa với phân lớp (classification)</li>
            <li>Học không giám sát (unsupervised learning) là đồng nghĩa với phân cụm (clustering)</li>
            <li>Học bán giám sát (semi-supervised learning) sử dụng cả ví dụ có nhãn và ví dụ không có nhãn</li>
            <li>Học tích cực (Active learning) có thể gọi là học tương tác (interactive learning) có tương tác với người
              dùng.</li>
          </ul>
        </li>
      </ul>
        `],
      ["Tìm kiếm thông tin với KPDL", "KKDL0221", `
        <ul>
  <li>Tìm kiếm thông tin
    <ul>
      <li>Information Retrieval. “Truy hồi thông tin”</li>
      <li>Tìm kiếm tài liệu hoặc tìm kiếm thông tin trong tài liệu theo một truy vấn. Tài liệu: văn bản, đa phương
        tiện, web…</li>
      <li>Hai giả thiết: (i) Dữ liệu tìm kiếm là không cấu trúc; (ii) Truy vấn dưới dạng từ khóa/cụm từ khóa mà
        không phải cấu trúc phức tạp</li>
    </ul>
  </li>
  <li>Tìm kiếm thông tin với KPDL
    <ul>
      <li>Kết hợp mô hình tìm kiếm với kỹ thuật KPDL tìm thấy các chủ đề chính trong tập tài liệu, từng tài liệu …
        bổ sung thuộc tính dữ liệu quan trọng</li>
      <li>KPDL văn bản, web, phương tiện xã hội liên quan mật thiết với tìm kiếm thông tin.</li>
    </ul>
  </li>
</ul>
        `],
    ]
  },
  KKDL06: {
    title: 'Tính liên nghành của khai phá dữ liệu',
    index: [
      ["Ứng dụng cơ bản của KPDL", "KKDL022", `
        <ul>
  <li>Phân tích dữ liệu và hỗ trợ quyết định
    <ul>
      <li>Phân tích và quản lý thị trường</li>
      <li>Tiếp thị định hướng, quản lý quan hệ khách hàng (CRM), phân
        tích thói quen mua hàng, bán hàng chéo, phân đoạn thị trường</li>
      <li>Phân tích và quản lý rủi ro</li>
      <li>Dự báo, duy trì khách hàng, cải thiện bảo lãnh, kiểm soát chất lượng, phân tích cạnh tranh</li>
      <li>Phát hiện gian lận và phát hiện mẫu bất thường (ngoại lai)
      </li>
    </ul>
  </li>
  <li>Ứng dụng khác
    <ul>
      <li>Khai phá Text (nhóm mới, email, tài liệu) và khai phá Web</li>
      <li>Khai phá dữ liệu dòng</li>
      <li>Phân tích DNA và dữ liệu sinh học</li>
    </ul>
  </li>
</ul>
        `],
      ["Phân tích và quản lý thị trường", "KKDL023", `
        <ul>
        <li>Nguồn dữ liệu có từ đâu ?
          <ul>
            <li>Giao dịch thẻ tín dụng, thẻ thành viên, phiếu giảm giá, các phàn nàn của khách hàng, các nghiên cứu phong
              cách sống (công cộng) bổ sung</li>
          </ul>
        </li>
        <li>Tiếp thị định hướng
          <ul>
            <li>Tìm cụm các mô hình khách hàng cùng đặc trưng: sự quan tâm,
              mức thu nhập, thói quen chi tiêu...</li>
            <li>Xác định các mẫu mua hàng theo thời gian</li>
          </ul>
        </li>
        <li>Phân tích thị trường chéo
          <ul>
            <li>Quan hệ kết hợp/đồng quan hệ giữa bán hàng và sự báo dựa theo quan hệ kết hợp</li>
          </ul>
        </li>
        <li>Hồ sơ khách hàng
          <ul>
            <li>Kiểu của khách hàng mua sản phẩm gì (phân cụm và phân lớp)</li>
          </ul>
        </li>
        <li>Phân tích yêu cầu khách hàng
          <ul>
            <li>Định danh các sản phẩm tốt nhất tới khách hàng (khác nhau)</li>
            <li>Dự báo các nhân tố sẽ thu hút khách mới</li>
          </ul>
        </li>
        <li>Cung cấp thông tin tóm tắt
          <ul>
            <li>Báo cáo tóm tắt đa chiều</li>
            <li>Thông tin tóm tắt thống kê (xu hướng trung tâm dữ liệu và biến đổi)</li>
          </ul>
        </li>
      </ul>
        `],
      ["Phân tích doanh nghiệp và quản lý rủi ro", "KKDL024", `
        <ul>
  <li>Lên kế hoạch tài chính và đánh giá tài sản
    <ul>
      <li>Phân tích và dự báo dòng tiền mặt</li>
      <li>Phân tích yêu cầu ngẫu nhiên để đánh giá tài sản</li>
      <li>Phân tích lát cắt ngang và chuỗi thời gian (tỷ số tài chính, phân tích xu hướng...)</li>
    </ul>
  </li>
  <li>Lên kế hoạch tài nguyên
    <ul>
      <li>Tóm tắt và so sánh các nguồn lực và chi tiêu</li>
    </ul>
  </li>
  <li>
    Cạnh tranh
    <ul>
      <li>Theo dõi đối thủ cạnh tranh và định hướng thị trường</li>
      <li>Nhóm khách hàng thành các lớp và định giá dựa theo lớp khách</li>
      <li>Khởi tạo chiến lược giá trong thị trường cạnh tranh cao</li>
    </ul>
  </li>
</ul>
        `],
      ["Phân tích kinh doanh: khai phá quy trình", "KKDL025", `
        <div>
  <center>
    <img class="col-12 col-sm-8" src="./assets/img/KKDL/chap1/img15.png" alt="">
  </center>
</div>
        `],
      ["Phát hiện gian lận và khai phá mẫu hiếm", "KKDL026", `
        <ul>
  <li>Tiếp cận: Phân cụm và xây dựng mô hình gian lận, phân tích bất thường</li>
  <li>Ứng dụng: Chăm sóc sức khỏe, bán lẻ, dịch vụ thẻ tín dụng, viễn thông
    <ul>
      <li><b>Bảo hiểm tự động</b>: vòng xung đột</li>
      <li><b>Rửa tiền</b>: giao dịch tiền tệ đáng ngờ</li>
      <li><b>Bảo hiển y tế</b>: Bệnh nghề nghiệp, nhóm bác sỹ, và nhóm chỉ dẫn; Xét nghiệm không cần thiết hoặc tương quan</li>
      <li><b>Viến thông</b>: cuộc gọi gian lận; Mô hình cuộc gọi: đích cuộc gọi, độ dài, thời điểm trong ngày hoặc tuần. Phân tích mẫu lệch một dạng chuẩn dự kiến</li>
      <li><b>Công nghiệp bán lẻ</b>: Các nhà phân tích ước lượng rằng 38% giảm bán lẻ là do nhân viên không trung thực</li>
      <li>Chống khủng bố</li>
    </ul>
  </li>
</ul>
        `],
      ["Ứng dụng khác", "KKDL027", `
        <ul>
  <li>Khai phá web và khai phá phương tiện xã hội
    <ul>
      <li>Trợ giúp IBM áp dụng các thuật toán KPDL biên bản truy nhập 
        Web đối với các trang liên quan tới thị trường để khám phá ưu đãi khách hàng và các trang hành vi, phân tích tính hiệu quả của tiếp thị Web, cải thiệ cách tổ chức Website …</li>
    </ul>
  </li>
  <li>Thể thao
    <ul>
      <li>IBM Advanced Scout phân tích thống kế môn NBA (chặn bóng, hỗ 
        trợ và lỗi) để đưa tới lợi thế cạnh trang cho New York Knicks và Miami Heat</li>
    </ul>
  </li>
  <li>Thiên văn học
    <ul>
      <li>JPL và Palomar Observatory khám phá 22 chuẩn tinh (quasar) với sự trợ giúp của KPDL</li>
    </ul>
  </li>
</ul>
        `],
      ["KPDL: TỐP 20 TỪ KHÓA HÀNG ĐẦU", "KKDL028", `
        <div>
        <center>
          <img class="col-12" src="./assets/img/KKDL/chap1/img16.png" alt="">
        </center>
      </div>
        `],
      ["Vấn đề chính trong KPDL", "KKDL029", `
        <ul>
  <li>Phương pháp luận khai phá
    <ul>
      <li>Khai phá các kiểu tri thức khác nhau từ dữ liệu hỗn tạp như sinh học, dòng, web…</li>
      <li>Hiệu năng: Hiệu suất, tính hiệu quả, và tính mở rộng</li>
      <li>Đánh giá mẫu: bài toán về tính hấp dẫn</li>
      <li>Kết hợp tri thức miền: ontology</li>
      <li>Xử lý dữ liệu nhiễu và dữ liệu không đầy đủ</li>
      <li>Tính song song, phân tán và phương pháp KP gia tăng</li>
      <li>Kết hợp các tri thức được khám phá với tri thức hiện có: tổng hợp tri thức</li>
    </ul>
  </li>
  <li>Tương tác người dùng
    <ul>
      <li>Ngôn ngữ hỏi KPDL và khai phá “ngẫu hứng”</li>
      <li>Biểu diễn và trực quan kết quả KPDL</li>
      <li>Khai thác tương tác tri thức ở các cấp độ trừu tượng</li>
    </ul>
  </li>
  <li>Áp dụng và chỉ số xã hội
    <ul>
      <li>KPDL đặc tả miền ứng dụng và KPDL vô hình</li>
      <li>Bảo đảm bí mật dữ liệu, toàn vẹn và tính riêng tư</li>
    </ul>
  </li>
</ul>
        `],
      ["Một số yêu cầu ban đầu", "KKDL0230", `
            <ul>
                <li>
                    <p>Sơ bộ về một số yêu cầu để dự án KPDL thành công</p>
                    <ul>
                    <li>Cần có kỳ vọng về một lợi ích đáng kể về kết quả KPDL</li>
                    <li>Hoặc trực tiếp nhận được “trái cây treo thấp” (“low-hanging fruit”) dễ thu lượm (như Mô hình mở rộng khách hàng qua tiếp thị và bán hàng)</li>
                    <li>Hoặc gián tiếp tạo ra đòn bẩy cao khi tác động vào quá trình sống còn có ảnh hưởng sóng ngầm mạnh (Giảm các nợ khoản khó đòi từ 10% còn 9,8% có số tiền lớn).</li>
                    <li>Cần có một đội dự án thi hành các kỹ năng theo yêu cầu: chọn dữ liệu, tích hợp dữ liệu, phân tích mô hình hóa, lập và trình diễn báo cáo. Kết hợp tốt giữ người phân tích và người kinh doanh</li>
                    <li>Nắm bắt và duy trì các dòng thông tin tích lũy (chẳng hạn, mô hình kết quả từ một loạt chiến dịch tiếp thị)</li>
                    <li>Quá trình học qua nhiều chu kỳ, cần “chạy đua với thực tiễn” (mô hình mở rộng khách hàng ban đầu chưa phải đã tối ưu)</li>
                    </ul>
                </li>
            </ul>
        `]
    ]
  },
  KKDL07: {
    title: 'Video bài giảng',
    index: [
      ["Video bài giảng", "KKDL031", `
                <p>Lý thuyết: <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220109_Khaikhoangdulieu/Video/Ly%20thuyet/Chuong01.mp4" target="__blank">Link</a></p>

                <p>Thực hành: <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220109_Khaikhoangdulieu/Video/Thuc%20hanh/TH1.mp4" target="__blank">Link</a></p>
            `]
    ]
  }
}