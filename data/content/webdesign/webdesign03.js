const webdesign03 = {
    'webdesign031': {
        'title': 'Khái niệm trong CSS và nhúng mã nguồn CSS',
        'index': [
            ['CSS là gì?', 'webdesign0311', `
                <ul>
                    <li>CSS - Cascading Style Sheets</li>
                    <li>CSS là ngôn ngữ được sử dụng để định kiểu cho trang web</li>
                    <li>Dễ dàng tùy biến và tiết kiệm thời gian</li>
                    <li><b>Cú pháp:</b> <br>
                        &lt;color:blue; font-size: 12px;&gt;
                    </li>
                </ul>
            `],
            ['Bộ chọn (Selector) là gì?', 'webdesign0312', `
                <p>Là cách để xác định phần tử HTML cần định dạng</p>
                <center>
                    <table>
                        <tr>
                            <th>Selector</th>
                            <th>Ví dụ</th>
                            <th>Giải thích</th>
                        </tr>
                        <tr>
                            <td>#id</td>
                            <td>#firstname</td>
                            <td>Chọn các phần tử có id="firstname"</td>
                        </tr>
                        <tr>
                            <td>class</td>
                            <td>.intro</td>
                            <td>Chọn tất cả các phần tử có class="intro"</td>
                        </tr>
                        <tr>
                            <td>element.class</td>
                            <td>p.intro</td>
                            <td>Chỉ chọn các phần tử &lt;p&gt; có <b>class="intro"</b></td>
                        </tr>
                        <tr>
                            <td>*</td>
                            <td>*</td>
                            <td>Chọn <b>tất cả các phần tử</b></td>
                        </tr>
                        <tr>
                            <td>element</td>
                            <td>p</td>
                            <td>Chọn <b>tất cả</b> các thẻ &lt;p&gt;</td>
                        </tr>
                        <tr>
                            <td>element, element...</td>
                            <td>div, p</td>
                            <td>Chọn <b>tất cả</b> các phần tử &lt;div&gt; và <b>tất cả</b> các phần tử &lt;p&gt;</td>
                        </tr>
                    </table>
                </center>
            `],
            ['Cách nhúng mã nguồn CSS và tài liệu HTML', 'webdesign0313', `
                <p>Có 3 cách tương ứng với 3 loại CSS</p>
                <ul>
                    <li>Inline CSS</li>
                    <li>Internal CSS</li>
                    <li>External CSS</li>
                </ul>
            `]
        ]
    },
    'webdesign032': {
        'title': 'Các loại CSS và độ ưu tiên',
        'index': [
            ['Inline CSS', 'webdesign0321', `
                <p>Sử dụng <b>thuộc tính</b> <span style="color: red;">style</span> đặt trong thẻ mở của phần tử HTML</p>
                <p>Cú pháp</p>
                &lt;tên_thẻ style="thuộc tính: giá trị; Thuộc tính: giá trị;...">
            `],
            ['Độ ưu tiên của các kiểu định dạng', 'webdesign0322',
                `
                <ul>
                    <li>Theo thứ tự giảm dần từ trong ra ngoài
                        <br>
                        <p>Style > Head > Browser</p>
                    </li>
                    <li>Định kiểu có độ ưu tiên cao hơn sẽ ghi đè các định kiểu có độ ưu tiên thấp hơn</li>
                </ul>
            `]
        ]
    },
    'webdesign033': {
        'title': 'Ghi chú mã nguồn',
        'index': [
            ['Cách ghi chú trong mã nguồn CSS', 'webdesign0323', `
                <ul>
                    <li>Sử dụng để giải thích mã nguồn</li>
                    <li>Trình duyệt sẽ bỏ qua khi đọc file</li>
                    <li>Có thể trình bày 1 dòng hoặc nhiều dòng</li>
                    <li>Cú pháp: 
                        <span style="color: green; font-weight: bold;">/*Nội dung chú thích*/</span>
                    </li>
                </ul>
            `],
            ['Kết hợp ghi chú mã nguồn CSS và HTML', 'webdesign0324', `
                <ul>
                    <li>Cú pháp HTML <br> 
                        <pre>
                            &lt;!-- Nội dung ghi chú --&gt;
                        </pre>
                    </li>
                    <li>Cú pháp CSS <br>
                        <pre>
                            /* Nội dung chú thích */
                        </pre>
                    </li>
                </ul>
            `]
        ]
    },
    'webdesign034': {
        'title': 'Giá trị màu',
        'index': [
            ['Giá trị màu RGB', 'webdesign0341', `
                <ul>
                    <li>Biểu diễn các nhóm màu RED, GREEN, BLUE</li>
                    <li>Cú pháp: 
                        <br>
                        rgb(<i>red, green, blue</i>)
                        <br>
                        <ul>
                            <li>Mỗi giá trị xác định cường độ màu từ 0 đến 255</li>
                            <li>Màu đỏ: rgb(255,0,0)</li>
                            <li>Màu đen: rgb(0,0,0)</li>
                            <li>Màu trắng: rgb(255, 255, 255)</li>
                        </ul>
                    </li>
                    <li>Màu chữ: thuộc tính <b style="color:red;font-weight: bold;">color</b></li>
                    <li>Màu nền: thuộc tính <b style="color: red;font-weight: bold;">background-color</b></li>
                </ul>
            `],
            ['Giá trị màu HEX', 'webdesign0342', `
                <ul>
                    <li>Biểu diễn các nhóm màu RED, GREEN và BLUE</li>
                    <li>Cú pháp:
            
                        <br>
                        <ul>
                            <li>#rrggbb hoặc #rgb</li>
                            <li>Mỗi cặp rr, gg, bb xác định cường độ màu từ 00 đến ff
                                <br>
                                <ul>
                                    <li>Màu đỏ: #ff0000 hoặc #f00</li>
                                    <li>Màu đen: #000000 hoặc #000</li>
                                    <li>Màu trắng: #ffffff hoặc #fff</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>  
            `],
            ['Giá trị màu HSL', 'webdesign0343', `
                <p>Gồm 3 thành phần: màu sắc (hue), độ bão hòa (saturation) và độ sáng (lightess)</p>
                <p>Cú pháp</p>
                <p><b>hsl(hue, saturation, lightness)</b></p>
                <ul>
                    <li>Màu sắc có giá trị là 1 số từ 0 đến 360
                        <br>
                        0 là màu đỏ, 120 là màu xanh lục và 240 là xanh lam
                    </li>
                    <li>Độ bão hòa là giá trị phần trăm
                        <br>
                        0% có nghĩa là màu xám, 100% là màu đầy đủ
                    </li>
                    <li>Độ sáng cũng là một tỷ lệ phần trăm
                        <br>
                        <ul>
                            <li>0% là màu đen, 50% là không sáng hoặc tối</li>
                            <li>100% là màu trắng</li>
                        </ul>
                    </li>
                </ul>
            `]
        ]
    },
    'webdesign035': {
        'title': 'Nền, ảnh nền',
        'index': [
            ['Các thuộc tính CSS định kiểu nền', 'webdesign0344', `
                <center>
                    <table>
                        <tr>
                            <th>Property</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>background</td>
                            <td>Khai báo chung các thuộc tính cho nền</td>
                        </tr>
                        <tr>
                            <td>background-attactment</td>
                            <td>Thiết lập ảnh nền cố định hay được phép cuộn theo trang</td>
                        </tr>
                        <tr>
                            <td>background-color</td>
                            <td>Thiết lập màu nền</td>
                        </tr>
                        <tr>
                            <td>background-image</td>
                            <td>Thiết lập ảnh nền</td>
                        </tr>
                        <tr>
                            <td>background-repeat</td>
                            <td>Thiệt lập cách lặp lại của ảnh nền</td>
                        </tr>
                    </table>
                </center>
            `],
            ['Thiết lập ảnh nền', 'webdesign0345', 
            `
                <b>Cú pháp</b>
                <p>background-image: url('đường dẫn')</p>
            `],  
            ['Lặp lại ảnh nền', 'webdesign0346', `
                <b>Cú pháp</b>
                <ul>
                    <li>background-repeat: giá trị</li>
                    <li>Giá trị có thể là: 
                        <br>
                        <ul>
                            <li>repeat-x</li>
                            <li>repeat-y</li>
                            <li>no-repeat</li>
                        </ul>
                    </li>
                </ul>
            `],
            ['Thuộc tính scroll hay fixed cho ảnh', 'webdesign0347',
                `
                <b>Cú pháp</b>
                <ul>
                    <li>background-attactment: giá trị</li>
                    <li>Giá trị có thể là:
                        <br>
                        <ul>
                            <li>fixed</li>
                            <li>scroll</li>
                        </ul>
                    </li>
                </ul>
                `
            ],
            ['Vị trí của ảnh', 'webdesign0348',`
                <p>background-position: giá trị</p>
                <ul>
                    <li>left top, left center, left bottom</li>
                    <li>right top, right center, right bottom</li>
                    <li>center top, center center, center bottom</li>
                </ul>
            `],
            ['Thiết lập nền chung trong 1 khai báo', 'webdesign0349', `
                <p>Cú pháp</p>
                <pre>background: #ffffff url('img_Tree.png') no-repeat fixed right top</pre>
            `],
            ['Thứ tự', 'webdesign0345', `
                <ol>
                    <li>background-color</li>
                    <li>background-image</li>
                    <li>background-repeat</li>
                    <li>background-attactment</li>
                    <li>background-position</li>
                </ol>
            `]
        ]
    },
    'webdesign036': {
        'title': 'Căn lề',
        'index': [
            ['CSS Border', 'webdesign0361', `
                <p>Cho phép định dạng kiểu đường viền, độ dày đường viền, màu đường viền</p>
                <table>
                    <tr>
                        <th>Thuộc tính CSS</th>
                        <th>Ý nghĩa</th>
                    </tr>
                    <tr>
                        <td>border</td>
                        <td>Thiết lập tất cả các định dạng trong một khai báo</td>
                    </tr>
                    <tr>
                        <td>border-color</td>
                        <td>Thiết lập màu nền cho 4 cạnh</td>
                    </tr>
                    <tr>
                        <td>border-radius</td>
                        <td>Thiết lập bo góc 4 góc</td>
                    </tr>
                    <tr>
                        <td>border-width</td>
                        <td>Thiết lập độ dày 4 cạnh</td>
                    </tr>
                    <tr>
                        <td>border-style</td>
                        <td>Thiết lập kiểu đường viền cho 4 cạnh</td>
                    </tr>
                </table>
            `], 
            ['CSS border, margin và padding', 'webdesign0362', `
                <b>Tổng độ rộng (width)</b>
                <br>
                = width + (left padding + right padding) + (left border + right border) + (left margin + right margin)
                <br>
                <b>Tổng độ cao (height)</b>
                = height + top padding + bottom padding + top border + bottom border + top margin + bottom margin
            `],
            ['CSS border', 'webdesign0363', `
                <p>Thuộc tính border-style</p>
                <p>Các giá trị có thể nhận</p>
                <ul>
                    <li>dotted, dashed, solid, double</li>
                    <li>Groove, Ridge, inset, outset</li>
                    <li>None, hidden</li>
                </ul>
                <p>Thuộc tính border-width</p>
                <ul>
                    <li>Thin, medium, thick</li>
                    <li>Chỉ định giá trị số kèm đơn vị px, pt, ...</li>
                </ul>
                <p>Cho phép định dạng kiểu đường viền, độ dày đường viền, màu đường viền</p>
                <center>
                    <table>
                        <tr>
                            <th>Thuộc tính CSS</th>
                            <th>Ý nghĩa</th>
                        </tr>
                        <tr>
                            <td>border-left</td>
                            <td>Thiết lập các định đạng đường viền trái trong một khai báo</td>
                        </tr>
                        <tr>
                            <td>border-left-color</td>
                            <td>Thiết lập màu cho cạnh trái</td>
                        </tr>
                        <tr>
                            <td>border-left-style</td>
                            <td>Thiết lập kiểu đường viền cho cạnh trái</td>
                        </tr>
                        <tr>
                            <td>border-left-width</td>
                            <td>Thiết lập độ dày đường cho cạnh trái</td>
                        </tr>
                    </table>
                </center>
                Tương tự cho right, top, và bottom
            `], 
            ['CSS margin', 'webdesign0364', `
                <p>Bổ sung khoảng cách bao quanh phần từ HTML</p>
                <ul>
                    <li>margin-top: lề trên</li>
                    <li>margin-right: lề phải</li>
                    <li>margin-bottom: lề dưới</li>
                    <li>margin-left: lề trái</li>
                </ul>
            `],
            ['CSS padding', 'webdesign0365', `
                <p>Bổ sung khoảng cách bao quanh nội dung của phần tử HTML</p>
                <ul>
                    <li>padding-top</li>
                    <li>padding-right</li>
                    <li>padding-bottom</li>
                    <li>padding-left</li>
                </ul>
            `],
            ['Thiết lập đường viền chung trong 1 khai báo', 'webdesign0366', 
            `
                <ul>
                    <li>Cú pháp
                        <br>
                        border: 5px solid red;
                    </li>
                    <li>Thứ tự
                        <br>
                        <ul>
                            <li>border-width</li>
                            <li>border-style (bắt buộc)</li>
                            <li>border-color</li>
                        </ul>
                    </li>
                </ul>
            `],
            ['Khai báo chung sử dụng thuộc tính padding', 'webdesign0367', `
                <p>padding: 25px 50px 75px 100px; => theo thứ tự: top > right > bottom > left</p>
                <p>padding: 25px 50px 75px; => Theo thứ tự: top > left - right > bottom</p>
                <p>padding: 25px 50px; => Theo thứ tự: top - bottom > left - right</p>
                <p>padding: 25px; => Top, bottom, left và right có cùng giá trị</p>
            `]
        ]
    },
    'webdesign037': {
        'title': 'Text, Font, Align, Link, Table',
        'index': [
            ['CSS Text', 'webdesign0371', `
            <p>CSS cung cấp nhiều thuộc tính định dạng văn bản</p>
            <ul>
                <li><b>color</b>: giá trị màu</li>
                <li><b>text-align</b>: center/left/right/justify</li>
                <li><b>text-decoration</b>: none/underline</li>
                <li><b>text-transform</b>: uppercase/lowercase/capitalize</li>
            </ul>
            `],
            ['Text spacing', 'webdesign0372', `
                <ul>
                    <li><b>text-indent</b>: lề trái dòng đầu trong đoạn văn bản</li>
                    <li><b>letter-spacing</b>: khoảng cách giữa các ký tự</li>
                    <li><b>line-height</b>: độ cao dòng</li>
                    <li><b>word-spacing</b>: khoảng cách giữa các từ trong văn bản</li>
                    <li><b>white-space</b>: noswrap/normal/pre</li>
                </ul>
            `],
            ['Thuộc tính Text-decoration', 'webdesign0373', `
                <ul>
                    <li>Sử dụng định dạng thêm cho văn bản</li>
                    <li>Giá trị:
                        <br>
                        <ul>
                            <li>text-decoration: none/underline</li>
                            <li>text-decoration-line: overline/line-through/underline</li>
                            <li>text-decoration-style: double/solid/dotted/...</li>
                        </ul>
                    </li>
                </ul>
            `],
            ['Khai báo chung', 'webdesign0374', `
                <ul>
                    <li>text-decoration: underline red double 5px;</li>
                    <li>
                        Thư tự
                        <ol>
                            <li>text-decoration-line (bắt buộc)</li>
                            <li>text-decoration-color</li>
                            <li>text-decoration-style</li>
                            <li>text-decoration-thickness</li>
                        </ol>
                    </li>
                </ul>
            `],
            ['CSS font', 'webdesign0375', `
                <ul>
                    <li>Chọn lựa font-family, font-size, font color có ảnh hưởng lớn đến chất lượng trải nghiệm của người dùng trên website.</li>
                    <li>Có 5 nhóm font chính</li>
                    <li>Các thuộc tính định dạng
                        <ul>
                            <li>font-family: font names</li>
                            <li>font-style: normal/italic/oblique</li>
                            <li>font-weight: normal/bold</li>
                            <li>font-variant: normal/small-caps</li>
                            <li>font-size: number+px/em</li>
                        </ul>
                    </li>
                </ul>
                <center>
                    <table>
                        <tr>
                            <th>Nhóm font</th>
                            <th>Ví dụ</th>
                        </tr>
                        <tr>
                            <td>Serif</td>
                            <td>
                                <span style="font-family: Serif">Ví dụ</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Serif</td>
                            <td>
                                <span style="font-family: sans-serif">Ví dụ</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Monospace</td>
                            <td>
                                <span style="font-family: monospace">Ví dụ</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Monospace</td>
                            <td>
                                <span style="font-family: cursive">Ví dụ</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Fantasy</td>
                            <td>
                                <span style="font-family: fantasy">Ví dụ</span>
                            </td>
                        </tr>
                    </table>
                </center>
            `],
            ['CSS Align', 'webdesign0376', `
                <p>Canh giữa cho hình ảnh</p>
                <ul>
                    <li>Chuyển sang dạng <b>display: block</b></li>
                    <li>Thiết lập <b>margin-left</b> và <b>margin-right</b> có giá trị <b>auto</b></li>
                </ul>
            `],
            ['CSS List', 'webdesign0377', `
                <p>Thuộc tính</p>
                <ul>
                    <li><b>list-style-type</b>: none/circle/square/upperroman/lower-alpha</li>
                    <li><b>list-style-image: url('sqpurple.gif')</b></li>
                    <li><b>list-style-position:</b> outside/outsite</li>
                </ul>
            `],
            ['Khai báo ngắn', 'webdesign0378', `
                <ul>
                    <li><b>list-style: <span style="color:red;">square</span> <span style="color:blue;">inside</span> <span style="color:green;">url("sqpurple.gif")</span></b></li>
                    <li>
                        <p>Thứ tự</p>
                        <ul>
                            <li>list-style-type</li>
                            <li>list-style-position</li>
                            <li>list-style-image</li>
                        </ul>
                    </li>
                </ul> 
            `],
            ['CSS Link', 'webdesign0379',`
                <ul>
                    <li>Định dạng màu chữ, màu nền, đường viền, khoảng cách padding, màu nền...</li>
                    <li>
                        <p>Định dạng các trạng thái của link: có 4 trạng thái</p>
                        <ul>
                            <li>a:link - liên kết bình thường chưa tác động</li>
                            <li>a:visited - liên kết người dùng đã tác động</li>
                            <li>a:hover - liên kết khi người dùng rê chuột lên trên nó</li>
                            <li>a:active - liên kết ở thời điểm được tác động</li>
                        </ul>
                    </li>
                    <li>Quy tắc định dạng:
                        <br>
                        <ul>
                            <li>a:hover PHẢI sau a:link và a:visited</li>
                            <li>a:active PHẢI sau a:hover</li>
                        </ul>
                    </li>
                </ul>
            `],
            ['CSS Tables', 'webdesign03710', `
                <ul>
                    <li>Định dạng border: cần xác định cho thẻ table, th, td</li>
                    <li>Định dạng độ rộng và chiều cao <br>
                        <ul>
                            <li>Thuộc tính <b>width, height</b>
                                <br>
                                Thẻ &lt;table&gt;, &lt;td&gt;, &lt;th&gt;, &lt;tr&gt;
                            </li>
                            <li>Đơn vị: <b>px, %</b></li>
                        </ul>
                    </li>
                    <li>Canh lề dữ liệu <br>
                        <ul>
                            <li>text-align: center/left/right</li>
                            <li>vertical-align: top/middle/bottom</li>
                        </ul>
                    </li>
                </ul>  
            `]
        ]
    },
    'webdesign038': {
        'title': 'Các kiến thức đã học',
        'index': [
            ['Tóm tắt', 'webdesign0381', `
                <ul>
                    <li>Cú pháp CSS</li>
                    <li>Các bộ chọn CSS</li>
                    <li>Cách chèn tài liệu vào trang HTML</li>
                    <li>Cách chú thích trong tài liệu HTML</li>
                    <li>Các thuộc tính của CSS
                        <br>
                        <ul>
                            <li>Định dạng màu chữ, màu nền, font-chữ, canh lề, kiểu chữ</li>
                            <li>Định dạng khung viền, khoảng cách lề, khoảng cách giữa nội dung và đường viền</li>
                        </ul>
                    </li>
                </ul> 
            `]
        ]
    }
}