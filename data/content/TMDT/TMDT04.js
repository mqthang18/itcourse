const TMDT04 = {
    TMDT041: {
        title: 'Các công cụ thanh toán trực tuyến',
        index: [
            ['Khái niệm thanh toán điện tử', 'TMDT0411', `
            <ul>
                <li>Thanh toán điện tử (E-payment – Electronic Payment) là bất kỳ hình thức chuyển tiền nào được thực hiện thông qua các thiết bị điện tử.</li>
                <li>Thanh toán bằng hệ thống này có thể được thực hiện qua Internet
                    <ul>
                        <li>Hệ thống chuyển tiền điện tử (EFT – Electronic Funds Transfer).</li>
                        <li>Hệ thống thanh toán bù trừ liên ngân hàng (Interbanking Clearing Systems).</li>
                        <li>Hệ thống trao đổi dữ liệu điện tử tài chính (Financial EDI).</li>
                    </ul>
                </li>
            </ul>

            <p><b>Phân loại thanh toán điện tử</b></p>
            <ul>
                <li>Hệ thống thanh toán điện tử Electronic Payment System – EPS có thể chia làm hai loại chính:
                    <ul>
                        <li>Thanh toán bán sỉ (Wholesale EPS);</li>
                        <li>Thanh toán bán lẻ (Retail EPS).</li>
                    </ul>
                </li>
                <li>Thanh toán điện tử đóng một vai trò quan trọng và việc thiếu một hệ thống thanh toán hiệu quả có thể cản
                    trở sự thành công của sự phát triển thương mại điện tử nói chung. Sự tăng trưởng vượt trội của Internet đã
                    kích thích các nhu cầu về hệ thống thanh toán điện tử. Nó hỗ trợ cho hoạt động thương mại điện tử, giúp
                    cho các giao dịch thanh toán hàng hóa trở nên nhanh hơn, tiện lợi hơn và an toàn hơn.</li>
                
            </ul>
            `],
            ['Các công cụ thanh toán', 'TMDT0412', `
                <ul>
                    <li>Tiền mặt.</li>
                    <li>Chuyển tiền điện tử (Internet banking) (thị phần theo ngân hàng, rủi ro?).</li>
                    <li>Séc điện tử.</li>
                    <li>Ví tiền số hóa (Momo, Payoo, Moca, Vnpay, Zalopay, VTC Pay, Air Pay...) (số lượng, thị phần, các rủi ro???).</li>
                    <li>Thanh toán bằng thẻ tín dụng (Visa, Master, JCB, Discovery, Dinner Club, American express, Union pay).</li>
                    <li>QR Code, 18 BIDV, VCB, Vietin...</li>
                    <li>Các cổng thanh toán điện tử (Ngân lượng, Bảo kim, Payone, Alipay, Samsung Pay, VNPay, One Pay,
                        Smartlink, Senpay, Payoo...).</li>
                    <li>Bitcoin...</li>
                </ul>
            `]
        ]
    },
    TMDT042: {
        title: 'Thẻ thanh toán',
        index: [
            ['Khái niệm thẻ thanh toán','TMDT0421',`
            <p>Thẻ thanh toán hay còn gọi thẻ chi trả là một loại thẻ có khả năng thanh toán tiền mua hàng hóa, dịch vụ tại
            một vài địa điểm chấp nhận tiêu dùng bằng thẻ đó, hoặc có thể dùng nó để rút tiền mặt trực tiếp từ các ngân hàng hay các máy rút tiền tự động. Hiện nay các loại thẻ thanh toán có thể được phát hành bởi các ngân hàng, các tổ chức tài chính và một vài công ty phát hành dưới dạng thẻ quà tặng, thẻ sử dụng dịch vụ</p>

            <p><b>Phân loại thẻ thanh toán</b></p>
            <p>
                <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#DOM4211" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Debit Card (Thẻ ghi nợ)
                  </a>
                <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#DOM4212" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Credit Card (Thẻ tín dụng)
                  </a>
                <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#DOM4213" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Prepaid Card (Thẻ trả trước)
                  </a>
                <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#DOM4214" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Charge Card (Thẻ thanh toán tiêu dùng, Thẻ mua hàng)
                  </a>
            </p>
            <div class="collapse" id="DOM4211">
                <div class="card card-body">
                  <h3>Debit Card (Thẻ ghi nợ);</h3>
                  <center>
                    <img style="width: 100%;" src="./assets/img/TMDT/chuong40.jpg" alt="chuong40">
                  </center>
                  <ul>
                    <li>Thanh toán dùng thẻ này được kết nối với tài khoản tiền gửi không kỳ hạn</li>
                    <li>Chi tiêu trong phạm vi lượng tiền có trong tài khoản</li>
                    <li>Có 2 loại:
                        <ul>
                            <li>Thẻ ghi nợ nội địa (thẻ ATM) chỉ có tác dụng tiêu dùng trong nước;</li>
                            <li>Thẻ ghi nợ quốc tế (Visa Debit, Master Debit, JCB Debit) có thể tiêu dùng ở nước ngoài.</li>
                        </ul>
                    </li>
                  </ul>
                </div>
              </div>
            <div class="collapse" id="DOM4212">
                <div class="card card-body">
                  <h3>Credit Card (Thẻ tín dụng);</h3>
                  <center>
                    <img style="width: 100%;" src="./assets/img/TMDT/chuong41.jpg" alt="chuong41">
                  </center>
                  <ul>
                    <li>Cho phép chi tiêu ngay cả khi không có tiền trong tài khoản <br>
                        Ví dụ: VisaCard, Mastercard, Dinner Club, JCB, AMERICAN EXPRESS, DISCOVERY.
                    </li>
                    <li>Người bán trả phí sử dụng dịch vụ thanh toán bằng thẻ</li>
                    <li>Mở thẻ: Phải chứng minh tài chính với ngân hàng và trải qua quá trình xét duyệt khắt khe</li>
                    <li>Chiếm khoảng 90% tổng giá trị các giao dịch qua mạng internet.</li>
                  </ul>
                </div>
              </div>
            <div class="collapse" id="DOM4213">
                <div class="card card-body">
                  <h3>Prepaid Card (Thẻ trả trước);</h3>
                  <center>
                    <img style="width: 100%;" src="./assets/img/TMDT/chuong42.jpg" alt="chuong42">
                  </center>
                  <ul>
                    <li>Thẻ trả trước Prepaid Card là một loại thẻ ATM trả trước, ai cũng có thể đăng ký mở thẻ và không kết nối tài khoản tại ngân hàng của bạn nên có thể dùng làm quà tặng cho người khác, có thể không đứng tên của mình</li>
                    <li>Thẻ trả trước không hề được liên kết với tài khoản ngân hàng như thẻ ghi nợ Debit Card. Do đó thẻ chỉ có thể sử dụng số tiền mà thẻ đó đang có. Nếu hết tiền thì không thể thanh toán được nữa.</li>
                  </ul>
                </div>
              </div>
            <div class="collapse" id="DOM4214">
                <div class="card card-body">
                  <h3>Charge Card (Thẻ thanh toán tiêu dùng, Thẻ mua hàng).</h3>
                  <center>
                    <img style="width: 100%;" src="./assets/img/TMDT/chuong43.jpg" alt="chuong43">
                  </center>
                  <ul>
                    <li>Loại thẻ tín dụng phi ngân hàng, do ngân hàng phát hành.</li>
                    <li>Không yêu cầu phí lãi suất, nhưng đòi hỏi người sử dụng phải thanh toán hết khi nhận được báo cáo, thường là hàng tháng.</li>
                  </ul>
                </div>
              </div>
            `],
            ['Quy trình thanh toán thẻ','TMDT0422',`
            <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#DOM4221" role="button" aria-expanded="false" aria-controls="collapseExample">
              Thành phần tham gia
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#DOM4222" role="button" aria-expanded="false" aria-controls="collapseExample">
              Giải thích sơ đồ
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#DOM4223" role="button" aria-expanded="false" aria-controls="collapseExample">
              Quy trình thanh toán thẻ tín dụng
            </a>
          </p>
          <div class="collapse" id="DOM4221">
            <div class="card card-body">
              <ul>
                <li>Người có thẻ;</li>
                <li>Người bán;</li>
                <li>Công ty phát hành thẻ;</li>
                <li>Ngân hàng đại diện bên mua, bên bán;</li>
                <li>Thương hiệu thẻ (visa).</li>
                <li>Khách hàng xuất trình thẻ thanh toán</li>
                <li>Người bán xem xét giá trị của giao dịch có đúng hạn mức thanh toán
                  <ul>
                    <li>Nếu số tiền thanh toán lớn hơn hạn mức thì cơ sở chấp nhận thẻ phải xin cấp phép</li>
                    <li>Hạn mức được đưa ra dựa trên mức độ chấp nhận rủi ro của ngành được cấp (ngành có rủi ro cao thì hạn mức càng thấp)</li>
                    <li>Quy trình xin cấp phép:
                      <ul>
                        <li>Người bán gửi yêu cầu đến ngân hàng của mình đề nghị cho phép chủ thẻ sử dụng để thanh toán số
                          tiền của giao dịch.</li>
                        <li>Trung tâm xử lý số liệu sẽ chuyển yêu cầu xin cấp phép đến ngân hàng đã phát hành thẻ</li>
                        <li>Ngân hàng phát hành kiểm tra hạn mức tín dụng và gửi trả lời tới trung tâm xử lý số liệu thông qua
                          mạng trao đổi dữ liệu.</li>
                          <li>Một giấy phép chỉ có giá trị trong một khoảng thời gian nhất định (thường là 3 ngày)</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div class="collapse" id="DOM4222">
            <div class="card card-body">
              <center>
                <img style="width: 100%;" src="./assets/img/TMDT/chuong44.jpg" alt="chuong44">
              </center>
              <ul>
                <li>Merchant Account là một tài khoản đặc biệt, cho phép chấp nhận thanh toán bằng thẻ tín dụng. Việc thanh
                  toán bằng thẻ tín dụng chỉ có thể tiến hành thông qua dạng tài khoản này.</li>
                <li>Payment Gateway là một chương trình phần mềm cho phép chuyển dữ liệu của các giao dịch từ website
                  của người bán sang trung tâm thanh toán thẻ tín dụng để hợp thức hóa quá trình thanh toán thẻ tín dụng</li>
                <li>Giao thức SSL (Secure Socket Layer) là giao thức sử dụng các chứng thực điện tử để xác thực và mã hóa
                  thông điệp dữ liệu nhằm đảm bảo tính riêng tư hay bí mật của các thông tin dùng trong thanh toán điện tử</li>
              </ul>
              <center>
                <img style="width: 100%;" src="./assets/img/TMDT/chuong45.jpg" alt="chuong45">
              </center>
              <center>
                <img style="width: 100%;" src="./assets/img/TMDT/chuong46.jpg" alt="chuong46">
              </center>
            </div>
          </div>
          <div class="collapse" id="DOM4223">
            <div class="card card-body">
              <h3>Quy trình thanh toán thẻ tín dụng</h3>
              <ul>
                <li>Người mua hàng sau khi lựa chọn sản phẩm, quyết định mua hàng sẽ nhập vào các thông tin thẻ tín dụng lên trang web của người bán.</li>
                <li>Các thông tin thẻ tín dụng được gửi thẳng tới ngân hàng mở Merchant Account (hoặc bên cung cấp dịch vụ thanh toán) mà không lưu tại máy chủ của người bán.</li>
                <li>Ngân hàng mở Merchant Account gửi các thông tin thẻ tín dụng tới ngân hàng cấp thẻ tín dụng.</li>
                <li>Ngân hàng cấp thẻ tín dụng sau khi kiểm tra các thông tin sẽ phản hồi lại cho ngân hàng mở Merchant Account. Phản hồi có thể là chấp nhận thanh toán (ghi có cho tài khoản của Người bán) hoặc từ chối.</li>
                <li>Dựa trên phản hồi của Ngân hàng cấp thẻ tín dụng, người bán sẽ thực hiện đơn hàng hoặc từ chối</li>
              </ul>
              <center>
                <img style="width: 100%;" src="./assets/img/TMDT/chuong47.jpg" alt="chuong47">
              </center>
              <center>
                <img style="width: 100%;" src="./assets/img/TMDT/chuong48.jpg" alt="chuong48">
              </center>
            </div>
          </div>
            `],
            ['Các dịch vụ trong thanh toán thẻ', 'TMDT0423', `
            <p>Thanh toán thẻ tín dụng gồm nhiều dịch vụ phức tạp:</p>
            <ul>
              <li>Cấp tín dụng cho khách hàng;</li>
              <li>Thanh toán tức thì: Người bán được thanh toán ngay;</li>
              <li>Bảo hiểm: Không có rủi ro đáng kể nào có thể xảy ra với chủ thẻ tín dụng;</li>
              <li>Dịch vụ tài chính ngân hàng: Thanh toán giữa 2 ngân hàng với nhau;</li>
              <li>Dịch vụ toàn cầu: Thẻ được sử dụng ở nhiều nơi (visa, master...);</li>
              <li>Lưu trữ tài liệu: Định kỳ, ngân hàng gửi các bản sao kê tài khoản thẻ tín dụng cho chủ thẻ trong đó ghi rõ
              từng khoản mục;</li>
              <li>Dịch vụ giải quyết tranh chấp: Người mua có thể yêu cầu ngân hàng của mình không thanh toán nếu người
              bán giao hàng không đúng;</li>
              <li>Độ tin cậy đối với người bán: Bất kỳ vấn đề gì xảy ra trong thanh toán, khách hàng có thể khiếu nại đối với
              ngân hàng phát hành thẻ;</li>
              <li>Độ tin cậy đối với người mua</li>
            </ul>
            `],
            ['Rủi ro trong thanh toán thẻ','TMDT0424',`
            <ul>
            <li>Tác dụng của thanh toán bằng thẻ
              <ul>
                <li>Sự bí mật của thẻ tín dụng</li>
                <li>Chi phí cho thanh toán bằng thẻ tín dụng tương đối cao;</li>
                <li>Ngân hàng chỉ chấp nhận thanh toán thẻ đối với những cơ sở bán hàng thực sự tin cậy.</li>
              </ul>
            </li>
            <li>Rủi ro khi thanh toán bằng thẻ (cho người phát hành)
              <ul>
                <li>Ngân hàng chịu rủi ro khi khách hàng mất khả năng thanh toán;</li>
                <li>Cho người khác sử dụng thẻ ở các quốc gia khác nhau (mạo danh chữ ký), do thẻ được dùng ở trên
                  toàn thế giới, sau đó chủ thẻ chứng minh thời gian đó không có mặt ở nước đó, ngân hàng là người
                  gánh chịu;</li>
                <li>Báo cho ngân hàng là mất thẻ, nhưng vẫn sử dụng thẻ để thanh toán trong thời gian thẻ chưa bị đưa vào
                  danh sách đen.</li>
              </ul>
            </li>
          </ul>
            `],
            ['Giao dịch thanh toán thẻ','TMDT0425',`
                <ul>
                    <li>Chuyển tiền điện tử và chuyển tiền điện tử tại điểm bán.</li>
                    <li>Giao dịch EDI tài chính.</li>
                    <li>Thanh toán thẻ.</li>
                    <li>Chuyển khoản điện tử và thẻ ghi nợ trên Internet.</li>
                    <li>Tiền mặt số hóa.</li>
                    <li>Hệ thống thanh toán séc điện tử.</li>
                    <li>Hệ thống xuất trình và thanh toán hóa đơn điện tử</li>
                </ul>

                <p>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#DOM4251" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Chuyển tiền điện tử và chuyển tiền điện tử tại điểm bán
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#DOM4252" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Giao dịch EDI tài chính
                    </a>
                </p>
                <div class="collapse" id="DOM4251">
                    <div class="card card-body">
                    <p><b>Chuyển tiền điện tử và chuyển tiền điện tử tại điểm bán</b></p>
                    <ul>
                        <li>EFT: Chuyển các khoản tiền được bắt đầu thông qua một thiết bị điện tử, điện thoại, modem, máy tính.</li>
                        <li>Chuyển khoản điện tử đang được thực hiện phổ biến trên các mạng SWIFT, FEDWIRE, CHIPS. Ba mạng
                        này thực hiện chuyển tiền có giá trị lớn. (Thanh toán qua trung tâm bù trừ tự động (ACH) thực hiện với giao
                        dịch giá trị nhỏ.)</li>
                        <li>EFTPOS là một dạng của EFT áp dụng khi khách hàng thực hiện các hoạt động mua hàng tại điểm truyền
                        thống (siêu thị, điểm bán xăng).</li>
                        <li>EFTPOS được thiết kế cho phép sử dụng các loại thẻ tín dụng và thẻ ghi nợ</li>
                    </ul>
                    </div>
                </div>
                <div class="collapse" id="DOM4252">
                    <div class="card card-body">
                    <p><b>Giao dịch EDI tài chính</b></p>
                    <ul>
                        <li>EDI hoạt động trên một mạng riêng VAN</li>
                        <li>Hạn chế của EDI – VAN:
                        <ul>
                            <li>Những khống chế bởi những thỏa thuận dài dòng ban đầu nhằm định nghĩa các dạng giao dịch để phù
                            hợp với tất cả các đối tác kinh doanh;</li>
                            <li>Mỗi đối tác kinh doanh phải định nghĩa các dạng EDI riêng biệt, và đồng thời phải chuyển dạng này sang
                            dạng chung để đối tác khác có thể hiểu</li>
                        </ul>
                        </li>
                        <li>Do những hạn chế trên, EDI – Internet ra đời (hệ thống EDI mở).</li>
                    </ul>
                    </div>
                </div>
            `]
        ]
    },
    TMDT043: {
        title: 'Các công cụ thanh toán khác',
        index: [
            ['Ví điện tử', 'TMDT0431', `
            <p>
            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#DOM4311" role="button" aria-expanded="false" aria-controls="collapseExample">
              Định nghĩa ví điện tử
            </a>
            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#DOM4312" role="button" aria-expanded="false" aria-controls="collapseExample">
              Chức năng và vai trò của ví điện tử
            </a>
            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#DOM4313" role="button" aria-expanded="false" aria-controls="collapseExample">
              Ưu điểm của ví điện tử
            </a>
            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#DOM4314" role="button" aria-expanded="false" aria-controls="collapseExample">
              Hạn chế của ví điện tử
            </a>
            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#DOM4315" role="button" aria-expanded="false" aria-controls="collapseExample">
              Hướng dẫn sử dụng ví điện tử
            </a>
            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#DOM4316" role="button" aria-expanded="false" aria-controls="collapseExample">
              Một số ví điện tử phổ biến
            </a>
          </p>
          <div class="collapse" id="DOM4311">
            <div class="card card-body">
              <h3>Định nghĩa ví điện tử</h3>
              <ul>
                <li>Ví điện tử (ví tiền số hóa, ví online) là một phần mềm trong đó người sử dụng có thể lưu trữ số thẻ tín dụng và các
                  thông tin cá nhân khác. Khi mua hàng trên mạng, người
                  mua hàng chỉ đơn giản kích vào ví điện tử, phần mềm sẽ
                  tự động điền các thông tin khách hàng cần thiết để thực
                  hiện việc mua hàng.</li>
                <li>Momo, Visa, MasterCard, Yahoo, AOL, Microsoft đều cung
                  cấp dịch vụ ví điện tử</li>
              </ul>
            </div>
          </div>
          <div class="collapse" id="DOM4312">
            <div class="card card-body">
              <h3>Chức năng và vai trò của ví điện tử</h3>
              <table>
                <tr>
                  <th>Chức năng</th>
                  <th>Vai trò</th>
                </tr>
                <tr>
                  <td>Chuyển - Nhận tiền</td>
                  <td>Thực hiện nhanh chóng các giao dịch chuyển và nhận tiền cho người khác</td>
                </tr>
                <tr>
                  <td>Thanh toán hóa đơn</td>
                  <td>Thanh toán tiện lợi các hóa đơn tiền điện, nước, học phí, chung cư,... nhằm giảm sự quản lí các giao dịch qua thẻ ngân hàng</td>
                </tr>
                <tr>
                  <td>Lưu trữ tiền trên mạng Internet</td>
                  <td>Giảm bớt sự xuất hiện của tiền mặt để tránh các rủi ro về lạm phát</td>
                </tr>
              </table>
            </div>
          </div>      
          <div class="collapse" id="DOM4313">
            <div class="card card-body">
              <h3>Ưu điểm của ví điện tử</h3>
              <ul>
                <li>Tiết kiệm thời gian di chuyển để thực hiện các giao dịch chuyển – nhận tiền cho người thân, đối tác, bạn bè</li>
                <li>Mua hàng hóa, dịch vụ nhanh chóng, dễ dàng hơn trên các trang mạng điện tử hiện nay.</li>
                <li>Thanh toán hóa đơn điện – nước nhanh chóng</li>
                <li>Thực hiện các truy vấn về số dư tài khoản, nhằm kiểm soát sự biến động tốt hơn trong tài khoản của mình.</li>
              </ul>
            </div>
          </div>
          <div class="collapse" id="DOM4314">
            <div class="card card-body">
              <h3>Hạn chế của ví điện tử</h3>
              <ul>
                <li>Vấn đề pháp lý
                  <br>
                  Hành lang pháp lý của ứng dụng ví điện tử hiện nay thực chất vẫn chưa được thông qua chính thức, không có cơ quan chức năng nào đảm bảo tính an toàn về tài sản của người dùng khi tranh chấp. Không có bộ luật nào quy định về pháp lý của ví điện tử và rủi ro.
                </li>
                <li>Cộng đồng liên kết các ví điện tử:
                  <ul>
                    <li>Cộng đồng liên kết ví điện tử ở Việt Nam hoàn toàn chưa có tính hợp tác, dù cho có rất nhiều ví điện tử quốc tế và trong nước như: Apple Pay, Samsung Pay, Momo, Paypal,...</li>
                    <li>Sự liên kết giữa các ví này dẫn đến hỗn loạn trong mỗi tài khoản ví điện tử</li>
                  </ul>
                </li>
                <li>Tính bảo mật:
                  <br>
                  Điều rất đáng quan tâm, ví điện tử chưa xây dựng được hệ thống cửa hàng, đại lý kinh doanh nhằm cung cấp việc linh động cho những người có nhu cầu sử dụng ví điện tử
                </li>
              </ul>
            </div>
          </div>    
          <div class="collapse" id="DOM4315">
            <div class="card card-body">
              <h3>Hướng dẫn sử dụng ví điện tử</h3>
              <table>
                <tr>
                  <th>Cách liên kết ví điện tử</th>
                  <th>Cách sử dụng ví điện tử</th>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li>Bước 1: Tải ứng dụng ví điện tử bạn muốn sử dụng.</li>
                      <li>Bước 2: Đăng ký mở tài khoản.</li>
                      <li>Bước 3: Đăng nhập ví điện tử.</li>
                      <li>Bước 4: Liên kết ví điện tử với ngân hàng bạn
                      đang dùng. Lưu ý: Tài khoản ngân hàng đã đăng
                      ký dịch vụ Internet Banking.</li>
                      <li>Bước 5: Cung cấp các thông tin liên quan để đảm
                      bảo liên kết thành công.</li>
                      <li>Bước 6: Xác thực OTP và hoàn tất</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Bước 1: Mở ứng dụng ví điện tử và đăng nhập.</li>
                      <li>Bước 2: Lựa chọn dịch vụ cần sử dụng: Mua
                      hàng online, mua thẻ điện thoại, mua vé xem
                      phim, mua vé máy bay...</li>
                      <li>Bước 3: Chọn nguồn thanh toán là tài khoản
                      ngân hàng liên kết hay tài khoản ví điện tử.</li>
                      <li>Bước 4: Xác nhận giao dịch bằng OTP.</li>
                      <li>Bước 5: Kết thúc giao dịch và thóat ra ví điện tử để đảm bảo an toàn</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="collapse" id="DOM4316">
            <div class="card card-body">
              <ul>
                <li>Ví điện tử Momo: Ứng dụng ví Momo với rất nhiều ưu đãi hấp dẫn dành tặng người dùng được coi là đơn vị tiên phong trong lĩnh vực ví điện tử tại Việt Nam. Hiện nay, Momo có hơn 5 triệu người dùng cũng như là đối tác với 12 ngân hàng và thẻ quốc tế hiện đang có mặt tại Việt Nam.</li>
                <li>Ví điện tử Apple Pay: Để thuận tiện và bảo mật hơn với thẻ ghi nợ và thẻ tín dụng Visa, Mastercard và American Express, bạn có thể sử dụng iPhone, Apple Watch, iPad hoặc Mac để thanh toán mua hàng.</li>
                <li>Ví điện tử Android Pay: Android Pay được sử dụng rộng rãi tại các cửa hàng với sự thuận tiện tối đa và chờ đợi tối thiểu dành cho người tiêu dùng.</li>
                <li>Ví điện tử PayPal: PayPal là người trung gian thanh toán trực tuyến cho nhiều nhà bán lẻ trực tuyến, bao gồm cả Ebay. Nó cung cấp khả năng cho bạn thực hiện mua hàng nhanh chóng, đơn giản và an toàn với tài khoản PayPal mà bạn liên kết với tài khoản giao dịch hoặc thẻ tín dụng của mình.</li>
                <li>Ví điện tử Google Pay: bạn có thể mua hàng bằng điện thoại hoặc máy tính tại hàng ngàn cửa hàng trực
                tuyến. Bạn cũng có thể mua tại cửa hàng trong các ứng dụng di động bằng cách nhấn vào điện thoại của
                mình để thanh toán và đổi phiếu mua hàng.</li>
                <li>Ví điện tử Bankplus: Bankplus là ứng dụng được tích hợp thẳng vào sim điện thoại do Viettel phối hợp cùng
                MBBank. Người dùng có thể thực hiện những giao dịch cơ bản như trên máy ATM, thanh toán hóa đơn hay nạp tiền thuê bao trả trước của Viettel.</li>
                <li>Ví điện tử Ví Việt: Ví Việt do Ngân hàng LienVietPostBank phát hành giúp người dùng dịch vụ có thể giao dịch và thanh toán qua điện thoại thông minh.</li>
                <li>Ví điện tử VTC Pay: VTC Pay ra đời từ năm 2010 và cũng là một trong số những đơn vị ví điện tử uy tín ở Việt Nam.</li>
                <li>Ví điện tử Moca: Moca là một tên tuổi còn khá non trẻ trên thị trường E-wallet nhưng đã sớm được đánh giá cao và phù hợp với giới trẻ.</li>
                <li>Ví điện tử ZaloPay: ZaloPay thuộc sở hữu của Công ty TNHH Zion thuộc Tập đoàn VNG. Được tích hợp với cộng đồng 70 triệu người dùng ứng dụng Zalo, Zalo pay phát triển nhanh chóng và có ưu thế khá lớn trong việc tham gia vào thị trường.</li>
                <li>Ví điện tử Ngân lượng: Dịch vụ thanh toán Ngân Lượng là một trong những dịch vụ đi đầu trong ngành thanh toán điện tử tại Việt Nam. Thuộc công ty Cổ phần Ngân lượng, ứng dụng đã từng bước khẳng định được chất lượng cũng như số lượng người dùng.</li>
              </ul>
            </div>
          </div>
            `],
            ['QR Code', 'TMDT0432', `
            <p>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#DOM4321" role="button" aria-expanded="false" aria-controls="collapseExample">
                Định nghĩa QR code
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#DOM4322" role="button" aria-expanded="false" aria-controls="collapseExample">
                Lợi ích của việc sử dụng mã QR trong thanh toán
                </a>
            </p>
            <div class="collapse" id="DOM4321">
                <div class="card card-body">
                <h3>Định nghĩa QR code</h3>
                <ul>
                    <li>QR Code là viết tắt của Quick response code (Mã phản hồi nhanh), hoặc có thể gọi là Mã vạch ma trận
                    (Matrix-barcode) hay Mã vạch 2 chiều (2D). Đây là một dạng thông tin được mã hóa để hiển thị sao cho
                    máy có thể đọc được</li>
                    <li>2 loại QR Code trong thanh toán:
                        <ul>
                        <li>Quét mã QR Code cá nhân: Khi thanh toán tiền hàng cho khách, nhân viên thu ngân sẽ nhập số tiền cần
                            thanh toán. Sau đó, khách sẽ hiển thị mã QR trên ứng dụng của mình, nhân viên thu ngân sẽ quét mã
                            QR đó và khấu trừ tiền trong tài khoản. Tất nhiên, mã QR của khách phải được kết nối đến tài khoản
                            ngân hàng, hoặc sử dụng mã QR cá nhân sẵn có trong ứng dụng Mobile Banking của mình</li>
                        <li>Quét mã QR Code cửa hàng: Trong trường hợp này, nhà bán lẻ sẽ có sẵn một mã QR tại quầy thu ngân
                            (hoặc trong hóa đơn thanh toán) và người mua hàng sẽ quét mã đó bằng ứng dụng quét mã QR trên
                            thiết bị của mình. Tiếp tục nhập số tiền phải trả và hoàn tất thanh toán. Hầu hết các chuỗi bán lẻ thời
                            trang, ăn uống, đồ gia dụng hiện nay đều đang áp dụng cách thức thanh toán này. Rất nhanh và tiện lợi
                            cho khách hàng</li>
                        </ul>
                    </li>
                </ul>
                </div>
            </div>
            <div class="collapse" id="DOM4322">
                <div class="card card-body">
                <h3>Lợi ích của việc sử dụng mã QR trong thanh toán</h3>
                <ul>
                    <li>Không cần thiết bị đặc biệt
                    <br>
                    Để quét mã QR chỉ là một chiếc camera có sẵn trên điện thoại. Khắc phục những thách thức khi thanh toán di động là tìm giải pháp hoạt động tương thích giữa các thiết bị với nhau.
                    </li>
                    <li>Nhanh chóng, dễ sử dụng
                    <br>
                    Không cần nhập thông tin tài khoản của người mua hàng, số thẻ hay số tài khoản giống như các phương thức thanh toán khác. Chỉ cần quét mã QR và nhập số tiền thanh toán, giao dịch sẽ hoàn thành nhanh gọn trong vài giây mà không cần khai thác bất cứ thông tin người dùng nào.
                    </li>
                    <li>An toàn cao
                    <br>
                    Lưu trữ thông tin thanh toán trên điện thoại di động cá nhân và mua hàng mọi nơi, an toàn hơn nhiều so với việc mang theo cả xấp tiền mặt, hay thẻ ngân hàng, thẻ tín dụng. Nó có thể tạo ra lỗ hổng lớn khiến kẻ xấu đánh cắp thông tin tài khoản và thực hiện các trò gian lận. Trong khi sử dụng mã QR Code thanh toán là tuyệt đối an toàn. Với hai lớp bảo mật cùng định dạng đặc biệt của mã QR (theo tiêu chuẩn toàn cầu của EMVCo quốc tế), khách hàng sẽ hoàn toàn an tâm khi giao dịch thanh toán bằng QR code
                    </li>
                </ul>
                </div>
            </div>
            `],
            ['Séc điện tử', 'TMDT0433', `
                <p>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#DOM4331" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Định nghĩa séc điện tử
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#DOM4332" role="button" aria-expanded="false" aria-controls="collapseExample">
                    2 cách chập nhận thanh toán bằng séc điện tử
                    </a>
                </p>
                <div class="collapse" id="DOM4331">
                    <div class="card card-body">
                    <ul>
                        <li>Séc điện tử là phiên bản điện tử hoặc yêu cầu xuất trình điện tử đối với séc giấy thông thường. Séc điện tử chứa các thông tin tương tự như séc thường và có thể sử dụng trong mọi trường hợp. Séc điện tử và séc giấy có thể sử dụng với khung pháp lý điều chỉnh tương tự nhau. Về cơ bản, quy trình vận hành của séc điện tử tương tự như séc giấy, nhưng thực hiện toàn bộ thông qua các phương tiện điện tử, do đó nhanh hơn, ít chi phí hơn và có thể an toàn hơn</li>
                        <li>Séc điện tử được coi là phù hợp với thực tiễn kinh doanh hiện nay, vừa tận dụng được năng lực của các
                        ngân hàng, vừa giảm thiểu các quy trình xử lý phức tạp. Các hệ thống thanh toán séc điện tử phổ biến hiện
                        nay là eCheck Secure (của CheckFree), eCash</li>
                    </ul>
                    </div>
                </div>
                <div class="collapse" id="DOM4332">
                    <div class="card card-body">
                    <p>Có 2 cách khi chấp nhận thanh toán bằng Séc điện tử:</p>
                    <ul>
                        <li>Phương pháp “Print and Pay”: Còn được gọi là “in và thanh toán” bởi vì khách hàng cần phải mua một phần
                        mềm cho phép in ra những tấm séc, và chuyển séc đó đến ngân hàng của khách hàng để nhận tiền. Quá
                        trình xử lý séc trực tuyến cũng giống như séc thông thường, chính vì vậy khách hàng phải đợi đến khi séc
                        được chuyển đến ngân hàng và phải được chứng nhận chắc chắn rằng những tấm séc đó có giá trị. Việc
                        áp dụng phương pháp này sẽ giúp bạn giảm được tiền phí giao dịch nhưng nó lại tốn kém về mặt nhân
                        công và thời gian.</li>
                        <li>Trung tâm giao dịch: Đối với người mua, việc sử dụng trung tâm giao dịch cũng giống như việc áp dụng
                        phương pháp “print and pay”, bởi vì trong cả hai phương pháp, người mua đều phải nhập tất cả các thông
                        tin trên séc vào form trực tuyến.</li>
                        <li>Ngoài việc cho phép bạn chấp nhận thanh toán trực tuyến, cả hai phương pháp trên còn cho phép bạn
                        thanh toán qua điện thoại hoặc fax, vì bạn đều có thể kiểm tra các thông tin của người mua và bạn có thể tự
                        nhập thông tin đó vào.</li>
                    </ul>
                    <center>
                        <img style="width: 100%;" src="./assets/img/TMDT/chuong49.jpg" alt="chuong49">
                    </center>
                    </div>
                </div>
            `],
            ['Internet Banking', 'TMDT0434', `
                <p>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#DOM4341" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Khái niệm Internet Banking
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#DOM4342" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Ưu điểm của ngân hàng điện tử
                    </a>
                </p>
                <div class="collapse" id="DOM4341">
                    <div class="card card-body">
                    <ul>
                        <li>Internet Banking (E-Banking, ngân hàng điện tử) là dịch vụ ngân hàng trực tuyến, giúp khách hàng quản lý
                        tài khoản, thực hiện các giao dịch một cách nhanh chóng thông qua các thiết bị kết nối internet như điện
                        thoại, laptop, máy tính bàn</li>
                        <li>Các giao dịch có thể thực hiện qua Internet Banking:
                        <ul>
                            <li>Chuyển khoản nội bộ và liên ngân hàng</li>
                            <li>Truy vấn, cập nhật thông tin tài khoản, số dư hiện có..</li>
                            <li>Thanh toán hóa đơn mua sắm, dịch vụ như mua vé máy bay, mua vé tàu, thanh toán hóa đơn điện nước,
                            nạp tiền điện thoại cho thuê bao trả trước..</li>
                            <li>Nộp thuế</li>
                            <li>Mở tài khoản tiết kiệm online, tất toán tài khoản tiết kiệm.</li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
                <div class="collapse" id="DOM4342">
                    <div class="card card-body">
                    <h3>Ưu điểm của ngân hàng điện tử</h3>
                    <ul>
                        <li>Nhanh chóng, thuận tiện: Với dịch vụ Internet Banking, khách hàng có thể tự thực hiện các giao dịch ngay tại nhà hay bất cứ đâu mà không cần phải đến phòng giao dịch của ngân hàng.</li>
                        <li>Tiết kiệm thời gian và chi phí, phù hợp với các khách hàng bận rộn.</li>
                        <li>Chuyển khoản, nhận tiền giữa các tài khoản cùng ngân hàng hoặc liên ngân hàng chỉ sau một vài phút. Các giao dịch có thể thực hiện ngay lập tức, dù vào thứ Bảy, Chủ nhật hay các ngày lễ Tết.</li>
                        <li>Phí giao dịch qua ngân hàng điện tử được đánh giá ở mức khá thấp so với phí giao dịch trực tiếp tại ngân hàng.</li>
                        <li>Thuận lợi quản lý thông tin tài khoản cá nhân, theo dõi số dư, tiền gửi tiết kiệm, tiền vay, in sao kê thường xuyên và liên tục</li>
                    </ul>
                    </div>
                </div>
            `],
            ['POS', 'TMDT0435', `
                <p>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#DOM4351" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Định nghĩa POS
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#DOM4352" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Các hệ thống POS hiện đang được sử dụng
                    </a>
                </p>
                <div class="collapse" id="DOM4351">
                    <div class="card card-body">
                    <ul>
                        <li>POS là từ viết tắt của Point Of Sales, thuật ngữ dùng để chỉ điểm phân phối hàng hóa (điểm bán lẻ) được
                        một cá nhân hay doanh nghiệp tổ chức, ví dụ: cửa hàng tạp hóa, chuỗi cửa hàng thời trang, cửa hàng trưng
                        bày và mua sắm</li>
                        <li>Mỗi POS luôn có một hệ thống hoặc công cụ ghi nhận lại các giao dịch nhằm phản ánh lượng tiền mặt và
                        hàng hóa ra vào trong một khoảng thời gian nhất định như sổ tay, tập tin Excel hoặc cao cấp hơn là các loại
                        máy tính tiền (máy POS), phần mềm theo dõi bán hàng (phần mềm POS).</li>
                        <li>Hệ thống POS (POS system): Một điểm bán hàng có thể có một POS hoặc nhiều POS tùy theo nhu cầu
                        kinh doanh. POS system gồm: POS thanh toán và POS bán hàng</li>
                    </ul>
                    </div>
                </div>
                <div class="collapse" id="DOM4352">
                    <div class="card card-body">
                    <ul>
                        <li>Máy POS di động (máy POS cầm tay)
                        <br>
                        Thiết bị dùng để hỗ trợ các chủ doanh nghiệp nhỏ trong việc quản lý cửa hàng và thanh toán cho khách hàng. Máy được sử dụng phổ biến ở các cửa hàng có quy mô vừa và nhỏ như: siêu thị mini, cửa hàng tạp hóa, cửa hàng bán lẻ mỹ phẩm, thời trang, phụ kiện...
                        </li>
                        <li>Máy POS điện tử
                        <br>
                        Thiết bị dùng để tính tiền, lưu trữ số liệu bán hàng; có kích thước lớn, có thể kết hợp với các loại thiết bị như máy đọc mã vạch, máy in hóa đơn bán lẻ, máy thanh toán bằng thẻ tín dụng và ngăn kéo đựng tiền... Các loại máy này thường được trang bị cho các cửa hàng lớn, các chuỗi nhà hàng, các chuỗi siêu thị...
                        </li>
                        <li>Phầm mềm POS offline
                        <br>
                        Phần mềm cài trên máy vi tính, hay còn gọi là phần mềm tính tiền (mặc dù tên gọi này chỉ phản ánh được 1 chức năng trong toàn bộ các chức năng khác của phần mềm POS). Đây là dạng POS rất phát triển trong những khoảng vài năm trở lại đây bởi nó có thể tiến hành cài đặt trên máy tính có sẵn, không cần đầu tư nhiều
                        </li>
                        <li>Phần mềm POS online – Phần mềm POS ứng dụng điện toán đám mây
                        <br>
                        Phần mềm chạy trên nền web (còn gọi là Web-based POS) là một dạng dịch vụ tính tiền mới xuất hiện gần đây, có thể được coi như sự cải tiến và bắt kịp xu hướng kinh doanh bán lẻ nở rộ trong giai đoạn hiện nay và sắp tới. Tại thị trường nước ngoài, hệ thống POS online trên nền web này đã và đang trở nên phổ biến để đáp ứng kịp thời nhu cầu thanh toán điện tử và kết nối trực tuyến của các chủ cửa hàng, doanh nghiệp
                        </li>
                    </ul>
                    </div>
                </div>
            `]
        ]
    },
    TMDT044: {
        title: 'Tổng kết bài học',
        index: [
            ['Nội dung', 'TMDT0441', `
                <p>Thanh toán điện tử là việc thanh toán tiền thông qua các thông điệp điện tử thay cho việc trao tay tiền mặt. Hiện nay, các loại thẻ thanh toán được sử dụng phổ biến trên thế giới có thể kể đến là thẻ thanh toán, thẻ thông minh, ví điện tử, tiền điện tử, séc điện tử...</p>
                <ul>
                <li>Thẻ thanh toán gồm có Thẻ tín dụng, Thẻ ghi nợ, Thẻ mua hàng; trong ba loại thẻ này, thẻ tín dụng được sử dụng phổ biến hơn.</li>
                <li>Thẻ thông minh là thẻ có gắn bộ vi xử lý trên đó (chip). Bộ vi xử lý này có thể kết hợp thêm một thẻ nhớ, cũng có trường hợp trên thẻ thanh toán chỉ gắn thêm thẻ nhớ mà không có phần lập trình nào kèm theo.</li>
                <li>Ví điện tử: Ví điện tử là một phần mềm trong đó người sử dụng có thể lưu trữ số thẻ tín dụng và các thông tin cá nhân khác. Khi mua hàng trên mạng, người mua hàng chỉ đơn giản kích vào ví điện tử, phần mềm sẽ tự động điền các thông tin khách hàng cần thiết để thực hiện việc mua hàng. Hiện nay, Visa, MasterCard, Yahoo, AOL, Microsoft đều cung cấp dịch vụ ví điện tử.</li>
                <li>Các giải pháp tiền điện tử sử dụng phần mềm để lưu giữ một khoản tiền mặt tương đương vào một ổ cứng hoặc ổ đĩa. Tiền đồng và ngân phiếu được thay thế bằng các chữ ký số. Ưu điểm của hệ thống này là chi phí chuyển tiền gần như bằng 0 (chỉ có chi phí thực đó là chi phí bạn phải trả cho kết nối Internet).</li>
                </ul>
            `]
        ]
    }
}