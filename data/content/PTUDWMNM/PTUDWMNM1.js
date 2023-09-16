let url_PTUDWMNM1 = `https://s3.cloud.cmctelecom.vn/tvu/IT/220243_PhatTrienUDWebVoiMaNguonMo/Video/Bai1.mp4`

const PTUDWMNM1 = {
    PTUDWMNM01: {
        title: 'Giới thiệu HTML',
        index: [
            ["Giới thiệu", "PTUDWMNM11", VideoScript(`${url_PTUDWMNM1}#t=58,160`)],
            ["HTML là gì?", "PTUDWMNM12", VideoScript(`${url_PTUDWMNM1}#t=160,185`)],
            ["Sử dụng các thẻ HTML", "PTUDWMNM13", VideoScript(`${url_PTUDWMNM1}#t=185,279`)],
            
        ]
    },
    PTUDWMNM02: {
        title: 'Giới thiệu CSS',
        index: [
            ["Nội dung", "PTUDWMNM021", VideoScript(`${url_PTUDWMNM1}#t=279,570`)]
        ]
    },
    PTUDWMNM03: {
        title: 'Thực hành demo',
        index: [["Nội dung", "PTUDWMNM031", VideoScript(`${url_PTUDWMNM1}#t=570`)]]
    },
    PTUDWMNM04: {
        title: 'Tổng kết',
        index: [
            ["Tổng kết", "PTUDWMNM041", `
                <p>Video bài giảng: <a href="${url_PTUDWMNM1}">Link</a></p>
            `]
        ]
    }
}