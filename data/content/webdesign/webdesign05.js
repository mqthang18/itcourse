const webdesign05 = {
    webdesign051: {
        title: 'Giới thiệu tổng quan',
        index: [
            ['Giới thiệu', 'webdesign0511', `
                <ul>
                    <li>Bootstrap là front-end framework miễn phí
                        <br>
                        <ul>
                            <li>Hỗ trợ phát triển web đa thiết bị</li>
                            <li>Thiết kế giao diễn mã nguồn HTML, CSS và Javascript dễ dàng và nhanh chóng dựa trên các template</li>
                        </ul>
                    </li>
                    <li>Mark Otto và Jacob Thornton, 2011, Github</li>
                    <li>Version: BS3 (2013), BS4 (2018), BS5 (2021)</li>
                </ul>    
            `],
            ['Cách tải và sử dụng mã nguồn bootstrap', `webdesign0512`,
                `
                    <p>
                        <a class="btn btn-primary" data-bs-toggle="collapse" href="#webdesign05111" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Sử dụng trực tiếp từ CDN (Content Delivery Network)
                        </a>
                        <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#webdesign05112" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Cách tải và sử dụng mã nguồn Bootstrap
                        </a>
                    </p>
                    <div class="collapse" id="webdesign05111">
                        <div class="card card-body">
                            <pre>
                                &lt;!-- Latest compiled and minified CSS --&gt;
                                &lt; rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/<b style="color:red;">bootstrap.min.css</b>"&gt;
                        
                                &lt;!-- Jquery library --&gt;
                                &lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/<b style="color:red;">jquery.min.js</b>"&gt;&lt;/script&gt; 
                        
                                &lt;!-- Latest compiled Javascript --&gt;
                                &lt;script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/<b style="color:red;">bootstrap.min.js</b>"&gt;&lt;/script&gt;
                            </pre>
                        </div>
                    </div>
                    <div class="collapse" id="webdesign05112">
                        <div class="card card-body">
                            <ul>
                                <li>Tải về máy và sử dụng cục bộ từ địa chỉ website: <b>https://getbootstrap.com/</b></li>
                            </ul>
                        </div>
                    </div>
            `
            ]
        ]
    },
    webdesign052: {
        title: 'Bootstrap Layout',
        index: [
            ['Phần tử chứa nội dung trang web', 'webdesign0521', `
                <ul>
                    <li>Phần tử chứa nội dung trang web</li>
                    <li>Sử dụng thẻ &gt;div&lt; với 2 class:
                        <br>
                        <ul>
                            <li>Hoặc <b style="color: red;">container</b> (độ rộng cố định)</li>
                            <li>Hoặc <b style="color: red;">container-fluid</b> (độ rộng full)</li>
                        </ul>
                    </li>
                </ul>
            `],
            ['Bootstrap Grid', 'webdesign0522', `
                <ul>
                    <li>Tối đa 12 cột</li>
                    <li>Độ rộng thiết bị</li>
                </ul>
                <p><b style="color: red;">xs</b> (&gt;768px), <b style="color: red;">sm</b> (&ge;768px), <b
                        style="color: red;">md</b> (&ge;992px), <b style="color: red;">lg</b> (&ge; 1200px)</p>
                <p>Cú pháp</p>
                <center>
                    <img style="width: 100%;" src="./assets/img/WebDesign/chap5/bs1.jpg"
                        alt="bs1">
                </center>
            `]
        ]
    },
    webdesign053: {
        title: 'Bootstrap Text/Typography',
        index: [
            ['Mặc định', 'webdesign0531', `
                Mặc định: font-size <b style="color: red;">14px</b>, độ cao dòng <b style="color: red;">1.428</b>
                <br>
                Thẻ &lt;body&gt; và thẻ &lt;p&gt;

                <br>
                Tiêu đề &lt;h1&gt;-&lt;h6&gt;
            <br>
            <center>
                <img style="width: 100%;"
                    src="./assets/img/WebDesign/chap5/bs2.jpg" alt="bs2">
            </center>
            `],
            ['Màu chữ', 'webdesign0532', `
                <ul>
                    <li>.text-muted, .text-primary</li>
                    <li>.text-success, .text-info</li>
                    <li>.text-warning, .text-danger</li>
                </ul>
                <center>
                    <img style="width: 100%;"
                        src="./assets/img/WebDesign/chap5/bs3.jpg" alt="bs3">
                </center>
            `],
            ['Màu nền', 'webdesign0533', `
                <ul>
                    <li>.bg-primary, .bg-success</li>
                    <li>.bg-info, .bg-warning</li>
                    <li>.bg-danger</li>
                </ul>
                <center>
                    <img style="width: 100%;"
                        src="./assets/img/WebDesign/chap5/bs4.jpg" alt="bs4">
                </center>
            `]
        ]
    },
    webdesign054: {
        title: 'Bootstrap Table, Image',
        index: [
            ['Bootstrap Basic table', 'webdesign0541', `
                <p>Sử dụng class <b style="color: red;">.table</b> trong thẻ &lt;table&gt;</p>
                <center>
                    <img style="width: 100%;" src="./assets/img/WebDesign/chap5/bs5.jpg"
                        alt="bs5">
                </center>
                <p>Các class mở rộng định kiểu cho table</p>
                <ul>
                    <li>.table-boredered, .table-striped</li>
                    <li>.table-boredered, .table-hover <br>
                        <pre>
                            &lt;table class="<span style="color: red; font-weight: bold;">table</span> <span style="color: blue; font-weight: bold;">table-striped</span>"&gt;
                        </pre>
                    </li>
                    <li>Tạo responsive table
                        <br>
                        <center>
                            <img src="./assets/img/WebDesign/chap5/bs6.jpg" alt="bs6">
                        </center>
                    </li>
                </ul>
            `],
            ['Bootstrap Image', 'webdesign0542', `
                <p>Bổ sung các class <b style="color: red;">.img-rounded</b>, <b style="color: red;">.img-circle</b>, <b
                style="color: red;">.img-thumbnail</b></p>
            `],
            ['Bootstrap Navigation Bar', 'webdesign0543', `
                <center>
                    <img style="width: 100%;" src="./assets/img/WebDesign/chap5/bs7.jpg"
                        alt="bs7">
                </center>
                <p>Tạo Dropdown menu</p>
                <ul>
                    <li>Sử dụng .class dropdown cho thẻ &lt;li&gt;</li>
                </ul>
            `]
        ]
    },
    webdesign055: {
        title: 'Bootstrap Form Input',
        index: [
            ['Giới thiệu', 'webdesign0551', `
                <p>Hỗ trợ 3 kiểu form cơ bản</p>
                <center>
                    <img style="width: 100%;" src="./assets/img/WebDesign/chap5/bs8.jpg"
                        alt="bs8">
                </center>
            `],
            ['Form dạng ngăn xếp', 'webdesign0552', `
                <ul>
                    <li>Label và form controls được gom nhóm</li>
                    <li>Tất cả các control nhập liệu bao gồm &lt;input&gt;, &lt;textarea&gt; và &lt;select&gt; cần đặt thuộc tính
                        <b>class</b> <b style="color: red;">.form-control</b></li>
                </ul>
                    <p>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#webdesign05521" role="button" aria-expanded="false"
                        aria-controls="collapseExample">
                            Form dạng Vertical
                    </a>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#webdesign05522" role="button" aria-expanded="false"
                        aria-controls="collapseExample">
                            Form dạng Inline
                    </a>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#webdesign05523" role="button" aria-expanded="false"
                        aria-controls="collapseExample">
                            Form dạng Horizontal
                    </a>
                </p>
                <div class="collapse" id="webdesign05521">
                    <div class="card card-body">
                        <center>
                            <img style="width: 100%;" src="./assets/img/WebDesign/chap5/bs9.jpg" alt="bs9">
                        </center>
                    </div>
                </div>
                <div class="collapse" id="webdesign05522">
                    <div class="card card-body">
                        Bổ sung thêm class <b style="color: red;">.form-inline</b> trong thẻ &lt;form&gt;
                        <center>
                            <img style="width: 100%;" src="./assets/img/WebDesign/chap5/bs10.jpg" alt="bs10">
                        </center>
                    </div>
                </div>
                <div class="collapse" id="webdesign05523">
                    <div class="card card-body">
                        <ul>
                            <li>Bổ sung class <b style="color: red;">.form-horizontal</b> cho thẻ &lt;form&gt;</li>
                            <li>Bổ sung class &gt;.control-label&lt; cho tất cả thẻ &lt;label&gt;</li>
                        </ul>
                        <br>
                        <center>
                            <img style="width: 100%;" src="./assets/img/WebDesign/chap5/bs11.jpg" alt="bs11">
                        </center>
                    </div>
                </div>
                
            `]
        ]
    },
    webdesign056: {
        title: 'Bootstrap input, button',
        index: [
            ['Boostrap Input','webdesign0561',`
            <p>Định dạng nhiều kiểu nút nhấn với các class <b style="color: red;">.btn-lg, .btn-sn, .btn-xs</b></p>
            <center>
                <img style="width: 100%;" src="./assets/img/WebDesign/chap5/bs13.jpg"
                    alt="bs13">
            </center>
            <p>Thay đổi kích cỡ</p>
            <ul>
                <li>Chiều cao: Sử dụng class <b style="color: red;">.input-lg</b> và <b style="color: red;">.input-sm</b></li>
                <li>Chiều rộng: Sử dụng class <b style="color: red;">.col-lg-*</b> và .col-sm-*</li>
            </ul>
            <center>
                <img style="width: 100%;" src="./assets/img/WebDesign/chap5/bs15.jpg"
                    alt="">
            </center>
            `],
            ['Bootstrap Button','webdesign0562',`
            <p>Định dạng nhiều kiểu nút nhấn với các class .btn, .btn-default, .btn-primary, .btn-success, .btn-info,
            .btn-warning, .btn-danger, .btn-link</p>
            <center>
                <img style="width: 100%;" src="./assets/img/WebDesign/chap5/bs14.jpg"
                    alt="bs14">
            </center>
            <p>Thay đổi trạng thái của nút nhấn với <b style="color:red;">.active</b> và <b style="color: red;">.disabled</b>
            </p>
            <center>
                <img style="width: 100%;" src="./assets/img/WebDesign/chap5/bs12.jpg"
                    alt="bs12">
            </center>
            `]
        ]
    },
    webdesign057: {
        title: 'Các kiến thức đạt được',
        index: [
            ['Tóm tắt', 'webdesign0571', `
                <ul>
                    <li>Các thông tin tổng quan về Bootstrap</li>
                    <li>Tải và sử dụng Bootstrap framework</li>
                    <li>Các class sử dụng trong thiết kề giao diện
                        <br>
                        <ul>
                            <li>Grid, Typolography, Table, Image</li>
                            <li>Navigation, Form Input, Button</li>
                        </ul>
                    </li>
                </ul>
            `]
        ]
    }
}