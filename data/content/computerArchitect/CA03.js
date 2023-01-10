var CA_chap3 = {
    'CA31': {
        'title': 'Băng thông và các loại BUS trong máy vị tính',
        'index': [
            ['Bus của bộ vi xử lý (Back Side Bus - BSB)', 'CA311', `
            Là các đường truyền giữa bộ vi xử lí và các mạch đệm trung gian;<br>
Tốc độ nhanh nhất trong các loại bus<br>
Chia làm 3 thành phần: bus dữ liệu, bus địa chỉ, bus điều khiển<br>

            `],
            ['Bus hệ thống (Front Side Bus - FSB)', 'CA312', `
            Là đường truyền giữa bộ vi xử lí và bộ nhớ RAM<br>
            Tốc độ chậm hơn BSB<br>
            Độ rộng luôn bằng độ rộng bus dữ liệu của bộ vi xử lí <br>
        Ví dụ:<br>
            Bộ vi xử lí Pentium II có FSB: 66/100 MHz, bằng thông: 533/800 MB/s<br>
            Pentium IIi có FSB: 100/130 MHz, băng thông: 800/1066 MB/s<br>
            Pentium IV có FSB: 100/133/200/266 MHz, băng thông: 3200/4200/6400/8533 MB/s
        
            `],
            ['Bus vào/ra (bus mở rộng)', 'CA313', `
                <b>Phối ghép với các thiêt bị ngoại vi
                </b>
                <center>
                    <img src="./assets/img/CA/CA04/Bus-mo-rong.png" alt="bus-mo-rong"></img>
                </center>
            `]
        ]
    },
    'CA32': {
        'title': 'Các loại máy vi tính và các cấu trúc BUS tương ứng',
        'index': [
            ['Máy PC/XT và BUS PC', 'CA321', `
                <ul>
                    <li>Bus PC ra đời phục vụ kiến trúc intel 8086</li>
                    <li>Tần số xung nhịp trên bus: 8.33 MHz</li>
                    <li>Độ rộng bus: 8 bit
                    </li>
                    <li>Băng thông tối đa: 8.33 MB/s
                    </li>
                    <li>Bus địa chỉ: 20 dây</li>
                </ul>
                <center>
                    <img src="./assets/img/CA/CA04/bus_pc.png" alt="pc/xt-bus-pc" class="img-f-scale img-scale"></img>
                </center>
            `],
            ['Máy PC/AT và BUS ISA', 'CA322', `
                <ul>
                    <li>ISA: Industry Standard Architecchture</li>
                    <li>Bus ISA ra đời phục vụ kiến trúc Intel 80826</li>
                    <li>Tốc độ bus: 6 MHz</li>
                    <li>Tốc độ bus mở rộng = tốc độ bus trên bộ vi xử lí</li>
                    <li>Được điều khiển bởi các chip điều khiển Bus</li>
                    <li>Bus dữ liệu có độ rộng: 2 byte = 16 bit</li>
                    <li>Bus địa chỉ: 24 dây</li>                                
                </ul>

                <center>
                    <img src="./assets/img/CA/CA04/bus_isa.png" alt="pc/at-bus-isa" class="img-f-scale img-scale"></img>
                </center>
            `],
            ['BUS MCA', 'CA333', `
                <ul>
                    <li>MCA: Micro Interface Architecture</li>
                    <li>Được phát triển bởi hãng IBM</li>
                    <li>Bộ điều khiển bus hoạt động độc lập với bộ vi xử lí</li>
                    <li>Hỗ trợ tự động cấu hình thiết bị (Plug And Play)</li>
                    <li>Độ rộng dữ liệu: 16/32 bit</li>
                    <li>Bus không đồng bộ</li>
                    <li>Băng thông: 160 MB/s</li>                                
                </ul>
            `],
            ['BUS EISA', 'CA334', `
                <ul>
                    <li>Phiên bản cải tiến của bus ISA</li>
                    <li>Hỗ trợ thiết bị ngoại vi 32 bit</li>
                    <li>Tốc độ cao hơn bus ISA</li>
                    <li>Tương thích với chuẩn ISA</li>
                </ul>
                <center>
                    <img src="./assets/img/CA/CA04/bus_eisa_1.png" alt="bus-eisa" class="img-f-scale img-scale"></img>
                </center>
                <ul>
                    <li>Tần số xung nhịp: 8.33 MHz</li>
                    <li>Độ rộng bus: 32</li>
                    <li>Băng thông: 33.32 MB/s</li>
                    <li>Quản lí không gian bộ nhớ: 4 GB</li>
                    <li>Kích thước tiêu chuẩn EISA: cao 127 mm (5 inch), dài 333.5 mm (13.13 inch), rộng 12.7 mm (0.5 inch)</li>
                </ul>
                <center>
                    <img src="./assets/img/CA/CA04/bus_eisa_2.png" alt="agp-pci-isa-eisa" class="img-f-scale img-scale"></img>
                </center>
            `],
            ['BUS cục bộ', 'CA335', `
                <ul>
                    <li>Khắc phục hiện tượng nghiên cứu cổ chai của các bus: PC, ISA, EISA</li>
                    <li>Đáp ứng các bộ vi xử lí tốc độ cao</li>
                    <li>Hỗ trợ các thiêt bị 32, 64 bit</li>
                    <li>Tần số xung nhịp: 50 MHz
                    </li>
                    <li>Băng thông: 107 MB/s</li>
                </ul>
                <center>
                    <img src="./assets/img/CA/CA04/bus_cuc_bo.png" alt="diagram-BUS-cuc-bo" class="img-f-scale img-scale"></img>
                </center>
                <br>
            `],
            ['BUS PCI', 'CA336', `
                <ul>
                    <li>Chuẩn kết nối thành phần ngoại vi (Peripheral Component Interconnect)</li>
                    <li>Ra đời năm 1993</li>
                    <li>Khe cắm PCI không tương thích chuẩn ISA và EISA</li>
                    <li>Tần số xung nhịp: 33 MHz hoặc 66 MHz</li>
                    <li>Độ rộng bus: 32/64 bit</li>
                    <li>Băng thông: 132 MB/s, hoặc 264 MB/s</li>
                </ul>
                <center>
                    <img src="./assets/img/CA/CA04/bus_pci_1.png" alt="main-memory-system" class="img-f-scale img-scale"></img>
                </center>
                <center>
                    <img src="./assets/img/CA/CA04/bus_pci_2.png" alt="pentinum-4-processor" class="img-f-scale img-scale"></img>
                </center>
                <ul>
                    <li>Nâng cấp PCI thành PCI-X cho phép nâng tốc độ trao đổi dữ liệu gấp đôi so với PCI</li>
                    <li>Ra đời năm 1999</li>
                    <li>Tần số xung nhịp 133 MHz</li>
                    <li>Băng thông: 1 GB/s</li>
                </ul>
            `],
            ['BUS nối tiếp đa năng', 'CA337', `
                <center>
                    <img src="./assets/img/CA/CA04/usb_cable.png" alt="bus-noi-tiep-da-nang" class="img-f-scale img-scale"></img>
                </center>
                <ul>
                    <li>Bus USB (Universal Serial Bus)
                    Cho phép kết nối nhiều loại thiết bị: Bàn phím, con chuột, màn hình, ổ đĩa</li>
                    <li>Cho phép kết nối 127 thiết bị theo kiểu móc xích</li>
                    <li>Chuẩn USB 1.0 và 1.1 có băng thông: 12 Mbps</li>
                    <li>Chuẩn USB 2.0 băng thông: 480 Mbps</li>
                    <li>Chuẩn USB tự nhận diện thiết bị</li>
                    <li>Gắn thêm thiết bị không cần khởi động lại máy</li>
                </ul>
                <center>
                    <img src="./assets/img/CA/CA04/propagation_delay.png" alt="transaction-protocol" class="img-f-scale img-scale"></img>
                </center>
                <b>USB tuân theo chuẩn truyền thông nối tiếp đồng bồ (Synchronous serial)</b>
                <ul>
                    <li>
                        <b>Thông tin trên USB gồm 3 gói:</b>
                        <ul>
                            <li>Gói thẻ (token packet)</li>
                            <li>Gói dữ liệu (data packet)</li>
                            <li>Gói thông tin móc nối (handshack packet)</li>
                        </ul>
                    </li>
                    <li>
                        <b>Bắt đầu truyền tin, máy chủ sẽ gửi đi 1 gói thẻ (token packet). Mỗi gói thẻ có cấu trúc sau:</b>
                        <ul>
                            <li>8 bit nhận dạng PID</li>
                            <li>7 bit địa chỉ</li>
                            <li>4 bit số hiệu điểm cuối và hương truyền</li>
                            <li>5 bit kiểm tra lỗi CRC</li>
                        </ul>
                        <center>
                            <img src="./assets/img/CA/CA04/token_packet.png" alt="lsb-msb" class="img-f-scale img-scale"></img>
                        </center>
                    </li>
                    <li>
                        <b>Thiết bị ngoại vi trả lời bằng gói có định dạng như sau:</b>
                        <ul>
                           <li>8 bit nhận dạng PID</li> 
                           <li>Các byte dữ liệu (1024 byte)</li>
                           <li>16 bit kiểm tra lỗi CRC</li>
                        </ul>
                        <center>
                            <img src="./assets/img/CA/CA04/packet_tra_loi.png" alt="lsb-msb" class="img-f-scale img-scale"></img>
                        </center>
                    </li>
                    <li>
                        <b>Khi nhận được dữ liệu phía chủ sẽ trả lời bằng tin hiệu móc nối</b>
                       <ul>
                            <li>ACK: chấp nhận</li>
                            <li>NACK: Không chấp nhận</li>
                            <li>STALL: Tắc nghẽn</li>
                       </ul>
                       <center>
                            <img src="./assets/img/CA/CA04/host_device.png" alt="host-device" class="img-f-scale img-scale"></img>
                       </center>
                    </li>
                </ul>
                
            `],
            ['BUS IEEE 1394', 'CA338', `
                <center>
                    <img src="./assets/img/CA/CA04/IEEE1394.png" alt="IEEE-1394-cable-and-connector" class="img-f-scale img-scale"></img>
                </center>
                <ul>
                    <li>Bus hỗ trợ truyền thông đa phương tiện</li>
                    <li>Ra đời năm 1995</li>
                    <li>Băng thông: 100 Mbps, 200 Mbps, 400 Mbps</li>
                    <li>Tối đa 63 thiết bị được kết nối theo kiểu móc xích</li>
                    <li>Hỗ trợ 2 phương thức truyền, không đồng bộ và đồng bộ</li>
                </ul>
            `]
        ]
    }
}

