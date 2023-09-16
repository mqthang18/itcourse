let url_PTUDWMNM2 = `https://s3.cloud.cmctelecom.vn/tvu/IT/220243_PhatTrienUDWebVoiMaNguonMo/Video/Bai2.mp4`

const PTUDWMNM2 = {
    PTUDWMNM01: {
        title: 'Giới thiệu Javascript',
        index: [
            ["Giới thiệu", "PTUDWMNM011", VideoScript(`${url_PTUDWMNM2}#t=51,102`)],
            ["Biến, khai báo biến", "PTUDWMNM012", VideoScript(`${url_PTUDWMNM2}#t=102,220`)],
            ["Kiểu dữ liệu, ép kiểu, operator", "PTUDWMNM013", VideoScript(`${url_PTUDWMNM2}#t=220,462`)],
            ["Cấu trúc điều khiển, lặp", "PTUDWMNM014", VideoScript(`${url_PTUDWMNM2}#t=462,570`)]
        ]
    },
    PTUDWMNM02: {
        title: 'Tương tác dữ liệu',
        index: [
            ["Định nghĩa hàm", "PTUDWMNM021", VideoScript(`${url_PTUDWMNM2}#t=570,639`)],
            ["Xử lý sự kiện", "PTUDWMNM022", VideoScript(`${url_PTUDWMNM2}#t=639,720`)],
        ]
    },
    PTUDWMNM03: {
        title: 'Thực hành demo',
        index: [
            ["Nội dung", "PTUDWMNM031", VideoScript(`${url_PTUDWMNM2}#t=720`)]
        ]
    },
    PTUDWMNM04: {
        title: 'Tổng kết',
        index: [
            ["Video bài giảng", "PTUDWMNM041", `
            <p>Video bài giảng: <a href="${url_PTUDWMNM2}">Link</a></p>
            `]
        ]
    }
}