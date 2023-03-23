var TKPTDL5 = {
    TKPTDL1: {
        title: 'Hệ số tương quan (Pearson)',
        index: [
            ['Nội dung chính', 'TKPTDL11', `
            <ul>
      <li>Xét 2 biến X và Y. Mẫu dữ liệu quan sát của X và Y có dạng: (x<sub>i</sub>, y<sub>i</sub>), i = 1,...,n</li>
      <li>Hệ số tương quan dùng để xác định mối quan hệ tuyến tính của hai biến</li>
      <li>Ký hiệu là r
        <br>
        <center>
          <img class="w-50" src="./assets/img/PTTK/chap5/img1.png" alt="">
          <img class="w-50" src="./assets/img/PTTK/chap5/img2.png" alt="">
        </center>
      </li>
      <li>Tính chất
        <ul>
          <li>-1 &le; r &lt; 1</li>
          <li>r &gt; 0: X và Y có xu thế đồng biến</li>
          <li>r &lt; 0: X và Y có xu thế nghịch biến</li>
          <li>r = 1 (r = -1): X và Y có quan hệ tuyến tính đồng biến (nghịch biến)</li>
          <li>R = 0: X và Y không có quan hệ tuyến tính</li>
        </ul>
      </li>
      <li>Lệnh trong R tính hệ số tương quan: <b style="color:red;">cor(X,Y)</b></li>
      <li>Lệnh kiểm định hệ số tương quan có bằng 0: <b style="color: red">cor.test(X,Y)</b></li>
      <li>Ví dụ:
        <pre>
<span style="background-color: yellow;"># Khởi tạo dữ liệu</span>
> age &lt;- c(46,20,52,30,57,25,28,36,22, 43,57,33,22,63,40,48,28,49)
> chol &lt;- c(3.5,1.9,4.0,2.6,4.5,3.0,2.9, 3.8, 2.1,3.8,4.1,3.0,2.5,
4.6,3.2,4.2, 2.3,4.0)
> bmi &lt;-c(25.4,20.6,26.2,22.6,25.4,23.1,22.7,24.9,19.8,25.3,23.2,
21.8,20.9,26.7, 26.4,21.2,21.2,22.8)
      </pre>
      </li>
      <li>Ví dụ
        <pre>
<span style="background-color: yellow;"># Kiểm tra age và chol có quan hệ tuyến tính không?</span>
> cor(age, chol)
<span style="background-color: yellow;"># Kiểm tra age và chol có hệ số tương quan bằng 0?</span>
> cor.test(age, chol)
      </pre>
      </li>
      <li>
        Kết luận
        <ul>
          <li>age và chol có quan hệ tuyến tính đồng biến.</li>
          <li>Hệ số tương quan khác 0.</li>
        </ul>
      </li>
    </ul>
            `]
        ]
    },
    TKPTDL2: {
        title: 'Mô hình hồi quy tuyến tính',
        index: [
            ['Mô hình hồi quy tuyến tính đơn', 'TKPTDL21', `
            <div>
          <ul>
            <li>Nếu coi biến age (độ tuổi) có dữ liệu là x<sub>i</sub>, biến chol (cholesterol) có dữ liệu là y<sub>i</sub>.</li>
            <li>Mô hình tuyến tính: <img src="./assets/img/PTTK/chap5/img10.png" alt="">
              <ul>
                <li>a: hệ số chặn</li>
                <li>b: là độ dốc</li>
                <li>&expectation;: là sai số với &expectation; ~ N(&micro;; &sigma;<sup>2</sup>)</li>
              </ul>
            </li>
          </ul>
          <center>
            <img src="./assets/img/PTTK/chap5/img11.png" alt="" class="w-75">
          </center>

          <ul>
            <li>Để xác định hệ số a, b ta dùng phương pháp bình phương tối thiểu, tức là tìm a, b làm hàm số S(a,b) (tổng bình phương sai số) đạt giá trị cực tiểu
              <br>
              <center>
                <img src="./assets/img/PTTK/chap5/img12.png" alt="">
              </center>
            </li>
            <li>Dùng đạo hàm riêng của S(a,b) theo a và b bằng 0</li>
            <li>Ta tính được hệ số
              <br>
              <center>
                <img src="./assets/img/PTTK/chap5/img13.png" alt="">
              </center>
            </li>
          </ul>
          <center>
            <img src="./assets/img/PTTK/chap5/img14.png" alt="">
          </center>

          <ul>
            <li>Lệnh: <b style="color:red">lm (linear model)</b></li>
            <li>Ví dụ
              <pre>>lm(chol~age)</pre>
            </li>
            <li>Hệ số a (intercept): 1.08922</li>
            <li>Hệ số b (age): 0.05779</li>
            <li>Phương trình tuyến tính là: y<sub>i</sub> = 1.08922 + 0.05779x<sub>i</sub>
              <br>
              hay chol = 1.08922 + 0.05779xage
            </li>
          </ul>
          <img src="./assets/img/PTTK/chap5/img15.png" alt="">

          <p>Xem chi tiết hơn kết quả: <b style="color:red">summary</b></p>
          <ul>
            <li>Ví dụ:
              <pre>
> reg &lt;- lm(chol ~ age)
> summary(reg)
              </pre>
            </li>
            <li>Residuals: Mô tả phần dư của mô hình hồi quy</li>
            <li>Coefficients: Tính các tham số a, b.
              <br>
              Với Pr(&lt;|t|) rất nhỏ so với mức ý nghĩa &alpha; nên các hệ số đều khác 0.
            </li>
            <li>Multiple R-Squared: hệ số xác định bội, thể hiện 87,75% giải thích biến chol theo biến age.</li>
          </ul>
          <center>
            <img src="./assets/img/PTTK/chap5/img16.png" alt="" class="75">
          </center>
          <p>Một số lệnh khác</p>
          <ul>
            <li>fitted(): tính toán y<sub>i</sub> theo phương trình hồi quy.</li>
            <li>resid(): tính toán phần dư &expectation;<sub>i</sub></li>
            <li>abline(): vẽ đường hồi quy tuyến tính trên biểu đồ.</li>
          </ul>
          <p>Ví dụ</p>
          <pre>
> fitted(reg)
> resid(reg)
> plot(chol ~ age, pch=16)
> abline(reg)
          </pre>
          <center>
            <img src="./assets/img/PTTK/chap5/img17.png" class="w-75" alt="">
          </center>
        </div>
            `],
            ['Mô hình hồi quy tuyến tính bội', 'TKPTDL22', `
            <div>
          <ul>
            <li>Mô hình dạng: <img src="./assets/img/PTTK/chap5/img18.png" alt=""></li>
            <li>Ta dùng k biến x<sub>1</sub>, x<sub>2</sub>,...,x<sub>k</sub> để ước lượng cho biến y.</li>
            <li>Mô hình cần tính (k+1) hệ số b<sub>0</sub>, b<sub>1</sub>,...,b<sub>k</sub></li>
            <li>Lệnh: <b>lm</b></li>
          </ul>
          <center>
            <img src="./assets/img/PTTK/chap5/img19.png" alt="" class="w-50">
          </center>
          <p>Ví dụ</p>
          <pre>
> mreg &lt;- lm(chol ~ age + bmi)
> summary(mreg)
          </pre>
          <ul>
            <li>Kết quả:
              <br>
              chol = 0.4555 + 0.0541*age + 0.0334*bmi
            </li>
            <li>Multiple R-Squared: thể hiện 88,15% giải thích biến
              chol theo biến age và bmi.</li>
          </ul>
          <center>
            <img src="./assets/img/PTTK/chap5/img20.png" alt="" class="w-75">
          </center>
        </div>
            `]
        ]
    },
    TKPTDL3: {
        title: 'Mô hình hồi quy logistic',
        index: [
            ['Nội dung chính', 'TKPTDL31', `
            <h4></h4>
    <ul>
      <li>Mô hình hồi quy chỉ đưa ra dự báo cho <span style="color: red;">biến nhị phân</span></li>
      <li>Ví dụ: có/không, mắc bệnh/không mắc bệnh, xảy ra/không xảy ra,...</li>
      <li>Bài toán: Cho biến phụ thuộc y phụ thuộc vào k biến độc lập x<sub>1</sub>, x<sub>2</sub>, ...,x<sub>k</sub>
      <br>
      Trong đó y là biến nhị phân (tức là chỉ quan tâm biến cố A có xảy ra hay không, p = P(A))
      </li>
      <li>Odds: Khả năng của biến cố A:
        <center>
          <img src="./assets/img/PTTK/chap5/img3.png" alt="" class="w-25">
        </center>
      </li>
      <li>Hàm logit của odds được định nghĩa: <img src="./assets/img/PTTK/chap5/img4.png" alt=""></li>
      <li>Mô hình hồi quy logistic: <img src="./assets/img/PTTK/chap5/img5.png" alt=""></li>
    </ul>

    <p>Cách làm: <img src="./assets/img/PTTK/chap5/img6.png" alt=""></p>
    <ul>
      <li>Mô hình hồi quy logistic: b<sub>0</sub>, b<sub>1</sub>,...,b<sub>k</sub></li>
      <li>Ước lượng hệ số</li>
      <li>Ước lượng xác suất <img src="./assets/img/PTTK/chap5/img7.png" alt=""></li>
      <li>Nếu p &le; &alpha;: Gán vào nhóm 1</li>
      <li>Nếu p &gt; &alpha;: Gán vào nhóm 2</li>
    </ul>

    <p><b>Thực hành</b>: Xem xét khả năng khách hàng có mua hàng hay không dựa trên file dữ liệu <span style="font-weight: 100;">Social_Network_Ads.csv</span></p>
    <pre>
<span style="background-color: yellow;"># chuyển directory, đọc dữ liệu vào R và gán thành SNA</span>
> setwd("D:/R")
> SNA &lt;- read.csv("Social_Network_Ads.csv", header = TRUE)
# đọc dữ liệu vào các biến cột riêng lẻ
> age = SNA$Age
> est = SNA$EstimatedSalary
> pur = SNA$Purchased
<span style="background-color: yellow;"># đọc dữ liệu biến gender và mã hóa về dạng số</span>
> gender = SNA$Gender
> gender = replace(gender,SNA$Gender=="Female",0)
> gender = replace(gender,SNA$Gender=="Male",1)
<span style="background-color: yellow;"># tính toán</span>
> logis = glm(pur ~ gender + age + est, family = "binomial")
> summary(logis)
    </pre>

    <ul>
      <li>family = "binomal" để chỉ biến y chỉ xét 2 kết quả</li>
      <li>Deviance Residuals: phản ánh độ khác biệt giữa mô hình và dữ liệu</li>
      <li>Coefficients: tính các hệ số ở cột Estimate</li>
      <li>Do p-value của tham số ứng với gender lớn nên hệ số này bằng 0. Vậy mô hình chỉ phụ thuộc của 2 biến còn lại.</li>
      <li>AIC (Akaike Information Criterion) ước tính lượng thông tin tương đối bị mất bị mất</li>
    </ul>

    <center>
      <img src="./assets/img/PTTK/chap5/img8.png" alt="">
    </center>

    <ul>
      <li>Dự đoán p cho từng đối tượng</li>
      <li>Xem kết quả: lấy &alpha; = 0.05
        <br>
        Nhìn vào bảng ta thấy
        <br>
        (0,0): Kết luận đúng chiếm 59,25%
        <br>
        (1,1): Kết luận đúng chiếm 26%
        <br>
        (0,1) và (1,0): Kết luận sai, tỷ lệ thấp
      </li>
    </ul>

    <center>
      <img src="./assets/img/PTTK/chap5/img9.png" alt="" class="w-50">
    </center>
            `]
        ]
    },
}