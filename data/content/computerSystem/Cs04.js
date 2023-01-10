const CS04 = {
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
            ['Dồn bộ nhớ trong phân chương động', 'CS023', `
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
            ['Ánh xạ từ bảng trang sang bộ nhớ tài chính', 'CS034', `
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
            ['Quản lý bộ nhớ theo phương pháp phân đoạn', 'CS041', `
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
            ['Kết hợp phân đoạn với phân trang', 'CS051', `
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
    },
    'CS07': {
        'title': 'Tham khảo',
        'index': [
            ['Tham khảo giải thuật thay thế trang FIFO, LRU, LFU', 'CS071', `
                <a href="https://voer.edu.vn/m/thay-the-trang/12b210fd" target="_blank">Trang tham khảo các thuật toán FIFO, LRU, LFU</a>
            `]
        ]
    },
    'CS08': {
        'title': 'Video và ghi chú',
        'index': [
            ['Video bài giảng', 'CS081', `
                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai4/220101_Bai4_P1_v1.0.mp4" target="_blank">
                    Tổng quan về bộ nhớ
                </a>

                <br>

                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai4/220101_Bai4_P2_v1.0.mp4" target="_blank">
                    Phương pháp phân chương bộ nhớ
                </a>

                <br>

                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai4/220101_Bai4_P3_v1.0.mp4" target="_blank">
                    Phương pháp phân chương bộ nhớ (tiếp theo)
                </a>

                <br>

                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai4/220101_Bai4_P4_v1.0.mp4" target="_blank">
                    Phương pháp phân trang bộ nhớ
                </a>

                <br>

                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai4/220101_Bai4_P5_v1.0.mp4" target="_blank">
                    Phương pháp phân trang bộ nhớ (tiếp theo)
                </a>

                <br>
                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai4/220101_Bai4_P6_v1.0.mp4" target="_blank">
                    Quản lý bộ nhớ theo phương pháp phân đoạn
                </a>
                <br>
                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai4/220101_Bai4_P7_v1.0.mp4" target="_blank">
                    Kết hợp phân đoạn với phân trang
                </a>
                <br>
                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai4/220101_Bai4_P8_v1.0.mp4" target="_blank">
                    Bộ nhớ ảo
                </a>
                <br>
                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai4/220101_Bai4_P9_v1.0.mp4" target="_blank">
                    Bộ nhớ ảo (tiếp theo)
                </a>
            `]
        ]
    }
};
