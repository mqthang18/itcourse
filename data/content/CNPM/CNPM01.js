const CNPM1 = {
    CNPM01: {
        title: 'Khái niệm Công nghệ phần mềm?',
        index: [
            ['Khái niệm cơ bản', 'CNPM011', `
                <h3>Khái niệm cơ bản về CNPM</h3>

                <p>Công nghệ phần mềm hay kỹ thuật phần mềm (software engineering) - phần mềm + công nghệ (kỹ thuật)
                </p>

                <ul>
                    <li><b>Phần mềm</b> không chỉ là một mã chương trình. Phần mềm là:
                        <ul>
                            <li>Tập hợp các mã lập trình</li>
                            <li>Các liên kết thư viện</li>
                        </ul>
                    </li>
                    <li><b>Công nghệ (hay kỹ thuật)</b> là tập hợp các phương pháp, quy trình, kỹ thuật, hệ thống và
                        phương pháp tổ chức nhằm giải quyết một vấn đề, cải tiến một giải pháp đã tồn tại, đạt một
                        mục đích, hay thực hiện một chức năng cụ thể.</li>
                </ul>
                <center>
                    <img src="./assets/img/CNPM/Chap1/img1.png" alt="" class="col-12 col-sm-8">
                </center>

                <ul>
                    <li>Thuật ngữ CNPM (Software Engineering - SE) 1968</li>
                    <li>Sự phát triển của phần mềm phụ thuộc vào phần cứng và hệ điều hành</li>
                    <li>Vấn đề kinh tế trong CNPM được quan tâm, nhằm mục đích:

                        <ul>
                            <li>Giảm giá thành</li>
                            <li>Ảnh hưởng của kỹ thuật mới</li>
                            <li>Lựa chọn của khách hàng</li>
                            <li>Luật bản quyền</li>
                        </ul>
                    </li>
                    <li>Theo IEEE, công nghệ phần mềm là việc áp dụng các phương pháp tiếp có hệ thống, bài bản và
                        được lượng hóa trong phát triển, vận hành và bảo trì phần mềm, nghiên cứu các hướng tiếp cận
                        được sử dụng.</li>
                    <li>Từ điển Larouse (1996) định nghĩa chi tiết hơn: Công nghệ phần mềm là tập hợp các phương
                        pháp, mô hình, kỹ thuật công cụ và thủ tục liên quan đến các giải đoạn xây dựng một sản phẩm
                        phần mềm. Các giai đoạn đó là đặc tả (specification), thiết kế (design), lập trình
                        (programming), thử nghiệm (testing), sửa sai (debugging), cài đặt (setup) để đem vào ứng
                        dụng (application), bảo trì (maintenance) và lập hồ sơ (documentation)</li>
                </ul>
            `],
            ['Mục tiêu của CNPM', 'CNPM012', `
            <h3>Mục tiêu của CNPM</h3>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-sm-6">
                        <ul>
                            <li>Có chất lượng cao:
                                <ul>
                                    <li>Đúng, thỏa yêu cầu khách hàng</li>
                                    <li>Dễ khai thác, vận hành</li>
                                    <li>Dễ bảo trì</li>
                                </ul>
                            </li>
                            <li>Đúng kế hoạch thời gian</li>
                            <li>Trong phạm vi ngân sách dự kiến</li>
                            <li>Giá thành ngày càng hạ</li>
                        </ul>
                    </div>
                    <div class="col-12 col-sm-6">
                        <center>
                            <img src="./assets/img/CNPM/Chap1/img2.png" alt="" class="col-12 col-sm-10">
                        </center>
                    </div>
                </div>
            </div>
            `],
            ['Một số dự án thất bại', 'CNPM013', `
            <h3>Một số dự án thất bại</h3>
            <ul>
                <li>Vượt ngân sách
                    <ul>
                        <li>Hệ điều hành OS/360</li>
                        <li>AAS (FAA Advanced Automation System) (1989)</li>
                    </ul>
                </li>
                <li>Thiệt hại về tài sản: Ariane 5 (June 04, 1996) nổ sau khi phóng (40s)</li>
                <li>7/10 chương trình phát triển vũ khí đang đối mặt với các vấn đề của PM và tỉ lệ này đang
                    tăng lên</li>
            </ul>
            `],
            ['Phần mềm và lớp phần mềm', 'CNPM014', `
            <h3>Phần mềm và lớp phần mềm</h3>

                    <ul>
                        <li>Phầm mềm là một chương trình, được cài đặt trên các thiết bị</li>
                        <li>Phần mềm được chia làm:
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-12 col-sm-6">
                                        <ul>
                                            <li>Phần mềm thời gian thực (Real-Time SW)</li>
                                            <li>Phần mềm nghiệp vụ (Business SW)</li>
                                            <li>Phần mềm tính toán KH&KT (Eng & Sci.SW)</li>
                                            <li>Phần mềm nhúng (Embedded SW)</li>
                                        </ul>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <ul>
                                            <li>Phần mềm trên Web (Web-based SW)</li>
                                            <li>Phần mềm trí tuệ nhân tạo (AI SW)</li>
                                            <li>Tiện ích (Utility)</li>
                                            <li>Phần mềm phát triển (Development SW)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <center>
                        <img src="./assets/img/CNPM/Chap1/img3.png" alt="" class="col-12 col-sm-8">
                    </center>
                    <p><b>Các khía cạnh trong sản xuất phần mềm</b></p>
                    <ul>
                        <li>Độ phức tạp</li>
                        <li>Sự thích ứng</li>
                        <li>Dễ chuyển đổi</li>
                        <li>Tính vô hình</li>
                    </ul>

                    <p><b>Các thành phần tham gia phát triển phần mềm</b></p>
                    <center>
                        <img src="./assets/img/CNPM/Chap1/img4.png" alt="" class="col-12 col-sm-8">
                    </center>

                    <p><b>Các thành viên trong đội phát triển phần mềm</b></p>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12 col-sm-6">
                                <ul>
                                    <li>Nhà phân tích yêu cầu</li>
                                    <li>Nhà thiết kế</li>
                                    <li>Lập trình viên</li>
                                    <li>Nhà kiểm thử</li>
                                </ul>
                            </div>
                            <div class="col-12 col-sm-6">
                                <ul>
                                    <li>Người hướng dẫn</li>
                                    <li>Bảo trì viên</li>
                                    <li>Thủ thư</li>
                                    <li>Nhóm quản lý cấu hình</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <p><b>Một số khía cạnh cần quan tâm</b></p>
                    <ul>
                        <li>Độ phức tạp: Các yếu tố ảnh hưởng đến công tác bảo trì</li>
                        <li>Sự thích ứng xác định phần mềm phải thích ứng được với thiết bị sẵn có, thích ứng với phần
                            cứng phục vụ PM</li>
                        <li>Dễ chuyển đổi xác định phần mềm phải thay đổi theo thực tiễn</li>
                        <li>Tính vô hình nhằm giấu các công đoạn phức tạp khi thực hiện</li>
                        <li>Sử dụng các công cụ sẵn có để làm giảm thời gian, chi phí phần mềm</li>
                    </ul>
            `]
        ]
    },
    CNPM02: {
        title: 'Các công việc trong công nghệ phần mềm',
        index: [
            ['Các bước phát triển phần mềm', 'CNPM021', `
            <center>
                <img src="./assets/img/CNPM/Chap1/img5.png" alt="" class="col-12 col-sm-8">
            </center>
            `],
            ['Mô hình phát triển phần mềm', 'CNPM022', `
            <p>
                        <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse221" role="button"
                            aria-expanded="false" aria-controls="collapse221">
                            Mô hình xây dựng và hiệu chỉnh
                        </a>
                        <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse222" role="button"
                            aria-expanded="false" aria-controls="collapse222">
                            Mô hình thác nước
                        </a>
                        <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse223" role="button"
                            aria-expanded="false" aria-controls="collapse223">
                            Mô hình bản mẫu
                        </a>
                        <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse224" role="button"
                            aria-expanded="false" aria-controls="collapse224">
                            Mô hình tăng trưởng
                        </a>
                        <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse225" role="button"
                            aria-expanded="false" aria-controls="collapse225">
                            Mô hình xoắn ốc
                        </a>
                        <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse226" role="button"
                            aria-expanded="false" aria-controls="collapse226">
                            Mô hình chữ V
                        </a>
                        <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse227" role="button"
                            aria-expanded="false" aria-controls="collapse227">
                            Các mô hình hiện đại
                        </a>
                    </p>
                    <div>
                        <div class="collapse" id="collapse221">
                            <div class="card card-body">
                                <p><b>Mô hình xây dựng và hiệu chỉnh</b></p>
                                <center>
                                    <img src="./assets/img/CNPM/Chap1/img6.png" alt="" class="col-12 col-sm-8">
                                </center>

                                <p>Ưu điểm</p>
                                <ul style="list-style-type: '- ';">
                                    <li>Đơn giản</li>
                                    <li>Số lượng mã lệnh ít</li>
                                </ul>
                            </div>
                        </div>
                        <div class="collapse" id="collapse222">
                            <div class="card card-body">
                                <p><b>Mô hình thác nước</b></p>

                                <center>
                                    <img src="./assets/img/CNPM/Chap1/img7.png" alt="" class="col-12 col-sm-8">
                                </center>

                                <p>ưu điểm:</p>
                                <ul style="list-style-type: '- ';">
                                    <li>Dễ phân công</li>
                                    <li>Kiến trúc hàng đợi ổn định</li>
                                </ul>
                            </div>
                        </div>
                        <div class="collapse" id="collapse223">
                            <div class="card card-body">
                                <p><b>Mô hình bản mẫu</b></p>

                                <center>
                                    <img src="./assets/img/CNPM/Chap1/img8.png" alt="" class="col-12 col-sm-8">
                                </center>

                                <p>Ưu điểm</p>
                                <ul style="list-style-type: '- ';">
                                    <li>Hình dung được hệ thống</li>
                                    <li>Cải thiện quá trình liên lạc giữa nhà phát triển và người sử dụng</li>
                                </ul>
                            </div>
                        </div>
                        <div class="collapse" id="collapse224">
                            <div class="card card-body">
                                <p><b>Mô hình tăng trưởng</b></p>

                                <center>
                                    <img src="./assets/img/CNPM/Chap1/img9.png" alt="" class="col-12 col-sm-8">
                                </center>

                                <p>Ưu điểm:</p>
                                <ul style="list-style-type: '- ';">
                                    <li>Dễ dàng nhận phản hồi từ khách hàng</li>
                                    <li>Có thể chuyển giao và phát triển phần mềm nhanh</li>
                                </ul>
                            </div>
                        </div>
                        <div class="collapse" id="collapse225">
                            <div class="card card-body">
                                <p><b>Mô hình xoắn ốc</b></p>

                                <center>
                                    <img src="./assets/img/CNPM/Chap1/img10.png" alt="" class="col-12 col-sm-8">
                                </center>

                                <p>Ưu điểm</p>
                                <ul>
                                    <li>Phát triển phần mềm qui mô lớn</li>
                                    <li>Tiếp cận từng bước và có hệ thống</li>
                                </ul>
                            </div>
                        </div>
                        <div class="collapse" id="collapse226">
                            <div class="card card-body">
                                <p><b>Mô hình chữ V</b></p>

                                <center>
                                    <img src="./assets/img/CNPM/Chap1/img11.png" alt="" class="col-12 col-sm-8">
                                </center>

                                <p>Ưu điểm</p>

                                <ul>
                                    <li>Đơn giản và dễ sử dụng</li>
                                    <li>Tiết kiệm thời gian và có cơ hội thành công cao</li>
                                </ul>
                            </div>
                        </div>
                        <div class="collapse" id="collapse227">
                            <div class="card card-body">
                              <p><b>Các mô hình hiện đại</b></p>

                              <center>
                                <img src="./assets/img/CNPM/Chap1/img12.png" alt="" class="col-12 col-sm-8">
                              </center>

                              <p>Ưu điểm</p>
                              <ul style="list-style-type: '- ';">
                                <li>Giải pháp tin cậy</li>
                                <li>Thời gian được rút ngắn</li>
                              </ul>
                            </div>
                          </div>
                    </div>
            `]
        ]
    }
}