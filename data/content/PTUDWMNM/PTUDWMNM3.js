let url_PTUDWMNM3 = `https://s3.cloud.cmctelecom.vn/tvu/IT/220243_PhatTrienUDWebVoiMaNguonMo/Video/Bai3.mp4`
const PTUDWMNM3 = {
    PTUDWMNM01: {
        title: 'Lý thuyết',
        index: [
            ["Giới thiệu XAMPP, PHP, MySQL", "PTUDWMNM011", VideoScript(`${url_PTUDWMNM3}#t=33,220`)],
            ["XAMPP", "PTUDWMNM012", VideoScript(`${url_PTUDWMNM3}#t=220,346`)],
            ["PHP và MYSQL", "PTUDWMNM013", VideoScript(`${url_PTUDWMNM3}#t=346,394`)],
            ["Xây dựng web với php", "PTUDWMNM014", VideoScript(`${url_PTUDWMNM3}#t=394,497`)],
            ["Biến, toán tử, cấu trúc lập trình với PHP", "PTUDWMNM015", VideoScript(`${url_PTUDWMNM3}#t=497,732`)],
            ["Biến, toán tử, cấu trúc lập trình với PHP", "PTUDWMNM016", VideoScript(`${url_PTUDWMNM3}#t=732,780`)]
        ]
    },
    PTUDWMNM02: {
        title: 'Thực hành tạo demo',
        index: [
            ["Nội dung", "PTUDWMNM021", VideoScript(`${url_PTUDWMNM3}#t=780`)]
        ]
    },
    PTUDWMNM03: {
        title: 'Tổng kết',
        index: [
            ["Video bài giảng", "PTUDWMNM031", `
            <p>Video bài giảng: <a href="${url_PTUDWMNM3}">Link</a></p>
            `]
        ]
    }
}