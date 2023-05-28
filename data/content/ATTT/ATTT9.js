const ATTT9 = {
    ATTT01: {
        title: `Chữ ký điện tử`,
        index: [
            ['Chữ ký điện tử', 'ATTT011', `
                <ul>
                    <li>Trong một giao dịch, An gửi cho Bình một lá thử của mình. Việc gửi lá thư đó trước hết phải đảm bảo bốn yêu cầu sau đây trong các nguyên lý bảo mật thông tin:
                        <ul>
                        <li><b>Tính bảo mật</b>: Lá thư dù lọt vào tay kẻ khác ngoài thì kẻ đó cũng không hiểu được nội dung thư</li>
                        <li><b>Tính toàn vẹn thông tin</b>: Nếu lá thư bị người trung gian làm biến đổi nội dung trong quá trình truyền tin thì Bình phải nhận biết là thư đã bị can thiệp (chỉ phát hiện (detect) nhưng có thể không biết nội dung bị can thiệp như thế nào để đính chính lại cho đúng (correct))</li>
                        </ul>
                    </li>
                    <li>Trong một giao dịch, An gửi cho Bình một lá thư của mình. Việc gửi lá thư đó trước hết phải đảm bảo <b>bốn yêu cầu</b> sau đây trong các nguyên lý bảo mật thông tin:
                        <ul>
                        <li><b>Tính nhận biết:</b> khi nhân được thư, Bình nhận ra được phải dùng lá thư do An gửi, không phải là do một kẻ thứ ba giả mạo</li>
                        <li><b>Tính không chối bỏ:</b> Sau này An không thể chối bỏ rằng lá thư đó không phải của mình</li>
                        <li><b>Chữ ký điện tử</b> là thông tin đi kèm theo dữ liệu (văn bản, hình ảnh, video,...) nhằm mục đích xác định người chủ của dữ liệu đó.</li>
                        <li><b>Chữ ký điện tử</b> được dùng trong các giao dịch điện tử. Xuất phát từ thực tế, chữ ký điện tử cũng cần đảm bảo các chức năng: xác định được người chủ của một dữ liệu nào đó: văn bản, video, ... dữ liệu đó có bị thay đổi hay không.</li>
                        </ul>
                    </li>
                </ul>
            `]
        ]
    },
    ATTT02: {
        title: `Các định nghĩa pháp lý`,
        index: [
            ['Luật Giao dịch điện tử Việt Nam, Điều 4 định nghĩa', 'ATTT021', `
            <ul>
                <li>(1) Chứng thư điện tử là thông điệp dữ liệu do tổ chức cung cấp dịch vụ chứng thực chữ ký điện tử phát hành nhằm xác nhận, cơ quan, tổ chức, cá nhân được chứng thực là người ký chữ ký điện tử</li>
                <li>(2) Chứng thực chữ ký điện tử là việc xác nhận cơ quan, tổ chức, cá nhân được chứng thực là người ký chữ ký điện tử</li>
                <li>(5) Dữ liệu là thông tin dưới dạng ký hiệu, chữ viết, chữ số, hình ảnh, âm thanh hoặc dạng tương tự</li>
                <li>(12) Thông điệp dữ liệu là thông tin được tạo ra, được gửi đi, được nhận và được lưu trữ bằng phương tiện điện tử</li>
            </ul>
            `],
            ['Bộ luật ESIGN (Hoa kỳ), Điều 106 định nghĩa', 'ATTT022', `
            <ul>
                <li>(2) Điện tử (electronic): chỉ các công nghệ liên quan tới điện, số, từ, truyền tin không dây, quang, điện tử hoặc các khả năng tương tự</li>
                <li>(4) Văn bản điện tử (electronic record): Các hợp đồng hoặc các văn bản khác được tạo ra, lưu trữ, trao đổi dưới dạng điện tử</li>
                <li>(5) Chữ ký điện tử (electronic signature): Các tín hiệu âm thanh, ký hiệu, quá trình gắn (vật lý hoặc logic) với hợp đồng hay văn bản và được thực hiện bởi người muốn ký vào hợp đồng hay văn bản đó.</li>
            </ul>
            `],
            ['Bộ luật GPEA (HOA KỲ), điều 1710 định nghĩa', 'ATTT023', `
            <ul>
            <li>(1) Chữ ký điện tử (electronic signature): là cách ký các văn bản điện tử đảm bảo: (A) nhận dạng và xác thực cá nhân đã tạo ra văn bản;</li>
            <li>(2) (B) Chỉ ra sự chấp thuận của người ký đối với nội dung trong văn bản.</li>
          </ul>
            `]
        ]
    },
    ATTT03: {
        title: `Tạo chữ ký điện tử`,
        index: [
            ['Tạo chữ ký điện tử', 'ATTT031', `
                <p>Chữ ký điện tử là một bộ phần thường có kích thước nhỏ tạo ra từ thông điệp, được người gửi mã hóa bằng khóa K đã trao đổi thống nhất giữa hai đối tác gửi và nhận thông điệp, gửi kèm với toàn bộ thông điệp cho người nhận</p>

                <p>Để tạo ra một bộ phận của thông điệp người ta thường dùng kỹ thuật hàm băm (hash function)</p>
            `]
        ]
    },
    ATTT04: {
        title: `Sơ đồ tạo chữ ký điện tử`,
        index: [
            ['Nội dung', 'ATTT041', `
                <center>
                    <img src="./assets/img/ATTT/Chap9/img1.png" alt="" class="col-12 col-sm-10">
                </center>
            `]
        ]
    },
    ATTT05: {
        title: `Chữ ký số`,
        index: [
            ['Định nghĩa chữ ký số', 'ATTT051', `
            <ul>
            <li>Chữ ký số có thể xem là một lớp con của chữ ký điện tử</li>
            <li>Dựa trên công nghệ khóa công khai</li>
            <li>Mỗi người cần 1 cặp khóa bao gồm khóa công khai và khóa bí mật
    
              <ul>
                <li>Khóa bí mật dùng để tạo chữ ký số</li>
                <li>Khóa công khai dùng để thẩm định CKS -> xác thực</li>
              </ul>
            </li>
          </ul>
    
          <center>
            <img src="./assets/img/ATTT/Chap9/img2.png" alt="" class="col-12 col-sm-8">
          </center>
            `],
            ['Tạo chữ ký số', 'ATTT052', `
                <center>
                    <img src="./assets/img/ATTT/Chap9/img3.png" alt="" class="col-12 col-sm-8">
                </center>
            `],
            ['Thẩm định chữ ký số', 'ATTT053', `
            <center>
                <img src="./assets/img/ATTT/Chap9/img4.png" alt="" class="col-12 col-sm-8">
            </center>
            `],
            ['Tạo chữ ký số RSA', 'ATTT054', `
            <center>
        <img src="./assets/img/ATTT/Chap9/img5.png" alt="" class="col-12 col-sm-8">
        <img src="./assets/img/ATTT/Chap9/img6.png" alt="" class="col-12 col-sm-8">
      </center>
            `]
        ]
    }
}