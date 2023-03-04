const PTTKHT3 = {
    PTTKHT1: {
        title: `Các mức độ mô tả chức năng`,
        index: [
            ['Mô tả vật lý','PTTKHT11', `
                <p><b>Mô tả vật lý</b></p>

                <p>Mô tả chức năng ở mức độ vật lý đòi hỏi phải nói rõ mục đích và cách thực hiện của quá trình xử lý, nghĩa là
                phải trả lời câu hỏi:</p>
                <ul>
                <li>Làm gì?</li>
                <li>Làm như thế nào?</li>
                </ul>
            `],
            ['Mô tả logic','PTTKHT12', `
                <p><b>MÔ TẢ LOGIC</b></p>
                <p>Mô tả chức năng ở mức độ logic lại đơn giản hơn, chỉ cần trả lời đầy đủ câu hỏi làm gì? Nghĩa là chỉ diễn tả
                mục đích, bản chất của quá trình xử lý mà không cần quan tâm đến các yếu tố về thực hiện, cài đặt như
                phương pháp, phương tiện, tác nhân, thời điểm, thời gian,...</p>
    
            `],
            ['Mô tả đại thể và mô tả chi tiết','PTTKHT13', `
                <p><b>MÔ TẢ ĐẠI THỂ VÀ MÔ TẢ CHI TIẾT</b></p>
                <p>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse531" role="button" aria-expanded="false"
                    aria-controls="collapse531">
                    Ở mức độ đại thể
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse532" role="button" aria-expanded="false"
                    aria-controls="collapse532">
                    Ở mức độ chi tiết
                </a>
                </p>
                <div class="collapse" id="collapse531">
                <div class="card card-body">
                    <ul>
                    <li>Một chức năng được mô tả dưới dạng hộp đen;</li>
                    <li>Nội dung bên trong hộp đen không được chỉ rõ mà chỉ mô tả các thông tin vào và ra hộp đen đó.</li>
                    </ul>
                </div>
                </div>
                <div class="collapse" id="collapse532">
                <div class="card card-body">
                    <p>Nội dung của quá trình xử lý phải được chỉ rõ hơn:</p>
                    <ul>
                    <li>Các chức năng con;</li>
                    <li>Các mối quan hệ thông tin và điều khiển giữa những chức năng đó;</li>
                    <li>Nếu một chức năng có nhiều chức năng con thì để mô tả chi tiết người phân tích phải phân rã các chức
                        năng con này thành nhiều mức.</li>
                    </ul>
                </div>
                </div>
            `]
        ]
    },
    PTTKHT2: {
        title: `Mô hình hóa hệ thống thông tin`,
        index: [
            ['Lý do cần mô hình hóa hệ thống','PTTKHT21', `
                <p><b>LÝ DO CẦN MÔ HÌNH HÓA HỆ THỐNG</b></p>
                <ul>
                <li>Nhu cầu của người phân tích thiết kế hệ thống.</li>
                <li>Tìm hiểu quá trình nhận thức, diễn tả sự phức tạp của hệ thống thông qua mô hình.</li>
                <li>Giới hạn vấn đề nghiên cứu bằng cách chỉ tập trung vào một khía cạnh trong phạm vi không gian và thời gian
                    nhất định.</li>
                </ul>
    
            `],
            ['Mục đích của mô hình hóa','PTTKHT22', `
            <p><b>MỤC ĐÍCH CỦA MÔ HÌNH HÓA</b></p>
            <ul>
              <li>Giúp trực quan hóa hệ thống cần tìm hiểu
                <br>
                <p>Mô hình hóa cho phép đặc tả được cấu trúc và hành vi của hệ thống:</p>
                <ul>
                  <li>Đảm bảo hệ thống đạt được mục đích đã xác định trước</li>
                  <li>Kiểm tra được các qui định về cú pháp, ngữ nghĩa, tính chặt chẽ và đầy đủ của mô hình, khẳng định
                    được tính đúng đắn của thiết kế, phù hợp với yêu cầu đặt ra</li>
                </ul>
              </li>
              <li>Hình dung một hệ thống theo thực tế hay theo mong muốn của người phân tích hệ thống</li>
              <li>Cho phép đặc tả cấu trúc hoặc hành vi của hệ thống.</li>
              <li>Tạo một khuôn mẫu hướng dẫn nhà phát triển trong suốt quá trình xây dựng hệ thống</li>
              <li>Lập tài liệu về các quyết định đã đưa ra để sử dụng sau này</li>
            </ul>
            `],
            ['Các yêu cầu của mô hình hóa','PTTKHT23',`
            <p><b>CÁC YÊU CẦU CỦA MÔ HÌNH HÓA</b></p>
            <p>Việc biểu diễn mô hình phải thỏa mãn các yếu tố sau:</p>
            <ul>
              <li>Chính xác (accurate): Mô tả đúng hệ thống cần xây dựng.</li>
              <li>Đồng nhất (consistent): Các view khác nhau không được mâu thuẩn với nhau.</li>
              <li>Có thể hiểu được (understandable): Cho những người xây dựng lẫn sử dụng.</li>
              <li>Dễ thay đổi (changeable).</li>
              <li>Dễ dàng liên lạc với các mô hình khác.</li>
            </ul>
    
            `]
        ]
    },
    PTTKHT3: {
        title: `Các công cụ mô hình hóa trong phân tích hệ thống`,
        index: [
            ['Sơ đồ luồng thông tin','PTTKHT31', `
            <p><b>Sơ đồ luồng thông tin</b></p>
            <p>Sơ đồ luồng thông tin (IFD - Information Flow Diagram) được dùng để mô tả HTTT theo cách thức động, tức là mô
              tả sự di chuyển, xử lý và lưu trữ vật lý của thông tin trong hệ thống thực.</p>
            <p>Các ký pháp</p>
            <ul>
              <li>Xử lý</li>
              <li>Kho dữ liệu</li>
              <li>Dòng thông tin</li>
              <li>Điều khiển</li>
            </ul>
            <p>Mức độ</p>
            <ul>
              <li>Thủ công</li>
              <li>Bán thủ công</li>
              <li>Tự động hóa hoàn toàn</li>
            </ul>
            <center>
              <img src="./assets/img/PTTKHT/Chap3/img1.png" alt="" class="w-100">
            </center>
            `],
            ['Sơ đồ chức năng kinh doanh','PTTKHT32', `
            <p><b>Sơ đồ chức năng kinh doanh</b></p>
            <p>
              <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse721" role="button"
                aria-expanded="false" aria-controls="collapse721">
                Các thành phần của một IFD
              </a>
              <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse722" role="button"
                aria-expanded="false" aria-controls="collapse722">
                Nguyên tắc vẽ sơ đồ IFD
              </a>
              <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse723" role="button"
                aria-expanded="false" aria-controls="collapse723">
                Ví dụ: Vẽ sơ đồ IFD của quy trình quản lý mượn sách tại thư viện
              </a>
              <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse724" role="button"
                aria-expanded="false" aria-controls="collapse724">
                Sơ đồ (biểu đồ) chức năng nghiệp vụ BFD
              </a>
              <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse725" role="button"
                aria-expanded="false" aria-controls="collapse725">
                Ví dụ: BFD về “Quản lý trông giữ xe"
              </a>
            </p>
            <div class="collapse" id="collapse721">
              <div class="card card-body">
                <p>Các thành phần của một IFD:</p>
                <ul>
                  <li>Tài liệu: văn bản, hóa đơn, chứng từ, báo cáo.. (danh từ, cụm danh từ)</li>
                  <li>Kho dữ liệu (Data store) – Tài liệu lưu trữ (danh từ, cụm danh từ)
                    <ul>
                      <li>Kho thủ công: là nơi lưu trữ các tập tài liệu (giấy) được lưu trữ ở văn phòng.</li>
                      <li>Kho tin học hóa: là các tập tin dữ liệu trong máy tính hoặc. Kho dữ liệu là các dữ liệu được lưu
                        giữ trên
                        giá mang nó, vì vậy người ta thường lấy tên của vật mang nó làm tên của kho dữ liệu</li>
                    </ul>
                  </li>
                  <li>Xử lý (động từ, cụm động từ)
                    <ul>
                      <li>Xử lý thủ công: do con người thực hiện hoàn toàn;</li>
                      <li>Xử lý bán thủ công: có sự trợ giúp của máy tính;</li>
                      <li>Xử lý tự động hóa: do máy tính thực hiện bằng chương trình</li>
                    </ul>
                  </li>
                  <li>Tác nhân (danh từ, cụm danh từ)
                    <ul>
                      <li>Tác nhân ngoài (extenal entity)
                        <ul>
                          <li>Là một cá nhân hoặc một tổ chức ở bên ngoài lĩnh vực nghiên cứu của hệ thống</li>
                          <li>Tác nhân ngoài là phần sống còn của hệ thống, bởi vì chúng là nguồn cung cấp thông tin cho hệ
                            thống
                            và là nguyên nhân kích hoạt hệ thống.</li>
                        </ul>
                      </li>
                      <li>Tác nhân trong (intenal entity)
                        <p>Là một cá nhân, tổ chức, hoặc một hệ thống con của hệ thống</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div class="collapse" id="collapse722">
              <div class="card card-body">
                <p><b>Nguyên tắc vẽ sơ đồ IFD</b></p>
                <ul>
                  <li>Nghiệp vụ: sơ đồ luân chuyển tài liệu (Document Flow Diagram)</li>
                  <li>Nguyên tắc vẽ:
                    <ul>
                      <li>Bảng gồm có các cột;</li>
                      <li>Cột đầu tiên: Thời gian;</li>
                      <li>Các cột khác là các tác nhân
                        <ul>
                          <li>Cột chính: tác nhân trong của hệ thống;</li>
                          <li>Các cột còn là tác nhân ngoài</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div class="collapse" id="collapse723">
              <div class="card card-body">
                <ul>
                  <li>Mô tả được dòng tài liệu di chuyển (đi từ đâu đến đâu?)</li>
                  <li>Xác định các tác nhân
                    <ul>
                      <li>Tác nhân trong (Thủ thư);</li>
                      <li>Tác nhân ngoài (Người đọc, Ban giám đốc).</li>
                    </ul>
                  </li>
                  <li>Xác nhận các xử lý.</li>
                  <li>Xác định kho.</li>
                  <li>Thời gian</li>
                </ul>
                <center>
                  <img class="w-100" src="./assets/img/PTTKHT/Chap3/img2.png" alt="">
                </center>
              </div>
            </div>
            <div class="collapse" id="collapse724">
              <div class="card card-body">
                <p>Sơ đồ (biểu đồ) chức năng nghiệp vụ BFD (Business Function Diagram) là một sơ đồ hình học dùng để mô
                  tả sự phân rã có thứ bậc các chức năng của hệ thống từ tổng quát đến chi tiết.</p>
    
                <ul>
                  <li>Mỗi nút trong biểu đồ là một chức năng, các chức năng này có quan hệ bao hàm với nhau và chúng được
                    nối với nhau bằng các cung để tạo nên một cấu trúc cây, gọi là liên kết.</li>
                  <li>Ký hiệu: một chức năng được biểu diễn bởi một hình chữ nhật</li>
                  <li>Đặt tên: tên chức năng là cụm động từ</li>
                </ul>
    
                <center>
                  <img src="./assets/img/PTTKHT/Chap3/img3.png" alt="" class="w-100">
                </center>
              </div>
            </div>
            <div class="collapse" id="collapse725">
              <div class="card card-body">
                <p><b>Ví dụ: BFD về “Quản lý trông giữ xe"</b></p>
                <center>
                  <img class="w-100" src="./assets/img/PTTKHT/Chap3/img4.png" alt="">
                </center>
              </div>
            </div>
            `],
            ['Sơ đồ ngữ cảnh','PTTKHT33', `
            <p><b>Sơ đồ ngữ cảnh</b></p>

            <p>
              <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse731" role="button"
                aria-expanded="false" aria-controls="collapse731">
                Khái niệm
              </a>
              <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse732" role="button"
                aria-expanded="false" aria-controls="collapse732">
                Nguyên tắc
              </a>
              <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse733" role="button"
                aria-expanded="false" aria-controls="collapse733">
                Ký pháp
              </a>
              <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse734" role="button"
                aria-expanded="false" aria-controls="collapse734">
                Ví dụ: Sơ đồ ngữ cảnh của HTTT quản lý cửa hàng
              </a>
            </p>
    
            <div class="collapse" id="collapse731">
              <div class="card card-body">
                <p><b>Định nghĩa</b></p>
                <ul>
                  <li>Sơ đồ ngữ cảnh (CD - Context Diagram) là sơ đồ mức cao nhất của sơ đồ luồng dữ liệu (DFD). CD cho cái
                    nhìn tổng quát về hệ thống trong môi trường nó đang tồn tại.</li>
                  <li>Sơ đồ ngữ cảnh chỉ có một tiến trình duy nhất, mô tả toàn bộ hệ thống, các tác nhân mô tả các yếu tố
                    của môi trường và các luồng dữ liệu (không có kho dữ liệu) mô tả tưởng tác giữa hệ thống và các tác nhân
                    bên ngoài môi trường.</li>
                </ul>
              </div>
            </div>
            <div class="collapse" id="collapse732">
              <div class="card card-body">
                <p><b>Nguyên tắc vẽ</b></p>
                <ul>
                  <li>Tác nhân: tác nhân trong (từ sơ đồ IFD)</li>
                  <li>Tiến trình: chức năng tổng quát (từ sơ đồ BFD);</li>
                  <li>Tài liệu: Từ các sơ đồ IFD</li>
                </ul>
              </div>
            </div>
            <div class="collapse" id="collapse733">
              <div class="card card-body">
                <p><b>Ký pháp</b></p>
                <ul>
                  <li>Tiến trình: <img src="./assets/img/PTTKHT/Chap3/img5.png" alt=""></li>
                  <li>Tác nhân: <img src="./assets/img/PTTKHT/Chap3/img6.png" alt=""></li>
                  <li>Dòng tài liệu: <img src="./assets/img/PTTKHT/Chap3/img7.png" alt=""></li>
                </ul>
              </div>
            </div>
            <div class="collapse" id="collapse734">
              <div class="card card-body">
                <p><b>Ví dụ: Sơ đồ ngữ cảnh của HTTT quản lý cửa hàng</b></p>
                <center>
                  <img src="./assets/img/PTTKHT/Chap3/img8.png" alt="" class="w-100">
                </center>
              </div>
            </div>
            `],
            ['Sơ đồ luồng dữ liệu','PTTKHT34', `
            <p><b>Sơ đồ luồng dữ liệu</b></p>

        <p>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse741" role="button" aria-expanded="false"
            aria-controls="collapse741">
            Sơ đồ luồng dữ liệu (DFD - Data Flow Diagram)
          </a>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse742" role="button" aria-expanded="false"
            aria-controls="collapse742">
            Các thành phần của một DFD
          </a>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse743" role="button" aria-expanded="false"
            aria-controls="collapse743">
            Ký pháp
          </a>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse744" role="button" aria-expanded="false"
            aria-controls="collapse744">
            Các chú ý khi xây dựng một DFD
          </a>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse745" role="button" aria-expanded="false"
            aria-controls="collapse745">
            Kỹ năng phân mức trong DFD
          </a>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse746" role="button" aria-expanded="false"
            aria-controls="collapse746">
            Ví dụ: BFD của Hệ thống thông tin "Quản lý tín dụng"
          </a>
        </p>

        <div class="collapse" id="collapse741">
          <div class="card card-body">
            <p><b>a. Sơ đồ luồng dữ liệu (DFD - Data Flow Diagram)</b></p>
            <ul>
              <li>DFD là một sơ đồ hình học nhằm diễn tả các luồng dữ liệu thông qua các chức năng của hệ thống.</li>
              <li>Những hỗ trợ của DFD
                <ul>
                  <li>Xác định yêu cầu của người dùng.</li>
                  <li>Lập kế hoạch và minh hoạ những phương án cho phân tích viên và người dùng xem xét.</li>
                  <li>Trao đổi giữa những phân tích viên và người dùng trong hệ thống.</li>
                  <li>Làm tài liệu đặc tả yêu cầu hình thức và đặc tả thiết kế hệ thống.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="collapse" id="collapse742">
          <div class="card card-body">
            <p><b>b. Các thành phần của DFD</b></p>

            <ul>
              <li>Luồng dữ liệu (Data flow): Một luồng dữ liệu là một tuyến truyền dẫn thông tin vào hay ra một chức
                năng
                nào đó.
                <ul>
                  <li>Được dùng để mô tả dữ liệu di chuyển từ vị trí này đến vị trí khác.</li>
                  <li>Ký hiệu: Một luồng dữ liệu được mô tả bởi một mũi tên với tên dữ liệu kèm theo, chiều của mũi tên
                    chỉ
                    hướng di chuyển của dữ liệu.</li>
                  <li>Tên của luồng dữ liệu thể hiện trạng thái logic của thông tin chứ không phải dạng vật lý của nó.
                  </li>
                </ul>
              </li>
              <li>Kho dữ liệu (Data store)
                <ul>
                  <li>Là các tập tin dữ liệu trong máy tính.</li>
                  <li>Kho dữ liệu là các dữ liệu được lưu giữ trên giá mang nó, vì vậy người ta thường lấy tên của vật
                    mang
                    nó làm tên của kho dữ liệu.</li>
                </ul>
              </li>
              <li>Tiến trình (Proccess):
                <ul>
                  <li>Là một công việc hoặc một hành động có tác động lên dữ liệu làm cho chúng di chuyển, thay đổi hoặc
                    được phân phối.</li>
                  <li>Chỉ được xem là một tiến trình trong DFD nếu chúng nhận thông tin đầu vào và có thông tin đầu ra.
                  </li>
                  <li>Tên tiến trình: cụm động từ.</li>
                </ul>
              </li>
              <li>Tác nhân ngoài (extenal entity):
                <ul>
                  <li>Là một cá nhân hoặc một tổ chức ở bên ngoài lĩnh vực nghiên cứu của hệ thống.</li>
                  <li>Tên tác nhân: danh từ, cụm danh từ.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="collapse" id="collapse743">
          <div class="card card-body">
            <p><b>Ký pháp</b></p>
            <center>
              <img class="w-100" src="./assets/img/PTTKHT/Chap3/img9.png" alt="">
            </center>
          </div>
        </div>
        <div class="collapse" id="collapse744">
          <div class="card card-body">
            <p><b>Các chú ý khi xây dựng một DFD</b></p>
            <p>Dựa vào biểu đồ chức năng nghiệp vụ</p>
            <ul>
              <li>Sử dụng BFD để xác định các tiến trình theo từng mức cho DFD. Bởi vì BFD được thực hiện phân rã
                thành các mức nên nó dùng để chỉ ra các mức tương ứng trong DFD.</li>
              <li>Tuy nhiên để kiểm tra tính đúng đắn của các thành phần trong một DFD cần phải dựa vào các đặc trưng
                dưới đây.</li>
            </ul>

            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse7441" role="button"
                aria-expanded="false" aria-controls="collapse7441">
                Tiến trình
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse7442" role="button"
                aria-expanded="false" aria-controls="collapse7442">
                Kho dữ liệu
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse7443" role="button"
                aria-expanded="false" aria-controls="collapse7443">
                Tác nhân
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse7444" role="button"
                aria-expanded="false" aria-controls="collapse7444">
                Luồng dữ liệu
              </a>
            </p>

            <div class="collapse" id="collapse7441">
              <div class="card card-body">
                <p><b>Tiến trình</b></p>
                <ul>
                  <li>Không một tiến trình nào chỉ có thông tin vào mà không có thông tin ra. Nếu một đối tượng nào đó
                    mà chỉ
                    có thông tin vào mà không có thông tin ra thì đó có thể là một tác nhân ngoài (đích-thu nhận thông
                    tin).</li>
                  <li>Không một tiến trình nào chỉ có thông tin ra mà không có thông tin vào. Nếu một đối tượng nào đó
                    mà chỉ
                    có thông tin ra mà không có thông tin vào thì đó có thể là một tác nhân trong (nguồn-phát sinh thông
                    tin)</li>
                  <li>Thông tin vào của một tiến trình phải khác với thông tin ra của tiến trình đó.</li>
                  <li>Tên một tiến trình phải duy nhất và là một mệnh đề chỉ hành động.</li>
                </ul>
              </div>
            </div>
            <div class="collapse" id="collapse7442">
              <div class="card card-body">
                <p><b>Kho dữ liệu</b></p>
                <ul>
                  <li>Tên một kho dữ liệu phải là một mệnh đề danh từ.</li>
                  <li>Dữ liệu không thể di chuyển trực tiếp từ một kho dữ liệu này đến một kho dữ liệu khác.</li>
                  <li>Không thể di chuyển trực tiếp dữ liệu từ một tác nhân đến một kho dữ liệu.</li>
                  <li>Không thể di chuyển trực tiếp dữ liệu từ một kho dữ liệu đến một tác nhân.</li>
                </ul>
              </div>
            </div>
            <div class="collapse" id="collapse7443">
              <div class="card card-body">
                <p><b>Tác nhân</b></p>
                <ul>
                  <li>Tên một tác nhân phải là một mệnh đề danh từ.</li>
                  <li>Dữ liệu không thể di chuyển trực tiếp từ một tác nhân này đến một tác nhân khác.</li>
                </ul>
              </div>
            </div>
            <div class="collapse" id="collapse7443">
              <div class="card card-body">
                <p><b>Luồng dữ liệu</b></p>
                <ul>
                  <li>Tên một luồng dữ liệu phải là một mệnh đề danh từ.</li>
                  <li>Một luồng dữ liệu chỉ có một hướng chỉ hướng di chuyển của dữ liệu.</li>
                  <li>Một luồng dữ liệu không thể quay lui nơi nó vừa đi khỏi.</li>
                  <li>Một luồng dữ liệu đi vào một kho có nghĩa là kho được cập nhật dữ liệu.</li>
                  <li>Một luồng dữ liệu đi ra khỏi một kho có nghĩa là dữ liệu được đọc từ kho.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="collapse" id="collapse745">
          <div class="card card-body">
            <p><b>Kỹ thuật phân mức trong DFD</b></p>
            <p>Căn cứ vào việc phân rã chức năng của một BFD:</p>
            <ul>
              <li>Mô tả một DFD theo nhiều mức khác nhau</li>
              <li>Mỗi mức được thể hiện trong 1 hoặc nhiều trang</li>
              <li>Mỗi ngữ cảnh
                <ul>
                  <li>Chỉ gồm DFD, trong đó chỉ có một tiến trình duy nhất (chức năng tổng quát của hệ thống) trao đổi
                    các luồng thông tin với các tác nhân ngoài</li>
                  <li>Tên của tiến trình là tên của hệ thống</li>
                </ul>
              </li>
              <li>Mức 0: còn gọi là mức đỉnh
                <ul>
                  <li>Chỉ gồm 1 DFD</li>
                  <li>Tiến trình được đánh số tuần từ: 1.0, 2.0, ...</li>
                </ul>
              </li>
              <li>Các mức 1, 2, 3, ... mỗi mức gồm nhiều DFD được thành lập như sau:
                <ul>
                  <li>Cứ mỗi chức năng ở mức trên, ta thành lập một DFD ở mức dưới, gọi là biểu diễn DFD ở mức con</li>
                  <li>Phân rã chức năng đó thành nhiều chức năng con.</li>
                  <li>Vẽ lại các luồng dữ liệu vào và ra chức năng trên, nhưng bây giờ phải vào hoặc ra chức năng con
                    thích hợp.</li>
                  <li>Nghiên cứu các quan hệ về dữ liệu giữa các chức năng con, nhờ đó bổ sung các luồng dữ liệu nội bộ
                    hoặc
                    các kho dữ liệu nội bộ.</li>
                  <li>Các chức năng được đánh số theo ký pháp chấm (.) để tiện theo dõi vệt triển khai từ trên xuống.
                  </li>
                </ul>
              </li>
            </ul>
            <center>
              <img src="./assets/img/PTTKHT/Chap3/img10.png" alt="" class="w-100">
            </center>
            <p>Tổng quát, có thể định nghĩa một cách quy nạp biểu đồ luồng dữ liệu các mức như sau:</p>
            <ul>
              <li>Biểu đồ luồng dữ liệu mức n là biểu đồ luồng dữ liệu nhận được từ việc phân rã một tiến trình thuộc
                biểu đồ
                luồng dữ liệu mức n-1</li>
              <li>Như vậy, biểu đồ luồng dữ liệu ở mỗi mức là tập hợp các DFD ở mức đó</li>
            </ul>
          </div>
        </div>
        <div class="collapse" id="collapse746">
          <div class="card card-body">
            <p><b>Ví dụ: BFD của Hệ thống thông tin "Quản lý tín dụng"</b></p>
            <center>
              <img src="./assets/img/PTTKHT/Chap3/img11.png" alt="" class="w-100">
            </center>
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse7461" role="button"
                aria-expanded="false" aria-controls="collapse7461">
                CD của hệ thống "Quản lý tín dụng"
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse7462" role="button" aria-expanded="false" aria-controls="collapse7462">
                DFD mức 0 của hệ thống "Quản lý tín dụng
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse7463" role="button" aria-expanded="false" aria-controls="collapse7463">
                Phân rã DFD mức 0 thành 2 sơ đồ DFD mức 1
              </a>
            </p>
            <div class="collapse" id="collapse7461">
              <div class="card card-body">
                <p><b>CD của hệ thống "Quản lý tín dụng"</b></p>
                <ul>
                  <li>Chức năng tổng quát của hệ thống: “Quản lý tín dụng”</li>
                  <li>Tác nhân của hệ thống: “Khách vay”.</li>
                </ul>
                <center>
                  <img src="./assets/img/PTTKHT/Chap3/img12.png" alt="" class="w-100">
                </center>
              </div>
            </div>
            <div class="collapse" id="collapse7462">
              <div class="card card-body">
                <p><b>DFD mức 0 của hệ thống "Quản lý tín dụng"</b></p>
                <ul>
                  <li>Chức năng ở mức 0 được phân rã thành 2 chức năng con là “Cho vay” và “Thu nợ”.</li>
                  <li>Ngoài ba luồng dữ liệu đã có ở mức 0 phải được bảo toàn, thì ta thấy luồng dữ liệu trao đổi giữa hai chức
                    năng “Cho vay” và “Thu nợ” không trực tiếp mà phải thông qua một kho dữ liệu đó là “Sổ nợ”.</li>
                </ul>
                <center>
                  <img src="./assets/img/PTTKHT/Chap3/img13.png" class="w-100" alt="">
                </center>
              </div>
            </div>
            <div class="collapse" id="collapse7463">
              <div class="card card-body">
                <p><b>Phân rã DFD mức 0 thành 2 sơ đồ DFD mức 1</b></p>

                <p>
                  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse74631" role="button" aria-expanded="false" aria-controls="collapse74631">
                    DFD mức 1 của chức năng "Cho vay"
                  </a>
                  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse74632" role="button" aria-expanded="false" aria-controls="collapse74632">
                    DFD mức 1 của chức năng "Thu nợ"
                  </a>
                </p>

                <div class="collapse" id="collapse74631">
                  <div class="card card-body">
                    <p><b>DFD mức 1 của chức năng "Cho vay"</b></p>
                    <p>Chức năng “Cho vay” ở mức 1 được phân rã thành 3 chức năng con là “Nhận đơn”, “Duyệt vay” và “Trả lời đơn”</p>
                    <center>
                      <img src="./assets/img/PTTKHT/Chap3/img14.png" class="w-100" alt="">
                    </center>
                  </div>
                </div>
                <div class="collapse" id="collapse74632">
                  <div class="card card-body">
                    <p><b>DFD mức 1 của chức năng "Thu nợ"</b></p>
                    <p>Chức năng “Thu nợ” ở mức 1 được phân rã thành 3 chức năng con là “Xác định kỳ hạn trả”, “Xử lý nợ trả trong hạn” và “Xử lý nợ trả ngoài hạn”.</p>
                    <center>
                      <img src="./assets/img/PTTKHT/Chap3/img15.png" alt="">
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            `],
            ['Sơ đồ quan hệ thực thể','PTTKHT35', `
            <p><b>Sơ đồ quan hệ thực thể</b></p>

            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse751" role="button" aria-expanded="false" aria-controls="collapse751">
                Khái niệm
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse752" role="button" aria-expanded="false" aria-controls="collapse752">
                Phân tích mô hình quan hệ thực thể
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse753" role="button" aria-expanded="false" aria-controls="collapse753">
                Các bước mô tả mô hình quan hệ thực thể
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse754" role="button" aria-expanded="false" aria-controls="collapse754">
                Ký pháp
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse755" role="button" aria-expanded="false" aria-controls="collapse755">
                Ví dụ
              </a>
            </p>
    
            <div class="collapse" id="collapse751">
              <div class="card card-body">
                <p><b>Khái niệm</b></p>
                <p>Mô hình quan hệ thực thể của một HTTT được thiết lập từ hai mô hình liên quan đến nhau là mô hình quan niệm về dữ liệu và mô hình quan niệm về xử lý.</p>
                  <ul>
                    <li>Mô hình quan niệm về dữ liệu:
                      <ul>
                        <li>Là sự mô tả toàn bộ dữ liệu của hệ thống, những mô tả này độc lập với các lựa chọn môi trường cài đặt</li>
                        <li>Là công cụ cho phép người phân tích thể hiện dữ liệu của hệ thống ở mức quan niệm</li>
                        <li>Mô hình có thể mô tả bằng ngôn ngữ tự nhiên hoặc bằng hình vẽ.</li>
                      </ul>
                    </li>
                    <li>Mô hình quan niệm về xử lý:
                      <ul>
                        <li>Mô tả toàn bộ các quy tắc xử lý được áp dụng cho dữ liệu của hệ thống.</li>
                        <li>Mô hình quan niệm cũng là cơ sở để trao đổi giữa những người phân tích thiết kế hệ thống</li>
                      </ul>
                    </li>
                  </ul>
              </div>
            </div>
            <div class="collapse" id="collapse752">
              <div class="card card-body">
                <p><b>Phân tích mô hình quan hệ thực thể</b></p>
                <ul>
                  <li>Các tập thực thể.</li>
                  <li>Các mối quan hệ giữa các tập thực thể.</li>
                  <li>Các thuộc tính của các tập thực thể và các mối quan hệ: thuộc tính đơn, phức hợp, đa trị
                    <ul>
                      <li>Các loại quan hệ giữa các tập thực thể (1-1, 1-n, n-n);</li>
                      <li>Chiều của mối quan hệ
                        <ul style="list-style-type: '- ';">
                          <li>Mối quan hệ một chiều (đệ quy-phản xạ);</li>
                          <li>Mối quan hệ hai chiều;</li>
                          <li>Mối quan hệ nhiều chiều.</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>Đối tượng nào có thể làm tập thực thể?
                    <br>
                    Một đối tượng có thể làm tập thực thể nếu nó được tạo thành từ một lớp các cá thể tương ứng
                  </li>
                  <li>Yếu tố thông tin gì có thể làm thuộc tính cho một tập thực thể?
                    <br>
                    Các thông tin đặc trưng để xác định các thực thể trong một tập thực thể đều có thể làm thuộc tính cho tập
    thực thể đó.
                  </li>
                  <li>
                    Loại bỏ các thuộc tính vô nghĩa
                    <br>
                    Loại bỏ các thông tin không bao giờ sử dụng đến
                  </li>
                  <li>Tính độc lập của các thuộc tính
                    <ul>
                      <li>Thuộc tính của một tập thực thể không được suy từ những thuộc tính khác của tập thực thể đó.</li>
                      <li>Ví dụ: Thuộc tính Thành tiền được tính toán từ 2 thuộc tính Số lượng và Đơn giá, nên Thành tiền gọi là
                        thuộc tính suy dẫn (thứ sinh), vì vậy sẽ bị loại bỏ khỏi thực thể Hóa đơn.</li>
                    </ul>
                    <center>
                      <img class="w-100" src="./assets/img/PTTKHT/Chap3/img16.png" alt="">
                    </center>
                  </li>
                  <li>Xác định thuộc tính khóa
                    <ul>
                      <li>Trong mỗi tập thực thể nên chọn khóa chỉ có một thuộc tính để tiện việc xử lý.</li>
                      <li>Nếu trong tập thực thể không có một thuộc tính nào để làm khóa thì nên áp đặt một thuộc tính bên ngoài
                        để làm khóa.</li>
                      <li>Thông thường thuộc tính áp đặt này có dạng: Mã + &lt;Tên tập thực thể&gt;</li>
                    </ul>
                  </li>
                  <li>Tách thuộc tính có dung lượng lớn
                    <p>Nếu một thuộc tính của tập thực thể có nhiều giá trị, mỗi giá trị chiếm một dung lượng lớn và lặp lại nhiều
                      lần thì nên tách thành một tập thực thể riêng có tên là &lt;Tên thuộc tính&gt; và có hai thuộc tính là:</p>
                      <ul>
                        <li>Mã + &lt; Tên thuộc tính &gt;</li>
                        <li>Tên + &lt; Tên thuộc tính &gt;</li>
                      </ul>
                  </li>
                  <li>Xử lý 1 nhóm thuộc tính nằm trong 1 tập thực thể
                    <ul>
                      <li>Nếu trong một tập thực thể có một nhóm thuộc tính lặp thì tách chúng (các thuộc tính lặp) thành một tập
                        thực thể riêng.</li>
                      <li>Tập thực thể này nhận các thuộc tính lặp làm thuộc tính và nhận thuộc tính khóa của tập thực thể gốc
                        làm khóa.</li>
                    </ul>
                    <br>
                    <p>Ví dụ</p>
                    <center>
                      <img src="./assets/img/PTTKHT/Chap3/img17.png" class="w-100" alt="">
                    </center>
                  </li>
                </ul>
              </div>
            </div>
            <div class="collapse" id="collapse753">
              <div class="card card-body">
                <p><b>Các bước mô tả mô hình quan hệ thực thể</b></p>
                <p>Mô hình quan niệm dữ liệu là mô hình liên hoàn các tập thực thể và mối quan hệ của hệ thống. Để mô tả
                  mô hình quan niệm về dữ liệu của một HTTT, cần mô tả thông tin theo các bước sau:</p>
                <ul>
                  <li>B1: Mô tả toàn bộ các tập thực thể và các thuộc tính tương ứng của chúng</li>
                  <li>B2: Mô tả toàn bộ các mối quan hệ.
                    <ul>
                      <li>Ý nghĩa của mỗi mối quan hệ và các thuộc tính tương ứng của chúng (nếu có).</li>
                      <li>Bản số của mỗi tập thực thể qua mối quan hệ.</li>
                      <li>Loại mối quan hệ: một chiều, hai chiều (1-1, 1-n, n-n), nhiều chiều.</li>
                    </ul>
                  </li>
                  <li>B3: Vẽ mô hình thực thể - mối quan hệ.</li>
                </ul>
              </div>
            </div>
            <div class="collapse" id="collapse754">
              <div class="card card-body">
                <p><b>Ký pháp</b></p>
                <center>
                  <img class="w-100" src="./assets/img/PTTKHT/Chap3/img18.png" alt="">
                </center>
              </div>
            </div>
            <div class="collapse" id="collapse755">
              <div class="card card-body">
                <p><b>Ví dụ: Sơ đồ ERD của hệ thống "Quản lý hàng hóa"</b></p>
                <center>
                  <img src="./assets/img/PTTKHT/Chap3/img19.png" alt="" class="w-100">
                </center>
              </div>
            </div>
            `]
        ]
    },
    PTTKHT4: {
        title: `Tổng kết`,
        index: [
            ['Tổng kết','PTTKHT41', ``]
        ]
    }
}