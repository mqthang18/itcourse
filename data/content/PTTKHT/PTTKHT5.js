const PTTKHT5 = {
    PTTKHT1: {
        title: 'TỔNG QUAN VỀ THIẾT KẾ CƠ SỞ DỮ LIỆU',
        index: [
            ['Một số khái niệm về CSDL quan hệ', 'PTTKHT11', `
            <p><b>Một số khái niệm về CSDL quan hệ</b></p>

            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse111" role="button" aria-expanded="false"
                aria-controls="collapse111">
                Khái niệm
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse112" role="button" aria-expanded="false"
                aria-controls="collapse112">
                Các thách thức
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse113" role="button" aria-expanded="false"
                aria-controls="collapse113">
                Tổng quan trong thiết kế CSDL
              </a>
            </p>
  
            <div>
              <div class="collapse" id="collapse111">
                <div class="card card-body">
                  <p><b>Khái niệm</b></p>
                  <p>Thiết kế cấu trúc cơ sở dữ liệu là quá trình mô hình hóa nhằm chuyển đổi các đối tượng từ thế giới
                    thực(Real-world system) sang các bảng trong hệ thống cơ sở dữ liệu (Database system) đáp ứng các yêu
                    cầu lưu trữ và khai thác dữ liệu.</p>
                </div>
              </div>
              <div class="collapse" id="collapse112">
                <div class="card card-body">
                  <p><b>Các thách thức</b></p>
                  <ul>
                    <li>Đặc trưng của nhiệm vụ mà hệ thống trợ giúp;</li>
                    <li>Đặc trưng của hệ thống;</li>
                    <li>Đặc trưng của người sử dụng;</li>
                    <li>Đặc trưng của những người phát triển.</li>
                  </ul>
                </div>
              </div>
              <div class="collapse" id="collapse113">
                <div class="card card-body">
                  <p><b>Tổng quan trong thiết kế CSDL</b></p>
                  <ul>
                    <li>Cơ sở dữ liệu (Database)</li>
                    <li>Quan hệ (Relation).</li>
                    <li>Thuộc tính (Attribute).</li>
                    <li>Thực thể/Tập thực thể (Entity/Entity set).</li>
                    <li>Trường dữ liệu (Field).</li>
                    <li>Bộ/Bản ghi (Record).</li>
                    <li>Sơ đồ cấu trúc dữ liệu (Data Structure Diagram- DSD).</li>
                    <li>Thiết kế cơ sở dữ liệu (Database Design).</li>
                  </ul>
                </div>
              </div>
            </div>
            `],
            ['Mô hình tổ chức dữ liệu', 'PTTKHT12', `
            <p><b>Mô hình tổ chức dữ liệu</b></p>

          <p><b>Định nghĩa</b>: Mô hình tổ chức dữ liệu, còn gọi là mô hình cơ sở dữ liệu, là toàn bộ các quan hệ của
            bài toán được chuyển đổi từ mô hình quan niệm dữ liệu theo các quy tắc</p>

          <p><b>Gồm các mô hình:</b></p>
          <ul>
            <li>Mô hình phân cấp</li>
            <li>Mô hình mạng</li>
            <li>Mô hình quan hệ;</li>
            <li>Mô hình thực thể - liên kết</li>
            <li>Mô hình hướng đối tượng</li>
          </ul>
            `],
            ['Chuyển một tập thực thể thành quan hệ', 'PTTKHT13', `
            <p><b>Chuyển một tập thực thể thành quan hệ</b></p>

          <p>
            <a class="btn btn-primary mt-1 mb-1" data-bs-toggle="collapse" href="#collapse131" role="button"
              aria-expanded="false" aria-controls="collapse131">
              Quy tắc 1
            </a>
            <a class="btn btn-primary mt-1 mb-1" data-bs-toggle="collapse" href="#collapse132" role="button"
              aria-expanded="false" aria-controls="collapse132">
              Quy tắc 2
            </a>
            <a class="btn btn-primary mt-1 mb-1" data-bs-toggle="collapse" href="#collapse133" role="button"
              aria-expanded="false" aria-controls="collapse133">
              Quy tắc 3
            </a>
            <a class="btn btn-primary mt-1 mb-1" data-bs-toggle="collapse" href="#collapse134" role="button"
              aria-expanded="false" aria-controls="collapse134">
              Quy tắc 4
            </a>
            <a class="btn btn-primary mt-1 mb-1" data-bs-toggle="collapse" href="#collapse135" role="button"
              aria-expanded="false" aria-controls="collapse135">
              Quy tắc 5
            </a>
            <a class="btn btn-primary mt-1 mb-1" data-bs-toggle="collapse" href="#collapse136" role="button"
              aria-expanded="false" aria-controls="collapse136">
              Ví dụ
            </a>
          </p>

          <div>
            <div class="collapse" id="collapse131">
              <div class="card card-body">
                <p><b>Quy tắc 1</b></p>

                <p>Mỗi tập thực thể trong mô hình quan niệm dữ liệu được chuyển thành một quan hệ: có tên là tên của tập
                  thực thể; có thuộc tính và khóa là thuộc tính và khóa của tập thực thể và có thể có thêm thuộc tính là
                  khóa ngoại nếu có</p>
                <p>Ví dụ</p>
                <center>
                  <img src="./assets/img/PTTKHT/chap5/img3.png" alt="" class="w-50">
                </center>
              </div>
            </div>
            <div class="collapse" id="collapse132">
              <div class="card card-body">
                <p><b>Quy tắc 2</b></p>

                <p>Tập thực thể tham gia vào mối quan hệ hai ngôi có cặp bản số (1,1) ----- (1,n) thì quan hệ sinh ra
                  bởi tập thực thể ở nhánh (1,1) sẽ nhận khóa của tập thực thể ở nhánh (1,n) làm khóa ngoại.</p>


                <center>
                  <img src="./assets/img/PTTKHT/chap5/img4.png" alt="" class="w-50">
                </center>
              </div>
            </div>
            <div class="collapse" id="collapse133">
              <div class="card card-body">
                <p><b>Quy tắc 3</b></p>
                <p>Chuyển tập thực thể trong mối quan hệ ISA</p>
                <ul>
                  <li>Tập thực thể con trong mối quan hệ ISA của mô hình quan niệm dữ liệu được chuyển thành một quan
                    hệ, với tên là tên của tập thực thể con, có các thuộc tính là thuộc tính của tập thực thể con và
                    nhận khóa của tập thực thể “cha” làm khóa.</li>
                  <li>Trường hợp xảy ra quan hệ ISA trong một quan hệ ISA thì lược đồ quan hệ sinh ra từ tập thực thể
                    "cháu" nhận thuộc tính khóa của tập thực thể "Ông" làm thuộc tính khóa</li>
                </ul>

                <center>
                  <img class="w-75" src="./assets/img/PTTKHT/chap5/img5.png" alt="">
                </center>
              </div>
            </div>
            <div class="collapse" id="collapse134">
              <div class="card card-body">
                <p><b>Quy tắc 4</b></p>

                <p>Mối quan hệ hai ngôi không có thuộc tính riêng, có cặp bản số (1,1) ---- (1,n) thì không chuyển thành
                  một quan hệ.</p>

                <center>
                  <img src="./assets/img/PTTKHT/chap5/img6.png" alt="" class="w-75">
                </center>

                <p>Mối quan hệ hai ngôi có thuộc tính riêng, có cặp bản số (1,1) ---- (1,n) thì chuyển thành một quan
                  hệ, có tên là tên của mối quan hệ, có thuộc tính là thuộc tính của mối quan hệ và có khóa là khóa của
                  các tập thực thể
                  tham gia vào mối quan hệ.</p>

                <center>
                  <img src="./assets/img/PTTKHT/chap5/img7.png" alt="" class="w-75">
                </center>
              </div>
            </div>
            <div class="collapse" id="collapse135">
              <div class="card card-body">
                <p><b>Quy tắc 5</b></p>
                <p>Mối quan hệ hai ngôi có cặp bản số (1,n) ---- (1,n) hay mối quan hệ nhiều hơn hai ngôi (không phân
                  biệt bản số) được chuyển thành một quan hệ:</p>
                <ul>
                  <li>Có tên là tên của mối quan hệ;</li>
                  <li>Có khóa là khóa của tất cả các tập thực thể tham gia vào mối quan hệ;</li>
                  <li>Có thuộc tính là các thuộc tính riêng của nó (nếu có)</li>
                </ul>
                <center>
                  <img src="./assets/img/PTTKHT/chap5/img8.png" class="w-75" alt="">
                </center>
              </div>
            </div>
            <div class="collapse" id="collapse136">
              <div class="card card-body">
                <p><b>Ví dụ</b></p>
                <p>Mô hình tổ chức dữ liệu của HTTT “Quản lý kho hàng”</p>
                <center>
                  <img src="./assets/img/PTTKHT/chap5/img1.png" alt="" class="w-75">
                </center>
                <p><b>Chuyển thành các quan hệ</b></p>
                <center>
                  <img src="./assets/img/PTTKHT/chap5/img2.png" alt="" class="w-75">
                </center>
              </div>
            </div>
          </div>
            `],
        ]
    },
    PTTKHT2: {
        title: `Chuẩn hóa dữ liệu`,
        index: [
            ['Mục đích của chuẩn hóa dữ liệu','PTTKHT21',`
            <p><b>Mục đích của chuẩn hóa dữ liệu</b></p>
            <p>Chuẩn hóa dữ liệu (Data Normalization) là một quá trình chuyển một cấu trúc dữ liệu phức hợp thành các cấu
              trúc dữ liệu đơn giản, rõ ràng và nhằm các mục đích sau:</p>
            <ul>
              <li>Tối ưu hóa lưu trữ;</li>
              <li>Tránh dư thừa dữ liệu;</li>
              <li>Thông tin nhất quán;</li>
              <li>Đảm bảo các phụ thuộc dữ liệu theo đúng mô hình mà vẫn không làm tổn thất thông tin.</li>
            </ul>
            `],
            ['Các dạng chuẩn','PTTKHT22',`
            <p><b>Các dạng chuẩn</b></p>

            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse221" role="button" aria-expanded="false"
                aria-controls="collapse221">
                Dạng chuẩn 1 (1NF - First Normalized Format)
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse222" role="button" aria-expanded="false"
                aria-controls="collapse222">
                Dạng chuẩn 2 (2NF - Second Normalize Format)
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse223" role="button" aria-expanded="false"
                aria-controls="collapse223">
                Dạng chuẩn 3 (3NF - Third Normalized Format)
              </a>
            </p>
            <div>
              <div class="collapse" id="collapse221">
                <div class="card card-body">
                  <p><b>Dạng chuẩn 1</b></p>
                  <ul>
                    <li>Một lược đồ quan hệ được gọi là ở dạng chuẩn 1 nếu mọi thuộc tính của nó là thuộc tính đơn (các
                      thuộc
                      tính không có nhu cầu phân rã trong các xử lý)</li>
                    <li>Ví dụ: Lược đồ quan hệ dưới đây không phải ở 1NF
                      <br>
                      SINHVIEN(MSSV, HTEN, QQUAN, SOTHICH)
                    </li>
                  </ul>
                </div>
              </div>
              <div class="collapse" id="collapse222">
                <div class="card card-body">
                  <p><b>Dạng chuẩn 2</b></p>
                  <ul>
                    <li>Một lược đồ quan hệ được gọi là ở dạng chuẩn 2 nếu nó là dạng chuẩn 1 và mọi thuộc tính không khóa
                      phải phụ thuộc hàm đầy đủ vào khóa chính.</li>
                    <li>Ví dụ: Lược đồ quan hệ R(ABCD) với tập phụ thuộc hàm
                      <br>
                      F={AB → C, B → D, C→ D}
                      <br>
                      Không phải ở 2NF vì D không phụ thuộc hàm đầy đủ vào khóa.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="collapse" id="collapse223">
                <div class="card card-body">
                  <p><b>Dạng chuẩn 3</b></p>
                  <p>Phụ thuộc hàm bắc cầu: cho lược đồ quan hệ R và tập phụ thuộc hàm F xác định trên R; X, Y ⊆ R, A ∈ R.
                    Nếu ta có: X → Y , Y X, Y → A và A ∉ XY thì ta nói A phụ thuộc hàm bắc cầu vào X. A được gọi là thuộc
                    tính
                    phụ thuộc bắc cầu, Y là các thuộc tính cầu.</p>
  
                  <ul>
                    <li>Định nghĩa 1:
                      <br>
                      <p>Lược đồ quan hệ R với tập phụ thuộc hàm F xác định trên R được gọi là ở 3NF nếu nó là 2NF và
                        không tồn tại thuộc tính không khóa phụ thuộc hàm bắc cầu vào khóa.</p>
                    </li>
                    <li>Định nghĩa 2
                      <br>
                      <p>Lược đồ quan hệ R với tập phụ thuộc hàm F xác định trên R được gọi là ở 3NF nếu mọi phụ thuộc hàm
                        X
                        → A đúng trong R, A ∉ X thì X phải là siêu khóa hoặc A là thuộc tính khóa.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            `],
            ['Chuẩn hóa và kiểm tra lại mô hình ER','PTTKHT23',`
            <p><b>Chuẩn hóa và kiểm tra lại mô hình ER</b></p>

            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse231" role="button" aria-expanded="false"
                aria-controls="collapse231">
                Trường hợp lược đồ quan hệ (LĐQH) chưa là 1NF
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse232" role="button" aria-expanded="false"
                aria-controls="collapse232">
                Trường hợp lược đồ quan hệ chưa là 2NF
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse233" role="button" aria-expanded="false"
                aria-controls="collapse233">
                Trường hợp lược đồ quan hệ chưa là 3NF
              </a>
            </p>
  
            <div>
              <div class="collapse" id="collapse231">
                <div class="card card-body">
                  <p><b>Trường hợp lược đồ quan hệ (LĐQH) chưa là 1NF</b></p>
                  <p>Khi một lược đồ quan hệ chưa là 1NF thì nó có chứa thuộc tính lặp hoặc thuộc tính phức hợp. Nếu lược
                    đồ có thuộc tính lặp thì ta tách thành hai lược đồ con:</p>
                  <ul>
                    <li>Lược đồ quan hệ 1: gồm các thuộc tính lặp và khóa chính xác định chúng;</li>
                    <li>Lược đồ quan hệ 2: gồm các thuộc tính còn lại (đơn) và khóa chính;</li>
                  </ul>
  
                  <p>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse2311" role="button"
                      aria-expanded="false" aria-controls="collapse2311">
                      Ví dụ 1
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse2311" role="button"
                      aria-expanded="false" aria-controls="collapse2311">
                      Ví dụ 2
                    </a>
                  </p>
  
                  <div>
                    <div class="collapse" id="collapse2311">
                      <div class="card card-body">
                        <p>Ví dụ 1: Cho hóa đơn bán hàng kiêm phiếu xuất kho như sau</p>
                        <center>
                          <img class="w-75" src="./assets/img/PTTKHT/chap5/img9.png" alt="">
                        </center>
  
  
                        <p>
                          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse23111" role="button"
                            aria-expanded="false" aria-controls="collapse23111">
                            Chuẩn hóa 1NF
                          </a>
                          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse23112" role="button"
                            aria-expanded="false" aria-controls="collapse23112">
                            Output hóa đơn bán hàng
                          </a>
                        </p>
                        <div>
                          <div class="collapse" id="collapse23111">
                            <div class="card card-body">
                              <p><b>Chuẩn hóa 1NF</b></p>
                              <ol>
                                <li>Xác định các đầu ra</li>
                                <li>Liệt kê các thuộc tính</li>
                                <li>Ghi bên cạnh thuộc tính
                                  <ul>
                                    <li>R: thuộc tính lặp (Repeatable)</li>
                                    <li>S: thuộc tính thứ sinh (Secondary)</li>
                                  </ul>
                                </li>
                              </ol>
                            </div>
                          </div>
                          <div class="collapse" id="collapse23112">
                            <div class="card card-body">
                              <center>
                                <img src="./assets/img/PTTKHT/chap5/img10.png" alt="" class="w-75">
                              </center>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="collapse" id="collapse2312">
                        <div class="card card-body">
                          <p><b>Ví dụ 2. Thiết kế và chuẩn hóa dữ liệu
                              từ đầu ra</b></p>
                          <p>Cho đầu ra: Tờ “hóa đơn bán hàng”
                            ta lập được danh sách các thuộc tính</p>
                          <center>
                            <img src="./assets/img/PTTKHT/chap5/img11.png" alt="" class="w-75">
                          </center>
                          <center>
                            <img src="./assets/img/PTTKHT/chap5/img12.png" alt="" class="w-75">
                          </center>
                        </div>
                      </div>
                    </div>
  
  
                  </div>
                </div>
  
              </div>
              <div class="collapse" id="collapse232">
                <div class="card card-body">
                  <p><b>Trường hợp lược đồ quan hệ chưa là 2NF</b></p>
                  <p>Khi một lược đồ quan hệ là 1NF nhưng không là 2NF thì trong quan hệ sẽ tồn tại thuộc tính không khóa
                    phụ
                    thuộc vào một bộ phận của khóa chính. Khi đó ta tách thành hai lược đồ quan hệ con</p>
                  <ul>
                    <li>Lược đồ quan hệ 1: gồm các thuộc tính phụ thuộc không đầy đủ vào khóa chính và phần khóa bị phụ
                      thuộc</li>
                    <li>Lược đồ quan hệ 2: gồm các thuộc tính còn lại và khóa chính</li>
                  </ul>
  
                  <p><b>Ví dụ</b></p>
                  <img src="./assets/img/PTTKHT/chap5/img13.png" class="w-75" alt="">
                </div>
              </div>
              <div class="collapse" id="collapse233">
                <div class="card card-body">
                  <p><b>Trường hợp lược đồ quan hệ chưa là 3NF</b></p>
                  <p>Khi một quan hệ là 2NF nhưng không là 3NF thì sẽ tồn tại phụ thuộc hàm bắc cầu trong quan hệ. Khi đó
                    ta
                    tách thành hai lược đồ quan hệ con:</p>
                  <ul>
                    <li>Lược đồ quan hệ 1: gồm các thuộc tính phụ thuộc bắc cầu và thuộc tính cầu</li>
                    <li>Lược đồ quan hệ 2: gồm các thuộc tính còn lại và thuộc tính cầu</li>
                  </ul>
  
                  <p><b>Ví dụ</b></p>
                  <center>
                    <img src="./assets/img/PTTKHT/chap5/img14.png" alt="" class="w-75">
                  </center>
  
                  <p>Quá trình chuẩn hóa có thể mô tả bằng sơ đồ dưới đây</p>
  
                  <center>
                    <img src="./assets/img/PTTKHT/chap5/img15.png" alt="" class="w-75">
                  </center>
                </div>
              </div>
            </div>
            `]
        ]
    },
    PTTKHT3: {
        title: `Thiết kế cơ sở dữ liệu logic`,
        index: [
            ['Mục đích thiết kế cơ sở dữ liệu logic', 'PTTKHT31', `
            <p><b>Mục đích thiết kế cơ sở dữ liệu logic</b></p>

          <ul>
            <li>Xây dựng CSDL thỏa mãn</li>
            <li>Hợp lý: đủ dùng và không dư thừa</li>
            <li>Truy nhập thuận lợi</li>
            <li>Tìm kiếm, cập nhật</li>
            <li>Bổ sung và loại bỏ sao cho nhanh chóng và tiện dùng</li>
            <li>Xây dựng sơ đồ dữ liệu quan hệ</li>
            <li>Chuyển đổi sơ đồ ERD sang DSD
              <ul>
                <li>Chuyển đổi quan hệ 1 chiều</li>
                <li>Chuyển đổi quan hệ 2 chiều
                  <ul>
                    <li>Quan hệ 1-1</li>
                    <li>Quan hệ 1-N</li>
                    <li>Quan hệ N-M</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>

            `],
            ['Bảng quan hệ, trường dữ liệu cho bảo mật', 'PTTKHT32', `
            <p><b>Bảng quan hệ, trường dữ liệu cho bảo mật</b></p>

          <ul>
            <li>Bảng quan hệ:
              <ul>
                <li>user, group</li>
                <li>employee</li>
                <li>permission</li>
              </ul>
            </li>
            <li>Trường dữ liệu:
              <ul>
                <li>Thêm iduser vào DONHANG để quản lý người tạo</li>
                <li>Thêm maktra vào DONHANG để kiểm tra việc truy cập trái phép vào CSDL</li>
              </ul>
            </li>
          </ul>
            `],
            ['Mô hình dữ liệu logic của hệ thống', 'PTTKHT33', `
            <p><b>Mô hình dữ liệu logic của hệ thống</b></p>

            <p>Nghiên cứu tình huống</p>
              <ul>
                <li>DONHANG – CT_DONHANG: truy xuất cùng nhau → nghiên cứu gộp thành một bảng</li>
                <li>Trường thanhtien = Soluong * Dongia: nếu thường xuyên đơn hàng có nhiều mặt hàng → nghiên cứu thêm
                  trường thành tiền</li>
                <li>Bảng dữ liệu tương ứng kho lưu tay → loại bỏ</li>
                <li>Thêm bảng dữ liệu bảo mật và xác định quan hệ</li>
                <li>Ước lượng khối lượng lưu trữ</li>
              </ul>
            `],
            ['Đặc tả cấu trúc', 'PTTKHT34', `
            <p><b>Đặc tả cấu trúc</b></p>
            <center>
              <img src="./assets/img/PTTKHT/chap5/img16.png" alt="" class="w-75">
            </center>
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse341" role="button" aria-expanded="false" aria-controls="collapse341">
                Thiết kế cơ sở dữ liệu bằng mô hình ERD
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse342" role="button" aria-expanded="false" aria-controls="collapse342">
                Ví dụ
              </a>
            </p>
  
            <div>
              <div class="collapse" id="collapse341">
                <div class="card card-body">
                  <p><b>Thiết kế cơ sở dữ liệu bằng mô hình ERD</b></p>
                  <p>Mô hình quan hệ thực thể (Entity Relationship Diagram ERD)</p>
                  <ul>
                    <li>Khái niệm cơ bản (Basic Concepts)
                      <ul>
                        <li>Thực thể (Entity)</li>
                        <li>Thuộc tính (Attributes)</li>
                        <li>Quan hệ (Relation)</li>
                      </ul>
                    </li>
                    <li>Sơ đồ quan hệ thực thể
                      <br>
                      <p>Ký pháp (Symbols)</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="collapse" id="collapse342">
                <div class="card card-body">
                  <p><b>Ví dụ</b></p>
  
                  <p><b>Thiết kế cơ sở dữ liệu bằng mô hình ERD</b></p>
  
                  <p>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse3421" role="button" aria-expanded="false" aria-controls="collapse3421">
                      Bước 1
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse3422" role="button" aria-expanded="false" aria-controls="collapse3422">
                      Bước 2
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse3423" role="button" aria-expanded="false" aria-controls="collapse3423">
                      Bước 3
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse3424" role="button" aria-expanded="false" aria-controls="collapse3424">
                      Bước 4
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse3425" role="button" aria-expanded="false" aria-controls="collapse3425">
                      Bước 5
                    </a>
                  </p>
  
                  <div>
                    <div class="collapse" id="collapse3421">
                      <div class="card card-body">
                        <p><b>Bước 1</b>. Xác định tên các thuộc tính, loại thuộc tính...</p>
  
                        <p>Công ty có nhiều cửa hàng. Các cửa hàng nhận hàng hóa trực tiếp từ nhà cung cấp, rồi bán trực tiếp cho khách hàng. Công ty có một số trung tâm bảo hàng; nhân viên bảo hành chịu trách nhiệm bảo hành cho một số lượng khách hàng.</p>
  
                        <p>Các thực thể tìm thấy (The entities have been found)</p>
  
                        <center>
                          <img src="./assets/img/PTTKHT/chap5/img17.png" alt="" class="w-75">
                        </center>
                      </div>
                    </div>
                    <div class="collapse" id="collapse3422">
                      <div class="card card-body">
                        <p><b>Bước 2</b>. Xác định mối quan hệ giữa các thực thể</p>
                        <p>Động từ nhận hàng liên kết giữa thực thể Cửa hàng với thực thể Nhà cung cấp; động từ chịu trách nhiệm bảo hành liên kết giữa thực thể Nhân viên bảo hành với thực thể Khách hàng...</p>
                      </div>
                    </div>
                    <div class="collapse" id="collapse3423">
                      <div class="card card-body">
                        <p><b>Bước 3</b>. Xác định mức độ quan hệ giữa các thực thể</p>
                        <p>Ví dụ</p>
                        <ul>
                          <li>Một PHÒNG CÔNG TÁC được lãnh đạo bởi một TRƯỞNG PHÒNG</li>
                          <li>Một PHÒNG CÔNG TÁC có nhiều NHÂN VIÊN</li>
                        </ul>
                        <p>Nhưng cặp số lượng: Mỗi - Nhiều, Một - Một, Một - Nhiều... như vậy được gọi là mức độ của quan hệ.
                          Người ta dùng các ký hiệu :<b>1@1</b>, <b>1@N</b> và <b>N@M</b> để chỉ các loại quan hệ đó.</p>
                      </div>
                    </div>
                    <div class="collapse" id="collapse3424">
                      <div class="card card-body">
                        <p><b>Bước 4</b>. Vẽ sơ đồ quan hệ thức thể ERD</p>
  
                        <center>
                          <img src="./assets/img/PTTKHT/chap5/img18.png" alt="" class="w-75">
                        </center>
                      </div>
                    </div>
                    <div class="collapse" id="collapse3425">
                      <div class="card card-body">
                        <p><b>Bước 5</b>. Hạ bậc số chiều quan hệ và chuyển đổi sang DSD</p>
  
                        <center>
                          <img src="./assets/img/PTTKHT/chap5/img19.png" alt="" class="w-75">
                          <img src="./assets/img/PTTKHT/chap5/img20.png" alt="" class="w-75">
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
    PTTKHT4: {
        title: `Thiết kế cơ sở dữ liệu vật lý`,
        index: [
            ['Mục đích và các khái niệm', 'PTTKHT41', `
            <p><b>Mục đích và các khái niệm</b></p>
            <p>Mục đích</p>
            <ul>
              <li>Thiết kế cơ sở dữ liệu vật lý nhằm mục đích chuyển mô hình dữ liệu logic thành các đặc tả dữ liệu vật lý phù hợp
                điều kiện thiết bị và môi trường cụ thể trong không gian và nhu cầu sử dụng.</li>
              <li>Mô hình tổ chức về xử lý nhằm xác định rõ các công việc do ai làm, làm ở đâu, làm khi nào, làm theo phương
                thức nào?</li>
                <br>
              <p>Các khái niệm</p>
              <ul>
                <li>Nơi làm việc
                  <ul>
                    <li>Một HTTT quản lý được chia thành nhiều bộ phận, mỗi bộ phận được gọi là một nơi làm việc;</li>
                    <li>Nơi làm việc bao gồm: vị trí, con người, trang thiết bị tại nơi làm việc.</li>
                  </ul>
                </li>
                <li>Phương thức xử lý: là cách thức thực hiện công việc. Mỗi công việc có thể được thực hiện bởi một trong ba phương thức xử lý:
                  <ul>
                    <li>Xử lý thủ công: do con người trực tiếp thao tác trên đối tượng;</li>
                    <li>Xử lý tự động;</li>
                    <li>Xử lý tương tác người – máy.</li>
                  </ul>
                </li>
                <li>Biến cố ở mức tổ chức: là biến cố của hệ thống nhưng được đặt ở nơi phát sinh ra nó hay là nơi nhận biết
                  nó. Ở mức tổ chức, một biến cố còn phải quan tâm:
                  <ul>
                    <li>Thời gian phản ứng: là thời gian tối đa được chờ đợi từ khi biến cố xuất hiện cho đến khi công việc được
                      kích hoạt.</li>
                    <li>Tần suất: số lần xuất hiện lại biến cố trong một đơn vị thời gian.</li>
                    <li>Chu kỳ: là khoảng thời gian mà biến cố sẽ xuất hiện trở lại</li>
                  </ul>
                </li>
                <li>Bảng công việc
                  <ul>
                    <li>Ở mức tổ chức công việc phải được xác định rõ: nơi làm việc, phương thức làm việc, tần suất và chu kỳ
                      của nó.</li>
                    <li>Các đặc trưng này được thể hiện trong bảng công việc sau đây</li>
                  </ul>
                </li>
              </ul>
            </ul>
  
            <center>
              <img src="./assets/img/PTTKHT/chap5/img22.png" alt="">
            </center>
            `],
            ['Thiết kế vật lý và phương án cài đặt', 'PTTKHT42', `
            <p><b>Thiết kế vật lý và phương án cài đặt</b></p>

          <ul>
            <li>Mô hình vật lý sẽ là thể hiện cụ thể trên máy tính cho giải pháp dữ liệu đã được lựa chọn. Nó được thể hiện ở hai khía cạnh: cấu trúc dữ liệu cụ thể và phương thức truy nhập</li>
            <li>Cũng như các mô hình đã khảo sát ở trước, mô hình vật lý được mô tả qua mô hình vật lý về dữ liệu và mô hình vật lý về xử lý.</li>
            <li>Thiết kế cơ sở dữ liệu vật lý là quá trình ánh xạ cấu trúc dữ liệu logic được xây dựng ở mô hình tổ chức dữ liệu vào mô hình bên trong hệ thống</li>
          </ul>

          <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse421" role="button" aria-expanded="false" aria-controls="collapse421">
              Mô hình vật lý về dữ liệu
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse422" role="button" aria-expanded="false" aria-controls="collapse422">
              Thiết kế các trường
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse423" role="button" aria-expanded="false" aria-controls="collapse423">
              Thiết kế các file
            </a>
          </p>

          <div>
            <div class="collapse" id="collapse421">
              <div class="card card-body">
                <p><b>Mô hình vật lý về dữ liệu</b></p>

                <br>
                <p>Thiết kế cơ sở dữ liệu vật lý</p>
                <p>Đa số các hệ thống thông tin hiện nay đều sử dụng một hệ quản trị cơ sở dữ liệu nào đó để tạo ra cơ sở dữ liệu cho hệ thống. Thiết kế cơ sở dữ liệu vật lý bao gồm các bước sau:</p>
                <ul>
                  <li>Thiết kế cơ sở dữ liệu: mô tả các file dữ liệu, file chỉ mục,... sẽ được truy cập trong bộ nhớ máy tính như
                    thế nào.</li>
                  <li>Thiết kế hệ thống và cấu trúc chương trình: mô tả các chương trình và các mô đun chương trình khác nhau
                    tương ứng với sơ đồ luồng dữ liệu và những yêu cầu đặt ra trong các bước phân tích trước.</li>
                </ul>
              </div>
            </div>
            <div class="collapse" id="collapse422">
              <div class="card card-body">
                <p><b>Thiết kế các trường</b></p>
                <p>Các yêu cầu về việc thiết kế các trường:</p>
                <ul>
                  <li>Tiết kiệm không gian nhớ.</li>
                  <li>Biểu diễn được mọi giá trị có thể</li>
                  <li>Cài đặt các ràng buộc toàn vẹn của dữ liệu.</li>
                  <li>Đặt giá trị mặc định (Default) để giảm thiểu thời gian nhập dữ liệu.</li>
                  <li>Chọn kiểu dữ liệu và độ rộng của trường</li>
                  <li>Khai báo độ rộng vừa đủ.</li>
                  <li>Chọn đúng kiểu dữ liệu</li>
                  <li>Không làm phức tạp cấu trúc dữ liệu của hệ thống</li>
                </ul>
              </div>
            </div>
            <div class="collapse" id="collapse423">
              <div class="card card-body">
                <p><b>Thiết kế các file</b></p>
                <ul>
                  <li>File giao dịch (transaction file): là file dữ liệu tạm thời phục vụ cho các hoạt động hằng ngày của tổ chức.
                    <br>
                    File này thường được thiết kế để phục vụ việc xử lý nhanh các tình huống có thể xảy ra.</li>
                  <li>File làm việc (work file): file tạm thời để lưu kết quả trung gian, file này tự động xóa đi khi không cần thiết.</li>
                  <li>File bảo vệ (protection file): file được thiết kế để lưu trữ các file khác nhau có nguy cơ bị sai hỏng trong quá trình làm việc.</li>
                  <li>File lịch sử (history file): file chứa những dữ liệu cũ hiện không sử dụng, nhưng có thể sử dụng để làm một
                    việc gì đó khi cần thiết.</li>
                </ul>

                <p><b>Một ví dụ về thiết kế file dữ liệu</b></p>
                <p>Trong hệ thống thông tin “Quản lý kho hàng” chúng ta đã có mô hình tổ chức dữ liệu của hệ thống là các quan
                  hệ sau:</p>

                  <center>
                    <img src="./assets/img/PTTKHT/chap5/img23.png" alt="" class="w-75">
                    <img src="./assets/img/PTTKHT/chap5/img24.png" alt="" class="w-75">
                    <img src="./assets/img/PTTKHT/chap5/img25.png" alt="" class="w-75">
                    <img src="./assets/img/PTTKHT/chap5/img26.png" alt="" class="w-75">
                  </center>
              </div>
            </div>
          </div>
            `],
            ['Yếu tố cần quan tâm khi thiết kế CSDL vật lý', 'PTTKHT43', `
                <p><b>Yếu tố cần quan tâm khi thiết kế CSDL vật lý</b></p>

            <ul>
                <li>Lấy dữ liệu nhanh.</li>
                <li>Thông lượng các giao dịch xử lý lớn</li>
                <li>Sử dụng hiệu quả không gian nhớ</li>
                <li>Tránh được sai xót và mất dữ liệu.</li>
                <li>Tối ưu hóa nhu cầu tổ chức tệp.</li>
                <li>Đáp ứng được nhu cầu tăng trưởng dữ liệu.</li>
                <li>An toàn.</li>
            </ul>
            `]
        ]
    }
}