const Cs = {
        'id': 'ComputerSystem',
        'label': 'Hệ thống máy tính',
        'chapter': {
            'CS_chap1': {
                'title': 'Tổng quan về hệ điều hành',
                'tableContent': {
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
                            <li>Thế hệ đầu tiên (0): Máy tính chưa có hệ điều hành</li>
                            <li>Thế hệ 1 – những năm 1950: Hệ điều hành xử lý theo lô.</li>
                            <li>Thế hệ 2 – đầu những năm 1960: Là hệ điều hành được xây dựng như các hệ sử dụng cộng tác (Interactive), với khả năng chạy đa nhiệm (Multi Tasking) và khả năng hỗ trợ đa xử lý (Multi Processor)
                                <ul>
                                    <li>Bắt đầu xuất hiện phương pháp đảm bảo sự độc lập của chương trình đối với các thiết bị;</li>
                                    <li>Xuất hiện các hệ thống phân chia thời gian (Time Sharing);</li>
                                    <li>Xuất hiện các hệ thống thời gian thực đầu tiên</li>
                                </ul>
                            </li>
                            <li>Thế hệ 3 – Giữa những năm 1960 - 1970:
                                <ul>
                                    <li>Xuất hiện cùng với sự ra đời của họ máy tính IBM System 360 vào năm 1964;</li>
                                    <li>Hỗ trợ nhiều chế độ: Xử lý theo lô, phân chia thời gian, chế độ thời gian thực.</li>
                                </ul>
                            </li>
                            <li>Thế hệ 4 – giữa những năm 1970: Là hệ điều hành tiến bộ.
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
                            ['Các hệ điều hành thế hệ đầu tiên', 'CS021',`
                                <ul>
                                <li>Những hệ điều hành đầu tiên này giúp tăng hiệu suất sử dụng máy tính bởi vì các bài toán được xử lý theo lô thay vì từng bài toán riêng lẻ.</li>
                                <li>Đặc điểm
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
                            ['Các nhà sản xuất hệ điều hành đầu những năm 1960','CS031',`
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
                            ['HỌ MÁY TÍNH IBM SYSTEM/360','CS041',`
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
                            ['Phản ứng của các nhà sản xuất khác với System/360','CS051',`
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
                            ['Hệ thống phân chia thời gian','CS061',`
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
                            ['Công nghệ lập trình','CS015',`
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
                            ['Giá trị của phần cứng và phần mềm','CS016',`
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
                            ['Một số xu hướng','CS017',`
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
                    }
                }
            },
            'CS_chap2': {
                'title': 'Quản lý tiến trình',
                'tableContent': {
                    'CS01': {
                        'title': 'Khái niệm tiến trình',
                        'index': [
                            ['Giới thiệu', 'CS010', `
                            <div>
                                Thường dùng định nghĩa tiến trình như là một chương trình trong lúc chạy
                            </div>
                            `],
                            ['Khối điều khiển tiến trình PCB','CS011',`
                            <div>
                            PCB - Process Control Block <br>
                            <ul>
                                <li>Là một cấu trúc dữ liệu;</li>
                                <li>Chứa thông tin quan trọng về tiến trình;</li>
                                <li>Có thể khác nhau trong các hệ thống khác nhau.</li>
                            </ul>
                            PCB là đối tượng chính đại diện cho tiến trình đối với hệ điều hành.<br>
                            Cấu trúc của một PCB (hình bên).<br>
                            Hệ điều hành nhờ PCB có thể có những thông tin cơ bản về một tiến trình<br>
                            <ul>
                                <li>Trạng thái của tiến trình;</li>
                                <li>ID (Identifier) duy nhất cho tiến trình;</li>
                                <li>Độ ưu tiên (Priority) của tiến trình;</li>
                                <li>Thông tin về bộ nhớ;</li>
                                <li>Thông tin về các tài nguyên tiến trình đang sử dụng;</li>
                                <li>Vùng để cho các thanh ghi</li>
                            </ul>
                        </div>
                            `],
                            ['Trạng thái của tiến trình','CS012',`
                            <div>
                                Khởi tạo (New): Tiến trình vừa được tạo.<br>
                                Sẵn sàng (Ready): Tiến trình đã có đủ tài nguyên, chỉ còn cần CPU.<br>
                                Thực hiện (Running): Các lệnh của tiến trình đang được thực thi.<br>
                                Chờ/ dừng (Waiting/ Blocked): Tiến trình đợi I/O hoàn tất, tín hiệu.<br>
                                Kết thúc (Terminated): Tiến trình đã kết thúc.<br>
                                Biến đổi trạng thái của tiến trình: Chuyển đổi trạng thái giữa các tiến trình
                            </div>
                            `],
                            ['Luồng','CS013',`
                            <div>
        Khái niệm: Luồng là một dòng điều khiển trong phạm vi một quá trình.<br>
        Tiến trình đa luồng gồm nhiều dòng điều khiển khác nhau trong cùng không gian địa chỉ và được gọi là tiến trình nhẹ (Lightweight Process-LWP).<br>
        Luồng là một đơn vị cơ bản của việc sử dụng CPU.<br>
        Luồng hình thành gồm:<br>
        <ul>
            <li>Một định danh luồng (Thread ID);</li>
            <li>Một bộ đếm chương trình;</li>
            <li>Tập thanh ghi và ngăn xếp.</li>
        </ul>
        Nếu tiến trình có nhiều luồng điều khiển, nó có thể thực hiện nhiều hơn một tác vụ tại một thời điểm.<br>
        Quá trình đa luồng (Multithreaded Process) là tiến trình có nhiều luồng.<br>
        Ví dụ: A Word Processor With Three Threads.<br>
        Ưu điểm:
        <ul>
            <li>Một định danh luồng (Thread ID);</li>
            <li>Một bộ đếm chương trình;</li>
            <li>Tập thanh ghi và ngăn xếp</li>
        </ul>
        Nếu tiến trình có nhiều luồng điều khiển, nó có thể thực hiện nhiều hơn một tác vụ tại một thời điểm
    </div>
                            `],
                            ['Đa luồng', 'CS014',`
                            <div>
        Quá trình đa luồng (Multithreaded Process) là tiến trình có nhiều luồng. <br>
        Ví dụ: A Word Processor With Three Threads. <br>
        Ưu điểm:
        <ul>
            <li>Tính đáp ứng (Responsiveness);</li>
            <li>Chia sẻ tài nguyên (Resource sharing);</li>
            <li>Tiết kiệm chi phí hệ thống (Economy);</li>
            <li>Chi phí tạo/quản lý Thread nhỏ hơn so với quá trình;</li>
            <li>Chi phí chuyển ngữ cảnh giữa các Thread nhỏ hơn so với tiến trình;</li>
            <li>Tận dụng kiến trúc đa xử lý (Multiprocessor)</li>
        </ul>
    </div>
                            `],
                            ['Xử lý ngắt', 'CS015',`
                            <div>
                            Ngắt (Interupt) là sự kiện làm thay đổi trình tự thực hiện lệnh bình thường của bộ xử lý.
                            Tín hiệu ngắt được xử lý bởi phần cứng.
                            Trình tự thực hiện khi xử lý ngắt:
                            <ul>
                                <li>Điều khiển chuyển cho hệ điều hành;</li>
                                <li>Hệ điều hành lưu lại trạng thái của tiến trình bị ngắt;</li>
                                <li>Hệ điều hành phân tích loại ngắt và chuyển điều khiển cho chương trình xử lý ngắt tương ứng.</li>
                            </ul>
                            Các dạng ngắt:
                            <ul>
                                <li>SVC- Interrupt;</li>
                                <li>Ngắt vào/ra;</li>
                                <li>External Interrupt;</li>
                                <li>Restart Interrupt;</li>
                                <li>Program Check Interrupt;</li>
                                <li>Machine Check Interrupt.</li>
                            </ul>
                        </div>
                            `],
                            ['Đổi ngữ cảnh', 'CS016',`
                            <div>
                            Ngữ cảnh (Context) của một tiến trình là trạng thái của tiến trình.
                            Ngữ cảnh của tiến trình được biểu diễn trong PCB của nó.
                            Đổi ngữ cảnh (Context switch) là công việc giao CPU cho tiến trình khác. Khi đó cần:
                            <ul>
                                <li>Lưu ngữ cảnh của tiến trình cũ vào PCB của nó;</li>
                                <li>Nạp ngữ cảnh từ PCB của tiến trình mới để tiến trình mới thực thi.</li>
                            </ul>
                            
                            Sử dụng các thanh ghi trạng thái chương trình PSW (Program Status Word).
                            Có 3 loại PSW:
                            <ul>
                                <li>PSW hiện thời (Current);</li>
                                <li>PSW mới (New);</li>
                                <li>PSW cũ (Old) </li>
                            </ul>
                            Trong hệ có một bộ xử lý thì chỉ có 1 Current PSW, nhưng có 6 New PSW (tương ứng cho mỗi loại ngắt) và 6 Old PSW tương ứng
                        </div>
                            `],
                            ['Thiết kế phân lớp', 'CS017',`
                                <div>
                                    Kiến trúc phân cấp của hệ thống. <br>
                                    Hạt nhân của OS. <br>
                                    Các chức năng chính của Kernel. <br>
                                    Cho phép (Enable) và cấm (Diasable) ngắt. <br>
                                    Thực hiện Kernel với mã đơn giản nhất của máy tính 
                                </div>
                            `]
                        ]
                    },
                    'CS02': {
                        'title': 'Đồng bộ và giải quyết tranh chấp',
                        'index': [
                            ['Tiến trình đồng bộ','CS021', `
                            <div>
                            Các tiến trình gọi là đồng thời/tương tranh nếu các tiến trình đó tồn tại đồng thời. <br>
                            Các tiến trình tương tranh (Concurent Process) có thể hoạt động hoàn toàn độc lập với nhau hoặc song song không đồng bộ asynchronous.
                        </div>
                            `],
                            ['Xử lý song song','CS022', `
                            <div>
                                Các lệnh chỉ thị xử lý song song: Parbegin và Parend.
                                Các chỉ thị này thường đi theo cặp:
                                <ul>
                                    <li>Chỉ thị đầu tiên chỉ ra rằng: Bắt đầu từ sau lệnh đó, chương trình được tách thành một số dòng điều khiển (Thread Control) thực hiện song song.</li>
                                    <li>Chỉ thị thứ hai chỉ ra rằng: Từ đó chương trình lại được xử lý tuần tự</li>
                                </ul>
                            </div>
                            `],
                            ['Vùng tranh chấp','CS023',`
                            Khi có một tiến trình nằm trong khoảng tới hạn => Không cho phép tiến trình được vào khoảng tới hạn;<br>
                            Khi proces ra khỏi khoảng tới hạn => Một trong số các tiến trình đang chờ vào khoảng tới hạn phải được tiếp tục vào khoảng tới hạn;<br>
                            Khi tiến trình ra khỏi khoảng tới hạn => Hệ điều hành phải kiểm soát được để huỷ bỏ chế độ tới hạn
                            `]
                        ]
                    },
                    'CS03': {
                        'title': 'Tắc nghẽn (DEADLOCK)',
                        'index': [
                            ['Định nghĩa Deadlock','CS031',`
                            <div>
                                Trong hệ thống đa chương trình, một tiến trình nằm trong trạng thái Deadlock hay treo, nếu như nó chờ sự kiện (Event) nào đó không bao giờ xảy ra. <br>
                                Tình huống treo hệ thống là tình huống có một hay nhiều tiến trình nằm trong trạng thái treo. <br>
                                Ví dụ: Tình trạng tắc nghẽn giao thông
                            </div>
                            `],
                            ['Điều kiện cần để xảy ra Deadlock','CS032',`
                            <div>
                                Các tiến trình yêu cầu quyền độc quyền sử dụng tài nguyên sẽ cấp phát cho nó (điều kiện loại trừ nhau).<br>
                                Tiến trình giữ cho mình các tài nguyên đã được cấp và đồng thời yêu cầu tài nguyên bổ sung (điều kiện chờ tài nguyên).<br>
                                Tài nguyên không được lấy lại từ tiến trình khi các tài nguyên đó chưa được sử dụng để kết thúc công việc (điều kiện không phân chia).<br>
                                Tồn tại vòng kín các tiến trình, trong đó mỗi tiến trình giữ tài nguyên mà tiến trình kế tiếp đang đòi hỏi (điều kiện chờ vòng).
                            </div>
                            `],
                            ['Phương pháp giải quyết Deadlock','CS033',`
                            <div>
                                Các nghiên cứu về Deadlock có thể chia ra làm 4 hướng sau:
                                <ul>
                                    <li>Ngăn chặn deadlock;</li>
                                    <li>Tránh deadlock;</li>
                                    <li>Phát hiện deadlock;</li>
                                    <li>Khôi phục sau deadlock.</li>
                                </ul>

                                <b>a. Ngăn chặn Deadlock</b>
                                <b>b. Tránh Deadlock</b>
                                <b>Loại bỏ điều kiện "không phân bố lại"</b>
                                <div>
                                    Nếu tiến trình A có giữ tài nguyên và đang yêu cầu tài nguyên khác nhưng tài nguyên này chưa cấp phát ngay được thì:
                                    <br>
                                    Cách 1:
                                    <ul>
                                        <li>Hệ thống lấy lại mọi tài nguyên A mà đang giữ;</li>
                                        <li>A phải bắt đầu lại từ đầu</li>
                                    </ul>
                                    Cách 2: Hệ thống sẽ xem tài nguyên mà A yêu cầu;
                                    <ul>
                                        <li>Nếu tài nguyên được giữ bởi một tiến trình khác đang đợi thêm tài nguyên, tài nguyên này được hệ thống lấy lại và cấp phát cho A;</li>
                                        <li>Nếu tài nguyên được giữ bởi tiến trình không đợi tài nguyên, A phải đợi và tài nguyên của A bị lấy lại. Tuy nhiên hệ thống chỉ lấy lại các tài nguyên mà tiến trình khác yêu cầu.</li>                
                                    </ul>
                                    <b>Khuyết điểm</b>
                                    <ul>
                                        <li>Có thể mất các kết quả làm;</li>
                                        <li>Xác suất xảy ra 'chặn vô hạn' (posponement);</li>
                                        <li>Lãng phí tài nguyên;</li>
                                        <li>Giảm hiệu suất của cả hệ thống;</li>              
                                    </ul>
                                    <b>Loại trừ điều kiện "chờ vòng quanh"</b> <br>
                                    Tập các loại tài nguyên trong hệ thống được gán một thứ tự hoàn toàn.
                                    <ul>
                                        <li>Cách 1: Mỗi tiến trình yêu cầu thực thể của tài nguyên theo thứ tự tăng dần (định nghĩa bởi hàm F) của
                                        loại tài nguyên.</li>
                                        <li>Cách 2: Khi một tiến trình yêu cầu một thực thể của loại tài nguyên R<sub>j</sub> thì nó phải trả lại các tài nguyên R<sub>i</sub> với F(R<sub>i</sub>) > F(R<sub>j</sub>)</li>
                                    </ul>

                                    “Chứng minh” cho cách 1 bằng phương pháp phản chứng
                                    <ul>
                                        <li>F(R<sub>4</sub>) < F(R<sub>1</sub>);</li>
                                        <li>F(R<sub>1</sub>) < F(R<sub>2</sub>);</li>
                                        <li>F(R<sub>2</sub>) < F(R<sub>3</sub>);</li>
                                        <li>F(R<sub>3</sub>) < F(R<sub>4</sub>);</li>
                                    </ul>
                                    Vậy F(R4) < F(R4), mâu thuẫn

                                    <br>
                                    <p>Khuyết điểm: Lại ảnh hưởng xấu đến công việc của user trong tiến trình làm việc.</p>
                                    <b>Trạng thái ổn định và không ổn định</b>
                                    <ul>
                                        <li>Trạng thái hiện thời của máy tính gọi là ổn định nếu hệ điều hành có thể đảm bảo tất cả các chương trình ứng dụng hiện thời trong hệ thống có thể hoàn thành sau một khoảng thời gian hữu hạn nào đó.</li>
                                        <li>Trạng thái ngược lại gọi là trạng thái không ổn định.</li>
                                    </ul>

                                    <b>Thuật toán Banker</b>
                                    <p>Giả sử rằng có n người sử dụng.</p>
                                    <p>Giả sử l(i) là số thiết bị cấp cho người sử dụng thứ i.</p>
                                    <p>Giả sử m(i) là số thiết bị lớn nhất mà người dùng thứ i có thể cần.</p>
                                    <ul>
                                        <li>Tại một thời điểm, c(i) là yêu cầu lớn nhất thời của người dùng I, bằng hiệu giữa số thiết bị nhiều nhất có thể yêu cầu và số thiết bị hiện có, tức là c(i) = m(i) - l(i);</li>
                                        <li>Trong hệ thống với t thiết bị thì số thiết bị còn rỗi tại một thời điểm là a sẽ bằng t trừ tổng các thiết bị được cấp phát: a = t - &sum;l(i).</li>
                                    </ul>
                                    Ví dụ: Giả sử hệ thống có 12 thiết bị, và chúng được phân chia giữa 3 người dùng với trạng thái Status1 được biểu diễn trong bảng sau: <br>
                                    Trạng thái đó là ổn định vì cả 3 người dùng có khả năng kết thúc công việc. <br>
                                    <b>Ưu điểm:</b> <br>
                                    <ul>
                                        <li>Cho phép cấp phát tài nguyên;</li>
                                        <li>Tránh tình trạng Deadlock;</li>
                                        <li>Cho phép tiếp tục thực hiện các tiến trình mà trong trường hợp dùng các biện pháp ngăn chặn thì chúng đã bị dừng.</li>
                                    </ul>
                                    <b>Nhược điểm:</b> <br>
                                    <ul>
                                        <li>Giả thiết số tài nguyên là cố định > < số tài nguyên luôn thay đổi;</li>
                                        <li>Số người dùng là không đổi => yêu cầu này không thực tế;</li>
                                        <li>Bộ phận phân phối tài nguyên phải đảm bảo thỏa mãn tất cả các yêu cầu sau khoảng thời gian hữu hạn => Cần những con số cụ thể hơn.</li>
                                        <li>Người dùng phải trả lại các tài nguyên được cấp, sau một khoảng thời gian nào đó => cần các chỉ số cụ thể.</li>
                                        <li>Người dùng phải báo trước số lượng lớn nhất tài nguyên anh ta cần => khó đánh giá yêu cầu lớn nhất.</li>
                                    </ul>
                                    <b>Phát hiện Deadlock</b>
                                    Phát hiện Deadlock là:
                                    <ul>
                                        <li>Xác định sự kiện xuất hiện trạng thái deadlock;</li>
                                        <li>Xác định các tiến trình và tài nguyên nằm trong tình trạng Deadlock;</li>
                                        <li>Các thuật toán xác định deadlock thường được áp dụng trong các hệ thống có xuất hiện ba điều kiện đầu tiên làm xuất hiện Deadlock;</li>
                                        <li>Sử dụng các thuật toán này phải trả giá, đó là chi phí về thời gian máy.</li>
                                    </ul>
                                    Các giải thuật phát hiện Deadlock thường sử dụng RAG và được thiết kế cho mỗi trường hợp sau:
                                    <ul>
                                        <li>Mỗi loại tài nguyên chỉ có một thực thể;</li>
                                        <li>Mỗi loại tài nguyên có thể có nhiều thực thể.</li>
                                    </ul>

                                    <p>RAG là đồ thị có hướng, tập đỉnh V và tập cạnh E.</p>
                                    <p>Tập đỉnh V gồm 2 loại:</p>
                                    <ul>
                                        <li>P = {P<sub>1</sub>, P<sub>2</sub>,..., P<sub>n</sub>} (Tất cả tiến trình trong hệ thống);</li>
                                        <li>R = {R<sub>1</sub>, R<sub>2</sub>, ..., R<sub>m</sub>} (Tất cả tài nguyên trong hệ thống).</li>
                                    </ul>
                                    <p>Tập cạnh E gồm 2 loại:</p>
                                    <ul>
                                        <li>Request edge: Cạnh có hướng từ P<sub>i</sub> → R<sub>j</sub></li>
                                        <li>Assignment edge: Cạnh có hướng từ R<sub>j</sub> → P<sub>i</sub></li>
                                    </ul>
                                    <p>Trong đó:</p>
                                    <ul>
                                        <li>P<sub>i</sub>: Tiến trình;</li>
                                        <li>R<sub>j</sub>: Loại tài nguyên với 4 thực thể;</li>
                                        <li>P<sub>i</sub>: Yêu cầu một thực thể của R<sub>j</sub>;</li>
                                        <li>P<sub>i</sub>: Đang giữ một thực thể cả R<sub>j</sub></li>
                                    </ul>
                                    <p>Ví dụ về Rag không chu trình</p>
                                    <ul>
                                        <li>Nếu đồ thị không chu trình thì sẽ không có trình nào bị Deadlock.</li>
                                        <li>Nếu đồ thị có chu trình thì có thể tồn tại Deadlock.</li>
                                    </ul>
                                    <p>Kết luận:</p>
                                    <ul>
                                        <li>Nếu RAG không chu trình => Không xảy ra Deadlock</li>
                                        <li>Nếu RAG có chu trình
                                            <ul>
                                                <li>Nếu mỗi loại tài nguyên chỉ có 1 cá thể chắc chắn xảy ra Deadlock;</li>
                                                <li>Nếu mỗi loại tài nguyên có 1 vài cá thể thì Deadlock có thể xảy ra.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <b>Giải thuật phát hiện Deadlock</b>
                                    <ul>
                                        <li>Các biến Work và Finish là vector, kích thước m và n. Khởi tạo:</li>
                                        <li>Tìm i thỏa mãn:</li>
                                        <li>Work:= Work + Allocationi</li>
                                    </ul>
                                    Nếu tồn tại i với Finish[i] = false, thì hệ thống đang ở trạng thái Deadlock. Hơn thế nữa, nếu Finish[i] = false thì Pi bị Deadlock
                                    <br>
                                    <b>Nhận xét</b>: Khi giải thuật phát hiện Deadlock không thấy hệ thống đang Deadlock, chưa chắc trong tương lai hệ thống vẫn không Deadlock. <br>
                                    <b>Hướng dẫn:</b>
                                    <p>Chạy giải thuật, tìm được chuỗi {P0, P2, P3, P1, P4}</p>
                                    <p>Với Finish[i] = true, i = 1,..., n, vậy hệ thống không bị Deadlock.</p>
                                    <br>
                                    <b>Khôi phục sau Deadlock</b>
                                    <ul>
                                        <li>Trong các hệ thống hiện nay việc khôi phục thường được thực hiện bằng cách loại một số tiến trình để có thể sử dụng các tài nguyên của chúng.</li>
                                        <li>Có lẽ phương pháp khôi phục tốt nhất là cơ chế tạm dừng/ khởi động tiến trình (Suspend/ Activate).</li>
                                    </ul>
                                </div>
                            </div>
                            `]
                        ]
                    }
                }
            },
            'CS_chap3': {
                'title': 'Lập lịch',
                'tableContent': {
                    'CS01': {
                        'title': 'Các khái niệm cơ bản về lập lịch',
                        'index': [
                            ['Các khái niệm cơ bản',
                            'CS011', 
                            `
                                <ul>
                                <li>Đa chương trình (Mutilprogramming): Chế độ ĐCT cho phép khi một chương trình đang được thực hiện ở thiết bị ngoại vi thì bộ xử lí trung tâm có thể được sử dụng cho các chương trình khác, tạo ra khả năng nhiều chương trình được thực hiện đồng thời trên một máy tính.</li>
                                <li>Chu kì CPU - I/O: Thực thi chương trình gồm một chu kỳ thực thi CPU và chờ đợi nhập xuất, các quá trình này thì đan xen lẫn nhau.</li>
                                <li>Giới hạn CPU(CPU - Bound): Tiến trình có thời gian sử dụng CPU nhiều hơn thời gian sử dụng I/O.</li>
                                <li>Giới hạn nhập xuất (I/O - Bound): Tiến trình dùng phần lớn thời gian để đợi I/O</li>
                                </ul>
                                <center>
                                    <img src="./assets/img/CS/3/ChuKy_CPU_IO.jpeg">
                                </center>
                            `],
                            ['3.1.1. Lập lịch CPU', 'CS012', `
                                <ul>
                                    <li>Khái niệm: Việc chọn một tiến trình đã sẵn sàng trong bộ nhớ để cho CPU thực hiện;</li>
                                    <li>Lập lịch cho CPU khi tiến trình
                                        <ul>
                                            <li>Chuyển từ Running => Ready</li>
                                            <li>Chuyển từ Running => Waiting</li>
                                            <li>Chuyển từ Waiting => Ready</li>
                                            <li>Kết thúc:
                                                <ul>
                                                    <li>Trường hợp 2 và 4: Lập lịch không ưu tiên (Nonpreemptive)</li>
                                                    <li>Trường hợp 1 và 3: Lập lịch ưu tiên (Preemptive)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                Bộ lập lịch CPU
                                <center>
                                    <img src="./assets/img/CS/1/BoLapLichCPU.jpeg" style="width: 100%">
                                </center>
                            `],
                            ['3.1.2. Mục tiêu định thời', 'CS013', 
                            `
                            <ul>
                                <li>Công bằng</li>
                                <li>Tăng hiệu suất tối đa</li>
                                <li>Cực đại số người dùng tương tác</li>
                                <li>Có thể dự đoán trước</li>
                                <li>Phí tổn ít</li>
                                <li>Cấn đối việc sử dụng tài nguyên</li>
                                <li>Tránh trì hoãn vô hạn định (dùng độ ưu tiên)</li>
                                <li>Ưu tiên quá trình giữ tài nguyên quan trọng</li>
                                <li>Phục vụ tốt các quá trình có hướng thuận lợi</li>
                                <li>Điều phối tối ưu khi tải không cân đối</li>
                            </ul>
                            `
                            ],
                            ['3.1.3. Các mức lập lịch', 'CS014', `
                            Có 3 mức 
                            <ul>
                                <li>Lập lịch mức cao: Xác định một chương trình có được thự thi hay không?</li>
                                <li>Lập lịch mức giữa: Xác định những tiến trình nào đã sẵn sàng</li>
                                <li>Lập lịch mức thấp: Xác định tiến trình tiếp theo sẽ được thực thi</li>
                            </ul>
                            `],
                            ['3.1.4. Bộ phân phối (DISPATCHER)', 'CS015',
                            `
                                <ul>
                                    <li>Chuyển điều khiển CPU sang cho quá trình</li>
                                    <li>Thực hiện bước chuyển ngữ cảnh:
                                        <ul>
                                            <li>Chuyển ngữ cảnh sang cấp người dùng</li>
                                            <li>Chuyển chế độ người dùng</li>
                                            <li>Nhảy sang vị trí thích hợp của quá trình và thực thi</li>
                                        </ul>
                                    </li>
                                    <li>Thời gian chờ chuyển đổi (Dispatch Latency): Thời gian để bộ phân phối dừng trạng thái đang thực thi để chuyển sang trạng thái khác</li>
                                </ul>
                            `],
                            ['Video bài giảng', 'CS016', `
                                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai3/220101_Bai3_P1_v1.0.mp4" target="_blank">Video bài giảng</a>
                            `]
                        ]
                    },
                    'CS02': {
                        'title': 'Các tiêu chuẩn lập lịch',
                        'index': [
                            ['Các tiêu chuẩn', 'CS021', `
                                <ul>
                                    <li>Độ lợi CPU: CPU bận nhiều nhất có thể</li>
                                    <li>Thông lượng: Số tiến trình được thực hiện trong một đơn vị thời gian</li>
                                    <li>Thời gian xử lý: Tổng thời gian một tiến trình được thực thi</li>
                                    <li>Thời gian chờ: Tổng thời gian tiến trình phải chờ trong hàng đợi sẵn sàng</li>
                                    <li>Thời gian đáp ứng: Tổng thời gian từ khi có yêu cầu đến khí có đáp ứng đầu tiên, không gồm thời gian xuất ra đáp ứng đó.</li>
                                    <li>Các tiêu chuẩn tối ưu:
                                        <ul>
                                            <li>Độ lợi CPU là lớn nhất</li>
                                            <li>Thông lượng lớn nhất</li>
                                            <li>THời gian xử lý nhỏ nhất</li>
                                            <li>Thời gian chờ nhỏ nhất</li>
                                            <li>Thời gian đáp ứng nhỏ nhất</li>
                                        </ul>
                                    </li>
                                </ul>
                            `],
                            ['Video bài giảng', 'CS022', `
                                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai3/220101_Bai3_P1_v1.0.mp4" target="_blank">Video bài giảng</a>
                            `]
                        ]
                    },
                    'CS03': {
                        'title': 'Các thuật toán lập lịch và đánh giá thuật toán',
                        'index': [
                            ['Lập lịch theo thời gian kết thúc', 'CS031', `
                                <ul>
                                    <li>Lập lịch sao cho các tiến trình kết thúc trong thời hạn định trước</li>
                                    <li>Nhược điểm: 
                                        <ul>
                                            <li>Khó khăn trong việc chỉ rõ tài nguyên cần thiết phục vụ cho process</li>
                                            <li>Vừa phải thực hiện ứng dụng đúng hạn, vừa không làm ảnh hưởng <b>"quá nhiều"</b> đến các ứng dụng khác;</li>
                                            <li>Tranh chấp tài nguyên giữa các ứng dụng;</li>
                                            <li>Phức tạp khi có nhiều yêu cầu kết thúc các ứng dụng đúng thời hạn</li>
                                            <li>Chi phí tài nguyên có thể lớn hơn, làm ảnh hưởng đến cả hệ thống</li>
                                        </ul>
                                    </li>
                                </ul>
                            `],
                            ['Giải thuật FIFO', 'CS032', `
                                <center>
                                    <img src="./assets/img/CS/3/FIFO.jpg" style="width: 100%;"></img>
                                </center>
                                <ul>
                                    <li>FIFO: First in First out hay còn là FCFS (First Come First Served)</li>
                                    <li>Lựa chọn tiến trình: Đợi trong hàng đợi ready lâu nhất</li>
                                    <li>Định thời theo kiểu không hoán đổi</li>
                                </ul>
                                Ví dụ 1 <br>
                                <table>
                                    <tr>
                                        <th>Tiến trình</th>
                                        <th>Thời gian thực thi (ms)</th>
                                        <th>Thời gian xuất hiện</th>
                                    </tr>
                                    <tr>
                                        <td>P1</td>
                                        <td>24</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>P2</td>
                                        <td>3</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>P3</td>
                                        <td>3</td>
                                        <td>2</td>
                                    </tr>
                                </table>

                                <b>Hướng dẫn</b>
                                <ul>
                                    <li>Giả sử các tiến trình đến theo thứ tự P1, P2, P3</li>
                                    <li><span style="color: red;">Giản đồ Gantt</span> cho việc định thời là: 
                                        <br>
                                        <center>
                                            <img src="./assets/img/CS/3/GianDoGantt1.jpg" /> 
                                        </center>
                                    </li>
                                    <li>Công thức tính thời gian đợi = Thời điểm thực thi - Thời điểm xuất hiện</li>
                                    <li>Thời gian đợi cho P1 = 0 - 0 = 0; P2 = 24 - 1; P3 = 27 - 2 = 25.</li>
                                    <li>Thời gian đợi trung bình: (0+23+25)/3 = 16</li>
                                </ul>

                                Ví dụ 2 <br>

                                <ul>
                                    <li>Giả sử các tiến trình đến theo thứ tự: P2, P3, P1</li>
                                    <li><span style="color: red;">Giản đồ Gantt</span> cho việc định thời là:
                                        <center>
                                            <img src="./assets/img/CS/3/GianDoGantt2.jpg" alt="gian-do-Gantt"/>
                                        </center>
                                    </li>
                                    <li>Công thức tính thời gian đợi = Thời điểm thực thi - Thời điểm xuất hiện</li>
                                    <li>Thời gian đợi cho P1 = 0 - 0 = 0; P2 = 24 - 1 = 23; P3 = 27 - 2 = 25</li>
                                    <li>Thời gian đợi trung bình: (0 + 23 + 25)/3 = 16</li>
                                    <li>
                                        Nhận xét: <br>
                                        <ul>
                                            <li>Tốt hơn rất nhiều so với trường hợp trước</li>
                                            <li>Hiệu quả hơn khi xử lý tiến trình ngắn trước tiến trình dài</li>
                                        </ul>
                                    </li>
                                </ul>
                            `],
                            ['Giải thuật SJF (Shortest Job First)', 'CS033', `
                                <center>
                                    <img src="./assets/img/CS/3/SJF.jpg" alt="SJF" />
                                </center>
                                <ul>
                                    <li>Lựa chọn tiến trình có thời gian thực hiện ngắn nhất để phục vụ trước</li>
                                    <li>Nguyên tắc không hoán đổi</li>
                                    <li>Việc lập lịch được thực hiện sau khi tiến trình kết thúc</li>
                                </ul>
                                <br>
                                <table>
                                    <tr>
                                        <th>Tiến trình</th>
                                        <th>Thời điểm đến</th>
                                        <th>Thời gian thực thi (ms)</th>
                                    </tr>
                                    <tr>
                                        <td>P1</td>
                                        <td>0</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>P2</td>
                                        <td>2</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>P3</td>
                                        <td>4</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>P4</td>
                                        <td>5</td>
                                        <td>4</td>
                                    </tr>
                                </table>
                                <p><span style="color: red;">Giản đồ Gantt</span> khi định thời theo SJF</p>
                                <center>
                                    <img src="./assets/img/CS/3/GianDoGantt3.jpg" alt="gian-do-Gantt" />
                                </center>
                                <p>Thời gian đợi trung bình = (0+6+3+7)/4=4</p>
                                <ul>
                                    <li>
                                        Ưu điểm
                                        <ul>
                                            <li>SJF tối ưu trong việc giảm thời gian đợi trung bình;</li>
                                            <li>SJF nhanh chóng loại bỏ các tiến trình ngắn, giảm số tiến tình trong dòng xếp hàng sẵn sàng</li>
                                        </ul>
                                    </li>
                                    <li>Nhược điểm: Cần phải ước lượng thời gian cần CPU tiếp theo của tiến trình.</li>
                                </ul>
                            `],
                            ['Ước lượng thời gian cần CPU', 'CS034', `
                                <ul>
                                    <li>Thường dùng là sử dụng <span style="color: red;">trung bình hàm mũ</span> (exponential averaging):
                                        <ul>
                                            <li>T<sub>n+1</sub> = a.t<sub>n</sub> + (1-a).T<sub>n</sub>; 0 <= a <= 1</li>
                                            <li>
                                            T<sub>n+1</sub> = a.t<sub>n</sub> + (1-a).a.t<sub>n-1</sub> + ... + (1-a)<sup>j</sup>.a.T<sub>n-j</sub> + ... + (1-a)<sup>n+1</sup>.a.T<sub>0</sub>;
                                            </li>
                                            <li>Trong đó:
                                                <ul>
                                                    <li>t<sub>n</sub>: Độ dài CPU burst đo được;</li>
                                                    <li>T<sub>n</sub>: thời gian ước lượng cần cho CPU tiếp theo;</li>
                                                    <li>Nếu chọn a=1/2 thì nghĩa là trị đo được t<sub>n</sub> và trị dự đoán T<sub>n</sub> được xem quan trọng như nhau</li>
                                                </ul>
                                            </li>
                                        <ul>
                                    </li>
                                </ul>
                                <center>
                                    <img src="./assets/img/CS/3/CPUburst.jpg" alt="CPUburst" style="width: 100%" />
                                </center>
                            `],
                            ['Giải thuật SRN (Shortest Rest Time)', 'CS035', `
                                <center>
                                    <img style="width: 100%;" src="./assets/img/CS/3/SRT.jpg" />
                                </center>
                                <ul>
                                    <li>Nguyên tắc có hoán đổi</li>
                                    <li>Ưu tiên tiến trình có thời gian còn lại ít nhất</li>
                                    <li>Việc lập trình CPU được thực hiện ngay cả khi có quá trình mới đến hệ thống</li>
                                </ul>

                                <table>
                                    <tr>
                                        <th>Tiến trình</th>
                                        <th>Thời điểm đến</th>
                                        <th>Thời gian thực thi (ms)</th>
                                    </tr>
                                    <tr>
                                        <td>P1</td>
                                        <td>0.0</td>
                                        <td>7</td>
                                    </tr>
                                    <tr>
                                        <td>P2</td>
                                        <td>2.0</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>P3</td>
                                        <td>4.0</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>P4</td>
                                        <td>5.0</td>
                                        <td>4</td>
                                    </tr>
                                </table>

                                <b>Hướng dẫn</b>

                                <br>
                                <ul>
                                    <li>Giản đồ Gantt khi định thời theo SRT:
                                        <center>
                                            <img src="./assets/img/CS/3/GianDoGantt4.jpg" />
                                        </center>
                                    </li>
                                    <li>
                                        Thời gian đợi trung bình = (9+1+0+2)/4=3;
                                    </li>
                                    <li>Nhận xét: Giải thuật SRN tốt hơn giải thuật không hoán đổi SJF</li>
                                    <li>
                                        Ưu điểm <br>
                                        <ul>
                                            <li>Tránh trường hợp các tiến trình có thời gian thực thi dài độc chiếm CPU;</li>
                                            <li>Có thời gian quay vòng tốt hơn SJF;</li>
                                            <li>Tiến trình có thời gian thực thi ngắn có độ ưu tiên cao</li>
                                        </ul>
                                    </li>
                                    <li>Nhược điểm <br>
                                        <ul>
                                            <li>Phải dự đoán được chính xác thời gian còn lại của tiến trình;</li>
                                            <li>Tăng chi phí tính toán: Chi phí chuyển đổi ngữ cảnh</li>
                                        </ul>
                                    </li>
                                </ul>

                                <b>Mức ưu tiên</b> <br>

                                <ul>
                                    <li>Để giảm thời gian chờ đợi trung bình, hệ thống có thể xác định số thứ tự ưu tiên điều độ cao cho tiến trình có khả năng sử dụng ít thời gian hoạt động</li>
                                    <li>
                                        Mỗi tiến trình sẽ được gán một độ ưu tiên 
                                    </li>
                                    <li>CPU sẽ được cấp cho tiến trình có độ ưu tiên cao nhất</li>
                                    <li>Lập lịch sử dụng mức ưu tiên có thể:
                                        <ul>
                                            <li>Mức ưu tiên tĩnh: Được gán ngay khi tạo ra và không thay đổi trong suốt quá trình</li>
                                            <li>Mức ưu tiên động: Có thể thay đổi khác với mức ưu tiên khởi tạo ban đầu</li>
                                        </ul>
                                    </li>
                                    <li>Trong SJN và SRT thứ tự ưu tiên phụ thuộc vào thời gian thực hiện chương trình mà người sử dụng khai báo</li>
                                    <li>
                                        Mức ưu tiên phụ thuộc: <br>
                                        <ul>
                                            <li>Yêu cầu về bộ nhớ;</li>
                                            <li>Số lượng file được mở;</li>
                                            <li>Tỉ lệ thời gian dùng cho I/O trên thời gian sử dụng CPU</li>
                                            <li>Các yêu cầu bên ngoài ví dụ như: số tiền người dùng trả khi thực thi công việc</li>
                                        </ul>
                                    </li>
                                </ul>
                            `],
                            ['Giải thuật RR (Round Robin)', 'CS036', `
                                <center>
                                    <img style="width: 100%;" src="./assets/img/CS/3/RR.jpg" alt="Round-Robin" />
                                </center>
                                <ul>
                                    <li>Nguyên tắc FIFO nhưng có hoán đổi.</li>
                                    <li>Khoảng thời gian tối đa cho phép (thường 10 - 100 ms) (Quantum Time - q) được đảm bảo bằng việc sử dụng ngắt thời gian.</li>
                                    <li>Tiến trình đang chạy hết thời gian được chuyển về cuối của hàng đợi Ready.</li>
                                </ul>
                                Ví dụ <br>
                                <table>
                                    <tr>
                                        <th>Tiến trình</th>
                                        <th>Thời gian thực thi (ms)</th>
                                    </tr>
                                    <tr>
                                        <td>P1</td>
                                        <td>53</td>
                                    </tr>
                                    <tr>
                                        <td>P2</td>
                                        <td>17</td>
                                    </tr>
                                    <tr>
                                        <td>P3</td>
                                        <td>68</td>
                                    </tr>
                                    <tr>
                                        <td>P4</td>
                                        <td>24</td>
                                    </tr>
                                </table>
                                <ul>
                                    <li>Thời gian lượng tử = 20 ms</li>
                                    <li>Giản đồ Gantt
                                        <br>

                                        <center>
                                            <img src="./assets/img/CS/3/GianDoGantt5.jpg" alt="gian-do-gantt"/>
                                        </center>
                                        <br>
                                        Thường có thời gian quay vòng cao hơn SJF, nhưng lại có <span style="color: blue;">thời gian đáp ứng</span> tốt hơn
                                    </li>
                                    <li>
                                        Giá trị lượng tử cho giải thuật RR
                                        <img style="width: 100%;" src="./assets/img/CS/3/GiaTriLuongTuRR.jpg" />
                                    </li>
                                </ul>
                                <b>Thời gian quay vòng với thời gian lượng tử</b><br>
                                <p>Quantum time càng nhỏ thì càng có nhiều lần chuyển ngữ cảnh (Context Switch)</p>
                                <center>
                                    <img style="width: 100%;" src="./assets/img/CS/3/Quantum_ContextSwitches.jpg"/>
                                </center>
                                <p>Thời gian quay vòng trung bình (Average Turnaround Time) không chắc sẽ được cải thiện khi Quantum lớn</p>
                                <center>
                                    <img style="width: 100%;" src="./assets/img/CS/3/QuantumTime.jpg" />
                                </center>
                                <ul>
                                    <li>Quantum Time và thời gian cho chuyển đổi ngữ cảnh</li>
                                    <li>Nếu Quantum Time quá nhỏ thì chi phí chuyển đổi ngữ cảnh chiếm phần lớn thời gian và năng lực tính toán của hệ thống</li>
                                    <li>Với Quantum Time = 10 ms và thời gian cho chuyển đổi ngữ cảnh = 5 ms, như vậy phí tổn chiếm 5 / 10 = 50% </li>
                                    <li>Nếu Quantum Time lớn trở thành giải thuật FIFO
                                        <ul>
                                            <li>Với Quantum = 500 ms, thì phí tổn chỉ còn = 1%</li>
                                            <li>Nhưng nếu có nhiều người sử dụng trên hệ thống và thuộc loại Interactive thì sẽ thấy đấp ứng rất chậm.</li>
                                            <li>Tùy thuộc vào tập công việc mà lựa chọn Quantum Time;</li>
                                            <li>Khoảng thời gian nên lớn trong tương quan so sánh với thời gian cho chuyển ngữ cảnh</li>
                                        </ul>
                                    </li>
                                </ul>
                            `],
                            ['Giải thuật HRN (Highest Response Ration Next)', 'CS037', `
                                <ul>
                                    <li>Cải tiến giải thuật SJF</li>
                                    <li>Định thời theo kiểu không hoán đổi</li>
                                    <li>Độ ưu tiên của quá trình được tính theo công thức:
                                        <center>
                                            p=(t<sub>w</sub>+<sub>s</sub>)/t<sub>s</sub>
                                        </center>
                                        <br>
                                        <p>Trong đó</p>
                                        <ul>
                                            <li>t<sub>w</sub>: Thời gian chờ;</li>
                                            <li>t<sub>s</sub>: Thời gian thực thi;</li>
                                        </ul>
                                    </li>
                                    <li>Quá trình có độ ưu tiên lớn nhất được phục vụ;</li>
                                    <li>Độ ưu tiên động, tính lại khi có quá trình kết thúc</li>
                                </ul>
                                <p>Ví dụ</p>
                                <ul>
                                    <li>Khi P1 kết thúc, hệ thống lập lịch lại;</li>
                                    <li>Độ ưu tiên:
                                        <ul>
                                            <li>P2: (6+4)/4=2.5</li>
                                            <li>P3: (2+2)/2=2</li>
                                        </ul>
                                        => P2 được ưu tiên
                                    </li>
                                    <li>Thứ tự lập lịch: P1->P2->P3</li>
                                </ul>
                                <img src="./assets/img/CS/3/ViDu_HRRN.jpg" alt="ViDu_HRRN" />
                                <ul>
                                    <li>Trường hợp các quá trình có thể được phân thành nhóm
                                        <br> Ví dụ: Interactive và Batch
                                    </li>
                                    <li>Hàng đợi ready sẽ được chia thành nhiều hàng đợi riêng rẽ
                                        <br> Mức trên (cho công việc cần giao tiếp - Interactive), mức dưới (cho công việc dạng bó - Batch)
                                    </li>
                                    <li>Mỗi hàng đợi sẽ có giải thuật lập lịch riêng
                                        <br>
                                        Ví dụ: Mức trên dùng RR, mức dưới dùng FCFS
                                    </li>
                                    <li>
                                        Lập lịch cần phải thực hiện giữa các hàng đợi với nhau:
                                        <ul>
                                            <li>Theo cách cố định (Fixed Priority Scheduling)</li>
                                            <li>Có khả năng xảy ra trì hoãn vô hạn định (Starvation)</li>
                                        </ul>
                                    </li>
                                    <li>Chia thời gian (Time Slice) - mỗi hàng đợi sẽ được lấy một khoảng sử dụng CPU nhất định để lập lịch cho các tiến trình của mình
                                    <br>
                                    Ví dụ: 80% cho mức trên (dùng RR);
                                    <br>
                                    20% cho mức thấp (dùng FCFS);
                                    </li>
                                </ul>
                            `],
                            ['Hàng đợi nhiều mức (Multilevel Feedback Queue)', 'CS038', `
                            <p>Ví dụ phân nhóm các quá trình</p>
                            <center>
                                <img style="width: 100%;" src="./assets/img/CS/3/MultilvelFeedbackQueue.jpg" />
                            </center>
                            <b>Mức ưu tiên trong hàng đợi nhiều mức</b>
                            <ul>
                                <li>Ưu tiên tiến trình thường xuyên thực hiện thao tác I/O</li>
                                <li>Lượng tử chọn: Đủ để tiến trình thực hiện xong tính toán và yêu cầu thao tác I/O</li>
                                <li>Tiến trình vẫn được đưa vào cuối hàng đợi, gắn với mức ưu tiên cao
                                    <br>
                                    => Nhanh chóng được phục vụ
                                </li>
                                <li>Tiến trình thực hiện tính toán nhiều: Đưa tiến trình vào hàng đợi mức trên <br> => được phục vụ</li>
                                <li>
                                    Kết thúc lượng tử: Được đưa vào hàng đợi mức dưới với mức ưu tiên thấp
                                </li>
                                <li>
                                    Được phục vụ khi: Ở đầu hàng đợi và không còn tiến trình nào trong các hàng đợi mức trên
                                </li>
                                <li>
                                    Có thể bị ngắt nếu có tiến trình mới xuất hiện thuộc hàng đợi mức trên
                                </li>
                                <li>
                                Tiến trình chuyển từ pha tính toán nhiều sang pha thực hiện I/O
                                <br>
                                    <ul>
                                        <li>Hệ thống ghi lại thời gian các lần tiến trình chiếm bộ xử lý</li>
                                        <li>Khi chuyển pha hệ thống có thể phát hiện nhanh</li>
                                        <li>Đưa tiến trình đó vào hàng đợi thích hợp</li>
                                    </ul>
                                </li>
                                <li>
                                    Ưu điểm
                                    <ul>
                                        <li>Phân tách các tiến trình theo thời gian sử dụng bộ xử lý</li>
                                        <li>
                                        Hệ thống linh động, tự điều chỉnh hoạt động và lợi ích đạt được cân bằng với chi phí
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Nhược điểm: Chi phí lớn
                                </li>
                                <center>
                                    <img style="width: 100%;" src="./assets/img/CS/3/MultilvelFeedbackQueue2.jpg" />
                                </center>
                            </ul>
                            `], 
                            ['Video bài giảng', 'CS023', `
                                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai3/220101_Bai3_P2_v1.0.mp4" target="_blank">Video bài giảng phần 1</a>
                                <br>
                                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai3/220101_Bai3_P3_v1.0.mp4" target="_blank">Video bài giảng phần 2</a>
                            `]
                        ]
                    }
                }
            },
            'CS_chap4': {
                'title': 'Cấp phát và quản lý bộ nhớ',
                'outside': `
                    <h4>MỤC TIÊU BÀI HỌC</h4>
                    <ul>
                        <li>Nắm được các khái niệm cơ bản về bộ nhớ</li>
                        <li>Hiểu được các kiểu địa chỉ nhớ và cách chuyển đổi giữa các kiểu bộ nhớ</li>
                        <li>Hiểu được các cơ chế và mô hình quản lý bộ nhớ</li>
                    </ul>
                `,
                'tableContent': {
                    'CS01': {
                        'title': 'Tổng quan bộ nhớ máy tính',
                        'index': [
                            ['Khái niệm cơ sở', 'CS011', `
                            <ul>
                                <li>Chương trình phải được mang vào trong bộ nhớ và đặt nó trong một tiến trình để được xử lý.</li>
                                <li>Input Queue - Một tập hợp của những tiến trình trên đĩa mà đang chờ để được mang vào trong bộ nhớ để thực thi</li>
                                <li>User programs trải qua nhiều bước trước khi được xử lý</li>
                                <li>Quản lý bộ nhớ là công việc của hệ điều hành với sự hỗ trợ của phần cừng nhắm phân phối, sắp xếp các process trong bộ nhớ sao cho hiệu quả.</li>
                                <li>Mục tiêu cần đặt được là nạp chông càng nhiều process vào bộ nhớ càng tốt (gia tăng mức độ đa chương)</li>
                                <li>Trong hầu hết các hệ thống, kernel sẽ chiếm 1 phần cố định của bộ nhớ; phần còn lại phân phối cho các process</li>
                                <li>Các yêu cầu đối với việc quản lý bộ nhớ:
                                    <ul>
                                        <li>Cấp phát bộ nhớ cho các process;</li>
                                        <li>Tái định vị (relocation): khi swapping...</li>
                                        <li>Bảo vệ: Phải kiểm tra truy xuất bộ nhớ có hợp lệ không</li>
                                        <li>Chia sẻ: Cho phép các process chia sẻ vùng nhớ chung</li>
                                        <li>Kết gán địa chỉ nhớ luận lý của user vào địa chỉ thực</li>
                                    </ul>
                                </li>
                            </ul>
                            `],
                            ['Các kiểu địa chỉ nhớ', 'CS012', `
                                <ul>
                                    <li>Địa chỉ vật lý (physical address) (địa chỉ thực) là 1 vị trí thực trong bộ nhớ chính</li>
                                    <li>Địa chỉ luận lý (logical address) là một vị trí nhớ được diễn tả trong một chương trình (còn gọi là địa chỉ ảo virtual address) <br>
                                        Các trình biên dịch (compiler) tạo ra mã lệnh chương trình mà trong đó mọi tham chiếu bộ nhớ đều là địa chỉ luận lý.
                                    </li>
                                    <li>Địa chỉ tương đối (relative address) (địa chỉ khả tái đinh vị, relocatable address) là 1 kiểu địa chỉ luận lý trong đó các địa chỉ được biểu tương đối so với một vị trí xác định nào đó trong chương trình. 
                                        <br>
                                        Ví dụ: 12 byte so với vị trí bắt đầu chương trình,...
                                    </li>
                                    <li>Địa chỉ tuyệt đối (absolute address): địa chỉ tương đương với địa chỉ thực</li>
                                </ul>
                                
                            `],
                            ['Nạp chương trình vào bộ nhớ', 'CS013', `
                                <ul>
                                    <li>Bộ linker: Kết hợp các object module thành 1 file nhị phân khả thực thi gọi là load module</li>
                                    <li>Bộ loader: Nạp load module vào bộ nhớ chính</li>
                                </ul>
                                <center>
                                    <img style="width: 100%;" src="./assets/img/CS/4/LapChuongTrinhBoNho.jpg" alt="LapChuongTrinhBoNho">
                                </center>
                            `],
                            ['Video bài giảng', 'CS014', `
                                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai4/220101_Bai4_P1_v1.0.mp4" target="_blank">Video bài giảng</a>
                            `]
                        ]
                    },
                    'CS02': {
                        'title': 'Phương pháp phân chương trình bộ nhớ',
                        'index': [
                            ['Phân chương cố định', 'CS021', `
                            <ul>
                                <li>Khi khởi động hệ thống, bộ nhớ chính được chia thành nhiều phần rời nhau gọi là các partition có kích thước bằng nhau hoặc khác nhau</li>
                                <li>Process nào có kích thước nhỏ hơn hoặc bằng kích thước partition thì có thể được nạp vào partition đó.</li>
                                <li>Nếu chương trình có kích thước lớn hơn partition thì phải dùng ở chế độ overlay</li>
                                <li>Nhận xét: Không hiểu quả do bị phân mảnh nội: 1 chương trình dù lớn hay nhỏ đều được cấp phát trọn một partition

                                    <center>
                                        <img src="./assets/img/CS/4/PhanChuongTrinhCoDInh0.jpg" alt="LapChuongTrinhBoNho">
                                    </center>
                                </li>
                            </ul>
                            <li>Hiện tượng phân mảnh ngoài
                                <ul>
                                    <li>Tổng dung lượng bộ nhớ bị bỏ phí (không được sử dụng) của các chương gọi là phân mảnh ngoài.</li>
                                    <li>Như minh họa trong hình, tổng dung lượng bộ nhớ chưa sử dụng là 4 MB, nhưng không thể sử dụng để chứa tiến trình P5 có kích thước 4 MB (vì chúng không liên tục)</li>
                                </ul>
                            </li>
                            <li>Giới hạn kích thước của tiến trình <br>
                                Với phương pháp phân chương cố định, khi tiến trình có kích Dthước lớn hơn kích thước của chương trình thì tiến trình không thể nạp vào bộ nhớ để thực hiện. Do vậy kích thước của tiến trình không được làm lớn hơn kích thước của chương trình lớn nhất trong bộ nhớ.
                            </li>
                            <li>Giới hạn số tiến trình tối đa trong bộ nhớ
                                <br>
                                Phương pháp phân chương cố định, số tiến trình tối đa trong bộ nhớ không vượt qua số chương của bộ nhớ
                            </li>
                            `],
                            ['Phân chương động', 'CS022', `
                            <ul>
                                <li>Trong phương pháp này kích thước của các chương trình không cố định ngay từ đầu, nó được khởi tạo trong quá trình nạp tiến trình vào bộ nhớ</li>
                                <li>Chương đầu tiên trong bộ nhớ được sử dụng cho hệ điều hành, phần còn lại sẽ được chia thành các chương trình (partition) để chứa các tiến trình</li>
                                <li>Kích thước mỗi chương bằng kích thước của tiến trình được nạp vào chương đó.</li>
                                <li>Do kích thước của mỗi chương được tính toán đúng bằng kích thước của tiến trình do vậy sẽ không có hiện tượng phân mảnh trong</li>
                                <center>
                                    <img style="width: 100%;" src="./assets/img/CS/4/PhanChuongDong0.jpg" alt="PhanChuongDong0">
                                </center>
                                <ul>
                                    <li>Ưu điểm <br>
                                        <ul>
                                            <li>Không có hiện tượng phân mảnh trong, do kích thước các chương được thiết lập đúng bằng kích thước của tiến trình</li>
                                            <li>Kích thước tiến trình không bị giới hạn bởi kích thước của chương, mà chỉ bị giới hạn bởi kích thước của bộ hớ chính.</li>
                                            <li>Số tiến trình tối đa trong bộ nhớ không bị giới hạn, do số chương được nạp động trong khi thực hiện thi tiến trình</li>
                                        </ul>
                                    </li>
                                    <li>Nhược điểm: Phân chương động, tồn tại hiện tượng phân mảnh ngoài
                                        <center>
                                            <img style="width: 100%;" src="./assets/img/CS/4/PhanChuongDong1.jpg" alt="PhanChuongDong1">
                                        </center>
                                    </li>
                                </ul>
                            </ul>
                            `],
                            ['Dồn bộ nhớ trong phân chương động','CS023',`
                            <ul>
                                <li>Để tránh hiện tượng phân mảnh ngoài, kỹ thuật đồn bộ nhớ được sử dụng
                                    <center>
                                        <img style="width: 100%;" src="./assets/img/CS/4/PhanChuongDong2.jpg" alt="PhanChuongDong1">
                                    </center>
                                </li>
                                <li>Nhược điểm: Tồn tại thời gian để dồn bộ nhớ, thông thường hệ điều hành phải mất 6 ns để copy 1 byte từ vị trí này sang vị trí khác trong bộ nhớ</li>
                                
                            </ul>
                            `],
                            ['Quản lý bộ nhớ trong phân chương động', 'CS024', `
                            Trong phần chương động, hệ điều hành cần phải quản lý được danh sách các vùng nhớ trống và các vùng nhớ đã được cấp phát cho tiến trình. Có hai phương pháp cơ bản là sử dụng bản đồ bit (Bit Map) và danh sách liên kết (Linked List)
                            <ul>
                                <li>Chia bộ nhớ thành một dãy các khối nhớ (unit) để cấp phát cho tiến trình</li>
                                <li>Mỗi chương trong bộ nhớ bao gồm 1 thứ nguyên các khối nhớ (unit)</li>
                                <li>Kích thước của mỗi khối nhớ (unit) được thiết lập bởi hệ điều hành và không thay đổi </li>
                                <li>Danh sách các khối nhớ được lưu trữ như 1 mảng một chiều (Allocation Units)</li>
                                <li>Hệ thống sử dụng một mảng là Array of Bits (gọi là bản đồ bit)</li>
                                <li>Mỗi phần tử trong bản đồ bit sẽ được lưu trữ giá trị 0 hoặc 1 tương ứng với trạng thái của khối nhớ còn trống hoặc đã cấp phát cho tiến trình</li>
                                <li>Một dãy liên tiếp các bit 0 trong bản đồ bit sẽ tương ứng với 1 vùng trống (hole) trong bộ nhớ</li>
                                <li>Một dãy liên tiếp các bit 1 trong bản đồ bit sẽ tương ứng với một tiến trình trong bộ nhớ.</li>
                            </ul>
                            <p>Nhược điểm: Tốn bộ nhớ để lưu trữ bản đồ bit. Chẳng hạn, nếu kích thước một khối nhớ (unit) = 4 bits, kích thước của bẩn đồ bit là 1/(4+1) = 1/5 tổng kích thước bộ nhớ</p>
                            <center>
                                <img style="width: 100%;" src="./assets/img/CS/4/Quanlybonho0.jpg" alt="Quanlybonho0">
                            </center>
                            <b>Sử dụng danh sách liên kết</b>
                            <ul>
                                <li>Bộ nhớ được chia thành các khối (unit)</li>
                                <li>Mỗi chương gồm 1 số nguyên các khối (unit) và được sử dụng để chưa tiến trình</li>
                                <li>Các chương trong bộ nhớ được tổ chức như một cấu trúc danh sách liên kết đơn, mỗi phần tử trong danh sách sẽ trỏ tới một chương trong bộ nhớ</li>
                                <li>Có 3 trường thông tin như sau:
                                    <ul>
                                        <li>Trường đầu tiên (Process/Hole) là trường nhãn, nhập giá trị P (Process) nếu khối chứa tiến trình, nhận giá trị H (Hole) nếu khối là trống.</li>
                                        <li>Trường thứ hai (Start index) chưa khối bắt đầu của chương;</li>
                                        <li>Trường thứ ba (End index) chứa khối kết thúc của chương.</li>
                                    </ul>
                                    <br>
                                    Khi một chương được giải phóng, chương đó sẽ được hợp nhất với các chương trình liên kề mà không mất thời gian tính toán.
                                </li>
                            </ul>
                            <centeR>
                                <img style="width: 100%;" src="./assets/img/CS/4/Quanlybonho1.jpg" alt="Quanlybonho1">
                            </centeR>
                            <p>Nhược điểm</p>
                            <ul>
                                <li>Thao tác thêm/xóa một nút trong danh sách liên kết đơn khá phức tạp</li>
                                <li>Có thể cải tiến hiệu quả bằng cách sử dụng 1 cấu trúc liên kết đôi</li>
                            </ul>
                            `],
                            ['Giải thuật cấp phát vùng trống', 'CS025', `
                            <ul>
                                <li>Thuật toán First Fit Algorithm
                                    <ul>
                                        <li>Quét trong danh sách liên kết để tìm ra vùng trống đầu tiên có kích thước lớn hơn hoặc bằng kích thước của tiến trình và nạp tiến trình vào vùng trống tìm được</li>
                                        <li>Vùng trống tìm được bị chia thành hai phần, phần thứ nhất chứa tiến trình, phần thứ hai là vùng trống</li>
                                        <li>Thuật toán First Fit Algorithm cập nhật danh sách liên kết thông qua việc hiệu chỉnh giá trị trong trường Start Index của các chương trong bộ nhớ</li>
                                    </ul>
                                </li>
                                <li>Thuật toán Best Fit Algorithm
                                    <br> Thuật toán này sẽ tìm kiếm khối trống nhỏ nhất còn lớn hơn hoặc bằng kích thước của tiến trình để nạp tiến trình vào khối đó
                                </li>
                                <li>Thuật toán Worst Fit Algorithm
                                    <ul>
                                        <li>Thuật toán này sẽ tìm kiếm khối trống lớn nhất để nạp tiến trình vào khối đó.</li>
                                        <li>Thuật toán này sinh ra khối trống mới có kích thước lớn nhất, do vậy có thể sử dụng để nạp tiếp các tiến trình khác vào vùng trống mới</li>
                                    </ul>
                                </li>
                            </ul>
                            `],
                            ['Cấp phát bộ nhớ cận kề', 'CS026', `
                            <ul>
                                <li>Bộ nhớ được quản lý theo các khối với kích thước là lũy thừa của 2 (như 2<sup>0</sup>, 2<sup>1</sup>, 2<sup>2</sup>,...)</li>
                                <li>Giả sử hệ thống có 2<sup>U</sup> khối nhớ</li>
                                <li>Cần nạp tiến trình vào bộ nhớ với kích thước S, nếu 2<sup>U-1</sup>&lt;S&lt;2<sup>U</sup> thì toàn bộ không gian bộ nhớ được cấp phát cho tiến trình.</li>
                                <li>Ngược lại không gian bộ nhớ được chia thành hai phần bằng nhau, nếu 2<sup>U-2</sup>&lt;S&lt;2<sup>U-1</sup> thì sẽ cấp phát một nửa bộ nhớ cho tiến trình</li>
                                <li>Quá trình như vậy sẽ được lặp lại cho đến khi tạo ra khối nhớ có kích thước nhỏ nhất thỏa mãn yêu cầu.</li>
                            </ul>
                            <b>Ví dụ:</b> Xét bộ nhớ gồm 1024 KB = 1 MB <br>
                            <center>
                                <img style="width: 100%;" src="./assets/img/CS/4/VD_CapPhatBoNho0.jpg" alt="VD_CapPhatBoNho0">
                            </center>
                            `],
                            ['Ánh xạ địa chỉ và chống truy cập bộ nhớ trái phép', 'CS027', `
                            <ul>
                                <li>Mỗi tiến trình sẽ được nạp vào một chương trình để thực hiện, do vậy cần phải có cơ chế ánh xạ địa chỉ logic của tiến trình thành địa chỉ vật lý</li>
                                <li>Hệ điều hành hỗ trợ đa chương trình, có nhiều tiến trình cùng hoạt động trong bộ nhớ, các tiến trình có thể vô tình hoặc cố ý truy xuất tới các vùng nhớ của tiến trình khác</li>
                                <li>Do vậy các hệ điều hành cần có giải pháp chống truy xuất trái phép bộ nhớ</li>
                            </ul>
                            <center>
                                <img style="width: 100%;" src="./assets/img/CS/4/AnhXaDiaChiVaChongTruyCapBoNhoTraiPhep.jpg" alt="AnhXaDiaChiVaChongTruyCapBoNhoTraiPhep">
                            </center>
                            <p>Cơ chế ánh xạ địa chỉ logic sang địa chỉ vật lý và chống truy cập trái phép hoạt động như sau</p>
                            <ul>
                                <li>Thanh ghi cơ sở chứa địa chỉ bắt đầu của tiến trình trong bộ nhớ</li>
                                <li>Thanh ghi giới hạn chứa kích thước (độ dài) của tiến trình</li>
                                <li>So sánh địa chỉ logic với nội dung thanh ghi giới hạn, nếu địa chỉ logic nhỏ hơn giá trị trong thanh ghi giới hạn thì mới được ánh xạ thành địa chỉ vật lý
                        
                                    <br>
                                    <center>Địa chỉ vật lý = Giá trị thanh ghi cơ sở + Địa chỉ logic</center>
                                </li>
                            </ul>
                            `],
                            ['Trao đổi giữa bộ nhớ và đĩa (Swapping)', 'CS028', `
                            <ul>
                                <li>CPU, bộ nhớ chính, đĩa từ,... trong các hệ thống là hữu hạn</li>
                                <li>Có thể có nhiều tiến trình cùng được nạp vào bộ nhớ để thực hiện</li>
                                <li>Cần phải có cơ chế tạm dừng các tiến trình và di chuyển các tiến trình đó ra đĩa cứng để nhường bộ nhớ chính cho các tiến trình khác</li>
                                <li>Sau đó các tiến trình trên đĩa cứng cũng lại được nạp vào bộ nhớ để thực hiện tiếp từ vị trí tạm dừng</li>
                                <li>Cơ chế chuyển tiếp ra đĩa cứng để nhường bộ nhớ chính cho tiến trình khác thực hiện gọi là trao đổi giữa bộ nhớ và đĩa (swapping)</li>
                                <li>Vấn đề tốc độ
                                    <ul>
                                        <li>Thời gian chuyển đổi tiến trình ra đĩa phụ thuộc vào các yếu tố sau: tốc độ đọc/ghi đĩa cứng; tốc độ truy cập bộ nhớ chính; kích thước tiến trình</li>
                                        <li>Thường tốc độ đọc/ghi đĩa cứng là đĩa chậm, do đó với các tiến trình có kích thước lớn, thời gian chuyển đổi ngữ cảnh giữa các tiến trình, bao gồm cả thời gian trao đổi đĩa là khá lớn</li>
                                    </ul>
                                </li>
                                <li>
                                    Hạn chế của phương pháp trao đổi giữa bộ nhớ và đĩa 
                                    <br>
                                    Khi thực hiện trao đổi tiến trình giữa bộ nhớ và đĩa, tiến trình đó phải ở trạng thái nghỉ, không được thực hiện các thao tác vào/ra dữ liệu do trong quá trình vào/ra dữ liệu, nếu thức hiện việc trao đổi có thể sẽ gây ra lỗi với dữ liệu
                                    <center>
                                        <img src="./assets/img/CS/4/swapping0.jpg" alt="swapping0">
                                    </center>
                                </li>
                            </ul>
                            `],
                            ['Video bài giảng', 'CS029', `
                                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai4/220101_Bai4_P2_v1.0.mp4" target="_blank">Video bài giảng phần 1</a>
                                <br>
                                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai4/220101_Bai4_P3_v1.0.mp4" target="_blank">Video bài giảng phần 2</a>
                            `],
                        ]
                    },
                    'CS03': {
                        'title': 'Phương pháp phân trang bộ nhớ',
                        'index': [
                            ['Đặt vấn đề: Cấp phát không liên tục', 'CS031', `
                            <ul>
                            <li>Phương pháp phân chương bộ nhớ, luôn gặp phải hiện tượng phân mảnh trong và phân mảnh ngoài dẫn tới lãng phí bộ nhớ</li>
                            <li>Hiện tượng này có thể khắc phục bằng kỹ thuật dồn bộ nhớ, tuy nhiên kỹ thuật này làm giảm hiệu năng hoạt động của hệ thống.</li>
                            <li>Tại sao cần phân trang bộ nhớ? <br>
                                Xét ví dụ, có một tiến trình P1 với kích thước 2MB, và bộ nhớ chính được chia thành ba vùng, trong đó có
                                hai vùng trống, mỗi vùng có kích thước 1MB.
                            </li>
                        </ul>
                        <h3>Khái niệm phân trang bộ nhớ</h3>
                        <ul>
                            <li>Tiến trình P1 cần 2 MB bộ nhớ</li>
                            <li>Bộ nhớ còn trống 2 MB, nhưng không phải là một vùng liên tục do vậy tiến trình P1 vẫn không thể nạp vào bộ nhớ để thực hiện.</li>
                        </ul>
                        <center>
                            <img style="width: 100%;" src="./assets/img/CS/4/phantrangbonho0.jpg" alt="phantrangbonho0">
                        </center>
                        <ul>
                            <li>Bộ nhớ vật lý được chia thành các khối nhớ nhỏ có kích thước bằng nhau được gọi là khung trang (page frame)</li>
                            <li>Không gian địa chỉ logic của tiến trình được chia thành nhiều khối nhỏ gọi là trang (page), có kích thước bằng nhau và bằng kích thước của khung trang</li>
                            <li>Mỗi khung trang trong bộ nhớ được sử dụng để chưa một trang của tiến trình</li>
                            <li>Một trang có thể được nạp vào một khung trang bất kỳ, tuy nhiên các hệ điều hành thường nạp các trang vào khung trang một cách tuần tự</li>
                            <li>Các trang của tiến trình chỉ được nạp vào bộ nhớ chính khi có yêu cầu cần sử dụng tới trang, khi chưa có yêu cầu sử dụng chúng luôn được lưu trên bộ nhớ thứ cấp</li>
                        </ul>
                        <center>
                            <img style="width: 100%;" src="./assets/img/CS/4/khainiemphantrang0.jpg" alt="khainiemphantrang0">
                        </center>
                        <p><b>Ví dụ:</b></p>
                        <ul>
                            <li>Giả sử bộ nhớ chính có kích thước là 16KB</li>
                            <li>Chia thành 16 khung trang</li>
                            <li>Mỗi khung trang có kích thước 1 KB</li>
                            <li>Có 4 tiến trình là P1, P2, P3, P4</li>
                            <li>Mỗi tiến trình có kích thước là 4 KB</li>
                            <li>Mỗi tiến trình được chia thành 4 trang, mỗi trang có kích thước 1 KB.</li>
                            <li>Ban đầu tất cả các khung trang đều trống, do vậy các trang của 4 tiến trình được nạp vào bộ nhớ một cách liên tục</li>
                            <li>Tiến trình P2 và P4 bị tạm dừng</li>
                            <li>Các khung trang tương ứng của hai tiến trình này được giải phóng</li>
                            <li>Trong bộ nhớ có 8 khung trang trống</li>
                            <li>Do vậy có thể sử dụng để nạp các tiến trình khác vào thực hiện</li>
                            <li>Xét tiến trình P5 trong hàng đợi sẵn sàng và có 8 trang</li>
                            <li>Bộ nhớ có 8 khung trang không liên tiếp, P5 vẫn được nạp vào</li>
                        </ul>
                        <center>
                            <img style="width: 100%;" src="./assets/img/CS/4/khainiemphantrang1.jpg" alt="khainiemphantrang1">
                        </center>
                            `],
                            ['Ánh xạ địa chỉ logic sang địa chỉ vật lý', 'CS032', `
                            <ul>
                                <li>
                                    Khối quản lý bộ nhớ (MMU-Memory Management Unit)
                                    <ul>
                                        <li>MMU có vai trò chuyển đổi một địa chỉ logic thành một địa chỉ vật lý</li>
                                        <li>Địa chỉ logic là địa chỉ sinh ra bởi CPU cho mỗi trang</li>
                                        <li>Địa chỉ vật lý là địa chỉ của các khung trang trong bộ nhớ, và được sử dụng để chứa các trang của tiến trình</li>
                                    </ul>
                                </li>
                                <li>
                                    Vấn đề cơ bản của địa chỉ nhị phân 
                                    <ul>
                                        <li>Địa chỉ trên hệ thống được biểu diễn bởi một cây nhị phân</li>
                                        <li>Sử dụng 1 bit, sẽ biểu diễn được hai địa chỉ là 0 hoặc 1, sử dụng 2 bit sẽ biểu diễn được 4 địa chỉ là 00, 01, 10 và 11</li>
                                        <li>Tổng quát nếu sử dụng n bit để biểu diễn một địa chỉ, ta sẽ có 2n địa chỉ</li>
                                    </ul>
                                </li>
                            </ul>
                            <center>
                                <img style="width: 100%;" src="./assets/img/CS/4/AnhXaDiaChiLOGICsangVL.jpg" alt="AnhXaDiaChiLOGICsangVL">
                            </center>
                            <ul>
                                <li>Mỗi địa chỉ logic gồm 2 phần là số hiệu trang và độ lệch</li>
                                <li>n bit địa chỉ sẽ được chia thành hai phần, phần thứ nhất sử dụng k bits cho số hiệu trang và chúng ta có 2<sup>k</sup> trang, phần thứ hai sử dụng n-k bit cho độ lệch</li>
                            </ul>
                            <center>
                                <img style="width: 100%;" src="./assets/img/CS/4/AnhXaDiaChiLOGICsangVL0.jpg" alt="AnhXaDiaChiLOGICsangVL0">
                            </center>
                            `],
                            ['Bảng trang', 'CS033', `
                                <ul>
                                    <li>Trong phương pháp phân trang, mỗi trang có thể nạp vào một khung trang bất kỳ, không liền nhau.</li>
                                    <li>Hệ điều hành sử dụng một cấu trúc gọi là bảng trang (Page Table) để quản lý ánh xạ giữa địa chỉ logic của tiến trình với địa chỉ vật lý của khung trang.</li>
                                    <li>Giả sử xét hệ thống với các tham số như sau:
                                        <ul>
                                            <li>Bộ nhớ vật lý có M từ</li>
                                            <li>Bộ nhớ logic có L từ</li>
                                            <li>Địa chỉ vật lý (Physical Address) được mã hóa bởi m bits = log<sub>2</sub>M</li>
                                            <li>Địa chỉ logic (Logical Address) được mã hóa bởi l bit = Log<sub>2</sub>L</li>
                                            <li>Đia chỉ lệch của trang (page offset) được mã hóa bởi p bits = log<sub>2</sub>P</li>
                                            <li>
                                                Cấu trúc bảng trang
                                                <br>
                                                <center>
                                                    <img style="width: 100%;" src="./assets/img/CS/4/BangTrang0.jpg" alt="BangTrang0">
                                                </center>
                                            </li>
                                            <li>
                                                Bảng trang lưu trữ số hiệu của tất cả các khung trang tương ứng với các trang, và ánh xạ số hiệu trang tới một vùng xác định (khung trang) trong bộ nhớ chính
                                                <br>
                                                <center>
                                                    <img style="width: 100%;" src="./assets/img/CS/4/BangTrang1.jpg" alt="BangTrang1">
                                                </center>
                                            </li>
                                </ul>
                            `],
                            ['Ánh xạ từ bảng trang sang bộ nhớ tài chính','CS034',`
                            <ul>
                            <li>CPU sinh ra một địa chỉ logic</li>
                            <li>CPU lưu trữ địa chỉ cơ sở của bảng trang trong một thanh ghi đặc biệt là Page Table Base Register (PTBR). Giá trị này được cộng với số hiệu trang trong địa chỉ logic để tìm ra phần tử trong bảng trang.
                            </li>
                            <li>Dựa vào phần tử tìm được trong bảng trang ở bước 2 để tìm ra khung trang, sau đó cộng với địa chỉ lệch (Offset) để sinh ra địa chỉ vật lý</li>
                            <li>Số hiệu khung trang và độ lệch Offset được ánh xạ vào 1 ô nhớ trong bộ nhớ chính. Đây chính là ô nhớ vật lý cần xác định </li>
                            <li>Ánh xạ địa chỉ logic sang địa chỉ vật lý qua bảng trang
                                <br>
                                <center>
                                    <img style="width: 100%;" src="./assets/img/CS/4/Anhxatubangtrangsangbonhochinh.jpg" alt="Anhxatubangtrangsangbonhochinh">
                                </center>
                            </li>
                        </ul>
                        <b>Cấu trúc phần tử trong bảng trang</b>
                        <ul>
                            <li>Ngoài số hiệu khung trang, mỗi phần tử trong bảng trang còn chứa một số thông tin khác, phục vụ việc truy cập bộ nhớ vật lý của các tiến trình
                                <center>
                                    <img style="width: 100%;" src="./assets/img/CS/4/cautrucbangtrang.jpg" alt="cautrucbangtrang">
                                </center>
                            </li>
                            <li>Bit caching disabled: Hệ điều hành vô hiệu hóa bộ nhớ khi có yêu cầu truy cập các trang, nếu bit này được thiết lập là 1</li>
                            <li>Bit modified: bit này = 1, nếu trang đã bị thay đổi.</li>
                            <li>Bit Referenced: bit này = 1 nếu trang được tham chiếu tới trong chu kỳ đồng hồ cuối cùng, ngược lại bit này = 0</li>
                            <li>Trường Protecttion: sử dụng để thiết lập mức bảo vệ cho trang (trang chỉ được phép đọc, hoặc đọc/ghi...)</li>
                            <li>Bit Present/Absent: bit này = 1 nếu trang đang nằm trong bộ nhớ chính, ngược lại được thiết lập là 0.</li>
                        </ul>
                        <center>
                            <img style="width: 100%;" src="./assets/img/CS/4/Anhxatubangtrangsangbonhochinh0.jpg" alt="Anhxatubangtrangsangbonhochinh0">
                        </center>
                            `], 
                            ['Tổ chức và lưu trữ bảng trang', 'CS035', `
                            <ul>
        <li>Tốc độ truy cập bảng phân trang
            <br>
            <ul>
                <li>Tốc độ truy xuất bảng trang có ảnh hưởng lớn tới tốc độ truy xuất bộ nhớ của hệ thống</li>
                <li>Cần phải có các phương pháp lưu trữ bằng trang phù hợp nhằm tăng tốc độ truy xuất</li>
            </ul>
        </li>
        <li>Lưu bảng trang trong các thanh ghi
            <br>
            <ul>
                <li>Trong hệ thống, tốc độ truy xuất tới thanh ghi là nhanh nhất. Do vậy, cách đơn giản nhất là lưu trữ bảng trang trong các thanh ghi hệ thống</li>
                <li>Số thanh ghi trong hệ thống là có hạn, do vậy phương pháp này giới hạn số lượng phần tử trong bảng trang</li>
                <li>Khi số lượng các phần tử trong bảng trang lớn, bảng trang được lưu trữ trong bộ nhớ chính</li>
                <li>Địa chỉ cơ sở của bảng trang được lưu trữ trong một thanh ghi đặc biệt là PTBR (Page Table Base Register)</li>
                <li>Mỗi địa chỉ logic có dạng &lt; Page Number, Offset &gt;, hệ thống sẽ tìm ra phần tử trong bảng trang bằng cách cộng giá trị trong thanh PTBR với giá trị Page Number</li>
            </ul>
        </li>
        <li>
            Sử dụng bộ nhớ đệm truy cập nhanh (bộ nhớ cache)
            <br>
            Do tốc độ đọc/ghi bộ nhớ thường chậm, do vậy trong các hệ thống hiện đại bảng trang thường được lưu trữ
            trong bộ nhớ cache tốc độ cao, gọi là đệm dịch địa chỉ (Translation Look-aside Buffer – TLB) để tăng tốc độ
            truy xuất. Mỗi phần tử trong TLB có dạng &lt;key, value&gt;, trong đó key là số thứ tự trang, value là số thứ tự
            khung trang tương ứng.
            <center>
                <img style="width: 100%;" src="./assets/img/CS/4/tochucbonho_bangtrang0.jpg" alt="tochucbonho_bangtrang0">
            </center>
        </li>
        <li>
            CPU phát ra một địa chỉ logic với số hiệu trang là p, hệ thống sẽ tìm kiếm trong TLB xem có tồn tại trang có
            số hiệu là p hay không, có hai khả năng xảy ra như sau:
            <br>
            <ul>
                <li>Nếu tồn tại trang p trong TLB, số thứ tự khung sẽ được trả về và kết hợp với phần Offset để tạo thành
                    một địa chỉ vật lý.</li>
                <li>Ngược lại, nếu trang p không có trong TLB, hệ thống sẽ truy cập bảng trang từ bộ nhớ trong để tìm số
                    khung và kết hợp với phần Offset để tạo thành địa chỉ vật lý.</li>
            </ul>
        </li>
        <li>Khi TLB đầy (có nghĩa tất cả các ô của TLB đã chứa số hiệu trang), hệ điều hành sẽ giải phóng một ô để chứa cặp giá trị &lt;key, value&gt; mới được đọc vào.</li>
    </ul>
    <p><b>Bảng trang nhiều mức</b></p>
    <ul>
        <li>Khi không gian địa chỉ logic lớn, kích thước bảng trang sẽ tăng đáng kể.</li>
        <li>Không gian địa chỉ logic là 232, kích thước trang là 4KB = 212, số lượng phần tử (entry) trong bảng trang là
            232/212 = 220, mỗi entry có kích thước là 4 bytes, kích thước bảng trang là 222 = 4MB chia thành các bảng
            trang có kích thước nhỏ.</li>
        <li>Ưu điểm chia nhỏ bảng trang
            <br>
            <ul>
                <li>Việc cấp phát các vùng nhớ nhỏ để chứa bảng trang đơn giản hơn so với cả bảng trang lớn.</li>
                <li>Khi các tiến trình có kích thước nhỏ hơn kích thước tối đa cho phép, không sử dụng hết bảng trang, mà
                    chỉ có một phần của bảng trang được sử dụng.</li>
            </ul>
        </li>
    </ul>
    <p>
        Bảng trang hai mức, mỗi địa chỉ logic cũng gồm hai
        phần là &lt;Page Number, Offset&gt;, tuy nhiên phần Page
        Number được chia nhỏ thành hai phần &lt;p1, p2&gt;.
        Trong đó p1 là số hiệu trang của bảng trang ngoài, và
        p2 là độ dời trong bảng trang con
    </p>
    <center>
        <img style="width: 100%;" src="./assets/img/CS/4/tochucbonho_bangtrang1.jpg" alt="tochucbonho_bangtrang1">
    </center>
    <center>
        <img style="width: 100%;" src="./assets/img/CS/4/tochucbonho_bangtrang2.jpg" alt="tochucbonho_bangtrang2">
    </center>
    <p><b>Bảng trang ngược (Inverted page table)</b></p>
    <ul>
       <li> Không gian địa chỉ logic lớn, số entry trong bảng trang sẽ rất lớn và do vậy kích thước của bảng trang cũng
rất lớn.</li>
        <li>Kỹ thuật bảng trang ngược (inverted page table) được sử dụng.</li>
        <li>Chỉ có một bảng trang cho toàn bộ hệ thống, mỗi ô trong bảng trang ứng với một khung trang trong bộ nhớ vật lý.</li>
        <li>Mỗi entry của bảng trang ngược có cấu trúc như sau: &lt; pid, Page Number, Offset &gt;</li>
        <li>Trong đó:
            <ul>
                <li>pid là số hiệu của tiến trình sở hữu trang;</li>
                <li>Page Number: số hiệu của trang nằm trong khung trang;</li>
                <li>Offset độ lệch trong trang</li>
            </ul>
        </li>
    </ul>
                            `],
                            ['Video bài giảng', 'CS030', `
                            <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai4/220101_Bai4_P4_v1.0.mp4" target="_blank">Video bài giảng phần 1</a>
                            <br>
                            <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai4/220101_Bai4_P5_v1.0.mp4" target="_blank">Video bài giảng phần 2</a>
                            `]
                        ]
                    },
                    'CS04': {
                        'title': 'Quản lý bộ nhớ theo phương pháp phân đoạn',
                        'index': [
                            ['Quản lý bộ nhớ theo phương pháp phân đoạn','CS041',`
                            <ul>
                                <li>Bộ nhớ được chia thành nhiều đoạn với kích thước khác nhau</li>
                                <li>Mỗi đoạn được sử dụng để chứa một tiến trình</li>
                                <li>Thông tin về các đoạn thường được chứa trong một bảng gọi là bảng đoạn (Segment Table)</li>
                                <li>Có hai thông tin cơ bản về đoạn cần được lưu trữ trong bảng đoạn là <b>địa chỉ cơ sở</b> của mỗi đoạn và <b>độ dài của đoạn.</b></li>
                                <li>Mỗi chương trình thường bao gồm nhiều thành phần khác nhau, với yêu cầu bộ nhớ khác nhau, như phần
                                    dữ liệu của chương trình, phần mã chương trình, phần dữ liệu trong ngăn xếp,...</li>
                            </ul>
                            `],
                            ['Ánh xạ địa chỉ logic thành địa chỉ vật lý', 'CS042', `
                            <ul>
                                <li>Mỗi địa chỉ logic theo phương pháp phân đoạn gồm hai thành phần là:
                                    <ul>
                                        <li>base chứa địa chỉ khởi đầu của segment trong bộ nhớ;</li>
                                        <li>limit xác định kích thước của segment.</li>
                                    </ul>
                                </li>
                                <li>Hệ thống sử dụng một bảng gọi là bảng đoạn để quản lý các đoạn trong bộ nhớ.</li>
                                <li>Sử dụng 2 thanh ghi để chứa các thông tin về bảng đoạn:</li>
                                <li>Một chỉ số segment s là hợp lệ nếu s &lt; STLR.</li>
                                <li>
                                    Mỗi ô của bảng đoạn có cấu trúc dạng &lt;base, limit&gt;
                                    <ul>
                                        <li>Segment-table base register (STBR): trỏ đến vị trí bảng phân đoạn trong bộ nhớ;</li>
                                        <li>Segment-table length register (STLR): chương trình.</li>
                                    </ul>
                                </li>
                                <li>Một chỉ số segment s là hợp lệ nếu s &lt; STLR.</li>
                                <li>Mỗi ô của bảng đoạn có cấu trúc dạng &lt; base, limit &gt;
                                    <ul>
                                        <li>base chứa địa chỉ cơ sở của đoạn;</li>
                                        <li>limit chứa độ dài của đoạn.</li>
                                    </ul>
                                </li>
                            </ul>
                            <center>
                                <img style="width: 100%;" src="./assets/img/CS/4/Quanlybonho3.jpg" alt="Quanlybonho3">
                            </center>
                            `],
                            ['Chuyển đổi một địa chỉ logic sang địa chỉ vật lý', 'CS043', `
                            
                            <ul>
                                <li>Chuyển đổi một địa chỉ logic sang địa chỉ vật lý
                                    <ul>
                                        <li>Phần chỉ số đoạn s trong địa chỉ logic được sử dụng để tìm tới ô thứ s trong bảng đoạn.</li>
                                        <li>Lấy giá trị giới hạn limit và cơ sở base chứa trong ô này.</li>
                                        <li>Phần độ dịch Offset trong địa chỉ logic được so sánh với giá trị limit. Nếu giá trị Offset &lt; limit thì đây là
                                            một địa chỉ truy cập hợp lệ, ngược lại nếu giá trị Offset &eg; limit thì địa chỉ này vượt ra ngoài phạm vi của
                                            đoạn và do vậy sẽ bị báo lỗi truy cập</li>
                                        <li>Trong trường hợp truy cập hợp lệ, địa chỉ vật lý được xác định giá trị cơ sở base cộng với độ dời Offset</li>
                                    </ul>
                                </li>
                            </ul>
                            `],
                            ['Video bài giảng', 'CS044', `
                                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai4/220101_Bai4_P6_v1.0.mp4" target="_blank">Video bài giảng</a>
                            `]
                        ]
                    },
                    'CS05': {
                        'title': 'Kết hợp phân đoạn với phân trang',
                        'index': [
                            ['Kết hợp phân đoạn với phân trang','CS051',`
                                <ul>
                                    <li>Kết hợp giữa phân đoạn và phân trang nhằm tận dụng các ưu điểm của hai phương pháp hiện đang được sử dụng phổ biến trong hầu hết các hệ điều hành.</li>
                                    <li>Bộ nhớ được chia thành các đoạn có kích thước khác nhau, mỗi đoạn được chia thành các trang có kích thước bằng nhau.</li>
                                    <li>Kích thước trang luôn nhỏ hơn kích thước của đoạn.</li>
                                    <li>Mỗi đoạn có một bảng trang để quản lý các trang trong đoạn.</li>
                                    <li>Mỗi địa chỉ logic có cấu trúc gồm 3 thành phần: &lt;Segment Number, Page Number, Offset&gt;.</li>
                                    <li>Trong đó:
                                        <ul>
                                            <li>Segment Number: Chứa số hiệu đoạn trong bộ nhớ;</li>
                                            <li>Page Number: Chứa số hiệu trang trong đoạn;</li>
                                            <li>Offset: Chứa độ lệch trong trang.</li>
                                        </ul>
                                    </li>
                                </ul>
                                <center>
                                    <img style="width: 100%;" src="./assets/img/CS/4/combinePhandoan_Phantrang0.jpg" alt="combinePhandoan_Phantrang0">
                                </center>
                                
                            `], 
                            ['Ánh xạ địa chỉ logic sang địa chỉ vật lý', 'CS052', `
                                <ul>
                                    <li>CPU phát ra một địa chỉ logic gồm hai phần:
                                        <ul>
                                            <li>Số hiệu đoạn (Segment Number);</li>
                                            <li>Độ lệch (Segment Offset).</li>
                                        </ul>
                                    </li>
                                    <li>Độ lệch đoạn (Segment Offset) phải nhỏ hơn
                                        độ dài của đoạn (limit)</li>
                                    <li>Thông tin quản lý trang gồm hai phần là số hiệu
                                        trang (Page Number) và độ lệch trang
                                        (Page Offset).</li>
                                </ul>
                                <center>
                                    <img style="width: 100%;" src="./assets/img/CS/4/combinePhandoan_Phantrang1.jpg" alt="combinePhandoan_Phantrang1">
                                </center>
                            `],
                            ['Video bài giảng', 'CS045', `
                                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai4/220101_Bai4_P7_v1.0.mp4">Video bài giảng</a>
                            `]
                        ]
                    },
                    'CS06': {
                        'title': 'Bộ nhớ ảo',
                        'index': [
                            ['Tông quan bộ nhớ ảo', 'CS061', `
                            <ul>
                                <li>Nhận xét: Không phải tất cả các phần của một process cần thiết phải được nạp vào bộ nhớ chính tại cùng
                                    một thời điểm.</li>
                                <li>Ví dụ:
                                    <ul>
                                        <li>Đoạn mã điều khiển các lỗi hiếm khi xảy ra.</li>
                                        <li>Các arrays, list, tables được cấp phát bộ nhớ (cấp phát tĩnh) nhiều hơn yêu cầu thực sự.</li>
                                        <li>Một số tính năng ít khi được dùng của một chương trình</li>
                                        <li>Cả chương trình thì cũng có đoạn code chưa cần dùng</li>
                                    </ul>
                                </li>
                                <li>Bộ nhớ ảo (virtual memory): Bộ nhớ ảo là một kỹ thuật cho phép xử lý một tiến trình không được nạp toàn
                                    bộ vào bộ nhớ vật lý.</li>
                                <li>Ưu điểm của bộ nhớ ảo
                                    <ul>
                                        <li>Số lượng process trong bộ nhớ nhiều hơn;</li>
                                        <li>Một process có thể thực thi ngay cả khi kích thước của nó lớn hơn bộ nhớ thực;</li>
                                        <li>Giảm nhẹ công việc của lập trình viên</li>
                                    </ul>
                                </li>
                                <li>Không gian tráo đổi giữa bộ nhớ chính và bộ nhớ phụ(swap space).</li>
                                <li>Ví dụ:
                                    <ul>
                                        <li>swap partition trong Linux</li>
                                        <li>file pagefile.sys trong Windows</li>
                                    </ul>
                                </li>
                            </ul>
                            `],
                            ['Cài đặt bộ nhớ ảo', 'CS062', `
                                <ul>
                                    <li>Có hai kỹ thuật:</li>
                                    <li>Phần cứng memory management phải hỗ trợ paging và/hoặc segmentation</li>
                                    <li>OS phải quản lý sự di chuyển của trang/đoạn giữa bộ nhớ chính và bộ nhớ thứ cấp.</li>
                                    <li>Trong chương này,
                                        <ul>
                                            <li>Chỉ quan tâm đến paging</li>
                                            <li>Phần cứng hỗ trợ hiện thực bộ nhớ ảo</li>
                                            <li>Các giải thuật của hệ điều hành</li>
                                        </ul>
                                    </li>
                                </ul>
                            `],
                            ['Nạp trang theo yêu cầu', 'CS063', `
                            <ul>
                                <li>Trong trường hợp không gian bộ nhớ logic lớn hơn bộ nhớ vật lý, hệ điều hành thường kết hợp phương pháp phân trang và trao đổi bộ nhớ chính với đĩa để nạp các trang theo nhu cầu sử dụng.</li>
                                <li>Tiến trình được chia thành nhiều trang và lưu trữ trên đĩa, khi cần thực hiện tới trang nào thì trang đó mới được nạp vào bộ nhớ.</li>
                                <li>Hệ thống sẽ không nạp toàn bộ các trang logic vào bộ nhớ ngay từ đầu.</li>
                                <li>Tại mỗi thời điểm chương trình sẽ có một tập các trang nằm trong bộ nhớ chính, và một tập các trang nằm trên đĩa.</li>
                                <li>Để quản lý trạng thái của các trang, hệ thống sử dụng mộ bit ký hiệu là P), bit P=1 nếu trang nằm trong bộ nhớ, bit P=0 nếu trang nằm trên đĩa.</li>
                                <li>Khi cần truy cập tới trang, hệ thống sẽ kiểm tra bit P, nếu P=1 thì có nghĩa trang đã nằm trên bộ nhớ và hệ thống làm việc bình thường, nếu P=0, có nghĩa cần phải nạp trang vào bộ nhớ từ đĩa, hiện tượng này gọi là lỗi trang (page-fault).</li>
                            </ul>
                            <center>
                                <img style="width: 100%;" src="./assets/img/CS/4/naptrangtheoyeucau.jpg" alt="naptrangtheoyeucau">
                            </center>
                            `],
                            ['Các phương pháp thay thế trang', 'CS064', `
                            <ul>
                                <li>Khi hiện tượng lỗi trang xảy ra:
                                    <ul>
                                        <li>Tìm một khung trống trong danh sách các
                                            khung trống.</li>
                                        <li>Trang tương ứng sẽ được đọc từ đĩa vào khung
                                            trang vừa tìm được</li>
                                        <li>Sau khi trang được đọc vào, khoản mục tương
                                            ứng trong bảng phân trang sẽ được sửa đổi
                                            tương ứng với vị trí của trang trong bộ nhớ,
                                            trạng thái bit P được đổi thành 1 để thể hiện
                                            việc trang đã ở trong bộ nhớ</li>
                                        <li>Lệnh của tiến trình đã gây ra ngắt được thực
                                            hiện lại. Lệnh này bây giờ có thể truy cập trang
                                            vừa được nạp vào</li>
                                    </ul>
                                    <center>
                                        <img style="width: 100%;" src="./assets/img/CS/4/cacphuongphapthaythe.jpg" alt="cacphuongphapthaythe">
                                    </center>
                                </li>
                                <li>Thuật toán thay thế trang tốt sẽ làm giảm số lần thay thế trang, qua đó giúp hệ thống làm việc hiệu quả hơn.
                                    <ul>
                                        <li>Đổi trang tối ưu( OPT);</li>
                                        <li>Đổi trang theo nguyên tắc FIFO;</li>
                                        <li>Trang ít được dùng nhất (LRU);</li>
                                        <li>Chiến lược đồng hồ (CLOCK).</li>
                                    </ul>
                                </li>
                            </ul>
                            <p><b>a. Thuật toán thay thế trang tối ưu (OPT)</b></p>
                            <ul>
                                <li>Hệ điều hành sẽ chọn trang nhớ không được sử dụng tới trong khoảng thời gian lâu nhất để trao đổi.</li>
                                <li>Trang bị thay thế là trang có lần truy cập tiếp theo cách xa thời điểm hiện tại nhất.</li>
                                <li>Ưu điểm: Thuật toán này cho phép giảm tối thiểu sự kiện thiếu trang.</li>
                                <li>Nhược điểm: Hệ điều hành cần đoán trước nhu cầu sử dụng các trang trong tương lai. Điều này rất khó
                                    thực hiện trên thực tế do thứ tự truy cập trang không cố định và không biết trước.</li>
                                <li>Ví dụ: Tiến trình được cấp 3 khung, không gian nhớ logic của tiến trình gồm 5 trang <br>
                                Các trang của tiến trình được truy cập theo thứ tự : 2, 3, 2, 1, 5, 2, 4, 5, 3, 2, 5, 2.
                                    <br>
                                    <center>
                                        <img style="width: 100%;" src="./assets/img/CS/4/thuattoanthaythetrangtoiuu.jpg" alt="thuattoanthaythetrangtoiuu">
                                    </center>
                                </li>
                            </ul>
                        
                            <p><b>b. Thuật toán thay thế trang FIFO (First In First Out)</b></p>
                            <ul>
                                <li>Thay thế trang theo nguyên tắc trang được đọc vào bộ nhớ trước sẽ bị thay ra trước.</li>
                                <li>Ưu điểm: Đơn giản và dễ cài đặt.</li>
                                <li>Nhược điểm: Thuật toán FIFO thường gây ra tần suất thay thế trang lớn so với các thuật toán thay thế trang khác.</li>
                                <li>Ví dụ: Tiến trình được cấp 3 khung, không gian nhớ logic của tiến trình gồm 5 trang <br>
                                    Các trang của tiến trình được truy cập theo thứ tự: 2, 3, 2, 1, 5, 2, 4, 5, 3, 2, 5, 2.
                                    <br>
                                    <center>
                                        <img style="width: 100%" src="./assets/img/CS/4/thuattoanthaythetrangtoiuu0.jpg" alt="thuattoanthaythetrangtoiuu0">
                                    </center>
                                </li>
                            </ul>
                            <p><b>Thuật toán thay thế trang ít sử dụng nhất trong thời gian cuối LRU (Least Recently Used)</b></p>
                            <ul>
                                <li>Trong thuật toán LRU, trang bị thay ra là trang có thời gian từ lần truy cập cuối cùng đến thời điểm hiện tại
                                    là lâu nhất</li>
                                <li>Trang ít được truy cập trong thời gian cuối nhất trong số các trang đang nằm trong bộ nhớ bị thay ra</li>
                                <li>Ví dụ: Tiến trình được cấp 3 khung, không gian nhớ logic của tiến trình gồm 5 trang <br>
                                    Các trang của tiến trình được truy cập theo thứ tự : 2, 3, 2, 1, 5, 2, 4, 5, 3, 2, 5, 2
                                    <br>
                                    <center>
                                        <img style="width: 100%" src="./assets/img/CS/4/thuattoanthaythetrangtoiuu1.jpg" alt="thuattoanthaythetrangtoiuu1">
                                    </center>
                                </li>
                            </ul>
                            <p><b>d. Thuật toán đồng hồ (clock)</b></p>
                            <ul>
                                <li>Thuật toán này sử dụng các thông tin cơ bản sau cho chiến lược chọn trang:
                                    <ul>
                                        <li>Thứ tự nạp trang vào bộ nhớ.</li>
                                        <li>Thông tin về việc gần đây trang có được truy cập hay không.</li>
                                    </ul>
                                </li>
                                <li>Hoạt động của thuật toán đồng hồ như sau:
                                    <ul>
                                        <li>Bit U gọi là bit sử dụng, được gắn vào mỗi trang trong bảng trang.</li>
                                        <li>Truy cập trang, bit U được thiết lập là 1.</li>
                                        <li>Khi đọc trang vào bộ nhớ bit U của trang được thiết lập là 1.</li>
                                        <li>Các trang được liên kết theo một danh sách vòng.</li>
                                        <li>Sử dụng một con trỏ chuyển động theo một chiều trên danh sách.</li>
                                        <li>Một trang bị thay, con trỏ trỏ sang trang tiếp theo trong danh sách.</li>
                                        <li>
                                            <i>Khi có nhu cầu thay thế trang, hệ thống kiểm tra bit U của trang, nếu bit U = 0, trang sẽ bị thay ra ngay. Ngược
                                                lại nếu bit U=1, hệ điều hành thiết lập bit U = 0 và chuyển sang trang tiếp theo.</i>
                                        </li>
                                        <li>Quá trình được lặp lại cho các phần tử khác trong danh sách.
                        
                                            <br>
                                            <center>
                                                <img style="width: 100%;" src="./assets/img/CS/4/thuattoanthaythetrangtoiuu2.jpg" alt="thuattoanthaythetrangtoiuu2">
                                            </center>
                                        </li>
                                        <li>
                                            Ví dụ: Tiến trình được cấp 3 khung, không gian nhớ logic của tiến trình gồm 5 trang Các trang của tiến trình được truy cập theo thứ tự : 2, 3, 2, 1, 5, 2, 4, 5, 3, 2, 5, 2.
                                            <br>
                                            <center>
                                                <img style="width: 100%;" src="./assets/img/CS/4/thuattoanthaythetrangtoiuu3.jpg" alt="thuattoanthaythetrangtoiuu3">
                                            </center>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            `],
                            ['Sử dụng đệm trang', 'CS065', `
                                <ul>
                                    <li>Để nâng cao hiệu năng hoạt động của hệ thống trong quá trình đổi trang, một kỹ thuật thường được sử dụng kết hợp với các thuật toán đổi trang là sử dụng đệm trang (page-buffering)</li>
                                    <li>Kỹ thuật đệm trang cho phép cải tiến tốc độ bởi vì hai lý do sau:</li>
                                    <li>Quá trình thay thế trang trong hệ thống vẫn được thực hiện bình thường, việc ghi ra đĩa được chọn thời điểm thích hợp để thực hiện.</li>
                                    <li>Trang bị thay thế vẫn được lưu giữ trong bộ nhớ. Nếu trong thời gian này có yêu cầu sử dụng lại trang, hệ thống sẽ không phải nạp lại trang từ đĩa mà chỉ cần lấy từ đệm trang</li>
                                </ul>
                            `],
                            ['Cấp phát khung trang', 'CS066', `
                                <ul>
                                    <li>Giới hạn số lượng khung cấp phát.</li>
                                    <li>Số khung trang cho mỗi tiến trình nhỏ, có nhiều tiến trình được thực hiện đồng thời trong hệ thống. Tuy nhiên khi số khung trang cho tiến trình quá nhỏ, quá trình thay thế trang sẽ diễn ra thường xuyên, dẫn tới hệ thống hoạt động không hiệu quả.</li>
                                    <li>Khi lựa chọn số lượng khung tối đa cho mỗi tiến trình, cần chú ý hai đặc trưng sau:
                                        <ul>
                                            <li>Hiện tượng lỗi trang sẽ xảy ra thường xuyên, khi số khung cấp phát cho tiến trình giảm xuống tới một
                                                mức nào đó.</li>
                                            <li>Tần suất thiếu trang sẽ giảm, nếu tăng số lượng khung cho tiến trình. Tuy nhiên khi số lượng khung trở
                                                nên bão hòa (xấp xỉ yêu cầu bộ nhớ tối đa của tiến trình) thì tần suất thiếu trang giảm không đáng kể</li>
                                        </ul>
                                    </li>
                                </ul>
                            `],
                            ['Trì trệ trên toàn bộ hệ thống', 'CS067', `
                                <ul>
                                    <li>Nếu một process không có đủ số frame cần thiết thì tỉ số page faults/sec rất cao.</li>
                                    <li>Thrashing: Hiện tượng các trang nhớ của một process bị hoán chuyển vào/ra liên tục.
                                        <center>
                                            <img style="width: 100%;" src="./assets/img/CS/4/tritretoanbohethong.jpg" alt="tritretoanbohethong">
                                        </center>
                                    </li>
                                </ul>
                            `],
                            ['Mô hình cục bộ', 'CS068', `
                                <ul>
                                    <li>Để hạn chế thrashing, hệ điều hành phải cung cấp cho process càng “đủ” frame càng tốt. Bao nhiêu frame thì đủ cho một process thực thi hiệu quả?</li>
                                    <li>Nguyên lý locality (locality principle)</li>
                                    <li>Vì sao hiện tượng thrashing xuất hiện?</li>
                                    <li>Khi &sum; size of locality &gt; memory size</li>
                                </ul>
                            `],
                            ['Giải pháp tập làm việc', 'CS069', `
                                <ul>
                                    <li>Được thiết kế dựa trên nguyên lý locality</li>
                                    <li>Xác định xem process thực sự sử dụng bao nhiêu frame.</li>
                                    <li>Định nghĩa
                                        <ul>
                                            <li>WS(t) - số lượng các tham chiếu trang nhớ của process gần đây nhất cần được quan sát</li>
                                            <li>&delta; - khoảng thời gian tham chiếu.</li>
                                        </ul>
                                    </li>
                                    <li>Ví dụ
                                        <br>
                                        <center>
                                            <img style="width: 100%;" src="./assets/img/CS/4/giaiphaptapthelamviec.jpg" alt="giaiphaptapthelamviec">
                                        </center>
                                    </li>
                                </ul>
                            `],
                            ['Video bài giảng', 'CS060', `
                                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai4/220101_Bai4_P8_v1.0.mp4" target="_blank">Video bài giảng phần 1</a>
                                <br>
                                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai4/220101_Bai4_P9_v1.0.mp4" target="_blank">Video bài giảng phần 2</a>
                            `]
                        ]
                    }
                }
            }
        }   
}

export default Cs;