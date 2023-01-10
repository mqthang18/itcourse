var CA_chap4 = {
    'CA41': {
        'title': 'Chip điều khiển ngắt PIC-8259A',
        'index': [
            ['Cấu tạo và nguyên tắc hoạt động', 'CA411', `
            Hệ thống máy tính có nhiều loại ngắt và nhiều ngắt.
            Mỗi ngắt có một mức ưu tiên khác nhau
            Vi xử lí có 2 lối vào cho ngắt là: INTR, NMI
            Cần bộ điều khiển ưu tiên ngắt để đưa các tín hiệu ngắt vào 2 chân INTR, NMI
            <center>
                <img src="#" alt="so-do-khoi-PIC=8259-A" class="img-f-scale img-scale">
            </center>    
            Các thanh ghi IRR, ISR, IMR: 8 bit
            Tín hiệu yêu cầu ngắt IR0, IR1, …, IR7.
            Thanh ghi che ngắt (IMR - Interrupt Mask Register): Cấm/cho phép ngắt
            IRR: Thanh ghi yêu cầu ngắt
            IR: Thanh ghi ngắt được phục vụ
            PR: Mạch logic giải quyết ưu tiên ngắt
            <center>
                <img src="#" alt="so-do-khoi-ghep-8259-voi-bo-vi-xu-li" class="img-f-scale img-scale">
            </center>  
            
            <div id="accordion">
                <div class="card">
                    <div class="card-header">
                        <a class="card-link text-decoration-none" data-bs-toggle="collapse" href="#footMark">
                            Các chân tín hiệu 8259
                        </a>
                    </div>
                    <div id="footMark" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                            <ol>
                                <li><span class="top-line">CS</span>: Chân chọn chip;</li>
                                <li><span class="top-line">WR</span>: Cho phép ghi dữ liệu;</li>
                                <li><span class="top-line">RD</span>: Cho phép đọc dữ liệu;</li>
                                <li>D0-D7: BUS dữ liệu 2 chiều;</li>
                                <li>CAS0-CAS2: Các đường nối tầng (làm việc ở chế độ chủ, tớ)</li>
                                <li>GND: Chân nối đất;</li>
                                <li>INT: Nối trực tiếp vào chân INTR của bộ VXL;
                                <li>IR0-IR7: Nối với các đầu ra tín hiệu interrupt của thiết bị ngoại vi;</li>
                                <li><span class="top-line">INTA</span>: Chấp nhận ngắt;</li>
                                <li>Vcc: nguồn</li>
                                <li>A0 cùng với các chân <span class="top-line">CS</span>, <span class="top-line">WR</span>, <span class="top-line">RD</span> phân biệt các lệnh khác nhau từ VXL và cung cấp các thông tin trạng thái</li>
                                <li><span class="top-line">SP</span>/<span class="top-line">EN</span>: Xác nhận chế độ chủ, tớ (master: SP = 1, slave: SP = 0)/mở đệm dữ liệu</li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div class="card mt-2">
                    <div class="card-header">
                        <a class="card-link  text-decoration-none" data-bs-toggle="collapse" href="#steps">
                            Các bước tiến hành xử lí ngắt từ thiết bị ngoại vi
                        </a>
                    </div>
                    <div id="steps" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                            <ul>
                                <li> Một trong các đường IR0-IR7 nâng lên mức cao, bit tương ứng trong IRR được thiết lập.</li>
                                <li>8259 gửi tín hiệu đến chân INT của bộ VXL</li>
                                <li>VXL nhận tín hiệu INT và phát xung thứ nhất ra chân <span class="top-line">INTA</span> (nếu cờ IF được thiết lập)</li>
                                <li>Bit ưu tiên cao nhất trong IRR được xóa, bit tương ứng được thiết lập trong ISR. <br>
                                VXL xuất xung thứ 2 ra chân <span class="top-line">INTA</span>, VXL đưa số hiệu ngắt lên bus, VXL đọc và gọi ngắt.</li>
                                <li>BIT ISR được reset hoặc VXL gửi lệnh EOI tới 8259.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            `],
            ['Lập trình với PIC-8259A', 'CA412', `
                <ul>
                    <li>8259 là vi mạch khả trình</li>
                    <li>
                        Việc lập trình cho PIC 8259 gồm 2 công đoạn:
                        <ul>
                            <li>Thiết lập chế độ làm việc của PIC 8259;</li>
                            <li>Lập trình truyền tin qua 8259</li>
                        </ul>
                    </li>
                    <li>8259 có 4 từ điều khiển khởi động: ICW1-ICW4 và 3 từ điều khiển hoạt động OCW1 - OCW3</li>
                    <li>
                        <div id="#accordion">
                            <div class="card mt-2">
                                <div class="card-header">
                                    <a class="card-link  text-decoration-none" data-bs-toggle="collapse" href="#truy-cap-dia-chi-020h-021h">
                                        Các thanh ghi của PIC 8259 được truy cập qua địa chỉ: 020h và 021h
                                    </a>
                                </div>
                                <div id="truy-cap-dia-chi-020h-021h" class="collapse" data-parent="#accordion">
                                    <div class="card-body">
                                        <b>Khởi động PIC cùng PC theo lưu đồ sau</b>
                                        <ol>
                                            <li>VXL: Viết từ điều khiển khởi động ICW1</li>
                                            <li>VXL: Viết từ điều khiển khởi động ICW2</li>
                                            <li>Nếu có ghép tầng VXL ghi tiếp ICW3</li>
                                            <li>Nếu có đòi hỏi ICW4 thì sẽ viết tiếp từ điều khiển khởi động ICW4</li>
                                        </ol>
                                        <center>
                                            <img src="#" alt="khoi-dong-pic-pc" class="img-f-scale img-scale">
                                        </center>
                                        <br>
                                        <p><b>Có 4 từ điều khiển khởi tạo</b></p>
                                        <center>
                                            <img src="#" alt="4-tu-dieu-khien-khoi-tao" class="img-f-scale img-scale">
                                        </center>
                                        <br>
                                        <p><b>Cấu trúc các từ điều khiển ICW1 - ICW4</b></p>
                                        <center>
                                            <img src="#" alt="cau-truc-tu-dieu-khien" class="img-f-scale img-scale">
                                        </center>
                                        <p><b>ICW2: Xác định số hiệu ngắt</b></p>
                                        <center>
                                            <img src="#" alt="ICW2-xac-dinh-so-hieu-ngat" class="img-f-scale img-scale">
                                        </center>
                                        <p><b>ICW3: Làm việc ở chế độ chủ và khách</b></p>
                                        <center>
                                            <img src="#" alt="ICW3-che-do-chu-khach" class="img-f-scale img-scale">
                                        </center>
                                        <p><b>ICW4: Chế độ ưu tiên</b></p>
                                        <center>
                                            <img src="#" alt="ICW4-che-do-uu-tien" class="img-f-scale img-scale">
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="#accordion">
                            <div class="card mt-2">
                                <div class="card-header">
                                    <a class="card-link  text-decoration-none" data-bs-toggle="collapse" href="#dinh-dang-cac-thanh-ghi-OCW">
                                        Định dạng các thanh ghi điều khiển hoạt động OCW1-OCW3
                                    </a>
                                </div>
                                <div id="dinh-dang-cac-thanh-ghi-OCW" class="collapse" data-parent="#accordion">
                                    <div class="card-body">
                                        <ul>
                                            <li>
                                                <b>OCW1: Thanh ghi thiết lập và đọc trạng thái yêu cầu ngắt</b>
                                                <center>
                                                    <img src="#" alt="OCW1" class="img-f-scale img-scale">
                                                </center>
                                            </li>
                                            <li>
                                                <b>OCW2: Xác định việc xử lí các yêu cầu ngắt của 8259</b>
                                                <center>
                                                    <img src="#" alt="OCW2" class="img-f-scale img-scale">
                                                </center>
                                            </li>
                                            <li>
                                                <b>OCW3</b> 
                                                <p>Chọn các thanh ghi để đọc;</p>
                                                <p>Thăm dò trạng thái yêu cầu ngắt;</p>
                                                <p>Thao tác với thanh ghi mặt nạ;</p>
                                                <center>
                                                    <img src="#" alt="OCW3" class="img-f-scale img-scale">
                                                </center>
                                            </li>
                                            <li>
                                                <b>Các chế độ ngắt: Có 4 chế độ</b>
                                                <br>
                                                <center>
                                                    <img src="#" alt="4-che-do-ngat" class="img-f-scale img-scale">
                                                </center>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            `]
        ]
    },
    'CA42': {
        'title': 'Chip ghép nối ngoại vi khả trình PPI-8255A',
        'index': [
            ['Cấu tạo và nguyên tắc hoạt động', 'CA421', ``],
            ['Lập trình với PPT-8255A', 'CA422', ``]
        ]
    },
    'CA43': {
        'title': 'Chip định thời PIT-8253',
        'index': [
            ['Cấu tạo và nguyên tắc hoạt động', '', ``],
            ['Lập trình với PIT-8253', '', ``]
        ]
    },
    'CA44': {
        'title': 'Chip truy nhập bộ nhớ trực tiếp DMA-8237',
        'index': [
            ['Phương pháp truy nhập bộ nhớ trực tiếp', '', ``],
            ['Chip điều khiển DMAC', '', ``]
        ]
    },
    'CA45': {
        'title': 'Bài tập',
        'index': [
            ['Đề 1', 'CA451', `
            Giả sử chỉ sử dụng một PIC 8259 phối ghép với 8086 có sử dụng ICW4, với khoảng cách địa chỉ 8 byte, sử dụng chế độ kích hoạt theo sườn xung. Giá trị trên từ điều khiển ICW1 như thế nào?

            <br>
            <h5>Giải</h5><br>
            <center>
                <img src="./assets/img/CA/CA05/CauTrucICW1.png" alt="cau-truc-ICW-1" class="img-f-scale img-scale">
            </center>
            <br>
            <ul>
                <li>Vị trí D7, D6, D5 do phối ghép với 8086 => Các bit này mang giá trị 0</li>
                <li>Vị trí D4 luôn là 1</li>
                <li>Vị trí D3 theo đề bài yêu cầu kích hoạt theo khung sườn => D3 mang giá trị sườn 0</li>
                <li>Vị trí D2 quãng cách địa chỉ theo yêu cầu bài toán là 8 byte => D2 có giá trị 1</li>
                <li>Vị trí D1 do sử dụng 1 chip PIC 8259 đọc lập => D1 mang giá trị 1</li>
                <li>Vị trí D0 do ghép nối chip 8086 => cần dùng ICW4 => D0 mang giá trị 1</li>
                
            </ul>

            => Giá trị trên từ điều khiển ICW1: 00010011
            `],
            ['Đề 2', 'CA452', `
            Giả sử ta cần lập trình để điều khiển Chip định thời PIT 8253 theo qui định:
            <ul>
                <li>Sử dụng bộ đếm 1</li>
                <li>Chỉ đọc/viết byte thấp</li>
                <li>Chế độ đếm 0</li>
                <li>Phương pháp đếm nhị phân 16 bit</li>
            </ul>
            
            Khi đó giá trị trên thanh ghi từ điều khiển là?

            <h5>Giải</h5>
            <br>
            <center>
                <img src="./assets/img/CA/CA05/Dia_chi_thanh_ghi_PIT8253.png" class="img-f-scale img-scale">
            </center>
            <ul>
                <li>Bit D0: định dạng đếm (0: đếm nhị phân 16 bit, 1: đếm với mã BCD).</li>
                <li>Bit D3, D2, D1: chọn chế độ đếm (000: chế độ 0, 001: chế độ 1, 010: chế độ 2, 011: chế độ 3, 100: chế độ 4, 101: chế độ 5).</li>
                <li>Bit D5, D4: phương thức đọc/viết (00: lệnh chốt bộ đệm, 01: đọc/viết byte thấp, 10: đọc/viết byte cao, 11: đọc/viết byte thấp trước, byte cao sau).</li>
                <li>Bit D7, D6: chọn bộ đếm (00: bộ đếm 0, 01: bộ đếm 1, 10: bộ đếm 2).</li>
            </ul>
            <br>
            Ta có: <br>
            <ul>
                <li>Vị trí D7, D6 - sử dụng bộ đếm 1: 01</li>
                <li>Vị trí D5, D4 - chỉ đọc/viết byte thấp: 01</li>
                <li>Vị trí D3, D2, D1 - chế độ đếm 0: 000</li>
                <li>Phương pháp đếm nhị phân 16 bit: 0</li>
            </ul>
            => Giá trị trên thanh ghi từ điều khiển là: <b>01010000</b>
            `],
            ['Đề 3', 'CA453', `
            Giả sử cần thiết lập chế độ kết thúc ngắt cho PIC 8259 theo yêu cầu sau:
            <ul>
                <li>Mức ưu tiên số 0</li>
                <li>Kết thúc ngắt theo chế độ thường EOI</li>
            </ul>
            Cần thiết lập giá trị cho thanh ghi từ điều khiển hoạt động OCW2 như thế nào?
            <br>
            <h5>Giải</h5>
            <br>
            <center>
                <img src="./assets/img/CA/CA05/PIC8259_OCW2_giaibaitap.png" class="img-f-scale img-scale">
            </center>

            <br>

            => Giá trị cho thanh ghi từ điều khiển hoạt động OCW2: <b>00100000</b>
            `],
            ['Đề 4', 'CA454', `
                Giả sử ta cần xóa bit số 5 cho cổng C của chip PPI 8255. Khi đó giá trị thanh ghi từ điều khiển như thế nào?
                <br>
                <h5>Giải</h5>
                <center>
                    <img src="./assets/img/CA/CA05/remove_C_port_PPI8255.png" alt="xoa-cong-C-ppi8255" class="img-f-scale img-scale">
                </center>
                <br>

                <ul>
                    <li>D0 = 0 (xóa bit)</li>
                    <li>D3, D2, D1: giá trị bit cần xóa (101 = 5)</li>
                    <li>D6, D5, D4: đặt tùy ý</li>
                    <li>D7=0</li>
                </ul>
                => 00001010
            `],
            ['Đề 5', 'CA455', `
                Giả sử ta cần thiết lập bit số 5 cho cổng C của chip PPI 8255. Khi đó giá trị thanh ghi từ điều khiển như thế nào?
                <br>
                <h5>Giải</h5>
                <br>
                <center>
                    <img src="./assets/img/CA/CA05/remove_C_port_PPI8255.png" alt="lap-cong-C-ppi8255" class="img-f-scale img-scale">
                </center>
                <ul>
                    <li>D0 = 1 (lập bit)</li>
                    <li>D3, D2, D1: giá trị bit cần lập (101 = 5)</li>
                    <li>D6, D5, D4: đặt tùy ý</li>
                    <li>D7=0</li>
                </ul>
                => 00001011
            `],
            ['Đề 6', 'CA456', `
                Để thiết lập cho PPI 8255A hoạt động ở chế độ 0, và PA, PCH là cổng vào, PB, PCL là cổng ra. Khi đó giá trị của thanh ghi từ điều khiển là là bao nhiêu?
                <br>
                <h5>Giải</h5>
                <br>
                Theo cấu trúc từ điều khiển trong PPI 8255
                <center>
                    <img src="./assets/img/CA/CA05/cau_truc_tu_dieu_khien.png" class="img-f-scale img-scale">
                </center>
                <ul>
                    <li>D0: chiều cửa C thấp (1: vào, 0: ra)</li>
                    <li>D1: Chiều cửa B (1: vào, 0: ra)</li>
                    <li>D2: chế độ cửa B (1: chế độ 1, 0: chế độ 0)</li>
                    <li>D3: chiều cửa C cao (1: vào, 0: ra)</li>
                    <li>D4: chiều cửa A (1: vào, 0: ra)</li>
                    <li>D6, D5: Chế độ cửa A (00: chế độ 0, 01: chế độ 1, 1x: chế độ 2)</li>
                    <li>D7: bit cờ</li>
                </ul>

                => 10011000 <br>
                Tham khảo: Bài 5, mục 5.2. Chip ghép nối ngoại vi khả trình PPI-8255A.
            `]
        ]
    },
    'CA46': {
        'title': 'Tài liệu tham khảo',
        'index': [
            ['1. Tổng quan chip bổ trợ PPI-8255A', 'CA461', `<a href="https://tailieu.vn/doc/chuong-i-tong-quan-ve-chip-bo-tro-ppi-8255a-357770.html" target="_blank">https://tailieu.vn/doc/chuong-i-tong-quan-ve-chip-bo-tro-ppi-8255a-357770.html`]
        ]
    }
}

