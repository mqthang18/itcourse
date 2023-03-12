const PTTKHT4 = {
    PTTKHT41: {
        title: 'Các hoạt động chính của giai đoạn thiết kế hệ thống thông tin',
        index: [
            ['Giới thiệu', 'PTTKHT411', `
            <p><b>Giới thiệu</b></p>
            <p>Thiết kế hệ thống - Giai đoạn III: Mô tả chi tiết hệ thống mới</p>
            <p>Các hoạt động</p>
            <ul>
              <li>Phát triển đặc tả cho: phần cứng, phần mềm, con người, dữ liệu và các sản phẩm thông tin thỏa mãn các
                yêu cầu chức năng của hệ thống đề xuất</li>
              <li>Sản phẩm: đặc tả hệ thống</li>
            </ul>
            <center>
              <img src="./assets/img/PTTKHT/Chap4/img1.png" alt="" class="w-75">
            </center>
            `],
            ['Thiết kế logic', 'PTTKHT412', `
            <p><b>Thiết kế logic</b></p>
            <ul>
              <li>Tập trung vào các kỹ thuật
                <ul>
                  <li>Thiết kế cơ sở dữ liệu;</li>
                  <li>Hệ thống xử lý logic;</li>
                  <li>Kiểm soát để hệ thống CSDL và hệ thống xử lý phải tạo được đủ các thông tin đầu ra cho quản lý</li>
                </ul>
              </li>
              <li>Trả lời câu hỏi:
                <br>
                Các yếu tố được thiết kế ra:
                <ul>
                  <li>Sẽ làm gì?</li>
                  <li>Để làm gì?</li>
                </ul>
              </li>
              <li>Thiết kế logic bao gồm:
                <ul>
                  <li>Thiết kế CSDL (Database Design)</li>
                  <li>Thiết kế xử lý (Process Design)</li>
                  <li>Thiết kế cập nhật (Data Update Design)</li>
                </ul>
              </li>
            </ul>
  
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse111" role="button" aria-expanded="false"
                aria-controls="collapse111">
                Thiết kế cơ sở dữ liệu
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse112" role="button" aria-expanded="false"
                aria-controls="collapse112">
                Thiết kế xử lý
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse113" role="button" aria-expanded="false"
                aria-controls="collapse113">
                Thiết kế cập nhật
              </a>
            </p>
            <div>
              <div class="collapse" id="collapse111">
                <div class="card card-body">
                  <p><b>Thiết kế CSDL</b></p>
                  <ul>
                    <li>Thiết kế mô hình dữ liệu logic là quá trình chuyển một mô hình dữ liệu quan niệm sang mô hình dữ
                      liệu logic</li>
                    <li>Thiết kế logic được sử dụng để mô tả các dữ liệu bằng cách sử dụng những ký hiệu tưởng ứng với mô
                      hình dữ liệu mà nhiều hệ quản trị CSDL xây dựng trên nó. Như vậy, dễ dàng chuyển mô hình dữ liệu
                      logic sang tệp vật lý cho hệ quản trị CSDL quản lý</li>
                    <li>Phần lớn các hệ quản trị CSDL hiện nay như: SQL Server, My SQL, Access, Oracle... đều tổ chức theo
                      mô hình dữ liệu quan hệ, nên mô hình dữ liệu logic được dùng phổ biến</li>
                  </ul>
                </div>
              </div>
              <div class="collapse" id="collapse112">
                <div class="card card-body">
                  <p><b>Thiết kế xử lý</b></p>
                  <ul>
                    <li>Các sơ đồ logic của xử lý chỉ làm rõ những quan hệ có tính chất ngữ nghĩa của các dữ liệu và không
                      quan tâm tới các yếu tố mang tính tổ chức như: ai thực hiện xử lý, ở đâu, khi nào, và như thế nào
                    </li>
                    <li>Để biểu diễn những hoạt động như vậy phải dùng những khái niệm: sự kiện, công việc và kết quả.
                      <ul>
                        <li>Sự kiện: Thực hiện một hoặc nhiều công việc.</li>
                        <li>Công việc: là một tập hợp các xử lý có thể thực hiện có chung các sự kiện khởi sinh.</li>
                        <li>Kết quả: Sản phẩm của việc thực hiện các công việc</li>
                        <li>Đồng bộ: Điều kiện logic kết hợp các sự kiện, thể hiện các quy tắc quản lý mà HTTT phải kiểm
                          tra để
                          thực hiện các công việc</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="collapse" id="collapse113">
                <div class="card card-body">
                  <p><b>Thiết kế cập nhật</b></p>
                  <ul>
                    <li>Mục đích: Đảm bảo tính xác thực của thông tin</li>
                    <li>Yêu cầu: Kiểm tra mọi thông tin nhập/xuất
                      <br>
                      Nơi tiến hành kiểm tra
                      <ul>
                        <li>Nơi thu thập thông tin cập nhật: Trung tâm máy tính;</li>
                        <li>Nơi nhận dữ liệu xuất</li>
                      </ul>
                    </li>
                    <li>Nội dung kiểm tra: Phát hiện lỗi và sửa lỗi</li>
                    <li>Kiểm tra thông tin nhập xuất
                      <br>
                      Hình thức kiểm tra:
                      <ul>
                        <li>Bằng tay/bằng máy: Đầy đủ/không đầy đủ;</li>
                        <li>Trực tiếp/gián tiếp</li>
                        <li>Thứ tự kiểm tra: trực tiếp trước, gián tiếp sau</li>
                      </ul>
                    </li>
  
                  </ul>
                </div>
              </div>
            </div>
            `],
            ['Thiết kế vật lý ngoài', 'PTTKHT413', `
            <p><b>Thiết kế vật lý ngoài</b></p>
            <ul>
              <li>Mô tả những chi tiết nhìn thấy được của hệ thống</li>
              <li>Trong thiết kế vật lý, cần sử dụng tốt những khái niệm của môn tổ chức hợp lý lao động nhận thức, đặc
                biệt là khi thiết kế các giao tác người - máy</li>
              <li>Các nhiệm vụ chính của thiết vật lý bao gồm:
                <ul>
                  <li>Lập kế hoạch;</li>
                  <li>Thiết kế chi tiết các giao diện vao ra;</li>
                  <li>Thiết kế cách thức tương tác với phần tin học hóa;</li>
                  <li>Thiết kế các thủ tục thủ công;</li>
                  <li>Chuẩn bị và trình bày báo cáo</li>
                </ul>
              </li>
  
            </ul>
            `],
            ['Thiết kế vật lý trong', 'PTTKHT414', `
            <p><b>Thiết kế vật lý trong</b></p>
          <ul>
            <li>Trong quá trình thiết kế hệ thống vật lý ngoài, vấn đề đặt ra hàng đầu là phải làm thế nào tối thiểu hóa
              thời gian dùng tương tác với hệ thống</li>
            <li>Thiết kế vật lý ngoài bao gồm các công việc:
              <ul>
                <li>Thiết kế phần cứng (Hardware design)</li>
                <li>Thiết kế giao diện (Interface, reports...)</li>
                <li>Thiết kế thủ tục công (Manual Procedures)</li>
              </ul>
            </li>
          </ul>
          <center>
            <img src="./assets/img/PTTKHT/Chap4/img2.png" alt="" class="w-50">
          </center>
            `]
        ]
    },
    PTTKHT42: {
        title: 'Thiết kế kiến trúc tổng thể',
        index: [
            ['Mục đích và cách thức thực hiện','PTTKHT421',`
            <p><b>Mục đích và cách thức thực hiện</b></p>

          <ul>
            <li>Mục đích
              <br>
              Kiến trúc tổng thể của hệ thống, trong đó
              <ul>
                <li>Phần xử lý thủ công, các thủ tục xử lý thủ công;</li>
                <li>Phần việc máy tính, tiến trình đo máy tính thực hiện;</li>
              </ul>
            </li>
            <li>Cách thực hiện
              <br>Phân định công việc thủ công máy tính
              <ul>
                <li>Sử dụng DFD tách công việc thủ công - máy tính</li>
                <li>Kết quả: Đường ranh giới thủ công - máy tính</li>
                <li>Hoàn chỉnh DFD hệ thống</li>
              </ul>
            </li>
          </ul>
            `],
            ['Nguyên tắc thiết kế','PTTKHT422',`
            <p><b>Nguyên tắc thiết kế</b></p>
            <ul>
              <li>Đảm bảo rằng người sử dụng luôn đang kiểm soát hệ thống. Có nghĩa là, họ luôn luôn có thể thông báo cho
                hệ thống những việc phải thực hiện.</li>
              <li>Thiết kế hệ thống theo thói quen và kinh nghiệm của người sử dụng</li>
              <li>Che khuất những bộ phận bên trong của các phần mềm và phần cứng tạo thành hệ thống</li>
              <li>Cung cấp thông tin tư liệu trên màn hình</li>
              <li>Giảm tới mức tối thiểu lượng thông tin mà người sử dụng phải nhớ trong khi sử dụng hệ thống</li>
              <li>Dựa vào những quy tắc đã được chấp nhận về đồ họa, ký họa khi thể hiện thông tin trên màn hình hoặc trên
                những vật mang tin khác.</li>
            </ul>
            `],
            ['Hoàn chỉnh hệ thống','PTTKHT423',`
            <p><b>Hoàn chỉnh hệ thống</b></p>
            <ul>
              <li>Hoàn chỉnh DFD hệ thống</li>
              <li>Mục đích</li>
              <li>Mô tả tiến trình hệ thống thực hiện</li>
              <li>Phương thức xử lý (theo lô, trực tuyến, thời gian thực...)</li>
              <li>Đối tượng thực hiện, phương tiện, công cụ sử dụng</li>
              <li>Nội dung xử lý (thuật lý, công thức)</li>
              <li>Khi nào thực hiện</li>
              <li>Kho dữ liệu lưu trữ bởi máy tính</li>
              <li>Sẽ xuất hiện trong mô hình dữ liệu của hệ thống</li>
              <li>Thực hiện: Diễn tả ý tưởng thiết kế bằng DFD hệ thống</li>
            </ul>
            `]
        ]
    },    
    PTTKHT43: {
        title: 'Thiết kế giao diện',
        index: [
            ['Mục đích của thiết kế giao diện','PTTKHT431',`
            <p><b>Mục đích của thiết kế giao diện</b></p>

            <p>Thiết kế môi trường giao tiếp giữa người sử dụng và hệ thống, thỏa mãn điều kiện</p>
            <ul>
              <li>Dễ sử dụng: Giao diện dễ sử dụng ngay cả với những người không có kinh nghiệm</li>
              <li>Dễ học: Các chức năng gần gũi với tư duy của người sử dụng để họ có thể nắm bắt dễ dàng nhanh chóng.
              </li>
              <li>Tốc độ thao tác: Giao diện không đòi hỏi các thao tác phức tạp hay dài dòng, hỗ trợ các phím tắt, phím
                nóng.</li>
              <li>Dễ phát triển: Giao diện được xây dựng dễ dàng, sẵn sàng đáp ứng các yêu cầu thay đổi của người sử dụng
              </li>
            </ul>
            `],
            ['Các loại giao diện','PTTKHT432',`
            <p><b>Các loại giao diện</b></p>
            <ul>
              <li><b>Hộp hội thoại</b>: là các giao diện phục vụ cho việc kiểm soát hệ thống, trao đổi thông tin giữa
                người sử dụng và hệ thống, kiểm tra quyền truy nhập (tên, mật khẩu), các hướng dẫn sử dụng hệ thống, các
                thông báo lỗi sử dụng hay lỗi hệ thống nếu có...</li>
              <li><b>Màn hình nhập dữ liệu</b>: là các khung nhập liệu cho phép người sử dụng tiến hành nhập dữ liệu cho
                hệ thống hay cung cấp thông tin cho việc tìm kiếm dữ liệu, đưa ra các báo cáo theo yêu cầu</li>
              <li><b>Màn hình báo cáo</b>: là các biểu mẫu hiển thị các thông tin được thu thập và tổng hợp theo yêu cầu
                của người sử dụng</li>
            </ul>
            `],
            ['Các nguyên tắc chung khi thiết kế giao diện','PTTKHT433',`
            <p><b>Các nguyên tắc trong thiết kế giao diện</b></p>
            <ul>
              <li><b>Thông tin phản hồi</b>: Luôn cung cấp thông tin phản hồi về công việc đang tiến hành.</li>
              <li><b>Thông tin trạng thái</b>: Cung cấp cho người sử dụng thông tin về trạng thái của hệ thống.</li>
              <li><b>Công việc tối thiểu</b>: Hạn chế tối đa sự cố gắng không cần thiết của người sử dụng.</li>
              <li><b>Trợ giúp</b>: Sẵn sàng cung cấp các trợ giúp khi người sử dụng cần</li>
              <li><b>Dễ dàng thoát ra</b>: Cho phép người sử dụng thoát ra khỏi hộp thoại dễ dàng bằng các thao tác quen
                thuộc.</li>
              <li><b>Làm lại</b>: Cho phép hủy bỏ các thao tác đã tiến hành, tăng khả năng thứ lỗi của chương trình.</li>
            </ul>
            `],
            ['Thiết kế giao diện vào','PTTKHT434',`
            <p><b>Thiết kế giao diện vào</b></p>
            <ul>
              <li>Giai đoạn thiết kế giao diện rất quan trọng vì
                <ul>
                  <li>Ảnh hưởng và tác động trực tiếp tới công việc thường ngày của những người sử dụng</li>
                  <li>Một lỗi của thiết kế vật lý (chẳng hạn một biểu khó đọc, một hội thoại không dứt khoát, một thủ tục
                    không thích ứng...) sẽ là nguyên nhân gây ra sự bực bội, chán nản và nhiều khi dẫn tới việc khước từ
                    sử dụng hệ thống.</li>
                </ul>
              </li>
              <li>Thiết kế các giao diện vào là xác định HTTT trình bày thông tin như thế nào cho người sử dụng khi nhập
                dữ liệu vào hệ thống. Thiết kế cách thức tương tác với phần tin học hóa là xác định cách thức mà người sử
                dụng hội thoại với HTTT và thiết kế các thủ tục thủ công cần phải đặc trưng hóa mọi tiến trình thủ công
                quanh việc sử dụng HTTT tin học hóa</li>
              <li>Cách thức thiết kế thông tin ra dựa trên cơ sở 4 vật mang tin cơ bản, cách thức nhập thông tin từ ngoài
                vào hệ thống</li>
              <li>Cách thức thiết kế giao tác thực đơn, giao diện lệnh, giao diện đồ họa và giao diện âm thanh</li>
            </ul>
  
            <p><b>Quy tắc thiết kế màn hình nhập liệu</b></p>
            <ul>
              <li>Khi nhập dữ liệu từ một tài liệu gốc, khuôn dạng màn hình phải giống như tài liệu gốc.</li>
              <li>Nên nhóm các trường trên màn hình theo một trật tự có ý nghĩa, theo trật tự tự nhiên, theo tần số sử
                dụng, theo chức năng hoặc theo tầm quan trọng.</li>
              <li>Không nhập các thông tin mà HTTT có thể truy tìm được từ CSDL hoặc tính toán được</li>
              <li>Đặt tên trường ở trên hoặc trước trường nhập</li>
              <li>Đặt các giá trị ngầm định cho phù hợp</li>
              <li>Sử dụng phím Tab, hoặc nháy chuột để chuyển trường nhập.</li>
            </ul>
            <p><b>Nguyên tắc trình bày thông tin trên màn hình</b></p>
            <p>Theo Dumas và Galitz thì có</p>
            <ul>
              <li>Đặt mọi thông tin gắn liền với một nhiệm vụ trên cùng một màn hình. Người sử dụng không phải nhớ thông
                tin từ màn hình này sang màn hình khác.</li>
              <li>Chỉ dẫn rõ ràng cách thoát khỏi màn hình. Ưu tiên đặt giữa các tiêu đề và xếp đặt thông tin theo trục
                trung tâm.</li>
              <li>Nếu đầu ra gồm nhiều trang màn hình thì mỗi trang phải được đánh số thứ tự. Việc này giúp người sử dụng
                biết mình đang ở đâu.</li>
              <li>Viết văn bản theo quy ước chung bằng cách sử dụng chữ in hoa, in thường, chữ gạch chân... và ngắt câu
                hợp lý.</li>
              <li>Đặt tên đầu cột cho mỗi cột và giữ tên đầu cột luôn hiện.</li>
              <li>Tổ chức các phần tử của danh sách theo trật tự quen thuộc trong quản lý</li>
              <li>Cân trái các cột văn bản và cân phải các cột số. Bảo đảm vị trí dấu thập phân thẳng hàng.</li>
              <li>Chỉ đặt màu cho những thông tin quan trọng</li>
            </ul>
            `],
            ['Thiết kế giao diện ra','PTTKHT435',`
            <p><b>Thiết kế giao diện ra</b></p>
            <ul>
              <li>Hình thức tài liệu xuất: đĩa, màn hình, giấy in</li>
              <li>Dạng tài liệu
                <ul>
                  <li>Có cấu trúc: Bảng biểu, phiếu;</li>
                  <li>Không có cấu trúc: Trả lời theo nhu cầu.</li>
                </ul>
              </li>
              <li>Yêu cầu đối với tài liệu xuất
                <ul>
                  <li>Đầy đủ, chính xác;</li>
                  <li>Dễ hiểu, dễ đọc;</li>
                  <li>Kích thước tài liệu phải phù hợp, các mục phải bố trí hợp lý;</li>
                  <li>Được người sử dụng đồng sử dụng.</li>
                </ul>
              </li>
              <li>Các hình thức xuất tài liệu
                <ul>
                  <li>Khung in sẵn;</li>
                  <li>Không có khung in sẵn.</li>
                </ul>
              </li>
              <li>Cách trình bày một tài liệu: gồm 3 phần
                <ul>
                  <li>Phần đàu: Các tiêu đề;</li>
                  <li>Phần thân: Chứa nội dung cơ bản thường được gom thành nhóm và có mối liên hệ logic với nhau;</li>
                  <li>Phần cuối: ngày tháng, các chữ ký nếu có</li>
                </ul>
              </li>
              <li>Có hai loại đưa ra
                <ul>
                  <li>Đơn chiếc</li>
                  <li>Tập thể</li>
                </ul>
              </li>
            </ul>
  
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse351" role="button"
                aria-expanded="false" aria-controls="collapse351">
                4 vật mang tin chính
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse352" role="button"
                aria-expanded="false" aria-controls="collapse352">
                Thiết kế báo cáo
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse353" role="button"
                aria-expanded="false" aria-controls="collapse353">
                Các dạng báo cáo
              </a>
            </p>
  
            <div>
              <div class="collapse" id="collapse351">
                <div class="card card-body">
                  <p><b>4 vật mang tin chính</b></p>
                  <p>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse3511" role="button"
                      aria-expanded="false" aria-controls="collapse351">
                      Giấy
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse3512" role="button"
                      aria-expanded="false" aria-controls="collapse352">
                      Màn hình
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse3513" role="button"
                      aria-expanded="false" aria-controls="collapse353">
                      Tiếng nói (Voice)
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse3514" role="button"
                      aria-expanded="false" aria-controls="collapse354">
                      Các vật mang tin từ tính và quang tính
                    </a>
                  </p>
                  <div>
                    <div class="collapse" id="collapse3511">
                      <div class="card card-body">
                        <p><b>Giấy</b> là vật mang tin được ưa chuộng. Người sử dụng đã quá quen thuộc với việc đọc thông
                          tin trên giấy, do vậy không cần phải hướng dẫn cách sử dụng thông tin ra trên giấy. Giấy được
                          lựa chọn khi:</p>
                        <ul>
                          <li>Thông tin ra được lưu trữ lại để dùng về sau</li>
                          <li>Thông tin ra cần phải có bút tích nhận xét qua nhiều người khác nhau</li>
                          <li>Thông tin có nội dung dài rất khó có thể cắt rời thành từng phần nhỏ hơn độc lập phận nọ với
                            phần kia</li>
                          <li>Yêu cầu tính pháp lý cao</li>
                        </ul>
                      </div>
                    </div>
                    <div class="collapse" id="collapse3512">
                      <div class="card card-body">
                        <p><b>Màn hình</b> là phương tiện thể hiện thông tin vô cùng sinh động và phong phú hiện nay</p>
                        <ul>
                          <li>Thông tin đầu ra ngắn và không cần phải lưu trữ lại. Công việc sau khi có đầu ra phải thực
                            hiện ngay (màn
                            hình là lý tưởng cho những đầu ra kiểu như trả lời " Giá vàng ở Hà Nội sáng nay là bao nhiêu?"
                          </li>
                          <li>Đầu ra dài nhưng có thể dễ dàng chia cắt thành các phần nhỏ hơn độc lập với nhau</li>
                          <li>Đầu ra rất phức tạp. Trong một HTTT cho lãnh đạo, thứ tự trình bày thông tin phụ thuộc vào
                            những gì vừa
                            nhìn thấy hoặc những gì thu hút sự chú ý của họ. Tính điều hướng.</li>
                          <li>Đầu ra là loại đồ họa, hình ảnh, video...</li>
                          <li>Chú ý: Có các loại màn hình theo kich cỡ (Inch), độ phân giải và các chế độ màu. Tất nhiên
                            là cả tiêu chuẩn
                            về giá cả.</li>
                        </ul>
                      </div>
                    </div>
                    <div class="collapse" id="collapse3513">
                      <div class="card card-body">
                        <p><b>Tiếng nói (Voice)</b></p>
                        <ul>
                          <li>Nên dùng cho những đầu ra đơn giản và ngắn</li>
                          <li>Đông người nghe, không gian rộng, không thuận tiện cho các vật mang tin khác</li>
                          <li>Kết hợp với điện thoại để tìm kiếm trên một cơ sở dữ liệu về khả năng sẵn có của hàng hóa
                            trong kho. Sử
                            dụng các phím điện thoại để cung cấp cho máy tính số hiệu người sử dụng, mật khẩu và số hiệu
                            sản phẩm
                            mà anh ta muốn biết về số lượng hiện có của nó trong kho. Máy tính sẽ trả lời bằng ngôn ngữ
                            nói.</li>
                          <li>Thiết bị ra là điện thoại di động thông minh smartphone hoặc máy tính bảng rất thú vị khi có
                            đầu ra bằng tiếng nói.</li>
                        </ul>
                      </div>
                    </div>
                    <div class="collapse" id="collapse3514">
                      <div class="card card-body">
                        <p><b>Các vật mang tin từ tính và quang tính</b></p>
  
                        <ul>
                          <li>Khi cần lưu trữ dữ liệu</li>
                          <li>Vận chuyển đi xa, bảo mật.</li>
                          <li>Xuất thông tin nhanh</li>
                          <li>Khối lượng thông tin ra cực lớn.
                            <br>
                            Trong ví dụ HTTT quản lý trạm nha khoa
                            <ul>
                              <li>Chọn màn hình để theo dõi những lần kiểm tra và làm việc của đại diện</li>
                              <li>In ra giấy và ra bản mềm các báo cáo tuần vì nó cần được gửi cho lãnh đạo công ty</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
  
                  </div>
                </div>
              </div>
              <div class="collapse" id="collapse352">
                <div class="card card-body">
                  <p><b>Thiết kế báo cáo</b></p>
                  <ul>
                    <li>Tên tài liệu/ báo cáo ( Report/document Title)</li>
                    <li>Đầu báo cáo (Report header)</li>
                    <li>Đầu nhóm (Group header)</li>
                    <li>Thân nhóm (Group body)</li>
                    <li>Cuối nhóm (Group footer)</li>
                    <li>Cuối báo cáo (Report footer)</li>
                  </ul>
                </div>
              </div>
              <div class="collapse" id="collapse353">
                <div class="card card-body">
                  <p><b>Các dạng báo cáo</b></p>
                  <ul>
                    <li>Báo cáo theo cột: Cách này chỉ thể hiện một số lượng cột tương đối hạn chế</li>
                    <li>Báo cáo theo cột trong từng nhóm: Cách thể hiện này dễ đọc hơn, tránh được việc nhắc lại cùng một phần
                      tử thông tin nhiều lần. Sử dụng nhóm là cách đơn giản để cải tiến việc thể hiện thông tin</li>
                    <li>Báo cáo theo dòng cho các bản ghi thông tin: Khi số lượng các phần tử thông tin quá lớn không thể sử
                      dụng khuôn dạng theo cột thì phải chọn phương thức thể hiện theo dòng</li>
                  </ul>
                </div>
              </div>
            </div>
  
            `],
        ]
    },    
    PTTKHT44: {
        title: 'Thiết kế mạng máy tính',
        index: [
            ['Phân tích lợi ích/thách thức', 'PTTKHT441', `
            <p><b>Phân tích lợi ích/thách thức</b></p>
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse41" role="button" aria-expanded="false" aria-controls="collapse41">
                Lợi ích
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse42" role="button" aria-expanded="false" aria-controls="collapse42">
                Thách thức
              </a>
            </p>
            <div>
              <div class="collapse" id="collapse41">
                <div class="card card-body">
                  <p><b>Lợi ích</b></p>
                  <ul>
                    <li>Dùng chung tệp tin, truyền đưa dữ liệu, làm việc nhóm;</li>
                    <li>Dùng chung các nguồn tài nguyên phần cứng;</li>
                    <li>Dùng chung phần mềm;</li>
                    <li>Giao lưu trực tuyến;</li>
                    <li>Góp phần giải quyết thách thức không gian và thời gian trong môi trường kinh doanh toàn cầu.</li>
                  </ul>
                </div>
              </div>
              <div class="collapse" id="collapse42">
                <div class="card card-body">
                  <p><b>Thách thức</b></p>
                  <ul>
                    <li>Chí phí thiết lập mạng lớn;</li>
                    <li>Đòi hỏi cao về kỹ năng người quản trị và người dùng;</li>
                    <li>Thách thức bảo mật và an toàn thông tin bức bách;</li>
                    <li>Đạo đức thông tin</li>
                  </ul>
                </div>
              </div>
            </div>
            `],
            ['Các loại mạng máy tính', 'PTTKHT442', `
            <p><b>Các loại mạng máy tính</b></p>

            <p>Phải đảm bảo các nguyên tắc sau:</p>
            <ul>
              <li>Đảm bảo sự tương thích: Các thiết bị mua mới và các thiết bị đã có phải làm việc được với nhau</li>
              <li>Đảm bảo khả năng mở rộng và nâng cấp: Nhu cầu về năng lực máy tính trong doanh nghiệp tăng không
                ngừng, dễ dàng vượt qua năng lực hiện có của các máy móc hiện thời</li>
              <li>Đảm bảo độ tin cậy: Trước khi đưa các thiết bị máy tính vào hệ thống cần phải kiểm nghiệm trên thực tế để đánh giá độ an toàn và tin cậy của thiết bị</li>
            </ul>
  
            <p>Các loại</p>
            <ul>
              <li>Mạng LAN (Local Area Network) - Mạng nội bộ: Trong phạm vi 1 cơ quan</li>
              <li>Mạng MAN (Metropolitan Area Network) - Mạng đô thị: Trong phạm vi một thành phố hay một quốc gia nhỏ</li>
              <li>Mạng WAN (Wide Area Network) - Mạng diện rộng: Trong phạm vi một quốc gia hay một châu lục</li>
              <li>Mạng GAN (Global Area Network) - Mạng toàn cầu: Trên toàn thế giới</li>
            </ul>
  
            <p><b>Ví dụ</b>: Sơ đồ mạng logic</p>
  
            <center>
              <img src="./assets/img/PTTKHT/Chap4/img3.png" class="w-75" alt="">
            </center>
            `]
        ]
    },
    PTTKHT45: {
        title: 'Thiết kế an ninh an toàn hệ thống',
        index: [
            ['Thiết kế kiểm soát', 'PTTKHT451', `
            <p><b>Thiết kế kiểm soát</b></p>

            <ul>
              <li>Mục đích: nhằm hạn chế các lỗi sau:
                <ul>
                  <li>Lỗi từ các thông tin thu thập;</li>
                  <li>Lỗi do các sự cố kỹ thuật gây ra;</li>
                  <li>Sự thâm nhập trái phép của người trong và ngoài hệ thống;</li>
                  <li>Rủi ro về môi trường như: cháy, bão lụt,...</li>
                </ul>
              </li>
              <li>Đề xuất các biện pháp nhằm đảm bảo:
                <ul>
                  <li>Tính chính xác;</li>
                  <li>Tính an toàn;</li>
                  <li>Tính riêng tư.</li>
                </ul>
              </li>
            </ul>
            `],
            ['Kiểm soát các xâm phạm từ phía con người', 'PTTKHT452', `
            <p><b>Kiểm soát các xâm phạm từ phía con người</b></p>

          <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse521" role="button" aria-expanded="false" aria-controls="collapse521">
              Xác định những điểm hở của hệ thống
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse522" role="button" aria-expanded="false" aria-controls="collapse522">
              Các biện pháp phòng ngừa, khắc phục
            </a>
          </p>
          <div>
            <div class="collapse" id="collapse521">
              <div class="card card-body">
                <p><b>Xác định những điểm hở của hệ thống</b></p>
                <ul>
                  <li>Điểm hở của hệ thống là điểm mà tại đó thông tin của hệ thống có khả năng bị truy cập trái phép, bị sửa đổi, lấy cắp, thậm chí phá hủy thông tin, có thể gây thiệt hại lớn cho cơ quan chủ quản hệ thống</li>
                  <li>Trong một hệ thống các điểm hở có thể là:
                    <ul>
                      <li>Luồng dữ liệu đi và đến tác nhân của hệ thống;</li>
                      <li>Luồng dữ liệu cắt ngang giữa phần thực hiện bằng máy tính và phần thực hiện thủ công;</li>
                      <li>Các kho dữ liệu hoặc các tệp;</li>
                      <li>Các đường truyền trên mạng (đối với hệ phân tán)...</li>
                    </ul>
                  </li>
                  <li>Các kiểu đe dọa có thể xảy ra từ điểm hở
                    <ul>
                      <li>Ăn cắp thông tin và tài sản</li>
                      <li>Thất thoát tài sản;</li>
                      <li>Quyết định sai;</li>
                      <li>Tốn kém, lãng phí;</li>
                      <li>Lộ bí mật</li>
                    </ul>
                  </li>
                  <li>Đánh giá đe dọa
                    <ul>
                      <li>Xác định trạng thái đe dọa (Khi nào? Tình huống nào?)</li>
                      <li>Mức độ thiệt hại (cao, vừa, bình thường)</li>
                    </ul>
                  </li>
                </ul>
                <p><b>Xác định trạng thái phát sinh đe dọa</b></p>
                <ul>
                  <li>Bước 1: Xác định tình huống đặc biệt phát sinh đe dọa: Sử dụng DFD hệ thống</li>
                  <li>Bước 2: Đánh giá xác suất xảy ra đe dọa
                    <ul>
                      <li>Cao: Tình huống có thể xuất hiện một cách đều đặn và tương đối thường xuyên;</li>
                      <li>Vừa: Tình huống có thể xuất hiện nhưng không thường xuyên và không đều đặn;</li>
                      <li>Thấp: Sự kiện hầu như không xuất hiện nhưng cũng có khả năng đó.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div class="collapse" id="collapse522">
              <div class="card card-body">
                <p><b>Các biện pháp phòng ngừa, khắc phục</b></p>
                <ul>
                  <li>Bảo mật vật lý: khóa, chuông báo động</li>
                  <li>Nhận dạng nhân sự
                    <ul>
                      <li>Mật khẩu;</li>
                      <li>Tạo mật mã: Mã hóa dữ liệu sang dạng mã không hiểu được. Người hiểu được phải có quy tắc giải mã.</li>
                      <li>Bảo mật bằng gọi lại: Sự truy nhập thực hiện một cách gián tiếp, qua một trạm kiểm soát, tương tự như
                        gọi điện thoại qua tổng đài, OTP.</li>
                    </ul>
                  </li>
                  <li>Phân biệt riêng tư
                    <ul>
                      <li>Gán cho mỗi loại người dùng một số quyền truy nhập nhất định</li>
                      <li>Cho phép một số người dùng được phép ủy quyền tức giao quyền truy nhập cho người khác
                        <ul>
                          <li>Mức thấp: Mỗi người một mật khẩu truy cập</li>
                          <li>Mức vừa: Phân loại người dùng và gán mỗi loại người dùng một số quyền nhất định;</li>
                          <li>Mức cao: Sử dụng nhiều tầng truy cập.</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
            `],
            ['Các mức bảo mật an toàn', 'PTTKHT453', `
            <p><b>Các mức bảo mật an toàn</b></p>
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 col-sm-6">
                  <ul>
                    <li>Mức 1 – Bảo mật mức hành chính</li>
                    <li>Mức 2 – Bảo mật mức hệ điều hành.</li>
                    <li>Mức 3 – Bảo mật mức ứng dụng.</li>
                    <li>Mức 4 – Bảo mật mức CSDL.</li>
                  </ul>
                </div>
                <div class="col-12 col-sm-6">
                  <center>
                    <img src="./assets/img/PTTKHT/Chap4/img4.png" alt="" class="w-75">
                  </center>
                </div>
              </div>
            </div>
            `]
        ]
    }
}

