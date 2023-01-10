const LTXH02 = {
    LTXH01: {
        title: `Hệ thống xếp hàng`,
        index: [
            ['Giới thiệu và ý nghĩa', 'LTXH011', `
                <ul>
                        <li>Hế thống xếp hàng (Queueing System) - "Hệ thống phục vụ đám đông"</li>
                        <li>Ý nghĩa của bài toàn được phản ánh từ cái tên gọi: 'Xếp hàng là quy tắc Phục vụ một đám đông
                            cùng có một nhu cầu'</li>
                </ul>
            `],
            ['Ví dụ và vấn đề đặt ra', 'LTXH012', `
                <ul>
                    <li>Ví dụ: Khách hàng sắp hàng mua xăng</li>
                    <li>Vấn đề đặt ra là đánh giá một hệ thống xếp hàng như thế nào khi có đông khách hàng và dẫn đến sự
                        quá tải trong phục vụ?</li>
                </ul>
                <hr style="border: 4px solid black;">
                <ul>
                    <li>
                        Bài toán đặt ra
                        <ul>
                            <li>Các đặc trưng của hiện tượng quá tải là gì?</li>
                            <li>Tính toán và đánh giá hiện tượng quá tải qua các đặc trưng đó? và </li>
                            <li>Biện pháp giải quyết như thế nào?</li>
                        </ul>
                    </li>
                    <li>Hệ thống xếp hàng đặt ra một bài toán phức tạp và được xây dựng thành một lý thuyết có tên là Lý
                        thuyết Xếp hàng (Queueing theory)</li>
                    <li>Lý thuyết xếp hàng sẽ đi sâu phân tích ba quá trình ngẫu nhiên gắn liền với nhau theo trình tự:
                        <ul>
                            <li>Khách hàng đi đến hệ thống với một mật độ ngẫu nhiên ở cuối hàng chờ (Back of the Queue)
                            </li>
                            <li>Khách hàng chờ trước khi được phục vụ (Waiting in the Queue), và</li>
                            <li>Khách hàng được phục vụ với thời lượng ngẫu nhiên ở đầu hàng chờ (Front of the Queue)
                            </li>
                        </ul>
                    </li>
                    <li>Kết quả của phân tích này chính là mục tiêu của Lý thuyết xếp hàng</li>
                </ul>
            `]
        ]
    },
    LTXH02: {
        title: 'Ứng dụng hệ thống xếp hàng',
        index: [
            ['Một số ứng dụng', 'LTXH021', `
                <ul>
                    <li>Hệ thống tính tiền tại các siêu thị</li>
                    <li>Hệ thống mạng máy tính</li>
                    <li>Hệ thống quản lý đường bay hạ cánh</li>
                    <li>Hệ thống tính toán đám mây</li>
                    <li>Hệ thống điều khiển lưu thông tại các xa lộ</li>
                </ul>
            `]
        ]
    },
    LTXH03: {
        title: 'Ký pháp Kendall',
        index: [
            ['Mô tả hệ thống', 'LTXH031', `
                <center>
                    <img src="./assets/img/LTXH/Kendal1.jpg" alt="Kendall">
                </center>
                <ul>
                    <li>
                        <b>Khi hệ thống hoạt động cần có các yếu tố sau tham gia:</b>
                        <ul>
                            <li>Khách hàng (Client/Customer) có nhu cầu đi tới hệ thống để được đáp ứng</li>
                            <li>Nguồn gốc của khách hàng phải là một quần thể tiềm (Potential Population) đủ lớn
                                để có thể tạo ra được một lượng khách hàng thường xuyên đi tới hệ thống</li>
                            <li>Hệ thống phải có một hoặc nhiều trạm phục vụ (Service stations) để đáp ứng nhu
                                cầu của khách hàng. Mỗi khách hàng cần được phục vụ trong một khoảng thời gian
                                (Service Time) nào đó.</li>
                            <li>Khi một khách hàng được phục vụ chưa chưa ra khỏi hệ thống đã có một lượng khách
                                hàng khác tới, thì số khách hàng này phải xếp hàng vào tạo ra một hàng chờ
                                (Queue Line). Như vậy, hệ thống phải có một khu vực dành cho khách hàng chờ.
                            </li>
                            <li>Khách hàng trong hàng chờ sẽ được phục vụ theo quy tắc (Discipline) nhất định.
                                Chẳng hạn: "Tới trước phục vụ trươc", "Tới sau phục vụ trước", "Khách hàng ưu
                                tiên được phục vụ trước", ..</li>
                        </ul>
                    </li>
                </ul>
            `],
            ['Các quy tắc ảnh hưởng', 'LTXH032', `
                <ul>
                    <li>Khách hàng có nhu cầu đi tới hệ thống làm phát sinh sự hoạt động của nó</li>
                    <li>Khách hàng phát sinh phải có nguồn gốc</li>
                    <li>Khách hàng tới hệ thống và được đáp ứng tại các trạm phục vụ</li>
                    <li>Khi khách hàng vào hệ thống và phải chờ, nó sẽ tạo ra một hàng chờ trong khu vực khách
                        hàng</li>
                </ul>
            `],
            ['Quy tắc phục vụ khách hàng', 'LTXH033', `
                <ul>
                    <li>FIFO/FCFS: First In First Out, First come First serve</li>
                    <li>LIFO, LCFS: Last In, First Out; Last Come First Serve</li>
                    <li>SIRO: Service in Random Order</li>
                    <li>PNPN: Priority service</li>
                    <li>PS: Processor Sharing</li>
                </ul>
            `],
            ['Ký pháp Kendall', 'LTXH034', `
                <p>Ký pháp Kendall là một hệ thống chuẩn được sử dụng để mô tả và phân loại mô hình xếp hàng cho
                phù hợp với một hệ thống xếp hàng. Hệ thống đầy đủ gồm 6 yếu tố được biểu diễn theo thứ tự
                quan trọng dưới dạng: A/B/s/K/N/Z, trong đó:</p>
                <ul>
                    <li>A: là quá trình khách hàng tới được đặc trưng bởi mật độ X ở đầu vào.</li>
                    <li>B: là quá trình khách hàng ra được đặc trưng bởi thời gian T<sub>s</sub> phục vụ một
                        hàng</li>
                    <li>s: Số trạm phục vụ khách hàng trong hệ thống</li>
                    <li>K: sức chứa của hệ thống</li>
                    <li>N: Số cá thể trong quần thể tiềm năng</li>
                    <li>Z: Qui tắc phục vụ của hệ thống</li>
                </ul>
            `]
        ]
    },
    LTXH04: {
        title: 'Mô hình M/M/1',
        index: [
            ['Mô tả hệ thống', 'LTXH041', `
                <ul>
                    <li>Hoạt động với một trạm phục vụ khách hàng có nhu cầu A nào. Giả sử số lượng khách hàng
                        phát sinh ngẫu nhiên từ một quần thể đồng đều và có tần số trung bình là &lambda;. Cũng
                        tương tự như vậy ở đầu ra của hệ thống mỗi khách hàng đều được phục vụ sau một thời gian
                        ngẫu nhiên và đi ra với mật độ trung bình &micro; với điều kiện trong hệ thống còn khách
                        hàng</li>
                    <li>Khi đó mô hình biểu diễn hệ thống theo ký pháp Kendall có dạng: M/M/1</li>
                </ul>
                <center>
                    <img src="./assets/img/LTXH/MM1_1.jpg" alt="MM1_1">
                </center>
                <hr>
                <h5>Ý nghĩa một số ký hiệu</h5>
                <center>
                    <img style="width: 100%;" src="./assets/img/LTXH/Ynghiamotsothongso.jpg" alt="">
                </center>
            `],
            ['Phân phối số khác hàng trong hệ thống', 'LTXH042', `
                <p>
                    Gọi {N<sub>t</sub>}<sub>t&isin;T</sub> là quá trình ngẫu nhiên phát sinh một số khách hàng
                    trong hệ thống. Người ta cũng chỉ ra rằng đây là một xích Markov và thỏa các điều kiện dùng.
                    Giả sử rằng biến dùng {N<sub>t</sub>}<sub>t&isin;T</sub>. Bài toán ở đây là tìm phân phối
                    của biến dùng N.
                </p>
                <p>Giả sử: &lambda;&lt;1 và &micro;&lt;1. Như vậy đơn vị thời gian hợp lý thì &micro;
                <ul>
                    <li>Xác xuất để hệ thống có thêm &lambda; khách hàng là A</li>
                    <li>Xác xuất để hệ thống giảm bớt 1 khách hàng là &micro; với điều kiện có khách hàng trong
                        hệ thống</li>
                </ul>
                </p>
                <p>
                    Phương pháp tìm phân phối của N, số khách hàng trong hệ thống sẽ dựa vào đồ thị cân bằng
                    ngẫu nhiên và từ đó có thể viết ra hệ phương trình C-K. Các đặc trưng trung bình khác của hệ
                    thống tính từ phân phối của N
                </p>
            `],
            ['Đồ thị cân bằng', 'LTXH043', `
                <p>Đặt N là số khách hàng ngẫu nhiên trong hệ thống ở trạng thái dừng. Giá trị phát sinh của N
                cũng là trạng thái của không gian E={0,4,...,k-1, k, k+1}, hay ta còn viết N=k&isin;E. Khi
                đó, các tham số của đồ thị cân bằng ngẫu nhiên biểu diễn trạng thái dùng của hệ thống như
                sau:
                    <ol>
                        <li>Sau một đơn vị thời gian, xác xuất tăng 1 khách hàng với mật độ là A</li>
                        <li>Sau một đơn vị thời gian, xác xuất giảm 1 khách hàng với mật độ là &micro; khi trong hệ
                            thống vẫn còn khách hàng</li>
                        <li>Nếu hệ thống đạt chế độ dừng, thì phân phối dùng của số khách hàng trong hệ thống là
                            P(N=i) = q<sub>i</sub>, i = 0, 1, 2,..., n,...</li>
                    </ol>
                </p>
                <center>
                    <img src="./assets/img/LTXH/DoThiCanBang1.jpg" alt="DoThiCanBang">
                </center>
            `],
            ['Sáu đặc trưng cơ bản', 'LTXH044', `
                <p>Mỗi hệ thống xếp hàng có 6 đặc trưng cơ bản (số lượng trung bình, thời gian trung bình)</p>
                <ul>
                    <ol>
                        <li>Cặp đặc trưng (<span style="border-top: 1px solid black;">n</span>,<span
                                style="border-top: 1px solid black;">t</span>) = (số khách hàng trung bình trong
                            hệ thống thời gian trung bình ở trong hệ thống của một khách hàng). Thời gian trung
                            bình ở trong hệ thống của một khách hàng được tính từ lúc khách hàng xuất hiện đi
                            vào hệ thống đến khi được phục vụ xong và đi ra</li>
                        <li>Cặp đặc trưng (<span style="border-top: 1px solid black;">m</span>, <span
                                style="border-top: 1px solid black;">t<sub>f</sub></span> = (số khách hàng trung
                            bình ở trong hàng đợi thời gian trung bình ở trong hàng đợi của một khách hàng).
                            Trong hệ thống có một trạm phục vụ nên nếu số khách hàng vượt quá 1 thì khách hàng
                            thứ 2 trở đi sẽ phải xếp hàng và trạm phục vụ sẽ phục vụ theo quy tắc FIFO</li>
                        <li>Cặp đặc trưng (<span style="border-top: 1px solid black;">g</span>, <span
                                style="border-top: 1px solid black;">t<sub>s</sub></span>) = (số khách hàng
                            trung bình đang được phục vụ, thời gian trung bình phục vụ một khách hàng). Thời
                            gian phục vụ trung bình một khách hàng <span
                                style="border-top: 1px solid black;">t<sub>s</sub></span> cũng chính là giá trị
                            trung bình của luật dãy lũy thừa E(&micro;) đối với thời gian phục vụ của một trạm
                            phục vụ và: <span style="border-top: 1px solid black;">t<sub>s</sub></span> =
                            1/&micro;</li>
                    </ol>
                </ul>
            `],
            ['Luật Little', 'LTXH045', `
                Luật Little trình bày mối quan hệ giữa số lượng phát sinh ngẫu nhiên N trong khoảng thời gian
                ngẫu nhiên T với mật độ phát sinh ngẫu nhiên trên 1 đơn vị thời gian là A. Giả sử mật độ A được
                tính trên đơn vị phút, tức là trong mỗi phút phát sinh ngẫu nhiên A khách hàng. Nếu xét T là một
                khoảng thời gian ngẫu nhiên (đơn vị tính: phút) thì số khách hàng N ngẫu nhiên phát sinh trong
                khoảng thời gian này được tính theo công thức:
                <br>
                <center>
                    <img src="./assets/img/LTXH/luatlittle.jpg" alt="luatlittle">
                </center>
                <center>
                    <b style="color: red;">Tính trung bình, số lượng khách hàng nằm trong hệ thống được tính
                        bằng tích của tốc độ đến và thời gian phục vụ</b>
                </center>
            `],
            ['Các tính chất đặc trưng của hệ thống', 'LTXH046', `
                <ul>
                    <li><span style="border-top: 1px solid black;">n</span> = &lambda;<span
                            style="border-top: 1px solid black;">t</span></li>
                    <li><span style="border-top: 1px solid black;">m</span>=&lambda;<span
                            style="border-top: 1px solid black;">t<sub>f</sub></span></li>
                    <li><span style="border-top: 1px solid black;">g</span>=&lambda;<span
                            style="border-top: 1px solid black;">t<sub>s</sub></span></li>
                </ul>
            `],
            ['Ví dụ', 'LTXH047', `
                <p>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#VD" role="button"
                        aria-expanded="false" aria-controls="collapseExample">
                        Ví dụ
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#VDPKbenh" role="button"
                        aria-expanded="false" aria-controls="collapseExample">
                        Ví dụ 2: Phòng khám (PK) bệnh
                    </a>
                </p>
                <div class="collapse" id="VD">
                    <div class="card card-body">
                        <p>
                            Xét hệ thống tính tiền trong siêu thị. Người ta muốn biết một khách hàng trung bình
                            phải đợi bao lâu mới được tính tiền. Biết rằng số trung bình khách hàng đến quầy
                            tính tiền là 100 người/giờ và số khách hàng trung bình đứng trong hàng chờ là 5
                            người. Trước hết, để dễ theo dõi ta sử dụng các ký hiệu trong mô hình M/M/l:
                            &lambda; là mật độ khách hàng tới, còn m là độ dài trung bình của hàng chờ và, <span
                                style="border-top: 1px solid black;">t<sub>f</sub></span> là thời gian xếp hàng
                            trung bình của mỗi khách hàng
                        </p>
                        <hr style="border: 1px solid black;">
                        <ul>
                            <li>Từ giả thuyết ta có: &lambda; = 100 / 60 = 1.67 (KH/1 phút) và m = 5 khách hàng
                            </li>
                            <li>
                                <span style="border-top: 1px solid black;">t<sub>f</sub></span>=
                                m/&lambda;=5x60/100=3 phút. Thời gian trung bình của một khách hàng phải đợi
                                trong hàng chờ là 3 phút</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="collapse" id="VDPKbenh">
                    <div class="card card-body">
                        <ul>
                            <li>Tại một PK bệnh của một bác sĩ, BN đến nhận số và ngồi đợi ở phòng chờ. Trung
                                bình cứ 15 phút thì cô hộ lý gọi một BN theo số thứ tự vào PK. Thời gian khám
                                trung bình cho mỗi BN là 10 phút</li>
                            <li>Yêu cầu
                                <br>
                                <ul>
                                    <li>Tính số BN trung bình trong PK</li>
                                    <li>Tính thời gian chờ trung bình của một BN trong PK.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <hr style="border: 4px solid black;">
                        <ul>
                            <li>Mật độ phát sinh bệnh nhân vào PK &lambda; = 1/15 (bn/1 phút)</li>
                            <li>Thời gian khám bệnh trung bình 1 bệnh nhân: <span
                                    style="border-top: 1px solid black;">t<sub>s</sub></span> = 10 phút</li>
                            <li>Mật độ bệnh nhân ra khỏi phòng khám khi trong phòng khám còn bệnh nhân:
                                &micro;=1/<span style="border-top: 1px solid black;">t<sub>s</sub></span>=1/10
                                BN</li>
                            <li>Hệ số sử dụng &phi; = &lambda;/&micro;=(2/3)/(1-(2/3)) = 2 (bệnh nhân)</li>
                            <li>Thời gian trung bình của 1 bệnh nhân trong phòng khám theo luật little: <span
                                    style="border-top: 1px solid black;">t</span> = <span
                                    style="border-top: 1px solid black;">n</span>/&lambda;=30 phút</li>
                            <li>Thời gian đợi trung bình của 1 bệnh nhân trong phòng khám là <span
                                    style="border-top: 1px solid black;">t</span><sub>f</sub> = <span
                                    style="border-top: 1px solid black;">t</span> - <span
                                    style="border-top: 1px solid black;">t</span><sub>s</sub> = 30 - 10 = 20
                            </li>
                        </ul>
                    </div>
                </div>
            `],
            ['Đánh giá hệ thống', 'LTXH048', `
                <p>
                    Trong thực tế người ta thường đưa ra chỉ số để nhận biết hệ thống có xu hướng chậm chạp và
                    cần được nghiên cứu cải tiến. Chị số nhận biết này chính là, hệ số khai thác trạm phục vụ,
                    và nó được phân thành 3 đoạn để đánh giá hệ thống:
                </p>
                <ul>
                    <li>&phi; &lt; 0.4: thấp, hệ thống hoạt động lãng phí</li>
                    <li>&phi; = [0.4; 0.6]: trung bình, hệ thống hoạt động hiệu quả</li>
                    <li>&phi; > 0.6: cao, hệ thống hoạt động chậm chạp và cần được cải tiến</li>
                </ul>
            `]
        ]
    },
    LTXH05: {
        title: 'Mô hình M/M/2',
        index: [
            ['Mô tả hệ thống', 'LTXH051', `
                <p>
                    Mô tả hệ thống: Mô hình MM/1 được mở rộng thêm một trạm phục vụ nhằm giảm sức ép lên 1 trạm
                    khi số lượng khách hàng trong trạm ngày càng tăng. Khi đó số trạm phục vụ là s = 2 và hệ
                    thống hoạt động như trong Hình. Mô hình của hệ thống lúc này là M/M/2.
                </p>
                <center>
                    <img style="width: 100%;" src="./assets/img/LTXH/MM2_1.jpg" alt="MM2_1">
                </center>
                <p>Đối với mô hình M/M/2 đồ thị cân bằng được biểu diễn tương tự, chỉ khác đối với các cung giảm
                    khách hàng, trọng lượng treo trên cung phụ thuộc số trạm phục vụ:</p>
                <ul>
                    <li>Nếu trong hệ thống chỉ có 1 khách hàng thì chỉ có 1 trạm hoạt động và khi đó mật độ giảm
                        khách hàng là &micro; treo trên cung đi từ đỉnh 1 về đỉnh 0</li>
                    <li>Nếu số khách hàng trong hệ thống lớn hơn hoặc bằng số trạm phục vụ (s=2) thì có 2 trạm
                        phục vụ hoạt động đồng thời. Khi đó mật độ giảm khách hàng là 2&micro; treo trên các
                        cung đi từ đỉnh lớn n về đỉnh nhỏ hơn n-1 với n = 2,3</li>
                </ul>
                <center>
                    <img style="width: 100%;" src="assets/img/LTXH/MM2_2.jpg" alt="MM2_2">
                </center>
            `],
            ['Phân phối số khách hàng trong hệ thống', 'LTXH052', `
                <p>Phân phối của N được tính bằng hai công thức sau</p>
                <ul>
                    <li>q<sub>n</sub> = [&phi;<sup>n</sup>/(2<sup>n+1</sup>)]*q<sub>0</sub> với n = 1,2,3,...,n
                    </li>
                    <li>q<sub>0</sub>=(2-&phi;)/(2+&phi;)</li>
                </ul>

                <p>Đặt <span style="border-top: 1px solid black;">n</span> = E(n) trung bình số khách hàng trong
                    hệ thống đồng thời cũng là kỳ vọng của N</p>
                <p>
                    <center>
                        <span style="border-top: 1px solid black;">n</span> = 4&phi;/(4-&phi;<sup>2</sup>)
                    </center>
                </p>
            `],
            ['Các đặc trưng M/M/2', 'LTXH053', `
                <p>Các đặc trưng khác:</p>
                <p><span style="border-top: 1px solid black;">t</span>=<span
                        style="border-top: 1px solid black;">n</span>/&lambda;</p>
                <p><span style="border-top: 1px solid black;">t</span> = <span
                        style="border-top: 1px solid black;">t</span> - <span
                        style="border-top: 1px solid black;">t</span><sub>f</sub></p>
                <p>
                    <span style="border-top: 1px solid black;">m</span> = &lambda;<span
                        style="border-top: 1px solid black;">t</span><sub>f</sub>
                </p>
                <p>
                    <span style="border-top: 1px solid black;">g</span>=&lambda;<span
                        style="border-top: 1px solid black;">t</span><sub>s</sub>
                </p>
                <p>&phi;: hệ số hoạt động của hai trạm và cũng là số khách hàng trung bình đang được phục vụ</p>
                <p>&phi;<sub>1</sub>: hệ số hoạt động của một trạm, khi s = 1 thì &phi;<sub>1</sub> = &phi;</p>
            `],
            ['Đồ thị cân bằng', 'LTXH054', ``],
            ['Luật Little', 'LTXH055', ``],
            ['Các tính chất đặc trưng của hệ thống', 'LTXH056', ``],
            ['Ví dụ', 'LTXH057', `
                <ul>
                    <li>Trong PK có trung bình 2 BN</li>
                    <li>Thời gian đợi trung bình trong PK của 1 BN của 20 phút. Nếu công thêm thời gian
                        đợi ở phòng chờ trước khi vào PK thì khoảng thời gian đợi là khá lớn. Một hệ
                        thống đợi lâu có cần được cải tiến.</li>
                    <li>Tăng thêm 1 bác sĩ. Khi đó mô hình có dạng M/M/2</li>
                </ul>
                <p><b>Các kết quả từ mô hình M/M/1</b></p>
                <ul>
                    <li>Mật độ phát sinh BN vào PK: &lambda; = 1/15 BN / 1 phút</li>
                    <li>Thời gian khám trung bình BN <span style="border-top: 1px solid black;">t</span>
                        = 10 phút</li>
                    <li>Hệ số sử dụng PK &phi; = 2/3</li>
                    <li>Số BN trung bình trong PK n = 2 BN</li>
                    <li>Thời gian trung bình một BN trong PK: <span
                            style="border-top: 1px solid black;">t</span> = 30 phút</li>
                    <li>Thời gian đợi trung bình một BN trong PK: <span
                            style="border-top: 1px solid black;">t</span> = 20 phút</li>
                </ul>
                <p><b>Các kết quả từ mô hình M/M/2:</b></p>
                <ul>
                    <li>Mật độ phát sinh BN vào PK = &lambda; = 1/15 BN / 1 phút</li>
                    <li>Thời gian khám trung bình một BN: <span
                            style="border-top: 1px solid black;">t</span><sub>s</sub> = 10 phút</li>
                    <li>Hệ số sử dụng PK &phi;=2/3</li>
                </ul>
                <hr style="border: 4px solid black;">
                <p><b style="color: red;">Số bệnh nhân trung bình trong phòng khám <span
                            style="border-top: 1px solid black;">n</span> =
                        4&phi;/(4-&phi;<sup>2</sup>)=(8/3)/(4-4/9)</b> = 3/4 = 0.75 BN</p>
                <p>Theo luật Little, thời gian TB một BN trong PK: <span
                        style="border-top: 1px solid black;">t</span> = <span
                        style="border-top: 1px solid black;">n</span>/&lambda; = (3/4)/(1/15) = 11.25
                    phút</p>
                <p>Thời gian đợi trung bình một BN trong PK = <span
                        style="border-top: 1px solid black;">t</span><sub>f</sub> = <span
                        style="border-top: 1px solid black;">t</span>-<span
                        style="border-top: 1px solid black;">t</span><sub>s</sub> = 11.25 - 10 - 1.25
                    phút</p>
                <p><b>Theo luật Little, số BN đợi TB trong phòng khám: <span
                            style="border-top: 1px solid black;">m</span> = &lambda;<span
                            style="border-top: 1px solid black;"></span><sub>f</sub> = 1.25*1/15 = 0.08
                        BN</b></p>
            `],
            ['Đánh giá hệ thống', 'LTXH058', `
                <p>Hệ số phục vụ trên một bác sĩ p = p/2 = 1/3 ~0.33. Nếu chú ý đến tính hiệu quả của hệ thống
                    thì chưa cần thiết phải tăng thêm bác sĩ</p>
                <p>Xét về khía cạnh khách hàng, có thể thấy thời gian xếp hàng của khách hàng đã giảm từ 20 phút
                    xuống còn 1.25 phút, tức là giảm hơn 15 lần. Như vậy khách hàng sẽ nhận được dịch vụ rất
                    tốt, trong khi đó người quản lý hệ thống lại phải đương đầu với sự lãng phí cũng lớn tương
                    ứng khi tổ chức 2 bác sĩ khám bệnh. Rõ ràng việc tổ chức một hệ thống dịch vụ như vậy cần
                    phải phải đưa ra tiêu chí tối ưu hệ thống.</p>
            `]
        ]
    },
    LTXH06: {
        title: 'Mô hình M/M/s',
        index: [
            ['Mô hình M/M/s', 'LTXH061', `
            <p>Bài toán tổng quát hóa từ các mô hình M/M/1 và M/M/2 lên mô hình M/M/s với s&ge;1 được giải quyết một
                    cách tương tự</p>
                <ul>
                    <li>Thời gian trung bình một KH trong hệ thống: <span style="border-top: 1px solid black;">t</span>
                        = n/&lambda;</li>
                    <li>Thời gian đợi trung bình một KH <span style="border-top: 1px solid black;">t</span><sub>f</sub>
                        = <span style="border-top: 1px solid black;">t</span> - <span
                            style="border-top: black;">t</span><sub>s</sub></li>
                    <li><b style="color: red;"><span style="border-top: 1px solid;">m</span> = &lambda;<span
                                style="border-top: 1px solid;">t</span><sub>f</sub></b></li>
                    <li>Số khách hàng được phục vụ trung bình <span style="border-top: 1px solid;">G</span> =
                        &lambda;<span style="border-top: 1px solid;">t</span><sub>s</sub>=<span
                            style="border-top: 1px solid;">n</span>/&lambda;</li>
                </ul>
            `]
        ]
    },
    LTXH07: {
        title: 'Một số mô hình khác',
        index: [
            ['Một số mô hình khác', 'LTXH071', `
                <ul>
                    <li>Mô hình M/G/1: sử dụng trong trường hợp khách hàng đa dạng về dịch vụ. Khi đó hệ thống có k lớp
                        khách hàng</li>
                    <li>Mô hình M/G/1 có ưu tiên: sử dụng trong trường hợp các lớp khách hàng được gán tính ưu tiên theo
                        cấp độ để tăng cường tính linh hoạt</li>
                </ul>
            `]
        ]
    }
};