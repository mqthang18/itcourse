var TKPTDL4 = {
    TKPTDL01: {
        title: 'Giới thiệu về kiểm định giả thuyết thống kê',
        index: [
            ['Một số khái niệm cơ bản', 'TKPTDL11', `
            <div>
          <h4>Một số khái niệm cơ bản</h4>

          <ul>
            <li>Giả sử tính chất nghiên cứu trong tổng thể được xem là biến ngẫu nhiên X. Ta thu thập mẫu dữ liệu về X.
            </li>
            <li>Ta có cơ sở để giả thuyết rằng X phân phối tuân theo một quy luật A nào đó. Ta đưa ra giả thuyết: Biến
              ngẫu nhiên X tuân theo quy luật A.</li>
            <li>Định nghĩa: Giả thuyết thống kê là giả thuyết về dạng phân phối xác suất của biến ngẫu nhiên, về các
              tham số đặc trưng của biến ngẫu nhiên hoặc về tính độc lập của các biến ngẫu nhiên.</li>
            <li>Ví dụ:
              <ul>
                <li>Biến X có phân phối chuẩn với kỳ vọng là 3.</li>
                <li>Phương pháp điều trị A chữa khỏi 90% bệnh nhân.</li>
                <li>Tuổi thọ trung bình của hai loại bóng đèn A và B là như nhau.</li>
              </ul>
            </li>
            <li>Một quy tắc hay một thủ tục quyết định dẫn tới việc bác bỏ hay chấp nhận giả thuyết đã nêu gọi là một
              kiểm định (test) thống kê.</li>
            <li>Giả thuyết được đưa ra kiểm định được ký hiệu là H0 và
              được gọi là giả thuyết (null hypothesis). Đây là giả thuyết ta nghi ngờ và muốn bác bỏ.</li>
            <li>Ngược lại với giả thuyết ta gọi là đối thuyết (alternative
              hypothesis), ký hiệu là H<sub>1</sub>. H<sub>1</sub> sẽ được chấp nhận khi H<sub>0</sub> bị bác bỏ.</li>
            <li>Câu hỏi: Ta bác bỏ hay chấp nhận một giả thuyết bằng cách
              nào? Các nhà thống kê nhất trí với nhau nguyên lý sau đây:
              <br>
              <p><b>Nếu một biến cố có xác suất rất nhỏ thì trong một hoặc
                  một vài phép thử, biến cố đó sẽ không xảy ra.</b></p>
            </li>
          </ul>
        </div>
            `],
            ['Sai lầm loại I và sai lầm loại II', 'TKPTDL12', `
            <div>
          <h4>Sai lầm loại I và sai lầm loại II</h4>
          <ul>
            <li>Sai lầm loại I: bác bỏ H<sub>0</sub> trong khi thực tế H0
              là đúng.
              <br>
              &alpha; = P(bác bỏ H<sub>0</sub> | H<sub>0</sub> đúng)
            </li>
            <li>Sai lầm loại II: chấp nhận H<sub>0</sub> trong khi thực tế
              H<sub>0</sub> là sai.
              <br>
              &beta; = P(chấp nhận H<sub>0</sub> | H<sub>0</sub> sai)
            </li>
            <li>Ta muốn cực tiểu hóa cả hai sai lầm nhưng
              không làm được.</li>
            <li>Giải pháp: Cố định sai lầm loại I.
              <br>
              &alpha;: mức ý nghĩa
            </li>
            <li><b>Chú ý</b>: khi chấp nhận H<sub>0</sub> thì có thể xảy ra sai lầm loại II và ta thường không biết
              &beta; (có thể rất lớn). Do đó việc chấp nhận H<sub>0</sub> là một quyết định dè dặt: khi chấp nhận
              H<sub>0</sub> ta không nên hiểu là H<sub>0</sub> đúng mà chỉ nên hiểu rằng các chứng cứ và số liệu đã có
              chưa đủ cơ sở để bác bỏ H<sub>0</sub>, cần phải nghiên cứu tiếp.</li>
          </ul>
          <center>
            <img src="./assets/img/PTTK/chap4/imig1.png" alt="" class="w-75">
          </center>
        </div>
            `],
            ['Quy trình kiểm định giả thuyết thống kê chung', 'TKPTDL13', `
            <div>
          <h4>Quy trình kiểm định giả thuyết thống kê chung</h4>
          <ul>
            <li><b>Cách 1</b>: Các bước tiến hành một bài kiểm đỉnh giả thuyết
              <ul>
                <li>Phát biểu giả thuyết H<sub>0</sub> và đối thuyết H<sub>1</sub>.</li>
                <li>Định rõ mức ý nghĩa &alpha; (xác suất mắc sai lầm loại I).</li>
                <li>Chọn tiêu chuẩn kiểm định (hay test thống kê)</li>
                <li>Chọn miền bác bỏ giả thuyết H<sub>0</sub></li>
                <li>Tính giá trị của test thống kê thông qua mẫu quan sát được.</li>
                <li>Kết luận
                  <ul>
                    <li>Nếu giá trị test thống kê rơi vào miền bác bỏ H<sub>0</sub>: Bác bỏ H<sub>0</sub></li>
                    <li>Nếu giá trị test thống kê không rơi vào miền bác bỏ H<sub>0</sub>: Chấp nhận H<sub>0</sub></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <b>Cách 2</b>: Sử dụng p-value (được ưu tiên sử dụng) (p-value chính là mức ý nghĩa thấp nhất mà ta có thể
              bác bỏ H<sub>0</sub>)
              <ul>
                <li>Phát biểu giả thuyết H0 và đối thuyết H1</li>
                <li>Chọn tiêu chuẩn kiểm định (hay test thống kê).</li>
                <li>Tính giá trị p-value thông qua mẫu quan sát được.</li>
                <li>Kết luận
                  <ul>
                    <li>Trường hợp 1: Không biết mức ý nghĩa
                      <ul>
                        <li>p-value > 0,1: Ta không đủ cơ sở bác bỏ H0</li>
                        <li>0,05 < p-value < 0,1: Cần cân nhắc cẩn thận trước khi bác bỏ H<sub>0</sub></li>
                        <li>0,01 < p-value < 0,05: Ta có đủ cơ sở khi bác bỏ H<sub>0</sub></li>
                        <li>p-value < 0,01: Ta có cơ sở rất mạnh khi bác bỏ H<sub>0</sub>;</li>
                      </ul>
                    </li>
                    <li>Trường hợp 2: Biết mức ý nghĩa &alpha;

                      <ul>
                        <li>Nếu p-value ≤ &alpha; thì ta bác bỏ H<sub>0</sub> và chấp nhận H1;</li>
                        <li>Nếu p-value > &alpha; thì ta chưa đủ cơ sở bác bỏ H<sub>0</sub>;</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
            `],
        ]
    },
    TKPTDL02: {
        title: 'Kiểm định phân phối chuẩn',
        index: [
            ['Nội dung chính', 'TKPTDL21', `
            <ul>
            <li>Kiểm định một tập dữ liệu có tuân theo phân phối chuẩn không?</li>
            <li>Lệnh: shapiro.test</li>
            <li>Giả thuyết H<sub>0</sub>: Dữ liệu tuân theo phân phối chuẩn</li>
            <li>Bác bỏ H<sub>0</sub> khi p-value < 0,05</li>
            <li>Ví dụ:
              <ul>
                <li>> shapiro.test(age)</li>
                <li>Dựa vào kết quả thì p-value =0,0004 < 0,05</li>
                <li>Do đó age không tuân theo phân phối chuẩn.</li>
              </ul>
            </li>
          </ul>
      
          <center>
            <img src="./assets/img/PTTK/chap4/img2.png" alt="" class="w-75">
          </center>
            `]
        ]
    },
    TKPTDL03: {
        title: 'Kiểm định hai phương sai',
        index: [
            ['Nội dung chính', 'TKPTDL31', `
            <ul>
      <li>Có 2 tổng thể. Mỗi tổng thể ta có 1 tập mẫu</li>
      <li>Mục tiêu: kiểm tra xem phương sai của 2 tổng thể có bằng nhau không? Có lớn hơn hay nhỏ hơn hay không?</li>
      <li>Lệnh
        <pre>
var.test(x, y, ratio = 1,
        alternative = c("two.sided", "less", "greater"),
        conf.level = 0.95, ...)
        </pre>
        <ul>
          <li>Giả thuyết 𝐻<sub>0</sub> : Hai tổng thể có phương sai bằng nhau</li>
          <li>Đối thuyết 𝐻<sub>1</sub> : phương sai thứ 1 khác phương sai thứ 2 alternative = "two.sided“</li>
          <li>Đối thuyết 𝐻<sub>1</sub> : phương sai thứ 1 nhỏ hơn phương sai thứ 2 alternative = " less“</li>
          <li>Đối thuyết 𝐻<sub>1</sub> : phương sai thứ 1 lớn hơn phương sai thứ 2 alternative = " greater“</li>
          <li>Bác bỏ 𝐻<sub>0</sub> , chấp nhận 𝐻<sub>1</sub> khi p-value < 0,05</li>
          <li>Ví dụ:

            <pre>
> x &lt;- rnorm(50, mean = 0, sd = 2)
> y &lt;- rnorm(30, mean = 1, sd = 1)
> var.test(x, y) # Do x and y have the same variance?
            </pre>
          </li>
          <li>Nhận xét: p-value < &alpha;=0,05 nên ta kết luận hai biến ngẫu nhiên X, Y có phương sai khác nhau.
              <center>
              <img src="./assets/img/PTTK/chap4/img3.png" alt="" class="w-75">
              </center>
          </li>
        </ul>
      </li>
    </ul>
            `]
        ]
    },
    TKPTDL04: {
        title: 'Kiểm định T-test',
        index: [
            ['Kiểm định 1 mẫu cho giá trị trung bình', 'TKPTDL41', `
            <h4>Kiểm định 1 mẫu cho giá trị trung bình</h4>
            <p><b style="color:red;">Chú ý: Ta kiểm định cho biến ngẫu nhiên tuân theo phân phối chuẩn</b></p>
  
            <p><b>a. Kiểm định 1 mẫu cho giá trị trung bình</b></p>
  
            <ul>
              <li>Cho tính chất 𝑋~𝑁(𝜇, 𝜎2)</li>
              <li>Mẫu quan sát của 𝑋: 𝑥1, 𝑥2, ... , 𝑥𝑛</li>
              <li>Mục tiêu: Kiểm định xem 𝜇 và số 𝜇<sub>0</sub> cho trước có bằng nhau hay không?</li>
              <li>Cặp giả thuyết: 
                <br>
                𝐻0 : 𝜇 = 𝜇0 , 𝐻1 : 𝜇 ≠ 𝜇0
                <br>
                hoặc 𝐻0 : 𝜇 = 𝜇0 , 𝐻1 : 𝜇 > 𝜇0
                <br>
                hoặc 𝐻0 : 𝜇 = 𝜇0 , 𝐻1 : 𝜇 < 𝜇0
              </li>
              <li>Ví dụ
                <ul>
                  <li>Tuổi thọ trung bình của người VN có bằng 67 không?</li>
                  <li>Thời gian tự học trung bình của sinh viên trong một tuần có bằng 4 tiếng không?</li>
                  <li>Trung bình số tiền khách hàng chi tiêu vào một siêu thị mua hàng có bằng 500 ngàn không?</li>
                </ul>
              </li>
              <li><b>Cách 2</b> với mức ý nghĩa &alpha;, sử dụng p-value
                <ul>
                  <li>Giá trị test thống kê: <img src="./assets/img/PTTK/chap4/img4.png" alt="">
                  <br>
                  Trong đó <span style="border-top: 1px solid black;">x</span> là trung bình mẫu, s là độ lệch chuẩn mẫu, n là kích thước mẫu
                  </li>
                  <li>Biến ngẫu nhiên T tuân theo phân phối student với 𝑛 − 1 bậc tự do, khi đó:
                    <ul>
                      <li>Cặp giả thuyết 𝐻0: 𝜇 = 𝜇0, 𝐻1 : 𝜇 ≠ 𝜇0 , khi đó p-value = 2. 𝑃( 𝑇 > |t|)
                        <br>
                        Lệnh tính: > p-value &lt;- 2*pt(|t|,n-1,lower.tail = FALSE)
                      </li>
                      <li>Cặp giả thuyết 𝐻0: 𝜇 = 𝜇0, 𝐻1 : 𝜇 > 𝜇0 , khi đó p-value = 𝑃( 𝑇 > t)
                        <br>
                        Lệnh tính: > p-value &lt;- pt(t,n-1, ,lower.tail = FALSE)
                      </li>
                      <li>Cặp giả thuyết 𝐻0: 𝜇 = 𝜇0, 𝐻1 : 𝜇 &lt; 𝜇0 , khi đó p-value = 𝑃( 𝑇 &lt; t)
                        <br>
                        Lệnh tính: > p-value &lt;- pt(t,n-1)
                      </li>
                    </ul>
                  </li>
                  <li>Lệnh chạy chương trình:
                    <center>
                      <img src="./assets/img/PTTK/chap4/img5.png" alt="" class="w-100">
                      <img src="./assets/img/PTTK/chap4/img6.png" alt="" class="w-25">
                    </center>
                  </li>
                  <li>Ngoài ra ta còn có thể dùng cách lấy cột dữ liệu trực tiếp từ bảng igfdata.
                    <br>
                    Ví dụ: khi viết igfdata$age thì tương đương với biến age ta tạo ra trước đó
                  </li>
                  <li>
                    <center>
                      <img src="./assets/img/PTTK/chap4/img7.png" alt="" class="w-50">
                    </center>
                    <ul>
                      <li><u>Cách 1:</u> Với |t| = 2.33 và 𝑡_𝑐𝑟𝑖𝑡 = 1.9842 ta thấy 2.33 > 1.9842, do đó ta có thể kết luận bác bỏ 𝐻0 và chấp nhận 𝐻1,</li>
                      <li><u>Cách 2:</u> p-value = 0,02184 < &alpha; nên ta có thể kết luận bác bỏ 𝐻0.</li>
                      <li><b>Kết luận</b>: tuổi trung bình khác 17 tuổi</li>
                    </ul>
                  </li>
                  <li>
                    <center>
                      <img src="./assets/img/PTTK/chap4/img8.png" alt="" class="w-75">
                    </center>
                    <ul>
                      <li>Cách 1: So sánh |t| = 1.5533 với 𝑡_𝑐𝑟𝑖𝑡 = 1.984217 ta thấy 1.5533 < 1.984217, do đó ta không đủ cơ sở bác bỏ H<sub>0</sub></li>
                      <li>Cách 2: Với p-value = 0,1235 > &alpha; nên ta chưa đủ cơ sở bác bỏ H<sub>0</sub>.</li>
                      <li><b>Kết luận:</b> không đủ cơ sở bác bỏ: tuổi trung bình bằng 15 tuổi.</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            `],
            ['Kiểm định 2 mẫu cho giá trị trung bình', 'TKPTDL42', `
            <h4>Kiểm định 2 mẫu cho giá trị trung bình</h4>

            <ul>
              <li>Xét cùng một tính chất nhưng trong 2 tổng thể:</li>
              <li>Tổng thể 1: tính chất là biến ngẫu nhiên X có 𝐸(𝑋) = 𝜇<sub>𝑋</sub> , 𝑣𝑎𝑟(𝑋) = 𝜎<sup>2</sup><sub>X</sub></li>
              <li>Tổng thể 2: tính chất là biến ngẫu nhiên Y có 𝐸(Y) = 𝜇<sub>Y</sub> , 𝑣𝑎𝑟(Y) = 𝜎<sup>2</sup><sub>Y</sub>
              </li>
              <li>Mục tiêu: Kiểm định xem 𝜇<sub>𝑋</sub> và 𝜇<sub>𝑌</sub> có bằng nhau hay không?</li>
              <li>Cặp giả thuyết: 
                <br>
                𝐻<sub>0</sub>: 𝜇<sub>𝑋</sub> = 𝜇<sub>𝑌</sub> , 𝐻<sub>1</sub> : 𝜇<sub>𝑋</sub> ≠ 𝜇<sub>𝑌</sub>
                <br>
                Hoặc 𝐻<sub>0</sub>: 𝜇<sub>𝑋</sub> = 𝜇<sub>𝑌</sub> , 𝐻<sub>1</sub> : 𝜇<sub>𝑋</sub> &gt; 𝜇<sub>𝑌</sub>
                <br>
                Hoặc 𝐻<sub>0</sub>: 𝜇<sub>𝑋</sub> = 𝜇<sub>𝑌</sub> , 𝐻<sub>1</sub> : 𝜇<sub>𝑋</sub> &lt; 𝜇<sub>𝑌</sub>
              </li>
              <li>Ví dụ
                <ul>
                  <li>Điểm tốt nghiệp PTTH trung bình của năm nay có cao hơn năm ngoái không?</li>
                  <li>Năng suất trung bình của công nhân thuộc phân xưởng 1 và 2 có như nhau không?</li>
                  <li>Tuổi thọ trung bình của người Việt Nam và người Lào có như nhau không?</li>
                </ul>
              </li>
              <li>Lệnh kiểm định:
                <pre>
  t.test(x, y,
        alternative = c("two.sided", "less", "greater"),
        paired = {FALSE, TRUE}, var.equal = {FALSE, TRUE},
        conf.level = 0.95, ...)
                </pre>
              </li>
              <li>Ghi chú:
                <ul>
                  <li>Nếu không chọn alternative thì mặc định là two.sided</li>
                  <li>Nếu không chọn paired thì mặc định là FALSE</li>
                  <li>Nếu không chọn var.equal thì mặc định là FALSE</li>
                </ul>
              </li>
              <li>Quy trình kiểm định 2 mẫu:
                <br>
                Kiểm tra dữ liệu có dạng cặp không?
                <ul>
                  <li>Nếu dữ liệu là dạng cặp (𝑥<sub>𝑖</sub> , 𝑦<sub>𝑖</sub> ), ta dùng lệnh kiểm định với: paired = TRUE (Trường hợp 1)</li>
                  <li>Nếu dữ liệu không có dạng cặp tức là paired = FALSE, lúc này không cần khai báo cho paired
                    <br>
                    Ta kiểm tra 2 phương sai có bằng nhau không: var.test(x, y)
                    <br>
                    <ul>
                      <li>Nếu hai phương sai bằng nhau, ta dùng lệnh kiểm định với: var.equal = TRUE (Trường hợp 2)</li>
                      <li>Nếu hai phương sai bằng nhau, ta dùng lệnh kiểm định với: var.equal = FALSE (Trường hợp 3)</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><b>Ví dụ</b>: Trường hợp 1 – Dữ liệu cặp
              <pre>
  <span style="background-color: yellow;">> # nhập dữ liệu</span>
  > before &lt;- c(180, 140, 160, 160, 220, 185,
  145, 160, 160, 170)
  > after &lt;- c(170, 145, 145, 125, 205, 185,
  150, 150, 145, 155)
  > bp &lt;- data.frame(before, after)
  <span style="background-color: yellow;">> # kiểm định t với mức ý nghĩa  = 0.05</span>
  > t.test(before, after, paired=TRUE)
              </pre>
              </li>
              <li>p-value = 0,02 < &alpha; nên ta bác bỏ H<sub>0</sub> và chấp nhận H<sub>1</sub>. Hay hai trung bình không bằng nhau.</li>
              <li>Ví dụ: <span style="color: red;">Ta So sánh độ hormone igfi của nam và nữ có bằng nhau không với mức ý nghĩa &alpha; = 5%.</span>
              <br>
              <pre>
  <span style="background-color: yellow;">> # kiểm tra 2 phương sai có bằng nhau không?</span>
  > var.test(igfi~sex)
              </pre>
              </li>
              <li>
                p-value = 0,0762 > &alpha; nên có thể xem là 2 phương sai bằng nhau. Ta dùng Trường hợp 2.
                <pre>
  <span style="background-color: yellow;">> # So sánh 2 giá trị trung bình với TH2 hai phương sai bằng nhau.</span>
  > t.test(igfi~sex,var.equal = TRUE)
                </pre>
              </li>
              <li>
                p-value = 8,01e-12 < &alpha; nên ta nên ta bác bỏ H<sub>0</sub> và chấp nhận H<sub>1</sub>.
                <br>
                Hay hai trung bình không bằng nhau.
              </li>
              <li>Ví dụ: <span style="color: red;">Ta So sánh độ hormone igfi của nam và nữ có bằng nhau không với mức ý nghĩa &alpha; = 10%.</span>
                <br>
                <pre>
    <span style="background-color: yellow;">> # kiểm tra 2 phương sai có bằng nhau không?</span>
    > var.test(igfi~sex)
                </pre></li>
  
                <li>
                  p-value = 0,0762 < &alpha; nên có thể xem là 2 phương
  sai khác nhau. Ta dùng Trường hợp 3.
  <pre>
    <span style="background-color: yellow;">> # So sánh 2 giá trị trung bình với TH3 hai phương sai khác nhau.</span>
  > t.test(igfi~sex)
  </pre>
                </li>
                <li>p-value = 2.413e-12 < &alpha; nên ta nên ta bác bỏ H<sub>0</sub> và chấp nhận H<sub>1</sub>
                <br>
                Hay hai trung bình không bằng nhau
                </li>
            </ul>
            `]
        ]
    },
    TKPTDL05: {
        title: 'Kiểm định Wilcoxon',
        index: [
            ['Nội dung chính','TKPTDL51',`
            <p><b>Chú ý: Ta kiểm định cho biến ngẫu nhiên không tuân theo phân phối chuẩn. Kiểm định 2 giá trị trung bình có bằng nhau không.</b></p>

    <pre>
<span style="background-color: yellow;"># Kiểm tra biến als có tuân theo phân phối chuẩn không?</span>
> shapiro.test(als)
    </pre>

    <p>Do p-value nhỏ nên als không tuân theo phân phối chuẩn</p>

    <pre>
<span style="background-color: yellow;"># Kiểm định 2 giá trị trung bình có bằng nhau không?</span>
wilcox.test(als ~ sex)
    </pre>

    <ul>
      <li>Do p-value nhỏ nên ta bác bỏ 𝐻<sub>0</sub> và chấp nhận 𝐻<sub>1</sub></li>
      <li>Vậy als của nam và của nữ không bằng nhau</li>
    </ul>
            `]
        ]
    },
    TKPTDL06: {
        title: 'Kiểm định tỷ lệ',
        index: [
            ['Lập bảng tần số, tần suất', 'TKPTDL61', `
            <p><b>Lập bảng tần số, tần suất</b></p>
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse611" role="button" aria-expanded="false" aria-controls="collapse611">
                Tần số
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse612" role="button" aria-expanded="false" aria-controls="collapse612">
                Tần suất
              </a>
            </p>
  
            <div>
              <div class="collapse" id="collapse611">
                <div class="card card-body">
                  <ul>
                    <li>Lệnh tạo bảng tần số: <b style="color:red">table(...)</b></li>
                    <li><b>Ví dụ</b>: bảng tần số theo biến ethnicity, theo biến
                      sex, hoặc theo cả hai biến.</li>
                    <li>Dựa vào số liệu của 100 người ta có bảng số liệu
                      theo từng biến.</li>
                  </ul>
        
                  <center>
                    <img src="./assets/img/PTTK/chap4/img9.png" alt="" class="w-50">
                  </center>
        
                  <ul>
                    <li><b>Cách khác để xem bảng tần số</b>: <b style="color:red">margin.table(...)</b></li>
                    <li><b>Ví dụ</b>:
                    <pre>
        <span style="background-color: yellow;"># tạo ra một object tên là freq để chứa kết quả tần số</span>
        > freq <- table(ethnicity, sex)
        > margin.table(freq, 1)
        > margin.table(freq, 2)
                    </pre>
                    </li>
                  </ul>
                  <center>
                    <img src="./assets/img/PTTK/chap4/img10.png" alt="" class="w-50">
                  </center>
                </div>
              </div>
              <div class="collapse" id="collapse612">
                <div class="card card-body">
                  <p>Lệnh tạo bảng tần suất: dùng một trong hai lệnh sau</p>
                  <ul>
                    <li>proportions(x, margin = NULL)</li>
                    <li>prop.table(x, margin = NULL)</li>
                  </ul>
                  <p>Ví dụ: bảng tần suất theo biến ethnicity, theo biến sex, hoặc theo cả hai biến.</p>
                  <ul>
                    <li>proportions(freq): tính % cho cả bảng</li>
                    <li>proportions(freq,1): tính % theo biến 1 (ethnicity)</li>
                    <li>proportions(freq,2): tính % theo biến 2 (sex)</li>
                  </ul>
                  <center>
                    <img src="./assets/img/PTTK/chap4/img11.png" alt="" class="w-50">
                  </center>
                </div>
              </div>
            </div>
  
            `],
            ['Kiểm định 1 mẫu cho tỷ lệ', 'TKPTDL62', `
            <p><b>Kiểm định 1 mẫu cho tỷ lệ</b></p>
            <p>Lệnh kiểm định: dùng một trong hai lệnh sau</p>
            <ul>
              <li>
                <pre>
  prop.test(x, n, p = NULL,
            alternative = c("two.sided", "less", "greater"),
            conf.level = 0.95, correct = TRUE) prop.table(x, margin = NULL)
                </pre>
              </li>
              <li>
                <pre>
  binom.test(x, n, p = 0.5,
            alternative = c("two.sided", "less", "greater"),
            conf.level = 0.95)
                </pre>
              </li>
              <li>Ví dụ: theo biến sex thì trong 100 người có 56 nữ và 44 nam
                <br>
                <p>Liệu tỷ lệ nữ có chiểm hơn 50% hay không? (mặc định mức ý nghĩa &alpha; = 5%)</p>
                <pre>> prop.test(56,100,0.5,alternative = "greater")</pre>
                <ul>
                  <li>56 là số nữ</li>
                  <li>100 là số người khảo sát</li>
                  <li>p là tỷ lệ nữ: p<sub>0</sub> = 0.5</li>
                  <li>Đối thuyết H<sub>1</sub>: p > p<sub>0</sub></li>
                  <li>p-value = 0.1357 > &alpha;</li>
                  <li>Kết luận: không có cơ sở chấp nhận H<sub>1</sub></li>
                </ul>
                <p>Hay không thể khẳng định tỷ lệ nữ chiếm
                  hơn 50%</p>
                  <center>
                    <img src="./assets/img/PTTK/chap4/img12.png" alt="" class="w-50">
                  </center>
              </li>
            </ul>
  
            `],
            ['So sánh nhiều tỷ lệ', 'TKPTDL63', `
            <p><b>So sánh nhiều tỷ lệ</b></p>
            <p>Ví dụ: ta muốn biết tỷ lệ nữ giới giữa 3 nhóm sắc tộc có bằng nhau hay không? (mặc định mức ý nghĩa &alpha; = 5%)</p>
            <ul>
              <li>African: 26 nữ / 37 người</li>
              <li>Asian: 18 nữ / 39 người</li>
              <li>Caucasian: 12 nữ / 24 người
                <pre>
  > female &lt;- c(26,18,12)
  > total &lt;- c(37,39,24)
  > prop.test(female,total)
                </pre>
                <ul>
                  <li>p-value = 0.08446 > &alpha;</li>
                  <li>Kết luận: không có cơ sở chấp nhận H<sub>1</sub></li>
                </ul>
                Hay không có cơ sở bác bỏ tỷ lệ nữ giữa 3 nhóm sắc tộc bằng nhau.
  
                <br>
                <center>
                  <img src="./assets/img/PTTK/chap4/img13.png" alt="" class="w-50">
                </center>
              </li>
            </ul>
            `]
        ]
    },
    TKPTDL07: {
        title: 'Kiểm định tính độc lập của hai biến',
        index: [
            ['Nội dung chính', 'TKPTDL71', `
            <ul>
      <li>Mục tiêu: kiểm tra xem 2 biến có quan hệ với nhau không. (mức ý nghĩa &alpha;)</li>
      <li>Giả thuyết 𝐻<sub>0</sub>: hai biến độc lập với nhau</li>
      <li>Đối thuyết H<sub>1</sub> : hai biến có liên quan với nhau (không độc lập)
        <ul>
          <li>Nếu p-value ≤ &alpha;: bác bỏ 𝐻<sub>0</sub> và chấp nhận H<sub>1</sub></li>
          <li>Nếu p-value > &alpha;: không có cơ sở nào bác bỏ 𝐻<sub>0</sub></li>
        </ul>
      </li>
    </ul>

    <p>
      <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse71" role="button" aria-expanded="false" aria-controls="collapse71">
        Cách 1
      </a>
      <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse72" role="button" aria-expanded="false" aria-controls="collapse72">
        Cách 2
      </a>
    </p>

    <div>
      <div class="collapse" id="collapse71">
        <div class="card card-body">
          <p><b>Cách 1</b></p>
          <p><b>Cách 1</b> Dùng kiểm định <b style="color:red">chi bình phương</b></p>
          <ul>
            <li>Lệnh: <b style="color:red;">chisq.test()</b></li>
            <li>Ví dụ: ta kiểm tra xem 2 biến ethnicity và sex có độc lập với nhau hay không (mức ý nghĩa &alpha; = 0.01)?

              <br>
              Ta thấy p-value = 0.08446 &lt &alpha; nên ta bác bỏ H<sub>0</sub> và chấp nhận H<sub>1</sub>
              <br>
              Hay nói cách khác: hai biến này có liên quan đến nhau
              <center>
                <img src="./assets/img/PTTK/chap4/img14.png" alt="" class="w-50">
              </center>
            </li>
          </ul>
        </div>
      </div>
      <div class="collapse" id="collapse72">
        <div class="card card-body">
          <p><b>Cách 2</b>: Dùng kiểm định <b style="color:red;">Fisher</b></p>
          <ul>
            <li>Kiểm định Fisher là một sự thay thế hữu ích cho kiểm định chi bình phương khi tổng kích thước mẫu nhỏ (n &lt; 20) hoặc khi tần số trung bình của bảng dữ liệu có giá trị nào đó nhỏ hơn 5.</li>
            <li>Lệnh: <b>fisher.test()</b></li>
            <li>Ví dụ
              <br>
              Ví dụ: Ta tạo 2 biến col1 và col2, tạo bảng dữ liệu samp.
              Ta cần kiểm tra col1 và col2 có độc lập với nhau không (mức ý nghĩa 5%)?
              <br>
              Nhìn vào bảng samp ta thấy có nhiều giá trị thấp hơn 5.
              <br>
              Do p-value = 0.1567 > 0.05 nên không có cơ sở bác bỏ hai biến độc lập với nhau.
              <br>
              <center>
                <img src="./assets/img/PTTK/chap4/img15.png" alt="" class="w-75">
              </center>
            </li>
          </ul>
        </div>
      </div>
    </div>
            `]
        ]
    }
}