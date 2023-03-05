LTUDWindows2 = {
    LTUDWindows1: {
        title: 'Giới thiệu về C#',
        index: [
            ['C# là gì?', 'LTUDWindows11', `
                <p><b>C# là gì?</b></p>
        <p>
          <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse311" role="button"
            aria-expanded="false" aria-controls="collapse311">
            Khái niệm
          </a>
          <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse312" role="button"
            aria-expanded="false" aria-controls="collapse312">
            Lịch sử
          </a>
          <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse313" role="button"
            aria-expanded="false" aria-controls="collapse313">
            Những đặc trưng
          </a>
          <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse314" role="button"
            aria-expanded="false" aria-controls="collapse314">
            Ưu, nhược điểm
          </a>
        </p>

        <div class="collapse" id="collapse311">
          <div class="card card-body">
            <p><b>Khái niệm</b></p>
            <p>C# (đọc là “C thăng” hay “C sharp” (“xi-sáp”)) là một ngôn ngữ lập trình thuần hướng đối tượng được phát
              triển bởi Microsoft.</p>
          </div>
        </div>
        <div class="collapse" id="collapse312">
          <div class="card card-body">
            <p><b>Lịch sử</b></p>
            <ul>
              <li>C# ra đời năm 2000, được thiết kế chủ yếu bởi Anders Hejlsberg - kiến trúc sư phần mềm nổi tiếng với
                các sản phẩm Turbo Pascal, Delphi, . . .</li>
              <li>Được xây dựng dựa trên nền tảng của 2 ngôn ngữ C++ và Java. Do đó C# được miêu tả là ngôn ngữ có sự
                cân bằng giữa C++, Visual Basic, Delphi và Java.</li>
              <li>C# với sự hỗ trợ mạnh mẽ của .NET Framework giúp cho việc tạo một ứng dụng Windows Forms hay WPF
                (Windows Presentation Foundation), . . . trở nên rất dễ dàng.</li>
            </ul>
          </div>
        </div>
        <div class="collapse" id="collapse313">
          <div class="card card-body">
            <p><b>Những đặc trưng của ngôn ngữ C#</b></p>
            <ul>
              <li>Là ngôn ngữ <b>khá đơn giản</b>, chỉ <b>có khoảng 80</b> từ khóa và hơn <b>10 kiểu dữ liệu</b> được
                dựng sẵn.</li>
              <li>Cung cấp những đặc tính hướng thành phần (component-oriented) như là Property, Event</li>
              <li>C# <b>không khuyến khích sử dụng con trỏ</b> như trong C++ nhưng nếu muốn sử dụng thì phải đánh dấu
                đây là mã không an toàn (unsafe).</li>
              <li>C# có bộ <b>Garbage Collector</b> sẽ tự động thu gom vùng nhớ khi không còn sử dụng nữa.</li>
              <li>C# đã <b>loại bỏ đa kế thừa</b> trong C++ mà thay vào đó C# sẽ hỗ trợ thực thi giao diện
                <b>interface</b>.
              </li>
            </ul>
          </div>
        </div>
        <div class="collapse" id="collapse314">
          <div class="card card-body">
            <p><b>Ưu điểm</b></p>
            <ul>
              <li><b>Gần gũi</b> với các ngôn ngữ lập trình thông dụng (C++, Java, Pascal).</li>
              <li>Xây dựng dựa trên nền tảng của các ngôn ngữ lập trình mạnh nên thừa hưởng những ưu điểm của những ngôn
                ngữ đó.</li>
              <li>Cải tiến các khuyết điểm của C/C++ như con trỏ.</li>
              <li>Dễ tiếp cận, dễ phát triển.</li>
            </ul>
            <p><b>Nhược điểm</b></p>
            <ul>
              <li>C# là chỉ chạy trên nền Windows và có cài .NET Framework.</li>
              <li>Thao tác đối với phần cứng yếu hơn so với ngôn ngữ khác. Hầu hết phải
                dựa vào Windows.</li>
            </ul>
          </div>
        </div>
            `],
            ['Chương trình cơ bản đầu tiên', 'LTUDWindows12', `
                <p><b>Chương trình cơ bản đầu tiên</b></p>
                <pre>
                namespace HelloWorld
                {
                    // Chương trình cơ bản đầu tiên
                    class Program 
                    {
                    static void Main(string[] args)
                    {
                        Console.WriteLine("Hello World");
                        Console.ReadKey();
                    }
                    }
                }
                </pre>
            `],
            ['Nhập xuất cơ bản', 'LTUDWindows13', `
                <p><b>Nhập xuất cơ bản</b></p>
                <p>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse331" role="button" aria-expanded="false"
                    aria-controls="collapse331">
                    Lệnh xuất
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse332" role="button" aria-expanded="false"
                    aria-controls="collapse332">
                    Lệnh nhập
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse333" role="button" aria-expanded="false"
                    aria-controls="collapse333">
                    Bài tập
                </a>
                </p>
                <div class="collapse" id="collapse331">
                <div class="card card-body">
                    <p>Console.Write("Chào C#")</p>
                    <p>Console.WriteLine("Chào C#")</p>
                </div>
                </div>
                <div class="collapse" id="collapse332">
                <div class="card card-body">
                    <p>Console.Read();</p>
                    <p>Console.ReadLine();</p>
                    <p>Console.ReadKey();</p>
                    <p>Chú ý: các lệnh xuồng dòng: \n,</p>
                    <p>Console.Write(Environment.NewLine)</p>
                </div>
                </div>
                <div class="collapse" id="collapse333">
                <div class="card card-body">
                    <p><b>Bài tập</b></p>
                    <p>Nhập vào tên và năm sinh, hiển thị tên của tuổi của người dùng như hình bên dưới</p>
                    <center>
                    <img src="./assets/img/LTUDWindows/chap1/img3.png" alt="">
                    </center>
                </div>
                </div>
            `],
            ['Khai báo biến', 'LTUDWindows14', `
                <p><b>Khai báo biến</b></p>
                <p>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse341" role="button" aria-expanded="false"
                    aria-controls="collapse341">
                    Định nghĩa và lý do sử dụng biến
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse342" role="button" aria-expanded="false"
                    aria-controls="collapse342">
                    Cú pháp
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse343" role="button" aria-expanded="false"
                    aria-controls="collapse343">
                    Quy tắc đặt tên biến
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse344" role="button" aria-expanded="false"
                    aria-controls="collapse344">
                    Các từ khóa trong C#
                </a>
                </p>
                <div class="collapse" id="collapse341">
                <div class="card card-body">
                    <p><b>Định nghĩa và lý do sử dụng biến</b></p>
                    <p>Biến là một giá trị dữ liệu có thể thay đổi được.</p>
                    <p>Biến là tên gọi tham chiếu đến một vùng nhớ nào đó trong bộ nhớ.</p>
                    <p>Là thành phần cốt lõi của một ngôn ngữ lập trình.</p>
                    <p>Tại sao phải sử dụng biến?</p>
                    <ul>
                    <li>Lưu trữ dữ liệu và tái sử dụng.</li>
                    <li>Thao tác với bộ nhớ một cách dễ dàng</li>
                    </ul>
                </div>
                </div>
                <div class="collapse" id="collapse342">
                <div class="card card-body">
                    <p><b>Cú pháp</b></p>
                    <center>
                    <p><b>&lt; Kiểu dữ liệu &gt;</b> <b>&lt; Tên biến &gt;</b></p>
                    <ul>
                        <li><b>&lt; Kiểu dữ liệu &gt;</b> là: Kiểu dữ liệu cơ bản, kiểu dữ liệu có cấu trúc</li>
                        <li><b>&lt; Tên biến &gt;</b> là: Là tên do người dùng đặt (Phải tuân thủ theo quy tắc đặt tên biến)
                        </li>
                    </ul>
                    </center>
                </div>
                </div>
                <div class="collapse" id="collapse343">
                <div class="card card-body">
                    <p><b>Quy tắc đặt tên biến</b></p>
                    <ul>
                    <li>Tên biến là một chuỗi ký tự liên kết (<b>không có khoảng trắng</b>) và (<b>không chứa ký tự đặc
                        biệt</b>)</li>
                    <li>Tên biến <b>không được đặt bằng tiếng việt có dấu</b></li>
                    <li>Tên <b>không được bắt đầu bằng số</b></li>
                    <li>Tên biến <b>không được trùng nhau</b></li>
                    <li>Tên biến <b>không được trùng với từ khóa</b></li>
                    </ul>
                </div>
                </div>
                <div class="collapse" id="collapse344">
                <div class="card card-body">
                    <p><b>Các từ khóa trong C#</b></p>
                    <center>
                    <img src="./assets/img/LTUDWindows/Chap1/img4.png" alt="" class="w-100">
                    </center>
                </div>
                </div>
            `],
            ['Kiểu dữ liệu', 'LTUDWindows15', `
                <p>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse351" role="button" aria-expanded="false"
                    aria-controls="collapse351">
                    Kiểu dữ liệu
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse352" role="button" aria-expanded="false"
                    aria-controls="collapse352">
                    Một số kiểu dữ liệu cơ bản
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse353" role="button" aria-expanded="false"
                    aria-controls="collapse353">
                    Bài tập
                </a>
                </p>
                <div class="collapse" id="collapse351">
                <div class="card card-body">
                    <p><b>Kiểu dữ liệu</b></p>
                    <ul>
                    <li>Là tập hợp các <b>nhóm dữ liệu có cùng đặc tính, cách lưu trữ</b> và <b>thao tác xử lý</b> trên trường
                        dữ liệu đó.</li>
                    <li>Là một tín hiệu để trình biên dịch, nhận biết kích thước của một biến và khả năng của nó.</li>
                    <li>Là thành <b>phần cốt lõi</b> của một ngôn ngữ lập trình.</li>
                    </ul>
                </div>
                </div>
                <div class="collapse" id="collapse352">
                <div class="card card-body">
                    <p><b>Một số kiểu dữ liệu</b></p>

                    <center>
                    <img src="./assets/img/LTUDWindows/Chap1/img5.png" alt="" class="w-100">
                    </center>
                    <center>
                    <img src="./assets/img/LTUDWindows/Chap1/img6.png" alt="" class="w-100">
                    </center>
                </div>
                </div>
                <div class="collapse" id="collapse353">
                <div class="card card-body">
                    <p><b>Bài tập: Sửa các lỗi sau đây</b></p>
                    <pre>
                    static void Main(string[] args)
                    {
                        byte b = 256;
                        sbyte sb = 100;
                        int i = 10.5;
                        double d = 10.7;
                        float f = d;
                        String s = 'TraVinh';
                        char c = "a";
                        float f1 = null; // <span style="color:red;">Error</span>
                        Console.ReadKey();
                    }
                    </pre>
                </div>
                </div>
            `],
            ['Khai báo hằng', 'LTUDWindows16', `
                <p><b>Khai báo hằng</b></p>
                <p>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse361" role="button" aria-expanded="false"
                    aria-controls="collapse361">
                    Khái niệm
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse362" role="button" aria-expanded="false"
                    aria-controls="collapse362">
                    Cú pháp
                </a>
                </p>
                <div class="collapse" id="collapse361">
                <div class="card card-body">
                    <ul>
                    <li>Là một biến có <b>giá trị không thay đổi trong suốt chương trình.</b></li>
                    <li><b>Bắt buộc phải khởi tạo giá trị khi khai báo.</b></li>
                    <li><b>Để ngăn chặn việc gán giá trị khác vào biến.</b></li>
                    <li>Hằng làm cho chương trình <b>dễ đọc</b> hơn bằng cách biến những con số vô cảm thành những tên có
                        nghĩa.</li>
                    <li>Hằng giúp cho chương trình <b>dễ nâng cấp, dễ sửa chữa</b> hơn.</li>
                    <li>Hằng giúp cho việc <b>tránh lỗi</b> dễ dàng hơn.</li>
                    </ul>
                </div>
                </div>
                <div class="collapse" id="collapse362">
                <div class="card card-body">
                    <p><b>Cú pháp</b></p>
                    <center>
                    <p>
                        <b>const &lt;Kiểu dữ liệu&gt; &lt;Tên hằng&gt; = giá trị;</b>
                    </p>
                    </center>
                    <p>Ví dụ</p>
                    <pre>
                    const int a = 10;
                    </pre>

                    <pre>
                    static void Main(string[] args) 
                    {
                        const int a = 10;
                        Console.WriteLine("a = {0}", a);
                        Console.ReadKey();
                    }
                    </pre>
                </div>
                </div>
            `],
            ['Các loại toán tử', 'LTUDWindows17', `
                    <p><b>Các loại toán tử</b></p>
        <p>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse71" role="button" aria-expanded="false"
            aria-controls="collapse71">
            Khái niệm và các loại toán tử cơ bản
          </a>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse72" role="button" aria-expanded="false"
            aria-controls="collapse72">
            Toán tử toán học
          </a>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse73" role="button" aria-expanded="false"
            aria-controls="collapse73">
            Toán tử quan hệ
          </a>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse74" role="button" aria-expanded="false"
            aria-controls="collapse74">
            Toán tử logic
          </a>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse75" role="button" aria-expanded="false"
            aria-controls="collapse75">
            Toán tử khởi tạo và gán
          </a>
        </p>

        <div class="collapse" id="collapse71">
          <div class="card card-body">
            <p><b>Khái niệm và các loại toán tử cơ bản</b></p>
            <ul>
              <li>Là một công cụ để thao tác với dữ liệu.</li>
              <li>Một toán tử là một ký hiệu dùng để đại diện cho một thao tác cụ thể được thực hiện trên dữ liệu.</li>
            </ul>
            <p><b>Có 6 loại toán tử cơ bản:</b></p>
            <ul>
              <li>Toán tử toán học</li>
              <li>Toán tử quan hệ</li>
              <li>Toán tử logic</li>
              <li>Toán tử khởi tạo và gán</li>
              <li>Toán tử so sánh trên bit</li>
              <li>Toán tử khác</li>
            </ul>
          </div>
        </div>
        <div class="collapse" id="collapse72">
          <div class="card card-body">
            <p><b>Toán tử toán học</b></p>
            <p><b>Giả sử biến a có giá trị là 10 biến b có giá trị là 5</b></p>
            <center>
              <img src="./assets/img/LTUDWindows/Chap1/img7.png" class="w-100" alt="">
            </center>
          </div>
        </div>
        <div class="collapse" id="collapse73">
          <div class="card card-body">
            <p><b>Toán tử quan hệ</b></p>
            <p>Giả sử biến a có giá trị là 10 biến b có giá trị là 5</p>
            <center>
              <img src="./assets/img/LTUDWindows/Chap1/img8.png" alt="" class="w-100">
            </center>
          </div>
        </div>
        <div class="collapse" id="collapse74">
          <div class="card card-body">
            <p><b>Toán tử logic</b></p>
            <p>Giả sử mệnh đề A là đúng và mệnh đề B là sai</p>
            <center>
              <img src="./assets/img/LTUDWindows/Chap1/img9.png" alt="" class="w-100">
            </center>
          </div>
        </div>
        <div class="collapse" id="collapse75">
          <div class="card card-body">
            <p><b>Toán tử khởi tạo và gán</b></p>
            <p>Thường được sử dụng nhằm mục đích lưu lại giá trị cho một biến nào đó.</p>
            <center>
              <img src="./assets/img/LTUDWindows/Chap1/img10.png" alt="" class="w-100">
            </center>
          </div>
        </div>
            `],
            ['Ép kiểu C#', 'LTUDWindows18', `
                    <p><b>Ép kiểu</b></p>
        <p>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse381" role="button" aria-expanded="false"
            aria-controls="collapse381">
            Khái niệm
          </a>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse382" role="button" aria-expanded="false"
            aria-controls="collapse382">
            Các loại ép kiểu
          </a>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse383" role="button" aria-expanded="false"
            aria-controls="collapse383">
            Cú pháp
          </a>
        </p>

        <div class="collapse" id="collapse381">
          <div class="card card-body">
            <p><b>Khái niệm</b></p>
            <ul>
              <li>Ép kiểu là biến đổi dữ liệu thuộc kiểu dữ liệu này sang kiểu dữ liệu khác.</li>
              <li>Để chuyển dữ liệu sang một kiểu dữ liệu mong muốn phục vụ cho việc thao tác xử lý.</li>
              <li>Đưa dữ liệu về định dạng mà mình mong muốn (ví dụ chuyển kiểu chuỗi sang kiểu số để tính toán).</li>
            </ul>
          </div>
        </div>
        <div class="collapse" id="collapse382">
          <div class="card card-body">
            <p><b>Các loại ép kiểu</b></p>
            <p>Có 4 loại ép kiểu:</p>
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse3821" role="button"
                aria-expanded="false" aria-controls="collapse3821">
                Chuyển đổi kiểu ngầm định (implicit).
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse3822" role="button"
                aria-expanded="false" aria-controls="collapse3822">
                Chuyển đổi kiểu tường minh (explicit).
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse3823" role="button"
                aria-expanded="false" aria-controls="collapse3823">
                Sử dụng phương thức, lớp hỗ trợ sẵn
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse3824" role="button"
                aria-expanded="false" aria-controls="collapse3824">
                Người dùng tự định nghĩa kiểu chuyển đổi.
              </a>
            </p>
            <div class="collapse" id="collapse3821">
              <div class="card card-body">
                <p><b>Chuyển đổi kiểu ngầm định (implicit).</b></p>
                <ul>
                  <li>Việc chuyển đổi này được thực hiện bởi trình biên dịch.</li>
                  <li>Được thực hiện khi chuyển kiểu từ kiểu dữ liệu nhỏ sang kiểu dữ liệu lớn hơn, chuyển từ lớp con
                    đến lớp cha</li>
                </ul>
                <p><b>Ví dụ</b></p>
                <pre>
                  int intValue = 10;
                  long longValue = intValue;
                  float floatValue = 10.9f;
                  double doubleValue = floatValue; 
                </pre>
              </div>
            </div>
            <div class="collapse" id="collapse3822">
              <div class="card card-body">
                <p><b>Chuyển đổi kiểu tường minh (explicit).</b></p>
                <ul>
                  <li>Việc chuyển kiểu một cách rõ ràng và dùng từ khóa chỉ định chứ không dùng phương thức.</li>
                  <li>Thường được dùng để chuyển đổi giữa các kiểu dữ liệu có tính chất tương tự nhau (thường thì với
                    số).</li>
                  <li>Cú pháp ngắn gọn do không sử dụng phương thức.</li>
                  <li>Chỉ khi chúng ta biết rõ biến đó thuộc kiểu dữ liệu nào mới thực hiện chuyển đổi. Ngược lại có thể
                    lỗi khi chạy chương trình.</li>
                </ul>
                <p><b>Cú pháp: (&lt; kiểu dữ liệu &gt;) &lt; biến cần ép kiểu &gt;</b></p>
                <p><b>Ý nghĩa</b>: Ép kiểu của &lt; biến cần ép kiểu &gt; về &lt; kiểu dữ liệu &gt; nếu thành công sẽ
                  trả ra giá trị kết quả ngược lại sẽ báo lỗi chương trình. Đặc biệt đối với số:</p>
                <ul>
                  <li>Ta có thực hiện ép kiểu dữ liệu lớn hơn về kiểu dữ liệu nhỏ hơn mà không báo lỗi</li>
                  <li>Nếu dữ liệu cần ép kiểu vượt quá miền giá trị của kiểu dữ liệu muốn ép kiểu về thì chương trình sẽ
                    tự cắt bit cho phù hợp với khả năng chứa kiểu dữ liệu đó (cắt từ bên trái qua)</li>
                </ul>
                <p><b>Ví dụ</b></p>
                <pre>
                  int i = 300;
                  byte b = (byte)i;
                  Console.WriteLine("i = " + i);
                  Console.WriteLine("b = " + b);
                </pre>
                <center>
                  <img src="./assets/img/LTUDWindows/Chap1/img11.png" alt="">
                </center>
              </div>
            </div>
            <div class="collapse" id="collapse3823">
              <div class="card card-body">
                <p><b>Sử dụng phương thức, lớp hỗ trợ sẵn</b></p>
                <p>
                  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse38231" role="button"
                    aria-expanded="false" aria-controls="collapse38231">
                    Sử dụng phương thức Parse(), TryParse()
                  </a>
                  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse38232" role="button"
                    aria-expanded="false" aria-controls="collapse38232">
                    Dùng lớp hỗ trợ sẵn (Convert)
                  </a>
                </p>

                <div class="collapse" id="collapse38231">
                  <div class="card card-body">
                    <p><b>Sử dụng phương thức Parse(), TryParse()</b></p>
                    <p><b>Cú pháp: &lt;kiểu dữ liệu&gt;.Parse(&lt;dữ liệu cần chuyển đổi&gt;);</b></p>
                    <p><b>Ý nghĩa:</b></p>
                    <ul>
                      <li>Chuyển đổi một chuỗi sang một kiểu dữ liệu cơ bản tương ứng.</li>
                      <li>Phương thức trả về giá trị kết quả chuyển kiểu nếu chuyển kiểu thành
                        công. Ngược lại sẽ báo lỗi chương trình</li>
                    </ul>
                    <p><b>Ví dụ</b></p>
                    <pre>
                      string stringValue = "10";
                      int intValue = int.Parse(stringValue);
                      double d= double.Parse("10.9");
                      float f= float.Parse("10.9");
                      double d1= double.Parse(stringValue);
                      float f1= float .Parse(stringValue );
                      int i= int.Parse("10.9"); // Sai
                    </pre>
                  </div>
                </div>
                <div class="collapse" id="collapse38232">
                  <div class="card card-body">
                    <p><b>Dùng lớp hỗ trợ sẵn (Convert)</b></p>

                  </div>
                </div>

              </div>
            </div>
            <div class="collapse" id="collapse3824">
              <div class="card card-body">
                <p><b>Người dùng tự định nghĩa kiểu chuyển đổi</b></p>
              </div>
            </div>
          </div>
        </div>
        <div class="collapse" id="collapse383">
          <div class="card card-body">

          </div>
        </div>
            `],
            ['Bài tập', 'LTUDWindows19', `
                    <p><b>Bài tập</b></p>
        <ol>
          <li>Chương trình Hello World.</li>
          <li>Tính tổng hai số nguyên được nhập vào từ bán phím</li>
          <li>Thực hiện các phép toán cơ bản: cộng, trừ, nhân, chia với 2 số nguyên.</li>
          <li>Chương trình hoán vị giá trị của 2 số nguyên nhập từ bàn phím.</li>
          <li>Viết chương trình in bảng cửu chương n được nhập từ bàn phím.</li>
          <li>Viết chương trình tính giá trị trung bình của 4 số thực được nhập từ bàn phím.</li>
        </ol>
            `],
        ]
    },
    LTUDWindows2: {
        title: 'Cấu trúc điều khiển',
        index: [
            ['Cấu trúc rẽ nhánh If - Else', 'LTUDWindows21', `
            <p><b>Cấu trúc rẽ nhánh</b></p>
            <p><b>Xét 2 mệnh đề sau:</b></p>
            <ul>
              <li>Mệnh đề 1: "<span style="color: red;">Nếu</span> trời mưa <span style="color: red;">thì</span> đường trơn"
              </li>
              <li>Mệnh đề 2: "<span style="color: red;">Nếu</span> bạn rảnh <span style="color: red;">thì</span> đi chơi
                <span style="color:red;">ngược lại</span> ở nhà"
              </li>
            </ul>
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse411" role="button" aria-expanded="false"
                aria-controls="collapse411">
                Cấu trúc if - else (dạng thiếu)
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse412" role="button" aria-expanded="false"
                aria-controls="collapse412">
                Cấu trúc if - else (dạng đủ)
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse413" role="button" aria-expanded="false"
                aria-controls="collapse413">
                Cấu trúc if - else (biến thể)
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse414" role="button" aria-expanded="false"
                aria-controls="collapse414">
                Bài tập
              </a>
            </p>
            <div class="collapse" id="collapse411">
              <div class="card card-body">
                <p><b>Cú pháp: if ([Biểu thức điều kiện]) &lt; Câu lệnh thực hiện &gt;</b></p>
                <ul>
                  <li>if là từ khóa bắt buộc</li>
                  <li>&lt; Biểu thức điều kiện &gt; là biểu thức dạng boolean</li>
                  <li>&lt; Câu lệnh thực hiện &gt; là câu lệnh muốn thực hiện nếu &lt; Biểu thức điều kiện &gt; là đúng</li>
                </ul>
                <p><b>Ý nghĩa</b>: Nếu &lt; Biểu thức điều kiện &gt; trả về true thì thực hiện &lt; Câu lệnh thực hiện &gt;
                  ngược lại thì không làm gì cả</p>
                <p><b>Ví dụ</b></p>
                <pre>
                  int a = 5
                  if (a > 0)
                    Console.WriteLine("Day la so duong");
                </pre>
              </div>
            </div>
            <div class="collapse" id="collapse412">
              <div class="card card-body">
                <p><b>Cấu trúc if - else (dạng đủ)</b></p>
                <p><b>Cú pháp</b></p>
                <pre>
                  <p><b>if</b> &lt; Biểu thức điều kiện &gt;</p>
                  <p>&lt; Câu lệnh thực hiện 1 &gt;</p>
                  <p><b>else</b></p>
                  <p>&lt; Câu lệnh thực hiện 2 &gt;</p>
                </pre>
                <ul>
                  <li>if, else là từ khóa bắt buộc</li>
                  <li>&lt; Biểu thức điều kiện &gt; - là biểu thức dạng boolean (trả về true hoặc false)</li>
                  <li>&lt; Câu lệnh thực hiện 1 &gt; là câu lệnh muốn thực hiện nếu &lt; Biểu thức điều kiện &gt; là đúng
                  </li>
                  <li>&lt; Câu lệnh thực hiện 2 &gt; là câu lệnh muốn thực hiện nếu &lt; Biểu thức điều kiện &gt; là sai
                  </li>
                </ul>
                <p><b>Ý nghĩa</b>: Nếu &lt;Biểu thức điều kiện&gt; trả về true thì thực hiện &lt;Câu lệnh thực hiện 1&gt;
                  ngược lại thì thực hiện &lt;Câu lệnh thực hiện 2&gt;</p>
                <p><b>Ví dụ</b></p>
                <pre>
                  int a = 5;
                  if (a>0) 
                    Console.WriteLine("Day la so duong");
                  else 
                    Console.WriteLine("Day la so am")
                </pre>
                <br>
                <pre>
                    f &lt; Biểu thức điều kiện 1 &gt;
                    {
                      if &lt; Biểu thức điều kiện 2 &gt;
                    {
                      &lt; Câu lệnh thực hiện 1 &gt;
                    }
                    else
                    {
                      &lt; Câu lệnh thực hiện 2 &gt;
                    }
                      &lt; Câu lệnh thực hiện 3 &gt;
                    }
                    else
                    {
                      If &lt; Biểu thức điều kiện 3 &gt;
                    {
                      &lt; Câu lệnh thực hiện 4 &gt;
                    }
                      If &lt; Biểu thức điều kiện 4 &gt;
                    {
                      &lt; Câu lệnh thực hiện 5 &gt;
                    }
                      &lt; Câu lệnh thực hiện 6 &gt;
                    }
    
                </pre>
              </div>
            </div>
            <div class="collapse" id="collapse413">
              <div class="card card-body">
                <p><b>Cấu trúc if - else (biến thể)</b></p>
                <pre>
                  if &lt; Biểu thức điều kiện 1 &gt;
                  {
                  &lt; Câu lệnh thực hiện 1 &gt; }
                  else if &lt; Biểu thức điều kiện 2 &gt;
                  {
                  &lt; Câu lệnh thực hiện 2 &gt;}
                  else
                  {
                  &lt; Câu lệnh thực hiện 3 &gt;
                  }
                </pre>
              </div>
            </div>
            <div class="collapse" id="collapse412">
              <div class="card card-body">
                <p><b>Bài tập</b></p>
                <ol>
                  <li>Nhập hai số và kiểm tra xem hai số đó có bằng nhau không?</li>
                  <li>Kiểm tra một số là chẵn hay lẻ?</li>
                  <li>Kiểm tra số dương, số âm?</li>
                  <li>Kiểm tra năm nhuận hay không?</li>
                  <li>Nhập tuổi của một người, kiểm tra và thông báo xem người đó có đủ độ tuổi bầu cử không?</li>
                  <li>Nhập một số m, kiểm tra xem số đó là lớn hơn, nhỏ hơn hoặc bằng 0 và in ra giá trị tương ứng của một số n là 1, -1 hoặc 0</li>
                  <li>Tìm số lớn nhất trong 4 số được nhập từ bàn phím.</li>
                  <li>Nhập điểm thi ba môn Toán, Lý, Hóa của một thí sinh, kiểm tra xem thí sinh đó có trúng tuyển không ? điểm trung bình &gt;= 5 và không có điểm 0 thí trúng tuyển.</li>
                  <li>Viết chương trình giải phương trình bậc hai.</li>
                  <li>Nhập nhiệt độ và in ra thông báo tương ứng.</li>
                  <li>Nhập vào 3 canh của tam giác và thông báo đó là tam giác loại gì (cân, đều, thường).</li>
                </ol>
              </div>
            </div>
            `],
            ['Cấu trúc rẽ nhánh Switch - Case', 'LTUDWindows22', `
            <p><b>Cấu trúc rẽ nhánh Switch - case</b></p>
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse421" role="button" aria-expanded="false" aria-controls="collapse421">
                Cú pháp
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse422" role="button" aria-expanded="false" aria-controls="collapse422">
                Ví dụ
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse423" role="button" aria-expanded="false" aria-controls="collapse423">
                Bài tập
              </a>
            </p>
            <div class="collapse" id="collapse421">
              <div class="card card-body">
                <p><b>Cú pháp</b></p>
                <pre>
                  <b>Switch (&lt; biểu thức &gt;)</b>
                  {
                    <b>case</b> &lt; giá trị thứ 1 &gt; : &lt; câu lệnh thứ 1 &gt;;
                    <b>break;</b>
                    <b>case</b> &lt; giá trị thứ 2 &gt; : &lt; câu lệnh thứ 2 &gt;;
                    <b>break;</b>
                    ...
                    <b>case</b> &lt; giá trị thứ n &gt; : &lt; câu lệnh thứ n &gt;;;
                    <b>break;</b>
                    <b>default:</b> &lt; câu lệnh mặc định &gt;
                    <b>break;</b>
                  }
                </pre>
              </div>
            </div>
            <div class="collapse" id="collapse422">
              <div class="card card-body">
                <p><b>Ví dụ</b></p>
                <pre>
                  int k = 1;
                  Switch (k) {
                    case 1: 
                      Console.WriteLine("Một"); break;
                    case 2: 
                      Console.WriteLine("Hai"); break;
                    case 3: 
                      Console.WriteLine("Ba"); break;
                    case 4: 
                      Console.WriteLine("Khác"); break;
                  } 
                </pre>
              </div>
            </div>
            <div class="collapse" id="collapse423">
              <div class="card card-body">
                <p><b>Bài tập</b></p>
                <ol>
                  <li>Nhập vào 1 ký tự, kiểm tra đó là nguyên âm, phụ âm</li>
                  <li>Nhập một số bất kỳ có 1 chữ và hiển thị số bằng chữ tương ứng.</li>
                  <li>Nhập một số bất kỳ có 3 chữ và hiển thị số bằng chữ tương ứng.</li>
                  <li>Nhập số tháng bất kỳ và hiển thị số ngày của tháng đó</li>
                  <li>Viết một chương trình C# hiển thị một menu có các lựa chọn để tính diện tích các hình tròn, hình chữ nhật, hình tam giác tương ứng với dữ liệu đã nhập.</li>
                  <li>Viết một chương trình C# hiển thị một menu có các lựa chọn để thực hiện các phép toán cơ bản của hai số a, b</li>
                </ol>
              </div>
            </div>
            `],
            ['Vòng lặp For', 'LTUDWindows23', `
            <p><b>Vòng lặp for</b></p>
            <pre>
              for ([Khởi tạo]; [Điều kiện lặp]; [Bước lặp lại]) {
                // Khối lệnh được lặp lại. Có thể bỏ trống
              }
            </pre>
            <p>Các phần [Khởi tạo]; [Điều kiện lặp]; [Bước lặp lại] có thể để trống</p>
    
            <p>
              <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse431" role="button" aria-expanded="false" aria-controls="collapse431">
                Ví dụ 1. In bảng cửu chương 5
              </a>
              <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse432" role="button" aria-expanded="false" aria-controls="collapse432">
                Ví dụ 2. In hình chữ nhật dấu "*"
              </a>
              <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse433" role="button" aria-expanded="false" aria-controls="collapse433">
                Ví dụ 3. In hình tam giác dấu "*"
              </a>
            </p>
            <div class="collapse" id="collapse431">
              <div class="card card-body">
                <pre>
                  int n = 5;
                  for (int i = 1; i &lt;= 10; i++) 
                    Console.WriteLine("{0}x{1}={2}", i, n, i*n);
                </pre>
                <center>
                  <img src="./assets/img/LTUDWindows/Chap1/img12.png" alt="">
                </center>
              </div>
            </div>
            <div class="collapse" id="collapse432">
              <div class="card card-body">
                <p><b>Ví dụ 2. In hình chữ nhật dấu "*"</b></p>
                <pre>
                  int n = 10;
                  int m = 10; 
                  for (int i = 1; i &lt;= n; i++) { 
                    if (int j == 1 || i == n || j == 1 || j == m) {
                      Console.ForegroundColor = ConsoleColor.Blue;
                      Console.Write("{0,3}", "*");
                    }
                    else {
                      Console.Write("{0,3}", "");
                    }
                    Console.WriteLine()
                  }
                </pre>
              </div>
            </div>
            <div class="collapse" id="collapse433">
              <div class="card card-body">
                <pre>
                  int n = 10;
                  int m = 10;
                  for (int i = 1; i &lt;= n; i++){
                    for (int j = 1; j &lt;= m; j++) {
                      if (i == n || j == 1 || j == i)
                      {
                        Console.ForegroundColor = ConsoleColor.Blue;
                        Console.Write(" * ");
                      }
                      else
                      Console.Write(" ");
                    }
                    Console.WriteLine();
                  }
                </pre>
              </div>
            </div>
            `],
            ['Vòng lặp While', 'LTUDWindows24', `
            <p><b>Vòng lặp While</b></p>
        <p><b>Cú pháp</b></p>
        <pre>
          while (&lt; Điều kiện lặp &gt;) {
            // Khối lệnh lặp lại
          }
        </pre>
        <ul>
          <li>Điều kiện lặp là một biểu thức logic bắt buộc phải có với kết quả trả về bắt buộc là true hoặc false.</li>
          <li>Từ khóa while biểu thị đây là một vòng lặp while. Các câu lệnh trong khối lệnh sẽ được lặp lại đến khi không còn thỏa mãn điều kiện lặp sẽ kết thúc vòng lặp while.</li>
        </ul>
        <p>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse441" role="button" aria-expanded="false" aria-controls="collapse441">
            Ví dụ 1: in bảng cửu chương 8
          </a>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse441" role="button" aria-expanded="false" aria-controls="collapse442">
            Ví dụ 2: Tìm số năm để tuổi cha gấp đôi tuổi con, biết năm nay ba 35 tuổi, con 5 tuổi
          </a>
        </p>
        <div class="collapse" id="collapse441">
          <div class="card card-body">
           <p><b>Ví dụ 1: in bảng cửu chương 8</b></p>
           <pre>
            int n = 8;
            int i=1;
            while (i &lt;= 10)
            {
              Console.WriteLine("{0} x {1} = {2}” ,n,i,n*i);
              i++;
            }
           </pre>
           <center>
            <img src="./assets/img/LTUDWindows/Chap1/img15.png" alt="">
           </center>
          </div>
        </div>
        <div class="collapse" id="collapse442">
          <div class="card card-body">
            <p><b>Ví dụ 2: Tìm số năm để tuổi cha gấp đôi tuổi con, biết năm nay ba 35 tuổi, con 5 tuổi</b></p>
            <center>
              <img src="./assets/img/LTUDWindows/Chap1/img16.png" alt="">
            </center>
          </div>
        </div>
            `],
            ['Vòng lặp Do - While', 'LTUDWindows25', `
            <p><b>Vòng lặp do-while</b></p>
            <pre>
              do {
                // khối lệnh lặp lại
                } while (&lt;Điều kiện lặp&gt;);
            </pre>
            <ul>
              <li>Điều kiện lặp là một biểu thức logic bắt buộc phải có với kết quả trả về bắt
                buộc là true hoặc false.</li>
              <li>Từ khóa do while biểu thị đây là một vòng lặp do while. Các câu lệnh trong
                khối lệnh sẽ được lặp lại đến khi không còn thỏa mãn điều kiện lặp sẽ kết
                thúc vòng lặp do while</li>
            </ul>
            `],
            ['Bài tập', 'LTUDWindows26', `
            <p><b>Bài tập</b></p>
            <ol>
              <li>Tính tổng từ 1 đến n với n được nhập từ bàn phím.</li>
              <li>In bảng cửu chương n, với n được nhập từ bàn phím.</li>
              <li>Kiểm tra số nguyên tố.</li>
              <li>In số nguyên tố từ 1 đến n, với n được nhập từ bàn phím.</li>
              <li>Hiển thị và tính tổng các số lẻ từ 1 đến n, với n được nhập 
                từ bàn phím
              </li>
              <li>Hiển thị và tính tổng các số chẵn từ 1 đến n, với n được nhập từ bàn phím</li>
              <li>Tính giai thừa của n, với n được nhập từ bán phím.</li>
              <li>Tính tổng dãy số: 1 - x2/2! + x4/4! - ...</li>
              <li>Tính tổng dãy số: 1/1 + 1/2 + 1/3 + 1/4 + ...</li>
              <li>Tính tổng dãy số 9 + 99 + 999 + ...</li>
              <li>Kiểm tra số hoàn hảo (Số hoàn hảo là số có tổng các ước số dương (ngoại trừ chính số đó) bằng chính số đó).</li>
              <li>Tìm số hoàn hảo trong một dãy (từ n đến m) đã cho</li>
              <li>Vẽ tam giác Pascal trong C#</li>
              <li>In dãy Fibonacci trong C#</li>
              <li>Tìm ước số chung lớn nhất (USCLN)</li>
              <li>Tìm bội số chung nhỏ nhất (BSCNN)</li>
            </ol>
            `]
        ]
    },
    LTUDWindows3: {
        title: 'Mảng trong C#',
        index: [
            ['Mảng 1 chiều', 'LTUDWindows31', `
            <p>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse511" role="button" aria-expanded="false" aria-controls="collapse511">
            Các khái niệm cơ bản
          </a>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse512" role="button" aria-expanded="false" aria-controls="collapse512">
            Cú pháp
          </a>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse513" role="button" aria-expanded="false" aria-controls="collapse513">
            Khởi tạo và gán giá trị trực tiếp cho mảng 1 chiều
          </a>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse514" role="button" aria-expanded="false" aria-controls="collapse514">
            Một số thuộc tính và phương thức đặc trưng
          </a>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse515" role="button" aria-expanded="false" aria-controls="collapse515">
            Dòng lặp foreach
          </a>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse516" role="button" aria-expanded="false" aria-controls="collapse516">
            Bài tập
          </a>

        </p>
        <div class="collapse" id="collapse511">
          <div class="card card-body">
            <p><b>Một số khái niệm</b></p>
            <ul>
              <li>Tập hợp các đối tượng có cùng kiểu dữ liệu.</li>
              <li>Mỗi đối tượng trong mảng được gọi là một phần tử.</li>
              <li>Các phần tử phân biệt với nhau bằng chỉ số phần tử. Trong C# chỉ số phần tử là các số nguyên không âm và bắt đầu từ 0 1 2 3...</li>
              <li>Các phần tử trong mảng dùng chung một tên và được truy xuất thông qua chỉ số phần tử.</li>
              <li>Một mảng cần có giới hạn số phần tử mà mảng có thể chứa.</li>
              <li>Phải cấp phát vùng nhớ trước khi sử dụng mảng.</li>
              <li>Vị trí ô nhớ của các phần tử trong mảng được cấp phát liền kề nhau.</li>
            </ul>
          </div>
        </div>
        <div class="collapse" id="collapse512">
          <div class="card card-body">
            <p><b>Cú pháp</b></p>
            <pre>
              <center>&lt; kiểu dữ liệu &gt; [] &lt; tên mảng &gt;;</center>
            </pre>
            <ul>
              <li>&lt; kiểu dữ liệu &gt; là kiểu dữ liệu của các phần tử trong mảng</li>
              <li>&lt; tên mảng &gt; là tên của mảng, cách đặt tên mảng cũng như cách đặt tên biến</li>
              <li>Cặp dấu [] là ký hiệu cho khai báo mảng 1 chiều</li>
            </ul>
            <p>Ví dụ</p>
            <pre>
              <b>string</b>[] a = <b>new string</b>[3];
            </pre>
          </div>
        </div>
        <div class="collapse" id="collapse513">
          <div class="card card-body">
            <p><b>Khởi tạo và gán giá trị trực tiếp cho mảng 1 chiều</b></p>
            <p><b>Cú pháp</b></p>
            <pre>
              &lt; kiểu dữ liệu &gt; [] &lt; tên mảng &gt; = {
                &lt; giá trị 1 &gt;, &lt; giá trị 2 &gt;, ... , &lt; giá trị n &gt;,
              }
            </pre>
            <p><b>Hoặc</b></p>
            <pre>
              &lt; kiểu dữ liệu &gt; [] &lt; tên mảng &gt; = new &lt; kiểu dữ liệu &gt; [] {&lt; giá trị 1 &gt;, ... , &lt; giá trị n &gt; }
            </pre>
            <p><b>Ví dụ</b></p>
            <pre>
              int[] intArray =  {3, 9, 10};
              string[] S = new string[] {"KTCN", "DHTV"};
            </pre>
            
          </div>
        </div>
        <div class="collapse" id="collapse514">
          <div class="card card-body">
            <p><b>Một số thuộc tính và phương thức đặc trưng</b></p>
            <center>
              <img src="./assets/img/LTUDWindows/Chap1/img17.png" class="w-100" alt="">
            </center>
          </div>
        </div>
        <div class="collapse" id="collapse515">
          <div class="card card-body">
            <p><b>Dòng lặp foreach</b></p>
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse5151" role="button" aria-expanded="false" aria-controls="collapse5151">
                Một số vấn đề cơ bản
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse5152" role="button" aria-expanded="false" aria-controls="collapse5152">
                Cú pháp
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse5153" role="button" aria-expanded="false" aria-controls="collapse5153">
                Ví dụ: Tính tổng các phần tử trong mảng
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse5154" role="button" aria-expanded="false" aria-controls="collapse5154">
                Bài tập
              </a>
            </p>
            <div class="collapse" id="collapse5151">
              <div class="card card-body">
                <p><b>Một số vấn đề</b></p>
                <ul>
                  <li><b>foreach</b> không duyệt mảng hoặc tập hợp thông qua chỉ số phần tử như cấu trúc lặp for</li>
                  <li><b>foreach</b> duyệt tuần tự các phần tử trong mảng hoặc tập hợp</li>
                  <li><b>foreach</b> chỉ dùng để duyệt mảng hoặc tập hợp ngoài ra không thể làm gì khác</li>
                </ul>
              </div>
            </div>
            <div class="collapse" id="collapse5152">
              <div class="card card-body">
                <p><b>Cú pháp</b></p>
                <pre>
                  foreach (&lt; kiểu dữ liệu &gt; &lt; tên biến &gt; in &lt; tên mảng hoặc tập hợp &gt;) {
                    // Code xử lý
                  }
                </pre>
                <ul>
                  <li>Các từ khóa foreach, in là từ khóa bắt buộc</li>
                  <li>&lt; kiểu dữ liệu &gt; là kiểu dữ liệu của các phần trong mảng hoặc tập hợp</li>
                  <li>&lt; kiểu dữ liệu &gt; là tên 1 biến tạm đại diện cho phần tử đang xét khi duyệt mảng hoặc tập hợp.</li>
                  <li>&lt; tên mảng hoặc tập hợp &gt; là tên của mảng hoặc tập hợp cần duyệt</li>
                </ul>
              </div>
            </div>
            <div class="collapse" id="collapse5153">
              <div class="card card-body">
                <p><b>Ví dụ: TÍnh tổng các phần tử trong mảng</b></p>
                <pre>
                  static void Main(string[] args) {
                    int[] intArray = {1,5,2,4,6};
                    int Sum = 0;
                    Console.Write("Tinh tong cac phan tu trong mang: ");
                    foreach (int item in Array) 
                    {
                      Console.Write("{0,3}", item);
                      Sum += item;
                    }
                    Console.WriteLine("\n Tong cac phan tu tren la: "+Sum);
                    Console.ReadKey();
                  }
                </pre>
                <center>
                  <img src="./assets/img/LTUDWindows/Chap1/img18.png" alt="">
                </center>
              </div>
            </div>
            <div class="collapse" id="collapse5153">
              <div class="card card-body">
                <ol>
                  <li>Nhập và xuất các phần tử mảng 1 chiều.</li>
                  <li>Nhập và xuất (theo chiều đảo ngược từ cuối mảng về đầu mảng) các phần tử mảng 1 chiều.</li>
                  <li>Tính tổng các phần tử mảng.</li>
                  <li>Sao chép mảng trong C#</li>
                  <li>Trộn (ghép) hai mảng thành 1 mảng</li>
                  <li>Đếm số lần xuất hiện của từng phần tử trong mảng</li>
                  <li>Tìm phần tử lớn nhất, nhỏ nhất trong mảng</li>
                  <li>Chia mảng thành mảng chẵn, mảng lẻ trong C#</li>
                  <li>Sắp xếp mảng theo thứ tự tăng dần trong C#</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
            `],
            ['Mảng 2 chiều', 'LTUDWindows32', `
            <p><b>Mảng 2 chiều</b></p>
        <p>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse521" role="button" aria-expanded="false" aria-controls="collapse521">
            Một số khái niệm và đặc trưng cơ bản
          </a>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse522" role="button" aria-expanded="false" aria-controls="collapse522">
            Cú pháp
          </a>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse523" role="button" aria-expanded="false" aria-controls="collapse523">
            Ví dụ
          </a>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse524" role="button" aria-expanded="false" aria-controls="collapse524">
            Cách duyệt mảng 2 chiều
          </a>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse525" role="button" aria-expanded="false" aria-controls="collapse525">
            Bài tập
          </a>
        </p>
        <div class="collapse" id="collapse521">
          <div class="card card-body">
            <p>Mảng 2 chiều được hình dung như một bảng có m dòng và n cột với một số đặc trưng sau:</p>
            <ul>
              <li>Mảng 2 chiều mang những đặc trưng cơ bản của một mảng bình thường Các phần tử trong mảng 2 chiều được truy xuất thông qua 2 chỉ số phần tử (tạm gọi là chỉ số dòng và chỉ số cột)</li>
              <li>Hình ảnh minh họa mảng 2: Giả sử ta có mảng A có 5 dòng và 8 cột
                <br>
                <center>
                  <img src="./assets/img/LTUDWindows/Chap1/img19.png" alt="">
                </center>
              </li>
            </ul>
          </div>
        </div>
        <div class="collapse" id="collapse522">
          <div class="card card-body">
            <p><b>Cú pháp</b></p>
            <pre>
              &lt; kiểu dữ liệu &gt; [,] &lt; tên mảng &gt;
            </pre>
            <ul>
              <li>&lt; kiểu dữ liệu &gt; là kiểu dữ liệu của các phần tử trong mảng</li>
              <li>Cặp dấu [,] là ký hiệu cho khai báo mảng 2 chiều</li>
              <li>&lt; tên mảng &gt; là tên của mảng, cách đặt tên mảng cũng như cách đặt tên biến</li>
            </ul>
            <p>Để sử dụng được mảng ta phải khởi tạo giá trị hoặc cấp phát vùng nhớ cho mảng.</p>
          </div>
        </div>
        <div class="collapse" id="collapse523">
          <div class="card card-body">
            <p><b>Ví dụ</b></p>
            <pre>
              string[,] S = new string[2,3];
            </pre>
            Khai báo vào gán giá trị cho mảng 2 chiều
            <pre>
              &lt; kiểu dữ liệu &gt; [,] &lt; tên mảng &gt; =
              {
                { &lt; giá trị dòng 1 cột 1 &gt;, ..., &lt; giá trị dòng 1 cột 2 &gt; },
                ...
                { &lt; giá trị dòng m cột 1 &gt;, ..., &lt; giá trị dòng m cột n &gt; }
              };
            </pre>
            <p>Ví dụ</p>
            <pre>
              int[,] IntArray = &#123;&#123;1,2&#125;, &#123;3,4&#125;, &#123;5,6&#125;; 
            </pre>
          </div>
        </div>
        <div class="collapse" id="collapse524">
          <div class="card card-body">
            <p><b>Cách duyệt mảng 2 chiều</b></p>
            <ul>
              <li>Tương tự như ý tưởng duyệt mảng 1 chiều</li>
              <li>Nhưng do mảng 2 chiều có 2 chỉ số là chỉ số dòng và chỉ số cột nên chúng ta cần 2 vòng lặp lồng vào nhau.</li>
            </ul>
            <p><b>Ví dụ 1</b></p>
            <pre>
              int[,] intArray = new int [9, 10];
              for (int i = 0; i &lt; 9; i++) {
                for (int j = 0; j &lt; 10; j++) {
                  Console.Write(IntArray[i, j]);
                }
              }
            </pre>
            <p><b>Ví dụ 2</b></p>
            <center>
              <img src="./assets/img/LTUDWindows/Chap1/img20.png" alt="">
            </center>
          </div>
        </div>
        <div class="collapse" id="collapse525">
          <div class="card card-body">
            <ol>
              <li>Nhập và Xuất mảng hai chiều trong C#</li>
              <li>Cộng hai ma trận trong C#</li>
              <li>Trừ ma trận trong C#</li>
              <li>Nhân hai ma trận</li>
              <li>Tìm ma trận chuyển vị trong C#</li>
              <li>Tính tổng các phần tử trên đường chéo chính của ma trận</li>
              <li>Tính tổng các phần tử trên đường chéo phụ của ma trận trong C#</li>
              <li>Tính tổng các hàng, các cột của ma trận</li>
            </ol>
          </div>
        </div>
            `]
        ]
    }
}