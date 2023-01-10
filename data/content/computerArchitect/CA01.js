var CA_chap1 = {
    'CA11': {
        'title': 'Kiến trúc vi xử lí trung tâm Intel 80x86',
        'index': [
            ['Sơ đồ và các chân tín hiệu của vi xử lí 8086/8088', 'CA111',
                `
        <center>
        <img src="./assets/img/CA/CA01/intel8086_16bit.png" class="img-f-scale img-scale" alt="So-do-khoi">
    </center>
    <center>
        <img src="./assets/img/CA/CA01/8086internalblockdiagram.png" alt="internal-block-diagram-8086" class="img-f-scale img-scale">
    </center>
    <br>
    <span style="font-weight: 600;">BIU đơn vị phối ghép Bus (BUS Interface Unit)</span>
    <br>
    Thực hiện các công việc điều khiển hệ thống BUS
    <br>
    <span style="font-weight: 600;">EU đơn vị thực thi lệnh (Execution Unit)</span>
    Chịu trách nhiệm giải mã lệnh, thực thi lệnh và phát xung điều khiển các thành phần khác trong hệ
    thống <br>

    <center>
        <img src="./assets/img/CA/CA01/compare_BIU_EU.png" class="img-f-scale img-scale" alt="compare_BIU_EU">
    </center>

    <br>

    Phân chia BIU và EU làm tăng tốc độ tính toán của bộ vi xử lí

    Mối chu kì lệnh của vi xử lí gồm 2 thời pha (hoặc hai tác vụ): Lấy lệnh từ bộ nhớ và thực thi lệnh
    <br>
    Khi EU đang thực hiện lệnh trước thì BIU có thực hiện tìm lệnh tiếp t heo trong bộ nhớ, giải mã lệnh
    và đưa vào hàng đợi lệnh.
    => Thời gian lấy lệnh của bộ vi xử lý là bằng 0
    <br>
    <span style="font-weight: 600;">Các chân tín hiệu 8086</span>
    <ul>
        <li><b>8086</b>: có thể hoạt động ở 2 chế độ MIN, MAX</li>
        <li><b>AD15-AD0</b>: 16 dây của bus địa chỉ</li>
        <li><b>A19-A16/S0-S3</b>: 4 bit địa chỉ cao hoặc 4 bit trạng thái chỉ hoạt động CPU
            <center>
                <img src="./assets/img/CA/CA01/chithithanhghiduoctruyxuat.png" class="img-f-scale img-scale" alt="Chi-thi-thanh-ghi-duoc-xuat"></img>
            </center>
        </li>
        <li><b>S5</b>: Chỉ thị trạng thái cờ interrupt</li>
        <li><b>S6</b>: luôn bằng 0</li>
        <li><span style="border-top: 1px solid black">BHE</span>/S7: Khi kết hợp với A0 sẽ cho các chỉ
            thị sau:<br>
            <center>
                <img src="./assets/img/CA/CA01/BHE_S7.png" class="img-f-scale img-scale" alt="BHE/S7-A0"></img>
            </center>
        </li>
        <li><b>RD</b>: Nếu = 1 thì bộ vi xử lí đang đọc dữ liệu từ bộ nhớ, nếu - 0 thì bộ vi xử lí đạng
            ghi dữ liệu vào bộ nhớ</li>
        <li>READY: Nếu bộ nhớ (TBNV) cần hoàn tất việc chuyển số liệu (hoặc đi) chúng cần phát ra tín
            hiệu READY ở mức tích cực 1 khi đó bộ vi xử lý mới đọc hoặc phát số liệu</li>
        <li>
            <b>INTR</b>: vi xử lí kiểm tra chân này sau khi được thực hiện xong 1 lệnh để xem có đồi hỏi
            ngắt từ phần cứng không? Ngắt này có thể bị che bởi cờ ngắt
        </li>
        <li><span style="border-top: 1px solid black">TEST</span>: Được kiểm tra bởi lệnh WAIT</li>
        <li>NMI: Nếu có sườn xung lên tác động tới sẽ gây ra ngắt số 2. Ngắt này không bị che bởi cờ
            ngắt</li>
        <li>
            <span style="font-weight: 600;">RESET</span>: chân reset ở mức 1 trong ít nhất 4 chu kì xung
            nhịp bộ vi xử lý sẽ loại bỏ các nhiệm vụ đang thực thi và chuyển vào trạng thái khởi động
            lại

            <ul>
                <li>CLK: Lỗi vào cho xung nhịp đồng hồ</li>
                <li>VCC: nguồn nuôi</li>
                <li>GND: Nối đất</li>
                <li>MN/<span style="border-top: 1px solid black">MX</span>: Khi nối với VCC thì vi xử lí
                    hoạt động ở chế độ MIN, khi nối đất thì vi xử lí hoạt động ở chế độ MAX</li>
                <li>
                    <span style="border-top:2px solid black;">S</span><sub>2</sub>, <span style="border-top:2px solid black;">S</span><sub>1</sub>, <span style="border-top:2px solid black;">S</span><sub>0</sub>: Ở chế độ MAX, chip điều khiển bus 8288 sẽ sử dụng 3 tín hiệu này để điều khiển truy xuất vào/ra bộ nhớ
                    
                    <br>

                    <center>
                        <img src="./assets/img/CA/CA01/S2S1S0_ynghia.png" alt="S1-S2-S3" class="img-f-scale img-scale">
                    </center>
                </li>
                <li>
                    <i>QS1, QS0</i>: Chỉ trạng thái đợi lệnh PQ
                    <br>
                    <center><img src="./assets/img/CA/CA01/QS1_QS0.png" alt="QS1-QS0" class="img-f-scale img-scale"></center>
                    <br>
                    <span style="font-weight: 600;">Các thanh ghi và địa chỉ byte nhớ trong 8086</span> <br>
                    Thanh ghi là loại bộ nhớ nhanh nhất trong máy vi tính
                    Lưu trữ dữ liệu tạm thời cho tinh toán trong CPU.
                    8086: 20 dây địa chỉ => quản lí được 220 = 1MB bộ nhớ
                    8086: Các thanh ghi 16 bit => dùng 1 thanh ghi chỉ đánh được địa chỉ 2<sup>16</sup>=64 KB. Vì vậy phải dùng 2 thanh ghi để quản lí bộ nhớ. Thanh ghi đoạn + thanh ghi lệch;
                    <ul>
                        <li>Thanh ghi đoạn: segment</li>
                        <li>Thanh ghi lệch: offset</li>
                    </ul>
                    Địa chỉ vật lí = Địa chỉ đoạn x 16 + Địa chỉ lệch
                    Không gian địa chỉ ảo 64 KB x 64 KB = 4 GB
                    <br>
                    <span style="font-weight: 600;"> Các thanh ghi và định địa chỉ bộ nhớ trong 8086</span>
                    <br>
                    <center>
                        <img alt="thanh_ghi-bo_nho" src="./assets/img/CA/CA01/thanhghi_diachibonho.png" class="img-f-scale img-scale"></img>
                    </center>
                    <br>
                    <p>Các thanh ghi</p>
                    <ul>
                        <li>AX(AH,AL): Thanh ghi tích lũy</li>
                        <li>BX(BH,BL): Thanh ghi cơ sở</li>
                        <li>CX(CH,CL): Thanh ghi đếm</li>
                        <li>DX(DH,DL): Thanh ghi số liệu</li>
                        <li>SI: Thanh ghi chỉ số nguồn</li>
                        <li>DI: Thanh ghi chỉ số đích</li>
                        <li>BP: Thanh ghi con trỏ cơ sở</li>
                        <li>SP: Thanh ghi con trỏ ngăn xếp</li>
                        <li>IP: Thanh ghi con trỏ lệnh</li>
                        <li>CF: Thanh ghi cơ</li>
                        <li>DS: Thanh ghi đoạn dữ liệu</li>
                        <li>CS: Thanh ghi đoạn mã lệnh</li>
                        <li>ES: Thanh ghi đoạn phụ</li>
                        <li>SS: Thanh ghi ngăn xếp</li>
                        <center>
                            <img src="./assets/img/CA/CA01/ThanhGhi.png" class="img-f-scale img-scale" alt="thanh-ghi-ngan-xep">
                        </center>
                        <li>
                            Thanh ghi cờ: Lưu trữ trạng thái thực hiện lệnh và điều khiển CPU
                            <br>
                            <center><img src="./assets/img/CA/CA01/CoDieuKhien.jpeg" alt="co-dieu-khien" class="img-f-scale img-scale"></img></center>
                        </li>
                    </ul>
                </li>
            </ul>

        </li>
    </ul>
            
        `],
            ['Truy nhập bộ nhớ và thiết bị ngoại vi', 'CA121', `
            <ul>
            <li>Thời gian 1 chu kì đồng hồ của hệ thống gọi là 1 trạng thái</li>
            <li>
                Một trạng thái được tính từ sườn âm của xung đồng hồ đến sườn âm của xung tiếp theo
            </li>
            <li>Chu kì máy hay chu kì bus: Bộ vi xử lí làm chủ bus để truyền dữ liệu</li>
            <li>Mỗi chu kỳ bus gồm 2 giai đoạn: Gửi địa chỉ lên bus và chuyển dữ liệu đến hay đi</li>
            <li>Có 4 loại chu kì máy cơ bản: Lọc bộ nhớ, ghi bộ nhớ, đọc I/O, ghi I/O</li>
            <li>Chu kỳ lệnh: Là thời gian mà vi xử lý cần để nhận và thi hành 1 lệnh</li>
            <li>Trạng thái chờ: CPU đợi sự sẵn sàng của các thành phần khác
                <center>
                    <figure>
                        <img src="./assets/img/CA/CA01/chu_ki_lenh_8086.png" alt="Chu-ki-lenh-8086" class="img-f-scale img-scale">
                    </figure>
                </center>

            </li>
            <li>Truy cập bộ nhớ chế độ MAX, 8288 phát tín hiệu điều khiển BUS

                <center>
                    <figure>
                        <img src="./assets/img/CA/CA01/phoighep8086_8288.png" alt="phoi-ghep-8086-vs-8288" class="img-f-scale img-scale">
                    </figure>
                </center>
            </li>
            <li>
                Chu kì đọc bộ nhớ
                <ul>
                    <li>
                        <i>T<sub>1</sub>:</i> <br>
                        <ul>
                            <li>Vi xử lí đưa tín hiệu đến các chân 
                                <span style="border-top: 1px solid black;">S<sub>2</sub></span>, 
                                <span style="border-top: 1px solid black;">S<sub>1</sub></span>, <span style="border-top: 1px solid black;">S<sub>0</sub></span>
                            </li>
                            <li>
                                Địa chỉ trên A19 - A0 được đưa vào bộ đệm địa chỉ 
                            </li>
                            <li>
                                Tín hiệu <span style="border-top: 1px solid black;">BHE</span> chỉ thị byte hoặc từ được đọc.
                            </li>
                            <li>READY chuyển về mức thấp</li>
                        </ul>
                    </li>
                    <li>
                        <i>T<sub>2</sub></i>: Chuyển hướng truyền số liệu trên BUS <br>
                        <ul>
                            <li>
                                <span style="border-top: 1px solid black;">BHE</span> và <i>A19 - A0</i>: Bus trạng thái;
                            </li>
                            <li>A15-A0: Bus dữ liệu</li>
                        </ul>
                    </li>
                    <li>
                        <i>T<sub>3</sub></i>: Quá trình truyền dữ liệu
                        <ul>
                            <li>Truyền xong tín hiệu READY về mức cao</li>
                            <li>READY đồng bộ với bộ vi xử lý qua máy phát nhịp 8284</li>
                        </ul>
                    </li>
                    <li>
                        <i>T<sub>4</sub></i>: Kết thúc đọc dữ liệu
                        <center>
                            <figure>
                                <img src="./assets/img/CA/CA01/quatrinhtruynhapthietbingoaivi_valid.png" alt="Minh-hoa-doc-du-lieu-valid-data" class="img-f-scale img-scale">
                            </figure>
                        </center>
                        <center>
                            <figure>
                                <img src="./assets/img/CA/CA01/chu_ki_bo_nho.png" alt="chu_ki_bo_nho" class="img-f-scale img-scale">
                            </figure>
                        </center>
                        <center>
                            <figure>
                                <img src="./assets/img/CA/CA01/quatrinhtruynhapthietbingoaivi_write.png" alt="Chu-ki-ghi-bo-nho-write-data" class="img-f-scale img-scale">
                            </figure>
                        </center>
                        <center>
                            <figure>
                                <img src="./assets/img/CA/CA01/truy_cap_cong_vao_ra.png" alt="Truy-cap-cong-vao-ra" class="img-f-scale img-scale">
                            </figure>
                        </center>
                    </li>
                    <li>
                        Khởi động lại và ngắt
                        <br>
                        Khi chân <b>RESET</b> đặt ở mức cao trong ít nhất 4 chu kỳ, bộ vi xử lí sẽ khởi động lại và thiết lặp lại giá trị của các thanh ghi.
                    </li>
                    <li>
                        Cặp CS:IP trỏ tới F000H.FFF0H
                        <br>
                        <ul>
                            <li>Ngắt: Ngắt là khả năng dừng chương trình để thực hiện một chương trình khác và sau khi kết thúc sẽ quay về thực hiện tiếp chương trình chính</li>
                            <li>Ngắt cứng: Sinh ra bởi phần cứng <br>
                                <ul>
                                    <li><b>Ngắt có thể bị che</b>: Do tín hiệu gửi tới chân INTR</li>
                                    <li><b>Ngắt không che được</b>: Do tín hiệu gửi tới chân NMI</li>
                                </ul>
                            </li>
                            <li>
                                Ngắt mềm: Ngắt sinh ra bởi lệnh gọi ngắt INT < số hiệu ngắt >
                            </li>
                            <li>Ngoại lệ: Sinh ra trong quá trình thực hiện các lệnh (Ví dụ như xuất hiện phép chia cho 0)</li>
                        </ul>
                        <center>
                            <img src="./assets/img/CA/CA01/flag-ip-cs.png" alt="MInh-hoa-flag-ip-cs" class="img-f-scale img-scale">
                        </center>
                    </li>
                </ul>
            </li>
        </ul>
            `],
            ['Tập lệnh 8086', 'CA123', `
                <p style="font-weight: 600;">Lệnh máy</p>
                <p>Mỗi họ vi xử lí có tập lệnh riêng</p>
                <p>Mã hóa theo dạng nhị phân</p>
                <p>Cấu trúc lệnh</p>
                <center>
                    <img src="./assets/img/CA/CA01/cau_truc_lenh_taplenh8086.png" alt="anh-minh-hoa-tap-lenh-8086" class="img-f-scale img-scale">
                </center> 
                <br>
                <p>Tập lệnh bộ xử lí thường chia thành các nhóm:</p>
                - Lệnh di chuyển dữ liệu;<br>
                - Lệnh tính toán 2 ngôi;<br>
                - Lệnh tính toán 1 ngôi;<br>
                - Lệnh so sánh và nhảy;<br>
                - Lệnh gọi thủ tục;<br>
                - Lệnh lặp;<br>
                - Lệnh vào/ra<br>
                Một số lệnh hợp ngữ thông dụng: IN, OUT, MUL, SUB, MOV, LOOP,....
            `]
        ]
    },
    'CA12': {
        'title': 'Bộ vi xử lí Intel 80386',
        'index': [
            ['Đặc điểm chung và các thanh ghi', 'CA121',
                `
        <ul>
        <li>80386 là bộ xử lí 32 bit</li>
        <li>Bus dữ liệu và bus địa chỉ 32 bit</li>
        <li>Không gian bộ nhớ vật lí 4GB</li>
        <li>Xung nhịp đồng hồ 33 MHz</li>
        <li>ALU 32 bit</li>
        <li>80836: Hoạt động ở 2 chế độ bảo vệ và thực</li>
        <li>D0 - D31: Các chân dữ liệu, tùy theo mức độ tín hiệu trên <span style="border-top: 1px solid black;">NA</span> dữ liệu qua bus sẽ là 32 bit hay 16 bit</li>
        <center>
            <img src="./assets/img/CA/CA01/so_do_80386.png" alt="So-do-80386" class="img-f-scale img-scale">
            <p>Sơ đồ 80386</p>
        </center>
        <li>
            <b>A0-A31</b>: Các chân địa chỉ, tùy theo mức tín hiệu trên <span style="border-top:1px solid black;">BE<sub>0</sub></span> - <span style="border-top: 1px solid black;">BE<sub>3</sub></span> sẽ cho biết byte dữ liệu nào được truyền;
            <ul>
                <li><span style="border-top: 1px solid black;">BE<sub>0</sub></span>: Chỉ D0 - D7;</li>
                <li>
                    <span style="border-top: 1px solid black;">BE<sub>1</sub>: Chỉ D8-D15</span>
                </li>
                <li>
                    <span style="border-top: 1px solid black;">B<sub>2</sub></span>: Chỉ D16 - D23;
                </li>
                <li>
                    <span style="border-top: 1px solid black">BE<sub>3</sub></span>: Chỉ D24-D31; -
                </li>
                <li>
                    Để truyền cả 32 bit thì 4 đường tín hiệu phải ở mức tích cực thấp
                </li>
                <li>
                    CLK2: Lối vào xung nhịp cấp cho vi xử lí
                </li>
                <li>
                    Tín hiệu ngắt: INTR, NMI;
                </li>
                <li>
                    RESET: Khởi động lại hệ thống
                </li>
            </ul>
        </li>
        <li>
            Các tín hiệu xác định chu kỳ Bus
            <ul>
                <li>
                    <i>W/<span style="border-top: 1px solid black;">R</span></i>: Tín hiệu phân biệt chu kỳ đọc, ghi dữ liệu
                </li>
                <li>
                    <i>D/<span style="border-top: 1px solid black;">C</span></i>: Tín hiệu phân biệt chu kỳ số liệu và chu kì điều khiển
                </li>
                <li>
                    <i>M/
                    <span style="border-top: 1px solid black;">IO</span></i>: Tín hiệu phân biệt bộ nhớ và cổng vào/ra
                    <center>
                        <img src="./assets/img/CA/CA01/chu_ky_bus_80386.png" class="img-f-scale img-scale" alt="cac-ky-hieu-xac-dinh-chu-ky-bus">
                    </center>
                    <center>
                        <img src="./assets/img/CA/CA01/thanh_ghi_80386.png" class="img-f-scale img-scale" alt="cac-thanh-ghi-trong-80386">
                    </center>
                    <center>
                        <img src="./assets/img/CA/CA01/thanh_ghi_co_80386.png" class="img-f-scale img-scale" alt="thanh-ghi-co-80386">
                    </center>
                    <center>
                        <img src="./assets/img/CA/CA01/16_bit_flags_register.png" alt="16-bit-flat-register" class="img-f-scale img-scale">
                    </center>
                </li>
            </ul>
        </li>
    </ul>
        `],
            ['Tổ chức bộ nhớ', 'CA122', `
            <ul>
            <li>Bộ nhớ được tổ chức theo byte hoặc từ (word)</li>
            <li>80836 có thể hoạt động ở 2 chế độ: Phân đoạn và phân trang.</li>
            <li>80836 hoạt động ở chế độ ảo: Vi xử lí 80836 hoạt động như xử lí 8086</li>
        </ul>
        <br>
        <h4>Không gian nhớ</h4>
            <ul>
                <li>Không gian vật lý: 4 Gb</li>
                <li>Không gian logic: 64TB</li>
            </ul>
        <br>
        <h4>Chế độ thực</h4>
        <ul>
            <li>Chế độ làm việc ngầm định khi khởi động máy;</li>
            <li>Kích thước cực đại của bộ nhớ: 1 MB;</li>
            <li>Cách dãy địa chỉ: A2-A19 và BE0-BE3 tích cực;</li>
            <li>Kích thước các đoạn là: 64 KB;</li>
        </ul>
        <h4>Chế độ bảo vệ</h4>
        <p>Làm việc ở chế độ phân độ và phân trang</p>
            `],
            ['Chế độ phân đoạn bộ nhớ', 'CA123', `
                <h4>Một số khái niệm cơ bản</h4>
                <ul>
                    <li>Đoạn nhớ: Là một vùng bộ nhớ gồm các địa chỉ liên tiếp</li>
                    <li>Mức đặc quyền: Mỗi đoạn nhớ được gán cho 1 đặc quyền truy cập từ mức 0 - mức 3</li>
                    <li>Mức 0: Mức cao nhất, dành cho các chương trình lõi lí tài nguyền hệ thống và bộ nhớ (BIOS)</li>
                    <li>Mức 1: Các phần mềm hệ thống quản lí thiết bị ngoại vi và các cổng vào/ra</li>
                    <li>Mức 2: Chương trình quản lí hệ thống tệp, thư viện (hệ điều hành)</li>
                    <li>Mức 3: Danh cho chương trình ứng dụng</li>
                </ul>
                <h4>Bảng các bộ mô tả đoạn</h4>
                Chứa thông tin các đoạn <br>
                <ul>
                    <li>
                        Bảng GDT - Bảng mô tả toàn cục: <br> Dài 64 KB 
                        <ul>
                            <li>Quản lí 213 đoạn trong không gian nhớ toàn cục</li>
                            <li>Lưu trữ các lệnh HĐH, dữ liệu HĐH</li>
                            <li>Tất cả các nhiệm vụ của hệ thống đều thâm nhập được GDT</li>
                        </ul>
                    </li>
                    <li>
                        Bảng LDT - Bảng mô tả cục bộ: <br> Dành cho mã lệnh, dữ liệu, ngăn xếp của các trình ứng dụng
                        <ul>
                            <li>Mỗi nhiệm vụ có 1 bảng LDT riêng</li>
                            <li>Mỗi LDT được xác định bằng một bộ mô tả đoạn LDT trong GDT</li>
                        </ul>
                    </li>
                    <li>
                        Bảng IDT - Bảng mô tả ngắt: <br> Được dùng để mô tả địa chỉ 256 ngắt của bộ vi xử lí
                        <center>
                            <img src="/assets/img/CA/quan_he_GDTR_LDTR_GDT_LDT.png" alt="Relation-between-GDTR_LDTR-GDT_LDT" class="img-f-scale img-scale">
                        </center>
                    </li>
                </ul>
            `],
            ['Chế độ phân trang bộ nhớ', 'CA124', `
            <h5>Thư mục trang, bảng trang và trang</h5>
            Không gian địa chỉ thực được chia thành các khối có kích thước bằng nhau, gọi là các khung trang (frame).
            <br>
            Bộ nhớ logic cũng được chia thành các khối có cùng kích thước với grame gọi là các frame.
            <br>
            Để thực thi chương trình có n trang cần tìm ra n frame còn trống để nạp trang.
            <br>
            Thông tin bộ vi xử lí dùng để ánh xạ các trang vào các frame gọi là thư mục trang và bảng trang
            <ul>
                <li>Thư mục trang có 2<sup>10</sup>=1024 điểm vào (mỗi điểm vào 32 bit). Mỗi điểm vào trỏ tới một trong 1024 bảng trang.</li>
                <li>Bảng trang có 2<sup>10</sup>=1024 điểm vào (mỗi điểm vào 32 bit). Mỗi điểm vào trỏ tới một trong 1024 trang (khung trang).</li>
            </ul>
            Thư mục trang và trang có độ dài 2<sup>12</sup>=4 KB
            <br>
            Thanh ghi CR3 chứa địa chỉ cơ sở của thư mục trang
            <br>
            Một địa chỉ logic được đưa vào và ánh xạ tới bộ nhớ vật lí theo sơ đồ hình 2.7
            <br>
            <center>
                <img src="./assets/img/CA/CA01/anh_xa_dia_chi_logic_vao_vat_li.png" alt="Anh-xa-dia-chi-logic-vao-dia-chi-vat-ly" class="img-f-scale img-scale">
            </center>
            <br>
            Nội dung mỗi điểm vào thư mục trang và bảng trang có cấu trúc như sau
            <center>
                <img src="./assets/img/CA/CA01/che_do_phan_trang_bo_nho.png" class="img-f-scale img-scale" alt="cau-truc-thu-muc-trang-bang-trang">
            </center>
            <div class="d-flex">
                <div class="w-50">
                    <ul>
                        <li><b>P</b>: Trang có tồn tại trong bộ nhớ không</li>
                        <li><b>R/W</b>: Cho phép đọc/ghi trang</li>
                        <li><b>U/S</b>: Xác định mức ưu tiên người sử dụng hay quản trị trang</li>
                        <li><b>PWT</b>: Kiểm tra hoạt động write-through hay write-back</li>
                        <li><b>PCD</b>: Kiểm tra hoạt động cache từng trang</li>
                    </ul>
                </div>
                <div class="w-50">
                    <ul>
                        <li><b>A</b>: Đánh dấu xem bảng trang/trang có được truy cập hay không</li>
                        <li><b>D</b>: Đánh dấu 1 trang vừa được ghi tên;</li>
                        <li><b>PS</b>: Xác định kích thước trang</li>
                        <li><b>G</b>: Đánh dấu 1 trang là toàn cục</li>
                    </ul>
                </div>
            </div>
            `],
            ['Chế độ ảo', 'CA125', `
                <ul>
                    <li>80386 chuyển về chế độ 8086 ảo để thực hiện các chương trình</li>
                    <li>Trong chế độ 8086 vi xử lí sẽ sử dụng cách tính địa chỉ là segment: Offset</li>
                    <li>Không gian địa chỉ bộ nhớ là: 1 MB</li>
                    <li>Chạy các chương trình ở chế độ ảo, hệ điều hành sử dụng chương trình giám sát máy ảo.</li>
                </ul>
            `],
        ]
    },
    'CA13': {
        'title': 'Bộ vi xử lí 80486 và Pentinum',
        'index': [
            ['Kiến trúc RISC và kĩ thuật đường ống', 'CA131', `
            <h4>Kiến trúc CISC và RISC</h4>

            <ul>
                <li>
                    <b>Kiến trúc CISC</b>
                    <ul>
                        <li>Đơn vị điều khiển được vì chương trình hóa;</li>
                        <li>Có tập lệnh phức tạp (nhiều lệnh)</li>
                        <li>Phương pháp định vị bộ nhớ phức tạp và nhiều (7 chế độ)</li>
                    </ul>
                </li>
                <li>
                    <b>Kiến trúc RISC</b>
                    <ul>
                        <li>Đơn vị điều khiển: Thực hiện bằng phản ứng;</li>
                        <li>Tập lệnh rút gọn (ít lệnh);</li>
                        <li>Ít chế độ định vị địa chỉ bộ nhớ;</li>
                    </ul>
                </li>
            </ul>

            <h4>Kĩ thuật đường ống (pipeline)</h4>
            <ul>
                <li>
                    Mỗi lệnh được thực hiện qua 5 công đoạn
                    <br>
                    <center>
                        <img src="./assets/img/CA/CA01/nam_cong_doan_pipelines.png" alt="5-cong-doan-pipeline" class="img-f-scale img-scale">
                    </center>
                </li>
                <li>
                    Mỗi công đoạn thực hiện trong 1 số chu kì máy
                </li>
                <li>
                    Giai đoạn nhận lệnh chiếm nhiều thời gian nhất
                </li>
                <li>
                    Kĩ thuật đường ống là kĩ thuật cho các lệnh thực hiện gối lên nhau về mặt thời gian các công đoạn khác nhau trong khi thực hiện các lệnh
                    <br>
                    <center>
                        <img src="./assets/img/CA/CA01/command.png" alt="command" class="img-f-scale img-scale">
                    </center>
                </li>
                <li>
                    Thường các lệnh trong kiến trúc RISC có cách mã hóa lệnh rất đơn giản do vậy thời gian giải mã lệnh (ID) là không đáng kể
                </li>
            </ul>
            `],
            ['Vi xử lí 80486', 'CA132', `
            <ul>
                <li>Tích hợp bộ xử lí số dấu chấm động 80387</li>
                <li>Bộ nhớ cache 8KB và bộ điều khiển cache</li>
                <li>Bus dữ liệu và địa chỉ: 32 bit</li>
                <li>Tốc độ bus: 160 Mbytes/s</li>
                <li>Tích hợp 2 công nghệ CISC và RISC</li>
                <li>Sử dụng kĩ thuật đường ống khi thực thi lệnh</li>
            </ul>
            <center>
                <img src="./assets/img/CA/CA01/intel_80846.png" alt="intel-80486" class="img-f-scale img-scale">
            </center>
            `],
            ['Vi xử lí Pentium', 'CA133',
                `
                <ul>
                    <li>Ra đời năm 1993</li>
                    <li>Mật độ tích hợp và tốc độ xung nhịp cao hơn</li>
                    <li>Dung lương cache: 16 KB</li>
                    <li>Bus cục bộ: 64 bit, tốc độ 60/66 MHz</li>
                    <li>Sử dụng kiến trúc RISC</li>
                    <li>Sử dụng kiến trúc siêu vô hướng (supperscalar): Một dạng </li>
                    <li>Có 2 ALU, 1 FPU</li>
                </ul>
                <center>
                    <img src="./assets/img/CA/CA01/intel_pentinum.png" alt="intel-pentinum" class="img-f-scale img-scale">
                </center>
            `
            ],
        ]
    },
    'CA14': {
        'title': 'Tham khảo',
        'index': [
            ['Tham khảo thêm tại địa chỉ', 'CA141', `
            <p><a target="_blank" href="https://voer.edu.vn/m/to-chuc-he-thong-vi-xu-ly/6e186273#:~:text=S%E1%BB%B1%20kh%C3%A1c%20bi%E1%BB%87t%20gi%E1%BB%AFa%20%C2%B5P,c%E1%BB%A7a%208086%20l%C3%A0%206%20byte." class="text-decoration-none">https://voer.edu.vn/m/to-chuc-he-thong-vi-xu-ly</a></p>
        `]
        ]
    },
    'CA15': {
        'title': 'Bài tập rèn luyện',
        'index': [
            ['Bài tập rèn luyện', 'CA151', `
                <p>Bài tập trắc nghiệm: <a href="https://forms.gle/kGdvZ1AaLTtNxiZTA" target="_blank">Link</a></p>
            `]
        ]
    }
}

