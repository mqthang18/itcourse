const CNPM6 = {
    CMPN01: {
        title: 'Phần 1: Kiểm thử chương trình',
        index: [[
            'Nội dung', 'CMPN011', `
            <div id="1">
        <h4>Phần 1: Kiểm thử chương trình</h4>

        <p>
            <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse11" role="button" aria-expanded="false"
                aria-controls="collapse11">
                Các lỗi phần mềm
            </a>
            <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse12" role="button" aria-expanded="false"
                aria-controls="collapse12">
                Các vấn đề trong kiểm thử
            </a>
            <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse13" role="button" aria-expanded="false"
                aria-controls="collapse13">
                Kiểm thử đơn vị
            </a>
            <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse14" role="button" aria-expanded="false"
                aria-controls="collapse14">
                Kiểm thử tích hợp
            </a>
            <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse15" role="button" aria-expanded="false"
                aria-controls="collapse15">
                Lập kế hoạch kiểm thử
            </a>
            <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse16" role="button" aria-expanded="false"
                aria-controls="collapse16">
                Các công cụ kiểm thử tự động
            </a>
        </p>
        <div>
            <div class="collapse" id="collapse11">
                <div class="card card-body">
                    <h4>Lỗi phần mềm</h4>

                    <div>
                        <p><b>Các nguyên nhân làm phần mềm thất bại</b></p>
                        <ul>
                            <li>Đặc tả sai</li>
                            <li>Đặc tả thiếu</li>
                            <li>Yêu cầu không thể thực thi</li>
                            <li>Thiết kế không chính xác</li>
                            <li>Mã lệnh có thiếu sót</li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li>Mục đích của kiểm thử: phát hiện ra các lỗi</li>
                            <li>Một kiểm thử là thành công khi chỉ khi lỗi được phát hiện
                                <ul>
                                    <li>Nhận dạng lỗi là quá trình xác định lỗi nào gây ra sự thất bại</li>
                                    <li>HIệu chỉnh lỗi là quá trình tạo ra các thay đổi đối với hệ thống nhằm loại bỏ
                                        các lỗi</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p><b>Các loại lỗi</b></p>

                        <ul>
                            <li>Lỗi giải thuật: các lỗi giải thuật điển hình
                                <br>
                                <ul>
                                    <li>Rẽ nhánh quá sớm</li>
                                    <li>Rẽ nhánh quá trễ</li>
                                    <li>Kiểm thử cho điều kiện sai</li>
                                    <li>Quên khởi tạo giá trị ban đầu của biến hay đặt vòng lặp bất biến</li>
                                    <li>Quên kiểm thử cho điều kiện đặc biệt</li>
                                    <li>So sánh giá trị của các kiểu dữ liệu không phù hợp</li>
                                </ul>
                            </li>
                            <li>Lỗi cú pháp</li>
                            <li>Lỗi về độ chính xác và tính toán
                                <br>
                                <p>Sự thực hiện của một công thức là sai hoặc không tính ra kết quả với độ chính xác
                                    mong muốn</p>
                            </li>
                            <li>Lỗi tài liệu
                                <br>
                                <p>Tài liệu không phù hợp với cái mà chương trình làm</p>
                            </li>
                            <li>Lỗi về quá tải hay dung lượng
                                <br>
                                <p>Sự thực hiện của hệ thống là không thể chấp nhận khi đạt đến các ranh giới nào đó</p>
                            </li>
                            <li>Lỗi về độ chính xác và tính toán
                                <br>
                                <p>Sự thực hiện của một công thức là sai hoặc không tính ra kết quả với độ chính xác
                                    mong muốn</p>
                            </li>
                            <li>Lỗi tài liệu
                                <br>
                                <p>Tài liệu không phù hợp với cái mà chương trình làm</p>
                            </li>
                            <li>Lỗi về quá tải hay dung lượng
                                <br>
                                <p>Sự thực hiện của hệ thống là không thể chấp nhận khi đạt đến các ranh giới nào đó</p>
                            </li>
                            <li>Lỗi hợp tác và thời gian</li>
                            <li>Lỗi thực hiện
                                <br>
                                <p>Hệ thống không thực hiện với tốc độ được mô tả</p>
                            </li>
                            <li>Lỗi quy trình và chuẩn</li>
                            <li>Lỗi phần cứng, phần mềm</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="collapse" id="collapse12">
                <div class="card card-body">
                    <h4>Các vấn đề trong kiểm thử</h4>

                    <div>
                        <p><b>Tổ chức kiểm thử</b></p>
                        <ul>
                            <li>Kiểm thử đơn vị (Unit test)</li>
                            <li>Kiểm thử tích hợp (Integration test)</li>
                            <li>Kiểm thử chức năng (Function test)</li>
                            <li>Kiểm thử sự thực hiện (Performance test)</li>
                            <li>Kiểm thử chấp nhận (Acceptance test)</li>
                            <li>Kiểm thử cài đặt (Installation test)</li>
                        </ul>
                    </div>

                    <div>
                        <p><b>Quan điểm kiểm thử</b></p>
                        <p>Lập trình bản ngã: các chương trình được xem như những thành phần của một hệ thống lớn hơn,
                            không như tài sản của những người đã viết ra chúng</p>

                        <p><b>Người kiểm thử: nhóm kiểm thử độc lập</b></p>
                        <ul>
                            <li>Tránh sự mâu thuẫn</li>
                            <li>Tăng tính khách quan</li>
                            <li>Cho phép kiểm thử và lập trình đồng thời</li>
                        </ul>

                        <p><b>Tổng quan về các phương pháp kiểm thử</b></p>
                        <ul>
                            <li>Kiểm thử hộp đóng hay hộp đen sử dụng chức năng của đối tượng kiểm thử để kiểm thử theo
                                nhiều cách</li>
                            <li>Kiểm thử hộp mở hay hộp trắng sử dụng cấu trúc của đối tượng kiểm thử để kiểm thử theo
                                nhiều cách</li>
                        </ul>
                    </div>

                    <div>
                        <p>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse121" role="button"
                                aria-expanded="false" aria-controls="collapse121">
                                Kiểm thử hộp đen
                            </a>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse122" role="button"
                                aria-expanded="false" aria-controls="collapse122">
                                Kiểm thử hộp trắng
                            </a>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse123" role="button"
                                aria-expanded="false" aria-controls="collapse123">
                                Kiểm thử đơn vị
                            </a>
                        </p>
                        <div>
                            <div class="collapse" id="collapse121">
                                <div class="card card-body">
                                    <p><b>Kiểm thử hộp đen</b></p>

                                    <ul>
                                        <li>Đặc điểm
                                            <br>
                                            <p>Đối tượng kiểm thử như một hộp đen, thông qua giao diện để đưa dữ liệu
                                                vào và nhận dữ liệu ra</p>
                                            <center>
                                                <img src="./assets/img/CNPM/chap5/img7.png" alt=""
                                                    class="col-12 col-sm-8">
                                            </center>
                                        </li>
                                        <li>Độc lập với các ràng buộc bị tác động bởi cấu trúc bên trong và tính logic
                                            của đối tượng</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="collapse" id="collapse122">
                                <div class="card card-body">
                                    <p><b>Kiểm thử hộp trắng</b></p>

                                    <p>Phương pháp thiết kế trường hợp kiểm thử sử dụng cấu trúc điều khiển của thiết kế
                                        thuật toán để dẫn ra các trường hợp kiểm thử</p>

                                    <center>
                                        <img src="./assets/img/CNPM/chap5/img8.png" alt="" class="col-12 col-sm-8">
                                    </center>
                                </div>
                            </div>
                            <div class="collapse" id="collapse123">
                                <div class="card card-body">
                                    <p><b>Các yếu tố ảnh hưởng đến lựa chọn phương pháp kiểm thử</b></p>

                                    <ul>
                                        <li>Số đường dẫn logic có thể có</li>
                                        <li>Trạng thái của dữ liệu input</li>
                                        <li>Số lượng tính toán có liên quan</li>
                                        <li>Độ phức tạp của giải thuật</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="collapse" id="collapse13">
                <div class="card card-body">
                    <h4>Kiểm thử đơn vị</h4>

                    <ul>
                        <li><b>Kiểm thử đơn vị</b>: kiểm thử từng thành phần hay từng mô đun của phần mềm</li>
                        <li><b>Các bước kiểm thử đơn vị</b>
                            <br>

                            <ul>
                                <li>Xem lại mã lệnh</li>
                                <li>Biên dịch mã lệnh và loại bỏ bất cứ lỗi cú pháp nào còn lại</li>
                                <li>Phát triển các trường hợp kiểm thử để chỉ ra rằng input được chuyển đổi chính xác
                                    thành output mong đợi</li>
                            </ul>
                        </li>
                        <li><b>Tính toàn diện của kiểm thử</b>
                            <br>
                            <ul>
                                <li>Kiểm thử câu lệnh</li>
                                <li>Kiểm thử rẽ nhánh</li>
                                <li>Kiểm thử đường đi</li>
                                <li>Kiểm thử sử dụng định nghĩa</li>
                                <li>Kiểm thử tất cả sử dụng</li>
                                <li>Kiểm thử sử dụng tất cả vị từ/kiểm thử sử dụng một số tính toán</li>
                                <li>Kiểm thử sử dụng một số vị từ/kiểm thử sử dụng tất cả tính toán</li>
                            </ul>
                        </li>
                    </ul>


                    <div>
                        <p><b>Kiểm thử đường đi</b>: Kiểm thử tất cả các hướng đi có thể</p>
                        <ul>
                            <li>Thiết lập đồ thị dòng chảy</li>
                            <li>Liệt kê các đường thực thi độc lập cơ bản</li>
                            <li>Sinh các trường hợp kiểm thử cho các đường thực thi đó</li>
                        </ul>
                    </div>

                    <div>
                        <p><b>Thiết lập đồ thị dòng chảy</b>:</p>
                        <ul>
                            <li>Mỗi nút hình tròn biểu diễn một hoặc một vài tác vụ</li>
                            <li>Cạnh có hướng miêu tả đường thực thi</li>
                            <li>Đồ thị dòng chảy được xây dựng từ lưu đồ giải thuật</li>
                        </ul>

                        <center>
                            <img src="./assets/img/CNPM/chap5/img9.png" alt="" class="col-12 col-sm-8">
                        </center>

                        <p>Phải phân rã tất cả các điều kiện phức trở thành điều kiện đơn</p>
                        <center>
                            <img src="./assets/img/CNPM/chap5/img10.png" alt="" class="col-12 col-sm-8">
                        </center>
                    </div>

                    <div>
                        <p><b>Ví dụ: Kiểm thử đường đi</b></p>

                        <center>
                            <img src="./assets/img/CNPM/chap5/img11.png" alt="" class="col-12 col-sm-8">
                        </center>

                        <ul>
                            <li>Liệt kê các đường <b style="color:red;">đường độc lập cơ bản</b>
                                <br>
                                <ul>
                                    <li>Từ nút bắt đầu đến nút kết thúc, các đường thực thi cơ bản được liệt kê theo 1
                                        thứ tự nào đó để đảm bảo rằng đường liệt kê ít nhất đi qua 1 cạnh chưa được
                                        duyệt qua bởi các đường đã liệt kê trước đó</li>
                                    <li>Tổng số đường thực thi cơ bản độc lập nhau được tính bằng <b
                                            style="color: red">V = P + 1</b> trong đó P là số nút phân nhánh</li>
                                </ul>
                            </li>
                            <li>Ví dụ
                                <br>
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-12 col-sm-6">
                                            <center>
                                                <img src="./assets/img/CNPM/chap5/img12.png" alt=""
                                                    class="col-12 col-sm-8">
                                            </center>
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <p>Các đường độc lập cơ bản</p>
                                            <ul style="list-style-type: '<->'">
                                                <li>1.1 - 11</li>
                                                <li>2.1 - 2,3 - 4,5 - 10 - 1 - 11</li>
                                                <li>3.1 - 2,3 - 6 - 7 - 9 - 10 - 1 - 11</li>
                                                <li>4.1 - 2,3 - 6 - 8 - 9 - 10 - 1 - 11</li>
                                            </ul>
                                        </div>


                                    </div>
                                </div>
                            </li>
                            <li>Sinh ra các <b style="color:red;">trường hợp kiểm thử (test-case)</b>
                                <br>
                                <ul>
                                    <li>Thiết lập một test-case cho mỗi đường thực thi cơ bản</li>
                                    <li>Dựa vào giải thuật để
                                        <ul>
                                            <li>Đưa ra dữ liệu input</li>
                                            <li>Tính ra dữ liệu output hay đáp ứng mong đợi của giải thuật</li>
                                        </ul>
                                    </li>
                                    <li>Có thể không tạo ra được test-case cho một đường thực thi nào đó</li>
                                </ul>
                            </li>
                            <li>
                                Ví dụ: Cho đoạn chương trình sau, hãy xác định các trường hợp kiểm thử?
                                <br>
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-12 col-sm-6">
                                            <center>
                                                <img src="./assets/img/CNPM/chap5/img13.png" alt="" class="col-12">
                                            </center>
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <center>
                                                <img src="./assets/img/CNPM/chap5/img14.png" alt="" class="col-12">
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <b>Các đường độc lập cơ bản</b>
                                <ul>
                                    <li>1 - 2 - 8</li>
                                    <li>1 - 3 - 2 - 8</li>
                                    <li>1 - 3 - 4 - 5 - 7 - 8</li>
                                    <li>1 - 3 - 4 - 6 - 7 - 8</li>
                                </ul>
                            </li>
                            <li><b>Các trường hợp kiểm thử</b>
                                <br>

                                <ul>
                                    <li>Đường 1: 1 - 2 - 8
                                        <br>
                                        <ul>
                                            <li>Input: k = 6; x = 3</li>
                                            <li>Output mong đợi: x = 396</li>
                                        </ul>
                                    </li>
                                    <li>Đường 2: 1 - 3 - 2 - 8
                                        <br>
                                        <ul>
                                            <li>Input: k = 15, x = 2</li>
                                            <li>Output mong đợi: x = 660</li>
                                        </ul>
                                    </li>
                                    <li>Đường 3: 1 - 3 - 4 - 5 - 7 - 8
                                        <br>
                                        <ul>
                                            <li>Input: k = 9; x = 1</li>
                                            <li>Output mong đợi: x = 99</li>
                                        </ul>
                                    </li>
                                    <li>Đường 4: 1 - 3 - 4 - 6 - 7 - 8
                                        <br>
                                        <ul>
                                            <li>Input: k = 13; x = 2</li>
                                            <li>Output mong đợi: x = 208</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="collapse" id="collapse14">
                <div class="card card-body">
                    <h4>Kiểm thử tích hợp</h4>

                    <div>
                        <p><b>Kiểm thử tích hợp nhằm phát hiện các lỗi liên quan đến sự giao tiếp giữa các thành
                                phần</b></p>

                        <p><b>Các dạng kiểm thử tích hợp</b></p>
                        <ul>
                            <li>Tích hợp dần
                                <ul>
                                    <li>Kiểm thử từ dưới lên</li>
                                    <li>Kiểm thử từ trên xuống</li>
                                    <li>Kiểm thử từ trên xuống được hiệu chỉnh</li>
                                    <li>Kiểm thử sandwich (kẹp)</li>
                                    <li>Kiểm thử sandwich được hiệu chỉnh</li>
                                </ul>
                            </li>
                            <li>Tích hợp đồng thời một lúc
                                <br>
                                Kiểm thử Big-bang
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p><b style="color:red">Driver</b>: một chương trình mà nó gọi một thành phần (component) cụ thể
                            và truyền một trường hợp kiểm cho nó</p>
                        <p><b style="color:red;">Stub</b>: một chương trình (có mục đích đặc biệt để) mô phỏng hoạt động
                            của thành phần bị thiếu</p>

                        <p><b>Ví dụ</b>: Cho một hệ thống với các thành phần được phân cấp</p>
                        <center>
                            <img src="./assets/img/CNPM/chap5/img15.png" alt="" class="col-12 col-sm-8">
                        </center>
                    </div>

                    <div>
                        <p><b>Kiểm thử tích hợp từ trên xuống</b></p>
                        <center>
                            <img src="./assets/img/CNPM/chap5/img16.png" alt="" class="col-12 col-sm-8">
                        </center>
                    </div>
                    <div>
                        <p><b>Kiểm thử tích hợp từ trên xuống được hiệu chỉnh</b></p>
                        <center>
                            <img src="./assets/img/CNPM/chap5/img17.png" alt="" class="col-12 col-sm-8">
                        </center>
                    </div>
                    <div>
                        <p><b>Kiểm thử tích hợp Big-Bang</b></p>
                        <center>
                            <img src="./assets/img/CNPM/chap5/img18.png" alt="" class="col-12 col-sm-8">
                        </center>
                    </div>
                    <div>
                        <p><b>Kiểm thử tích hợp Sandwich</b></p>
                        <center>
                            <img src="./assets/img/CNPM/chap5/img20.png" alt="" class="col-12 col-sm-8">
                        </center>
                    </div>
                    <div>
                        <p><b>Kiểm thử tích hợp sandwich được hiệu chỉnh</b></p>
                        <center>
                            <img src="./assets/img/CNPM/chap5/img19.png" alt="" class="col-12 col-sm-8">
                        </center>
                    </div>
                    <div>
                        <p><b>So sánh các dạng kiểm thử tích hợp</b></p>
                        <center>
                            <img src="./assets/img/CNPM/chap5/img21.png" alt="" class="col-12">
                        </center>
                    </div>
                </div>
            </div>
            <div class="collapse" id="collapse15">
                <div class="card card-body">
                    <h4>Lập kế hoạch kiểm thử</h4>

                    <ul>
                        <li>Thiết lập các mục tiêu kiểm thử</li>
                        <li>Thiết kế các trường hợp kiểm thử</li>
                        <li>Viết các trường hợp kiểm thử</li>
                        <li>Kiểm tra các trường hợp kiểm thử</li>
                        <li>Thực thi các kiểm thử</li>
                        <li>Đánh giá các kết quả kiểm thử</li>
                    </ul>

                    <div>
                        <p><b>Kế hoạch kiểm thử giải thích</b></p>

                        <ul>
                            <li>Ai thực hiện kiểm thử</li>
                            <li>Tại sao các kiểm thử được thực hiện</li>
                            <li>Cách thức các kiểm thử được kiểm soát</li>
                            <li>Khi nào các kiểm thử được thực hiện</li>
                        </ul>
                    </div>

                    <div>
                        <p><b>Nội dung của kế hoạch</b></p>

                        <ul>
                            <li>Các mục tiêu của kiểm thử</li>
                            <li>Cách thực hiện kiểm thử</li>
                            <li>Chuẩn được sử dụng để xác định khi nào kiểm thử hoàn thành</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="collapse" id="collapse16">
                <div class="card card-body">
                    <h4>Công cụ kiểm thử tự động</h4>

                    <div>
                        <p><b>Công cụ phân tích mã lệnh</b></p>

                        <ul>
                            <li>Phân tích tĩnh
                                <ul>
                                    <li>Bộ phân tích mã lệnh</li>
                                    <li>Bộ kiểm tra cấu trúc</li>
                                    <li>Bộ phân tích dữ liệu</li>
                                    <li>Bộ kiểm tra trình tự</li>
                                </ul>
                            </li>
                            <li>Phân tích động
                                <br>
                                <p>Các bộ giám sát chương trình: xem và báo cáo lại các hoạt động của chương trình</p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p><b>Công cụ thực hiện kiểm thử</b></p>

                        <ul>
                            <li>Capture và replay</li>
                            <li>Các stub và driver</li>
                            <li>Selenium ide</li>
                            <li>Môi trường kiểm thử tự động</li>
                            <li>Bộ sinh các trường hợp kiểm thử</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
            `
        ]]
    },
    CNPM02: {
        title: 'Phần 2: Kiểm thử hệ thống',
        index: [
            ['Nội dung', 'CNPM021', `
            <div id="2">
        <h4>Phần 2: Kiểm thử hệ thống</h4>

        <div>
            <p>
                <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse21" role="button"
                    aria-expanded="false" aria-controls="collapse21">
                    Các nguyên lý của kiểm thử hệ thống
                </a>
                <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse22" role="button"
                    aria-expanded="false" aria-controls="collapse22">
                    Kiểm thử chức năng
                </a>
                <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse23" role="button"
                    aria-expanded="false" aria-controls="collapse23">
                    Kiểm thử sự thực thi
                </a>
                <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse24" role="button"
                    aria-expanded="false" aria-controls="collapse24">
                    Tính tin cậy, tính sẵn có và tính có thể bảo trì
                </a>
                <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse25" role="button"
                    aria-expanded="false" aria-controls="collapse25">
                    Kiểm thử chấp nhận
                </a>
                <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse26" role="button"
                    aria-expanded="false" aria-controls="collapse26">
                    Kiểm thử sự cài đặt
                </a>
                <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse27" role="button"
                    aria-expanded="false" aria-controls="collapse27">
                    Tài liệu kiểm thử
                </a>
            </p>
            <div>
                <div class="collapse" id="collapse21">
                    <div class="card card-body">
                        <h4>Các nguyên lý của kiểm thử hệ thống</h4>

                        <ul>
                            <li>Kiểm thử chức năng: hệ thống được tích hợp có thực hiện như được cam kết trong đặc tả tả cầu?</li>
                            <li>Kiểm thử thực hiện: các yếu tố phi chức năng có được đáp ứng?</li>
                            <li>Kiểm thử chấp nhận: hệ thống có phải là cái mà khách hàng mong đợi?</li>
                            <li>Kiểm thử sự cài đặt: hệ thống có vận hành ở chỗ khách hàng không?</li>
                        </ul>

                        <div>
                            <p><b>Những kỹ thuật được sử dụng trong kiểm thử hệ thống</b></p>
                            <ul>
                                <li>Kế hoạch tích hợp hay xây dựng</li>
                                <li>Kiểm thử hồi quy</li>
                                <li>Quản lý cấu hình</li>
                            </ul>
                        </div>

                        <div>
                            <p><b>Kế hoạch tích hợp hay xây dựng</b></p>
                            <ul>
                                <li>Mô tả các hệ thống con (spin) được kiểm thử</li>
                                <li>Mô tả cách thức, nơi chốn, thời gian và người thực hiện các kiểm thử</li>
                            </ul>
                        </div>

                        <div>
                            <p><b>Ví dụ về kế hoạch xây dựng cho hệ thống viễn thông</b></p>
                            <center>
                                <table class="col-12">
                                    <thead>
                                        <tr>
                                            <th>Spin</th>
                                            <th>Chức năng</th>
                                            <th>Bắt đầu kiểm thử</th>
                                            <th>Kết thúc kiểm thử</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>0</td>
                                            <td>Exchange</td>
                                            <td>1 September</td>
                                            <td>15 September</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Area code</td>
                                            <td>30 September</td>
                                            <td>15 October</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>State/province/district</td>
                                            <td>25 October</td>
                                            <td>5 November</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Country</td>
                                            <td>10 November</td>
                                            <td>20 November</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>International</td>
                                            <td>1 December</td>
                                            <td>15 December</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </center>
                        </div>

                        <div>
                            <p><b>Các bước kiểm thử hồi quy</b></p>
                            <ul>
                                <li>Chèn vào mã lệnh mới</li>
                                <li>Kiểm thử các chức năng sẽ bị ảnh hưởng bởi mã lệnh mới</li>
                                <li>Kiểm thử các chức năng cần thiết của phiên bản m để xác nhận rằng chúng vẫn hoạt động chính xác</li>
                                <li>Tiếp tục kiểm thử chức năng của phiên bản m + 1</li>
                            </ul>
                        </div>

                        <div>
                            <p><b>Nhóm kiểm thử</b></p>

                            <ul>
                                <li>Kiểm thử viên chuyên nghiệp: tổ chức và thực hiện các kiểm thử</li>
                                <li>Nhà phần tích: người đã tạo ra các đặc tả</li>
                                <li>Nhà thiết kế hệ thống: hiểu giải phần được đề nghị</li>
                                <li>Chuyên gia quản lý cấu hình: giúp kiểm soát các sữa chữa.</li>
                                <li>Người dùng: đánh giá các phát hành</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="collapse" id="collapse22">
                    <div class="card card-body">
                        <h4>Kiểm thử chức năng</h4>


                        <div>
                            <p><b>Mục đích và vai trò</b></p>

                            <ul>
                                <li>So sánh sự thực hiện thực tế của hệ thống với các yêu cầu của nó</li>
                                <li>Phát triển các trường hợp kiểm thử dựa trên tài liệu yêu cầu</li>
                            </ul>
                        </div>

                        <div>
                            <p><b>Tạo ra các trường hợp kiểm thử chức năng</b></p>

                            <ul>
                                <li>Vẽ đồ thị nhân quản từ các yêu cầu</li>
                                <li>Chuyển đồ thị thành bảng quyết định</li>
                                <li>Mỗi cột trong bảng quyết định tương ứng với một trường hợp kiểm thử chức năng</li>
                            </ul>
                        </div>

                        <div>
                            <p><b>Đồ thị nhân quả</b></p>

                            <ul>
                                <li>Một đồ thị logic phản ánh quan hệ logic giữa nguyên nhân (các input) và kết quả (output hay sự biến đổi)</li>
                                <li>Vẽ đồ thị nhân quả từ các yêu cầu:
                                    <ul>
                                        <li>Các yêu cầu được phân tách sao cho mỗi yêu cầu mô tả một chức năng</li>
                                        <li>Mô tả các nguyên nhân, các kết quả (đó là các nút trong đồ thị)</li>
                                        <li>Vẽ mối quan hệ giữa chúng</li>
                                    </ul>
                                </li>

                                <li>Ký hiệu của đồ thị nhân quả
                                    <center>
                                        <img src="./assets/img/CNPM/chap5/img22.png" alt="" class="col-12 col-sm-8">
                                    </center>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="collapse" id="collapse23">
                    <div class="card card-body">
                        <h4>Kiểm thử sự thực thi</h4>

                        <div>
                            <p><b>Mục đích và vai trò</b></p>

                            <ul>
                                <li>Được sử dụng để kiểm tra
                                    <ul>
                                        <li>Sự tính toán</li>
                                        <li>Tốc độ đáp ứng</li>
                                        <li>Độ chính xác của kết quả</li>
                                        <li>Khả năng truy cập dữ liệu</li>
                                    </ul>
                                </li>
                                <li>Được thiết kế và quản lý bởi nhóm kiểm thử</li>
                                <li>Các loại kiểm thử sự thực thi
                                    <ul>
                                        <li>Kiểm thử ứng suất</li>
                                        <li>Kiểm thử mối trường</li>
                                        <li>Kiểm thử dung lượng CTDL</li>
                                        <li>Kiểm thử chất lượng</li>
                                        <li>Kiểm thử cấu hình</li>
                                        <li>Kiểm thử sự hồi phục</li>
                                        <li>Kiểm thử tính tương thích</li>
                                        <li>Kiểm thử bảo trì</li>
                                        <li>Kiểm thử hồi quy</li>
                                        <li>Kiểm thử tài liệu</li>
                                        <li>Kiểm thử sự bảo mật</li>
                                        <li>Kiểm thử tính dễ sử dụng đ/v con người</li>
                                        <li>Kiểm thử sự điều hòa thời gian</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="collapse" id="collapse24">
                    <div class="card card-body">
                        <h4>Tính tin cậy, tính sẵn có và tính có thể bảo trì</h4>

                        <div>
                            <p><b>Định nghĩa</b></p>
                            <ul>
                                <li>Tính tin cậy của phần mềm: vận hành mà không có lỗi dưới một điều kiện xác định trong một khoảng thời gian cho trước</li>
                                <li>Tính sẵn có của phần mềm: vận hành thành công theo sự đặc tả tại một điểm thời gian xác định</li>
                                <li>Tính có thể bảo trì của phần mềm: với một điều kiện sử dụng xác định, môt hoạt động bảo trì có thể được thực hiện trong khoảng thời gian, thủ tục và tài nguyên xác định</li>
                            </ul>
                        </div>

                        <div>
                            <p><b>Các mức độ khác nhau về tính khốc liệt của lỗi</b></p>
                            <ul>
                                <li><b>Thảm khốc</b>: gây ra sự đổ vỡ hoặc sự mất dữ liệu</li>
                                <li><b>Then chốt</b>: gây ra tổn thương rất xấu hay sự thiệt hại hệ thống chính</li>
                                <li><b>Lề</b>: gây ra tổn thương phụ hay sự thiệt hại hệ thống</li>
                                <li><b>Thứ yếu</b>: không gây ra tổn thương hay sự thiệt hại hệ thống</li>
                            </ul>
                        </div>

                        <div>
                            <p><b>Đo lường tin cậy, tính sẵn có và tính có thể bảo trì</b></p>

                            <ul>
                                <li>Thời gian trung bình đối với sự thất bại (Mean time to failure - MTTF)</li>
                                <li>Thời gian trung bình để sửa một thành phần phần mềm bị lỗi (Mean time to repair - MTTR)</li>
                                <li>Thời gian trung bình giữa các lần thất bại (Mean time between failures - MTBF)
                                    <br>
                                    MTBF = MTTF + MTTR
                                    <br>
                                    Tính tin cậy: R = MTTF/(1+MTTF)
                                    <br>
                                    Tính sẵn có: A = MTBF/(1+MTBF)
                                    <br>
                                    Tính có thể bảo trì: M = 1 / (1+MTTR)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="collapse" id="collapse25">
                    <div class="card card-body">
                        <h4>Kiểm thử chấp nhận</h4>

                        <div>
                            <p><b>Mục đích và vai trò</b></p>

                            <ul>
                                <li>Cho phép khách hàng và người dùng xác định xem hệ thống được xây dựng có đáp ứng yêu cầu và sự mong đợi của họ hay không</li>
                                <li>Được viết, quản lý và đánh giá bởi khách hàng</li>
                            </ul>
                        </div>

                        <div>
                            <p><b>Các loại kiểm thử chấp nhận</b></p>
                            <ul>
                                <li>Kiểm thử thử nghiệm (pilot): cài đặt hệ thống trên cơ sở thí nghiệm
                                    <ul>
                                        <li>Kiểm alpha: kiểm thử của người dùng trong tổ chức hay công ty phát triển phần mềm</li>
                                        <li>Kiểm thử beta: kiểm thử của khách hàng</li>
                                    </ul>
                                </li>
                                <li>Kiểm thử song song: một hệ thống mới vận hành song song với hệ thống cũ</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="collapse" id="collapse26">
                    <div class="card card-body">
                        <h4>Kiểm thử sự cài đặt</h4>
                        <div>
                            <p><b>Trước khi kiểm thử</b></p>
                            <ul>
                                <li>Cấu hình hệ thống</li>
                                <li>Gắn số và loại thiết bị</li>
                                <li>Thiết lập sự giao tiếp với hệ thống khác</li>
                            </ul>
                        </div>

                        <div>
                            <p><b>Kiểm thử</b></p>
                            <ul>
                                <li>Kiểm thử hồi quy: kiểm thử rằng hệ thống được cài đặt một cách chính xác và hoạt động</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="collapse" id="collapse27">
                    <div class="card card-body">
                        <h4>Tài liệu kiểm thử</h4>
                        <ul>
                            <li>Kế hoạch kiểm thử: mô tả hệ thống và kế hoạch sử dụng tất cả các chức năng và các đặc trưng</li>
                            <li>Đặc tả và đánh giá kiểm thử: chi tiết từng kiểm thử và định nghĩa tiêu chuẩn để đánh giá  từng đặc điểm</li>
                            <li>Mô tả kiểm thử: thủ tục và dữ liệu kiểm thử cho từng kiểm thử</li>
                            <li>Báo cáo phân tích kiểm thử: các kết quả của từng kiểm thử</li>
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
        title: 'Video bài giảng',
        index: [
            ['ĐH Trà Vinh', 'CNPM031', `
            <p>Bài giảng <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220055_CongNghePhanMem/Video/Chuong6.mp4" target="_blank">Link</a></p>
        `],
            ['Youtube', 'CNPM032', ``],
        ]
    }
}