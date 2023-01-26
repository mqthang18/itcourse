const TMDT06 = {
    TMDT061: {
        title: 'RỦI RO TRONG THƯƠNG MẠI ĐIỆN TỬ',
        index: [
            ['Khái niệm rủi ro thương mại điện tử', 'TMDT0611', ``],
            ['Những nguy cơ đe dọa an ninh thương mại điện tử', 'TMDT0612', ``]
        ]
    },
    TMDT062: {
        title: 'CÁC ĐẶC ĐIỂM CÓ THỂ PHÁT SINH RỦI RO',
        index: [
            ['Rủi ro về dữ liệu', 'TMDT0621', `
                <ul>
                    <li>Dữ liệu lưu trữ (website, thông tin thẻ tín dụng)
                        <ul>
                            <li>Người bán: thay đổi thông tin website, cơ sở dữ liệu, nhận được đơn hàng giả mạo,...</li>
                            <li>Người mua: thông tin cá nhân, nhận email giả tạo,...</li>
                            <li>Chính phủ.</li>
                        </ul>
                    </li>
                    <li>Dữ liệu trên đường truyền</li>
                </ul>
            `],
            ['Rủi ro về công nghệ', 'TMDT0622', `
                <p>Các hình thức tấn công chủ yếu:</p>
                <ul>
                <li>Khước từ dịch vụ (DoS, DDoS): Tấn công bằng
                    cách sử dụng những giao thông vô ích làm tràn
                    ngập dẫn đến tắc nghẽn mạng truyền thông
                    (DoS), hoặc sử dụng số lượng lớn các máy tính
                    tấn công vào một mạng từ nhiều điểm khác
                    nhau gây nên sự quá tải về khả năng cung cấp
                    dịch vụ (DDoS);</li>
                <li>Kẻ trộm trên mạng (sniffer).</li>
                </ul>
            `],
            ['Rủi ro về thủ tục quy trình giao dịch của công ty', 'TMDT0623', `
                <ul>
                    <li>Do không kiểm tra kỹ đối tác</li>
                    <li>Do thiếu kỹ năng ký kết hợp đồng/hợp đồng điện tử</li>
                    <li>Rủi ro không nhận hàng hoặc không thanh toán.</li>
                </ul>
            `],
            ['Rủi ro về luật pháp và các tiêu chuẩn công nghiệp', 'TMDT0624', `
                <ul>
                    <li>Về hiệu lực pháp lý của Giao dịch điện tử: trên quy mô quốc tế, các nước đối tác có thừa nhận giao dịch
                        điện tử?</li>
                    <li>Về tiêu chuẩn công nghiệp: chưa tiêu chuẩn hóa trong một số lĩnh vực của thương mại điện tử</li>
                </ul>
            `]
        ]
    },
    TMDT063: {
        title: 'MỘT SỐ GIẢI PHÁP ĐẢM BẢO AN NINH TRONG THƯƠNG MẠI ĐIỆN TỬ',
        index: [
            ['Nội dung', 'TMDT0631', `
            <P>An ninh thương mại điện tử là quá trình làm giảm thiểu các rủi ro có thể xảy đến trong thương mại điện tử liên
            quan đến các vấn đề về thủ tục, công nghệ, chính sách và pháp luật cũng như các tiêu chuẩn công nghệ nhất
            định. Hiện tượng các trang web hay hệ thống thương mại điện tử không đảm bảo an toàn thường phát sinh
            các lỗi, link bẩn, người tham gia có thể bị mất thông tin cá nhân hoặc những thông tin bảo mật của mình</P>
        <p>
            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#DOM631" role="button" aria-expanded="false" aria-controls="collapseExample">
                Một số khái niệm
            </a>
            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#DOM632" role="button" aria-expanded="false" aria-controls="collapseExample">
                Giải pháp kỹ thuật
            </a>
            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#DOM633" role="button" aria-expanded="false" aria-controls="collapseExample">
                Thống kê các công cụ nhằm bảo vệ an toàn trang web
            </a>
            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#DOM634" role="button" aria-expanded="false" aria-controls="collapseExample">
                Yêu cầu về an ninh giao dịch thương mại điện tử
            </a>
            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#DOM635" role="button" aria-expanded="false" aria-controls="collapseExample">
                Các phương pháp bảo mật trong giao dịch thương mại điện tử
            </a>
        </p>
        <div class="collapse" id="DOM631">
            <div class="card card-body">
                <h3>Một số khái niệm</h3>
                <ul>
                    <li>Quyền được phép (Authorization): Quá trình đảm bảo cho người có quyền này được truy cập vào một số tài nguyên của mạng.</li>
                    <li>Xác thực (Authentication): Quá trình xác thực một thực thể xem họ khai báo với cơ quan xác thực họ là ai.
                    <li>Sự riêng tư (Confidentiality/Privacy) là bảo vệ thông tin mua bán của người tiêu dùng.</li>
                    <li>Tính toàn vẹn (Integrity): Khả năng bảo vệ dữ liệu không bị thay đổi.</li>
                    <li>Không thoái thác (Nonrepudiation): Khả năng không thể từ chối các giao dịch đã thực hiện.</li>
                    <li>Thu thập thông tin (Auditing): Quá trình thu thập thông tin về các ý đồ muốn truy cập vào tài nguyên nào đó trong mạng bằng cách sử dụng quyền ưu tiên và các hành động khác</li>
                </ul>
            </div>
          </div>
        <div class="collapse" id="DOM632">
            <div class="card card-body">
            <h3>Giải pháp kỹ thuật</h3>
              <ul>
                <li>Bảo vệ tại môi trường giao dịch Internet: Cryptography.</li>
                <li>Bảo đảm an toàn các kênh truyền thông: SSL, TLS, VPNs, Wi-Fi</li>
                <li>Bảo vệ mạng: Firewalls, proxy servers, IDS, IPS.</li>
                <li>Bảo vệ máy chủ, máy khách: Bảo mật hệ điều hành, anti-virus</li>
              </ul>
            </div>
          </div>
        <div class="collapse" id="DOM633">
            <div class="card card-body">
                <h3>Thống kê các công cụ nhằm bảo vệ an toàn trang web</h3>
                <center>
                    <img src="./assets/img/TMDT/chuong62.jpg" alt="chuong62">
                </center>
            </div>
          </div>
        <div class="collapse" id="DOM634">
            <div class="card card-body">
              <h3>Yêu cầu về an ninh giao dịch thương mại điện tử</h3>
              <ul>
                <li>Bí mật (secrecy): Đảm bảo việc, ngoài những người có quyền, không ai đọc được các dữ liệu, lấy được các
                thông tin cá nhân hoặc các thông tin bí mật khác.</li>
                <li>Toàn vẹn (integrity): Đảm bảo thông tin không bị thay đổi.</li>
                <li>Sẵn sàng (availability): Đảm bảo thông điệp hoặc mẩu tin được truyền gửi.</li>
                <li>Chống phủ định (non-repudiation): Đảm bảo rằng các bên tham gia không thể phủ định các hành động họ
                đã thực hiện.</li>
                <li>Xác thực (authentication): Có thể nhận biết được các đối tác tham gia giao dịch.</li>
              </ul>
            </div>
          </div>
        <div class="collapse" id="DOM635">
            <div class="card card-body">
                <h3>Các phương pháp bảo mật trong giao dịch thương mại điện tử</h3>
                <p>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#DOM6351" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Mã hóa dữ liệu
                      </a>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#DOM6352" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Lớp ổ cắm an toàn SSL
                      </a>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#DOM6353" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Các giao dịch điện tử an toàn SET (Secure Electronic Transaction)
                      </a>
                </p>
                <div class="collapse" id="DOM6351">
                    <div class="card card-body">
                      <ul>
                        <li>Mã hóa dữ liệu là quá trình chuyển các văn bản hay các tài liệu gốc thành các văn bản dưới dạng mật mã để bất cứ ai, ngoài người gửi và người nhận, đều không thể đọc được.</li>
                        <li>Hai phương pháp mã hóa:
                            <ul>
                                <li>Mã hóa khóa bí mật (mã hóa khóa đối xứng): sử dụng 01 “chìa khóa”;</li>
                                <li>Mã hóa khóa công khai (mã hóa khóa không đối xứng): sử dụng 02 “chìa khóa” khác nhau, một để mã và
                                    một để giải.</li>
                            </ul>
                        </li>
                      </ul>
                      <h4>Mã hóa khóa bí mật</h4>
                      <p>Sử dụng 1 chìa khóa để vừa mã hóa vừa giải mã.</p>
                      <ul>
                        <li>Mã Caesar: thay thế các ký tự của thông điệp bởi ký tự đứng sau nó k vị trí. <br>
                            Ví dụ: k=1 thì a &lt;- b, b &lt;- c,..., z &lt;- a
                        </li>
                        <li>Phương pháp thế (substitution):
                            <ul>
                                <li>Thay thế ký tự theo bảng thay thế;</li>
                                <li>Mã Caecar là trường hợp đặc biệt.</li>
                            </ul>
                        </li>
                        <li>Các phần mềm mã hóa khác: DES, 3-DES</li>
                      </ul>
                      <center>
                        <img style="width: 100%;" src="./assets/img/TMDT/chuong518.jpg" alt="chuong518">
                      </center>
                      <center>
                        <img style="width: 100%;" src="./assets/img/TMDT/chuong63.jpg" alt="chuong63">
                      </center>
                      <ul>
                        <li>Đáp ứng yêu cầu về tính xác thực
                            <ul>
                                <li>Xác định bên đối tác vì đã trao đổi chìa khóa với họ.</li>
                                <li>Chỉ có bên đối tác có thể gửi thông điệp vì chỉ có họ biết chìa khóa</li>
                            </ul>
                        </li>
                        <li>Đáp ứng yêu cầu về tính toàn vẹn
                            <br>
                            Không ai có thể thay đổi nội dung thông điệp nếu không biết chìa khóa
                        </li>
                        <li>Đáp ứng yêu cầu về tính không thể chối bỏ
                            <br>
                            Bằng chứng đồng ý với nội dung thông điệp đã ký
                        </li>
                        <li>Đáp ứng tính riêng tư.
                            <br>
                            Không ai khác có thể đọc nội dung thông điệp nếu không biết chìa khóa
                        </li>
                      </ul>
                      <b>=> THÔNG ĐIỆP ĐÃ ĐƯỢC “KÝ”</b>

                      <h4>Mã hóa khóa công khai</h4>
                      <ul>
                        <li>Sử dụng 1 cặp với 2 chìa khóa khác nhau.</li>
                        <li>Một chìa cung cấp công khai, một chìa bí mật.</li>
                        <li>Mỗi chìa đều có thể sử dụng để “khóa” thông điệp. Khi thông điệp đã được “khóa”, chỉ có chìa khóa cặp
                        tương ứng mới có thể “mở” được.</li>
                        <li>Thuật toán RSA (Ronald Rivest, Adi Shamir, Leonard Adelman).</li>
                      </ul>

                      <h4>Khóa bằng các chìa khóa công khai</h4>
                      <center>
                        <img style="width: 100%;" src="./assets/img/TMDT/chuong519.jpg" alt="chuong519">
                      </center>

                      <h4>Chữ ký số</h4>
                      <div>
                        Điều 3, Nghị định 130:
                        “Chữ ký số" là một dạng chữ ký điện tử được tạo ra bằng sự biến đổi một thông điệp dữ liệu sử dụng hệ thống mật mã không đối xứng theo đó người có được thông điệp dữ liệu ban đầu và khoá công khai của người ký có thể xác định được chính xác:
                        <br>
                        a. Việc biến đổi nêu trên được tạo ra bằng đúng khoá bí mật tương ứng với khoá công khai trong cùng một
                        cặp khóa;
                        <br>
                        b. Sự toàn vẹn nội dung của thông điệp dữ liệu kể từ khi thực hiện việc biến đổi nêu trên.
                        <br>
                        • Trong thuật toán mã hóa khóa công khai và hạ tầng PKI, chữ ký số là việc sử dụng chìa khóa bí mật để mã
                        hóa “thông điệp tóm tắt” (được tạo ra sau khi sử dụng hàm rút gọn).
                        <br>
                        • Hàm rút gọn (hàm băm): sử dụng để tóm tắt thông điệp gốc thành bản thông điệp tóm tắt (messege digest) có kích thước cố định.
                      </div>

                      <h4>Quản lý khóa</h4>
                      <div>
                        <li>PKI: Public Key Infrastructure.</li>
                        <li>Gồm:
                            <ul>
                                <li>Chữ ký số;</li>
                                <li>Chứng thực số (Digital Certificate);</li>
                                <li>Cơ quan chứng thực chữ ký số (CA – Certification Authority);</li>
                                <li>Hạ tầng mạng</li>
                                <li>“Tổ chức cung cấp dịch vụ chứng thực chữ ký số” là tổ chức cung cấp dịch vụ chứng thực chữ ký điện tử thực hiện hoạt động cung cấp dịch vụ chứng thực chữ ký số.</li>
                                <li>“Chứng thư số” là một dạng chứng thư điện tử do tổ chức cung cấp dịch vụ chứng thực chữ ký số cấp. (Nghị định 26)</li>
                                <li>“Chứng thư điện tử” là thông điệp dữ liệu do tổ chức cung cấp dịch vụ chứng thực chữ ký điện tử phát hành nhằm xác nhận cơ quan, tổ chức, cá nhân được chứng thực là người ký chữ ký điện tử. (Luật Giao dịch điện tử)</li>
                            </ul>
                        
                        </li>
                      </div>
                    </div>
                  </div>
                <div class="collapse" id="DOM6352">
                    <div class="card card-body">
                      <h3>LỚP Ổ CẮM AN TOÀN SSL</h3>
                      <ul>
                        <li>SSL là một chương trình an toàn cho việc truyền thông trên web. Chương trình này bảo vệ các kênh thông
                            tin trong quá trình trao đổi dữ liệu giữa máy chủ và các trình duyệt web thay vì phải bảo vệ từng mẫu tin.
                            SSL là giao thức Web dùng để thiết lập bảo mật giữa máy chủ và khách</li>
                        <li>SSL hoạt động trên tầng TCP của giao thức OSI (Open Systems Interconnection), và trên giao thức khác
                            như Telnet và HTTP</li>
                        <li>SSL chứa giao thức “bắt tay” (handshake stage), bảo mật cho server (và máy khách nếu cần), xác định mã
                            hóa, thuật toán mã hóa, và chuyển đổi khóa mã</li>
                        <li>SSL là một chương trình an toàn cho việc truyền thông trên web. Chương trình này bảo vệ các kênh thông tin trong quá trình trao đổi dữ liệu giữa máy chủ và các trình duyệt web thay vì phải bảo vệ từng mẫu tin. SSL là giao thức Web dùng để thiết lập bảo mật giữa máy chủ và khách.</li>
                        <li>SSL hoạt động trên tầng TCP của giao thức OSI (Open Systems Interconnection), và trên giao thức khác như Telnet và HTTP.</li>
                        <li>SSL chứa giao thức “bắt tay” (handshake stage), bảo mật cho server (và máy khách nếu cần), xác định mã hóa, thuật toán mã hóa, và chuyển đổi khóa mã.</li>
                        <li>Sử dụng trong thanh toán sử dụng bằng thẻ tín dụng.</li>
                        <li>Là một giao thức bảo mật khá toàn diện, sử dụng mật mã để cung cấp tính bảo mật cho thông tin, đảm bảo tính toàn vẹn trong thanh toán, và cho phép xác thực các thực thể với nhau. Để xác thực, những người mua hàng và người bán háng được yêu cầu cần phải có các chứng chỉ số được cấp bởi các tổ chức được đảm bảo.</li>
                      </ul>
                    </div>
                  </div>
                <div class="collapse" id="DOM6353">
                    <div class="card card-body">
                        <ul>
                            <li>Sử dụng trong thanh toán sử dụng bằng thẻ tín dụng.</li>
                            <li>Là một giao thức bảo mật khá toàn diện, sử dụng mật mã để cung cấp tính bảo mật cho thông tin, đảm bảo tính toàn vẹn trong thanh toán, và cho phép xác thực các thực thể với nhau. Để xác thực, những người mua hàng và người bán háng được yêu cầu cần phải có các chứng chỉ số được cấp bởi các tổ chức được đảm bảo.</li>
                        </ul>
                        <p>
                            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#DOM63531" role="button" aria-expanded="false" aria-controls="collapseExample">
                                An toàn thương mại điện tử
                              </a>
                            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#DOM63532" role="button" aria-expanded="false" aria-controls="collapseExample">
                                An toàn đối với hệ thống mạng
                              </a>
                            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#DOM63533" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Giải pháp chống xâm nhập và tấn công từ chối dịch vụ DDOS
                              </a>
                            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#DOM63534" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Giải pháp tường lửa thế hệ mới
                              </a>
                            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#DOM63535" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Giải pháp bảo mật bằng tường lửa cho ứng dụng web (Web Application Firewall – WAF)
                              </a>
                            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#DOM63536" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Giải pháp bảo vệ máy trạm và người dùng cuối
                              </a>
                        </p>
                        <div class="collapse" id="DOM63531">
                            <div class="card card-body">
                                <h3>An toàn thương mại điện tử</h3>
                                <p>Tường lửa (firewall): là phần mềm và/hoặc phần cứng ngăn cách một mạng với bên ngoài.</p>
                                <ul>
                                    <li>Tất cả các luồng thông tin từ bên trong mạng máy tính của tổ chức đi ra ngoài và ngược lại đều phải đi qua thiết bị hay phần mềm này.</li>
                                    <li>Chỉ các luồng thông tin được phép và tuân thủ đúng quy định về an toàn mạng máy tính của tổ chức, mới được phép đi qua.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="collapse" id="DOM63532">
                            <div class="card card-body">
                              <h3>An toàn đối với hệ thống mạng</h3>
                              <ul>
                                <li>Phòng chống virus.</li>
                                <li>Sử dụng password mạnh.</li>
                                <li>An ninh nguồn nhân lực.</li>
                                <li>Trang thiết bị an ninh mạng: kiểm soát việc ra/vào trụ sở làm việc: thẻ từ, kiểm tra sinh trắc học...</li>
                              </ul>
                            </div>
                        </div>
                        <div class="collapse" id="DOM63533">
                            <div class="card card-body">
                              <h3>Giải pháp chống xâm nhập và tấn công từ chối dịch vụ DDOS</h3>
                              <ul>
                                <li>Lợi ích: Phòng chống và phát hiện xâm nhập (IPS) và ngăn chặn các cuộc tấn công DDOS toàn diện cho hệ thống.</li>
                                <li>Tính năng:
                                    <ul>
                                        <li>Phát hiện ngăn chặn các tình huống tấn công DDOS xảy ra cho hệ thống ở cả mức network và ứng dụng;</li>
                                        <li>Hệ thống ngăn chặn xâm nhập dựa trên công nghệ phát hiện signatures, cơ sở dữ liệu của signatures được update định kỳ hoặc ngay tức thì khi có cuộc tấn công mới được phát hiện;</li>
                                        <li>Công nghệ thống kê phân tích và tự động tạo signatures theo thời gian thực, qua quá trình phân tích các luồng dữ liệu Defense Pro phát hiện ra các hành vi bất thường đồng thời sinh ra 1 signatures ngăn chặn ngay tức thì những đối tượng gây ra sự bất thường này.</li>
                                    </ul>
                                </li>
                              </ul>
                            </div>
                        </div>
                        <div class="collapse" id="DOM63534">
                            <div class="card card-body">
                              <h3>Giải pháp tường lửa thế hệ mới</h3>
                              <ul>
                                <li>Lợi ích: Thiết bị tường lửa thế hệ mới với kiến trúc tiên tiến và mạnh mẽ, kết hợp cùng phần cứng chuyên
                                    biệt tốc độ cao, đã cung cấp các tính năng bảo mật vượt trội, giúp khắc phục những nhược điểm của mô
                                    hình bảo mật truyền thống và đáp ứng tốt hơn yêu cầu về bảo mật trong thời điểm hiện tại, trở thành một
                                    trong những giải pháp bảo mật hiệu quả nhất hiện nay.</li>
                                <li>Tính năng:
                                    <ul>
                                        <li>Thiết lập các chính sách bảo vệ máy chủ;</li>
                                        <li>Chỉ cho phép những dịch vụ hợp lệ được phép ngăn chặn;</li>
                                        <li>Ngăn chặn các cuộc tấn công DoS vào hệ thống;</li>
                                        <li>Tính năng IPS chống các cuộc tấn công vào lỗ hổng của hệ điều hành.</li>
                                    </ul>
                                </li>
                              </ul>
                            </div>
                        </div>
                        <div class="collapse" id="DOM63535">
                            <div class="card card-body">
                              <h3>Giải pháp bảo mật bằng tường lửa cho ứng dụng web (Web Application Firewall – WAF)</h3>
                              <ul>
                                <li>Lợi ích: Cung cấp một lớp bảo mật toàn diện cho hệ thống web, phát hiện, ngăn chặn và cảnh báo các mối
                                    hiểm họa tấn công vào ứng dụng web. Bảo vệ các ứng dụng web khi có các lỗ hổng trên ứng dụng mà
                                    chưa được vá.</li>
                                <li>Tính năng:
                                    <ul>
                                        Chống khai thác lỗ hổng;
                                        <li>Quản lý lưu lượng web;</li>
                                        <li>XML Firewall;</li>
                                        <li>Chống thất thoát dữ liệu (DLP);</li>
                                        <li>Bảo vệ, phân tích và giám sát các luồng dữ liệu;</li>
                                        <li>Kiểm soát HTTP/HTTPS vào ra hệ thống;</li>
                                        <li>Nhận dạng người dùng và quản lý truy cập;</li>
                                        <li>Phân phối và tăng tốc ứng dụng.</li>
                                    </ul>
                                </li>
                              </ul>
                            </div>
                        </div>
                        <div class="collapse" id="DOM63536">
                            <div class="card card-body">
                              <h3>Giải pháp bảo vệ máy trạm và người dùng cuối</h3>
                              <ul>
                                <li>Lợi ích: Trang bị thêm lớp bảo vệ cho máy chủ.</li>
                                <li>Tính năng:
                                    <ul>
                                        <li>Giám sát, phân tích, ngăn chặn các hành vi gây ra bởi mã độc, virus;</li>
                                        <li>Tích hợp tính năng Machine-Learning, Behavior Monitoring cho phép phân tích những mã độc chưa
                                            được biết đến;</li>
                                        <li>Tính năng URL filtering, Web Reputation lọc các web độc hại;</li>
                                        <li>Giám sát các ứng dụng ở máy chủ.</li>
                                    </ul>
                                </li>
                              </ul>
                            </div>
                        </div>
                    </div>
                  </div>
            </div>
        </div>
            `]
        ]
    },
    TMDT064: {
        title: 'CHÍNH SÁCH VÀ PHÁP LUẬT CỦA VIỆT NAM VỀ THƯƠNG MẠI ĐIỆN TỬ',
        index: [
        ]
    },
}