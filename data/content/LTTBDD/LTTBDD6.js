const LTTBDD6 = {
  LTTBDD01: {
    title: 'Tổ chức cấu trúc ứng dụng',
    index: [
      ['Nội dung', 'LTTBDD011', `
            <div id="1">
            <h3>Tổ chức cấu trúc ứng dụng</h3>
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse11" role="button" aria-expanded="false"
                aria-controls="collapse11">
                Giới thiệu
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse12" role="button" aria-expanded="false"
                aria-controls="collapse12">
                Cấu trúc ứng dụng
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse13" role="button" aria-expanded="false"
                aria-controls="collapse13">
                Tạo Class DAO
              </a>
            </p>
            <div>
              <div class="collapse" id="collapse11">
                <div class="card card-body">
                  <h4>Giới thiệu</h4>
        
                  <p>Để dễ viết code và bảo trì chúng ta cần tổ chức cấu trúc ứng dụng theo nhiều package theo cấu trúc sau</p>
        
                  <center>
                    <img src="./assets/img/LTTBDD/chap5/img1.png" alt="" class="col-12 col-sm-6">
                  </center>
                </div>
              </div>
              <div class="collapse" id="collapse12">
                <div class="card card-body">
                  <h4>Cấu trúc ứng dụng</h4>
        
                  <ul>
                    <li>Adapter: chứa các class dùng để Custom ListView</li>
                    <li>Model: chứa các class quản lý đối tượng</li>
                    <li>SQLite: chứa các Class liên quan đến SQLite</li>
                    <li>Ngoài ra có thể tạo thêm các package khác chứa các activity</li>
                  </ul>
                </div>
              </div>
              <div class="collapse" id="collapse13">
                <div class="card card-body">
                  <h4>Tạo Class DAO</h4>
        
                  <ul>
                    <li>Để chuẩn bị truy vấn và thao tác với CSDL, chúng ta cần tạo các class DAO để thực hiện các thao tác trên
                    </li>
                    <li>Class DAO có hàm tạo phải thực hiện kết nối SQLite (gọi Class DbHelper)</li>
                    <li>Tạo phương thức truy vấn (xem)</li>
                    <li>Tạo phương thức thêm</li>
                    <li>Tạo phương thức xóa</li>
                    <li>Tạo phướng thức sửa</li>
                  </ul>
        
        
                  <p><b>Hàm tạo</b></p>
        
        
                  <center>
                    <img src="./assets/img/LTTBDD/chap5/img2.png" alt="" class="col-12 col-sm-6">
                  </center>
        
                  <div>
                    <p><b>Phương thức truy vấn</b></p>
        
                    <ul>
                      <li>Sử dụng đối tượng Cursor chứa data đã truy vấn được</li>
                      <li>Sử dụng phương thức rawQuery của SQLiteDbHelper để truy vấn dữ liệu</li>
                      <li>Duyệt qua đối tượng Cursor bằng vòng lặp</li>
                      <li>Phương thức truy vấn chung
                        <br>
                        <center>
                          <img src="./assets/img/LTTBDD/chap5/img3.png" class="col-12 col-sm-8" alt="">
                        </center>
                      </li>
                      <li>
                        Phương thức truy vấn All
                        <br>
                        <center>
                          <img src="./assets/img/LTTBDD/chap5/img4.png" alt="" class="col-12 col-sm-8">
                        </center>
                      </li>
                      <li>
                        Phương thức truy vấn theo điều kiện
                        <br>
                        <center>
                          <img src="./assets/img/LTTBDD/chap5/img5.png" alt="" class="col-12 col-sm-8">
                        </center>
                      </li>
                    </ul>
                  </div>
        
                  <div>
                    <p><b>Phương thức thêm</b></p>
        
                    <ul>
                      <li>Sử dụng đối tượng ContentValues chứa giá trị đối tượng cần thêm vào database</li>
                      <li>Sử dụng phương thức insert của SQLiteDbHelper để thêm dữ liệu</li>
                    </ul>
        
                    <center>
                      <img src="./assets/img/LTTBDD/chap5/img6.png" alt="" class="col-12 col-sm-8">
                    </center>
                  </div>
        
                  <div>
                    <p><b>Phương thức sửa</b></p>
                    <ul>
                      <li>Sử dụng đối tượng ContentValues chứa giá trị đối tượng cần thêm vào database</li>
                      <li>Sử dụng phương thức update của SQLiteDbHelper để sửa lại dữ liệu</li>
                    </ul>
        
                    <center>
                      <img src="./assets/img/LTTBDD/chap5/img7.png" alt="" class="col-12 col-sm-8">
                    </center>
                  </div>
        
                  <div>
                    <p><b>Phương thức xóa</b></p>
        
                    <p>Sử dụng phương thức delete của SQLiteDbHelper để xóa dữ liệu</p>
        
                    <center>
                      <img src="./assets/img/LTTBDD/chap5/img8.png" alt="" class="col-12 col-sm-8">
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
            `]
    ]
  },
  LTTBDD02: {
    title: 'Thao tác với database',
    index: [
      ['Nội dung', 'LTTBDD021', `
            <div id="2">
    <h3>Thao tác với database</h3>

    <p>
      <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse21" role="button" aria-expanded="false"
        aria-controls="collapse21">
        Thêm, sửa, xóa trong activity
      </a>
      <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse22" role="button" aria-expanded="false"
        aria-controls="collapse22">
        Hiển thị dữ liệu trong activity
      </a>
    </p>
    <div>
      <div class="collapse" id="collapse21">
        <div class="card card-body">
          <h4>Thêm, sửa, xóa trong activity</h4>

          <div>
            <p><b>Xử lý dữ liệu thêm, sửa, xóa trong activity</b></p>

            <p>Show dữ liệu lên ListView đã custom</p>
            <ul>
              <li>Tạo đối tượng từ Class DAO;</li>
              <li>Gọi phương thức get data trong class DAO;</li>
              <li>Show lên ListView đã custom</li>
            </ul>
          </div>

          <div>
            <p>Thêm dữ liệu</p>
            <ul>
              <li>Tạo đối tượng từ Class DAO</li>
              <li>Gọi phương thức insert data trong class DAO</li>
              <li>Update lại ListView (gọi lại show data)</li>
            </ul>
            <center>
              <img src="./assets/img/LTTBDD/chap5/img9.png" alt="" class="col-12 col-sm-8">
            </center>
          </div>

          <div>
            <p>Sửa dữ liệu</p>
            <ul>
              <li>Tạo đối tượng từ Class DAO</li>
              <li>Gọi phương thức update data trong class DAO</li>
              <li>Update lại ListView (gọi lại show data)</li>
            </ul>
            <center>
              <img src="./assets/img/LTTBDD/chap5/img10.png" alt="" class="col-12 col-sm-8">
            </center>
          </div>

          <div>
            <p>Xóa dữ liệu</p>

            <ul>
              <li>Tạo đối tượng từ Class DAO</li>
              <li>Gọi phương thức delete data trong class DAO</li>
              <li>Update lại ListView (gọi là show data)</li>
            </ul>

            <center>
              <img src="./assets/img/LTTBDD/chap5/img11.png" alt="" class="col-12 col-sm-8">
            </center>
          </div>


        </div>
      </div>
      <div class="collapse" id="collapse22">
        <div class="card card-body">
          <h4>Hiển thị dữ liệu trong activity</h4>

          <div>
            <p>Show dữ liệu lên ListView đã custom</p>

            <center>
              <img src="./assets/img/LTTBDD/chap5/img12.png" alt="" class="col-12 col-sm-8">
            </center>
          </div>

          <div>
            <p>Xây dựng lớp Adapter cho listview - Khai báo các biến</p>

            <center>
              <img src="./assets/img/LTTBDD/chap5/img13.png" alt="" class="col-12 col-sm-8">
            </center>
          </div>

          <div>
            <p>Xây dựng lớp Adapter cho listview - Phương thức khởi tạo</p>
            <center>
              <img class="col-12 col-sm-8" src="./assets/img/LTTBDD/chap5/img14.png" alt="">
            </center>
          </div>

          <div>
            <p>Xây dựng lớp Adapter cho listview - Hàm getView (tạo view)</p>

            <center>
              <img src="./assets/img/LTTBDD/chap5/img15.png" alt="" class="col-12 col-sm-8">
            </center>
          </div>

          <div>
            <p>Xây dựng lớp Adapter cho listview - Hàm getView (lấy dữ liệu)</p>

            <center>
              <img src="./assets/img/LTTBDD/chap5/img16.png" alt="" class="col-12 col-sm-8">
            </center>
          </div>

          <div>
            <p>Toàn bộ code của Adapter</p>
            <center>
              <img src="./assets/img/LTTBDD/chap5/img17.png" alt="" class="col-12 col-sm-8">
              <img src="./assets/img/LTTBDD/chap5/img18.png" alt="" class="col-12 col-sm-8">
            </center>
          </div>
        </div>
      </div>
    </div>
  </div>
            `]
    ]
  },
  LTTBDD03: {
    title: 'WebView',
    index: [
      ['Nội dung', 'LTTBDD031', `
            <div id="3">
    <h3>WebView</h3>

    <p>
      <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse31" role="button" aria-expanded="false"
        aria-controls="collapse31">
        Giới thiệu
      </a>
      <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse32" role="button" aria-expanded="false"
        aria-controls="collapse32">
        Các đặc tính
      </a>
    </p>
    <div>
      <div class="collapse" id="collapse31">
        <div class="card card-body">
          <h4>Giới thiệu</h4>
          <ul>
            <li>Điều khiển được sử dụng để hiển thị nội dung trang web trong ứng dụng Android người ta dùng WebView</li>
            <li>Chương trình sử dụng WebView phải có quyền android.permission.INTERNET</li>
          </ul>  
          <center>
            <img src="./assets/img/LTTBDD/chap5/img19.png" alt="" class="col-12 col-sm-8">
          </center>
        </div>
      </div>
      <div class="collapse" id="collapse32">
        <div class="card card-body">
          <h4>Các đặc tính của WebView</h4>

          <ul>
            <li>Không thể sử dụng &lt;WebView&gt; tag trong XML layout</li>
            <li>Sử dụng lớp WebChromeClient để truy cập thay đổi thông tin trên trình duyệt mặc định của hệ điều hành Android</li>
            <li>Sử dụng phương thức onReceivedTitle để lấy thông tin tiêu đề trên trang web chạy trên trình duyệt</li>
            <li>Để thay đổi thông tin về trình duyệt, ta sử dụng WebSettings</li>
            <li>Quay lại trang web trước trên trình duyệt khi chọn nút Back, người ta sử dụng sự kiên onKeyDown</li>
            <li>Phương thức setBuiltInZoomControls của WebSettings để cho phép trang web có thể phóng to thu nhỏ</li>
            <li>Phương thức setJavaScriptEnabled(true) của WebSettings để cho phép WebView hỗ trợ Javascript</li>
            <li>Để tải thông tin qua HTTP trong webview, chúng ta phải sử dụng thư viện chuẩn của Java</li>
            <li>Lớp URL có các phương thức liên quan đến kết nối mạng</li>
            <li>Đối với URLConnection, sử dụng phương thức setConnectTimeout() để thiết lập timeout cho connection</li>
            <li>Phương thức loadUrl của WebView được sử dụng để chạy một URL</li>
            <li>Thay đổi title của trang web người ta sử dụng hàm onReceivedTitle</li>
            <li>Đối với URLConnection, để mở kết nối tới một URL, sử dụng phương thức openConnection</li>
            <li>Điều khiển WebView sử dụng WebKit Engine</li>
            <li>Phương thức getOutputStream() của URLConnection dùng để Cho phép ghi thông tin vào HTTP connection</li>
            <li>Khi thời gian kết nối đến một URL quá timeout, phương thức getInputStream() sẽ đưa ra ngoại lệ java.net.SocketTimeoutException</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
            `]
    ]
  },
  LTTBDD04: {
    title: 'Video bài giảng',
    index: [
      ['ĐH Trà Vinh', 'LTTBDD041', `
              <p>Bài giảng <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220071_LapTrinhThietBiDiDong/Video/Video_Bai6_Trim.mp4" target="_blank">Link</a></p>
          `],
      ['Youtube', 'LTTBDD042', ``],
    ]
  }
}