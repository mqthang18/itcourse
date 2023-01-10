const LTDT04 = {
    'LTDT01': {
        'title': 'Các khái niệm cơ bản về cây',
        'index': [
            ['Cây', 'CS011', `
            <ul>
            <li>Cây là một đồ thị vô hướng, liên thông và <span style="color: red;">không</span> có chu trình
                <br>
                <span style="text-indent: 10px;">Cây không có chu trình -> cây không thể có cạnh bội và khuyên -> cây là đơn đồ thị</span>
            </li>
            <li>Ví dụ
                <br>
                <center>
                    <img style="width: 100%;" src="./assets/img/LTDT/4/tree_vd1.jpg" alt="tree_vd1">
                </center>
                <br>
                G1 và G2 lá cây, còn G3 có chu trình nên không là cây
            </li>
        </ul>
            `],
            ['Rừng', 'CS012', `
            <ul>
                <li>Rừng là đồ thị vô hướng không có chu trình</li>
                <li>Rừng là 1 một đồ thị có nhiều thành phần liên thông mà mỗi thành phần liên thông của nó là một cây</li>
                <li>Ví dụ: 
                    <br>
                    <center>
                        <img style="width: 100%;" src="./assets/img/LTDT/4/forest_vd2.jpg" alt="forest_vd2">
                    </center>
                    <br>
                    G là một rừng và có 3 thành phần liên thông
                    <br>
                    Cây gia phả
                    <br>
                    <center>
                        <img style="width: 100%;" src="./assets/img/LTDT/4/tree_giapha.jpg" alt="tree_giapha">
                    </center>
                    <br>
                    Mô hình biểu diễn của các tổ chức
                    <center>
                        <img  style="width: 100%" src="./assets/img/LTDT/4/bieudiencactochuc.jpg" alt="bieudiencactochuc">
                    </center>
                    <br>
                    Tổ chức cây thư mục trong máy tính
                    <center>
                        <img style-"width: 100%;" src="./assets/img/LTDT/4/folder_tree.jpg" alt="cay-thu-muc">
                    </center>
                </li>
            </ul>
            `],
            ['Các định lý', 'CS013', `
            <p>
            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapseCS0131" role="button" aria-expanded="false"
                aria-controls="collapseCS0131">
                Định lý (<i>sự tồn tại của đỉnh treo</i>)
            </a>
            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapseCS0132" role="button" aria-expanded="false"
                aria-controls="collapseCS0132">
                Chứng minh sự đúng đắn của định lý
            </a>
            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapseCS0133" role="button" aria-expanded="false"
                aria-controls="collapseCS0133">
                Tính chất
            </a>
            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapseCS0134" role="button" aria-expanded="false"
                aria-controls="collapseCS0134">
                Chứng minh sự đúng đắn của tính chất
            </a>
        </p>
        <div class="collapse" id="collapseCS0131">
            <div class="card card-body">
                <p>Một cây T gồm n đỉnh với n &ge; 2 chứa ít nhất 2 đỉnh treo</p>
            </div>
        </div>
        <div class="collapse" id="collapseCS0132">
            <div class="card card-body">
                <ul>
                    <li>Gọi v<sub>1</sub>, v<sub>2</sub>,...,v<sub>k</sub> là đường đi dài nhất trên T</li>
                    <li>Khi đó v<sub>1</sub>, v<sub>k</sub> là hai đỉnh treo. Vì từ v<sub>1</sub> sẽ không có cạnh nối với
                        bất kỳ đỉnh nào trong v<sub>3</sub>,...,v<sub>k</sub> do đồ thị không có chu trình cũng như với bất
                        cứ đỉnh nào của đồ thị do đường đi đang xét là dài nhất. Tương tự cho v<sub>k</sub></li>
                </ul>
            </div>
        </div>
        <div class="collapse" id="collapseCS0133">
            <div class="card card-body">
                Giả sử T=(V,E) là đồ thị vô hướng n đỉnh. Khi đó các mệnh đề sau đây là tương đương:
                <ol>
                    <li>T là cây</li>
                    <li>T không chứa chu trình và n-1 cạnh</li>
                    <li>T liên thông và có n-1 cạnh</li>
                    <li>T liên thông và mỗi cạnh của nó đều là cầu</li>
                    <li>Hai đỉnh bất kỳ của T được nối với nhau bởi đúng một đường đi sơ cấp</li>
                    <li>T không chứa chu trình nhưng khi thêm vào một cạnh ta thu được đúng một chu trình</li>
                    <li>Chứng minh theo sơ đồ sau:
                        <br>
                        1) => 2) => 3) => 4) => 5) => 6) => 1)
                    </li>
                </ol>
            </div>
        </div>
        <div class="collapse" id="collapseCS0134">
            <div class="card card-body">
                <ul>
                    <li>Chứng mình 1) => 2): Nếu T là cây n đỉnh thì T không có chu trình và có n - 1 cạnh</li>
                    <li>Quy nạp:
                        <br>
                        <ul>
                            <li>Với n = 1 thì đồ thị có n - 1 = 0 cạnh (Đúng)</li>
                            <li>Giả sử khẳng định đúng với &forall; cây có k &ge;1 đỉnh. Ta sẽ chỉ ra &forall; cây T có
                                k+1&ge;1 đỉnh sẽ có số cạnh là k</li>
                            <li>Chọn đường đi dài nhất trong T là P = (v<sub>1</sub>, v<sub>2</sub>,...,v<sub>m</sub>). Rõ
                                ràng v<sub>1</sub> là đỉnh treo: <br>
                                <ul>
                                    <li>v<sub>1</sub> không thể kề với các đỉnh v<sub>3</sub>,...,v<sub>m</sub> vì T không
                                        có chu trình</li>
                                    <li>v<sub>1</sub> không thể được nối với các đỉnh khác vì P là dài nhất</li>
                                </ul>
                            </li>
                            <li>Xét T'=T/{v<sub>1</sub>,(v<sub>1</sub>, v<sub>2</sub>)}, ta được T' có k đỉnh. Theo giả
                                thiết quy nạp T' có k-1 cạnh. Do đó T có k cạnh (đpcm)</li>
                        </ul>
                    </li>
                    <li>Chứng minh 2) => 3): Nếu T không chứa chu trình và có n - 1 cạnh thì T liên thông
                        <br>
                        Phản Chứng
                        <ul>
                            <li>Giả sử T không liên thông, khi đó T được phân rã thành k > 1 thành phần liên thông
                                T<sub>1</sub>, T<sub>2</sub>,...,T<sub>k</sub>. Theo giả thiết, vì T không chứa chu trình
                                nên các cây cũng vậy, suy ra T<sub>i</sub> là cây</li>
                            <li>Gọi v(T) và e(T) tương ứng là số đỉnh và cạnh của T. Theo phần trước, mệnh đề 1 => mệnh đề
                                2, ta có e(T<sub>i</sub>) = v(T<sub>i</sub>)-1. Suy ra:
                                <br>
                                &sum;e(T<sub>i</sub>) = &sum;(v(T<sub>i</sub>)-1)=&sum;v(T<sub>i</sub>)-k
                                <=> e(T) = v(T) - k <=> n - 1 = n - k
                                        <br>
                                        Vô lý với k>1 (đpcm)
                            </li>
                        </ul>
                    </li>
                    <li>
                        Chứng minh 3) => 4): Nếu T liên thông và có n - 1 cạnh thì mỗi cạnh của T là cầu
                        <br>
                        <ul>
                            <li>Chọn đường đi dài nhất P = (v<sub>1</sub>, v<sub>2</sub>,...,v<sub>m</sub>)</li>
                            <li>Nếu từ đồ thị T ta bỏ đi một cạnh nào đó trên đường đi P, thì rõ ràng không còn đường nào
                                khác để đi từ v<sub>1</sub> đến v<sub>m</sub> vì nếu có thì T có chu trình. Vì vậy các cạnh
                                của T đều là cầu</li>
                        </ul>
                    </li>
                    <li>
                        Chứng minh 4) => 5): Nếu T liên thông và mỗi cạnh của T là cầu thì hai đỉnh bất kỳ của T được nối
                        với nhau đúng bởi 1 đường đơn
                        <br>
                        <span style="text-indent: 5px;">T liên thông nên mọi 2 đỉnh của T tồn tại đường nối giữa chúng.
                            Đường nối này là duy nhất vì trái lại T sẽ có chu trình và các cạnh trên chu trình đó sẽ không
                            thể là cầu</span>
                    </li>
                    <li>
                        Chứng minh 5) => 6): Nếu hai đỉnh bất kỳ của T được nối với nhau đúng bởi 1 đường đơn thì T không
                        chứa chu trình nhưng hễ cứ thêm vào nó một cạnh ta thu được đúng 1 chu trình
                        <br>
                        <ul>
                            <li>T không chứa chu trình vì nếu T có chu trình thì sẽ có cặp đỉnh được nối với nhau bởi 2
                                đường đơn</li>
                            <li>Thêm vào cạnh (u,v) ta sẽ nhận được chu trình gồm đường đơn nối u với v và cạnh (u,v) mới
                            </li>
                            <li>Do đường đi đơn này là duy nhất nên chu trình nhận được cũng là duy nhất</li>
                        </ul>
                    </li>
                    <li>
                        Chứng minh 6) => 1): T không chứa chu trình nhưng hễ cứ thêm vào nó một cạnh ta thu được đúng 1 chu
                        trình thì T là cây (liên thông và không có chu trình)
                        <br>
                        Phản Chứng
                        <br>
                        <ul>
                            <li>Giả sử T không liên thông, khi đó T gồm ít nhất 2 thành phần liên thông. Vì vậy nếu thêm vào
                                T một cạnh nối hai đỉnh thuộc hai thành phần liên thông khác nhau ta không thu được thêm một
                                chu trình nào cả. Điều này mâu thuẫn với giả thiết.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
            
            `]
        ]
    },
    'LTDT02': {
        'title': 'Cây nhị phân và phép duyệt cây',
        'index': [
            ['Cây có gốc', 'CS021', `
            <ul>
                <li><span style="color: red;">Cây có gốc</span> là một cây có hướng, trong đó có một đỉnh đặc biệt gọi là gốc, từ gốc có đường đi đến mọi đỉnh khác của cây</li>
                <li>Trong cây có gốc thì gốc r có bậc vào bằng 0, còn tất cả các đỉnh khác đều có bậc vào bằng 1
                    <br>
                    <center>
                        <img style="width: 100%:" src="./assets/img/LTDT/4/caycogoc.jpg" alt="caycogoc">
                    </center>
                </li>
                <li>Một cây có gốc thường được vẽ với gốc r ở trên cùng và cây phát triển từ trên xuống: <br>
                    <ul>
                        <li>Gốc r gọi là đỉnh mức 0</li>
                        <li>Các đỉnh kề với r được xếp ở phía dưới gốc và gọi là đỉnh mức 1</li>
                        <li>Đỉnh ngay dưới đỉnh mức 1 là đỉnh mức 2</li>
                        <li>...</li>
                    </ul>
                </li>
                <li>Tổng quát
                    <br>
                    <ul>
                        <li>v là đỉnh mức k khi và chỉ khi đường đi từ r đến v có độ dài bằng k</li>
                        <li>Độ cao của cây là mức cao nhất của đỉnh
                            <br>
                            <center>
                                <img style="width: 100%;" src="./assets/img/LTDT/4/caycogoc1.jpg" alt="caycogoc1">
                            </center>
                        </li>
                        <li>Cho cây T có gốc r
                            <ul>
                                <li>Nếu uv là một cung của T thì u được gọi là cha của v, còn v gọi là con của u</li>
                                <li>Đỉnh không có con gọi là lá (hay đỉnh ngoài). Đỉnh không phải lá gọi là đỉnh trong</li>
                                <li>Hai đỉnh có cùng cha gọi là anh em</li>
                                <li>Nếu có đường đi v<sub>1</sub>v<sub>2</sub>...v<sub>k-1</sub> gọi là tổ tiên của v<sub>k</sub>, Còn v<sub>k</sub> gọi là hậu duệ của v<sub>1</sub>, v<sub>2</sub>,...,v<sub>k-1</sub></li>
                                <li>Cây con tại đỉnh v là cây có gốc là v và tất cả các đỉnh khác là hậu duệ của v trong cây T đã cho</li>
                                <li>T được gọi là cây k-phân nếu mỗi đỉnh của T có nhiều nhất là k con</li>
                                <li>Cây 2-phân được gọi là cây nhị phân</li>
                                <li>Cây k-phân đủ là cây mà mọi đỉnh trong có đúng k con</li>
                                <li>Cây k-phân với độ cao h được gọi là cân đối nếu các đỉnh đều ở mức h hoặc h - 1</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            `],
            ['Cây nhị phân', 'CS022', `
            <ul>
                <li>Định nghĩa: Cây nhị phân là cây có gốc với mỗi đỉnh có nhiều nhất 2 con</li>
                <li>Trong một cây nhị phân, mỗi con được chỉ rõ là con bên trái hay con bên phải của cha
                    <br>
                    <center>
                        <img style="width: 100%;" src="./assets/img/LTDT/4/caynhiphan.jpg" alt="caynhiphan">
                    </center>
                </li>
                <li>Cây tìm kiếm nhị phân là cây nhị phân mà mỗi nút (đỉnh) đều được gán một khóa (trọng số) sao cho với mỗi nút k
                    <br>
                    <ul>
                        <li>Mọi khóa trên cây con trái đều nhỏ hơn khóa của nút k</li>
                        <li>Mọi khóa trên cây con phải đều lớn hơn khóa của nút k</li>
                    </ul>
                    <br>
                    <center>
                        <img style="width: 100%;" src="./assets/img/LTDT/4/binarysearchtree1.jpg" alt="binarysearchtree1">
                    </center>
                </li>
            </ul>
            `],
            ['Các phép duyệt cây', 'CS023', `
                <ul>
                    <li>Tiền thứ tự</li>
                    <li>Hậu thứ tự</li>
                    <li>Trung thứ tự</li>
                </ul>
            `],
            ['Phép duyệt tiền thứ tự (preorder)', 'CS024', `
            <ul>
<li><i>Bước 1.</i> Duyệt gốc r</li>
<li><i>Bước 2.</i> Duyệt cây con bên trái của r theo tiền thứ tự</li>
<li><i>Bước 3.</i> Duyệt cây con bên phải của r theo tiên thứ tự</li>
<li>
Ví dụ
<br>
<center>
<img style="width: 100%;" src="./assets/img/LTDT/4/duyettienthutu.jpg" alt="duyettienthutu">
</center>
</li>
<li>Trước tiên duyệt nút gốc R
<br>
-> duyệt cây con bên trái -> duyệt cây con bên phải
<br>
Thứ tự duyệt các đỉnh của T theo phép duyệt R->A->C->D->B->E->F
<center>
<img style="width: 100%;" src="./assets/img/LTDT/4/duyettienthutu1.jpg" alt="duyettienthutu1">
</center>
</li>
</ul>
            `],
            ['Phép duyệt hậu thứ tự', 'CS025', `
            <ul>
            <li>PHép duyệt hậu thứ tự (postorder)
                <br>
                <ul>
                    <li>Bước 1. Duyệt cây con bên trái của r theo hậu thứ tự</li>
                    <li>Bước 2. Duyệt cây con bên phải của r theo hậu thứ tự</li>
                    <li>Bước 3. Duyệt gốc r</li>
                </ul>
            </li>
            <li>Trước tiên duyệt cây con trái
                <br>-> duyệt cây con bên trái -> duyệt nút gốc R
            </li>
            <li>
                Thứ tự duyệt các đỉnh của T theo phép duyệt hậu thứ tự là: 
                <br>
                <span style="color: red;">C->D->A->E->F->B->R</span>
            </li>
        </ul>
        <center>
            <img style="width: 100%;" src="./assets/img/LTDT/4/phepduyethauthutu.jpg" alt="phepduyethauthutu">
        </center>
            `],
            ['Phép duyệt trung thứ tự', 'CS026', `
                <ul>
                    <li>Bước 1. Duyệt cây con bên trái của r theo trung thứ tự</li>
                    <li>Bước 2. Duyệt gốc r</li>
                    <li>Bước 3. Duyệt cây con bên phải của r theo trung thứ tự</li>
                </ul>

                <br>
                Trước tiên duyệt cây con trái => duyệt node gốc R => duyệt cây con phải
       
               
            `],
            ['Ví dụ các phép duyệt cây', 'CS027', `
            Ví dụ
            <br>
            <ul>
                <li>Tiền thứ tự
                    <br>
                    9->2->1->5->4->11->10->12
                </li>
                <li>Hậu thứ tự
                    <br>
                    1->4->5->2->10->12->11->9
                </li>
                <li>Trung thứ tự
                    <br>
                    1->2->4->5->9->10->11->12
                </li>
            </ul>

            <center>
                <img style="width: 100%;" src="./assets/img/LTDT/4/duyettrungthutu2.jpg" alt="duyettrungthutu2">
            </center>
            `]
        ]
    },
    'LTDT03': {
        'title': 'Bài toán tìm cây khung nhỏ nhất',
        'index': [
            ['Định nghĩa cây khung', 'CS031', `
            <ul>
                <li>Định nghĩa
                    <br>
                    <ul>
                        <li>Cho G = (V,E) là một đồ thị liên thông và T = (V,E<sub>T</sub>) là một đồ thị bộ phận của G. Nếu T là cây thì T được gọi là một cây khung của G.</li>
                        <li><span style="color: red;">Cây khung</span> còn có các tên gọi khác là <span style="color: red;">cây bao trùm, cây phủ, cây tối đại</span></li>
                        <li>Ví dụ
                            <br>
                            <img style="width: 100%;" src="./assets/img/LTDT/4/duyettrungthutu2.jpg" alt="duyettrungthutu2">
                        </li>
                        <li>Mọi đồ thị liên thông đều có chứa ít nhất một cây khung</li>
                        <li>ĐỊnh lý Cayley:
                            <ul>
                                <li>Số cây khung của đồ thị K<sub>n</sub> là n<sup>n-2</sup></li>
                                <li>Ví dụ: Đồ thi K<sub>4</sub> có 4<sup>2</sup> = 16 cây khung
                                <br>
                                <center>
                                    <img style="width: 100%;" src="./assets/img/LTDT/4/caykhung_VD1.jpg" alt="caykhung_VD1">
                                </center>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            `],
            ['Thuật toán tìm cây khung', 'CS032',
                `
            <ul>
                <li>Cây khung của đồ thị có thể được xác định bằng các thuật toán
                    <ul>
                        <li>Duyệt theo chiều sâu</li>
                        <li>Duyệt theo chiều rộng</li>
                        <li>Ví dụ: Tìm cây khung của đồ thị theo DFS
                            <br>
                            <center>
                                <img style="width: 100%;" src="./assets/img/LTDT/4/timcaykhung_vd1.jpg" alt="timcaykhung_vd1">
                            </center>
                        </li>
                    </ul>
                </li>
                <li>Thứ tự duyệt các đỉnh theo chiều sâu: 1->2->4->3->5->6->7->8</li>
                <li>Cây khung của đồ thị gồm các cạnh
                    <br>
                    {(1,2),(2,4),(4,3),(3,5),(5,6),(4,7),(7,8)}
                    <br>
                    <img style="width: 100%;" src="./assets/img/LTDT/4/DFS_vd1.jpg" alt="DFS_vd1">
                </li>
                <li>Ví dụ: Tìm cây khung của đồ thị theo BFS
                    <br>
                    <img style="width: 100%;" src="./assets/img/LTDT/4/BFS_vd1.jpg" alt="BFS_vd1">
                </li>
                <li>
                    Thứ tự duyệt các đỉnh theo chiều rộng
                    <br>
                    1->2->3->4->5->6->7->8
                    <br>
                    Cây khung của đồ thị gồm các cạnh
                    {(1,2), (1,3), (2,4), (3,5), (3,6), (4,7), (4,8)}
                    <br>
                    <center>
                        <img style="width: 100%;" src="./assets/img/LTDT/4/BFS_vd2.jpg" alt="BFS_vd2">
                    </center>
                    <center>
                        <img style="width: 100%;" src="./assets/img/LTDT/4/timcaykhung_BFS.jpg" alt="timcaykhung_BFS">
                    </center>
                </li>
            </ul>
            `
            ],
            ['Bài toán tìm cây khung nhỏ nhất', 'CS033', `
            <center>
                <img style="width: 100%;" src="./assets/img/LTDT/4/bttckhungnn1.jpg" alt="bttckhungnn1">
            </center>
            <center>
                <img style="width: 100%;" src="./assets/img/LTDT/4/bttckhungnn2.jpg" alt="bttckhungnn2">
            </center>
            <center>
                <img style="width: 100%;" src="./assets/img/LTDT/4/bttckhungnn3.jpg" alt="bttckhungnn3">
            </center>
            `
            ],
            ['Ứng dụng bài toán tìm cây khung nhỏ nhất', 'CS034', `
            <ul>
                <li>Xây dựng hệ thống đường với chi phí nhỏ nhất
                    <br>
                    <ul>
                        <li>xây dựng một hệ thống đường sắt nối n thành phố sao cho hành khách có thể đi từ
                            bất cứ một thành phố nào đến bất kỳ một trong số các thành phố còn lại</li>
                        <li>với chi phí xây dựng phải là nhỏ nhất</li>
                    </ul>
                </li>
                <li>
                    Xây dựng mạng máy tính với chi phí nhỏ nhất
                    <br>
                    <ul>
                        <li>nối mạng một hệ thống gồm n máy tính đánh số từ 1 đến n, biết chi phí nối máy i
                            với máy j là m(i, j)</li>
                        <li>tìm cách nối mạng sao cho tổng chi phí là nhỏ nhất</li>
                    </ul>
                </li>
                <li>...</li>
            </ul>
            `],
            ['Thuật toán Prim', 'CS035', `
            <ul>
                <li>Cho đồ thị liên thông G = (X,E) gồm n đỉnh. Tìm cây khung ngắn nhất T = (V,U) của G
        
                    <br>
                    <ul>
                        <li><i>Bước 1.</i> Chọn tùy ý đỉnh v &isin; X và khởi tạo V = {v}; U = &empty;</li>
                        <li><i>Bước 2.</i> Chọn đỉnh w sao cho cạnh (w,v) có trọng lượng nhỏ nhất trong các cạnh mà w &isin; X/V và v &isin; V:
                        <br>
                        <center>
                            V = V &cup; {w}, U = U &cup; {e}
                        </center>
                        </li>
                        <li><i>Bước 3.</i> Nếu T đủ n đỉnh (hoặc n-1 cạnh) thì dừng, ngược lại lặp bước 2</li>
                    </ul>
                </li>
                <li>
                    Ví dụ. TÌm cây khung nhỏ nhất của đồ thị sau theo thuật toán Prim: 
                    <br>
                    <center>
                        <img src="./assets/img/LTDT/1/anh37.jpg" alt="anh37">
                    </center>
                </li>
            </ul>
            <br>
            <ol>
                <li>Khởi tạo
                    <br>
                    Chọn một đỉnh bất kỳ để bắt đầu, giả sử chọn đỉnh a, ta có:
                    <br>
                    Tập đỉnh V = {a} 
                    <br>
                    Tập cạnh U = &empty;
        
                    <br>
                    <center>
                        <img src="./assets/img/LTDT/1/anh38.jpg" alt="anh38">
                    </center>
                </li>
                <li>Lặp đến khi đủ n đỉnh
                    <br>
                    V = {a,c}
                    <center>
                        <img src="./assets/img/LTDT/1/anh39.jpg" alt="anh39">
                    </center>
                    <br>
                    U = {(c,a)} 
                    <center>
                        <img src="./assets/img/LTDT/1/anh40.jpg" alt="anh40">
                    </center>
                </li>
                <li>
                    Lần lặp thứ hai, chọn đỉnh e:
                    <br>
                    V = {a,c,e} <br>
                    <center>
                        <img src="./assets/img/LTDT/1/anh41.jpg" alt="anh41">
                    </center>
                    <br>
                    U = {(c,a), (e,c)} 
                    <br>
                    <center>
                        <img src="./assets/img/LTDT/1/anh42.jpg" alt="anh42">
                    </center>
                </li>
                <li>Lần lặp thứ ba, chọn đỉnh d:
                    <br>
                    V = {a,c,e,d} 
                    <br>
                    <center>
                        <img src="./assets/img/LTDT/1/anh43.jpg" alt="anh43">
                    </center>
                    <br>
                    U = {(c,a), (e,c), (d,e)}
                    <center>
                        <img src="./assets/img/LTDT/1/anh44.jpg" alt="anh44">
                    </center>
                </li>
                <li>
                    Lần lặp thứ tư, chọn đỉnh f <br>
                    V = {a,c,e,d,f} <br>
                    <center>
                        <img src="./assets/img/LTDT/1/anh45.jpg" alt="anh45">
                    </center>
                    <br>
                    U = {(c,a), (e,c), (d,e), (f,d)} 
                    <br>
                    <center>
                        <img src="./assets/img/LTDT/1/anh46.jpg" alt="anh46">
                    </center>
                </li>
                <li>
                    Lần lặp thứ năm, chọn đỉnh b:
                    <br>
                    V = {a,c,e,d,f,b}
                    <br>
                    <center>
                        <img src="./assets/img/LTDT/1/anh47.jpg" alt="anh47">
                    </center>
                    <br>
                    U = {(c,a), (e,c), (d,e), (f,d), (b,c)}
                    <br>
                    <center>
                        <img src="./assets/img/LTDT/1/anh48.jpg" alt="anh48">
                    </center>
                    <br>
                    Lần lặp này thu được cây gồm n đỉnh (và n-1 cạnh) nên dừng
                    <br>
                    Trọng số của cây khung là w(T) = 56
                </li>
            </ol>
            <p>
                <b>Ví dụ</b>: Tìm cây khung nhỏ nhất theo thuật toán Prim
                <br>
                <center>
                    <img src="./assets/img/LTDT/1/anh49.jpg" alt="anh49">
                </center>
            </p>
            <p>
                <b>Chọn đỉnh bắt đầu a</b>
                <br>
                <center>
                    <img src="./assets/img/LTDT/1/anh50.jpg" alt="anh50">
                </center>
            </p>
            <p>
                <b>Lần lượt thêm các đỉnh vào cây</b>
                <br>
                <center>
                    <img src="./assets/img/LTDT/1/anh51.jpg" alt="anh51">
                </center>
            </p>
    
            `],
            ['Thuật toán Kruskal', 'CS036', `
            <ul>
                <li>Cho đồ thị liên thông G = (X,E) gồm n đỉnh. Tìm cây khung ngắn nhất T = (V,U) của G
                    <br>
                    <ul>
                        <li><i>Bước 1</i>. Sắp xếp các cạnh trong G tăng dần theo trọng số. Khởi tạo U = &empty;</li>
                        <li><i>Bước 2</i>. Lần lượt lấy từn cạnh e thuộc danh sách đã sắp xếp. Nếu U+ {e} không chứa chu trình  thì thêm e vào U</li>
                        <li><i>Bước 3</i>. Nếu U đủ n - 1 cạnh thì dừng, ngược lại lặp bước 2</li>
                    </ul>
                </li>
                <li>
                    Ví dụ: Tìm cây khung nhỏ nhất của đồ thị sau theo thuật toán Kruskal
                    <br>
                    <center>
                        <img style="width: 100%;" src="./assets/img/LTDT/1/anh52.jpg" alt="anh52">
                    </center>
                </li>
                <li>
                    Giải
                    <ol>
                        <li>Khởi tạo <br> Sắp xếp các cạnh đồ thị theo thứ tự không giảm của đồ dài
                        <br>
                        Đặt U = &empty; <br>
                        <center>
                            <img style="width: 100%;" src="./assets/img/LTDT/1/anh53.jpg" alt="anh53">
                        </center>
                        </li>
                        <li>
                            Lần lặp đầu, ta bổ sung vào U cạnh có trọng số nhỏ nhất (c,e): U = {(c,e)} 
                            <br>
                            <center>
                                <img style="width: 100%;" src="./assets/img/LTDT/1/anh54.jpg" alt="anh54">
                            </center>
                        </li>
                        <li>
                            Lần lặp thứ hai ta bổ sung vào tập U cạnh (d,f): U = {(c,e), (d,f)} 
                            <br>
                            <center>
                                <img style="width: 100%;" src="./assets/img/LTDT/1/anh55.jpg" alt="anh55">
                            </center>
                        </li>
                        <li>
                            Lần lặp thứ ba ta bổ sung vào tập U cạnh (d,e): U = {(c,e), (d,f), (d,e)} <br>
                            <center>
                                <img style="width: 100%;" src="./assets/img/LTDT/1/anh56.jpg" alt="anh56">
                            </center>
                        </li>
                        <li>Lần lặp thứ tư
                            <br>
                            <ul>
                                <li>Nếu thêm (e,f) vào U sẽ tạo chu trình</li>
                                <li>Nếu thêm (c,d) vào U sẽ tạo chu trình</li>
                            </ul>
                            Vì vậy ta bổ sung (a,c) vào tập U, U = {(c,e), (d,f), (d,e), (a,c)} <br>
                            <center>
                                <img style="width: 100%;" src="./assets/img/LTDT/1/anh57.jpg" alt="anh57">
                            </center>
                        </li>
                        <li>
                            Lần lặp kế tiếp bổ sung cạnh (b,c) vào tập U <br>
                            U = {(c,e),(d,f),(d,e),(a,c),(b,c)}
                            <br>
                            Tập U gồm 5 cạnh chính là tập cạnh của cây khung nhỏ nhất cần tìm
                            <br>
                            Tổng trọng số của cây khung tìm được w(T) = 56

                            <br>
                            <center>
                                <img style="width: 100%;" src="./assets/img/LTDT/1/anh58.jpg" alt="anh58">
                            </center>
                        </li>
                    </ol>
                </li>
            </ul>
            `]
        ]
    },
    'LTDT04': {
        'title': 'Video bài giảng',
        'index': [
            ['Video lý thuyết', 'LTDT041', `
                <ul>
                    <li><a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai2_P6_v1.0.mp4">Định nghĩa cây</a></li>
                    <li><a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai4_P2_v1.0.mp4">Cây nhị phân</a></li>
                    <li><a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai4_P3_v1.0.mp4">Duyệt cây nhị phân</a></li>
                    <li><a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai4_P4_v1.0.mp4">Cây khung</a></li>
                    <li><a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai4_P5_v1.0.mp4">Cây khung to nhất</a></li>
                    <li><a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai4_P6_v1.0.mp4">Thuật toán Prim</a></li>
                    <li><a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai4_P7_v1.0.mp4">Thuật toán Kruskhal</a></li>
                    <li><a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/ThucHanh/220100_TH4_P1_v1.0.mp4">Thuật toán DFS phần 1</a></li>
                    <li><a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/ThucHanh/220100_TH4_P2_v1.0.mp4">Thuật toán DFS phần 2</a></li>
                    <li><a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/ThucHanh/220100_TH4_P3_v1.0.mp4">Cây khung nhỏ nhất Prim phần 1</a></li>
                    <li><a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/ThucHanh/220100_TH4_P4_v1.0.mp4">Cây khung nhỏ nhất Prim phần 2</a></li>
                    <li><a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/ThucHanh/220100_TH4_P5_v1.0.mp4">Cây khung nhỏ nhất Prim phần 3</a></li>
                </ul>
            `],
            ['Video thực hành', 'LTDT042', `

            `],
            ['Giải tay trên giấy', 'LTDT043',`
                <b>Bài toán duyệt cây</b>
                <a href="https://www.youtube.com/watch?v=3l-N7iKjLKA&list=PLJrIKD9xq6PV7nd2m3d0dEt-QBeMJmGoS&index=2&ab_channel=%C4%90aIT%E1%BB%9D">Duyệt theo phương pháp tiền, trung, hậu thứ tự</a>
                <br>
                <b>Tìm cây khung nhỏ nhất</b>
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=YtJNv9Qp2Eg&list=PLJrIKD9xq6PV7nd2m3d0dEt-QBeMJmGoS&ab_channel=%C4%90aIT%E1%BB%9D">Thuật toán Prim</a></li>
                    <li>Thuật toán Krustal: 
                        <a href="https://www.youtube.com/watch?v=ZkV-N8Nho-g&list=PLJrIKD9xq6PV7nd2m3d0dEt-QBeMJmGoS&index=3&ab_channel=%C4%90aIT%E1%BB%9D">phần 1</a>, 
                        <a href="https://www.youtube.com/watch?v=3N4bIC-QH2g&list=PLJrIKD9xq6PV7nd2m3d0dEt-QBeMJmGoS&index=4&ab_channel=%C4%90aIT%E1%BB%9D">phần 2</a>
                    </li>
                </ul>
            `]
        ]
    }
};