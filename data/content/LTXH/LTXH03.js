const LTXH03 = {
    LTXH01: {
        title: 'Mô hình mạng các hàng chờ',
        index: [
            ['Nội dung', 'LTXH011', `
                <ul>
                    <li>Mô hình mạng các hàng chờ (Queucing Network Modelling) là một tiếp cận của mô hình hệ thống máy tính (Computer System Modelling), trong đó hệ thống máy tính được biểu diễn dưới dạng một mạng các hàng chờ (Network of Queues) nhờ nó mà có thể đánh giá được hiệu năng của hệ thống máy tính</li>
                    <li>Một mạng các hàng chờ là một sơ đồ nối mạng các trung tâm phục vụ (Service Centers).</li>
                    <li>Các trung tâm phục vụ chứa toàn bộ các tài nguyên của hệ thống về phần cứng, phần mềm cũng như dữ liệu</li>
                    <li>Một trung tâm phục vụ thường ở hai dạng: 
                        <ul>
                            <li>(1) Hệ thống xếp hàng (Queucing System)</li>
                            <li>(2) Hệ thống trì hoãn (Delay System)</li>
                        </ul>
                    </li>
                </ul>
            `]
        ]
    },
    LTXH02: {
        title: 'Hệ thống trì hoãn',
        index: [
            ['Nội dung', 'LTXH021', `
                <ul>
                    <li>Hệ thống trì hoãn còn được gọi là hệ thống có số lượng hữu hạn khách hàng sử dụng đầu cuối (Terminals). Mỗi khách hàng trong hệ thống này hoàn toàn độc lập với khách hàng khác và không có hàng chờ, khách hàng cần phải suy nghĩ một thời gian (Think Time) trước khi thoát khỏi hệ thống này để đi vào một hệ thống có phục vụ và có hàng chờ</li>
                    <li>Sau khi hoàn tất các nhu cầu phục vụ khách hàng sẽ quay về hệ thống trì hoãn nơi mà khách hàng xuất phát và tiếp tục một chu kỳ mới</li>
                    <li>Thông thường các hệ thống đăng nhập cũng là các hệ thống trì hoãn</li>
                    <li>Đánh giá hiệu năng mạng được thực hiện sau khi mô hình hóa sự hoạt động của mạng các hàng chờ, từ đó xây dựng được một phương pháp tính toán các đặc trưng định lượng. Với các đặc trưng của mạng người ta có thể đánh giá được sự hoạt động của mạng và từ đó mà nhận định về hiệu năng của mạng.</li>
                </ul>
            `]
        ]
    },
    LTXH03: {
        title: 'Mạng đơn với một hàng chờ (Single Center Network)',
        index: [
            ['Giới thiệu', 'LTXH031', `
            <ul>
            <li>Mô hình: Mạng đơn với một hàng chờ hay còn được gọi là mạng với một trung tâm phục vụ (Single Center)
                <center>
                    <img style="width: 100%;" src="./assets/img/LTXH/chuong31.jpg" alt="chuong31">
                </center>
            </li>
            <li>Mô hình này có hai loại dữ liệu đầu vào:
                <ul>
                    <li>Cường độ lưu lượng (Workload Intensity) đầu vào: X, hay còn được hiểu là mật độ khách hàng tới hệ thống.</li>
                    <li>Yêu cầu phục vụ (Service Demand) hay Thời gian phục vụ trung bình một khách hàng: S</li>
                </ul>
            </li>
            <li>Các tham số đầu ra của mô hình mang đơn gồm:
                <ul>
                    <li>Chỉ số sử dụng mạng (Utilisation): U.</li>
                    <li>Thời gian đáp ứng (Response Time) hay Thời gian lưu trú (Residence Time) của một khách hàng (Customer) trong trung tâm phục vụ</li>
                    <li>Ký hiệu: R. Thời gian này còn được hiểu là thời gian trung bình ở trong hệ thống của một khách hàng.</li>
                    <li>Độ dài hàng (Queue Length) trong một trung tâm phục vụ hay số lượng khách hàng trung bình ở trong trung tâm: Q.</li>
                </ul>
            </li>
            <li>Đối chiếu các tham số tương đương từ hai mô hình
                <center>
                    <table>
                        <tr>
                            <th colspan="2">Mô hình mạng đơn</th>
                            <th colspan="2">Mô hình xếp hàng</th>
                        </tr>
                        <tr>
                            <td>Diễn giải</td>
                            <td>Tham số</td>
                            <td>Diễn giải</td>
                            <td>Tham số</td>
                        </tr>
                        <tr>
                            <td>Cường độ lưu lượng</td>
                            <td>X</td>
                            <td>&lambda;</td>
                            <td>Mật độ đầu vào</td>
                        </tr>
                        <tr>
                            <td>Yêu cầu phục vụ</td>
                            <td>S</td>
                            <td><span style="border-top: 1px solid black;">t<sub>s</sub></span></td>
                            <td>Thời gian phục vụ</td>
                        </tr>
                        <tr>
                            <td>Chỉ số sử dụng</td>
                            <td>U</td>
                            <td>&phi;</td>
                            <td>Hệ số sử dụng</td>
                        </tr>
                        <tr>
                            <td>Thời gian đáp ứng</td>
                            <td>R</td>
                            <td><span style="border-top: 1px solid black;">t</span></td>
                            <td>Thời gian trong hệ thống</td>
                        </tr>
                        <tr>
                            <td>Độ dài hàng</td>
                            <td>Q</td>
                            <td><span style="border-top: 1px solid black;">n</span></td>
                            <td>Số khách hàng trong hệ thống</td>
                        </tr>
                    </table>
                </center>
            </li>
            <li>Một số trung tâm phục vụ như kênh truyền tin với khách hàng là các thông báo (Message, viết tắt: msg) lại có dữ liệu đầu vào là độ dài trung bình L (bit) của thông báo và tốc độ truyền tin B (bps)</li>
            <li>Bps là viết tắt của cụm từ Bits per second (bit/giây)</li>
            <li>Thời gian phục vụ trung bình được tính theo công thức: <span style="border-top: 1px solid black;">t</span> = L/B</li>
        </ul>
            `],
            ['Tính huống: Mạng truyền tin với 1 kênh truyền', 'LTXH032', `
            <ul>
            <li>Xét một hệ thống truyền tin với một kênh truyền thông qua Modem.
                <br>
                Các thông số trên kênh được ghi nhận như sau:
                <ul>
                    <li>Tốc độ truyền tin của Modem: B = 9600 bps.</li>
                    <li>Thông báo được truyền trên mạng có độ dài trung bình: L = 3600 ký tự.
                        Mỗi ký tự có 8 bit,</li>
                    <li>Lưu lượng phát tin qua Modem là: X = 10 msg/ phút</li>
                </ul>
            </li>
            <li>Yêu cầu
                <ul>
                    <li>Tính chỉ số sử dụng kênh truyền: U.</li>
                    <li>Tính thời gian lưu trú trung bình một thông báo trên kênh: R.</li>
                    <li>Tính xác suất để có ít nhất có một thông báo cần truyền: p(N&ge;1), N là số thông báo cần truyền,</li>
                </ul>
            </li>
            <li><span style="border-top: 1px solid black;">t</span> = L/B = 28000/9600 = 3 (s)</li>
            <li>Từ mô hình M/M/1 ta suy ra các kết quả lần lượt:
                <ul>
                    <li>&phi; = &lambda;<span style="border-top: 1px solid black;">t</span> = (1/6)*3 = 1/2</li>
                    <li><span style="border-top: 1px solid black;">n</span> = &phi;/(1-&phi;) = 1 (msg) => <span style="border-top: 1px solid black;">t</span> = <span style="border-top: 1px solid black;">n</span>/&lambda; = 1/(1/6) = 6 (s)</li>
                    <li>q<sub>0</sub> = 1 - &phi; = 1/2 => p(N &ge; 1) = 1 - q<sub>0</sub> = 1/2</li>
                    <li>Đối chiếu với các tham số của mạng truyền tin ta có: <br> U = &phi; = 1/2, R = <span style="border-top: 1px solid black;">t</span> = 6 (s) và p(N &ge; 1) = 1/2</li>
                </ul>
            </li>
        </ul>
            `]
        ]
    },
    LTXH05: {
        title: 'Mạng đa liên kết các trung tâm phục vụ',
        index: [
            ['Giới thiệu', 'LTXH051', `
            <p>Trong thực tế, mô hình một trung tâm phục vụ quá đặc biệt và chỉ là mô hình cơ bản để mở rộng cho các tình huống thường xảy ra hơn, Hình 3.2 là sơ đồ của mô hình 1 CPU và 3 đĩa tài nguyên.</p>
            <center>
                <img style="width: 100%;" src="./assets/img/LTXH/chuong32.jpg" alt="chuong32">
            </center>
            `],
            ['Mô hình tổng quát', 'LTXH052', `
                <ul>
                    <li>Hệ thống nối mạng các trung tâm phục vụ được phân loại thành 3 lớp:
                        <ol>
                            <li>Lớp thứ nhất: Mạng phân nhánh và nối kết (Fork-Joint Network). Mạng này có một
                                trung tâm phục vụ chính điều phối các lưu lượng (Workload) các công việc hay
                                khách hàng tới các trung tâm phục vụ khác là một ví dụ của mạng phân nhánh và
                                nối kết). Một công việc (Job) khi vào Trung tâm điều phối sẽ được xem xét và xử lý.
                                Nếu nó có yêu cầu kết nối với các trung tâm khác sẽ được Trung tâm điều hành gửi
                                tới trung tâm tương ứng để xử lý. Các yêu cầu xuất phát từ một công việc còn được
                                gọi là các công việc con (Sub-jobs hay Siblings). Sau khi hoàn tất xử lý, các công việc
                                con sẽ trở về Trung tâm điều hành đề được đồng bộ hóa và hoàn thiện xử lý công
                                việc.</li>
                            <li>Lớp thứ hai: Mạng xếp hàng mở (Open Quencing Network) còn được gọi là Mạng
                                Jackson (Jackson’s Network Khách hàng đi tới mạng từ bên ngoài hay từ Mạng
                                nguồn (Mạng s) và tạo thành lưu lượng đi tới hệ thống với một phân phối ngẫu
                                nhiên q, (i có thể chạy trên nhiều trung tâm khác nhau trong hệ thống). Nói chung,
                                một khách hàng di chuyển trong mạng được phân phối ngẫu nhiên tới một trung
                                tâm phục vụ nào đó để xử lý, sau đó: hoặc “thất lạc” đi ra khỏi mạng và xem như tới
                                Mạng đích (Mạng d), hoặc được phân phối ngẫu nhiên tiếp tới một trung tâm phục
                                vụ khác.</li>
                            <li>Lớp thứ ba: Mạng xếp hàng đóng (Close Queucing Network) còn được gọi là Mạng
                                Gordon & Newell (Gordon & Newell Network) hay Mạng Tuần hoàn (Cyclic
                                Queueing Network) . Đối với mạng này quần thể khách hàng được giới hạn bởi M
                                khách hàng sử dụng đầu cuối (Terminals). Mỗi khách hàng trước khi đi vào mạng
                                đều cần một lượng thời gian suy nghĩ (Think Time). M khách hàng đầu cuối sau khi
                                suy nghĩ sẽ tạo ra một lưu lượng truy cập ngẫu nhiên đến các trung tâm khác nhau
                                trong mạng để được xử lý. Mỗi khách hàng di chuyển trong mạng đóng sẽ được
                                phân phối ngẫu nhiên đến một trung tâm phục vụ và sau đó cũng có thể được phân
                                phối ngẫu nhiên tới các trung tâm phục vụ khác trước khi trả về nơi nó xuất phát.</li>
                            <li>Ví dụ mô hình mạng mở Jackson
                                <center>
                                    <img style="width: 100%;" src="./assets/img/LTXH/chuong33.jpg" alt="chuong33">
                                </center>
                            </li>
                            <li>
                                Ví dụ mô hình mạng đóng Gordon - Newell
                                <center>
                                    <img style="width: 100%;" src="./assets/img/LTXH/chuong34.jpg" alt="chuong34">
                                </center>
                            </li>
                        </ol>
                    </li>
                </ul>
            `],
            ['3 loại mạng theo lưu lượng khách hàng lưu thông', 'LTXH053', `
                <ul>
                    <li>Ký hiệu theo mô hình mạng
                        <br>
                        Cường độ của lưu lượng khách hàng tới được xác định bởi một trong các tham số:
                        <ul>
                            <li>(1) Lưu lượng giao dịch (Transaction Workload): X.</li>
                            <li>(2) Số lượng trung bình Q các khách hàng lưu thông trên mạng hay còn được gọi là
                                lưu lượng lô (Batch Workloads). Nói chung Q không phải là số nguyên.</li>
                            <li>(3) Cặp giá trị (Q, Z), trong đó:
                                <br>
                                <ul>
                                    <li>Q là số lượng trung bình khách hàng (không nguyên) đi vào mạng từ N khách
                                        hàng đầu cuối</li>
                                    <li>Z là thời gian suy nghĩ trung bình (Average Think Time) của một khách hàng tại
                                        thiết bị đầu cuối (Teminal) trước khi đi vào mạng.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>Khách hàng: Cường độ lưu lượng công việc (Workload Intensity) được diễn giải một
                        cách phù hợp theo tình huống của mạng:</li>
                    <li>Mỗi lưu lượng giao dịch có một cường độ: X.</li>
                    <li>Một lưu lượng lô là số lượng trung bình N khách hàng đi vào hệ thống từ một quần thể
                        cố định. Nói chung số N không nguyên (vì đây là giá trị trung bình).</li>
                    <li>Một lưu lượng đầu cuối (Terminal Workload) có cường độ được chuyên biệt theo hai
                        tham số: (i) Q số lượng khách hàng trung bình đang hoạt động trong hệ thống (xuất
                        phát tử N khách hàng sử dụng đầu cuối, nên Q ≤ N và có giá trị không nguyên) và (i) Z
                        thời gian trung bình phải “tư duy” trước khi thực hiện yêu cầu đi vào hệ thống, còn
                        được gọi là thời gian suy nghĩ (Think Time) của khách hàng.</li>
                </ul>
            `],
            ['Đầu vào của mô hình là Khách hàng', 'LTXH054', `
                <ul>
                    <li>Ký hiệu theo mô hình mạng
                        <br>
                        Cường độ của lưu lượng khách hàng tới được xác định bởi một trong các tham số:
                        <ul>
                            <li>(1) Lưu lượng giao dịch (Transaction Workload): X.</li>
                            <li>(2) Số lượng trung bình Q các khách hàng lưu thông trên mạng hay còn được gọi là
                                lưu lượng lô (Batch Workloads). Nói chung Q không phải là số nguyên.</li>
                            <li>(3) Cặp giá trị (Q, Z), trong đó:
                                <br>
                                <ul>
                                    <li>Q là số lượng trung bình khách hàng (không nguyên) đi vào mạng từ N khách
                                        hàng đầu cuối,/li>
                                    <li>Z là thời gian suy nghĩ trung bình (Average Think Time) của một khách hàng tại
                                        thiết bị đầu cuối (Teminal) trước khi đi vào mạng.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>Khách hàng: Cường độ lưu lượng công việc (Workload Intensity) được diễn giải một
                        cách phù hợp theo tình huống của mạng:</li>
                    <li>Mỗi lưu lượng giao dịch có một cường độ: X.</li>
                    <li>Một lưu lượng lô là số lượng trung bình N khách hàng đi vào hệ thống từ một quần thể
                        cố định. Nói chung số N không nguyên (vì đây là giá trị trung bình).</li>
                    <li>Một lưu lượng đầu cuối (Terminal Workload) có cường độ được chuyên biệt theo hai
                        tham số: (i) Q số lượng khách hàng trung bình đang hoạt động trong hệ thống (xuất
                        phát tử N khách hàng sử dụng đầu cuối, nên Q ≤ N và có giá trị không nguyên) và (i) Z
                        thời gian trung bình phải “tư duy” trước khi thực hiện yêu cầu đi vào hệ thống, còn
                        được gọi là thời gian suy nghĩ (Think Time) của khách hàng.</li>
                </ul>`
            ],
            ['Đầu vào của mô hình là Trung tâm phục vụ', 'LTXH055', `
                <ul>
                    <li>Tham số cho các trung tâm phục vụ gồm:
                        <ul>
                            <li>(1) Số lượng K các trung tâm phục vụ.</li>
                            <li>(2) Đối với mỗi trung tâm phục vụ thứ k:
                                <ul>
                                    <li>Phân loại trung tâm: Xếp hàng (Queneing) hay Có độ trễ (Delay).</li>
                                    <li>Lưu lượng thông qua trung tâm (Throughput): X<sub>k</sub></li>
                                    <li>Thời gian phục vụ trung bình: S<sub>k</sub></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>Trung tâm phục vụ có 2 dạng:
                        <center>
                            <img style="width: 100%;" src="./assets/img/LTXH/chuong35.jpg" alt="chuong35">
                        </center>
                    </li>
                    <li>Yêu cầu phục vụ: <br>
                        Đối với mỗi trung tâm phục vụ, yêu cầu phục vụ được đo bằng tổng thời
                        gian D xử lý một công việc. Tại trung tâm k, tổng thời gian phục vụ là 
                        <center>
                            D<sub>k</sub> = V<sub>k</sub>S<sub>k</sub>
                        </center>
                        <br>
                        Trong đó V<sub>k</sub> là số lần mà một công việc hoặc công việc con của nó được xử lý tại hay còn được gọi là số lần viếng thăm (Visit Number) của một khách hàng tại trung tâm k.
                    </li>
                    <li>
                        Đầu ra của mô hình là các tham số đặc trưng của mô hình và thông qua giá trị của nó mà người ta có thể đánh giá được mô hình
                    </li>
                    <li>Các tham số chung:
                        <ul>
                            <li>R: Thời gian đáp ứng (Response Time) trung bình của mạng.</li>
                            <li>X: Lưu lượng trung bình thông qua mạng (Network
                                Throughput)</li>
                            <li>Q: Số khách hàng trung bình trên toàn mạng</li>
                        </ul>
                    </li>
                    <li>Các tham số riêng trên từng trung tâm phục vụ:
                        <ul>
                            <li>U: Chỉ số sử dụng trung tâm thứ k</li>
                            <li>R<sub>k</sub>: Thời gian lưu trú (Residence Time) trung bình của một</li>
                            <li>X. Lưu lượng trung bình (Throughput) số khách hàng hoàn
                                trung tâm | tất dịch vụ tại trung tâm thứ k, hay còn được gọi là
                                lưu lượng phục vụ thông qua trung tâm thứ k.</li>
                            <li>Q<sub>k</sub>: Độ dài hàng trung bình (Queue Length) tại trung tâm thứ k.</li>
                        </ul>
                    </li>
                    <li>Các tham số đầu ra phụ thuộc vào các tham số đầu vào và đặc
                        biệt là phụ thuộc vào cường độ lưu lượng ở đầu vào.
                        <ul>
                            <li>Nếu cường độ lưu lượng đầu vào là N (số khách hàng trong hệ
                                thống) thì lưu lượng thông qua mạng được tính thông qua
                                hàm số X(N).</li>
                            <li>Nếu cường độ lưu lượng là X thì ta lại có số lượng khách hàng
                                trong mạng N = Q lại là hàm số dưới dạng Q(X).</li>
                        </ul>
                    </li>
                    <li>Chỉ số sử dụng (Utilisation) U<sub>k</sub> là tỷ lệ thời gian bận của trạm phục vụ tại trung tâm thứ k. Nếu T là khoảng thời gian quan sát và B<sub>k</sub> là tổng thời gian "bận" của Trung tâm trong khoảng T. Từ cách nhìn khác thì By cũng là tổng thời gian phục vụ tất cả các khách hàng, khi đó: U = B<sub>k</sub>/T</li>
                    <li>Thời gian lưu trú (Residence Time) và thời gian đáp ứng (Response Time): <br>
                        Nếu xét trên một mạng đơn với một trung tâm phục vụ thì thời gian lưu trú gồm thời gian chờ và thời gian được phục vụ cũng chính là thời gian một khách hàng phải bỏ ra để hoàn tất yêu cầu của mình trên mạng và đây cũng là thời gian đáp ứng của mạng cho một khách hàng. Nhưng nếu mạng gồm nhiều trung tâm dịch vụ thì tại trung tâm thứ k thời gian lưu trú tại đây Ra lại là tổng thời gian khách hàng phải bỏ ra tại trung tâm thứ k.</li>
                    <li>Thời gian đáp ứng của mạng cho khách hàng là tổng của tất cả các thời gian lưu trú tại tất cả các trung tâm trong mạng.</li>
                    <li>Lưu lượng thông qua mạng: đại lượng này có dạng rất đơn giản trong trường hợp của mạng đơn. Trong trường hợp tổng quát thì lưu lượng này không rõ ràng vì bị thay đổi thông qua mỗi trung tâm trên mạng. Giả sử nếu từ các dữ liệu đầu vào tính được thời gian đáp ứng trên mạng là R thì theo luật Little ta có thể suy ra ngay X = Q/R. Trong nhiều trường hợp mô hình đầu vào chỉ có Dk (tổng thời gian phục vụ một khách hàng tại trung tâm thứ k) khi đó ta chỉ tính được D, sau đó Q và X mà không thể tính được lưu lượng X<sub>k</sub></li>
                    <li>Để tính được lưu lượng thông qua tại trung tâm thứ k thì mô hình đầu vào phải có: V<sub>k</sub> và S<sub>k</sub>. Khi đó, luật ép luồng (Forced Flow Law) được áp dụng tại trung tâm k: X = V<sub>k</sub>X</li>
                    <li>(4) Độ dài hàng (Queue Length): độ dài hàng tại trung tâm thứ k (Q) là cách gọi khác của số lượng khách hàng trong trung tâm thứ k bao gồm cả khách hàng xếp hàng và khách hàng được phục vụ. Giả sử Q là số lượng khách hang trung bình trên toàn mạng. Ta có thể tính được Q trong từng trường hợp đặc thù của mạng:
                        <ul>
                            <li>Mạng với lưu lượng lô (Batch Workload): Q=N (mô hình đầu vào).</li>
                            <li>Mạng với lưu lượng giao dịch (Transaction Workload): Q (luật Little).</li>
                        </ul>
                    </li>
                    <li>Mạng với trung tâm có độ trễ (Delay Sevice Center) hay mạng đóng Q=N-XZ, do Q=XR, còn R = NX - Z. Nếu đặt T là thời gian lưu trú Gorden & Newell với N khách hàng đầu cuối (N Terminals). của khách hàng ở trong hệ thống thì theo luật Little: T = N/X và ta cũng có: R = T-Z</li>
                </ul>
            `],
            ['Tình huống: Máy tính với hai thiết bị ngoại vi', 'LTXH056', `
                <ul>
                    <li>Xét một mạng máy tính kết nối máy tính chủ với 2 thiết bị ngoại vi, đĩa cứng lưu dữ liệu và Máy in.</li>
                    <li>Mỗi giao dịch có thể sinh các giao dịch con tới các thiết bị ngoại vi. Các giao dịch con này còn được gọi là truy cập (Access). Số lần truy cập trung bình trên một giao dịch tại một thiết bị có thể hiểu là số lần viếng thăm của giao dịch đó.</li>
                    <li>Mỗi giao dịch tại máy chủ sinh trung bình V = 20 truy cập (Access) đĩa dữ liệu. Chỉ số sử dụng của đĩa là U, = 50%. Thời gian xử lý trung bình một truy cập tại đĩa là: S=0,025 s. Có N 25 giao dịch sử dụng đầu cuối. Thời gian “suy nghĩ” trung bình của một giao dịch đầu cuối là: Z=18s Tính cường độ lưu lượng Xo tại máy chủ, thời gian đáp ứng R của mạng và số lượng giao dịch Q lưu thông trên Mạng.
                        <center>
                            <img style="width: 100%;" src="./assets/img/LTXH/chuong36.jpg" alt="">
                        </center>
                    </li>
                    <li>
                        X = X<sub>0</sub> và N = Q + M
                        <br>
                        Theo luật ép luồng X<sub>1</sub> = V<sub>1</sub>X<sub>0</sub>
                        <br>
                        X<sub>0</sub> = X<sub>1</sub>/V<sub>1</sub> = U<sub>1</sub>/S<sub>1</sub>.V<sub>1</sub>
                        <br>
                        X<sub>0</sub> = 0.5/0.025x20 = 1 (giao dịch)
                        <br>
                        R = N/X<sub>0</sub> - Z = (25/1)-18 = 7s và Q = X<sub>0</sub>R = 7 giao dịch
                    </li>
                </ul>
            `]
        ]
    },
    LTXH11: {
        title: 'Ứng dụng mô hình xếp hàng',
        index: [
            ['Dữ liệu đầu vào','LTXH111',`
                <ul>
                    <li>Khi mạng các hàng chờ chấp nhận nhiều thành phần khách hàng thì các trung tâm phục vụ phải chia sẻ phục vụ cho các thành phần khách hàng khác nhau. Trường hợp này mạng còn được gọi là Mạng đa lớp hay còn được gọi Hệ thống chia sẻ thời gian phục vụ (Time Sharing System).</li>
                    <li>Như vậy, mô hình Mạng da lớp là một mô hình mạng liên kết các trung tâm phục vụ để cùng chia sẻ thời gian phục vụ cho nhiều lớp khách hàng khác nhau. Khách hàng đầu vào được phân ra C lớp khác nhau.</li>
                    <li>Lớp khách hàng thứ c có cường độ lưu lượng riêng: Xo, hay No, hay N. và Z; và thời gian phục vụ tại trung tâm thứ k: Dak. Như vậy mô hình Mạng đa lớp đều có thể xét trong từng trường hợp mạng mở (Opened Network) với lưu lượng giao dịch, hay mạng đóng (Closed Network) với lưu lượng lô hoặc có độ trễ, hay mạng hỗn hợp vừa mở vừa đóng (Mixed Network).
                    </li>
                    <li>Như vậy: cường độ lưu lượng của mỗi lớp được phân thành bốn dạng dẫn đến cường độ lưu lượng của tất cả các lớp sẽ là các vector dưới bốn dạng:
                        <ul>
                            <li>Trường hợp mạng đa lớp với lưu lượng giao dịch: X = (X<sub>1</sub>,...,X<sub>c</sub>)</li>
                            <li>Trường hợp mạng đa lớp với lưu lượng lô: N = (N<sub>1</sub>,...,N<sub>c</sub>)</li>
                            <li>Trường hợp mạng đa lớp với N đầu cuối có độ trễ: N = (N<sub>1</sub>, ..., N<sub>c</sub>) và Z(Z<sub>1</sub>,...,Z<sub>c</sub>)</li>
                            <li>Trường hợp mạng đa lớp hỗn hợp: I=N hoặc X hoặc Z.</li>
                        </ul>
                    </li>
                    <li>Kết quả các tham số đầu vào: Khách hàng (C, X<sub>c</sub>, N<sub>c</sub>, Z<sub>c</sub>), Trung tâm phục vụ (K), Yêu cầu phục vụ (D<sub>c,k</sub> = V<sub>c,k</sub>S<sub>c,k</sub></li>
                    <li>Tham số đầu ra:
                        <ul>
                            <li>Tham số chung trên toàn mạng:
                                <ul>
                                    <li>Tổng hợp các lớp: R, X, Q</li>
                                    <li>Riêng từng lớp: R<sub>c</sub>, X<sub>c</sub>, Q<sub>c</sub></li>
                                </ul>
                            </li>
                            <li>Tham số riêng trên từng trung tâm phục vụ:
                                <ul>
                                    <li>Tổng hợp các lớp tại trung tâm k (U<sub>k</sub>, R<sub>k</sub>, X<sub>k</sub>, Q<sub>k</sub>)</li>
                                    <li>Riêng từng lớp tại trung tâm k (U<sub>c,k</sub>, R<sub>c,k</sub>, X<sub>c,k</sub>, Q<sub>k</sub>)</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            
            `],
            ['Tham số đầu ra', 'LTXH112', `  
                <ul>
                    <li>Như đã thấy trong trường hợp mạng đơn với một hàng chờ, mô hình của mạng đơn và
                        mô hình xếp hàng là như nhau và chỉ khác ký hiệu, do đó ta đã xây dựng bảng đối chiếu
                        ký hiệu để thuận tiện cho việc ứng dụng mô hình xếp hàng trong tính toán</li>
                    <li>Trường hợp tổng quát, người ta cũng có thể tính được các tham số đầu ra dựa vào một
                        số luật cơ bản: luật về chỉ số sử dụng, luật Little, luật ép luồng và luật cân bằng luồng Ở
                        các phần ví dụ về tính toán các tham số đầu ra của mạng, chúng ta phải sử dụng cường
                        độ lưu lượng theo lô đổi với mạng đóng. Do dữ liệu đầu vào của mạng đóng đã có N số
                        khách hang trung bình trong hệ thống nên dễ dàng suy ra thời gian đáp ứng của mạng.</li>
                    <li>Nhưng đối với trường mạng mở thì vấn đề này trở nên phức tạp không dễ dàng tính
                        toán thời gian đáp ứng chỉ dựa vào một số luật cơ bản. Điều này dẫn đến phương pháp
                        đưa mô hình xếp hàng vào hỗ trợ tính toán các tham số cho một mạng bất kỳ các hàng
                        chờ.</li>
                    <li>Bảng đối chiếu các tham số
                        <center>
                            <img style="width: 100%;" src="./assets/img/LTXH/chuong37.jpg" alt="chuong37">
                        </center>
                    </li>
                </ul>
            `]
        ]
    },
    LTXH12: {
        title: 'Ví dụ',
        index: [
            ['Nội dung', 'LTXH121', `
            <p>Một luồng gói đến một thiết bị chuyển mạch gói với tốc độ trung bình là 180 packets/minute. Chiều dài gói trung bình là 1000 byte. Tốc độ của dòng số đầu ra là 20000byte/s. Giả thiết dung lượng đệm là đủ lớn. Hãy tính thời gian trễ trung bình tại hệ thống, số bản tin trung bình trong mỗi hệ thống, chiều dài hàng đợi và thời gian đợi trung bình. Hãy tính tốc độ đến 𝜆, thời gian phục vụ trung bình 𝜇, mật độ lưu lượng 𝜑, thời gian trong hệ thống,</p>
            `]
        ]
    },
    LTXH13: {
        title: 'Ý nghĩa một số ký hiệu',
        index: [
            ['Nội dung', 'LTXH131', `
                <center>
                    <img style="width: 100%;" src="./assets/img/LTXH/chuong38.jpg" alt="chuong38">
                </center>
            `]
        ]
    },
    LTXH14: {
        title: 'Gợi ý',
        index: [
            ['Nội dung', 'LTXH141', `
                <ul>
                    <li>Tốc độ đến &lambda; = 240/60= 4 </li>
                    <li>Thời gian phục vụ trung bình &micro;=500/100=5</li>
                    <li>Mật độ lưu lượng &phi;=&lambda;/&micro;=4/5=0.8</li>
                    <li>Số bản tin trong hệ thống: <span style="border-top: 1px solid black;">n</span>=(1/1-&phi;)*(0.8/1-0.8)=4</li>
                    <li>Thời gian trong hệ thống = <span style="border-top: 1px solid black;">t</span>=<span style="border-top: 1px solid black;">n</span>/&lambda;=4/4=1</li>
                    <li>Chiều dài hàng đợi: &phi;<sup>2</sup>/1-&phi; = 3.2</li>
                </ul>
            `]
        ]
    }
};