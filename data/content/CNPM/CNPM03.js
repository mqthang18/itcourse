const CNPM3 = {
    CNPM01: {
        title: 'Quy trình xác định các yêu cầu',
        index: [
            ['Quy trình', 'CNPM011', `
            <center>
            <img src="./assets/img/CNPM/Chap3/img1.png" alt="" class="col-12 col-sm-10">
        </center>

        <ul>
            <li>Quá trình phối hợp giữa khách hàng và người phân tích</li>
            <li>Khách hàng phát biểu => người phân tích hiểu, cụ thể hóa và biểu diễn lại</li>
            <li>Phần mềm thực hiện chính xác, đầy đủ yêu cầu của người dùng => phần mềm đáng tin cậy</li>
            <li>Chi phí sửa chữa sai sót cao</li>
        </ul>
            `],
            ['Khó khăn', 'CNPM012', `
            <p><b>Khó khăn</b></p>
            <ul>
                <li>Khách hàng không biết họ cần gì và vấn đề của họ là gì?</li>
                <li>Không hiểu nghiệp vụ khách hàng</li>
                <li>Thảo luận đưa đến sự đồng ý</li>
                <li>Yêu cầu thường mang tính đặc thù</li>
                <li>Yêu cầu đa dạng</li>
                <li>Phát biểu yêu cầu thường không chính xác</li>
            </ul>
    
            `],
            ['Mục đích', 'CNPM013', `
            <p><b>Mục đích của giai đoạn phân tích là xác định rõ các yêu cầu phần mềm cần phát triển</b></p>
            <p><b>Tài liệu nên dễ hiểu với người dùng</b></p>
            `],
            ['Các mức độ chi tiết của yêu cầu', 'CNPM014', `
            <p><b>Các mức độ chi tiết của yêu cầu</b></p>
        <ul>
            <li>Định nghĩa (xác định)</li>
            <li>Đặc tả yêu cầu</li>
        </ul>
            `]
        ]
    },
    CNPM02: {
        title: 'Thu thập yêu cầu',
        index: [
            ['Các thành viên tham gia', 'CNPM021', `
            <p><b>Các thành viên tham gia</b></p>
            <ul>
                <li>Clients</li>
                <li>Customers</li>
                <li>Người dùng</li>
                <li>Chuyên gia về lĩnh vực</li>
                <li>Nhà nghiên cứu thị trường</li>
                <li>Luật sư và kiểm toán viên</li>
                <li>Kỹ sư phần mềm và các chuyên gia công nghệ khác</li>
            </ul>

            `],
            ['Các kỹ thuật dùng để thu thập yêu cầu', 'CNPM022', `
            <p><b>Các kỹ thuật dùng để thu thập yêu cầu</b></p>
            <div>
                <p>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse221" role="button"
                        aria-expanded="false" aria-controls="collapse221">
                        Kỹ thuật phỏng vấn
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse222" role="button"
                        aria-expanded="false" aria-controls="collapse222">
                        Dựa trên tài liệu sẵn có
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse223" role="button"
                        aria-expanded="false" aria-controls="collapse223">
                        Gửi bản câu hỏi
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse224" role="button"
                        aria-expanded="false" aria-controls="collapse224">
                        Quay phim
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse225" role="button"
                        aria-expanded="false" aria-controls="collapse225">
                        Sử dụng kịch bản
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse226" role="button"
                        aria-expanded="false" aria-controls="collapse226">
                        Dựa trên bản mẫu
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse227" role="button"
                        aria-expanded="false" aria-controls="collapse227">
                        Tổ chức hội thảo
                    </a>
                </p>
                <div>
                    <div class="collapse" id="collapse221">
                        <div class="card card-body">
                            <p><b>Kỹ thuật phỏng vấn</b></p>
                            <p><b>Đặc điểm</b></p>
                            <ul>
                                <li>Kỹ thuật đơn giản và trực tiếp</li>
                                <li>Đạt được xu hướng của cuộc phỏng vấn</li>
                                <li>Tìm ra yêu cầu chưa được phát hiện</li>
                                <li>Có được kho yêu cầu sử dụng trong suốt dự án</li>
                                <li>Một nghi ngờ sẽ không được thay thế cho cuộc phỏng vấn</li>
                            </ul>
                            <p><b>Các câu hỏi phạm vi tự do</b></p>
                            <ul>
                                <li>Ai là người dùng</li>
                                <li>Ai là khách hàng</li>
                                <li>Họ cần có một sự thay đổi</li>
                                <li>Ở đâu khác có thể tìm một giải pháp cho vấn đề này?</li>
                            </ul>
                            <p><b>Tạo thêm nội dung câu hỏi</b></p>
                            <p>Lý do: Yêu cầu chưa được phát hiện</p>
                            <p><b>Lời khuyên</b></p>
                            <ul>
                                <li>Sữa chữa nội dung và ghi lại</li>
                                <li>Đừng làm phiền người phỏng vấn</li>
                                <li>Ghi lại các câu trả lời</li>
                                <li>Tham khảo các mẫu</li>
                            </ul>

                            <p><b>Các dạng phỏng vấn</b></p>
                            <ul>
                                <li>Phỏng vấn theo cấu trúc: câu hỏi dạng đóng (VD: Quy trình xác nhận mua
                                    hàng có bao nhiêu bước?)</li>
                                <li>Phỏng vấn không theo cấu trúc (VD: Quy trình xác nhận mua hàng thực hiện
                                    như thế nào?)</li>
                            </ul>
                        </div>
                    </div>
                    <div class="collapse" id="collapse222">
                        <div class="card card-body">
                            <p><b>Dưa trên tài liệu sẵn có</b></p>
                            <ul>
                                <li>Đặc điểm chính
                                    <ul>
                                        <li>Dựa trên tài liệu của khách hàng</li>
                                        <li>Chương trình, phần mềm được sử dụng</li>
                                        <li>Báo cáo, hóa đơn thành toán...</li>
                                    </ul>
                                </li>
                                <li>Một vài lời khuyên
                                    <ul>
                                        <li>Tài liệu cung cấp không đủ</li>
                                        <li>Quy trình làm việc tại cơ quan không tối ưu</li>
                                    </ul>
                                </li>
                                <center>
                                    <img src="./assets/img/CNPM/Chap3/img2.png" alt=""
                                        class="col-12 col-sm-8">
                                </center>
                            </ul>
                        </div>
                    </div>
                    <div class="collapse" id="collapse223">
                        <div class="card card-body">
                            <p><b>Gửi bản câu hỏi</b></p>
                            <ul>
                                <li>Đặc điểm
                                    <ul>
                                        <li>Gửi bản câu hỏi đến các thành viên liên quan trong cơ quan khách
                                            hàng => hữu ích tập hợp ý kiến</li>
                                        <li>Thuận lợi: các thành viên trong công ty linh động</li>
                                    </ul>
                                </li>
                                <li>Khuyết điểm
                                    <ul>
                                        <li>Khó mở rộng câu hỏi</li>
                                        <li>Ít thông tin mở rộng</li>
                                        <li>Tính chính xác cần đặt câu hỏi</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="collapse" id="collapse224">
                        <div class="card card-body">
                            <p><b>Quay phim</b></p>
                            <ul>
                                <li>Đặc điểm chính
                                    <ul>
                                        <li>Được sử dụng gần đây</li>
                                        <li>Tiến hành tại nơi làm việc của khách hàng</li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li>Khó nắm bắt thông tin khách hàng</li>
                                        <li>Vi phạm đời tư</li>
                                        <li>Đụng trạm vấn đề nhạy cảm</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="collapse" id="collapse225">
                        <div class="card card-body">
                            <p><b>Sử dụng kịch bản</b></p>
                            <ul>
                                <li>Đặc điểm
                                    <ul>
                                        <li>Cách thức tiến hành nhằm hoàn thành mục tiêu nào đó</li>
                                        <li>Liêt kê các hành động có trong kịch bản...</li>
                                        <li>Ưu điểm: Khách hàng có thể hiểu và cảm nhận được</li>
                                    </ul>
                                </li>
                                <li>Khuyết điểm: Mất thời gian và công sức để thực hiện</li>
                            </ul>
                        </div>
                    </div>
                    <div class="collapse" id="collapse226">
                        <div class="card card-body">
                            <p><b>Dựa trên bản mẫu</b></p>
                            <ul>
                                <li>Đặc điểm
                                    <ul>
                                        <li>Xây dựng nhanh một mô hình và đưa vào sử dụng</li>
                                        <li>Nhóm phân tích theo sát sự vận hành của phần mềm</li>
                                    </ul>
                                </li>
                                <li>Khuyết điểm
                                    <p>Mất nhiều thời gian cho việc phân tích - sửa đổi - cập nhật</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="collapse" id="collapse227">
                        <div class="card card-body">
                            <p><b>Tổ chức hội thảo</b></p>
                            <ul>
                                <li>Đặc điểm
                                    <ul>
                                        <li>Kỹ thuật mạnh mẽ nhất</li>
                                        <li>Tập hợp các nhà đầu tư chính cùng nhau</li>
                                        <li>Thảo luận, đóng góp ý kiến</li>
                                    </ul>
                                </li>
                                <li>Khuyết điểm
                                    <br>
                                    Mất nhiều thời gian chuẩn bị và huy động nguồn lực con người
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            `],
        ]
    },
    CNPM03: {
        title: 'Phân tích yêu cầu',
        index: [
            ['Phân tích', 'CNPM031', `
            <ul>
            <li><b>Do khách hàng - người sử dụng đưa ra</b>
                <ul>
                    <li>Các chức năng của phần mềm</li>
                    <li>Hiệu năng của phần mềm</li>
                    <li>Các yêu cầu về thiết kế giao diện</li>
                </ul>
            </li>
            <li><b>Yêu cầu phần mềm chia ra làm 4 loại</b>
                <ul>
                    <li>Yêu cầu về phần mềm</li>
                    <li>Yêu cầu về dữ liệu</li>
                    <li>Yêu cầu về phần cứng</li>
                    <li>Yêu cầu về con người</li>
                </ul>
            </li>
        </ul>
            `]
        ]
    },
    CNPM04: {
        title: 'Các đặc trưng của yêu cầu',
        index: [
            ['Các đặc trưng', 'CNPM041', `
            <ul>
            <li><b>Hoàn chỉnh</b>: Tất cả các yêu cầu đều được thực hiện, nếu không thực hiện được thì thông báo cho
                người dùng biết</li>
            <li><b>Nhất quán</b>: tất cả đầu vào cho bất kỳ quá trình đều xử lý tương tự nhau</li>
            <li><b>Khả thi</b>: Tất cả yêu cầu trong tài liệu đều được thực hiện</li>
            <li><b>Có thể sửa đổi</b>: Quản lý được sư thay đổi</li>
            <li><b>Không mơ hồ</b>: Các yêu cầu phải duy nhất</li>
            <li><b>Có thể kiểm thử</b>: Xác định phương pháp kiểm thử, hướng dẫn sử dụng, trình diễn, thử nghiệm</li>
        </ul>
            `]
        ]
    },
    CNPM05: {
        title: 'Các ký hiệu mô hình hóa',
        index: [
            ['Các ký hiệu mô hình hóa', 'CNPM051', `
            <ul>
            <li><b>Mô hình hóa</b>: mô hình trừu tượng của một hệ thống được biểu diễn dưới dạng góc nhin</li>
            <li><b>Các dạng ký hiệu mô hình hóa</b>:
                <ul>
                    <li>Lưu đồ thực thể quan hệ (Entity Relationship Diagram - ERD)</li>
                    <li>Dò theo sự kiện (Event Traces)</li>
                    <li>Máy trạng thái (State Machines)</li>
                    <li>Lưu đồ dòng dữ liệu (Data Flow Diagram)</li>
                </ul>
            </li>
        </ul>
            `]
        ]
    },
    CNPM06: {
        title: 'Lưu đồ thực thể quan hệ',
        index: [
            ['Lưu đồ ER', 'CNPM061', `
            <center>
            <img src="./assets/img/CNPM/Chap3/img3.png" alt="" class="col-12 col-sm-8">
        </center>
        <ul>
            <li><b>Thực thể</b>: hình chữ nhật, biểu diễn tập các đối tượng</li>
            <li><b>Mối quan hệ</b>: một cạnh nối hai thực thể, hình thoi ở chính giữa cạnh xác định loại quan hệ</li>
            <li><b>Thuộc tính</b>: một diễn giải trong thực thể</li>
        </ul>

        <p><b>Ví dụ. Xây dựng CSDL quản lý tại một công ty</b></p>
        <center>
            <img src="./assets/img/CNPM/Chap3/img4.png" alt="" class="col-12 col-sm-8">
        </center>
            `]
        ]
    },
    CNPM07: {
        title: 'Dò theo sự kiện',
        index: [
            ['Dò theo sự kiện', 'CNPM071', `
            <ul>
            <li>Mô tả dạng đồ họa của một chuỗi các sự kiện mà chúng được trao đổi giữa các thực thể của thế giới thực
            </li>
            <li>Bao gồm:
                <ul>
                    <li>Đường dọc: Đường thời gian của một thực thể</li>
                    <li>Đường ngang: Một sự kiện hay sự tương tác giữa 2 thực thể</li>
                    <li>Thời gian tiến triển theo hướng từ trên xuống</li>
                </ul>
            </li>
        </ul>
        <center>
            <img src="./assets/img/CNPM/Chap3/img5.png" alt="" class="col-12 col-sm-8">
        </center>
            `]
        ]
    },
    CNPM08: {
        title: 'Máy trạng thái',
        index: [
            ['Máy trạng thái', 'CNPM081', `
            <p>Mô hình toán học dùng trong thiết kế máy tính và các mạch tuần hoàn, bao gồm nhiều trạng thái có liên quan
                đến nhau</p>
            <p><b>Bao gồm</b></p>
            <ul>
                <li>Nút (trạng thái)</li>
                <li>Cạnh (dịch chuyển)</li>
                <li>Đường đi</li>
            </ul>
            <p>Ví dụ: <b>Sơ đồ trạng thái UML</b></p>
            <center>
                <img src="./assets/img/CNPM/Chap3/img6.png" alt="" class="col-12 col-sm-8">
            </center>
            `]
        ]
    },
    CNPM09: {
        title: 'Lưu đồ dòng dữ liệu',
        index: [
            ['Lưu đồ dòng dữ liệu', 'CNPM091', `
            <ul>
                <li>Cần thiết để có thể nhìn thấy được những chức năng trong dự án</li>
                <li>Lưu đồ dòng dữ liệu mô hình hóa chức năng và dòng dữ liệu từ chức năng này sang chức năng khác. Trong
                    đó:
                    <ul>
                        <li>Hình Elip biểu diễn cho quy trình hay chức năng</li>
                        <li>Mũi tên biểu diễn dòng dữ liệu</li>
                        <li>Hai đường song song biểu diễn cho khoa dữ liệu</li>
                        <li>Hình chữ nhất biểu diễn cho tác nhân</li>
                    </ul>
                </li>
            </ul>
            <p>Ví dụ: <b>Lưu đồ dòng dữ liệu mức cao biểu diễn cho bài toán quản lý bán hàng</b></p>
            <center>
                <img src="./assets/img/CNPM/Chap3/img7.png" alt="" class="col-12 col-sm-8">
            </center>
            `]
        ]
    },
    CNPM10: {
        title: 'Các ngôn ngữ đặc tả',
        index: [
            ['Ngôn ngữ đặc tả', 'CNPM101', `
            <div>
            <p>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse101" role="button"
                    aria-expanded="false" aria-controls="collapse101">
                    Ngôn ngữ mô hình hóa hợp nhất (Unified Modelling Language - UML)
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse102" role="button"
                    aria-expanded="false" aria-controls="collapse102">
                    Ngôn ngữ mô tả và đặc tả (Specification and Description Language - SDL)
                </a>
            </p>
            <div>
                <div class="collapse" id="collapse101">
                    <div class="card card-body">
                        <p><b>Ngôn ngữ mô hình hóa hợp nhất (Unified Modelling Language - UML)</b></p>
                        <ul>
                            <li>Được sử dụng trong phân tích hệ thống hướng đối tượng</li>
                            <li>Bao gồm các dạng sơ đồ
                                <ul>
                                    <li>Sơ đồ lớp</li>
                                    <li>Sơ đồ đối tượng</li>
                                    <li>Sơ đồ tình huống sử dụng</li>
                                    <li>Sơ đồ tuần tự</li>
                                    <li>Sơ đồ cộng tác</li>
                                    <li>Sơ đồ trạng thái</li>
                                    <li>Sơ đồ thành phần</li>
                                    <li>Sơ đồ hoạt động</li>
                                    <li>Sơ đồ triển khai</li>
                                    <li>Sơ đồ gói</li>
                                    <li>Sơ đồ liên lạc</li>
                                    <li>Sơ đồ tương tác</li>
                                    <li>Sơ đồ phối hợp thời gian</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="collapse" id="collapse102">
                    <div class="card card-body">
                        <p><b>Ngôn ngữ mô tả và đặc tả (Specification and Description Language - SDL)</b></p>
                        <ul>
                            <li>Xác định hành vi của quá trình phân tán</li>
                            <li>Ngôn ngữ mô tả và đặc tả bao gồm
                                <ul>
                                    <li>Sơ đồ hệ thống SDL (Lưu đồ dòng dữ liệu)</li>
                                    <li>Sơ đồ khối SDL (Lưu đồ đòng dữ liệu)</li>
                                    <li>Sơ đồ quy trình SDL (Mô hình máy trạng thái)</li>
                                    <li>Kiểu dữ liệu SDL (Đặc tả đại số)</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            `]
        ]
    },
    CNPM11: {
        title: 'Lập bản mẫu cho các yêu cầu',
        index: [
            ['Lập bản mẫu cho các yêu cầu', 'CNPM111', `
            <ul>
            <li>Sử dụng bản mẫu như một kỹ thuật xác định yêu cầu</li>
            <li>Phải sử dụng các phương pháp truyền thống để thu thập thông tin ban đầu</li>
        </ul>
        <div>
            <p>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse111" role="button"
                    aria-expanded="false" aria-controls="collapse111">
                    Ưu điểm
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse112" role="button"
                    aria-expanded="false" aria-controls="collapse112">
                    Nhược điểm
                </a>
            </p>
            <div>
                <div class="collapse" id="collapse111">
                    <div class="card card-body">
                        <p><b>Ưu điểm</b></p>
                        <ul>
                            <li>Hệ thống có yêu cầu chưa rõ ràng</li>
                            <li>Nhiều thành viên tham gia vào phát triển hệ thống</li>
                            <li>Thiết kế phức tạp</li>
                            <li>Mong muốn làm sáng tỏ vấn đề</li>
                            <li>Công cụ và dữ liệu sẵn dùng</li>
                        </ul>
                    </div>
                </div>
                <div class="collapse" id="collapse112">
                    <div class="card card-body">
                        <p><b>Hạn chế</b></p>
                        <ul>
                            <li>Xu hướng không theo chuẩn tài liệu</li>
                            <li>Khó thích ứng</li>
                            <li>Bỏ qua các phát sinh về tương tác và chia sẻ dữ liệu</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            `]
        ]
    },
    CNPM12: {
        title: 'Video bài giảng',
        index: [
            ['ĐH Trà Vinh', 'CNPM031', `
                <p>Bài giảng <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220055_CongNghePhanMem/Video/Chuong3.mp4" target="_blank">Link</a></p>
            `],
            ['Youtube', 'CNPM032', ``],
        ]
    }
}