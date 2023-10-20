let url_XLA3 = `https://s3.cloud.cmctelecom.vn/tvu/IT/220057_XuLyAnh/Video/Chuong03.mp4`


XLA3 = {
    XLA01: {
        title: 'Miền không gian',
        index: [
            ['Định nghĩa', 'XLA011', VideoScript(`${url_XLA3}#t=86,175`)],
            ['Xử lý ảnh trong python', 'XLA012', VideoScript(`${url_XLA3}#t=175,484`)],
            ['Các kỹ thuật xử lý ảnh thường được dùng', 'XLA013', VideoScript(`${url_XLA3}#t=484,543`)],
            ['Mức xám', 'XLA014', VideoScript(`${url_XLA3}#t=543,704`)],
            ['Histogram', 'XLA015', VideoScript(`${url_XLA3}#t=704,800`)],
            ['Xử lý theo ngưỡng', 'XLA016', VideoScript(`${url_XLA3}#t=800,886`)],
            ['Ứng dụng', 'XLA016', VideoScript(`${url_XLA3}#t=886,960`)],
            ['Lọc không gian và các ứng dụng của nó', 'XLA017', VideoScript(`${url_XLA3}#t=960,1055`)],
        ]
    },
    XLA02: {
        title: 'Miền tần số',
        index: [
            ['Định nghĩa và giới thiệu', 'XLA021', VideoScript(`${url_XLA3}#t=1055,1229`)]
        ]
    },
    XLA03: {
        title: 'Các hàm biến đổi cường độ sáng cơ bản',
        index: [
            ['Giới thiệu', 'XLA031', VideoScript(`${url_XLA3}#t=1229,1329`)],
            ['Biến đổi âm bản (Digital Negative)', 'XLA032', VideoScript(`${url_XLA3}#t=1329,1593`)],
            ['Biến đổi logarit', 'XLA033', VideoScript(`${url_XLA3}#t=1593,1934`)],
            ['Biến đổi Power-Law (Gamma)', 'XLA034', VideoScript(`${url_XLA3}#t=1934,2109`)],
            ['Biến đổi Piecewise-Linear', 'XLA035', VideoScript(`${url_XLA3}#t=2109,2355`)],
            ['Cắt Bit-plane', 'XLA036', VideoScript(`${url_XLA3}#t=2355,2558`)],
            ['Cân bằng Histogram', 'XLA037', VideoScript(`${url_XLA3}#t=2558,2755`)],
        ]
    },
    XLA04: {
        title: 'Lọc trong miền không gian',
        index: [
            ['Giới thiệu', 'XLA041', VideoScript(`${url_XLA3}#t=2755,2818`)],
            ['Bộ lọc trung vị (Median filter)', 'XLA042', VideoScript(`${url_XLA3}#t=2818,2931`)],
            ['Bộ lọc trung bình (Mean filter)', 'XLA043', VideoScript(`${url_XLA3}#t=2931,3118`)],
            ['Bộ lọc Gaussian', 'XLA044', VideoScript(`${url_XLA3}#t=3118,3206`)],
            ['Bộ lọc Laplacian', 'XLA045', VideoScript(`${url_XLA3}#t=3206,3330`)],
            ['Bộ lọc Sobel', 'XLA046', VideoScript(`${url_XLA3}#t=3330,3557`)]
        ]
    },
    XLA05: {
        title: 'Tương quan trong miền không gian',
        index: [
            ['Giới thiệu và định nghĩa', 'XLA051', VideoScript(`${url_XLA3}#t=3557,3644`)]
        ]
    },
    XLA06: {
        title: 'Tích chập trong miền không gian',
        index: [
            ['Giới thiệu và định nghĩa', 'XLA061', VideoScript(`${url_XLA3}#t=3644`)]
        ]
    },
}