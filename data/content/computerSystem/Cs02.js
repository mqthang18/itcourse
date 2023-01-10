const CS02 = {
    'CS01': {
        'title': 'Khái niệm tiến trình',
        'index': [
            ['Giới thiệu', 'CS010', `
            <div>
                Thường dùng định nghĩa tiến trình như là một chương trình trong lúc chạy
            </div>
            `],
            ['Khối điều khiển tiến trình PCB', 'CS011', `
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
            ['Trạng thái của tiến trình', 'CS012', `
            <div>
                Khởi tạo (New): Tiến trình vừa được tạo.<br>
                Sẵn sàng (Ready): Tiến trình đã có đủ tài nguyên, chỉ còn cần CPU.<br>
                Thực hiện (Running): Các lệnh của tiến trình đang được thực thi.<br>
                Chờ/ dừng (Waiting/ Blocked): Tiến trình đợi I/O hoàn tất, tín hiệu.<br>
                Kết thúc (Terminated): Tiến trình đã kết thúc.<br>
                Biến đổi trạng thái của tiến trình: Chuyển đổi trạng thái giữa các tiến trình
            </div>
            <br>
            <img src="./assets/img/CS/2/cs021.jpg" style="width: 100%;" />
            `],
            ['Luồng', 'CS013', `
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
            ['Đa luồng', 'CS014', `
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
            ['Xử lý ngắt', 'CS015', `
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
            ['Đổi ngữ cảnh', 'CS016', `
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
            ['Thiết kế phân lớp', 'CS017', `
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
            ['Tiến trình đồng bộ', 'CS021', `
            <div>
            Các tiến trình gọi là đồng thời/tương tranh nếu các tiến trình đó tồn tại đồng thời. <br>
            Các tiến trình tương tranh (Concurent Process) có thể hoạt động hoàn toàn độc lập với nhau hoặc song song không đồng bộ asynchronous.
        </div>
            `],
            ['Xử lý song song', 'CS022', `
            <div>
                Các lệnh chỉ thị xử lý song song: Parbegin và Parend.
                Các chỉ thị này thường đi theo cặp:
                <ul>
                    <li>Chỉ thị đầu tiên chỉ ra rằng: Bắt đầu từ sau lệnh đó, chương trình được tách thành một số dòng điều khiển (Thread Control) thực hiện song song.</li>
                    <li>Chỉ thị thứ hai chỉ ra rằng: Từ đó chương trình lại được xử lý tuần tự</li>
                </ul>
            </div>
            `],
            ['Vùng tranh chấp', 'CS023', `
            Khi có một tiến trình nằm trong khoảng tới hạn => Không cho phép tiến trình được vào khoảng tới hạn;<br>
            Khi proces ra khỏi khoảng tới hạn => Một trong số các tiến trình đang chờ vào khoảng tới hạn phải được tiếp tục vào khoảng tới hạn;<br>
            Khi tiến trình ra khỏi khoảng tới hạn => Hệ điều hành phải kiểm soát được để huỷ bỏ chế độ tới hạn
            `]
        ]
    },
    'CS03': {
        'title': 'Tắc nghẽn (DEADLOCK)',
        'index': [
            ['Định nghĩa Deadlock', 'CS031', `
            <div>
                Trong hệ thống đa chương trình, một tiến trình nằm trong trạng thái Deadlock hay treo, nếu như nó chờ sự kiện (Event) nào đó không bao giờ xảy ra. <br>
                Tình huống treo hệ thống là tình huống có một hay nhiều tiến trình nằm trong trạng thái treo. <br>
                Ví dụ: Tình trạng tắc nghẽn giao thông
            </div>
            `],
            ['Điều kiện cần để xảy ra Deadlock', 'CS032', `
            <div>
                Các tiến trình yêu cầu quyền độc quyền sử dụng tài nguyên sẽ cấp phát cho nó (điều kiện loại trừ nhau).<br>
                Tiến trình giữ cho mình các tài nguyên đã được cấp và đồng thời yêu cầu tài nguyên bổ sung (điều kiện chờ tài nguyên).<br>
                Tài nguyên không được lấy lại từ tiến trình khi các tài nguyên đó chưa được sử dụng để kết thúc công việc (điều kiện không phân chia).<br>
                Tồn tại vòng kín các tiến trình, trong đó mỗi tiến trình giữ tài nguyên mà tiến trình kế tiếp đang đòi hỏi (điều kiện chờ vòng).
            </div>
            `],
            ['Phương pháp giải quyết Deadlock', 'CS033', `
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
    },
    'CS04': {
        'title': 'Video và ghi chú',
        'index': [
            ['Video bài giảng', 'CS041', `
                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai2/220101_Bai2_P1_v1.0.mp4" target="_blank">
                    Khái niệm tiến trình
                </a>
                <br>
                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai2/220101_Bai2_P2_v1.0.mp4" target="_blank">
                    Đồng bộ và giải quyết tranh chấp
                </a>
                <br>
                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai2/220101_Bai2_P3_v1.0.mp4" target="_blank">Tắc nghẽn</a>
                <br>
                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai2/220101_Bai2_P4_v1.0.mp4" target="_blank">Tắc nghẽn (tiếp theo)</a>
            `],
            ['Ghi chú', 'CS042', `
                
            `]
        ]
    }
};
