var LTUDWindows5 = {
    LTUDWindows1: {
        title: `Giới thiệu về ADO.NET`,
        index: [
            ['Giới thiệu', 'LTUDWindows11', `
            <div>
          <p>ADO.NET (ActiveX Data Object .NET): là công nghệ của MS trên .NET FrameWork, phát triển từ nền tảng ADO,
            cung cấp các lớp đối tượng và hàm thư viện phục vụ cho kết nối và xử lý dữ liệu.</p>
          <p>ADO.NET cho phép tương tác với các loại dữ liệu và các kiểu cơ sở dữ liệu. Mỗi loại dữ liệu cần một cách
            thức khác nhau để truy xuất (các loại dữ liệu cũ sử dụng giao thức ODBC, các loại dữ liệu mới hơn sử dụng
            giao thức OleDb) => vì vậy cần một thư viện thống nhất để làm việc với tất cả các loại dữ liệu, đó chính là
            ADO.NET.</p>
          <p>Kiến trúc ADO.NET gồm 2 phần:</p>
          <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse111" role="button" aria-expanded="false"
              aria-controls="collapse111">
              Phần kết nối
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse112" role="button" aria-expanded="false"
              aria-controls="collapse112">
              Phần ngắt kết nối
            </a>
          </p>

          <div>
            <div class="collapse" id="collapse111">
              <div class="card card-body">
                <p><b>Phần kết nối</b></p>
                <p>Sử dụng khi kết nối CSDL và thao tác với dữ liệu, phải
                  thực hiện kết nối khi thao tác.</p>
                <ul>
                  <li><b>Connection</b>: quản lý đóng/mở database.</li>
                  <li><b>Command</b>: lệnh truy vấn, tương tác dữ liệu khi đang kết nối</li>
                  <li><b>DataReader</b>: đọc dữ liệu, chỉ xử lý 1 dòng dữ liệu tại một thời điểm</li>
                  <li><b>DataAdapter</b>: đối tượng trung gian giúp database và dataset kết nối</li>
                </ul>
              </div>
            </div>
            <div class="collapse" id="collapse112">
              <div class="card card-body">
                <p><b>Phần ngắt kết nối</b>: Dataset</p>
                <ul>
                  <li>DataSet không quan tâm đến database, chỉ lấy dữ liệu từ DataAdapter để xử lý.</li>
                  <li>DataSet được xem như một database trong bộ nhớ</li>
                  <li>DataSet có các thành phần như: DataTable, DataRow, DataColumn, DataRelation....
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
            `],
            ['Data Provider', 'LTUDWindows12', `
            <div>
          <h4>Data Provider</h4>
          <p>ADO.NET cung cấp cách thức chung để tương tác với nguồn dữ liệu nhưng với mỗi loại dữ liệu khác nhau thì
            phải sử dụng thư viện khác nhau (OBDC, OleDb, Oracle, SQL). Các thư viện này được gọi là Data Provider và
            thường được đặt tên theo giao thức hoặc loại dữ liệu cho phép truy xuất</p>
          <center>
            <img src="./assets/img/LTUDWindows/chap5/img1.png" alt="" class="w-75">
          </center>
        </div>
            `],
            ['Các đối tượng của ADO.NET', 'LTUDWindows13', `
            <div>
          <h4>Các đối tượng của ADO.NET</h4>
          <ul>
            <ul>
              <li><b>SqlConnection</b>: dùng để kết nối với cơ sở dữ liệu (database), Khi kết nối với data thì cần phải
                cung cấp: tên máy chủ (Database server), tên cơ sở dữ liệu (database name), người dùng (username – nếu
                cần), mật khẩu (password – nếu cần) và các tham số cần thiết khác.</li>
              <li><b>SqlCommand</b>: Dùng để thực thi các câu truy vấn sau khi kết nối thành công.</li>
              <li><b>SqlDataReader</b>: Dùng để đọc dữ liệu từ cơ sở dữ liệu</li>
              <li><b>Dataset</b>: để chứa dữ liệu theo dạng dòng, cột giống như table.</li>
              <li><b>SqlDataAdapter</b>: là nơi để lưu dữ liệu tạm thời khi giúp hạn chế truy xuất đến cơ sở dữ liệu
              </li>
            </ul>
          </ul>
        </div>
            `]
        ]
    },
    LTUDWindows2: {
        title: `Đối tượng SQLCONNECTION`,
        index: [
            ['Giới thiệu', 'LTUDWindows21', `
            <div>
          <h4>Giới thiệu</h4>
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-sm-6">
                <p><b>SqlConnection</b> dùng để kết nối với cơ sở dữ liệu SQL</p>
                <p>Thuộc tính và phương thức thường dùng</p>
                <ul>
                  <li><b>ConnectionString</b>: Chuỗi kết nối đến DataBase</li>
                  <li><b>Open():</b> Mở kết nối đến DataBase</li>
                  <li><b>Close():</b> Đóng kết nối</li>
                </ul>
              </div>
              <div class="col-12 col-sm-6">
                <center>
                  <img src="./assets/img/LTUDWindows/chap5/img2.png" alt="" class="w-100">
                </center>
              </div>
            </div>
          </div>

        </div>
            `],
            ['Tạo đối tượng SqlConnection', 'LTUDWindows22', `
            <div>
          <h4>Tạo đối tượng SqlConnection</h4>

          <p>Cú pháp</p>
          <pre>
SqlConnection conn = new SqlConnection
{
  "Data Source=DESKTOP-012NMST
  Initial Catalog=QuanLySinhVien;
  Integrated Security=True";

}
          </pre>
        </div>
            `],
            ['Sử dụng đối tượng SqlConnection', 'LTUDWindows23', `
            <div>
          <h4>Sử dụng đối tượng SqlConnection</h4>

          <p>Sau khi kết nối thành công thì các đối tượng khác trong ADO.NET mới có thể thao tác được với database. Các
            bước sử dụng đối tượng SqlConnection</p>
          <ul>
            <li><b>Bước 1.</b> Tạo SqlConnection</li>
            <li><b>Bước 2.</b> Mở Connection</li>
            <li><b>Bước 3.</b> Truyền connection có các đối tượng khác sử dụng.</li>
            <li><b>Bước 4.</b> Thực hiện các thao tác với database</li>
            <li><b>Bước 5.</b> Đóng connection
            </li>
          </ul>

          <p><b>Ví dụ</b>. Thực hiện kết nối và hiển thị thông báo tương ứng
          </p>

          <center>
            <img src="./assets/img/LTUDWindows/chap5/img3.png" alt="" class="w-75">
          </center>

          <pre>
static String connStr1 = "Data Source=DESKTOP-012NMST;Initial 
Catalog=QLGIANGVIEN;Integrated Security=True";
SqlConnection conn = new SqlConnection(connStr1);
void loginSystem(){
  try{
    conn.Open();
    MessageBox.Show("Kết nối thành công!!!", "Thông báo");
  }
  catch{
    MessageBox.Show("Kết nối thất bại!!!", "Thông báo");
  }
  finally{
    conn.Close();
  }
}
          </pre>
        </div>
            `]
        ]
    },
    LTUDWindows3: {
        title: `Đối tượng SQLCOMMAND`,
        index: [
            ['Giới thiệu', 'LTUDWindows31', `
            <h4>Giới thiệu</h4>
            <p>Đối tượng <b>SqlCommand</b> cho phép tương tác (select, update, delete,...) với cơ sở dữ liệu</p>
  
            <center>
              <img src="./assets/img/LTUDWindows/chap5/img4.png" alt="" class="w-75">
            </center>
            `],
            ['Tạo đối tượng SqlCommand', 'LTUDWindows32', `
            <h4>Tạo đối tượng SqlCommand</h4>

            <p><b>Cú pháp</b></p>
            <pre>
  SqlCommand cmd = new SqlCommand
  (
    "Select * from Login", conn
  );            
            </pre>
            `],
            ['Query Data - truy vấn dữ liệu', 'LTUDWindows33', `
            <h4>Query Data - truy vấn dữ liệu</h4>
            <p>Sử dụng phương thức <b>ExecuteReader()</b> của đối tượng SqlCommand để lấy dữ liệu từ cơ sở dữ liệu, dữ
              liệu trả về thường dùng SqlDataReader để lưu dữ liệu</p>
            <p>Cú pháp</p>
            <pre>
  SqlDataReader rdr = cmd.ExecuteReader();
            </pre>
  
            <center>
              <img src="./assets/img/LTUDWindows/chap5/img5.png" alt="" class="w-75">
              <img src="./assets/img/LTUDWindows/chap5/img6.png" alt="" class="w-75">
            </center>
  
            <pre>
  private void btnDangNhap_Click(object sender, EventArgs e)
  {
      String tendn = txtTenDN.Text;
      String mk = txtMatKhau.Text;
      conn.Open();
      SqlCommand cmd = new SqlCommand( "Select * from TaiKhoan where TenDN = '“ + tendn + "' and MatKhau = '"+ mk + "'", conn);
      SqlDataReader rdr = cmd.ExecuteReader();
      if (rdr.Read())
      {
        fGiangVien f = new fGiangVien();
        this.Hide();
        f.ShowDialog();
      }
      else
        MessageBox.Show("Tên tài khoản hoặc mật khẩu không chính xác!!!");
      conn.Close();
  }
            </pre>
            `],
            ['Inserting Data – Chèn dữ liệu', 'LTUDWindows34', `
            <h4>Inserting Data – Chèn dữ liệu</h4>

            <p>Sử dụng phương thức <b>ExecuteNonQuery()</b> của đối tượng SqlCommand để lấy dữ liệu từ cơ sở dữ liệu.</p>
  
            <p>Cú pháp</p>
            <pre>
  String insertdata = @"insert into Login (UserName, Password, Type) values ('phuong','123456','0')";
  SqlCommand cmd = new SqlCommand(insertdata, conn);
  cmd.ExecuteNonQuery();
            </pre>
  
            <p>Ví dụ: Thêm dữ liệu</p>
            <center>
              <img src="./assets/img/LTUDWindows/chap5/img7.png" alt="" class="w-75">
            </center>
            <pre>
  private void btnThemSV_Click(object sender, EventArgs e)
  {
      conn.Open();
      String sql = @"insert into GiangVien "+
      "values ('"+ txtMaGV.Text +"',N'" + txtHoTen.Text + "‘, 
      '"+txtNamSinh.Text+"','"+txtDienThoai.Text+"',
      N'"+cmbGioiTinh.Text+"',N'"+cmbDiaChi.Text+"')";
      SqlCommand cmd = new SqlCommand(sql1, conn);
      cmd.ExecuteNonQuery();
      conn.Close();
      LoadData();
  }
              
            </pre>
            `],
            ['Updating Data – Cập nhật dữ liệu', 'LTUDWindows35', `
            <h4>Updating Data – Cập nhật dữ liệu</h4>
          <p>Cũng sử dụng phương thức <b>ExecuteNonQuery()</b> của đối tượng SqlCommand để cập nhật dữ liệu.</p>

          <p>Cú pháp</p>

          <pre>
String updatedata = @"Update Login set PassWord ='678901' where UserName ='Phuong'";
SqlCommand cmd = new SqlCommand(updatedata, conn);
cmd.ExecuteNonQuery();
          </pre>

          <p>Ví dụ: cập nhật dữ liệu</p>

          <center>
            <img src="./assets/img/LTUDWindows/chap5/img8.png" alt="" class="w-75">
          </center>

          <pre>
private void btnSuaSV_Click(object sender, EventArgs e)
{
    conn.Open();
    String sql = @"Update GiangVien set HoTen =N'" + txtHoTen.Text+ "',
    NamSinh = '"+txtNamSinh.Text+"', GioiTinh =N'"+cmbGioiTinh.Text+"', 
    DienThoai = '"+txtDienThoai.Text+"', DiaChi = N'"+cmbDiaChi.Text+"' 
    where MaGV ='" + txtMaGV.Text + "'";
    SqlCommand cmd = new SqlCommand(sql1, conn);
    cmd.ExecuteNonQuery();
    conn.Close();
    LoadData();
}

          </pre>
            `],
            ['Deleting Data – Xóa dữ liệu', 'LTUDWindows36', `
            <h4>Deleting Data – Xóa dữ liệu</h4>
          <p>Cũng sử dụng phương thức ExecuteNonQuery() của đối tượng
            SqlCommand để xóa dữ liệu</p>
          <p><b>Cú pháp</b></p>

          <pre>
String updatedata = @"Delete From Login where UserName ='Phuong'";
SqlCommand cmd = new SqlCommand(updatedata, conn); 
cmd.ExecuteNonQuery();            
          </pre>

          <p>Ví dụ: Xóa dữ liệu</p>
          <center>
            <img class="w-75" src="./assets/img/LTUDWindows/chap5/img9.png" alt="">
          </center>

          <pre>
private void btnXoaSV_Click(object sender, EventArgs e)
{
    conn.Open();
    String sql = @"Delete From GiangVien 
    where MaGV ='" + txtMaGV.Text + "'";
    String sql1 = "SP_XoaGV '"+ txtMaGV.Text + "'";
    SqlCommand cmd = new SqlCommand(sql1, conn);
    cmd.ExecuteNonQuery();
    conn.Close();
    LoadData();
}

          </pre>
            `],
            ['Lấy giá trị đơn', 'LTUDWindows37', `
            <div>
          <p>Sử dụng phương thức <b>ExecuteScalar()</b> của đối tượng SqlCommand để lấy về một giá trị nào đó: đếm,
            tổng, trung bình,...</p>
          <p>Cú pháp</p>

          <pre>
String updatedata = @"Select count(*) from Login";
SqlCommand cmd = new SqlCommand(updatedata, conn);
int count = (int)cmd.ExecuteScalar();
          </pre>

          <p>Ví dụ: Thống kê số lượng giảng viên
          </p>

          <center>
            <img src="./assets/img/LTUDWindows/chap5/img10.png" alt="" class="w-75">
          </center>

          <pre>
private void btnDem_Click(object sender, EventArgs e)
{
    conn.Open();
    String sql = @"Select count(*) from GiangVien";
    SqlCommand cmd = new SqlCommand(sql, conn);
    int count = (int)cmd.ExecuteScalar();
    String msg = String.Format("Số lượng giảng viên là {0}"
    , count);
    MessageBox.Show(msg, "Thông báo");
    conn.Close();
}

          </pre>
        </div>
            `]

        ]
    },
    LTUDWindows4: {
        title: 'Đối tượng SQLDATAREADER',
        index: [
            ['Giới thiệu', 'LTUDWindows41', `
            <div>
          <h4>Giới thiệu</h4>
          <p>SqlDataReader là đối tượng phù hợp để đọc dữ liệu</p>

          <center>
            <img src="./assets/img/LTUDWindows/chap5/img13.png" alt="" class="w-75">
          </center>
        </div>
            `],
            ['Tạo đối tượng và đọc dữ liệu', 'LTUDWindows42', `
            <div>
          <h4>Tạo đối tượng và đọc dữ liệu</h4>

          <div>
            <p><b>Tạo đối tượng</b></p>
            <center>
              <i>SqlDataReader rdr = cmd.ExecuteReader();</i>
            </center>
            <br>
            <p>Phương thức <b>ExecuteReader()</b> của đối tượng <b>SqlCommand</b>, cmd, trả về một thể hiện của
              <b>SqlDataReader</b>
            </p>
          </div>

          <div>
            <p><b>Đọc dữ liệu</b></p>
            <pre>
SqlDataReader dr = cmd.ExecuteReader();
while (dr.Read())
{
  string MaSV= dr[“MaSV"].ToString();
  string HoTen = dr[“HoTen"].ToString();
  int NS = (int)dr[“NamSinh"].ToString();
}
            </pre>
          </div>

          <div>
            <p>Ví dụ</p>
            <center>
              <img src="./assets/img/LTUDWindows/chap5/img14.png" alt="" class="w-75">
            </center>
            <pre>
private void btnTimSV_Click(object sender, EventArgs e){
  conn.Open();
  String sql = "Select * from GiangVien where MaGV = '" + txtMaGV.Text + "'";
  SqlCommand cmd = new SqlCommand(sql, conn);
  SqlDataReader dr = cmd.ExecuteReader();
  String magv="", ht="", gt="", dc="", dt="";
  int ns=0;
  if (dr.Read()) {
    magv = dr["MaGV"].ToString();
    ht = dr["HoTen"].ToString();
    ns = int.Parse(dr["NamSinh"].ToString());
    gt = dr["GioiTinh"].ToString();
    dc= dr["DiaChi"].ToString();
    dt = dr["DienThoai"].ToString();
  }
  else
  MessageBox.Show("Không tìm thấy dữ liệu");
  String msg = String.Format(" MaGV: {0}\n Họ tên: {1} \n Năm Sinh: {2}\n Giới Tính: {3}" + "\n Địa chỉ: {4}\n Điện thoai: {5}", magv, ht, ns, gt, dc, dt);
  MessageBox.Show(msg,"Thông báo");
  conn.Close();
}
            </pre>
          </div>
        </div>
            `],
            ['Dataset - SQLDataAdapter', 'LTUDWindows43', `
            <div>
          <h4>Dataset - SQLDataAdapter</h4>

          <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse431" role="button" aria-expanded="false"
              aria-controls="collapse431">
              Giới thiệu
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse432" role="button" aria-expanded="false"
              aria-controls="collapse432">
              Tạo đối tượng Dataset và SqlDataAdapter
            </a>
          </p>

          <div>
            <div class="collapse" id="collapse431">
              <div class="card card-body">
                <h4>Giới thiệu</h4>

                <p><b>DataSet</b> là một đối tượng chứa dữ liệu trong bộ nhớ</p>
                <p><b>SqlDataAdapter</b> được dùng để quản lý các kết nối với nguồn dữ liệu và làm việc ở chế độ
                  disconnected. SqlDataAdapter mở một kết nối chỉ khi cần thiết và đóng nó ngay sau khi tác vụ được hoàn
                  thành.</p>

                <center>
                  <img src="./assets/img/LTUDWindows/chap5/img11.png" alt="" class="w-75">
                </center>
              </div>
            </div>
            <div class="collapse" id="collapse432">
              <div class="card card-body">
                <h4>Tạo đối tượng Dataset và SqlDataAdapter</h4>
                <div>
                  <p><b style="color: red;">Tạo đối tượng</b></p>
                  <p><b>Cú pháp</b></p>
                  <center>
                    <i>DataSet dsCustomer = new Dataset()</i>
                  </center>
                </div>

                <div>
                  <p><b style="color: red;">Tạo đối tượng SqlDataAdapter</b></p>
                  <p><b>Cú pháp</b></p>
                  <pre>
SqlDataAdapter adapter = new SqlDataAdapter(cmd);
                  </pre>

                  <p>Đổ dữ liệu vào Dataset</p>

                  <pre>adapter.Fill(data);</pre>

                  <center>
                    <img src="./assets/img/LTUDWindows/chap5/img12.png" alt="" class="w-75">
                  </center>

                  <pre>
private void btnTimTen_Click(object sender, EventArgs e)
{
    conn.Open();
    String sql = "Select * from GiangVien where HoTen like '%“
    + txtHoTen.Text + "%'";
    String sql1 = "SP_TimGVTheoTen '" + txtHoTen.Text.Trim() + "'";
    SqlCommand cmd = new SqlCommand(sql1, conn);
    DataTable data = new DataTable();
    SqlDataAdapter adapter = new SqlDataAdapter(cmd);
    adapter.Fill(data);
    conn.Close();
    dgGiangVien.DataSource = data;
    SinhVienBinding();
}
                  </pre>
                </div>

              </div>
            </div>
          </div>
        </div>
            `],
        ]
    },
    LTUDWindows5: {
      title: 'Tạo báo biểu (REPORT)',
      index: [
        ['Nội dung chính', 'LTUDWindows51', `
        <div>
          <p><b>Nội dung chính</b></p>

          <p><img src="./assets/img/LTUDWindows/chap5/img15.png" alt=""> dùng để tạo báo cáo, tiếp đầu ngữ thường được
            sử dụng: sp</p>

          <img src="./assets/img/LTUDWindows/chap5/img16.png" alt="" class="w-75">

          <p>Để hiển thị lên ReportViewer sử dụng thuộc tính: report (choose Report). Để tạo được Report sử dụng thuộc
            tính: Desgin a new Report - dùng để thiết kế Report</p>

          <p>Thiết kế Report</p>

          <center>
            <img src="./assets/img/LTUDWindows/chap5/img17.png" alt="">
          </center>

          <p>Sử dụng Report</p>

          <pre>
private void btnInBaoCao_Click(object sender, EventArgs e)
{
  // TODO: This line of code loads data into the 'QLSinhVienDataSet.' table. You can move, or remove it, as needed.
  this.SP_TIMSINHVIENTHEOTENTableAdapter.Fill(
  this.QLSinhVienDataSet.SP_TIMSINHVIENTHEOTEN,
  txtTenSV.Text);
  this.reportViewer1.RefreshReport();
}
          </pre>

          <p>Kết quả hiển thị</p>

          <center>
            <img src="./assets/img/LTUDWindows/chap5/img18.png" alt="" class="w-75">
            <img src="./assets/img/LTUDWindows/chap5/img19.png" alt="" class="w-75">
          </center>

          <pre>
private void fReport_Load(object sender, EventArgs e)
{
  this.SP_TimGVTheoTenTableAdapter.Fill(
  this.QLGIANGVIENDataSet.SP_TimGVTheoTen, txtTen.Text);
  this.rpTenGV.RefreshReport();
}

private void btnIn_Click(object sender, EventArgs e)
{
  this.SP_TimGVTheoTenTableAdapter.Fill(
  this.QLGIANGVIENDataSet.SP_TimGVTheoTen, txtTen.Text);
  this.rpTenGV.RefreshReport();
}
          </pre>
        </div>
        `]
      ]
    }
}