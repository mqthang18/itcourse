const HQTCSDL3 = {
  HQTCSDL01: {
    title: 'Các vấn đề trong truy xuất đồng thời',
    index: [
      ["Mất dữ liệu cập nhật (Lost Updated)", "HQTCSDL011", `
            <div>
              <p><b>Xét 2 giao tác T1 và T2 xử lý đồng thời:</b></p>
              <center>
                <img src="./assets/img/HQTCSDL/chap3/img1.png" class="col-12 col-sm-8" alt="">
              </center>
            </div>
            `],
      ["Không đọc lại được dữ liệu (Unrepeatable Read)", "HQTCSDL012", `
            <div>
        <p><b>Xét 2 giao tác T1 và T2 xử lý đồng thời</b></p>
        <center>
          <img src="./assets/img/HQTCSDL/chap3/img2.png" class="col-12 col-sm-8" alt="">
        </center>
      </div>
            `],
      ["Bóng ma dữ liệu (Phantom)", "HQTCSDL013", `
            <div>
        <p><b>Xét 2 giao tác T1 và T2 xử lý đồng thời</b></p>
        <center>
          <img src="./assets/img/HQTCSDL/chap3/img3.png" class="col-12 col-sm-8" alt="">
        </center>
      </div>
            `],
      ["Đọc phải dữ liệu rác (Dirty read)", "HQTCSDL014", `
            <div>
            <p><b>Xét 2 giao tác T1 và T2 xử lý đồng thời</b></p>
            <center>
              <img src="./assets/img/HQTCSDL/chap3/img4.png" class="col-12 col-sm-8" alt="">
            </center>
          </div>
            `],
      ["Nhận xét", "HQTCSDL015", `
            <div>
        <p><b>Các lỗi truy xuất đồng thời của các giao tác T1, ..., Tn là do:</b></p>
        <ul>
          <li>Kết quả của lịch tuần tự được lập từ các giao tác T1, ..., Tn và lịch
            đồng thời S từ các giao đó khác nhau: Không đảm bảo tính nhất
            quán dữ liệu.</li>
          <li>Lịch đồng thời S không phải là một lịch khả tuần tự.</li>
        </ul>
        <p><b>Câu hỏi</b></p>
        <ul>
          <li>Làm sao bộ lập lịch có thể tạo được một lịch S khả tuần tự ?</li>
        </ul>
        <center>
          <img src="./assets/img/HQTCSDL/chap3/img5.png" class="col-8 col-sm-8" alt="">
        </center>
      </div>
            `]
    ]
  },
  HQTCSDL02: {
    title: 'Các kỹ thuật điều khiển đồng thời',
    index: [
      ["Kỹ thuật khóa", "HQTCSDL021", `
            <p>
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse211" role="button" aria-expanded="false"
          aria-controls="collapse211">
          Khóa đơn giản
        </a>
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse212" role="button" aria-expanded="false"
          aria-controls="collapse212">
          Khóa đọc ghi
        </a>
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse213" role="button" aria-expanded="false"
          aria-controls="collapse213">
          Khóa đa hạt
        </a>
      </p>
      <div>
        <div class="collapse" id="collapse211">
          <div class="card card-body">
            <div>
              <p>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse2111" role="button"
                  aria-expanded="false" aria-controls="collapse2111">
                  Quy định
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse2112" role="button"
                  aria-expanded="false" aria-controls="collapse2112">
                  Bộ lập lịch với cơ chế khóa đơn giản
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse2113" role="button"
                  aria-expanded="false" aria-controls="collapse2113">
                  Quy tắc
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse2114" role="button"
                  aria-expanded="false" aria-controls="collapse2114">
                  Ví dụ
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse2115" role="button"
                  aria-expanded="false" aria-controls="collapse2115">
                  Bài toán: Kiểm tra tính khả tuần tự của lịch S
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse2116" role="button"
                  aria-expanded="false" aria-controls="collapse2116">
                  Phương pháp: Xây dựng đồ thị có hướng G
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse2117" role="button"
                  aria-expanded="false" aria-controls="collapse2117">
                  Phương pháp xây dựng đồ thị có hướng
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse2118" role="button" aria-expanded="false" aria-controls="collapse2118">
                  Nghi thức khóa 2 giai đoạn
                </a>
              </p>
              <div>
                <div class="collapse" id="collapse2111">
                  <div class="card card-body">
                    <ul>
                      <li>Một giao tác T trước khi muốn đọc / ghi lên 1 đơn vị dữ liệu A
                        phải phát ra yêu cầu xin khóa đơn vị dữ liệu đó: Lock(A) hay l(A)</li>
                      <li>Nếu yêu cầu được chấp thuận thì giao tác T mới được phép thao
                        tác lên đơn vị dữ liệu A.</li>
                      <li>Sau khi thao tác xong, giao tác T phải phát ra lệnh giải phóng đơn
                        vị dữ liệu A: Unlock(A) hay U(A)</li>
                    </ul>
                  </div>
                </div>
                <div class="collapse" id="collapse2112">
                  <div class="card card-body">
                    <center>
                      <img src="./assets/img/HQTCSDL/chap3/img6.png" class="col-6" alt="">
                    </center>
                  </div>
                </div>
                <div class="collapse" id="collapse2113">
                  <div class="card card-body">
                    <ol>
                      <li>Giao tác đúng đắn
                        <br>
                        <center>
                          <img src="./assets/img/HQTCSDL/chap3/img7.png" class="col-4" alt="">
                        </center>
                      </li>
                      <li>Lịch thao tác hợp lệ
                        <br>
                        <center>
                          <img src="./assets/img/HQTCSDL/chap3/img8.png" class="col-4" alt="">
                        </center>
                      </li>
                    </ol>
                  </div>
                </div>
                <div class="collapse" id="collapse2114">
                  <div class="card card-body">
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-12 col-sm-6">
                          <ul>
                            <li>Giao tác T1 và T2 có đúng đắn hay không ?</li>
                            <li>Lịch S1 có hợp lệ hay không ?</li>
                          </ul>
                        </div>
                        <div class="col-12 col-sm-6">
                          <center>
                            <img src="./assets/img/HQTCSDL/chap3/img9.png" class="col-12 col-sm-8" alt="">
                          </center>
                        </div>
                      </div>
                    </div>
                    <center>
                      <img src="./assets/img/HQTCSDL/chap3/img10.png" class="col-12" alt="">
                    </center>
                  </div>
                </div>
                <div class="collapse" id="collapse2115">
                  <div class="card card-body">
                    <ul>
                      <li><b>Input</b>: Lịch S được tập từ n giao tác xử lý đồng thời T<sub>1</sub>, T<sub>2</sub>, ...,
                        T<sub>n</sub> theo kỹ thuật khóa đơn giản</li>
                      <li><b>Output</b>: S khả tuần tự hay không?</li>
                    </ul>
                  </div>
                </div>
                <div class="collapse" id="collapse2116">
                  <div class="card card-body">
                    <ul>
                      <li><b>B1</b>: Mỗi giao tác T<sub>i</sub> là 1 đỉnh của đồ thị</li>
                      <li><b>B2</b>: Nếu một giao tác T<sub>j</sub> phát ra Lock<sub>j</sub>(A) sau một giao tác
                        T<sub>i</sub>
                        phát ra Unlock<sub>j</sub>(A) thì sẽ vẽ cung từ T<sub>i</sub> đến T<sub>j</sub>, i &ne; j</li>
                      <li>S khả tuần tự nếu G không có chu trình</li>
                    </ul>
                  </div>
                </div>
                <div class="collapse" id="collapse2117">
                  <div class="card card-body">
                    <center>
                      <img src="./assets/img/HQTCSDL/chap3/img11.png" class="col-12" alt="">
                    </center>
                  </div>
                </div>
                <div class="collapse" id="collapse2118">
                  <div class="card card-body">
                    <ul>
                      <li>Quy tắc
                        <ul>
                          <li>(1) và (2): Giống như cũ</li>
                          <li>(3): Giao tác phải thỏa nghi thức <b>khóa 2 giai đoạn (2PL: two phase locking)</b>. Trong 1
                            giao
                            tác, tất cả các thao tác phát khóa đều xảy ra trước tất cả các thao tác giải phóng khóa
                            <center>
                              <img src="./assets/img/HQTCSDL/chap3/img12.png" class="col-12 col-sm-10" alt="">
                            </center>
                          </li>
                        </ul>
                      </li>
                      <li>Nghi thức khóa 2 giai đoạn chia việc xin khóa và giải phóng khóa của giao tác thành 2 giai đoạn
                        (phase) phân biệt</li>
                      <li>Ví dụ: Giao tác nào thỏa nghi thức 2 giai đoạn?
                        <center>
                          <img src="./assets/img/HQTCSDL/chap3/img13.png" class="col-12 col-sm-8" alt="">
                        </center>
                      </li>
                      <li><b>Ví dụ</b>: Giao tác nào thỏa nghi thức 2 giai đoạn?
                        <center>
                          <img class="col-12 col-sm-8" src="./assets/img/HQTCSDL/chap3/img14.png" alt="">
                        </center>
                        <center>
                          <img class="col-12 col-sm-8" src="./assets/img/HQTCSDL/chap3/img15.png" alt="">
                        </center>
                      </li>
                      <li>Khóa chết (DEAD LOCK): Hiện tượng chờ <b style="color: red;">đợi lẫn nhau vĩnh viễn</b> không giao
                        tác
                        nào có thể hoàn thành được
                        <center>
                          <img src="./assets/img/HQTCSDL/chap3/img16.png" class="col-12 col-sm-8" alt="">
                        </center>
                      </li>
                      <li>Đồ thị chờ (WAIT-FOR GRAPH)
                        <ul>
                          <li>Đồ thị chờ gồm
                            <ul>
                              <li><b>Đỉnh</b>: là các giao tác đang giữ khóa hoặc đang chờ khóa</li>
                              <li><b>Cung</b> đi từ đỉnh T sang U khi
                                <ul>
                                  <li>U đang giữ khóa trên đơn vị dữ liệu A</li>
                                  <li>T đang chờ khóa trên A</li>
                                  <li>T không thể khóa đơn vị dữ liệu A nếu U không giải phóng khóa</li>
                                </ul>
                              </li>
                              <li>Nếu <b>đồ thị chờ không có chu trình</b> => Các giao tác có thể hoàn tất</li>
                              <li>Ngược lại
                                <ul style="list-style-type: '->';">
                                  <li>Không một giao tác nào trong chu trình có thể tiếp tục thực hiện</li>
                                  <li>deadlock</l\i>
                                </ul>
                              </li>
                            </ul>
                            <center>
                              <img class="col-12 col-sm-8" src="./assets/img/HQTCSDL/chap3/img17.png" alt="">
                            </center>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="collapse" id="collapse212">
          <div class="card card-body">
            <div>
              <p><b>Vấn đề tồn tại của 2 PL theo kỹ thuật khóa đơn giản</b></p>
              <ul>
                <li>Có những tình huống mà T<sub>i</sub> không thực sự cần phải ngăn cản một T<sub>i</sub> truy xuất đơn
                  vị
                  dữ liệu của nó, nhưng theo 2PL vẫn phải ngăn cản</li>
                <li>Không tối ưu về mặt tốc độ vì có những khoảng chờ không cần thiết, thậm chí gây nên deadlock
                </li>
              </ul>
              <center>
                <img src="./assets/img/HQTCSDL/chap3/img18.png" class="col-12" alt="">
              </center>
            </div>
            <div>
              <p><b>Read lock</b></p>
              <ul>
                <li>Ký hiệu: Rlock(A)</li>
                <li>Giao tác giữ Rlock được phép <b>"ĐỌC"</b> dữ liệu nhưng không được phép ghi</li>
                <li>Nhiều giao tác có thể đồng thời giữ Rlock trên cùng 1 đơn vị dữ liệu</li>
              </ul>
            </div>
            <div>
              <p><b>Write lock</b></p>
              <ul>
                <li>Ký hiệu: WLock(A)</li>
                <li>Giao tác giữ WLock được phép <b>"ĐỌC + GHI"</b> dữ liệu</li>
                <li>Tại 1 thời điểm chỉ có tối đa 1 giao tác được quyền giữ Wlock trên cùng 1 đơn vị dữ liệu</li>
                <li>Không thể thiết lập Rlock trên đơn vị dữ liệu đang có WLock</li>
              </ul>
            </div>
            <div>
              <p><b>Ma trận tương thích giữa các chế độ khóa</b></p>
              <center>
                <img src="./assets/img/HQTCSDL/chap3/img19.png" class="col-12" alt="">
              </center>
            </div>
            <div>
              <p><b>Qui tắc</b></p>
              <ol>
                <li>Giao tác đúng đắn
                  <center>
                    <img src="./assets/img/HQTCSDL/chap3/img29.png" class="col-12 col-sm-8" alt="">
                  </center>
                </li>
                <li>Lịch thao tác hợp lợi
                  <ul>
                    <li>Khi Ti đang giữ khóa đọc trên 1 đơn vị Dữ liệu A thì không một Tj nào khác được phép ghi trên A
                    </li>
                    <li>Khi Ti đang giữ khóa ghi trên 1 đơn vị Dữ liệu A thì không một Tj nào khác được phép đọc hay ghi
                      trên A</li>
                  </ul>
                </li>
                <li>Giao tác 2PL
                  <p>Ngoại trừ trường hợp nâng cấp khóa, các trường hợp còn lại đều giống với nghi thức khóa hai giai
                    đoạn
                  </p>
                  <center>
                    <img src="./assets/img/HQTCSDL/chap3/img20.png" class="col-12 col-sm-8" alt="">
                  </center>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div class="collapse" id="collapse213">
          <div class="card card-body">
            <center>
              <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vQyTVZMP4S3J8JMkkK2Sfn-Zs5YNG6BAxqUBFB3280FPtKPEuEuMoUV9xOE1IDFKLiLh-aN6B6VTPlB/embed?start=false&loop=false&delayms=3000"
                frameborder="0" height="569" allowfullscreen="true" mozallowfullscreen="true"
                webkitallowfullscreen="true" class="col-12 col-sm-11"></iframe>
            </center>
          </div>
        </div>
      </div>
            `],
      ["Kỹ thuật khóa trong SQL Server", "HQTCSDL022", `
            <p>
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse221" role="button" aria-expanded="false"
          aria-controls="collapse221">
          Mức cô lập trong giao tác
        </a>
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse222" role="button" aria-expanded="false"
          aria-controls="collapse222">
          Khóa trực tiếp trong câu lệnh
        </a>
      </p>
      <div>
        <div class="collapse" id="collapse221">
            <div class="card card-body">
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse2211" role="button"
                aria-expanded="false" aria-controls="collapse2211">
                Giới thiệu
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse2212" role="button"
                aria-expanded="false" aria-controls="collapse2212">
                Ví dụ
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse2213" role="button"
                aria-expanded="false" aria-controls="collapse2213">
                Chi tiết các mức cô lập
              </a>
            </p>
            <div>
            <div class="collapse" id="collapse2211">
              <div class="card card-body">
                <center>
                  <video class="col-12 col-sm-8" controls>
                    <source
                      src="https://s3.cloud.cmctelecom.vn/tvu/IT/220060_HeQuanTriCSDL/Video/Ly%20thuyet/Chuong3_P3.mp4#t=0,158"
                      type="video/mp4">
                    <!-- Your browser does not support the video tag. -->
                  </video>
                </center>
              </div>
            </div>
            <div class="collapse" id="collapse2212">
              <div class="card card-body">
                <center>
                  <video class="col-12 col-sm-8" controls>
                    <source
                      src="https://s3.cloud.cmctelecom.vn/tvu/IT/220060_HeQuanTriCSDL/Video/Ly%20thuyet/Chuong3_P3.mp4#t=158,224"
                      type="video/mp4">
                    <!-- Your browser does not support the video tag. -->
                  </video>
                </center>
              </div>
            </div>
            <div class="collapse" id="collapse2213">
              <div class="card card-body">
                <p>
                  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse22131" role="button"
                    aria-expanded="false" aria-controls="collapse22131">
                    Read Uncommitted
                  </a>
                  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse22132" role="button"
                    aria-expanded="false" aria-controls="collapse22132">
                    Read Committed
                  </a>
                  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse22133" role="button"
                    aria-expanded="false" aria-controls="collapse22133">
                    Repeatable read
                  </a>
                  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse22134" role="button"
                    aria-expanded="false" aria-controls="collapse22134">
                    Serializable
                  </a>
                  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse22135" role="button"
                    aria-expanded="false" aria-controls="collapse22135">
                    Tóm tắt và lưu ý
                  </a>
                </p>
                <div>
                  <div class="collapse" id="collapse22131">
                    <div class="card card-body">
                      <video class="col-12 col-sm-8" controls>
                        <source
                          src="https://s3.cloud.cmctelecom.vn/tvu/IT/220060_HeQuanTriCSDL/Video/Ly%20thuyet/Chuong3_P3.mp4#t=225,1090"
                          type="video/mp4">
                        <!-- Your browser does not support the video tag. -->
                      </video>
                    </div>
                  </div>
                  <div class="collapse" id="collapse22132">
                    <div class="card card-body">
                      <center>
                        <video class="col-12 col-sm-8" controls>
                          <source
                            src="https://s3.cloud.cmctelecom.vn/tvu/IT/220060_HeQuanTriCSDL/Video/Ly%20thuyet/Chuong3_P3.mp4#t=1094,1750"
                            type="video/mp4">
                          <!-- Your browser does not support the video tag. -->
                        </video>
                      </center>
                    </div>
                  </div>
                  <div class="collapse" id="collapse22133">
                    <div class="card card-body">
                      <center>
                        <video class="col-12 col-sm-8" controls>
                          <source
                            src="https://s3.cloud.cmctelecom.vn/tvu/IT/220060_HeQuanTriCSDL/Video/Ly%20thuyet/Chuong3_P3.mp4#t=1750,2278"
                            type="video/mp4">
                          <!-- Your browser does not support the video tag. -->
                        </video>
                      </center>
                    </div>
                  </div>
                  <div class="collapse" id="collapse22134">
                    <div class="card card-body">
                      <center>
                        <video class="col-12 col-sm-8" controls>
                          <source
                            src="https://s3.cloud.cmctelecom.vn/tvu/IT/220060_HeQuanTriCSDL/Video/Ly%20thuyet/Chuong3_P3.mp4#t=2278,2580"
                            type="video/mp4">
                          <!-- Your browser does not support the video tag. -->
                        </video>
                      </center>
                    </div>
                  </div>
                  <div class="collapse" id="collapse22135">
                    <div class="card card-body">
                      <center>
                        <video class="col-12 col-sm-8" controls>
                          <source
                            src="https://s3.cloud.cmctelecom.vn/tvu/IT/220060_HeQuanTriCSDL/Video/Ly%20thuyet/Chuong3_P3.mp4#t=2580,2870"
                            type="video/mp4">
                          <!-- Your browser does not support the video tag. -->
                        </video>
                      </center>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="collapse" id="collapse222">
          <div class="card card-body">
            <center>
              <video class="col-12 col-sm-8" controls>
                <source
                  src="https://s3.cloud.cmctelecom.vn/tvu/IT/220060_HeQuanTriCSDL/Video/Ly%20thuyet/Chuong3_P3.mp4#t=2866"
                  type="video/mp4">
                <!-- Your browser does not support the video tag. -->
              </video>
            </center>
          </div>
        </div>
      <script>
        let vid = document.getElementsByTagName("video");
    
    
        Object.keys(vid).forEach(element => {
          vid[element].playbackRate = 1.75
        });
      </script>
            `],
      ["Kỹ thuật nhãn thời gian", "HQTCSDL023", `
      <p>
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#HQTCSDL0231" role="button" aria-expanded="false" aria-controls="collapseExample">
          Slide
        </a>
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#HQTCSDL0232" role="button" aria-expanded="false" aria-controls="collapseExample">
          Video
        </a>
    
      </p>
      <div>
      <div class="collapse" id="HQTCSDL0231">
        <div class="card card-body">
          <center>
            <iframe 
            src="https://docs.google.com/presentation/d/e/2PACX-1vQUGQA9-D0d5HBtN3wYXRi716Ki5JDU2QuBcj3vjGlpSmh6qfWUxEceBshBOwuGMB2Rnlpafgqn00xs/embed?start=false&loop=false&delayms=3000" 
            frameborder="0" class="col-12" height="600" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
          </center>
        </div>
      </div>
      <div class="collapse" id="HQTCSDL0232">
        <div class="card card-body">
          <p>
            <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#HQTCSDL02321" role="button" aria-expanded="false" aria-controls="collapseExample">
              Nhãn thời gian toàn phần
            </a>
            <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#HQTCSDL02322" role="button" aria-expanded="false" aria-controls="collapseExample">
            Nhãn thời gian riêng phần
            </a>
            <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#HQTCSDL02323" role="button" aria-expanded="false" aria-controls="collapseExample">
            Nhãn thời gian nhiều phiên bản
            </a>
          </p>
          <div class="collapse" id="HQTCSDL02321">
            <div class="card card-body">
              <center>
              <video class="col-12" controls>
              <source 
                src="https://s3.cloud.cmctelecom.vn/tvu/IT/220060_HeQuanTriCSDL/Video/Ly%20thuyet/Chuong3_P4.mp4#t=0,828"
                type="video/mp4"
              />
            </video>
              </center>
            </div>
          </div>
          <div class="collapse" id="HQTCSDL02322">
            <div class="card card-body">
              <center>
              <video class="col-12" controls>
              <source 
                src="https://s3.cloud.cmctelecom.vn/tvu/IT/220060_HeQuanTriCSDL/Video/Ly%20thuyet/Chuong3_P4.mp4#t=828,1674"
                type="video/mp4"
              />
            </video>
              </center>
            </div>
          </div>
          <div class="collapse" id="HQTCSDL02323">
            <div class="card card-body">
              <center>
              <video class="col-12" controls>
              <source 
                src="https://s3.cloud.cmctelecom.vn/tvu/IT/220060_HeQuanTriCSDL/Video/Ly%20thuyet/Chuong3_P4.mp4#t=1674"
                type="video/mp4"
              />
            </video>
              </center>
            </div>
          </div>
        </div>
      </div>
      </div>

            
            `]
    ]
  },
  HQTCSDL04: {
    title: 'Tổng kết',
    index: [
      ["Video bài giảng", "HQTCSDL041", `
                <div>
                    <p>Lý thuyết 1: <a target="__blank" href="https://s3.cloud.cmctelecom.vn/tvu/IT/220060_HeQuanTriCSDL/Video/Ly%20thuyet/Chuong3_P1.mp4">Click here</a></p>
                    <p>Lý thuyết 2: <a target="__blank" href="https://s3.cloud.cmctelecom.vn/tvu/IT/220060_HeQuanTriCSDL/Video/Ly%20thuyet/Chuong3_P2.mp4">Click here</a></p>
                    <p>Lý thuyết 3: <a target="__blank" href="https://s3.cloud.cmctelecom.vn/tvu/IT/220060_HeQuanTriCSDL/Video/Ly%20thuyet/Chuong3_P3.mp4">Click here</a></p>
                    <p>Lý thuyết 4: <a target="__blank" href="https://s3.cloud.cmctelecom.vn/tvu/IT/220060_HeQuanTriCSDL/Video/Ly%20thuyet/Chuong3_P4.mp4">Click here</a></p>
                    <p>Thực hành 1: <a target="__blank" href="https://s3.cloud.cmctelecom.vn/tvu/IT/220060_HeQuanTriCSDL/Video/Thuc%20hanh/Chuong3_Thuchanh_P1.mp4">Click here</a></p>
                    <p>Thực hành 2: <a target="__blank" href="https://s3.cloud.cmctelecom.vn/tvu/IT/220060_HeQuanTriCSDL/Video/Thuc%20hanh/Chuong3_Thuchanh_P2.mp4">Click here</a></p>
                </div>
            `]
    ]
  }
}


