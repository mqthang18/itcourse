let url_XLA2 =  `https://s3.cloud.cmctelecom.vn/tvu/IT/220057_XuLyAnh/Video/Chuong02.mp4`


XLA2 = {
    XLA01: {
        title: 'Nguyên tắc cơ bản về màu sắc',
        index: [
            ['Video', 'XLA011', VideoScript(`${url_XLA2}#t=50,129`)]
        ]
    },
    XLA02: {
        title: 'Hệ màu RGB',
        index: [
            ['Video', 'XLA021', VideoScript(`${url_XLA2}#t=129,262`)]
        ]
    },
    XLA03: {
        title: 'Hệ màu CMY và CMYK',
        index: [
            ['Video', 'XLA031', VideoScript(`${url_XLA2}#t=262,420`)]
        ]
    },
    XLA04: {
        title: 'Không gian màu HSV',
        index: [
            ['Video', 'XLA041', VideoScript(`${url_XLA2}#t=420,454`)]
        ]
    },
    XLA05: {
        title: 'Biến đổi màu trong xử lý ảnh',
        index: [
            ['Chuyển đổi RGB sang CMYK', 'XLA051', VideoScript(`${url_XLA2}#t=454,535`)],
            ['Chuyển đổi CMYK sang RGB', 'XLA052', VideoScript(`${url_XLA2}#t=535,581`)],
            ['Chuyển RGB sang HSV và ngược lại', 'XLA053', VideoScript(`${url_XLA2}#t=581`)],
        ]
    }
}