const LTTBDD2 = {
  LTTBDD01: {
    title: 'Các thành phần của Android',
    index: [
      ['Giới thiệu tổng quát', 'LTTBDD11', `
            <div>
<p>
<a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse11" role="button" aria-expanded="false"
aria-controls="collapse11">
Các thành phần
</a>
<a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse12" role="button" aria-expanded="false"
aria-controls="collapse12">
Thay đổi cấu hình
</a>
<a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse13" role="button" aria-expanded="false"
aria-controls="collapse13">
Android manifest
</a>
<a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse14" role="button" aria-expanded="false"
aria-controls="collapse14">
Ứng dụng Android
</a>
</p>
<div>
<div class="collapse" id="collapse11">
<div class="card card-body">
<div class="container-fluid">
<div class="row">
<div class="col-12 col-sm-6">
  <p><b>Các thành phần</b></p>
  <ul>
    <li>Activity</li>
    <li>Service</li>
    <li>ContentProvider</li>
    <li>BroadcastReceiver</li>
    <li>Intent
      <ul>
        <li>Action, Data = Implicit</li>
        <li>Action, Data, Component = Explicit</li>
      </ul>
    </li>
    <li>Tài nguyên của ứng dụng Android</li>
    <li>Không nằm trong code
      <ul>
        <li>Ví dụ: String, Image</li>
        <li>Dễ dàng trong việc hỗ trợ các cấu hình thiết bị khác nhau</li>
      </ul>
    </li>
    <li>Các file chung trong thư mục res/
      <ul>
        <li>drawable/icon.png: biểu tượng của chương trình trong launcher</li>
        <li>layout/activity_main.xml: giao diện chính của main Activity</li>
        <li>values/strings.xml: chứa các chuỗi xuất hiện lên UI</li>
      </ul>
    </li>
    <li>Nằm trong thư mục gen, dùng để truy cập đến các tài nguyên trong code</li>
    <li>Ví dụ: R.string.&lt;string_name&gt;, R.layout&lt;layout_name&gt;</li>
    <li>Truy cập các tài nguyên thông qua lớp R giúp cho Android quyết định tài nguyên nào là phù hợp
    </li>
  </ul>

</div>
<div class="col-12 col-sm-6">
  <center>
    <img src="./assets/img/LTTBDD/chap2/img1.png" alt="" class="col-12">
  </center>
</div>
</div>
</div>
</div>
</div>
<div class="collapse" id="collapse12">
<div class="card card-body">
<div>
<p><b>Thay đổi cấu hình</b></p>

<ul>
<li>Hành vi mặc định của Android: Nếu thay đổi cấu hình, khởi tạo lại Activity</li>
<li>Thi thoảng, cách tiếp cận nào tốn nhiều thời gian
  <ul>
    <li>Điều gì xảy ra nếu Activity tốn nhiều thời gian để tải dữ liệu?</li>
    <li>Có thể nạp chồng onConfigurationChanged() để ngăn cản restart và vẫn điều khiển được các thay
      đổi
    </li>
  </ul>
</li>
</ul>

</div>
</div>
</div>
<div class="collapse" id="collapse13">
<div class="card card-body">
<div class="container-fluid">
<div class="row">
<div class="col-12 col-sm-6">
  <p><b>Android manifest</b></p>
  <ul>
    <li>File XML</li>
    <li>Metadata về ứng dụng và các thành phần của nó</li>
    <li>Ứng dụng
      <ul>
        <li>Name, icon, version, version android bắt buộc</li>
        <li>Quyền mà ứng dụng yêu cầu</li>
        <li>Đặc trưng mà ứng dụng cần hoặc sử dụng</li>
      </ul>
    </li>
    <li>Đối với mỗi thành phần: Xác định intent filter do đó Android sẽ biết Intent mà mỗi thành phần có
      thể điều khiển</li>
    <li>Activity
      <ul>
        <li>Xác định hành động android.intent.action.MAIN và category activity mặc định - hiển thị trên
          launcher</li>
        <li>Xác định các hành động khác mà activity có thể điều khiển, ví dụ kiểu file có thể xem, hoặc
          URL, có thể truy cập</li>
        <li>BroadcastReceiver
          Xác định sự kiện mà receiver muốn điều khiển
        </li>
      </ul>
    </li>
  </ul>
</div>
<div class="col-12 col-sm-6">
  <center>
    <img src="./assets/img/LTTBDD/chap2/img2.png" alt="" class="col-12">
  </center>
</div>
</div>
</div>
</div>
</div>
<div class="collapse" id="collapse14">
<div class="card card-body">
<div class="container-fluid">
<div class="row">
<div class="col-12 col-sm-6">
  <p><b>Ứng dụng Android</b></p>

  <ul>
    <li>Câu trả lời: file aab
      <br>Tương đương file jar
    </li>
    <li>Chứa code, tài nguyên, và tất cả các thứ cần cho ứng dụng</li>
  </ul>
</div>
<div class="col-12 col-sm-6">
  <center>
    <img src="./assets/img/LTTBDD/chap2/img3.png" alt="" class="col-12">
  </center>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
            `],
      ['Thành phần chính', 'LTTBDD12', `
            <div>
<p>
<a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse21" role="button" aria-expanded="false"
aria-controls="collapse21">
Activity
</a>
<a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse22" role="button" aria-expanded="false"
aria-controls="collapse22">
Service
</a>
<a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse23" role="button" aria-expanded="false"
aria-controls="collapse23">
Content Provider
</a>
<a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse24" role="button" aria-expanded="false"
aria-controls="collapse24">
BroadcastReceiver
</a>
<a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse25" role="button" aria-expanded="false"
aria-controls="collapse25">
Intent, Context
</a>
</p>
<div class="collapse" id="collapse21">
<div class="card card-body">
<h3>Activity</h3>

<ul>
<li>Khởi tạo Activity bằng cách gọi startActivity(Intent)</li>
<li>Subactivity: Là activity được gọi bởi activity khác</li>
<li>Gọi Subactivity sử dụng các phương thức startActivityForResult
<ul>
<li>Truyền Intent và integer code trong tham số đầu vào</li>
<li>Khi Subactivity kết thúc, trả lại mã code</li>
<li>startActivityForResult là phương thức không đồng bộ</li>
</ul>
</li>
</ul>

<div class="container-fluid">
<div class="row">
<div class="col-12 col-sm-6">
<p>Các activity cấu tạo nên Stack:</p>
<ul>
  <li>Activity mới sẽ xuất hiện ở đầu Stack</li>
  <li>Thông thường, khi nhấn nút back sẽ quay lại activity trước đó</li>
  <li>SubActivity là activity được gọi bởi activity khác</li>
</ul>
</div>
<div class="col-12 col-sm-6">
<center>
  <img src="./assets/img/LTTBDD/chap2/img4.png" alt="" class="col-12">
</center>
</div>
</div>
</div>

<ul>
<li>Thông thường khi ấn nút Back trên điện thoại Android thì sẽ Quay lại activity trước đó</li>
<li>startActivity và startActivityForResult đều có thể sử dụng để bắt đầu activity mới</li>
<li>Người ta hay dùng Activity.onPause() để lưu các dữ liệu quan trọng</li>
<li>Activity có thể coi là lớp cha của lớp ứng dụng chính của ứng dụng Android</li>
<li>Cả phương thức startActivity và startSubActivity có thể khởi tạo activity một cách đồng bộ</li>
</ul>
</div>
</div>
<div class="collapse" id="collapse22">
<div class="card card-body">
<h3>Service</h3>

<div class="container-fluid">
<div class="row">
<div class="col-12 col-sm-8">
<ul>
  <li>Service chạy ngầm trong hệ thống nhằm đảm bảo cho hệ thống android hoạt động đúng đắn, hiệu quả
  </li>
  <li>Hai loại:
    <ul>
      <li>Làm một số công việc nền theo yêu cầu
        <ul>
          <li>Gọi startService()</li>
          <li>Service có hàm StartCommand() hoặc onStart để điều khiển</li>
          <li>Service tiếp tục chạy sau khi lệnh được thi hành</li>
        </ul>
      </li>
      <li>Truyền thông
        <ul>
          <li>Ví dụ: trình nghe nhạc</li>
          <li>Sử dụng bindService để tạo kết nối vững chắc</li>
          <li>Client nhận đối tượng và gọi Service</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
</div>
<div class="col-12 col-sm-4">
<center>
  <img class="col-12" src="./assets/img/LTTBDD/chap2/img5.png" alt="">
</center>
</div>
</div>
</div>

<p><b>Các hàm xử lý của services</b></p>
<center>
<img class="col-12 col-sm-8" src="./assets/img/LTTBDD/chap2/img6.png" alt="">
</center>
</div>
</div>
<div class="collapse" id="collapse23">
<div class="card card-body">
<h3>Content Provider</h3>

<div class="container-fluid">
<div class="row">
<div class="col-12 col-sm-8">
<ul>
  <li>Truy cập thông qua truy vấn content://URI</li>
  <li>Có truy vấn, thêm, xóa,...</li>
  <li>Mục đích của lớp Content Provider là Chia sẻ dữ liệu giữa các ứng dụng Android</li>
</ul>
<center>
  <img src="./assets/img/LTTBDD/chap2/img8.png" alt="" class="col-12">
</center>
</div>
<div class="col-12 col-sm-4">
<center>
  <img src="./assets/img/LTTBDD/chap2/img7.png" alt="" class="col-12">
</center>
</div>
</div>
</div>
</div>
</div>
<div class="collapse" id="collapse24">
<div class="card card-body">
<h3>BroadcastReceiver</h3>

<div class="container-fluid">
<div class="row">
<div class="col-12 col-sm-6">
<ul>
  <li>Đánh thức bởi broadcast hệ thống</li>
  <li>Rất đơn giản - chỉ là onReceive handler
    <br>Nhận context và Intent miêu tả broadcast
  </li>
</ul>
</div>
<div class="col-12 col-sm-6">
<center>
  <img src="./assets/img/LTTBDD/chap2/img9.png" alt="" class="col-12">
</center>
</div>
</div>
</div>
</div>
</div>
<div class="collapse" id="collapse25">
<div class="card card-body">
<h3>Intent, Context</h3>
<p>Đóng vai trò vận chuyển dữ liệu giữa các activity</p>
<center>
<img src="./assets/img/LTTBDD/chap2/img10.png" alt="" class="col-12 col-sm-8">
</center>

<p><b>Thành phần khác của Intent</b></p>
<ul>
<li>Category: miêu tả loại thành phần điều khiển Intent</li>
<li>Extra: cập nhật giá trị key-value chứa thông tin bổ sung</li>
<li>Flags: hướng dẫn hệ thống cách khởi tạo Activity
<br>
FLAG_ACTIVITY_NO_ANIMATION
</li>
<li>Để activity xuất hiện ở launcher, phải khai báo category trong intent_filter.android.category.LAUNCHER</li>
</ul>

<p><b>Truy cập các thành phần ứng dụng</b></p>
<ul>
<li>Activity và service được khởi tạo như thế nào?</li>
<li>Java:
<ul>
<li>Viết Class để thực hiện một số công việc giống Android</li>
<li>Viết phương thức Main: Trong phương thức Main gọi hàm khởi tạo của Class và chạy các phương thức
  <ul>
    <li>Không giống trong Android</li>
    <li>Phụ thuộc vào kiểu đối tượng, Android sẽ gọi hàm tạo và quản lý vòng đời của đối tượng</li>
  </ul>
</li>
</ul>
</li>
</ul>


<p><b>Context</b></p>
<div class="container-fluid">
<div class="row">
<div class="col-12 col-sm-8">
<ul>
  <li>Lớp Context cung cấp truy cập tới chức năng và dịch vụ của hệ thống</li>
  <li>Activity và Service kế thừa Context, do đó có thể gọi các phương thức trong Context trực tiếp</li>
  <li>BroadcastReceiver có chứa tham số Context trong tham số đầu vào ở các hàm quản lý sự kiện</li>
  <li>ContentProvider gọi hàm getContext để lấy đối tượng Context</li>
</ul>
</div>
<div class="col-12 col-sm-4">
<center>
  <img src="./assets/img/LTTBDD/chap2/img11.png" alt="" class="col-12">
</center>
</div>
</div>
</div>
</div>
</div>
</div>
            `]
    ]
  },
  LTTBDD02: {
    title: 'Activity và vòng đời',
    index: [
      ['Activity - Task, stack', 'LTTBDD21', `
            <p><b>Activity - Task, Stack</b></p>
<div class="container-fluid">
<div class="row">
<div class="col-12 col-sm-8">
<p><b>TASK</b></p>

<ul>
  <li>Android nhóm các activity trong một chương trình vào một công việc chung (hàng đợi các activity liên quan đến nhau)</li>
  <li>Người dùng nhấn nút HOME và khởi tạo một chương trình mới</li>
  <li>Nếu ứng dụng được quay lại, task cũ (stack cũ) sẽ được khôi phục</li>
</ul>
</div>
<div class="col-12 col-sm-4">
<center>
  <img src="./assets/img/LTTBDD/chap2/img12.png" alt="" class="col-12">
</center>
</div>
</div>
</div>

<div class="container-fluid">
<div class="row">
<div class="col-12 col-sm-8">
<ul>
  <li>startActivity đảm bảo Activity được khởi tạo
    <ul>
      <li>Nếu Activity được khởi tạo, sẽ đưa lên đầu</li>
      <li>Activity được quản lý như thế nào?</li>
    </ul>
  </li>
  <li>Mô hình hướng đến sự kiện
    <ul>
      <li>Activity có một số hàm để điều khiển các sự kiện: onCreate, onResume, onPause</li>
      <li>Tất cả các Activity phải nạp chồng onCreate để thực hiện một việc gì đó</li>
      <li>Khởi tạo activity bằng cách gọi hàm startActivity</li>
      <li>startActivityForResult là phương thức không đồng bộ</li>
    </ul>
  </li>
</ul>
</div>
<div class="col-12 col-sm-4">
<center>
  <img src="./assets/img/LTTBDD/chap2/img13.png" alt="" class="col-12">
</center>
</div>
</div>
</div>
<center>
<img src="./assets/img/LTTBDD/chap2/img14.png" alt="" class="col-12 col-sm-8">
</center>
            `],
      ['Vòng đời của Activity', 'LTTBDD22', `
            <p><b>Vòng đời</b></p>
            <p>Ba trạng thái</p>
            <ul>
              <li>Kích hoạt (Active): ở chế độ nền, đang chạy</li>
              <li>Tạm dừng (Pause): vẫn hiển thị nhưng bị che khuất bởi Activity khác
                <p>Giống active, nhưng có thể bị hủy nếu dung lượng bộ nhớ thấp</p>
              </li>
              <li>Dừng (stop): không hiển thị trên màn hình</li>
            </ul>
  
  
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 col-sm-4">
                  <p><b>onCreate()</b></p>
                  <ul>
                    <li>Gọi khi Activity đầu tiên được khởi tạo</li>
                    <li>Chuẩn bị GUI và các bước khởi tạo khác</li>
                  </ul>
                </div>
                <div class="col-12 col-sm-4">
                  <p><b>onResume()</b></p>
                  <ul>
                    <li>Gọi khi Activity ở trên đầu Stack</li>
                    <li>Cập nhật giá trị GUI
                      <br>Chú ý: được gọi khi Activity đầu tiên được khởi tạo
                    </li>
                  </ul>
                </div>
                <div class="col-12 col-sm-4">
                  <p><b>onPause()</b></p>
                  <ul>
                    <li>Activity chuẩn bị biến mất</li>
                    <li>Cập nhật các dữ liệu quan trọng, dừng các công việc tốn tài nguyên</li>
                  </ul>
                </div>
              </div>
            </div>
            `]
    ]
  },
  LTTBDD03: {
    title: 'Video bài giảng',
    index: [
      ['ĐH Trà Vinh', 'CNPM031', `
            <p>Bài giảng 1 <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220071_LapTrinhThietBiDiDong/Video/Bai2_Phan1.mp4" target="_blank">Link</a></p>
            <p>Bài giảng 2 <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220071_LapTrinhThietBiDiDong/Video/Bai2_Phan2.mp4" target="_blank">Link</a></p>
        `],
      ['Youtube', 'CNPM032', ``],
    ]
  }
}