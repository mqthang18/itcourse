const LTDT03 = {
    'LTDT01': {
        'title': `Đồ thị phẳng`,
        'index': [
            ['Định nghĩa', 'LTDT01', `
            <ul>
                <li>Một đồ thị được gọi là phẳng nếu nó có thể vẽ được trên một mặt phẳng mà không có các cạnh nào cắt nhau.</li>
                <li>Ví dụ:
                    <center>
                        <img style="width: 100%;" src="./assets/img/LTDT/3/dinhnghia-dothiphang.jpg" alt="dinh-nghia">
                    </center>
                </li>
                <li>
                    Ví dụ <br>
                    Đồ thị Q<sub>3</sub> sau đây có phải đồ thị phẳng?
                    <br>
                    <center>
                        <img style="width: 100%;" src="./assets/img/LTDT/3/q3_dothiphang.jpg" alt="q3_dothiphang">
                    </center>
                </li>
                <li>
                    <b>Bài toán "Ba nhà ba giếng"</b>
                    <br>
                    <span style="text-indent: 5px;">K<sub>3,3</sub> có đồ thị phẳng?</span>
                    <br>
                    <center>
                        <img style="width: 100%;" src="./assets/img/LTDT/3/k33_dothiphang.jpg" alt="k33_dothiphang">
                    </center>
                </li>
                <li>
                    <b>Bài toán "Ba nhà ba giếng"</b>
                    <br>
                    <span style="text-indent: 5px;">K<sub>3,3</sub> có phải đồ thị phẳng?</span>
                    <br>
                    <center>
                        <img style="width: 100%;" src="./assets/img/LTDT/3/ba_nha_ba_gieng.jpg" alt="ba_nha_ba_gieng">
                    </center>
                    <br>
                    => K<sub>3,3</sub> không phải đồ thị phẳng
                </li>
                <li>Đồ thị đồng phôi
                    <br>
                    <ul>
                        <li>Hai đồ thị được gọi là đồng phôi nếu mỗi đồ thị có được từ đồ thị kia bằng cách thực hiện một dãy các phép biến đổi đồng phôi</li>
                        <li>Các phép biến đổi đồng phôi gồm:
                            <br>
                            <ul>
                                <li>Thêm 1 đỉnh nằm trên một cạnh</li>
                                <li>Gộp 2 cạnh chung đinh bậc 2 thành một cạnh</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <b>Đồ thị đồng phôi:</b>
                    <br>
                    Ví dụ: các đồ thị đồng phôi <br>
                    <center>
                        <img style="width: 100%;" src="./assets/img/LTDT/3/cac_do_thi_dong_phoi.jpg" alt="cac_do_thi_dong_phoi">
                    </center>
                </li>
                <li>
                    <b>Các phép rút gọn cơ bản</b>
                    <br>
                    <p>Tính phẳng của một đồ thị không thay đổi nếu thực hiện hay nhiều lần các phép rút gọn sau đây</p>
                    <ul>
                        <li>Bỏ đi các khuyên</li>
                        <li>Bỏ bớt các cạnh song song, chỉ giữ lại một cạnh nối hai đỉnh</li>
                        <li>Gộp hai cạnh có chung đỉnh bậc 2 thành một cạnh</li>
                        <li>Tính phẳng của một đồ thị không thay đổi nếu thực hiện một hay nhiều lần các phép rút gọn sau đây:
                            <ul>
                                <li>Bỏ đi các khuyên</li>
                                <li>Bỏ bớt các cạnh song song, chi giữ lại một cạnh nối hai đỉnh</li>
                                <li>Gộp hai cạnh có chung đỉnh bậc 2 thành một cạnh</li>
                                <li>Ví dụ:

                                    <br>
                                    <center>
                                        <img style="width: 100%;" src="./assets/img/LTDT/3/vidu_cacpheprutgoncoban.jpg" alt="vidu_cacpheprutgoncoban">
                                    </center>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            `],
            ['Định lý Kuratowski', 'LTDT02', `
            <ul>
                <li>
                    Đồ thị là không phẳng khi và chỉ khi nó chứa một đồ thị con đồng phôi với K<sub>3,3</sub> hoặc K<sub>5</sub>
                    <br>
                    <center>
                        <img style="width: 100%;" src="./assets/img/LTDT/3/dinhly_kuratowski.jpg" alt="dinhly_kuratowski">
                    </center>
                </li>
                <li>
                    K<sub>5</sub> và K<sub>3,3</sub> là các đồ thị không phẳng đơn giản nhất, vì khi xóa bất kỳ đỉnh hoặc cạnh của các đồ thị này sẽ nhận được đồ thị phẳng
                    <br>
                    <ul>
                        <li>K<sub>5</sub> là đồ thị không phẳng ít đỉnh nhất</li>
                        <li>K<sub>3,3</sub> là đồ thị không phẳng ít cạnh nhất</li>
                    </ul>
                </li>
            </ul>
            `],
            ['Công thức Euler', 'LTDT03', `
                <ul>
                    <li>Ví dụ: các đồ thị sau có là đồ phẳng hay không?
                        <center>
                            <img style="width: 100%;" src="./assets/img/LTDT/3/dothiphang_kuratowski.jpg" alt="dothiphang_kuratowski">
                        </center>
                    </li>
                </ul>
            `],
            ['Công thức Euler', 'LTDT04', `
            <ul>
                <li>Nếu một đồ thị phẳng liên thông có n đỉnh, e cạnh</li>
                <li>Giả sử biểu diễn phẳng của G chia mặt phẳng ra thành d miền</li>
                <li>Ta có công thức:
                    <br>
                    <center>d = e - n + 2</center>
                    <ul>
                        <li>Đây là “hệ thức Euler cho hình đa diện”, mỗi hình đa diện có thể coi là một đồ thị phẳng</li>
                        <li>Ví dụ <br>
                            Cho G là một đơn đồ thị liên thông có 8 đỉnh và mỗi đỉnh đều có bậc là 3.
                            <br>
                            Khi đó biểu diễn phẳng của đồ thị sẽ chia mặt phẳng thành bao nhiêu miền?
                            <br>
                            <u>Giải</u>
                            <ul>
                                <li>Ta có: n = 8, theo giả thiết mỗi bậc có đỉnh bằng 3 nên ta có tổng số bậc của đỉnh: 3n = 8 x 3 = 24</li>
                                <li>Mà tổng số bậc của đỉnh = 2e => 2e = 24 => e = 12</li>
                                <li>Suy ra số miền của G: d = e - n + 2 = 12 = 8 + 2 = 6</li>
                            </ul>
                        </li>
                        <li>
                            Hệ quả 1
                            <br>
                            <ul>
                                <li>Nếu G là đơn đồ thị, phẳng, liên thông, gồm n đỉnh (n &eg; 3) và e cạnh (với e &gt; 2). Khi đó ta có: 
                                    <center>e &gt; 3n - 6</center>
                                </li>
                            </ul>
                        </li>
                        <li>Ví dụ
                            <br>
                            <p>Chứng minh rằng đồ thị K<sub>5</sub> không là đồ thị phẳng</p>
                        </li>
                        <li>
                            <b>Giải</b>
                            <br>
                            <ul>
                                <li>Ta có đồ thị K<sub>5</sub> có 5 đỉnh và 10 cạnh</li>
                                <li>Mà theo hệ quả e &lt; 3n - 6 thì 10 &lt; 3x5 - 6 (vô lý)</li>
                                <li>Do đó K<sub>5</sub> không là đồ thị phẳng</li>
                            </ul>
                        </li>
                        <li>
                            <b>Hệ quả 2</b>
                            <br>
                            <span style="text-indent: 5px;">Trong một đồ thị phẳng liên thông tùy ý, luôn tồn tại ít nhất 1 đỉnh có bậc không vượt quá 5</span>
                        </li>
                        <li>
                            <b>Hệ quả 3</b>
                            <br>
                            <span style="text-indent: 5px;">Giả sử G là đơn đồ thị phẳng liên thông với n đỉnh và e cạnh và không chứa chu trình đơn độ dài 3. Khi đó</span>
                            <center>
                                e &lt; 2n - 4
                            </center>
                        </li>
                        <li>
                            <b>Ví dụ</b>
                            <br>
                            <span style="text-indent: 15px;">Chứng minh rằng K<sub>3,3</sub> không là đồ thị phẳng</span>
                            <center>
                                <img style="width: 100%;" src="./assets/img/LTDT/3/k33_dothiphang1.jpg" alt="k33_dothiphang1">
                            </center>
                            <b>Giải</b>
                            <ul>
                                <li>Ta có, K<sub>3,3</sub> không có chu trình độ dài 3</li>
                                <li>Hơn nữa, K<sub>3,3</sub> có 6 đỉnh và 9 cạnh</li>
                                <li>Theo hệ quả, ta có e &lt; 2n-4 -> 9 &lt; 2x6 - 4 (vô lý). Điều này không thỏa hệ thỏa quả 3 => Do đó K<sub>3,3</sub> không là đồ thị phẳng.</li>
                            </ul>
                        </li>
        
                    </ul>
                </li>
            </ul>
            `]
        ]
    },
    'LTDT02': {
        'title': `Tô màu đồ thị`,
        'index': [
            ['Mở đầu', 'LTDT021', `
            <p><b>Bài toán</b>: Xác định số màu tối thiểu cần có để tô màu một bản đồ sao cho hai miền kề nhau có màu khác nhau</p>
            <center>
                <img style="width: 100%;" src="./assets/img/LTDT/3/to_mau_do_thi.jpg" alt="to_mau_do_thi">
            </center>
            
            `],
            ['Giới thiệu', 'LTDT022', `
            <ul>
                <li>Mỗi bản đồ trên mặt phẳng có thể biểu diễn bằng một đồ thị:
                    <ul>
                        <li>Mỗi miền của bản đồ -> một đỉnh</li>
                        <li>Nếu hai miền có chung biên giới -> cạnh nối giữa hai đỉnh
                            <br>
                            <span style="text-indent: 20px">Hai miền chung nhau chỉ một điểm, không được coi là kề nhau</span>
                        </li>
                        <li>Đồ thị nhận được là <span style="color:red;">đồ thị đối ngẫu</span> của bản đồ đang xét</li>
                        <li>Bản đồ
                            <br>
                            <center>
                                <img style="width: 100%;" src="./assets/img/LTDT/3/dothidoingau.jpg" alt="bando">
                            </center>
                        </li>
                        <li>Đồ thị đối ngẫu
                            <br>
                            <center>
                                <img style="width: 100%;" src="./assets/img/LTDT/3/doithidoingau.jpg" alt="doithidoingau">
                            </center>
                        </li>
                        <li>
                            Định nghĩa: 
                            <br>
                            <ul>
                                <li>Tô màu đồ thị là một cách gắn cho mỗi đỉnh của đồ thị một màu, sao cho 2 đỉnh kề nhau phải có màu khác nhau</li>
                                <li>Số màu ít nhất cần dùng để tô màu đồ thị G được gọi là <span style="color: red;">sắc số</span> của đồ thị G, ký hiệu là &chi;(G)</li>
                            </ul>
                        </li>
                        <li>Ví dụ
                            <br>
                            Cần bao nhiều màu để tô cho đồ thị sau
                            <br>
                            <center>
                                <img style="width: 100%;" src="./assets/img/LTDT/3/vd_tomauchodothi.jpg" alt="VD_tomauchodothi">
                            </center>
                        </li>
                        <li>
                            Ta thấy
                            <br>
                            4 đỉnh b, d, g, e đôi một kề nhau nên phải được tô bằng 4 màu khác nhau. Do đó &chi;(G) = 4
                            <br>
                            <center>
                                <img style="width: 100%;" src="./assets/img/LTDT/3/vd_tomaudothi0.jpg" alt="vd_tomaudothi0">
                            </center>
                        </li>
                    </ul>
                </li>
            </ul>
            `],
            ['Các định lý', 'LTDT023', `
            <ul>
                <li><span style="color: red;">Định lý 1</span> Mọi chu trình độ dài lẻ đều có sắc số là 3</li>
                <li>Chứng minh
                    <br>
                    <ul>
                        <li>Giả sử &alpha; là 1 chu trình đồ dài lẻ tùy ý. Khi đó, tồn tại một số tự nhiên n để |&alpha;|=2n+1</li>
                        <li>Giả sử dãy các đỉnh của &alpha; là V = {v<sub>1</sub>, v<sub>2</sub>, ..., v<sub>2n</sub>, v<sub>2n+1</sub>}. Ta sẽ chứng minh khẳng trên bằng quy nạp theo n</li>
                        <li>
                            <b>Trường hợp cơ sở</b>: với n = 1. Chu trình &alpha; gồm 3 đỉnh v<sub>1</sub>, v<sub>2</sub>, v<sub>3</sub>. Do mỗi đỉnh v<sub>1</sub> (1 &le; i &le; 3) đều kề với 2 đỉnh còn lại -> phải dùng đúng 3 màu khác nhau để tô cho &alpha;
                        </li>
                        <li><b>Giả thiết quy nạp</b>: Giả sử khẳng định đã đúng với n &le; k, nghĩa là với một chu trình &alpha;<sub>1</sub> tùy ý với độ dài 2n+1 (1 &le;n&le;k) đều có sắc số bằng 3. Ta chỉ cần chỉ ra rằng với n = k + 1 khẳng định vẫn đúng. Nghĩa là chu trình &alpha; có độ dài 2(k+1) + 1 cũng có sắc số bằng 3</li>
                        <li>Giả sử &alpha; là chu trình có độ dài lẻ tùy ý có độ dài bằng 2(k+1)+1 và có tập đỉnh: V = {v<sub>1</sub>, v<sub>2</sub>,...,v<sub>2k</sub>,v<sub>2k+1</sub>,v<sub>2k+2</sub>,v<sub>2k+3</sub>}
                        <br>
                        <center>
                            <img style="width: 100%;" src="./assets/img/LTDT/3/motsochutrinh_1.jpg" alt="motsochutrinh_1">
                        </center>
                        </li>
                        <li>
                            Nối đỉnh v<sub>1</sub> với đỉnh v<sub>2k+1</sub> ta được chu trình &alpha;<sub>1</sub> với độ dài lẻ là 2k + 1. Theo giả thuyết qua nạp thì &alpha;<sub>1</sub> có sắc số là 3 và hai đỉnh v<sub>1</sub> và v<sub>2k+1</sub> phải có màu khác nhau
                            <br>
                            <center>
                                <img style="width: 100%;" src="./assets/img/LTDT/3/dinhlytomau.jpg" alt="dinhlytomau">
                            </center>
                        </li>
                        <li>Vậy sắc số của &alpha; là 3
                            <center>
                                <img style="width: 100%;" src="./assets/img/LTDT/3/dinhlytomau.jpg" alt="dinhlytomau">
                            </center>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul>
                <li><span style="color: red;">Định lý 2</span>: Đồ thị G có sắc số là 2 khi và chỉ khi G không có chu trình đồ dài lẻ</li>
                <li><b>Chứng minh</b>
                    <br>
                    <ul>
                        <li><b>Điều kiện cần</b>
                            <br>
                            <ul>
                                <li>Giả sử sắc số G là 2, nhưng trong G lại có một chu trình lẻ &alpha;</li>
                                <li>Khi đó theo định lý 1, sắc số của &alpha; phải là 3</li>
                                <li>Ta suy ra điều mâu thuẫn với giả thuyết, nên G không có chu trình độ dài lẻ</li>
                            </ul>
                        </li>
                        <li>
                            <b>Điều kiện đủ</b>: Giả sử đồ thị G không có chu trình độ dài lẻ. Ta cần chứng minh rằng đồ thị G có sắc số là 2
                        </li>
                        <li>
                            Tô các đỉnh của G: <br>
                            <ul>
                                <li>Tô màu M<sub>1</sub> cho đỉnh w bất kỳ, w &isin;V</li>
                                <li>Nếu u &isin; V đã được tô bằng màu M<sub>1</sub>, ta sẽ dùng màu M<sub>2</sub> để tô cho tất cả các đỉnh kề với u. Và ngược lại nếu u &isin; V nào đó đã được tô bằng M<sub>2</sub>, ta sẽ dùng màu M<sub>1</sub> để tô cho tất cả các đỉnh kề với u</li>
                            </ul>
                        </li>
                        <li>Vì G hữu hạn nên tất cả các đỉnh của G sẽ được tô màu, và mỗi đỉnh của G không thể cùng lúc vừa được tô màu bằng M<sub>1</sub> vừa được tô bằng M<sub>2</sub></li>
                        <li>Thật vậy, giả sử trong G tồn tại đỉnh v mà vừa được tô bằng M<sub>1</sub> đồng thời cũng được tô bằng M<sub>2</sub></li>
                        <li>Khi đó v phải kề với đỉnh s được tô bằng M<sub>1</sub> và đỉnh t được tô bằng M<sub>2</sub>, nên khi đó các đỉnh v,s,t phải nằm trên một chu trình đồ dài lẻ. Như vậy mâu thuẫn với giả thuyết nên đỉnh v không tồn tại</li>
                        <li>Định lý đã được chứng minh
                            <ul>
                                <li>Khi n chẵn, chẳng hạn n = 6: C<sub>6</sub>: không có chu trình lẻ</li>
                                <li>&chi;(C<sub>6</sub>) = 2
                                <center>
                                    <img style="width: 100%;" src="./assets/img/LTDT/3/dinhlyvetomau.jpg" alt="dinhlyvetomau">
                                </center>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>Khi n lẻ, chẳng hạn n = 5: C<sub>5</sub> có chứa chu trình lẻ</li>
                                <li>&chi;(C<sub>5</sub>) = 3
                                    <center>
                                        <img style="width: 100%;" src="./assets/img/LTDT/3/dinhlytomau1.jpg" alt="dinhlytomau1">
                                    </center>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span style="color: orange;">Định lý 5 màu của Kempe-Heawood:</span>: Mọi đồ thị phẳng đều có thể tô đúng bằng 5 màu
                        </li>
                        <li>
                            <span style="color: orange;">Định lý bốn màu của Appel-Haken:</span> Mọi đồ thị phẳng đều có số không lớn hơn 4
                        </li>
                        <li>
                            <span style="color: orange;">Định lý 5 màu của Kempe-Heawood:</span> Mọi đồ thị phẳng đều có thể tô đúng bằng 5 màu
                        </li>
                        <li>
                            Chứng minh
                            <br>
                            <ul>
                                <li>Trường hợp n = 5 là hiển nhiên. Giả sử định lý đúng cho tất cả các đồ thị phẳng có số đỉnh nhỏ hơn n</li>
                            </ul>
                        </li>
                        <li>
                            <span style="color: orange;">Định lý 5 màu của Kempe-Heawood:</span> Mọi đồ thị phẳng đều có thể tô đúng bằng 5 màu
                        </li>
                        <li>
                            <b>Chứng minh</b>
                            <br>
                            <ul>
                                <li>Xét G phẳng, liên thông, còn n đỉnh</li>
                                <li>Trong G tồn tại đỉnh a với deg(a)&le;5. Xóa đỉnh a và các cạnh liên thuộc với nó, ta được đồ thị phẳng G' có n-1 đỉnh. Theo giả thiết quy nạp, có thể tô đúng các đỉnh của G' bằng 5 màu.</li>
                                <li>Sau khi tô đúng G' rồi, ta tìm cách tô đỉnh a bằng một màu khác nhau với màu của các đỉnh kề nó, những vẫn là một trong 5 màu đã dùng. Điều này luôn thực hiện được khi deg(a)&lt;5 hoặc khi deg(a)=5 nhưng 5 đỉnh kề a đã được tô bằng 4 màu trở xuống.</li>
                                <li>Còn trường hợp deg(a)=5 mà 5 đỉnh kề là b,c,d,e,f đã được tô bằng 5 màu rồi. Khi đó trong 5 đỉnh b,c,d,e,f phải có 2 đỉnh không kề nhau, vì nếu 5 đỉnh đó đôi một kề nhau thì đỉnh b,c,d,e,f là đồ thị đầy đủ K<sub>5</sub> và đây là một đồ thị không phẳng, do đó G không phẳng, trái với giả thiết.</li>
                                <li>Chứng minh
                                    <center>
                                        <img style="width:100%;" src="./assets/img/LTDT/3/chungminh_dinhly5mau.jpg" alt="chungminh_dinhly5mau">
                                    </center>
                                    <br>
                                    <ul>
                                        <li>Giả sử b và d không kề nhau</li>
                                        <li>Xóa 2 đỉnh b và d và cho kề a những đỉnh trước đó kề b hoặc kề d mà không kề a, ta được đồ thị mới G" có n-2 đỉnh</li>
                                        <li>Theo giả thiết quy nạp, ta có thể tô đúng G" bằng 5 màu</li>
                                    </ul>
                                    <center>
                                        <img style="width:100%;" src="./assets/img/LTDT/3/dinhlyvetomau2.jpg" alt="dinhlyvetomau2">
                                    </center>
                                </li>
                                <li>
                                    Sau khi các đỉnh G" được tô đúng rồi, ta dựng lại 2 đỉnh b và d, rồi tô b và d bằng màu đã tô cho a (màu 1), còn a thì được tô lại bằng màu khác với màu của b, c, d, e, f. Vì b và d không kề nhau đã được tô bằng cùng màu 1, nên với 5 đỉnh này chỉ mới dùng hết nhiều lắm 4 màu. Do đó G được tô đúng bằng 5 màu
                                    <br>
                                    Chứng minh 
                                    <br>
                                    <center>
                                        <img style="width:100%;" src="./assets/img/LTDT/3/dinhlyvetomau3.jpg" alt="dinhlyvetomau3">
                                    </center>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span style="color: orange;">Định lý 4 màu của Appel-Haken:</span> Mọi đồ thị phẳng đều có sắc tố không lớn hơn 4
                            <br>
                            <b>Sắc số của một số đồ thị cơ bản</b>
                            <ul>
                                <li>Đồ thị lưỡng phân đủ có sắc số là 2</li>
                                <li>Đồ thị vòng có sắc số là 2 nếu số đỉnh n chẵn, là 3 nếu số đỉnh n lẻ</li>
                                <li>Đồ thị bánh xe (n &ge; 4) có sắc số là 4 nếu số đỉnh n chẵn, là 3 nếu số đỉnh n lẻ.</li>
                                <li>Đồ thị đầy đủ K<sub>n</sub> có sắc số là n</li>
                                <li>Đồ thị lưỡng phân đủ có sắc só là 2
                                    <br>
                                    <img style="width: 100%;" src="./assets/img/LTDT/3/dothiluongphandu.jpg" alt="dothiluongphandu">
                                </li>
                                <li>Đồ thị vòng có sắc số là 2 nếu số đỉnh n chẵn, là 3 nếu số đỉnh n lẻ
                                    <br>
                                    <img style="width: 100%;" src="./assets/img/LTDT/3/dinhlytomau3.jpg" alt="dinhlytomau3">
                                </li>
                                <li>Đồ thị bánh xe (n &ge; 4) có sắc số là 4 nếu số đỉnh n chẵn, là 3 nếu số đỉnh n lẻ
                                    <br>
                                    <center>
                                        <img style="width: 100%;" src="./assets/img/LTDT/3/dothicoban.jpg" alt="dothicoban">
                                    </center>
                                </li>
                                <li>Đồ thị đầy đủ K<sub>n</sub> có sắc số là n
                                <br>
                                <center>
                                    <img style="width:100%;" src="./assets/img/LTDT/3/sacso_dothicoban.jpg" alt="sacso_dothicoban">
                                </center>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            `],
            ['Giải thuật tô màu', 'LTDT024', `
            <ul>
                <li>Sắp xếp các đỉnh đồ thị theo thứ tự bậc giảm dần</li>
                <li>Dùng màu k để tô cho đỉnh đầu tiên và các đỉnh liên tiếp trong danh sách mà không kề với đỉnh đầu. Loại những đỉnh đã tô khỏi danh sách</li>
                <li>Trở lại đầu danh sách, tô màu k+1 cho đỉnh chưa được tô và lặp lại quá trình trên cho đến khi tất cả các đỉnh đều được tô màu</li>
                <li>Ví dụ: tô màu cho đồ thị
                    <br>
                    <center>
                        <img style="width: 100%;" src="./assets/img/LTDT/3/tomauchodothi.jpg" alt="tomauchodothi">
                    </center>
                </li>
                <li>Tính và sắp xếp các đỉnh theo thứ tự bậc giảm dần</li>
                <li>Tô màu 1 cho b, e. Các đỉnh còn lại: {c,d,a}</li>
                <li>Tô màu 2 cho c. Các đỉnh còn lại: {d,a}</li>
                <li>Tô màu 3 cho d, a</li>
                <li>Vậy dùng tất cả 3 màu để tô</li>
            </ul>
            <center>
                <img style="width: 100%;" src="./assets/img/LTDT/3/giaithuattomau.jpg" alt="giaithuattomau">
            </center>
            `],
            ['Các ứng dụng', 'LTDT025', `
            <ul>
                    <li>Có 7 môn thi với thông tin sau:
                        <br>
                        <ul>
                            <li>Môn 1: có các sinh viên A, B, C và D thi</li>
                            <li>Môn 2: A, E, F, G và H thi</li>
                            <li>Môn 3: B, E, I, J và K thi</li>
                            <li>Môn 4: B, F, L và M thi</li>
                            <li>Môn 5: G, L, N và O thi</li>
                            <li>Môn 6: J, M, N và P thi</li>
                            <li>Môn 7: D, H, K, O và P thi</li>
                        </ul>
                    </li>
                    <li>Hãy xếp lịch thi cho các môn thi sao cho không có sinh viên nào thi hai môn cùng một lúc</li>
                    <li>Biểu diễn bằng đồ thị
                        <br>
                        <ul>
                            <li>mỗi môn học là một đỉnh</li>
                            <li>nếu 2 môn học nào được dự thi bởi cùng 1 sinh viên thì sẽ nổi bằng 1 cạnh</li>
                        </ul>
                    </li>
                    <li>Thời gian thi của mỗi môn được biểu thị bằng các màu khác nhau</li>
                    <li>Như vậy việc lập lịch thi sẽ tương ứng với việc tô màu đồ thị này</li>
                    <li>Ta biểu diễn bằng đồ thị như hình</li>
                    <li>Việc lập lịch thi chính là việc tô màu đồ thị này</li>
                    <li>Tính và sắp xếp các đỉnh theo thứ tự bậc giảm dần
                        <br>
                        <center>
                            <img style="width:100%;" src="./assets/img/LTDT/3/ungdung1.jpg" alt="ungdung1">
                        </center>
                        <ul>
                            <li>Tô màu 1 cho đỉnh 2,6. Các đỉnh còn lại: {3,4,7,1,5}</li>
                            <li>Tô màu 2 cho đỉnh 3,5. Các đỉnh còn lại: {4,7,1}</li>
                            <li>Tô màu 3 cho đỉnh 4,7. Còn đỉnh còn lại: {1}</li>
                            <li>Tô màu 4 cho đỉnh 1</li>
                        </ul>
                        <center>
                            <img style="width:100%;" src="./assets/img/LTDT/3/ungdung2.jpg" alt="ungdung2">
                        </center>
                    </li>
                    <li>Ta dùng tất cả 4 màu để tô màu cho đồ thị</li>
                    <li>Vậy có thể xếp lịch thi cho các môn vào 4 ngày thi như sau
                        <center>
                            <img style="width: 100%;" src="./assets/img/LTDT/3/ungdung3.jpg" alt="ungdung3">
                        </center>
                    </li>
                </ul>
            `],
        ]
    },
    'LTDT03': {
        'title': 'Video bài giảng',
        'index': [
            ['Video lý thuyết', 'LTDT031', `
                <b>Đồ thị phẳng</b>
                <br>
                <ul>
                    <li><a href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai3_P1_v1.0.mp4" target="_blank">Đồ thị phẳng 1</a></li>
                    <li><a href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai3_P2_v1.0.mp4" target="_blank">Đồ thị phẳng 2</a></li>
                </ul>
                <b>Tô màu đồ thị</b>
                <ul>
                    <li><a href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai3_P3_v1.0.mp4" target="_blank">Tô màu đồ thị 1</a></li>
                    <li><a href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai3_P4_v1.0.mp4" target="_blank">Tô màu đồ thị 2</a></li>
                </ul>
                <b>Giải thuật tô màu</b>
                <a href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/LyThuyet/220100_Bai3_P5_v1.0.mp4" target="_blank">Giải thuật tô màu</a>
            `],
            ['Video thực hành', 'LTDT032', `
                <ul>
                    <li><a href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/ThucHanh/220100_TH3_P1_v1.0.mp4" target="_blank">Phần 1</a></li>
                    <li><a href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/ThucHanh/220100_TH3_P2_v1.0.mp4" target="_blank">Phần 2</a></li>
                    <li><a href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/ThucHanh/220100_TH3_P3_v1.0.mp4" target="_blank">Phần 3</a></li>
                    <li><a href="https://s3.cloud.cmctelecom.vn/tvu/220100_LyThuyetDoThi/Video/ThucHanh/220100_TH3_P5_v1.0.mp4" target="_blank">Phần 4</a></li>
                </ul>
            `],
            ['Ghi chú', 'LTDT033', `
                <b>Các phép rút gọn</b> => Dùng để kiểm tra đồ thị phẳng hay không (handmade) <br>
                <b>Định lý Kuratowski</b> => Dùng để kiểm đồ thị phẳng hay không dựa trên tính các đồ thị con không đồng phôi với đồ thị K<sub>3,3</sub> và K<sub>5</sub><br>
                <b>Công thức Euler</b> => công thức liên hệ giữa miền, cạnh và đỉnh: domain = edge - number vertex + 2 => Dựa vào các hệ quả để chứng minh đồ thị phẳng hay không<br>
                <b>Tạo đồ thị đối ngẫu bằng cách xác định các đỉnh kề và cạnh chung các miền => chuyển thành các cạnh của đồ thị</b> 
                <b>Sắc số: số màu ít nhất dùng để tô màu đồ thị</b>
            `]
        ]
    }
};