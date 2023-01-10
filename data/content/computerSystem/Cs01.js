const CS01 = {
    'CS01': {
        'title': 'Giới thiệu về hệ điều hành',
        'index': [
            ['Hệ điều hành là gì?', 'CS011', `
                <div>
                    <ul>
                        <li>Vào những năm 1960, hệ điều hành có thể được định nghĩa như là “chương trình điều khiển thiết bị”</li>
                        <li>Hệ điều hành là gói các chương trình cũng như các đoạn vi mã, các chương trình này đảm bảo khả năng sử dụng các thiết bị máy tính</li>
                    </ul>
                    <center style="width: 100%;">
                    <img src="./assets/img/CS/1/img1.jpeg" alt="HDH">
                    </center>
                </div>
            `],
            ['Vai trò của hệ điều hành', 'CS012', `
            <ul>
                <li>Cung cấp giao diện cho người sử dụng;</li>
                <li>Đảm bảo phân chia tài nguyên giữa các ứng dụng;</li>
                <li>Cung cấp khả năng làm việc tương tác người – máy;</li>
                <li>Đảm bảo sự truy cập của ứng dụng, người dùng tới các tài nguyên;</li>
                <li>Thực hiện các tác vụ vào ra;</li>
                <li>Thực hiện khôi phục lại thông tin, tiến trình trong những trường hợp xảy ra sự cố.</li>
                <li>Các tài nguyên quan trọng được hệ điều hành quản lý:
                    <ul>
                        <li>Bộ vi xử lý (CPU);</li>
                        <li>Bộ nhớ (Memory);</li>
                        <li>Thiết bị vào ra;</li>
                        <li>Dữ liệu</li>
                    </ul>
                </li>
                <li>Trong quá trình vận hành, hệ điều hành tương tác với nhiều đối tượng sử dụng khác nhau, đó có thể là:
                    <ul>
                        <li>Người quản trị;</li>
                        <li>Người lập trình;</li>
                        <li>Người sử dụng;</li>
                        <li>Các chương trình;</li>
                        <li>Các thiết bị;</li>
                    </ul>
                </li>
            </ul>
            `],
            ['Lịch sử phát triển của hệ điều hành', 'CS013', `
            <ul>
            <li><b><span style="color: red;">Thế hệ đầu tiên (0)</span></b>: Máy tính chưa có hệ điều hành</li>
            <li><b><span style="color: red;">Thế hệ 1 – những năm 1950</span></b>: Hệ điều hành xử lý theo lô.</li>
            <li><b><span style="color: red;">Thế hệ 2 – đầu những năm 1960</span></b>: Là hệ điều hành được xây dựng như các hệ sử dụng cộng tác (<b>Interactive</b>), với khả năng chạy đa nhiệm (<b>Multi Tasking</b>) và khả năng hỗ trợ đa xử lý (<b>Multi Processor</b>)
                <ul>
                    <li>Bắt đầu xuất hiện phương pháp đảm bảo sự độc lập của chương trình đối với các thiết bị;</li>
                    <li>Xuất hiện các hệ thống phân chia thời gian (Time Sharing);</li>
                    <li>Xuất hiện các hệ thống thời gian thực đầu tiên</li>
                </ul>
            </li>
            <li><b style="color: red;">Thế hệ 3 – Giữa những năm 1960 - 1970</b>:
                <ul>
                    <li>Xuất hiện cùng với sự ra đời của họ máy tính IBM System 360 vào năm 1964;</li>
                    <li>Hỗ trợ nhiều chế độ: Xử lý theo lô, phân chia thời gian, chế độ thời gian thực.</li>
                </ul>
            </li>
            <li><b style="color: red;">Thế hệ 4 – giữa những năm 1970</b>: Là hệ điều hành tiến bộ.
                <ul>
                    <li>Máy tính cá nhân ra đời đánh dấu một cuộc cách mạng mang công nghệ thông tin đến với mọi người;</li>
                    <li>Hệ thống ngày càng phải thân thiện, dễ sử dụng;</li>
                    <li>Khái niệm máy ảo (Virtual Machine) cũng trở nên phổ biến.</li>
                </ul>
            </li>
            <li>Những hệ điều hành đầu tiên định hướng tới việc giảm lãng phí thời gian máy khi chuẩn bị đưa một bài toán vào thực hiện (Setup Time) và thời gian kết thúc một bài toán(Teardown Time).</li>
            
        </ul>
            `]
        ]
    },
    'CS02': {
        'title': 'Các hệ điều hành thế hệ đầu tiên',
        'index': [
            ['Các hệ điều hành thế hệ đầu tiên', 'CS021', `
                <ul>
                    <li>Những hệ điều hành đầu tiên này <b style="color: red;">giúp tăng hiệu suất</b> sử dụng máy tính bởi vì các bài toán được xử lý theo lô thay vì từng bài toán riêng lẻ.</li>
                    <li><b style="color:red;">Đặc điểm</b>
                        <ul>
                            <li>Xử lý bài toán theo lô;</li>
                            <li>Có các chương trình con vào/ra chuẩn;</li>
                            <li>Khả năng tự động chuyển từ bài toán này sang thực hiện bài toán tiếp theo, giảm thời gian chết của hệ thống;</li>
                            <li>Có công cụ khôi phục hệ thống khi xảy ra lỗi;</li>
                            <li>Cung cấp ngôn ngữ điều khiển tác vụ (Job Control Language).</li>
                        </ul>
                    </li>
                </ul>
            `]
        ]
    },
    'CS03': {
        'title': 'Các nhà sản xuất hệ điều hành đầu những năm 1960',
        'index': [
            ['Các nhà sản xuất hệ điều hành đầu những năm 1960', 'CS031', `
            <ul>
            <li>Các nhà sản xuất thời kỳ này: Bendix, Control Data Corporation (CDC), IBM, RCA, General Electric...</li>
            <li>Các thành tựu quan trọng:
                <ul>
                    <li>Xây dựng và đưa vào hoạt động thành công hệ thống phòng thủ cho bộ quốc phòng;</li>
                    <li>Hệ thống đăng ký và bán vé máy bay cho các công ty hàng không;</li>
                    <li>Sự kết hợp giữa máy tính và truyền thông.</li>
                </ul>
            </li>
            <li>Vào năm 1963, hãng Burroughs đã thiết kế hệ điều hành MCP với đặc điểm:
                <ul>
                    <li>Đa nhiệm - Multi Tasking/ Multi Programming;</li>
                    <li>Đa xử lý - Multi Processing;</li>
                    <li>Bộ nhớ ảo - Virtual Memory;</li>
                    <li>Hỗ trợ khả năng dò tìm lỗi (Debug) trên ngôn ngữ nguồn;</li>
                    <li>Xây dựng hệ điều hành bằng các ngôn ngữ lập trình bậc cao.</li>
                </ul>
            </li>
        </ul>    
            `]
        ]
    },
    'CS04': {
        'title': 'Họ máy tính IBM System/360',
        'index': [
            ['HỌ MÁY TÍNH IBM SYSTEM/360', 'CS041', `
            <ul>
            <li>Ra đời vào 4/1964
                <ul>
                    <li>Ưu điểm: Các phiên bản khác nhau đều tương thích về kiến trúc, có thể sử dụng chung một hệ điều hành.</li>
                    <li>Nhược điểm: Không tương thích với các hệ thống khác.</li>
                </ul>
            </li>
            <li>Khắc phục nhược điểm của System/360
                <ul>
                    <li>IBM đã cung cấp các bộ chương trình mô phỏng lớn nhất trong lịch sử cho phép 1 máy tính giả lập một hệ thống máy tính khác.</li>
                    <li>Nhờ các bộ mô phỏng, người sử dụng có thể vận hành chương trình ứng dụng cũ trên System/360 và song song thực hiện việc chuyển đổi chương trình lên phiên bản hỗ trợ System/360 vào lúc thích hợp</li>
                </ul>
            </li>
            </ul>
            `]
        ]
    },
    'CS05': {
        'title': 'Phản ứng của các nhà sản xuất khác với System/360',
        'index': [
            ['Phản ứng của các nhà sản xuất khác với System/360', 'CS051', `
            <ul>
            <li>
                IBM System/360 ra đời là một đòn cạnh tranh mạnh mẽ tới các nhà sản xuất khác.
            </li>
            <li>
                Các chính sách
                <li>Sao chép lại kiến trúc của System/360, thiết kế hệ điều hành tương tự hệ điều hành của System/360 và
                bán với giá cạnh tranh hơn – thất bại.</li>
                <li>Thiết kế các hệ thống không tương thích với System/360 nhưng nhanh hơn và kinh tế hơn – thất bại.</li>
                <li>Thiết kế các máy đã được cải tiến, nhái lại các hệ thống IBM7000, IBM1400 – thành công</li>
            </li>
            <li>
                4 phiên bản hệ điều hành cho System/360 trong những năm 1960 của IBM
                <ul>
                    <li>DOS/360: DOS dành cho các phiên bản cỡ nhỏ;</li>
                    <li>OS/MFT: Dành cho các máy cỡ trung và các máy phiên bản cũ;</li>
                    <li>OS/MVT: Dành cho các máy phiên bản cũ của System/360;</li>
                    <li>CP-67/CMS: Dành cho các phiên bản lớn</li>
                </ul>
            </li>
            </ul>
            `]
        ]
    },
    'CS06': {
        'title': 'Hệ thống phân chia thời gian',
        'index': [
            ['Hệ thống phân chia thời gian', 'CS061', `
            <ul>
            <li>Đặc điểm
            <ul>
                <li>Cho phép một số người sử dụng làm việc trên các trạm đầu cuối thực hiện hội thoại trực tiếp với máy tính;</li>
                <li>Cho phép khai thác tất cả các phương tiện tính toán;</li>
            </ul>
        </li>
        <li>
            Một số hệ thống phân chia thời gian nổi tiếng
            <ul>
                <li>Hệ thống CTSS;</li>
                <li>Hệ thống MULTICS;</li>
                <li>TSS của IBM cho phiên bản System 360/67;</li>
                <li>CP-67/CMS;</li>
                <li>VM OS của RCA;</li>
                <li>KRONOS của CDC cho hệ thống CDC6000.</li>
            </ul>
        </li>
        </ul>
            `]
        ]
    },
    'CS07': {
        'title': 'Công nghệ lập trình',
        'index': [
            ['Công nghệ lập trình', 'CS015', `
            <ul>
            <li>
                Nguyên nhân ra đời
                <ul>
                    <li>Một số người viết chương trình điều khiển không biết rằng các chương trình hoặc thiết bị phải được thiết kế để hoạt động tốt cũng như dễ dàng nâng cấp, bảo trì;</li>
                    <li>Chi phí lớn cho việc tìm ra các lỗi không đáng có;</li>
                    <li>Nhiều chương trình phải viết lại bởi những người khác.</li>
                </ul>
            </li>
            <li>
                Vấn đề này làm đau đầu nhiều người, cuối cùng các tổ chức khoa học cũng như các hãng công nghiệp đã bỏ ra nhiều nguồn lực để giải quyết bài toán làm thế nào xây dựng được chương trình không có lỗi, đáp ứng yêu cầu đặt ra, với một thời gian và chi phí xác định trước. và đó là khởi đầu của một kỹ nghệ - kỹ nghệ lập trình (Software Engineering).
            </li>
            
        </ul>
            `]
        ]
    },
    'CS08': {
        'title': 'Giá trí của phần cứng và phần mềm',
        'index': [
            ['Giá trị của phần cứng và phần mềm', 'CS016', `
            <ul>
            <li>
                Cho đến đầu những năm 1970, các nhà sản xuất máy tính nói chung chỉ bán 1 loại sản phẩm – phần cứng thiết bị.
            </li>
            <li>
                Các hợp đồng thời gian này thường quy định rằng trách nhiệm về phần mềm là thuộc về khách hàng, nhà cung cấp không có trách nhiệm khắc phục khi xảy ra lỗi.
            </li>
            <li>
                Vào đầu những năm 1970, IBM quyết định tách riêng các sản phẩm phần cứng và phần mềm. Điều này đã làm ảnh hưởng to lớn đến ngành công nghiệp máy tính:
                <ul>
                    <li>Nhà cung cấp khó có thể từ chối trách nhiệm của mình đối với sản phẩm phần mềm được cung cấp. Khách hàng phải trả tiền cho phần mềm sẽ tin tưởng hơn vào chất lượng của nó;</li>
                    <li>Xuất hiện ngành công nghiệp sản xuất phần mềm như là hệ quả của việc phân chia giá trị phần cứng và phần mềm.</li>
                </ul>
            </li>
            <li>
                Ảnh hưởng
                <ul>
                    <li>Sự tách bạch giá trị của phần cứng và phần mềm đã trở thành tiêu chuẩn của ngành công nghiệp.</li>
                    <li>Người sử dụng có quyền và động lực để so sánh sản phẩm của các hãng khác nhau nhằm lựa chọn sản phẩm phù hợp.</li>
                    <li>Một hệ quả quan trọng là các nhà sản xuất phần mềm bắt đầu tiến hành có phương pháp khi thiết kế, xây dựng các chương trình theo các module, cũng như có thể cung cấp sản phẩm với bản quyền.</li>
                    <li>Xuất hiện động lực để các nhà sản xuất thiết bị khác sản xuất các phần cứng tương thích với phần cứng của IBM. Họ sản xuất thiết bị có tính năng không kém và giá cả cạnh tranh hơn. Cuối cùng khách hàng có nhiều lựa chọn hơn.</li>
                </ul>
            </li>
        </ul>
            `]
        ]
    },
    'CS09': {
        'title': 'Một số xu hướng',
        'index': [
            ['Một số xu hướng', 'CS017', `
                    <ul>
                        <li>Giá phần cứng thiết bị liên tục giảm trong khi đó tốc độ bộ xử lý, bộ nhớ tăng, đồng thời kích thước vật lý giảm.</li>
                        <li>Các vi mạch có mật độ ngày càng cao.</li>
                        <li>Các hệ thống đa xử lý ngày càng phổ biến.</li>
                        <li>Nhiều chức năng trước đây được thực hiện bởi chương trình ứng dụng sẽ trở thành các chức năng của hệ điều hành hoặc phần cứng.</li>
                        <li>Hỗ trợ ảo hóa.</li>
                        <li>Nối mạng máy tính trở nên phổ biến.</li>
                    </ul>
                `
            ]
        ]
    },
    'CS10': {
        'title': 'Video và ghi chú',
        'index': [
            ['Video bài giảng', 'CS101', `
                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai1/220101_Bai1_P1_v1.0.mp4" target="_blank">Video bài giảng TVU</a>
            `]
        ]
    }
};

