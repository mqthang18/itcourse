const LTDT01 = {
    'LTDT11': {
        'title': 'Đồ thị và sự biểu diễn đồ thị',
        'index': [
            ['Định nghĩa đồ thị', 'LTDT110', `
                <p>Đồ thị là 1 tập các đối tượng gọi là các đỉnh, được nối với nhau bởi các cạnh, cạnh có thể có hướng hoặc vô hướng
                </p>
                <center>
                    <img style="width: 100%;" src="./assets/img/LTDT/1/anh1.jpg" alt="anh1">
                </center>
            `],
            ['Ký hiệu thường dùng', 'LTDT111', `
            <center>
            <img style="width: 100%;" src="./assets/img/LTDT/1/anh2.jpg" alt="anh2">
                </center>
                <p><b>Định nghĩa</b></p>
                <p>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapse1">
                        Đơn đồ thị vô hướng
                    </a>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapse2">
                        Đa đồ thị vô hướng
                    </a>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapse3" role="button" aria-expanded="false" aria-controls="collapse3">
                        Giả đồ thị vô hướng
                    </a>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapse4" role="button" aria-expanded="false" aria-controls="collapse4">
                        Đơn đồ thị có hướng
                    </a>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapse5" role="button" aria-expanded="false" aria-controls="collapse5">
                        Đa đồ thị có hướng
                    </a>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapse6" role="button" aria-expanded="false" aria-controls="collapse6">
                        Đặc điểm
                    </a>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapse7" role="button" aria-expanded="false" aria-controls="collapse7">
                        Phân biệt các đồ thị sau
                    </a>
                </p>
                <div class="collapse" id="collapse1">
                    <div class="card card-body">
                        <b>Đơn đồ thị vô hướng</b> G=(V,E) gồm một tập khác rỗng V các đỉnh, và một tập E các cạnh, mỗi cạnh là 1 cặp <span
                        style="color:red;">không có thứ tự</span> của các đỉnh phân biệt.<br>
                        <center>
                            <img style="width: 100%;" src="./assets/img/LTDT/1/anh3.jpg" alt="anh3">
                        </center>
                    
                        <br>
                        <p>Ví dụ</p>
                        <p><b>Đơn đồ thị vô hướng</b> hình bên có</p>
                        <ul>
                            <li>Tập đỉnh V ={A,B,C}</li>
                            <li>Tập cạnh E ={e<sub>1</sub>, e<sub>2</sub>, e<sub>3</sub>}</li>
                        </ul>
                        <center>
                            <img style="width: 100%;" src="./assets/img/LTDT/1/anh4.jpg" alt="anh4">
                        </center>
                
                    </div>
                </div>
                <div class="collapse" id="collapse2">
                    <div class="card card-body">
                        
                            <ul>
                            <li><b>Đa đồ thị vô hướng</b> G=(V,E) gồm một tập khác rỗng V các đỉnh, và một tập E các cạnh, mỗi cạnh là một
                                cặp <span style="color: red;">không có thứ tự</span> của các đỉnh phân biệt
                                <ul>
                                    <li>Hai cạnh được gọi là <span style="color: blue;">cạnh bội</span> hay <span style="color: blue;">song
                                            song</span> nếu chúng cùng tương ứng với một cặp đỉnh
                                        <br>
                                        <center>
                                            <img style="width: 100%;"
                                                src="./assets/img/LTDT/1/anh5.jpg" alt="anh5">
                                        </center>
                                    </li>
                                    <li>
                                        <b>Ví dụ</b>
                                        <br>
                                        Đa đồ thị vô hướng hình bên có
                                        <ul>
                                            <li>Tập đỉnh V = {A,B,C}</li>
                                            <li>Tập cạnh E = {e<sub>1</sub>, e<sub>2</sub>, e<sub>3</sub>, e<sub>4</sub>}, trong đó
                                                e<sub>1</sub> và e<sub>2</sub> có cùng cặp đỉnh</li>
                                        </ul>
                                        <br>
                                        <center>
                                            <img style="width: 100%;"
                                                src="./assets/img/LTDT/1/anh6.jpg" alt="anh6">
                                        </center>
                                    </li>
                                </ul>
                            </li>


                        </ul>
                    </div>
                </div>
                <div class="collapse" id="collapse3">
                    <div class="card card-body">
                        <ul>
                            <li>
                                <b>Giả đồ thị vô hướng</b> G = (V,E) gồm một tập hợp khác rỗng V các đỉnh, và một tập E các cạnh, đó là các
                                cặp <span style="color: red;">không có thứ tự</span> của các đỉnh (không nhất thiết là phân biệt).
                                <br>
                    
                    
                                <ul>
                                    <li>Với v &isin;V, nếu (v,v)&isin;E thì ta nói có một <span style="color: blue;">khuyên</span> tại đỉnh
                                        v
                                        <br>
                                        <center>
                                            <img style="width: 100%;"
                                                src="./assets/img/LTDT/1/anh7.jpg" alt="anh7">
                                        </center>
                                    </li>
                                    <li>
                                        <b>Ví dụ</b>
                                        <br>
                                        <b>Giả đồ thị vô hướng</b> hình bên có
                                        <br>
                                        <ul>
                                            <li>Tập đỉnh V = {A,B,C}</li>
                                            <li>Tập cạnh E = {e<sub>1</sub>, e<sub>2</sub>, e<sub>3</sub>, e<sub>4</sub>, e<sub>5</sub>}
                                            </li>
                                        </ul>
                                        <center>
                                            <img style="width: 100%;"
                                                src="./assets/img/LTDT/1/anh8.jpg" alt="anh8">
                                        </center>
                                    </li>
                                </ul>
                    
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="collapse" id="collapse4">
                    <div class="card card-body">
                        <ul>
                            <li>
                                <b>Đơn đồ thị có hướng</b> G=(V,E) gồm một tập khác rỗng V các đỉnh, và một tập E các cung, mỗi cung là một
                                cặp <span style="color:red;">có thứ tự</span> gồm hai phần tử khác nhau của V.
                    
                                <center>
                                    <img style="width: 100%;" src="./assets/img/LTDT/1/anh9.jpg"
                                        alt="anh9">
                                </center>
                            </li>
                            <li>
                                <b>Đơn đồ thị có hướng</b> hình bên có <br>
                                <ul>
                                    <li>Tập đỉnh V = {A,B,C}</li>
                                    <li>Tập cung E = {e<sub>1</sub>,e<sub>2</sub>,e<sub>3</sub>}</li>
                                </ul>
                                <center>
                                    <img style="width: 100%;" src="./assets/img/LTDT/1/anh10.jpg"
                                        alt="anh10">
                                </center>
                            </li>
                        </ul>
                        <br>
                        <b>Đơn đồ thị có hướng</b> ở hình bên có
                        <ul>
                            <li>Tập đỉnh V = {A,B,C}</li>
                            <li>Tập cung E = {e<sub>1</sub>, e<sub>2</sub>, e<sub>3</sub>, e<sub>4</sub>, e<sub>5</sub>}</li>
                        </ul>
                        <center>
                            <img style="width: 100%;" src="./assets/img/LTDT/1/anh12.jpg"
                                alt="anh12">
                        </center>
                    </div>
                </div>
                <div class="collapse" id="collapse5">
                    <div class="card card-body">
                        <ul>
                            <li><b>Đa đồ thị có hướng</b> G = (V,E) gồm 1 tập khác rỗng V các đỉnh, và một tập E các cung, mỗi cung là một
                                cặp <span style="color: red;">có thứ tự</span> gồm hai phần tử khác nhau của V
                                <br>
                                - Hai cung e<sub>1</sub>, e<sub>2</sub> tương ứng với cùng một cặp đỉnh được gọi là <span
                                    style="color: blue;">cung lặp</span>
                                <br>
                    
                                <center>
                                    <img style="width: 100%;" src="./assets/img/LTDT/1/anh11.jpg"
                                        alt="anh11">
                                </center>
                    
                                <br>
                                <b>Ví dụ</b>
                                <br>
                                
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <b>Đa đồ thị có hướng</b> G = (V,E) gồm một tập khác rỗng V các đỉnh, và một tập E các cung, mỗi cung là một
                                cặp <span style="color:red;">có thứ tự</span> gồm hai phần tử khác nhau của V.
                                <br>
                                <ul>
                                    <li>Hai cung e<sub>1</sub>, e<sub>2</sub> tương ứng với cùng một cặp đỉnh được gọi là <span
                                            style="color: blue;">cung lặp</span></li>
                                </ul>
                                <center>
                                    <img style="width: 100%;" src="./assets/img/LTDT/1/anh13.jpg"
                                        alt="anh13">
                                </center>
                    
                                <br>
                                <b>Ví dụ</b>
                                <br>
                                <b>Đa đồ thị có hướng</b> ở hình bên có
                                <br>
                                <ul>
                                    <li>Tập đỉnh V = {A,B,C}</li>
                                    <li>Tập cung E = {e<sub>1</sub>, e<sub>2</sub>, e<sub>3</sub>, e<sub>4</sub>, e<sub>5</sub>} </li>
                                </ul>
                                <center>
                                    <img style="width: 100%;" src="./assets/img/LTDT/1/anh14.jpg"
                                        alt="anh14">
                                </center>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="collapse" id="collapse6">
                    <div class="card card-body">
                        <center>
                            <table>
                                <tr>
                                    <th>Loại đồ thị</th>
                                    <th>Có hướng</th>
                                    <th>Có cạnh bội</th>
                                    <th>Có khuyên</th>
                                </tr>
                                <tr>
                                    <td>Đon đồ thị vô hướng</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Đa đồ thị vô hướng</td>
                                    <td></td>
                                    <td><i class="fa fa-check"></i></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Giả đồ thị</td>
                                    <td></td>
                                    <td><i class="fa fa-check"></i></td>
                                    <td><i class="fa fa-check"></i></td>
                                </tr>
                                <tr>
                                    <td>Đơn đồ thị có hướng</td>
                                    <td><i class="fa fa-check"></i></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Đa đồ thị có hướng</td>
                                    <td><i class="fa fa-check"></i></td>
                                    <td><i class="fa fa-check"></i></td>
                                    <td><i class="fa fa-check"></i></td>
                                </tr>
                            </table>
                        </center>
                    </div>
                </div>
                <div class="collapse" id="collapse7">
                    <div class="card card-body">
                        <center>
                            <img style="width: 100%;" src="./assets/img/LTDT/1/anh15.jpg"
                                alt="anh15">
                        </center> 
                    </div>
                </div>
            `],
            ['Các thuật ngữ', 'LTDT112', `
            <center>
            <table>
                <tr>
                    <th style="color: red; font-style: bold;">Đồ thị vô hướng</th>
                    <th style="color: red; font-style: bold;">Đồ thị có hướng</th>
                </tr>
                <tr>
                    <td>
                        <ul>
                            <li>Đỉnh liền kề, cạnh liên thuộc</li>
                            <li>Bậc của đỉnh</li>
                            <li>Đỉnh cô lập, đỉnh treo</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>Đỉnh đầu, đỉnh cuối</li>
                            <li>Bán bậc vào, bán bậc ra</li>
                            <li>Đỉnh cô lập, đỉnh treo, cung treo</li>
                        </ul>
                    </td>
                </tr>
            </table>
            </center>
            <p>
                <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapseA1" role="button" aria-expanded="false"
                    aria-controls="collapseA1">
                    Đỉnh liền kề, cạnh liên thuộc
                </a>
                <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapseA2" role="button" aria-expanded="false"
                    aria-controls="collapseA2">
                    Bậc của đỉnh
                </a>
                <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapseA3" role="button" aria-expanded="false"
                    aria-controls="collapseA3">
                    Tính chất (về bậc của đỉnh trong đồ thị vô hướng)
                </a>
                <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapseA4" role="button" aria-expanded="false"
                    aria-controls="collapseA4">
                    Đỉnh đầu, đỉnh cuối
                </a>
                <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapseA5" role="button" aria-expanded="false"
                    aria-controls="collapseA5">
                    Bán bậc vào, bán bậc ra
                </a>
                <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapseA6" role="button" aria-expanded="false"
                    aria-controls="collapseA6">
                    Đỉnh cô lập, đỉnh treo, cung treo
                </a>
                <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapseA7" role="button" aria-expanded="false"
                    aria-controls="collapseA7">
                    Tính chất (bậc trong đồ thị có hướng)
                </a>
            </p>
            <div class="collapse" id="collapseA1">
                <div class="card card-body">
                    <ul>
                        <li>Hai đỉnh u và v trong đồ thị vô hướng G = (V, E) được gọi là <span style="color: blue;">liền
                                kề</span> nếu (u,v)&isin;E</li>
                        <li>Nếu e = (u,v) là cạnh của đồ thị thì e gọi là <span style="color: blue;">cạnh liên thuộc</span> với
                            các đỉnh u và v
                            <br>
                            <ul>
                                <li>Cạnh e cũng được gọi là <span style="color:blue;">cạnh nối</span> các đỉnh u và v</li>
                                <li>Các đỉnh u và v gọi là các <span style="color: blue;">đỉnh đầu</span> của cạnh e</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="collapse" id="collapseA2">
                <div class="card card-body">
                    <ul>
                        <li><span style="color: blue;">Bậc</span> của đỉnh trong đồ thị vô hướng G=(V,E), ký hiệu <span
                                style="color:red;">deg(v)</span>, là số các cạnh liên thuộc với nó, riêng khuyên tại một đỉnh
                            được tính hai lần cho bậc của nó</li>
                        <li>
                            <span style="color: blue;">Đỉnh treo</span>: v gọi là đỉnh treo nếu deg(V) = 1
                        </li>
                        <li>
                            <span style="color: blue;">Đỉnh cô lập</span>: v gọi là đỉnh cô lập nếu deg(v) = 0
                        </li>
                        <li>
                            <b style="color: blue;">Ví dụ: đồ thị vô hướng hình bên</b>
                            <ul>
                                <li>Bậc các đỉnh là: <br>
                                    deg(A) = 4, deg(B) = 3, deg(C) = 4, deg(D) = 1, deg(E) = 0
                                </li>
                                <li>Đỉnh D là đỉnh treo</li>
                                <li>Đỉnh E là đỉnh cô lập</li>
                            </ul>
                            <center>
                                <img style="width: 100%;" src="./assets/img/LTDT/1/anh16.jpg" alt="anh16">
                            </center>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="collapse" id="collapseA3">
                <div class="card card-body">
                    <ul>
                        <li>Tổng bậc của các đỉnh trong đồ thị bằng hai lần số cạnh

                            <br>
                            2|E| = &sum;<sub>v&isin;V</sub>deg(v)
                        </li>
                        <li>Số đỉnh bậc lẻ của một đồ thị là một số chẵn</li>
                    </ul>
                </div>
            </div>
            <div class="collapse" id="collapseA4">
                <div class="card card-body">
                    Trong đồ thị có hướng G=(V,E), đỉnh u được gọi là nối tới v hay v được gọi là nối từ u nếu (u,v) là một cung
                    của G.
                    <br>
                    <ul>
                        <li>Đỉnh u gọi là <span style="color: blue;">đỉnh đầu</span> của cung.</li>
                        <li>Đỉnh v gọi là <span style="color: blue;">đỉnh cuối</span> của cung.</li>
                    </ul>
                </div>
            </div>
            <div class="collapse" id="collapseA5">
                <div class="card card-body">
                    <ul>
                        <li><span style="color: blue">Bán bậc ra</span> của đỉnh v trong đồ thị có hướng G, ký hiệu
                            deg<sup>+</sup>(v), là số các cung có đỉnh đầu là v (đi ra khỏi v)</li>
                        <li><span style="color: blue;">Bán bậc vào</span> của đỉnh v trong đồ thị có hướng G, ký hiệu
                            deg<sup>-</sup>(v), là số các cung có đỉnh cuối là v (đi vào v)</li>
                    </ul>
                </div>
            </div>
            <div class="collapse" id="collapseA6">
                <div class="card card-body">
                    <ul>
                        <li>Đỉnh có bán bậc vào và bán bậc ra cùng bằng 0 gọi là <b style="color:blue;">đỉnh cô lập</b></li>
                        <li>Đỉnh có bán bậc vào bằng 1 và bán bậc ra bằng 0 gọi là đỉnh treo, cung
                            có đỉnh cuối là đỉnh treo gọi là cung treo</li>
                    </ul>
                </div>
            </div>
            <div class="collapse" id="collapseA7">
                Tổng số bán bậc vào bằng tổng số bán bậc ra
                <br>
                <center>
                    <img style="width: 100%;" src="./assets/img/LTDT/1/anh17.jpg" alt="anh17">
                </center>
            </div>
            `],
            ['Biểu diễn đồ thị trên máy tính', 'LTDT113', `
            <p>
            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapseLTDT01_1" role="button"
                aria-expanded="false" aria-controls="collapseLTDT01_1">
                Ma trận kề
            </a>
            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapseLTDT01_2" role="button"
                aria-expanded="false" aria-controls="collapseLTDT01_2">
                Ma trận trọng số
            </a>
            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapseLTDT01_3" role="button"
                aria-expanded="false" aria-controls="collapseLTDT01_3">
                Danh sách cạnh, danh sách cung
            </a>
            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapseLTDT01_4" role="button"
                aria-expanded="false" aria-controls="collapseLTDT01_4">
                Danh sách kề
            </a>
            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapseLTDT01_5" role="button"
                aria-expanded="false" aria-controls="collapseLTDT01_5">
                Nhận xét
            </a>
    
        </p>
        
        <div class="collapse" id="collapseLTDT01_1">
            <div class="card card-body">
                <p>
                - Cho đơn đồ thị vô hướng G = (V,E), với tập đỉnh V = {1,2,...,n} và tập cạnh E = {e<sub>1</sub>,
        e<sub>2</sub>,...,e<sub>m</sub>}. Ma trận kề của đồ thị G là ma trận A = {a<sub>i,j</sub>} với các phần tử
        được xác định như sau:
                </p>
                <ul>
                    <li>a<sub>i,j</sub> nếu (i,j) &isin; E</li>
                    <li>a<sub>i,j</sub> nếu (i,j) &notin; E</li>
                </ul>
                <br>
                với i,j = 1,2,...,n
    
                <br>
                <p>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseLTDT01_11" role="button"
                        aria-expanded="false" aria-controls="collapseLTDT01_11">
                        Ví dụ
                    </a>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseLTDT01_11" role="button"
                        aria-expanded="false" aria-controls="collapseLTDT01_12">
                        Tính chất
                    </a>
                </p>
                <div class="collapse" id="collapseLTDT01_11">
                    <div class="card card-body">
                        <center>
                            <img style="width: 100%;" src="./assets/img/LTDT/1/anh18.jpg" alt="anh18">
                        </center>
                    </div>
                </div>
                <div class="collapse" id="collapseLTDT01_12">
                    <div class="card card-body">
                        <ul>
                            <li>Ma trận kề của đồ thị vô hướng là ma trận đối xứng, a[i,j] = a[j,i] với i,j=1,2,...,n</li>
                            <li>Tổng các phần tử trên dòng i (hoặc cột j) của ma trận kề chính là bậc của đỉnh i (hoặc đỉnh
                                j).</li>
                            <li>Ma trận kề của đồ thị có hướng không phải là ma trận đối xứng</li>
                            <li>Ví dụ
                                <br>
                                <img style="width: 100%;" src="./assets/img/LTDT/1/anh19.jpg" alt="anh19">
                            </li>
                            <li>Ma trận kề của <span style="color: red;">đa đồ thị</span> cũng có thể xây dựng hoàn toàn
                                tương tự,
                                chỉ khác là thay vì ghi 1 vào vị trí a[i,j] nếu (i,j) là cạnh của đồ tị thì chúng ta sẽ ghi
                                <span style="color: red; font-weight: bold;">số cạnh nối</span> giữa hai đỉnh i,j
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="collapse" id="collapseLTDT01_2">
            <ul>
                <li>Đồ thị được gọi là đồ thị có trọng số nếu mỗi cạnh e = (i,j) của đồ t hị được gán với một giá trị c(e),
                    hay c(i,j), là trọng số của cạnh e</li>
                <li>Ma trận trọng số của đồ thị G là ma trận C = {c<sub>i,j</sub>} với các phần tử được xác định như sau:
                    <br>
                    <ul>
                        <li>c<sub>i,j</sub> nếu (i,j) &isin; E và </li>
                        <li>c<sub>i,j</sub> nếu (i,j) &notin; E, với i,j = 1,2,...,n
                            <br>
                            Trong đó số &theta; có thể đặt là 0, +&infin;, -&infin;; tùy trường hợp
                        </li>
                        <li>Ví dụ
                            <br>
                            <img style="width: 100%;" src="./assets/img/LTDT/1/anh20.jpg" alt="anh20">
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="collapse" id="collapseLTDT01_3">
            <ul>
                <li>Biểu diễn danh sách tất cả các cạnh (cung) của đồ thị vô hướng (có hướng)</li>
                <li>Một cạnh (cung) e = (i,j) của đồ thị sẽ tương ứng với hai biến Đầu[e] và Cuối[e]</li>
                <li>Thích hợp với đồ thị thưa (đồ thị n đỉnh, m cạnh thỏa m < 6n)</li>
            </ul>
    
            <p>
                <a href="#collapseLTDT01_31" class="btn btn-primary" data-bs-toggle="collapse" role="button"
                    aria-expanded="false" aria-controls="collapseLTDT01_31">Danh sách cạnh</a>
    
                <a href="#collapseLTDT01_32" class="btn btn-primary" data-bs-toggle="collapse" role="button"
                    aria-expanded="false" aria-controls="collapseLTDT01_32">Danh sách cung</a>
            </p>
            <div class="collapse" id="collapseLTDT01_31">
                <div class="card card-body">
                    Ví dụ
                    <br>
                    <center>
                        <img style="width: 100%;" src="./assets/img/LTDT/1/anh21.jpg" alt="anh21">
                    </center>
                </div>
            </div>
            <div class="collapse" id="collapseLTDT01_32">
                <div class="card card-body">
                    Ví dụ:
                    <br>
                    <center>
                        <img style="width: 100%" src="./assets/img/LTDT/1/anh22.jpg" alt="anh22">
                    </center>
                </div>
            </div>
        </div>
        <div class="collapse" id="collapseLTDT01_4">
            <ul>
                <li>Với mỗi đỉnh v của đồ thị chúng ta lưu trữ danh sách các đỉnh kề với nó</li>
                <li>Ký hiệu Ke(v) = {u&isin;V: (v,u)&isin;E}</li>
                <li>Ví dụ: đồ thị vô hướng
    
                    <br>
                    <center>
                        <img style="width: 100%;" src="./assets/img/LTDT/1/anh23.jpg" alt="anh23">
                    </center>
                </li>
            </ul>
        </div>
        <div class="collapse" id="collapseLTDT01_5">
            <center>
                <table>
                    <tr>
                        <th>Phương pháp biểu diễn</th>
                        <th>Chi phí</th>
                    </tr>
                    <tr>
                        <td>Ma trận, ma trận trọng số</td>
                        <td>n<sup>2</sup></td>
                    </tr>
                    <tr>
                        <td>Danh sách cạnh (cung)</td>
                        <td>2m</td>
                    </tr>
                    <tr>
                        <td>Danh sách kề</td>
                        <td>m+n</td>
                    </tr>
                </table>
            </center>
        </div>
            `]
        ]
    },
    'LTDT12': {
        'title': 'Đường đi, chu trình và tính liên thông',
        'index': [
            ['Đường đi, chu trình', 'LTDT121', `
                <ul>
                    <li>Đường đi đồ dài n từ đỉnh u đến đỉnh v trên đồ thị vô hướng G = (V,E) là dãy <span>x<sub>0</sub>,
                    x<sub>1</sub>, ... , x<sub>n-1</sub>, x<sub>n</sub></span>
                    <br>
                    trong đó u = x<sub>0</sub>, v = x<sub>n</sub>, (x<sub>i</sub>, x<sub>i+1</sub>)&isin;E, i = 0,1,2,...,n-1.
                    </li>
                    <li>
                    Đường đi trên còn có thể biểu diễn dưới dạng dãy các Cạnh
                    <br>
                    <center>
                    <span style="color: red;">(x<sub>0</sub>, x<sub>1</sub>), (x<sub>1</sub>, x<sub>2</sub>), ...,
                        (x<sub>n-1</sub>, x<sub>n</sub>)</span>
                    </center>
                    </li>
                </ul>
            `],
            ['Tính liên thông', 'LTDT122', `
            <p>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseLTDT01_1221" role="button"
                    aria-expanded="false" aria-controls="collapseLTDT01_1221">
                    Đồ thị vô hướng
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseLTDT01_1222" role="button"
                    aria-expanded="false" aria-controls="collapseLTDT01_1222">
                    Đỉnh rẽ nhánh
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseLTDT01_1223" role="button"
                    aria-expanded="false" aria-controls="collapseLTDT01_1223">
                    Cầu
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseLTDT01_1224" role="button"
                    aria-expanded="false" aria-controls="collapseLTDT01_1223">
                    Với đồ thị có hướng
                </a>
            </p>
            <div class="collapse" id="collapseLTDT01_1221">
                <div class="card card-body">
                <p>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseLTDT011_21" role="button"
                    aria-expanded="false" aria-controls="collapseExample">
                    Đồ thị liên thông
                </a>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseLTDT011_22" role="button"
                    aria-expanded="false" aria-controls="collapseExample">
                    Đồ thị không liên thông
                </a>
        
            </p>
            <div class="collapse" id="collapseLTDT011_21">
                <div class="card card-body">
                    <ul>
                        <li>Đồ thị vô hướng G=(V,E) được gọi là <span style="color:orange;">liên thông</span> nếu luôn tìm được
                            đường đi
                            giữa hai đỉnh bất kỳ của nó</li>
                        <li>Ví dụ
                            <br>
                            <center>
                                <img style="width: 100%;" src="./assets/img/LTDT/1/anh24.jpg" alt="anh24">
                            </center>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="collapse" id="collapseLTDT011_22">
                <div class="card card-body">
                    <ul>
                        <li>Gọi đồ thị con của đồ thị G = (V,E) là đồ thị H=(W,F), trong đó W&sube;V và F&sube;E</li>
                        <li>Trong trường hợp đồ thị là không liên thông, nó sẽ rã ra thành một số đồ thị con liên thông đôi một
                            không có
                            đỉnh chung. Những đồ thị con liên thông như vậy ta sẽ gọi là các <span style="color: orange;">thành
                                phần
                                liên thông</span> của đồ thị.
                            <br>
                            Ví dụ
                            <center>
                                <img style="width: 100%;" src="./assets/img/LTDT/1/anh25.jpg" alt="anh25">
                            </center>
                        </li>
                    </ul>
                </div>
            </div>
                </div>
            </div>
            <div class="collapse" id="collapseLTDT01_1222">
                <div class="card card-body">
                    <p>Đỉnh v được gọi là <span style="color: orange">đỉnh rẽ nhánh</span> nếu việc loại bỏ v cùng với các cạnh
                    liên thuộc với nó khỏi đồ thị làm tăng số thành phần liên thông của đồ thị</p>
                </div>
            </div>
            <div class="collapse" id="collapseLTDT01_1223">
                <div class="card card-body">
                    <p>Cạnh e được gọi là <span style="color:orange">cầu</span> nếu việc loại bỏ nó khỏi đồ thị làm tăng số thành
                    phần liên thông của đồ thị</p>
                    <br>
                    <b>Ví dụ</b>
                    Đồ thị trong hình có:
                    <ul>
                        <li>Các đỉnh c,d,e là đỉnh rẽ nhánh</li>
                        <li>Các cạnh (d,f) và (e,g) là cầu</li>
                    </ul>
                    <center>
                        <img style="width: 100%;" src="./assets/img/LTDT/1/anh26.jpg" alt="anh26">
                    </center>
                </div>
            </div>
            <div class="collapse" id="collapseLTDT01_1224">
                <div class="card card-body">
                    <ul>
                        <li>Đồ thị có hướng G = (V,E) được gọi là <span style="color: orange;">liên thông mạnh</span> nếu luôn
                            tìm được đường đi giữa hai đỉnh bất kỳ của nó</li>
                        <li>Đồ thị có hướng G = (V,E) được gọi là <span style="color: orange;">liên thông yếu</span> nếu đồ thị
                            vô hướng tương ứng với nó là liên thông
                        </li>
                        <li>Ví dụ
                            <br>
                            <ul>
                                <li>Đồ thị G là liên thông
                                    <br>
                                    <center>
                                        <img style="width: 100%;" src="./assets/img/LTDT/1/anh27.jpg" alt="anh27">
                                    </center>
                                </li>
                                <li>
                                    Đồ thị G' là liên thông yếu, do không có đường đi từ đỉnh u tới đỉnh x cũng như từ đỉnh x
                                    tới đỉnh u
                                    <br>
                                    <center>
                                        <img style="width: 100%;" src="./assets/img/LTDT/1/anh28.jpg" alt="anh28">
                                    </center>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            `]
        ]
    },
    'LTDT13': {
        'title': 'Các đơn đồ thị đặc biệt và sự đẳng cấu',
        'index': [
            ['Các đơn đồ thị đặc biệt', 'LTDT131', `
            <p>
            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapseLTDT131" role="button" aria-expanded="false"
                aria-controls="collapseLTDT131">
                Đồ thị đủ (đồ thị đầy đủ)
            </a>
            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapseLTDT132" role="button" aria-expanded="false"
                aria-controls="collapseLTDT132">
                Đồ thị vòng
            </a>
            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapseLTDT133" role="button" aria-expanded="false"
                aria-controls="collapseLTDT133">
                Đồ thị bánh xe
            </a>
            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapseLTDT134" role="button" aria-expanded="false"
                aria-controls="collapseLTDT134">
                Đồ thị lập phương
            </a>
            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapseLTDT135" role="button" aria-expanded="false"
                aria-controls="collapseLTDT135">
                Đồ thị lưỡng phân (đồ thị hai phía)
            </a>
            <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapseLTDT136" role="button" aria-expanded="false"
                aria-controls="collapseLTDT136">
                Đồ thị lưỡng phân đủ
            </a>
        </p>
        <div class="collapse" id="collapseLTDT131">
            <div class="card card-body">
                <ul>
                    <li>Đồ thị đủ là đơn đồ thị vô hướng mà giữa hai đỉnh bất kỳ đều có đúng một cạnh. Một đồ thị đủ n đỉnh
                        sẽ có n(n-1)/2 cạnh</li>
                    <li>Đồ thị đủ n đỉnh được ký hiệu là <span style="color: red;">K<sub>n</sub></span>
                        <br>
                        <center>
                            <img style="width: 100%;" src="./assets/img/LTDT/1/anh29.jpg" alt="anh29">
                        </center>
                    </li>
                </ul>
            </div>
        </div>
        <div class="collapse" id="collapseLTDT132">
            <div class="card card-body">
                <ul>
                    <li>Đồ thị vòng là đơn đồ thị gồm n (n>=3) đỉnh v<sub>1</sub>, v<sub>2</sub>, ..., v<sub>n</sub> và n
                        cạnh (v<sub>1</sub>, v<sub>2</sub>), (v<sub>2</sub>, v<sub>3</sub>), ...,
                        (v<sub>n-1</sub>,v<sub>n</sub>), (v<sub>n</sub>, v<sub>1</sub>)</li>
                    <li>Mỗi đỉnh của đồ thị vòng sẽ có bậc là 2</li>
                    <li>Đồ thị vòng n đỉnh được ký hiệu là C<sub>n</sub></li>
                </ul>
                <br>
                <center>
                    <img style="width: 100%;" src="./assets/img/LTDT/1/anh30.jpg" alt="anh30">
                </center>
            </div>
        </div>
        <div class="collapse" id="collapseLTDT133">
            <div class="card card-body">
                <ul>
                    <li>Đồ thị bánh xe là đồ thị vòng C<sub>n</sub> thêm vào đỉnh v<sub>n+1</sub> và các cạnh
                        (v<sub>n+1</sub>,v<sub>1</sub>), (v<sub>n+1</sub>,
                        v<sub>2</sub>),...,(v<sub>n+1</sub>,v<sub>n</sub>).</li>
                    <li>Đồ thị bánh xe được ký hiệu là <span style="color:red;">W<sub>n</sub></span>, gồm n+1 đỉnh, 2n cạnh,
                        một đỉnh bậc n và n đỉnh bậc 3.</li>
                </ul>
                <br>
                <center>
                    <img style="width: 100%;" src="./assets/img/LTDT/1/anh33.jpg" alt="anh33">
                </center>
            </div>
        </div>
        <div class="collapse" id="collapseLTDT134">
            <div class="card card-body">
                <ul>
                    <li>Đồ thị lập phương là đồ thị 2<sup>n</sup> đỉnh, với các đỉnh biểu diễn 2<sup>n</sup> xâu nhị phân độ
                        dài n. Hai đỉnh của đồ thị lập phương kề nhau khi và chỉ khi 2 xâu nhị phân tương ứng với hai đỉnh
                        này chỉ khác nhau đúng một bit.</li>
                    <li>Đồ thị lập phương được ký hiệu Q<sub>n</sub>. Mỗi đỉnh của Q<sub>n</sub> có bậc là n, và số cạnh của
                        Q<sub>n</sub> là n.2<sub>n-1</sub>
                        <br>
                        <center>
                            <img style="width: 100%;" src="./assets/img/LTDT/1/anh31.jpg" alt="anh31">
                        </center>
                    </li>
                </ul>
            </div>
        </div>
        <div class="collapse" id="collapseLTDT135">
            <div class="card card-body">
                <p>Gọi G = (V,E) là một đồ thị vô hướng, đồ thị G được gọi là đồ thị lưỡng phân nếu tập đỉnh V được chia thành
                hai tập V<sub>1</sub> và V<sub>2</sub> sao cho:</p>
                <br>
                <ul>
                    <li>hai tập V<sub>1</sub> và V<sub>2</sub> phân hoạch V, nghĩa là V<sub>1</sub>
                        &ne;&Oslash;&ne;V<sub>2</sub> và V<sub>1</sub>&cap;V<sub>2</sub>=&cap;</li>
                    <li>Hai đỉnh bất kỳ trong V<sub>1</sub> không có cạnh nối với nhau, hai đỉnh bất kỳ trong V<sub>2</sub>
                        cũng không có cạnh nối với nhau.
                        <br>
                        <center>
                            <img style="width: 100%;" src="./assets/img/LTDT/1/anh32.jpg" alt="anh32">
                        </center>
                    </li>
                </ul>
            </div>
        </div>
        <div class="collapse" id="collapseLTDT136">
            <div class="card card-body">
                <ul>
                    <li>Gọi V = (V,E) là một đồ thị vô hướng lưỡng phân với hai tập đỉnh V<sub>1</sub> và V<sub>2</sub> định
                        nghĩa như trên, đồ thị G được gọi là đồ thị lưỡng phân đủ nếu: với mọi đỉnh (i,j) mà i &isin;
                        V<sub>1</sub> và j &isin; V<sub>2</sub> thì có đúng một cạnh của G nối i và j</li>
                    <li>Nếu |V<sub>1</sub>| = n và |V<sub>2</sub>|=m thì G có mxn cạnh, và được ký hiệu là <span
                            style="color: red;">K<sub>m,n</sub></span>
                        <br>
                        <center>
                            <img style="width: 100%;" src="./assets/img/LTDT/1/anh34.jpg" alt="anh34">
                        </center>
                    </li>
                </ul>
            </div>
          </div>
            `],
            ['Đẳng cấu đồ thị', 'LTDT132', `
            <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#LTDT1321" role="button" aria-expanded="false"
                aria-controls="LTDT1321">
                Đồ thị vô hướng
            </a>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#LTDT1322" role="button" aria-expanded="false"
                aria-controls="LTDT1322">
                Đồ thị có hướng
            </a>
        </p>
        <div class="collapse" id="LTDT1321">
            <div class="card card-body">
                <ul>
                    <li>Cho hai đồ thị <span style="color: red;">vô hướng</span> G<sub>1</sub>=(V<sub>1</sub>,
                        E<sub>1</sub>) và
                        G<sub>2</sub> = (V<sub>2</sub>, E<sub>2</sub>)</li>
                    <li>Hai đồ thị G<sub>1</sub> và G<sub>2</sub> được gọi là đẳng cấu với nhau nếu tồn tại hai song ánh
                        &omega; và
                        &sigma; thỏa điều kiện sau:
                        <ul>
                            <li>&omega; : V<sub>1</sub>->V<sub>2</sub> và &sigma; : E<sub>1</sub>->E<sub>2</sub></li>
                            <li>Nếu cạnh e&isin;E<sub>1</sub> liên kết với cặp đỉnh {u,v} &sube; V<sub>1</sub> xét trong đồ
                                thị
                                G<sub>1</sub> thì cạnh &sigma;(e) sẽ liên kết với cặp đỉnh {&sigma;(u),&sigma;(v)} xét trong
                                đồ thị
                                G<sub>2</sub> (điều này gọi là sự tương ứng cạnh)</li>
                        </ul>
                        <br>
                        <center>
                            <img style="width: 100%;" src="./assets/img/LTDT/1/anh35.jpg" alt="anh35">
                        </center>
                    </li>
                </ul>
            </div>
        </div>
        <div class="collapse" id="LTDT1322">
            <div class="card card-body">
                <ul>
    
                    <li>Cho hai đồ thị <span style="color:red;">có hướng</span> G<sub>1</sub>=(V<sub>1</sub>, E<sub>1</sub>)
                        và
                        G<sub>2</sub> = (V<sub>2</sub>, E<sub>2</sub>). Hai đồ thị G1 và G2 được gọi là đẳng cấu với nhau
                        nếu tồn
                        tại hai song ánh &omega; và &sigma; thỏa điều kiện sau:
                        <br>
                        <ul>
                            <li>&omega;: V<sub>1</sub>->V<sub>2</sub> và &sigma;E<sub>1</sub>->E<sub>2</sub></li>
                            <li>Nếu cung e &isin;E<sub>1</sub> liên kết với cặp đỉnh (u,v)&isin;V<sub>1</sub><sup>2</sup>
                                xét trong
                                đồ thị G<sub>1</sub> thì cung &omega;(e) sẽ liên kết với cặp đỉnh (&omega;(u),&omega;(v))
                                xét trong
                                đồ thị G<sub>2</sub> (điều này gọi là sự tương ứng cung)</li>
                        </ul>
                        <br>
                        <center>
                            <img style="width: 100%;" src="./assets/img/LTDT/1/anh36.jpg" alt="anh36">
                        </center>
    
                        <br>
                        <p>Hai đồ thị G<sub>1</sub> và G<sub>2</sub> là đẳng cấu nhau</p>
                        <br>
                        <ul>
                            <li>Tương ứng đỉnh: &omega;(1) = A, &omega;(2) = C, &omega;(3)=B;</li>
                            <li>Tương ứng cạnh: &sigma;(u<sub>1</sub>)=e<sub>1</sub>, &sigma;(u<sub>2</sub>)=e<sub>2</sub>,
                                &sigma;(u<sub>3</sub>)=e<sub>3</sub>, &omega;(u<sub>4</sub>) = e<sub>2</sub></li>
                        </ul>
                    </li>
                </ul>
    
            </div>
        </div>
            `]
        ]
    },
    'LTDT14': {
        'title': 'Video bài giảng',
        'index': [
            ['Video lý thuyết', 'LTDT140', `         
                <ul>
                    <li>
                        <b>Chương 1. Đại cương đồ thị (phần 1)</b>
                        <br>
                        <ul>
                            <li><a href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai1_P1_v1.0.mp4">Định nghĩa đồ thị</a></li>
                            <li>
                            <a href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai1_P2_v1.0.mp4">Các thuật ngữ</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai1_P3_v1.0.mp4">Biểu diễn đồ thị trên máy tính phần 1</a>
                                <br>
                                <a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai1_P4_v1.0.mp4">Biểu diễn đồ thị trên máy tính phần 2</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <b>Chương 1. Đại cương về đồ thị (phần 2)</b>
                        <br>
                        <ul>
                            <li>
                                <a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai1_P5_v1.0.mp4">Tính liên thông</a>
                            </li>
                            <li><a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai1_P6_v1.0.mp4" blank="_blank">Các đơn đồ thị đặc biệt</a></li>
                            <li><a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai1_P7_v1.0.mp4">Đẳng cấu đồ thị</a></li>
                        </ul>
                    </li>
                </ul>
            `],
            ['Video thực hành', 'LTDT141', `
                <ul>
                    <li><a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/ThucHanh/220100_TH1_P1_v1.0.mp4">Cài đặt IDE</a> - <a target="_blank" href="https://ubunlog.com/vi/idle-python-entorno-desarrollo-aprendizaje/#:~:text=Tr%C3%AAn%20Gnu%20%2F%20Linux%2C%20IDLE%20%C4%91%C6%B0%E1%BB%A3c,c%C3%A1c%20t%C3%ADnh%20n%C4%83ng%20v%E1%BB%9Bi%20IDLE.">Read more</a></li>
                    <li>
                        <a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/ThucHanh/220100_TH1_P2_v1.0.mp4">Ma trận kề</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/ThucHanh/220100_TH1_P3_v1.0.mp4">Nhập xuất ma trận</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/ThucHanh/220100_TH1_P4_v1.0.mp4">Ghi đọc file</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/ThucHanh/220100_TH1_P5_v1.0.mp4">Đọc ma trận từ file</a>
                    </li>
                </ul>
            `]
        ]
    }
};