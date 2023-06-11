const LTTBDD3 = {
    LTTBDD01: {
        title: 'Layout của ứng dụng ANDROID',
        index: [
            ['Tổng quát layout', 'LTTBDD11', `
            <p><b>Tổng quát Layout</b></p>

            <div>
              <p>
                <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse111" role="button"
                  aria-expanded="false" aria-controls="collapse111">
                  Thiết kế giao diện người dùng
                </a>
                <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse112" role="button"
                  aria-expanded="false" aria-controls="collapse112">
                  Cây phân cấp View (View Hierarchy)
                </a>
                <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse113" role="button"
                  aria-expanded="false" aria-controls="collapse113">
                  Ví dụ Widget
                </a>
                <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse114" role="button"
                  aria-expanded="false" aria-controls="collapse114">
                  Ví dụ FrameLayout
                </a>
                <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse115" role="button"
                  aria-expanded="false" aria-controls="collapse115">
                  Ví dụ TabLayout
                </a>
                <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse116" role="button"
                  aria-expanded="false" aria-controls="collapse116">
                  Ví dụ TableLayout
                </a>
                <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse117" role="button"
                  aria-expanded="false" aria-controls="collapse117">
                  Định nghĩa Layout
                </a>
                <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse118" role="button"
                  aria-expanded="false" aria-controls="collapse118">
                  XML Layout
                </a>
                <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse119" role="button"
                  aria-expanded="false" aria-controls="collapse119">
                  Styles
                </a>
                <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse120" role="button"
                  aria-expanded="false" aria-controls="collapse120">
                  Theme
                </a>
                <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse121" role="button"
                  aria-expanded="false" aria-controls="collapse121">
                  Tạo layout bằng code
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse122" role="button"
                  aria-expanded="false" aria-controls="collapse122">
                  UI trong Java
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse123" role="button"
                  aria-expanded="false" aria-controls="collapse123">
                  Nhận tham chiếu đến đối tượng
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse124" role="button"
                  aria-expanded="false" aria-controls="collapse124">
                  Getting/setting field
                </a>
              </p>
              <div>
                <div class="collapse" id="collapse111">
                  <div class="card card-body">
                    <p><b>Thiết kế giao diện người dùng</b></p>

                    <ul>
                      <li>Càng đơn giản càng tốt</li>
                      <li>Dành nhiều thời gian tìm hiểu nhu cầu của khách hàng về giao diện</li>
                      <li>Sử dụng điều khiển giao diện chuẩn</li>
                    </ul>
                  </div>
                </div>
                <div class="collapse" id="collapse112">
                  <div class="card card-body">
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-12 col-sm-6">
                          <p><b>Cây phân cấp View (View Hierachy)</b></p>

                          <ul>
                            <li>View: đơn vị cơ bản của giao diện người dùng
                              <ul>
                                <li>Widgets: android widget.*</li>
                                <li>Là lá cây của cây phân cấp View</li>
                              </ul>
                            </li>
                            <li>ViewGroup: định nghĩa layout
                              <ul>
                                <li>Nằm trong android widget.*</li>
                                <li>Định nghĩa nơi chứa các Views (hoặc View Group) con</li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <div class="col-12 col-sm-6">
                          <center>
                            <img src="./assets/img/LTTBDD/chap3/img1.png" alt="" class="col-12">
                          </center>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="collapse" id="collapse113">
                  <div class="card card-body">
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-12 col-sm-6">
                          <p><b>Ví dụ Widget</b></p>
                          <ul>
                            <li>Button</li>
                            <li>EditText</li>
                            <li>CheckBox và RadioButton</li>
                            <li>Spinner</li>
                            <li>Others: TextView, ImageView</li>
                            <li>Có thể kế thừa một widget hoặc tạo mới</li>
                          </ul>
                        </div>
                        <div class="col-12 col-sm-6">
                          <center>
                            <img class="col-12" src="./assets/img/LTTBDD/chap3/img2.png" alt="">
                          </center>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="collapse" id="collapse114">
                  <div class="card card-body">
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-12 col-sm-6">
                          <p><b>Ví dụ về FrameLayout</b></p>
                          <ul>
                            <li>Ghi nhớ: ViewGroup là một lớp con của View</li>
                            <li>Đơn giản nhất: FrameLayout
                              <ul>
                                <li>Khoảng trắng được lắp đầy với một đối tượng đơn</li>
                                <li>Gắn đối tượng vào góc trái trên</li>
                                <li>Nếu nó chứa nhiều hơn 1 một đối tượng, đơn giản vẽ chúng chồng lên nhau</li>
                              </ul>
                            </li>
                            <li>Đầy là lớp gốc của Activity</li>
                          </ul>
                        </div>
                        <div class="col-12 col-sm-6">
                          <center>
                            <img src="./assets/img/LTTBDD/chap3/img3.png" alt="" class="col-12">
                          </center>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="collapse" id="collapse115">
                  <div class="card card-body">
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-12 col-sm-6">
                          <p><b>Ví dụ về TabLayout</b></p>

                          <ul>
                            <li>Gồm 02 phần chia ra riêng biệt, phần nhỏ hiển thị tổng quát các chức năng và phần lớn
                              hiển
                              thị nội dung của mỗi chức năng</li>
                            <li>Thuận tiện và dễ quản lý hơn menu</li>
                            <li>02 phương pháp để lấp đầy Tab
                              <ul>
                                <li>Đổi View: lý tưởng cho các chức năng tương tự nhau được nhóm vào một group chức năng
                                </li>
                                <li>Đổi Activity: lý tưởng cho quản lý công việc tách rời nhau, thay vì sử dụng một
                                  activity và layout lớn</li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <div class="col-12 col-sm-6">
                          <center>
                            <img class="col-12" src="./assets/img/LTTBDD/chap3/img4.png" alt="">
                          </center>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="collapse" id="collapse116">
                  <div class="card card-body">
                    <p><b>Ví dụ về TableLayout</b></p>
                    <p>Là layout dạng bảng trong android</p>
                    <center>
                      <img src="./assets/img/LTTBDD/chap3/img5.png" alt="" class="col-12 col-sm-8">
                    </center>
                    <p><b>Ví dụ:</b> Chúng ta sẽ định nghĩa layout cho giao diện sau như thế nào?</p>
                    <center>
                      <img src="./assets/img/LTTBDD/chap3/img6.png" alt="" class="col-12 col-sm-8">
                    </center>
                  </div>
                </div>
                <div class="collapse" id="collapse117">
                  <div class="card card-body">
                    <p><b>Định nghĩa Layout</b></p>
                    <ul>
                      <li>Phương pháp phổ biến - định nghĩa thông qua file XML</li>
                      <li>Nằm trong thư mục res/layout/&lt;file&gt;.xml - </li>
                      <li>Tất cả các file đều chứa
                        <ul>
                          <li>XML version</li>
                          <li>xmlns:android tag trong phần tử gốc
                            <br>
                            &lt;LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"&gt;
                          </li>
                        </ul>
                      </li>
                      <li>Từ onCreate, gọi setContentView(R.layout.&lt;file&gt;) để thiết lập phần tử layout gốc cho một
                        activity</li>
                    </ul>
                  </div>
                </div>
                <div class="collapse" id="collapse118">
                  <div class="card card-body">
                    <p><b>XML layout</b></p>

                    <ul>
                      <li>Tất cả thuộc tính có tiền tố "android"</li>
                      <li>Các thuộc tính được áp dụng cho mọi View
                        <ul>
                          <li>Id: không bắt buộc. Giá duy nhất cho đối tượng do đó có thể sử dụng truy cập đối tượng từ
                            code
                            <ul>
                              <li>android:id = "@+id/&lt;name&gt;"</li>
                              <li>Trong Java: (Button) b = (Button) findViewByID(R.id.&lt;name&gt;)</li>
                            </ul>
                          </li>
                          <li>layout_width/layout_height - chiều của đối tượng
                            <ul>
                              <li>Xác định cỡ (pixel hoặc dips - density independent pixcels)</li>
                              <li>fill_parent: chiếm toàn bộ cỡ của ViewGroup</li>
                              <li>wrap_parent: chiếm không gian cần thiết để hiển thị View</li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="collapse" id="collapse119">
                  <div class="card card-body">
                    <p><b>Styles</b></p>
                    <ul>
                      <li>Bản chất là CSS của Android UI</li>
                      <li>Nằm trong res/value/&lt;anything&gt;.xml
                        <br>
                        Có thể đặt tên là styles.xml
                        <br>
                        <pre>
                        &lt;?xml version="1.0" encoding="utf-8"?&gt;
                        &lt;resources&gt;
                          &lt;style name="BigText"&gt;
                            &lt;item name="android:textSize"&gt;30dip&lt;/item&gt;&lt;/style&gt;
                        &lt;/resources&gt;
                      </pre>
                      </li>
                      <li>Áp dụng cho một view trong XML với style="@style/BigText"</li>
                    </ul>
                  </div>
                </div>
                <div class="collapse" id="collapse120">
                  <div class="card card-body">
                    <p><b>Theme</b></p>
                    <ul>
                      <li>Style áp dụng cho toàn bộ Activity hoặc ứng dụng</li>
                      <li>Thay đổi trong file AndroidManifest.xml</li>
                      <li>Ví dụ:
                        <ul>
                          <li>Thay đổi Activity giống dialog box
                            <br>
                            &lt;activity android:theme="@android:style/Theme/Dialog"&gt;
                          </li>
                          <li>Bỏ title bar: @android:style/Theme.NoTitleBar</li>
                        </ul>
                      </li>
                      <li>Thông tin thêm về Styles/Themes: http://developer.android.com/guide/topics/ui/themes.html</li>
                    </ul>
                  </div>
                </div>
                <div class="collapse" id="collapse121">
                  <p><b>Tạo layout bằng code</b></p>

                  <ul>
                    <li>Style áp dụng cho toàn bộ Activity hoặc ứng dụng
                      <center>
                        <img class="col-12 col-sm-8" src="./assets/img/LTTBDD/chap3/img7.png" alt="">
                      </center>
                    </li>
                    <li>Trong thực tế, tạo XML layout dễ hơn nhiều
                      <br>Nhưng cần JAVA để nhận sự kiện từ View
                    </li>
                  </ul>
                </div>
                <div class="collapse" id="collapse122">
                  <p><b>UI trong JAVA</b></p>

                  <ul>
                    <li>Định nghĩa layout trong XML, vậy làm thế nào để xử lý sự kiện trên layout?</li>
                    <li>Chúng ta cần biết làm thế nào để:
                      <ul>
                        <li>Nhận dữ liệu và truyền dữ liệu tới widget</li>
                        <li>Làm thế nào để truy cập text trong EditText</li>
                        <li>Nhận sự kiện từ widget</li>
                        <li>Chúng ta sẽ làm gì khi một button được click</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="collapse" id="collapse123">
                  <p><b>Nhận tham chiếu đến đối tượng</b></p>
                  <p>Có view với android:id="@+id/widget"</p>
                  <pre>
                    &lt;Class&gt; widget = (&lt;Class&gt;) findViewById(R.id.widget)
                  </pre>
                  <ul>
                    <li>&lt;Class&gt; là lớp của View, ví dụ Button hoặc EditText</li>
                    <li>Đây là đối tượng chúng ta cần
                      <ul>
                        <li>Get/set fields</li>
                        <li>Thiết lập event handlers</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="collapse" id="collapse124">
                  <div class="card card-body">
                    <p><b>Nhận tham chiếu đến đối tượng</b></p>

                    <p>Nếu chúng ta cần truy cập một view trong nhiều hơn một phương thức</p>

                    <ul>
                      <li>Có một biến trong lớp
                        <br>Private ListView mList;
                      </li>
                      <li>Ràng buộc biến trong phương thức onCreate()
                        <br>
                        Câu lệnh sai ở đâu:
                        <br>
                        <pre>
                          public void onCreate(Bundle savedInstanceState) {
                            super.onCreate(savedInstanceState);
                            Button b = (Button) findViewById(R.id.button)
                            setContentView(R.layout.main)
                          }
                        </pre>
                      </li>
                    </ul>

                    <p>Nếu chúng ta cần truy cập một view trong nhiều hơn một phương thức:</p>
                    <ul>
                      <li>Có một biến trong lớp
                        <br>Private ListView mList;
                      </li>
                      <li>Ràng buộc biến trong phương thức onCreate()
                        <br>
                        Câu lệnh sau sai ở đâu:
                        <br>
                        <pre>
                          public void onCreate(Bundle savedInstanceState) {
                            super.onCreate(savedInstanceState);
                            Button b = (Button) findViewById(R.id.button);
                            setContentView(R.layout.main);
                          }
                        </pre>
                        <p>Bạn phải gọi hàm setContentView trước khi gọi hàm findViewById</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="collapse" id="collapse125">
                  <div class="card card-body">
                    <p><b>Getting/setting field</b></p>

                    <p>Khi chúng ta có tham chiếu tới widget, truy cập tới các đối tượng khá đơn giản</p>
                    <pre>
                      EditTexttextField = ...
                      String text = textField.getText().toString();
                      textField.setText("Hello");
                      textField.setTextColor(Color.RED);
                    </pre>
                  </div>
                </div>
              </div>
            </div>
            `],
            ['RelativeLayout', 'LTTBDD12', `
            <p><b>RelativeLayout</b></p>

            <div class="container-fluid">
              <div class="row">
                <div class="col-12 col-sm-8">
                  <p><b>RelativeLayout</b></p>
                  <ul>
                    <li>Là 1 view group hiển thị các thành phần con dựa vào mối quan hệ vị trí giữa chúng với nhau hoặc
                      giữa chúng với thành phần cha chứa nó.</li>
                    <li>EditText: nằm dưới TextView</li>
                    <li>Nút OK: dưới EditText, căn phải với phần tử cha (screen)</li>
                    <li>Nút Cancel: căn trái nút OK, có khoảng cách nhỏ với bên phải</li>
                  </ul>
                </div>
                <div class="col-12 col-sm-4">
                  <center>
                    <img src="./assets/img/LTTBDD/chap3/img8.png" alt="" class="col-12">
                  </center>
                </div>
              </div>
            </div>
            `],
            ['LinearLayout', 'LTTBDD13', `
            <p><b>LinearLayout</b></p>

            <div class="container-fluid">
              <div class="row">
                <div class="col-12 col-sm-6">
                  <ul>
                    <li>Là layout sắp xếp các View con trong nó theo duy
                      nhất một chiều, ngang hoặc dọc theo giá trị của
                      thuộc tính android:orientation.</li>
                    <li>Orientation = vertical hoặc horizontal.
                      <br>
                      Có thể lồng nhiều layout phức tạp.
                    </li>
                    <li>Thông thường sử dụng cho form nhỏ.</li>
                  </ul>
                </div>
                <div class="col-12 col-sm-6">
                  <center>
                    <img src="./assets/img/LTTBDD/chap3/chap9.png" alt="" class="col-12 col-sm-10">
                  </center>
                </div>
              </div>
            </div>

            <p><b>LinearLayout lồng nhâu</b></p>
            <ul>
              <li>LinearLayout lồng nhau là một cách để dễ dàng tạo các giao diện chung.</li>
              <li>Chú ý: nếu lồng nhau mà số cấp lớn hơn hoặc bằng 5 sẽ làm cho việc tải giao diện chậm hơn.</li>
              <li>Công cụ để phát hiện vấn đề:
                <br>
                http://android-developers.blogspot.com/2009/11/optimize-your-layouts.html
              </li>
            </ul>

            <p><b>Trọng lượng của Layout (layout weight)</b></p>
            <div>
              <p>Trọng lượng cho phép tạo LinearLayout với cỡ cân đối</p>
              <p>Default = 0 - Không gian tối thiểu để hiển thị tất cả nội dung</p>
            </div>

            <p><b>Trọng lượng của Layout (layout weight)</b></p>
            <div>
              <p>Trọng lượng cho phép tạo LinearLayout với cỡ cân đối</p>
              <p>Default = 0 - Không gian tối thiểu để hiển thị tất cả nội dung</p>
              <center>
                <img src="./assets/img/LTTBDD/chap3/img9.png" alt="">
              </center>
            </div>

            <p><b>LinearLayout -> RelativeLayout</b></p>
            <div>
              <p>Refactor sang RelativeLayout</p>
              <p>Ví dụ: http://android-developers.blogspot.com/2009/11/optimize-your-layouts.html</p>
              <center>
                <img class="col-12 col-sm-8" src="./assets/img/LTTBDD/chap3/img10.png" alt="">
              </center>
            </div>
            `],
        ]
    },
    LTTBDD02: {
        title: 'Một số thành phần cơ bản',
        index: [
            ['TextView', 'LTTBDD21', `
            <p><b>TextView</b></p>
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 col-sm-6">
                  <p>TextView là một View cho phép hiển thị các dòng
                    chữ (text) trên màn hình, nó có nhiều thuộc tính tùy
                    mục đích sử dụng.</p>
                </div>
                <div class="col-12 col-sm-6">
                  <center>
                    <img src="./assets/img/LTTBDD/chap3/img11.png" alt="" class="col-12">
                  </center>
                </div>
              </div>
            </div>
            `],
            ['EditText', 'LTTBDD22', `
            <p><b>EditText</b></p>
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-sm-6">
                <p>EditText (hoặc AppCompatEditText trong thư viện Support
                  Design) là loại View hiển thị một hộp (chữ nhật) cho phép
                  người dùng nhập dữ liệu</p>
              </div>
              <div class="col-12 col-sm-6">
                <center>
                  <img class="col-12" src="./assets/img/LTTBDD/chap3/img12.png" alt="">
                </center>
              </div>
            </div>
          </div>
            `],
            ['Button', 'LTTBDD23', `
            <p><b>Button</b></p>
          
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-sm-6">
                <p>Button được sử dụng để thực hiện một hành động khi
                  người dùng nhấp (click) vào nó.</p>
              </div>
              <div class="col-12 col-sm-6">
                <center>
                  <img src="./assets/img/LTTBDD/chap3/img13.png" alt="" class="col-12">
                </center>
              </div>
            </div>
          </div>
            `],
            ['ImageView', 'LTTBDD24', `
            <p><b>ImageView</b></p>
          <p>ImageView là loại View dùng để hiển thị tài nguyên hình ảnh như các ảnh Bitmap, các ảnh Drawable.</p>
          <center>
            <img src="./assets/img/LTTBDD/chap3/img14.png" alt="">
          </center>
            `],
            ['ListView', 'LTTBDD25', `
            <p><b>ListView</b></p>
          
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-sm-6">
                <ul>
                  <li>ViewGroup chứa danh sách các View</li>
                  <li>Có thể định nghĩa một View để hiển thị khi List rỗng sử dụng setEmptyView</li>
                  <li>Mỗi dòng mặc định là TextView, có thể tùy biến</li>
                  <li>Thông thường được load dữ liệu động</li>
                </ul>
                <p><b>ListViewAdapter</b></p>
                <ul>
                  <li>Adapter - ràng buộc nội dung động vào View trong ListView
                    <br>
                    Ví dụ ArrayAdapter
                  </li>
                  <li>Đơn giản - ràng buộc giá trị text vào text field trong ListView</li>
                  <li>Phức tạp hơn - tùy biến ListView row, đối tượng tùy biến được ràng buộc vào View</li>
                </ul>
              </div>
              <div class="col-12 col-sm-6">
                <center>
                  <img class="col-12" src="./assets/img/LTTBDD/chap3/img15.png" alt="">
                </center>
              </div>
            </div>
          </div>
            `],
        ]
    },
    LTTBDD03: {
      title: 'Video bài giảng',
      index: [
        ['ĐH Trà Vinh', 'CNPM031', `
              <p>Bài giảng <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220071_LapTrinhThietBiDiDong/Video/Bai3.mp4" target="_blank">Link</a></p>
          `],
        ['Youtube', 'CNPM032', ``],
      ]
    }
}