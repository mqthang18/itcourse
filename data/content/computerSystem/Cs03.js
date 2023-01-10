const CS03 = {
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
    },
    'CS04': {
        'title': 'Video và ghi chú',
        'index': [
            ['Video','CS041', `
                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai3/220101_Bai3_P1_v1.0.mp4" target="_blank">
                    Các khái niệm cơ bản và tiêu chuẩn lập lịch
                </a>
                <br>
                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai3/220101_Bai3_P2_v1.0.mp4" target="_blank">
                    Các thuật toán lập lịch và đánh giá thuật toán
                </a>
                <br>
                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai3/220101_Bai3_P3_v1.0.mp4" target="_blank">
                    Các thuật toán lập lịch và đánh giá thuật toán (tiếp theo)
                </a>
            `]
        ]
    }
};

