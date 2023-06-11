const ATTT6 = {
  ATTT01: {
    title: 'Nội dung',
    index: [
      ['Nội dung', 'ATTT011', `
            <div>
    <p>
      <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse1" role="button"
        aria-expanded="false" aria-controls="collapse1">
        Giới thiệu
      </a>
      <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse2" role="button"
        aria-expanded="false" aria-controls="collapse2">
        Đặc điểm
      </a>
      <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse3" role="button"
        aria-expanded="false" aria-controls="collapse3">
        Input và Ouput
      </a>
      <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse4" role="button"
        aria-expanded="false" aria-controls="collapse4">
        Biểu diễn ma trận Byte trong AES
      </a>
      <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse5" role="button"
        aria-expanded="false" aria-controls="collapse5">
        Trạng thái Stage
      </a>
      <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse6" role="button"
        aria-expanded="false" aria-controls="collapse6">
        Biểu diễn trạng thái
      </a>
      <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse7" role="button"
        aria-expanded="false" aria-controls="collapse7">
        Các hàm, ký hiệu và các tham số của thuật toán
      </a>
      <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse8" role="button"
        aria-expanded="false" aria-controls="collapse8">
        Mô hình thuật toán mã hóa và giải mã AES
      </a>
      <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse9" role="button"
        aria-expanded="false" aria-controls="collapse9">
        Số lần lặp
      </a>
      <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse10" role="button"
        aria-expanded="false" aria-controls="collapse10">
        Hàm SUBBYTES()
      </a>
      <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse11" role="button"
        aria-expanded="false" aria-controls="collapse11">
        Hàm SHIFT_ROWS()
      </a>
      <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse12" role="button"
        aria-expanded="false" aria-controls="collapse12">
        Hàm MIX_COLUMNS()
      </a>
      <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse13" role="button"
        aria-expanded="false" aria-controls="collapse13">
        Hàm ADDROUNDKEY()
      </a>
      <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse14" role="button"
        aria-expanded="false" aria-controls="collapse14">
        Mở rộng khóa
      </a>
      <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse15" role="button"
        aria-expanded="false" aria-controls="collapse15">
        Hàm SUBBYTE() và ROTWORD
      </a>
      <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse16" role="button"
        aria-expanded="false" aria-controls="collapse16">
        RCON
      </a>
      <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse17" role="button"
        aria-expanded="false" aria-controls="collapse17">
        Mô hình thuật toán mã hóa và giải mã AES
      </a>
    </p>
    <div>
      <div class="collapse" id="collapse1">
        <div class="card card-body">
          <h4>Giới thiệu</h4>

          <ul>
            <li>AES chuẩn mã hóa tiên tiến</li>
            <li>NIST phát hành ngày 26/11/2021</li>
            <li>Được tạo bởi 2 nhà mật mã học người Bỉ là Joan Daemen và Vincent Rijmen</li>
            <li>TCVN 7816:2007 năm 2007 về Thuật toán mã hóa dữ liệu</li>
          </ul>
        </div>
      </div>
      <div class="collapse" id="collapse2">
        <div class="card card-body">
          <h4>Đặc điểm</h4>

          <ul>
            <li>AES là một thuật toán mã khóa khối (128 bít dữ liệu) đối xứng</li>
            <li>Độ dài khóa là 128, 192 hoặc 256 bits tương ứng AES-128, AES-192 và AES-256</li>
            <li>Vòng lặp chính của AES thực hiện các hàm sau:
              <ul>
                <li>SubBytes() - thay thế các byte dữ liệu (trạng thái)</li>
                <li>ShiftRows() - dịch vòng dữ liệu (trạng thái)</li>
                <li>MixColumns() - trộn cột dữ liệu (trạng thái) vào</li>
                <li>AddRoundKey() - Chèn khóa vòng</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="collapse" id="collapse3">
        <div class="card card-body">
          <h4>Input và Ouput</h4>
          <ul>
            <li>Input và Ouput: các dãy 128 bit, còn gọi là các khối (block)</li>
            <li>Khóa: độ dài 128, 192 hoặc 256 bit</li>
            <li>Chuẩn mã hóa dữ liệu cao cấp không làm việc với các giá trị input, output và khóa có các độ dài khác
            </li>
            <li>Các bit của input, output và khóa của hệ mã được đánh số từ 0</li>
          </ul>
        </div>
      </div>
      <div class="collapse" id="collapse4">
        <div class="card card-body">
          <h4>Biểu diễn ma trận Byte trong AES</h4>

          <ul>
            <li>Đơn vị xử lý cơ bản trong AES là 1 byte</li>
            <li>Các giá trị input, output và khóa: mảng các byte</li>
            <li>Ký hiệu: a<sub>n</sub> hoặc a[n]
              <ul>
                <li>Khóa có độ dài 128 bit: 0 &le; n &gt; 16</li>
                <li>Khóa có độ dài 192 bit: 0 &le; n &lt; 24</li>
                <li>Khóa có độ dài 256 bit: 0 &le; n &gt; 32</li>
              </ul>
            </li>
            <li>Các giá trị Byte được biểu diễn bằng dãy bit 0 hoặc 1
              <br>
              <center>
                b<sub>7</sub>x<sup>7</sup>
                +
                b<sub>6</sub>x<sup>6</sup>
                +
                b<sub>5</sub>x<sup>5</sup>
                +
                b<sub>4</sub>x<sup>4</sup>
                +
                b<sub>3</sub>x<sup>3</sup>
                +
                b<sub>2</sub>x<sup>2</sup>
                +
                b<sub>1</sub>x<sup>1</sup>
                +
                b<sub>0</sub>x<sup>0</sup>

                =
                <span style="position: relative; font-size: 32px;">
                  <span style="
                  position: absolute; 
                  top:-10px; 
                  font-size: 12px;
                  right: 0;
                  left: 0;
                  ">7</span>
                  &sum;
                  <span style="
                  position: absolute; 
                  top:42px; 
                  font-size: 12px;
                  right: 0;
                  left: 0;
                  ">
                    i=0
                  </span>
                </span>
                b<sub>i</sub>x<sup>i</sup>
              </center>
            </li>
            <br>
            <li>Ví dụ: giá trị {01100011} tương đương với phần tử trên trường hữu hạn x<sup>6</sup> + x<sup>5</sup> + x
              + 1</li>
          </ul>
        </div>
      </div>
      <div class="collapse" id="collapse5">
        <div class="card card-body">
          <h4>Trạng thái Stage</h4>

          <center>
            <img src="./assets/img/CNPM/Chap6/img1.png" alt="" class="col-12 col-sm-8">
            <p>Các trạng thái của AES</p>
          </center>
        </div>
      </div>
      <div class="collapse" id="collapse6">
        <div class="card card-body">
          <h4>Biểu diễn trạng thái</h4>

          <p>Bốn cột của mảng trạng thái của thuật toán tạo thành 4 word 32-bit w0, w1, ..., w3 được biểu diễn như sau:
          </p>

          <center>
            <table class="col-12">
              <tr>
                <td style="text-align: center;">
                  w<sub>0</sub> =
                  s<sub>0,0</sub> s<sub>1,0</sub> s<sub>2,0</sub> s<sub>3,0</sub>
                </td>
                <td style="text-align: center;">
                  w<sub>1</sub> =
                  s<sub>0,1</sub> s<sub>1,1</sub> s<sub>2,1</sub> s<sub>3,1</sub>
                </td>
              </tr>
              <tr>
                <td style="text-align: center;">
                  w<sub>2</sub> =
                  s<sub>0,2</sub> s<sub>1,2</sub> s<sub>2,2</sub> s<sub>3,2</sub>
                </td>
                <td style="text-align: center;">
                  w<sub>3</sub> =
                  s<sub>0,3</sub> s<sub>1,3</sub> s<sub>2,3</sub> s<sub>3,3</sub>
                </td>
              </tr>
            </table>
          </center>
        </div>
      </div>
      <div class="collapse" id="collapse7">
        <div class="card card-body">
          <h4>Các hàm, ký hiệu và các tham số của thuật toán</h4>

          <table>
            <tr>
              <td>
                <ul style="list-style-type: '- ';">
                  <li>AES</li>
                  <li>Biến đổi Affine</li>
                  <li>Bit</li>
                  <li>Block</li>
                  <li>Byte</li>
                  <li>Cipher</li>
                  <li>Cipher key</li>
                  <li>Thủ tục sinh khóa (Key Expansion)</li>
                  <li>Round Key</li>
                  <li>Trạng thái (State)</li>
                  <li>S-box</li>
                  <li>Word</li>
                </ul>
              </td>
              <td>
                <ul style="list-style-type: '- ';">
                  <li>AddRoundKey()</li>
                  <li>InvMixColumns()</li>
                  <li>InvShiftRows()</li>
                  <li>InvSubBytes()</li>
                  <li>K</li>
                  <li>InvSubBytes()</li>
                  <li>Nb</li>
                  <li>Nk</li>
                  <li>Rcon()</li>
                  <li>RotWord()</li>
                  <li>ShiftRow()</li>
                  <li>SubByte()</li>
                  <li>SubWord()</li>
                  <li>XOR</li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="collapse" id="collapse8">
        <div class="card card-body">
          <h4>Mô hình thuật toán mã hóa và giải mã AES</h4>

          <center>
            <p><b>Khóa có độ dài 128, 192, và 256 có số lần lặp lần lượt là 10, 12, 14</b></p>

            <center>
              <img src="./assets/img/CNPM/Chap6/img2.png" alt="" class="col-12 col-sm-8 col-lg-6">
              <img src="./assets/img/CNPM/Chap6/img3.png" alt="" class="col-12 col-sm-8 col-lg-6">
            </center>
          </center>
        </div>
      </div>
      <div class="collapse" id="collapse9">
        <div class="card card-body">
          <h4>Số lần lặp</h4>

          <ul>
            <li>Độ dài của input, output và các trạng thái (state) của chuẩn mã hóa cao cấp AES là 128 bit tương ứng với giá trị của Nb = 4 (là số lượng các word 32-bit và cũng là số cột của mỗi trạng thái)</li>
            <li>Khóa của AES có độ dài là 128, 192 hoặc 256 bit tương ứng với các giá trị của Nk là 4, 6 hoặc 8 và cũng là số cột của khóa mã hóa</li>
            <li>Tương ứng với độ dài của khóa sử dụng số vòng lặp của thuật toán Nr nhận các giá trị 10 (Nk = 4), 12 (Nk = 6) hoặc 14 (Nk = 8)</li>
          </ul>

          <center>
            <img src="./assets/img/CNPM/Chap6/img4.png" alt="" class="col-12 col-sm-6">
          </center>
        </div>
      </div>
      <div class="collapse" id="collapse10">
        <div class="card card-body">
          <h4>Hàm SUBBYTES()</h4>

          <p>Thực hiện phép thay thế các byte của mảng trạng thái bằng cách sử dụng một bảng thế S-BOX</p>

          <center>
            <img src="./assets/img/CNPM/Chap6/img5.png" alt="" class="col-12 col-sm-8">
          </center>

          <p>Hộp S-BOX</p>

          <center>
            <img src="./assets/img/CNPM/Chap6/img6.png" alt="" class="col-12 col-sm-8">
          </center>
        </div>
      </div>
      <div class="collapse" id="collapse11">
        <div class="card card-body">
          <h4>Hàm SHIFT_ROWS()</h4>

          <p>Áp dụng lên mảng trạng thái bằng cách dịch vòng 3 hàng cuối của mảng trạng thái với số lần dịch khác nhau</p>

          <center>
            <img src="./assets/img/CNPM/Chap6/img7.png" alt="" class="col-12 col-sm-8">
          </center>
        </div>
      </div>
      <div class="collapse" id="collapse12">
        <div class="card card-body">
          <h4>Hàm MIX_COLUMNS()</h4>

          <p>Làm việc trên các cột của mảng trạng thái. Các cột được coi như là đa thức gồm 4 hạng tử và được nhân với modulo x<sup>4</sup> + 1 với đa thức cố định</p>

          <center>
            <img src="./assets/img/CNPM/Chap6/img8.png" alt="" class="col-12 col-sm-8">
          </center>

          
        </div>
      </div>
      <div class="collapse" id="collapse13">
        <div class="card card-body">
          <h4>Hàm ADDROUNDKEY()</h4>
          <p>Một khóa vòng sẽ được cộng vào mảng trạng thái bit bằng một thao tác XOR bit</p>

          <center>
            <img src="./assets/img/CNPM/Chap6/img9.png" alt="" class="col-12 col-sm-8">
          </center>
        </div>
      </div>
      <div class="collapse" id="collapse14">
        <div class="card card-body">
          <h4>Mở rộng khóa</h4>

          <p>Sinh khóa con cho các vòng lặp: Gồm 4 bước</p>

          <ul>
            <li>RotWord: Quay trải 8 bít</li>
            <li>SubBytes</li>
            <li>Rcon: tính giá trị Rcon(i). Trong đó
              <br>
              Rcon(i) = x(i-1)mod(x<sup>8</sup>+x<sup>4</sup>+x<sup>3</sup>+x+1)
            </li>
            <li>ShiftRow</li>
          </ul>

          <center>
            <img src="./assets/img/CNPM/Chap6/img10.png" alt="" class="col-12 col-sm-8">
          </center>
        </div>
      </div>
      <div class="collapse" id="collapse15">
        <div class="card card-body">
          <h4>Hàm SUBBYTE() và ROTWORD</h4>

          <ul>
            <li><b>SubBytes()</b>
              <br>
              <ul>
                <li>Biến đổi 4 bytes đầu vào thành 4 bytes đầu ra bằng cách dùng S-box lên từng byte</li>
                <li>SubBytes(X) = [S-Box(X[31-24]), S-Box(X[23-16]), S-Box(X[15-8]), S-Box(X[7-1])</li>
                <li>Ví dụ: SubBytes(3c4fcf09) = 093c4fcf</li>
              </ul>
            </li>
            <li><b>RotWord()</b>
              <br>
              <ul>
                <li>Thực hiện hoán vị vòng một DoubleWord thành một DoubleWord</li>
                <li>RotWord(X[31-0]) = [X[7-0], X[31-24], X[23-16], X[15-8]]</li>
                <li>Ví dụ: RotWord(3c4fcf09) = 093c4fcf</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="collapse" id="collapse16">
        <div class="card card-body">
          <h4>RCON</h4>

          <ul>
            <li>Rcon - mảng chứa hằng số sử dụng trong các vòng lặp</li>
            <li>Rcon[i] chứa các giá trị nhận được bởi {02}^(i-1), {00}, {00}, {00}</li>
          </ul>
          <center>
            <img src="./assets/img/CNPM/Chap6/img11.png" alt="" class="col-12 col-sm-8">
          </center>
        </div>
      </div>
      <div class="collapse" id="collapse17">
        <div class="card card-body">
          <h4>Mô hình thuật toán mã hóa và giải mã AES</h4>

          <center>
            <img src="./assets/img/CNPM/Chap6/img12.png" alt="" class="col-12 col-sm-8">
          </center>
        </div>
      </div>
    </div>
  </div>
            `]
    ]
  },
  ATTT011: {
    title: 'Video bài giảng',
    index: [
      ['ĐH Trà Vinh', 'ATTT0111', `
                    <p>Bài giảng <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220126_AntoanvaBaomatThongtin/Video/Chuong6.mp4" target="_blank">Link</a></p>
                `],
      ['Youtube', 'ATTT0112', ``],
    ]
  }
}