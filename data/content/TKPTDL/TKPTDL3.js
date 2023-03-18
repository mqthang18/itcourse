var TKPTDL3 = {
    TKPTDL1: {
        title: 'Cửa sổ biểu đồ trong R',
        index: [
            ['Package chuyên dụng và thao tác cơ bản', 'TKPTDL11', `
            <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-sm-6">
          <ul>
            <li>Package chuyên dụng: <b>lattice</b></li>
            <li>Thông thường, R vẽ một biểu đồ cho một cửa sổ.</li>
            <li>Ta có thể vẽ nhiều biểu đồ trong một cửa sổ bằng hàm: <b style="color: red;">par</b>
              <ul>
                <li><i>par(mfrow=c(1,2))</i>: chia cửa sổ ra 1 dòng và 2 cột (2 biểu đồ)</li>
                <li><i>par(mfrow=c(2,3))</i>: chia cửa sở ra 2 dòng và 3 cột (6 biểu đồ) </li>
              </ul>
              <br>
              Ví dụ
              <br>
              <pre>
par(mfrow=c(2,2))
N &lt;- 200
x &lt;- runif(N, -4, 4)
y &lt;- sin(x) + 0.5*rnorm(N)
plot(x,y, main=”Scatter plot of y and x”)
hist(x, main=”Histogram of x”)
boxplot(y, main=”Box plot of y”)
barplot(x, main=”Bar chart of x”)
par(mfrow=c(1,1))
              </pre>
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm-6">
          <center>
            <img src="./assets/img/PTTK/chap3/img1.png" alt="" class="w-75">
          </center>
        </div>
      </div>
    </div>
            `]
        ]
    },
    TKPTDL2: {
        title: 'Đặt tên cho trục biểu đồ',
        index: [
            ['Nội dung chính', 'TKPTDL21', `
            <p>Thông thường, <b>lệnh vẽ biểu đồ cơ bản là: <span style="color: red;">plot(x,y)</span></b></p>
            <ul>
              <li>x là biến nhận giá trị trên trục hoành</li>
              <li>y là biến nhận giá trị trên trục tung</li>
              <li>Nhược điểm: Không thể hiện rõ tên biến cần vẽ</li>
            </ul>
            <p>Lệnh vẽ biểu đồ đầy đủ hơn:</p>
            <pre>
        plot(x, y, xlab=”Số sản phẩm”, ylab=”Lợi nhuận”, main=”Mối quan hệ giữa \n sx và lợi nhuận”)
            </pre>
            <ul>
              <li>xlab (viết tắt từ x label): đặt tên cho trục hoành</li>
              <li>ylab (viết tắt từ y label): đặt tên cho trục tung</li>
              <li>main: tên của biểu đồ (trong đó \n dùng để chỉ xuống dòng)</li>
            </ul>
        
            `],
            ['Ví dụ 1', 'TKPTDL22', `
            <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-sm-6">
                <pre>
> par(mfrow=c(1,2))
> N <- 200
> x <- runif(N, -4, 4)
> y <- -x^2 + 12*x
> plot(x,y)
> plot(x, y, xlab=”Số sản phẩm”, ylab=”Lợi nhuận”, main=” Mối quan hệ giữa \n sx và lợi nhuận”)
> par(mfrow=c(1,1))
                </pre>
              </div>
              <div class="col-12 col-sm-6">
                <center>
                  <img src="./assets/img/PTTK/chap3/img3.png" alt="" class="w-100">
                </center>
              </div>
            </div>
          </div>

          <p>Ta có thể dùng hàm title và sub để đạt tên</p>
            `],
            ['Ví dụ 2', 'TKPTDL23', `
            <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-sm-6">
                <pre>
> par(mfrow=c(1,1))
> N <- 200
> x <- runif(N, -4, 4)
> y <- -x^2 + 12*x
> plot(x, y, xlab = ”Time”, ylab = ”Production”)
> title(main = “Plot of production and x factor”, sub=”Figure 1”)
                </pre>
              </div>
              <div class="col-12 col-sm-6">
                <center>
                  <img src="./assets/img/PTTK/chap3/img4.png" alt="" class="w-100">
                </center>
              </div>
            </div>
          </div>
            `],
            ['Một số lệnh khác', 'TKPTDL24', `
            <p><b>Một số lệnh khác</b></p>
            <center>
              <img src="./assets/img/PTTK/chap3/img2.png" alt="" class="w-100">
            </center>
            `]
        ]
    },
    TKPTDL3: {
        title: `Biểu đồ thanh (bar plot) và biểu đồ bánh (pie chart)`,
        index: [
            ['Tạo dữ liệu để vẽ biểu đồ','TKPTDL31',`
            <p><b>Tạo dữ liệu để vẽ biểu đồ</b></p>

          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-6">
                <p>Ta sử dụng file chol.txt đã có ở bài 2.</p>
                <pre>
> setwd("D:/R")
> chol = read.table("chol.txt", header = TRUE)
> sex = chol[,c(2)] (giới tính)
> age = chol[,c(3)] (tuổi)
> bmi = chol[,c(4)] (tỷ số trọng lượng)
> hdl = chol[,c(5)] (high density cholesterol)
> ldl = chol[,c(6)] low density cholesterol)
> tc = chol[,c(7)] (total – cholesterol)
> tg = chol[,c(8)] (triglycerides)
                </pre>
              </div>
              <div class="col-12 col-sm-6">
                <center>
                  <img src="./assets/img/PTTK/chap3/img8.png" alt="" class="w-75">
                </center>
              </div>
            </div>
          </div>

            `],
            ['Biểu đồ thanh','TKPTDL32',`
            <p><b>Biểu đồ thanh</b></p>
          <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse321" role="button" aria-expanded="false"
              aria-controls="collapse321">
              Biến ngẫu nhiên rời rạc
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse322" role="button" aria-expanded="false"
              aria-controls="collapse322">
              Biến ngẫu nhiên liên tục
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse323" role="button" aria-expanded="false"
              aria-controls="collapse323">
              Biến ngẫu nhiên liên tục kết hợp 2 biến age và sex
            </a>
          </p>

          <div>
            <div class="collapse" id="collapse321">
              <div class="card card-body">
                <div class="container">
                  <div class="row">
                    <div class="col-12 col-sm-6">
                      <b style="color: red;">barplot</b>
                      <p><b>Biến ngẫu nhiên rời rạc</b>: Ta sử dụng biến sex để vẽ biểu đồ thanh cho 2 loại giới tính:
                        nam và nữ</p>
                      <p><b>Cách 1</b></p>
                      <pre>
            > barplot(table(sex), main=”Frequency of males and females”)
                      </pre>
                      <p><b>Cách 2</b></p>
                      <pre>
            > sex.freq <- table(sex)
            > barplot(sex.freq,horiz = TRUE,col = rainbow(length(sex.freq)),main="Frequency of males and females")
                      </pre>
                    </div>
                    <div class="col-12 col-sm-6">
                      <center>
                        <img class="w-75" src="./assets/img/PTTK/chap3/img9.png" alt="">
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="collapse" id="collapse322">
              <div class="card card-body">
                <div class="container">
                  <div class="row">
                    <div class="col-12 col-sm-6">
                      <p><b>Biến ngẫu nhiên liên tục:</b> Ta sử dụng biến age để
                        vẽ biểu đồ thanh.</p>
                      <p>Tuổi chia làm các nhóm tuổi, sau đó vẽ đồ thị.</p>
                      <p>Ví dụ:</p>
                      <center>
                        <img src="./assets/img/PTTK/chap3/img11.png" alt="" class="w-75">
                      </center>
                      <p>Như vậy có 19 bệnh nhân ở độ tuổi 42 - 54.7, ...</p>
                    </div>
                    <div class="col-12 col-sm-6">
                      <center>
                        <img src="./assets/img/PTTK/chap3/img10.png" alt="" class="w-75">
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="collapse" id="collapse323">
              <div class="card card-body">
                <div class="container">
                  <div class="row">
                    <div class="col-12 col-sm-6">
                      <p>Ta muốn kết hợp <b>độ tuổi</b> và <b>giới tính</b> thì dùng table</p>
                      <center>
                        <img src="./assets/img/PTTK/chap3/img12.png" alt="" class="w-75">
                      </center>
                      <p>hoặc vẽ lệnh</p>
                      <pre>
> barplot(age.sex, beside=TRUE, xlab="Age group")
                      </pre>
                    </div>
                    <div class="col-12 col-sm-6">
                      <center>
                        <img src="./assets/img/PTTK/chap3/img13.png" alt="" class="w-75">
                      </center>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

            `],
            ['Biểu đồ bánh','TKPTDL33',`
            <p><b>Biểu đồ bánh</b></p>

            <div class="container">
              <div class="row">
                <div class="col-12 col-sm-6">
                  <p>Ví dụ: Ta sử dụng biến age</p>
                  <pre>
  > pie(table(ageg))
            </pre>
                  <p>Hoặc</p>
                  <pre>
  > pie(table(cut(age,5)))
            </pre>
                  <p>Ví dụ: Ta sử dụng biến sex</p>
                  <pre>
  > pie(table(sex))
            </pre>
                </div>
                <div class="col-12 col-sm-6">
                  <center>
                    <img src="./assets/img/PTTK/chap3/img14.png" alt="" class="w-100">
                  </center>
                </div>
              </div>
            </div>
            `]
        ]
    },
    TKPTDL4: {
        title: 'Biểu đồ phân bố (HISTOGRAM)',
        index: [
            ['Nội dung chính', 'TKPTDL41', `
            <p>Lệnh: <b style="color: red;">hist</b></p>

    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-sm-6">
          <p>Ví dụ: Ta sử dụng biến age</p>
          <pre>
> hist(age)
          </pre>
          <br>
          hoặc
          <br>
          <pre>
> hist(age, main="Frequency distribution by age group", xlab="Age group", ylab="No of patients")
          </pre>
          <p>Ta cũng có thể biến đổi biểu đồ thành một đồ thị hàm
            mật độ xác suất bằng hàm <i>plot(density)</i></p>
          <pre>
> plot(density(age),add=TRUE)
            </pre>
        </div>
        <div class="col-12 col-sm-6">
          <center>
            <img src="./assets/img/PTTK/chap3/img7.png" alt="" class="w-75">
          </center>
        </div>
      </div>
    </div>
            `]
        ]
    },
    TKPTDL5: {
        title: 'Biểu đồ hộp (BOX PLOT)',
        index: [
            ['Nội dung chính','TKPTDL51',`
            <p>Lệnh: <b style="color: red;">boxplot</b></p>

    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-sm-6">
          <ul>
            <li><span style="color: blue;">Boxplot</span> dùng để vẽ tứ phân vị bao gồm: min, Q1, Q2 (trung vị), Q3, max
            </li>
            <li>Ví dụ: Ta sử dụng biến <span style="color: blue">tc (total cholesterol)</span>
              <br>
              <pre>
      > setwd("D:/R")
      > chol <- read.table("chol.txt", header = TRUE)
      > tc = chol[,c(7)]
      > boxplot(tc, main="Box plot of total
      cholesterol", ylab="mg/L")
            </pre>
            </li>
            <li>
              Ta có thể so sánh tc giữa hai nhóm tuổi:
              <br>
              <pre>
      > boxplot(tc ~ cut(age,2), main=”Box plot of total cholestrol by age”, ylab="mg/L“, col = “pink”)
            </pre>
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm-6">
          <center>
            <img src="./assets/img/PTTK/chap3/img6.png" alt="" class="w-75">
          </center>
        </div>
      </div>
    </div>
            `]
        ]
    },
    TKPTDL6:{
        title: `Biểu đồ tán xạ (SCATTER PLOT)`,
        index: [
            ['Nội dung chính','TKPTDL61',`
            <p>Lệnh: <b style="color: red;">plot</b></p>


    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-sm-6">
          <ul>
            <li>Biểu đồ dùng phân tích cho 2 biến liên tục</li>
            <li>Ví dụ: tìm hiểu mối liên hệ giữa tc và hdl
              <br>
              <pre>
> plot(tc, hdl)
              </pre>
            </li>
            <li>Ta muốn phân biệt giới tính (nam và nữ) trong biểu đồ trên. Để vẽ biểu đồ đó, chúng ta phải dùng đến hàm
              ifelse
              <br>
              <pre>
> plot(tc, hdl, pch=ifelse(sex=="Nam", 16, 24))
              </pre>
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm-6">
          <center>
            <img src="./assets/img/PTTK/chap3/img5.png" alt="" class="w-75">
          </center>
        </div>
      </div>
    </div>
            `]
        ]
    }
}