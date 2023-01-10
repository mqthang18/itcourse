const Cs05 = {
    Cs051: {
        title: 'Các khái niệm cơ bản về tập tin',
        index: [
            ['Các khái niệm cơ bản về tập tin','CS511',`
            <ul>
                <li>Tập tin được định nghĩa như tập hợp các thông tin liên quan với nhau, được đặt tên và được lưu trữ trên bộ nhớ ngoài</li>
                <li>Các thuộc tính cơ bản của tập tin
                    <br>
                    <ul>
                        <li>File name: sử dụng để truy cập tệp tin</li>
                        <li>File type: Hệ điều hành thường phân biệt nhiều kiểu tệp tin khác nhau trong hệ thống. Ví dụ trong Linux, tệp tin có thể là tệp tin thông thường chứa dữ liệu hay là tệp tin chứa thông tin về thư mục và được dùng cho mục đích quản lý tệp tin.</li>
                    </ul>
                </li>
                <li>Kích thước tập tin (size) mỗi tập tin luôn chiếm một dung lượng bộ nhớ xác định trên bộ nhớ ngoài. Kích thước hiện hành của tập tin (tính bằng byte, word hay khối) và kích thước cho phép tối đa của tệp tin được chứa trong thuộc tính này.</li>
                <li>Người tạo tệp tin, người sở hữu tệp tin (user identification) thông tin về số định danh hoặc tên của người đã tạo ra và người đang có quyền sở hữu tệp tin được chứa trong thuộc tính này. Người tạo tệp tin và người sở hữu có thể không trùng nhau</li>
                <li>Quyền truy cập tệp tin, để bảo mật tệp tin, hệ điều hành thường cấp cho người dùng các quyền cơ bản với tệp tin như read/remove/modify nội dung tệp tin</li>
                <li>Thời gian create/access file lần cuối bao gồm time, date created, modified, accessed lần cuối đối với tệp</li>
                <li>Vị trí tập tin (location) để hệ điều hành có thể truy cập tới tệp tin, cần phải biết dữ liệu của tệp tin được lưu trữ ở đâu trên bộ nhớ ngoài, thông tin này được chứa trong thuộc tính vị trí của tệp tin</li>
            </ul>
            `]
        ]
    },
    Cs052: {
        title: 'Cấu trúc tập tin',
        index: [
            ['Cấu trúc tệp tin','CS521',`
                <p>Cấu trúc tệp tin, 3 kiểu cấu trúc cơ bản như sau:</p>
                <ul>
                    <li>Dãy tuần tự các byte (không cấu trúc)</li>
                    <li>Dãy các bản ghi (record) có chiều dài cố định</li>
                    <li>Cấu trúc cây: gồm cây của những bản ghi (record), không cần thiết có cùng độ dài, mỗi bản ghi có một trường khóa giúp cho việc tìm kiếm nhanh hơn</li>
                    <li>Ưu điểm
                        <br>
                        <ul>
                            <li>Người lập trình có thể thao tác với các tệp  tin có cấu trúc một cách dẽ dàng hơn</li>
                            <li>Hạn chế một số lỗi khi thao tác với tập tin do hệ điều hành có thể kiểm soát được các thao tác trên tệp tin có cấu trúc</li>
                        </ul>
                    </li>
                    <li>Nhược điểm
                        <ul>
                            <li>Tăng kích thước tệp tin trong hệ thống</li>
                            <li>Tính mềm dẻo của hệ thống bị giảm đi</li>
                        </ul>
                    </li>
                </ul>
            `]
        ]
    },
    Cs053: {
        title: 'Các phương pháp truy cập tập tin',
        index: [
            ['Truy xuất tuần tự', 'CS531', `
                <ul>
                    <li>Thông tin trong tệp được xử lý theo một thứ tự xác định, các mẫu tin được sắp xếp tuần tự</li>
                    <li>Sử dụng một con trỏ để định vị trí hiện tượng trong tệp tin, sau mỗi thao tác đọc/ghi tệp con trỏ sẽ được tăng lên 1 để trỏ sang vị trí tiếp theo <br>
                        <center>
                            <img style="width: 100%;" src="./assets/img/CS/5/3_1.jpg" alt="3_1">
                        </center>
                    </li>
                </ul>
            `],
            ['Truy xuất trực tiếp', 'CS532', `
                <ul>
                    <li>Tập tin được hiển thị như một chuỗi các chuỗi các khối hay mẫu tin được đánh số</li>
                    <li>Cho phép đọc hoặc ghi tới một khối hay mẫu tin bất kỳ trong tệp
                        <br>
                        <center>
                            <img style="width: 100%;" src="./assets/img/CS/5/3_2.jpg" alt="3_2">
                        </center>
                    </li>
                </ul>
            `],
            ['Truy xuất tệp tin dưa trên chỉ số', 'CS533', `
                <ul>
                    <li>Là phương pháp dựa trên chỉ mục chứa các con trỏ tới các khối của tệp tin</li>
                    <li>Để tìm một bản ghi trong tệp tin, trước hết cần tìm chỉ mục của bản ghi và sau đó dùng con trỏ để truy xuất trực tiếp tới bản ghi</li>
                    <li>Tốn rất nhiều bộ nhớ để lưu trữ bảng chỉ mục của tệp tin một giải pháp là tạo chỉ mục cho tập tin chỉ mục. Tập tin chỉ mục chính chứa các con trỏ chỉ tới các tập tin chỉ mục thứ cấp mà nó chỉ tới các thành phần dữ liệu thật sự</li>
                </ul>
                <center>
                    <img style="width: 100%;" src="./assets/img/CS/5/3_3.jpg" alt="3_3">
                </center>
            `]
        ]
    },
    Cs054: {
        title: 'Các thao tác với tập tin',
        index: [
            ['Các thao tác với  tập tin','CS541',`
                <ul>
                    <li>File create: thao tác này cho phép tạo ra một tệp tin trống trên thiết bị lưu trữ. Hệ điều hành sẽ tạo ra một entry cho tệp tin trong thư mục và gắn một số thuộc tính cho tệp tin</li>
                    <li>File remove, thao tác này thực hiện 1 số công việc như sau:
                        <br>
                        <ul>
                            <li>Giải phóng không gian trên đĩa</li>
                            <li>Xóa entry tương ứng của tệp tin trong thư mục</li>
                        </ul>
                    </li>
                    <li>Mở tệp tin: Thông thường để read/write tệp tin cần phải mở tệp tin, thực chất việc mở tập tin là tiến hành đọc các thuộc tính và vị trí tệp từ bộ nhớ ngoài vào bộ nhớ trong của máy tính</li>
                    <li>Đóng tệp: Khi thực hiện xong các thao tác read/write tệp tin, cần phải close file. Thao tác này sẽ remove các thông tin về tệp trong bảng thông tin các tệp đang mở</li>
                    <li>Ghi dữ liệu vào tệp: Các thông tin về tệp tin được nạp vào bộ nhớ chính khi thực hiện thao tác mở tệp, thao tác ghi tệp sẽ đưa thêm thông tin vào vị trí hiện thời của tệp tin, thông thường là thêm vào cuối tệp</li>
                    <li>Read data từ file: mỗi file có một con trỏ tệp, các thao tác read/write đều được thực hiện ở vị trí con trỏ tệp, thao tác đọc tệp cần có các thông tin về số lượng byte cần đọc.</li>
                    <li>Định vị con trỏ tệp (seek): Thao tác này sẽ định vị con trỏ tệp vào vị trí mong muốn trước khi thực hiện các thao tác read/write</li>
                    <li>Đọc thuộc tính của tệp tin: Khi cần, có thể dùng các lệnh để lấy thông tin về thuộc tính của tệp</li>
                    <li>Thay đổi thuộc tính của tệp tin: Có một số thuộc tính của tệp cho phép người dùng thiết lập lại giá trị, hệ điều hành cung cấp một số hàm để thực hiện công việc này</li>
                </ul>
            `]
        ]
    },
    Cs055: {
        title: 'Tổ chức thư mục trong hệ điều hành',
        index: [
            ['Khái niệm','CS551',`
                <ul>
                    <li>Chia đĩa vật lý thành nhiều phân vùng (partition). Mỗi phân vùng gọi là một đĩa logic, có thể lưu trữ các thông tin một cách độc lập</li>
                    <li>Các ổ đĩa logic, hệ thống tệp tin được tổ chức dưới dạng các thư mục (directory/folder) và các tệp tin (file).</li>
                    <li>Thư mục bao gồm một tập các entry, mỗi entry ứng với một tệp tin. Mỗi entry chứa các thông tin về tập tin như kích thước, vị trí, kiểu tệp, thuộc tính tệp</li>
                </ul>
            `],
            ['Các thao tác','CS52',`
                <ul>
                    <li>Tìm kiếm tệp tin</li>
                    <li>File create: Tạo tệp tin sẽ cấp phát một vùng trống trên đĩa để lưu trữ dữ liệu của tệp tin, đồng thời tạo ra một entry mới trong thư mục và trỏ tới vùng dữ liệu của tệp tin trên đĩa</li>
                    <li>File remove: Xóa vùng bộ nhớ trên đĩa và entry trong thư mục</li>
                    <li>Duyệt thư mục: Hiển thị tất cả các thông tin trong thư mục</li>
                    <li>File rename: Cho phép người dùng đổi thông tin về tên của tệp tin, dữ liệu của tệp tin không bị thay đổi bởi thao tác này.</li>
                </ul>
            `],
            ['Cấu trúc thư mục dạng đơn cấp','CS53',`
                <ul>
                    <li>Đây là cấu trúc thư mục đơn giản nhất, tất cả tập tin được chứa trong cùng thư mục
                        <br>
                        <center>
                            <img style="width: 100%;" src="./assets/img/CS/5/5_5.jpg" alt="5_5">
                        </center>
                    </li>
                    <li>Nhược điểm
                        <br>
                        <ul>
                            <li>Không thể có hai tệp tin trùng tên trên hệ thống</li>
                            <li>Số lượng tệp tin trong thư mục thưởng rất nhiều, khó tìm kiếm</li>
                            <li>Không hỗ trợ cơ chế bảo mật dữ liệu với đa người dùng</li>
                            <li>Không hỗ trợ cơ chế tạo nhóm cho các tệp tin cùng loại</li>
                        </ul>
                    </li>
                </ul>
            `],
            ['Cấu trúc thư mục dạng hai cấp','CS54',`
                <ul>
                    <li>Mỗi người dùng có một thư mục riêng để chứa các tệp tin của người dùng đó
                        <center>
                            <img style="width: 100%;" src="./assets/img/CS/5/5_51.jpg" alt="5_51">
                        </center>
                    </li>
                    <li>Đặc trưng của hệ thống
                        <br>
                        <ul>
                            <li>Mỗi tệp tin có một đường dẫn dạng /User-name/directory-name</li>
                            <li>Người sử dụng khác nhau có thể đặt tên tệp tin giống nhau</li>
                            <li>Tìm kiếm tệp tin dễ dàng và nhanh hơn</li>
                            <li>Mỗi người dùng, không thể tạo các nhóm cho các tệp tin cùng loại</li>
                        </ul>
                    </li>
                </ul>
            `],
            ['Cấu trúc thư mục dạng cây', 'CS55', `
                Mỗi thư mục lại có thể chứa các thư mục con khác và tệp tin. Các thư mục con cũng có thể được nhóm lại với nhau theo các tiêu chí xác định
                <br>
                <center>
                    <img style="width: 100%;" src="./assets/img/CS/5/5_52.jpg" alt="5_52">
                </center>
            `],
            ['Cấu trúc thư mục dạng đồ thị', 'CS56', `
                Trong cấu trúc này có thể có nhiều hơn một entry trong thư mục cùng trỏ tới một tệp tin 
                <br>
                <center>
                    <img style="width: 100%;" src="./assets/img/CS/5/5_53.jpg" alt="5_53">
                </center>
            `]
        ]
    },
    Cs056: {
        title: 'Cấp phát không gian cho tập tin',
        index: [
            ['Giới thiệu','CS561',`
                <ul>
                    <li>Hệ điều hành quản lý tệp tin như một tập các khối logic trên đĩa</li>
                    <li>Không gian đĩa được thành các khối (sector, block), khối này gọi là khối vật lý, sau đó HĐH sẽ kết hợp 1 hoặc nhiều khối vật lý thành khối logic</li>
                    <li>Thông thường mỗi khối logic bao gồm 1 số lượng khối vật lý bằng lũy thừa của 2, ví dụ 2<sup>0</sup>=1, 2<sup>1</sup>=2, 2<sup>2</sup>=4,...</li>
                </ul>
            `],
            ['Cấp phát khối liên tiếp','CS562',`
                <ul>
                    <li>Cấp phát cho mỗi tập tin tập hợp các khối liên tục trên đĩa</li>
                    <li>Quản lý tệp tin đơn giản qua địa chỉ khối đầu tiên và số lượng khối cấp phát cho tệp tin</li>
                    <li>Ưu điểm
                        <br>
                        <ul>
                            <li>Dễ cài đặt, truy cập tệp tin</li>
                            <li>Đọc/ghi tệp nhanh</li>
                            <li>Hỗ trợ truy xuất trực tiếp tệp tin</li>
                        </ul>
                    </li>
                    <li>Nhược điểm
                        <br>
                        <ul>
                            <li>Bị hiện tượng phân mảnh trên đĩa</li>
                            <li>Khô khan khi cấp phát khoảng trông cho tệp tin kích thước lớn</li>
                        </ul>
                    </li>
                </ul>
                <center>
                    <img style="width: 100%;" src="./assets/img/CS/5/6_1.jpg" alt="6_1">
                </center>
            `],
            ['Cấp phát theo danh sách liên kết','CS563', `
                <ul>
                    <li>Mỗi tệp tin được cấp phát một tập hợp các khối không nhất thiết phải liên tục trên đĩa, các khối được tổ chức như một danh sách liên kết</li>
                    <li>Với cách tổ chức này, mỗi entry trong thư mục sẽ chứa con trỏ trỏ tới khối đầu tiên của tệp tin, mỗi khối trong tệp cũng chứa một con trỏ để trỏ sang khối tiếp theo của tệp, khối cuối cùng có giá trị nil
                        <center>
                            <img style="width: 100%;" src="./assets/img/CS/5/6_2.jpg" alt="6_2">
                        </center>
                    </li>
                    <li>Ưu điểm
                        <br>
                        <ul>
                            <li>Không xảy ra hiện tượng phân mảnh ngoài với đĩa</li>
                            <li>Tất cả các khối chưa sử dụng đều có thể cấp phát được cho tệp tin</li>
                            <li>Kích thước tệp tin có thể lớn tùy ý</li>
                            <li>Thư mục chỉ cần chứa thông tin về khối đầu tiên của tệp</li>
                        </ul>
                    </li>
                    <li>Nhược điểm
                        <br>
                        <ul>
                            <li>Không hỗ  trợ phương pháp truy cập ngẫu nhiên</li>
                            <li>Cần không gian nhớ để chứa con trỏ trong các khối</li>
                            <li>Có thể dẫn tới lỗi truy cập tệp tin nếu con trỏ liên kết bị phá vỡ</li>
                            <li>Truy cập tệp tin, cần phải duyệt qua lần lượt từng khối</li>
                        </ul>
                    </li>
                </ul>
            `],
            ['Cấp phát theo bảng định vị FILE (FILE ALLOCATION TABLE - FAT)','CS564',`
                <ul>
                    <li>Một bảng định vị file được lưu trữ trong hệ thống</li>
                    <li>Bảng FAT chứa danh sách các khối cho các tệp tin dưới dạng một danh sách liên kết</li>
                    <li>Bảng FAT chứa một tập các ô, mỗi ô tương ứng với một khối trên đĩa</li>
                    <li>Mỗi ô trong bảng FAT chứa giá trị là số thứ tự của các khối tiếp theo trong tệp tin. Hình sua minh họa về bảng FAT, trong đó tệp tin name.png bao gồm các khối 4, 10, 1, 3
                        <br>
                        <center>
                            <img style="width: 100%;" src="./assets/img/CS/5/5_63.jpg" alt="5_63">
                        </center>
                    </li>
                    <li>Ưu điểm
                        <br>
                        <ul>
                            <li>Toàn bộ không gian đĩa được sử dụng cho lưu trữ dữ liệu</li>
                            <li>Khối hỏng trên đĩa không gây lỗi cho toàn bộ tệp tin</li>
                            <li>Hỗ trợ truy cập ngẫu nhiên tới các khối của đĩa</li>
                            <li>Chỉ cần duyệt bằng FAT khi thao tác với tệp</li>
                        </ul>
                    </li>
                    <li>Nhược điểm
                        <ul>
                            <li>Mỗi khối trên đĩa phải có một entry tương ứng trong bảng FAT</li>
                            <li>Kích  thước của bảng FAT có thể rất lớn</li>
                            <li>Khi kích thước khối tăng, sẽ dẫn tới hiện tượng phân mảnh trong trên đĩa</li>
                        </ul>
                    </li>
                </ul>
            `],
            ['Sử dụng khối chỉ số', 'CS565', `
                <ul>
                    <li>Phương pháp khối chỉ số sẽ lưu tất cả các con trỏ của tệp tin trong một vùng riêng biệt mỗi tệp tin sẽ có một mảng chứa chỉ số khối riêng thuận tiện trong các thao tác với tệp tin</li>
                    <li>Trong hình minh họa một tệp tin có chỉ số khối bắt đầu là 11, và các khối tiếp theo là 6,3,13,10,15,14</li>
                    <li>Ưu điểm 
                        <br>
                        <ul>
                            <li>Hỗ trợ truy cập trực tiếp tới các khối trong tệp tin</li>
                            <li>Một khối hỏng trong tệp tin sẽ không ảnh hưởng tới các khối khác</li>
                        </ul>
                    </li>
                    <li>
                        Nhược điểm
                        <br>
                        <ul>
                            <li>Hỏng khối chỉ số sẽ dẫn tới lỗi với cả tệp tin</li>
                            <li>Kích thước của một tệp tin phụ thược vào số khối có thể lưu trữ trong một l-node</li>
                            <li>Nếu kích thước tệp tin nhỏ, dẫn đến lãng phí vì vẫn phải tồn tại một mảng khối</li>
                        </ul>
                    </li>
                    <center>
                        <img style="width: 100%;" src="./assets/img/CS/5/5_64.jpg" alt="5_64">
                    </center>
                </ul>
            `]
        ]
    },
    Cs057: {
        title: 'Quản lý đĩa',
        index: [
            ['Giới thiệu','CS571',`
                <ul>
                    <li>Tệp tin là 1 tập hợp các khối logic trên đĩa, hệ điều hành cấp phát đĩa cho tệp tin theo đơn vị khối</li>
                    <li>Khi có yêu cầu tạo mới tệp tin, hệ điều hành tìm các khối trống phù hợp trên đĩa để cấp phát cho tệp tin</li>
                    <li>Khi xóa tệp, hệ điều hành sẽ thu hồi các khối mà tệp tin chiếm dùng để bổ sung vào danh sách khối trống</li>
                    <li>Để quản lý không gian đĩa một cách hiệu quả cần phải lựa chọn kích thước khối và phương pháp quản lý khối trống trên đĩa phù hợp</li>
                </ul>
            `],
            ['Lựa chọn kích thước khối','CS572',`
                <ul>
                    <li>Mỗi tệp tin goomg 1 tập thứ nguyên các khối. Khi kích thước tệp tin nhỏ hơn bội số kích thước các khối trong tệp tin thì khối cuối cùng bị bỏ phí. Hiện tượng này gọi là phân mảnh (internal segmentation) => Hiểu quả làm việc của hệ thống tập phụ thuộc một phần vào việc lựa chọn kích thước khối</li>
                    <li>Trong các hệ điều hành, khối logic có kích thước bằng lũy thừa 2 của kích thước khối vật lý, khối vật lý (sector) nhỏ nhất thường được chọn là 512B, mỗi khối logic thường có kích thước từ 512B tới 32KB</li>
                </ul>
            `],
            ['Quản lý khối trống trên đĩa','CS573',`
                <ul>
                    <li>Sử dụng vector bit
                        <br>
                        <ul>
                            <li>Các khối trống được quản lý bởi r1 bản đồ bit, mỗi khối trên đĩa sẽ ứng với 1 phần tử của mảng</li>
                            <li>Khi cấp phát một khối cho tệp tin thì giá trị của bit tương ứng trong vector bit được thiết lập là 0, ngược lại khi khối được giải phóng bit tương ứng của trong vector bit được thiết lập là 1.
                                <br>
                                Ví dụ: xét bảng bit như sau: 00100111001111111..
                            </li>
                            <li>Các khối 0, 1, 3, 4, 8, 9 đã được cấp phát, các khối còn lại chưa được cấp phát.</li>
                            <li>Ưu điểm: Tìm kiếm khối trống nhanh</li>
                            <li>Nhược điểm: Vector bit sẽ có kích thước lớn khi dung lượng đĩa lớn, do vậy tốn bộ nhớ để lưu vector bit</li>
                        </ul>
                    </li>
                    <li>Sử dụng danh sách kết nối: Các khối trống trên đĩa được tổ chức dưới dạng một danh sách liên kết đơn, mỗi khối sẽ chứa một con trỏ trỏ sang khối tiếp theo. Địa chỉ của khối đầu tiên được lưu trữ ở một vị trí đặc biệt trên đĩa.</li>
                    <li>Sử dụng danh sách vùng trống
                        <br>
                        <ul>
                            <li>Lưu trữ thông tin về mỗi vùng trống gồm hai tham số cơ bản là:
                                <br>
                                <ul>
                                    <li>Vị trí khối đầu tiên trong vùng trống</li>
                                    <li>Số khối trống liên tiếp của vùng trống</li>
                                </ul>
                            </li>
                            <li>Khi cần cấp phát khối nhớ cho tệp tin, hệ điều hành sẽ tìm vùng trống phù hợp nhất để cấp phát</li>
                        </ul>
                    </li>
                </ul>
            `],
            ['Tổ chức bên trong thư mục','CS574',`
            <p>
                <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#CS574collapse1" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Tổ chức thư mục theo danh sách tuyến tính
                </a>
                <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#CS574collapse2" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Tổ chức thư mục theo cây nhị phân
                </a>
                <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#CS574collapse3" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Tổ chức thư mục theo bảng băm
                </a>
                <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#CS574collapse4" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Độ tin cậy của hệ thống tệp
                </a>
                <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#CS574collapse5" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Tính toàn vẹn của hệ thống tệp tin
                </a>
                <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#CS574collapse6" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Bảo vệ hệ thống tệp tin
                </a>
                <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#CS574collapse7" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Tổ chức thông tin trên bộ nhớ thứ cấp
                </a>
            </p>
            <div class="collapse" id="CS574collapse1">
            <div class="card card-body">
                <ul>
                    <li>Các tệp tin trong thư mục được tổ chức như một danh sách tuyến tính, mỗi tệp tin sẽ chứa một con trỏ trỏ tới các khối dữ liệu của tệp tin, và một con trỏ trỏ tới tệp tin tiếp theo trong thư mục</li>
                    <li>Nhược điểm
                        <br>
                        <ul>
                            <li>Các thao tác tạo mới, xóa, cập nhật với tệp tin chậm, do phải duyệt lần lượt từng phần tử trong danh sách liên kết</li>
                            <li>Tìm kiếm tệp tin chậm</li>
                        </ul>
                    </li>
                </ul>
            </div>
            </div>
            <div class="collapse" id="CS574collapse2">
            <div class="card card-body">
                <ul>
                    <li>Cấu trúc dữ liệu dạng cây nhị phân sẽ giúp quá trình tìm kiếm thông tin nhanh hơn, do vậy một số hệ điều hành đã sử dụng cấu trúc cây nhị phân để tổ chức cho thư mục.</li>
                    <li>Mỗi khi thêm entry mới vào thư mục, hệ thống sẽ sắp xếp entry vào nhánh tương ứng của cây nhị phân.</li>
                    <li>Hệ thống tệp tin NTFS của MS Window là một điển hình về cách tổ chức này.</li>
                </ul>
            </div>
            </div>
            <div class="collapse" id="CS574collapse3">
            <div class="card card-body">
                <ul>
                    <li>Sử dụng một bảng băm, mỗi phần tử của bảng băm sẽ trỏ
                        tới một entry trong thư mục và có cấu trúc dạng
                        &lt; key, value &gt;</li>
                    <li>
                        Với mỗi tệp tin trong thư mục, hệ điều hành sẽ sinh ra một cặp &lt; key, value &gt; tương ứng và lưu vào bảng băm
                    </li>
                    <li>
                        Khóa key được xác định qua một hàm băm dựa trên tên tệp tin
                    </li>
                    <li>
                        Nhược điểm: Nếu số lượng entry trong thư mục vượt quá kích thước của bảng băm thì phải chọn lại hàm băm.
                    </li>
                </ul>
                <center>
                    <img style="width: 100%;" src="./assets/img/CS/5/7_31.jpg" alt="7_31">
                </center>
            </div>
            </div>
            <div class="collapse" id="CS574collapse4">
                <div class="card card-body">
                    <ul>
                        <li>Phát hiện và loại trừ các khối hỏng trên đĩa
                            <br>
                            Trên hệ thống đĩa có thể tồn tại các khối hỏng do quá trình sản xuất và sử dụng, do vậy cần phải có cơ chế để phát hiện và loại trừ các khối hỏng.
                        </li>
                        <li>Các hệ điều hành thường sử dụng hai phương pháp cơ bản sau:
                            <br>
                            <ul>
                                <li>Sử dụng một sector riêng để lưu trữ thông tin các khối hỏng, một số khối không hỏng được dành riêng để dự trữ</li>
                                <li>Một sector trên đĩa được dành riêng chứa danh sách các khối hỏng. Một số khối không hỏng được dành riêng để dự trữ</li>
                                <li>Tất cả các khối hỏng được chuyển vào một tệp tin</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="collapse" id="CS574collapse5">
                <div class="card card-body">
                    <p>Các hệ điều hành đều cung cấp cho người sử dụng các tính năng để kiểm tra tính toàn vẹn của hệ thống tệp, và khắc phục các sự cố liên quan đến tính toàn vẹn của hệ thống tệp, như chương trình SCANDISK trong hệ điều hành MS-DOS và MS Windows.</p>
                </div>
            </div>
            <div class="collapse" id="CS574collapse6">
                <div class="card card-body">
                    <ul>
                        <li>Thông tin được giữ trong hệ thống cần phải đảm bảo tính an toàn từ các hư hỏng vật lý (khả năng tin cậy) và khả năng chống các truy xuất không hợp lệ (bảo vệ)</li>
                        <li>Bảo vệ hệ thống tệp tin có thể thực hiện theo nhiều cách</li>
                        <li>Các kiểu truy xuất: Hệ điều hành thường cung cấp các kiểu truy xuất tài nguyên cơ bản sau:
                            <ol>
                                <li>Đọc (Read): Đọc từ tập tin</li>
                                <li>Viết (Write): Viết hay viết lại tập tin</li>
                                <li>Thực thi (Execute): Nạp tập tin vào bộ nhớ và thực thi nó.</li>
                                <li>Chèn cuối (Append): Viết thông tin mới vào cuối tập tin</li>
                                <li>Xóa (Delete): Xóa tập tin và giải phóng không gian để có thể sử dụng lại</li>
                                <li>Liệt kê (List): Liệt kê tên và thuộc tính của tập tin</li>
                            </ol>
                        </li>
                        <li>
                            Kiểm soát truy xuất tài nguyên qua mật khẩu
                            <br>
                            <ul>
                                <li>Mỗi tệp tin trong hệ thống được gắn với một mật khẩu và một số quyền xác định (ví dụ quyền đọc, xem, sửa đổi,..)</li>
                                <li>Truy cập tệp tin sẽ kiểm tra thông tin xác nhận và cho phép thực hiện các thao tác tương ứng.</li>
                                <li>Nhược điểm
                                    <br>
                                    <ul>
                                        <li>Khó nhớ mật khẩu cho tài nguyên khi số lượng tài nguyên lớn.</li>
                                        <li>Gây mất thời gian khi thực hiện các thao tác, vì mỗi thao tác đều cần cung cấp mật khẩu tương ứng</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            Kiểm soát truy xuất tài nguyên qua danh sách quản lý truy cập
                            <br>
                            <ul>
                                <li>Mỗi tập tin và thư mục được gắn với một danh sách kiểm soát truy xuất (access-control list-ACL) xác định tên người dùng và kiểu truy xuất được phép mỗi người dùng</li>
                                <li>Khi một người dùng yêu cầu truy xuất tới một tập cụ thể, hệ điều hành kiểm tra danh sách truy xuất được gắn tới tập tin đó:</li>
                                <li>Hệ điều hành phân cấp người dùng theo nhóm sử dụng
                                    <br>
                                    <ul>
                                        <li>Người sở hữu (Owner): Người dùng tạo ra tập tin đó</li>
                                        <li>Nhóm (Group): Tập hợp những người dùng thuộc cùng một nhóm, là những người dùng có cùng quyền truy xuất đối với tài nguyên</li>
                                        <li>Người dùng khác (universe): Tất cả người dùng còn lại trong hệ thống.</li>
                                    </ul>
                                </li>
                                <li>Nhược điểm:
                                    <br>
                                    <ul>
                                        <li>Kích thước ACL sẽ tăng khi có nhiều người dùng trong hệ thống</li>
                                        <li>Gán quyền truy cập tệp tin hoặc thư mục cho từng người dùng riêng lẻ sẽ tốn nhiều thời gian</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="collapse" id="CS574collapse7">
                <div class="card card-body">
                    <ul>
                        <li>Bộ nhớ thứ cấp bao gồm các thiết bị như đĩa cứng, đĩa mềm, thẻ nhớ, đĩa quang (CD, DVD), đĩa quang từ, băng từ, bộ nhớ thứ cấp là nơi lưu trữ tệp tin, thư mục.</li>
                        <li>Bộ nhớ thức cấp có các đặc điểm sau
                            <br>
                            <ul>
                                <li>Dung lượng lưu trữ lớn.</li>
                                <li>Giá thành rẻ.</li>
                                <li>Thông tin lưu trữ không bị mất ngay cả khi tắt máy hoặc mất điện</li>
                            </ul>
                        </li>
                    </ul>
                    <b>Cấu tạo đĩa cứng</b>
                    <br>
                    <ul>
                        <li>
                            Nhiều đĩa mỏng được làm bằng nhôm hoặc hợp chất gốm thuỷ tinh, đĩa được phủ một lớp từ và lớp bảo vệ ở cả 2 mặt, các đĩa được xếp chồng và cùng gắn với một trục mô tơ quay nên tất cả các đĩa đều quay cùng tốc độ, các đĩa quay nhanh trong suốt phiên dùng máy. Đĩa từ gồm các thành phần chính sau:
                            <ul>
                                <li>Đầu từ đọc – ghi : Mỗi mặt đĩa có một đầu đọc & ghi vì vậy nếu một ổ có 2 đĩa thì có 4 đầu đọc và ghi</li>
                                <li>Mô tơ hoặc cuộn dây điều khiển các đầu từ: giúp các đầu từ dịch chuyển ngang trên bề mặt đĩa để chúng có thể ghi hay đọc dữ liệu</li>
                                <li>Mạch điều khiển: điều khiển tốc độ quay đĩa, điều khiển dịch chuyển các đầu từ và mã hoá, giải mã các tín hiệu ghi và đọc. Tốc độ quay thông thường các đĩa từ là 5400, 7200, 10000, hay 15000 vòng/phút.</li>
                            </ul>
                            <center>
                                <img style="width: 100%;" src="./assets/img/CS/5/7_7.jpg" alt="7_7">
                            </center>
                        </li>
                        <li>Về mặt vật lý đĩa từ gồm các thành phần sau:
                            <ul>
                                <li>Rãnh từ (track): là các đường tròn đồng tâm, có bề dày xác định dùng để ghi dữ liệu, các rãnh cách nhau bởi vành hẹp không được từ hóa.</li>
                                <li>Cung từ (sector): mỗi rãnh từ được chia thành các cung (sector), mỗi sector = 512 byte, các sector được đánh số thứ tự</li>
                                <li>Liên cung (Cluster): một nhóm các sector liên tiếp, thường 2/4/8 sector.</li>
                                <li>Từ trụ (Cylinder): các track có cùng bán kính tạo thành một từ trụ.</li>
                            </ul>
                        </li>
                        <li>Thời gian định vị đầu từ từ vị trí hiện tại tới đúng sector cần đọc/ghi được xác định như sau:
                            <br>
                            <ul>
                                <li>Thời gian định vị (seek time): là khoảng thời gian để di chuyển đầu từ từ vị trí hiện tại tới track có chứa
                                    sector cần đọc/ghi</li>
                                <li>Thời gian trễ (rotational latency): là khoảng thời gian chờ đĩa quay để định vị đầu từ vào đúng sector cần
                                    truy cập
                                    39</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            
            `]
        ]
    },
    Cs058: {
        title: 'Lập lịch đĩa (disk scheduling)',
        index: [
            ['Lập lịch đĩa ','CS581',`
                <ul>
                    <li>Các thuật toán lập lịch thường sử dụng thông tin yêu cầu đọc/ghi đĩa để lập lịch, các thông tin gồm:
                        <ul>
                            <li>Dạng yêu cầu (đọc hay ghi)</li>
                            <li>Vị trí cần đọc trên đĩa</li>
                            <li>Số lượng sector hay cluster cần đọc</li>
                            <li>Địa chỉ vùng bộ nhớ trong để chứa thông tin ghi ra hoặc đọc vào</li>
                        </ul>
                    </li>
                </ul>
                <p>
        <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#CS581collapse1" role="button" aria-expanded="false" aria-controls="collapseExample">
            Thuật toán FCFS (First Come, First Served tới trước phục vụ trước)
        </a>
        <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#CS581collapse2" role="button" aria-expanded="false" aria-controls="collapseExample">
            Thuật toán thời gian định vị ngắn trước (Shortest Seek Time First - SSTF)
        </a>
        <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#CS581collapse3" role="button" aria-expanded="false" aria-controls="collapseExample">
            Thuật toán SCAN và C-SCAN
        </a>
        <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#CS581collapse4" role="button" aria-expanded="false" aria-controls="collapseExample">
            Thuật toán LOOK và C-LOOK
        </a>
       
      </p>
      <div class="collapse" id="CS581collapse1">
        <div class="card card-body">
            <ul>
                <li>Các yêu cầu đọc/ghi đĩa được xếp vào một hàng đợi hoạt động theo cấu trúc FIFO</li>
                <li>Nhược điểm:
                    <br>
                    <ul>
                        <li>Thuật toán không tối ưu thời gian tìm kiếm (seek time)</li>
                        <li>Yêu cầu đọc/ghi đĩa tới từ nhiều tiến trình trong hệ thống, do vậy thuật toán này dẫn tới quá trình di chuyển không tối ưu của đầu từ.</li>
                    </ul>
                </li>
                <li>Ví dụ: Giả sử đầu từ hiện đang nằm tại cylinder 50 và hàng đợi
                    chứa các yêu cầu truy cập tại các cylinder sau: 45, 21, 67, 90,
                    4, 50, 89, 52, 61, 87, 25
                <br>
                Theo thuật toán FCFS, đầu từ cần di chuyển qua các cylinder
                với khoảng cách như sau: <br>
                Number of Cylinders = (50-45)+(45-21)+(67-21)+(90-67)+(90-4)+(50-4)+(89-50)+(61-52)+(87-61)+(87-25) = 5 + 24 + 46 + 23 + 86 + 46 + 49 + 9 + 26 + 62 = 376
                </li>
                
            </ul>
            <center>
                .<img style="width:100%;" src="./assets/img/CS/5/8_1.jpg" alt="8_1">
            </center>
        </div>
      </div>
      <div class="collapse" id="CS581collapse2">
        <div class="card card-body">
            <ul>
                <li>Yêu cầu truy cập đĩa từ có vị trí gần vị trí hiện thời của đầu từ được
                    thực hiện trước</li>
                <li>Nhược điểm
                <br>
                Ví dụ: giả sử đầu từ hiện đang nằm tại cylinder 50 và hàng đợi chứa các yêu cầu truy cập tại các cylinder sau: 45, 21, 67, 90, 4, 89, 52, 61, 87, 25. Theo thuật toán SSTF, đầu từ cần di chuyển qua các cylinder với khoảng cách như sau:
                    <br>
                    Number of Cylinders = 5 + 7 + 9 + 6 + 20 + 2 + 1 + 65 + 4 + 17 = 136
                </li>
            </ul>
            <center>
                .<img style="width:100%;" src="./assets/img/CS/5/8_2.jpg" alt="8_2">
            </center>
        </div>
      </div>
      <div class="collapse" id="CS581collapse3">
        <div class="card card-body">
            <ul>
                <li>Thuật toán SCAN, đầu từ chỉ di chuyển theo một hướng (từ cylinder trong cùng ra ngoài hoặc từ cylinder bên ngoài vào trong), tất cả các yêu cầu nằm trên đường di chuyển của đầu từ sẽ được đáp ứng</li>
                <li>Sau khi di chuyển tới cylinder cuối cùng, đầu từ sẽ di chuyển theo hướng ngược lại và sẽ đáp ứng tất cả các yêu cầu nằm trên đường di chuyển</li>
                <li>Ví dụ: giả sử đầu từ hiện đang nằm tại cylinder 54 và hàng đợi chứa các yêu cầu truy cập tại các cylinder sau: 98, 137, 122, 183, 14, 133, 65, 78. Theo thuật toán SCAN, đầu từ cần di chuyển qua các cylinder với khoảng cách như sau:
                    <br>
                    Number of Cylinders = 40 + 14 + 65 + 13 + 20 + 24 + 11 + 4 + 46 = 237
                </li>
            </ul>
            <center>
                .<img style="width:100%;" src="./assets/img/CS/5/8_3.jpg" alt="8_3">
            </center>
        </div>
      </div>
      <div class="collapse" id="CS581collapse4">
        <div class="card card-body">
            <ul>
                <li>Thuật toán LOOK tương tự thuật toán SCAN, tuy nhiên thuật toán LOOK sẽ dừng di chuyển đầu từ khi trên hướng di chuyển không có yêu cầu nào thỏa mãn.</li>
                <li>Ví dụ: giả sử đầu từ hiện đang nằm tại cylinder 54 và hàng đợi chứa các yêu cầu truy cập tại các cylinder sau: 98, 137, 122, 183, 14, 133, 65, 78. Theo thuật toán LOOK, đầu từ cần di chuyển qua các cylinder với khoảng cách như sau
                    <br>
                    Number of Cylinders = 40 + 51 + 13 + +20 + 24 + 11 + 4 + 46 = 209
                </li>
            </ul>
            <center>
                .<img style="width:100%;" src="./assets/img/CS/5/8_3.jpg" alt="8_3">
            </center>
        </div>
      </div>
            `]
        ]
    },
    CS059: {
        title: 'Tổng kết bài học',
        index: [
            ['Tổng kết','CS591',`
                <ul>
                    <li>Các khái niệm cơ bản về tệp tin</li>
                    <li>Cấu trúc và phương pháp truy cập tệp tin;</li>
                    <li>Các thao tác với tệp tin;</li>
                    <li>Tổ chức thư mục trong hệ điều hành</li>
                    <li>Cấp phát không gian cho tệp tin;</li>
                    <li>Quản lý đĩa;</li>
                    <li>Các thuật toán để lập lịch đĩa (disk scheduling).</li>
                </ul>
            `]
        ]
    },
    CS060: {
        title: 'Video và ghi chú',
        index: [
            ['Video bài giảng', 'CS061', `
                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai5/220101_Bai5_P1_v1.0.mp4" target="_blank">Khái niệm, cấu trúc, các phương pháp truy cập và các thao tác tệp tin</a>
                <br>
                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai5/220101_Bai5_P2_v1.0.mp4" target="_blank">Tổ chức thư mục trong hệ điều hành và cấp phát không gian cho tệp tin</a>
                <br>
                <a href="https://s3.cloud.cmctelecom.vn/tvu/IT/220101_HeDieuHanh/Video/Bai5/220101_Bai5_P3_v1.0.mp4" target="_blank">Quản lý đĩa và lập lịch đĩa</a>
            `]
        ]
    }
}