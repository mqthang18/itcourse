var LTUDWindows4 = {
  LTUDWindows1: {
    title: `Windows forms`,
    index: [
      ['Khái niệm', 'LTUDWindows11', `
            <h4>Khái niệm</h4>
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-sm-6">
                <p>Ứng dụng Windows Forms là ứng dụng giao diện đồ hoạ, chạy trên các hệ điều hành MS Windows có cài
                  .Net framework.</p>
              </div>
              <div class="col-12 col-sm-6">
                <center>
                  <img src="./assets/img/LTUDWindows/Chap4/img1.png" alt="" class="w-75">
                </center>
              </div>
            </div>

          </div>

            `],
      ['Thuộc tính thường dùng', 'LTUDWindows12', `
            <h4>Thuộc tính thường dùng</h4>
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse21" role="button" aria-expanded="false"
                aria-controls="collapse21">
                Thuộc tính định dạng
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse22" role="button" aria-expanded="false"
                aria-controls="collapse22">
                Thuộc tính thực đơn
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse23" role="button" aria-expanded="false"
                aria-controls="collapse23">
                Thuộc tính chỉ thị
              </a>
            </p>
            <div>
              <div class="collapse" id="collapse21">
                <div class="card card-body">
                  <h5>Thuộc tính định dạng</h5>
                  <table>
                    <thead>
                      <tr>
                        <th style="width: 5%">#</th>
                        <th style="width: 30%">Thuộc tính định dạng</th>
                        <th>Ý nghĩa</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style="width: 5%">1</td>
                        <td style="width: 30%">BackColor</td>
                        <td>Định dạng màu nền cho Form</td>
                      </tr>
                      <tr>
                        <td style="width: 5%">2</td>
                        <td style="width: 30%">ForeColor</td>
                        <td>Định dạng màu mặc định cho chuỗi, các điều khiển trên Form.</td>
                      </tr>
                      <tr>
                        <td style="width: 5%">3</td>
                        <td style="width: 30%">StartPosition</td>
                        <td>Xác định vị trị của Form khi xuất hiện trên màn hình</td>
                      </tr>
                      <tr>
                        <td style="width: 5%">4</td>
                        <td style="width: 30%">WindowState</td>
                        <td>Chọn trạng thái hiển thị của Form: Normal (kích thước Form khi hiển thị bằng kích thước form
                          khi thiết kế), Minimized (thu nhỏ dưới thanh Taskbar), Maximized (Full màn hình)</td>
                      </tr>
                      <tr>
                        <td style="width: 5%">5</td>
                        <td style="width: 30%">IsMdiContainer</td>
                        <td>Được sử dụng trong Form cha, Form con.</td>
                      </tr>
                      <tr>
                        <td style="width: 5%">6</td>
                        <td style="width: 30%">ControlBox</td>
                        <td>Dùng để ẩn/hiện 3 nút ở gốc trên bên phải của Form.</td>
                      </tr>
                      <tr>
                        <td style="width: 5%">7</td>
                        <td style="width: 30%">MaximizeBox</td>
                        <td>Dùng để ẩn/hiện nút phóng to ở gốc trên bên phải của Form</td>
                      </tr>
                      <tr>
                        <td style="width: 5%">8</td>
                        <td style="width: 30%">MinximizeBox </td>
                        <td>Dùng để ẩn/hiện nút thu nhỏ ở gốc trên bên phải của Form</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="collapse" id="collapse22">
                <div class="card card-body">
                  <h5>Thuộc tính thực đơn</h5>
                  <table>
                    <thead>
                      <tr>
                        <th style="width: 5%;">#</th>
                        <th style="width: 30%">Thuộc tính thực đơn</th>
                        <th>Ý nghĩa</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style="width: 5%;">1</td>
                        <td style="width: 30%">MainMenuStrip</td>
                        <td>Dùng để chọn Menustrip cần hiển thị</td>
                      </tr>
                      <tr>
                        <td style="width: 5%;">2</td>
                        <td style="width: 30%">ContextMenuStrip</td>
                        <td>Dùng để chọn ContextMenuStrip cần hiển thị</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="collapse" id="collapse23">
                <div class="card card-body">
                  <h5>Thuộc tính chỉ thị</h5>
                  <table>
                    <thead>
                      <tr>
                        <th style="width: 5%;">#</th>
                        <th style="width: 30%">Thuộc tính chỉ thị</th>
                        <th>Ý nghĩa</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style="width: 5%;">1</td>
                        <td style="width: 30%">AcceptButton</td>
                        <td>Chọn nút để kích hoạt khi nhấn phím Enter.</td>
                      </tr>
                      <tr>
                        <td style="width: 5%;">2</td>
                        <td style="width: 30%">CancelButton</td>
                        <td>Chọn nút để kích hoạt khi nhấn phím Esc.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            `],
      ['Sự kiện thường dùng', 'LTUDWindows13', `
            <h4>Sự kiện thường dùng</h4>
            <table>
              <thead>
                <tr>
                  <th style="width: 5%;">#</th>
                  <th>Sự kiện</th>
                  <th>Ý nghĩa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="width: 5%;">1</td>
                  <td>FormClosed</td>
                  <td>Sự kiện được xảy ra khi Form đã đóng</td>
                </tr>
                <tr>
                  <td style="width: 5%;">2</td>
                  <td>FormClosing</td>
                  <td>Sự kiện được xảy ra khi Form đang đóng</td>
                </tr>
                <tr>
                  <td style="width: 5%;">3</td>
                  <td>Click</td>
                  <td>Sự kiện được xảy ra khi người dùng nhấn chuột lên Form</td>
                </tr>
                <tr>
                  <td style="width: 5%;">4</td>
                  <td>Activated</td>
                  <td>Sự kiện được xảy ra khi người dùng kích hoạt Form</td>
                </tr>
                <tr>
                  <td style="width: 5%;">5</td>
                  <td>Load</td>
                  <td>Sự kiện được xảy ra khi Form được mở lên lần đầu tiên</td>
                </tr>
                <tr>
                  <td style="width: 5%;">6</td>
                  <td>KeyPress</td>
                  <td>Sự kiện được xảy ra khi người dùng nhấn 1 phím</td>
                </tr>
                <tr>
                  <td style="width: 5%;">7</td>
                  <td>Resize</td>
                  <td>Sự kiện được xảy ra khi Form được thay đổi</td>
                </tr>
              </tbody>
            </table>
            `],
      ['Phương thức thường dùng', 'LTUDWindows14', `
            <h4>Phương thức thường dùng</h4>
            <table class="table">
              <thead>
                <tr>
                  <th style="width: 5%">#</th>
                  <th style="width: 20%;">Phương thức</th>
                  <th>Ý nghĩa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="width: 5%">1</td>
                  <td style="width: 20%;">Close</td>
                  <td>Dùng để đóng Form</td>
                </tr>
                <tr>
                  <td style="width: 5%">2</td>
                  <td style="width: 20%;">Hide</td>
                  <td>Dùng để ẩn Form khi Form đang được mở</td>
                </tr>
                <tr>
                  <td style="width: 5%">3</td>
                  <td style="width: 20%;">Activate</td>
                  <td>Dùng để kích hoạt Form, thường được dùng trong Form cha, con</td>
                </tr>
                <tr>
                  <td style="width: 5%">4</td>
                  <td style="width: 20%;">Show</td>
                  <td>Cho phép mở Form lên màn hình</td>
                </tr>
                <tr>
                  <td style="width: 5%">5</td>
                  <td style="width: 20%;">ShowDialog</td>
                  <td>Cho phép mở Form lên màn hình ở dạng Dialog, không dùng cho Form cha, con.</td>
                </tr>
              </tbody>
            </table>
            `]
    ]
  },
  LTUDWindows2: {
    title: 'Điều khiển cơ bản',
    index: [
      ['Label', 'LTUDWindows21', `      
            <h4>Label</h4>
            <p>
              <img src="./assets/img/LTUDWindows/Chap4/img2.png" alt=""> thường được dùng để hiển thị nội dung thông báo
              cho người
              dùng hoặc có thể xuất kết quả ra màn hình.
            </p>
            <center>
              <p><b>Các thuộc tính thường dùng</b></p>
              <table>
                <thead>
                  <tr>
                    <th style="width: 30%;">Thuộc tính</th>
                    <th>Ý nghĩa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="width: 30%;">Name</td>
                    <td>Dùng để phân biệt giữa các Labels hoặc truy xuất đến
                      Label. Thường được đặt với tiếp đầu ngữ là: lbl</td>
                  </tr>
                  <tr>
                    <td style="width: 30%;">BorderStyle</td>
                    <td>Chọn kiểu đường viền cho điều khiển</td>
                  </tr>
                  <tr>
                    <td>Font</td>
                    <td>Chọn font chữ, kích thước cho điều khiển</td>
                  </tr>
                  <tr>
                    <td style="width: 30%;">TextAlign</td>
                    <td>Canh lề chuỗi được trình bày trong điều khiển</td>
                  </tr>
                  <tr>
                    <td style="width: 30%;">FlatStyle</td>
                    <td>Chọn kiểu hiển thị cho điều khiển</td>
                  </tr>
                </tbody>
              </table>
            </center>
            <div class="container">
              <p><b>Ví dụ:</b> Tạo label và chỉnh các thuộc tính sau</p>
              <div class="row">
                <div class="col-12 col-sm-6">
                  <table>
                    <thead>
                      <tr>
                        <th style="width: 30%;">Name</th>
                        <th>lblShow</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style="width: 30%;">Text</td>
                        <td>Khoa kỹ thuật công nghệ</td>
                      </tr>
                      <tr>
                        <td style="width: 30%;">Autosize</td>
                        <td>True</td>
                      </tr>
                      <tr>
                        <td style="width: 30%;">ForeColor</td>
                        <td>Blue</td>
                      </tr>
                      <tr>
                        <td style="width: 30%;">TextAlign</td>
                        <td>TopCenter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="col-12 col-sm-6">
                  <center>
                    <img src="./assets/img/LTUDWindows/Chap4/img3.png" alt="" class="w-100">
                  </center>
                </div>
              </div>
              <p><b>Yêu cầu</b>: khi click vào Form thì chữ hiển thị của label thay đổi thành “Ngành Công nghệ thông tin”
              </p>
            </div>
            `],
      ['Button', 'LTUDWindows22', `
            <h4>Button</h4>

            <p>
              <img src="./assets/img/LTUDWindows/Chap4/img4.png" alt=""> dùng để thực hiện chức năng nhấn chuột hoặc sử
              dụng bàn phím
            </p>
            <center>
              <p><b>Các thuộc tính thường dùng của Button</b></p>
              <table class="table">
                <thead>
                  <tr>
                    <th>Thuộc tính</th>
                    <th>Ý nghĩa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>
                      Dùng để phân biệt với <b>Button</b> khác và dùng để truy xuất đến các thuộc tính khác của
                      <b>Button</b>. Tiếp đầu ngữ thường đặt là: btn
                    </td>
                  </tr>
                  <tr>
                    <td>FlatStyle</td>
                    <td>Kiểu đường viền của điều khiển</td>
                  </tr>
                  <tr>
                    <td>Image</td>
                    <td>Hiển thị hình trên điều khiển</td>
                  </tr>
                  <tr>
                    <td>Text</td>
                    <td>Hiển thị chuỗi nội dung của điều khiển.</td>
                  </tr>
                  <tr>
                    <td>TextAlign</td>
                    <td>Canh lề chuỗi nội dung của điều khiển.</td>
                  </tr>
                </tbody>
              </table>
              <p><b>Sự kiện thường dùng của Button</b></p>
              <table>
                <thead>
                  <tr>
                    <th style="width: 30%;" class="text-center">Sự kiện</th>
                    <th class="text-center">Ý nghĩa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="width: 30%; text-align: center;">Click</td>
                    <td>Được kích hoạt khi người dùng nhấn vào điều khiển</td>
                  </tr>
                </tbody>
              </table>
            </center>
            <div class="container">
              <p><b>Ví dụ:</b> Thiết kế form như sau</p>
              <center>
                <img src="./assets/img/LTUDWindows/Chap4/img5.png" alt="" class="w-50">
              </center>
              <p><b>Chức năng:</b> khi nhấn vào nút “Thay đổi Label” thì nội dụng Label được chuyển thành “Ngành công nghệ
                thông tin” và ngược lại. Khi nhấn vào nút “Thay đổi Button” thì nội dung của Button được thay đổi thành
                “Đã thay đổi” và ngược lại.</p>
            </div>
            `],
      ['Class Messagebox', 'LTUDWindows23', `
            <h4>Class Messagebox</h4>
            <div class="contrainer">
              <div class="row">
                <div class="col-12 col-sm-6">
                  <pre>
  private void btnHienThi_Click(object sender, EventArgs e) {
    String msg = "Nơi đây là thông báo";
    String caption = "Nơi đây là tiêu đề";
    MessageBox.Show(msg, caption, 
      MessageBoxButtons.YesNoCancel,
      MessageBoxIcon.Information,
      MessageBoxDefaultButton.Button3,
      MessageBoxOptions.RightAlign
    );
  }
                  </pre>
                </div>
                <div class="col-12 col-sm-6">
                  <img src="./assets/img/LTUDWindows/Chap4/img6.png" alt="" class="w-75">
                </div>
                <p><b>Ý nghĩa các tham số</b></p>
                <ul>
                  <li>Tham số <b>msg</b>: Hiển thị nội dung cần thông báo để giao tiếp với người dùng</li>
                  <li>Tham số <b>caption</b>: Hiển thị tiêu đề của hộp thoại</li>
                  <li>Tham số <b>MessageBoxButtons</b>: Là danh sách đối tượng chỉ định nhóm nút lệnh sẽ hiển thị để giao
                    tiếp với người sử dụng</li>
                </ul>
              </div>
            </div>
  
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse231" role="button" aria-expanded="false"
                aria-controls="collapse231">
                MessageBoxButtons
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse232" role="button" aria-expanded="false"
                aria-controls="collapse232">
                MessageBoxIcon
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse233" role="button" aria-expanded="false"
                aria-controls="collapse233">
                MessageBoxDefaultButton
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse234" role="button" aria-expanded="false"
                aria-controls="collapse234">
                MessageBoxOptions
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse235" role="button" aria-expanded="false"
                aria-controls="collapse235">
                Phương thức Show của Class MessageBox
              </a>
            </p>
            <div>
              <div class="collapse" id="collapse231">
                <div class="card card-body">
                  <p><b>MessageBoxButtons</b></p>
                  <p>Các giá trị có thể chọn cho tham số <b>MessageBoxButtons</b></p>
                  <center>
                    <table>
                      <thead>
                        <tr>
                          <th style="width: 30%;">Giá trị</th>
                          <th>Ý nghĩa</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style="width: 30%;">AbortRetryIgnore</td>
                          <td>Hộp thoại được hiển thị chứa 3 nút lệnh Abort, Retry, Ignore</td>
                        </tr>
                        <tr>
                          <td style="width: 30%;">OK</td>
                          <td>Hộp thoại được hiển thị chứa 1 nút lệnh: OK</td>
                        </tr>
                        <tr>
                          <td style="width: 30%;">OkCancel</td>
                          <td>Hộp thoại được hiển thị chứa 2 nút lệnh: OK, Cancel</td>
                        </tr>
                        <tr>
                          <td style="width: 30%;">RetryCancel</td>
                          <td>Hộp thoại được hiển thị chứa 2 nút lệnh: Retry, Cancel</td>
                        </tr>
                        <tr>
                          <td style="width: 30%;">YesNo</td>
                          <td>Hộp thoại được hiển thị chứa 2 nút lệnh: Yes, No</td>
                        </tr>
                        <tr>
                          <td style="width: 30%;">YesNoCancel</td>
                          <td>Hộp thoại được hiển thị chứa 3 nút lệnh: Yes, No, Cancel</td>
                        </tr>
                      </tbody>
                    </table>
                  </center>
                </div>
              </div>
              <div class="collapse" id="collapse232">
                <div class="card card-body">
                  <p><b>MessageBoxIcon</b></p>
                  <p>Dùng để hiển thị các biểu tượng</p>
                  <center>
                    <table>
                      <thead>
                        <tr>
                          <th>Giá trị</th>
                          <th>Ý nghĩa</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Asterisk</td>
                          <td>Hiển thị biểu tượng <img src="./assets/img/LTUDWindows/Chap4/img7.png" alt=""></td>
                        </tr>
                        <tr>
                          <td>Error</td>
                          <td>Hiển thị biểu tượng: <img src="./assets/img/LTUDWindows/Chap4/img8.png" alt=""></td>
                        </tr>
                        <tr>
                          <td>Exclamation</td>
                          <td>Hiển thị biểu tượng: <img src="./assets/img/LTUDWindows/Chap4/img9.png" alt=""></td>
                        </tr>
                        <tr>
                          <td>Hand</td>
                          <td>Hiển thị biểu tượng: <img src="./assets/img/LTUDWindows/Chap4/img8.png" alt=""></td>
                        </tr>
                        <tr>
                          <td>Information</td>
                          <td>Hiển thị biểu tượng: <img src="./assets/img/LTUDWindows/Chap4/img7.png" alt=""></td>
                        </tr>
                        <tr>
                          <td>None</td>
                          <td>Không có biểu tượng, nếu có tham số MessageBoxIcon, Thì đây là giá trị mặc định</td>
                        </tr>
                        <tr>
                          <td>Question</td>
                          <td>Hiển thị biểu tượng: <img src="./assets/img/LTUDWindows/Chap4/img10.png" alt=""></td>
                        </tr>
                        <tr>
                          <td>Stop</td>
                          <td>Hiển thị biểu tượng: <img src="./assets/img/LTUDWindows/Chap4/img8.png" alt=""></td>
                        </tr>
                        <tr>
                          <td>Warning</td>
                          <td>Hiển thị biểu tượng: <img src="./assets/img/LTUDWindows/Chap4/img9.png" alt=""></td>
                        </tr>
  
                      </tbody>
                    </table>
                  </center>
                </div>
              </div>
              <div class="collapse" id="collapse233">
                <div class="card card-body">
                  <h4>MessageBoxDefaultButton</h4>
  
                  <p>Chọn nút làm giá trị mặc định khi người dùng ấn phím <i>Enter</i></p>
                  <table>
                    <thead>
                      <tr>
                        <th>Giá trị</th>
                        <th>Ý nghĩa</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Button1</td>
                        <td>Chọn giá trị mặc định ở nút thứ nhất</td>
                      </tr>
                      <tr>
                        <td>Button2</td>
                        <td>Chọn giá trị mặc định ở nút thứ hai</td>
                      </tr>
                      <tr>
                        <td>Button3</td>
                        <td>Chọn giá trị mặc định ở nút thứ ba</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="collapse" id="collapse234">
                <div class="card card-body">
                  <h4>MessageBoxOptions</h4>
                  <p>Định dạng hộp thoại</p>
                  <center>
                    <table>
                      <thead>
                        <tr>
                          <th>Giá trị</th>
                          <th>Ý nghĩa</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>DefaultDesktopOnly</td>
                          <td>Hộp thoại hiển thị trên màn hình nền hiện hành</td>
                        </tr>
                        <tr>
                          <td>RightAlign</td>
                          <td>Chuỗi được canh phải trong hộp thoại.</td>
                        </tr>
                        <tr>
                          <td>RtlReading</td>
                          <td>Chuỗi được canh từ phải sang trái theo thứ tự
                            trong hộp thoại</td>
                        </tr>
                        <tr>
                          <td>ServiceNotification</td>
                          <td>Hộp thoại hiển thị trên màn hình nền hiện hành</td>
                        </tr>
                      </tbody>
                    </table>
                  </center>
                </div>
              </div>
              <div class="collapse" id="collapse235">
                <div class="card card-body">
                  <h4>Phương thức Show của Class MessageBox</h4>
                  <p>Trả về một trong các giá trị của DialogResult tương ứng như bảng bên dưới</p>
                  <center>
                    <table>
                      <thead>
                        <tr>
                          <th style="width: 30%;">Giá trị</th>
                          <th>Ý nghĩa</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style="width: 30%;">OK</td>
                          <td>Khi người dùng chọn nút OK trong hộp thoại</td>
                        </tr>
                        <tr>
                          <td style="width: 30%;">Cancel</td>
                          <td>Khi người dùng chọn nút Cancel trong hộp thoại.</td>
                        </tr>
                        <tr>
                          <td style="width: 30%;">Yes</td>
                          <td>Khi người dùng chọn nút Yes trong hộp thoại</td>
                        </tr>
                        <tr>
                          <td style="width: 30%;">No</td>
                          <td>Khi người dùng chọn nút No trong hộp thoại.</td>
                        </tr>
                        <tr>
                          <td style="width: 30%;">None</td>
                          <td>Khi người dùng không chọn nút lệnh</td>
                        </tr>
                        <tr>
                          <td style="width: 30%;">Ignore</td>
                          <td>Khi người dùng chọn nút Ignore trong hộp thoại.</td>
                        </tr>
                        <tr>
                          <td style="width: 30%;">Retry</td>
                          <td>Khi người dùng chọn nút Retry trong hộp thoại.</td>
                        </tr>
                        <tr>
                          <td style="width: 30%;">Abort</td>
                          <td>Khi người dùng chọn nút Abort trong hộp thoại</td>
                        </tr>
                      </tbody>
                    </table>
                  </center>
                  <p><b>Ví dụ</b>: Viết sự kiện có formClosing để hỏi người dụng có thật sự muốn đóng Form hay không? Nếu
                    chọn OK thì đóng form và ngược lại. Trên form cũng thiết kế 1 nút lệnh dùng để thoát ứng dụng.</p>
                  <center>
                    <img src="./assets/img/LTUDWindows/Chap4/img11.png" alt="" class="w-75">
                  </center>
                  <pre>
  private void frmMain_FormClosing(object sender, FormClosingEventArgs e) {
    String caption = "Thông báo";
    String msg = "Bạn có muốn thoát không?";
    DialogResult kt = new DialogResult();
  
    kt = MessageBox.Show(
      msg, 
      caption, 
      MessageBoxButtons.OkCancel, 
      MessageBoxIcon.Question, 
      MessageBoxDefaultButton.Button1, 
      MessageBoxOptions.DefaultDesktopOnly
    );
  
    if (kt == DialogResult.Cancel) {
      e.Cancel = true;
    }
  }
                  </pre>
                </div>
              </div>
            </div>
  
            `],
      ['Textbox', 'LTUDWindows24', `
            <h4>Textbox</h4>
            <p><img src="./assets/img/LTUDWindows/Chap4/img12.png" alt=""> dùng để nhập hoặc xuất (hiển thị) dữ liệu</p>
  
            <center>
              <p><b>Các thuộc tính thường dùng</b></p>
              <table>
                <thead>
                  <tr>
                    <th>Thuộc tính</th>
                    <th>Ý nghĩa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>Dùng để phân biệt giữa các TextBox hoặc truy xuất đến
                      TextBox. Thường được đặt với tiếp đầu ngữ là: txt.</td>
                  </tr>
                  <tr>
                    <td>BorderStyle</td>
                    <td>Kiểu đường viền của điều khiển.</td>
                  </tr>
                  <tr>
                    <td>CharacterCasing</td>
                    <td>Định dạng chuỗi nhập liệu: hoa, thường hoặc mặc định.</td>
                  </tr>
                  <tr>
                    <td>Enable</td>
                    <td>Vô hiệu hóa (không cho nhập liệu).</td>
                  </tr>
                  <tr>
                    <td>MaxLength</td>
                    <td>Xác định số lượng ký tự lớn nhất có thể nhập.</td>
                  </tr>
                  <tr>
                    <td>Multiline</td>
                    <td>Cho phép nhập nhiều dòng.</td>
                  </tr>
                  <tr>
                    <td>PasswordChar</td>
                    <td>Giá trị nhập được thây thế bằng ký tự được nhập.</td>
                  </tr>
                  <tr>
                    <td>UseSystemPasswordChar</td>
                    <td>Giá trị nhập được thay thế bằng ký tự giả lập Password của hệ thống.</td>
                  </tr>
                  <tr>
                    <td>ReadOnly</td>
                    <td>Chỉ cho phép đọc.</td>
                  </tr>
                  <tr>
                    <td>ScrollBars</td>
                    <td>Nếu thuộc tính Multiline là true thì xác định có xuất hiện cây thước (thanh trượt) không.</td>
                  </tr>
                  <tr>
                    <td>TextAlign</td>
                    <td>Canh lề chuỗi được nhập.</td>
                  </tr>
                  <tr>
                    <td>WordWrap</td>
                    <td>Tự động xuống hàng nếu dữ liệu dài hơn điều khiển.</td>
                  <tr>
                    <td>Click</td>
                    <td>Được kích hoạt khi người dùng nhấn vào điều khiển.</td>
                  </tr>
                  <tr>
                    <td>MouseDoubleClick</td>
                    <td>Được kích hoạt khi người dùng nhấn 2 lần liên tiếp
                      vào điều khiển.</td>
                  </tr>
                  <tr>
                    <td>Textchanged</td>
                    <td>Được kích hoạt khi người dùng thay đổi dữ liệu trong
                      điều khiển.</td>
                  </tr>
                </tbody>
              </table>
            </center>
  
            <div>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse241" role="button" aria-expanded="false"
                aria-controls="collapse241">
                Ví dụ
              </a>
              <br>
              <div class="collapse" id="collapse241">
                <div class="card card-body">
                  <p><b>Ví dụ</b></p>
                  <p>Thiết kế Form tính "+", "-", "*", "/" của 2 số nguyên như form bên dưới</p>
  
                  <center>
                    <img src="./assets/img/LTUDWindows/Chap4/img13.png" alt="">
                  </center>
  
                  <pre>
  int so1, so2; 
  void GetData() {
    if (!int.TryParse(txtSo1.Text, out so1)) {
      txtSo1.Clear();
      txtSo1.Focus();
    }
  
    if (!int.TryParse(txtSo2.Text, out so2)) {
      txtSo2.Clear();
      txtSo2.Focus();
    }
  }
  
  private void btnCong_Click(object sender, EventArgs e) {
    GetData();
    lblKetQua.Text = so1 + " + " + so2 + " = " + (so1 + so2).ToString();
  }
                  </pre>
                </div>
              </div>
            </div>
            `],
      ['Checkbox', 'LTUDWindows25', `
            <p><img src="./assets/img/LTUDWindows/Chap4/img14.png" alt=""> cho phép người dùng chọn 1 trong 2 (hoặc 3)
            trạng thái <i>True/False</i> (<i>Yes/No</i>)</p>

          <center>
            <table class="table">
              <thead>
                <tr>
                  <th style="width: 30%;">Thuộc tính</th>
                  <th>Ý nghĩa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="width: 30%;">Name</td>
                  <td>Dùng để phân biệt giữa các CheckBox, tiếp đầu ngữ thường được dùng là: chk</td>
                </tr>
                <tr>
                  <td style="width: 30%;">FlatStyle</td>
                  <td>Chọn kiểu đường viền của điều khiển.</td>
                </tr>
                <tr>
                  <td style="width: 30%;">Checked</td>
                  <td>Chọn trạng thái True/False</td>
                </tr>
                <tr>
                  <td style="width: 30%;">CheckState</td>
                  <td>Thể hiện trạng thái đang chọn của điều khiển: Checked, Unchecked, Indeterminate.</td>
                </tr>
                <tr>
                  <td style="width: 30%;">Text</td>
                  <td>Chuỗi trình bày nội dung của điều khiển.</td>
                </tr>
                <tr>
                  <td style="width: 30%;">TextAlign</td>
                  <td>Canh lề chuỗi nội dung của điều khiển.</td>
                </tr>
                <tr>
                  <td style="width: 30%;">ThreeState</td>
                  <td>Cho phép có 3 trang thái của điều khiển.</td>
                </tr>
              </tbody>
            </table>
          </center>

          <p><b>Các sự kiện thường dùng</b></p>
          <center>
            <table class="table">
              <thead>
                <tr>
                  <th>Sự kiện</th>
                  <th>Ý nghĩa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Click</td>
                  <td>Được kích hoạt khi người sử dụng nhấn vào điều khiển</td>
                </tr>
                <tr>
                  <td>CheckedChanged</td>
                  <td>Được kích hoạt khi người sử dụng nhấn vào điều
                    khiển.</td>
                </tr>
              </tbody>
            </table>
          </center>

          <div>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse251" role="button" aria-expanded="false"
              aria-controls="collapse251">
              Ví dụ
            </a>
            <div class="collapse" id="collapse251">
              <div class="card card-body">
                <p><b>Ví dụ</b></p>
                <p>Nhập vào tên, giới tính, năm sinh và in ra messageBox như hình bên dưới</p>
                <center>
                  <img src="./assets/img/LTUDWindows/Chap4/img15.png" alt="">
                </center>
                <pre>
                  private void btnKiemTra_Click(object sender, EventArgs e)
                  {
                    String caption = "Thông báo";
                    String gt = chkNam.Checked == true ? "Anh" : "Chị";
                    String ht = txtHoTen.Text;
                    int tuoi = DateTime.Now.Year – int.Parse(txtNamSinh.Text);
                    String msg = string.Format("Chào {0} {1}!!!
                                              /nNăm nay {2} {3} tuổi.“
                                              ,gt,ht,gt,tuoi);
                    MessageBox.Show(msg,caption,MessageBoxButtons.OK);
                  }
                                </pre>
              </div>


            </div>
          </div>
            `],
      ['RadioButton', 'LTUDWindows26', `
            <h4>RadioButton</h4>

            <p><img src="./assets/img/LTUDWindows/Chap4/img16.png" alt=""> cho phép người dùng chọn 1 tùy chọn trong các
              tùy chọn được thiết kế</p>
  
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse261" role="button" aria-expanded="false"
                aria-controls="collapse261">
                Thuộc tính thường dùng
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse262" role="button" aria-expanded="false"
                aria-controls="collapse262">
                Sự kiện thường dùng
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse263" role="button" aria-expanded="false"
                aria-controls="collapse263">
                Ví dụ
              </a>
            </p>
            <div>
              <div class="collapse" id="collapse261">
                <div class="card card-body">
                  <h4>Thuộc tính thường dùng</h4>
                </div>
              </div>
              <div class="collapse" id="collapse262">
                <div class="card card-body">
                  <h4>Sự kiện thường dùng</h4>
                </div>
              </div>
              <div class="collapse" id="collapse263">
                <div class="card card-body">
                  <h4>Ví dụ</h4>
                  <center>
                    <img class="w-75" src="./assets/img/LTUDWindows/Chap4/img17.png" alt="">
                  </center>
  
                  <pre>
  String cau1, cau2, cau3;
  private void radioButton1_CheckedChanged(object sender, EventArgs e)
  {
    RadioButton rb = sender as RadioButton;
    if (rb.Checked)
      cau1 = rb.Text;
  }
  
  private void btnKiemTra_Click(object sender, EventArgs e)
  {
    float diem1 = 0, diem2 =0, diem3=0;
    if(cau1 == "17") diem1 =10;
    if(cau2 == "23") diem2 =10;
    if (cau3 == "18") diem3 = 10;
    String msg = String.Format("Bạn được {0} điểm.",diem1+diem2+diem3);
    MessageBox.Show(msg,"Thông Báo");
  }
  
                  </pre>
                </div>
              </div>
            </div>
  
            `],
      ['Combobox', 'LTUDWindows27', `
      <h4>Combobox</h4>
      <p>Tham khảo: <a href="https://freetuts.net/combobox-listbox-trong-lap-trinh-c-winforms-3433.html"
          target="_blank">Link</a></p>
      <p>Dùng để hiển thị danh sách phần tử (tạo tĩnh hoặc được lấy lên từ cơ sở dữ liệu)</p>
    
      <p>
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#LTUDWindows291" role="button" aria-expanded="false"
          aria-controls="LTUDWindows291">
          Các thuộc tính thường dùng
        </a>
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#LTUDWindows292" role="button" aria-expanded="false"
          aria-controls="LTUDWindows292">
          Các sự kiện thường dùng
        </a>
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#LTUDWindows293" role="button" aria-expanded="false"
          aria-controls="LTUDWindows293">
          Một số thao tác
        </a>
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#LTUDWindows294" role="button" aria-expanded="false"
          aria-controls="LTUDWindows294">
          Ví dụ
        </a>
      </p>
    
      <div>
        <div class="collapse" id="LTUDWindows291">
          <div class="card card-body">
            <center>
              <p><b>Các thuộc tính thường dùng</b></p>
              <table>
                <thead>
                  <tr>
                    <th>Thuộc tính</th>
                    <th>Ý nghĩa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>Dùng để phân biệt giữa các ComboBox, tiếp đầu ngữ thường được dùng là: cmb.</td>
                  </tr>
                  <tr>
                    <td>Flatstyle</td>
                    <td>Chọn kiểu đường viền của điều khiển.</td>
                  </tr>
                  <tr>
                    <td>DataSource</td>
                    <td>Tập dữ liệu được điền vào điều khiển.</td>
                  </tr>
                  <tr>
                    <td>DisplayMember</td>
                    <td>Tên trường ứng với chuỗi hiển thị lên điều khiển.</td>
                  </tr>
                  <tr>
                    <td>DropDownStyle</td>
                    <td>Chọn kiểu hiển thị danh sách các phần tử.</td>
                  </tr>
                  <tr>
                    <td>Items</td>
                    <td>Tập các phần tử có trong điều khiển, có thể thêm dữ liệu tĩnh khi nhấn vào nút “…”</td>
                  </tr>
                  <tr>
                    <td>MaxdropDownItems</td>
                    <td>Số phần tử lớn nhất có thể hiển thị,mặc đinh là 8</td>
                  </tr>
                  <tr>
                    <td>SelectedText</td>
                    <td>Gán hay lấy giá trị chuỗi ứng với chuỗi đang được chọn.</td>
                  </tr>
                  <tr>
                    <td>SelectedItem</td>
                    <td>Gán hay lấy giá trị object ứng với phần tử đang được
                      chọn.</td>
                  </tr>
                  <tr>
                    <td>SelectedValue</td>
                    <td>Gán hay lấy giá trị ứng với phần tử kiểu object đang được chọn</td>
                  </tr>
                  <tr>
                    <td>SelectedIndex</td>
                    <td>Gán hay lấy ví trí ứng với phần tử đang được chọn.
                    </td>
                  </tr>
                </tbody>
              </table>
            </center>
          </div>
        </div>
        <div class="collapse" id="LTUDWindows292">
          <div class="card card-body">
            <center>
              <p><b>Các sự kiện thường dùng</b></p>
    
              <table class="table">
                <thead>
                  <td>
                  <th>Sự kiện</th>
                  <th>Ý nghĩa</th>
                  </td>
                </thead>
                <tbody>
                  <tr>
                    <td>SelectedIndexChanged</td>
                    <td>Xẩy ra khi người dùng chọn phần tử mới</td>
                  </tr>
                  <tr>
                    <td>SelectedValueChanged</td>
                    <td>Xẩy ra khi người dùng chọn phần tử mới</td>
                  </tr>
                </tbody>
              </table>
            </center>
          </div>
        </div>
        <div class="collapse" id="LTUDWindows293">
          <div class="card card-body">
            <center>
              <p>Một số thao thức ComboBox</p>
              <table class="table">
                <thead>
                  <tr>
                    <td>Phương thức</td>
                    <td>Ý nghĩa</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Add()</td>
                    <td>Thêm một mục chọn vào cuối danh sách ListBox.</td>
                  </tr>
                  <tr>
                    <td>Insert()</td>
                    <td>Chèn thêm mục chọn vào vị trí i.</td>
                  </tr>
                  <tr>
                    <td>Count</td>
                    <td>Trả về số muc chọn hiện đang có.</td>
                  </tr>
                  <tr>
                    <td>Item()</td>
                    <td>Trả về mục chọn ở vị trí thứ i.</td>
                  </tr>
                  <tr>
                    <td>Remove()</td>
                    <td>Bỏ mục chọn.</td>
                  </tr>
                  <tr>
                    <td>RemoveAt()</td>
                    <td>Bỏ mục chọn ở vị trí thứ i.</td>
                  </tr>
                  <tr>
                    <td>Contains()</td>
                    <td>Trả về True nếu có mục chọn trong danh sách, trả vể False nếu không có mục chọn trong danh sách.
                    </td>
                  </tr>
                  <tr>
                    <td>Clear</td>
                    <td>Xóa tất cả các mục chọn.
                    </td>
                  </tr>
                  <tr>
                    <td>IndexOf()</td>
                    <td>Trả về vị trí mục chọn trong danh sách, nếu không tìm thấy sẽ trả về -1.
                    </td>
                  </tr>
                </tbody>
              </table>
            </center>
    
          </div>
        </div>
        <div class="collapse" id="LTUDWindows294">
          <div class="card card-body">
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse271" role="button" aria-expanded="false"
                aria-controls="collapse271">
                Ví dụ 1
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse272" role="button" aria-expanded="false"
                aria-controls="collapse272">
                Ví dụ 2
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse273" role="button" aria-expanded="false"
                aria-controls="collapse273">
                Ví dụ 3
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse274" role="button" aria-expanded="false"
                aria-controls="collapse274">
                Ví dụ 4
              </a>
            </p>
            <div>
              <div class="collapse" id="collapse271">
                <div class="card card-body">
                  <p><b>Ví dụ 1:</b></p>
                  <center>
                    <img src="./assets/img/LTUDWindows/Chap4/img18.png" alt="">
                  </center>
    
                  <p><b>Vào thuộc tính Item</b></p>
                  <div class="container">
                    <div class="row">
                      <div class="col-12 col-sm-6">
                        <pre>
          private void cmbKhoa_SelectedIndexChanged(object sender, EventArgs e) {
          MessageBox.Show(cmbKhoa.SelectedIndex.ToString(), "Thông báo");
          }
          
          private void cmbKhoa_SelectedValueChanged(object sender, EventArgs e) {
          MessageBox.Show(cmbKhoa.SelectedItem.ToString(), "Thông báo")
          }
                      </pre>
                      </div>
                      <div class="col-12 col-sm-6">
                        <center>
                          <img src="./assets/img/LTUDWindows/Chap4/img19.png" alt="" class="w-75">
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="collapse" id="collapse272">
                <div class="card card-body">
                  <p><b>Ví dụ 2</b></p>
                  <center>
                    <img src="./assets/img/LTUDWindows/Chap4/img20.png" alt="">
                  </center>
    
                  <pre>
          List<String> dulieu; 
          public Frm2() {
          InitializeComponent();
          LoadData();
          }
          
          public void LoadData() {
          dulieu = new List<string>() {
          "Khoa kỹ thuật công nghệ",
          "Khoa ngoại ngữ",
          "Khoa ngữ văn",
          "Khoa nông nghiệp"
          };
          cmbKhoa.DataSource = dulieu;
          }
          
          private void btnIndex_Click(object sender, EventArgs e) {
          MessageBox.Show(cmbKhoa.SelectedIndex.ToString());
          }
          
          private void btnValue_Click(object sender, EventArgs e) {
          MessageBox.Show(cmbKhoa.SelectedValue.ToString());
          }
                  </pre>
    
                </div>
              </div>
              <div class="collapse" id="collapse273">
                <div class="card card-body">
                  <p><b>Ví dụ 3</b></p>
                  <center>
                    <img src="./assets/img/LTUDWindows/Chap4/img21.png" alt="">
                  </center>
                  <pre>
          class Khoa {
          public String maKhoa {get; set;}
          public String tenKhoa {get; set;}
          }
          
          void LoadData() {
          dulieu = new List<Khoa>()
          {
          new Khoa() {maKhoa = "010", tenKhoa = "Khoa kỹ thuật công nghệ"},
          new Khoa() {maKhoa = "020", tenKhoa = "Khoa ngoại ngữ"},
          new Khoa() {maKhoa = "030", tenKhoa = "Khoa Ngữ Văn"},
          new Khoa() {maKhoa = "040", tenKhoa = "Khoa nông nghiệp"}
          }
          cmbKhoa.DataSource = dulieu;
          cmbKhoa.DisplayMember = "tenKhoa";
          }
          
          List<Khoa> dulieu;
          public Frm3() {
          InitializeComponent();
          LoadData();
          }
          
          private void btnMa_Click(object sender, EventArgs e)
          {
          Khoa k = cmbKhoa.SelectedValue as Khoa;
          MessageBox.Show(k.maKhoa.ToString());
          }
          
          private void btnTen_Click(object sender, EventArgs e)
          {
          Khoa k = cmbKhoa.SelectedValue as Khoa;
          MessageBox.Show(k.tenKhoa .ToString());
          }
          
                  </pre>
                </div>
              </div>
              <div class="collapse" id="collapse274">
                <div class="card card-body">
                  <p><b>Ví dụ 4</b></p>
                  <center>
                    <img src="./assets/img/LTUDWindows/Chap4/img22.png" alt="">
                  </center>
    
                  <pre>
          class Khoa
          {
          public String maKhoa { get; set; }
          public String tenKhoa { get; set; }
          public List<String> nghanh { get;set; }
          }
          
          List<Khoa> dulieu;
          public Frm4() 
          {
          InitializeComponent();
          LoadData();
          AddBingding();
          }
          
          void LoadData() {
          dulieu = new List<Khoa>() {
          new Khoa() {
          maKhoa = "010",
          tenKhoa = "Khoa kỹ thuật công nghệ",
          nghanh = new List<string>() {
            "Cơ khí",
            "Xây dựng",
            "Cầu đường",
            "Giao thông",
            "CNTT"
          } 
          },
          
          new Khoa() {
          maKhoa = "020",
          tenKhoa = "Khoa ngoại ngữ",
          nghanh = new List<string>() {
          "Anh Văn",
          "Pháp Văn"
          }
          },
          
          new Khoa() {
          maKhoa = "030",
          tenKhoa = "Khoa Ngữ văn",
          nghanh = new List<string>() {
          "Ngữ văn",
          "Đông Phương học"  
          }
          },
          
          new Khoa() {
          maKhoa = "040",
          tenKhoa = "Khoa nông nghiệp",
          nghanh = new List<string>() {
          "Thực phẩm",
          "Hóa học"  
          }
          }
          };
          cmbMaKhoa.DataSource = dulieu;
          cmbMaKhoa.DisplayMember = "maKhoa";
          }
          
          void AddBingding() {
          txtTenKhoa.DataBindings.Add("Text", cmbMaKhoa.DataSource, "tenKhoa");
          }
          
          private void cmbMaKhoa_SelectedValueChanged(object sender, EventArgs e) {
          if (cmbMaKhoa.SelectedValue != null) {
          Khoa k = cmbMaKhoa.SelectedValue as Khoa;
          cmbNghanh.DataSource = k.nghanh;
          }
          }
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
            `],
      ['Picturebox', 'LTUDWindows28', `
            <h4>Picturebox</h4>

          <p><img src="./assets/img/LTUDWindows/Chap4/img23.png" alt=""> dùng để hiển thị hình ảnh</p>

          <center>
            <p><b>Các thuộc tính thường dùng</b></p>
            <table>
              <thead>
                <tr>
                  <th>Thuộc tính</th>
                  <th>Ý nghĩa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Thường được dùng để phần biệt các picturebox, tiếp đầu ngữ thường dụng:pic</td>
                </tr>
                <tr>
                  <td>Image</td>
                  <td>Hiển thị ảnh (Chú ý thuộc tính sizeMode: Chỉnh chế độ hiển thị ảnh)</td>
                </tr>
                <tr>
                  <td>ErrorImage</td>
                  <td>Khi không tim thấy hình thì hiển thị hành trong ErrorImage</td>
                </tr>
                <tr>
                  <td>SizeMode</td>
                  <td>Chọn kiểu hiển thị và điều chỉnh kích thước của ảnh.</td>
                </tr>
              </tbody>
            </table>
          </center>

          <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse281" role="button" aria-expanded="false" aria-controls="collapse281">
              Ví dụ 1
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse282" role="button" aria-expanded="false" aria-controls="collapse282">
              Ví dụ 2
            </a>
          </p>
          <div>
            <div class="collapse" id="collapse281">
              <div class="card card-body">
                <p><b>Ví dụ 1</b></p>
                <center>
                  <img src="./assets/img/LTUDWindows/Chap4/img24.png" alt="" class="w-75">
                </center>
                <p><b>Chú ý</b>: Thêm thư mục HinhAnh (2 chỗ: Tên Project, debug) để lưu hình cần hiển thị</p>
                <pre>
void loadImage() {
  List<String> ds = new List<string>() {"1", "2", "3", "4"};
  cmbImage.DataSource = ds;
}

public Form1() {
  InitializeComponent();
  loadImage();
}

private void cmbImage_SelectedValueChanged(object sender, EventArgs e) {
  if (cmbImage.SelectedValue != null) {
    Bitmap bm;
    bm = new Bitmap(Application.StartupPath+"//HinhAnh//"+cmbImage.SelectedValue.ToString()+".jpg");
    pcbImage.Image = bm;
  }
}
                </pre>
              </div>
            </div>
            <div class="collapse" id="collapse282">
              <div class="card card-body">
                <p><b>Ví dụ 2</b></p>
                <center>
                  <img src="./assets/img/LTUDWindows/Chap4/img25.png" alt="">
                </center>
              </div>
            </div>
          </div>
            `],
      ['ListView', 'LTUDWindows29', `
            <h4>ListView</h4>

            <p><img src="./assets/img/LTUDWindows/Chap4/img26.png" alt=""> dùng để hiển thị danh sách các phần tử với nhiều hình dạng khác nhau</p>

            


            <center>
              <p><b>Các thuộc tính thường dùng</b></p>
              <table>
                <thead>
                  <tr>
                    <th>Thuộc tính</th>
                    <th>Ý nghĩa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>Dùng để phân biệt điều khiển ListView này với các ListView khác. Tiếp đầu ngữ thường dùng là: lsv.</td>
                  </tr>
                  <tr>
                    <td>CheckBoxes</td>
                    <td>Hiển thị CheckBox trước các phần tử trong Listview.</td>
                  </tr>
                  <tr>
                    <td>FullRowSelect</td>
                    <td>Cho phép tô màu hàng có phần tử được chọn</td>
                  </tr>
                  <tr>
                    <td>MultiSelect</td>
                    <td>Cho phép người sử dụng chọn nhiều phần tử trong điều
                      khiển.</td>
                  </tr>
                  <tr>
                    <td>LargeImageList</td>
                    <td>Chứa danh sách các Image theo số chỉ mục từ 0 đến
                      n-1 (n là số lượng hình) được sử dụng cho trường hợp
                      thuộc tính View là LargeIcon.</td>
                  </tr>
                  <tr>
                    <td>SmallImageList</td>
                    <td>Chứa danh sách các Image theo số chỉ mục từ 0 đến
                      n-1 (n là số lượng hình) được sử dụng cho trường hợp
                      thuộc tính View là SmallIcon.</td>
                  </tr>
                  <tr>
                    <td>View</td>
                    <td>Chọn chế độ hiển thị các phần tử trong điều khiển:
                      List, Details, LargeIcon, SmallIcon, Title.</td>
                  </tr>
                  <tr>
                    <td>SelectItems</td>
                    <td>Trả về danh sách các phần tử được chọn</td>
                  </tr>
                </tbody>
              </table>
            </center>
  
            <br>
  
            <center>
              <p><b>Các sự kiện thường dùng</b></p>
              <table>
                <thead>
                  <tr>
                    <th>Sự kiện</th>
                    <th>Ý nghĩa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>SelectedIndexChanged</td>
                    <td>Được kích hoạt khi người dùng thay đổi
                      phần tử được chọn trên điều khiển</td>
                  </tr>
                </tbody>
              </table>
            </center>
  
            <br>
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse291" role="button" aria-expanded="false" aria-controls="collapse291">
                Ví dụ 1
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse292" role="button" aria-expanded="false" aria-controls="collapse292">
                Ví dụ 2
              </a>
            </p>
            <div>
              <div class="collapse" id="collapse291">
                <div class="card card-body">
                  <p><b>Ví dụ 1</b></p>
                  <center>
                    <img src="./assets/img/LTUDWindows/Chap4/img27.png" alt="">
                  </center>
                  <pre>
  void LoadData()
  {
    lsvSinhVien.Columns.Add("Tên ngành");
    lsvSinhVien.Columns.Add("Số lượng GV");
    ListViewItem i1 = new ListViewItem();
    i1.Text = "Ngành công nghệ thông tin";
    i1.SubItems.Add(new ListViewItem.ListViewSubItem()
                                            { Text = "20" });
    ListViewItem i2 = new ListViewItem();
    i2.Text = "Điện - điện tử";
    i2.SubItems.Add(new ListViewItem.ListViewSubItem()
                                            { Text = "10" });
    lsvSinhVien.Items.Add(i1);
    lsvSinhVien.Items.Add(i2);
    lsvSinhVien.View = View.Details;
    lsvSinhVien.GridLines = true;
  }
                  </pre>
                </div>
              </div>
              <div class="collapse" id="collapse292">
                <div class="card card-body">
                  <p><b>Ví dụ 2</b></p>
                  <center>
                    <img src="./assets/img/LTUDWindows/Chap4/img28.png" alt="">
                  </center>
                </div>
              </div>
            </div>
            `],
      ['ListBox', 'LTUDWindows30', `

        <p>Tham khảo: <a href="https://freetuts.net/combobox-listbox-trong-lap-trinh-c-winforms-3433.html" target="_blank">Link</a></p>
        <p>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#LTUDWindows301" role="button" aria-expanded="false" aria-controls="LTUDWindows301">
            Giới thiệu ListBox
          </a>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#LTUDWindows302" role="button" aria-expanded="false" aria-controls="collapseExample">
            Thao tác cơ bản
          </a>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#LTUDWindows303" role="button" aria-expanded="false" aria-controls="collapseExample">
            Thuộc tính thường dùng
          </a>
        </p>
        <div>
          <div class="collapse" id="LTUDWindows301">
            <div class="card card-body">
              <p><b>ListBox</b> được dùng để hiển thị một danh sách các lựa chọn, người dùng có thể chọn một hoặc nhiều lựa chọn cùng lúc</p>

              <center>
                <img class="w-100" src=".assets/img/LTUDWindows/Chap4/img40.png" />
              </center>
            </div>
          </div>
          <div class="collapse" id="LTUDWindows302">
            <div class="card card-body">
              <p><b>Một số phương thức với ListBox</b></p>
              <table class="table">
                <thead>
                  <tr>
                    <th>Thao tác</th>
                    <th>Chức năng</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>Add()</td>
                      <td>Thêm một mục chọn vào cuối danh sách ListBox.</td>
                    </tr>
                    <tr>
                      <td>Insert()</td>
                      <td>Chèn thêm mục vào vị trí i</td>
                    </tr>
                    <tr>
                      <td>Count</td>
                      <td>Trả về số mục chọn hiện đang có</td>
                    </tr>
                    <tr>
                      <td>Item()</td>
                      <td>Trả về mục chọn ở vị trí i</td>
                    </tr>
                    <tr>
                      <td>Remove()</td>
                      <td>Bỏ chọn mục</td>
                    </tr>
                    <tr>
                      <td>RemoveAt()</td>
                      <td>Bỏ mục chọn tại vị trí i</td>
                    </tr>
                    <tr>
                      <td>Contains()</td>
                      <td>Trả về True nếu có mục chọn trong danh sách và trả về False nếu không có mục chọn trong danh sách</td>
                    </tr>
                    <tr>
                      <td>Clear</td>
                      <td>Xóa tất cả các mục chọn</td>
                    </tr>
                    <tr>
                      <td>IndexOf()</td>
                      <td>Trả về vị trí mục chọn trong danh sách, nếu không tìm thấy sẽ trả về -1</td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="collapse" id="LTUDWindows303">
            <div class="card card-body">
              <p><b>Một số thuộc tính của ListBox thường dùng</b></p>
              <table class="table">
                <thead>
                  <tr>
                    <th>Thuộc tính</th>
                    <th>Mô tả</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>DataSource</td>
                    <td>Chọn tập dữ liệu điền vào ListBox. Tập dữ liệu có thể là mảng, chuỗi, ArrayList</td>
                  </tr>
                  <tr>
                    <td>DisplayMember</td>
                    <td>Dữ liệu thành viên sẽ được hiển thị trên ListBox</td>
                  </tr>
                  <tr>
                    <td>ValueMember</td>
                    <td>Thuộc tính này chỉ định dẽ liệu thành viên sẽ cung cấp giá trị cho ListBox</td>
                  </tr>
                  <tr>
                    <td>SelectedValue</td>
                    <td>Trả về giá trị của mục chọn nếu ListBox có liên kết dữ liệu. Nếu không liên kết với dữ liệu hoặc thuộc tính ValueMember không được thiết lập thì giá trị thuộc tính SelectedValue là giá trị chuỗi của thuộc tính SelectedItem</td>
                  </tr>
                  <tr>
                    <td>Items</td>
                    <td>Các mục chứa trong ListBox</td>
                  </tr>
                  <tr>
                    <td>SelectedItem</td>
                    <td>Trả về mục được chọn</td>
                  </tr>
                  <tr>
                    <td>SelectedIndex</td>
                    <td>Lấy chỉ số mục được chọn, chỉ số mục chọn đầu tiên là 0</td>
                  </tr>
                  <tr>
                    <td>SelectionMode</td>
                    <td>Cho phép chọn một hoặc nhiều dòng dữ liệu trên ListBox, bao gồm:
                      <br>
                      <ul style="list-style-type: '- '">
                        <li>One: Chỉ chọn một giá trị</li>
                        <li>MultiSimple: Cho phép chọn nhiều, chọn bằng cách Click vào mục chọn, bỏ chọn bằng cách Click vào mục đã chọn</li>
                        <li>MultiExtended: Chọn nhiều bằng cách nhấn kết hợp với Shift hoặc Ctrl</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>SelectedItems</td>
                    <td>
                    Được sử dụng khi SelectionMode là MultiSimple hoặc MultiExtended. Thộc tính SelectedItems chứa các chỉ số của các dòng dữ liệu được chọn
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `]
    ]
  },
  LTUDWindows3: {
    title: `Điều khiển nâng cao`,
    index: [
      ['MenuStrip', 'LTUDWindows31', `
            <p><b>MenuStrip</b></p>
          <p><img src="./assets/img/LTUDWindows/Chap4/img29.png" alt=""> Cho phép lập trình viên thiết kế Menu trên Form với các điều
            khiển: ToolStripMenu (Menu con), ToolStripComboBox (ComboBox),
            ToolStrip (Gạch phân cách), ToolStripTextBox(TextBox)</p>
          <center>
            <p><b>Thuộc tính thường dùng của ToolStripMenu</b></p>
            <table class="table">
              <thead>
                <tr>
                  <th>Thuộc tính</th>
                  <th>Ý nghĩa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Check</td>
                  <td>Cho phép hiển thị CheckBox trước chuỗi.</td>
                </tr>
                <tr>
                  <td>CheckOnClick</td>
                  <td>Cho phép hiển thị CheckBox khi người dùng chọn vào chuỗi.</td>
                </tr>
                <tr>
                  <td>DisplayStyle</td>
                  <td>Cho phép vừa hiển thị Image vừa hiển thị chuỗi trên điều khiển nếu chọn ImageAndText.</td>
                </tr>
                <tr>
                  <td>DropDownItems</td>
                  <td>Collection chứa danh sách các Menu con.</td>
                </tr>
                <tr>
                  <td>Enabled</td>
                  <td>Cho phép vô hiện hóa điều khiển.</td>
                </tr>
                <tr>
                  <td>Image</td>
                  <td>Cho phép chọn hình ảnh để hiển thị.</td>
                </tr>
                <tr>
                  <td>ImageScaling</td>
                  <td>Cho phép thu nhỏ ảnh.</td>
                </tr>
                <tr>
                  <td>ShortcutKeyDisplayString</td>
                  <td>Chuỗi trình bày ứng với các phím tắt</td>
                </tr>
                <tr>
                  <td>ShowShortcutKeys</td>
                  <td>Cho phép trình bày chuỗi tổ hợp phím tắt.</td>
                </tr>
                <tr>
                  <td>Text</td>
                  <td>Chuỗi được hiển thị.</td>
                </tr>
                <tr>
                  <td>TextDirection</td>
                  <td>Chọn hình thức trình bày Menu: Horizotal (nằm
                    ngang), Vertical90 (thẳng đứng), Vertical270
                    (ngược).</td>
                </tr>
                <tr>
                  <td>TextImageRelation</td>
                  <td>Mặc định là Image nằm trước chuỗi, có thể tùy chọn lại cách hiển thị khác: TextBeforeImage, TextAboveImage,...</td>
                </tr>
                <tr>
                  <td>TooltipText</td>
                  <td>Chuỗi Tip được hiển thị khi người dùng di chuyển chuột đến điều khiển.</td>
                </tr>
                <tr>
                  <td>ShortcutKeys</td>
                  <td>Cho phép chọn phím tắt tương ứng với chức năng của điều khiển.
                    <br>
                    <center>
                      <img src="./assets/img/LTUDWindows/Chap4/img30.png" alt="" class="w-25">
                    </center>
                  </td>
                </tr>
                <tr>
                  <td>CheckedChange</td>
                  <td>Được kích hoạt khi trạng thái của CheckBox thay đổi.</td>
                </tr>
                <tr>
                  <td>Click</td>
                  <td>Được kích hoạt khi nhấn và điều khiển</td>
                </tr>
                <tr>
                  <td>DoubleClick</td>
                  <td>Được kịch hoạt khi nhấn hai lần liên tiếp vào điều khiển</td>
                </tr>
              </tbody>
            </table>
          </center>
          <p><b>Ví dụ</b>: Tạo menu như hình bên dưới, khi click vào bài 1, bài 2, bài 3 thì hiển thị các form khác</p>
          <center>
            <img class="w-50" src="./assets/img/LTUDWindows/Chap4/img31.png" alt="">
          </center>
          <pre>
private void bai1ToolStripMenuItem_Click(object sender, EventArgs e) {
  FrmToolTipGUI f = new FrmToolTipGUI();
  f.ShowDialog();
}

private void bai2ToolStripMenuItem_Click(object sender, EventArgs e) {
  frmTimeGUI1 f = new frmTimeGUI1();
  f.ShowDialog();
}
          </pre>
            `],
      ['ToolTip', 'LTUDWindows32', `
            <p><b>ToolTip</b></p>
          <p><img src="./assets/img/LTUDWindows/Chap4/img32.png" alt=""> Hiển thị cửa sổ nhỏ để diễn giải khi người dùng rê chuột vào
            điều khiển.</p>

          <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse321" role="button" aria-expanded="false" aria-controls="collapse321">
              Thuộc tính thường dùng
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse322" role="button" aria-expanded="false" aria-controls="collapse322">
              Phương thức thường dùng
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse333" role="button" aria-expanded="false" aria-controls="collapse333">
              Ví dụ
            </a>
          </p>
          <div>
            <div class="collapse" id="collapse321">
              <div class="card card-body">
                <h4>Thuộc tính thường dùng</h4>
                <center>
                  <img src="./assets/img/LTUDWindows/Chap4/img33.png" alt="" class="w-75">
                </center>
              </div>
            </div>
            <div class="collapse" id="collapse322">
              <div class="card card-body">
                <h4>Phương thức thường dùng</h4>
                <center>
                  <img class="w-100" src="./assets/img/LTUDWindows/Chap4/img34.png" alt="">
                </center>
              </div>
            </div>
            <div class="collapse" id="collapse323">
              <div class="card card-body">
                <h4>Ví dụ</h4>
                <p>Thiết kế form bên dưới (bài 1 trong phần menuStrip)</p>
                <center>
                  <img class="w-50" src="./assets/img/LTUDWindows/Chap4/img35.png" alt="">
                </center>
                <pre>
private void btnBang_Click(object sender, EventArgs e)
{
  int CoSo = int.Parse(txtCoSo.Text);
  int SoMu = int.Parse(txtSoMu.Text);
  int kq = 1;
  for (int i = 1; i <= SoMu; i++)
  kq *= CoSo;
  txtKetQua.Text = kq.ToString();
}
                </pre>

                
              </div>
            </div>
          </div>
            `],
      ['ContextMenuStrip', 'LTUDWindows33', `
            <p><b>ContextMenuStrip</b></p>
          <p><i>ContextMenuStrip</i> dùng để thiết kế <i>Menu</i> dạng <i>Popup</i> cho phép hiển thị điều khiển khi người dùng nhấn chuột phải vào đối tượng sử dụng điều khiển.</p>

          <center>
            <p><b>Thuộc tính thường dùng</b></p>
            <img src="./assets/img/LTUDWindows/Chap4/img36.png" class="w-75" alt="">
          </center>

          <p><b>Ví dụ</b>: Thiết kế form bên dưới</p>
                <center>
                  <img src="./assets/img/LTUDWindows/Chap4/img37.png" alt="">
                </center>
                <pre>
private void toanManHinhToolStripMenuItem_Click(object sender, EventArgs e)
{
  this.WindowState = FormWindowState.Maximized;
}
private void binhThuongToolStripMenuItem_Click(object sender, EventArgs e)
{
  this.WindowState = FormWindowState.Normal;
}
                </pre>
            `],
      ['Timer', 'LTUDWindows34', `
            <p><b>Timer</b></p>
          <p><img src="./assets/img/LTUDWindows/Chap4/img38.png" alt=""> dùng để lặp đi lặp lại một công việc với khoảng thời gian nhất định mà không làm ảnh hưởng đến các tiến trình khác</p>
          <center>
            <p><b>Thuộc tính thường dùng</b></p>
            <table class="table">
              <thead>
                <tr>
                  <th>Thuộc tính</th>
                  <th>Ý nghĩa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Enabled</td>
                  <td>Dùng để kích hoạt điều khiển</td>
                </tr>
                <tr>
                  <td>Interval</td>
                  <td>Là thuộc tính dùng để thiết lập khoảng thời gian được lặp đi lặp lại (tính bằng đơn vị miliseconds) một công việc nào đó. Ví dụ: cứ mỗi 1 giây thì thay đổi giờ (giờ : phút : giây) 1 lần thì thuộc tính Interval =1000.</td>
                </tr>
              </tbody>
            </table>
          </center>

          <br>
          <center>
            <p><b>Phương thức thường dùng</b></p>
            <table>
              <thead>
                <tr>
                  <th style="width: 20%;">Phương thức</th>
                  <th>Ý nghĩa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="width: 20%;">Start</td>
                  <td>Dùng để kích hoạt điều khiển</td>
                </tr>
                <tr>
                  <td style="width: 20%;">Stop</td>
                  <td>Dùng để ngừng kích hoạt điều khiển</td>
                </tr>
              </tbody>
            </table>
          </center>
          <br>
          <center>
            <p><b>Sự kiện thường dùng</b></p>
            <table>
              <thead>
                <tr>
                  <th style="width: 30%">Sự kiện</th>
                  <th>Ý nghĩa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="width: 30%">Timer_Tick</td>
                  <td>Hàm này được gọi khi sự kiện timer được kích hoạt và phụ thuộc vào thuôc tính interval của điều khiển. Ví dụ: interval =1000, thì cứ mỗi 1 giây thì hàm này sẽ được thực hiện 1 lần. Nếu interval = 2000, thì cứ 2 giây thì hàm này sẽ thực hiện 1 lần.</td>
                </tr>
              </tbody>
            </table>
          </center>

          <br>

          <p><b>Ví dụ</b>: Thiết kế form bên dưới</p>
          <center>
            <img src="./assets/img/LTUDWindows/Chap4/img39.png" alt="" class="w-50">
          </center>
          <pre>
int phut = 1;
int giay = 30;
Timer t;

public frmTimeGUI1()
{
  InitializeComponent();
  lblTimer.Text = String.Format("{0:00}:{1:00}“, phut, giay);
  t = new Timer();
  t.Tick += t_Tick;
  t.Interval = 1000;
  t.Start();
}

void t_Tick(object sender, EventArgs e)
{
  DateTime d = DateTime.Now;
  d.ToLocalTime();
  lblDongHo.Text = String.Format("{0:00}:{1:00}:{2:00}",
  d.Hour, d.Minute, d.Second);
}

private void timer1_Tick(object sender, EventArgs e){
if (giay > 0)
  giay--;
else
  if (phut == 1){
    giay = 60;
    phut = 0;
  }
    else
    timer1.Stop();
    lblTimer.Text = String.Format("{0:00}:{1:00}”,phut,giay);
  }

private void btnKetThuc_Click(object sender, EventArgs e)
{
  timer1.Stop();
  giay = 0;
  phut = 0;
  lblTimer.Text = String.Format("{0:00}:{1:00}” , phut, giay);
}


private void btnBatDau_Click(object sender, EventArgs e)
{
  timer1.Enabled = !timer1.Enabled;
  btnBatDau.Text = btnBatDau.Text == "Dừng" ? "Bắt đầu" : "Dừng";
}
          </pre>
            `]
    ]
  }
}