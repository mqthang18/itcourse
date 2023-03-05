LTUDWindows3 = {
  LTUDWindows1: {
    title: `Tổng quan về hướng đối tượng`,
    index: [
      ['Lịch sử phát triển phương pháp lập trình', 'LTUDWindows11', `
                <p><b>Lịch sử phát triển phương pháp lập trình</b></p>
                <ol>
                <li><b>Lập trình không cấu trúc:</b> Tất cả mã lệnh chỉ nằm trong hàm main (Hợp ngữ) gây ra nhiều khuyết điểm:
                    Không tái sử dụng được các hàm, khó phát triển các ứng dụng lớn</li>
                <li><b>Lập trình có cấu trúc:</b> Chia một chương trình lớn thành nhiều hàm con, nhược điểm dữ liệu và xử lý
                    tách rời</li>
                <li><b>Lập trình hướng đối tượng:</b> Xây dựng phương pháp lập trình trực quan, mô tả trung thực hệ thống
                    trong thực tế.</li>
                </ol>
            `],
      ['Các khái niệm cơ bản', 'LTUDWindows12', `
                <p><b>Các khái niệm cơ bản</b></p>
                <p>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse321" role="button" aria-expanded="false"
                    aria-controls="collapse321">
                    Lớp
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse322" role="button" aria-expanded="false"
                    aria-controls="collapse322">
                    Đối tượng
                </a>
                </p>
                <div class="collapse" id="collapse321">
                <div class="card card-body">
                    <p><b>Lớp</b></p>
                    <ul>
                    <li>Là tập hợp các đối tượng có đặc tính tương tự nhau.</li>
                    <li>Lớp gồm 2 thành phần: thuộc tính, phương thức.</li>
                    <li>Dùng để định nghĩa kiểu dữ liệu mới.</li>
                    </ul>
                </div>
                </div>
                <div class="collapse" id="collapse322">
                <div class="card card-body">
                    <p><b>Đối tượng</b></p>
                    <ul>
                    <li>Là một thực thể (người, vật,....)</li>
                    <li>Một đối tượng bao gồm 2 thông tin: Thuộc tính (mã số, họ tên, ngày sinh,), phương thức (nói, đi, ăn,
                        uống).</li>
                    </ul>
                </div>
                </div>
            `],
      ['Sự khác nhau giữa Lớp và đối tượng', 'LTUDWindows13', `
                <p><b>Sự khác nhau giữa Lớp và đối tượng</b></p>
                <p>Lớp là một khuôn mẫu (nói chung chung), đối tượng là thể hiện cụ
                thể dựa trên khuôn mẫu đó.</p>
                <p>Ví dụ</p>
                <ul>
                <li><b>Lớp mèo</b>
                    <br>
                    Thuộc tính: có chân, mắt, đuôi, chiều cao, cân nặng.
                    <br>
                    Phương thức: kêu, đi, ăn, ngủ
                </li>
                <li><b>Đối tượng</b> là một con mèo cụ thể</li>
                </ul>
    
            `],
      ['Đặc điểm của hướng đối tượng', 'LTUDWindows14', `
            <p><b>Đặc điểm của hướng đối tượng</b></p>
            <p>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse341" role="button" aria-expanded="false" aria-controls="collapse341">
                    Tính đóng gói
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse342" role="button" aria-expanded="false" aria-controls="collapse342">
                    Tính trừu tượng
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse343" role="button" aria-expanded="false" aria-controls="collapse343">
                    Tính kế thừa
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse344" role="button" aria-expanded="false" aria-controls="collapse344">
                    Tính đa hình
                </a>
            </p>
            <div class="collapse" id="collapse341">
            <div class="card card-body">
                <p><b>Tính đóng gói</b></p>
                <ul>
                <li>Các dữ liệu và phương thức có liên quan với nhau được đóng gói thành các lớp để tiện cho việc quản lý và sử dụng.</li>
                <li>Đóng gói để che giấu các thông tin và chi tiết cài đặt bên trong để bên ngoài không thể nhìn thấy</li>
                </ul>
            </div>
            </div>
            <div class="collapse" id="collapse342">
            <div class="card card-body">
                <p><b>Tính trừu tượng</b></p>
                <p>việc thiết kế các đối tượng cần rút tỉa ra những đặc trưng
                chung của chúng rồi trừu tượng thành các interface và thiết kế xem chúng sẽ tương tác với nhau như thế nào.</p>
            </div>
            </div>
            <div class="collapse" id="collapse343">
            <div class="card card-body">
                <p><b>Tính kế thừa</b></p>
                <p>Lớp cha có thể chia sẽ dữ liệu và phương thức cho các lớp con, giúp chương trình ngắn gọn.</p>
            </div>
            </div>
            <div class="collapse" id="collapse344">
            <div class="card card-body">
                <p><b>Tính đa hình</b></p>
                <p>Là hiện tượng các đối tượng thuộc các lớp khác nhau có thể hiểu cùng một thông điệp theo các cách khác nhau</p>
            </div>
            </div>
            `]
    ]
  },
  LTUDWindows2: {
    title: `Class trong C#`,
    index: [
      ['Giới thiệu Class', 'LTUDWindows21', `
                <p><b>Giới thiệu Class</b></p>
                <ul>
                <li><b>Class</b> có các thành phần như:
                    <ul>
                    <li><b>Thuộc tính</b>: là các thành phần dữ liệu hay còn gọi là các biến</li>
                    <li><b>Phương thức</b>: là các hàm thành phần thể hiện các hành vi của một đối tượng thuộc lớp (Phương thức khởi tạo, Phương thức hủy)</li>
                    </ul>
                </li>
                <li><b>Class</b> là một kiểu dữ liệu mới do người dùng tự định nghĩa</li>
                </ul>
            `],
      ['Cú pháp khai báo', 'LTUDWindows22', `
                <p><b>Cú pháp khai báo</b></p>
                <pre>
                class &lt; tên lớp &gt;
                {
                    &lt; Phạm vi truy cập &gt; &lt; Các thành phần của lớp &gt;;
                }
                </pre>
        
                <ul>
                <li>&lt; Tên lớp &gt; là tên do người dùng đặt</li>
                <li>&lt; Phạm vi truy cập &gt; bao gồm các biến, phương thức của lớp
                    <ul>
                    <li>Các biến được khai báo như khai báo biến</li>
                    <li>Các phương thức (hàm) được khai báo như khai báo hàm</li>
                    </ul>
                </li>
                </ul>
            `],
      ['Ví dụ', 'LTUDWindows23', `
            <p><b>Ví dụ</b></p>
            <p>Khai báo lớp Animal</p>
            <pre>
            class Animal {
                public double Weight;
                public double Height;
                public void Run()
                {
                    Console.WriteLine(" Animal is running. . ");
                }
            }
            </pre>
            <ul>
            <li><b>Khởi tạo:</b> Animal Dog = new Animal();</li>
            <li>Sử dụng: 
                <ul>
                <li>Gọi tới các thuộc tính bên trong lớp
                    <br>
                    &lt; tên đối tượng &gt;.&lt; tên thuộc tính &gt;
                </li>
                <li>Gọi tới các phương thức bên trong lớp
                    <br>
                    &lt; tên đối tượng &gt;.&lt; tên thuộc tính &gt;(&lt; danh sách tham số nếu có &lt;)
                </li>
                </ul>
            </li>
            </ul>
            `],
      ['Ví dụ 1', 'LTUDWindows24', `
                <p><b>Ví dụ 1: khai báo lớp Animal có thuộc tính weight, height và có phương thức info để in các thông tin</b></p>
                <pre>
                class Animal
                {
                    public double Weight;
                    public double Height;
                    public void Info()
                    {
                    Console.WriteLine("Weight: {0} | Height: {1}",Weight,Height);
                    }
                }
                </pre>

                <pre>
                static void Main(string[] args)
                {
                    Animal a = new
                    Animal();
                    a.Weight = 10;
                    a.Height = 20;
                    a.Info();
                    Console.ReadKey();
                }
                </pre>

                <center>
                <img src="./assets/img/LTUDWindows/Chap1/img21.png" alt="">
                </center>
            `],
      ['Phương thức khởi tạo (constructor)', 'LTUDWindows25', `
            <p><b>Phương thức khởi tạo (constructor)</b></p>
            <p>Là những phương thức đặc biệt được gọi đến khi khởi 1 đối tượng: Phương thức khởi tạo đối số, phương thức khởi tạo có đối số</p>
    
            <p><b>Đặc điểm</b></p>
    
            <ul>
              <li>Có tên trùng với tên lớp.</li>
              <li>Không có kiểu trả về.</li>
              <li>Được tự động gọi khi 1 đối tượng thuộc lớp được khởi tạo.</li>
              <li>Nếu không khai báo bất kỳ phương thức khởi tạo nào thì hệ thống sẽ tự tạo ra phương thức khởi tạo mặc định không đối số và không có nội dung.</li>
              <li>Có thể có nhiều <b>constructor</b> bên trong 1 lớp.</li>
            </ul>
            `],
      ['Phương thức hủy bỏ (destructor)', 'LTUDWindows26', `
                <p><b>Phương thức hủy bỏ (destructor)</b></p>

                <p>Là phương thức đặc biệt được gọi đến trước khi 1 đối tượng bị thu hồi.</p>
        
                <p>Đặc điểm</p>
                <ul>
                <li>Có tên trùng với tên lớp nhưng để phân biệt với constructor thì ta thêm dấu “~” vào trước tên lớp.</li>
                <li>Không có kiểu trả về.</li>
                <li>Được tự động gọi khi 1 đối tượng thuộc lớp kết thúc “vòng đời” của nó thông qua bộ thu dọn rác tự động GC (Garbage Collection).</li>
                <li>Nếu không khai báo destructor thì C# sẽ tự động tạo ra 1 destructor mặc định và không có nội dung gì.</li>
                <li>Chỉ có 1 destructor duy nhất trong 1 lớp.</li>
                </ul>
            `],
      ['Ví dụ 2', 'LTUDWindows27', `
            <p><b>Ví dụ 2.</b></p>
            <p>Minh họa hàm khởi tạo và hàm hủy</p>

            <pre>
            class Animal 
            {
                public double Weight;
                public double Height;
                public Animal() {
                Weight = 10;
                Height = 10;
                }
                ~Animal() {
                Console.WriteLine("Da huy");
                }
                public Animal(double w, double h) {
                Weight = w;
                Height = h;
                }
                public void Info()
                {
                Console.WriteLine("Weight: {0} | Height: {1}", Weight, Height);
                }
            }
            </pre>

            <pre>
            static void Main(string[] args)
            {
                Animal a1 = new Animal();
                Animal a2 = new Animal(50,50);
                a1.Info();
                a2.Info();
                Console.ReadKey();
            }
            </pre>
            <center>
            <img src="./assets/img/LTUDWindows/Chap1/img22.png" alt="">
            </center>
            `],
    ]
  },
  LTUDWindows3: {
    title: `Phạm vi truy cập`,
    index: [
      ['Phạm vi truy cập', 'LTUDWindows31', `
            <p><b>Phạm vi truy cập</b></p>
            <center>
              <img src="./assets/img/LTUDWindows/Chap1/img23.png" alt="">
            </center>
            <p><b>Chú ý</b>: Nếu khai báo lớp mà không chỉ ra phạm vi cụ thể thì phạm vi mặc định là <b>internal</b>, nếu khai báo thành phần bên trong lớp mà không chỉ ra phạm vi cụ thể thì phạm vị mặc định là <b>private</b>.</p>
            `],
      ['Từ khóa get và set', 'LTUDWindows32', `
            <p><b>Từ khóa get và set</b></p>
            <pre>
              &lt;kiểu dữ liệu&gt; &lt;tên property&gt; {
                  get { return &lt;tên thuộc tính&gt;; }
                  set { &lt;tên thuộc tính&gt; = value; }
              }
            </pre>
    
            <ul>
              <li>&lt;kiểu dữ liệu&gt; là kiểu dữ liệu property. Thường sẽ trùng với kiểu dữ liệu của thuộc tính private tương ứng bên trong lớp</li>
              <li>&lt;tên property&gt; là từ khóa có ý nghĩa:
                <ul>
                  <li>Từ khoá get tương đương với phương thức truy vấn.</li>
                  <li>Từ khoá set tương đương với phương thức cập nhật.</li>
                  <li>Từ khoá value đại diện cho giá trị mà người gán vào property (tương đương với tham số truyền vào của phương thức cập nhật).</li>
                </ul>
              </li>
              <li>&lt; tên thuộc tính &gt; là tên thuộc tính thực sự bên trong lớp</li>
            </ul>
            `],
      ['Ví dụ', 'LTUDWindows33', `
            <p><b>Ví dụ</b></p>
            <p>Xây dựng lớp học sinh có mã học sịnh, họ tên, điểm toán, văn và phương thức tính điểm trung bình</p>
            <pre>
              static void Main(string[] args)
              {
                HocSinh hs = new HocSinh();
                hs.MaHS = "0001";
                hs.HoTen = "Nguyen Van An";
                hs.DiemToan = 9.5F;
                hs.DiemVan = 8.5F;
                hs.HienThi();
                Console.WriteLine("Diem trung binh: {0}“, hs.DiemTrungBinh());
                Console.ReadKey();
              }
            </pre>    
            `],
    ]
  },
  LTUDWindows4: {
    title: `Từ khóa static (tĩnh)`,
    index: [
      ['Đặc điểm của thành viên tĩnh (static)', 'LTUDWindows41', `
            <p><b>Đặc điểm của thành viên tĩnh (static)</b></p>
            <ul>
              <li>Được khởi tạo 1 lần duy nhất ngay khi biên dịch chương trình.</li>
              <li>Có thể dùng chung cho mọi đối tượng.</li>
              <li><b>Được gọi thông qua tên lớp.</b></li>
              <li>Được huỷ khi kết thúc chương trình.</li>
            </ul>
            `],
      ['4 loại thành viên tĩnh chính', 'LTUDWindows42', `
            <p><b>4 loại thành viên tĩnh chính</b></p>

            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse621" role="button" aria-expanded="false" aria-controls="collapse621">
                Biến tĩnh (static variable)
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse622" role="button" aria-expanded="false" aria-controls="collapse622">
                Phương thức tĩnh (static method)
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse623" role="button" aria-expanded="false" aria-controls="collapse623">
                Lớp tĩnh (static class)
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse624" role="button" aria-expanded="false" aria-controls="collapse624">
                Phương thức khởi tạo tĩnh (static constructor)
              </a>
            </p>
            
            <div class="collapse" id="collapse621">
              <div class="card card-body">
                <p><b>Biến tĩnh</b></p>
                <p>
                  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse6211" role="button" aria-expanded="false" aria-controls="collapse6211">
                    Cú pháp khai báo
                  </a>
                  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse6212" role="button" aria-expanded="false" aria-controls="collapse6212">
                    Ví dụ
                  </a>
                </p>
  
                <div class="collapse" id="collapse6211">
                  <div class="card card-body">
                    <p><b>Cú pháp khai báo</b></p>
                    <pre>
                      &lt; phạm vi truy cập &gt; static &lt; kiểu dữ liệu &gt; &lt; tên biến &gt; = &lt; giá trị khởi tạo &gt;;
                    </pre>
                    <ul>
                      <li>static là từ khóa để khai báo thành viên tĩnh</li>
                      <li>&lt; kiểu dữ liệu &gt;: là kiểu dữ liệu của biến</li>
                      <li>&lt; giá trị khởi tạo &gt;: là giá trị ban đầu mà biến tĩnh này chứa. Nếu không khai báo giá trị này thì C# thì tự gán giá trị mặc định và đưa ra 1 cảnh báo khi bạn biên dịch chương trình.</li>
                    </ul>
                  </div>
                </div>
                <div class="collapse" id="collapse6212">
                  <div class="card card-body">
                    <p><b>Ví dụ</b></p>
                    <p>Ví dụ: Để quản lý số lượng mèo đang có (giả sử 1 đối tượng được tạo ra là 1 con mèo)</p>
                    <pre>
                      class Cat
                      {
                        private int weight;
                        private int height;
                        public static int Count = 0;
                        
                        public Cat()
                        {
                          weight = 20;
                          height = 500;
                          Count++;
                        }
                      }
                    </pre>
  
                    <pre>
                      static void Main(string[] args)
                      {
                        Console.WriteLine(" So luong meo ban dau: " + Cat.Count);
                        Cat c = new Cat(); // Tạo ra con mèo đầu tiên
                        Console.WriteLine(" So luong meo hien tai: " + Cat.Count);
                        Cat c1 = new Cat(); // Tạo ra con mèo thứ 2
                        Console.WriteLine(" So luong meo hien tai: " + Cat.Count);
                        Console.ReadKey();
                      }
                    </pre>
  
                    <center>
                      <img src="./assets/img/LTUDWindows/Chap1/img25.png" alt="">
                    </center>
                  </div>
                </div>
              </div>
            </div>
            <div class="collapse" id="collapse622">
              <div class="card card-body">
                <p><b>Phương thức tỉnh</b></p>
  
                <p>
                  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse6221" role="button" aria-expanded="false" aria-controls="collapse6221">
                    Cú pháp khai báo
                  </a>
                  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse6223" role="button" aria-expanded="false" aria-controls="collapse6223">
                    Bài tập
                  </a>
                </p>
  
                <div class="collapse" id="collapse6221">
                  <div class="card card-body">
                    <p><b>Cú pháp khai báo</b></p>
                    <pre>
                      &lt;phạm vi truy cập&gt; static &lt;kiểu trả về&gt; &lt;tên phương thức&gt;
                        {
                          // nội dung phương thức
                        }
                    </pre>
                    <ul>
                      <li>Hàm (phương thức) tĩnh là 1 hàm dùng chung của lớp. <b>Được gọi thông qua tên lớp</b> và không cần khởi tạo bất kỳ đối tượng nào, từ đó tránh việc lãng phí bộ nhớ</li>
                      <li>Hỗ trợ trong việc viết các hàm tiện ích để sử dụng lại</li>
                    </ul>
  
                    <p><b>Ví dụ: Tạo lớp tiện ích và viết hàm tính lũy thừa</b></p>
                    <pre>
                      class TienIch {
                        public static long LuyThua(int CoSo, int SoMu) {
                          long KQ = 1;
                          for (int i = 0; i &lt; SoMu; i++) {
                            KQ *= CoSo;
                          }
                          return KQ;
                          }
                        }
  
                        static void Main(string[] args)
                        {
                          Console.WriteLine("3^3= " +TienIch.LuyThua(3, 3));
                          Console.ReadKey();
                        }
                    </pre>
                  </div>
                </div>
                <div class="collapse" id="collapse6223">
                  <div class="card card-body">
                    <p><b>Bài tập</b></p>
                    <ol>
                      <li>Xây dựng lớp hình tròn, thuộc tính là bán kính, các phương thức tính chu vi và diện tích của hình tròn đó.</li>
                      <li>Xây dựng lớp nhân viên có thuộc tính: Mã nhân viên, họ tên, năm sinh và có các phương thức: khởi tạo không tham số, có tham số, nhập, xuất, tính tuổi.</li>
                      <li>Xây dựng lớp sinh viên gồm các thuộc tính: Mã sinh viên, họ tên, năm sinh, giới tính, số lượng sv (thuộc tính tĩnh) và có các phương thức: khởi tạo, nhập, xuất, tính tuổi,</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div class="collapse" id="collapse623">
              <div class="card card-body">
                <p><b>Lớp tĩnh</b></p>
                   <ul>
                    <li>Chỉ chứa các thành phần tĩnh (biến tĩnh, phương thức tĩnh). Không thể khai báo, khởi tạo 1 đối tượng thuộc lớp tĩnh.</li>
                    <li>Lớp tĩnh thường được dùng với mục đích khai báo 1 lớp tiện ích chứa các hàm tiện ích hoặc hằng số vì:
                      <ul>
                        <li>Ràng buộc các thành phần bên trong lớp phải là static.</li>
                        <li>Không cho phép tạo ra các đối tượng dư thừa làm lãng phí bộ nhớ.</li>
                        <li>Mọi thứ đều được truy cập thông qua tên lớp</li>
                      </ul>
                    </li>
                   </ul>
              </div>
            </div>
            <div class="collapse" id="collapse624">
              <div class="card card-body">
                
              </div>
            </div>
            `]
    ]
  },
  LTUDWindows5: {
    title: `Kế thừa`,
    index: [
      ['Một số khái niệm', 'LTUDWindows51', `
            <p><b>Một số khái niệm</b></p>
            <ul>
              <li>kế thừa là việc thừa hưởng lại những thứ người khác để lại. Ví dụ: con kế thừa tài sản của cha, . . .</li>
              <li>kế thừa là cách 1 lớp có thể thừa hưởng lại những thuộc tính, phương thức từ 1 lớp khác và sử dụng chúng như là của mình.</li>
            </ul>
    
            <center>
              <img src="./assets/img/LTUDWindows/Chap1/img27.png" alt="">
            </center>
            `],
      ['Ưu điểm', 'LTUDWindows52', `
            <p><b>Ưu điểm</b></p>
            <ul>
              <li>Cho phép xây dựng 1 lớp mới từ lớp đã có.</li>
              <li>Cho phép chia sẽ các thông tin chung nhằm tái sử dụng và đồng thời giúp ta dễ dàng nâng cấp, dễ dàng bảo trì.
                <ul>
                  <li>Lớp mới gọi là lớp con (subclass) hay lớp dẫn xuất (derived class).</li>
                  <li>Lớp đã có gọi là lớp cha (superclass) hay lớp cơ sở (base class)</li>
                </ul>
              </li>
              <li>Định nghĩa sự tương thích giữa các lớp, nhờ đó ta có thể chuyển kiểu tự động</li>
            </ul>
            `],
      ['Cú pháp khai báo', 'LTUDWindows53', `
            <p><b>Cú pháp khai báo</b></p>
            <pre>
              class &lt;tên lớp con&gt; : &lt;tên lớp cha&gt;
              {
    
              }
            </pre>
            <ul>
              <li>&lt;tên lớp con&gt; là tên do người dùng đặt và tuân theo các quy tắc
                đặt tên.</li>
              <li>Dấu ":" bắt buộc có.</li>
              <li>&lt;tên lớp cha&gt; là tên lớp mà ta muốn kế thừa các đặc tính của nó.</li>
            </ul>
            `],
      ['Chú ý', 'LTUDWindows54', `
            <p><b>Chú ý</b></p>
            <ul>
              <li>Phương thức khởi tạo mặc định của lớp cha luôn luôn được gọi mỗi khi có 1 đối tượng thuộc lớp con khởi tạo. Và được gọi trước phương thức khởi tạo của lớp con</li>
              <li>Nếu như lớp cha có phương thức khởi tạo có tham số thì đòi hỏi lớp con phải có phương thức khởi tạo tương ứng và thực hiện gọi phương thức khởi tạo của lớp cha thông qua từ khoá base</li>
            </ul>
            `],
      ['Cú pháp gọi hàm khởi tạo từ lớp cha', 'LTUDWindows55', `
            <p><b>Cú pháp gọi hàm khởi tạo từ lớp cha</b></p>
            <pre>
              public &lt;tên lớp&gt;
              (&lt;danh sách tham số của lớp con&gt;)
              : base(&lt;danh sách tham số&gt;)
              {
              // Code của hàm khởi tạo thêm nếu cần
              }
            </pre>
            `],
      ['Ví dụ', 'LTUDWindows56', `
            <p><b>Ví dụ</b></p>
            <pre>
              class Animal{
                  public Animal() { }
                  public Animal(double w, double h){
                    Weight = w;
                    Height = h;
                  }
                }
                class Cat : Animal{
                  public Legs;
                  public Cat(double w, double h, int l): base(w, h) {
                    Legs = l;
                  }
                }
            </pre>
    
            <p><b>Ví dụ</b></p>
            <p>Hàm cha và hàm con có cùng phương thức</p>
            <center>
              <img src="./assets/img/LTUDWindows/Chap1/img28.png" alt="">
            </center>
            <p>Cách giải quyết: sử dụng từ khóa new trước hàm info của lớp con</p>
            <pre>
              public new void Info()
              {
    
              }
            </pre>
            `],
      ['Bài tập', 'LTUDWindows57', `
                <p>Bài 4. Xây dựng lớp con người có các thuộc tính mã, họ tên, năm sinh và các phương thức khởi tạo, nhập, xuất, tính tuổi. Xây dựng lớp Nhân viên kế thừa từ lớp con người và có thêm thuộc tính giới tính, tình trạng hôn nhân, xây dựng lớp học sinh kế thừa từ lớp con người và có thêm các thuộc tính điểm toán, lý hóa và phương thức tính điểm trung bình, xếp loại.</p>
            `]
    ]
  },
  LTUDWindows6: {
    title: `Đa hình`,
    index: [
      ['Khái niệm', 'LTUDWindows61', `
            <p><b>Khái niệm</b></p>
            <p>Tính đa hình là hiện tượng <b style="color: red;">các đối tượng thuộc các lớp khác nhau</b> có thể <b style="color: red;">hiểu cùng 1 thông điệp theo các cách khác nhau</b>.</p>
            <p>Ví dụ: Có 3 con vật: chó, mèo, gà. Cả 3 con vật này đều là động vật. Nhưng khi ta bảo cả 3 động vật kêu thì chúng kêu khác nhau</p>
            `],
      ['Thể hiện tính đa hình', 'LTUDWindows62', `
            <p><b>Thể hiện tính đa hình</b></p>

            <ul>
              <li>Để thể hiện được tính đa hình:
                <ul>
                  <li>Các lớp phải có quan hệ kế thừa với cùng 1 lớp cha nào đó.</li>
                  <li>Phương thức đa hình phải được ghi đè (override) ở các lớp con</li>
                </ul>
              </li>
              <li>Virtual là từ khoá dùng để khai báo 1 phương thức ảo (phương
                thức ảo là phương thức có thể ghi đè được).</li>
              <li>Override là từ khoá dùng để đánh dấu phương thức ghi đè lên
                phương thức của lớp cha.</li>
              <li>Lưu ý:
                <ul>
                  <li>Chỉ có thể ghi đè lên phương thức virtual hoặc abstract</li>
                  <li>Tính đa hình chỉ được thể hiện khi đã ghi đè lên phương thức của
                    lớp cha.</li>
                </ul>
              </li>
            </ul>
    
            <pre>
              class Animal
              {
                public void Speak()
                  {
                    Console.WriteLine(" Dong vat dang noi...");
                  }
              }
              class Cat : Animal
              {
                public void Speak()
                  {
                    Console.WriteLine(" Meo dang noi....");
                  }
              }
            </pre>
    
            <br>
    
            <pre>
                class Dog : Animal {
                  public void Speak() {
                    Console.WriteLine(" Cho dang noi...");
                  }
                }
    
                static void Main(string[] args) {
                  Animal cat = new Cat();
                  Animal dog = new Dog();
                  cat.Speak();
                  dog.Speak();
                  Console.ReadKey();
                }
            </pre>
            <center>
              <img src="./assets/img/LTUDWindows/Chap1/img29.png" alt="">
            </center>
    
            <ul>
              <li>Nhận xét: Mong muốn kết quả như sau
                <br>
                <center>
                  <img src="./assets/img/LTUDWindows/Chap1/img30.png" alt="">
                </center>
              </li>
              <li>Cách sửa: Thêm từ khóa virtual vào phương thức ở lớp cha và
                thêm từ khóa override vào các phương thức ở lớp con.</li>
            </ul>
            `],
      ['Lớp trừu tượng và phương thức thuần ảo', 'LTUDWindows63', `
            <p><b>Lớp trừu tượng và phương thức thuần ảo</b></p>

            <ul>
              <li>Phương thức thuần ảo là 1 phương thức ảo và không có định nghĩa bên trong.</li>
              <li>Lớp trừu tượng là lớp chứa phương thức thuần ảo</li>
              <li>Abstract là từ khoá dùng để khai báo 1 lớp trừu tượng hoặc 1 phương thức thuần ảo.</li>
              <li>Sử dụng abstract để nhấn mạnh 2 điều:
                <ul>
                  <li>Phương thức Speak() có thể ghi đè (override).</li>
                  <li>Phương thức Speak() không có định nghĩa gì bên trong</li>
                </ul>
              </li>
            </ul>
    
            <p><b>Sửa lại ví dụ trên</b></p>
            <pre>
              abstract class Animal
              {
                public abstract void Speak();
              }
            </pre>
            <p>Chú ý: Chỉ thay đổi ở lớp cha, lớp con hoàn toàn không thay đổi.</p>
            `],
      ['Bài tập', 'LTUDWindows64', `
            <p><b>Bài tập</b></p>
            <p>Xây dựng class theo hình bên dưới</p>
            <center>
              <img src="./assets/img/LTUDWindows/Chap1/img31.png" alt="">
            </center>
            `],
    ]
  },
  LTUDWindows7: {
    title: `Interface`,
    index: [
      ['Khái niệm Interface và các thành phần', 'LTUDWindows71', `
            <p><b>Khái niệm Interface và các thành phần</b></p>
            <p>Interface là 1 tập các thành phần chỉ có khai báo mà không có phần định nghĩa</p>
            <p><b>Các thành phần của Interface có thể có</b></p>
            <ul>
              <li>Phương thức</li>
              <li>Property</li>
              <li>Event</li>
              <li>Indexers</li>
            </ul>
            <p>Một interface được hiểu như là 1 khuôn mẫu mà mọi lớp thực thi nó đều
              phải tuân theo. Interface sẽ định nghĩa phần “làm gì” (khai báo) và những
              lớp thực thi interface này sẽ định nghĩa phần “làm như thế nào” (định
              nghĩa nội dung) tương ứng.</p>
            `],
      ['Đặc điểm Interface', 'LTUDWindows72', `
                <p><b>Đặc điểm Interface</b></p>
                <ul>
                <li>Chỉ chứa khai báo không chứa phần định nghĩa (giống phương thức thuần ảo nhưng không cần phải khai báo từ khoá abstract)</li>
                <li>Việc ghi đè 1 thành phần trong interface cũng không cần từ
                    khoá override</li>
                <li>Không khai báo phạm vi truy cập cho các thành phần bên
                    trong interface (mặc định là public)</li>
                <li>Trong Interface không được khai báo biến, constructor, destructor.</li>
                <li>Các lớp có thể thực thi nhiều interface</li>
                <li>Một interface có thể kế thừa nhiều interface khác nhưng không thể kế thừa từ lớp.</li>
                </ul>
            `],
      ['Cú pháp khai báo', 'LTUDWindows73', `
                <p><b>Cú pháp khai báo</b></p>
                <pre>
                interface &lt;tên interface&gt;
                {
                    // Khai báo các thành phần bên trong interface
                }
                </pre>
            `],
      ['Ví dụ', 'LTUDWindows74', `
                <p><b>Ví dụ</b></p>
                <p>Ví dụ: định nghĩa các interface như sau</p>

                <pre>
                interface ISpeak
                {
                    void Speak();
                    void Go();
                }

                interface Ieat
                {
                    void Eat();
                }

                class Animal : ISpeak, Ieat
                {
                    public void Speak(){
                    Console.WriteLine("Dong vat dang noi...");
                    }
                    public void Eat(){
                    Console.WriteLine("Dong vat dang an...");
                    }
                    public void Go(){
                    Console.WriteLine("Dong vat dang di...");
                    }
                }

                static void Main(string[] args)
                {
                    Animal animal = new Animal();
                    animal.Speak();
                    animal.Eat();
                    animal.Go();
                    Console.ReadKey();
                }
                </pre>
                <center>
                <img src="./assets/img/LTUDWindows/Chap1/img32.png" alt="">
                </center>
            `],
      ['Bài tập', 'LTUDWindows75', `
            <p><b>Bài tập</b></p>
            <p>Bài tập 1. Xây dựng Interface cho số nguyên và Interface cho số thực trong 2 interface đó định nghĩa các phương thức cộng, trừ, nhân, chia. Xây dựng lớp TinhToan kế thừa 2 interface và địn h nghĩa lại tất cả các phương thức trong 2 interface đó. Viết hàm Main để sử dụng lại class TinhToan.</p>
            <p>Bài tập 2. Xây dựng Interface Hinh có các phương thức, tính chu vi, tính diện tích, kiểm tra. Xây dựng lớp Hình Vuông kế thừa từ Interface Hình và có thêm thuộc tính, cạnh a, các phương thức khởi tạo. Xây dựng lớp Hình chữ nhật kế thừa từ Interface Hình có có thêm thuộc tính cạnh A, cạnh B và các phương thức: khởi tạo không tham số, có tham số, phương thức nhập, phương thức xuất. Viết hàm main sử dụng các lớp trên.</p>
            `]
    ]
  }
}