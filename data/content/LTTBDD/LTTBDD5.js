const LTTBDD5 = {
    LTTBDD01: {
        title: 'SQLite',
        index: [
            ['Tính năng của SQLite', 'LTTBDD011', `
            <h4>Tính năng của SQLite</h4>
            <div>
              <ul>
                <li>SQLite là hệ quản trị CSDL (DBMS) quan hệ tương tự như CSDL khác</li>
                <li>Đặc điểm nổi bật của SQLite so với các DBMS khác là gọn, nhẹ, đơn giản, đặc biệt không cần mô hình
                  server-client, không cần cài đặt, cấu hình hay khởi động nên không có khái niệm user, password hay
                  quyền hạn trong SQLite Database</li>
                <li>Dữ liệu cũng được lưu ở một file duy nhất</li>
                <li>Chỉ chạy ở phía Client</li>
                <li>SQLite thường không được sử dụng với các hệ thống lớn nhưng với những hệ thống ở quy mô vừa và nhỏ
                  thì SQLite không thua các DBMS khác về chức năng hay tốc độ</li>
                <li>Vì không cần cài đặt hay cấu hình nên SQLite được sử dụng nhiều trong việc phát triển, thử
                  nghiệm,... vì tránh được những rắc rối trong quá trình cài đặt</li>
                <li>SQLite không yêu cầu một tiến trình Server riêng rẽ để hoạt động</li>
                <li>SQLite không cần cấu hình, nghĩa là không cần thiết phải cài đặt</li>
                <li>Một SQLite Database đầy đủ được lưu giữ trong một disk file đơn SQLite là rất nhỏ gọn, nhỏ hơn 400KB
                  đã được cấu hình đầy đủ hoặc nhỏ hơn 250 KB khi đã bỏ qua các tính năng tùy ý</li>
                <li>SQLite là tự chứa, nghia là không có sự phụ thuộc ngoại vi</li>
                <li>Các Transaction trong SQLite là tuân theo đầy đủ chuẩn ACID, đảm bảo truy cập an toàn từ nhiều tiến
                  trình hoặc thread</li>
                <li>SQLite hỗ trợ hầu hết các tính năng của ngôn ngữ truy vấn trong chuẩn SQL92</li>
              </ul>
            </div>

            <div>
              <p><b>Tại sao nên dùng SQLite</b></p>
              <ul>
                <li>Android cung cấp class SQLiteOpenHelper, SQLiteDatabase hỗ trợ SQLite</li>
                <li>Câu lệnh SQL dùng để tạo bảng với khóa chính tự tăng là: create table student(_id integer primary
                  key autoincrement, name text)</li>
                <li>CSDL mà Android hỗ trợ sẵn là SQLite</li>
                <li>CSDL SQLite chỉ cần 1 file duy nhất để lưu trữ, có thể có thêm 1 file journals để lưu tạm và
                  rollback</li>
                <li>Để chạy câu lệnh người ta dùng lệnh sau: database.execSQL(sql)</li>
                <li>Nếu muốn xem dữ liệu của SQLite qua DDMS ta vào theo đường dẫn DDMS->file explorer->data->data->your
                  package name->databases</li>
                <li>Trong SQLiteOpenHelper, phương thức được gọi khi CSDL được mở là onOpen</li>
                <li>Trong SQLiteOpenHelper, phương thức được gọi khi CSDL được tạo ra lần đầu tiên là onCreate</li>
                <li>Trong SQLiteOpenHelper, phương thức được gọi khi thay đổi version database là onUpgrade</li>
                <li>Trong SQLiteOpenHelper, phương thức được gọi để tạo Database là Constructor</li>
                <li>Trong SQLiteOpenHelper, để tạo thực thi câu lệnh SQL ta dùng phương thức execSQL()</li>
                <li>Để lưu trữ SQLite trên thẻ nhớ, quyền cần cung cấp trong Android Manifest là
                  android.permission.WRITE_EXTERNAL_STORAGE</li>
              </ul>
            </div>

            <div>
              <p><b>Các ứng dụng chủ yếu của SQLite</b></p>
              <p>Cơ sở dữ liệu cho Internet Of Things</p>
              <ul>
                <li>SQLite là lựa chọn phổ biến cho các công cụ CSDL trong điện thoại di động, PDA, máy nghe nhạc mp3,
                  hộp set-top, và các tiện ích điện tử khác</li>
                <li>Định dạng tệp ứng dụng</li>
                <li>Thay vì sử dụng fopen() để viết XML, JSON, CSV hoặc một số định dạng độc quyền vào các tệp đĩa được
                  ứng dụng của bạn sử dụng, hãy sử dụng SQLite</li>
              </ul>
              <p>Cơ sở dữ liệu cho web</p>
              <ul>
                <li>Bởi vì SQLite không yêu cầu cấu hình và lưu trữ thông tin trong các tệp đĩa thông thường nên SQLite
                  là lựa chọn phổ biến làm cơ sở dữ liệu để quay lại các trang web vừa và nhỏ</li>
                <li>Stand-in cho một doanh nghiệp RDBMS:
                  <br>
                  SQLite được sử dụng như một RDBMS doanh nghiệp cho mục đích trình diễn hoặc để thử nghiệm vì SQLite
                  nhanh và không yêu cầu thiết lập
                </li>
              </ul>
            </div>

            <div>
              <p><b>Một số ưu điểm trong SQLite</b></p>
              <ul>
                <li>SQLite không cần mô hình client - server để hoạt động</li>
                <li>SQLite không cần phải câu hình tức là bạn không cần phải cài đặt</li>
                <li>Với SQLite database được lưu trữ trên một tập tin duy nhất</li>
                <li>SQLite hỗ trợ hầu hết các tính năng của ngôn ngữ truy vấn SQLite theo chuẩn SQL92</li>
              </ul>
              <center>
                <img src="./assets/img/LTTBDD/chap3/img33.png" alt="" class="col-12 col-sm-8">
              </center>
              <ul>
                <li>SQLite rất nhỏ gọn bản đầy đủ các tính năng nhỏ hơn 500 kb, và có thể nhỏ hơn nếu lược bớt một số
                  tính năng.</li>
                <li>Các thao tác dữ liệu trên SQLite chạy nhanh hơn so với hệ quản trị CSDL theo mô hình client-server
                </li>
                <li>SQLite rất đơn giản và dễ dàng sử dụng</li>
              </ul>

              <center>
                <img src="./assets/img/LTTBDD/chap3/img34.png" alt="" class="col-12 col-sm-8">
              </center>

              <ul>
                <li>SQLite tuân thủ 4 tính chất ACID (là tính nguyên tố (Atomic), tính nhất quán (Consistent), tính cô
                  lập (Isolated), và tính bền vững (Durable))</li>
                <li>Với đặc tính nhỏ gọn, truy xuất dữ liệu nhanh SQLite thường được sử dụng để nhúng vào các dự án</li>
              </ul>

              <center>
                <img src="./assets/img/LTTBDD/chap3/img35.png" alt="" class="col-12 col-sm-8">
              </center>
            </div>

            <div>
              <p><b>Một số nhược điểm trong SQLite</b></p>
              <div class="container-fluid">
                <div class="row">
                  <div class="col-12 col-sm-8">
                    <ul>
                      <li>Ngoài những ưu điểm đã kể ra ở trên SQLite cũng có mặt hạn chế nếu đem so sánh với các hệ quản
                        trị khác</li>
                      <li>Do sử dụng cơ chế coarse-gained locking nên trong cùng một thời điểm SQLite có thể hỗ trợ
                        nhiều người đọc dữ liệu, nhưng chỉ có 1 người có thể ghi dữ liệu</li>
                      <li>SQLite không phải là lựa chọn hoàn hảo để đáp ứng các nhu cầu xử lý một khối lượng dữ liệu
                        lớn, phát sinh liên tục</li>
                    </ul>
                  </div>
                  <div class="col-12 col-sm-4">
                    <center>
                      <img src="./assets/img/LTTBDD/chap3/img36.png" alt="" class="col-12">
                    </center>
                  </div>
                </div>
              </div>
            </div>
            `],
            ['Kiểu dữ liệu trong SQLite', 'LTTBDD011', `
            <h4>Kiểu dữ liệu trong SQLite</h4>

            <div>
              <p><b>Lớp lưu trữ trong SQLite</b></p>
              <p>Mỗi giá trị được lưu giữ trong một số SQLite Database có một trong các lớp lưu trữ (Storage Class)</p>
              <center>
                <table>
                  <thead>
                    <tr>
                      <th>Lớp lưu trữ</th>
                      <th>Miêu tả</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>NULL</td>
                      <td>Giá trị là một giá trị NULL</td>
                    </tr>
                    <tr>
                      <td>INTEGER</td>
                      <td>Giá trị là một số nguyên có dấu, được lưu giữ trong 1,2,3,4,6 hoặc 8 byte tùy thuộc vào độ lớn
                        của giá trị</td>
                    </tr>
                    <tr>
                      <td>REAL</td>
                      <td>Giá trị số thực dấu chấm động, được lưu giữa như là một số thực dấu chấm động 8 - byte IEEE
                      </td>
                    </tr>
                    <tr>
                      <td>TEXT</td>
                      <td>Giá trị là một text string, được lưu trữ bởi sử dụng Encoding của CSDL (UTF-8, UTF-16BE, hoặc
                        UTE-16LE)</td>
                    </tr>
                    <tr>
                      <td>BLOB</td>
                      <td>Giá trị là một blob của dữ liệu, nhập vào như thế nào thì lưu giữ chính xác như thế</td>
                    </tr>
                  </tbody>
                </table>
              </center>
            </div>

            <p>Kiểu dữ liệu Boolean trong SQLite</p>
            <p>SQLite không hỗ trợ lớp lưu trữ Boolean riêng rẽ. Thay vào đó, các giá trị Boolean được lưu trữ dưới dạng
              các số nguyên: 0 cho false và 1 cho true</p>
            <p>Kiểu dữ liệu Date và Time trong SQLite</p>
            <p>SQLite không có một lớp lưu trữ riêng rẽ để lưu trữ date/time, nhưng SQLite có thể lưu giữ date/time dưới
              dạng các giá trị TEXT, REAL, hoặc INTEGER</p>

            <p>Có thể chọn để lưu giữa date và time trong bất kỳ các kiểu định dạng này và tự do chuyển đổi giữa các
              định dạng bởi sử dụng các hàm xử lý date và time có sẵn</p>

            <table>
              <thead>
                <tr>
                  <th>Lớp lưu trữ</th>
                  <th>Miêu tả</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TEXT</td>
                  <td>Một date trong định dạng "YYYY-MM-DD HH:MM:SS.SSSS"</td>
                </tr>
                <tr>
                  <td>REAL</td>
                  <td>Số ngày từ Greenwich November 24, 4714 B.c</td>
                </tr>
                <tr>
                  <td>INTEGER</td>
                  <td>Số giây từ 1970-01-01 00:00:00 UTC</td>
                </tr>
              </tbody>
            </table>
            `],
        ]
    },
    LTTBDD02: {
        title: 'SQLiteOpenHelper',
        index: [
            ['Giới thiệu SQLiteOpenHelper', 'LTTBDD021', `
            <p><b>Giới thiệu</b></p>
            <ul>
              <li>SQLiteOpenHelper là một lớp tích hợp sẵn của gói android.database.sqlite.SQLiteDatabase</li>
              <li>Nó là một lớp trợ giúp để quản lý việc tạo CSDL SQlite và quản lý phiên bản</li>
              <li>Lớp trợ giúp quản lý việc tạo CSDL, xử lý các thao tác với CSDL và cả quản lý phiên bản</li>
              <li>Chúng ta cần tạo một lớp con mở rộng từ lớp SQLiteOpenHelper cho các thao tác với CSDL</li>
              <li>Trong lớp này, chúng ta sẽ thực hiện hai phương thức ghi đè onCreate() và onUpgrade()</li>
              <li>Các lớp này đảm nhận việc mở CSDL nếu nó tồn tại, tạo nó nếu không tồn tại và nâng cấp nó khi cần thiết</li>
            </ul>
            <center>
              <img src="./assets/img/LTTBDD/chap3/img37.png" alt="" class="col-12 col-sm-8">
            </center>
            `],
            ['Sử dụng SQLiteOpenHelper', 'LTTBDD022', `
            <p><b>Sử dụng SQLiteOpenHelper</b></p>
            <p>Android cung cấp hai Class hỗ trợ cho việc tạo và quản lý Database:</p>
            <ul>
              <li>SQLiteDatabase: Sử dụng đơn giản</li>
              <li>SQLiteOpenHelper: Sử dụng chuyên nghiệp</li>
            </ul>
            <center>
              <img src="./assets/img/LTTBDD/chap3/img38.png" alt="" class="col-12 col-sm-8">
            </center>

            <p>Class SQLiteOpenHelper hỗ trợ quản lý Database và version SQLite</p>
            <p>3 phương thức của Class</p>
            <ul>
              <li>onCreate(SQLiteDatabase)</li>
              <li>onUpgrade(SQLiteDatabase, int, int)</li>
              <li>onOpen(SQLiteDatabase)</li>
            </ul>

            <center>
              <img src="./assets/img/LTTBDD/chap3/img39.png" alt="" class="col-12 col-sm-10">
              <img src="./assets/img/LTTBDD/chap3/img40.png" alt="" class="col-12 col-sm-10">
            </center>

            <p><b>SQLiteOpenHelper - Tạo Database & Table</b></p>
            <p>Các bước thực hiện:</p>
            <ul>
              <li>Tạo các Class kế thừa SQLiteOpenHelper</li>
              <li>Override phương thức onCreate: Tạo Table trong phương thức này</li>
              <li>Override phương thức onUpgrade: Phương thức này sẽ được gọi khi ta nâng version mới, cần xóa các table cũ và gọi lại onCreate</li>
            </ul>

            <p>Cấu trúc ứng dụng</p>
            <center>
              <img src="./assets/img/LTTBDD/chap3/img41.png" class="col-12 col-sm-8" alt="">
            </center>

            <div>
              <p><b>Tạo model dữ liệu</b></p>
              <center>
                <img src="./assets/img/LTTBDD/chap3/img42.png" alt="" class="col-12 col-sm-8">
              </center>

              <p><b>Ví dụ chuỗi Tạo bảng dữ liệu</b></p>
              <center>
                <img src="./assets/img/LTTBDD/chap3/img43.png" alt="" class="col-12 col-sm-8">
              </center>
            </div>

            <div>
              <p><b>Các hàm</b></p>
              <ul>
                <li>Hàm dựng <b>DbHelper</b>: Tạo database Demo6 với version 1</li>
                <li>Hàm <b>onCreate</b>: Thực hiện viết code tạo table NhanVien</li>
                <li>Hàm <b>onUpgrade</b>: Thực hiện xóa và gọi lại onCreate nếu có version mới</li>
              </ul>

              <p><b>Hàm khởi tạo</b></p>

              <center>
                <img src="./assets/img/LTTBDD/chap3/img44.png" alt="" class="col-12 col-sm-10">
              </center>

              <p><b>Hàm onCreate</b></p>
              <center>
                <img src="./assets/img/LTTBDD/chap3/img45.png" alt="" class="col-12 col-sm-10">
              </center>

              <p><b>Hàm onUpgrade</b></p>
              <center>
                <img src="./assets/img/LTTBDD/chap3/img46.png" alt="" class="col-12 col-sm-10">
              </center>
            </div>

            <div>
              <p><b>Code của lớp SQLiteOpenHelper</b></p>

              <center>
                <img src="./assets/img/LTTBDD/chap3/img47.png" alt="" class="col-12 col-sm-10">
              </center>
            </div>

            `]
        ]
    },
    LTTBDD03: {
        title: 'Giới thiệu chung về Shared Preference',
        index: [
            ['Nội dung', 'LTTBDD031', `
            <ul>
                <li>Shared Preferences là nơi bạn có thể lưu trữ các thông tin dưới dạng key-value được xây dựng sẵn trong hệ điều hành Android</li>
                <li>getContentResolver trả về đối tượng có kiểu là ContentResolver.</li>
                <li>Để sử dụng ContentProvider truy cập danh sách cuộc gọi gần đây, bạn phải bổ sung thêm quyền android.permission.READ_CALL_LOG.</li>
            </ul>
            `]
        ]
    }
}