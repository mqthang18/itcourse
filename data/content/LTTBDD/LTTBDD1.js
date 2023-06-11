const LTTBDD1 = {
  LTTBDD01: {
    title: 'Giới thiệu về Android',
    index: [
      ['Nội dung', 'LTTBDD011', `
            <ul>
      <li>Android là nền tảng phần mềm mã nguồn mở được Google và Open Handset Alliance tạo ra</li>
      <li>Các dịch vụ hệ thống cơ bản của Android được xây dựng trên Linux 2.6</li>
      <li>Android SDK cung cấp công cụ và API để phát triển ứng dụng Android sử dụng ngôn ngữ Java</li>
      <li>Hệ điều hành được xây dựng trên nền tảng hệ điều hành Linux</li>
      <li>Tổ chức Open Handset Alliance phối hợp với Google để tạo ra Android</li>
      <li>Mỗi version của Android đều có tên gọi, ví dụ phiên bản Android 10 có tên là Android Q, phiên bản Android 13
        có tên là Android Tiramisu</li>
      <li>Hiện tại 2 nền tảng mobile có số lượng người dùng cao nhất là android và iOS</li>
      <li>Các ứng dụng trên Android được viết bằng ngôn ngữ Java và Kotlin</li>
      <li>Công cụ lập trình sử dụng là Android Studio của Google</li>
      <li>Hãng điện thoại Samsum hiện là hãng cần sản xuất điện thoại Android lớn nhất</li>
      <li>Năm 2012 google đã mua lại Motorola nhằm cạnh tranh với Samsung và Apple</li>
      <li>Open Handset alliance</li>
      <li>Liên minh gồm trên 80 công ty cùng xây dựng nền tảng mobile mới (Android)</li>
    </ul>

    <p>
      <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse11" role="button" aria-expanded="false"
        aria-controls="collapse11">
        Lịch sử phát triển của Android
      </a>
      <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse12" role="button" aria-expanded="false"
        aria-controls="collapse12">
        Kiến trúc Android
      </a>
      <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse13" role="button" aria-expanded="false"
        aria-controls="collapse13">
        Môi trường phát triển Android
      </a>
    </p>

    <div>
      <div class="collapse" id="collapse11">
        <div class="card card-body">
          <p><b>Lịch sử phát triển của Android</b></p>

          <center>
            <img src="./assets/img/LTTBDD/chap1/img1.png" class="col-12 col-sm-8" alt="">
            <img src="./assets/img/LTTBDD/chap1/img2.png" class="col-12 col-sm-8" alt="">
          </center>
          <p><b>So sánh các nền tảng mobile platform</b></p>

          <center>
            <img src="./assets/img/LTTBDD/chap1/img3.png" class="col-12 col-sm-8" alt="">
          </center>

          <p><b>Android platform</b></p>

          <ul>
            <li>Là môi trường phần mềm được xây dựng thiết bị di động</li>
            <li>Android bao gồm:
              <ul>
                <li>Hệ điều hành dựa trên nhân Linux</li>
                <li>Giao diện người dùng</li>
                <li>Ứng dụng người dùng cuối</li>
                <li>Thư viện code</li>
                <li>Application framework</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="collapse" id="collapse12">
        <div class="card card-body">
          <p><b>Kiến trúc Android</b></p>

          <center>
            <img src="./assets/img/LTTBDD/chap1/img4.png" alt="" class="col-12 col-sm-8">
          </center>

          <p><b>Nhân Linux</b></p>

          <ul>
            <li>Android dựa trên Linux version 2.6 gồm các dịch vụ hệ thống cơ bản như bảo mật, quản lý bộ nhớ, quản lý
              tiến trình, network và driver</li>
            <li>Nhân linux là tầng trừu tượng giữa phần cứng và software stack</li>
          </ul>

          <center>
            <img src="./assets/img/LTTBDD/chap1/img5.png" alt="" class="col-12 col-sm-8">
          </center>


          <p><b>Thư viện</b></p>

          <ul>
            <li>Android bao gồm tập hợp các thư viện C/C++ sử dụng bởi các thành phần khác nhau của Android System</li>
            <li>Nhà phát triển khai thác thư viện này thông qua Android application framework. Một số thư viện cơ bản
              được liệt kê ở dưới:</li>
          </ul>

          <center>
            <img src="./assets/img/LTTBDD/chap1/img6.png" alt="" class="col-12 col-sm-8">
          </center>

          <p><b>Android runtime</b></p>
          <ul>
            <li>
              Dalvik VM
              <ul>
                <li>Dex files</li>
                <li>Gọn nhẹ và linh hoạt hơn file class</li>
                <li>Tiết kiệm bộ nhớ và pin</li>
              </ul>
            </li>
            <li>
              Thư viện cơ bản:
              <ul>
                <li>Java 5 Std edition</li>
                <li>Collections, I/O etc</li>
              </ul>
            </li>
          </ul>


          <p><b>Application framework</b></p>

          <center>
            <img src="./assets/img/LTTBDD/chap1/img7.png" alt="" class="col-12 col-sm-8">
          </center>

          <ul>
            <li>Nhà phát triển có thể sử dụng framework API được sử dụng bởi core application</li>
            <li>Kiến trúc hệ thống được thiết kế để đơn giản hóa việc tái sử dụng các thành phần</li>
            <li>Các phiên bản Android bao gồm các ứng dụng cơ bản như email, SMS, calendar, map, contact, ...</li>
            <li>Tất cả ứng dụng được viết bằng ngôn ngữ lập trình JAVA</li>
          </ul>

          <center>
            <img class="col-12 col-sm-8" src="./assets/img/LTTBDD/chap1/img8.png" alt="">
          </center>

          <p><b>Dalvik VM</b></p>
          <ul>
            <li>Là công nghệ VM mã nguồn mở do Google phát triển cho hệ điều hành Android</li>
            <li>Register-based virtual architect</li>
            <li>Tất cả ứng dụng được viết bằng Java và chuyển đổi thành file dex có thể chạy được trên Dalvik</li>
          </ul>
          <center>
            <img class="col-12 col-sm-8" src="./assets/img/LTTBDD/chap1/img9.png" alt="">
          </center>
        </div>
      </div>
      <div class="collapse" id="collapse13">
        <div class="card card-body">
          <p><b>Môi trường phát triển của Android</b></p>

          <b>Môi trường phát triển: Eclipse và Android studio</b>
          <ul>
            <li>Android Development Tools (ADT) plugin cho Eclipse để phát triển Android</li>
            <li>Cho phép tạo và gỡ lỗi ứng dụng Android dễ dàng và nhanh chóng</li>
            <li>Hiện nay tất cả người dùng đều sử dụng Android studio IDE</li>
          </ul>
        </div>
      </div>
    </div>
            `]
    ]
  },
  LTTBDD02: {
    title: 'Các thao tác cơ bản với Android',
    index: [
      ['Tạo project Android trên Android Studio', 'LTTBDD021', `
            <p><b>Tạo project Android trên Android Studio</b></p>

            <p><b>Bước 1. Tải và cài đặt android studio</b></p>
  
            <p>Link: https://developer.android.com/studio</p>
  
            <center>
              <img src="./assets/img/LTTBDD/chap1/img11.png" alt="" class="col-12 col-sm-8">
            </center>
  
            <p><b>Cài đặt máy ảo Android emulator</b></p>
            <ul>
              <li>Có thể dùng máy ảo trực tiếp bên android studio</li>
              <li>Hoặc dùng máy ảo của bên thứ 3 như Nox App Player hoặc Genymotion</li>
              <li>Có thể download tại https://www.bignox.com hoặc https://www.genymotion.com/download/</li>
            </ul>
  
            `],
      ['Cấu trúc project', 'LTTBDD022', `
            <p><b>Cấu trúc project</b></p>
            <div>
              <p>
                <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse221" role="button"
                  aria-expanded="false" aria-controls="collapse221">
                  Mở android studio
                </a>
                <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse222" role="button"
                  aria-expanded="false" aria-controls="collapse222">
                  Tạo dự án mới và chọn Empty Activity
                </a>
                <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse223" role="button"
                  aria-expanded="false" aria-controls="collapse223">
                  Đặt tên project và chọn ngôn ngữ lập trình JAVA
                </a>
                <a class="btn btn-primary mt-2 mb-2" data-bs-toggle="collapse" href="#collapse224" role="button"
                  aria-expanded="false" aria-controls="collapse224">
                  Tóm lại
                </a>
              </p>
              <div>
                <div class="collapse" id="collapse221">
                  <div class="card card-body">
                    <p><b>Bước 1. Mở android studio</b></p>
                    <center>
                      <img src="./assets/img/LTTBDD/chap1/img12.png" alt="" class="col-12 col-sm-8">
                    </center>
                  </div>
                </div>
                <div class="collapse" id="collapse222">
                  <div class="card card-body">
                    <p><b>Bước 2. Tạo dự án mới và chọn Empty Activity</b></p>
                    <center>
                      <img src="./assets/img/LTTBDD/chap1/img13.png" class="col-12 col-sm-8" alt="">
                    </center>
                  </div>
                </div>
                <div class="collapse" id="collapse223">
                  <div class="card card-body">
                    <p><b>Bước 3. Đặt tên project và chọn ngôn ngữ lập trình Java</b></p>
                    <center>
                      <img src="./assets/img/LTTBDD/chap1/img14.png" alt="" class="col-12 col-sm-8">
                    </center>
                  </div>
                </div>
                <div class="collapse" id="collapse224">
                  <div class="card card-body">
                    <p><b>Tóm lại</b></p>
  
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-12 col-sm-6">
                          <ul>
                            <li>AndroidManifest.xml: Là file cấu hình ứng dụng</li>
                            <li>Các file java: Là các file chứa code java</li>
                            <li>Các file giao diện XML: Là các file chứa code giao diện</li>
                            <li>File cấu hình thư viện gradle: Là file chứa link thư viện</li>
                          </ul>
                        </div>
                        <div class="col-12 col-sm-6">
                          <center>
                            <img src="./assets/img/LTTBDD/chap1/img15.png" alt="" class="col-12 col-sm-8">
                          </center>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            `],
      ['Biên dịch và gỡ lỗi ứng dụng', 'LTTBDD023', `
            <p><b>Biên dịch và gỡ lỗi ứng dụng</b></p>

            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse231" role="button"
                aria-expanded="false" aria-controls="collapse231">
                Quá trình biên dịch
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse232" role="button"
                aria-expanded="false" aria-controls="collapse232">
                Biên dịch và chạy ứng dụng
              </a>
              <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse233" role="button"
                aria-expanded="false" aria-controls="collapse233">
                Gỡ lỗi ứng dụng
              </a>
            </p>
            <div>
              <div class="collapse" id="collapse231">
                <div class="card card-body">
                  <p><b>Quá trình biên dịch</b></p>
                  <center>
                    <img src="./assets/img/LTTBDD/chap1/img16.png" alt="" class="col-12 col-sm-8">
                  </center>
                </div>
              </div>
              <div class="collapse" id="collapse232">
                <div class="card card-body">
                  <p><b>Biên dịch và chạy ứng dụng</b></p>
                  <ul>
                    <li>Trong tiến trình biên dịch, android project được biên dịch và đóng gói thành file có đuôi aab hoặc apk</li>
                    <li>File chứa các thông tin cần thiết cho chạy chương trình:
                      <ul>
                        <li>Dex file</li>
                        <li>Binary version của Androidmanifest.xml</li>
                        <li>Compiled resource (resources.arsc)</li>
                        <li>Các file chưa compile</li>
                      </ul>
                    </li>
                    <li>Để chạy ứng dụng trên emulator hoặc thiết bị, ứng dụng phải được sign sử dụng debug hoặc release mode</li>
                  </ul>
                </div>
              </div>
              <div class="collapse" id="collapse233">
                <div class="card card-body">
                  <p><b>Gỡ lỗi ứng dụng</b></p>
  
                  <ul>
                    <li>Android SDK cung cấp các công cụ để gỡ lỗi ứng dụng</li>
                    <li>Thành phần chính bao gồm:
                      <ul>
                        <li>Adb</li>
                        <li>Davik Debug Monitor Server</li>
                        <li>Device or Android Virtual Device</li>
                        <li>JDWP debugger</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            `],
    ]
  },
  LTTBDD03: {
    title: 'Video bài giảng',
    index: [
      ['ĐH Trà Vinh', 'CNPM031', `
            <p>Bài giảng <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220071_LapTrinhThietBiDiDong/Video/Bai1.mp4" target="_blank">Link</a></p>
        `],
      ['Youtube', 'CNPM032', ``],
    ]

  }
}