const PTTKHT2 = {
    PTTKHT1: {
        title: `KHẢO SÁT HIỆN TRẠNG HỆ THỐNG`,
        index: [
            ['Mục đích','PTTKHT11',`
                <p><b>Mục đích</b></p>
                <ul>
                    <li>Tiếp cận với nghiệp vụ chuyên môn, môi trường hoạt động của hệ thống</li>
                    <li>Tìm hiểu các chức năng, nhiệm vụ và cách hoạt động của hệ thống</li>
                    <li>Chỉ ra các ưu điểm của hệ thống cũ để kế thừa và các khuyết điểm của hệ thống để nghiên cứu khắc phục</li>
                </ul>
            `],
            ['Quá trình khảo sát','PTTKHT12',`
                <p>Quá trình khảo sát được chia làm 2 giai đoạn:</p>
                <ul>
                <li>Khảo sát sơ bộ: nhằm hình thành dự án phát triển HTTT</li>
                <li>Khảo sát chi tiết: nhằm thu thập các thông tin chi tiết của hệ thống nhằm phục vụ việc phân tích yêu cầu
                    và làm cơ sở cho giai đoạn thiết kế.
                    <ul>
                    <li>Tiến hành nghiên cứu mục tiêu của tổ chức (bao gồm mục tiêu dài hạn mang tính chiến lược và mục tiêu
                        ngắn hạn hay mục tiêu cụ thể).</li>
                    <li>Tìm hiểu thực trạng ứng dụng CNTT trong tổ chức nói chung và trong lĩnh vực nghiên cứu nói riêng.</li>
                    <li>Tìm hiểu quy trình hoạt động của hệ thống hiện tại (hệ thống thực), tìm hiểu cách thức mà tổ chức đang
                        hoạt động</li>
                    <li>Chỉ ra các chỗ hợp lý của hệ thống cần được kế thừa và các chỗ bất hợp lý cần được nghiên cứu khắc
                        phục</li>
                    <li>Đề ra dự án sơ bộ, đánh giá khả thi và ra quyết định thực thi dự án</li>
                    </ul>
                </li>
                </ul>
            `],
            ['Nội dung khảo sát và đánh giá hiện trạng','PTTKHT13',`
                <p><b>Nội dung khảo sát và đánh giá hiện trạng</b></p>
                <ul>
                <li>Thu thập và mô tả các quy tắc quản lý, tổ chức, kỹ thuật.</li>
                <li>Thu thập và tìm hiểu các chứng từ giao dịch. Mô tả các luồng thông tin và tài liệu giao dịch.</li>
                <li>Thống kê các phương tiện và tài nguyên đã và có thể sử dụng</li>
                <li>Thu thập và tìm hiểu các ý kiến khen chê về HTTT cũ và những yêu cầu, đòi hỏi về hệ thống tương lai.</li>
                <li>Lập hồ sơ tổng hợp về hiện trạng.</li>
                </ul>
            `],
            ['Các công việc sau khảo sát hiện trạng','PTTKHT14',`
                <p>
                    <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse441" role="button"
                    aria-expanded="false" aria-controls="collapse441">
                    Xử lý sơ bộ kết quả khảo sát
                    </a>
                    <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse442" role="button"
                    aria-expanded="false" aria-controls="collapse442">
                    Tổng hợp kết quả khảo sát
                    </a>
                    <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse443" role="button"
                    aria-expanded="false" aria-controls="collapse443">
                    Hợp thức hóa kết quả khảo sát
                    </a>
                </p>
                <div class="collapse" id="collapse441">
                    <div class="card card-body">
                    <p><b>Xử lý sơ bộ kết quả khảo sát</b></p>
                    <ul>
                        <li>Làm rõ các chức năng của hệ thống
                        <ul>
                            <li>Xác định được các chức năng và dữ liệu của hệ thống: như các đối tượng, các điểm công tác, các
                            hoạt động</li>
                            <li>Đối với mỗi chức năng cần làm rõ: điều kiện khởi động, kết quả thu được, thời gian thực hiện, tần
                            số,
                            chu kỳ, các quy tắc phải tuân thủ</li>
                        </ul>
                        </li>
                        <li>Rà soát lại dữ liệu
                        <ul>
                            <li>Tên dữ liệu: do người phân tích lựa chọn</li>
                            <li>Định nghĩa về dữ liệu: mô tả bằng lời hoặc bằng công thức.</li>
                            <li>Kiểu dữ liệu (số, chuỗi,...).</li>
                            <li>Loại là dữ liệu cơ sở hay dữ liệu được suy từ dữ liệu khác</li>
                            <li>Ràng buộc về giá trị</li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
                <div class="collapse" id="collapse442">
                    <div class="card card-body">
                    <p><b>Tổng hợp kết quả khảo sát</b></p>
                    <ul>
                        <li>Tổng hợp các xử lý
                        <ul>
                            <li>Mục đích là làm rõ các thiếu sót và sự rời rạc của các yếu tố liên quan đến công việc khi phỏng
                            vấn</li>
                            <li>Có hai cách tổng hợp các xử lý:
                            <ul>
                                <li>Tổng hợp kết hợp với yếu tố tổ chức</li>
                                <li>Tổng hợp tách rời các yếu tố tổ chức</li>
                            </ul>
                            </li>
                        </ul>
                        </li>
                        <li>Tổng hợp các dữ liệu
                        <p>Mục tiêu là liệt kê ra tất cả các dữ liệu có liên quan đến hệ thống nhằm xây dựng một từ điển dữ liệu
                            chung
                            cho toàn nhóm phân tích</p>
                        </li>
                    </ul>
                    </div>
                </div>
                <div class="collapse" id="collapse443">
                    <div class="card card-body">
                    <p><b>Hợp thức hóa kết quả khảo sát</b></p>
                    <ul>
                        <li>Mục đích
                        <ul>
                            <li>Xác định tính đúng đắn của thông tin và dữ liệu phản ánh yêu cầu thông tin của hệ thống</li>
                            <li>Bảo đảm tính pháp lý của nó cho việc sử dụng sau này</li>
                            <li>Hợp thức hóa kết quả khảo sát gồm các công việc
                            <ul>
                                <li>Hoàn chỉnh và trình bày các dữ liệu thu được để người sử dụng xem xét và cho ý kiến</li>
                                <li>Tổng hợp các tài liệu để các nhà quản lý và lãnh đạo đánh giá và bổ sung</li>
                                <li>Đề đạt thêm một số quy tắc mới (như các quy tắc về an toàn hệ thống, các yêu cầu về nhân
                                sự,...).</li>
                            </ul>
                            </li>
                        </ul>
                        </li>
                        <li>Hợp thức hóa là một khâu không thể bỏ qua, nếu không có thể sẽ đối mặt với những khó khăn không lường
                        khi triển khai.</li>
                    </ul>
                    </div>
                </div>
            `]
        ]
    },
    PTTKHT2: {
        title: `XÁC ĐỊNH YÊU CẦU`,
        index: [
            ['Yêu cầu về tổ chức', 'PTTKHT21', `
            <p><b>Yêu cầu về tổ chức</b></p>
            <ul>
              <li>Xác định yêu cầu về mặt tổ chức là xác định các đối tượng hợp thành tổ chức.</li>
              <li>Mỗi tổ chức là một hệ thống với những đặc trưng và sự phức tạp riêng. Xem mỗi tổ chức là một hệ thống xã
                hội - kỹ thuật, nó thường được đặc trưng bởi các mặt sau:
                <ul>
                  <li>Quy mô tổ chức;</li>
                  <li>Cơ cấu tổ chức;</li>
                  <li>Lĩnh vực hoạt động;</li>
                  <li>Mô hình quản lý.</li>
                </ul>
              </li>
              <li>Xác định rõ vấn đề hay cơ hội cần giải quyết, bao gồm các công việc:
                <ul>
                  <li>Xác định các đơn vị và sơ đồ tổ chức của các đơn vị theo không gian;</li>
                  <li>Xác định mối quan hệ giữa các bộ phận bên trong cũng như các mối quan hệ bên ngoài của tổ chức.</li>
                </ul>
              </li>
              <li>Tiếp cận tổ chức cần tiến hành khoa học, có 2 phương pháp tiếp cận
                <ul>
                  <li>Tiếp cận từ trên xuống (Top - Down);</li>
                  <li>Tiếp cận từ dưới lên (Bottom - Up).</li>
                </ul>
              </li>
            </ul>
            `],
            ['Yêu cầu về quản lý', 'PTTKHT22', `
            <p><b>Yêu cầu về quản lý</b></p>
            <ul>
              <li>Bắt đầu từ nhà quản lý cao nhất (Giám đốc) đến người thực hiện các công việc cụ thể (nhân viên).</li>
              <li>Xác định yêu cầu về mặt quản lý là nghiên cứu các quy trình quản lý, các văn bản pháp luật nói chung và
                nội quy của công ty nói riêng</li>
              <li>Qua các tài liệu của hệ thống phân tích viên có thể nắm được: các công việc, các chức năng, các quy tắc
                làm việc</li>
              <li>Các tài liệu nghiên cứu bao gồm:
                <ul>
                  <li>Các văn bản pháp quy, quy định về chức năng, nhiệm vụ của tổ chức và của mỗi điểm công tác;</li>
                  <li>Các văn bản pháp quy, quy định về tiêu chuẩn, quy tắc, phương thức làm việc;</li>
                  <li>Các chủ trương chính sách mà tổ chức, mà Nhà nước đã ban hành;</li>
                  <li>Các báo cáo, báo biểu, thống kê đã có.</li>
                </ul>
              </li>
            </ul>
            `],
            ['Yêu cầu về nghiệp vụ', 'PTTKHT23', `
            <p><b>Yêu cầu về nghiệp vụ</b></p>
                <ul>
                <li>Xác định yêu cầu về mặt nghiệp vụ là xác định các đối tượng hợp thành của kế hoạch nghiệp vụ, xác định rõ
                    vấn đề hay cơ hội cần giải quyết, bao gồm các công việc:
                    <ul>
                    <li>Xác định bắt đầu từ nhiệm vụ chung nhất (nhiệm vụ chiến lược - sứ mệnh) đến công việc cụ thể tại mỗi
                        chỗ làm việc;</li>
                    <li>Xác định chức năng nghiệp vụ của từng đơn vị và mối quan hệ với các đơn vị khác;</li>
                    <li>Xác định nhu cầu, mức độ thông tin trong cũng như ngoài tổ chức, trên cơ sở đó xác định phạm vi và mục
                        tiêu của dự án HTTT sẽ xây dựng. Phạm vi áp dụng của dự án liên quan đến kích cỡ của tổ chức, mà độ phức
                        tạp của dự án là khác nhau, nên phải trả lời câu hỏi “Dự án được áp dụng cho một tổ chức có quy mô lớn,
                        trung bình hay nhỏ?”</li>
                    </ul>
                </li>
                </ul>
                <p><b>Tóm lại quan việc xác định yêu cầu của hệ thống để trả lời cho được các câu hỏi sau:</b></p>
                <ul>
                <li>Hệ thống đang làm gì?</li>
                <li>Gồm những công việc gì?</li>
                <li>Đang quản lý cái gì?</li>
                <li>Những công việc trong hệ thống do ai làm? Làm ở đâu? Khi nào làm?</li>
                <li>Mỗi công việc được thực hiện như thế nào? Mỗi công việc liên quan đến dữ liệu nào?</li>
                <li>Chu kỳ, tần suất, khối lượng công việc?</li>
                <li>Đánh giá các công việc hiện tại: tầm quan trọng như thế nào? Các thuận lợi, khó khăn? Nguyên nhân dẫn
                    đến khó khăn?</li>
                </ul>
            `]
        ]
    },
    PTTKHT3: {
        title: `CÁC PHƯƠNG PHÁP THU THẬP THÔNG TIN`,
        index: [
            ['Phương pháp phỏng vấn','PTTKHT31',`
                <ul>
                    <li>Khái niệm
                    <ul>
                        <li>Phỏng vấn là một phương pháp thu thập thông tin xã hội học thông qua việc tác động tâm lý xã hội trực
                        tiếp giữa người đi phỏng vấn và người được phỏng vấn trên cơ sở mục tiêu của nghiên cứu</li>
                        <li>Nguồn thông tin trong phỏng vấn là tất cả các câu trả lời của người được phỏng vấn thể hiện quan điểm,
                        ý thức, trình độ của người trả lời và toàn bộ hành vi của họ.</li>
                    </ul>
                    </li>
                    <li>Kết quả phỏng vấn phụ thuộc vào
                    <ul>
                        <li>Sự chuẩn bị;</li>
                        <li>Chất lượng câu hỏi và phương pháp ghi chép;</li>
                        <li>Kinh nghiệm và khả năng giao tiếp của người phỏng vấn</li>
                    </ul>
                    </li>
                </ul>
                <p>
                    <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse611" role="button"
                    aria-expanded="false" aria-controls="collapse611">
                    Chuẩn bị phỏng vấn
                    </a>
                    <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse612" role="button"
                    aria-expanded="false" aria-controls="collapse612">
                    Lựa chọn câu hỏi
                    </a>
                    <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse613" role="button"
                    aria-expanded="false" aria-controls="collapse613">
                    Tiến hành phỏng vấn
                    </a>
                    <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse614" role="button"
                    aria-expanded="false" aria-controls="collapse614">
                    Một số quy tắc cho việc thực hiện phỏng vấn
                    </a>
                    <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse615" role="button"
                    aria-expanded="false" aria-controls="collapse615">
                    Những yêu cầu đối với phương pháp quan sát
                    </a>
                    <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse616" role="button"
                    aria-expanded="false" aria-controls="collapse616">
                    Xây dựng kế hoạch quan sát
                    </a>
                    <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse617" role="button"
                    aria-expanded="false" aria-controls="collapse617">
                    Ưu, nhược điểm
                    </a>
                </p>
                <div class="collapse" id="collapse611">
                    <div class="card card-body">
                    <center>
                        <img src="./assets/img/PTTKHT/Chap1/img18.png" alt="">
                    </center>
                    <ul>
                        <li>Làm quen người được phỏng vấn</li>
                        <li>Hẹn thời gian, địa điểm, nội dung</li>
                        <li>Chuẩn bị kế hoạch phỏng vấn</li>
                    </ul>
                    </div>
                </div>
                <div class="collapse" id="collapse612">
                    <div class="card card-body">
                    <ul>
                        <li>Có 2 loại câu hỏi: Câu hỏi đóng và câu hỏi mở</li>
                        <li>Câu hỏi đóng: Cung cấp phạm vi câu trả lời dự kiến, sử dụng khi tập trung vào những vấn đề trọng tâm
                        và hướng đến sự lựa chọn</li>
                        <li>Câu hỏi mở nên sử dụng nhiều hơn vì sẽ thu được nhiều thông tin hơn. Có nhiều khả năng trả lời, câu
                        trả lời tùy thuộc vào điều kiện và sự hiểu biết của người được hỏi</li>
                    </ul>
                    </div>
                </div>
                <div class="collapse" id="collapse613">
                    <div class="card card-body">
                    <ul>
                        <li>Đến trước, chờ người được phỏng vấn</li>
                        <li>Số người: 2 người, 1 người phỏng vấn, 1 người ghi chép.</li>
                        <li>Cách ghi chép: tốc ký, sử dụng ký hiệu, biểu đồ.</li>
                        <li>Ghi âm, ghi hình: xin phép</li>
                        <li>Ưu điểm: hiệu quả; số liệu thu thập có thể so sánh trực tiếp với nhau; dễ tổng hợp ý kiến.</li>
                        <li>Nhược điểm: bố trí sắp xếp thứ tự trình bày, thời gian thích hợp, gặp người khó khai thác.</li>
                    </ul>
                    </div>
                </div>
                <div class="collapse" id="collapse614">
                    <div class="card card-body">
                    <ul>
                        <li>Lựa chọn cán bộ cho việc thực hiện phỏng vấn: giới tính, nghề nghiệp, trình độ học vấn.</li>
                        <li>Chọn các ngữ cảnh phỏng vấn phải tiêu chuẩn hóa: Cố gắng sao cho môi trường đảm bảo tương đối đồng
                        đều, có một bầu không khí tin cậy, trung thực, nghiêm túc, vui vẻ...</li>
                        <li>Cần nghiên cứu các đặc điểm ngôn ngữ giao tiếp, cách ứng xử khi gặp tình huống?</li>
                        <li>Cần nghiên cứu nội dung phỏng vấn bao gồm: Lập các câu hỏi riêng biệt hoặc viết các câu hỏi trả lời...
                        cho đến sắp xếp và trình bày nội dung đó một cách khoa học sao cho đạt hiệu quả thông tin cao nhất.</li>
                    </ul>
        
                    </div>
                </div>
                <div class="collapse" id="collapse615">
                    <div class="card card-body">
                    </div>
                </div>
                <div class="collapse" id="collapse616">
                    <div class="card card-body">
                    </div>
                </div>
                <div class="collapse" id="collapse617">
                    <div class="card card-body">
                    </div>
                </div>
            `],
            ['Phương pháp quan sát','PTTKHT32',`
            <p><b>Phương pháp quan sát</b></p>
            <p>
                <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse621" role="button"
                    aria-expanded="false" aria-controls="collapse621">
                    Định nghĩa phương pháp quan sát
                </a>
                <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse622" role="button"
                    aria-expanded="false" aria-controls="collapse622">
                    Những yêu cầu đối với phương pháp quan sát
                </a>
                <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse623" role="button"
                    aria-expanded="false" aria-controls="collapse623">
                    Xây dựng kế hoạch quan sát
                </a>
                <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse624" role="button"
                    aria-expanded="false" aria-controls="collapse624">
                    Ưu, nhược điểm
                </a>
                </p>
                <div class="collapse" id="collapse621">
                <div class="card card-body">
                    <ul>
                    <li>Phương pháp quan sát là một phương pháp nghiên cứu định tính. Phương pháp này được thực hiện bằng cách
                        quan sát có mục đích, có kế hoạch trong các hoàn cảnh tự nhiên khác nhau nhằm thu thập dữ liệu đặc trưng
                        cho quá trình diễn biến của sự vật, hiện tượng đó. Trong phân tích, thiết kế HTTT, phương pháp quan sát
                        thường được sử dụng để quan sát hành vi, thói quen, kỳ vọng của người sử dụng hệ thống trong hoàn
                        cảnh thực tế</li>
                    <li>Quan sát là một trong những phương thức cơ bản nhất để nhận thức được các sự vật và hiện tượng.
                        Phương pháp này thường được sử dụng trong trường hợp phát hiện vấn đề còn tồn tại của hệ thống cũ và
                        mong muốn hệ thống mới sẽ thực hiện được</li>
                    </ul>
                </div>
                </div>
                <div class="collapse" id="collapse622">
                <div class="card card-body">
                    <p>Để phương pháp quan sát có thể đem lại những thông tin có ý nghĩa, cần phải đảm bảo một số yêu cầu sau:
                    </p>
                    <ul>
                    <li>Tình huống diễn ra hành vi để quan sát phải diễn ra thường xuyên theo một chu kỳ có thể đoán trước
                        được.</li>
                    <li>Thời gian cần thiết để tiến hành quan sát chỉ trong một khoảng thời gian nhất định</li>
                    </ul>
                </div>
                </div>
                <div class="collapse" id="collapse623">
                <div class="card card-body">
                    <p><b>Xây dựng kế hoạch quan sát</b></p>
                    <ul>
                    <li>Xác định mục tiêu quan sát: muốn đạt được gì khi thực hiện phương pháp quan sát
                        <br>
                        Lựa chọn các đối tượng, thời điểm, hình thức quan sát chính xác.
                    </li>
                    <li>Xác định đối tượng quan sát: cá nhân, nhóm người hay tổ chức (phân đoạn nhỏ hơn dựa vào những đặc điểm
                        của đối tượng)</li>
                    <li>Xác định thời điểm quan sát: thời điểm thích hợp để thuận tiện trong việc thu thập thông tin</li>
                    <li>Xác định hình thức quan sát: hình thức ghi lại thông tin quan sát; để quá trình quan sát và thu thập
                        dữ liệu hiệu quả nên kết hợp một số hình thức như: ghi chép. thu âm, mô tả, phân tích và quan sát một
                        cách hệ thống.</li>
                    <li>Tổ chức quan sát: phải được tiến hành chặt chẽ, có sự phối hợp nhuần nhuyễn giữa những quan sát viên
                        và tuân thủ theo kế hoạch đã đề ra. Nếu không tổ chức sắp xếp tốt thì cuộc nghiên cứu sẽ mất khá nhiều
                        thời gian và kết quả thu lại không cao.</li>
                    </ul>
                </div>
                </div>
                <div class="collapse" id="collapse624">
                <div class="card card-body">
                    <ul>
                    <li>Ưu điểm:
                        <ul>
                        <li>Cung cấp thông tin về hành vi thực tế của đối tượng được điều tra, cho phép hiểu rõ hơn hành vi
                            được nghiên cứu.</li>
                        <li>Người nghiên cứu có thể quan sát trực tiếp các hành vi thực tế hoặc có thể quan sát các dấu hiệu
                            hành vi người quan sát. Thậm chí đôi khi có thể gián tiếp quan sát các dấu hiệu phản ánh hành vi
                        </li>
                        <li>Các dữ liệu thu thập thường khách quan, chính xác do được quan sát và ghi chép trực tiếp thay vì
                            dựa vào câu trả lời hay trí nhớ của đối tượng</li>
                        </ul>
                    </li>
                    <li>Nhược điểm:
                        <ul>
                        <li>Chỉ có thể sử dụng cho đối tượng xảy ra trong hiện tại, trong quá khứ và tương lai thì không thể
                            hiện</li>
                        <li>Hạn chế về mặt số lượng do không thể quan sát trên số lượng lớn</li>
                        <li>Hạn chế về thời gian và ngân sách.</li>
                        <li>Mặc dù dữ liệu thu thập được là tương đối khách quan và chính xác, nhưng có thể mắc phải sự suy
                            đoán chủ quan hoặc mang định kiến khi suy đoán đối tượng.</li>
                        </ul>
                    </li>
                    </ul>
                </div>
                </div>
            `],
            ['Phương pháp điều tra bằng bảng hỏi','PTTKHT33',`
            <p><b>Phương pháp điều tra bằng bảng hỏi</b></p>
            <p>
              <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse641" role="button"
                aria-expanded="false" aria-controls="collapse641">
                Quy trình điều tra bằng bảng hỏi
              </a>
              <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse642" role="button"
                aria-expanded="false" aria-controls="collapse642">
                Định nghĩa bảng hỏi và kết cấu bảng hỏi
              </a>
              <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse643" role="button"
                aria-expanded="false" aria-controls="collapse643">
                Quy trình xây dựng bảng hỏi
              </a>
              <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse644" role="button"
                aria-expanded="false" aria-controls="collapse644">
                Các yếu tố thiết kế điều tra
              </a>
              <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse645" role="button"
                aria-expanded="false" aria-controls="collapse645">
                Ưu, nhược điểm
              </a>
            </p>
            <div class="collapse" id="collapse641">
              <div class="card card-body">
                <center>
                  <img src="./assets/img/PTTKHT/Chap1/img19.png" alt="" class="w-100">
                </center>
              </div>
            </div>
            <div class="collapse" id="collapse642">
              <div class="card card-body">
                <ul>
                  <li>Bảng hỏi (phiếu điều tra) là một bảng các câu hỏi mà người được phỏng vấn cần trả lời, được xây dựng
                    dựa trên những nguyên tắc tâm lý và những nguyên tắc hành vi của con người, nên số lượng câu hỏi trong
                    phiếu phụ thuộc vào nội dung nghiên cứu</li>
                  <li>Kết cấu của một phiếu điều tra (bảng hỏi) bao gồm:
                    <ul>
                      <li>Phần mở đầu: Trình bày mục tiêu, ý nghĩa của cuộc điều tra, tên cơ quan, nhóm, tổ chức (hoặc cá
                        nhân)
                        tiến hành xây dựng HTTT, hướng dẫn trả lời và kêu gọi sự giúp đỡ hộ tác từ người trả lời.</li>
                      <li>Phần nội dung: Các nội dung chính liên quan đến HTTT.</li>
                      <li>Phần kết thúc: Cảm ơn người trả lời đã cung cấp (trong trường hợp cần thiết có thể hỏi thêm thông
                        tin cá
                        nhân ở phần này).</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div class="collapse" id="collapse643">
              <div class="card card-body">
                <p><b>Quy trình xây dựng bảng hỏi</b></p>
                <ul>
                  <li>Bước 1: xác định các mục tiêu mà bảng hỏi hướng đến;</li>
                  <li>Bước 2: xác định đối tượng và mẫu điều tra khảo sát;</li>
                  <li>Bước 3: xác định phương pháp thu thập thông tin;</li>
                  <li>Bước 4: xác định các câu hỏi trong bảng hỏi;</li>
                  <li>Bước 5: sắp xếp thứ tự các câu hỏi trong bảng hỏi;</li>
                  <li>Bước 6: tham khảo ý kiến chuyên gia;</li>
                  <li>Bước 7: chỉnh sửa và hoàn thiện bảng hỏi.</li>
                </ul>
              </div>
            </div>
            <div class="collapse" id="collapse644">
              <div class="card card-body">
                <p><b>Các yếu tố chính của thiết kế điều tra</b></p>
                <ul>
                  <li>Mẫu khảo sát: phải xác định mẫu như thế nào để đảm bảo độ tin cậy, phải có tiêu chuẩn; phải hiểu bản
                    chất vấn đề</li>
                  <li>Bảng hỏi: có bị dài quá, mất thời gian, có cân đối hay không? Đối tượng là ai? Họ có hiểu hết câu hỏi
                    không?</li>
                  <li>Phương pháp thu thập dữ liệu: online, đi thu thập trực tiếp, gửi email: ví dụ gửi mail cho các doanh
                    nghiệp. Nếu làm sai phương pháp thì có thể làm mất tính cập nhật do thời gian thu thập quá lâu.</li>
                  <li>Phương pháp phân tích (dự kiến trước): Phải nghĩ rằng phân tích viên sẽ phân tích kết quả như thế nào
                    quá trình xây dựng bảng hỏi mới trở nên khả thi và dễ dàng thực hiện hơn</li>
                </ul>
              </div>
            </div>
            <div class="collapse" id="collapse645">
              <div class="card card-body">
                <ul>
                  <li>Ưu điểm: Phương pháp này là phương pháp nghiên cứu định lượng, vì vậy có thể triển khai nghiên cứu
                    trên quy mô lớn. Chất lượng các câu hỏi cao nên thông tin thu thập được mang tính hiệu quả và dễ dàng xử
                    lý thông tin</li>
                  <li>Nhược điểm: Khi soạn phiếu hỏi đòi hỏi đầu tư sự công phu, trình độ cao, khoa học với đối tượng cần
                    nghiên cứu</li>
                </ul>
              </div>
            </div>
            `],
            ['Phương pháp nghiên cứu tài liệu','PTTKHT34',`
            <p>
            <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse641" role="button"
              aria-expanded="false" aria-controls="collapse641">
              Định nghĩa
            </a>
            <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse642" role="button"
              aria-expanded="false" aria-controls="collapse642">
              Đặc điểm của nghiên cứu tài liệu
            </a>
            <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse643" role="button"
              aria-expanded="false" aria-controls="collapse643">
              Nguồn tài liệu
            </a>
            <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse644" role="button"
              aria-expanded="false" aria-controls="collapse644">
              Các bước nghiên cứu tài liệu
            </a>
          </p>
          <div class="collapse" id="collapse641">
            <div class="card card-body">
              <p><b>Định nghĩa</b></p>
              <p>Nghiên cứu tài liệu là tìm cách thu thập, lựa chọn, biên dịch, tổ chức, giải thích và phân tích thông tin về một đối tượng liên quan trong HTTT từ các nguồn tài liệu, chẳng hạn như sách, tài liệu lưu trữ, hồ sơ nlưu trữ của công ty.</p>
            </div>
          </div>
          <div class="collapse" id="collapse642">
            <div class="card card-body">
              <p><b>Đặc điểm của nghiên cứu tài liệu</b></p>
              <ul>
                <li>Phổ biến cho tất cả các loại HTTT với nền tảng lý thuyết hoặc tham chiếu;</li>
                <li>Thu được dữ liệu từ việc xem xét các tài liệu của các hệ thống khác nhau;</li>
                <li>Tổ chức dữ liệu được thu thập theo cách mạch lạc;</li>
                <li>Giúp xác định các lỗ hổng, thiếu sót hoặc trình bày sai trong các nguồn tham khảo trước đó;</li>
                <li>Đề xuất các quan điểm hoặc lý thuyết phân tích mới dựa trên thông tin thu được;</li>
                <li>Yêu cầu năng lực tổng hợp, suy luận và phân tích;</li>
                <li>Cung cấp sự vững chắc cho kết luận</li>
              </ul>
            </div>
          </div>
          <div class="collapse" id="collapse643">
            <div class="card card-body">
              <p><b>Nguồn tài liệu</b></p>
              <ul>
                <li>Các nguồn chính: nguồn tài liệu của công ty/tổ chức, được đặc trưng bằng cách cung cấp thông tin ban đầu và có liên quan (trình trình hoạt động của công ty, các mẫu bảng biểu, báo cáo...).</li>
                <li>Các nguồn nghiên cứu thứ cấp: từ các nguồn khác và phải chịu một sàng lọc xử lý, tái cơ cấu, phân tích và xem xét (sách, báo, các công trình khoa học, đề án đã triển khai của các công ty khác có đặc điểm tưởng tự....).</li>
              </ul>
            </div>
          </div>
          <div class="collapse" id="collapse644">
            <div class="card card-body">
              <p><b>Các bước nghiên cứu tài liệu</b></p>
              <p>Khi HTTT đã được xác định, tìm loại nguồn cần thiết cho việc điều tra dựa trên các tiêu chí sau:</p>
              <ul>
                <li>Sự liên quan;</li>
                <li>Tính toàn diện;</li>
                <li>Tính thực tế.</li>
                <li>Tổ chức và phân tích thông tin thu được từ các nguồn tài liệu.</li>
              </ul>
            </div>
          </div>
            `],
        ]
    },
    PTTKHT4: {
        title: `LẬP KẾ HOẠCH XÂY DỰNG HỆ THỐNG THÔNG TIN`,
        index: [
            ['Lập kế hoạch hệ thống','PTTKHT41',`
                <p><b>Lập kế hoạch hệ thống</b></p>
                <ul>
                <li>Mô tả phạm vi hệ thống, các phương án sơ khởi: bản mô tả hệ thống, phạm vi hệ thống, tóm lược các
                    phương án và tiềm năng</li>
                <li>Phân chia các công việc cần thực hiện.</li>
                <li>Ước lượng và xây dựng kế hoạch tài nguyên hệ thống: tài chính, tài sản, đặc biệt là nhân sự</li>
                <li>Phác thảo lịch thời gian thực hiện</li>
                <li>Xác định và đánh giá độ rủi ro.</li>
                <li>Lập kế hoạch ngân sách: bảng chi phí - lợi nhuận</li>
                <li>Xây dựng tài liệu mô tả hệ thống</li>
                </ul>
                <p>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse711" role="button" aria-expanded="false" aria-controls="collapse711">
                    Trình bày kế hoạch bằng sơ đồ Gantt
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse712" role="button" aria-expanded="false" aria-controls="collapse712">
                    Trình bày kế hoạch bằng sơ đồ PERT
                </a>
                </p>
                <div class="collapse" id="collapse711">
                <div class="card card-body">
                    <p><b>Sơ đồ Gantt</b></p>
                    <center>
                    <img src="./assets/img/PTTKHT/Chap1/img20.png" alt="" class="w-100">
                    </center>
                </div>
                </div>
                <div class="collapse" id="collapse712">
                <div class="card card-body">
                    <p><b>Sơ đồ PERT</b></p>
                    <center>
                    <img src="./assets/img/PTTKHT/Chap1/img21.png" alt="" class="w-100">
                    </center>
                </div>
                </div>
            `],
            ['Đánh giá khả thi','PTTKHT42',`
            <center>
            <img src="./assets/img/PTTKHT/Chap1/img22.png" alt="" class="w-50">
          </center>
          <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse721" role="button" aria-expanded="false" aria-controls="collapse721">
              Khả thi về tài chính
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse722" role="button" aria-expanded="false" aria-controls="collapse722">
              Khả thi về kỹ thuật
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse723" role="button" aria-expanded="false" aria-controls="collapse723">
              Khả thi về nhân sự
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse724" role="button" aria-expanded="false" aria-controls="collapse724">
              Khả thi về thời gian
            </a>
          </p>
          <div class="collapse" id="collapse721">
            <div class="card card-body">
              <p><b>Khả thi về tài chính</b></p>
              <center>
                <img src="./assets/img/PTTKHT/Chap1/img23.png" alt="" class="w-50">
              </center>
              <center>
                <img src="./assets/img/PTTKHT/Chap1/img24.png" alt="" class="w-50">
              </center>
              <p>Đánh giá hiệu quả kinh tế cho HTTT</p>
              <p>Hiệu quả kinh tế của HTTT = Tổng thu nhập - Tổng chi phí</p>
              <center>
                <p>TTN &gt;TCP</p>
              </center>
              <ul>
                <li>Phương pháp phân tích điểm cân bằng chi phí;</li>
                <li>Phương pháp phân tích tiền dư;</li>
                <li>Phương pháp kinh nghiệm;</li>
                <li>Phương pháp so sánh</li>
              </ul>
            </div>
          </div>
          <div class="collapse" id="collapse722">
            <div class="card card-body">
              <p>Đánh giá sự hiểu biết của nhóm phát triển về khả năng phần cứng, phần mềm và môi trường hoạt động của HTTT tương lai, bao gồm:</p>
              <ul>
                <li>Độ lớn hệ thống:
                  <ul>
                    <li>Độ phức tạp của hệ thống:</li>
                    <li>Thời gian quá trình dự án;</li>
                    <li>Số lượng các phòng ban liên quan đến dự án;</li>
                    <li>Kích thước phần lập trình.</li>
                  </ul>
                </li>
                <li>Độ phức tạp của hệ thống:
                  <ul>
                    <li>Làm mới hệ thống hoặc nâng cấp hệ thống tồn tại;</li>
                    <li>Các thay đổi tổ chức, thủ tục, cấu trúc và nhân sự từ hệ thống;</li>
                    <li>Sự nhận thức và thiện chí của người dùng trong nỗ lực tham gia vào hệ thống.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div class="collapse" id="collapse723">
            <div class="card card-body">
              <p><b>Khả thi về nhân sự</b></p>
              <p>Kinh nghiệm của nhóm triển khai (nhóm phát triển và người dùng) với các hệ thống tương tự:</p>
              <ul>
                <li>Sự quen thuộc với phần cứng được chọn, môi trường phát triển phần mềm và hệ điều hành;</li>
                <li>Sự quen thuộc với lãnh vực ứng dụng được đề xuất;</li>
                <li>Sự quen thuộc với việc xây dựng các hệ thống tương tự có cùng độ lớn.</li>
              </ul>
              <p>Nhóm người dùng</p>
              <ul>
                <li>Sự quen thuộc với tiến trình phát triển HTTT;</li>
                <li>Sự quen thuộc với lĩnh vực ứng dụng;</li>
                <li>Sự quen thuộc với việc sử dụng các hệ thống tương tự.</li>
              </ul>
              <p>Một số quy luật đánh giá khả thi về kỹ thuật và nhân sự</p>
              <ul>
                <li>Các dự án lớn thì ít rủi ro hơn các dự án nhỏ</li>
                <li>Một hệ thống có các yêu cầu được chấp nhận một cách dễ dàng và được kết cấu cao sẽ ít rủi ro hơn hệ
                  thống có yêu cầu lộn xộn, không rõ ràng hoặc chỉ được thẩm định bởi một cá nhân</li>
                  <li>Sử dụng công nghệ phổ biến và chuẩn hóa sẽ ít rủi ro hơn việc sử dụng công nghệ mới và không chuẩn</li>
                  <li>Dự án ít rủi ro hơn khi nhóm người dùng quen thuộc với tiến trình phát triển hệ thống và lĩnh vực ứng dụng</li>
              </ul>
            </div>
          </div>
          <div class="collapse" id="collapse724">
            <div class="card card-body">
              <p><b>Khả thi về thời gian</b></p>
              <ul>
                <li>
                  Khả thi về lịch thực hiện: Khung thời gian hoàn thành hệ thống phù hợp với thời mốc thời gian của đơn vị.
                </li>
                
                <li>
                  Khả thi hợp đồng và hợp luật: gồm bản quyền, sự vi phạm bảo mật, luật lao động, luật chống độc quyền, các điệu lệ thương mại nước ngoài, các chuẩn báo cáo tài chính
                </li>
                
              </ul>
            </div>
          </div>
            `],
        ]
    }
}