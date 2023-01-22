const LTXH01 = {
    LTXH01: {
        title: 'Khái niệm',
        index: [
            ['Lý thuyết xếp hàng', 'LTXH011', `
                <p>
                    Lý thuyết xếp hàng (Queucing Theory) nghiên cứu và giải quyết các vấn đề
                    về mô hình hoá một hệ thống (Systcm). Hệ thống còn được hiểu là một
                    Môi trường tiếp nhận các đối tượng bên ngoài còn được gọi là khách hàng
                    (Clicnts) ở đầu vào và xử lý khách hàng tại một hoặc nhiều trạm phục vụ
                    (Scrvice Stations) ở đầu ra.
                </p>
                <p>
                    Hệ thống như vậy còn được gọi là Hệ thống xếp hàng (Queucing System) hoặc Hệ thống phục vụ đám đông
                    (Crowd Serving Systcm).
                </p>
                <p>
                    Một hệ thống như vậy có thể quan sát và nhận thấy ở bất kỳ một quy mô và
                    cấu trúc nào. Chẳng hạn một số hệ thống thường được nhắc tới trong cuộc
                    sống hiện đại có khách hàng và trạm phục vụ với những ý nghĩa khác nhau.
                </p>
                <p>
                    Với quy mô nhỏ có thể thấy đó là một quán cà phê, quầy bán
                    hàng, dịch vụ công chúng, dịch vụ khám bệnh,..., trong đó khách hàng mang ý
                    nghĩa rất bình thường và hiển nhiên, còn các trạm phục vụ trong các hệ thống
                    này chính là những nhân viên phục vụ (quán cà phê), nhân viên tính tiền
                    (quầy bán hàng) hoặc bác sĩ (dịch vụ khám bệnh).
                </p>
                <p>
                    Cấu trúc của hệ thống có thể được suy rộng ra đối với một Nhà máy
                    sản xuất trong đó khách hàng lại là nguyên, nhiên liệu, còn trạm
                    phục vụ lại là các dây chuyền sản xuất tạo ra sản phẩm ở đầu ra.
                </p>
                <p>
                    Hệ thống ở tầm vĩ mô có cầu (Demand) như là khách hàng tham gia
                    nền kinh tế thị trưởng và cần được đáp úng bởi cung (Supply) dưới
                    dạng một hệ thống tài chính, được hiểu là các trạm phục vụ.
                </p>
                <p>
                    Đặc điểm chính của một hệ thống có khách hàng và phục vụ là độ
                    trễ (Delay) của khách hàng do thời gian phục vụ lâu hay nhanh. Vấn
                    đề đặt ra của hệ thống này là giải thích bản chất của hiện tượng tắc
                    nghẽn với số lượng khách hàng ngày càng đông trong hệ thống.
                </p>
                <p>
                    Từ mối quan hệ này mà có thể xây dựng được nghiên cứu mối quan
                    hệ giữa mật độ khách hàng đi vào hệ thống và mật độ mô hình toán
                    của đám đông khách hàng trong hệ thống
                </p>
            `],
            ['Xích Markov', 'LTXH012', `
                <p>
                    Xích Markov (Markov Chain) là một khái niệm toán học được xây dựng đầu
                    tiên bởi nhà toán học Andrci Andreyevich Markov, người Nga, khi ông nghiên
                    cứu về định lý giới hạn của dãy các biểu ngẫu nhiên phụ thuộc vào nhau theo
                    thời gian vào những năm 1906-1910. Dãy biến ngẫu nhiên phụ thuộc vào nhau
                    theo thời gian còn được gọi là quá trình ngẫu nhiên (Random Process).
                </p>
                <p>
                    Xích Markov chỉ là một trường hợp đặc biệt của quá trình ngẫu nhiên khi nó
                    phải tuân thủ điều kiện "không nhớ" (Memoryless) hay "quên quá khứ", tức là
                    khi một biến đã xảy ra (nhận giá trị cụ thể) thì các biến tiếp theo chỉ phụ thuộc
                    vào giá trị đã xảy ra này mà không phụ thuộc vào các giá trị đã xảy ra trước
                    đó.
                </p>
                <p><b style="color: red;">Ứng dụng của xích Markov</b></p>
                <ol>
                    <li>Hệ thống nhiệt động lực</li>
                    <li>Bài toán xếp hạng các trang Web</li>
                    <li>Lý thuyết máy học</li>
                    <li>Lý thuyết trò chơi đối kháng</li>
                    <li>Máy nhái văn bản</li>
                    <li>Bài toán nhận dạng chùm</li>
                    <li>Lý thuyết xếp hàng</li>
                </ol>
            `],
            ['Các khái niệm xác xuất cơ bản', 'LTXH013', `
                <p>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#KN_cacKNxacxuat1" role="button"
                        aria-expanded="false" aria-controls="collapseExample">
                        Luật xác suất
                    </a>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#KN_cacKNxacxuat2" role="button"
                        aria-expanded="false" aria-controls="collapseExample">
                        Biến ngẫu nhiên
                    </a>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#KN_cacKNxacxuat3" role="button"
                        aria-expanded="false" aria-controls="collapseExample">
                        Phân phối xác xuất rời rạc
                    </a>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#KN_cacKNxacxuat4" role="button"
                        aria-expanded="false" aria-controls="collapseExample">
                        Phân phối xác xuất liên tục
                    </a>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#KN_cacKNxacxuat5" role="button"
                        aria-expanded="false" aria-controls="collapseExample">
                        Phân phối xác xuất liên tục và rời rạc
                    </a>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#KN_cacKNxacxuat6" role="button"
                        aria-expanded="false" aria-controls="collapseExample">
                        Hàm mật độ xác suất của biến liên tục
                    </a>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#KN_cacKNxacxuat7" role="button"
                        aria-expanded="false" aria-controls="collapseExample">
                        Các đặc trưng của hàm phân phối xác suất
                    </a>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#KN_cacKNxacxuat8" role="button"
                        aria-expanded="false" aria-controls="collapseExample">
                        Ví dụ
                    </a>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#KN_cacKNxacxuat9" role="button"
                        aria-expanded="false" aria-controls="collapseExample">
                        Không gian trạng thái
                    </a>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#KN_cacKNxacxuat10" role="button"
                        aria-expanded="false" aria-controls="collapseExample">
                        Quá trình ngẫu nhiên
                    </a>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#KN_cacKNxacxuat11" role="button"
                        aria-expanded="false" aria-controls="collapseExample">
                        Xích Markov
                    </a>
                </p>
                <div class="collapse" id="KN_cacKNxacxuat1">
                    <div class="card card-body">
                        <ul>
                            <li>Biến ngẫu nhiên</li>
                            <li>Phân phối xác xuất
                                <ol>
                                    <li>Phân phối xác suất liên tục</li>
                                    <li>Phân phối xác suất rời rạc</li>
                                    <li>Phân phối xác suất có điều kiện</li>
                                </ol>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="collapse" id="KN_cacKNxacxuat2">
                    <div class="card card-body">
                        <p>Biến ngẫu nhiên (Random Variable): đại lượng có nhiều giá trị khác
                            nhau và chúng xuất hiện ngẫu nhiên theo luật: tại mỗi thời điểm sẽ
                            có một giá trị nào đó xảy ra</p>
                        <ul>
                            <li><b>Ví dụ 1:</b> Gọi X là số chấm xuất hiện khi gieo một con xúc sắc thì X có thể
                                nhận một trong các giá trị 1, 2, 3, 4, 5 và 6.</li>
                            <li><b>Ví dụ 2:</b> Bắn 3 viên đạn một cách độc lập vào mục tiêu, xác suất trúng bia
                                của mỗi viên đạn đều bằng 0,8. Gọi Y là số viên đạn trúng bia. Lúc đó Y có
                                thể nhận các giá trị 0, 1, 2 hoặc 3.</li>
                            <li><b>Ví dụ 3:</b> Một hộp có m sản phẩm tốt, n sản phẩm xấu. Lấy ngẫu nhiên từ
                                hộp đó ra 2 sản phẩm. Nếu ký hiệu Z là số sản phẩm tốt lấy ra được thì Z có
                                thể nhận các giá trị 0, 1 hoặc 2.</li>
                        </ul>
                    </div>
                </div>
                <div class="collapse" id="KN_cacKNxacxuat3">
                    <div class="card card-body">
                        <ul>
                            <li>Nếu biến ngẫu nhiên liên quan đến phân phối xác suất là rời rạc, thì phân
                                phối xác suất như vậy được gọi là rời rạc.</li>
                            <li>Các ví dụ phổ biến về phân phối xác suất rời rạc là phân phối nhị thức,
                                phân phối Poisson, phân phối siêu hình học và phân phối đa thức.</li>
                        </ul>
                    </div>
                </div>
                <div class="collapse" id="KN_cacKNxacxuat4">
                    <div class="card card-body">
                        Nếu biến ngẫu nhiên liên quan đến phân phối xác suất là liên tục, thì phân
                        phối xác suất như vậy được gọi là liên tục.
                    </div>
                </div>
                <div class="collapse" id="KN_cacKNxacxuat5">
                    <div class="card card-body">
                        <ul>
                            <li>Trong các phân phối xác suất rời rạc, biến ngẫu nhiên liên quan đến nó là
                                rời rạc, trong khi đó trong các phân phối xác suất liên tục, biến ngẫu nhiên
                                là liên tục.</li>
                            <li>
                                Phân phối xác suất liên tục thường được giới thiệu bằng các hàm mật độ
                                xác suất, nhưng phân phối xác suất rời rạc được giới thiệu sử dụng các hàm
                                khối lượng xác suất.
                            </li>
                            <li>
                                Biểu đồ tần số của phân phối xác suất rời rạc không liên tục, nhưng nó liên
                                tục khi phân phối liên tục.
                            </li>
                            <li>
                                Xác suất một biến ngẫu nhiên liên tục sẽ giả sử một giá trị cụ thể là 0,
                                nhưng đó không phải là trường hợp trong các biến ngẫu nhiên rời rạc.
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="collapse" id="KN_cacKNxacxuat6">
                    <div class="card card-body">
                        <ul>
                            <li>
                                Với các biến ngẫu nhiên liên tục ta có khái niệm <i>hàm mật độ xác suất (PDF -
                                    Probability Density Function</i> để ước lượng độ tập
                                trung xác suất tại lân cận điểm nào đó. Hàm mật độ xác
                                suất f(x) tại điểm x được xác định bằng cách lấy đạo hàm của hàm
                                phân phối tích luỹ F(x) tại điểm đó:
                                <br>
                                <center>
                                    <i>f(x) = F<sup>'</sup>(x)</i>
                                </center>
                            </li>
                            <li>
                                f(x) càng lớn thì ở đó mức độ tập xác suất càng cao. Từ đây ta cũng có thể biểu diễn hàm
                                phân phối tích luỹ như sau:
                                <br>
                                <center>
                                    <img src="./assets/img/LTXH/Chuong11.jpg" alt="Chuong11">
                                </center>
                            </li>
                            <li>Xác suất trong 1 khoảng (&alpha;, &beta;) cũng có thể được tính bằng hàm mật độ xác
                                suất:
                                <center>
                                    <img src="./assets/img/LTXH/Chuong12.jpg" alt="Chuong12">
                                </center>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="collapse" id="KN_cacKNxacxuat7">
                    <div class="card card-body">
                        <ol>
                            <li>Kỳ vọng</li>
                            <li>Phương sai</li>
                            <li>Độ lệch chuẩn</li>
                            <li>Điểm chuẩn</li>
                            <li>Trung vị</li>
                            <li>Moment</li>
                        </ol>
                        <p>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#KN_cacKNxacxuat71" role="button"
                                aria-expanded="false" aria-controls="collapseExample">
                                Kỳ vọng
                            </a>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#KN_cacKNxacxuat72" role="button"
                                aria-expanded="false" aria-controls="collapseExample">
                                Phương sai
                            </a>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#KN_cacKNxacxuat73" role="button"
                                aria-expanded="false" aria-controls="collapseExample">
                                Độ lệch chuẩn
                            </a>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#KN_cacKNxacxuat74" role="button"
                                aria-expanded="false" aria-controls="collapseExample">
                                Điểm chuẩn
                            </a>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#KN_cacKNxacxuat75" role="button"
                                aria-expanded="false" aria-controls="collapseExample">
                                Trung vị
                            </a>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#KN_cacKNxacxuat76" role="button"
                                aria-expanded="false" aria-controls="collapseExample">
                                Moment
                            </a>
                        </p>
                        <div class="collapse" id="KN_cacKNxacxuat71">
                            <div class="card card-body">
                                <ul>
                                    <li>Kỳ vọng (Expectation) của biến ngẫu nhiên là trung bình của biến ngẫu
                                        nhiên. Kỳ vọng của biến ngẫu nhiên X được kí hiệu là E[X]:
                                        <br>
                                        <center>
                                            <img style="width: 100%;" src="./assets/img/LTXH/Chuong13.jpg"
                                                alt="Chuong13">
                                        </center>
                                    </li>
                                    <li>Kỳ vọng còn được biết tới với những tên gọi khác như giá trị trung bình
                                        (Mean), giá trị trung bình có trọng lượng (Weighted Average),giá mong đợi
                                        (Expected Value) hay moment bậc một (first moment).</li>
                                </ul>
                            </div>
                        </div>
                        <div class="collapse" id="KN_cacKNxacxuat72">
                            <div class="card card-body">
                                <ul>
                                    <li>Dựa vào kì vọng ta sẽ có được trung bình của biến ngẫu nhiên, tuy nhiên nó
                                        lại không cho ta thông tin về mức độ phân tán xác suất nên ta cần 1 phương
                                        pháp để đo được độ phân tán đó. Một trong những phương pháp đó là
                                        phương sai (variance).</li>
                                    <li>Phương sai Var(X) là trung bình của bình phương khoảng cách từ biến ngẫu
                                        nhiên X tới giá trị trung bình:
                                        <br>
                                        <center>
                                            <img src="./assets/img/LTXH/Chuong14.jpg" alt="Chuong14">
                                        </center>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="collapse" id="KN_cacKNxacxuat73">
                            <div class="card card-body">
                                <p>Vì đơn vị của phương sai là bình phương nên việc tính để khớp với đơn vị
                                    của biến ngẫu nhiên là bất khả nên người ta đưa vào thêm khái niệm độ
                                    lệch chuẩn (SD-standard deviation) bằng căn bậc 2 của phương sai.</p>
                                <center>
                                    <img src="./assets/img/LTXH/Chuong15.jpg" alt="Chuong15">
                                </center>

                            </div>
                        </div>
                        <div class="collapse" id="KN_cacKNxacxuat74">
                            <div class="card card-body">
                                <p>Độ lệch chuẩn cho phép ta biết được mức độ phân tán trung bình của toàn
                                    bộ tập dữ liệu nhưng lại chưa cho ta biết được mức độ phân tán của 1 điểm
                                    nào đó. Chính vì vậy ta thêm một thông số nữa để đánh giá điểm này là
                                    điểm chuẩn (SC-Standard Score).</p>
                                <center>
                                    <img style="width: 100%;" src="./assets/img/LTXH/Chuong16.jpg" alt="Chuong16">
                                </center>
                                <p>Điểm chuẩn còn được gọi là giá trị z (z-value), điểm z (z-score).</p>
                            </div>
                        </div>
                        <div class="collapse" id="KN_cacKNxacxuat75">
                            <div class="card card-body">
                                <p>
                                    Trung vị (median) là điểm chia đều xác suất thành 2 phần giống nhau, kí hiệu là
                                    med(X):
                                </p>
                                <center>
                                    <img style="width: 100%;" src="./assets/img/LTXH/Chuong17.jpg" alt="Chuong17">
                                </center>
                            </div>
                        </div>
                        <div class="collapse" id="KN_cacKNxacxuat76">
                            <div class="card card-body">
                                <p>
                                    Là khái niệm tổng quát của kì vọng và phương sai. Một moment bậc k đối với c được
                                    định nghĩa như sau:
                                </p>
                                <center>
                                    <img src="./assets/img/LTXH/Chuong18.jpg" alt="Chuong18">
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="collapse" id="KN_cacKNxacxuat8">
                    <div class="card card-body">
                        <b style="color: red;">Ví dụ: Bước đi của người say</b>
                        <ul>
                            <li>Xét đường đi của người say chỉ có 5 làn và được đánh số: 1, 2, 3, 4 và 5.
                                Nếu ở làn 2, 3 và 4 người say có thể di chuyển sang trái (-1), di thẳng (0) và
                                sang phải (-1). Chẳng hạn, nếu anh ta đang ở làn 4 thì có thể di chuyển sang
                                làn 3 (trái: 4-1=3), hoặc đi thẳng trên làn 4 (thẳng: 4+0=4), hoặc chuyển
                                sang làn 5 (phải: 4+1=5). Nếu anh ta ở làn 1 (đường biển trái) thì chỉ có thể
                                đi thẳng (0) giữ nguyên làn 1 hoặc sang phải (+1) chuyển sang làn 2. Còn
                                nếu đang ở làn 5 (đường biên phải) thì anh ta chỉ có thể đi thẳng (0) giữ
                                nguyên làn 5 hoặc sang trái (-1) chuyển sang làn 4.</li>
                            <li>Giả thiết rằng tại các vị trí đã cho các bước di chuyển ngẫu nhiên
                                đều có xác suất như nhau (phân phối đều). Vấn đề được quan tâm:
                                nếu từ một làn xác định, chẳng hạn làn 4 thì sau 1 bước, 2 bước, 3
                                bước, và nhiều bước nữa sau đó người say sẽ ở làn nào? Rõ ràng
                                người say có thể ở bất kỳ làn nào kể từ làn 4 và những vị trí sau đó
                                đều có xác suất nào đó. Bài toán được đặt ra là: phân phối xác suất
                                đề người say ở một làn nào đó sau 1 bước, 2 bước, 3 bước và rất
                                nhiều bước sau đó được tính như thế nào ?</li>
                            <li>Đây cũng là vấn đề cơ bản đặt ra khi nghiên cứu một quá trình ngẫu
                                nhiên và đặc biệt đối với trường hợp như xích Markov, như "Bước đi
                                của người say". Sự đặc biệt của nó khác với quá trình ngẫu nhiên nói
                                chung là nó chỉ phụ thuộc vào sự kiện hiện tại (người say đang ở làn
                                4) mà không phụ thuộc vào quá khứ (những bước sau đó của người
                                say không phụ thuộc vị trí trước khi người say đến làn 4), do đó các
                                phương pháp tính toán sẽ đơn giản hơn rất nhiều.</li>
                        </ul>
                    </div>
                </div>
                <div class="collapse" id="KN_cacKNxacxuat9">
                    <div class="card card-body">
                        <ul>
                            <li>Trong "Bước đi của người say" vị trí của người say đang ở làn nào rất quan trọng khi
                                chúng ta muốn biết người say sẽ ở đầu sau mỗi bước đi</li>
                            <li>Những giá trị này còn được gọi là Trạng thái (State) đối với vị trí làn của người say.
                                Nếu
                                xem sự thay đổi vị trí làn của người say như một hệ thống “Bước đi của người say” thì
                                trạng thái được xét tới chính là Trạng thái của hệ thống. Trong khi đó, vị trí làn của
                                người say là một Biến ngẫu nhiên đặc trưng cho hệ thống trên mỗi bước đi của người
                                say. Sau mỗi bước đi vị trí làn sẽ nhận một giá trị có thể thay đổi nhưng phụ thuộc lẫn
                                nhau. Như vậy sau mỗi đơn vị thời gian (một bước đi của người say) hệ thống này sẽ
                                nhận một trạng thái (giá trị của biến ngẫu nhiên “Vị trí làn" của người say) nằm trong
                                tập hợp các trạng thái cho trước (đối với vị trí của người say chúng ta có 5 trạng thái
                                úng với 5 làn).</li>

                        </ul>

                    </div>
                </div>
                <div class="collapse" id="KN_cacKNxacxuat10">
                    <div class="card card-body">
                        <p>Do các trạng thái e&isin;E của hệ thống xảy ra một cách ngẫu nhiên ở từng thời
                            X, nên điểm khác nhau và E được coi như miền giá trị của một biến ngẫu
                            nhiên e cũng là giá trị ngẫu nhiên của X và phát sinh tuân theo phân phối của
                            X tại thời điểm t. Ký hiệu: X<sub>t</sub> &isin; E</p>
                        <p>Như vậy, một quá trình ngẫu nhiên được đặc trưng bởi sự ảnh hưởng của
                            quá khứ có thể ngay từ những thời điểm đầu tiên của quá trình ngẫu nhiên.
                            Các dạng hệ thống như vậy gọi là quá trình ngẫu nhiên</p>
                    </div>
                </div>
                <div class="collapse" id="KN_cacKNxacxuat11">
                    <div class="card card-body">
                        <ul>
                            <li>Trong thực tế, quá trình ngẫu nhiên là yếu tố chính làm phát sinh sự hoạt động của các
                                hệ thống, trong đó có những hệ thống rất ít gặp, hoặc có
                                những hệ thống là một hệ phức tạp của những hệ thống đơn giản và có thể
                                phân tích rời nhau.</li>
                            <li>Một lớp quá trình ngẫu nhiên đặc biệt nhưng lại rất thường được ứng dụng
                                và thường gặp trong thực tế quản lý và kỹ thuật đó là Xích Markov.</li>
                            <li>
                                Xích Markov là một quá trình ngẫu nhiên đặc biệt không phụ thuộc
                                vào quá khứ mà chỉ phụ thuộc vào hiện tại.
                                <br>
                                <center>
                                    <img style="width: 100%;" src="./assets/img/LTXH/Chuong19.jpg" alt="Chuong19">
                                </center>
                            </li>
                            <li>Với đặc điểm như vậy, Xích Markov còn được gọi là quá trình ngẫu
                                nhiên "quên quá khứ" hay "không bộ nhớ".</li>
                            <li>
                                Tính toán với Xích Markov dễ hơn rất nhiều so với một quá trình
                                ngẫu nhiên tổng quát.
                            </li>
                        </ul>
                    </div>
                </div>
            `]
        ]
    },
    LTXH02: {
        title: 'Các phương pháp dự báo',
        index: [
            ['Hệ thức Chapman-Kolmogorov và dự báo ngắn hạn', 'LTXH021', `
                <p>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#CacPPdubao21" role="button"
                        aria-expanded="false" aria-controls="collapseExample">
                        Bài toán
                    </a>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#CacPPdubao22" role="button"
                        aria-expanded="false" aria-controls="collapseExample">
                        Hệ phương trình Chapman-Kolmogorov
                    </a>

                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#CacPPdubao23" role="button"
                        aria-expanded="false" aria-controls="collapseExample">
                        Phương pháp dự báo
                    </a>
                </p>
                <div class="collapse" id="CacPPdubao21">
            <div class="card card-body">
                <p>
                    Xét một Xích Markov {X}<sub>t&isin;T</sub> và tại thời điểm hiện tại T = 0, hệ thống có trạng thái:
                    X<sub>0</sub> = e<sub>0</sub>. Yêu cầu xác định phân phối xác suất các trạng thái của hệ thống tại
                    thời điểm T = t nào đó ở tương lai (t>0), tức là phân phối xác suất có điều kiện:
                    P(X<sub>t</sub>/X<sub>0</sub> = e<sub>0</sub>).
                </p>
                <p>
                    Yêu cầu của bài toán có thể diễn giải như là dự báo các khả năng xảy ra của
                    hệ thống sau 1 đơn vị thời gian dưới dạng một phân phối xác suất của biến Xt
                    có điều kiện X<sub>0</sub> = e<sub>0</sub> đã xảy ra
                </p>
                <p>
                    Hai nhà toán học Chapman và Kolmogorov đã cùng nghiên cứu bài toán này
                    và đã đưa ra kết quả tính toán xác suất trong các trường hợp thời gian rời rạc và
                    liên tục. Các kết quả này được gọi là Hệ phương trình Chapman-Kolmogorov.
                </p>
                <p>Do các ứng dụng tin học tập trung vào ứng dụng các bài toán rời rạc,
                    nên việc trình bày hệ phương trình C-K chỉ giới hạn trong trường hợp
                    rời rạc. Vậy chúng ta luôn có giả thiết thời gian rời rạc: T={0, 1, 2,...};
                    trong đó T = 0 chỉ hiện tại, còn T = t> 0 chỉ thì tương lai.</p>
                <p>Khi ứng dụng tính toán, chúng ta sử dụng tính tương đối: ở bất kỳ
                    thời điểm T=k sau cùng, nếu X<sub>k</sub> = x<sub>k</sub> đã xảy ra thì đều được hiểu T = k là thì
                    hiện tại và trước đó đều là thì quá khứ</p>
            </div>
        </div>
        <div class="collapse" id="CacPPdubao22">
            <div class="card card-body">
                <p>Ví dụ: Trong “Bước đi của người say”</p>
                <ul>
                    <li>Nếu xuất phát (T = 0) ở làn 4 thì Vị trí làn = 4 là trạng thái hiện tại (Xo = 4). Giả sử sau
                        bước đi thứ 3 (T=3)</li>
                    <li>Vị trí làn được xác định là 2 (X<sub>3</sub> = 2), lúc này hiện tại sẽ chuyển về T =3,
                        X<sub>3</sub> = 2 là trạng thái hiện tại của hệ thống, còn X<sub>0</sub> = 4 thuộc về quá khứ và
                        không còn ảnh hưởng đến các giá trị phát sinh tiếp theo (T > 3)</li>
                    <li>Để giải bài toán dự báo, ta sẽ áp dụng công thức xác suất toàn phần để tính
                        xác suất tại thời điểm T = t thông qua xác suất tại thời điểm T = t - 1.</li>
                </ul>
                <center>
                    <img style="width: 100%;" src="./assets/img/LTXH/Chuong20.jpg" alt="Chuong20">
                </center>
                <p>Với tính chất thuần nhất ta có bộ xác suất pi và có thể sắp xếp chúng dưới
                    dạng một ma trận. Ma trận này còn được gọi là Ma trận chuyển đổi trạng
                    thái (State Trasition Matrix):</p>
                <center>
                    <img style="width: 100%;" src="./assets/img/LTXH/Chuong21.jpg" alt="Chuong21">
                </center>
                <p>Với mọi i, j &isin; E; đặt</p>
                <center>
                    <img style="width: 100%;" src="./assets/img/LTXH/Chuong22.jpg" alt="Chuong22">
                </center>
                <p>không phụ thuộc vào n . Đó là xác suất để từ trạng thái i sau một bước sẽ
                    chuyển thành trạng thái j. Đặt</p>
                <center>
                    <img style="width: 100%;" src="./assets/img/LTXH/Chuong23.jpg" alt="chuong23">
                </center>
                <p>Ma trận vuông P = [P<sub>ij</sub>] gọi là ma trận xác suất chuyển sau 1 bước.</p>
                <p>Ma trận vuông P<sup>k</sup>=[p<sub>ij</sub><sup>(k)</sup> gọi là ma trận xác suất chuyển sau 1 bước.
                </p>
                <p>Với mọi n &ge; 0, ta có phương trình Chapman- Kolmogorov:</p>
                <center>
                    <img style="width: 100%;" src="./assets/img/LTXH/Chuong24.jpg" alt="Chuong24">
                </center>
            </div>
        </div>
        <div class="collapse" id="CacPPdubao23">
            <div class="card card-body">
                <p>Phương pháp dự báo sử dụng hệ phương trình C-K để tính phân
                    phối xác suất trong tương lai gần, sau đó xác định các hiện tượng
                    có xác suất xuất hiện cao trong tương lai để dự báo.</p>
            </div>
        </div>
            `],
            ['Phân phối dừng và dự báo dài hạn', 'LTXH022', `
                <p>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#CacPPdubao24" role="button"
                    aria-expanded="false" aria-controls="collapseExample">
                        Quá trình dừng</a>
                </p>
                <div class="collapse" id="CacPPdubao24">
                <div class="card card-body">
                    <p>Ý nghĩa: Một hệ thống được khởi động bắt đầu tại thời điểm t = 0 (hiện
                        tại), nếu không có thêm các ảnh hưởng nào khác trong quá trình hoạt động
                        thì nó sẽ biển động ở chế độ Chuyển tiếp (Transient) và sau một khoảng
                        thời gian đủ lớn nó sẽ chuyển sang chế độ Ổn định hay Dùng
                        (Steady/Stationary) dưới một số điều kiện ràng buộc.</p>
                    <p>
                        Trong thực tế, một dãy các số liệu thống kê được gọi là đủ lớn nếu dãy số
                        liệu thu được khoảng từ 20-30. Vậy ta có thể hiểu rằng khi t đạt được 20-30
                        đơn vị thời gian ở tương lai thì dãy các số liệu theo thời gian đã gần tới giới
                        hạn ở chế độ dừng.
                    </p>
                    <p>
                        <b> Ví dụ: </b>
                        <br>
                        Một hệ thống bán hàng sẽ có số khách hàng vào ra ổn định sau khoảng
                        thời gian 30 phút kể từ khi mở cửa (trong mỗi sáng), một quán ăn mới
                        khai trương sẽ ổn định doanh thu sau khoảng 30 ngày liên tiếp mở cửa
                        đón khách hàng, một doanh nghiệp sau khi thay đổi chính sách tiếp thị
                        cần quan sát khoảng 30 ngày mới biết được chính xác chính sách này có
                        thành công hay không
                    </p>
                    <p>
                        <b>Điều kiện dừng:</b>
                        <br>
                    <ul>
                        <li>
                            Chế độ dùng của một quá trình ngẫu nhiên nói chung là một quy luật rất
                            quan trọng khi người ta muốn đánh giá những hành vi của quá trình này
                            ở hay tương lai xa. Nhưng để có quy luật đó một quá trình ngẫu nhiên
                            nói chung một xích Markov nói riêng đều phải thỏa 2 điều kiện:
                            <br>
                            <ul>
                                <li>Liên thông</li>
                                <li>Không bùng nổ</li>
                            </ul>
                        </li>
                        <li>Những điều kiện này được gọi chung là điều kiện Dừng.</li>
                    </ul>
                    </p>
                </div>
            </div>
            `]
        ]
    },
    LTXH03: {
        title: 'Phương pháp đồ thị cần bằng ngẫu nhiên',
        index: [
            ['Đồ thị cân bằng ngẫu nhiên', 'LTXH031', `
            <ul>
                <li>
                    <b>Đồ thị cân bằng ngẫu nhiên</b>
                    <ul>
                        <li> Dùng để viết hệ phương trình tìm phân phối dừng.</li>
                        <li>Sử dụng luật cân bằng luồng trên đồ thị chuyển trạng thái ở chế độ dừng</li>
                    </ul>
                </li>
            </ul>
            `],

            ['Luật cân bằng trên đồ thị chuyển trạng thái ở chế độ dừng được trình bày dưới dạng nguyên lý sau:', 'LTXH032', `


            <ol>
                        <li>Đồ thị chuyển trạng thái ngẫu nhiên ở chế độ dừng là bộ 4 tập hợp:
                            <br>
                            G*={E, A, P, q} = {G, q} <br> 
                            trong đó <br>
                            G là đồ thị chuyển trạng thái ngẫu nhiên tương ứng với xích Markov, q là phân phối dùng xuất hiện các trạng thái c=E và được gán cho các nút
                            trạng thái tương ứng: q<sub>1</sub> gán cho nút e<sub>1</sub>, q<sub>2</sub> gần cho e<sub>1</sub>,...
                        </li>
                        <li>Luật cân bằng được phát biểu như sau: “Tại mọi nút của đồ thị tổng luồng ra
                            bằng tổng luồng vào”, trong đó: <br>
                            Luồng ra từ nút e=Tổng xác suất chuyển trạng thái từ e.
                            <br>
                            Luồng vào nút e=Tổng xác suất chuyển trạng thái từ nút e’ (#e) thành nút e.</li>
                    </ol>

                
            `]
        ]
    }
}
