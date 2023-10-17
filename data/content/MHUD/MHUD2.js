let url_MHUD2 = `https://s3.cloud.cmctelecom.vn/tvu/IT/220248_MayHocUngDung/Video/Bai2/`;

let MHUD2 = {
    MHUD01: {
        title: 'Đánh giá hiệu năng',
        index: [
            ['Phần 1', 'MHUD011', VideoScript(`${url_MHUD2}2.1_1.mp4`)],
            ['Phần 2', 'MHUD012', VideoScript(`${url_MHUD2}2.1_2.mp4`)],
        ]
    },
    MHUD02: {
        title: 'Xác xuất thống kê',
        index: [
            ['Phần 1', 'MHUD021', VideoScript(`${url_MHUD2}2.2_P1.mp4`)],
            ['Phần 2', 'MHUD022', VideoScript(`${url_MHUD2}2.2_P2.mp4`)],
        ]
    },
    MHUD03: {
        title: 'Kết thúc bài',
        index: [
            ['Video', 'MHUD03', VideoScript(`${url_MHUD2}KTB.mp4`)]
        ]
    }
}