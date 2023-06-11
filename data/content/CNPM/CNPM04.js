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
    },
    CNPM04: {
        title: 'Phần 3',
        index: [
            ['Nội dung', 'CNPM041', `
            <div id="tableContent">
            <h3>Nội dung</h3>
            <ul>
                <li>Các khái niệm liên quan đến thiết kế xử lý</li>
                <li>Lưu đồ dòng dữ liệu và các khái niệm liên quan</li>
            </ul>
        </div>
    
        <div id="1">
            <h4>Thiết kế xử lý</h4>
    
            <ul>
                <li>Để biểu diễn việc xử lý dữ liệu, người ta thường dùng lưu đồ dòng dữ liệu (Data flow diagram - DFD)</li>
                <li>CDM:
    
                    <ul>
                        <li>Làm rõ mối quan hệ và ngữ nghĩa giữa các dữ liệu</li>
                        <li>Không thể hiện cách thức các dữ liệu này sẽ được tạo ra, thay đổi và luân chuyển trong hệ thống
                        </li>
                    </ul>
                </li>
                <li>Giải pháp: Xây dựng thành phần xử lý DFD
                    <ul>
                        <li>Tiệp cận cổ điển</li>
                        <li>Tiếp cận hiện đại
                            <ul>
                                <li>Theo kiểu Bắc Mỹ: Mô hình DFD (Có 2 mức: mức quan niệm và mức vật lý)</li>
                                <li>Theo kiểu châu Âu: Mô hình MERISE (có 3 mức: mức quan niệm, mức logic, mức vật lý)</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <div>
    
                <p>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse11" role="button"
                        aria-expanded="false" aria-controls="collapse11">
                        Lưu đồ Dòng dữ liệu (DFD)
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse12" role="button"
                        aria-expanded="false" aria-controls="collapse12">
                        Mục đích của 1 DFD
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse13" role="button"
                        aria-expanded="false" aria-controls="collapse13">
                        Các khái niệm
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse14" role="button"
                        aria-expanded="false" aria-controls="collapse14">
                        Kết hợp các khái niệm trên 1 ô xử lý
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse15" role="button"
                        aria-expanded="false" aria-controls="collapse15">
                        Các cấp DFD
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse16" role="button"
                        aria-expanded="false" aria-controls="collapse16">
                        Các luật về DFD
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse17" role="button"
                        aria-expanded="false" aria-controls="collapse17">
                        Cân bằng các DFD
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse18" role="button"
                        aria-expanded="false" aria-controls="collapse18">
                        Các nguyên tắc dừng phân rã DFD
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse19" role="button"
                        aria-expanded="false" aria-controls="collapse19">
                        Đặc tả ô xử lý
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse20" role="button"
                        aria-expanded="false" aria-controls="collapse20">
                        Mối quan hệ giữa CDM và DFD
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse21" role="button"
                        aria-expanded="false" aria-controls="collapse21">
                        Các bước phát triển DFD
                    </a>
                </p>
                <div>
                    <div class="collapse" id="collapse11">
                        <div class="card card-body">
                            <h4>Lưu đồ Dòng dữ liệu (DFD)</h4>
                            <ul>
                                <li>DFD biểu diễn sự kết nối giữa các hoạt động của hệ thống thông qua việc trao đổi dữ liệu
                                    khi hệ
                                    thống hoạt động</li>
                                <li>Lưu đồ dòng dữ liệu phải thể hiện được:
                                    <ul>
                                        <li>Xử lý nào phụ thuộc vào các xử lý nào?</li>
                                        <li>Dữ liệu cần cho mỗi xử lý</li>
                                    </ul>
                                </li>
                                <li><b>Phương pháp tạo DFD</b>: <i>phân rã các hoạt động chi tiết</i> dần đến khi có thể
                                    chuyển cho
                                    người lập trình triển khai</li>
                            </ul>
                        </div>
                    </div>
                    <div class="collapse" id="collapse12">
                        <div class="card card-body">
                            <h4>Một DFD sẽ mô tả:</h4>
                            <ul>
                                <li>Các quá trình xử lý bên trong hệ thống</li>
                                <li>Các kho lưu trữ hỗ trợ cho các thao tác của hệ thống</li>
                                <li>Các dòng thông tin trong hệ thống</li>
                                <li>Ranh giới của hệ thống</li>
                                <li>Sự giao tiếp với các thực thể bên ngoài</li>
                            </ul>
                        </div>
                    </div>
                    <div class="collapse" id="collapse13">
                        <div class="card card-body">
                            <p>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse131" role="button"
                                    aria-expanded="false" aria-controls="collapse131">
                                    Quá trình xử lý/ô xử lý
                                </a>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse132" role="button"
                                    aria-expanded="false" aria-controls="collapse132">
                                    Dòng dữ liệu: Dữ liệu vào & Dữ liệu ra
                                </a>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse133" role="button"
                                    aria-expanded="false" aria-controls="collapse133">
                                    Nguồn / đích
                                </a>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse134" role="button"
                                    aria-expanded="false" aria-controls="collapse134">
                                    Kho dữ liệu
                                </a>
                            </p>
                            <div>
                                <div class="collapse" id="collapse131">
                                    <div class="card card-body">
                                        <ul>
                                            <li>Gồm nhiều thao tác trong một lĩnh vực nào đó</li>
                                            <li>Môt ô xử lý tương đương với một quá trình xử lý trong thế giới thực</li>
                                            <li>Tên ô xử lý thường là một động từ</li>
                                            <li>
                                                Ký hiệu
                                                <br>
    
                                                <center>
                                                    <img src="./assets/img/CNPM/Chap4/img30.png" alt=""
                                                        class="col-12 col-sm-6">
                                                </center>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="collapse" id="collapse132">
                                    <div class="card card-body">
                                        <h4>Dòng dữ liệu</h4>
                                        <ul>
                                            <li><b>Dữ liệu vào:</b> Các đối tượng tham gia vào quá trình xử lý, đó là giá
                                                trị của các thuộc tính của các đối tượng đó</li>
                                            <li><b>Dữ liệu ra:</b> Là kết quả của một quá trình xử lý trong thế giới thực,
                                                thường là một vật chứng nào đó (danh sách, hóa đơn,...)</li>
                                            <li>Ký hiệu dòng dữ liệu
                                                <br>
                                                <center>
                                                    <img src="./assets/img/CNPM/Chap4/img31.png" alt=""
                                                        class="col-12 col-sm-8">
                                                </center>
                                                <br>
                                                => Dữ liệu ra của ô xử lý này có thể là dữ liệu vào của ô xử lý khác
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="collapse" id="collapse133">
                                    <div class="card card-body">
                                        <h4>Nguồn / Đích</h4>
                                        <ul>
                                            <li><b>Là các thực thể bên ngoài hệ thống</b>
                                                <br>
                                                <ul>
                                                    <li>Nguồn tác động vào hệ thống khởi tạo các quá trình xử lý</li>
                                                    <li>Đích là đối tượng mà hệ thống phải cung cấp cho</li>
                                                </ul>
                                            </li>
                                            <li>Ký hiệu:
                                                <br>
                                                <center>
                                                    <img src="./assets/img/CNPM/Chap4/img32.png" alt=""
                                                        class="col-12 col-sm-10">
                                                </center>
                                            </li>
                                            <li>Một nguồn/đích có thể là:
                                                <ul>
                                                    <li>Một tổ chức khác hay đơn vị khác của tổ chức gửi dữ liệu hoặc nhận
                                                        thông tin từ hệ thống được phân tích.
                                                        <br>
                                                        VD: bộ phận cung cấp hàng
                                                    </li>
                                                    <li>Một người bên trong hoặc bên ngoài đơn vị kinh doanh hỗ trợ bởi hệ
                                                        thống đang phân tích và tương tác với hệ thống. <br>
                                                        VD. Khách hàng
                                                    </li>
                                                    <li>Một hệ thống thông tin khác có trao đổi thông tin với hệ thống đang
                                                        được phân tích</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="collapse" id="collapse134">
                                    <div class="card card-body">
                                        <h4>Kho dữ liệu</h4>
                                        <ul>
                                            <li>Là nơi chứa dữ liệu mà quá trình xử lý cần tham khảo hoặc cần lưu trữ lại
                                                sau quá trình xử lý</li>
                                            <li>Ký hiệu
                                                <br>
                                                <center>
                                                    <img src="./assets/img/CNPM/Chap4/img33.png" alt=""
                                                        class="col-12 col-sm-8">
                                                </center>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="collapse" id="collapse14">
                        <div class="card card-body">
                            <h4>Kết hợp các khái niệm trên 1 ô xử lý</h4>
                            <center>
                                <img src="./assets/img/CNPM/Chap4/img34.png" alt="" class="col-12">
                            </center>
                        </div>
                    </div>
                    <div class="collapse" id="collapse15">
                        <div class="card card-body">
                            <h4>Các cấp DFD</h4>
    
                            <p>Việc phân tích thành phần xử lý bằng DFD là phương pháp phân tích đi xuống (top-down), từ
                                tổng quát đến chi tiêt</p>
    
                            <div>
                                <p>
                                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse151" role="button"
                                        aria-expanded="false" aria-controls="collapse151">
                                        DFD cấp 0
                                    </a>
                                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse152" role="button"
                                        aria-expanded="false" aria-controls="collapse152">
                                        DFD cấp n
                                    </a>
                                </p>
                                <div>
                                    <div class="collapse" id="collapse151">
                                        <div class="card card-body">
                                            <h4>DFD cấp 0</h4>
    
                                            <ul>
                                                <li>Là cấp thấp nhất hay còn gọi là sơ đồ ngữ cảnh (Context diagram)</li>
                                                <li>Trong đó toàn bộ hệ thống là một quá trình xử lý</li>
                                                <li>Ký hiệu
                                                    <br>
                                                    <center>
                                                        <img src="./assets/img/CNPM/Chap4/img35.png" alt=""
                                                            class="col-12 col-sm-10">
                                                    </center>
                                                </li>
                                            </ul>
    
                                            <p><b>Vd: DFD cấp 0 của HT đặt thức ăn</b></p>
    
                                            <center>
                                                <img src="./assets/img/CNPM/Chap4/img36.png" alt=""
                                                    class="col-12 col-sm-10">
                                            </center>
                                        </div>
                                    </div>
                                    <div class="collapse" id="collapse152">
                                        <div class="card card-body">
                                            <h4>DFD cấp n</h4>
                                            <ul>
                                                <li>Các cấp cao hơn có được bằng cách chi tiết hóa từng ô xử lý của cấp
                                                    trước</li>
                                                <li>Cấp n có được bằng cách phân rã mỗi ô xử lý cấp n - 1 thành nhiều ô xử
                                                    lý cấp n</li>
                                                <li>Việc dừng ở mức nào là tùy hệ thống, thường là tới mức mà mọi người đều
                                                    chấp nhận trong việc nhận thức về thành phần xử lý của hệ thống</li>
                                            </ul>
    
                                            <p><b>Ví dụ</b>. DFD cấp 1 của HT đặt thức ăn</p>
                                            <center>
                                                <img src="./assets/img/CNPM/chap4/img37.png" alt=""
                                                    class="col-12 col-sm-10">
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="collapse" id="collapse16">
                        <div class="card card-body">
                            <h4>Các luật về DFD</h4>
    
                            <p>Các luật cơ bản mà tất cả các DFD phải tuân theo</p>
                            <ul>
                                <li>Dữ liệu vào và dữ liệu ra của một ô xử lý phải luôn luôn khác nhau</li>
                                <li>Các ô xử lý, các kho dữ liệu và các nguồn/đích phải có một tên duy nhất
                                    <br>
                                    Tuy nhiên, để làm cho sơ đồ không bị rối, ta có thể vẽ lặp lại các kho dữ liệu và các
                                    nguồn/đích trên một sơ đồ
                                </li>
                            </ul>
    
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-12 col-sm-6">
                                        <p><b>Ô xử lý</b></p>
                                        <ul style="list-style-type: '';">
                                            <li>A. Không có ô xử lý nào chỉ có dữ liệu ra (Phép lạ?)</li>
                                            <li>B. Không có ô xử lý nào chỉ có dữ liệu vào (Lỗ đen?)</li>
                                            <li>C. Tên của một ô xử lý phải là động từ</li>
                                        </ul>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <p><b>Kho dữ liệu</b></p>
                                        <ul style="list-style-type: '';">
                                            <li>D. Dữ liệu không thể di chuyển trực tiếp từ một kho này sang một kho khác
                                            </li>
                                            <li>E. Dữ liệu không thể di chuyển trực tiếp từ một nguồn vào một kho</li>
                                            <li>F. Dữ liệu không thể di chuyển trực tiếp từ một kho vào một đích</li>
                                            <li>Tên kho dữ liệu phải là danh từ</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
    
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-12 col-sm-6">
                                        <p><b>Nguồn/đích</b></p>
                                        <ul style="list-style-type: '';">
                                            <li>H. Dữ liệu không thể di chuyển trực tiếp từ một nguồn sang một đích</li>
                                            <li>I. Tên của một nguồn/đích là một danh từ</li>
                                        </ul>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <p><b>Dòng dữ liệu</b></p>
                                        <ul style="list-style-type: '';">
                                            <li>J. Một dòng dữ liệu chỉ có một hướng</li>
                                            <li>K. Một ký hiệu phân nhánh cho biết chính xác cùng một dữ liệu xuất ra từ một nơi và đi đến 2 hay nhiều ô xử lý hay nguồn/đích khác</li>
                                        </ul>
                                        <center>
                                            <img src="./assets/img/CNPM/Chap4/img38.png" alt="" class="col-12 col-sm-8">
                                        </center>
                                    </div>
                                </div>
                            </div>
    
                            <ul>
                                <li>Một điểm kết thể hiện chính xác cùng một dữ liệu đến từ bất kỳ hai hay nhiều ô xử lý, kho dữ liệu hay nguồn/đích và đi đến cùng một nơi</li>
                                <li>Một dòng dữ liệu không thể đi trở lại chính ô xử lý đã xuất ra nó một cách trực tiếp</li>
                                <li>Một dòng dữ liệu đi đến một kho dữ liệu có nghĩa đây là một hoạt động cập nhật</li>
                                <li>Một dòng dữ liệu đi ra từ một kho dữ liêu có nghĩa đây là một hoạt động truy xuất hay sử dụng dữ liệu</li>
                                <li>Một dòng dữ liệu phải có một nhã là danh từ</li>
                            </ul>
                        </div>
                    </div>
                    <div class="collapse" id="collapse17">
                        <div class="card card-body">
                            <h4>Cân bằng các DFD</h4>
                            <ul>
                                <li>Khi phân rã một DFD, ta phải bảo toàn các dữ liệu vào và các dòng dữ liệu ra khỏi một ô xử lý ở mức kế tiếp.</li>
                                <li>Điều này gọi là cân bằng</li>
                                <li>Ví dụ: DFD mức 0 và mức 1 của HT đặt thức ăn đã đề cập ở trên</li>
                            </ul>
                            <p><b>Ví dụ</b>. Tập các DFD <b style="color: red;">không</b> cân bằng</p>
                            <center>
                                <img src="./assets/img/CNPM/Chap4/img39.png" alt="" class="col-12 col-sm-10">
                            </center>
                            <p><b>Ví dụ</b>. Tập các DFD cân bằng</p>
                            <center>
                                <img src="./assets/img/CNPM/Chap4/img40.png" alt="" class="col-12 col-sm-10">
                            </center>
                        </div>
                    </div>
                    <div class="collapse" id="collapse18">
                        <div class="card card-body">
                            <h4>Các nguyên tắc để dừng phân rã DFD</h4>
    
                            <ul>
                                <li>Khi mỗi ô xử lý là một quyết định, một tính toán hay một thao tác trên CSDL (thêm, sửa, xóa)</li>
                                <li>Khi mỗi kho dữ liệu đại diện cho một thực thể</li>
                                <li>Khi người dùng của hệ thống không quan tâm đến các chi tiết nhỏ hơn nữa</li>
                                <li>Khi mỗi dòng dữ liệu không cần phải chia ra nhỏ hơn để thể hiện chúng được xử lý khác nhau</li>
                                <li>Khi bạn tin rằng đã có một ô xử lý cho mỗi chọn lựa của các tùy chọn ở cấp thấp nhất trên menu hệ thống</li>
                            </ul>
                        </div>
                    </div>
                    <div class="collapse" id="collapse19">
                        <div class="card card-body">
                            <h4>Đặc tả ô xử lý</h4>
                            <ul>
                                <li>Là những hướng dẫn, giải thích để làm rõ nội dung của ô xử lý</li>
                                <li>Sử dụng các công cụ sau để mô tả:
                                    <ul>
                                        <li>Văn bản có cấu trúc</li>
                                        <li>Mã giả</li>
                                        <li>Bảng quyết định</li>
                                        <li>Lưu đò</li>
                                    </ul>
                                </li>
                                <li>Yêu cầu: Phải nên được trình tự logic của các thao tác, tính chất mỗi thao tác</li>
                                <li>Ví dụ: đặc tả ô xử lý "Lập hóa đơn bán hàng"</li>
                            </ul>
                        </div>
                    </div>
                    <div class="collapse" id="collapse20">
                        <div class="card card-body">
                            <h4>Mối quan hệ giữa CDM và DFD</h4>
                            <ul>
                                <li>Để đặc tả các ô xử lý, ta xét mối quan hệ giữa CDM và DFD</li>
                                <li>Mỗi ô xử lý thuộc loại ghi nhận dữ liệu có mối liên quan tới một sơ đồ con trong mô hình CDM</li>
                                <li>Ta có thể làm rõ mối quan hệ này bằng cách vẽ một đường con khép kín bao quanh các thực thể liên quan tới một ô xử lý</li>
                            </ul>
                        </div>
                    </div>
                    <div class="collapse" id="collapse21">
                        <div class="card card-body">
                            <p><b>Phát triển Top-Down</b></p>
                            <ol>
                                <li>Liệt kê danh sách các công việc mà hệ thống thực hiện, từ đó xác định các nguồn/đích, dòng dữ liệu, ô xử lý, kho dữ liệu</li>
                                <li>Tạo sơ đồ mức ngữ cảnh (context diagram): Biểu diễn giao tiếp giữa hệ thống và các nguồn/đích. 
                                    <br>
                                    Chú ý: Trong sơ đồ ngữ cảnh không có kho dữ liệu hoặc bất kỳ ô xử lý chi tiết nào
                                </li>
                                <li>Vẽ các sơ đồ ở mức tiếp theo</li>
                                <li>Kiểm tra các luật và cách đặt tên</li>
                            </ol>
                            <center>
                                <img src="./assets/img/CNPM/Chap4/img41.png" alt="" class="col-12 col-sm-10">
                                <img src="./assets/img/CNPM/Chap4/img42.png" alt="" class="col-12 col-sm-10">
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
            `]
        ]
    },
    CNPM05: {
        title: 'Phần 4',
        index: [
            ['Nội dung', 'CNPM051', `
            <div id="tableContent">
        <h4>Nội dung</h4>

        <ul>
            <li>Các vấn đề khi thiết kế</li>
            <li>Quy trình thiết kế UI</li>
            <li>Phân tích người dùng</li>
            <li>User interface prototyping</li>
            <li>Đánh giá giao diện</li>
        </ul>
    </div>

    <div id="1">
        <h3>Các vấn đề khi thiết kế</h3>

        <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse11" role="button" aria-expanded="false"
                aria-controls="collapse11">
                Giao diện người dùng
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse12" role="button" aria-expanded="false"
                aria-controls="collapse12">
                Các yếu tố ảnh hưởng thiết kế giao diện
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse13" role="button" aria-expanded="false"
                aria-controls="collapse13">
                Các nguyên tắc thiết kế UI
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse14" role="button" aria-expanded="false"
                aria-controls="collapse14">
                Các kiểu tương tác
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse15" role="button" aria-expanded="false"
                aria-controls="collapse15">
                Biểu diễn thông tin
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse16" role="button" aria-expanded="false"
                aria-controls="collapse15">
                Các dạng kiến trúc
            </a>
        </p>
        <div>
            <div class="collapse" id="collapse11">
                <div class="card card-body">

                    <h4>Giao diện người dùng</h4>

                    <ul>
                        <li>Nên được thiết kế cho phù hợp với kĩ năng, kinh nghiệm và sự trông đợi của người dùng
                            tương lai của hệ
                            thống</li>
                        <li>Người dung hệ thống thường đánh giá một hệ thống theo giao diện thay vì chức năng</li>
                        <li>Một giao diện thiết kế tế:
                            <ul>
                                <li>Có thể đẫn đến việc người dùng phạm những lỗi nghiêm trọng</li>
                                <li>Là lí do vì sao nhiều hệ thống phần mềm không bao giờ được đem ra sử dụng</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="collapse" id="collapse12">
                <div class="card card-body">
                    <h4>Các yếu tố ảnh hưởng thiết kế giao diện</h4>

                    <p><b>Con người là nhân tố ảnh hưởng trực tiếp. Có 7 nhân tố:</b></p>
                    <ul>
                        <li>Trí nhớ ngắn hạn</li>
                        <li>Nhầm lẫn là chuyện thường</li>
                        <li>Mỗi người có năng lực cao thấp khác nhau</li>
                        <li>Mỗi người hợp với những kiểu tương tác khác nhau</li>
                        <li>Phải xét để nhu cầu của người dùng hệ thống</li>
                        <li>Nhận thức được những hạn chế của hệ thống và nhầm lẫn</li>
                        <li>Các nguyên tắc thiết kế là nền tảng cho các thiết kế giao diện</li>
                    </ul>
                </div>
            </div>
            <div class="collapse" id="collapse13">
                <div class="card card-body">

                    <h4>Các nguyên tắc thiết kế UI</h4>
                    <center>
                        <table class="col-12 col-sm-10">
                            <thead>
                                <tr>
                                    <th>Nguyên tắc</th>
                                    <th>Mô tả</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Quen thuộc với người dùng</td>
                                    <td>Giao diện nên dùng các thuật ngữ và khái niệm rút ra từ kinh nghiệm của
                                        những người sẽ dùng
                                        hệ thống nhiều nhất</td>
                                </tr>
                                <tr>
                                    <td>Nhất quán</td>
                                    <td>Giao diện cần nhất quán sao cho các thao tác gần giống nhau có thể được kích
                                        hoạt theo cùng
                                        kiểu</td>
                                </tr>
                                <tr>
                                    <td>Ngạc nhiên tối thiểu</td>
                                    <td>Người dùng không bao giờ bị bất ngờ về hành vi của hệ thống</td>
                                </tr>
                                <tr>
                                    <td>Khôi phục được</td>
                                    <td>Giao điện nên có các cơ chế cho phép người dùng khôi phục lại tình trạng
                                        hoạt động bình
                                        thường sau khi gặp lỗi</td>
                                </tr>
                                <tr>
                                    <td>Hướng dẫn người dùng</td>
                                    <td>Giao diện nên có phản hồi có nghĩa là khi xảy ra lỗi và cung cấp các tiện
                                        ích trợ giúp theo
                                        ngữ cảnh</td>
                                </tr>
                                <tr>
                                    <td>Người dùng đa dạng</td>
                                    <td>Giao diện nên cung cấp các tiện ích tương tác thích hợp cho các loại người
                                        dùng hệ thống
                                        khác nhau</td>
                                </tr>
                            </tbody>
                        </table>
                    </center>

                    <p><b>2 vấn đề cần xem xét</b></p>
                    <ul>
                        <li>Người dùng cung cấp thông tin cho hệ thống bằng cách nào?</li>
                        <li>Hệ thống nên trình bày thông tin (output) cho người dùng như thế nào?</li>
                    </ul>
                    <center>
                        <img src="./assets/img/CNPM/Chap4/img43.png" alt="" class="col-12 col-sm-8">
                    </center>

                </div>
            </div>
            <div class="collapse" id="collapse14">
                <div class="card card-body">
                    <h4>Các kiểu tương tác</h4>

                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12 col-sm-6">
                                <ul>
                                    <li>Thao tác trực tiếp - Direct manipulation</li>
                                    <li>Chọn lựa bằng menu - Menu selection</li>
                                    <li>Điền form - Form fill-in</li>
                                    <li>Dòng lệnh - Command Language</li>
                                    <li>Ngôn ngữ tự nhiên - a Natural language</li>
                                </ul>
                            </div>
                            <div class="col-12 col-sm-6">
                                <center>
                                    <img src="./assets/img/CNPM/Chap4/img44.png" alt="" class="col-12">
                                </center>
                            </div>
                        </div>
                    </div>

                    <center>
                        <table class="col-12">
                            <thead>
                                <tr>
                                    <th>Kiểu tương tác</th>
                                    <th>Ưu điểm chính</th>
                                    <th>Nhược điểm chính</th>
                                    <th>Ví dụ ứng dụng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Direct manipulation</td>
                                    <td>Tương tác nhanh và trực quan</td>
                                    <td>Có thể khó cài đặt
                                        <br>
                                        Chỉ thích hợp khi có ẩn dụ hình ảnh cho các tác vụ và đối tượng
                                    </td>
                                    <td>Trờ chơi điện tử
                                        <br>
                                        Các hệ thống dòng drag-and-drop
                                    </td>
                                </tr>
                                <tr>
                                    <td>Menu selection</td>
                                    <td>Tránh lỗi người dùng
                                        <br>
                                        Không phải gõ nhiều
                                    </td>
                                    <td>Chậm chạp đối với người dùng nhiều kinh nghiệm
                                        <br>
                                        Có thể phức tạp nếu có nhiều lựa chọn menu
                                    </td>
                                    <td>Đa số các hệ thống thông dụng</td>
                                </tr>
                                <tr>
                                    <td>Form fill-in</td>
                                    <td>Nhập dữ liệu đơn giản
                                        <br>
                                        Dễ học
                                        <br>
                                        Kiểm tra được
                                    </td>
                                    <td>Tốn không gian màn hình
                                        <br>
                                        Gây rắc rối khi các lựa chọn của người dùng không khớp với các trường của form
                                    </td>
                                    <td>Khai thuế, xử lý nợ cá nhân</td>
                                </tr>
                                <tr>
                                    <td>Command language</td>
                                    <td>mạch và linh động</td>
                                    <td>Khó học xử lý lỗi kém</td>
                                    <td>hệ điều hành</td>
                                </tr>
                                <tr>
                                    <td>Natural language</td>
                                    <td>Đáp ứng được người dùng không chuyên. Dễ mở rộng</td>
                                    <td>Cần gõ nhiều
                                        <br>
                                        Các hệ thống hiểu ngôn ngữ tự nhiên không đáng tin cây
                                    </td>
                                    <td>Information retrieval systems</td>
                                </tr>
                            </tbody>
                        </table>
                    </center>
                </div>
            </div>
            <div class="collapse" id="collapse15">
                <div class="card card-body">
                    <h4>Biểu diễn thông tin</h4>

                    <ul>
                        <li>Trình bày thông tin hệ thống cho người dùng biết</li>
                        <li>Thông tin có thể được trình bày trực tiếp (VD. text trong một trình soạn thảo) hoặc được
                            biến đổi thành
                            một dạng biểu diễn khác (VD dạng đồ họa)</li>
                    </ul>

                    <center>
                        <img src="./assets/img/CNPM/Chap4/img44.png" alt="" class="col-12 col-sm-10">
                    </center>
                </div>
            </div>
            <div class="collapse" id="collapse16">
                <div class="card card-body">
                    <h4>Các dạng kiến trúc</h4>

                    <center>
                        <img src="./assets/img/CNPM/Chap4/img56.png" alt="" class="col-12 col-sm-8 col-lg-4">
                    </center>

                    <div>
                        <p>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse161" role="button"
                                aria-expanded="false" aria-controls="collapse161">
                                Biểu diễn thông tin
                            </a>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse162" role="button"
                                aria-expanded="false" aria-controls="collapse162">
                                Các thông số khi hiển thị thông tin
                            </a>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse163" role="button"
                                aria-expanded="false" aria-controls="collapse163">
                                Biểu diễn số hay biểu diễn tương tự
                            </a>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse164" role="button"
                                aria-expanded="false" aria-controls="collapse164">
                                Trực quan dữ liệu (Data visualisation)
                            </a>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse165" role="button"
                                aria-expanded="false" aria-controls="collapse165">
                                Hiển thị màu
                            </a>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse166" role="button"
                                aria-expanded="false" aria-controls="collapse166">
                                Nguyên tắc dùng màu
                            </a>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse167" role="button"
                                aria-expanded="false" aria-controls="collapse167">
                                Các thông báo lỗi
                            </a>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse168" role="button"
                                aria-expanded="false" aria-controls="collapse168">
                                Các nhân tố khi thiết kế nội dung các thông điệp
                            </a>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse169" role="button"
                                aria-expanded="false" aria-controls="collapse169">
                                Lỗi người dùng
                            </a>
                        </p>
                        <div>
                            <div class="collapse" id="collapse161">
                                <div class="card card-body">
                                    <h4>Biểu diễn thông tin</h4>

                                    <ul>
                                        <li>Thông tin tĩnh
                                            <br>
                                            <ul>
                                                <li>Khởi tạo ở đầu session. Không thay đổi trong suốt session</li>
                                                <li>Có thể là số hoặc văn bản text</li>
                                            </ul>
                                        </li>
                                        <li>Thông tin động
                                            <br>
                                            <ul>
                                                <li>Thay đổi trong session và phải được thông báo với mọi người dùng
                                                </li>
                                                <li>Có thể là số hoặc văn bản text</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="collapse" id="collapse162">
                                <div class="card card-body">
                                    <h4>Các thông số khi hiển thị thông tin</h4>
                                    <ul>
                                        <li>Người dùng quan tâm đến con số chính xác hay mối tương
                                            quan giữa các số liệu?</li>
                                        <li>Các giá trị của thông tin thay đổi nhanh chậm ra sao? Có
                                            phải lập tức thông báo khi có thay đổi?</li>
                                        <li>Người dùng có phải hành động để phản ứng với một thay
                                            đổi?</li>
                                        <li>Có giao diện thao tác trực tiếp (direct manipulation) không?</li>
                                        <li>Thông tin dạng số hay text? Các giá trị tương đối có quan
                                            trong không?</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="collapse" id="collapse163">
                                <div class="card card-body">
                                    <h4>Biểu diễn số hay biểu diễn tương tự</h4>
                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-12 col-sm-6">
                                                <ul>
                                                    <li>Biểu diễn số - Digital presentation
                                                        <ul>
                                                            <li>Ngắn gọn - chiếm ít không gian màn hình;</li>
                                                            <li>Cho biết giá trị chính xác</li>
                                                        </ul>
                                                    </li>
                                                    <li>Biểu diễn tương tự - Analogue presentation
                                                        <ul>
                                                            <li>Có thể biểu diễn các giá trị tương đối;</li>
                                                            <li>Dễ thấy các giá trị dữ liệu đặc biêt;</li>
                                                            <li>Nhanh chóng lấy được ấn tượng về một giá trị</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-12 col-sm-6">
                                                <center>
                                                    <img src="./assets/img/CNPM/Chap4/img57.png" alt=""
                                                        class="col-12 col-sm-6">
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                    <center>
                                        <img src="./assets/img/CNPM/Chap4/img58.png" alt=""
                                            class="col-12 col-sm-6 col-lg-4">
                                    </center>
                                </div>
                            </div>
                            <div class="collapse" id="collapse164">
                                <div class="card card-body">
                                    <h4>Trực quan dữ liệu (Data visualisation)</h4>

                                    <ul>
                                        <li>Các kĩ thuật hiển thị lượng lớn thông tin</li>
                                        <li>Hình ảnh có thể cho thấy quan hệ giữa các thực thể và các xu hướng của dữ
                                            liệu</li>
                                        <li>Các ví dụ:
                                            <br>
                                            <ul>
                                                <li>Thông tin thời tiết thu thập từ nhiều nguồn</li>
                                                <li>Trạng thái của một mạng điện thoại dưới dạng một tập các nút được
                                                    kết nối với nhau</li>
                                                <li>Một mô hình phân tử hiển thị dạng 3 chiều</li>
                                                <li>Các trang web hiển thị dạng một cây hyperbol</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="collapse" id="collapse165">
                                <div class="card card-body">
                                    <h4>Hiển thị màu</h4>

                                    <ul>
                                        <li>Màu sắc bổ sung thêm một chiều cho một giao diện và
                                            giúp người dùng hiểu các cấu trúc thông tin phức tạp.</li>
                                        <li>Có thể dùng màu để highlight các thông tin đặc biệt.</li>
                                        <li>Các lỗi thường gặp trong việc dùng màu sắc trong thiết
                                            kế UI:
                                            <ul>
                                                <li>Dùng màu sắc đề diễn đạt ý nghĩa;</li>
                                                <li>Lạm dụng màu sắc trong trình bày</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="collapse" id="collapse166">
                                <div class="card card-body">
                                    <h4>Nguyên tắc dùng màu</h4>
                                    <ul>
                                        <li>Hạn chế số màu và mức độ sặc sở</li>
                                        <li>Dùng sự thay đổi màu để báo hiệu thay đổi trong trạng thái hệ thống</li>
                                        <li>Dùng kí hiệu màu (color coding) để hỗ trợ công việc người dùng đang cố làm
                                        </li>
                                        <li>Dùng kí hiệu màu một cách cẩn trọng và nhất quán</li>
                                        <li>Cẩn thận về hiệu ứng cặp đôi của màu sắc</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="collapse" id="collapse167">
                                <div class="card card-body">
                                    <h4>Các thông báo lỗi</h4>

                                    <ul>
                                        <li>Thiết kế thông báo lỗi là việc rất quan trọng
                                            <br>
                                            Các thông báo lỗi kém có thể dẫn đến việc người dùng không chấp nhận sử dụng
                                            một hệ thống
                                        </li>
                                        <li>Các thông báo nên lịch sự, ngắn gọn, nhất quán và mang tính xây dựng</li>
                                        <li>Nên xét đến background và kinh nghiệm của người dùng như là nhân tố quyết
                                            định khi thiết kế các thông
                                            báo lỗi</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="collapse" id="collapse168">
                                <h4>Các nhân tố khi thiết kế nội dung các thông điệp</h4>

                                <center>
                                    <table class="col-12 col-sm-10">
                                        <thead>
                                            <tr>
                                                <th>Nhân tố</th>
                                                <th>Miêu tả</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Ngữ cảnh</td>
                                                <td>
                                                    Các thông điệp do hệ thống tạo ra cần phản ánh ngữ cảnh sử dụng hiện
                                                    tại bất cứ khi nào có
                                                    thể. Hệ thống cần cố gắng nhận biết được người dùng đang làm gì và
                                                    nên tạo các thông điệp có
                                                    liên quan đến hoạt động hiện tại của họ
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Kinh nghiệm</td>
                                                <td>
                                                    Khi người dùng quen dần với một hệ thống, họ sẽ trở nên khó chịu bởi
                                                    các thông điệp dài 'có
                                                    ý nghĩa'. Tuy nhiên, những người mới dùng lại thấy những thông báo
                                                    ngắn gọn khó hiểu. Bạn
                                                    nên cung cấp cả hai loại thông điệp và để cho người dùng kiểm soát
                                                    mức độ xúc tích của các
                                                    thông báo
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Trình độ kĩ năng</td>
                                                <td>
                                                    Các thông điệp nên được điều chỉnh theo trình độ kĩ năng cũng như
                                                    kinh nghiệm của người
                                                    dùng. Thông điệp dành cho các loại người dùng khác nhau có thể được
                                                    diễn đạt theo các cách
                                                    khác nhau tùy theo bộ thuật ngữ quen thuộc với người đọc.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Phong cách</td>
                                                <td>
                                                    Các thông điệp nên mang tính tích cực hơn là tiêu cực, nên dùng thể
                                                    chủ động hơn là bị động,
                                                    không bao giờ nên có giọng xúc phạm hoặc cố pha trò
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Văn hóa</td>
                                                <td>
                                                    Nếu có thể, người thiết kế nên là người quen thuộc với văn hóa của
                                                    đất nước nơi hệ thống sẽ
                                                    được bán. Có những khác biệt văn hóa rõ rệt giữa châu Âu, châu Á và
                                                    châu Mỹ. Một thông điệp
                                                    phù hợp với nền văn hóa này có thể không chấp nhận được ở một nền
                                                    văn hóa khác
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </center>
                            </div>
                            <div class="collapse" id="collapse169">
                                <div class="card card-body">
                                    <h4>Lỗi người dùng</h4>
                                    <center>
                                        <img src="./assets/img/CNPM/Chap4/img59.png" alt="" class="col-12 col-sm-10">
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    
    <div id="2">
        <h4>Quy trình thiết kế UI</h4>

        <ul>
            <li>Thiết kế UI là một quy trình lặp đi lặp lại với sự liên lạc chặt chẽ giữa người dùng và người thiết kế
            </li>
            <li>3 hoạt động chính trong quy Trình
                <ul>
                    <li><b>User analysis</b>: Tìm hiểu người dùng sẽ làm gì với hệ thống</li>
                    <li><b>System prototyping</b>: phát triển một loại các bản mẫu để thử nghiệm;</li>
                    <li><b>Interface evaluation</b>: thử nghiệm các bản mẫu cùng với người dùng</li>
                </ul>
            </li>
        </ul>

        <center>
            <img src="./assets/img/CNPM/Chap4/img60.png" alt="" class="col-12 col-sm-10">
        </center>
    </div>
    

    <div id="3">
        <h4>Phân tích người dùng</h4>

        <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse31" role="button" aria-expanded="false"
                aria-controls="collapse31">
                Giới thiệu
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse32" role="button" aria-expanded="false"
                aria-controls="collapse32">
                Các yêu cầu rút từ kịch bản
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse33" role="button" aria-expanded="false"
                aria-controls="collapse33">
                Các yêu cầu rút từ kịch bản
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse34" role="button" aria-expanded="false"
                aria-controls="collapse34">
                Văn hóa
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse35" role="button" aria-expanded="false"
                aria-controls="collapse35">
                Hồ sơ tìm hiểu từ văn hóa
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse36" role="button" aria-expanded="false"
                aria-controls="collapse36">
                Rút ra từ tìm hiểu văn hóa
            </a>
        </p>
        <div>
            <div class="collapse" id="collapse31">
                <div class="card card-body">
                    <ul>
                        <li>Nếu bạn không hiểu người dùng muốn làm gì với một hệ thống, bạn khó có thể thiết kế một giao
                            diện hiệu
                            quả</li>
                        <li>Các phân tích người dùng phải được mô tả theo cách mà cả người dùng lẫn người thiết kế đều
                            có thể hiểu
                            được</li>
                        <li>Các kịch bản mà bạn đang dùng để miêu tả các tình huống sử dụng điển hình là một cách để mô
                            tả các phân
                            tích này</li>
                        <li>Kịch bản tương tác</li>
                    </ul>

                    <p>Jane là một sinh viên của Tôn giáo học và đang làm việc trên một bài luận về kiến trúc Ấn Độ và
                        nó bị ảnh
                        hưởng như thế nào bởi các thực hành tôn giáo. Để giúp cô hiểu điều này, cô ấy muốn truy cập một
                        số hình ảnh
                        chi tiết về các tòa nhà đáng chú ý nhưng không thể tìm thấy bất cứ thứ gì trong thư viện địa
                        phương của cô.
                    </p>
                    <p>Cô tiếp cận thư viện chuyên đề để thảo luận về nhu cầu của mình và ông đề suất một số thuật ngữ
                        tìm kiếm có
                        thể được dùng. Ông cũng gợi ý một số thư viện ở New Delhi và London có thể có tài liệu này để họ
                        đăng nhập
                        vào danh mục thư viện và thực hiện tìm kiếm bằng các thuật ngữ này. Họ tìm thấy một số tài liệu
                        nguồn và yêu
                        cầu photocopy ảnh với chi tiết kiến trúc được gửi trực tiếp đến Jane</p>
                </div>
            </div>
            <div class="collapse" id="collapse32">
                <div class="card card-body">
                    <ul>
                        <li>Người dùng có thể không nhận ra các từ khóa tìm kiếm thích hợp, do đó cần có cách giúp đỡ họ
                            chọn từ
                            khóa</li>
                        <li>Người dùng phải có khả năng chọn collection cần tìm tại đó</li>
                        <li>Người dùng phải có khả năng thực hiện tìm kiếm và yêu cầu bản sao của tài liệu liên quan
                        </li>
                        <li>Các kỹ thuật:
                            <ul>
                                <li>Phân tích tác vụ - Task analysis</li>
                                <li>Phỏng vấn và câu hỏi điều tra (questionaire)</li>
                                <li>Văn hóa</li>
                            </ul>
                        </li>
                        <center>
                            <img src="./assets/img/CNPM/Chap4/img61.png" alt="" class="col-12 col-sm-8">
                        </center>
                    </ul>
                </div>
            </div>
            <div class="collapse" id="collapse33">
                <div class="card card-body">
                    <h4>Phỏng vấn</h4>

                    <ul>
                        <li>Tổ chức các cuộc phỏng vấn có cấu trúc linh động dựa trên các câu hỏi mở</li>
                        <li>Khi đó người dùng có thể cung cấp các thông tin mà họ cho đó là quan trọng; không chỉ các
                            thông tin mà
                            bạn đã định thu thập</li>
                        <li>Phỏng vấn theo nhóm tạo điều kiện để người dùng thảo luận với nhau về công việc của họ</li>
                    </ul>
                </div>
            </div>
            <div class="collapse" id="collapse34">
                <div class="card card-body">
                    <h4>Văn hóa</h4>

                    <ul>
                        <li>Một người quan sát người dùng khi họ đang làm việc và hỏi về công việc của họ (không theo
                            kịch bản)</li>
                        <li>Có giá trị vì nhiều tác vụ của người dùng mang tính trực quan và họ cảm thấy rất khó miêu tả
                            và giải
                            thích các tác vụ</li>
                        <li>Giúp hiểu về vai trò của các ảnh hưởng xã hội và tổ chức đối với công việc</li>
                    </ul>
                </div>
            </div>
            <div class="collapse" id="collapse35">
                <div class="card card-body">
                    <h4>Hồ sơ tìm hiểu từ văn hóa</h4>

                    <div class="container" style="background-color: rgb(200, 223, 212);">
                        <div class="row">
                            <div class="col-12">
                                <p style="text-align: justify;">Một trạm điều khiển không lưu có một số "bàn" điều
                                    khiển, trong đó
                                    các bàn điều khiển các vùng
                                    không gian cạnh nhau cũng được đặt cạnh nhau. Các chuyến bay trong một vùng được
                                    biểu diễn bằng
                                    các băng giấy lồng vào các giá gỗ theo thứ tự phản ánh vị trí của chúng trong vùng.
                                    Nếu không
                                    còn đủ chỗ trên giá (nghĩa là khi vùng không gian đó rất đông máy bay), những người
                                    điều khiển
                                    trải các băng giấy lên cái bàn viết đặt trước cái giá gỗ</p>
                                <p style="text-align: justify;">
                                    Khi chúng tôi quan sát những người điều khiển, chúng tôi nhận thấy cứ một lúc họ lại
                                    nhìn sang
                                    giá treo các băng giấy của vùng bên cạnh. Chúng tôi hỏi tại sao. Họ trả lời rằng,
                                    nếu bàn điều
                                    khiển bên cạnh phải trải giấy lên bàn, điều đó có nghĩa sẽ có nhiều chuyến bay bay
                                    vào vùng của
                                    họ. Vì vậy, họ sẽ cố gắng tăng tốc các chuyến bay trong vùng của mình để 'lấy chỗ'
                                    cho các
                                    chuyến bay đang đến.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="collapse" id="collapse36">
                <div class="card card-body">
                    <h4>Rút ra từ tìm hiểu văn hóa</h4>

                    <ul>
                        <li>Những người điều khiển phải nhìn thấy tất cả các chuyến bay trong một vùng. Do đó, phải
                            tránh kiểu hiện
                            thị với thanh kéo mà trong đó các chuyến bay trên đỉnh và dưới đáy màn hình có thể biến mất.
                        </li>
                        <li>Giao điện phải có cách nào đó để báo cho người điều khiển về số chuyến bay tại các vùng giáp
                            ranh để họ
                            có thể lập kế hoạch cho công việc của mình</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    

    <div id="4">
        <h4>User interface prototyping</h4>

        <div>
            <p>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse41" role="button"
                    aria-expanded="false" aria-controls="collapse41">
                    Bản mẫu UI
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse42" role="button"
                    aria-expanded="false" aria-controls="collapse42">
                    Bản mẫu trên giấy
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse43" role="button"
                    aria-expanded="false" aria-controls="collapse43">
                    Các kỹ thuật làm bản mẫu
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse44" role="button"
                    aria-expanded="false" aria-controls="collapse44">
                    Đánh giá UI
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse45" role="button"
                    aria-expanded="false" aria-controls="collapse45">
                    Các thuộc tính usability
                </a>
            </p>
            <div>
                <div class="collapse" id="collapse41">
                    <div class="card card-body">
                        <h4>Bản mẫu UI</h4>

                        <ul>
                            <li>Mục tiêu của bản mẫu là cho phép người dùng có được trải nghiệm trực tiếp đối với giao
                                diện</li>
                            <li>Nếu không có trải nghiệm trực tiếp, không thể đánh giá khả năng sử dụng một giao diện
                            </li>
                            <li>Quy trình làm bản mẫu có thể có 2 bước
                                <ul>
                                    <li>Lúc đầu, có thể dùng bản mẫu trên giấy;</li>
                                    <li>Sau đó tinh chỉnh thiết kế, và phát triển các bản mẫu tự động hóa với độ phức
                                        tạp ngày càng tăng
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="collapse" id="collapse42">
                    <div class="card card-body">
                        <h4>Bản mẫu trên giấy</h4>

                        <ul>
                            <li>Dùng các bản vẽ nháp về UI để duyệt qua các kịch bản</li>
                            <li>Dùng storyboard để trình bày một chuỗi tương tác với hệ thống</li>
                            <li>Bản mẫu giấy là cách thu thập phản ứng của người dùng đối với một đề xuất thiết kế</li>
                        </ul>
                    </div>
                </div>
                <div class="collapse" id="collapse43">
                    <div class="card card-body">
                        <h4>Các kỹ thuật làm bản mẫu</h4>

                        <ul>
                            <li>Script-driven prototyping
                                <ul>
                                    <li>Viết một loạt các script và screen bằng các công cụ như Macromedia Director</li>
                                    <li>Khi người dùng tương tác, screen sẽ chuyển sang hiển thị màn hình tiếp theo</li>
                                </ul>
                            </li>
                            <li>Visual programming
                                <br>
                                Dùng một ngôn ngữ chuyên dụng cho phát triển nhanh như Visual Basic
                            </li>
                            <li>Internet based prototyping
                                <br>
                                Dùng một trình duyệt web browser và các script kèm theo
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="collapse" id="collapse44">
                    <div class="card card-body">
                        <h4>Đánh giá UI</h4>

                        <ul>
                            <li>Cần thực hiện một số đánh giá UI để đánh giá mức độ thích hợp</li>
                            <li>Đánh giá đầy đủ và toàn bộ thì quả đắt và không thực tế cho hầu hết các hệ thống</li>
                            <li>Về lí tưởng, một giao diện cần được đánh giá theo một đặc tả về usability. Tuy nhiên,
                                người ta hiếm khi
                                viết các đặc tả đó</li>
                        </ul>
                    </div>
                </div>
                <div class="collapse" id="collapse45">
                    <div class="card card-body">
                        <h4>Các thuộc tính usability</h4>

                        <center>
                            <table class="col-12 col-sm-10">
                                <thead>
                                    <tr>
                                        <th>Thuộc tính</th>
                                        <th>Miêu tả</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Khả năng học</td>
                                        <td>Người dùng mới cần bao lâu để có thể hoạt động hiệu quả với hệ thống</td>
                                    </tr>

                                    <tr>
                                        <td>Tốc độ vận hành</td>
                                        <td>Tốc độ phản ứng của hệ thống có đáp ứng tốt công việc của người dùng?</td>
                                    </tr>
                                    <tr>
                                        <td>Chịu lỗi</td>
                                        <td>Mức độ dung thứ lỗi của hệ thống đối với lỗi người dùng</td>
                                    </tr>
                                    <tr>
                                        <td>Khả năng khôi phục</td>
                                        <td>Khả năng hệ thống khôi phục từ lỗi của người dùng</td>
                                    </tr>
                                    <tr>
                                        <td>Tương thích</td>
                                        <td>Hệ thống gắn bó chặt chẽ với một kiểu làm việc đến đâu?</td>
                                    </tr>
                                </tbody>
                            </table>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>

    

    <div id="5">
        <h3>Đánh giá giao diện</h3>

        <div>
            <p>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse51" role="button"
                    aria-expanded="false" aria-controls="collapse51">
                    Các kĩ thuật đánh giá đơn giản
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse52" role="button"
                    aria-expanded="false" aria-controls="collapse52">
                    Thành phần giao diện
                </a>

            </p>
            <div>
                <div class="collapse" id="collapse51">
                    <div class="card card-body">
                        <h4>Các kĩ thuật đánh giá đơn giản</h4>

                        <ul>
                            <li>Câu hỏi điều tra để phản hồi của người dùng</li>
                            <li>Quay video về việc sử dụng hệ thống rồi sau đó đánh giá nội dung</li>
                            <li>Cài các đoạn mã thu thập thông tin về các tiện ích được sử dụng và lỗi của người dùng
                            </li>
                            <li>Phần mềm có chức năng thu thập phản hồi trực tuyến của người dùng</li>
                        </ul>
                    </div>
                </div>
                <div class="collapse" id="collapse52">
                    <div class="card card-body">
                        <h4>Thành phần giao diện</h4>

                        <ul>
                            <li>Cửa sổ làm việc chỉ làm 3 vùng
                                <ul>
                                    <li>Vùng điều hướng ở trên</li>
                                    <li>Vùng làm việc ở giữa</li>
                                    <li>Vùng trạng thái ở đáy</li>
                                </ul>
                            </li>
                            <li>Các thành phần giao diện được chia làm 3 nhóm chính
                                <ul>
                                    <li>Nhóm điều khiển nhập liệu: checkboxes, radio buttons,...</li>
                                    <li>Nhóm thành phần điều hướng: breadcrumb, slider,...</li>
                                    <li>Nhóm thành phần cung cấp thông tin: tooltips, icons,...</li>
                                </ul>
                            </li>
                        </ul>

                        <div>
                            <p>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse521" role="button"
                                    aria-expanded="false" aria-controls="collapse521">
                                    checkboxes
                                </a>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse522" role="button"
                                    aria-expanded="false" aria-controls="collapse522">
                                    Radio buttons
                                </a>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse523" role="button"
                                    aria-expanded="false" aria-controls="collapse523">
                                    Dropdown list
                                </a>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse524" role="button"
                                    aria-expanded="false" aria-controls="collapse524">
                                    Listboxes
                                </a>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse525" role="button"
                                    aria-expanded="false" aria-controls="collapse525">
                                    Button
                                </a>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse526" role="button"
                                    aria-expanded="false" aria-controls="collapse526">
                                    Toggles
                                </a>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse527" role="button"
                                    aria-expanded="false" aria-controls="collapse527">
                                    Text field
                                </a>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse528" role="button"
                                    aria-expanded="false" aria-controls="collapse528">
                                    Date and Time picker
                                </a>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse529" role="button"
                                    aria-expanded="false" aria-controls="collapse529">
                                    Breadcrumb
                                </a>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse5230" role="button"
                                    aria-expanded="false" aria-controls="collapse5230">
                                    Slider
                                </a>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse5231" role="button"
                                    aria-expanded="false" aria-controls="collapse5231">
                                    Pagination
                                </a>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse5232" role="button"
                                    aria-expanded="false" aria-controls="collapse5232">
                                    Menu
                                </a>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse5233" role="button"
                                    aria-expanded="false" aria-controls="collapse5233">
                                    Tooltips
                                </a>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse5234" role="button"
                                    aria-expanded="false" aria-controls="collapse5234">
                                    Progress bar
                                </a>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse5235" role="button"
                                    aria-expanded="false" aria-controls="collapse5235">
                                    Cửa sổ thông báo
                                </a>
                            </p>
                            <div>
                                <div class="collapse" id="collapse521">
                                    <div class="card card-body">
                                        <h4>checkboxes</h4>

                                        <p><b>Mục đích</b>: Cung cấp cho người dùng khả năng chọn và không chọn một đối
                                            tượng nào đó</p>

                                        <center>
                                            <img src="./assets/img/CNPM/Chap4/img62.png" alt=""
                                                class="col-12 col-sm-10">
                                        </center>
                                    </div>
                                </div>
                                <div class="collapse" id="collapse522">
                                    <div class="card card-body">
                                        <h4>Radio buttons</h4>

                                        <ul>
                                            <li>Cho phép người dùng đưa ra sự chọn lựa duy nhất</li>
                                            <li>Thông thường có một phương án được đánh dấu chọn mặc định</li>
                                        </ul>

                                        <center>
                                            <img src="./assets/img/CNPM/Chap4/img63.png" alt="" class="col-12 col-sm-8">
                                        </center>
                                    </div>
                                </div>
                                <div class="collapse" id="collapse523">
                                    <div class="card card-body">
                                        <h4>Dropdown list</h4>

                                        <ul>
                                            <li>Chọn lựa một phần tử tại một thời điểm</li>
                                            <li>Hỗ trợ thêm phần tử "Select one" để giúp người dùng biết mình cần chọn 1
                                                trong số các phần tử sẵn có
                                            </li>
                                        </ul>

                                        <center>
                                            <img src="./assets/img/CNPM/Chap4/img64.png" alt="" class="col-12 col-sm-6">
                                        </center>
                                    </div>
                                </div>
                                <div class="collapse" id="collapse524">
                                    <div class="card card-body">
                                        <h4>Listboxes</h4>

                                        <p>Giống như checkboxes cho phép người dùng chọn cùng lúc nhiều phần tử nhưng
                                            tiết kiệm không gian hiển thị</p>
                                        <center>
                                            <img src="./assets/img/CNPM/Chap4/img65.png" alt="" class="col-12 col-sm-8">
                                        </center>
                                    </div>
                                </div>
                                <div class="collapse" id="collapse525">
                                    <div class="card card-body">
                                        <h4>Button</h4>

                                        <ul>
                                            <li>Thực hiện một hoạt động thích hợp khi mà người dùng bấm chọn</li>
                                            <li>Thông thường được gán nhãn bằng chuỗi hoặc bằng hình ảnh, có khi cả 2
                                            </li>
                                        </ul>

                                        <center>
                                            <img src="./assets/img/CNPM/Chap4/img66.png" alt="" class="col-12 col-sm-8">
                                        </center>
                                    </div>
                                </div>
                                <div class="collapse" id="collapse526">
                                    <div class="card card-body">
                                        <h4>Toggles</h4>

                                        <p>Cho phép người dùng chuyển đổi cấu hình qua lại giữa 2 trạng thái</p>

                                        <center>
                                            <img src="./assets/img/CNPM/Chap4/img67.png" alt="" class="col-12 col-sm-8">
                                        </center>
                                    </div>
                                </div>
                                <div class="collapse" id="collapse527">
                                    <div class="card card-body">
                                        <h4>Text field</h4>

                                        <div class="container-fluid">
                                            <div class="row">
                                                <div class="col-12 col-sm-6">
                                                    <ul>
                                                        <li>Cho phép người dùng nhập vào chuỗi ký tự, nó có thể là dòng
                                                            đơn hoặc nhiều dòng</li>
                                                        <li>Có thể tùy chọn để người dùng có thể nhập vào mật khẩu hoặc
                                                            một định dạng nào đó</li>
                                                    </ul>
                                                </div>
                                                <div class="col-12 col-sm-6">
                                                    <center>
                                                        <img src="" alt="" class="col-12 col-sm-8">
                                                    </center>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="collapse" id="collapse528">
                                    <div class="card card-body">
                                        <h4>Date and Time picker</h4>

                                        <ul>
                                            <li>Cho phép chọn ngày hoặc giờ cụ thể</li>
                                            <li>Hiển thị tùy thuộc vào hệ thống</li>
                                        </ul>

                                        <center>
                                            <img src="./assets/img/CNPM/Chap4/img69.png" alt="" class="col-12 col-sm-8">
                                        </center>
                                    </div>
                                </div>
                                <div class="collapse" id="collapse529">
                                    <div class="card card-body">
                                        <h4>Breadcrumb</h4>

                                        <div class="container-fluid">
                                            <div class="row">
                                                <div class="col-12 col-sm-6">
                                                    <p>Cho phép người dùng xác định được vị trí hiện của mình bên trong
                                                        hệ thống, đồng thời cung cấp khả
                                                        năng quay lui lại các vị trí đã duyệt qua</p>
                                                </div>
                                                <div class="col-12 col-sm-6">
                                                    <center>
                                                        <img src="./assets/img/CNPM/Chap4/img70.png" alt=""
                                                            class="col-12 col-sm-6">
                                                    </center>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="collapse" id="collapse5230">
                                    <div class="card card-body">
                                        <h4>Slider</h4>

                                        <div class="container-fluid">
                                            <div class="row">
                                                <div class="col-12 col-sm-6">
                                                    <p>Cho phép người dùng thay đổi hoặc thiết lập một giá trị kiểu số
                                                    </p>
                                                </div>
                                                <div class="col-12 col-sm-6">
                                                    <center>
                                                        <img src="./assets/img/CNPM/Chap4/img71.png" alt=""
                                                            class="col-12 col-sm-8">
                                                    </center>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="collapse" id="collapse5231">
                                    <div class="card card-body">
                                        <h4>Pagination</h4>

                                        <p>Giải pháp phân chia thông tin cần biểu diễn ra thành nhiều trang hiển thị
                                            khác nhau trong đó người dùng
                                            chuyển qua lại giữa các trang thông tin</p>

                                        <center>
                                            <img src="./assets/img/CNPM/Chap4/img72.png" alt="" class="col-12 col-sm-8">
                                        </center>
                                    </div>
                                </div>
                                <div class="collapse" id="collapse5232">
                                    <div class="card card-body">
                                        <h4>Menu</h4>

                                        <ul>
                                            <li>Là một dạng thành phần điều hướng được sử dụng rộng rãi hiện nay</li>
                                            <li>Menu là danh sách phân cấp các lệnh hoặc các tùy chọn được thiết kế sẵn
                                                và sẵn dùng đối với người dùng
                                            </li>
                                            <li>Hiển thị danh sách các nhãn</li>
                                        </ul>

                                        <div class="container-fluid">
                                            <div class="row">
                                                <div class="col-12 col-sm-6">
                                                    <center>
                                                        <img src="./assets/img/CNPM/Chap4/img73.png" alt=""
                                                            class="col-12">
                                                    </center>
                                                </div>
                                                <div class="col-12 col-sm-6">
                                                    <center>
                                                        <img src="./assets/img/CNPM/Chap4/img74.png" alt=""
                                                            class="col-12">
                                                    </center>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="collapse" id="collapse5233">
                                    <div class="card card-body">
                                        <h4>Tooltips</h4>

                                        <p>Cho phép người dùng xem được thông tin gợi ý bằng cách ghê chuột qua</p>

                                        <center>
                                            <img src="./assets/img/CNPM/Chap4/img75.png" alt="" class="col-12 col-sm-8">
                                        </center>
                                    </div>
                                </div>
                                <div class="collapse" id="collapse5234">
                                    <div class="card card-body">
                                        <h4>Progress bar</h4>

                                        <ul>
                                            <li>Cung cấp thông tin cho người dùng về việc họ đã tiến triển đến đâu trong
                                                quy trình thực hiện</li>
                                            <li>Có 2 loại: determinate progress bar và interdeterminate progress bar
                                            </li>
                                        </ul>

                                        <center>
                                            <img src="./assets/img/CNPM/Chap4/img76.png" alt="" class="col-12 col-sm-8">
                                        </center>
                                    </div>
                                </div>
                                <div class="collapse" id="collapse5235">
                                    <div class="card card-body">
                                        <p>Là một cửa sổ nhỏ cung cấp thông tin cho người dùng và yêu câu họ thực hiện
                                            một hành đồng nào đó</p>

                                        <center>
                                            <img src="./assets/img/CNPM/Chap4/img77.png" alt="" class="col-12 col-sm-8">
                                        </center>
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
    CNPM06: {
        title: 'Video bài giảng',
        index: [
            ['ĐH Trà Vinh', 'CNPM061', `
                <p>Bài giảng 1 <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220055_CongNghePhanMem/Video/Chuong4_P1.mp4" target="_blank">Link</a></p>
                <p>Bài giảng 2 <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220055_CongNghePhanMem/Video/Chuong4_P2.mp4" target="_blank">Link</a></p>
                <p>Bài giảng 3 <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220055_CongNghePhanMem/Video/Chuong4_P3.mp4" target="_blank">Link</a></p>
                <p>Bài giảng 4 <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220055_CongNghePhanMem/Video/Chuong4_P4.mp4" target="_blank">Link</a></p>
                <p>Bài giảng 5 <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220055_CongNghePhanMem/Video/Chuong4_P5.mp4" target="_blank">Link</a></p>
            `],
            ['Youtube', 'CNPM062', ``],
        ]
    }
}