const LTDT02 = {
    'LTDT21': {
        'title': 'Các thuật toán tìm kiếm trên đồ thị',
        'index': [
            ['Tìm (duyệt) theo chiều sâu (Depth First Search)', 'LDTD211', `
            <h4>Tìm chiều sâu - DFS</h4>
            <p>Giả sử đồ thị G gồm n đỉnh, với các đỉnh ban đầu được đánh dấu là chưa duyệt</p>
            <p>Từ một đỉnh v nào đó ta bắt đầu duyệt như sau:</p>
            <ul>
                <li>Đánh dấu v đã được duyệt</li>
                <li>Với mỗi đỉnh w kề với v chưa được duyệt, ta thực hiện đệ quy quá trình trên cho w</li>
                <li>
                    <b>Ví dụ 1</b>
                    <center>
                        <img style="width: 100%;" src="./assets/img/LTDT/2/DFS_VD1.jpg" />
                    </center>
                </li>
                <li>
                    <b>Ví dụ 2</b>
                    <center>
                        <img style="width: 100%;" src="./assets/img/LTDT/2/DFS_VD2.jpg" />
                    </center>
                </li>
            </ul>
            `],
            ['Tìm (duyệt) theo chiều rộng (Breadth First Search)', 'LTDT212', `
                <p>Giả sử đồ thị G gồm n đỉnh, với các đỉnh ban đầu được đánh dấu là chưa duyệt</p>
                <p>Từ một đỉnh v nào đó ta bắt đầu duyệt như sau:</p>
                <ol>
                    <li>Đánh dấu v là đã duyệt</li>
                    <li>Với các đỉnh w kề với v chưa được duyệt, lần lượt đánh dấu duyệt các đỉnh này</li>
                    <li>và tiếp tiếp tục quá trình này cho w</li>
                </ol>
                Ví dụ 1 <br>
                <center>
                        <img style="width: 100%;" src="./assets/img/LTDT/2/BFS_VD1.jpg" />
                </center> <br>
                Ví dụ 2 <br>
                <center>
                        <img style="width: 100%;" src="./assets/img/LTDT/2/BFS_VD1.jpg" />
                </center><br>
                <p>Duyệt đồ thị sau theo thuật toán DFS và BFS, giả sử bắt đầu từ đỉnh C</p>
                <center>
                        <img style="width: 100%;" src="./assets/img/LTDT/2/BFS3.jpg" />
                </center><br>
                <center>
                        <img style="width: 100%;" src="./assets/img/LTDT/2/DFS3.jpg" />
                </center><br>
            `]
        ]
    },
    'LTDT22': {
        'title': 'Đồ thị Euler và Hamilton',
        'index': [
            ['Đồ thị Euler', 'LTDT221', `
                <p>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapseIntroduction" role="button" aria-expanded="false" aria-controls="collapseIntroduction">
                        Giới thiệu
                    </a>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapseLTDT221_1" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Định nghĩa
                    </a>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapseLTDT221_2" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Định lý, bổ đề, hệ quả 1
                    </a>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapseLTDT221_3" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Ví dụ: Tìm đường đi Euler trong đồ thị G
                    </a>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapseLTTN221_4" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Định lý, Bồ đề, Hệ quả 2
                    </a>
                    <a class="btn btn-primary mt-2" data-bs-toggle="collapse" href="#collapseLTTN221_5" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Chứng minh định lý, bổ đề, hệ quả 2
                    </a>
                </p>
                <div class="collapse" id="collapseIntroduction">
                    <div class="card card-body">
                        <center>
                            <img style="width: 100%;" src="./assets/img/LTDT/2/GT1.jpg" />
                        </center>
                        <center>
                            <img style="width: 100%;" src="./assets/img/LTDT/2/GT2.jpg" />
                        </center>
                       
                    </div>
                </div>

                <div class="collapse" id="collapseLTDT221_1">
                    <div class="card card-body">
                        <ul>
                            <li>Chu trình đơn trong đồ thị G đi qua mỗi cạnh của nó một lần được gọi là <b>chu trình Euler</b></li>
                            <li>Đường đi đơn trong G đi qua mỗi cạnh của nó một lần được gọi là <b>đường đi Euler</b></li>
                            <li><b>Đồ thị Euler:</b> có chu trình Euler</li>
                            <li><b>Đồ thị nửa Euler</b>: có đường đi Euler</li>
                        </ul>
                        <br>
                        => mọi đồ thị Euler luôn là nửa Euler, nhưng điều ngược lại không luôn luôn đúng
                        <br>
                        <p>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseLTDT221Example1" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Ví dụ 1
                            </a>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseLTDT221Example2" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Ví dụ 2
                            </a>
                        </p>    
                        <div class="collapse" id="collapseLTDT221Example1">
                            <div class="card card-body">
                                <center>
                                    <img style="width: 100%;" src="./assets/img/LTDT/2/eulerVD1.jpg" alt="eulerVD1" />
                                </center>
                                <br>
                                <ul>
                                    <li>Đồ thị G1 không có chu trình Euler và không có đường đi Euler</li>
                                    <li>Đồ thị G2 có đường đi Euler</li>
                                    <li>Đồ thị G3 có chu trình Euler</li>
                                </ul>
                            </div>
                        </div>
                        <div class="collapse" id="collapseLTDT221Example2">
                            <div class="card card-body">
                                <center>
                                    <img style="width: 100%;" src="./assets/img/LTDT/2/eulerVD2.jpg" alt="eulerVD2" />
                                </center>
                                <ul>
                                    <li>Đồ thị G4 không có chu trình Euler và không có đường đi Euler</li>
                                    <li>Đồ thị G5 có đường đi Euler</li>
                                    <li>Đồ thị G6 có chu trình Euler</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="collapse" id="collapseLTDT221_2">
                    <div class="card card-body">
                        <p>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseLTDT221Example3" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Định lý 1
                            </a>
                        </p>
                        <div class="collapse" id="collapseLTDT221Example3">
                            <div class="card card-body">
                            Đồ thị vô hướng liên thông G là đồ thị Euler khi và chỉ khi mọi đỉnh của G đều có bậc chẵn. <br>
                            <center>
                                <img style="width: 100%;" src="./assets/img/LTDT/2/eulerDL1_1.jpg" alt="eulerDL1_1"/>
                            </center>
                            <ul>
                                <li><b>Điều kiện cần</b>: Đồ thị liên thông có chu trình Euler thì mọi đỉnh của nó đều có bậc chẵn</li>
                                <li><b>Điều kiện đủ</b>: Đồ thị liên thông mà các đỉnh đều có bậc chẵn thì tồn tại chu tình Euler</li>
                            </ul>
                            <center>
                                <img style="width: 100%;" src="./assets/img/LTDT/2/eulerDL1_2.jpg" alt="eulerDL1_2"/>
                            </center>
                            </div>
                        </div>
                        <p><b><span style="color:red;">Bổ đề 1:</span> Nếu bậc của mỗi đỉnh của đồ thị G không nhỏ hơn 2 thì G chứa chu trình</b></p>
                        <p><b><span style="color:red;">Hệ quả 1:</span> Đồ thị vô hướng liên thông G là nửa Euler khi và chỉ khi có không quá hai đỉnh bậc lẻ</b></p>
                    </div>
                </div>
                <div class="collapse" id="collapseLTDT221_3">
                    <div class="card card-body">
                        <center>
                            <img style="width: 100%;" src="./assets/img/LTDT/2/eulerVD3.jpg" alt="eulerVD3"/>
                        </center>
                        <ul>
                            <li>Tính bậc các đỉnh
                                <br>
                                <img sstyle="width: 100%;" src="./assets/img/LTDT/2/deg_vertexEuler.jpg" alt="eulerVD3" />
                            </li>
                            <li>Đồ thị G liên thông và có đúng 2 đỉnh bậc lẻ là 1 và 5. Bổ sung cạnh mới (1,5) vào G thu được G'=(V',E')</li>
                            <li>Đồ thị G’ là đồ thị liên thông có các đỉnh đều bậc chẵn,
                            do đó theo định lý 1 thì tồn tại chu trình Euler:<br>
                            1,2,3,4,5,3,1,6,5,1
                            </li>
                            <li>Bỏ đi cạnh (1,5) khỏi G', ta được đường đi Euler trong G là: 1,2,3,4,5,3,1,6,5</li>
                        </ul>
                        <center>
                            <img src="./assets/img/LTDT/2/eulerVD3_1.jpg" />
                        </center>
                    </div>
                </div>
                <div class="collapse" id="collapseLTTN221_4">
                    <div class="card card-body">
                            Nếu bậc của mỗi đỉnh của đồ thị G không nhỏ hơn 2 thì G chứa chu trình
                            <br>
                            <ul>
                                <li><b><span style="color:red;">Định lý 2</span>: Đồ thị có hướng liên thông mạnh G là đồ thị Euler khi và chỉ khi mọi đỉnh G đều có bán bậc vào bằng bán bậc ra.</b></li>
                                <li><b><span style="color:red;">Bổ đề 2</span>:Nếu bán bậc vào và bán bậc ra của mỗi đỉnh của đồ thị có hướng G không nhỏ hơn 1 thì G chứa chu trình đơn.</b></li>
                                <li><b><span style="color:red;">Hệ quả 2</span>: Đồ thị có hướng liên thông yếu G là nửa Euler khi và chỉ khi tồn tại hai đỉnh x và y sao cho: deg<sup>-</sup>(x) = deg<sup>+</sup>(x)+1</b>,deg<sup>-</sup>(y) = deg<sup>+</sup>(y)+1</b>,
                                deg<sup>-</sup>(v) = deg<sup>+</sup>(v)+1</b>, &forall;v&isin;V, v&ne;x, v&ne;y</li>
                            </ul>
                    </div>
                </div>

                <div class="collapse" id="collapseLTTN221_5">
                    <div class="card card-body">
                        <ul>            
                            <li>
                                <span style="color: blue">Giả sử G là đồ thị Euler, ta có thể tìm chu trình Euler như sau:</span>
                                <ul>
                                    <li>Xuất phát từ một đỉnh u bất kỳ của G và tuân theo hai quy tắc:
                                        <ul>
                                            <li>Mỗi khi đi qua một cạnh thì xóa nó đi và xóa đỉnh cô lập (nếu có)</li>
                                            <li>Không bao giờ đi qua một cầu, trừ khi không còn cách đi nào khác.</li>
                                        </ul>
                                    </li>
                                </ul>
                                Ví dụ: Tìm 1 chu trình Euler trong đồ thị sau <br>
                                <center>
                                    <img style="width: 100%;" src="./assets/img/LTDT/2/chutrinheuler1_1.jpg" alt="chutrinheuler1">
                                </center>
                                <ul>
                                    <li>Xuất phát từ u, ta có thể đi theo cạnh (u,v)
                                    hoặc (u,x), giả sử là (u,v) (xoá (u,v)).</li>
                                    <li>Từ v có thể đi qua một trong các cạnh (v,w),
                                    (v,x), (v,t), giả sử (v,w) (xoá (v,w)).</li>
                                    <li>Tiếp tục, có thể đi theo một trong các cạnh
                                    (w,s), (w,y), (w,z), giả sử là (w,s) (xoá (w,s)).</li>
                                </ul>
                                <center>
                                    <img style="width: 100%;" src="./assets/img/LTDT/2/chutrinheuler1_2.jpg" alt="chutrinheuler2">
                                </center>
                                <ul>
                                    <li>Đi theo cạnh (s,y) (xoá (s,y) và s)</li>
                                    <li>Vì (y,x) là cầu nên có thể đi theo một trong hai cạnh (y,w), (y,z), giả sử (y,w) (xoá (y,w))</li>
                                    <li>Đi theo (w,z) (xoá (w,z) và w)</li>
                                    <li>Đi theo (z,y) (xoá (z,y) và z)</li>
                                    <li>Tiếp tục đi theo cạnh (y,x) (xoá (y,x) và y)</li>
                                </ul>
                                <img style="width: 100%;" src="./assets/img/LTDT/2/chutrinheuler1_3.jpg" alt="chutrinheuler3">
                    
                                <ul>
                                    <li>Vì (x,u) là cầu nên đi theo cạnh (x,v) hoặc (x,t), giả sử (x,v) (xoá (x,v))</li>
                                    <li>Tiếp tục đi theo cạnh (v,t) (xoá (v,t) và v)</li>
                                    <li>Đi theo cạnh (t,x) (xoá cạnh (t,x) và t)</li>
                                    <li>Cuối cùng đi theo cạnh (x,u) (xoá (x,u), x và u)</li>
                                </ul>
                                <img style="width: 200px; height: 200px;" src="./assets/img/LTDT/2/chutrinheuler1_4.jpg" alt="chutrinheuler4">
                                <br>
                                <span style="color:red;">Vậy, chu trình Euler tìm được là: u v w s y w z y x v t x u</span>
                    
                            </li>
                        </ul>
                    </div>
                </div>
               
            `],
            ['Đồ thị Hamilton', 'LTDT222', `
            <div id="accordion">
                <div class="card">
                <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <button class="btn btn-link text-decoration-none" data-bs-toggle="collapse" data-bs-target="#collapseLTTN222_1" aria-expanded="false" aria-controls="collapseLTTN222_1">
                            Giới thiệu
                        </button>
                    </h5>
                </div>
            
                <div id="collapseLTTN222_1" class="collapse" aria-labelledby="headingOne" data-bs-parent="#accordion">
                    <div class="card-body">
                        <center>
                            <img src="./assets/img/LTDT/2/dothi_hamilton.jpg" style="width:100%;" />
                        </center>
                        <p>Bài toán "đường đi của con mã trên bàn cờ"</p>
                        <center>
                            <img src="./assets/img/LTDT/2/duongdi_conma.jpg" style="width: 100%;"/>
                        </center>
                        <ul>
                            <li>Trên bàn cờ, con mã chỉ có thể đi theo đường chéo của hình chữ nhật 2x3 hoặc 3x2 ô vuông.</li>
                            <li>Giả sử bàn cờ có 8x8 ô vuông. Hãy tìm đường đi của con mã qua được tất cả các ô của bàn cờ, mỗi ô chỉ đi qua một lần rồi trở lại ô xuất phát</li>
                        </ul>
                    </div>
                </div>
                </div>
        
                <div class="card">
                <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                    <button class="btn btn-link collapsed text-decoration-none" data-bs-toggle="collapse" data-bs-target="#collapseLTTN222_2" aria-expanded="false" aria-controls="collapseLTTN222_2">
                        Năm 1857, nhà toán học người Ailen là Hamilton (1805 - 1865) đưa ra trò chơi "đi vòng quanh thế giới"
                    </button>
                    </h5>
                </div>
                <div id="collapseLTTN222_2" class="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                    <div class="card-body">
                        <ul>
                            <li>Cho một hình thập nhị diện đều (đa diện đều có 12 mặt, 20 đỉnh và 30 cạnh)
                                <ul>
                                    <li>Trên bàn cờ, con mã chỉ có thể đi theo đường chéo của hình chữ nhật 2x3 hoặc 3x2 ô vuông.</li>
                                    <li>Giả sử bàn cờ có 8x8 ô vuông. Hãy tìm đường đi của con mã qua được tất cả các ô của bàn cờ, mỗi ô chỉ đi qua một lần rồi trở lại ô xuất phát.</li>
                                    <li>Cho 1 hình thập nhị diện đều (đa diện đều có 12 mặt, 20 đỉnh và 30 cạnh)
                                        <ul>
                                            <li>mỗi đỉnh của hình mang tên 1 thành phố nổi tiếng</li>
                                            <li>mỗi cạnh của hình (nối hai đỉnh) là đường đi lại giữa 2 thành phố tương ứng</li>
                                        </ul>
                                        <center>
                                            <img src="./assets/img/LTDT/2/thapnhidien.jpg" alt="thapnhidien" style="width: 100%;"/>
                                        </center>
                                    </li>
                                    <li>XUất phát từ 1 thành phố, hãy tìm đường đi thăm tất cả các thành phố khác, mỗi thành phố chỉ một lần, rồi trở về chỗ cũ</li>
                                </ul>
                            </li>
                        </ul>
                        <p>Hình thập nhị diện đều có:</p>
                        <ul>
                            <li>12 mặt</li>
                            <li>20 đỉnh</li>
                            <li>30 cạnh</li>
                        </ul>
                        <center>
                            <img src="./assets/img/LTDT/2/thapnhidien.jpg" />
                        </center>
                    </div>
                </div>
                </div>
        
                <div class="card">
                <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                    <button class="btn btn-link collapsed text-decoration-none" data-bs-toggle="collapse" data-bs-target="#collapseLTTN222_3" aria-expanded="false" aria-controls="collapseLTTN222_3">
                        Định nghĩa
                    </button>
                    </h5>
                </div>
                <div id="collapseLTTN222_3" class="collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                    <div class="card-body">
                        <ul>
                            <li><span style="color: red;">Chu trình sơ cấp</span> chứa tất cả các <span style="color: red;">đỉnh</span> của đồ thi được gọi là </span style="color: red">chu trình Hamilton</span></li>
                            <li><span style="color: red;">Đường đi sơ cấp</span> chứa tất cả các <span style="color: red;">đỉnh</span> của đồ thị được gọi là <span>đường đi Hamilton</span></li>
                            <li>Đồ thị <span style="color: orange;">có chu trình Hamilton</span>: <span style="color: blue;">đồ thị nửa Hamilton</span></li>
                            <li>Đồ thị <span style="color: orange;">có đường đi Hamilton</span>: <span>đồ thị nửa Hamilton</span></li>
                        </ul>
                
                        => Mọi đồ thị Hamilton luôn là nửa Hamilton, nhưng điều ngược lại không luôn luôn đúng.
                    </div>
                </div>
                </div>
        
                <div class="card">
                    <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed text-decoration-none" data-bs-toggle="collapse" data-bs-target="#collapseLTTN222_4" aria-expanded="false" aria-controls="collapseLTTN222_4">
                            Ví dụ
                        </button>
                    </h5>
                    </div>
                    <div id="collapseLTTN222_4" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body">
                            <center>
                                <img src="./assets/img/LTDT/2/vidu_hamilton.jpg" style="width: 100%;"/>
                            </center>
        
                            <ul>
                                <li>G1 không là đồ thị Hamilton hay nửa Hamilton</li>
                                <li>G2 là đồ thị nửa Halmiton</li>
                                <li>G3 là đồ thị Hamilton</li>
                            </ul>
                            <p><span style="color: orange;">Định lý 1 (Định lí Dirac):</span> Nếu G là 1 đơn đồ thị có n đỉnh (n>=3) và mọi đỉnh của G đều có bậc không nhỏ hơn n/2 thì G là một đồ thị Hamilton.</p>
                            <p>Ví dụ: Xét đồ thị W6</p>
                            
                            <center>
                                <img src="./assets/img/LTDT/2/vidu_hamilton1.jpg" style="width: 100%;"/>
                            </center>
                    </div>
                    </div>
                </div>
        
                <div class="card">
                    <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed text-decoration-none" data-bs-toggle="collapse" data-bs-target="#collapseLTTN222_5" aria-expanded="false" aria-controls="collapseLTTN222_5">
                            Định lý 1
                        </button>
                    </h5>
                    </div>
                    <div id="collapseLTTN222_5" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body">
                            <ul>
                                <li>Theo định lý Dirac deg(v) = 3 >= 6/2</li>
                                <li>Vậy đồ thị có chu trình Halmiton 1,2,3,4,5,6,1</li>
                            </ul>
                            <p><span style="color: red;">Hệ quả 1</span> Nếu G là đơn đồ thị có n đỉnh và mọi đỉnh của G đều có bậc không nhỏ hơn (n-1)/2 thì G là đồ thị nửa Hamilton</p>
                    </div>
                    </div>
                </div>
        
                <div class="card">
                    <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed text-decoration-none" data-bs-toggle="collapse" data-bs-target="#collapseLTTN222_6" aria-expanded="false" aria-controls="collapseLTTN222_6">
                        Hệ quả, định lý
                        </button>
                    </h5>
                    </div>
                    <div id="collapseLTTN222_6" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body">
                        <p>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#LTDT222_3" role="button" aria-expanded="false" aria-controls="LTDT222_3">
                                Định lý 2
                            </a>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#LTDT222_4" role="button" aria-expanded="false" aria-controls="LTDT222_4">
                                Định lý 3
                            </a>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#LTDT222_5" role="button" aria-expanded="false" aria-controls="LTDT222_5">
                                Định lý 4
                            </a>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#LTDT222_6" role="button" aria-expanded="false" aria-controls="LTDT222_6">
                                Ví dụ
                            </a>
                        </p>
                        <div class="collapse" id="LTDT222_3">
                            <div class="card card-body">
                                <p><span style="color: red;">Định lý 2 (Định lí Ore):</span> Cho G là đơn đồ thị n đỉnh (n&ge;3). Nếu deg(u) + deg(v) &ge; n với mọi cặp đỉnh không kề nhau thì đồ thị G có chu trình Hamilton.</p>
            
                                <p>Ví dụ: Đồ thị W6 cũng thỏa mãn định lý Ore</p>
                                <center>
                                    <img src="./assets/img/LTDT/2/vidu_hamilton1.jpg" style="width: 100%;"/>
                                </center>
                            </div>
                        </div>
                        <div class="collapse" id="LTDT222_4">
                            <div class="card card-body">
                                <p><span style="color: orange;">Định lý 3</span>: Nếu G là một đồ thị có hướng đầy đủ thì G là đồ thị nửa Hamilton</p>
                            </div>
                        </div>
                        <div class="collapse" id="LTDT222_5">
                            <div class="card card-body">
                                <p><span style="color: orange;">Định lý 4</span>: Đồ thị đầy đủ K<sub>n</sub> với n lẻ và &ge; có đúng (n-1)/2 chu trình Hamilton phân biệt</p>
                            </div>
                        </div>
                        <div class="collapse" id="LTDT222_6">
                            <div class="card card-body">
                                <p>Ví dụ:<br>
                                Có n đại biểu từ n nước đến dự hội nghị quốc tế. Mỗi ngày họp một lần ngồi quanh một bàn tròn. Hỏi phải bố trí bao nhiêu ngày và bố trí như thế nào sao cho trong mỗi ngày, mỗi người có hai người kế bên là bạn mới (n người đều muốn làm quen với nhau)</p>
                        
                                Ví dụ: <br>
                                Xét đồ thị gồm n đỉnh <br>
                                <ul>
                                    <li>mỗi đỉnh: người dự hội nghị</li>
                                    <li>hai đỉnh kề nhau: hai đại biểu làm quen với nhau</li>
                                </ul>
                                => <b>đồ thị đầy đủ Kn</b>
                                <br>
                                Ví dụ: <br>
                                <ul>
                                    <li>Đồ thị đầy đủ Kn là Hamilton, và mỗi chu trình Hamilton là một cách sắp xếp như yêu cầu của bài toán</li>
                                    <li>Bài toán trở thành tìm các chu trình Hamilton phân biệt của đồ thị đầy đủ K<sub>n</sub></li>
                                </ul>       
                                => hai chu trình Hamilton gọi là phân biệt nếu chúng không có cạnh chung
                                <br>
                                Ví dụ: <br>
                                Vậy có (11-1)/2 = 5 cách sắp xếp chỗ ngồi phân biệt
                                <ul>
                                    <li>1 2 3 4 5 6 7 8 9 10 11 1</li>
                                    <li>1 3 5 2 7 4 9 6 11 8 10 1</li>
                                    <li>1 5 7 3 9 2 11 4 10 6 8 1</li>
                                    <li>1 7 9 5 11 3 10 2 8 4 6 1</li>
                                    <li>1 9 11 7 10 5 8 3 6 2 4 1</li>
                                </ul>
                                Ví dụ <br>
                                <center>
                                    <img src="./assets/img/LTDT/2/vidu_hamilton2.jpg" style="width: 100%;"/>
                                </center>
                            </div>
                        </div>
        
                        
                        
        
                        
                    
                    </div>
                    </div>
                </div>
        
                <div class="card">
                <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                    <button class="btn btn-link collapsed text-decoration-none" data-bs-toggle="collapse" data-bs-target="#collapseLTTN222_7" aria-expanded="false" aria-controls="collapseLTTN222_7">
                        Qui tắc chỉ ra chu trình Hamilton H hay chỉ ra G không là Hamilton
                    </button>
                    </h5>
                </div>
                <div id="collapseLTTN222_7" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body">
                    <ol>
                        <li>Mọi cạnh kề với đỉnh bậc 2 đều phải thuộc chu trình H</li>
                        <li>Không có chu trình con nào được tạo thành trong khi xây dựng H</li>
                        <li>Sau khi đã lấy 2 cạnh tới đỉnh x đặt vào chu trình H rồi thì xoá tất cả những cạnh còn lại mà kề với x.
                            <br>
                            Khi đó có thể tạo ra những đỉnh bậc 2 mới: áp dụng (1).
                        </li>
                        <li>Nếu tồn tại 1 đỉnh của G có bậc <=1 thì G không có chu trình Hamilton.</li>
                    </ol>
                
                    <b>Ví dụ 1</b>
                    <center>
                        <img src="./assets/img/LTDT/2/vidu_hamilton3.jpg" style="width: 100%;"/>
                    </center>
                    Đồ thị G1 không có chu trình Hamilton vì deg(3) = 1 (qui tắc 4)
                
                    <br>
                    <b>Ví dụ 2:</b>
                    <center>
                        <img src="./assets/img/LTDT/2/vidu_hamilton4.jpg" style="width: 100%;"/>
                    </center>
                
                    <ul>
                        <li>Theo qui tắc 1, cạnh (1,2) (1,5) (3,2) (3,4) thuộc chu trình H</li>
                        <li>Vì đã lấy 2 cạnh tới đỉnh 2 đặt vào chu trình H rồi, nên xóa cạnh (2,4) và (2,5) theo qui tắc 3. Do đó, tạo ra đỉnh bậc 2 mới là đỉnh 4 và đỉnh 5.</li>
                        <li>Áp dụng qui tắc 1, cạnh (4,3) (4,5) đưa vào chu trình H.</li>
                    </ul>
                    Ta thu được chu trình H: 1 2 3 4 5 1 là chu trình sơ cấp đi qua tất cả các đỉnh của đồ thị.===>Vậy G2 là đồ thị Hamilton, và H là chu trình Hamilton cần tìm.
                    </div>
                </div>
                </div>
            </div>
            `],
            ['Thuật toán liệt kê tất cả các chu trình Hamilton của đồ thị', 'LTDT223', `
                <b>Procedure Hamilton(k)</b>
                
                <center>
                    <img style="width: 100%;" src="./assets/img/LTDT/2/procedurehamilton.jpg">
                </center>
                <center>
                    <img style="width: 100%;" src="./assets/img/LTDT/2/procedurehamilton1.jpg">
                </center>

                <b>Ví dụ</b>
                <ul>
                    <li>Liệt kê tất cả các chu trình Hamilton (nếu có) trong đồ thị
                    <center>
                        <img style="width: 100%;" src="./assets/img/LTDT/2/vidu_hamilton5.jpg">
                    </center>
                    </li>
                    <li>đồ thị có 4 chu trình Hamilton sau:
                        <ul>
                            <li>1 2 3 5 4 1</li>
                            <li>1 2 5 3 4 1</li>
                            <li>1 4 3 5 2 1</li>
                            <li>1 4 5 3 2 1</li>
                        </ul>
                        <center>
                            <img style="width: 100%;" src="./assets/img/LTDT/2/vidu_hamilton6.jpg">
                        </center>
                    </li>
                </ul>
            `]
        ]
    },
    'LTDT23': {
        'title': 'Bài toán đường đi ngắn nhất',
        'index': [
            ['Giới thiệu', 'LTDT230', `
            Cho đồ thị có trọng số G = (V, E), mỗi cạnh (u, v) thuộc E được gán một số
            thực a(u, v) gọi là trọng số (hay chiều dài, chi phí) <br>
            Nếu dãy v0, v1, . . ., vp là một đường đi trên G, thì độ dài của nó được
            định nghĩa là tổng sau:
            <br>
            <center>
                <img src="./assets/img/LTDT/2/formular.jpg" style="width: 80%; height: 200px;"/>
            </center> <br>
            => độ dài của đường đi chính là tổng trọng số trên các cạnh của nó
            <ul>
                <li>Chiều dài m(u, v) của mỗi đường đi từ u đến v bằng tổng chiều dài
                các cạnh mà nó đi qua</li>
                <li>Khoảng cách d(u,v) giữa hai đỉnh u và v là chiều dài đường đi ngắn
                nhất (m(u,v) nhỏ nhất) trong các đường đi từ u đến v <br>
                đặt a(u,v) = &infin;, nếu (u,v) không thuộc E
                </li>
            </ul>

            <b>Bài toán tổng quát</b>
            Tìm đường đi có độ dài nhỏ nhất từ một đỉnh xuất phát s &isin; V đến đỉnh cuối t &isin; V <br>

            <ul>
                <li>độ dài ký hiệu là d(s,t)</li>
                <li>nêu không tồn tại đường đi từ s đến t thì ta đặt d(s,t)=&infin;</li>
            </ul>

            Với cặp đỉnh s,t &infin; V tuỳ ý luôn tìm được đỉnh v sao cho <br> <center>d(s,t) = d(s,v) + a(v,t)</center>
            <br>
            đỉnh v: đỉnh trước t trong đường đi ngắn nhất từ s đến t.

            <br>

            Tiếp theo lại có thể tìm được đỉnh u sao cho <br>
            <center>d(s,v) = d(s,u) + a(u,v) + . . .</center>
            <br>
            Dãy t, v, u, . . . không chứa đỉnh lặp lại và kết thúc ở s ==> xác định
            đường đi ngắn nhất s đến t <br>

            <b style="color:red;">Chú ý</b>
            <ul>
                <li><span style="color: orange; font-style: bold;">Cạnh song song</span>: bỏ bởi chỉ chừa lại 1 cạnh có trọng số nhỏ nhất</li>
                <li><span style="color: orange; font-style: bold;">Khuyên</span>: bỏ khuyên trọng số không âm
                    <br>
                <span style="text-indent: 50px;">Khuyên trọng số âm: bài toán tìm đường đi ngắn nhất không có lời giải</span>
                </li>
                <li><span style="color: orange; font-style: bold;">Ma trận</span> dữ liệu A định nghĩa như sau:</li>
                
                <center>
                    <img src="./assets/img/LTDT/2/Aij.jpg" style="width: 100%;"/>
                </center>
            </ul>
            <a href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai2_P8_v1.0.mp4" target="_blank">Video bài học</a>
            `],
            ['Thuật toán Dijkstra', 'LTDT231', `
                <ul>
                    <li>Cho đơn đồ thị liên thông, có trọng số G=(V,E). Tìm khoảng cách d(u<sub>o</sub>,v) từ một đỉnh u<sub>0</sub> cho trước đến một đỉnh v bất kỳ của G và
                    tìm đường đi ngắn nhất từ u<sub>0</sub> đến v.</li>
                    <li>Phương pháp: xác định tuần tự các đỉnh có khoảng cách đến u<sub>0</sub>
                    từ nhỏ đến lớn.</li>
                    <li>u<sub>0</sub> nhỏ nhất, với d(u<sub>0</sub>, u<sub>0</sub>) = 0</li>
                    <li>Trong các đỉnh v &ne; u<sub>0</sub>, tìm đỉnh có khoảng cách k<sub>1</sub> đến u<sub>0</sub> là nhỏ nhất <br>
                        Đỉnh này phải là một trong các đỉnh kề với u<sub>0</sub>, giả sử là u<sub>1</sub>:
                        <br>
                        d(u<sub>0</sub>,<sub>1</sub>) = k<sub>1</sub>
                    </li>
                    <li>
                        Trong các đỉnh v &ne; <sub>0</sub> và v &ne; u<sub>1</sub>, tìm đỉnh có khoảng cách k<sub>2</sub> đến u<sub>0</sub> là nhỏ nhất <br>
                        Đỉnh này phải kề với u<sub>0</sub> hoặc với u<sub>1</sub>, giả sử là u<sub>2</sub>: <br>
                        d(u<sub>0</sub>,u<sub>2</sub>)=k<sub>2</sub>
                    </li>
                    <li>
                        Tiếp tục cho đến khi tìm được khoảng cách từ u<sub>0</sub> đến mọi đỉnh v của G. Nếu G có n đỉnh thì: 
                        <br>
                        <center>0 = d(u0,u0) < d(u0,u1) < d(u0,u2) < ... < d(u0,un-1)</center>
                    </li>
                </ul>

                <br>

                <p>
                    <span><u>Input</u></span>: N, L, s, t - số đỉnh, ma trận trọng lượng, đỉnh xuất phát, đỉnh kết thúc
                </p>
                <p>
                    <span><u>Output</u></span>: D, Labels - D[k]: trọng lượng ĐĐNN, s->k, Labels[k]: đỉnh ngay trước k trong ĐĐNN s->k
                </p>
                <ol>
                    <li>V=X; D[s]=0;D[k]=&infin;, &forall;k&isin;X\{s}; Labels[k]=-1,&forall;k&isin;X </li>
                    <li>
                        <ul>
                            <li>Chọn đỉnh v&isin;V với D[v] nhỏ nhất</li>
                            <li>V := V\{v}</li>
                            <li>Với mọi k&isin;V và có cạnh nối từ v đến k <br>
                            <ceter>Nếu D[k]>D[v]+L<sub>vk</sub> thì D[k]=D[v]+L<sub>vk</sub> và Labels[k] = v</center>
                            </li>
                        </ul>
                    </li>
                </ol>
                <br>
                <p><b>Ví dụ: Dùng thuật toán Dijkstra để tìm đường đi ngắn nhất từ đỉnh 1 đến các đỉnh còn lại của đồ thị</b></p>
                <center>
                    <img src="./assets/img/LTDT/2/VD_dijkstra0.jpg" alt="VD_dijkstra0" style="width: 100%;" />
                </center>

                <center>
                    <img src="./assets/img/LTDT/2/VD_dijkstra0_simulation.gif" style="width: 100%;"/>
                </center>
                <br>

                <ul>
                    <li>Từ ma trận trọng số a[u,v], u,v&isin;V, tính cận trên d[v] của khoảng cách từ s đến tất cả các đỉnh v &forall;V</li>
                    <li>Mỗi khi phát hiện d[u] + a[u,v] < d[v] thì cận trên d[v] sẽ được làm tốt lên: d[u] + a[u,v]</li>
                    <li>Quá trình sẽ kết thúc khi không làm tốt thêm được bất kỳ cận trên nào d[v] sẽ cho khoảng cách từ đỉnh s đến đỉnh v</li>
                    <li>Khi thể hiện trên máy tính
                        <ul>
                            <li>cận trên d[v]: nhãn của đỉnh v</li>
                            <li>việc tính lại các cận này: thủ tục gán</li>
                        </ul>
                    </li>
                    <li>
                        <b>Điều kiện tồn tại lời giải</b>
                        <br>
                        <span style="text-ident: 50px;">Gọi p là đường đi từ x đến y, giả sử p có chứa một chu trình &micro; </span>
                        <ul>
                            <li>Nếu độ dài của &micro; &ge; 0 thì có thể cải tiến P bằng cách bỏ đi chu trình &micro;</li>
                            <li>Nếu độ dài của &micro; < 0 thì không tồn tại đường đi ngắn nhất x đến y <br>
                            <span style="text-indent: 50px;">vì nếu lặp lại &micro; càng nhiều thì độ dài P càng nhỏ đi, nghĩa là P->-&infin;</span>
                            <br>
                            <center>
                                <img src="./assets/img/LTDT/2/chutrinh_micro.jpg" alt="chutrinh_micro"/>
                            </center>
                            </li>
                        </ul>
                    </li>
                </ul>
                <a href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai2_P9_v1.0.mp4" target="_blank">Video bài giảng</a>
            `],
            ['Thuật toán Ford-Bellman', 'LTDT232', `
                <h4>Nguyên lý Bellman</h4>
                <ul>
                    <li>Gọi P là đường đi ngắn nhất từ đỉnh s đến đỉnh t; k &isin; P</li>
                    <li>
                    Giả sử P=P<sub>1</sub>&oplus;P<sub>2</sub>
                    </li>
                </ul>

                <br>
                <p><u>Input</u>: N,L,u - số đỉnh, ma trận trọng lượng của G(X,E) đỉnh xuất phát</p>
                <p><u>Output</u>: &pi;(k,v), Labels: &pi; trọng lượng ĐĐNN u->v sau k bước lặp, Labels[v]: đỉnh ngay trước v trong ĐĐNN u->v</p>
                <ol>
                    <li>&pi;(0,u)=0;&pi;(0,u)=&infin; &forall;x&isin;X/{u};Labels[v]=-1 &forall;v&isin;X;</li>
                    <li>Lập với k = 1, 2, N-1
                        <ul>
                            <li>&forall;i&isin;X, chọn j &isin;X sao cho &pi;(k-1,j)+L<sub>ij</sub> đạt nhỏ nhất; nếu j&ne;i</li>
                            <li>Nếu &pi;(k)=&pi;(k-1): &pi;(k,v) là đường đi ngắn nhất u->v</li>
                        </ul>
                    </li>
                    <li>Nếu &pi; vẫn còn thay đổi sau bước lặp N-1: từ u đã đi đến mạch âm</li>
                </ol>
                <br>
                <p><b>Ví dụ: Dùng thuật toán Ford-Bellman để tìm đường đi ngắn nhất từ đỉnh 1 đến các đỉnh còn lại của đồ thị</b></p>
                <img style="width: 100%;" src="./assets/img/LTDT/2/VD_ford_bellman0.jpg"/>
                <br>
                <center>
                    <img style="width: 100%;" src="./assets/img/LTDT/2/VD_ford_bellman0_simulation.gif" />
                </center>
            <br>
            <a href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai2_P10_v1.0.mp4" target="_blank">Video bài giảng</a>
            `],
            ['Thuật toán Floyd', 'LTDT233', `
            <p><b><u>Input</u></b>: N, L - số đỉnh, ma trận trọng lượng của G(X,E)</p>
                <p><b><u>Output</u></b>: L, Nexts - L[u,v]: trọng lượng ĐĐNN u->v, Nexts[u,v]: đỉnh ngay sau u trong ĐĐNN u->v</p>
                <ol>
                    <li>Nếu L[u,v]&ne;&infin;; Nexts[u,v]=v <br>
                        Ngược lại: Nexts[u,v]=-1, &forall;(u,v)&isin;X<sup>2</sup>
                    </li>
                    <li>Với mọi t &isin; X 
                    <br>
                    Với mọi u &isin; X có L[u,t]&ne;&infin;
                    <br>
                    Với mọi v &isin; X có L[t,v]&ne;&infin; <br>
                    Nếu L[u,v] > L[u,t] + L[t,v] thì <br>
                        <ol>
                            <li>L[u,v] = L[u,t]+L[t,v]</li>
                            <li>Nexts[u,v] = Nexts[u,t]</li>
                        </ol>
                    </li>
                </ol>

                <ul>
                    <li>Ký hiệu</li>
                    <li>Kết thúc: P[i,j] là đỉnh trước của j trên đường đi NN từ i đến j với chiều dài A[i,j]</li>
                </ul>

                <p><b>Ví dụ:</b></p>
                <ul>
                    <li>Tìm đường đi ngắn nhất giữa tất cả các cặp đỉnh trong đồ thị bên dưới</li>
                    <li>Cho biết kết quả đường đi ngắn nhất từ đỉnh 2 đến đỉnh 3</li>
                </ul>
                <center>
                <img style="width: 100%;" src="./assets/img/LTDT/2/VD_floyd0.jpg" />
                </center>
                <center>
                <img style="width: 100%;" src="./assets/img/LTDT/2/VD_floyd0_simulation.gif" alt="VD_floyd0_simulation"/>
                </center>
                <br>
                <a href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai2_P10_v1.0.mp4" target="_blank">Video bài giảng</a>
            `]
        ]
    },
    'LTDT24': {
        'title': 'Video bài giảng',
        'index': [
            ['Video lý thuyết', 'LTDT241', `
                <b>Các bài toán về đường đi</b>
                <b>Tìm kiếm</b>
                <br>
                <ul>
                    <li><a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai2_P1_v1.0.mp4">Tìm chiều sâu (Depth First Search)</a></li>
                    <li><a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai2_P2_v1.0.mp4">Tìm chiều rộng (Breadth First Search)</a></li>
                </ul>
                <b>Euler</b>
                <ul>
                    <li><a href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai2_P3_v1.0.mp4" target="_blank">Đồ thị Euler phần 1</a></li>
                    <li><a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai2_P4_v1.0.mp4">Đồ thị Euler phần 2</a></li>
                    <li><a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai2_P5_v1.0.mp4">Đồ thị Euler phần 3</a></li>
                </ul>
                <b>Hamilton</b>
                
                <ul>
                    <li><a href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai2_P6_v1.0.mp4" target="_blank">Đồ thị Hamilton 1</a></li>
                    <li><a href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai2_P7_v1.0.mp4" target="_blank">Đồ thị Hamilton 2</a></li>
                </ul>
                <b>Tìm đường đi ngắn nhất</b>
                <ul>
                    <li><a href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai2_P8_v1.0.mp4" target="_blank">Đường đi ngắn nhất</a></li>
                    <li><a href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai2_P9_v1.0.mp4" target="_blank">Thuật toán Dijkstra</a></li>
                    <li><a href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai2_P10_v1.0.mp4" target="_blank">Thuật toán Ford Bellman - Thuật toán Floyd</a></li>
                </ul>
                
            `],
            ['Video thực hành', 'LTDT242', `
                <b>Thực hành</b> <br>
                <h5>Euler</h5>
                <ul>
                    <li><a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/ThucHanh/220100_TH2_P1_v1.0.mp4">Bậc của đỉnh</a></li>
                    <li><a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/ThucHanh/220100_TH2_P2_v1.0.mp4">Kiểm tra liên thông phần 1</a></li>
                    <li><a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/ThucHanh/220100_TH2_P3_v1.0.mp4">Kiểm tra liên thông phần 2</a></li>
                    <li><a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/ThucHanh/220100_TH2_P4_v1.0.mp4">Duyệt theo chiều sâu BFS Stack</a></li>
                    <li><a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/ThucHanh/220100_TH2_P5_v1.0.mp4">Duyệt theo chiều rộng BFS Queue</a></li>
                    <li><a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/ThucHanh/220100_TH2_P6_v1.0.mp4">DFS - BFS</a></li>
                    <li><a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/ThucHanh/220100_TH2_P7_v1.0.mp4">Đồ thị Euler phần 1</a></li>
                    <li><a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/ThucHanh/220100_TH2_P9_v1.0.mp4">Đồ thị Euler phần 2</a></li>
                    <li><a target="_blank" href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/ThucHanh/220100_TH2_P10_v1.0.mp4">Đồ thị Euler phần 3</a></li>
                </ul>
                <h5>Hamilton</h5>
                <ul>
                    <li>Đồ thị Hamilton
                        <br>
                        <ul>
                            <li><a href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/ThucHanh/220100_TH2_P11_v1.0.mp4" target="_blank">Phần 1</a></li>
                            <li><a href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/ThucHanh/220100_TH2_P12_v1.0.mp4" target="_blank">Phần 2</a></li>
                        </ul>
                    </li>
                    <li>Thuật toán Dijkstra
                        <br>
                        <ul>
                            <li><a href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/ThucHanh/220100_TH2_P13_v1.0.mp4" target="_blank">Phần 1</a></li>
                            <li><a href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/ThucHanh/220100_TH2_P14_v1.0.mp4" target="_blank">Phần 2</a></li>
                            <li><a href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/ThucHanh/220100_TH2_P15_v1.0.mp4" target="_blank">Phần 3</a></li>
                        </ul>
                    </li>
                </ul>
            `],
            ['Ghi chú', 'LTDT243', `
                <br>
                <p><b>Euler</b></p>
                Để xác định đồ thị tồn tại đường đi Euler <=> không có quá 2 đỉnh có bậc lẻ => nếu không có đỉnh nào có bậc lẻ thì có chu trình Euler <br>
                <p><b>Hamilton</b></p>
                Đề xác định đồ thị n đỉnh (n&ge;3) tồn tại đường đi Hamilton <=> mọi đỉnh G có bậc không nhỏ hơn (n-1)/2 <br>
                Đề xác định đồ thị G gồm n đỉnh (n&ge;3) tồn tại chu trình Hamilton <=> &forall;u,v&isin;G có deg(u)+deg(v)&ge;n, với cặp u,v bất kỳ không kề nhau. <br>
                <p><b>Bài toán tìm đường đi ngắn nhất</b></p>
                <ul>
                    <li>Thuật toán Dijkstra: tìm đường đi ngắn nhất của đồ thị trọng số không âm</li>
                    <li>Thuật toán Ford-Bellman: tìm đường đi ngắn nhất của đồ thị có trọng số âm</li>
                </ul>
            `]
        ]
    }
};