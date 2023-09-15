let url_PTUDWMNM05 = `https://s3.cloud.cmctelecom.vn/tvu/IT/220243_PhatTrienUDWebVoiMaNguonMo/Video/Bai5.mp4`

const PTUDWMNM5 = {
    PTUDWMNM01: {
        title: 'Lý thuyết các thao tác',
        index: [
            ["Tạo table", "PTUDMNM011", VideoScript(`${url_PTUDWMNM05}#t=38,61`)],
            ["SELECT, INSERT", "PTUDMNM012", VideoScript(`${url_PTUDWMNM05}#t=61,325`)],
            ["UPDATE, DELETE", "PTUDMNM013", VideoScript(`${url_PTUDWMNM05}#t=325,438`)],
            ["PREPARE STATEMENT", "PTUDMNM014", VideoScript(`${url_PTUDWMNM05}#t=438,498`)],
            ["Sửu dụng PDO", "PTUDMNM015", VideoScript(`${url_PTUDWMNM05}#t=498,573`)],
        ]
    },
    PTUDWMNM02: {
        title: 'Demo sản phẩm',
        index: [
            ["Nội dung", "PTUDWMNM021", VideoScript(`${url_PTUDWMNM05}#t=573`)]
        ]
    },
    PTUDWMNM03: {
        title: 'Tổng kết',
        index: [
            ["Video bài giảng", "PTUDWMNM051", `
            <p>Video bài giảng: <a href="${url_PTUDWMNM05}">Link</a></p>
            `]
        ]
    }
}