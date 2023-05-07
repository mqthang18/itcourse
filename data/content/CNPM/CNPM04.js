const CNPM4 = {
    CNPM01: {
        title: 'Phần 0',
        index: [
            ['Nội dung', 'CNPM011', `
            <div id="1">
            <h4>Quá trình thiết kế</h4>
    
            <div>
                <ul>
                    <li>Đây là bước đầu tiên</li>
                    <li>Thiết kế là quy trình định nghĩa ra kiến trúc, thành phần, interfaces và các thuộc tính khác của một
                        hệ thống hoặc một thành phần</li>
                    <li>Mục tiêu: tạo ra mô hình hay biểu diễn một thực thể sau này sẽ sử dụng</li>
                    <li>Thiết kế phần mềm là trung tâm kỹ thuật của tiến trình công nghệ phần mềm</li>
                    <li>Theo ISO/IEC/IEEE, thiết kế phần mềm được chia làm 4 hoạt động chính:
                        <ul>
                            <li>Thiết kế kiến trúc</li>
                            <li>Thiết kế chi tiết</li>
                            <li>Thiết kế giao diện</li>
                            <li>Thiết kê thuật toán</li>
                        </ul>
                    </li>
                </ul>
                <p>=> Đầu ra là tập mô hình và tài liệu thiết kế</p>
            </div>
        </div>
    
        <div id="2">
            <h4>Các nội dung thiết kế</h4>
    
    
            <div>
                <p>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse21" role="button"
                        aria-expanded="false" aria-controls="collapse21">
                        Nguyên tắc thiết kế phần mềm
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse22" role="button"
                        aria-expanded="false" aria-controls="collapse22">
                        Nội dung thiết kế
                    </a>
                </p>
                <div>
                    <div class="collapse" id="collapse21">
                        <div class="card card-body">
                            <p><b>Nguyên tắc thiết kế phần mềm</b></p>
                            <ul>
                                <li>Trừu tượng hóa (Abstraction)</li>
                                <li>Ghép nối và liên kế (Coupling and Conhesion)</li>
                                <li>Phân rã và module hóa (decomposition and modularization)</li>
                                <li>Đóng gói/ẩn thông tin (Encapsulation/information hiding)</li>
                                <li>Tách giao diện và thực hiện (Separation of interface and implementation)</li>
                                <li>Đầy đủ, toàn vẹn và nguyên thủy (Sufficiency, completeness, and primitiveness)</li>
                                <li>Tách mối quan tâm (Separation of cencerns)</li>
                            </ul>
                        </div>
                    </div>
                    <div class="collapse" id="collapse22">
                        <div class="card card-body">
                            <p><b>Nội dung thiết kế</b></p>
                            <div>
                                <p>
                                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse221" role="button"
                                        aria-expanded="false" aria-controls="collapse221">
                                        Thiết kế kiến trúc
                                    </a>
                                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse222" role="button"
                                        aria-expanded="false" aria-controls="collapse222">
                                        Thiết kế dữ liệu
                                    </a>
                                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse223" role="button"
                                        aria-expanded="false" aria-controls="collapse223">
                                        Thiết kế giao diện
                                    </a>
                                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse224" role="button"
                                        aria-expanded="false" aria-controls="collapse224">
                                        Thiết kế thủ tục (thuật toán)
                                    </a>
                                </p>
                                <div>
                                    <div class="collapse" id="collapse221">
                                        <div class="card card-body">
                                            <p><b>Thiết kế kiến trúc</b></p>
    
                                            <ul>
                                                <li>Một nghành học rộng liên quan đến việc nghiên cứu các cấu trúc và kiến
                                                    trúc theo một cách chung</li>
                                                <li>Các vấn đề cần quan tâm
                                                    <ul>
                                                        <li>Cấu trúc và góc nhìn</li>
                                                        <li>Kiểu kiến trúc</li>
                                                        <li>Mẫu thiết kế (Design Patterns)</li>
                                                        <li>Những quyết định thiết kế kiến trúc</li>
                                                        <li>Tương tự giữa chương trình và Framework</li>
                                                    </ul>
                                                </li>
                                            </ul>
    
                                            <div>
                                                <p>
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#collapse2211" role="button" aria-expanded="false"
                                                        aria-controls="collapse2211">
                                                        Góc nhìn
                                                    </a>
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#collapse2212" role="button" aria-expanded="false"
                                                        aria-controls="collapse2212">
                                                        Kiểu kiến trúc
                                                    </a>
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#collapse2213" role="button" aria-expanded="false"
                                                        aria-controls="collapse2213">
                                                        Mẫu thiết kế
                                                    </a>
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#collapse2214" role="button" aria-expanded="false"
                                                        aria-controls="collapse2214">
                                                        Những quyết định thiết kế kiến trúc
                                                    </a>
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#collapse2215" role="button" aria-expanded="false"
                                                        aria-controls="collapse2215">
                                                        Tương tự giữa chương trình và framework
                                                    </a>
                                                </p>
                                                <div>
                                                    <div class="collapse" id="collapse2211">
                                                        <div class="card card-body">
                                                            <p><b>Góc nhìn</b></p>
    
                                                            <ul>
                                                                <li>Là khía cạnh mức cao khác nhau của thiết kế phần mềm
                                                                </li>
                                                                <li>Các góc nhìn thích hợp với những vấn đề khác nhau liên
                                                                    quan đến phần mềm</li>
                                                            </ul>
    
                                                            <p><b>Ví dụ</b></p>
                                                            <ul>
                                                                <li>Góc nhìn logic</li>
                                                                <li>Góc nhìn tiến trình</li>
                                                                <li>Góc nhìn vật lý</li>
                                                                <li>Góc nhìn phát triển</li>
                                                                <li>...</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="collapse" id="collapse2212">
                                                        <div class="card card-body">
                                                            <p><b>Kiểu kiến trúc</b></p>
    
                                                            <ul>
                                                                <li>Là chuyên môn hóa của phần tử và các loại liên quan</li>
                                                                <li>Một số kiến trúc chính
                                                                    <ul>
                                                                        <li>Kiến trúc thường</li>
                                                                        <li>Các hệ thống phân tán</li>
                                                                        <li>Các hệ thống tương tác</li>
                                                                        <li>Các hệ thống mô phỏng</li>
                                                                        <li>Các kiểu khác (ví dụ: batch, interperters,
                                                                            process control, rule-based)</li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="collapse" id="collapse2213">
                                                        <div class="card card-body">
                                                            <p><b>Mẫu thiết kế</b></p>
    
                                                            <ul>
                                                                <li>Là một giải pháp phổ biến để giải quyết các vấn đề phổ
                                                                    biến trong ngữ cảnh đưa ra</li>
                                                                <li>Mẫu thiết kế mức thấp bao gồm:
                                                                    <ul>
                                                                        <li>Mẫu tạo</li>
                                                                        <li>Mẫu cấu trúc</li>
                                                                        <li>Mẫu hành vi</li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="collapse" id="collapse2214">
                                                        <div class="card card-body">
                                                            <p><b>Những quyết định thiết kế kiến trúc</b></p>
                                                            <ul>
                                                                <li>Thiết kế kiến trúc là quá trình sáng tạo</li>
                                                                <li>Phải tạo ra quyết định cơ bản ảnh hưởng sâu sắc tới các
                                                                    phần mềm và quy trình phát triển phần mềm</li>
                                                                <li>Thiết kế kiến trúc tạo thành từ quan điểm</li>
                                                                <li>Cơ sở quyết định tác động vào chất lượng thuộc tính và
                                                                    hoán đổi giữa các thuộc tính cạnh tranh</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="collapse" id="collapse2215">
                                                        <div class="card card-body">
                                                            <h4>Tương tự giữa chương trình và framework</h4>
    
                                                            <ul>
                                                                <li>Xác định sự tương đồng giữa phần mềm bằng cách thiết kế
                                                                    các thành phần tái sử dụng và tùy vào sự khác nhau của
                                                                    phần mềm</li>
                                                                <li>Khung trong lập trình hướng đối tượng:
                                                                    <br>
                                                                    Một phần hệ thống phần mềm hoàn toàn có thể được mở rộng
                                                                    bằng cách cài đặt các công cụ thích hợp
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="collapse" id="collapse222">
                                        <div class="card card-body">
                                            <p><b>Thiết kế dữ liệu</b></p>
    
                                            <ul>
                                                <li>Mục đích: Mô tả cách thức tổ chức lưu trữ dữ liệu của phần mềm bên trong
                                                    máy tính</li>
                                                <li>Mỗi hệ thống sẽ sử dụng một CSDL riêng</li>
                                                <li>PT&TK CSDL tiến hành đồng thời với PT&TK hệ thống hoặc tiến hành riêng
                                                </li>
                                                <li>Xây dựng CSDL giảm tối đa sự dư thừa dữ liệu đồng thời để khôi phục và
                                                    bảo trì</li>
                                            </ul>
    
                                            <div>
                                                <p>
                                                    <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse"
                                                        href="#collapse2221" role="button" aria-expanded="false"
                                                        aria-controls="collapse2221">
                                                        Các khái niệm về dữ liệu
                                                    </a>
                                                    <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse"
                                                        href="#collapse2222" role="button" aria-expanded="false"
                                                        aria-controls="collapse2222">
                                                        Thiết kế dữ liệu
                                                    </a>
                                                    <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse"
                                                        href="#collapse2224" role="button" aria-expanded="false"
                                                        aria-controls="collapse2224">
                                                        Thiết kế dữ liệu với tính đúng đắn
                                                    </a>
                                                    <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse"
                                                        href="#collapse2225" role="button" aria-expanded="false"
                                                        aria-controls="collapse2225">
                                                        Thiết kế dữ liệu với tính tiến hóa
                                                    </a>
                                                    <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse"
                                                        href="#collapse2226" role="button" aria-expanded="false"
                                                        aria-controls="collapse2226">
                                                        Thiết kế dữ liệu với yêu cầu hệ thống
                                                    </a>
                                                </p>
                                                <div>
                                                    <div class="collapse" id="collapse2221">
                                                        <div class="card card-body">
                                                            <p><b>Các khái niệm về dữ liệu</b></p>
                                                            <ul>
                                                                <li>CSDL: Kho chứa bộ sưu tập có tổ chức các file dữ liệu,
                                                                    các bản ghi và các trường</li>
                                                                <li>Hệ quản trị CSDL: là phần mềm điều khiển mọi truy nhập
                                                                    đối với CSDL</li>
                                                                <li>Phân loại HQTCSDL:
                                                                    <ul>
                                                                        <li>HQTCSDL phần cấp ứng với mô hình phân cấp</li>
                                                                        <li>HQTCSDL mạng ứng với mô hình mạng</li>
                                                                        <li>HQTCSDL quan hệ ứng với mô hình quan hệ</li>
                                                                        <li>HQTCSDL hướng đối tượng ứng với mô hình hướng
                                                                            đối tượng</li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                            <center>
                                                                <img src="./assets/img/CNPM/Chap4/chap1.png" alt="">
                                                            </center>
                                                        </div>
                                                    </div>
                                                    <div class="collapse" id="collapse2222">
                                                        <div class="card card-body">
                                                            <p><b>Thiết kế dữ liệu cần quan tâm</b></p>
                                                            <ul>
                                                                <li>Thiết kế dữ liệu với tính đúng đắn</li>
                                                                <li>Thiết kế dữ liệu với tính biến hóa</li>
                                                                <li>Thiết kế dữ liệu với yêu cầu hệ thống</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="collapse" id="collapse2224">
                                                        <div class="card card-body">
                                                            <p><b>Thiết kế dữ liệu với tính đúng đắn</b></p>
                                                            <ul>
                                                                <li>Bảo đảm lưu trữ đầy đủ và chính xác về mặt ngữ nghĩa
                                                                </li>
                                                                <li>Các bước thực hiện
                                                                    <ul>
                                                                        <li>Bước 1. Chọn yêu cầu - Lập sơ đồ logic cho yêu
                                                                            cầu đó</li>
                                                                        <li>Bước 2.
                                                                            <ul>
                                                                                <li>Bổ sung yêu cầu mới</li>
                                                                                <li>Nếu sơ đồ logic vẫn đáp ứng thì sang
                                                                                    bước 3. Ngược lại, bổ sung vào sơ đồ
                                                                                    logic (*)
                                                                                    <br>
                                                                                    <ul>
                                                                                        <li>Thuộc tính mới (ưu tiên 1)</li>
                                                                                        <li>(hoặc) Bảng dữ liệu mới (ưu tiên
                                                                                            2)</li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                        <li>Bước 3. Lặp bước 2 cho đến khi đã xem xét mọi
                                                                            yêu cầu </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                            <p><b>Lưu ý: Khi thiết kế dữ liệu với tính đúng đắn</b></p>
                                                            <ul>
                                                                <li><b>Yêu cầu mới</b>: Tìm trong quy trình, tài liệu yêu
                                                                    cầu xem có thông tin mới cần lưu trữ hay không? Nếu có
                                                                    thì lưu trữ ở đâu (Có cần tạo bảng mới)?</li>
                                                                <li>Khóa của các bảng dữ liệu phải dựa vào ngữ nghĩa tương
                                                                    ứng để xác định (Có thể tạo thêm thuộc tính để làm thuộc
                                                                    tính khóa).</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="collapse" id="collapse2225">
                                                        <div class="card card-body">
                                                            <p><b>Thiết kế dữ liệu với tính tiến hóa</b></p>
                                                            <ul>
                                                                <li>Thiết kế dữ liệu đảm bảo các thông tin phù hợp với yêu
                                                                    cầu chất lượng phần mềm:
                                                                    <ul>
                                                                        <li>Tiến hóa</li>
                                                                        <li>Hiệu quả</li>
                                                                        <li>Tiện dụng</li>
                                                                    </ul>
                                                                </li>
                                                                <li>Xây dựng CSDL cần xem xét tới giới hạn là các tham số
                                                                    (tên) với miền giá trị của nó</li>
                                                            </ul>
                                                            <center>
                                                                <img src="./assets/img/CNPM/Chap4/chap2.png" alt="">
                                                            </center>
                                                            <p>Xây dựng CSDL cần xem xét tới giới hạn là các tham số (tên)
                                                                với miền giá trị của nó</p>
                                                        </div>
                                                    </div>
                                                    <div class="collapse" id="collapse2226">
                                                        <div class="card card-body">
                                                            <p><b>Thiết kế dữ liệu với yêu cầu hệ thống</b></p>
                                                            <p>Là quá trình thiết kế các bảng CSDL để phân quyền cho hệ
                                                                thống. Có 3 dạng phân quyền</p>
                                                            <center>
                                                                <img src="./assets/img/CNPM/Chap4/img3.png" alt=""
                                                                    class="col-12 col-sm-10">
                                                            </center>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="collapse" id="collapse223">
                                    <div class="card card-body">
                                        <p><b>Thiết kế giao diện</b></p>
    
                                        <ul>
                                            <li>Là một phần quan trọng trong quá trình thiết kế phần mềm</li>
                                            <li>Một số vấn đề trong thiết kế giao diện
                                                <ol>
                                                    <li>Nguyên tắc cơ bản trong thiết kế giao diện:
                                                        <ul>
                                                            <li>Dễ học</li>
                                                            <li>Quen thuộc với người dùng</li>
                                                            <li>TÍnh nhất quán</li>
                                                            <li>Ngạc nhiên tối thiểu</li>
                                                            <li>Khôi phục được</li>
                                                            <li>Hướng dẫn người dùng</li>
                                                            <li>Người dùng đa dạng</li>
                                                        </ul>
                                                    </li>
                                                    <li>Vấn đề trong thiết kế giao diện: Cần xem xét:
                                                        <ul>
                                                            <li>Cung cấp thông tin bằng cách nào?</li>
                                                            <li>Trình bày thông tin ra sao?</li>
                                                        </ul>
                                                    </li>
                                                    <li>Các kiểu tương tác
                                                        <br>
                                                        <center>
                                                            <img src="./assets/img/CNPM/Chap4/img4.png" alt=""
                                                                class="col-12 col-sm-10">
                                                        </center>
                                                    </li>
                                                    <li>Biểu diễn thông tin
                                                        <ul>
                                                            <li>Thông tin có thể được trình bày trực tiếp (VD: text trong
                                                                một trình soạn thảo)</li>
                                                            <li>Biến đổi thành một dạng biểu diễn khác (VD: dạng đồ họa)
                                                            </li>
                                                            <li>Model - View - Controller là cách tiếp cận hỗ trợ nhiều kiểu
                                                                biểu diễn dữ liệu</li>
                                                        </ul>
                                                        <center>
                                                            <img src="./assets/img/CNPM/Chap4/img5.png"
                                                                class="col-12 col-sm-10" alt="">
                                                        </center>
                                                        <ul>
                                                            <li>Có 2 loại thông tin cần được biểu diễn
                                                                <ul>
                                                                    <li>Thông tin tĩnh</li>
                                                                    <li>Thông tin động</li>
                                                                </ul>
                                                            </li>
                                                            <li>Các kỹ thuật hiển thị lượng lớn thông tin
                                                                <ul>
                                                                    <li>Hình ảnh</li>
                                                                    <li>Màu sắc</li>
                                                                </ul>
                                                            </li>
                                                            <li>Hướng dẫn sử dụng màu sắc
                                                                <ul>
                                                                    <li>Hạn chế số màu và mức độ sặc sỡ</li>
                                                                    <li>Dùng sự thay đổi màu để báo hiệu</li>
                                                                    <li>Dùng kí hiệu màu (color coding) để hỗ trợ công việc
                                                                    </li>
                                                                    <li>Dùng kí hiệu màu một cách cẩn trọng và nhất quán
                                                                    </li>
                                                                    <li>Cẩn thận về hiệu ứng cặp đôi của màu sắc</li>
                                                                </ul>
                                                            </li>
                                                            <li>Quy trình thiết kế giao diện
                                                                <ul>
                                                                    <li>Một quy trình lặp đi lặp lại với sự liên lạc giữa
                                                                        người dùng và người thiết kế</li>
                                                                    <li>Có 3 hoạt động chính:
                                                                        <ul>
                                                                            <li>User analysis</li>
                                                                            <li>System prototyping</li>
                                                                            <li>Interface evaluation</li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>Quốc tế hóa và địa phương hóa
                                                                <ul>
                                                                    <li>Phần mềm thích ứng với sự khác nhau về khu vực, ngôn
                                                                        ngữ và yêu cầu kỹ thuật của thị trường</li>
                                                                    <li>Quốc tế hóa là quá trình thiết kế một ứng dụng bao
                                                                        gồm nhiều ngôn ngữ</li>
                                                                    <li>Địa phương hóa: Sự thích ứng của quốc tế hóa với khu
                                                                        vực hoặc ngôn ngữ cụ thể bằng cách thêm các thành
                                                                        phần của địa phương và dịch văn bản</li>
                                                                </ul>
                                                            </li>
                                                            <li>Biểu tượng và khái niệm sự quen thuộc
                                                                <ul>
                                                                    <li>Tạo sự quen thuộc giữa các thành phần với những hệ
                                                                        thống
                                                                        khác. Ví dụ: Chức năng xóa tập tin có thể gắn biểu
                                                                        tượng
                                                                        thùng rác</li>
                                                                    <li>Không được sử dụng biểu tượng có nhiều hơn một ý
                                                                        nghĩa.</li>
                                                                    <li>Một số lưu ý khi thiết kế giao diện:
                                                                        <ul>
                                                                            <li>Nên có sự đồng nhất giữa các giao diện
                                                                                (menu, lệnh, hiển
                                                                                thị...)</li>
                                                                            <li>Đặt tên nhãn ngắn gọn, dễ nhớ.</li>
                                                                            <li>Tối ưu trong trình bày hộp thoại và di
                                                                                chuyển chuột</li>
                                                                            <li>Hạn chế nhập dữ liệu trực tiếp, nếu có thể,
                                                                                nên cho người
                                                                                dùng chọn lựa từ một số dữ liệu có sẵn.</li>
                                                                            <li>Yêu cầu xác nhận những tác vụ mang tính phá
                                                                                hủy (xoá
                                                                                dữ liệu).</li>
                                                                            <li>Chấp nhận lỗi từ phía người sử dụng.</li>
                                                                            <li>Nên cung cấp feedback cho người dùng.</li>
                                                                            <li>Tạo ra thông báo lỗi có ý nghĩa.</li>
                                                                            <li>Cung cấp trợ giúp</li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ol>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="collapse" id="collapse224">
                                    <div class="card card-body">
                                        <p><b>Thiết kế thủ tục (Thuật toán) </b></p>
                                        <ul>
                                            <li>Là quá trình giải thích cho người lập trình biết được quá trình xử lý từ
                                                Input đến Output</li>
                                            <li>Việc thiết kế cần quan tâm đến:
                                                <ul>
                                                    <li>Cấp bậc điều khiển</li>
                                                    <li>Cấu trúc dữ liệu</li>
                                                </ul>
                                            </li>
                                            <li>Cấu trúc chương trình. Biểu thị cho cách tổ chức các thành phần module khác.
                                            </li>
                                            <li>Một số chỉ số cần quan tâm:
                                                <ul>
                                                    <li>Chiều rộng</li>
                                                    <li>Thuộc cấp</li>
                                                    <li>Độ sâu</li>
                                                    <li>Tính thấy được</li>
                                                    <li>Số module ra</li>
                                                    <li>Số module vào</li>
                                                    <li>Tính cố kết</li>
                                                    <li>Thượng cấp</li>
                                                    <li>...</li>
                                                </ul>
                                            </li>
                                        </ul>
    
                                        <p>
                                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse2241"
                                                role="button" aria-expanded="false" aria-controls="collapse2241">
                                                Cấu trúc chương trình và các chỉ số được minh họa
                                            </a>
                                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse2242"
                                                role="button" aria-expanded="false" aria-controls="collapse2242">
                                                Cấu trúc dữ liệu
                                            </a>
                                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse2243"
                                                role="button" aria-expanded="false" aria-controls="collapse2243">
                                                Một số vấn đề trong thiết kế
                                            </a>
                                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse2244"
                                                role="button" aria-expanded="false" aria-controls="collapse2244">
                                                Đặc trưng của thiết kế hoàn thiện
                                            </a>
                                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse2245"
                                                role="button" aria-expanded="false" aria-controls="collapse2245">
                                                Các thuộc tính về cách sử dụng
                                            </a>
                                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse2246"
                                                role="button" aria-expanded="false" aria-controls="collapse2246">
                                                Kỹ thuật đánh giá và phân tích
                                            </a>
                                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse2247"
                                                role="button" aria-expanded="false" aria-controls="collapse2247">
                                                Biện pháp
                                            </a>
                                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse2248"
                                                role="button" aria-expanded="false" aria-controls="collapse2248">
                                                Tài liệu thiết kế
                                            </a>
                                        </p>
                                        <div>
                                            <div class="collapse" id="collapse2241">
                                                <div class="card card-body">
                                                    <h4>Cấu trúc chương trình và các chỉ số được minh họa</h4>
                                                    <center>
                                                        <img src="./assets/img/CNPM/Chap4/img7.png" alt=""
                                                            class="col-12 col-sm-10">
                                                    </center>
                                                </div>
                                            </div>
                                            <div class="collapse" id="collapse2242">
                                                <div class="card card-body">
                                                    <h4>Cấu trúc dữ liệu</h4>
    
                                                    <ul>
                                                        <li>Biểu diễn mối quan hệ logic giữa các phần dữ liệu riêng lẻ,..
                                                        </li>
                                                        <li>Một cấu trúc dữ liệu thường sử dụng
                                                            <div class="container">
                                                                <div class="row">
                                                                    <div class="col-12 col-sm-6">
                                                                        <ul>
                                                                            <li>Khoảng mục vô hướng</li>
                                                                            <li>Vector tuần tự</li>
                                                                            <li>Danh sách móc nối</li>
                                                                            <li>Không gian n chiều</li>
                                                                            <li>Cây cấp bậc</li>
                                                                            <li>...</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="col-12 col-sm-6">
                                                                        <img src="./assets/img/CNPM/Chap4/img6.png" alt=""
                                                                            class="col-12">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="collapse" id="collapse2243">
                                                <div class="card card-body">
                                                    <h4>Một số vấn đề trong thiết kế</h4>
                                                    <div>
                                                        <p>
                                                            <a class="btn btn-primary" data-bs-toggle="collapse"
                                                                href="#collapse22431" role="button" aria-expanded="false"
                                                                aria-controls="collapse22431">
                                                                Thiết kế cộng tác
                                                            </a>
                                                            <a class="btn btn-primary" data-bs-toggle="collapse"
                                                                href="#collapse22432" role="button" aria-expanded="false"
                                                                aria-controls="collapse22432">
                                                                Sự đồng thời
                                                            </a>
                                                        </p>
                                                        <div>
                                                            <div class="collapse" id="collapse22431">
                                                                <div class="card card-body">
                                                                    <h4>Thiết kế cộng tác</h4>
                                                                    <ul>
                                                                        <li>Đa phần hệ thống phần mềm đều sử dụng</li>
                                                                        <li>Một số vấn đề phát sinh:
                                                                            <ul>
                                                                                <li>Ai là người phù hợp nhất?</li>
                                                                                <li>Viết tài liệu thiết kế như thế nào?</li>
                                                                                <li>Làm sao để kết hợp...?</li>
                                                                            </ul>
                                                                        </li>
                                                                        <li>Nguyên nhân: do sự khác biệt về kinh nghiệm, sự
                                                                            hiểu biết và sở thích mỗi cá nhân</li>
                                                                        <li>Cách giải quyết: thống nhất các vấn đề trước khi
                                                                            đưa vào thực hiện</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="collapse" id="collapse22432">
                                                                <div class="card card-body">
                                                                    <h4>Sự đồng thời</h4>
                                                                    <ul>
                                                                        <li><b>Các vấn đề nảy sinh</b>
                                                                            <ul>
                                                                                <li>Tính nhất quán của dữ liệu được chia sẻ
                                                                                </li>
                                                                                <li>Đảm bảo rằng một hoạt động không can
                                                                                    thiệp vào các hoạt động khác</li>
                                                                            </ul>
                                                                        </li>
                                                                        <li><b>Cách giải quyết</b>
                                                                            <ul>
                                                                                <li>Sự đồng bộ</li>
                                                                                <li>Loại trừ lẫn nhau</li>
                                                                                <li>Giảm sát</li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="collapse" id="collapse2244">
                                                <div class="card card-body">
                                                    <h4>Đặc trưng của thiết kế hoàn thiện</h4>
    
                                                    <p><b>Cần quan tâm</b></p>
                                                    <ul>
                                                        <li>Đánh giá đầy đủ và toàn bộ thì quá đắt và không thực tế cho hầu
                                                            hết các hệ thống</li>
                                                        <li>Một giao diện cần dược đánh giá theo một đặc tả về tính sử dụng
                                                        </li>
                                                        <li>Cần thực hiện một số đánh giá UI để đánh giá mức độ thích hợp
                                                        </li>
                                                        <li>Các thuộc tính về tính sử dụng</li>
                                                        <li>Kỹ thuật đánh giá và phân tích</li>
                                                        <li>Biện pháp</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="collapse" id="collapse2245">
                                                <div class="card card-body">
                                                    <h4>Các thuộc tính về cách sử dụng</h4>
                                                    <table class="col-12 col-sm-10">
                                                        <thead>
                                                            <tr>
                                                                <th>Thuộc tính</th>
                                                                <th>Mô tả</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Khả năng học</td>
                                                                <td>Người dùng mới cần bao lâu để có thể hoạt động hiệu quả
                                                                    với hệ thống?</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Tốc độ vận hành</td>
                                                                <td>Tốc độ phản ứng của hệ thống có đáp ứng tốt công việc
                                                                    của người dùng</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Chịu lỗi</td>
                                                                <td>Mức độ dung thứ lỗi của hệ thống đối với lỗi người dùng
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Khả năng khôi phục</td>
                                                                <td>Khả năng hệ thống khôi phục từ lỗi của người dùng</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Tương thích</td>
                                                                <td>Hệ thống gắn bó chặt chẽ với một kiểu làm việc đến đâu?
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="collapse" id="collapse2246">
                                                <div class="card card-body">
                                                    <h4>Kỹ thuật đánh giá và phân tích</h4>
                                                    <ul>
                                                        <li>Câu hỏi điều tra để lấy phản hồi của người dùng</li>
                                                        <li>Quay video về việc sử dụng hệ thống rồi sau đó đánh giá nội dung
                                                        </li>
                                                        <li>Cải cách đoạn mã thu thập thông tin về các tiện ích được sử dụng
                                                            và lỗi của người dùng</li>
                                                        <li>Phần mềm có chức năng thu thập phản hồi trực tuyến của người
                                                            dùng</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="collapse" id="collapse2247">
                                                <div class="card card-body">
                                                    <h4>Biện pháp</h4>
                                                    <ul>
                                                        <li>Sử dụng để phân tích và đánh giá các khía cạnh khác nhau của
                                                            việc thiết kế phần mềm</li>
                                                        <li>Chia thành 2 loại:
                                                            <ul>
                                                                <li>Chức năng dựa trên thiết kế: Chức năng được xây dựng
                                                                    bằng cách phân tích các giao diện của hệ thống</li>
                                                                <li>Thiết kế hướng đối tượng: Sử dụng lớp các đối tượng làm
                                                                    trung tâm, từ đó xây dựng ra chức năng và giao diện</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="collapse" id="collapse2248">
                                                <div class="card card-body">
                                                    <h4>Tài liệu thiết kế</h4>
                                                    <p><b>Bao gồm các phần</b></p>
                                                    <ul>
                                                        <li>Mục nếu lý do cơ bản của thiết kế</li>
                                                        <li>Phác thảo những vấn đề then chốt và các thỏa hiệp</li>
                                                        <li>Mục mô tả về các thành phần của hệ thống</li>
                                                        <li>Mục xác định cách mà người dùng tương tác với hệ thống</li>
                                                        <li>Tập các biểu đồ và ký pháp hình thức mô tả toàn bộ tổ chức và
                                                            cấu trúc của hệ thống</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `]
        ]
    },
    CNPM02: {
        title: 'Phần 1',
        index: [
            ['Nội dung', 'CNPM021', `
            <div id="tableContent">
            <h3>Nội dung</h3>
            <ul>
                <li>Mô hình hóa dữ liệu</li>
                <li>Mô hình hóa dữ liệu mức quan niệm</li>
            </ul>
        </div>
    
        <div id="1">
            <h3>Mô hình hóa dữ liệu</h3>
            <ul>
                <li>Mô hình hóa là quá trình không thể thiếu</li>
                <li>Thiết kế và xây dựng dữ liệu cần phải chú trọng đến các thông tin cần thiết để hỗ trợ quy trình nghiệp
                    vụ khác nhau của các đơn vị hay tổ chức</li>
                <li>Ví dụ: Thiết kế hệ thống cho ngân hàng, cơ sở y tế</li>
                <li>Mô hình hóa được bắt đầu sau khi xác định được yêu cầu phần mềm</li>
                <li>Mô hình hóa dữ liệu cung cấp phương pháp và phương tiện để mô tả</li>
                <li>Mô hình dữ liệu phục vụ cho mục tiêu
                    <ul>
                        <li>Giúp người dùng và các bên liên quan hiểu về CSDL sẽ được cài đặt</li>
                        <li>Giúp người quản trị CSDL có thể cài đặt chính xác</li>
                    </ul>
                </li>
            </ul>
            <center>
                <img src="./assets/img/CNPM/Chap4/img8.png" alt="" class="col-12 col-sm-10">
            </center>
            <ul>
                <li>Mô hình hóa dữ liệu được dùng để biểu diễn thông tin ở <b style="color: red;">nhiều mức khác nhau</b>
                    <ul>
                        <li><b>Mô hình dữ liệu mức <span style="color: red;">quan niệm</span>:</b> Mức trừu tượng cao nhất
                            trong việc biểu diễn nhu cầu thông tin của một đơn vị tổ chức. Mục tiêu: vừa rõ ràng vừa dễ hiểu
                        </li>
                        <li><b>Mô hình dữ liệu mức <span style="color: red;">luận lý</span>:</b> Mang dữ liệu đến gần cấu
                            trúc cài đặt hơn</li>
                        <li><b>Mô hình dữ liệu mức <span style="color: red;">vật lý</span>:</b> được sử dụng như phương tiện
                            giao tiếp giữa các chuyên gia</li>
                    </ul>
                </li>
            </ul>
        </div>
    
        <div id="2">
            <h3>Mô hình dữ liệu mức quan niệm</h3>
    
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-sm-6">
                        <p><b>Là mô hình chi tiết mô tả toàn bộ cấu trúc dữ liệu tổ chức mà nó không phụ thuộc bất kỳ một hệ
                                quản trị CSDL nào hay sự xem xét việc cài đặt dữ liệu</b></p>
                    </div>
                    <div class="col-12 col-sm-6">
                        <center>
                            <img src="./assets/img/CNPM/Chap4/img9.png" alt="" class="col-12">
                        </center>
                    </div>
                </div>
            </div>
    
            <div>
                <p>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse12" role="button"
                        aria-expanded="false" aria-controls="collapse12">
                        Mô hình quan hệ thực thể
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse13" role="button"
                        aria-expanded="false" aria-controls="collapse13">
                        Lược đồ quan hệ thực thể
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse19" role="button"
                        aria-expanded="false" aria-controls="collapse19">
                        Bản số trong quan hệ
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse110" role="button"
                        aria-expanded="false" aria-controls="collapse20">
                        Tổng quát hóa/chuyên biệt hóa
                    </a>
                </p>
                <div>
                    <div class="collapse" id="collapse12">
                        <div class="card card-body">
                            <h4>Mô hình quan hệ thực thể (E-R model)</h4>
                            <ul>
                                <li>Là một mô hình biểu diễn mức độ hợp lý, chi tiết về dữ liệu của một tổ chức</li>
                                <li>Là mô hình biểu diễn các thực thể, các quan hệ (hay các sự kết hợp) giữa các thực thể,
                                    các thuộc tính của thực thể và các thuộc tính chung (trong mỗi quan hệ giữa các thực
                                    thể) của một tổ chức</li>
                                <li>Sơ đồ quan hệ thực thể (E-R Diagram) là một cách biểu diễn mô hình quan hệ thực thể dưới
                                    dạng các ký hiệu hình ảnh trực quan.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="collapse" id="collapse13">
                        <div class="card card-body">
                            <h4>Lược đồ quan hệ thực thể</h4>
    
                            <p><b>Bao gồm các khái niệm liên quan</b></p>
                            <div>
                                <p>
                                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse131" role="button"
                                        aria-expanded="false" aria-controls="collapse131">
                                        Thực thể (Entity)
                                    </a>
                                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse132" role="button"
                                        aria-expanded="false" aria-controls="collapse132">
                                        Kiểu thực thể (Entity type)
                                    </a>
                                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse133" role="button"
                                        aria-expanded="false" aria-controls="collapse133">
                                        Thể hiện thực thể (Entity Instance)
                                    </a>
                                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse134" role="button"
                                        aria-expanded="false" aria-controls="collapse134">
                                        Thuộc tính (Attribute)
                                    </a>
                                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse135" role="button"
                                        aria-expanded="false" aria-controls="collapse135">
                                        Kiểu của thuộc tính (Attribute Type)
                                    </a>
                                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse136" role="button"
                                        aria-expanded="false" aria-controls="collapse136">
                                        Quan hệ (Relationship)
                                    </a>
                                </p>
                                <div>
                                    <div class="collapse" id="collapse131">
                                        <div class="card card-body">
                                            <h4>Thực thể (Entity)</h4>
    
                                            <ul>
                                                <li>Một thực thể là một con người, một nơi, một đối tượng hay một sự kiện
                                                    hay một khải niệm trong môi trường người dùng mà tổ chức đó muốn duy trì
                                                    dữ liệu</li>
                                                <li>Mỗi thực thể có một nhận dạng riêng biệt</li>
                                                <li>Ví dụ:
                                                    <ul>
                                                        <li>Con người: công nhân, sinh viên,...</li>
                                                        <li>Nơi: cửa hàng, kho, tiểu bang,...</li>
                                                        <li>Đối tượng: hàng hóa, tòa nhà, xe mô tô,...</li>
                                                        <li>Sự kiện: việc bán hàng, sự đăng ký,....</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="collapse" id="collapse132">
                                        <div class="card card-body">
                                            <h4>Kiểu thực thể (Entity Type)</h4>
                                            <ul>
                                                <li>Là một tập hợp các thực thế có cùng đặc điểm và tính chất</li>
                                                <li>Cách biểu diễn:
                                                    <br>
                                                    <center>
                                                        <img src="./assets/img/CNPM/Chap4/img10.png" alt=""
                                                            class="col-12 col-sm-10">
                                                    </center>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="collapse" id="collapse133">
                                        <div class="card card-body">
                                            <h4>Thể hiện thực thể (Entity Instance)</h4>
                                            <ul>
                                                <li>Thể hiện thực thể: là 1 hiện thực của một thực thể</li>
                                                <li>Ví dụ:
                                                    <br>
                                                    Trong một công ty có một kiểu thực thể NHANVIEN nhưng có thể có hàng
                                                    trăm triệu hiện thực của kiểu thực thể NHANVIEN được lưu trong CSDL
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="collapse" id="collapse134">
                                        <div class="card card-body">
                                            <h4>Thuộc tính (Attribute)</h4>
                                            <ul>
                                                <li><b>Mỗi thuộc tính</b>: sẽ mô tả một tính chất hay một đặc điểm của một
                                                    kiểu thực thể
                                                    <br>
                                                    Ví dụ: mã nhân viên, họ tên, ngày sinh và giới tính là các thuộc tính mô
                                                    tả thông tin của kiểu thực thể Nhân viên
                                                </li>
                                                <li><b>Miền trị của thuộc tính (Attribute domain)</b> là một tập hợp các giá
                                                    trị có thể gán được cho một thuộc tính
                                                    <br>
                                                    Ví dụ: thuộc tính giới tính chỉ có một trong hai giá trị là nam hoặc nữ.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="collapse" id="collapse135">
                                        <div class="card card-body">
                                            <h4>Các kiểu thuộc tính (Attribute Types)</h4>
                                            <ul>
                                                <li>Thuộc tính đơn (Simple attribute): là 1 thuộc tính tạo thành bởi một
                                                    thành phần tồn tại độc lập
                                                    <br>
                                                    Ví dụ: Mã nhân viên, giới tính, ngày sinh
                                                </li>
                                                <li>Thuộc tính phức hợp (Composite attribute): Là một thuộc tính tạo thành
                                                    bởi nhiều thành phần tồn tại độc lập
                                                    <br>
                                                    Ví dụ: Địa chỉ của nhân viên
                                                </li>
                                                <li>Thuộc tính đơn trị (Single-value attribute): là một thuộc tính chỉ chứa
                                                    một giá trị cho mỗi thể hiện thực thể
                                                    <br>
                                                    Ví dụ: Mã nhân viên, Mã sinh viên
                                                </li>
                                                <li>Thuộc tính đa trị (Multi-value attribute): là một thuộc tính có thể chứa
                                                    nhiều giá trị cho mỗi thể hiện
                                                    <br>
                                                    VÍ dụ: Tel_No của chi nhánh
                                                </li>
                                                <li>Thuộc tính dẫn xuất (Derived attribute) là thuộc tính có giá trị dẫn
                                                    xuất từ giá trị của một thuộc tính hoặc một tập thuộc tính có liên quan
                                                    (Có thể không nằm trong thực thể).
                                                    <br>
                                                    Ví dụ: thuộc tính Tuổi
                                                </li>
                                                <li>Khóa ứng viên (Candidate key): là một thuộc tính hay một tập hợp các
                                                    thuộc tính có thể xác định duy nhất một thực thể của một kiểu thực thể
                                                </li>
                                                <li>Khóa chính (Primary key): là một khóa ứng viên được chọn là khóa chính
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="collapse" id="collapse136">
                                        <div class="card card-body">
                                            <h4>Quan hệ</h4>
                                            <ul>
                                                <li><b>Quan hệ</b>: là 1 sự kết hợp giữa các thể hiện của một hay nhiều kiểu
                                                    thực thể mà nó liên quan đến tổ chức</li>
                                                <li><b>Bậc của quan hệ (Degree)</b>: Là số kiểu thực thể tham gia trong một
                                                    quan hệ</li>
                                                <li><b>Quan hệ một ngôi hay quan hệ đệ qui (Unary Relationship/Recrursive
                                                        Relationship)</b></li>
                                                <li>Quan hệ 2 ngôi (Binary Relationship)</li>
                                                <li>Quan hệ 3 ngôi (Ternary Relationship)</li>
                                            </ul>
    
                                            <div>
                                                <p>
                                                    <a class="btn btn-primary" data-bs-toggle="collapse"
                                                        href="#collapse1361" role="button" aria-expanded="false"
                                                        aria-controls="collapse1361">
                                                        Các kiểu quan hệ (Relationship types)
                                                    </a>
                                                </p>
                                                <div>
                                                    <div class="collapse" id="collapse1361">
                                                        <div class="card card-body">
                                                            <ul>
                                                                <li>Quan hệ một - một
                                                                    <br>
                                                                    <center>
                                                                        <img src="./assets/img/CNPM/Chap4/im11.png" alt=""
                                                                            class="col-12 col-sm-10">
                                                                    </center>
                                                                </li>
                                                                <li>Quan hệ một - nhiều
                                                                    <br>
                                                                    <center>
                                                                        <img src="./assets/img/CNPM/Chap4/img11.png" alt=""
                                                                            class="col-12 col-sm-10">
                                                                    </center>
                                                                </li>
                                                                <li>Quan hệ nhiều - nhiều
                                                                    <br>
                                                                    <center>
                                                                        <img src="./assets/img/CNPM/Chap4/img12.png" alt=""
                                                                            class="col-12 col-sm-10">
                                                                    </center>
                                                                </li>
                                                                <li>Các quan hệ đặc biệt
                                                                    <ul>
                                                                        <li>Quan hệ đệ qui
                                                                            <br>
                                                                            <center>
                                                                                <img src="./assets/img/CNPM/Chap4/img13.png"
                                                                                    alt="" class="col-12 col-sm-10">
                                                                            </center>
                                                                        </li>
                                                                        <li>Quan hệ phụ thuộc hàm
                                                                            <br>
    
                                                                            <center>
                                                                                <img src="./assets/img/CNPM/Chap4/img14.png"
                                                                                    alt="" class="col-12 col-sm-10">
                                                                            </center>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="collapse" id="collapse19">
                        <div class="card card-body">
                            <h4>Bản số trong quan hệ (Cadinality)</h4>
                            <p>Bản số của thực thể B trong mối kết hợp với thực thể A là số thể hiện của thực thể B có thể
                                kết hợp với mỗi thể hiện của thực thể A</p>
    
                            <center>
                                <table class="col-12 col-sm-10">
                                    <thead>
                                        <tr>
                                            <th>Quan hệ</th>
                                            <th>Nội dung</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <center>
                                                    <img src="./assets/img/CNPM/Chap4/img16.png" alt="" class="col-12">
                                                </center>
                                            </td>
                                            <td>Mỗi thực thể A kết hợp với một và chỉ một thực thể B. Mỗi thực thể B có thể
                                                không được kết hợp hay kết hợp chỉ một thực thể A</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <center>
                                                    <img src="./assets/img/CNPM/Chap4/img17.png" alt="" class="col-12">
                                                </center>
                                            </td>
                                            <td>
                                                Mỗi thực thể A kết hợp một hay nhiều thực thể B. Mỗi thực thể B có thể không
                                                kết hợp hay kết hợp chỉ một thực thể A
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <center>
                                                    <img src="./assets/img/CNPM/Chap4/img18.png" alt="" class="col-12">
                                                </center>
                                            </td>
                                            <td>Mỗi thực thể A kết hợp với một hay nhiều thực thể B và mỗi thực thể B được
                                                kết hợp một hay nhiều thực thể A</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <center>
                                                    <img src="./assets/img/CNPM/Chap4/img19.png" alt="" class="col-12">
                                                </center>
                                            </td>
                                            <td>Đôi khi một kiểu thực thể lại quan hệ với chính nó với ý nghĩa kết hợp như
                                                giữa 2 kiểu thực thể khác nhau</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <center>
                                                    <img src="./assets/img/CNPM/Chap4/img21.png" alt="" class="col-12">
                                                </center>
                                            </td>
                                            <td>Mỗi thực thể A kết hợp một hay nhiều thực thể B. Mỗi thực thể B chỉ kết hợp
                                                với một thực thể A. Đặc biệt, khi chuyển sang cơ sở dữ liệu thì khóa của
                                                thực thể A sẽ tham gia vừa là khóa ngoại vừa là thành phần khóa chính của
                                                bảng B</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </center>
                        </div>
                    </div>
                    <div class="collapse" id="collapse110">
                        <div class="card card-body">
                            <h4>Tổng quát hóa/chuyên biệt hóa</h4>
                            <ul>
                                <li>Tổng quát hóa (Generalization): là gộp các thực thể thành một thực thể bao hàm tất cả
                                    các thể hiện của các thực thể con</li>
                                <li>Chuyên biệt hóa (Specialization): là phân hoạch một thực thể thành các tập hợp con (Các
                                    chuyên biệt hóa)
                                    <center>
                                        <img src="./assets/img/CNPM/Chap4/img15.png" alt="" class="col-12 col-sm-10">
                                    </center>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `]
        ]
    },
    CNPM03: {
        title: 'Phần 2',
        index: [
            ['Nội dung', 'CNPM031', `
            <div id="1">
        <h3>Mô hình dữ liệu mức luận lý</h3>

        <ul>
            <li>Được sinh ra từ mô dữ liệu mức quan niệm bằng cách sử dụng các quy tắc chuyển đổi từ mô hình thực thể
                liên kết sang mô hình quan niệm</li>
            <li>Áp dụng các quy tắc để chuyển đổi từ mô hình thực thể liên kết sang mô hình quan hệ</li>
        </ul>

        <div>
            <p>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse11" role="button"
                    aria-expanded="false" aria-controls="collapse11">
                    Quy tắc 1
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse12" role="button"
                    aria-expanded="false" aria-controls="collapse12">
                    Quy tắc 2
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse13" role="button"
                    aria-expanded="false" aria-controls="collapse13">
                    Quy tắc 3
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse14" role="button"
                    aria-expanded="false" aria-controls="collapse14">
                    Quy tắc 4
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse15" role="button"
                    aria-expanded="false" aria-controls="collapse15">
                    Quy tắc 5
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse16" role="button"
                    aria-expanded="false" aria-controls="collapse16">
                    Quy tắc 6
                </a>
            </p>
            <div>
                <div class="collapse" id="collapse11">
                    <div class="card card-body">
                        <h4>Quy tắc 1</h4>

                        <p><b>Mỗi thực thể trong mô hình CDM được chuyển thành một quan hệ (bảng) trong mô hình quan
                                hệ</b></p>

                        <ul>
                            <li>Tên quan hệ là tên thực thể và các thuộc tính của thực thể trở thành các thuộc tính của
                                quan hệ tương đương</li>
                            <li>Khóa chính của thực thể &lt;=&gt; khóa chính của quan hệ</li>
                            <li>Các khóa thay thể trở thành các khóa thay thế của quan hệ</li>
                        </ul>

                        <center>
                            <img src="./assets/img/CNPM/Chap4/img22.png" alt="" class="col-12 col-sm-8">
                        </center>
                    </div>
                </div>
                <div class="collapse" id="collapse12">
                    <div class="card card-body">
                        <h4>Quy tắc 2</h4>
                        <p>Các thực thể tổng quát hóa/chuyên biệt hóa trong mô hình thực thể - liên kết khi chuyển sang
                            mô hình quan hệ có thể sử dụng 1 trong 3 cách:</p>
                        <ul>
                            <li>Cách 1: Xóa đi các thực thể chuyên biệt hóa, chỉ sinh ra đúng một quan hệ với tên của
                                thực thể tổng quát</li>
                            <li>Cách 2: Xóa thực thể tổng quát</li>
                            <li>Cách 3: Mỗi thực thể tổng quát xóa hay chuyên biệt hóa đều được chuyển thành một quan hệ
                                tương ứng trong LDM</li>
                        </ul>

                        <p><b>Ví dụ</b>. Áp dụng quy tắc 2</p>
                        <center>
                            <img src="./assets/img/CNPM/Chap4/img23.png" alt="" class="col-12 col-sm-8">
                        </center>
                        <ul>
                            <li><b>Cách 1</b>
                                <br>
                                CONGCHUC(<b>MSCB</b>, HOTEN, NGAYSINH, NGHIEPVU, CHUCDANH)
                            </li>
                            <li>
                                <b>Cách 2</b>
                                <br>
                                CHUYENVIEN(<b>MSCB</b>, HOTEN, NGAYSINH, NGHIEPVU)
                                <br>
                                GIANGVIEN(<b>MSCB</b>, HOTEN, NGAYSINH, CHUCDANH)
                            </li>
                            <li>
                                <b>Cách 3</b>
                                <br>
                                CONGCHUC(<b>MSCB</b>, HOTEN, NGAYSINH)
                                <br>
                                CHUYENVIEN(<b>MSCB</b>, NGHIEPVU)
                                <br>
                                GIANGVIEN(<b>MSCB</b>, CHUCDANH)

                                <br>Tham chiếu <br>
                                CHUYENVIEN(MSCB) -> CONGCHUC(MSCB)
                                <br>
                                GIANGVIEN(MSCB) -> CONGCHUC(MSCB)
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="collapse" id="collapse13">
                    <div class="card card-body">
                        <h4>Quy tắc 3</h4>
                        <p><b>Mối quan hệ nhiều - nhiều (Many - to - Many) sẽ được chuyển thành một bảng trong mô hình
                                quan hệ</b></p>
                        <ul>
                            <li>Bảng này có tên là tên của quan hệ, các thuộc tính là các thuộc tính khóa của các thực
                                thể có liên quan. Khóa chính của bảng là tổ hợp tất cả các thuộc tính</li>
                            <li>Các tham chiếu tương ứng cũng được tạo</li>
                        </ul>
                        <center>
                            <img src="./assets/img/CNPM/Chap4/img24.png" alt="" class="col-12 col-sm-10">
                        </center>
                        <h4>Mô hình quan hệ tương ứng</h4>
                        <p>SINHVIEN(<b>MSSV</b>, HOTEN, PHAI, NGAYSINH, QUEQUAN)</p>
                        <p>LOP_HP(<b>MALOP_HP</b>, TUANDAY, TIET_BD, THU, SOTIET)</p>
                        <p>DANGKY(<b>MSSV</b>, <b>MALOP_HP</b>)</p>
                        <h4>Các tham chiếu</h4>
                        <p>DANGKY(MSSV) -> SINHVIEN(MSSV)</p>
                        <p>DANGKY(MALOP_HP) -> LOP_HP(MALOP_HP)</p>
                    </div>
                </div>
                <div class="collapse" id="collapse14">
                    <div class="card card-body">
                        <h4>Quy tắc 4</h4>
                        <p>Với mỗi quan hệ One-to-many sẽ chuyển thành một tham chiếu trong mô hình quan hệ</p>
                        <ul>
                            <li>Một quan hệ One-to-many sẽ trở thành một tham chiếu "bảng con đến bảng cha"
                                <br>
                                <center>
                                    <img src="./assets/img/CNPM/Chap4/img25.png" alt="" class="col-12 col-sm-8">
                                </center>
                            </li>
                            <li>Mô hình quan hệ tương ứng:
                                <br>
                                SINHVIEN(<b>MSSV</b>, HOTEN, PHAI, NGAYSINH, QUEQUAN)
                                <br>
                                LOP(<b>MALOP</b>, TENLOP)
                                <br>
                                Tham chiếu: SINHVIEN(MALOP) -> LOP(MALOP)
                            </li>
                        </ul>
                        <p>Với mỗi quan hệ One-to-many sẽ chuyển thành một tham chiếu trong mô hình quan hệ</p>
                        <ul>
                            <li>Với mỗi phụ thuộc hàm khóa chính của thực thể bên 1 vừa đóng vai trò khóa ngoại, vừa là
                                thành phần khóa chính bên nhiều
                                <br>
                                <center>
                                    <img src="./assets/img/CNPM/Chap4/img26.png" alt="" class="col-12 col-sm-10">
                                </center>
                            </li>
                            <li>Mô hình quan hệ tương ứng
                                <br>
                                TANG(<b>STT_TANG</b>, DIENGIAI), PHONG(<b>STT_PHONG</b>, SUCCHUA)
                            </li>
                            <li>Tham chiếu:
                                PHONG(STT_TANG) -> TANG(STT_TANG)
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="collapse" id="collapse15">
                    <div class="card card-body">
                        <h4>Quy tắc 5</h4>
                        <p><b>Chuyển quan hệ One-to-One thành quan hệ One-to-Many và áp dụng quy tắc 4</b></p>

                        <ul>
                            <li>Chuyển bản số 1 thành nhiều thường dựa vào kinh nghiệm của người phân tích thiết kế</li>
                            <li>Có thể dựa vào việc nhận biết lớp nào có trước, lớp đối tượng nào là chủ sở hữu của lớp
                                đối tượng nào để điều chỉnh bản số</li>
                        </ul>

                        <center>
                            <img src="./assets/img/CNPM/Chap4/img27.png" alt="" class="col-12 col-sm-8">
                        </center>
                    </div>
                </div>
                <div class="collapse" id="collapse16">
                    <div class="card card-body">
                        <h4>Quy tắc 6</h4>
                        <p><b>Một bản số của quan hệ có dạng Optional - One là quan hệ sẽ được chuyển thành bảng</b></p>

                        <ul>
                            <li>Bảng mới sẽ có tên của quan hệ cùng khóa chính là các thuộc tính khóa chính của thực thể
                                có liên quan
                                <br>
                                <center>
                                    <img src="./assets/img/CNPM/Chap4/img28.png" alt="" class="col-12 col-sm-8">
                                </center>
                            </li>
                            <li>Mô hình quan hệ tương ứng:
                                <br>
                                NHANVIEN(<b>MANV</b>, HOTENNV, GIOITINH, NGAYSINH, DIACHINV)
                                <br>
                                TONGIAO(<b>MATG</b>, TENTG)
                                <br>
                                COTONGIAO(<b>MANV</b>, MATG)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div id="2">
        <h3>Thiết kế dữ liệu mức vật lý</h3>

        <div>
            <p>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse21" role="button"
                    aria-expanded="false" aria-controls="collapse21">
                    Thiết kế CSDL
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse22" role="button"
                    aria-expanded="false" aria-controls="collapse22">
                    Mô hình dữ liệu mức vật lý
                </a>
            </p>
            <div>
                <div class="collapse" id="collapse21">
                    <div class="card card-body">
                        <h4>Thiết kế CSDL</h4>

                        <ul>
                            <li>Phục vụ cho mục tiêu xây dựng được một CSDL có cấu trúc ổn định và mở rộng</li>
                            <li>Việc thiết kế mô hình dữ liệu mức luận lý thể hiện qua 4 bước:
                                <ul>
                                    <li>Phát triển một mô hình dữ liệu mức luận lý từ mỗi giao diện người dùng</li>
                                    <li>Tích hợp khung nhìn</li>
                                    <li>Sinh mô hình dữ liệu mức luận lý từ mô hình quan niệm</li>
                                    <li>So sánh, điều chỉnh CSDL luận lý</li>
                                </ul>
                            </li>
                            <li>Một số các quan hệ có thể thừa, nó có thể chri đến các thực thể giống nhau</li>
                            <li>Đây được coi là bước cuối cùng trong thiết kế CSDL luận lý và CSDL</li>
                            <li>Các vấn đề thường gặp phải:
                                <ul>
                                    <li>Từ đồng nghĩa</li>
                                    <li>Tên trùng nhau</li>
                                    <li>Phụ thuộc giữa các thuộc tính không phải khóa</li>
                                    <li>Hai lớp đối tượng trong cùng quan hệ</li>
                                </ul>
                            </li>
                        </ul>

                        <div>
                            <p>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse211" role="button" aria-expanded="false" aria-controls="collapse211">
                                    Từ đồng nghĩa
                                  </a>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse212" role="button" aria-expanded="false" aria-controls="collapse212">
                                    Tên trùng nhau
                                  </a>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse213" role="button" aria-expanded="false" aria-controls="collapse213">
                                    Phụ thuộc giữa các thuộc tính không phải khóa
                                  </a>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse214" role="button" aria-expanded="false" aria-controls="collapse214">
                                    Hai lớp đối tượng trong cùng quan hệ
                                  </a>
                            </p>
                            <div>
                                <div class="collapse" id="collapse211">
                                    <div class="card card-body">
                                      <h4>Từ đồng nghĩa</h4>
                                      <ul>
                                        <li>2 hoặc nhiều thuộc tính có thể được định danh với tên khác nhau nhưng y nghĩa như nhau</li>
                                        <li>Trường hợp này cần xác định một tên chuẩn, thay thế các từ đồng nghĩa khác bởi tên chuẩn này</li>
                                        <li>Ví dụ:
                                            <br>
                                            SINHVIEN1(<u>MASV</u>, HOTEN)
                                            <br>
                                            SINHVIEN2(<u>MSSV</u>, HOTEN, DIACHI)
                                            <br>
                                            => Hợp nhất: SINHVIEN(<u>MSV</u>, HOTEN, DIACHI)
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                <div class="collapse" id="collapse212">
                                    <div class="card card-body">
                                      <h4>Tên trùng nhau</h4>
                                      <p>Trường hợp mà các thuộc tính khác nhau của cùng một đối tượng của các đối tượng khác nhau lại được định nghĩa giống nhau</p>
                                      <p>Ví dụ</p>
                                      <p>SINHVIEN1(<u>MSV</u>, HOTEN, DIACHI) - DIACHI lưu tại địa chỉ trường</p>
                                      <p>SINHVIEN2(<u>MSV</u>, HOTEN, PHONE, DIACHI) - DIACHI lưu tại địa chỉ nhà</p>
                                      <p>=> Giải quyết: Tạo tên thuộc tính mới và hợp nhất</p>
                                      <p>SINHVIEN(<u>MSV</u>, HOTEN, PHONE, DIACHITRUONG, DIACHINHA)</p>
                                    </div>
                                  </div>
                                <div class="collapse" id="collapse213">
                                    <div class="card card-body">
                                      <h4>Phụ thuộc giữa các thuộc tính không phải khóa</h4>
                                      <p>Khi 2 quan hệ thỏa dạng chuẩn được hợp nhất thành quan hệ, phụ thuộc giữa các thuộc tính không phải khóa có thể xảy ra</p>

                                      <p><b>Ví dụ</b></p>
                                      <p>STUDENT1(Student_ID, Major)</p>
                                      <p>STUDENT2(Student_ID, Adviser)</p>
                                      <p>=> Hợp nhất 2 quan hệ STUDENT(Student_ID, Major, Adviser)</p>
                                    </div>
                                  </div>
                                <div class="collapse" id="collapse214">
                                    <div class="card card-body">
                                      <h4>Hai lớp đối tượng trong cùng quan hệ</h4>
                                      <p>Giả sử ta có 2 quan hệ biểu diễn cho 2 lớp đối tượng bệnh nhân khác nhau tại một cơ sở điều trị, bệnh nhân ngoại trú và nội trú</p>
                                      <ul>
                                        <li>PATENT1(PATENT_ID, Name, Address, Date_Treated)</li>
                                        <li>PATENT2(PATENT_ID, Room_Number)</li>
                                        <li>Thực hiện tách như sau:
                                            <br>
                                            <ul>
                                                <li>PATENT(PATENT_ID, Name, Address, Date_Treated)</li>
                                                <li>INPATENT(PATENT_ID, Room_Number)</li>
                                            </ul>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="collapse" id="collapse22">
                    <div class="card card-body">
                        <h4>Mô hình dữ liệu vật lý</h4>

                        <ul>
                            <li>Được sử dụng để đưa ra bản thiết kế mức vật lý đầy đủ</li>
                            <li>Công việc thực hiện:
                                <ul>
                                    <li>Xem xét các định nghĩa của từng thuộc tính để có thể đi đến lựa chọn kiểu dữ liệu phù hợp</li>
                                    <li>Mô tả nơi nào và khi nào dữ liệu được nhập vào hệ thống, được truy cập và cập nhật</li>
                                    <li>Lựa chọn cách thức tổ chức dữ liệu (tập trung hay phân tán)</li>
                                </ul>
                            </li>
                            <li>Dữ liệu có thể được phân nhóm theo tính chất như sau:
                                <ul>
                                    <li>Dữ liệu thường trực</li>
                                    <li>Dữ liệu gốc</li>
                                    <li>Dữ liệu tạm thời</li>
                                </ul>
                            </li>
                            <center>
                                <img src="./assets/img/CNPM/Chap4/img29.png" alt="" class="col-12 col-sm-10">
                            </center>
                        </ul>

                        <div>
                            <p>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse221" role="button" aria-expanded="false" aria-controls="collapse221">
                                    Dữ liệu thường trực
                                  </a>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse222" role="button" aria-expanded="false" aria-controls="collapse222">
                                    Dữ liệu gốc
                                  </a>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse223" role="button" aria-expanded="false" aria-controls="collapse223">
                                    Dữ liệu tạm thời
                                  </a>
                            </p>
                            <div>

                                <div class="collapse" id="collapse221">
                                    <div class="card card-body">
                                     <h4>Dữ liệu thường trực</h4>
                                     <ul>
                                        <li>Dữ liệu cơ sở, dữ liệu danh mục: là dữ liệu làm cơ sở cho dữ liệu khác</li>
                                        <li>Đặc tính cơ bản là không thay đổi</li>
                                        <li>Ví dụ: Dữ liệu về môn học được xem là dữ liệu thường trực</li>
                                     </ul>
                                    </div>
                                  </div>
                                <div class="collapse" id="collapse222">
                                    <div class="card card-body">
                                     <h4>Dữ liệu gốc</h4>
                                     <ul>
                                        <li>Thuộc loại dữ liệu lý lịch, dữ liệu lịch sử, hoặc dữ liệu tình trạng để biểu thị cho các sự kiện xảy ra theo thời gian, không gian</li>
                                        <li>Dữ liệu này phát sinh hằng ngày</li>
                                        <li>Căn cứ vào thực tế để lựa chọn cách thức tổ chức dữ liệu</li>
                                        <li>Ví dụ: Quản lý siêu thị có chi nhánh ở nhiều địa phương khác nhau</li>
                                     </ul>
                                    </div>
                                  </div>
                                <div class="collapse" id="collapse223">
                                    <div class="card card-body">
                                     <h4>Dữ liệu tạm thời</h4>
                                     <p>Chỉ sử dụng trong một thời gian nào đó hoặc phục vụ cho một chức năng nào đó và vì thế khi không cần có thể xóa đi</p>
                                    </div>
                                  </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            `]
        ]
    }
}