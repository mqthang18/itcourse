const webdesign04 = {
    'webdesign041': {
        'title': 'Một số ví dụ Javascript có thể',
        'index': [
            ['Giới thiệu', 'webdesign0411', `
                <ul>
                    <li>Thay đổi nội dung của phần tử HTML</li>
                    <li>Thay đổi giá trị thuộc tính của phần tử HTML</li>
                    <li>Thay đổi thuộc tính định kiểu CSS</li>
                    <li>Ẩn/hiện phần tử HTML</li>
                </ul>
            `],
            ['Thay đổi nội dung của phần tử HTML', 'webdesign0412', `
                <ul>
                    <li>Sử dụng phương thức <b>getElementById</b></li>
                    <li>Sử dụng thuộc tính <b>innerHTML</b></li>
                    <li>Bắt sự kiện onclick</li>
                </ul>
            `],
            ['Thay đổi thuộc tính của phần tử HTML', 'webdesign0413', `
                <ul>
                    <li>Sử dụng phương thức <b>getElementById</b></li>
                    <li>Sử dụng thuộc tính <b>src</b></li>
                    <li>Bắt sự kiện <b>onclick</b></li>
                </ul>
            `],
            ['Ẩn/hiện phần tử HTML', 'webdesign0414', `
                <ul>
                    <li>Sử dụng phương thức <b>getElementById</b></li>
                    <li>Sử dụng thuộc tính
                        <br>
                        <ul>
                            <li>style.display='none'</li>
                            <li>style.display='block'</li>
                        </ul>
                    </li>
                    <li>Bắt sự kiện <b>onclick</b></li>
                </ul>
            `]
        ]
    },
    'webdesign042': {
        'title': 'Đặt mã nguồn',
        'index': [
            ['Vị trí đặt mã nguồn', 'webdesign0421', `
                <ul>
                    <li>
                        <span style="color: red;">Đặt trong thẻ &lt;head&gt; hoặc &lt;body&gt;</span>
                        <br>
                        &lt;script&gt;Mã nguồn JS&lt;/script&gt;
                    </li>
                </ul>
                <p><span style="color:red;">Liên kết từ một file.js</span></p>
            `],
            ['Một số cách hiển thị dữ liệu với Javascript', 'webdesign0422', `
            <ul>
                <li>Ghi dữ liệu vào phần tử HTML sử dụng thuộc tính <b>innerHTML</b></li>
                <li>Ghi trực tiếp vào tài liệu HTML sử dụng phương thức <b style="color: red;">document.write()</b></li>
                <li>Xuất dữ liệu trong hộp thoại cảnh báo sử dụng phương thức <b>window.alert()</b></li>
                <li>Xuất dữ liệu vào cửa sổ console của trình duyệt sử dụng <b style="color: red;">console.log</b></li>
                <li>Gọi lệnh in trang web với phương thức <b>window.print()</b></li>
            </ul>
            `
            ],
            ['Khai báo biến, hằng', 'webdesign0423', `
                <ul>
                    <li>Biến: Sử dụng từ khóa <b style="color: red;">var</b>, hoặc từ khóa <b style="color: red;">let</b> (sau 2015)
                    </li>
                    <li>Khai báo hằng: Sử dụng từ khóa <b style="color: red;">const</b></li>
                </ul>
            `],
            ['Đặt tên biến', 'webdesign0424', `
                <ul>
                    <li>Phải bắt đầu bằng ký tự</li>
                    <li>Có thể chứa chữ cái, chữ số, ... và $</li>
                    <li>Không bắt đầu bằng số</li>
                    <li>Không trùng từ khóa</li>
                    <li>Có thể bắt đầu bằng $ hoặc ...</li>
                </ul>
            `],
            ['Một số lưu ý khí viết câu lệnh Javascript', 'webdesign0425', `
                <ul>
                    <li><b style="color: red;">Nên</b> kết thúc câu lệnh bằng dấu chấm phẩy</li>
                    <li>Khoảng trắng: giúp mã nguồn <span style="color: red">dễ đọc hơn</span></li>
                    <li>Số ký tự <span style="color:red;">tối đa</span> trên 1 dòng lệnh là <b style="color: red;">80</b></li>
                    <li>Khối lệnh có ký hiệu là <b style="color: red;">{...}</b></li>
                    <li><b style="color:red;">Phân biệt</b> chữ hoa, chữ thường</li>
                    <li>Ghi chú: sử dụng <span style="color:red;">//</span> hoặc <span style="color: red;">/**/</span></li>
                </ul>
            `]
        ]
    },
    'webdesign043': {
        'title': 'Hàm',
        'index': [
            ['HÀM trong Javascript', 'webdesign0411', `
                <ul>
                    <li>Hàm là khối lệnh được thiết kế để thực thi 1 nhiệm vụ riêng lẻ</li>
                    <li>Hàm chỉ thực thi khi có lời gọi hàm (khi xảy ra sự kiện)</li>
                    <li>Cú pháp
                        <br>
                        <pre>
                            function <b style="color: red;">name</b> (<span>parameter1, parameter2, parameter3</span>) { <br>
                                // code to executed <br>
                                // return value 
                            }
                        </pre>
                    </li>
                </ul>
            `],
            ['Cấu trúc hàm trong Javascript', 'webdesign0412', `
                <ul>
                    <li>Gồm 2 phần
                        <br>
                        <ul>
                            <li><b>Phần đầu</b>: khai báo tên hàm và các tham số</li>
                            <li><b>Phần thân</b>: xác định khối lệnh sẽ được thực thi khi hàm được gọi</li>
                        </ul>
                    </li>
                    <li>Các tham số và biến
                        <br>
                        <b style="color: red;">Là biến cục bộ</b>
                    </li>
                    <li>
                        Hàm có thể trả về giá trị
                        <br>
                        <b style="color: red;">Sử dụng return</b>
                    </li>
                </ul>
            `],
            ['Các hộp thoại trong Javascript', 'webdesign0413',
            `
                <ul>
                    <li>
                        Thông báo: <b>alert()</b>
                        <br>
                        <b style="color: red">alert<b style="color: blue">(chuỗi thông báo)</b></b>
                    </li>
                    <li>
                        Xác thực: <b>confirm()</b>
                        <br>
                        <b>let t</b> &equals; (<b style="color: red;">chuỗi thông báo</b>)
                    </li>
                    <li>
                        Xác thực: <b>prompt()</b>
                        <br>
                        <b>let t</b> &equals; <b style="color: red;">prompt(<b style="color:blue;">chuỗi thông báo, khởi
                                tạo</b>)</b>
                    </li>
                </ul>          
            `]
        ]
    },
    'webdesign044': {
        'title': 'Phép toán',
        'index': [
            ['Phép toán số học', 'webdesign0441', `
                <table>
                    <tr>
                        <th>Phép toán</th>
                        <th>Ý nghĩa</th>
                    </tr>
                    <tr>
                        <td>+</td>
                        <td>Phép cộng</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>Phép trừ</td>
                    </tr>
                    <tr>
                        <td>*</td>
                        <td>Phép nhân</td>
                    </tr>
                    <tr>
                        <td>/</td>
                        <td>Phép chia</td>
                    </tr>
                    <tr>
                        <td>%</td>
                        <td>Phép chia dư</td>
                    </tr>
                    <tr>
                        <td>++</td>
                        <td>Tăng một đơn vị</td>
                    </tr>
                    <tr>
                        <td>--</td>
                        <td>Giảm một đơn vị</td>
                    </tr>
                </table>
            `],
            ['Phép so sánh và luận lý', 'webdesign0442', `
                <center>
                    <table>
                        <tr>
                            <th>Ký hiệu</th>
                            <th>Ý nghĩa</th>
                        </tr>
                        <tr>
                            <td>==</td>
                            <td>So sánh bằng</td>
                        </tr>
                        <tr>
                            <td>===</td>
                            <td>So sánh bằng cả giá trị và kiểu dữ liệu</td>
                        </tr>
                        <tr>
                            <td>!=</td>
                            <td>Khác, không bằng</td>
                        </tr>
                        <tr>
                            <td>!==</td>
                            <td>Khác cả giá trị và kiểu dữ liệu</td>
                        </tr>
                        <tr>
                            <td>&gt;</td>
                            <td>Lớn hơn</td>
                        </tr>
                        <tr>
                            <td>&lt;</td>
                            <td>Nhỏ hơn</td>
                        </tr>
                        <tr>
                            <td>&gt;&equals;</td>
                            <td>Lớn hơn hoặc bằng</td>
                        </tr>
                        <tr>
                            <td>&lt;&equals;</td>
                            <td>Nhỏ hơn hoặc bằng</td>
                        </tr>
                    </table>
                </center>
            `]
        ]
    },
    'webdesign045': {
        'title': 'String',
        'index': [
            ['Kiểu string', 'webdesign0451', `
                <ul>
                    <li>Chứa chuỗi, có thể rỗng</li>
                    <li>Đặt trong dấu nháy kép hoặc nháy đơn</li>
                    <li>Ghép chuỗi
                        <br>
                        <ul>
                            <li>Sử dụng dấu <b style="color: red;">+</b></li>
                            <li>Hoặc sử dụng phương thức <b style="color: red;">concat()</b>
                                <br>
                                <pre>
                                    let <b>text1</b> = "Hello";
                                    let <b>text2</b> = "World";
                                    let <b>text3</b> = <span style="color: blue;">text1</span>.<span style="color: red;">concat</span>(" ", text2);
                                </pre>
                            </li>
                        </ul>
                    </li>
                </ul>
            `],
            ['Thuộc tính, phương thức', 'webdesign0452', `
                <ul>
                    <li><b>Chiều dài chuỗi:</b> <span style="color: red;">length</span></li>
                    <li><b>Trích chuỗi con</b>
                        <br>
                        <ul>
                            <li><span style="color: red;">slice(start, end)</span></li>
                            <li><span style="color: red;">substring(start, end)</span></li>
                            <li><span style="color: red;">substr(start, length)</span></li>
                        </ul>
                    </li>
                    <li><b>Chuyển đổi kiểu chữ</b>
                        <br>
                        <ul>
                            <li><b>In hoa</b>: <span style="color: red;">toUpperCase()</span></li>
                            <li><b>In thường</b>: <span style="color:red;">toLowerCase()</span></li>
                        </ul>
                    </li>
                    <li>
                        <b>Tìm kiếm</b>
                        <br>
                        <ul>
                            <li>String <span style="color:red;">indexOf</span></li>
                            <li>String <span style="color: red;">lastIndexOf</span></li>
                            <li>String <span style="color: red;">startsWith()</span></li>
                            <li>String <span style="color: red;">endsWith()</span></li>
                        </ul>
                    </li>
                </ul>
            `],
            ['Thuộc tính, phương thức', 'webdesign0453', `
                <ul>
                    <li>Chiều dài chuỗi: <span style="color: red;">length</span></li>
                    <li>Trích chuỗi con
                        <br>
                        <ul>
                            <li><b style="color: red;">slice</b>(start, end):
                                <br>
                                Tham số âm sẽ tính từ cuỗi chuỗi
                            </li>
                            <li>
                                <b style="color: red;">substring</b>(start, end);
                                <br>
                                Tham số âm sẽ hiểu là 0
                            </li>
                        </ul>
                    </li>
                    <li>
                        Chuyển đổi kiểu chữ <br>
                        <ul>
                            <li>In hoa: <span style="color: red;">toUpperCase()</span></li>
                            <li>In thường: <span style="color:red;">toLowerCase()</span></li>
                        </ul>
                    </li>
                    <li>
                        Tìm kiếm <br>
                        <ul>
                            <li>String indexOf(chuỗi, vị trí)
                                <br>
                                <ul>
                                    <li>Trả về -1 nếu không tìm thấy</li>
                                    <li>Trả về vị trí đầu tiên/cuối cùng xuất hiện chuỗi chỉ định</li>
                                </ul>
                            </li>
                            <li>String lastIndexOf(chuỗi, vị trí)
                                <br>
                                <ul>
                                    <li>Trả về -1 nếu không tìm thấy</li>
                                    <li>Trả về vị trí đầu tiên/cuối cùng xuất hiện chuỗi chỉ định</li>
                                </ul>
                            </li>
                            <li>String startsWith(chuỗi, vị trí)
                                <br>
                                <ul>
                                    <li>Trả về true/false</li>
                                    <li>Bắt đầu bởi chuỗi/Kết thúc bởi chuỗi</li>
                                    <li>Tìm trong chuỗi bắt đầu từ vị trí nào</li>
                                </ul>
                            </li>
                            <li>String endsWith(chuỗi, vị trí)
                                <br>
                                <ul>
                                    <li>Trả về true/false</li>
                                    <li>Bắt đầu bởi chuỗi/Kết thúc bởi chuỗi</li>
                                    <li>Tìm trong chuỗi bắt đầu từ vị trí nào</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            `],
            ['Kiểu Number', 'webdesign0454', `
                <ul>
                    <li>Tùy thuộc vào giá trị khởi tạo mà biến sẽ là số thực hay số nguyên</li>
                    <li>Nhưng số quá lớn hoặc quá nhỏ sẽ viết dạng số mũ
                        <br>
                        Ví dụ:
                        <ul>
                            <li>let x &equals; 12300000; => x = 123e5</li>
                            <li>let x &equals; 0.00123; => x = 123e-5</li>
                        </ul>
                    </li>
                    <li>
                        <b style="color: red;">NaN</b> dùng để chỉ một giá t rị không phải là số
                        <br>
                        isNaN() => true/false
                    </li>
                </ul>
            `],
            
        ]
    },
    'webdesign046': {
        'title': 'Date, Array',
        'index': [
            ['Kiểu Date', 'webdesign0461', `
                <ul>
                    <li>Mặc định Javascript sẽ sử dụng khung giờ của trình duyệt (máy client) và trả về dạng chuỗi</li>
                    <li>Tạo đối tượng ngày: có 4 cách
                        <br>
                        <ul>
                            <li>new <b style="color: red;">Date()</b></li>
                            <li>new <b style="color: red;">Date</b>(year, month, day, hours, minutes, seconds, milliseconds)</li>
                            <li>new <b style="color: red;">Date</b>(milliseconds)</li>
                            <li>new <b style="color: red;">Date</b>(date string)</li>
                        </ul>
                    </li>
                    <li>Tạo đối tượng ngày với ngày giờ hiện hành
                        <br>
                        <ul>
                            <li>new <b style="color: red;">Date</b>(year, month, day, hours, minutes, seconds, milliseconds)</li>
                            <li>Các tham số cần theo đúng thứ tự
                                <br>
                                <ul>
                                    <li>5 tham số chuỗi có thể bỏ qua</li>
                                    <li>Ngược lại sẽ chuyển sang ngày mới dạng milliseconds</li>
                                </ul>
                            </li>
                            <li>Tháng được tính từ 0 - 11</li>
                            <li>Javascript lưu trữ các ngày như số giấy tính từ ngày 1 tháng 1 năm 1970
            
                                <br>
                                <ul>
                                    <li>1/1/1970 => có giá trị 0</li>
                                    <li>Một ngày có <b style="color: red;">24 giờ</b> = 86400000 mili giây</li>
                                    <li>Tạo đối tượng ngày với số milliseconds
                                        <br>
                                        new <b style="color: red;">Date</b>(milliseconds)
                                    </li>
                                    <li>Tạo đối tượng ngày từ chuỗi ngày giờ
                                        <br>
                                        new <b style="color: red;">Date</b>(date string)
                                    </li>
                                    <li>
                                        Chuyển ngày sang dạng milliseconds
                                        <br>
                                        Date.<b style="color: red;">parse</b>(date string)
                                    </li>
                                    <li>
                                        Một số phương thức truy xuất các thành phần dữ liệu của kiểu <b>Date</b>
                                        <br>
                                        <center>
                                            <table>
                                                <tr>
                                                    <th>Phương thức</th>
                                                    <th>Ý nghĩa</th>
                                                </tr>
                                                <tr>
                                                    <td>getFullYear()</td>
                                                    <td>Truy xuất năm (yyyy)</td>
                                                </tr>
                                                <tr>
                                                    <td>getMonth()</td>
                                                    <td>Truy xuất tháng (0-11)</td>
                                                </tr>
                                                <tr>
                                                    <td>getDate()</td>
                                                    <td>Truy xuất ngày (1-31)</td>
                                                </tr>
                                                <tr>
                                                    <td>getHours()</td>
                                                    <td>Truy xuất giờ (0-23)</td>
                                                </tr>
                                                <tr>
                                                    <td>getMinutes()</td>
                                                    <td>Truy xuất phút (0-59)</td>
                                                </tr>
                                                <tr>
                                                    <td>getSeconds()</td>
                                                    <td>Truy xuất giây (0-59)</td>
                                                </tr>
                                                <tr>
                                                    <td>getMilliseconds()</td>
                                                    <td>Truy xuất mili giây (0 - 999)</td>
                                                </tr>
                                                <tr>
                                                    <td>getTime()</td>
                                                    <td>Truy xuất thời gian (<i>số mili giây từ ngày 1/1/1970</i>)</td>
                                                </tr>
                                                <tr>
                                                    <td>getDay()</td>
                                                    <td>Truy xuất thứ trong tuần (0-6)</td>
                                                </tr>
                                            </table>
                                        </center>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            `],
            ['Kiểu Array (Mảng)', 'webdesign0462', `
                <ul>
                    <li>Là loại biến đặc biệt có thể lưu trữ nhiều hơn 1 giá trị</li>
                    <li>Truy xuất các phần tử mảng thông qua chỉ số (bắt đầu từ 0)</li>
                    <li>Cú pháp: const <b style="color: red;">array_name</b> = [item1, item2, ...]</li>
                    <li>Truy xuất: <b style="color: red;">array_name[0]</b>, <b style="color: red;">array_name[1]</b>, <b style="color: red;">array_name[2]</b></li>
                    <li>Thuộc tính <b style="color: red;">length</b></li>
                    <li>Phương thức:
                        <br>
                        <ul>
                            <li>Thêm phần tử mới: unshift(), push(), splice()</li>
                            <li>Xóa bỏ phần tử: shift(), pop(), slice()</li>
                            <li>Chuyển mảng sang chuỗi: toString(), join()</li>
                            <li>Trộn mảng: concat()</li>
                            <li>Xác định <b style="color: red;">số phần tử</b> trong mảng</li>
                            <li>Cú pháp: <b>array_name</b>.<b style="color: red;">length</b></li>
                            <li>Thêm phần tử mới: 
                                <br>
                                <ul>
                                    <li>Chèn vào cuối mảng</li>
                                    <li>Cú pháp
                                        <br>
                                        <b>push(ts1, ts2,...)</b>
                                    </li>
                                    <li>Chèn vào đầu mảng</li>
                                    <li><b>Cú pháp</b>:
                                        <b>unshift(ts1, ts2,...)</b>
                                    </li>
                                    <li>
                                    Chèn tại vị trí xác định <br>
                                    <b>splice(ts1,ts2,ts3,ts4,...)</b> 
                                    <br>
                                    Trả về mảng chứa các phần tử đã xóa (nếu có)
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Xóa phần tử:
                                <br>
                                <ul>
                                    <li>Vị trí cuối mảng
                                        <br>
                                        Cú pháp: array_name.<b>pop()</b>
                                    </li>
                                    <li>Vị trí đầu mảng
                                        <br>
                                        Cú pháp: array_name.<b>shift()</b>
                                    </li>
                                    <li>
                                        Tạo mảng mới
                                        <br>
                                        <ul>
                                            <li>Cú pháp <br>
                                                <b>slice(ts1,ts2)</b>
                                            </li>
                                            <li>Tham số 1 xác định vị trí bắt đầu</li>
                                            <li>Tham số 2 (tùy chọn)</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Chuyển giá trị mảng sang String
                                <br>
                                <ul>
                                    <li>Cú pháp
                                        <br>
                                        <ul>
                                            <li>array_name.<b style="color: red;">toString()</b></li>
                                            <li>array_name.<b style="color: red;">join(ts1)</b></li>
                                        </ul>
                                    </li>
                                    <li>Tham số của phương thức <b>join()</b> dùng để xác định ký tự phân cách giữa các phần tử</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            `],
        ]
    },
    'webdesign047': {
        'title': 'Cấu trúc điều khiển',
        'index': [
            ['Các cấu trúc điều khiển', 'webdesign0471', `
                <ul>
                    <li>Cấu trúc if</li>
                    <li>Cấu trúc if...else</li>
                    <li>Cấu trúc if...else if ... else</li>
                    <li>Cấu trúc switch</li>
                    <li>Cấu trúc lặp for</li>
                    <li>Cấu trúc lặp while</li>
                </ul>

                <p>Câu lệnh break</p>
                <p>Câu lệnh continue</p>
            `]
        ]
    },
    'webdesign048': {
        'title': 'DOM',
        'index': [
            ['HTML DOM (HTML Document Object Model)', 'webdesign0481', `
                <ul>
                    <li>Được sử dụng để truy xuất và thay đổi tất cả các phần tử của một tài liệu HTML</li>
                    <li>Biểu diễn dạng cây
                        <br>
                        <ul>
                            <li>document.<b>getElementById(<i>id</i>)</b></li>
                            <li>document.<b>getElementsByTagName(<i>name</i>)></li>
                            <li>document.<b>getElementsByClassName(<i>name</i>)</b></li>
                        </ul>
                    </li>
                    <li>Kết hợp với <b style="color: red;">xây dựng hàm</b> và <b style="color: red;">bắt các sự kiện</b> trên đối tượng HTML</li>
                </ul>
            `],
            ['Một số sự kiện thông dùng', 'webdesign0482', `
                <center>
                    <table>
                        <tr>
                            <th>Sự kiện</th>
                            <th>Ý nghĩa</th>
                        </tr>
                        <tr>
                            <td>onchange</td>
                            <td>Khi phần tử HTML có thay đổi</td>
                        </tr>
                        <tr>
                            <td>onclick</td>
                            <td>Khi người dùng click vào phần tử HTML</td>
                        </tr>
                        <tr>
                            <td>onmouseover</td>
                            <td>Khi người dung di chuyển chuột lên phần tử HTML</td>
                        </tr>
                        <tr>
                            <td>onmouseout</td>
                            <td>Khi người dùng di chuyển phần tử khỏi HTML</td>
                        </tr>
                        <tr>
                            <td>onkeydown</td>
                            <td>Khi người dùng ấn 1 phím trên bàn phím</td>
                        </tr>
                        <tr>
                            <td>onload</td>
                            <td>Khi trình duyệt hoàn thành việc load trang</td>
                        </tr>
                    </table>
                </center>
            `],
            ['Thay đổi <span style="color: red;">thuộc tính định kiểu CSS</span>', 'webdesign0483', `
                <ul>
                    <li>Sử dụng phương thức <b>getElementById</b></li>
                    <li>Sử dụng thuộc tính <b>style.fontSize</b></li>
                    <li>Bắt sự kiện <b>onclick</b></li>
                </ul>
            `],
            ['<span style="color: red;">Ẩn/hiện</span> phần tử HTML', 'webdesign0484', `
                <ul>
                    <li>Sử dụng phương thức <b>getElementById</b></li>
                    <li>Sử dụng thuộc tính
                        <br>
                        <ul>
                            <li>style.display = 'none'</li>
                            <li>style.display = 'block'</li>
                        </ul>
                    </li>
                    <li>Bắt sự kiện onclick</li>
                </ul>
            `],
            ['Kiểm tra dữ liệu trên form', 'webdesign0485', `
                <ul>
                    <li>Lấy dữ liệu người dùng từ form</li>
                    <li>Bắt sự kiện <b style="color: red;">onsubmit</b> trên form
                        <br>
                        <pre>onsubmit &equals; "return <span style="color: blue; font-weight: bold;">function_name()</span>"</pre>
                    </li>
                    <li>Viết hàm kiểm tra tính hợp lệ của dữ liệu <br>
                        <ul>
                            <li><span style="color: blue; font-weight: bold;">function_name()</span></li>
                            <li>Trả về true, false</li>
                        </ul>
                    </li>
                </ul>
            `],
            ['Lấy dữ liệu người dùng từ text field', 'webdesign0486', `
                <ul>
                    <li>Thiết kế
                        <br>
                        <pre>
                            &lt;form action="vidumau14.html" name="frmXuly" ...&gt; 
                                &lt;input type="text" id="hoten" value="" &gt; 
                            &lt;/form&gt;
                        </pre>
                    </li>
                    <li>Truy xuất đến TEXTFIELD trong form
                        <br>
                        <pre>
                            let el_hoten &equals; document.<b>forms</b>["<b style="color: red;">frmXuLy</b>"]["<b style="color: blue;">txtHoTen</b>"]
                        </pre>
                    </li>
                    <li>Ngoài ra, còn có lấy dữ liệu từ checkbox, radio button, select</li>
                </ul>
            `]
        ]
    },
    'webdesign049': {
        'title': 'Các kiến thức đã học',
        'index': [
            ['Tóm tắt', 'webdesign0491', `
                <ul>
                    <li>Cách nhúng mã nguồn JS vào trang HTML</li>
                    <li>Câu lệnh Javascript</li>
                    <li>Cú pháp ngôn ngữ JS</li>
                    <li>Cách chú thích trong tài liệu JS</li>
                    <li>Cách khai báo biến</li>
                    <li>Các phép toán, kiểu dữ liệu, cấu trúc điều khiển</li>
                    <li>Tổ chức mã nguồn theo hàm</li>
                    <li>Các sự kiện và sử dụng các hộp thoại</li>
                    <li>Kiểm tra dữ liệu trên form</li>
                </ul>  
            `]
        ]
    }

}