var TKPTDL1 = {
    TKPTDL1: {
        title: 'Bổ túc về giải tích kết hợp',
        index: [
            ['Quy tắc cộng','TKPTDL11',`
            <p><b>Quy tắc cộng</b></p>
            <p>Một công việc có thể được thực hiện bằng một trong k giải pháp</p>
            <ul>
              <li>Giải pháp thứ 1 có n<sub>1</sub> cách thực hiện</li>
              <li>Giải pháp thứ 2 có n<sub>2</sub> cách thực hiện</li>
              <li>...</li>
              <li>Giải pháp thứ k có n<sub>k</sub> cách thực hiện</li>
            </ul>
            <p>Khi đó sẽ có n<sub>1</sub> + n<sub>2</sub> + ... + n<sub>k</sub> cách thực hiện công việc trên.</p>
            <p>Ví dụ: Một người đi mua bàn ăn. Cửa hàng có 3 loại chất liệu:
              bàn gỗ, bàn sắt, bàn inox. Bàn gỗ có 3 kiểu dáng, bàn sắt có 4
              kiểu dáng, bàn inox có 6 kiểu dáng. Hỏi người đi mua có bao nhiêu cách lựa chọn bàn ăn?</p>
            <p><b>Đáp án:</b> Có 3 giải pháp chọn bàn</p>
            <ul>
              <li>Chọn bàn gỗ: 3 cách chọn;</li>
              <li>Chọn bàn sắt: 4 cách chọn;</li>
              <li>Chọn bàn inox: 6 cách chọn.</li>
            </ul>
            <p>Như vậy có 3 + 4 + 6 = 13 cách chọn bàn.</p>
            `],
            ['Quy tắc nhân','TKPTDL12',`
            <p><b>Quy tắc nhân</b></p>
            <ul>
              <li>Một công việc được chia làm k giai đoạn thực hiện (thực
                hiện cả k giai đoạn thì xong công việc).
                <ul>
                  <li>Giai đoạn thứ 1 có n<sub>1</sub> cách thực hiện</li>
                  <li>Giai đoạn thứ 2 có n<sub>2</sub> cách thực hiện</li>
                  <li>...</li>
                  <li>Giải pháp thứ k có n<sub>k</sub> cách thực hiện</li>
                </ul>
                <p>Khi đó sẽ có n<sub>1</sub>.n<sub>2</sub>...n<sub>k</sub> cách thực hiện công việc trên</p>
              </li>
            </ul>
            <p>Ví dụ: Một người có 5 áo, 4 quần và 2 đôi giầy. Mỗi lần ra
              đường người này dung 1 áo, 1 quần và 1 đôi giầy. Hỏi có
              bao nhiêu cách thực hiện?</p>
            <p><b>Đáp án</b>: Có 3 bước cần thực hiện</p>
            <ul>
              <li>Bước 1: chọn áo có 5 cách;</li>
              <li>Bước 2: chọn quần có 4 cách;</li>
              <li>Bước 3: chọn giầy có 2 cách.</li>
            </ul>
            <p>Như vậy có 5 × 4 × 2 = 40 cách chọn đồ.</p>
            `],
            ['Giải tích kết hợp','TKPTDL13',`
            <p><b>Giải tích kết hợp</b></p>
            <center>
              <img class="w-100" src="./assets/img/LTUDWindows/Chap1/img33.png" alt="">
            </center>
    
            <p>Ta có một tập hợp gồm n phần tử. Ta cần lấy ra một nhóm có k phần tử. Ta quan tâm đến có bao nhiêu nhóm được
              tạo nên.</p>
            <p>Có 2 điều kiện để phân biệt cách tính số nhóm được tạo nên khi lấy k phần tử:</p>
    
            <ul>
              <li>Việc lấy k phần tử có thứ tự không? Lấy có thứ tự là việc cùng lấy k phần tử nhưng theo thứ tự khác nhau
                thì kết quả thu được khác nhau.
                <br>
                Ví dụ: Lấy 2 chữ số cuối của giải đặc biệt làm kết quả số đề. Hai chữ số được lấy trong 10 chữ số {0, 1,
                ...,
                9}. Khi đó ví dụ nếu lấy 2 chữ số 1 và 2 theo thứ tự khác nhau ta được 2 kết quả khác nhau là 12 và 21.
                Đây là lấy 2 chữ số có thứ tự từ 10 chữ số.
              </li>
              <li>Việc lấy k phần tử có lặp lại không? Nếu một phần tử có thể được lấy nhiều lần thì là có lặp lại. Nếu mỗi
                phần tử đã được chọn thì không được lấy lại nữa, khi đó được gọi là không lặp lại.
                <br>
                Ví dụ: Lấy 2 chữ số cuối của giải đặc biệt làm kết quả số đề. Hai chữ số được lấy trong 10 chữ số {0, 1,
                ...,
                9}. Kết quả 11 thể hiện chữ số 1 được lấy lặp lại. Do đó đây là việc lấy 2 chữ số trong 10 chữ số có lặp
                lại.
              </li>
            </ul>
    
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse331" role="button" aria-expanded="false"
                aria-controls="collapse331">
                Chỉnh hợp lặp
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse332" role="button" aria-expanded="false"
                aria-controls="collapse332">
                Chỉnh hợp
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse333" role="button" aria-expanded="false"
                aria-controls="collapse333">
                Hoán vị
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse334" role="button" aria-expanded="false"
                aria-controls="collapse334">
                Tổ hợp
              </a>
            </p>
    
            <div>
              <div class="collapse" id="collapse331">
                <div class="card card-body">
                  <p><b>Chỉnh hợp lặp</b></p>
                  <p><b>Chỉnh hợp lặp:</b> Chỉnh hợp lặp chập k của n phần tử là một nhóm <b style="color: red;">có thứ
                      tự</b> gồm k phần tử chọn từ n phần tử đã cho, trong đó mỗi phần tử có thể lấy <b
                      style="color: red;">lặp lại</b>.</p>
                  <ul>
                    <li>Ký hiệu: <img src="./assets/img/PTTK/chap1/img1.png" alt=""></li>
                    <li>Công thức tính: <img src="./assets/img/PTTK/chap1/img2.png" alt=""></li>
                    <li>Ví dụ: Lấy 2 chữ số cuối của giải đặc biệt làm kết quả số đề. Hỏi có bao nhiêu kết quả xảy ra? Bài
                      làm: Đây là bài toán lấy 2 chữ số trong 10 chữ số {0, 1, ..., 9} có thứ tự và có lặp lại. Nên ta có
                      kết quả
                      <br>
                      <center>
                        <img src="./assets/img/PTTK/chap1/img3.png" alt="">
                      </center>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="collapse" id="collapse332">
                <div class="card card-body">
                  <p><b>Chỉnh hợp</b></p>
                  <p>Chỉnh hợp lặp chập k của n phần tử (k &le; n) là một nhóm có thứ tự gồm k phần tử chọn từ n phần tử đã
                    cho, trong đó các phần tử không lấy lặp lại.</p>
                  <ul>
                    <li>Ký hiệu: <img src="./assets/img/PTTK/chap1/img1.png" alt=""></li>
                    <li>Công thức tính: <img src="./assets/img/PTTK/chap1/img5.png" alt=""></li>
                    <li>
                      Ví dụ: Một nhóm gồm 10 thành viên cần chọn 2 thành viên làm trưởng nhóm và phó nhóm. Có bao nhiêu
                      trường hợp có thể xảy ra?
                      <br>
                      Bài làm: Chọn 2 người trong 10 người: có thứ tự (vì A trưởng B phó khác với B trưởng A phó), không lặp
                      lại
                      Nên ta có kết quả:
                      <center>
                        <img src="./assets/img/PTTK/chap1/img4.png" alt="">
                      </center>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="collapse" id="collapse333">
                <div class="card card-body">
                  <p><b>Hoán vị</b></p>
                  <p>Hoán vị của n phần tử là một nhóm có thứ tự, không lặp lại gồm đủ n phần tử ban đầu. Hoán vị chỉ là
                    trường hợp riêng của chỉnh hợp khi k = n</p>
                  <ul>
                    <li>Ký hiệu: P<sub>n</sub></li>
                    <li>Công thức tính: <img src="./assets/img/PTTK/chap1/img6.png" alt=""></li>
                    <li>Ví dụ: Xếp 10 người vào một hàng ghế dài có 10 chỗ. Hỏi có bao nhiêu cách xếp?
                      <br>
                      Bài làm: 10 người xếp vào 10 ghế nên đảm bảo việc người được xếp không lặp lại và có thứ tự.
                      Nên ta có kết quả:
                      <br>
                      <center>
                        <p>P<sub>n</sub> = 10! = 36288000</p>
                      </center>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="collapse" id="collapse334">
                <div class="card card-body">
                  <p><b>Tổ hợp</b></p>
                  <p>Tổ hợp lặp chập k của n phần tử (k &le; n) là một nhóm không có thứ tự gồm k phần tử chọn từ n phần tử
                    đã cho, trong đó các phần tử không lấy lặp lại.</p>
                  <ul>
                    <li>Ký hiệu: <img src="./assets/img/PTTK/chap1/img9.png" alt=""></li>
                    <li>Công thức tính: <img src="./assets/img/PTTK/chap1/img8.png" alt=""></li>
                    <li>
                      Ví dụ: Từ bộ bài tú lơ khơ 52 cây đã trộn kỹ rút ngẫu nhiên ra 2 cây bài. Có bao nhiêu trường hợp xảy
                      ra với 2 cây bài rút được.
                      <br>
                      Bài làm: Rút ngẫu nhiên 2 cây từ bộ bài tương đương với lấy 2 phần tử trong 52 phần tử thỏa mãn lấy
                      không quan tâm thứ tự và không lặp lại.
                      <br>
                      Nên ta có kết quả
                      <br>
                      <center>
                        <img src="./assets/img/PTTK/chap1/img7.png" alt="">
                      </center>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            `],
        ]
    },
    TKPTDL2: {
        title: 'Biến cố và quan hệ giữa các biến cố',
        index: [
            ['Biến cố','TKPTDL21',`
            <p><b>Biến cố</b></p>
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse411" role="button" aria-expanded="false"
                aria-controls="collapse411">
                Một số khái niệm
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse412" role="button" aria-expanded="false"
                aria-controls="collapse412">
                Phân loại biến cố
              </a>
            </p>
            <div>
              <div class="collapse" id="collapse411">
                <div class="card card-body">
                  <p><b>Một số khái niệm</b></p>
                  <ul>
                    <li>Phép thử là một thí nghiệm mà ta không đoán trước được kết quả, tuy nhiên ta có thể xác định được
                      tập hợp tất cả các kết quả có thể của phép thử đó.</li>
                    <li>Không gian mẫu là tập hợp gồm tất cả các kết quả có thể có của phép thử. Ký hiệu là Ω.</li>
                    <li>Ví dụ:
                      <ul>
                        <li>Phép thử: Tung một đồng xu thì Ω = {sấp; ngửa}</li>
                        <li>Phép thử: Xét điểm tổng kết môn học của sinh viên, Ω = {A, B, C, D, F}</li>
                        <li>Phép thử: Rút ngẫu nhiên một cây bài từ bộ bài tú lơ khơ 52 cây thì Ω có 52 trường hợp xảy ra
                          ứng với 52 cây bài.</li>
                      </ul>
                    </li>
                    <li>Biến cố là tập con của không gian mẫu.</li>
                    <li>Ta có thể hiểu đơn giản hơn: biến cố là một kết quả mà ta quan tâm.</li>
                    <li>Ký hiệu biến cố bằng chữ cái in: A, B, C, ...</li>
                    <li>Ví dụ
                      <ul>
                        <li>A: “Hôm nay trời có mưa”</li>
                        <li>B: “Hôm nay thị trường chứng khoán sẽ tăng điểm”</li>
                        <li>C: “Hôm nay bán được hàng”</li>
                        <li>D: “Gieo xúc xắc được mặt 6 chấm”</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="collapse" id="collapse412">
                <div class="card card-body">
                  <p><b>Phân loại biến cố</b></p>
                  <p>
                    <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse4121" role="button"
                      aria-expanded="false" aria-controls="collapse4121">
                      Biến cố sơ cấp
                    </a>
                    <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse4122" role="button"
                      aria-expanded="false" aria-controls="collapse4122">
                      Biến cố chắc chắn
                    </a>
                    <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse4123" role="button"
                      aria-expanded="false" aria-controls="collapse4123">
                      Biến cố không thể
                    </a>
                    <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse4124" role="button"
                      aria-expanded="false" aria-controls="collapse4124">
                      Biến cố ngẫu nhiên
                    </a>
                    <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse4125" role="button"
                      aria-expanded="false" aria-controls="collapse4125">
                      Biến cố xung khắc
                    </a>
                    <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse4126" role="button"
                      aria-expanded="false" aria-controls="collapse4126">
                      Biến cố tổng
                    </a>
                    <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse4127" role="button"
                      aria-expanded="false" aria-controls="collapse4127">
                      Biến cố tích
                    </a>
                    <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse4128" role="button"
                      aria-expanded="false" aria-controls="collapse4128">
                      Biến cố đối lập
                    </a>
                    <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse4129" role="button"
                      aria-expanded="false" aria-controls="collapse4129">
                      Biến cố hiệu
                    </a>
                    <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse41210" role="button"
                      aria-expanded="false" aria-controls="collapse41210">
                      Hai biến cố xung khắc
                    </a>
                  </p>
                  <div>
                    <div class="collapse" id="collapse4121">
                      <div class="card card-body">
                        <p>Biến cố sơ cấp: là biến cố không thể phân tích được nữa.</p>
                        <p>Ví dụ: Phép thử là gieo xúc xắc 1 lần. Biến cố sơ cấp: A: “Ra mặt 1 chấm”, B: “Ra mặt 2 chấm”.
                        </p>
                      </div>
                    </div>
                    <div class="collapse" id="collapse4122">
                      <div class="card card-body">
                        <p>Biến cố chắc chắn (&#8486;): là biến cố nhất định sẽ xảy ra khi thực hiện phép thử.</p>
                        <p>Ví dụ: &#8486;: “gieo xúc xắc được mặt có số chấm lớn hơn 0 và nhỏ hơn 7”.</p>
                      </div>
                    </div>
                    <div class="collapse" id="collapse4123">
                      <div class="card card-body">
                        <p>Biến cố không thể (<img src="./assets/img/PTTK/chap1/img10.png">): là biến cố nhất định không
                          xảy ra khi thực hiện phép thử.</p>
                        Ví dụ: &#8486;: “gieo xúc xắc được mặt có số chấm là 7”.
                      </div>
                    </div>
                    <div class="collapse" id="collapse4124">
                      <div class="card card-body">
                        <p><b>Biến cố ngẫu nhiên</b></p>
                        <p>
                          Biến cố ngẫu nhiên: là biến có thể xảy ra hoặc không xảy ra khi thực hiện phép thử.
                        </p>
                        <p>
                          Ví dụ: H: “Gieo xúc xắc được mặt chẵn”, K: “Gieo xúc xắc được mặt có số chấm nhỏ hơn 3”
                        </p>
                      </div>
                    </div>
                    <div class="collapse" id="collapse4125">
                      <div class="card card-body">
                        <p>Biến cố xung khắc: hai biến cố A và B được gọi là xung khắc nếu chúng không đồng thời xảy ra
                          trong một phép thử.</p>
                        <p>Ví dụ: A và H là 2 biến cố xung khắc, tức là gieo xúc xắc thì không thể vừa ra mặt 1 chấm vừa
                          ra mặt chẵn.</p>
                      </div>
                    </div>
                    <div class="collapse" id="collapse4126">
                      <div class="card card-body">
                        <p><b>Biến cố tổng</b></p>
                        <p>Biến cố C được gọi là tổng của 2 biến cố A và B, ký hiệu là C = A + B, nếu C xảy ra khi và chỉ
                          khi ít nhất một trong 2 biến cố A và B xảy ra.</p>
                        <p>Tổng quát: Tổng của n biến cố A<sub>1</sub>, A<sub>2</sub>, ..., A<sub>n</sub> là biến cố mà nó
                          xảy ra khi có ít nhất một trong n biến cố trên xảy ra.</p>
                        <p>Ký hiệu</p>
                        <center>
                          <img src="./assets/img/PTTK/chap1/img11.png" alt="">
                        </center>
                        <p>Ví dụ: A, B, C lần lượt là biến cố người X đã đi du lịch đến Hà Nội, Nha Trang, TP Hồ Chí Minh.
                          Khi đó biến cố P = A + B + C được hiểu là người X đã đi du lịch đến ít nhất một trong 3 địa điểm
                          trên.</p>
                        <center>
                          <img src="./assets/img/PTTK/chap1/img12.png" alt="">
                        </center>
                      </div>
                    </div>
                    <div class="collapse" id="collapse4127">
                      <div class="card card-body">
                        <p><b>Biến cố tích</b></p>
                        <p>Biến cố C được gọi là tích của 2 biến cố A và B, ký hiệu là C = AB, nếu C xảy ra khi và chỉ khi
                          cả hai biến cố A và B cùng xảy ra.</p>
                        <p>Tổng quát: Tích của n biến cố A<sub>1</sub>, A<sub>2</sub>, ..., A<sub>n</sub> là biến cố mà nó
                          xảy ra khi cả n biến cố trên cùng xảy ra.</p>
                        <p>Ký hiệu: <img src="./assets/img/PTTK/chap1/img13.png" alt=""></p>
                        <p>Ví dụ: A, B, C lần lượt là biến cố người X đã đi du lịch đến Hà Nội, Nha Trang, TP Hồ Chí Minh.
                          Khi đó biến cố Q = A.B.C được hiểu là người X đã đi du lịch đến cả 3 địa điểm trên.</p>
                        <center>
                          <img src="./assets/img/PTTK/chap1/img14.png" alt="">
                        </center>
                        <p>Ví dụ: A, B, C lần lượt là biến cố người X đã đi du lịch đến Hà Nội, Nha Trang, TP Hồ Chí Minh.
                          Khi đó biến cố Q = A.B.C được hiểu là người X đã đi du lịch đến cả 3 địa điểm trên.</p>
                      </div>
                    </div>
                    <div class="collapse" id="collapse4128">
                      <div class="card card-body">
                        <p><b>Biến cố đối lập</b></p>
                        <p>Biến cố đối lập của biến cố A, ký hiệu là <span style="border-top: 1px solid;">A</span>, xảy ra
                          khi biến cố A không xảy ra.</p>
                        <p>Ta có:</p>
                        <center>
                          <img src="./assets/img/PTTK/chap1/img15.png" alt="">
                        </center>
                        <p>Ví dụ</p>
                        <ul>
                          <li>A: “gieo xúc xắc được mặt 1 chấm”,</li>
                          <li><span style="border-top: 1px solid;">A</span>: : “gieo xúc xắc không được mặt 2 chấm”</li>
                          <li>B: “Hôm nay thị trường chứng khoán sẽ tăng điểm”</li>
                          <li><span style="border-top: 1px solid;">B</span>: “Hôm nay thị trường chứng khoán sẽ không tăng
                            điểm”</li>
                        </ul>
                        <center>
                          <img src="./assets/img/PTTK/chap1/img16.png" alt="">
                        </center>
                      </div>
                    </div>
                    <div class="collapse" id="collapse4129">
                      <div class="card card-body">
                        <p><b>Biến cố hiệu</b></p>
                        <p>Hiệu của 2 biến cố A và B, ký hiệu là A – B, là biến cố xảy ra khi và chỉ khi A xảy ra nhưng B
                          không xảy ra.</p>
                        <p>Ta biến đổi: A - B = A.<span style="border-top: 1px solid;">B</span></p>
                        <p>Ví dụ</p>
                        <ul>
                          <li>A: “gieo xúc xắc được mặt chẵn”,</li>
                          <li>B: “gieo xúc xắc được mặt có số chấm nhỏ hơn 3”</li>
                          <li>Khi đó C = A – B: “gieo xúc xắc được mặt 4 chấm hoặc 6 chấm”</li>
                        </ul>
                        <center>
                          <img src="./assets/img/PTTK/chap1/img17.png" alt="">
                        </center>
                      </div>
                    </div>
                    <div class="collapse" id="collapse41210">
                      <div class="card card-body">
                        <p><b>Hai biến cố xung khắc</b></p>
                        <p>A và B là hai biến cố xung khắc với nhau
                          nếu hai biến cố không thể cùng xảy ra, hay AB = <img src="./assets/img/PTTK/chap1/img10.png"
                            alt=""></p>
                        <p>Các biến cố xung khắc từng đôi: A<sub>1</sub>, A<sub>2</sub>, ..., A<sub>n</sub> được gọi là n
                          biến cố xung khắc từng đôi nếu 2 biến cố khác nhau thì luôn xung khắc với nhau, hay
                          A<sub>i</sub>.A<sub>j</sub> = <img src="./assets/img/PTTK/chap1/img10.png" alt="">,
                          &forall;i&ne;j</p>
                        <center>
                          <img src="./assets/img/PTTK/chap1/img18.png" alt="">
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            `],
            ['Quan hệ và các phép toán','TKPTDL22',`
            <p><b>Quan hệ giữa các phép toán</b></p>
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse421" role="button" aria-expanded="false"
                aria-controls="collapse421">
                Quan hệ kéo theo
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse422" role="button" aria-expanded="false"
                aria-controls="collapse422">
                Quan hệ tương đương
              </a>
            </p>
            <div>
              <div class="collapse" id="collapse421">
                <div class="card card-body">
                  <p><b>Quan hệ kéo theo</b></p>
                  <p>Biến cố A được gọi là kéo theo biến cố B, ký hiệu A =&gt; B hoặc A &sub; B, nếu A xảy ra thì B xảy
                    ra.</p>
                  <p>Ví dụ: B: “gieo xúc xắc được mặt 2 chấm”, H: “gieo xúc xắc được mặt chẵn”. Khi đó B  H (tức là ra
                    mặt 2
                    chấm thì ra mặt chẵn)</p>
                </div>
              </div>
              <div class="collapse" id="collapse422">
                <div class="card card-body">
                  <p><b>Quan hệ tương đương</b></p>
                  <p>
                    Quan hệ tương đương: Hai biến cố A và B được gọi là tương đương với nhau nếu A =&gt; B và B =&gt; A,
                    ký hiệu là A = B hoặc A &lt;=&gt; B
                  </p>
                  <p>Ví dụ: Các biến cố sau là tương đương:</p>
                  <ul>
                    <li>K: “Gieo xúc xắc được mặt có số chấm nhỏ hơn 3”</li>
                    <li>L: “Gieo xúc xắc được mặt có số chấm không vượt quá 2”.</li>
                    <li>M: “Gieo xúc xắc được mặt có số chấm nằm trong tập {0, 1, 2}”.</li>
                  </ul>
                </div>
              </div>
            </div>
            `]
        ]
    },
    TKPTDL3: {
        title: 'Xác xuất và một số công thức tính xác xuất',
        index: [
            ['Một số định nghĩa xác xuất','TKPTDL31',`
            <p><b>Một số định nghĩa xác xuất</b></p>
            <p>Xác suất của một biến cố là một số nằm giữa 0 và 1, số này đo lường khả năng xuất hiện của biến cố đó khi
              phép thử được thực hiện</p>
            <ul>
              <li>Ký hiệu xác suất của biến cố A là P(A)</li>
              <li>Tính chất:
                <br>
                <img src="./assets/img/PTTK/chap1/img19.png" alt="">
              </li>
            </ul>
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse611" role="button" aria-expanded="false"
                aria-controls="collapse611">
                Định nghĩa cổ điển về xác suất
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse612" role="button" aria-expanded="false"
                aria-controls="collapse612">
                Định nghĩa thống kê về xác suất
              </a>
            </p>
  
            <div>
              <div class="collapse" id="collapse611">
                <div class="card card-body">
                  <p><b>Định nghĩa cổ điển về xác suất</b></p>
  
                  <p>Xét một phép thử có hữu hạn kết quả có thể xảy ra (có n kết quả), đồng thời các kết quả này là đồng
                    khả năng xuất hiện; trong đó có n(A) kết quả thuận lợi cho biến cố A. Khi đó:</p>
                  <center>
                    <img src="./assets/img/PTTK/chap1/img20.png" alt="">
                  </center>
                  <p>Ví dụ: Gieo một con xúc xắc cân đối, đồng chất một lần. Tính xác suất để xúc xắc ra mặt chẵn.</p>
                  <p>Bài làm</p>
                  <p>Gieo xúc xắc 1 lần, &#8486; = {1, 2,..., 6} nên n = 6.</p>
                </div>
              </div>
              <div class="collapse" id="collapse612">
                <div class="card card-body">
                  <p><b>Định nghĩa thống kê về xác xuất</b></p>
                  <p>Giả sử một phép thử có thể thực hiện lặp lại nhiều lần trong những điều kiện giống nhau. Tiến hành
                    phép thử n lần, trong đó có m lần xảy ra biến cố A</p>
                  <ul>
                    <li>m: Tần số xuất hiện A</li>
                    <li>f = m/n: Tần suất xuất hiện A</li>
                    <li>Khi n tiến ra dương vô cùng thì f sẽ hội tụ về P(A)</li>
                    <li>Thực tế, ta sử dụng xấp xỉ khi n đủ lớn
                      <br>
                      <img src="./assets/img/PTTK/chap1/img21.png" alt="">
                    </li>
                  </ul>
                  <p>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse6121" role="button"
                      aria-expanded="false" aria-controls="collapse6121">
                      Ví dụ 1
                    </a>
  
                  </p>
                  <div>
                    <div class="collapse" id="collapse6121">
                      <div class="card card-body">
                        <p>Ví dụ: Để xác định một người 25 tuổi sẽ chết trong vòng 1 năm tới tại Mỹ, người ta theo dõi
                          100.000 người ở độ tuổi 25 trong vòng 1 năm và thấy rằng có 138 người chết. Xác suất cần tìm xấp
                          xỉ bằng: 138/100000 = 0,00138</p>
  
                      </div>
                    </div>
  
  
  
                  </div>
                </div>
              </div>
            </div>
            `],
            ['Công thức cộng xác xuất','TKPTDL32',`
            <p><b>Công thức cộng xác xuất</b></p>
            <ul>
              <li>Cho A và B là hai biến cố. Khi đó: P(A + B) = P(A) + P(B) – P(AB)</li>
              <li>Nếu A và B xung khắc với nhau thì P(A + B) = P(A) + P(B)</li>
              <li>Mở rộng
                <br>
                <center>
                  <img class="w-100" src="./assets/img/PTTK/chap1/img23.png" alt="">
                </center>
              </li>
              <li>Đặc biệt: nếu n biến cố xung khắc từng từng đôi, ta có:
                <br>
                <center>
                  <img class="w-100" src="./assets/img/PTTK/chap1/img24.png" alt="">
                </center>
              </li>
            </ul>
            <center>
              <img src="./assets/img/PTTK/chap1/img22.png" alt="">
            </center>
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse621" role="button" aria-expanded="false"
                aria-controls="collapse621">
                Ví dụ
              </a>
            </p>
            <div class="collapse" id="collapse621">
              <div class="card card-body">
                <p>Ví dụ: Một lớp có 100 sinh viên, trong đó có 40 sinh viên giỏi ngoại ngữ, 30 sinh viên giỏi tin
                  học,
                  20 sinh viên giỏi cả ngoại ngữ lẫn tin học. Gặp ngẫu nhiên một sinh viên trong lớp. Tìm xác suất
                  để
                  sinh viên đó giỏi ít nhất một trong hai môn trên.</p>
                <p>Bài làm</p>
                <div>
                  Gọi
                  <br>
                  A: “sinh viên đó giỏi ít nhất 1 trong 2 môn ngoại ngữ và tin học”
                  <br>
                  N: “sinh viên đó giỏi ngoại ngữ”
                  <br>
                  T: “sinh viên đó giỏi tin học”
                  <br>
                  Ta có: P(N) = 40/100; P(T) = 30/100; P(NT) = 20/100
                  <br>
                  Lại có A = N + T
                  <br>
                  P(A) = P(N + T) = P(N) + P(T) – P(NT) = 0,4 + 0,3 – 0,2 = 0,5
                </div>
              </div>
            </div>
  
            `],
            ['Xác xuất có điều kiện','TKPTDL33',`
            <p><b>Xác xuất có điều kiện</b></p>
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse631" role="button" aria-expanded="false"
                aria-controls="collapse631">
                Khái niệm
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse632" role="button" aria-expanded="false"
                aria-controls="collapse632">
                Ví dụ
              </a>
            </p>
            <div>
              <div class="collapse" id="collapse631">
                <div class="card card-body">
                  <p><b>Khái niệm</b></p>
                  <p>Xác suất xảy ra biến cố A với thông tin biến cố B đã xảy ra được gọi là xác suất có điều kiện. Ký
                    hiệu là P(A|B)</p>
                  <center>
                    <img src="./assets/img/PTTK/chap1/img25.png" alt="">
                  </center>
                </div>
              </div>
              <div class="collapse" id="collapse632">
                <div class="card card-body">
                  <p><b>Ví dụ</b></p>
                  <p>Ví dụ: Một lớp có 100 sinh viên, trong đó có 40 sinh viên giỏi ngoại ngữ, 30 sinh viên giỏi tin học,
                    20 sinh viên giỏi cả ngoại ngữ lẫn tin học. Gặp ngẫu nhiên một sinh viên trong lớp. Nói chuyện thì
                    biết rằng sinh viên này giỏi ngoại ngữ, tính xác suất để sinh viên đó giỏi tin học.</p>
                  <p>Bài làm</p>
                  <p>Gọi</p>
                  <ul>
                    <li>N: “sinh viên đó giỏi ngoại ngữ”</li>
                    <li>T: “sinh viên đó giỏi tin học”</li>
                  </ul>
                  <p>Ta có: P(N) = 40/100; P(T) = 30/100; P(NT) = 20/100.</p>
                  <p>P(T|N) = P(NT) / P(N) = 0,2 / 0,4 = 0,5</p>
                </div>
              </div>
            </div>
  
            `],
            ['Công thức nhân xác xuất','TKPTDL34',`
            <p><b>Công thức nhân xác xuất</b></p>
            <p>Trường hợp 2 biến cố:</p>
            <pre>
              P(AB) = P(A).P(B | A) = P(B).P(A | B)
            </pre>
            <ul>
              <li>Hai biến cố A và B được gọi là độc lập với nhau nếu việc xảy ra hay không xảy ra biến cố này không làm
                ảnh hưởng tới việc xảy ra hay không xảy ra biến cố kia. Khi đó: P(AB) = P(A).P(B)</li>
              <li>Cho n biến cố A<sub>1</sub>, A<sub>2</sub>,..., A<sub>n</sub>. Khi đó:
                <br>
                <center>
                  <img src="./assets/img/PTTK/chap1/img26.png" alt="">
                </center>
              </li>
              <li>Đặc biệt: Các biến cố A<sub>1</sub>, A<sub>2</sub>, ..., A<sub>n</sub> được gọi là độc lập (hay độc lập
                trong tổng thể) nếu việc xảy ra hay không xảy ra của một nhóm bất kỳ k biến cố (1 &le; k &le; n) không làm
                ảnh hưởng tới việc xảy ra hay không xảy ra của các biến cố còn lại. Khi đó:
                <br>
                <center>
                  <img src="./assets/img/PTTK/chap1/img27.png" alt="">
                </center>
              </li>
            </ul>
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse641" role="button" aria-expanded="false"
                aria-controls="collapse641">
                Ví dụ
              </a>
            </p>
            <div class="collapse" id="collapse641">
              <div class="card card-body">
                <p>Ví dụ: Có 4 que thăm, trong đó có 3 que thăm dài bằng nhau và 1 que thăm ngắn hơn. Bốn người lần lượt
                  lên rút ngẫu nhiên một que thăm. Tính xác suất người thứ i rút được thăm ngắn (i = 1, 2, 3, 4).</p>
                <p>Bài làm</p>
                <p>Gọi A<sub>i</sub> : “Người thứ i rút được thăm ngắn”, i = 1, 2, 3, 4</p>
                <center>
                  <img src="./assets/img/PTTK/chap1/img28.png" alt="">
                </center>
              </div>
            </div>
  
            `]
        ]
    },
    TKPTDL4: {
        title: 'Dãy phép thử Bernoulli',
        index: [
            ['Mô tả','TKPTDL41',`
            <p><b>Mô tả</b></p>
            <ul>
              <li>Dãy phép thử Bernoulli
                <p>Tiến hành n phép thử độc lập. Trong mỗi phép thử chỉ có thể xảy ra một trong hai trường hợp: hoặc biến
                  cố A xảy ra hoặc biến cố A không xảy ra. Xác suất xảy ra biến cố A trong mỗi phép thử luôn bằng p. Đó
                  chính là dãy phép thử Bernoulli.</p>
              </li>
            </ul>
  
            `],
            ['Công thức Bernoulli','TKPTDL42',`
            <p><b>Công thức Bernoulli</b></p>
            <p>Xét dãy phép thử Bernoulli. Xác suất để biến cố A xuất hiện đúng k lần là:</p>
            <center>
              <img src="./assets/img/PTTK/chap1/img29.png" alt="">
            </center>
  
            `],
            ['Ví dụ','TKPTDL43',`
            <p><b>Ví dụ</b></p>
            <p>Xác suất thành công của một thí nghiệm sinh hóa là 40%. Một nhóm gồm 9 sinh viên tiến hành cùng thí nghiệm
              trên độc lập với nhau. Tìm xác suất để:</p>
            <ul>
              <li>Có đúng 6 thí nghiệm thành công</li>
              <li>Có ít nhất 1 thí nhiệm thành công</li>
            </ul>
            <p>Bài làm</p>
            <p>Bài toán thỏa mãn dãy phép thử Bernoulli</p>
            <p>Phép thử: Tiến hành thí nghiệm</p>
            <center>
              <img src="./assets/img/PTTK/chap1/img30.png" alt="" class="w-75">
            </center>
  
            `]
        ]
    },
    TKPTDL5: {
        title: 'Biến ngẫu nhiên và phân phối xác xuất',
        index: [
            ['Biến ngẫu nhiên và phân loại','TKPTDL51',`
            <p><b>Biến ngẫu nhiên và phân loại</b></p>
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse811" role="button" aria-expanded="false"
                aria-controls="collapse811">
                Biến ngẫu nhiên
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse812" role="button" aria-expanded="false"
                aria-controls="collapse812">
                Phân loại
              </a>
            </p>
            <div>
              <div class="collapse" id="collapse811">
                <div class="card card-body">
                  <p><b>Biến ngẫu nhiên</b></p>
                  <p>Biến ngẫu nhiên là biến nhận giá trị phụ thuộc vào kết quả phép thử</p>
                  <ul>
                    <li>Ký hiệu: X, Y, Z, ..., X1, X2, ...</li>
                    <li>Giá trị biến ngẫu nhiên nhận: a, b, c, ..., x, y, z, ...</li>
                    <li>Biến cố: X = a, X &lt; a, a &lt; X &lt; b, X &isin; D, ...
                      <br>
                      Ví dụ
                      <br>
                      <ul>
                        <li>Số chấm xuất hiện khi gieo xúc xắc 1 lần</li>
                        <li>Số bé gái có trong 6 bé được khảo sát.</li>
                        <li>Thời gian giữa 2 ca cấp cứu liên tiếp tại một bệnh viện</li>
                        <li>Nhiệt độ Hà Nội lúc 6 giờ sáng</li>
                        <li>Số iphone phải bảo hành ở Hà Nội</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="collapse" id="collapse812">
                <div class="card card-body">
                  <p><b>Phân loại</b></p>
                  <p>Biến ngẫu nhiên có 2 loại chính</p>
                  <p>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse8121" role="button"
                      aria-expanded="false" aria-controls="collapse8121">
                      Biến ngẫu nhiên rời rạc
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse8122" role="button"
                      aria-expanded="false" aria-controls="collapse8122">
                      Biến ngẫu nhiên liên tục
                    </a>
                  </p>
                  <div>
                    <div class="collapse" id="collapse8121">
                      <div class="card card-body">
                        <p><b>Biến ngẫu nhiên rời rạc</b></p>
                        <p>Biến ngẫu nhiên rời rạc: tập giá trị của nó là một tập hữu hạn hoặc vô hạn đếm được các phần
                          tử. Nói một cách khác đối với biến ngẫu nhiên rời rạc ta có thể liệt kê tất cả các giá trị nó có
                          thể nhận bằng một dãy hữu hạn hoặc vô hạn x1, x2, ..., xn, ...</p>
                      </div>
                    </div>
                    <div class="collapse" id="collapse8122">
                      <div class="card card-body">
                        <p><b>Biến ngẫu nhiên liên tục</b></p>
                        <p>Biến ngẫu nhiên liên tục: Tập giá trị của nó lấp kín một khoảng của trục số hoặc cũng có thể là
                          cả trục số. Miền giá trị của một biến ngẫu nhiên liên tục sẽ là (a;b), [a;b&#41;, &#40;a;b],
                          [a;b] hoặc cả R</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            `],
            ['Hàm phân phối xác xuất','TKPTDL52',`
            <p><b>Hàm phân phối xác xuất</b></p>
            <p><b>Định nghĩa</b></p>
            <p>Hàm phân phối xác suất của biến ngẫu nhiên X, kí hiệu là F(x), được xác định như sau:</p>
            <center>F(x) = P(X &lt; x), &forall;x&isin;R</center>
            <p>Hàm phân phối xác xuất F(x) phản ánh độ tập trung xác xuất ở bên trái của điểm x</p>
            <p><b>Tính chất</b></p>
            <center>P(a &le; X &lt; b) = F(b) - F(a)</center>
            `],
            ['Bảng phân phối xác suất của biến ngẫu nhiên rời rạc','TKPTDL53',`
            <p><b>Bảng phân phối xác suất của biến ngẫu nhiên rời rạc</b></p>
            <center>
              <img src="./assets/img/PTTK/chap1/img31.png" alt="" class="w-100">
            </center>
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse831" role="button" aria-expanded="false"
                aria-controls="collapse831">
                Ví dụ
              </a>
            </p>
            <div class="collapse" id="collapse831">
              <div class="card card-body">
                <p><b>Ví dụ</b></p>
                <p>Ví dụ: Một người chơi trò chơi gieo 2 con xúc xắc cân đối và đồng chất. Số con xúc xắc ra mặt lục là 0,
                  1, 2
                  thì số tiền thưởng thu được tương ứng là 0$, 5$, 10$. Lập bảng phân phối xác suất cho X($) chỉ số tiền
                  thưởng tương ứng.</p>
                <p>Bài làm</p>
                <center>
                  <img src="./assets/img/PTTK/chap1/img32.png" class="w-100" alt="">
                </center>
              </div>
            </div>
            `],
            ['Hàm mật độ xác suất của biến ngẫu nhiên liên tục','TKPTDL53',`
            <p><b>Hàm mật độ xác suất của biến ngẫu nhiên liên tục</b></p>
            <p><b>Định nghĩa</b>: Hàm mật độ xác suất của biến ngẫu nhiên liên tục X là hàm f(x) xác định trên R thỏa mãn:
            </p>
            <center>
              <img src="./assets/img/PTTK/chap1/img32.png" alt="">
            </center>
            <p><b>Tính chất</b></p>
            <center>
              <img src="./assets/img/PTTK/chap1/img34.png" alt="">
            </center>
            <center>
              <img src="./assets/img/PTTK/chap1/img35.png" alt="" class="w-100">
            </center>
            `],
            ['Các tham số đặc trưng','TKPTDL54',`
            <p><b>Các tham số đặc trưng</b></p>

            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse851" role="button" aria-expanded="false"
                aria-controls="collapse851">
                Kỳ vọng
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse852" role="button" aria-expanded="false"
                aria-controls="collapse852">
                Phương sai
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse853" role="button" aria-expanded="false"
                aria-controls="collapse853">
                Độ lệch chuẩn
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse854" role="button" aria-expanded="false"
                aria-controls="collapse854">
                Mode
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse855" role="button" aria-expanded="false"
                aria-controls="collapse855">
                Phân vị mức p
              </a>
            </p>
  
            <div>
              <div class="collapse" id="collapse851">
                <div class="card card-body">
                  <p><b>Kỳ vọng</b></p>
                  <p>Đặc trưng cho giá trị trung bình.</p>
                  <ul>
                    <li>Ký hiệu: E(X)</li>
                    <li>Công thức tính:
                      <ul>
                        <li>Nếu X là biến ngẫu nhiên rời rạc <img src="./assets/img/PTTK/chap1/img36.png" alt=""></li>
                        <li>Nếu X là biến ngẫu nhiên liên tục <img src="./assets/img/PTTK/chap1/img37.png" alt=""></li>
                      </ul>
                    </li>
                    <li>Tính chất: E(aX+ b) = a.E(X) + b
                      <ul>
                        <li>Nếu X là biến ngẫu nhiên rời rạc: <img src="./assets/img/PTTK/chap1/img38.png" alt=""></li>
                        <li>Nếu X là biến ngẫu nhiên liên tục: <img src="./assets/img/PTTK/chap1/img39.png" alt=""></li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse8511" role="button"
                      aria-expanded="false" aria-controls="collapse8511">
                      Ví dụ
                    </a>
                  </p>
                  <div class="collapse" id="collapse8511">
                    <div class="card card-body">
                      <p>Ví dụ: Một người chơi trò chơi gieo 2 con xúc xắc cân đối và đồng chất. Số con xúc xắc ra mặt lục
                        là 0, 1, 2 thì số tiền thưởng thu được tương ứng là 0$, 5$, 10$. Xác định trung bình số tiền
                        thưởng thu được sau mỗi ván chơi.</p>
                      <p>Bài làm: Gọi X($) là số tiền thưởng ở mỗi ván chơi.</p>
                      <center>
                        <div class="d-flex w-75">
                          <img class="w-100" src="./assets/img/PTTK/chap1/img40.png" alt="">
                          <img class="w-100" src="./assets/img/PTTK/chap1/img41.png" alt="">
                        </div>
                      </center>
                    </div>
                  </div>
  
                </div>
              </div>
              <div class="collapse" id="collapse852">
                <div class="card card-body">
                  <p><b>Phương sai</b></p>
                  <p>Thể hiện mức độ phân tán dữ liệu xung quanh giá trị kỳ vọng.</p>
                  <p>Đây là từ viết tắt của cụm từ trung bình của bình phương sai số.</p>
                  <ul>
                    <li>Ký hiệu: var(X)</li>
                    <li>Công thức tính: var(X) = E[X – E(X)]<sup>2</sup></li>
                    <li>Thực tế ta tính bằng công thức: var(X) = E(X<sup>2</sup>) - (EX)<sup>2</sup>
                      <ul>
                        <li>Nếu X là biến ngẫu nhiên rời rạc: <img src="./assets/img/PTTK/chap1/img42.png" alt=""></li>
                        <li>Nếu X là biến ngẫu nhiên liên tục: <img src="./assets/img/PTTK/chap1/img43.png" alt=""></li>
                      </ul>
                    </li>
  
                  </ul>
                  <p>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse8521" role="button" aria-expanded="false" aria-controls="collapse8521">
                      Ví dụ
                    </a>
                  </p>
                  <div class="collapse" id="collapse8521">
                    <div class="card card-body">
                      <p><b>Ví dụ</b></p>
                      <p>Một người chơi trò chơi gieo 2 con xúc xắc cân đối và đồng chất. Số con xúc xắc ra mặt lục là 0, 1, 2 thì số tiền thưởng thu được tương ứng là 0$, 5$, 10$. Xác định mức độ dao động (phương sai) của số tiền thưởng thu được sau mỗi ván chơi.</p>
                      <p>Bài làm: Gọi X($) là số tiền thưởng ở mỗi ván chơi.</p>
                        <div class="w-50 d-flex">
                          <img src="./assets/img/PTTK/chap1/img44.png" alt="" class="w-100">
                          <img src="./assets/img/PTTK/chap1/img45.png" alt="" class="w-100">
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="collapse" id="collapse853">
                <div class="card card-body">
                  <p><b>Độ lệch chuẩn</b></p>
                  <p>thể hiện mức độ phân tán dữ liệu xung quanh giá trị kỳ vọng</p>
                  <ul>
                    <li>Ký hiệu: &sigma;(X) hoặc &sigma;</li>
                    <li>Công thức tính: <img src="/assets/img/PTTK/chap1/img46.png" alt=""></li>
                    <li>Tính chất: V(aX+b) = a<sup>2</sup>.var(X)</li>
                  </ul>
                  <center>
                    <img src="./assets/img/PTTK/chap1/img47.png" class="w-75" alt="">
                  </center>
                </div>
              </div>
              <div class="collapse" id="collapse854">
                <div class="card card-body">
                  <p><b>Mode</b></p>
                  <ul>
                    <li>Ký hiệu: mod(X)</li>
                    <li>Mode của biến ngẫu nhiên rời rạc là giá trị biến ngẫu nhiên nhận và xác suất nhận giá trị đó là lớn nhất.
                      <br>
                      Ví dụ: hình bên có mod(X) = 3
                    </li>
                    <li>Mode của biến ngẫu nhiên liên tục là giá trị x nhận làm cho hàm mật độ xác suất đạt cực đại địa phương.
                      <br>
                      Ví dụ: hình bên có mod(X) = 2
                    </li>
                  </ul>
                  <center>
                    <div class="d-flex w-75">
                      <img src="./assets/img/PTTK/chap1/img48.png" alt="" class="w-100">
                      <img src="./assets/img/PTTK/chap1/img49.png" alt="" class="w-100">
                    </div>
                  </center>
                </div>
              </div>
              <div class="collapse" id="collapse855">
                <div class="card card-body">
                  <p><b>Phân vị mức p</b></p>
                  <ul>
                    <li>z<sub>p</sub> được gọi là phân vị mức p của biến ngẫu nhiên X nếu: 
                      <br>
                      P(X < z<sub>p</sub>) = p
                    </li>
                    <li>Tứ phân vị là 3 phân vị mức 0.25; 0.5 và 0.75 (thường được ký hiệu là Q1, Q2, Q3)</li>
                    <li>Trung vị: là phân vị mức 0.5.
                      <br>
                      Ký hiệu: med(X)
                    </li>
                  </ul>
                  <img class="w-75" src="./assets/img/PTTK/chap1/img50.png" alt="">
                </div>
              </div>
            </div>
            `]
        ]
    },
    TKPTDL6: {
        title: 'Một số luật phân phối xác suất thông dụng',
        index: [
            ['Phân phối nhị thức','TKPTDL61',`
            <p><b>Phân phối nhị thức</b></p>
            <ul>
              <li>Thực hiện n phép thử độc lập cùng điều kiện.</li>
              <li>Trong mỗi phép thử, xác suất xảy ra A luôn là p.</li>
              <li>Gọi X là số phép thử xảy ra A.</li>
              <li>Khi đó X được gọi là tuân theo phân phối nhị thức với 2 tham số n và p.</li>
              <li>Ký hiệu: X ~ B(n;p)</li>
              <li>Tính chất
                <br>
                <img src="./assets/img/PTTK/chap1/img51.png" alt="">
              </li>
            </ul>
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse911" role="button" aria-expanded="false" aria-controls="collapse911">
                Ví dụ
              </a>
            </p>
            <div class="collapse" id="collapse911">
              <div class="card card-body">
                <p>Một người nuôi 200 con gà mái đẻ . Xác suất để mỗi con gà đẻ trứng trong ngày là 0,8.</p>
                <ul>
                  <li>Tìm số trứng gà trung bình thu được trong một ngày?</li>
                  <li>Nếu muốn mỗi ngày thu trung bình 300 quả trứng gà thì cần phải nuôi thêm bao nhiêu con gà?</li>
                </ul>
                <p>Bài làm</p>
                <ul>
                  <li>Gọi X là số trứng gà thu được trong mỗi ngày.
                    <br>
                    <p>X ~ B(n;p) với n = 200 và p = 0,8</p>
                    <p>E(X) = np = 200.0,8 = 160 (quả trứng)</p>
                  </li>
                  <li>Giả sử cần nuôi n con gà.
                    <br>
                    <p>E(X) = np = 300 =&gt; n.0,8 = 300 =&gt; n = 375.</p>
                    <p>Vậy cần nuôi thêm 375 – 200 = 175 con gà</p>
                  </li>
                </ul>
                <center>
                  <img src="./assets/img/PTTK/chap1/img52.png" alt="">
                </center>
              </div>
            </div>
            `],
            ['Phân phối Poisson','TKPTDL62',`
            <p><b>Phân phối Poisson</b></p>
          <ul>
            <li>Biến ngẫu nhiên X được gọi là tuân theo phân phối Poisson với tham số &lambda; nếu X nhận giá trị k = 0, 1, 2, ... với xác suất tương ứng là:
              <br>
              <center>
                <img src="./assets/img/PTTK/chap1/img53.png" alt="">
              </center>
            </li>
            <li>Ký hiệu: X ~ P(&lambda;)</li>
            <li>Tính chất: 
              <ul>
                <li>E(X) = &lambda;</li>
                <li>var(X) = &lambda;</li>
                <li>&lambda; - 1 &le; mod(X) &le; &lambda;</li>
              </ul>
            </li>
            <li>Phân phối Poisson thường dùng để đếm số lần xảy ra A trong một khoảng thời gian độ dài t. Điều kiện là E(X) = c.t với c là hằng số.</li>
          </ul>

          <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse921" role="button" aria-expanded="false" aria-controls="collapse921">
              Ví dụ
            </a>
          </p>

        </p>
        <div class="collapse" id="collapse921">
          <div class="card card-body">
            <p>Một bệnh viện tiếp nhận trung bình 6 ca bệnh trong 30 phút.</p>
            <ul>
              <li>Tính xác suất bệnh viện tiếp nhận 17 ca bệnh trong 1 giờ</li>
              <li>Tính xác suất trong vòng 10 phút không có ca bệnh nào.</li>
            </ul>
            <p><b>Bài làm</b></p>
            <ul>
              <li>Gọi X là số ca bệnh trong 1 giờ, X ~ P(12).
                <br>
                <img src="./assets/img/PTTK/chap1/img54.png" alt="">
              </li>
              <li>Gọi Y là số ca bệnh trong 10 phút, Y ~ P(2).
                <br>
                <img src="./assets/img/PTTK/chap1/img55.png" alt="">
              </li>
            </ul>
          </div>
        </div>
            `],
            ['Phân phối chuẩn','TKPTDL63',`
            <p><b>Phân phối chuẩn</b></p>

          <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse931" role="button" aria-expanded="false" aria-controls="collapse931">
              Khái niệm cơ bản
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse932" role="button" aria-expanded="false" aria-controls="collapse932">
              Phân phối chuẩn tắc Z và hàm phân phối của Z
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse933" role="button" aria-expanded="false" aria-controls="collapse933">
              Bảng giá trị hàm phần phối chuẩn tắc
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse934" role="button" aria-expanded="false" aria-controls="collapse934">
              Ví dụ
            </a>
          </p>

          <div>
            <div class="collapse" id="collapse931">
              <div class="card card-body">
                <p><b>Khái niệm cơ bản</b></p>
                <p>Biến ngẫu nhiên X được gọi là tuân theo phân phối chuẩn với 2 tham số &micro; và &sigma;<sup>2</sup> nếu hàm mật độ xác suất của X là</p>
                <center>
                  <img src="./assets/img/PTTK/chap1/img56.png" alt="">
                </center>
                <ul>
                  <li>Ký hiệu: X ~ N(&micro;;&sigma;<sup>2</sup>)</li>
                  <li>Tính chất
                    <br>
                    <img src="./assets/img/PTTK/chap1/img57.png" alt="">
                  </li>
                </ul>
              </div>
            </div>
            <div class="collapse" id="collapse932">
              <div class="card card-body">
                <p><b>Phân phối chuẩn tắc Z và hàm phân phối của Z</b></p>
                <p>Phân phối chuẩn tắc Z ~ N(0;1) có hàm mật độ xác suất <img src="./assets/img/PTTK/chap1/img58.png" alt=""> Với X ~ N(&micro;;&sigma;<sup>2</sup>) =&gt; <img src="./assets/img/PTTK/chap1/img59.png" alt=""></p>
                <p>Như vậy thay vì tính toán với X ta có thể chuyển về tính toán theo Z.</p>

                <p>Hàm phân phối xác suất của Z</p>
                <center>
                  <img class="w-75" src="./assets/img/PTTK/chap1/img60.png" alt="">
                  <img class="w-75" src="./assets/img/PTTK/chap1/img61.png" alt="">
                </center>
                <p>Do tích phân trên không ra được các hàm cơ bản nên người ta xây dựng bảng tính xấp xỉ cho hàm phân
                  phối xác suất</p>
              </div>
            </div>
            <div class="collapse" id="collapse933">
              <div class="card card-body">
                <p><b>Bảng giá trị hàm phần phối chuẩn tắc <img src="./assets/img/PTTK/chap1/img62.png" alt=""></b></p>
                <center>
                  <img src="./assets/img/PTTK/chap1/img63.png" alt="" class="w-100">
                </center>
                <p>Công thức tính</p>
                <img class="w-50" src="./assets/img/PTTK/chap1/img64.png" alt="">
                <p>Chú ý: <img src="./assets/img/PTTK/chap1/img65.png" alt=""></p>
              </div>
            </div>
            <div class="collapse" id="collapse934">
              <div class="card card-body">
                <p><b>Ví dụ</b></p>
                <center>
                  <img src="./assets/img/PTTK/chap1/img66.png" alt="" class="w-100">
                </center>
              </div>
            </div>
          </div>
            `],
            ['Phân phối khi bình phương','TKPTDL64',`
            <p><b>Phân phối khi bình phương</b></p>
            <ul>
              <li>Biến ngẫu nhiên X được gọi là tuân theo phân phối khi bình phương với n bậc tự do nếu hàm mật độ của
                X là:
              <br>
                <img src="./assets/img/PTTK/chap1/img67.png" alt="">
              <br>
              Trong đó <img src="./assets/img/PTTK/chap1/img69.png" alt=""> là hàm gamma: <img src="./assets/img/PTTK/chap1/img70.png">
              </li>
              <li>Ký hiệu: <img src="./assets/img/PTTK/chap1/img68.png" alt=""></li>
            </ul>
            <center>
              <img src="./assets/img/PTTK/chap1/img71.png" alt="">
            </center>
            `],
            ['Phân phối Student','TKPTDL65',`
            <p><b>Phân phối Student</b></p>
            <ul>
              <li>Biến ngẫu nhiên X được gọi là tuân theo phân phối student với n bậc tự do nếu hàm mật độ của X là:
                <img src="./assets/img/PTTK/chap1/img72.png" alt="">
              </li>
              <li>Ký hiệu: X ~ t(n)</li>
            </ul>
            <center>
              <img src="./assets/img/PTTK/chap1/img73.png" alt="">
            </center>
            `],
            ['Phân phối Fisher','TKPTDL66',`
            <p><b>Phân phối Fisher</b></p>

            <ul>
              <li>Nếu ta có hai biến ngẫu nhiên có phân phối khi bình
                phương là <img src="./assets/img/PTTK/chap1/img74.png" alt="">, <img src="./assets/img/PTTK/chap1/img75.png" alt=""> thì khi đó
                <br>
                <img src="./assets/img/PTTK/chap1/img76.png" alt="">
              </li>
              <li>Ký hiệu: F ~ F(m,n)</li>
            </ul>
  
            <center>
              <img src="./assets/img/PTTK/chap1/img73.png" alt="">
            </center>
            `],
        ]
    },
    TKPTDL7: {
        title: 'Giới thiệu và cài đặt R',
        index: [
            ['Hai giao diện sử dụng R','TKPTDL71',`
            <p><b>Hai giao diện sử dụng R</b></p>
            <div class="d-flex w-100">
              <img src="./assets/img/PTTK/chap1/img77.png" alt="" class="w-50">
              <img src="./assets/img/PTTK/chap1/img78.png" alt="" class="w-50">
            </div>
            <p>=&gt; R studio được sử dụng nhiều hơn do giao diện tiện lợi hơn</p>
            <p>R được sử dụng độc lập. Tuy nhiên, R studio cần cài R trước</p>
            `],
            ['Cài đặt R và R studio','TKPTDL72',`
            <p><b>Cài đặt R và R studio</b></p>
            <ul>
              <li>Cài đặt R, vào website CRAN (the comprehensive R archive network)</li>
              <li>Cài đặt R studio (free)</li>
            </ul>
            <img src="./assets/img/PTTK/chap1/img79.png" alt="">
  
            `],
            ['Các gói lệnh cơ bản','TKPTDL73',`
            <p><b>Các gói lệnh cơ bản</b></p>
            <p><b>tidyverse</b></p>
            <ul>
              <li><b>Cách 1</b>: Trên màn hình console của Rstudio, copy và run lệnh sau <br>
                install.packages("tidyverse")
              </li>
              <li><b>Cách 2</b>: Chọn Tools/Install packages và gõ tidyverse =&gt; install
                <br>
                <img src="./assets/img/PTTK/chap1/img80.png" class="w-100" alt="">
                <br>
                <p>Cài thêm một số gói lệnh cơ bản: foreign, readstata13, readxl</p>
              </li>
            </ul>
  
            `],
            ['Lưu ý','TKPTDL74',`
            <p><b>Lưu ý</b></p>
            <p>Trong nghiên cứu phân tích dữ liệu</p>
            <ul>
              <li>Thời gian cho xử lý số liệu thô, sắp xếp, “Tidy” có thể chiếm đến 80% thời gian.</li>
              <li>R rất mạnh về hình ảnh/đồ thị với sự trợ giúp của gói ggplot2 (gói này đã nằm sẵn trong gói tidyverse).</li>
              <li>Quá trình khám phá “Explore” có thể lặp đi lặp lại rất nhiều lần, thông qua các mô hình, các kiểu hình ảnh
                hóa khác nhau</li>
              <li>Mô hình/kỹ thuật “advance” không quan trọng bằng việc phải giải thích được kết quả, tức là “Communicate”!!</li>
            </ul>
            <center>
              <img src="./assets/img/PTTK/chap1/img81.png" class="w-75" alt="">
            </center>
  
            `]
        ]
    }
}