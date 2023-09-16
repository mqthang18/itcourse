let url_PTUDWMNM4 = `https://s3.cloud.cmctelecom.vn/tvu/IT/220243_PhatTrienUDWebVoiMaNguonMo/Video/Bai4.mp4`
const PTUDWMNM4 = {
    PTUDWMNM01: {
        title: 'Một số khái niệm cơ bản',
        index: [
            ["FORM dữ liệu", "PTUDWMNM011", VideoScript(`${url_PTUDWMNM4}#t=63,107`)],
            ["Lấy dữ liệu từ FORM", "PTUDWMNM012", VideoScript(`${url_PTUDWMNM4}#t=107,198`)],
            ["Định dạng dữ liệu", "PTUDWMNM013", VideoScript(`${url_PTUDWMNM4}#t=198,223`)],
            ["CONNECTION, TẠO CSDL, TẠO BẢNG DỮ LIỆU", "PTUDWMNM014", VideoScript(`${url_PTUDWMNM4}#t=223,352`)],
            ["TẠO, XÓA CƠ SỞ DỮ LIỆU", "PTUDWMNM015", VideoScript(`${url_PTUDWMNM4}#t=352,403`)],
            ["TRUY VẤN DỮ LIỆU", "PTUDWMNM016", VideoScript(`${url_PTUDWMNM4}#t=403,444`)],
        ]
    },
    PTUDWMNM02: {
        title: 'Thực hành Demo',
        index: [
            ["Nội dung", "PTUDWMNM021", VideoScript(`${url_PTUDWMNM4}#t=444`)]
        ]
    },
    PTUDWMNM04: {
        title: 'Tổng kết',
        index: [
            ["Video bài giảng", "PTUDWMNM041", `
            <p>Video bài giảng: <a href="${url_PTUDWMNM4}">Link</a></p>
            `]
        ]
    }
}