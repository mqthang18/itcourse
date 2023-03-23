const PTTKHT6 = {
    PTTKHT1: {
        title: 'Quá trình phát triển hệ thống hướng đối tượng',
        index: [
            ['Nhận xét', 'PTTKHT11', `
            <p><b>Nhận xét</b></p>

          <ul>
            <li>Quá trình xây dựng một hệ thống thông tin hoặc nâng cấp hệ thống thông tin đã có được gọi là quá trình
              phát triển hệ thống (System Development Process).</li>
            <li>Quá trình phát triển một hệ thống thông tin là quá trình xác định xem hệ thống:
              <ul>
                <li>Làm cái gì (WHAT?)</li>
                <li>Làm ở đâu (WHERE?)</li>
                <li>Làm khi nào (WHEN?)</li>
                <li>Làm như thế nào (HOW?)</li>
              </ul>
            </li>
          </ul>
            `],
            ['Nghiên cứu hiện trạng và xác định các yêu cầu', 'PTTKHT12', `
            <div>
          <p><b>Nghiên cứu hiện trạng và xác định các yêu cầu</b></p>

          <ul>
            <li>Từ các yêu cầu của khách hàng chúng ta xác định được mục tiêu của hệ thống cần phát triển</li>
            <li>Thường đó là các yêu cầu chức năng về những gì mà hệ thống phải thực hiện. Ở giai đoạn này chưa cần chỉ
              ra các chức năng đó thực hiện như thế nào.</li>
            <li>Việc xác định đúng và đầy đủ các yêu cầu của bài toán là nhiệm vụ rất quan trọng, nó làm cơ sở cho các
              bước tiếp theo.</li>
            <li>Do đó, phải đặc tả được các yêu cầu của hệ thống (Sử dụng các Use Case để đặc tả các yêu cầu).</li>
          </ul>

          <div>
            <p><b>Các công việc cần phải làm trong giai đoạn này</b></p>

            <ul>
              <li>Hiểu rõ miền xác định của bài toán (Domain Understanding).</li>
              <li>Nắm bắt các yêu cầu của khách hàng/người sử dụng</li>
              <li>Phân loại (Classification): Theo tầm quan trọng hay theo chức năng chính của những người sử dụng</li>
              <li>Thẩm định (Validation): Kiểm tra xem các yêu cầu có thống nhất với nhau và đầy đủ không, đồng thời tìm
                cách giải quyết các mối mâu thuẫn giữa các yêu cầu nếu có.</li>
            </ul>
          </div>

          <div>
            <p><b>Nghiên cứu khả thi (Feasibility Study)</b></p>
            <p>Tính khả thi của một dự án tin học phải được thực hiện dựa trên các yếu tố bao gồm các khía cạnh:</p>
            <ul>
              <li>Tài chính</li>
              <li>Chiến lược</li>
              <li>Thị trường</li>
              <li>Con người và đối tác</li>
              <li>Kỹ thuật</li>
              <li>Công nghệ và phương pháp mô hình hóa</li>
            </ul>
          </div>

          <div>
            <p><b>Tóm lại, giai đoạn nghiên cứu sơ bộ, cần xem xét</b></p>

            <ul>
              <li>Các yêu cầu của người sử dụng, những nguồn tài nguyên có thể sử dụng, công nghệ, các ý tưởng của người
                sử dụng đối với hệ thống mới.</li>
              <li>Có thể thực hiện thảo luận, nghiên cứu, xem xét khía cạnh thương mại, phân tích khả năng lời - lỗ</li>
              <li>Thường trong giai đoạn này người ta cũng tiến hành tạo một phiên bản thô của lịch trình và kế hoạch sử
                dụng tài nguyên.</li>
              <li><span style="color: blue;">Kết quả của giai đoạn nghiên cứu sơ bộ là bản</span> <span
                  style="color:red;">Báo Cáo Kết Quả Nghiên Cứu Tính Khả Thi</span>.</li>
              <li>Khi hệ thống tương lai được chấp nhận dựa trên bản báo cáo này cũng là lúc giai đoạn Phân tích bắt
                đầu.</li>
            </ul>
          </div>

          <div>
            <p><b>Mục đích cụ thể của bước xác định yêu cầu:</b></p>

            <ul>
              <li>Đi đến thỏa thuận với khách hàng và người dùng về các chức năng của hệ thống - Những gì mà hệ thống
                phải thực hiện.</li>
              <li>Cho phép các System Developer hiểu rõ hơn các yêu cầu đối với hệ thống.</li>
              <li>Phân định ranh giới của hệ thống</li>
              <li>Cung cấp cơ sở để hoạch định nội dung kỹ thuật của các vòng lặp.</li>
              <li>Xác định giao diện người dùng cho hệ thống.</li>
            </ul>
          </div>

          <div>
            <p><b>Khi nào thì kết thúc giai đoạn nghiên cứu hiện trạng và xác định yêu cầu?</b></p>
            <ul>
              <li>Khách hàng/người sử dụng và những người phát triển đã hiểu hoàn toàn hệ thống chưa?</li>
              <li>Đã nêu được đầy đủ các yêu cầu về chức năng (dịch vụ), đầu vào/ra và những dữ liệu cần thiết chưa?
              </li>
            </ul>
          </div>
        </div>
            `],
            ['Phân tích hướng đối tượng', 'PTTKHT13', `
            <p><b>Phân tích hướng đối tượng</b></p>
          <ul>
            <li>Là giai đoạn quan trọng của quá trình phát triển hệ thống thông tin, trong đó mô hình khái niệm phải
              được mô tả chính xác.</li>
            <li>Phân tích hướng đối tượng tập trung vào việc tìm kiếm các đối tượng, khái niệm trong lĩnh vực bài toán
              và xác định mối quan hệ của chúng trong hệ thống.</li>
            <li>Phân tích hệ thống cần trả lời các câu hỏi sau:
              <ul>
                <li>Hệ thống gồm những thành phần, bộ phận, đối tượng nào?</li>
                <li>Hệ thống cần thực hiện những cái gì?</li>
                <li>Kết quả chính của việc phân tích hệ thống hướng đối tượng là: biểu đồ lớp, biểu đồ trạng thái, biểu
                  đồ trình tự, biểu đồ cộng tác và biểu đồ thành phần.</li>
              </ul>
            </li>
          </ul>
          <p>Tóm lại, mục tiêu cụ thể của giai đoạn phân tích là:</p>
          <ul>
            <li>Xác định hệ thống cần phải làm gì.</li>
            <li>Nghiên cứu đầy đủ các chức năng cần cung cấp và những yếu tố liên quan.</li>
            <li>Xây dựng một mô hình nêu bật bản chất vấn đề từ một hướng nhìn có thực (trong đời sống thực).</li>
            <li>Nhờ chuyên gia lĩnh vực đánh giá, góp ý.</li>
            <li>Kết quả của giai đoạn phân tích là bản Đặc Tả Yêu Cầu (Requirements Specifications).</li>
          </ul>
            `],
            ['Thiết kế hướng đối tượng', 'PTTKHT14', `
            <p><b>Thiết kế hướng đối tượng</b></p>
            <ul>
              <li>Hệ thống được tổ chức thành tập các đối tượng tương tác với nhau và mô tả được cách để hệ thống thực thi
                nhiệm vụ của bài toán.</li>
              <li>Giai đoạn này cần trả lời các câu hỏi:
                <ul>
                  <li>Hệ thống làm như thế nào?</li>
                  <li>Trong hệ thống có những lớp đối tượng nào, trách nhiệm của chúng như thế nào?</li>
                  <li>Các đối tượng tương tác với nhau như thế nào?</li>
                  <li>Các nhiệm vụ mà mỗi lớp đối tượng phải thực hiện như thế nào?</li>
                  <li>Dữ liệu nghiệp vụ và các giao diện được xây dựng như thế nào?</li>
                  <li>Kiến trúc và cấu hình của hệ thống như thế nào?</li>
                </ul>
              </li>
            </ul>
            <p>Tóm lại, nhiệm vụ chính của thiết kế hệ thống là:</p>
            <ul>
              <li>Xây dựng các thiết kế chi tiết mô tả các thành phần của hệ thống ở mức cao hơn (khâu phân tích) để phục
                vụ cho việc cài đặt.</li>
              <li>Đưa ra được kiến trúc của hệ thống để đảm bảo cho hệ thống có thể thay đổi, có tính mở, dễ bảo trì, thân
                thiện với người sử dụng...</li>
              <li>Những kết quả trên được thể hiện trong các biểu đồ: biểu đồ lớp (chi tiết), biểu đồ hành vi, biểu đồ
                thành phần và biểu đồ triển khai.</li>
              <li>Trong các tài liệu thiết kế phải mô tả cụ thể những thành phần nào, làm những gì và làm như thế nào.
              </li>
            </ul>
            <p>Một số các công việc thường được thực hiện trong giai đoạn thiết kế:</p>
            <ul>
              <li>Thiết kế CSDL.</li>
              <li>Thiết kế các chức năng, thủ tục mô tả các quá trình xử lý từ input đến output.</li>
              <li>Thiết kế các forms nhập dữ liệu tùy theo các thành phần dữ liệu cần nhập.</li>
              <li>Thiết kế các reports và những output mà hệ thống mới phải sản sinh.</li>
              <li>Kết quả giai đoạn thiết kế là Bản đặc tả thiết kế (Design Specifications).</li>
              <li>Bản Đặc tả thiết kế chi tiết sẽ được chuyển sang cho các lập trình viên để thực hiện giai đoạn xây dựng
                hệ thống thông tin.</li>
            </ul>
            `],
            ['Lập trình và kiểm thử hệ thống', 'PTTKHT15', `
            <p><b>Lập trình và kiểm thử hệ thống</b></p>
            <ul>
              <li>Trong giai đoạn này, mỗi thành phần đã được thiết kế sẽ được lập trình thành những mô đun chương trình
                (chương trình con).</li>
              <li>Mỗi mô đun này sẽ được kiểm chứng hoặc thử nghiệm theo các tài liệu đặc tả của giai đoạn thiết kế.</li>
              <li>Công việc này được mô tả như sau:
  
                <center>
                  <img src="./assets/img/LTUDWindows/chap5/img20.png" alt="" class="w-75">
                </center>
              </li>
            </ul>
            <p>Phần kiểm thử được chia thành hai bước chính:</p>
            <p>Thử nghiệm đơn vị:</p>
            <ul>
              <li>Người viết code chạy thử các phần chương trình của mình với dữ liệu giả (test/dummy data).</li>
              <li>Mục đích chính trong giai đoạn kiểm thử này là xem chương trình có cho ra những kết quả mong muốn.</li>
              <li>Giai đoạn thử nghiệm đơn vị còn được gọi là “Kiểm thử hộp trắng" (White Box Testing)</li>
              <li>Kiểm thử đơn vị độc lập
                <ul>
                  <li>Công việc này do một thành viên khác đảm trách.</li>
                  <li>Cần chọn người không có liên quan trực tiếp đến việc viết code của đơn vị chương trình cần thử
                    nghiệm để đảm bảo tính “độc lập”.</li>
                </ul>
              </li>
              <li>Kiểm thử hệ thống
                <ul>
                  <li>Sau khi các thủ tục đã được thử nghiệm riêng, cần phải thử nghiệm toàn bộ hệ thống.</li>
                  <li>Mọi thủ tục được tích hợp và chạy thử, kiểm tra xem mọi chi tiết ghi trong Đặc Tả Yêu Cầu.</li>
                  <li>Dữ liệu kiểm thử cần được chọn lọc đặc biệt, kết quả cần được phân tích để phát hiện các sai sót so
                    với bản thiết kế.</li>
                </ul>
              </li>
            </ul>
            `],
            ['Vận hành và bảo trì hệ thống', 'PTTKHT16', `
            <p><b>Vận hành và bảo trì hệ thống</b></p>

            <ul>
              <li>Cài đặt hệ thống phần mềm trong môi trường sử dụng của khách hàng.</li>
              <li>Chỉnh sửa phần mềm đúng như những gì đã thiết kế và yêu cầu của người sử dụng.</li>
              <li>Về bảo trì phần mềm:
                <ul>
                  <li>Nâng cao hiệu quả của hệ thống.</li>
                  <li>Đảm bảo sự thích nghi đối với sự thay đổi của môi trường của hệ thống hay sự sửa đổi cho phù hợp với
                    những thay đổi của chính sách, quy chế mới.</li>
                </ul>
              </li>
            </ul>
            `]
        ]
    },
    PTTKHT2: {
        title: 'Phân tích yêu cầu hệ thống',
        index: [
            ['Mục đích', 'PTTKHT21', `
            <div>
          <p><b>Mục đích</b></p>

          <p>Quá trình tìm hiểu và mô phỏng lại hiện tượng, quy trình nghiệp vụ trong thế giới thực từ đó xây dựng hệ
            thống để giải quyết bài toán đặt ra trên máy tính.</p>
        </div>
            `],
            ['Các công cụ để mô tả yêu cầu', 'PTTKHT22', `
            <div>
          <p><b>Các công cụ để mô tả yêu cầu</b></p>

          <p>Các công cụ để mô tả yêu cầu của phương pháp phân tích, thiết kế hướng đối tượng gồm:</p>

          <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse221" role="button" aria-expanded="false"
              aria-controls="collapse221">
              Đối tượng
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse222" role="button" aria-expanded="false"
              aria-controls="collapse222">
              Lớp
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse223" role="button" aria-expanded="false"
              aria-controls="collapse223">
              Gói
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse224" role="button" aria-expanded="false"
              aria-controls="collapse224">
              Kế thừa
            </a>
          </p>

          <div>
            <div class="collapse" id="collapse221">
              <div class="card card-body">
                <p><b>Đối tượng</b></p>
                <ul>
                  <li>Đối tượng là khái niệm cho phép mô tả các sự vật/thực thể trong thế giới thực
                    <br>
                    Các đối tượng duy trì mối quan hệ giữa chúng
                    <br>
                    Ví dụ: Nguyễn Văn A là một đối tượng
                  </li>
                  <li>Các tính chất của đối tượng
                    <ul>
                      <li>Đối tượng = trạng thái + hành vi + định danh</li>
                      <li>Trạng thái là các đặc tính của đối tượng tại một thời điểm</li>
                      <li>Hành vi thể hiện các chức năng của đối tượng</li>
                      <li>Định danh thể hiện sự tồn tại duy nhất của đối tượng</li>
                    </ul>
                  </li>
                  <li>Trạng thái = tập hợp các thuộc tính
                    <ul>
                      <li>Mỗi thuộc tính mô tả một đặc tính</li>
                      <li>Tại một thời điểm cụ thể, các thuộc tính mang các giá trị trong miền xác định</li>
                    </ul>

                    <p>Ví dụ: Một chiếc xe máy: màu xanh, 110 cm3, dream, 12000km,...</p>
                  </li>
                  <li>Hành vi = tập hợp các phương thức
                    <ul>
                      <li>Phương thức: là một thao tác hoặc được thực hiện bởi chính nó, hoặc thực hiện khi có yêu cầu
                        từ môi
                        trường (thông điệp từ đối tượng khác)</li>
                      <li>Hành vi phụ thuộc vào trạng thái</li>
                    </ul>
                    <br>
                    Ví dụ một xe máy có các hành vi: khởi động, chạy, ...
                  </li>
                </ul>

                <p><b>Giao tiếp giữa các đối tượng</b></p>
                <ul>
                  <li>Các đối tượng giao tiếp với nhau
                    <br>
                    Gửi các thông điệp (message) cho nhau
                  </li>
                  <li>Các loại thông điệp
                    <ul>
                      <li>Hàm dựng (constructor)</li>
                      <li>Hàm hủy (destructor)</li>
                      <li>Hàm chọn lựa (get)</li>
                      <li>Hàm sửa đổi (set)</li>
                    </ul>
                  </li>
                  <li>Các hàm chức năng khác
                    <br>
                    Giữa các đối tượng có mối liên kết (link) với nhau
                  </li>
                </ul>
                <center>
                  <img src="./assets/img/LTUDWindows/chap5/img21.png" alt="" class="w-75">
                </center>
              </div>
            </div>
            <div class="collapse" id="collapse222">
              <div class="card card-body">
                <p><b>Lớp</b></p>

                <ul>
                  <li>Lớp là khái niệm dùng để mô tả một tập hợp các đối tượng có cùng một cấu trúc, cùng hành vi và có
                    cùng
                    những mối quan hệ với các đối tượng khác</li>
                  <li>Lớp = các thuộc tính + các phương thức</li>
                  <li>Lớp là một bước trừu tượng hóa
                    <ul>
                      <li>Tìm kiếm các điểm giống, bỏ qua các điểm khác nhau của đối tượng</li>
                      <li>Trừu tượng hóa làm giảm độ phức tạp</li>
                    </ul>
                    <center>
                      <img src="./assets/img/LTUDWindows/chap5/img22.png" alt="" class="w-75">
                    </center>
                  </li>
                  <li>Quan hệ giữa các lớp: kết hợp</li>
                  <li>Một kết hợp là một tập hợp các mối liên kết giữa các đối tượng</li>
                  <li>Lớp và đối tượng
                    <ul>
                      <li>Đối tượng là thể hiện (instance) của lớp</li>
                      <li>Giá trị là thể hiện của thuộc tính</li>
                      <li>Liên kết là thể hiện của kết hợp Lớp → đối tượng</li>
                      <li>Thuộc tính → giá trị Kết hợp → liên kết</li>
                    </ul>
                    <center>
                      <img src="./assets/img/LTUDWindows/chap5/img23.png" alt="" class="w-75">
                    </center>
                  </li>
                </ul>

              </div>
            </div>
            <div class="collapse" id="collapse223">
              <div class="card card-body">
                <p><b>Gói</b></p>
                <p>Là một cách tổ chức các thành phần, phần tử trong hệ thống thành các nhóm. Nhiều gói có thể được kết
                  hợp
                  với nhau để trở thành một hệ thống con (subsystem).</p>

                <center>
                  <img src="./assets/img/LTUDWindows/chap5/img24.png" alt="" class="w-75">
                </center>
              </div>
            </div>
            <div class="collapse" id="collapse224">
              <div class="card card-body">
                <p><b>Kế thừa</b></p>
                <p>Trong phương pháp hướng đối tượng, một lớp có thể có sử dụng lại các thuộc tính và phương thức của
                  một hoặc nhiều lớp khác. Kiểu quan hệ này gọi là quan hệ kế thừa, được xây dựng dựa trên mối quan hệ
                  kế thừa trong bài toán thực tế.</p>

                <center>
                  <img src="./assets/img/LTUDWindows/chap5/img25.png" alt="" class="w-75">
                </center>


              </div>
            </div>
          </div>
        </div>
            `],
            ['Các chức năng, nhiệm vụ của hệ thống', 'PTTKHT23', `
            <div>
          <p><b>Các chức năng, nhiệm vụ của hệ thống</b></p>
          <ul>
            <li>Chức năng của hệ thống là những gì mà hệ thống được yêu cầu thực hiện.</li>
            <li>Các chức năng có thể phân loại theo lĩnh vực chức năng để tránh sự nhầm lẫn giữa chúng. Các chức năng
              hệ thống có thể chia thành:
              <ul>
                <li>Chức năng hiển (Evident): chọn hàng, tính tiền,...</li>
                <li>Chức năng ẩn (Hiddent): cập nhật dữ liệu, tồn kho;</li>
                <li>Chức năng tùy chọn (optional): tăng mức độ thân thiện của hệ thống nhưng không ảnh hưởng tới giá trị
                  cũng như các chức năng khác.</li>
              </ul>
            </li>
            <li>Chú ý:
              <ul>
                <li>Các chức năng của hệ thống phải được chia thành các nhóm theo các mối liên hệ với nhau.</li>
                <li>Dựa vào cách phân chia các chức năng để sau này chia nhỏ hệ thống thành các gói, các hệ thống con
                  trong quá trình phân tích và thiết kế hệ thống.</li>
              </ul>
            </li>
            <li>Ví dụ: Các chức năng của hệ thống HBH có thể chia thành hai nhóm chính:
              <ul>
                <li>Các chức năng bán hàng</li>
                <li>Các chức năng thanh toán</li>
              </ul>
            </li>
            <li>Thiết kế là nhân tố chính quyết định chất lượng của hệ thống:
              <ul>
                <li>Không thiết kế - hoặc thiết kế không tốt dẫn đến hệ thống chất lượng thấp;</li>
                <li>Không quản lý được những thay đổi yêu cầu;</li>
                <li>Khó kiểm thử;</li>
                <li>Khó bảo trì;</li>
                <li>Không có tính tiến hóa;</li>
                <li>Không tái sử dụng được</li>
              </ul>
            </li>
            <li>Thiết kế tốt mang lại hệ thống chất lượng tốt
              <ul>
                <li>Dễ dàng thay đổi yêu cầu;</li>
                <li>Dễ kiểm thử;</li>
                <li>Dễ bảo trì;</li>
                <li>Có tính tiến hóa cao;</li>
                <li>Có khả năng tái sử dụng cao.</li>
              </ul>
            </li>
          </ul>
        </div>
            `]
        ]
    },
    PTTKHT3: {
        title: 'Đặc tả các yêu cầu của hệ thống',
        index: [
            ['Mục tiêu của Use Case', 'PTTKHT31', `
            <div>
          <p><b>Mục tiêu của Use Case</b></p>
          <ul>
            <li>Use Case mô tả tập các hoạt động của hệ thống theo quan điểm của các tác nhân (Actor). Nó mô tả các yêu
              cầu của hệ thống và trả lời cho câu hỏi:
              <br>
              Hệ thống phải làm gì (What?)
            </li>
            <li>Một Use Case có thể bao gồm nhiều biểu đồ Use Case.</li>
            <li>Use Case mô tả rõ ràng và nhất quán về việc hệ thống cần phải làm gì (What?).</li>
            <li>Use Case mô tả các yêu cầu về mặt chức năng của hệ thống - các chức năng này có từ sự thỏa thuận giữa
              khách hàng và nhóm phát triển hệ thống.</li>
            <li>Làm cơ sở để:
              <ul>
                <li>Người phân tích viên hiểu;</li>
                <li>Người thiết kế xây dựng các kiến trúc;</li>
                <li>Người lập trình cài đặt các chức năng;</li>
                <li>Người kiểm thử kiểm tra các kết quả thực hiện của hệ thống.</li>
              </ul>
            </li>
            <li>Làm công cụ giao tiếp cho những người phát triển, đảm bảo hệ thống thỏa mãn đúng những yêu cầu của
              Users.</li>
          </ul>
          <p><b>Ai cần Use Case? - Để làm gì?</b></p>
          <ul>
            <li>Nhà phát triển cần đến các mô hình Use Case để hiểu hệ thống cần phải làm gì, và qua đó có được một nền
              tảng cho những công việc tương lai.</li>
            <li>Customers/Users quan tâm đến Use Case vì nó đặc tả chức năng của hệ thống và mô tả xem hệ thống có thể
              và sẽ được sử dụng như thế nào.</li>
            <li>Tester cần đến Use Case để thử nghiệm và kiểm tra xem hệ thống có đảm bảo sẽ thực hiện đúng chức năng đã
              được đặc tả trong giai đoạn đầu.</li>
            <li>Những người liên quan đến những hoạt động liên kết đến chức năng của hệ thống như nhóm tiếp thị, bán
              hàng, hỗ trợ khách hàng và nhóm soạn thảo tài liệu.</li>
          </ul>
        </div>
            `],
            ['Cách thể hiện một biểu đồ Use Case', 'PTTKHT32', `
            <div>
          <p><b>Cách thể hiện một biểu đồ Use Case</b></p>
          <p>Một biểu đồ Use Case thể hiện:</p>
          <ul>
            <li>Hệ thống</li>
            <li>Tác nhân</li>
            <li>Use Case</li>
          </ul>
          <p>Ví dụ: Biểu đồ Use Case trong UML</p>
          <center>
            <img src="./assets/img/LTUDWindows/chap5/img26.png" alt="" class="w-75">
          </center>

          <p><b>Hệ thống</b></p>
          <ul>
            <li>Hệ thống là một thành phần của Use Case nên ranh giới của hệ thống cần phải được xác định rõ ràng.</li>
            <li>Một hệ thống không nhất thiết là một hệ thống phần mềm; nó có thể là một chiếc máy, hoặc là một doanh
              nghiệp.</li>
            <li>Ký hiệu của hệ thống: Hình chữ nhật có kèm theo tên hệ thống.</li>
          </ul>

          <center>
            <img src="./assets/img/LTUDWindows/chap5/img27.png" alt="" class="w-75">
          </center>

          <p><b>Tác nhân</b></p>

          <ul>
            <li>Người hoặc một vật nào đó tương tác với hệ thống, sử dụng hệ thống.</li>
            <li>Một tác nhân có thể là người, thiết bị mà cũng có thể là một hệ thống khác.</li>
            <li>Tên gọi của tác nhân được mô tả bằng các danh từ (chung) và thường phải đặc tả được vai trò của nó đối
              với hệ thống.</li>
            <li>Một tác nhân là một dạng tập thực thể (một lớp) chứ không phải một thực thể. Tác nhân mô tả và đại diện
              cho một vai trò, chứ không phải là một người sử dụng thật sự và cụ thể của hệ thống.</li>
          </ul>

          <center>
            <img src="./assets/img/LTUDWindows/chap5/img28.png" alt="" class="w-50">
          </center>
        </div>
            `],
            ['Cách xác định các tác nhân và các Use Case', 'PTTKHT33', `
            <div>
          <p><b>Cách xác định các tác nhân và các Use Case</b></p>
          <p>Để xác định các tác nhân là dựa trên các câu trả lời những câu hỏi sau:</p>
          <ul>
            <li>Ai sẽ sử dụng các chức năng chính của hệ thống?</li>
            <li>Ai cần sự hỗ trợ của hệ thống để thực hiện các công việc hàng ngày?</li>
            <li>Ai quản trị, bảo dưỡng để đảm bảo cho hệ thống hoạt động thường xuyên?</li>
            <li>Hệ thống quản lý, sử dụng những thiết bị nào?</li>
            <li>Hệ thống cần tương tác với những bộ phận, hệ thống nào khác?</li>
            <li>Ai hay cái gì quan tâm đến kết quả xử lý của hệ thống?</li>
          </ul>

          <p><b>Có hai phương pháp để xác định các Use Case</b></p>
          <ul>
            <li>Xác định Use Case dựa vào các tác nhân:
              <ul>
                <li>Xác định những tác nhân liên quan đến hệ thống hoặc đến tổ chức, nghĩa là tìm và xác định những tác
                  nhân là
                  người sử dụng hay những hệ thống khác tương tác với hệ thống cần xây dựng.</li>
                <li>Với mỗi tác nhân, tìm những tiến trình (chức năng) được khởi đầu, hay giúp các tác nhân thực hiện,
                  giao
                  tiếp/tương tác với hệ thống.</li>
              </ul>
            </li>
            <li>Xác định các Use Case và các sự kiện:
              <ul>
                <li>Xác định những sự kiện bên ngoài có tác động đến hệ thống hay hệ thống phải trả lời.</li>
                <li>Tìm mối liên quan giữa các sự kiện và các Use Case</li>
                <li>Hãy trả lời những câu hỏi sau để tìm ra các Use Case:
                  <ul>
                    <li>Nhiệm vụ chính của các tác nhân là gì?</li>
                    <li>Tác nhân cần phải đọc, ghi, sửa đổi, cập nhật, hay lưu trữ thông tin hay không?</li>
                    <li>Tác nhân cần phải đọc, ghi, sửa đổi, cập nhật, hay lưu trữ thông tin hay không?</li>
                    <li>Những tác nhân nào cần được thông báo về những thay đổi của hệ thống?</li>
                    <li>Hệ thống cần có những đầu vào/ra nào? từ đâu và đến đâu?</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>

          <p>Ví dụ: Use Case cho chức năng Thu tiền (Cash Out)</p>
          <center>
            <img src="./assets/img/LTUDWindows/chap5/img29.png" alt="" class="w-75">
          </center>

        </div>
            `],
            ['Mối quan hệ giữa các Use Case', 'PTTKHT34', `
            <div>
          <p><b>Mối quan hệ giữa các Use Case</b></p>
          <p>Giữa các Use Case có ba quan hệ chính:</p>
          <ul>
            <li>Quan hệ mở rộng (extends)
              <br>
              <center>
                <img class="w-50" src="./assets/img/LTUDWindows/chap5/img30.png" alt="">
              </center>
            </li>
            <li>Quan hệ sử dụng (uses/include)
              <br>
              <center>
                <img class="w-50" src="./assets/img/LTUDWindows/chap5/img31.png" alt="">
              </center>
            </li>
            <li>Quan hệ theo nhóm hay theo gói (package)
              <br>
              <center>
                <img class="w-50" src="./assets/img/LTUDWindows/chap5/img32.png" alt="">
              </center>
            </li>
          </ul>
        </div>
            `],
            ['Checkpoint - Use Case Model', 'PTTKHT35', `
            <div>
          <p><b>Checkpoint - Use Case Model</b></p>

          <p>Kiểm tra về Use Case Model và Use Case</p>
          <ul>
            <li>Use-case model có dễ hiểu không?</li>
            <li>Sau khi nghiên cứu Use Case model, có hình thành được một ý tưởng rõ ràng về các chức năng của hệ thống
              và cách thức mà chúng liên hệ với nhau?</li>
            <li>Đã xác định hết các actor chưa? Tất cả các yêu cầu chức năng được thỏa mãn chưa?</li>
            <li>Use-case model có chứa các hành vi vô dụng nào không?</li>
            <li>Việc chia các Use Case thành các Package có xác đáng không?</li>
            <li>Mỗi Use Case có ít nhất một actor tương tác?</li>
            <li>Các Use Case có độc lập với nhau?</li>
            <li>Tồn tại các Use Case có các luồng sự kiện và các hành vi tương tự nhau không?</li>
            <li>Liệu các Use Case có tên duy nhất, gợi nhớ, dễ hiểu để chúng không bị nhầm lẫn trong các giai đọan sau?
            </li>
            <li>Các customers và users có hiểu tên và mô tả của các Use Case không?</li>
          </ul>

          <p>Kiểm tra các Actors</p>
          <ul>
            <li>Đã xác định hết các actor chưa?</li>
            <li>Mỗi actor có tham gia vào ít nhất một Use Case?</li>
            <li>Mỗi actor thật sự có một vai trò (role)? Có cần ghép hoặc tách các actor không?</li>
            <li>Có tồn tại 2 actor đóng cùng một vai trò đối với 1 Use Case không?</li>
            <li>Tên của các actor có gợi nhớ không? Users và customers có hiểu tên của chúng?</li>
          </ul>

          <p>Kiểm tra các Glossary</p>
          <ul>
            <li>Các thuật ngữ có định nghĩa rõ ràng và súc tích?</li>
            <li>Mỗi thuật ngữ có sử dụng đâu đó trong các mô tả Use Case?</li>
            <li>Các thuật ngữ có được sử dụng hợp lý trong các mô tả ngắn về các actors và Use Case?</li>
          </ul>
        </div>
            `]
        ]
    },
    PTTKHT4: {
        title: 'Thiết kế hướng đối tượng',
        index: [
            ['Vai trò của thiết kế', 'PTTKHT41', `
            <p><b>Vai trò của thiết kế</b></p>
            <ul>
              <li>Thiết kế là 1 công đoạn quan trọng trong qui trình phát triển hệ thống; là bước chuyển tiếp của giai đoạn phân tích và là bước chuẩn bị trước khi tiến hành triển khai hệ thống.</li>
              <li>Thiết kế là tiến trình mà ở đó xuất hiện mô hình các kiểu mẫu của hệ thống. Các mô hình này chính là những nét phác thảo nên hệ thống. Nó cho chúng ta biết hệ thống chúng ta đang xây dựng là gì, đã có, đang có và sẽ có những gì.</li>
              <li>Thiết kế là nơi mà ta có thể trả lời câu hỏi:
                <ul>
                  <li>“Liệu hệ thống này có thể chạy được không?”</li>
                  <li>“Hệ thống có thể đáp ứng được các yêu cầu của khách hàng hay không?”</li>
                  <li>mà không cần đợi đến công đoạn phát triển sau.</li>
                </ul>
              </li>
            </ul>
            `],
            ['Các nguyên lý thiết kế', 'PTTKHT42', `
            <p><b>Các nguyên lý thiết kế</b></p>

            <ul>
              <li>Nguyên lý “đóng mở”: một mô đun cần “mở” đối với việc phát triển thêm tính năng nhưng phải “đóng” đối với việc sửa đổi mã nguồn.</li>
              <li>Nguyên lý thay thế Liskov: Các chức năng của hệ thống vẫn thực hiện đúng đắn nếu ta thay bất kỳ một lớp đối tượng nào bằng một lớp đối tượng kế thừa.</li>
              <li>Nguyên lý nghịch đảo phụ thuộc: phụ thuộc vào mức trừu tượng, không phụ thuộc vào mức chi tiết.</li>
              <li>Nguyên lý phân tách giao diện: nên có nhiều giao diện đặc thù với bên ngoài hơn là chỉ có một giao diện dùng chung cho một mục đích.</li>
            </ul>
            `],
        ]
    },
    PTTKHT5: {
        title: 'Các nhóm mẫu thiết kế',
        index: [
            ['Sự quan trọng của mẫu thiết kế', 'PTTKHT51', `
            <div>
          <p><b>Sự quan trọng của mẫu thiết kế</b></p>
          <ul>
            <li>Trong bất kỳ một hệ thống hướng đối tượng nào cũng có thể gặp các vấn đề lặp lại. Do đó, một mẫu thiết kế là một giải pháp tổng thể cho các vấn đề chung trong thiết kế hệ thống.</li>
            <li>Mẫu thiết kế tuân thủ nghiêm ngặt các nguyên lý thiết kế hướng đối tượng ở trên.</li>
            <li>Mẫu thiết kế không phụ thuộc vào ngôn ngữ lập trình, công nghệ, và nó có các quy tắc biểu diễn của ngôn ngữ UML.</li>
            <li>Mẫu thiết kế sẽ giúp cho việc giải quyết vấn đề nhanh, gọn hơn và hợp lý hơn.</li>
            <li>Mẫu thiết kế còn được sử dụng nhằm cô lập các thay đổi trong mã nguồn, từ đó làm cho hệ thống có khả năng tái sử dụng cao.</li>
          </ul>
        </div>
            `],
            ['Các loại mẫu thiết kế', 'PTTKHT52', `
            <div>
          <p><b>Các loại mẫu thiết kế</b></p>
          <p>GoF đề xuất 23 mẫu thiết kế được chia theo 3 nhóm theo mục đích sử dụng:</p>

          <ul>
            <li>Creational Patterns – Các mẫu kiến tạo;</li>
            <li>Structural Patterns – Các mẫu kiến trúc;</li>
            <li>Behavioral Patterns – Các mẫu tương tác.</li>
          </ul>

          <p>Mục đích chung</p>
          <ul>
            <li>Các mẫu này được dùng để khởi tạo các đối tượng trong hệ thống.</li>
            <li>Hầu hết các hệ thống hướng đối tượng phức tạp yêu cầu nhiều đối tượng được thể hiện theo thời gian, và
              các mẫu này hỗ trợ cho việc tạo các tiến trình bằng việc cung cấp các khả năng:
              <ul>
                <li>Sự thể hiện chung – Điều này cho phép các đối tượng được tạo ra trong hệ thống không cần phải định nghĩa một đặc tả kiểu lớp trong mã nguồn;</li>
                <li>Đơn giản – Một vài mẫu làm cho việc khởi tạo đối tượng trở nên dễ dàng, vì vậy lớp “gọi” khởi tạo đối tượng không phải viết mã nhiều cũng như phức tạp.</li>
              </ul>
            </li>
          </ul>
        </div>
            `],
        ]
    },
    PTTKHT6: {
        title: 'Tổng kết bài học',
        index: [
            ['Tổng kết', 'PTTKHT61', `
            <ul>
      <li>Quá trình phát triển hệ thống thông tin theo phương pháp hướng đối tượng gồm 5 giai đoạn: Nghiên cứu hiện trạng và xác định các yêu cầu; Phân tích hướng đối tượng; Thiết kế hướng đối tượng; Triển khai hệ thống và Vận hành và bảo trì hệ thống.</li>
      <li>Phân tích và thiết kế hệ thống là 2 giai đoạn trung tâm của quá trình phát triển. Mục đích của giai đoạn phân tích là tạo ra hệ thống logic. Các công cụ để mô tả yêu cầu gồm đối tượng, lớp, gói và kế thừa. Đặc tả các yêu cầu của hệ thống thể hiện bằng các Use Case và biểu đồ Use Case.</li>
      <li>Thiết kế hệ thống hướng đối tượng đóng vai trò quan trọng để chuẩn bị triển khai hệ thống, nếu thiết kế tốt hệ thống sẽ triển khai thành không, nếu thiết kế kém hệ thống sẽ hoạt động không hiệu quả và khó phát triển.</li>
    </ul>
            `],
        ]
    }
}