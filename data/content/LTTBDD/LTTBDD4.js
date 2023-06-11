const LTTBDD4 = {
    LTTBDD01: {
        title: 'Intent và Intent filter',
        index: [
            ['Intent', 'LTTBDD11', `
            <h4>Intent</h4>
            <div>
              <p>Để thống báo cho hệ thống implicit intent nào được sử dụng, activity, service và broadcast receiver có
                thể có một hoặc nhiều bộ lọc intent (intent filter)</p>

              <center>
                <img src="./assets/img/LTTBDD/chap3/img16.png" alt="" class="col-12 col-sm-8">
              </center>
            </div>

            <div>
              <p>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse111" role="button"
                  aria-expanded="false" aria-controls="collapseExample">
                  URI
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse112" role="button"
                  aria-expanded="false" aria-controls="collapseExample">
                  Android hỗ trợ 2 loại intent
                </a>
              </p>
              <div>
                <div class="collapse" id="collapse111">
                  <div class="card card-body">
                    <h4>URI</h4>
                    <p>URI (Uniform Resource Identifier) là một dãy các ký tự dùng để:</p>
                    <ul>
                      <li>Mở một trang web trong trình duyệt, bắt đầu với "https:"</li>
                      <li>Chỉ tới các file tài nguyên có sẵn trong máy (ví dụ: 1 file video, danh sách contacts,... bắt
                        đầu với "content"</li>
                    </ul>

                    <center>
                      <img class="col-12 col-sm-10" src="./assets/img/LTTBDD/chap3/img17.png" alt="">

                    </center>
                  </div>
                </div>
                <div class="collapse" id="collapse112">
                  <div class="card card-body">
                    <center>
                      <img src="./assets/img/LTTBDD/chap3/img18.png" alt="" class="col-12 col-sm-10">
                    </center>
                    <p><b>Android hỗ trợ 2 loại Intent</b></p>
                    <ul>
                      <li>Explicit intent</li>
                      <li>Implicit intent</li>
                    </ul>
                    <center>
                      <img src="./assets/img/LTTBDD/chap3/chap19.png" alt="" class="col-12 col-sm-8">
                    </center>
                    <table>
                      <thead>
                        <tr>
                          <th>Explicit intent</th>
                          <th>Implicit intent</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <pre style="
                            overflow-x: auto;
                            white-space: pre-wrap;
                            white-space: -moz-pre-wrap;
                            white-space: -pre-wrap;
                            white-space: -o-pre-wrap;
                            word-wrap: break-word;">
  String url=”www.yahoo.com”;
  Intent explicit=new Intent(Intent.ACTION_VIEW);
  explicit.setData(Uri.parse(url));
  explicit.setPackage(”com.android.chrome”);
  startActivity(explicit);
                            </pre>
                          </td>
                          <td>
                            <pre style="
                            overflow-x: auto;
                            white-space: pre-wrap;
                            white-space: -moz-pre-wrap;
                            white-space: -pre-wrap;
                            white-space: -o-pre-wrap;
                            word-wrap: break-word;">
  String url=”www.yahoo.com”;
  Intent implicit=new Intent(Intent.ACTION_VIEW);
  implicit.setData(Uri.parse(url));
  startActivity(explicit);
                            </pre>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div class="container-fluid">
                <div class="row">
                  <div class="col-12 col-sm-4">
                    <p><b>Explicit intent</b></p>
                    <ul>
                      <li>Explicit intent: Được khai báo một cách tường minh thành phần sẽ nhận và xử lý Intent bằng
                        cách thiết lập giá trị phù hợp</li>
                      <li>Explicit intent thường được sử dụng để khởi tạo các activity trong cùng 1 ứng dụng</li>
                    </ul>

                    <center>
                      <img src="./assets/img/LTTBDD/chap3/img19.png" alt="" class="col-12">
                    </center>
                  </div>
                  <div class="col-12 col-sm-8">
                    <p><b>Implicit intent</b></p>

                    <ul>
                      <li>Là loại intent không cần chỉ rõ thành phần xử lý mà chỉ cần cung cấp đủ các thông tin cần
                        thiết để hệ thống xác định xem nên dùng các thành phần có sẵn nào để chạy tốt nhất</li>
                      <li>Ví dụ: khi ứng dụng Android mở một trang web</li>
                    </ul>

                    <center>
                      <img src="./assets/img/LTTBDD/chap3/img20.png" alt="" class="col-12">
                    </center>
                  </div>
                </div>
              </div>
              <br>


              <div>
                <p>
                  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse1121" role="button"
                    aria-expanded="false" aria-controls="collapse1121">
                    Gọi Intent
                  </a>
                  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse1122" role="button"
                    aria-expanded="false" aria-controls="collapse1122">
                    Đối tượng Intent
                  </a>
                  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse1123" role="button"
                    aria-expanded="false" aria-controls="collapse1123">
                    Tham số chính của Intent
                  </a>
                </p>
                <div>
                  <div class="collapse" id="collapse1121">
                    <div class="card card-body">
                      <p><b>Gọi Intent</b></p>
                      <p>Để gọi Intent, sử dụng các cách sau:</p>
                      <ul>
                        <li>startActivity(intent) hoặc startActivityForResult(): Khởi tạo một Activity hoặc khởi tạo
                          Activity và lấy kết quả
                          trả về</li>
                        <li>sendBroadCast(intent): Gửi một Intent tới thành phần BroadcastReceiver quan tâm đến</li>
                        <li>startService(intent) hoặc bindService(intent,...): Thiết lập kết nối giữa thành phần được
                          gọi và dịch vụ đích</li>
                      </ul>
                      <center>
                        <img src="./assets/img/LTTBDD/chap3/img21.png" alt="" class="col-12 col-sm-8">
                      </center>
                    </div>
                  </div>
                  <div class="collapse" id="collapse1122">
                    <div class="card card-body">
                      <p><b>Đối tượng Intent</b></p>
                      <ul>
                        <li>Đối tượng Intent là một gói các thống tin</li>
                        <li>Chứa thông tin hành động sẽ diễn ra và dữ liệu liên quan đến hành động đó</li>
                        <li>Tham số chính của Intent bao gồm</li>
                        <li>Ngoài ra còn một số tham số khác như category, type, component (category dùng để đưa thông
                          tin bổ sung cho hành động sẽ được thi hành)</li>
                      </ul>
                      <center>
                        <img src="./assets/img/LTTBDD/chap3/img22.png" alt="" class="col-12 col-sm-8">
                      </center>
                    </div>
                  </div>
                  <div class="collapse" id="collapse1123">
                    <div class="card card-body">
                      <h4>Tham số chính của Intent</h4>
                      <center>
                        <img src="./assets/img/LTTBDD/chap3/img23.png" alt="" class="col-12 col-sm-8">
                      </center>

                      <div>
                        <p>
                          <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse11231"
                            role="button" aria-expanded="false" aria-controls="collapse11231">
                            Tham số Action
                          </a>
                          <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse11232"
                            role="button" aria-expanded="false" aria-controls="collapse11232">
                            Tham số Category
                          </a>
                          <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse11233"
                            role="button" aria-expanded="false" aria-controls="collapse11233">
                            Ví dụ
                          </a>
                          <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse11234"
                            role="button" aria-expanded="false" aria-controls="collapse11234">
                            Truyền dữ liệu qua intent
                          </a>
                          <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse11235"
                            role="button" aria-expanded="false" aria-controls="collapse11235">
                            Nhập dữ liệu từ Intent
                          </a>
                          <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse11236"
                            role="button" aria-expanded="false" aria-controls="collapse11236">
                            Bundle và truyền dữ liệu qua Bundle
                          </a>
                        </p>
                        <div>
                          <div class="collapse" id="collapse11231">
                            <div class="card card-body">
                              <p><b>Tham số Action</b></p>

                              <ul>
                                <li>ACTION_CALL</li>
                                <li>ACTION_EDIT</li>
                                <li>ACTION_MAIN</li>
                                <li>ACTION_SYNC</li>
                                <li>ACTION_BATTERY_LOW</li>
                                <li>ACTION_HEADSET_PLUG</li>
                                <li>ACTION_SCREEN_ON</li>
                                <li>ACTION_TIMEZONE_CHANGED</li>
                              </ul>
                            </div>
                          </div>
                          <div class="collapse" id="collapse11232">
                            <div class="card card-body">
                              <p><b>Tham số Category</b></p>

                              <ul>
                                <li>CATEGORY_BROWSABLE</li>
                                <li>CATEGORY_GADGET</li>
                                <li>CATEGORY_HOME</li>
                                <li>CATEGORY_LAUNCHER</li>
                                <li>CATEGORY_PREFERENCE</li>
                              </ul>
                            </div>
                          </div>
                          <div class="collapse" id="collapse11233">
                            <div class="card card-body">
                              <p><b>Ví dụ về cặp giá trị Action/Data</b></p>
                              <ul>
                                <li>ACTION_CALL tel:123 : thực hiện gọi điện thoại</li>
                                <li>ACTION_VIEW http://www.google.com: hiển thị trang chủ của google trên trình duyệt
                                </li>
                                <li>ACTION_EDIT content://contacts/people/2: sửa đổi thông tin liên hệ có định danh là 2
                                </li>
                                <li>ACTION_VIEW content://contacts/people/: hiển thị danh sách người cho phép người dùng
                                  lựa chọn</li>
                              </ul>
                              <center>
                                <img src="./assets/img/LTTBDD/chap3/img24.png" alt="" class="col-12 col-sm-8">
                              </center>

                              <p><b>Ví dụ</b></p>
                              <ul>
                                <li>Activity1 hiển thị giao diện cho phép nhập số điện thoại và yêu cầu Activity2 (sẵn
                                  có của hệ thống) thực hiện cuộc gọi</li>
                                <li>Chú ý để thực hiện cuộc gọi phải bổ sung quyền android.permission.CALL_PHONE vào
                                  trong Android Manifest</li>
                              </ul>

                              <center>
                                <img src="./assets/img/LTTBDD/chap3/img25.png" alt="" class="col-12 col-sm-8">
                              </center>
                            </div>
                          </div>
                          <div class="collapse" id="collapse11234">
                            <div class="card card-body">
                              <p><b>Truyền dữ liệu qua Intent</b></p>
                              <center>
                                <img src="./assets/img/LTTBDD/chap3/img26.png" alt="" class="col-12 col-sm-8">
                              </center>
                            </div>
                          </div>
                          <div class="collapse" id="collapse11235">
                            <div class="card card-body">
                              <p><b>Nhập dữ liệu từ Intent</b></p>
                              <center>
                                <img class="col-12 col-sm-8" src="./assets/img/LTTBDD/chap3/img27.png" alt="">
                              </center>
                            </div>
                          </div>
                          <div class="collapse" id="collapse11236">
                            <div class="card card-body">
                              <p><b>Bundle và truyền dữ liệu qua Bundle</b></p>
                              <p><b>Bundle</b></p>
                              <ul>
                                <li>Sử dụng đối tượng Bundle để truyền dữ liệu</li>
                                <li>Bundle có 2 loại phương thức putA dùng để cho bên gửi đi, ứng với kiểu dữ liệu nào
                                  thì put đúng kiểu đó (A là kiểu dữ liệu)</li>
                                <li>Ví dụ: putInt và putDouble là tương ứng với 2 loại dữ liệu khác nhau</li>
                                <li>Ở bên nhận, Bundle dùng phương thức getA (A là kiểu dữ liệu) để lấy dữ liệu theo key
                                  bên gửi</li>
                                <li>Key phải giống nhau cho cả 2 bên nhận và gửi</li>
                              </ul>

                              <p><b>Ví dụ</b></p>
                              <center>
                                <img class="col-12 col-sm-10" src="./assets/img/LTTBDD/chap3/img28.png" alt="">
                              </center>

                              <p><b>Truyền dữ liệu qua Bundle</b></p>

                              <center>
                                <img src="./assets/img/LTTBDD/chap3/img29.png" alt="" class="col-12 col-sm-10">
                              </center>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            `],
            ['Intent filter', 'LTTBDD12', `
            <h4>Intent filter</h4>
            <div>
              <p><b>Ví dụ về Intent Filter</b></p>
              <p>Một activity được gọi là thỏa mãn các điều kiện sau:</p>
              <ul>
                <li>Hỗ trợ action cho trước</li>
                <li>Hỗ trợ MIME type đã được miêu tả (nếu cung cấp);</li>
                <li>Hỗ trợ tất cả category được nêu trong Intent</li>
              </ul>
              <center>
                <img class="col-12 col-sm-10" src="./assets/img/LTTBDD/chap3/img29.png" alt="">
              </center>

              <p>Ví dụ Intent Filter</p>
              <ul>
                <li>Phần tử &lt;data&gt; dưới đây sẽ thông báo cho Android biết rằng component có thể nhận dữ liệu video
                  từ trên Internet và có thể hiển thị
                  <br>
                  &lt;data android:scheme="http" android:type="video/*" /&gt;
                </li>
                <li>Android sẽ chọn một trình duyệt khi người dùng click vào một link web</li>
                <li>Đầu tiên, android sẽ hiển thị dữ liệu (nếu link trên trang web). Nếu không thể hiển thị dữ liệu, nó
                  sẽ đẩy implicit intent cùng với scheme và data type và thử khởi tạo một activity đáp ứng được công
                  việc này</li>
                <li>Nếu không có Activity đáp ứng được, trình download manager sẽ tải dữ liệu về.</li>
                <li>Ví dụ dưới đây cho Android biết component có thể nhận image data từ content và hiển thị
                  <br>
                  &lt;data android:mimeType="image/*" /&gt;
                </li>
                <li>Đa số dữ liệu được phân phối bởi content provider, filter chủ yếu xác định kiểu dữ liệu</li>
              </ul>
            </div>

            `]
        ]
    },
    LTTBDD02: {
        title: 'CUSTOM LISTVIEW',
        index: [
            ['Khái niệm custom LISTVIEW', 'LTTBDD021', `
            <p><b>Khái niệm custom LISTVIEW</b></p>
            <p>Custom ListView là listview thực hiện thiết kế các item cho ListView chứ không sử dụng các item mặc định mà Android.</p>
            <center>
              <img src="./assets/img/LTTBDD/chap3/img31.png" alt="" class="col-12 col-sm-8">
            </center>
            `],
            ['Các bước custom LISTVIEW', 'LTTBDD022', `
            <p><b>Các bước custom LISTVIEW</b></p>
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 col-sm-8">
                  <ul>
                    <li>Thiết kế layout custom cho mỗi dòng</li>
                    <li>Viết Class quản lý các thuộc tính cần show trên các dòng ListView</li>
                    <li>Viết Adapter để getView phù hợp vào Layout đã custom</li>
                    <li>Thực hiện các bước còn lại giống ListView</li>
                  </ul>
                </div>
                <div class="col-12 col-sm-4">
                  <center>
                    <img src="./assets/img/LTTBDD/chap3/img32.png" alt="" class="col-12">
                  </center>
                </div>
                <ul>
                  <li>Tạo ListView trong Layout</li>
                  <li>Tạo Array hoặc ArrayList chứa dữ liệu
                    <br>
                    <center>
                      String[] arr = new String[]{"Apple", "Samsung", "LG"}
                    </center>
                  </li>
                  <li>
                    Tạo Adapter ràng buộc nội dung động vào Array
                    <br>
                    <center>
                      ArrayAdapter&lt;String&gt; adapter = new ArrayAdapter&lt;String&gt; (this, android.R.layout.simple_list_item_1, arr);
                    </center>
                  </li>
                  <li>Show dữ liệu trong mảng lên ListView</li>
                  <center>
                    ListView.setAdapter(adapter)
                  </center>
                </ul>
              </div>
            </div>
            `],
            ['Phương thức liên quan', 'LTTBDD23', `
            <p><b>Phương thức liên quan</b></p>
            <ul>
              <li>Phương thức onOptionsItemSelected dùng để xử lý một item trong Menu được chọn</li>
              <li>Phương thức onPrepareOptionsMenu dùng để Enable hoặc Disable một item trong Menu</li>
              <li>Phương thức setOnKeyListener được sử dụng để xử lý sự kiện khi một phím trên bàn phím được ấn</li>
              <li>Phương thức setOnLongClickListener được sử dụng để xử lý khi 1 View được click và giữ một lúc</li>
              <li>Phương thức setOnCheckedChangeListener được sử dụng để xử lý khi một item trong CheckBox được check</li>
              <li>Phương thức OnDateChangedListener được sử dụng để biết được người dùng thay đổi date trên điều khiển DatePicker</li>
            </ul>

            `],
            ['Menu', 'LTTBDD023', `
            <p><b>Menu</b></p>

            <ul>
              <li>Option Menu có tối đa 6 item, nếu quá số item này thì sẽ có thêm nút More.</li>
              <li>Option Menu xuất hiện khi ấn vào phím Menu, Context Menu xuất hiện khi click vào View một vài giây.</li>
              <li>Lớp MenuInflater được sử dụng để khởi tạo menu từ file XML menu.</li>
              <li>Khai báo layout cho XML Menu nằm trong thư mục res/menu.</li>
              <li>Phương thức setOnCreateContextMenuListener được sử dụng để đăng ký một context menu với một View.</li>
              <li>Lệnh Toast.makeText(context, “Message”, Toast.LENGTH_SHORT).show(); dùng để hiển thị một thông báo
                trên màn hình.</li>
              <li>Để hiển thị một thông báo trên status bar, phải sử dụng Sử dụng Notification Manager.</li>
              <li>Tạo một Intent để khởi tạo một Activity khi notification được chọn để khi chọn một thông báo notification trên
                Status Bar, sẽ hiển thị một giao diện tương ứng.</li>
            </ul>
            `],
            ['Bar và Alert', 'LTTBDD024', `
            <p><b>Bar và Alert</b></p>

            <ul>
              <li>Để tạo mới một Alert Dialog, chúng ta phải sử dụng lớp AlertDialog.Builder</li>
              <li>Có 2 kiểu Progress Bar trong Android</li>
              <li>Kiểu Progress Bar determinate để hiển thị chi tiết phần trăm hoàn thành một công việc nào đó</li>
              <li>Thư mục res/layout-land để chứa layout cho giao diện khi màn hình ở chế độ landscape mode</li>
              <li>Thư mục res/layout để chứa layout cho giao diện khi màn hình ở chế độ portrait mode</li>
              <li>Sử dụng hàm onDraw để thực hiện vẽ bất kỳ các đối tượng 2d, shape</li>
            </ul>
            `],
        ]
    },
    LTTBDD03: {
      title: 'Video bài giảng',
      index: [
        ['ĐH Trà Vinh', 'CNPM031', `
              <p>Bài giảng <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220071_LapTrinhThietBiDiDong/Video/Video_Bai4_Trim.mp4" target="_blank">Link</a></p>
          `],
        ['Youtube', 'CNPM032', ``],
      ]
    }
}