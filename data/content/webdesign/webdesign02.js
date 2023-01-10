const webdesign02 = {
    'webdesign021': {
        'title': 'Cấu trúc một trang tài liệu HTML',
        'index': [
            ['Cấu trúc một trang tài liệu HTML', 'webdesign0211', `
                <ul>
                    <li>Phân khai báo: Xác định phiên bản HTML5</li>
                    <li>Bắt đầu, kết thúc: &lt;html&gt;&lt;/html&gt;</li>
                    <li>Phần đầu trang HTML: &lt;head&gt;&lt;/head&gt;</li>
                    <li>Phần nội dung hiển thị: &lt;body&gt;&lt;/body&gt;</li>
                </ul>
            `],
            ['Cấu trúc một phần tử HTML', 'webdesign0212', `<p>Bao gồm thẻ mở, thẻ đóng và nội dung ở giữa</p>`],
            ['Thuộc tính HTML', 'webdesign0213', `
                <ul>
                    <li>Sử dụng để cung cấp thêm thông tin cho phần tử HTML</li>
                    <li>Luôn đặt bên trong thẻ mở, sau tên thẻ, cách tên thẻ ít nhất 1 khoảng trắng</li>
                    <li>Cú pháp: <b>name="value"</b></li>
                </ul>
            `]
        ]
    },
    'webdesign022': {
        'title': 'Chèn',
        'index': [
            ['Chèn văn bản', 'webdesign0221', `
                <ul>
                    <li>Tiêu đề, đoạn văn bản</li>
                    <li>Kiểu chữ</li>
                    <li>Font chữ, cỡ chữ</li>
                    <li>Màu chữ</li>
                </ul>
            `],
            ['Chèn tiêu đề', 'webdesign0222', `
                <ul>
                    <li>Sử dụng cặp thẻ từ <b>&lt;h1&gt;</b> đến <b>&lt;h6&gt;</b></li>
                    <li>&lt;h1&gt; xác định tiêu đề có mức độ quan trọng nhất</li>
                    <li>&lt;h6&gt; xác định tiêu đề ít quan trọng nhất</li>
                    <li>Thuộc tính canh lề: <b>align="left/right/center/justify"</b></li>
                </ul>
            `],
            ['Chèn đoạn văn bản', 'webdesign0223', `
                <ul>
                    <li>Sử dụng cặp thẻ &lt;p&gt;</li>
                    <li>Ngắt dòng: thẻ &lt;br&gt;</li>
                    <li>Tạo đường kẻ ngang: thẻ &lt;hr&gt;</li>
                    <li>Thuộc tính canh lề:
                        <b>align="left/right/center/justify"</b>
                    </li>
                </ul>
            `],
            ['Chèn văn bản như khi viết mã nguồn', 'webdesign0224', `
                <ul>
                    <li>Sử dụng thẻ &lt;pre&gt;</li>
                    <li>Giữ khoảng cách dòng</li>
                    <li>Áp dụng các đoạn thơ</li>
                </ul>
                <p>Ví dụ:
                <pre>Đây là mã nguồn</pre>
                </p>
            `]
        ]
    },
    'webdesign023': {
        'title': 'Đinh dạng',
        'index': [
            ['Định dạng màu chữ, font chữ, cỡ chữ', 'webdesign0231', `
                <ul>
                    <li>Sử dụng cặp thẻ &lt;font&gt; hoặc &lt;basefont&gt;</li>
                    <li>Thuộc tính face, size, color</li>
                </ul>
            `],
            ['Định dạng với thuộc tính style', 'webdesign0232', `
                <ul>
                    <li>Cú pháp: style="property: value;"</li>
                    <li>Trong đó: property là các thuộc tính của CSS và value là các giá trị tương ứng của CSS</li>
                </ul>
            `],
            ['Một số thẻ định dạng văn bản', 'webdesign0233', `
                <center>
                    <table>
                        <tr>
                            <th>Tên thẻ</th>
                            <th>Ý nghĩa</th>
                        </tr>
                        <tr>
                            <td>
                                <pre>b</pre>
                            </td>
                            <td>In đậm văn bản</td>
                        </tr>
                        <tr>
                            <td>
                                <pre>em</pre>
                            </td>
                            <td>Nhấn mạnh văn bản</td>
                        </tr>
                        <tr>
                            <td>
                                <pre>i</pre>
                            </td>
                            <td>In nghiêng văn bản</td>
                        </tr>
                        <tr>
                            <td>
                                <pre>small</pre>
                            </td>
                            <td>Định dạng văn bản có size nhỏ hơn bình thường</td>
                        </tr>
                        <tr>
                            <td>
                                <pre>strong</pre>
                            </td>
                            <td>In đâm, quan trọng</td>
                        </tr>
                        <tr>
                            <td>
                                <pre>sub</pre>
                            </td>
                            <td>Chỉ số dưới</td>
                        </tr>
                        <tr>
                            <td>
                                <pre>sup</pre>
                            </td>
                            <td>Chỉ số trên</td>
                        </tr>
                        <tr>
                            <td>
                                <pre>ins</pre>
                            </td>
                            <td>Định dạng văn bản được thêm</td>
                        </tr>
                        <tr>
                            <td>
                                <pre>del</pre>
                            </td>
                            <td>Định dạng văn bản đã xóa</td>
                        </tr>
                        <tr>
                            <td>
                                <pre>mark</pre>
                            </td>
                            <td>Tô màu highlight cho văn bản</td>
                        </tr>
                    </table>
                </center>
            `],
            ['Định dạng nội dung trích dẫn', 'webdesign0234', `
                <center>
                    <table>
                        <tr>
                            <th>Tên thẻ</th>
                            <th>Ý nghĩa</th>
                        </tr>
                        <tr>
                            <td>&lt;abbr&gt;</td>
                            <td>Xác định cụm từ viết tắt</td>
                        </tr>
                        <tr>
                            <td>&lt;address&gt;</td>
                            <td>Xác định thông tin liên lạc</td>
                        </tr>
                        <tr>
                            <td>&lt;bdo&gt;</td>
                            <td>Xác định hướng chữ</td>
                        </tr>
                        <tr>
                            <td>&lt;blockquote&gt;</td>
                            <td>Xác định nội dung trích dẫn từ một nguồn khác (1 đoạn)</td>
                        </tr>
                        <tr>
                            <td>&lt;cite&gt;</td>
                            <td>Xác định tiêu đề của một tác phẩm</td>
                        </tr>
                        <tr>
                            <td>&lt;q&gt;</td>
                            <td>Xác định thông tin trích dẫn ngắn (1 dòng)</td>
                        </tr>
                    </table>
                </center>
            `],

        ]
    },
    'webdesign024': {
        'title': 'Xác định thông tin và trích dẫn',
        'index': [
            ['Xác định cụm từ viết tắt', 'webdesign0241', `
                <ul>
                    <li>&lt;abbr title="Cụm từ đầy đủ"&gt;Cụm từ viết tắt&lt;/abbr&gt; => hover vào ví dụ để xem kết quả</li>
                    <li>&lt;abbr title="Hyper Text Markup Language"&gt;HTML&lt;/abbr&gt;</li>
                </ul>

                Ví dụ:
                <abbr title="Cụm từ đầy đủ">Cụ từ viết tắt</abbr>,
                <abbr title="Hyper Text Markup Language">HTML</abbr>
            `],
            ['Xác định thông tin trích dẫn ngắn', 'webdesign0242', `
                <ul>
                    <li>Cú pháp: &lt;q&gt;Nội dung trích dẫn&lt;/q&gt;</li>
                    <li>Ví dụ:
                        <br>
                        &lt;b&gt;Michelle Obama - Biểu tượng của nữ quyền&lt;/b&gt; đã từng nói:
                        <br>
                        &lt;q&gt;Không có giới hạn cho sự thành công của những người phụ nữ, dù là trong chính trị hay các lĩnh vực
                        khác&lt;/q&gt;
                    </li>
                </ul>
            `],
            ['Trích dẫn từ một nguồn tài nguyên', 'webdesign0243', `
                <ul>
                    <li>Cú pháp:
                        <br>
                        &lt;blockquote cite="URL"&gt;Nội dung trích dẫn&lt;/blockquote&gt;
                    </li>
                    <li>Ví dụ:
                        <br>
                        Lịch sử phát triển:
                        <br>
                        <div style="width: 100%; overflow: auto;">
                        <pre style="
                            display: block;
                            font-family: monospace;
                            white-space: pre;
                            margin: 1em 0;
                        " >
                        &lt;blockquote cite="https://www.tvu.edu.vn/lich-su-phat-trien/"&gt;
                        Trường vừa là thành viên hiệp hội quốc
                        tế đại học, cao đẳng Canada vừa là thành viên của tổ chức CDIO, top 200 trên thế giới là Đại học phát triển
                        bền vững, cũng như đã tiếp cận kiểm đỉnh theo tiêu chuẩn mới của Bộ GD & ĐT, kiểm định FIBAA, AUN,
                        ABET,...
                        &lt;/blockquote&gt;
                        </pre>
                        </div>
                    </li>
                </ul>
            `],
            ['Xác định thông tin liên lạc', 'webdesign0244', `
                <ul>
                    <li>Cú pháp: &lt;address&gt;Nội dung trích dẫn&lt;/address&gt;</li>
                    <li>Ví dụ:
                        <br>
                        &lt;address&gt; <br>
                        Số 126 Nguyên Thiện Thành <br>
                        Khóm 4, Phường 5 <br>
                        Thành phố Trà Vinh <br>
                        Tỉnh Trà Vinh <br>
                        &lt;/address&gt;
                    </li>
                </ul>
            `],
            ['Xác đinh thông tin tác phẩm', 'webdesign0244', `
                <ul>
                    <li>Cú pháp <br>
                        &lt;cite&gt;Tên tác phẩm&lt;/cite&gt;
                    </li>
                    <li>Ví dụ <br>
                        &lt;p&gt;&lt;cite&gt;Tắt đèn&lt;/cite&gt; là tác phẩm văn học Việt Nam của nhà văn Ngô Tất Tố&lt;/p&gt;
                    </li>
                </ul>
            `],
            ['Xác định hướng cho văn bản', 'webdesign0245', `<ul>
                <li>Cú pháp <br>
                    &lt;bdo dir="rtl/ltr"&gt;Nội dung văn bản&lt;/bdo&gt;
                </li>
                <li>Ví dụ <br>
                    &lt;bdo dir="rtl"&gt;Hôm nay, tôi học thiết kế web&lt;/bdo&gt;
                </li>
            </ul>`
            ]

        ]
    },
    'webdesign025': {
        'title': 'Ghi chú và comment',
        'index': [
            ['Ghi chú mã nguồn HTML', 'webdesign0251', `
                <ul>
                    <li>Cú pháp:
                        &lt;!-- Nội dung ghi chú --&gt;
                        <br>
                        <span style="color: green; font-weight: bold;">Trình bày nhiều dòng, hoặc trong 1 dòng</span>
                    </li>
                    <li>
                        Mục đích
                        <ul>
                            <li>Ghi chú: nhắc nhở nội dung mã nguồn</li>
                            <li>Hỗ trợ giới hạn phạm vi kiểm lỗi mã nguồn</li>
                        </ul>
                    </li>
                </ul>
            `]
        ]
    },
    'webdesign026': {
        'title': 'Tạo bảng biểu',
        'index': [
            ['Ghi chú mã nguồn HTML', 'webdesign0261', `
                <ul>
                    <li>Mục đích
                        <br>
                        <span style="text-indent: 400px;">Sắp xếp dữ liệu vào dòng và cột</span>
                    </li>
                    <li>Cú pháp:
                        <br>
                        <ul>
                            <li>Tạo bảng: &lt;table&gt;&lt;/table&gt;</li>
                            <li>Định nghĩa dòng: &lt;tr&gt;&lt;/tr&gt;</li>
                            <li>Định nghĩa ô: &lt;td&gt;, &lt;th&gt;</li>
                        </ul>
                    </li>
                </ul>
            `],
            ['Thuộc tính', 'webdesign0262', `
                <ul>
                    <li>Đường viên: border</li>
                    <li>Chiều rộng: width</li>
                    <li>Chiều cao: height</li>
                    <li>Trộn ô: colspan, rowspan</li>
                    <li>Thuộc tính khác:
                        <ul>
                            <li>Cellpadding</li>
                            <li>Cellspacing</li>
                        </ul>
                    </li>
                </ul>
            `],
            ['Thay đổi kích thước', `webdesign0263`, `
                <ul>
                    <li>Độ rộng của bảng, của cột: style="width: 100%;"</li>
                    <li>Chiều cao của dòng: style="height: 200px;"</li>
                </ul>
            `],
            ['Thay đổi độ dày đường viền', 'webdesign0264', `
                <ul>
                    <li>Thuộc tính border="number"</li>
                    <li>Hoặc style="border:3px"</li>
                </ul>
            `],
            ['Trộn ô', 'webdesign0265', `
                <ul>
                    <li>Ở nhiều cột: colspan = "số ô"</li>
                    <li>Ở nhiều hàng: rowspan = "số hàng"</li>
                </ul>
            `],
            ['Tăng khoảng cách giữa các ô', 'webdesign0266', `
                <p>Thuộc tính cellspacing hoặc CSS border-spacing</p>
            `],
            ['Tăng khoảng cách giữa dữ liệu và đường viền', 'webdesign0267', `
                <p>Thuộc tính cellpadding hoặc CSS padding</p>
            `],
            ['Tạo danh sách có thứ tự', 'webdesign0268', `
                <ul>
                    <li>Sử dụng cặp thẻ ol</li>
                    <li>Các phần tử li</li>
                    <li>Thuộc tính type="i/I/A/a/1"</li>
                    <li>Thuộc tính start = "number"</li>
                </ul>
            `],
            ['Tạo danh sách không có thứ tự', 'webdesign0269', `
                <ul>
                    <li>Sử dụng cặp thẻ ul</li>
                    <li>Các phần tử: li</li>
                    <li>Thuộc tính: type="square/circle/disc"</li>
                </ul>
            `]

        ]
    },
    'webdesign027': {
        'title': 'Chèn',
        'index': [
            ['Chèn hình ảnh', 'webdesign0271', `
                <ul>
                    <li>Sử dụng thẻ &lt;img src="URL" alt="text"&gt; </li>
                    <li>Thuộc tính: width, height hoặc style="width: 100px; height: 50px"</li>
                </ul>
            `],
            ['Chèn audio', 'webdesign0272', `
                <ul>
                    <li>Cú pháp <br>
                        &lt;audio controls autoplay muted &gt; <br>
                        &lt;source src="horse.ogg" type="video/ogg"&gt; <br>
                        &lt;source src="horse.mp3" type="video/mpeg" &gt; <br>
                        &lt;/audio&gt;
                    </li>
                    <li>Trình duyệt chrome không hỗ trợ autoplay</li>
                </ul>
            `],
            ['Chèn video', 'webdesign0273', `
                <ul>
                    <li>Cú pháp
                        <br>
                        &lt;video controls autoplay muted &gt; <br>
                        &lt;source src="horse.ogg" type="video/ogg"&gt; <br>
                        &lt;source src="horse.mp4" type="video/mp4" &gt; <br>
                        &lt;/video&gt;
                    </li>
                    <li>Trình duyệt Chrome không hỗ trợ autoplay</li>
                    <li>Thuộc tính width, height để xác định chiều rộng và chiều cao của trình phát video</li>
                </ul>
            `],
            ['Chèn iframe', 'webdesign0274', `
                <ul>
                    <li>Sử dụng để nhúng một tài liệu vào bên trong một trang web</li>
                    <li>Cú pháp: &lt;iframe src="url" title="description"&gt; &lt;/iframe&gt;
                        <ul>
                            <li>Thuộc tính: width, height, name</li>
                            <li>Thuộc tính style</li>
                        </ul>
                    </li>
                </ul>
            `]
        ]
    },
    'webdesign028': {
        'title': 'Tạo',
        'index': [
            ['Tạo hyperlink', 'webdesign0281', `
                <ul>
                    <li>Sử dụng cặp thẻ &lt; a href="" &gt;Nội dung bookmark&lt;a&gt;</li>
                    <li>Nội dung hiển thị có thể là văn bản hoặc hình ảnh</li>
                    <li>Xác định vị trí liên kết:
                        <br>
                        <ul>
                            <li>href="URL"</li>
                            <li>href="mailto:ngocdanthanhdt@tvu.edu.vn"</li>
                        </ul>
                    </li>
                    <li>Xác định nơi mở nguyê liên kết target="_self_/blank_/parent/_top/frame_name"</li>
                </ul>
            `],
            ['Tạo Bookmark', 'webdesign0282', `
                <ul>
                    <li>Phù hợp cho những web dài</li>
                    <li>Sử dụng cặp thẻ &lt; a id="value" &gt;Nội dung bookmark&lt;a&gt;</li>
                    <li>Tạo liên kết đến bookmark <br>
                        <ul>
                            <li>Cùng trang: href="#value"</li>
                            <li>Khác trang: href="URL#value"</li>
                        </ul>
                    </li>
                </ul>
            `],
            ['Thiết kế biểu mẫu', 'webdesign0283', `
                <ul>
                    <li>Tập hợp nhiều phần tử HTML:
                        &lt;input&gt;
                        &lt;label&gt;
                        &lt;select&gt;
                        &lt;textarea&gt;
                        &lt;button&gt;
                        &lt;fieldset&gt;
                        &lt;legend&gt;
                        &lt;datalist&gt;
                        &lt;output&gt;
                        &lt;option&gt;
                        &lt;optgroup&gt;
                    </li>
                    <li>Sử dụng để thu thập dữ liệu người dùng</li>
                    <li>Dữ liệu người dùng thường được xử lý ở server
            
                        <br>
                        &lt;form action="xuly.php" method="post"&gt; <br>
                        &lt;!-- form elements --&gt; <br>
                        &lt;/form&gt;
                    </li>
                </ul>
            `]
        ]
    },
    'webdesign029': {
        'title': 'Input',
        'index': [
            [`Các loại <input>`, 'webdesign0291', `
                <ul>
                    <li>Phụ thuộc vào giá trị của thuộc tính type có thể tạo ra nhiều thành phần nhập liệu khác nhau</li>
                    <li>Thuộc tính
                        <br>
                        <ul>
                            <li>name, value, size, placeholder, maxlength</li>
                            <li>readonly, disable, min, max, pattern</li>
                        </ul>
                    </li>
                </ul>
                <br>
                <center>
                    <table>
                        <tr>
                            <th>Loại &lt; input &gt;</th>
                            <th>Ý nghĩa</th>
                        </tr>
                        <tr>
                            <td>type="text"</td>
                            <td>Cho phép nhập liệu trên 1 dòng</td>
                        </tr>
                        <tr>
                            <td>type="radio"</td>
                            <td>Tạo nút ấn cho phép lựa chọn 1 trong nhiều options</td>
                        </tr>
                        <tr>
                            <td>type="checkbox"</td>
                            <td>Tạo checkbox cho phép không chọn hoặc chọn nhiều options</td>
                        </tr>
                        <tr>
                            <td>type="submit"</td>
                            <td>Tạo nút nhấn có chức năng submit form</td>
                        </tr>
                        <tr>
                            <td>type="button"</td>
                            <td>Tạo nút nhấn</td>
                        </tr>
                    </table>
                </center>
            `],
            ['Tạo ô nhập liệu', 'webdesign0292', `
                <ul>
                    <li>Cú pháp
                        <br>
                        &lt;input type="text/password" value="..." name="txt.." size="50" maxlength="10" placeholder="..." &gt;
                    </li>
                </ul>
            `],
            ['Tạo checkbox và radio button', 'webdesign0293', `
                <ul>
                    <li>Cú pháp <br>
                        &lt;input type="checkbox/radio" value="..." name="chk.../rd..." checked&gt;
                    </li>
                    <li>Tạo checkbox
                        <br>
                        &lt;input type="checkbox" id="xemay" name="clickPhuongTien" value="01"&gt;
            
                        &lt;input type="checkbox" id="oto" name="clickPhuongTien" value="02"&gt;
            
                    </li>
                    <li>
                        &lt;input type="radio" id="xemay" name="clickPhuongTien" value="01"&gt;
                        &lt;input type="radio" id="oto" name="clickPhuongTien" value="02"&gt;
                    </li>
                </ul>
            `],
            ['Tạo nút nhấn', 'webdesign0294', `
                <ul>
                    <li>Không có chức năng
                        <br>
                        &lt;input type="button" value="..." name="btn..." &gt;
                    </li>
                    <li>Có chức năng submit:
                        <br>
                        &lt;input type="submit" value="..." name="sb..." &gt;
                    </li>
                    <li>
                        Có chức năng reset
                        <br>
                        &lt;input type="reset" value="..." name="rs..." &gt;
                    </li>
                </ul>
            `],
            ['Tạo danh sách drop-down', 'webdesign0295', `
                <ul>
                    <li>Sử dụng cặp thẻ &lt;select name="s1 ..." &gt;&lt;/select&gt;</li>
                    <li>Các phần tử sử dụng cặp thể
                        <br>
                        &lt;option value="giá trị"&gt;&lt;/option&gt;
                    </li>
                    <li>Đặt bên trong cặp thẻ &lt;select&gt;&lt;/select&gt;</li>
                </ul>
            `],
            ['Tạo vùng nhập liệu trên nhiều dòng', 'webdesign0296', `
                <p>Sử dụng cặp thẻ &lt;texarea&gt;&lt;/texarea&gt;</p>
                <ul>
                    <li>&lt;texarea row="number" cols="number" &gt;&lt;/texarea&gt;</li>
                    <li>Thuộc rows xác định số dòng hiển thị</li>
                    <li>Thuộc tính cols xác đinh độ rỗng của vùng nhập liệu</li>
                </ul>
            `]
        ]
    },
    'webdesign03': {
        'title': 'Các kiến thức đã học',
        'index': [
            ['Tóm tắt', 'webdesign031', `
                <ul>
                    <li>Cấu trúc trang HTML</li>
                    <li>Các phần tử HTML</li>
                    <li>Thuộc tính của phần tử HTML</li>
                    <li>Các đối tượng trong thiết kế giao diện
                        <br>
                        <ul>
                            <li>Văn bản - Danh sách - Bảng biểu</li>
                            <li>Liên kết</li>
                            <li>Âm thanh - video - hình ảnh</li>
                            <li>Biểu mẫu</li>
                        </ul>
                    </li>
                </ul>
            `]
        ]
    }
}