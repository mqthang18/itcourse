var subjectTemplate = `
<div id="subject" class="bg-light min-vh-30 rounded">
    <p style="text-align: center">
        <button type="button" class="btn btn-primary" v-on:click="SetPlaySpeedDefault()">Set all video speed 2x</button>
    </p>

    <div v-for="subject in Subjects">
        <button :id="'btn'+subject.id" type="button" class="btn btn-light w-100" v-on:click="collapsible('btn'+subject.id, subject.id)">
        <i class="fa fa-angle-right"></i>
        <a :href="'#'+subject.id" class="text-decoration-none">{{subject.label}}</a>
        </button>
        <div v-bind:id="subject.id" class="child-chap show-not">
            <p v-for="chap in Object.keys(subject.chapter)">
            <a class="text-dark text-decoration-none cc-chap" 
                v-bind:href="'#'+chap" 
                v-on:click="UpdateData(subject.id, chap)">{{subject.chapter[chap].title}}</a>
            </p>
        </div>
    </div>
</div>
`

const ListData = {
    HQTCSDL: {
        HQTCSDL1: {
            src: './data/content/HQTCSDL/HQTCSDL1.js',
            varName: 'HQTCSDL1'
        },
        HQTCSDL2: {
            src: './data/content/HQTCSDL/HQTCSDL2.js',
            varName: 'HQTCSDL2'
        },
        HQTCSDL3: {
            src: './data/content/HQTCSDL/HQTCSDL3.js',
            varName: 'HQTCSDL3'
        },
        HQTCSDL4: {
            src: './data/content/HQTCSDL/HQTCSDL4.js',
            varName: 'HQTCSDL4'
        },
        HQTCSDL5: {
            src: './data/content/HQTCSDL/HQTCSDL5.js',
            varName: 'HQTCSDL5'
        },
        HQTCSDL6: {
            src: './data/content/HQTCSDL/HQTCSDL6.js',
            varName: 'HQTCSDL6'
        }

    },
    CSTTNT: {
        CSTTNT1: {
            src: './data/content/CSTTNT/CSTTNT1.js',
            varName: 'CSTTNT1'
        },
        CSTTNT2: {
            src: './data/content/CSTTNT/CSTTNT2.js',
            varName: 'CSTTNT2'
        },
        CSTTNT3: {
            src: './data/content/CSTTNT/CSTTNT3.js',
            varName: 'CSTTNT3'
        },
        CSTTNT4: {
            src: './data/content/CSTTNT/CSTTNT4.js',
            varName: 'CSTTNT4'
        },
        CSTTNT5: {
            src: './data/content/CSTTNT/CSTTNT5.js',
            varName: 'CSTTNT5'
        },
    },
    KKDL: {
        KKDL1: {
            src: './data/content/KKDL/KKDL1.js',
            varName: 'KKDL1'
        },
        KKDL2: {
            src: './data/content/KKDL/KKDL2.js',
            varName: 'KKDL2'
        },
        KKDL3: {
            src: './data/content/KKDL/KKDL3.js',
            varName: 'KKDL3'
        },
        KKDL4: {
            src: './data/content/KKDL/KKDL4.js',
            varName: 'KKDL4'
        },
        KKDL5: {
            src: './data/content/KKDL/KKDL5.js',
            varName: 'KKDL5'
        },
        KKDL6: {
            src: './data/content/KKDL/KKDL6.js',
            varName: 'KKDL6'
        },
        KKDL7: {
            src: './data/content/KKDL/KKDL7.js',
            varName: 'KKDL7'
        }
    },
    database: {
        database_1: {
            src: './data/content/database/database01.js',
            varName: 'database01'
        },
        database_2: {
            src: './data/content/database/database02.js',
            varName: 'database02'
        },
        database_3: {
            src: './data/content/database/database03.js',
            varName: 'database03'
        },
        database_4: {
            src: './data/content/database/database04.js',
            varName: 'database04'
        },
        database_5: {
            src: './data/content/database/database05.js',
            varName: 'database05'
        }
    },
    computerArchitect: {
        CA_chap0: {
            src: './data/content/computerArchitect/CA00.js',
            varName: 'CA_chap0'
        },
        CA_chap1: {
            src: './data/content/computerArchitect/CA01.js',
            varName: 'CA_chap1'
        },
        CA_chap2: {
            src: './data/content/computerArchitect/CA02.js',
            varName: 'CA_chap2'
        },
        CA_chap3: {
            src: './data/content/computerArchitect/CA03.js',
            varName: 'CA_chap3'
        },
        CA_chap4: {
            src: './data/content/computerArchitect/CA04.js',
            varName: 'CA_chap4'
        },
        CA_chap5: {
            src: './data/content/computerArchitect/CA05.js',
            varName: 'CA_chap5'
        },
        CA_chap6: {
            src: './data/content/computerArchitect/CA06.js',
            varName: 'CA_chap6'
        }
    },
    computerNetwork: {
        CN_chap0: {
            src: './data/content/computerNetwork/CN00.js',
            varName: 'CN00'
        },
        CN_chap1: {
            src: './data/content/computerNetwork/CN01.js',
            varName: 'CN01'
        },
        CN_chap2: {
            src: './data/content/computerNetwork/CN02.js',
            varName: 'CN02'
        },
        CN_chap3: {
            src: './data/content/computerNetwork/CN03.js',
            varName: 'CN03'
        },
        CN_chap4: {
            src: './data/content/computerNetwork/CN04.js',
            varName: 'CN04'
        },
    },
    ComputerSystem: {
        CS_chap1: {
            src: 'data/content/computerSystem/Cs01.js',
            varName: 'CS01'
        },
        CS_chap2: {
            src: 'data/content/computerSystem/Cs02.js',
            varName: 'CS02'
        },
        CS_chap3: {
            src: 'data/content/computerSystem/Cs03.js',
            varName: 'CS03'
        },
        CS_chap4: {
            src: 'data/content/computerSystem/Cs04.js',
            varName: 'CS04'
        },
        CS_chap5: {
            src: 'data/content/computerSystem/Cs05.js',
            varName: 'Cs05'
        },
    },
    LTDT: {
        LTDT_chap1: {
            src: './data/content/LTDT/LTDT01.js',
            varName: 'LTDT01'
        },
        LTDT_chap2: {
            src: './data/content/LTDT/LTDT02.js',
            varName: 'LTDT02'
        },
        LTDT_chap3: {
            src: './data/content/LTDT/LTDT03.js',
            varName: 'LTDT03'
        },
        LTDT_chap4: {
            src: './data/content/LTDT/LTDT04.js',
            varName: 'LTDT04'
        }
    },
    webdesign: {
        Webdesign1: {
            src: './data/content/webdesign/webdesign01.js',
            varName: 'webdesign01'
        },
        Webdesign2: {
            src: './data/content/webdesign/webdesign02.js',
            varName: 'webdesign02'
        },
        Webdesign3: {
            src: './data/content/webdesign/webdesign03.js',
            varName: 'webdesign03'
        },
        Webdesign4: {
            src: './data/content/webdesign/webdesign04.js',
            varName: 'webdesign04'
        },
        Webdesign5: {
            src: './data/content/webdesign/webdesign05.js',
            varName: 'webdesign05'
        }
    },
    LTXH: {
        LTXH1: {
            src: './data/content/LTXH/LTXH01.js',
            varName: 'LTXH01'
        },
        LTXH2: {
            src: './data/content/LTXH/LTXH02.js',
            varName: 'LTXH02'
        },
        LTXH3: {
            src: './data/content/LTXH/LTXH03.js',
            varName: 'LTXH03'
        },
        LTXH4: {
            src: './data/content/LTXH/LTXH04.js',
            varName: 'LTXH04'
        }
    },
    TMDT: {
        TMDT1: {
            src: './data/content/TMDT/TMDT01.js',
            varName: 'TMDT01'
        },
        TMDT2: {
            src: './data/content/TMDT/TMDT02.js',
            varName: 'TMDT02'
        },
        TMDT3: {
            src: './data/content/TMDT/TMDT03.js',
            varName: 'TMDT03'
        },
        TMDT4: {
            src: './data/content/TMDT/TMDT04.js',
            varName: 'TMDT04'
        },
        TMDT5: {
            src: './data/content/TMDT/TMDT05.js',
            varName: 'TMDT05'
        },
        TMDT6: {
            src: './data/content/TMDT/TMDT06.js',
            varName: 'TMDT06'
        },
        TMDT7: {
            src: './data/content/TMDT/TMDT07.js',
            varName: 'TMDT07'
        }
    },
    PTTKHT: {
        PTTKHT1: {
            src: './data/content/PTTKHT/PTTKHT1.js',
            varName: 'PTTKHT1'
        },
        PTTKHT2: {
            src: './data/content/PTTKHT/PTTKHT2.js',
            varName: 'PTTKHT2'
        },
        PTTKHT3: {
            src: './data/content/PTTKHT/PTTKHT3.js',
            varName: 'PTTKHT3'
        },
        PTTKHT4: {
            src: './data/content/PTTKHT/PTTKHT4.js',
            varName: 'PTTKHT4'
        },
        PTTKHT5: {
            src: './data/content/PTTKHT/PTTKHT5.js',
            varName: 'PTTKHT5'
        },
        PTTKHT6: {
            src: './data/content/PTTKHT/PTTKHT6.js',
            varName: 'PTTKHT6'
        }
    },
    LTUDWindows: {
        LTUDWindows1: {
            src: './data/content/LTUDWindows/LTUDWindows1.js',
            varName: 'LTUDWindows1'
        },
        LTUDWindows2: {
            src: './data/content/LTUDWindows/LTUDWindows2.js',
            varName: 'LTUDWindows2'
        },
        LTUDWindows3: {
            src: './data/content/LTUDWindows/LTUDWindows3.js',
            varName: 'LTUDWindows3'
        },
        LTUDWindows4: {
            src: './data/content/LTUDWindows/LTUDWindows4.js',
            varName: 'LTUDWindows4'
        },
        LTUDWindows5: {
            src: './data/content/LTUDWindows/LTUDWindows5.js',
            varName: 'LTUDWindows5'
        },
        LTUDWindows6: {
            src: './data/content/LTUDWindows/LTUDWindows6.js',
            varName: 'LTUDWindows6'
        },
    },
    TKPTDL: {
        TKPTDL1: {
            src: './data/content/TKPTDL/TKPTDL1.js',
            varName: 'TKPTDL1'
        },
        TKPTDL2: {
            src: './data/content/TKPTDL/TKPTDL2.js',
            varName: 'TKPTDL2'
        },
        TKPTDL3: {
            src: './data/content/TKPTDL/TKPTDL3.js',
            varName: 'TKPTDL3'
        },
        TKPTDL4: {
            src: './data/content/TKPTDL/TKPTDL4.js',
            varName: 'TKPTDL4'
        },
        TKPTDL5: {
            src: './data/content/TKPTDL/TKPTDL5.js',
            varName: 'TKPTDL5'
        }
    },
    ATTT: {
        ATTT1: {
            src: './data/content/ATTT/ATTT1.js',
            varName: 'ATTT1'
        },
        ATTT2: {
            src: './data/content/ATTT/ATTT2.js',
            varName: 'ATTT2'
        },
        ATTT3: {
            src: './data/content/ATTT/ATTT3.js',
            varName: 'ATTT3'
        },
        ATTT4: {
            src: './data/content/ATTT/ATTT4.js',
            varName: 'ATTT4'
        },
        ATTT5: {
            src: './data/content/ATTT/ATTT5.js',
            varName: 'ATTT5'
        },
        ATTT6: {
            src: './data/content/ATTT/ATTT6.js',
            varName: 'ATTT6'
        },
        ATTT7: {
            src: './data/content/ATTT/ATTT7.js',
            varName: 'ATTT7'
        },
        ATTT8: {
            src: './data/content/ATTT/ATTT8.js',
            varName: 'ATTT8'
        },
        ATTT9: {
            src: './data/content/ATTT/ATTT9.js',
            varName: 'ATTT9'
        }
    },
    CNPM: {
        CNPM1: {
            src: './data/content/CNPM/CNPM01.js',
            varName: 'CNPM1'
        },
        CNPM2: {
            src: './data/content/CNPM/CNPM02.js',
            varName: 'CNPM2'
        },
        CNPM3: {
            src: './data/content/CNPM/CNPM03.js',
            varName: 'CNPM3'
        },
        CNPM4: {
            src: './data/content/CNPM/CNPM04.js',
            varName: 'CNPM4'
        },
        CNPM5: {
            src: './data/content/CNPM/CNPM05.js',
            varName: 'CNPM5'
        },
        CNPM6: {
            src: './data/content/CNPM/CNPM06.js',
            varName: 'CNPM6'
        }
    },
    LTTBDD: {
        LTTBDD1: {
            src: './data/content/LTTBDD/LTTBDD1.js',
            varName: 'LTTBDD1'
        },
        LTTBDD2: {
            src: './data/content/LTTBDD/LTTBDD2.js',
            varName: 'LTTBDD2'
        },
        LTTBDD3: {
            src: './data/content/LTTBDD/LTTBDD3.js',
            varName: 'LTTBDD3'
        },
        LTTBDD4: {
            src: './data/content/LTTBDD/LTTBDD4.js',
            varName: 'LTTBDD4'
        },
        LTTBDD5: {
            src: './data/content/LTTBDD/LTTBDD5.js',
            varName: 'LTTBDD5'
        },
        LTTBDD6: {
            src: './data/content/LTTBDD/LTTBDD6.js',
            varName: 'LTTBDD6'
        }
    },
    TRR: {
        TRR1: {
            src: 'data/content/TRR/TRR1.js',
            varName: 'TRR1'
        }
    },
    PTUDWMNM: {
        PTUDWMNM1: {
            src: 'data/content/PTUDWMNM/PTUDWMNM1.js',
            varName: 'PTUDWMNM1'
        },
        PTUDWMNM2: {
            src: 'data/content/PTUDWMNM/PTUDWMNM2.js',
            varName: 'PTUDWMNM2'
        },
        PTUDWMNM3: {
            src: 'data/content/PTUDWMNM/PTUDWMNM3.js',
            varName: 'PTUDWMNM3'
        },
        PTUDWMNM4: {
            src: 'data/content/PTUDWMNM/PTUDWMNM4.js',
            varName: 'PTUDWMNM4'
        },
        PTUDWMNM5: {
            src: 'data/content/PTUDWMNM/PTUDWMNM5.js',
            varName: 'PTUDWMNM5'
        }
    },
    XDPMHDDT: {
        XDPMHDDT1: {
            src: 'data/content/XDPMHDDT/XDPMHDDT1.js',
            varName: 'XDPMHDDT1'
        },
        XDPMHDDT2: {
            src: 'data/content/XDPMHDDT/XDPMHDDT2.js',
            varName: 'XDPMHDDT2'
        },
        XDPMHDDT3: {
            src: 'data/content/XDPMHDDT/XDPMHDDT3.js',
            varName: 'XDPMHDDT3'
        },
        XDPMHDDT4: {
            src: 'data/content/XDPMHDDT/XDPMHDDT4.js',
            varName: 'XDPMHDDT4'
        },
        XDPMHDDT5: {
            src: 'data/content/XDPMHDDT/XDPMHDDT5.js',
            varName: 'XDPMHDDT5'
        },
        XDPMHDDT6: {
            src: 'data/content/XDPMHDDT/XDPMHDDT6.js',
            varName: 'XDPMHDDT6'
        },
        XDPMHDDT7: {
            src: 'data/content/XDPMHDDT/XDPMHDDT7.js',
            varName: 'XDPMHDDT7'
        },
        XDPMHDDT8: {
            src: 'data/content/XDPMHDDT/XDPMHDDT8.js',
            varName: 'XDPMHDDT8'
        },
        XDPMHDDT9: {
            src: 'data/content/XDPMHDDT/XDPMHDDT9.js',
            varName: 'XDPMHDDT9'
        }
    },
    QTDACNTT: {
        QTDACNTT1: {
            src: 'data/content/QTDACNTT/QTDACNTT1.js',
            varName: 'QTDACNTT1'
        },
        QTDACNTT2: {
            src: 'data/content/QTDACNTT/QTDACNTT2.js',
            varName: 'QTDACNTT2'
        },
        QTDACNTT3: {
            src: 'data/content/QTDACNTT/QTDACNTT3.js',
            varName: 'QTDACNTT3'
        },
        QTDACNTT4: {
            src: 'data/content/QTDACNTT/QTDACNTT4.js',
            varName: 'QTDACNTT4'
        },
        QTDACNTT5: {
            src: 'data/content/QTDACNTT/QTDACNTT5.js',
            varName: 'QTDACNTT5'
        },
        QTDACNTT6: {
            src: 'data/content/QTDACNTT/QTDACNTT6.js',
            varName: 'QTDACNTT6'
        },
        QTDACNTT7: {
            src: 'data/content/QTDACNTT/QTDACNTT7.js',
            varName: 'QTDACNTT7'
        },
        QTDACNTT8: {
            src: 'data/content/QTDACNTT/QTDACNTT8.js',
            varName: 'QTDACNTT8'
        }
    }
}


const Subject = [
    {
        id: 'PTUDWMNM',
        label: 'Phát triển ứng dụng Web với mã nguồn mở',
        chapter: {
            PTUDWMNM1: {
                title: 'Xây dựng giao diện web với HTML và CSS',
                outside: ``,
                tableContent: {}
            },
            PTUDWMNM2: {
                title: 'Tương tác dữ liệu giữa Javascript và HTML',
                outside: ``,
                tableContent: {}
            },
            PTUDWMNM3: {
                title: 'PHP và MySQL cơ bản',
                outside: ``,
                tableContent: {}
            },
            PTUDWMNM4: {
                title: 'Lưu trữ dữ liệu với PHP và MySQL',
                outside: ``,
                tableContent: {}
            },
            PTUDWMNM5: {
                title: 'Các thao tác dữ liệu trong PHP và MySQL',
                outside: ``,
                tableContent: {}
            }
        }
    },
    {
        id: `XDPMHDDT`,
        label: `Xây dựng phần mềm hướng đối tượng`,
        chapter: {
            XDPMHDDT1: {
                title: `Một số khái niệm về công nghệ phần mềm`,
                outside: `
                    <center>
                        <video class="col-12 col-sm-8" controls>
                        <source
                            src="https://s3.cloud.cmctelecom.vn/tvu/IT/220120_XayDungPhanMemHDT/Video/BaiGiang_Videos/Chuong_01.CongNghePhanMem.mp4#t=0,92"
                            type="video/mp4" />
                        </video>
                    </center>
                `,
                tableContent: {}
            },
            XDPMHDDT2: {
                title: `Khái quát các khái niệm của hướng đối tượng`,
                outside: `
                    <center>
                        <video class="col-12 col-sm-8" controls>
                        <source
                            src="https://s3.cloud.cmctelecom.vn/tvu/IT/220120_XayDungPhanMemHDT/Video/BaiGiang_Videos/Chuong_02.HuongDoiTuong.mp4#t=0,113"
                            type="video/mp4" />
                        </video>
                    </center>
                `,
                tableContent: {}
            },
            XDPMHDDT3: {
                title: `Phát triển phần mềm dựa trên công nghệ tái sử dụng`,
                outside: `
                    <center>
                        <video class="col-12 col-sm-8" controls>
                            <source src="https://s3.cloud.cmctelecom.vn/tvu/IT/220120_XayDungPhanMemHDT/Video/BaiGiang_Videos/Chuong_03.TaiSuDung.mp4#t=0,103" type="video/mp4" />
                        </video>
                    </center>
                `,
                tableContent: {}
            },
            XDPMHDDT4: {
                title: `Phân tích yêu cầu`,
                outside: `
                    <center>
                        <video class="col-12 col-sm-8" controls>
                            <source src="https://s3.cloud.cmctelecom.vn/tvu/IT/220120_XayDungPhanMemHDT/Video/BaiGiang_Videos/Chuong_04.PhanTichYeuCau.mp4#t=0,115" type="video/mp4" />
                        </video>
                    </center>
                `,
                tableContent: {}
            },
            XDPMHDDT5: {
                title: `Mô hình hóa dữ liệu bằng mô hình lớp`,
                outside: `
                    <center>
                        <video class="col-12 col-sm-8" controls>
                            <source src="https://s3.cloud.cmctelecom.vn/tvu/IT/220120_XayDungPhanMemHDT/Video/BaiGiang_Videos/Chuong_05.MoHinhLop.mp4#t=0,153" type="video/mp4" />
                        </video>
                    </center>
                `,
                tableContent: {}
            },
            XDPMHDDT6: {
                title: `Sử dụng các mẫu thiết kế và phần công trách nhiệm cho lớp`,
                outside: `
                    <center>
                        <video class="col-12 col-sm-8" controls>
                            <source src="https://s3.cloud.cmctelecom.vn/tvu/IT/220120_XayDungPhanMemHDT/Video/BaiGiang_Videos/Chuong_06.MauThietKe.mp4#t=0,114" type="video/mp4" />
                        </video>
                    </center>
                `,
                tableContent: {}
            },
            XDPMHDDT7: {
                title: `Thiết kế hướng người dùng và thiết kế giao diện`,
                outside: `
                    <center>
                        <video class="col-12 col-sm-8" controls>
                            <source src="https://s3.cloud.cmctelecom.vn/tvu/IT/220120_XayDungPhanMemHDT/Video/BaiGiang_Videos/Chuong_07.ThietKeGiaoDien.mp4#t=0,102" type="video/mp4" />
                        </video>
                    </center>
                `,
                tableContent: {}
            },
            XDPMHDDT8: {
                title: `Mô hình hóa tương tác và hành vi`,
                outside: ``,
                tableContent: {}
            },
            XDPMHDDT9: {
                title: `Kiểm thử và đảm bảo chất lượng phần mềm`,
                outside: ``,
                tableContent: {}
            },
        }
    },
    {
        id: 'QTDACNTT',
        label: `Quản trị dự án công nghệ thông tin`,
        chapter: {
            QTDACNTT1: {
                title: `Tổng quan về quản lý dự án`,
                outside: `
                <center>
                    <video class="col-12 col-sm-8" controls>
                    <source
                        src="https://s3.cloud.cmctelecom.vn/tvu/IT/220078_QuanTriDuAnCNTT/Video/LyThuyet/01_TongQuanQuanLyDuAn.mp4#t=0,89"
                        type="video/mp4" />
                    </video>
                </center>
                `,
                tableContent: {}
            },
            QTDACNTT2: {
                title: `Quản lý tích hợp dự án phần mềm`,
                outside: `
                <center>
                    <video class="col-12 col-sm-8" controls>
                    <source
                        src="https://s3.cloud.cmctelecom.vn/tvu/IT/220078_QuanTriDuAnCNTT/Video/LyThuyet/02_QuanLyTichHopDuAn.mp4#t=0,107"
                        type="video/mp4" />
                    </video>
                </center>
                `,
                tableContent: {}
            },
            QTDACNTT3: {
                title: `Quản lý dự án phần mềm`,
                outside: `
                <center>
                    <video class="col-12 col-sm-8" controls>
                    <source
                        src="https://s3.cloud.cmctelecom.vn/tvu/IT/220078_QuanTriDuAnCNTT/Video/LyThuyet/03_QuanLyPhamViDuAn.mp4#t=0,67"
                        type="video/mp4" />
                    </video>
                </center>
                `,
                tableContent: {}
            },
            QTDACNTT4: {
                title: `Ước lượng dự án phần mềm`,
                outside: `
                    <center>
                        <video class="col-12 col-sm-8" controls>
                        <source
                            src="https://s3.cloud.cmctelecom.vn/tvu/IT/220078_QuanTriDuAnCNTT/Video/LyThuyet/04.UocLuongDuAnPhanMem.mp4#t=0,44"
                            type="video/mp4" />
                        </video>
                    </center>
                `,
                tableContent: {}
            },
            QTDACNTT5: {
                title: `Lập kế hoạch tiến độ dự án phần mềm`,
                outside: ``,
                tableContent: {}
            },
            QTDACNTT6: {
                title: `Kiểm soát dự án phần mềm`,
                outside: ``,
                tableContent: {}
            },
            QTDACNTT7: {
                title: `Quản lý rủi ro dự án phần mềm`,
                outside: ``,
                tableContent: {}
            },
            QTDACNTT8: {
                title: `Quản lý nguồn nhân lực dự án`,
                outside: ``,
                tableContent: {}
            }
        }
    },
    {
        id: 'HQTCSDL',
        label: 'Hệ quản trị cơ sở dữ liệu',
        chapter: {
            HQTCSDL1: {
                title: 'Tổng quan về hệ quản trị CSDL',
                outside: ``,
                tableContent: {}
            },
            HQTCSDL2: {
                title: 'Lịch giao tác',
                outside: ``,
                tableContent: {}
            },
            HQTCSDL3: {
                title: 'Điều khiển đồng thời',
                outside: `
                    <div id="tableContent">
                        <h3>Nội dung</h3>
                        <ol>
                        <li>Các vấn đề trong truy xuất đồng thời
                            <ul>
                            <li>Mất dữ liệu cập nhật</li>
                            <li>Không đọc lại được dữ liệu</li>
                            <li>Bóng ma</li>
                            <li>Đọc phải dữ liệu rác</li>
                            </ul>
                        </li>
                        <li>Các kỹ thuật điều khiển đồng thời
                            <ul>
                            <li>Kỹ thuật khóa</li>
                            <li>Kỹ thuật khóa trong SQL Server</li>
                            <li>Kỹ thuật nhãn thời gian</li>
                            </ul>
                        </li>
                        </ol>
                    </div>
                `,
                tableContent: {}
            },
            HQTCSDL4: {
                title: 'Khôi phục dữ liệu',
                outside: ``,
                tableContent: {}
            },
            HQTCSDL5: {
                title: 'Cấu trúc lưu trữ của dữ liệu trên đĩa',
                outside: `
                    <center>
                    <video class="col-12 col-sm-8" controls>
                        <source
                        src="https://s3.cloud.cmctelecom.vn/tvu/IT/220060_HeQuanTriCSDL/Video/Ly%20thuyet/Chuong5.mp4#t=0,35"
                        type="video/mp4" />
                    </video>
                    </center>
                `,
                tableContent: {}
            },
            HQTCSDL6: {
                title: 'Ước lượng chi phí thực hiện câu truy vấn',
                outside: ``,
                tableContent: {}
            }
        }
    },
    {
        id: 'CSTTNT',
        label: 'Trí tuệ nhân tạo',
        chapter: {
            CSTTNT1: {
                title: 'Cơ sở trí tuệ nhân tạo',
                outside: `
                <div id="aiming">
                <h4>Mục tiêu</h4>
            
                <ul>
                  <li>Biết khái quát về lịch sử hình thành và phát triển của TTNT</li>
                  <li>Biết các định nghĩa về TTNT</li>
                  <li>Hiểu và dẫn chứng được một số lĩnh vực ứng dụng của TTNT</li>
                </ul>
              </div>
            
              <div id="tableContent">
                <h4>Nội dung</h4>
                <ol>
                  <li>Trí tuệ nhân tạo là gì</li>
                  <li>Các giai đoạn phát triển của trí tuệ nhân tạo</li>
                  <li>Một số bài toán dẫn nhập</li>
                  <li>Ứng dụng của trí tuệ nhân tạo</li>
                  <li>Các nghiên cứu về trí tuệ nhân tạo trong tương lai</li>
                </ol>
              </div>
                `,
                tableContent: {}
            },
            CSTTNT2: {
                title: 'Đồ thị không gian trạng thái',
                outside: `
                    <div id="aim">
                        <h4>Mục tiêu</h4>
                        <ul>
                        <li>Hiểu được cách biểu diễn không gian trạng thái cho bài toán tìm kiếm</li>
                        <li>Nắm được các mô hình bài toán tìm kiếm tổng quát trong không gian trạng thái</li>
                        </ul>
                    </div>
                    
                    <div id="tableContent">
                        <ol>
                        <li>Giải quyết vấn đề bằng bài toán tìm kiếm</li>
                        <li>Biểu diễn trong không gian tìm kiếm</li>
                        <li>Biểu diễn không gian trạng thái dưới dạng đồ thị</li>
                        <li>Các chiến lược tìm kiếm</li>
                        </ol>
                    </div>
                `,
                tableContent: {}
            },
            CSTTNT3: {
                title: 'Các giải thuật tìm kiếm để giải quyết một số bài toán',
                outside: ``,
                tableContent: {}
            },
            CSTTNT4: {
                title: 'Áp dụng các cách biểu diễn và xử lý tri thức',
                outside: ``,
                tableContent: {}
            },
            CSTTNT5: {
                title: 'Lập luận không chắc chắn và suy diễn dựa trên xác suất',
                outside: ``,
                tableContent: {}
            },
            CSTTNT6: {
                title: 'Trình bày một số nội dung cơ bản về hệ chuyên gia',
                outside: ``,
                tableContent: {}
            },
            CSTTNT7: {
                title: 'Học máy',
                outside: ``,
                tableContent: {}
            }
        }
    },
    {
        id: 'KKDL',
        label: 'Khai khoáng dữ liệu',
        chapter: {
            KKDL1: {
                title: 'Tổng quan về khai phá dữ liệu',
                outside: `
                <div id="tableContent">
                    <ol>
                    <li>Nhu cầu của khai phá dữ liệu</li>
                    <li>Khái niệm KPDL và phát hiện tri thức trong CSDL</li>
                    <li>KPDL và xử lý CSDL truyền thông</li>
                    <li>Kiểu dữ liệu trong KPDL</li>
                    <li>Các bài toán khai phá dữ liệu điển hình</li>
                    <li>Tính liên nghành của khai phá dữ liệu</li>
                    </ol>
                </div>
                `,
                tableContent: {}
            },
            KKDL2: {
                title: 'Hiểu về dữ liệu và tiền xử lý dữ liệu',
                outside: `
                    <div id="aiming">
                        <h3>Mục tiêu học tập</h3>
                        <ul>
                        <li>Nẵm vững và hiểu được vai trò của hiểu dữ liệu trong KPDL</li>
                        <li>Hiểu về các đối tướng DL và kiểu thuộc tính</li>
                        <li>Nắm vững các kỹ thuật thu thập dữ liệu</li>
                        <li>Biết cách mô tả thống kê cơ bản của DL và biểu diễn trực quan hóa dữ liệu</li>
                        <li>Biết cách tiền xử lý dữ liệu</li>
                        </ul>
                    </div>

                    <div id="content">
                        <h3>Nội dung</h3>
                        <ol>
                        <li>Vai trò của hiểu dữ liệu</li>
                        <li>Đối tượng DL và kiểu dữ liệu</li>
                        <li>Mô tả thống kê cơ bản của DL</li>
                        <li>Trực quan hóa DL</li>
                        <li>Độ đo tương tự và không tượng tự của DL</li>
                        <li>Tiền xử lý dữ liệu</li>
                        <li>Làm sạch dữ liệu</li>
                        <li>Tích hợp dữ liệu</li>
                        <li>Rút gọn dữ liệu</li>
                        <li>Chuyển thể và rời rạc hóa dữ liệu</li>
                        </ol>
                    </div>
                `,
                tableContent: {}
            },
            KKDL3: {
                title: 'Kho dữ liệu và kỹ thuật olap',
                outside: ``,
                tableContent: {}
            },
            KKDL4: {
                title: 'Luật kết hợp',
                outside: ``,
                tableContent: {}
            },
            KKDL5: {
                title: 'Bài toán phân lớp dữ liệu',
                outside: ``,
                tableContent: {}
            },
            KKDL6: {
                title: 'Bài toán phân cụm dữ liệu',
                outside: ``,
                tableContent: {}
            },
            KKDL7: {
                title: 'Khai thác văn bản và web',
                outside: ``,
                tableContent: {}
            },
        }
    },
    {
        id: 'TRR',
        label: 'Toán rời rạc',
        chapter: {
            TRR1: {
                title: 'Cơ sở logic',
                outside: `
                <iframe frameborder="0" style="width:100%;height:500px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Chap1.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1aMwJ8xOZ_i0SnvcJZDfLSiX9m5ACBS29%26export%3Ddownload"></iframe>
                `,
                tableContent: {}
            }
        }
    },
    {
        id: 'database',
        label: 'Cơ sở dữ liệu',
        chapter: {
            database_1: {
                'title': 'Các cách tiếp cận cơ sở dữ liệu',
                'outside': `
                    <iframe frameborder="0" style="width:100%;height:600px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=GeneralDB_chapI.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1R5tvKChKTXWmztn8L3qn1eyf-WiF5hu6%26export%3Ddownload"></iframe>
                `,
                'tableContent': {}
            },
            database_2: {
                title: 'Đại số quan hệ',
                outside: `
                    <iframe frameborder="0" style="width:100%;height:600px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#G1KpBw-aNd9zObe7s6iKjIxhNuaOags8fh"></iframe>
                `,
                tableContent: {}
            },
            database_3: {
                title: 'Ràng buộc toàn vẹn CSDL',
                outside: `
                    <iframe frameborder="0" style="width:100%;height:600px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#G1ATCJoJR14LZmvyUc5dilhYRU5j_PJIG3"></iframe>
                `,
                tableContent: {}
            },
            database_4: {
                title: 'Chuẩn hóa lược đồ quan hệ',
                outside: `
                    <iframe frameborder="0" style="width:100%;height:600px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#G1qCTkQBqR5dzGgqptKmBMSmP063BdlLDo"></iframe>
                `,
                tableContent: {}
            },
            database_5: {
                title: 'Ngôn ngữ SQL',
                outside: `
                    <iframe frameborder="0" style="width:100%;height:600px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#G1toYp02rb46PRFBMhQpm2iY9PQXd2yIqv"></iframe>
                `,
                tableContent: {}
            }
        }
    },
    {
        id: 'computerArchitect',
        label: 'Kiến trúc máy tính',
        chapter: {
            CA_chap0: {
                title: 'Kiến trúc cơ bản của máy vi tính',
                tableContent: {}
            },
            CA_chap1: {
                title: 'Đơn vị xử lý trung tâm',
                tableContent: {}
            },
            CA_chap2: {
                title: 'Tổ chức bộ nhớ trong máy tính',
                tableContent: {}
            },
            CA_chap3: {
                title: 'Cấu trúc BUS trong máy vi tính',
                outside: `
                <iframe frameborder="0" style="width:100%;height:600px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#G1XRSxXYSWJILak_WUKE2cshLow3qVhc6t"></iframe>
                    <center>
                        <img src="./assets/img/CA/CA04/Diagram_Devices.png" alt="cpu-types"></img>
                    </center>
                    - Bus là thành phần kết nối các thành phần trong hệ thống máy tính<br>
                    - Chu kỳ bus là quá trình xảy ra trên bus để truyền tải dữ liệu<br>
                    - Lượng dữ liệu tối đa được chuyển qua bus trong một khoảng thời gian gọi là tốc độ truyền tải tối đa (băng thông - bandwidth)<br>
                    - Băng thông là yếu tố ảnh hưởng đến tốc độ của máy tính<br>
                    Bd = <sup>Vxn</sup>/<sub>m</sub> <br>
                    <ul>
                        <li>Bd: Băng thông (MB/s)</li>
                        <li>V: Tốc độ Bus (MHz)</li>
                        <li>N: Số byte trong 1 lần truyền</li>
                        <li>M: Số chu kì đồng hồ cho mỗi lần truyền</li>
                    </ul>
                    Một hệ thống máy tính thường có nhiều loại bus
                `,
                tableContent: {}
            },
            CA_chap4: {
                title: 'Các chip bổ trợ trong máy vi tính',
                outside: `<iframe frameborder="0" style="width:100%;height:600px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Chap5.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1PFbcY83jz3tRyvnklYkxwS6SfYEtbWbE%26export%3Ddownload"></iframe>`,
                tableContent: {}
            },
            CA_chap5: {
                title: 'Bộ nhớ ngoài của máy vi tính',
                outside: `<iframe frameborder="0" style="width:100%;height:600px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Chap6.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D131ordGFAN8yokY5CUMBrWmADkrhE25D6%26export%3Ddownload"></iframe>`,
                tableContent: {}
            },
            CA_chap6: {
                title: 'Ghép nối máy vi tính với thiết bị ngoại vi',
                outside: `
                <iframe frameborder="0" style="width:100%;height:600px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Chap7.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1b9zuGe8SRmNQ6dN7K8tszUQqLb5qYA4M%26export%3Ddownload"></iframe>
                `,
                tableContent: {}
            }
        }
    },
    {
        id: 'computerNetwork',
        label: 'Mạng máy tính',
        chapter: {
            CN_chap0: {
                title: 'Tổng quan về mạng máy tính',
                outside: `<iframe frameborder="0" style="width:100%;height:500px;" src="https://viewer.diagrams.net/?tags=%7B%7D&target=blank&highlight=0000ff&edit=_blank&layers=1&nav=1&title=ChapI.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1HMXNn5VEX5RB1m8W3Y2zxFTq1fpf-z3s%26export%3Ddownload"></iframe>`,
                tableContent: {}
            },
            CN_chap1: {
                title: 'Tầng ứng dụng (Application layer)',
                outside: `<iframe frameborder="0" style="width:100%;height:600px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#G1bqxF66L9o4BJ_VuHe11mWZWu_CSg6UCL"></iframe>`,
                tableContent: {}
            },
            CN_chap2: {
                title: 'Tầng giao vận (Transport layer)',
                outside: `<iframe frameborder="0" style="width:100%;height:600px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=ChapIII_TransportLayer.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1txy2aMa8W4SMPZSbpfb_rqDZgRwreOz7%26export%3Ddownload"></iframe>`,
                tableContent: {}
            },
            CN_chap3: { title: 'Tầng mạng (Network layer)', tableContent: {} },
            CN_chap4: { title: 'Tầng liên kết (Link layer)', tableContent: {} },
        }
    },
    {
        id: 'ComputerSystem',
        label: 'Hệ thống máy tính',
        chapter: {
            CS_chap1: {
                title: 'Tổng quan về hệ điều hành',
                tableContent: {}
            },
            CS_chap2: {
                title: 'Quản lý tiến trình',
                tableContent: {}
            },
            CS_chap3: {
                title: 'Lập lịch',
                tableContent: {}
            },
            CS_chap4: {
                title: 'Cấp phát và quản lý bộ nhớ',
                outside: `
                    <h4>MỤC TIÊU BÀI HỌC</h4>
                    <ul>
                        <li>Nắm được các khái niệm cơ bản về bộ nhớ</li>
                        <li>Hiểu được các kiểu địa chỉ nhớ và cách chuyển đổi giữa các kiểu bộ nhớ</li>
                        <li>Hiểu được các cơ chế và mô hình quản lý bộ nhớ</li>
                    </ul>
                `,
                tableContent: {}
            },
            CS_chap5: {
                title: 'Hệ thống tệp tin',
                outside: `outside_CS5`,
                tableContent: {}
            }
        }
    },
    {
        id: 'LTDT',
        label: 'Lý thuyết đồ thị',
        chapter: {
            LTDT_chap1: {
                title: 'Đại cương về đồ thị',
                outside: `
                <iframe frameborder="0" style="width:100%;height:600px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Chap1.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1vmP8XybulFOfLNvGcwrt8KGN0ggM1mDp%26export%3Ddownload"></iframe>
                    <h2>Mục lục</h2>
                    <ul>
                        <li>1. Đồ thị và sự biểu diễn đồ thị</li>
                        <li>2. Đường đi, chu trình và tính liên thông</li>
                        <li>3. Các đơn đồ thị đặc biệt và sự đẳng cấu</li>
                    </ul>
                `,
                tableContent: {}
            },
            LTDT_chap2: {
                title: 'Các bài toán về đường đi',
                outside: `
                `,
                tableContent: {}
            },
            LTDT_chap3: {
                title: 'Đồ thị phẳng',
                outside: `
                    <h2>Giới thiệu</h2>
                    <center>
                        <img style="width: 100%;" src="./assets/img/LTDT/3/dothiphang.jpg" alt="dothiphang">
                    </center>
                    <p>Có thể vẽ đồ thị K<sub>3,3</sub> trên một mặt phẳng sao cho không có hai cạnh nào cặt nhau?</p>
                `,
                tableContent: {}
            },
            LTDT_chap4: {
                title: 'Cây',
                outside: `
                    <h2>Nội dung</h2>
                    <ol>
                        <li>Các khái niệm cơ bản về cây</li>
                        <li>Cây nhị phân và phép duyệt cây</li>
                        <li>Bài toán tìm cây khung nhỏ nhất</li>
                    </ol>
                `,
                tableContent: {}
            }
        }
        // https://youtube.com/playlist?list=PLux-_phi0Rz3Kx5SPqIRyGR1gDVb5DY1x
    },
    {
        id: 'webdesign',
        label: 'Thiết kế Web',
        chapter: {
            Webdesign1: {
                title: 'Tổng quan về thiết kế web',
                outside: `
                    <h3>Mục tiêu ngược học đạt được</h3>
                    <ul>
                        <li>Xác định Internet và các thuật ngữ chính có liên quan</li>
                        <li>Nhận biết các giao thức Internet</li>
                        <li>Thảo luận về các trình duyệt web</li>
                        <li>Mô tả các loại và các mục đích của website</li>
                        <li>Xác định công cụ tạo trang web</li>
                        <li>Nhận diện các ngôn ngữ liên quan đến thiết kế và lập trình web</li>
                        <li>Tải và sử dụng một công cụ</li>
                        <li>Tạo và xem một trang web HTML</li>
                    </ul>     
                `,
                tableContent: {},
            },
            Webdesign2: {
                title: 'Ngôn ngữ HTML',
                outside: `
                    <h2>Mục tiêu người học đạt được:</h2>
                    <ul>
                        <li>Xác định cấu trúc trang HTML</li>
                        <li>Vận dụng các phần tử HTML</li>
                        <li>Xác định các thuộc tính của phần tử HTML</li>
                        <li>Sử dụng các đối tượng trong thiết kế giao diện
                            <ul>
                                <li>Văn bản - danh sách - bảng biểu</li>
                                <li>Âm thanh - video - hình ảnh</li>
                                <li>Liên kết - Frame</li>
                                <li>Biểu mẫu</li>
                            </ul>
                        </li>
                    </ul>
                `,
                tableContent: {},
            },
            Webdesign3: {
                title: 'Bảng định kiểu CSS',
                outside: `
                    <h2>Mục tiêu người học đạt được:</h2>
                    <ul>
                        <li>Xác định cú pháp CSS</li>
                        <li>Vận dụng linh hoạt các bộ chọn của CSS</li>
                        <li>Xác định cách chèn tài liệu vào trang HTML</li>
                        <li>Xác định cách chú thích trong tài liệu CSS</li>
                        <li>Vận dụng linh hoạt các thuộc tính của CSS
                            <br>
                            <ul>
                                <li>Văn bản: màu chữ, màu nền, font chữ, canh lề, kiểu chữ</li>
                                <li>Khung viền, khoảng cách lề, khoảng cách giữa nội dung và đường viền</li>
                            </ul>
                        </li>
                    </ul>
                `,
                tableContent: {},
            },
            Webdesign4: {
                title: 'Ngôn ngữ Javascript',
                outside: `
                    <h2>Mục tiêu người học đạt được</h2>
                    <ul>
                        <li>Xác định cách nhúng mã nguồn Javascript (JS) vào trang HTML</li>
                        <li>Xác định câu lệnh Javascript</li>
                        <li>Xác định cú pháp ngôn ngữ JS</li>
                        <li>Xác định cách chú thích trong tài liệu JS</li>
                        <li>Xác định cách khai báo biến</li>
                        <li>Xác định các phép toán, kiểu dữ liệu</li>
                        <li>Vận dụng phương pháp tổ chức mã nguồn theo hàm</li>
                        <li>Xác định các sự kiện và sử dụng các hộp thoại</li>
                        <li>Cài đặt hàm kiểm tra dữ liệu trên form</li>
                    </ul>
                `,
                tableContent: {},
            },
            Webdesign5: {
                title: 'Thiết kế responsive',
                outside: `
                    <h2>Mục tiêu người học đạt được</h2>
                    <ul>
                        <li>Xác định các thông tin tổng quan về Bootstrap</li>
                        <li>Biết cách tải và sử dụng Bootstrap</li>
                        <li>Sử dụng các đối tượng trong thiết kế giao diện
                            <br>
                            <ul>
                                <li>Grid, Typography, Table, Image</li>
                                <li>Navigation, Form Inputs, Button</li>
                            </ul>
                        </li>
                    </ul>
                `,
                tableContent: {},
            }
        }

    },
    {
        id: 'LTXH',
        label: 'Lý thuyết xếp hàng',
        chapter: {
            LTXH1: {
                title: 'Tổng quan về lý thuyết xếp hàng',
                outside: `
                    <h4>Mục tiêu</h4>
                    <ul>
                        <li>Hiểu và nắm vững các khái niệm lý thuyết xếp hang, xích Markov
                            và các định nghĩa, đặc trưng của phân phối xác xuất.</li>
                        <li>Nắm cơ bản các phương pháp dự báo và đồ thị cân bằng</li>
                    </ul>
                    <h4>Nội dung</h4>
                    <ol>
                        <li>Khái niệm
                            <ul>
                                <li>Lý thuyết xếp hàng</li>
                                <li>Xích Markov</li>
                                <li>Các khái niệm xác xuất cơ bản</li>
                            </ul>
                        </li>
                        <li>
                            Các phương pháp
                            <ul>
                                <li>Hệ thức Chapman-Kolmogorov và dự báo ngắn hạn</li>
                                <li>Phân phối dừng và dự báo dài hạn</li>
                            </ul>
                        </li>
                        <li>Phương pháp Đồ thị cân bằng ngẫu nhiên</li>
                    </ol>
                `,
                tableContent: {}
            },
            LTXH2: {
                title: 'Lý thuyết xếp hàng',
                outside: `
                    <h4>Mục tiêu</h4>
                    <ul>
                        <li>Mục tiêu của chương này là trình bày những nguyên lý chung của Lý thuyết xếp hàng và phân tích tính toán
                            đối với một số hệ thống xếp hàng phổ biến trong thực tế như: M/M/1, M/M/2, và M/M/s</li>
                        <li>Bài toán đánh giá tính hiệu quả của hệ thống cũng sẽ được đề cập đến thông qua giá trị của thông số đặc
                            trưng</li>
                    </ul>
                    <h4>Nội dung</h4>
                    <ol>
                        <li>Lý thuyết xếp hàng</li>
                        <li>Hệ thống M/M/1</li>
                        <li>Hệ thống M/M/2</li>
                        <li>Hệ thống M/M/s</li>
                    </ol>
                `,
                tableContent: {}
            },
            LTXH3: {
                title: 'Phân tích và đánh giá hệ thống',
                outside: `
                <h2>Mục tiêu</h2>
                <p>Hiểu được các tham số, các yếu tố ảnh hưởng đến một hệ thống hàng chờ thông qua một số ví dụ cụ thể</p>
                <h2>Nội dung</h2>
                <ol>
                    <li>Mô hình mạng các hàng chờ</li>
                    <li>Mạng đơn với 1 hàng chờ</li>
                    <li>Mạng đa liên kết các trung tâm phục vụ</li>
                    <li>Mô hình mạng đa lớp</li>
                    <li>Ứng dụng mô hình xếp hàng</li>
                </ol>
                `,
                tableContent: {}
            },
            LTXH4: {
                title: 'Các công thức cần nhớ',
                outside: `
                    <p>Công thức cần nhớ: <a href="https://docs.google.com/document/d/1xCQO9RyL4ueG8OD6S7GlI_rYYg9FGoPhdgBrYuILUEE/edit?usp=sharing" target="_blank">Link</a></p>
                    <p>Các bài toán chương 2: <a href="https://docs.google.com/document/d/1UcDCdMaDPLKsEhFYcwS9sLukmwOUTq4HJfHFF3JpOFA/edit?usp=sharing" target="_blank">Link</a></p>
                    <p>Các bài toán chương 3: <a href="https://docs.google.com/document/d/1XNgezU9buR0hyVZqajnUK3iw9rHBNQttcBAcb_1lunw/edit?usp=sharing" target="_blank">Link</a></p>
                `,
                tableContent: ''
            }
        }
    },
    {
        id: 'TMDT',
        label: 'Thương mại điện tử',
        chapter: {
            TMDT1: {
                title: 'Tổng quan về thương mại điện tử',
                outside: `
                    <h2>Tình huống khởi động bài</h2>
                    <div id="TinhHuongKhoiDong">
                        <p>Theo Hiệp hội Thương mại điện tử Việt Nam (VECOM), thương mại điện tử nước ta năm 2020 tăng trưởng
                            khoảng 15% so với 2019, đạt quy mô khoảng 13,2 tỷ USD và tiếp tục tăng trưởng vững chắc trong năm 2021
                            ở mức trên 30% và đạt quy mô 15 tỷ USD. Tốc độ tăng trưởng trung bình của thương mại điện tử giai đoạn
                            2016 – 2019 khoảng 30%</p>
                        <p>Theo Báo cáo Thương mại điện tử Đông Nam Á 2020 của Google, Temasek và Bain&Company, thương mại
                            điện tử Việt Nam năm 2020 tăng 16% và đạt quy mô trên 14 tỷ USD. Trong đó, lĩnh vực bán lẻ hàng hóa trực
                            tuyến tăng 46%, gọi xe và đồ ăn công nghệ tăng 34%, tiếp thị, giải trí và trò chơi trực tuyến tăng 18%, riêng
                            lĩnh vực du lịch trực tuyến giảm 28%. Báo cáo này cũng dự đoán tốc độ tăng trưởng trung bình giai đoạn 2020
                            – 2025 là 29% và tới năm 2025 quy mô thương mại điện tử nước ta đạt 52 tỷ USD.</p>
                        <p>Theo Hội thẻ Ngân hàng Việt Nam, doanh số thanh toán chi tiêu theo kênh thương mại điện tử sáu tháng đầu
                            năm 2020 tăng trưởng 17%. Trong đó, doanh số thanh toán chi tiêu thẻ nội địa theo kênh thương mại điện tử
                            tăng tới 81%. Ngược lại, chi tiêu thẻ quốc tế tại kênh thương mại điện tử giảm 16%.
                            Câu hỏi: Lĩnh vực bán lẻ trực tuyến gọi xe, đồ ăn được thực hiện thông qua hệ thống mạng Internet, Intranet
                            hay Extranet?
                            2</p>
                    </div>
                    
                    <h2>Mục tiêu bài học</h2>
                    <ul>
                        <li>Hiểu được thế nào là giao dịch thương mại điện tử</li>
                        <li>Nắm được các cách phân loại thương mại điện tử</li>
                        <li>Hiểu các điều kiện để thương mại điện tử phát triển được</li>
                        <li>Biết phân biệt và áp dụng các mô hình doanh thu thương mại điện tử</li>
                        <li>Hiểu các giai đoạn phát triển của thương mại điện tử.</li>
                    </ul>
                
                    <h2>Cấu trúc nội dung</h2>
                    <div>
                        <p>1.1. Định nghĩa và đặc trưng của thương mại điện tử</p>
                        <p>1.2. Các loại hình giao dịch trong thương mại điện tử</p>
                        <p>1.3. Lợi ích và hạn chế của thương mại điện tử</p>
                        <p>1.4. Ảnh hưởng của thương mại điện tử</p>
                        <p>1.5. Điều kiện để phát triển thương mại điện tử</p>
                    </div>
            
                `,
                tableContent: {}
            },
            TMDT2: {
                title: 'Nền tảng hạ tầng của thương mại điện tử',
                outside: `
                    <h2>Tính huống khởi động bài</h2>
                    <ul>
                        <li>Amazon là một công ty công nghệ quốc gia của Mỹ được thành lập vào năm 1994 tại Bellevue, Washington
                            do Jeff Bezos sáng lập, tập trung chủ yếu vào các hoạt động thương mại điện tử, trí tuệ nhân tạo cũng như
                            điện toán đám mây. Ngày nay, Amazon được xem là một trong 4 ông lớn của công nghệ thế giới, bên cạnh
                            Google, Apple và Facebook.</li>
                        <li>Ban đầu từ mảng bán sách, Amazon đã mở rộng thêm đa dạng lĩnh vực từ bán sách trực tuyến, cung cấp
                            video, âm thanh (mp3), audiobook,... đến các sản phẩm công nghệ như phần mềm, trò chơi, đồ may mặc,
                            thực phẩm, trang sức,... Từ một nhà sách trực tuyến phục vụ nhu cầu mua bán và trao đổi hàng hóa trên
                            internet, sau nhiều năm phát triển, giờ đây, Amazon đã trở thành một trong các công ty hàng đầu về lĩnh
                            vực thương mại điện tử đa quốc gia trên toàn thế giới</li>
                        <li>Hiện nay, “Amazon” đã trở thành một trong những tập đoàn bán lẻ trực tuyến hàng đầu thế giới nổi tiếng
                            trên toàn thế giới, với doanh số bán hàng chiếm khoảng 44% tổng doanh số thương mại điện tử tại Hoa Kỳ.</li>
                        <li>Cơ sở hạ tầng đám mây toàn cầu AWS là nền tảng đám mây bảo mật, rộng lớn và đáng tin cậy nhất, cung
                            cấp trên 200 dịch vụ với đầy đủ tính năng từ các trung tâm dữ liệu trên toàn cầu.
                            <br>
                            Câu hỏi: AWS là gì?
                        </li>
                    </ul>
                
                    <h2>Mục tiêu bài học</h2>
                    <ul>
                        <li>Hiểu về mạng máy tính, các loại mạng máy tính, mạng Internet và một số thuật ngữ về internet ứng dụng trong thương mại điện tử</li>
                        <li>Biết và trình bày được những nguyên lý cơ bản về xây dựng hệ thống website thương mại điện tử trong doanh nghiệp.</li>
                        <li>Hiểu và phân biệt được một số mô hình website thương mại điện tử và website bán hàng điển hình.</li>
                        <li>Hiểu và trình bày được quy trình xây dựng kế hoạch kinh doanh điện tử.</li>
                        <li>Thực hành xây dựng website bằng wordpress.</li>
                    </ul>

                    <h2>Cấu trúc nội dung</h2>
                    <div>
                        <p>2.1. Tổng quan về cơ sở hạ tầng của thương mại điện tử</p>
                        <p>2.2. Hạ tầng công nghệ của thương mại điện tử</p>
                        <p>2.3. website thương mại điện tử</p>
                        <p>2.4. Ứng dụng wordpress xây dựng website thương mại điện tử</p>
                    </div>
                `,
                tableContent: {}
            },
            TMDT3: {
                title: 'Các mô hình kinh doanh trong thương mại điện tử',
                outside: `
                    <h2>TÌNH HUỐNG KHỞI ĐỘNG BÀI</h2>
                    <div>
                    <p>Thương mại điện tử Tiki kinh doanh theo mô hình kết nối giữa doanh nghiệp, người bán hàng nhỏ lẻ với người
                        tiêu dùng nhằm tạo sự nhanh chóng, thuận tiện, tiết kiệm thời gian cho quá trình mua sắm trực tuyến.</p>
                    <p>Trên thương mại điện tử Tiki hiện nay có rất nhiều cá nhân, doanh nghiệp, các nhãn hàng, thương hiệu với đủ
                        sản phẩm khác nhau tham gia kinh doanh.</p>
                    <p>Khách hàng có thể dễ dàng thấy một sản phẩm cùng lúc nhưng với các mức giá khác nhau. Do đó, dù là mua
                        sắm offline hay online, người tiêu dùng cần tìm hiểu kỹ các thông tin sản phẩm, xem review, bình luận từ
                        những người mua trước để tránh mua sản phẩm kém chất lượng.</p>
                    <p>Về phía Tiki cũng đã và đang kiểm soát chặt chẽ về chất lượng sản phẩm của người bán. Đồng thời cũng gợi
                        ý những thương hiệu, nhãn hàng được kiểm duyệt để giúp khách hàng yên tâm hơn.</p>
                    <p>Câu hỏi: Mô hình của Tiki là mô hình kinh doanh nào?</p>
                    </div>
                
                    <h2>MỤC TIÊU BÀI HỌC</h2>
                    <ul>
                    <li>Giúp sinh viên hiểu về loại hình kinh doanh B2C, B2B, B2C.</li>
                    <li>Hiểu thế nào là giao dịch TMĐT B2C.</li>
                    <li>Hiểu được các yếu tố thúc đẩy phát triển TMĐT B2B.</li>
                    <li>Hiểu được bản chất khái niệm TMĐT B2B.</li>
                    <li>Biết cách tìm hiểu thông tin về giao dịch TMĐT B2C của Việt Nam và thế giới.</li>
                    <li>Nắm bắt được các loại công nghệ ứng dụng trong giao dịch điện tử bán lẻ.</li>
                    <li>Nắm bắt xu hướng biến đổi trong giao dịch điện tử bán lẻ B2C.</li>
                    <li>Nắm được những ưu điểm, nhược điểm của giao dịch B2B.</li>
                    <li>Ứng dụng TMĐT B2B trong các hoạt động TMQT.</li>
                    </ul>
                
                    <h2>CẤU TRÚC NỘI DUNG</h2>
                    <div>
                    <p>3.1 Thị trường trong thương mại điện tử</p>
                    <p>3.2 Một số mô hình kinh doanh chủ yếu trong thương mại điện tử B2C</p>
                    <p>3.3 Một số mô hình kinh doanh chủ yếu trong thương mại điện tử B2B</p>
                    <p>3.4 Chính phủ điện tử</p>
                    </div>
                `,
                tableContent: {}
            },
            TMDT4: {
                title: 'Thanh toán trong thương mại điện tử',
                outside: `
                    <h2>TÌNH HUỐNG KHỞI ĐỘNG BÀI</h2>
                    <div>
                        <p>Nhằm giảm thiểu ô nhiễm môi trường và giải quyết vấn đề tắc nghẽn giao thông, Ủy ban nhân dân Thành phố
                            Hà Nội phát động chương trình “Tháng không khói xe”. Căn cứ vào chương trình này, công ty sản xuất xe đạp
                            A đã cung cấp dịch vụ cho thuê xe đạp trực tuyến. Công ty A triển khai dịch vụ này tới 30 điểm cho thuê trong
                            nội thành Hà Nội, khách hàng có nhu cầu thuê xe đạp sẽ lên website để xem kiểu dáng sản phẩm, điểm thuê
                            nào phù hợp nhất với lộ trình, điều kiện thuê và chi phí, các điều kiện và điều khoản trong hợp đồng ký kết...
                            sau đó sẽ kê khai thông tin chi tiết và ký hợp đồng thuê xe</p>
                        <p><b>Câu hỏi</b></p>
                        <p>Các hình thức thanh toán trực tuyến nào có thể được công ty A sử dụng để chấp nhận thanh toán từ phía
                            khách hàng và thực hiện hợp đồng?</p>
                    </div>
                    
                    <h2>MỤC TIÊU BÀI HỌC</h2>
                    <ul>
                        <li>Xác định được các công cụ/công nghệ sử dụng trong thanh toán trực tuyến, các rủi ro có thể xảy ra</li>
                        <li>Hiểu được giao dịch thanh toán thẻ, các thương hiệu thẻ quốc tế, và hệ thống vận hành giao dịch sử dụng thẻ</li>
                    </ul>
                
                    <h2>CẤU TRÚC NỘI DUNG</h2>
                    <div>
                        <p>4.1 Các công cụ thanh toán trực tuyến</p>
                        <p>4.2 Thẻ thanh toán</p>
                        <p>4.3 Các công cụ thanh toán khác</p>
                    </div>
                `,
                tableContent: {}
            },
            TMDT5: {
                title: 'Chiến lược kinh doanh thương mại điện tử và marketing trực tuyến',
                outside: `
                    <h2>Tình huống khởi động bài</h2>
                    <div>
                        <p>Tequila Cascahuin được thành lập năm 1904 tại Jalisco, Mexico. Năm 1999 công ty sử dụng 80 lao động, chủ yếu
                            phục vụ công việc trồng cây và chưng cất tinh dầu. Vào giữa năm 1998, công ty đưa lên mạng một website có hai
                            ngôn ngữ là Tiếng Anh và Tây Ban Nha và khuếch trương bằng cách giới thiệu nó cho các phòng thương mại, các
                            trung tâm thương mại thế giới và các nhà nhập khẩu. Website của công ty cũng được đăng ký trên các danh bạ về
                            ngành rượu bia. Trong vòng một năm, công ty đã giành được nhiều khách hàng mới từ Achentina, Trung Quốc,
                            Pháp, Philippine, Mỹ với kết quả là doanh số bán hàng bổ sung lên tới 3,5 triệu USD/năm.</p>
                        <ul>
                            <li>Điểm mạnh: Được công nhận và ổn định như một doanh nghiệp có tiếng tăm ở Mexico cung cấp loại rượu Tequila
                                tốt nhất</li>
                            <li>Điểm yếu: Nhận thư điện tử mất nhiều thời gian, nhưng chiến lược thư điện tử cũng lại là nguyên nhân cho sự
                                thành công của công ty.</li>
                            <li>Cơ hội: Mở rộng hoạt động của công ty thông qua việc sử dụng Internet và tiếp thị bằng thư điện tử</li>
                            <li>Thách thức: Ngày càng có nhiều công ty hiểu ra sức mạnh của chiến lược tiếp thị bằng thư điện tử và điều đó làm
                                cho chiến lược của công ty không còn là độc nhất nữa và hiệu quả của nó sẽ giảm đi</li>
                        </ul>
                        <p>Câu hỏi: Công ty Tequila Cascahuin đã sử dụng kỹ thuật chiến lược nào để làm rõ mục tiêu đầu tư và xác định
                            những yếu tố khách quan – chủ quan có thể ảnh hưởng đến quá trình đạt được mục tiêu đó?</p>
                    </div>
                    
                    <h2>Mục tiêu bài học</h2>
                    <ul>
                        <li>Hiểu được khái niệm về chiến lược kinh doanh thương mại điện tử trong doanh nghiệp.</li>
                        <li>Biết được chu trình xây dựng chiến lược trong doanh nghiệp.</li>
                        <li>Áp dụng được các mô hình phân tích các yếu tố ảnh hưởng đến hoạt động kinh doanh thương mại điện tử
                        của doanh nghiệp.</li>
                        <li>Hiểu được marketing trực tuyến ảnh hưởng như thế nào tới chiến lược kinh doanh thương mại điện tử.</li>
                        <li>Triển khai được một số hoạt động liên quan đến marketing trực tuyến</li>
                    </ul>
                    
                    <h2>Cấu trúc nội dung</h2>
                    <div>
                        <p>5.1 Chiến lược kinh doanh thương mại điện tử</p>
                        <p>5.2 Phân tích thị trường</p>
                        <p>5.3 Marketing trực tuyến</p>
                        <p>5.4 Mối quan hệ giữa thương mại điện tử và marketing trực tuyến</p>
                    </div>
                `,
                tableContent: {}
            },
            TMDT6: {
                title: 'An ninh/an toàn thương mại điện tử',
                outside: `                
                    <h2>TÌNH HUỐNG KHỞI ĐỘNG BÀI</h2>
                    <div>
                        <p>Trong bài nghiên cứu đăng trên trang web của Viện Chính sách công và các vấn đề toàn cầu của Canada,
                            Ông Pesic, chuyên gia về các vấn đề chính trị, kinh tế, quốc phòng và an ninh cho rằng, thương mại điện tử là
                            lĩnh vực đang phải đối mặt với các mối đe dọa an ninh mạng nhiều nhất, bao gồm cả những ảnh hưởng đến
                            tính riêng tư, chủ quyền dữ liệu, vị trí của các trung tâm dữ liệu, an ninh dữ liệu và luật pháp. Cách đây 30
                            năm, chỉ có 32% giá trị thị trường của 500 công ty dựa trên các tài sản vô hình, chủ yếu là sở hữu trí tuệ. Ngày
                            nay, con số này là 80%, đặt ra vấn đề bảo vệ những tài sản này trước nguy cơ bị tội phạm mạng đánh cắp là
                            điều quan trọng. Do đó, an ninh mạng nhằm bảo vệ quyền sở hữu trí tuệ có tầm quan trọng lớn hơn đối với
                            doanh nghiệp, Chính phủ và giới học giả.</p>
                        <p>Theo ông Pesic, các doanh nghiệp thương mại điện tử phải tự bảo vệ mình bằng cách đảm bảo an ninh cho
                            hệ thống máy tính, kênh truyền thông, máy chủ và mã hóa dữ liệu của khách hàng. Bảo vệ nên bắt đầu với
                            các chiến dịch giáo dục về phạm vi và các loại rủi ro xâm nhập khu vực thương mại điện tử và các thành phố
                            thông minh bằng cách sử dụng mạng Internet.</p>
                        <p>Câu hỏi: Theo ông Pesic, các doanh nghiệp thương mại điện tử phải tự bảo vệ mình bằng cách đảm bảo an
                            ninh như mã hóa dữ liệu của khách hàng, vậy có thể mã hóa như thế nào?</p>
                    </div>

                    <h2>Mục tiêu bài học</h2>
                    <ul>
                        <li>Nhận diện được những rủi ro về an ninh, an toàn trong kinh doanh thương mại điện tử.</li>
                        <li>Nắm được các phương pháp phòng rủi ro về an ninh, an toàn thương mại điện tử.</li>
                        <li>Hiểu được các giải pháp an ninh/an toàn dành cho thương mại điện tử.</li>
                    </ul>

                    <h2>Cấu trúc nội dung</h2>
                    <div>
                        <p>6.1 Rủi ro trong thương mại điện tử</p>
                        <p>6.2 Các đặc điểm có thể phát sinh rủi ro</p>
                        <p>6.3 Một số giải pháp đảm bảo an ninh trong thương mại điện tử</p>
                        <p>6.4 Chính sách và pháp luật của Việt Nam về thương mại điện tử</p>
                    </div>
                `,
                tableContent: {}
            },
            TMDT7: {
                title: 'Một số câu hỏi khó nhớ',
                outside: `
                    <p>Tên tổ chức: <a href="https://docs.google.com/document/d/1yTep71iose10AHzfhZ_11to2N_ZgVH76pGo-JsT3cWY/edit?usp=sharing" target="_blank">Link</a></p>
                    <p>Các bộ luật: <a href="https://docs.google.com/document/d/1h49H021GAQVn-cGdmSNZrlieBLS2r8xZHCcGMfcdVRc/edit?usp=sharing" target="_blank">Link</a></p>
                    <p>Các hình thức kinh doanh điện tử: <a href="https://docs.google.com/document/d/1t9TZ1bR42eJ4D5WOs8ORiFVwWJ6nT6F3Q8kvreZdYsY/edit?usp=sharing" target="_blank">Link</a></p>
                `,
                tableContent: {}
            }
        }
    },
    {
        id: 'PTTKHT',
        label: 'Phân tích thiết kế hệ thống',
        chapter: {
            PTTKHT1: {
                title: `Tổng quan về phân tích, thiết kế hệ thống thông tin`,
                outside: `
                <div>
                    <h3>Tình huống khởi động bài</h3>
                    <p>Ngày nay, ứng dụng công nghệ thông tin vào các hoạt động sản xuất, kinh doanh của doanh nghiệp đã mang
                    lại những hiệu quả nhất định. Việc ứng dụng công nghệ thông tin không chỉ đơn giản là áp dụng tốt cho hoạt
                    động sản xuất kinh doanh của doanh nghiệp mà chúng ta không thể phủ nhận vai trò của CNTT trong các hoạt
                    động cũng như lĩnh vực của đời sống xã hội. Hiện nay các trang web thương mại điện tử trên thế giới cũng
                    như ở Việt Nam đã áp dụng hết sức thành công. Ví dụ: 10 năm trở về trước trang web Amazon là một trang
                    web hết sức hiệu quả, Amazon đang kinh doanh thua lỗ đã trở nên lãi khoảng 70.000.000$/năm. Ngoài ra,
                    Ebay, Shopee hay những trang web thương mại điện tử khác ở Việt Nam như: Vật giá, Chợ điện tử, Tiki,
                    Lazada.vn, Sendo.vn... cũng đang phát triển rất thành công.</p>
                    <p>Câu hỏi: Các website thương mại điện tử (Amazon, Ebay, Shopee, Vật giá, Chợ điện tử, Tiki, Lazada.vn,
                    Sendo.vn) trên có phải hệ thống thông tin không? Nó có vai trò như thứ nào đối với doanh nghiệp?</p>
                </div>
                
                <div>
                    <h3>Mục tiêu bài học</h3>
                
                    <ul>
                    <li>Trình bày được định nghĩa, đặc điểm, các thành phần của hệ thống thông tin, các mô hình, chu kỳ và các giai
                        đoạn phát triển hệ thống thông tin như mô hình thác nước (waterfall), mô hình lặp, mô hình tăng trưởng, quy
                        trình phát triển hệ thống thông tin,...</li>
                    <li>Xác định được bản chất, vai trò và vị trí của hệ thống thông tin quản lý trong một tổ chức.</li>
                    <li>Tổng quan được cách thức tiến hành theo từng bước để phát triển được một hệ thống thông tin có hiệu quả và
                        hiệu lực cho một tổ chức kinh tế xã hội.</li>
                    <li>Chỉ ra được phác họa những nguyên nhân cơ bản của yêu cầu đổi mới hệ thống thông tin.</li>
                    <li>Xác định được cơ cấu tổ chức và vai trò của đội ngũ phát triển hệ thống thông tin quản lý</li>
                    </ul>
                </div>
                
                <div>
                    <h3>Cấu trúc nội dung</h3>
                
                    <ol>
                    <li>Tổng quan về hệ thống thông tin</li>
                    <li>Phát triển hệ thống thông tin</li>
                    <li>Các mô hình phát triển hệ thống thông tin</li>
                    <li>Quy trình phát triển hệ thống thông tin</li>
                    <li>Quy trình tổng quát phân tích và thiết kế hệ thống thông tin</li>
                    </ol>
                </div>
                `,
                tableContent: {}
            },
            PTTKHT2: {
                title: `Khảo sát và lập kế hoạch`,
                outside: `
                    <div id="1">
                        <h3>TÌNH HUỐNG KHỞI ĐỘNG BÀI</h3>
                        <p>Một cơ quan hành chính sự nghiệp cần cần xây dựng hệ thống thông tin quản lý cán bộ công chức của cơ
                        quan mình. Để xây dựng được hệ thống các phân tích viên cần biết các thông tin về hiện trạng của
                        cơ quan như:</p>
                        <ul>
                        <li>Về cơ quan: cơ quan có bao nhiêu phòng ban, chức năng nhiệm vụ của phòng ban, tên, địa chỉ, số điện
                            thoại và trưởng của các phòng ban</li>
                        <li>Về công nhân viên chức của cơ quan: cơ quan có bao nhiêu nhân viên, mỗi nhân viên cần biết thông tin về
                            họ tên, đơn vị công tác, giới tính, ngày sinh, nơi sinh, địa chỉ, dân tộc, tôn giáo, chính trị, trình độ văn
                            hóa,
                            ngoại ngữ, loại hình đào tạo, cựu chiến binh, ngày vào cơ quan, ngày vào biên chế, cha mẹ, vợ, chồng,
                            con, khen thưởng, kỷ luật</li>
                        </ul>
                        <p>Câu hỏi: Để biết được các thông tin trên thì cán bộ xây dựng hệ thống thông tin cần thực hiện công việc gì?
                        Và thực hiện công việc đó như thế nào?</p>
                    </div>
                    
                    <div id="2">
                        <ul>
                        <li>Xác định được vấn đề hoặc cơ hội của tổ chức.</li>
                        <li>Ước định được phạm vi của dự án phát triển HTTT.</li>
                        <li>Dự kiến được những thay đổi có thể sẽ xảy ra</li>
                        <li>Đánh giá được tác động của những thay đổi từ dự án.</li>
                        <li>Đánh giá được tính khả thi của dự án và đưa ra những khuyến nghị.</li>
                        <li>Trình bày được các công việc theo từng bước phải làm kể từ khi nhận được yêu cầu phát triển HTTT quản
                            lý cho đến khi viết bản dự án sơ bộ và dự án được ký duyệt thực hiện</li>
                        </ul>
                    </div>
                    
                    <div id="3">
                        <h3>Cấu trúc nội dung</h3>
                        <ol>
                        <li>Khảo sát hiện trạng hệ thống</li>
                        <li>Xác định yêu cầu</li>
                        <li>Các phương pháp thu thập thông tin</li>
                        <li>Lập kế hoạch xây dựng hệ thống thông tin</li>
                        </ol>
                    </div>
                `,
                tableContent: {}
            },
            PTTKHT3: {
                title: `Phân tích hệ thống hướng chức năng`,
                outside: `
                <div id="1">
    <h3>Tình huống khởi động bài</h3>

    <p>Một doanh nghiệp bán buôn có một số kho hàng. Bộ phận mua hàng lập đơn mua hàng dựa trên báo giá để
      đặt hàng với nhà cung cấp, sau đó theo dõi hàng về. Nếu nhận được hóa đơn giao hàng thì viết phiếu nhập
      kho để nhập hàng vào kho và viết séc chuyển khoản qua ngân hàng để thanh toán với nhà cung cấp. Bộ phận
      bán hàng nhận đơn đặt hàng của khách, viết phiếu xuất kho để xuất hàng cho khách và viết phiếu thu để thu
      tiền của khách hàng. Bộ phận bán hàng phải thường xuyên theo dõi các đơn hàng và khi chấp ký kết hợp
      đồng bán hàng cho khách thì cần biết hàng trong kho còn hay hết, số lượng hàng còn có đủ cho đơn hàng hay
      không, đơn giá bán từng mặt hàng. Vì hiện tại doanh nghiệp đang quản lý thủ công nên các bộ phận rất khó
      theo dõi và cung cấp thông tin cho nhau. Doanh nghiệp muốn xây dựng HTTT quản lý hoạt động kinh doanh.
      Câu hỏi: Phân tích hệ thống thông tin quản lý doanh nghiệp có thể phân thành mấy chức năng? Gồm những
      chức năng nào?</p>
  </div>

  <div id="2">
    <h3>MỤC TIÊU BÀI HỌC</h3>

    <ul>
      <li>Hiểu rõ hệ thống thông tin quản lý của tổ chức, xác định những nguyên nhân gốc rễ của những bất cập
        trong hệ thống quản lý của tổ chức/doanh nghiệp.</li>
      <li>Sử dụng được các công cụ mô hình hóa như sơ đồ luồng thông tin, sơ đồ luồng dữ liệu, sơ chức năng kinh
        doanh hay mô hình quan hệ thực thể để mô tả HTTT quản lý tổ chức/doanh nghiệp</li>
      <li>Xác định được những mục tiêu cần đạt được cho hệ thống thông tin mới và cuối cùng là đưa ra những giải
        pháp hệ thống thông tin mới nhằm đạt được những mục tiêu đã đề ra.</li>
    </ul>
  </div>

  <div id="3">
    <h3>CẤU TRÚC NỘI DUNG</h3>

    <ul>
      <li>Các mức độ mô tả chức năng</li>
      <li>Mô hình hóa hệ thống thông tin</li>
      <li>Các công cụ mô hình hóa trong phân tích hệ thống</li>
    </ul>
  </div>

  <div id="4">
    <h3>Giới thiệu giai đoạn phân tích hệ thống</h3>
    <ul>
      <li>Phân tích thiết kế hệ thống nói chung là sự nhận thức và mô tả một hệ thống; bởi vậy người ta thường dùng
        các mô hình, các biểu đồ để trừu tượng hóa và là công cụ giúp con người trao đổi với nhau trong quá trình
        phát triển hệ thống. Mỗi mô hình là một khuôn dạng để nhận thức về hệ thống và nó mang ý thức chủ quan.</li>
      <li>Mục tiêu của phân tích mô hình xử lý là đưa ra một cách xác định các yêu cầu của người dùng trong quá
        trình phát triển hệ thống, những yêu cầu này được bám sát từ một loạt các sự kiện mà người phân tích thu
        được qua phỏng vấn, điều tra bằng bảng hỏi, nghiên cứu tài liệu và qua quan sát.</li>
    </ul>
  </div>
                `,
                tableContent: {}
            },
            PTTKHT4: {
                title: `Thiết kế hệ thống`,
                outside: `
                <div id="Init">
                <h3>Tình huống khởi động bài</h3>
            
                <p>Cửa hàng hoa Anh Đào là một doanh nghiệp mới thành lập. Các mặt hàng kinh doanh chủ yếu của cửa hàng bao gồm: hoa
                  lụa, cây cảnh và các vật dụng phục vụ trang trí nội thất với nhu cầu giải trí. Là một doanh nghiệp mới thành lập
                  nên hoạt động chủ yếu vẫn mang tính thủ công, dựa vào kinh nghiệm của hệ thống nhân viên. Do đặc điểm lượng hàng
                  hóa nhập xuất ngày càng lớn nên công tác quản lí, mua bán rất mất nhiều thời gian, công sức mà độ chính xác không
                  cao, điều này nhiều khi gây thiệt hại cho công ty. Hoạt động quản lí hàng hóa và mua bán hàng của cửa hàng hoàn
                  toàn thủ công nên bộc lộ những hạn chế sau: Tra cứu thông tin về hàng hóa, khách hàng, lượng hàng tồn … nhiều khi
                  rất mất nhiều thời gian, thiếu chính xác. Việc lưu trữ các thông tin phải sử dụng nhiều loại giấy tờ, sổ sách nên
                  rất cồng kềnh. Tốn nhiều thời gian tổng hợp, báo cáo, thống kê. Không đáp ứng được nhu cầu thông tin phục vụ hàng
                  ngày và mở rộng cửa hàng trong tương lai. Vì vậy, doanh nghiệp đang từng bước hiện đại hóa hệ thống các máy tính
                  và đưa hệ thống thông tin vào sử dụng để dần thay thế công tác quản lý thủ công.</p>
            
                <p><b>Câu hỏi</b>: Để đưa HTTT quản lý vào sử dụng thay thế công tác quản lý thủ thì doanh nghiệp cần phải thiết kế
                  những thành phần nào cho hệ thống?</p>
              </div>
            
              <div id="aim">
                <ul>
                  <li>Thiết kế được HTTT ở mức khái niệm, theo góc nhìn của nhà quản lý</li>
                  <li>Tạo ra được hệ thống tiền đề cho giai đoạn thiết vật lý</li>
                  <li>Thể hiện được HTTT dưới góc nhìn trừu tượng được nhà quản lý, người sử dụng và thiết kế viên hiểu và thống
                    nhất, thiết kế các yếu tố nhìn thấy được của HTTT</li>
                </ul>
              </div>
            
              <div id="tableContent">
                <ol>
                  <li>Các hoạt động chính của giai đoạn thiết kế hệ thống thông tin</li>
                  <li>Thiết kế kiến trúc tổng thể</li>
                  <li>Thiết kế giao diện</li>
                  <li>Thiết kế mạng máy tính</li>
                  <li>Thiết kế an ninh an toàn hệ thống
                  </li>
                </ol>
              </div>
                `,
                tableContent: {}
            },
            PTTKHT5: {
                title: `Thiết kế cơ sở dữ liệu`,
                outside: `
                    <h3>Bài 5. THIẾT KẾ CƠ SỞ DỮ LIỆU</h3>

                    <div id="init">
                    <h4>TÌNH HUỐNG KHỞI ĐỘNG BÀI</h4>
                
                    <p>Trong một Viện nghiên cứu Khoa học hàn lâm quản lý các nhà khoa học và các đề tài nghiên cứu thuộc các lĩnh vực.
                        Lĩnh vực nghiên cứu gồm các thông tin: Mã lĩnh vực, Tên lĩnh vực, Bộ chủ quản; Nhà khoa học gồm các thông tin: Mã
                        nhà khoa học, Tên nhà khoa học, Địa chỉ, Số điện thoại; Đề tài gồm các thông tin: Mã đề tài, Tên đề tài, Tên chủ
                        nhiệm đề tài, Thời gian bắt đầu, Thời gian kết thúc. Được biết Lĩnh vực nghiên cứu, Nhà khoa học và Đề tài cùng
                        liên kết với nhau bởi Nghiên cứu có thông tin Kinh phí, Nguồn và mỗi Lĩnh vực nghiên cứu có thể được Nghiên cứu
                        bởi nhiều Nhà khoa học và có thể Nghiên cứu nhiều Đề tài, mỗi Nhà Khoa học có thể cùng Nghiên cứu trong nhiều Lĩnh
                        vực nghiên cứu khác nhau và có thể Nghiên cứu nhiều Đề tài khác nhau, mỗi Đề tài có thể được Nghiên cứu trong
                        nhiều Lĩnh vực nghiên cứu và có thể được nghiên cứu bời nhiều Nhà khoa học. Viện nghiên cứu đang có nhu cầu thiết
                        kế cơ sở dữ liệu để quản lý hoạt động nghiên cứu của Viện.</p>
                
                    <p><b>Câu hỏi</b>: Cơ sở dữ liệu mô hình quan hệ Viện nghiên cứu chuẩn bị xây dựng để quản lý hoạt động nghiên cứu
                        của Viện gồm những quan hệ nào?</p>
                    </div>
                
                    <div id="aim">
                    <h4>MỤC TIÊU BÀI HỌC</h4>
                
                    <ul>
                        <li>Hiểu và thiết kế được cấu trúc cơ sở dữ liệu từ quá trình mô hình hóa nhằm chuyển đổi các đối tượng từ thế
                        giới thực (Real-world System) sang các bảng trong hệ thống cơ sở dữ liệu (Database System) đáp ứng các yêu cầu
                        lưu trữ và khai thác dữ liệu</li>
                        <li>Hướng dẫn sinh viên từ thiết kế CSDL logic đi từ thông tin đầu ra, chuẩn hóa dữ liệu qua các mức đến thiết kế
                        CSDL vật lý</li>
                        <li>Thiết kế được một cơ sở dữ liệu đi từ thông tin đầu ra qua các bước chuẩn hóa dữ liệu 1NF, 2NF, 3NF và BCNF
                        </li>
                    </ul>
                    </div>
                
                    <div id="tableContent">
                    <h4>CẤU TRÚC NỘI DUNG</h4>
                    <ol>
                        <li>Tổng quan về thiết kế cơ sở dữ liệu</li>
                        <li>Chuẩn hóa dữ liệu</li>
                        <li>Thiết kế cơ sở dữ liệu logic</li>
                        <li>Thiết kế cơ sở dữ liệu vật lý</li>
                    </ol>
                    </div>
                `,
                tableContent: {}
            },
            PTTKHT6: {
                title: `Phân tích và thiết kế hệ thống thông tin theo hướng đối tượng`,
                outside: `
                <div id="init">
    <h4>Tình huống khởi động bài</h4>

    <p>
      Một Công ty muốn xây dựng HTTT để phục vụ và quản lý các hoạt động kinh doanh. Công ty có nhiều điểm
      bán hàng đầu cuối (POST: Point Of Sale Terminal), đó là những cửa hàng, siêu thị,... Do đó, hệ thống cần phải
      ghi nhận các hoạt động bán hàng và xử lý các công việc thanh toán với khách hàng, chủ yếu khách hàng mua
      lẻ. Ngoài ra hệ thống còn giúp lãnh đạo Công ty theo dõi được các hoạt động kinh doanh, tự động kiểm kê các
      mặt hàng tồn đọng trong kho, các mặt hàng bán chạy,... để hỗ trợ ra quyết định trong các hoạt động kinh
      doanh của Công ty. Trong mỗi cửa hàng đầu cuối đều có các thiết bị phần cứng như: máy tính, máy đọc mã
      vạch và phần mềm hệ thống để chạy hệ thống sẽ được xây dựng”
    </p>

    <p>Câu hỏi</p>
    <ul>
      <li>Hệ thống được xây dựng nhằm mục đích gì?</li>
      <li>Có những đối tượng nào phát sinh trong hệ thống?</li>
    </ul>
  </div>

  <div id="aim">
    <h4>Mục tiêu bài học</h4>
    <ul>
      <li>Xác định được các kiểu HTTT và mô hình hệ thống dựa vào cách tiếp cận hướng đối tượng. Các khái niệm
        đối tượng và lớp, đóng gói, quan hệ giữa các lớp sẽ được xem xét ở mức độ vừa phải đủ để sinh viên có
        cái nhìn tổng quan về những kiến thức lập trình hướng đối tượng.</li>
      <li>Hướng dẫn phân tích và thiết kế hướng đối tượng.
        <ul>
          <li>Phần phân tích đề cập đến việc xác định các lớp và quan hệ giữa các lớp, các thuộc tính.</li>
          <li>Phần thiết kế trình bày ánh xạ mô hình lớp phân tích thành mô hình lớp thiết kế, xử lý lưu trữ với cơ sở
            dữ liệu quan hệ, một số vấn đề liên quan đến giao diện người sử dụng, thiết kế các dịch vụ nghiệp vụ.</li>
        </ul>
      </li>
    </ul>
  </div>
                `,
                tableContent: {}
            }
        }
    },
    {
        id: 'LTUDWindows',
        label: 'Lập trình ứng dụng Windows',
        chapter: {
            LTUDWindows1: {
                title: 'Tổng quan về .NET FRAMEWORK',
                outside: `
                <div id="1">
                    <h3>Nội dung bài học</h3>
                    <ol>
                    <li>Giới thiệu về .Net FrameWork</li>
                    <li>Lịch sử phát triển của .Net FrameWork</li>
                    <li>Tiến hóa qua các phiên bản .Net FrameWork</li>
                    </ol>
                </div>

                <p><b>Hướng dẫn cài đặt run C# trên VS code:</b> <a href="https://www.youtube.com/watch?v=RdFgAXUvhYY&feature=youtu.be&ab_channel=GhostTogether" target="_blank">Link Youtube</a></p>
                `,
                tableContent: {}
            },
            LTUDWindows2: {
                title: `NGÔN NGỮ LẬP TRÌNH C#`,
                outside: `
                    <div id="1">
                        <h3>MỤC TIÊU – YÊU CẦU</h3>
                        <ul>
                        <li>Thực hiện được các thao tác tạo Project trong VS C#</li>
                        <li>Hiểu được cách thức biên dịch chương trình, Debug</li>
                        <li>Hiểu rõ các câu lệnh nhập xuất</li>
                        <li>Thực hiện các câu lệnh cơ bản</li>
                        <li>Nắm được các kiểu dữ liệu, khai báo biến, ép kiểu</li>
                        <li>Sử dụng thành thạo các cấu trúc điều khiển cơ bản trong C#</li>
                        </ul>
                    </div>
                    
                    <div id="2">
                        <h3>Nội dung bài học</h3>
                        <ol>
                        <li>1. GIỚI THIỆU VỀ C#</li>
                        <li>2. CẤU TRÚC ĐIỀU KHIỂN TRONG C#</li>
                        <li>3. MẢNG TRONG C#</li>
                        </ol>
                    </div>
                `,
                tableContent: {}
            },
            LTUDWindows3: {
                title: `Hướng đối tượng`,
                outside: `
                <div id="1">
                    <h3>Mục tiêu bài học</h3>
                    <ul>
                    <li>Hiểu và vận dụng được các thành phần của class</li>
                    <li>Nắm vững các mức độ truy cập của class</li>
                    <li>Nắm vững các nguyên tắc kế thừa</li>
                    <li>Hiễu rõ đa hình trong hướng đối tượng</li>
                    <li>Hiễu được cách dùng interface</li>
                    </ul>
                </div>
                
                <div id="2">
                    <h3>Nội dung bài học</h3>
                    <ol>
                    <li>TỔNG QUAN VỀ HƯỚNG ĐỐI TƯỢNG</li>
                    <li>CLASS TRONG C#</li>
                    <li>PHẠM VI TRUY CẬP</li>
                    <li>TỪ KHÓA STATIC</li>
                    <li>KẾ THỪA</li>
                    <li>ĐA HÌNH</li>
                    <li>INTERFACE</li>
                    </ol>
                </div>
                `,
                tableContent: {}
            },
            LTUDWindows4: {
                title: `Lập trình Windows (Winforms)`,
                outside: `
                <h2>Lập trình window</h2>

                <div id="target">
                  <h3>Mục tiêu - yêu cầu</h3>
                  <ul>
                    <li>Hiểu được các thuộc tính, phương thức, sự kiện của các điều khiển cơ bản</li>
                    <li>Nắm vững và thao tác thành thạo với các điều khiển cở bản</li>
                    <li>Hiểu được các thuộc tính, phương thức, sự kiện của các điều khiển nâng cao.</li>
                    <li>Nắm vững và thao tác thành thạo với các điều khiển nâng cao</li>
                  </ul>
                </div>
              
                <div id="tableContent">
                  <ol>
                    <li>WINDOWS FORMS (WINFORMS)</li>
                    <li>ĐIỀU KHIỂN CƠ BẢN</li>
                    <li>ĐIỀU KHIỂN NÂNG CAO</li>
                  </ol>
                </div>
                `,
                tableContent: {}
            },
            LTUDWindows5: {
                title: `Lập trình cơ sở dữ liệu`,
                outside: `
<div id="tableContent">
    <h4>Nội dung</h4>

    <ol>
        <li>Giới thiệu về ADO.NET</li>
        <li>Đối tượng SQLCONNECTION</li>
        <li>Đối tượng SQLCOMMAND</li>
        <li>Đối tượng SQLDATAREADER</li>
        <li>Đối tượng DATA - DATASET</li>
        <li>Tạo báo biểu (REPORT)</li>
    </ol>
    </div>

    <div id="aim">
    <h4>Mục tiêu của bài học</h4>
    <ol>
        <li>Giúp học viên hiểu rõ hơn về khái niệm ADO.NET</li>
        <li>Học viện hiểu các khái niệm và sử dụng được các đối tượng:
        Connection, Command, DataReader, Dataset, DataAdapter</li>
        <li>Giúp học viên tạo được báo biểu (report)</li>
        <li>Lập trình được một phần mềm quản lý</li>
    </ol>
</div>
                `,
                tableContent: {}
            }
        }
    },
    {
        id: 'TKPTDL',
        label: 'Thông kê phân tích dữ liệu',
        chapter: {
            TKPTDL1: {
                title: `Lý thuyết xác xuất`,
                outside: `
                <div id="1">
                <h3>Tình huống khởi động bài</h3>
                <p>Thời gian bảo hành sản phẩm được quy định là 3 năm. Nếu bán được một sản phẩm thì lãi 1,5 triệu đồng, nếu
                  sản phẩm bị hỏng trong thời gian bảo hành thì cửa hàng phải chi phí 1 triệu cho việc bảo hành. Biết rằng tuổi
                  thọ của sản phẩm là biến ngẫu nhiên tuân theo phân phối chuẩn với tuổi thọ trung bình là 4,2 năm và độ lệch
                  chuẩn là 1,4 năm.</p>
                <ul>
                  <li>Tìm trung bình số tiền lãi khi bán mỗi sản phẩm</li>
                  <li>Nếu muốn trung bình số tiền lãi cho mỗi sản phẩm bán ra là 1 triệu thì phải quy định thời gian bảo hành là
                    bao nhiêu?</li>
                </ul>
              </div>
            
              <div id="2">
                <h3>Mục tiêu bài học</h3>
            
                <ul>
                  <li>Hiểu được một số khái niệm cơ bản của lý thuyết xác suất như: biến cố, xác suất của biến cố, biến ngẫu
                    nhiên, kỳ vọng, phương sai,...</li>
                  <li>Biết cách tính xác suất, các tham số đặc trưng của biến ngẫu nhiên</li>
                  <li>Vận dụng được các kiến thức trên để giải quyết một số bài toán mẫu hoặc bài toán thực tế.</li>
                </ul>
              </div>

              <div id="3">
                <h3>Công cụ sử dụng</h3>
                <p>Ngôn ngữ R</p>
                <ul>
                    <li>Offline: R</li>
                    <li>Online: <a href="https://colab.research.google.com/notebook#create=true&language=r" target="_blank">Link</a></li>
                </ul>
              </div>


              <div>
                <h3>Tìm giá trị phân phối Poisson bằng máy tính</h3>
                <p>Clip hướng dẫn: <a href="https://youtu.be/wbOBX-EhPv0" target="__blank">Link</a></p>
              </div>
                `,
                tableContent: {}
            },
            TKPTDL2: {
                title: `Phân tích thống kê mô tả`,
                outside: `
                
  <div id="1">
    <h3>Tình huống khởi động bài</h3>
    <p>
      Trọng lượng một loại gói bánh 250g được đóng bằng máy tự động. Để kiểm tra người ta cân ngẫu nhiên 100 gói bánh ta
      thu được:
    </p>
    <table>
      <tr>
      <tr>
        <th>Trọng lượng (g)</th>
        <td>245</td>
        <td>247</td>
        <td>248</td>
        <td>250</td>
        <td>252</td>
        <td>253</td>
        <td>254</td>
      </tr>
      <tr>
        <td>Số gói</td>
        <td>8</td>
        <td>12</td>
        <td>20</td>
        <td>32</td>
        <td>16</td>
        <td>8</td>
        <td>4</td>
      </tr>
      </tr>
    </table>
    <p>Hãy ước lượng cho trọng lượng trung bình của gói bánh.</p>
    <p>Hãy ước lượng cho mức độ sai lệch (đo bằng độ lệch chuẩn) của trọng lượng gói bánh</p>
  </div>

  <div id="2">
    <h3>Mục tiêu bài học</h3>
    <ul>
      <li>Hiểu được một số khái niệm cơ bản của thống kê cơ bản: lấy mẫu, biểu diễn dữ liệu.</li>
      <li>Tính được một số chỉ số cơ bản: trung bình mẫu, trung vị, phương sai mẫu hiệu chỉnh, độ lệch chuẩn mẫu
        hiệu chỉnh.</li>
      <li>Sử dụng được R để biểu diễn dữ liệu và tính các chỉ số trên</li>
    </ul>
  </div>

                `,
                tableContent: {}
            },
            TKPTDL3: {
                title: 'Phân tích dữ liệu bằng biểu đồ',
                outside: `
                <div id="init">
                <h4>Tình huống khởi động bài</h4>
            
                <ul>
                  <li>Ta có file chol.txt lưu trữ thông tin thu thập về các bệnh nhân liên quan đến cholesterol</li>
                  <li>Hãy đánh giá sơ bộ bằng cách vẽ biểu đồ về bệnh nhân trên các phương diện: giới tính, độ tuổi, ...</li>
                  <li>Mục tiêu:
                    <ul>
                      <li>Giới tính có ảnh hưởng đến bệnh</li>
                      <li>Độ tuổi có ảnh hưởng đến bệnh</li>
                    </ul>
                  </li>
                </ul>
              </div>
            
            
              <div id="aim">
                <h4>Mục tiêu bài học</h4>
                <ul>
                  <li>Hiểu được công dụng của từng loại biểu đồ.</li>
                  <li>Thể hiện được các biểu đồ bằng R</li>
                </ul>
              </div>
            
              <div id="tableContent">
                <ol>
                  <li>Cửa sổ biểu đồ trong R</li>
                  <li>Trục biểu đồ</li>
                  <li>Màu sắc, khung và ký hiệu</li>
                  <li>Biểu đồ thanh (bar plot) và biểu đồ bánh (Pie chart)</li>
                  <li>Biểu đồ phân bố (Histogram)</li>
                  <li>Biểu đồ hộp (Box plot)</li>
                  <li>Biểu đồ tán xạ (Scatter plot)</li>
                </ol>
              </div>
            
              <div id="dataVisualization">
                <ul>
                  <li>Chức năng của Đồ Thị (graph) là truyền tải các "thông tin một cách chính xác và sâu sắc" cho người tiếp nhận
                    thông tin</li>
                  <li>Khi nào chức năng này mà không làm được, hoặc gây hiểu lầm, hoặc não người mất quá nhiều thời gian để hiểu thì
                    đó là <span style="background-color: rgb(234, 36, 72); color: aliceblue;">1 biểu đồ thất bại</span></li>
                  <li>Một đồ thị tốt thì nên là self-explanatory (tự cái hình đã giải thích mọi thứ)</li>
                </ul>
                <p>Tham khảo: <a href="https://sites.google.com/site/c16tcd/cac-dhieu-khien-thuoc-tinh-va-bien-co-chinh-cua-winform" target="_blank">Link</a></p>
                <p>"The simple graph has brought more information to the data analyst's mind than any other device."
                  <br>
                  John Tukey
                </p>
              </div>
            
                `,
                tableContent: {}
            },
            TKPTDL4: {
                title: 'Kiểm định giá thuyết thống kê',
                outside: `
                  <div id="init">
    <h4>Tình huống khởi động bài</h4>

    <ul>
      <li>Ta có file dữ liệu igfdata.csv lưu trữ thông tin thu thập về các đối tượng. Trong nghiên cứu này, ngoài
        các chỉ số liên quan đến giới tính, độ tuổi, trọng lượng, chiều cao và chủng tộc, chúng tôi đo lường các
        hormone liên quan đến tình trạng tăng trưởng như igfi, igfbp3, als, và các chỉ số liên quan đến sự chuyển
        hóa của xương pinp, ictp và pinp. Có 100 đối tượng nghiên cứu.</li>
      <li>Mục tiêu:
        <ul>
          <li>giới tính có bị chênh lệch không?</li>
          <li>Giới tính trong các chủng tộc có như nhau không?</li>
          <li>Có sự khác biệt về chỉ số igfi giữa nam và nữ không?</li>
        </ul>
      </li>
    </ul>
  </div>

  <div id="aim">
    <h4>Mục tiêu bài học</h4>
    <ul>
      <li>Hiểu được về bài toán kiểm định giả thuyết</li>
      <li>Đưa ra được một số quyết định dựa vào dữ liệu thu được và kiểm tra nhận xét đưa ra là đúng
        hay sai</li>
      <li>Sử dụng được phần mềm R để xử lý với dữ liệu.</li>
    </ul>
  </div>

                `,
                tableContent: {}
            },
            TKPTDL5: {
                title: 'Phân tích tương quan và hồi quy',
                outside: `
                <div id="init">
    <h4>Tình huống khởi động bài</h4>
    <ul>
      <li>Chúng ta có một tập dữ liệu về khách hàng tiềm năng</li>
      <li>Dựa vào thông tin để có thể phán đoán khách có mua hàng hay không</li>
      <li>Dựa vào đó để đưa ra chiến lước bán hàng hợp lý với từng khách hàng</li>
    </ul>
  </div>

  <div id="aim">
    <h4>Mục tiêu bài học</h4>
    <ul>
      <li>Học cách phân tích và dự báo dựa vào mô hình hồi quy.</li>
      <li>Lựa chọn mô hình phù hợp với dữ liệu.</li>
      <li>Biết sử dụng phần mềm để phân tích bài toán hồi quy.</li>
    </ul>
  </div>

                `,
                tableContent: {}
            }
        }
    },
    {
        id: 'ATTT',
        label: 'An toàn hệ thống thông tin',
        chapter: {
            ATTT1: {
                title: `Giới thiệu`,
                outside: `
                <iframe frameborder="0" style="width:100%;height:800px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=ChapI_Intro.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1sTvnM-zk4W-kEElXEn1x9BmNW2d4JWvY%26export%3Ddownload"></iframe>

                <div id="tableContent">
                    <ol>
                    <li>Nhu cầu về bảo mật thông tin</li>
                    <li>Các biện pháp ngăn chặn</li>
                    <li>3 mục tiêu - 2 nguyên lý</li>
                    <li>Mật mã học</li>
                    <li>Lịch sử mật mã học</li>
                    <li>Phân loại các thuật toán mật mã học</li>
                    <li>Ứng dụng của mật mã học</li>
                    </ol>
                </div>
                `,
                tableContent: {}
            },
            ATTT2: {
                title: `Cơ sở toán học`,
                outside: `
                    

                    <div id="tableContent">
                        <h4>Nội dung</h4>
                    
                        <ol>
                        <li>Lý thuyết thông tin</li>
                        <li>Lý thuyết độ phức tạp</li>
                        <li>Lý thuyết toán học</li>
                        </ol>
                    </div>            
                `,
                tableContent: {}
            },
            ATTT3: {
                title: `Phân loại các thuật toán mã hóa`,
                outside: `
                    <div id="tableContent">
                        <ul>
                            <li>Thuật toán mã hóa cổ điển
                                <ul>
                                    <li>Thuật toán thay thế (Substitution)</li>
                                    <li>Thuật toán chuyển vị (Tranposition)</li>
                                </ul>
                            </li>
                            <li>Thuật toán mã hóa hiện đại
                                <ul>
                                    <li>Mã hóa đối xứng hay khóa bí mật SKC</li>
                                    <li>Mã hóa bất đối xứng hay khóa công khai và khóa riêng PKC (Public and Private Keys cryptography)
                                    </li>
                                    <li>Hàm băm (Hash function)</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
        

                `,
                tableContent: {}
            },
            ATTT4: {
                title: `Mã đối xứng hiện đại (Mordern symmetric-key ciphers)`,
                outside: `
                <div id="tableContent">
                    <h3>Nội dung</h3>
                
                    <ol>
                    <li>Khái niệm</li>
                    <li>Tiêu chuẩn mã hóa dữ liệu (DES)</li>
                    <li>Tiêu chuẩn mã hóa tiên tiến (AES)</li>
                    <li>Ưu/nhược điểm và phạm vi sử dụng của mã hóa đối xứng</li>
                    <li>Một số phần mềm mã hóa đối xứng</li>
                    </ol>
                </div>
            
                `,
                tableContent: {}
            },
            ATTT5: {
                title: `Chuẩn mã hóa dữ liệu DES`,
                outside: `
                    <div id="tableContent">
                        <h4>Nội dung</h4>
                    
                        <ul>
                        <li>Tổng quan DES
                            <ul>
                            <li>Các thuật ngữ</li>
                            <li>Giới thiệu</li>
                            <li>Đặc điểm</li>
                            </ul>
                        </li>
                        <li>Lưu đồ thuật toán DES</li>
                        <li>Thuật toán sinh khóa con</li>
                        <li>Hoán vị khởi tạo IP và IP<sup>-1</sup></li>
                        <li>Thuật toán sinh khóa, hàm mở rộng E</li>
                        <li>Hộp S-BOX</li>
                        <li>Hộp P-BOX</li>
                        </ul>
                    </div>
                    
                    <div id="1">
                        <h3>Một số thuật ngữ sử dụng</h3>
                    
                        <ul>
                        <li>Encipher - Bộ mã hóa</li>
                        <li>Decipher - Bộ giải mã</li>
                        <li>Plaintext - Bản rõ là dữ liệu gốc chưa được mã hóa</li>
                        <li>Ciphertext - Bản mã là dữ liệu đã được mã hóa</li>
                        <li>Key - Khóa mã là một giá trị được sử dụng để mã hóa và giải mã</li>
                        <li>Round Key - khóa vòng là những giá trị trung gian được tạo ra từ khóa mã trong suốt quá trình mã hóa và giải
                            mã</li>
                        </ul>
                    
                        <h3>Mã hóa khối</h3>
                        <center>
                        <img src="./assets/img/ATTT/Chap5/img1.png" alt="" class="col-12 col-sm-10">
                        </center>
                    </div>
            
                `,
                tableContent: {}
            },
            ATTT6: {
                title: 'Chuẩn mã hóa cao cấp AES',
                outside: `
                    <div id="Content">
                        <h3>Nội dung</h3>
                    
                        <ol>
                        <li>Tổng quan về AES</li>
                        <li>Các khái niệm và định nghĩa</li>
                        <li>Các ký hiệu và quy ước</li>
                        <li>Quá trình mã hóa và giải mã</li>
                        </ol>
                    </div>
                `,
                tableContent: {}
            },
            ATTT7: {
                title: `
                Mã hóa khóa bất đối xứng
                (Asymmetric-key cryptographyre)
                
                `,
                outside: `
                <div id="TableContent">
                    <ul>
                    <li>Khái niệm khóa công khai</li>
                    <li>Hệ mã RSA</li>
                    <li>Giới thiệu một số giải thuật PKC phổ biến
                        <ul>
                        <li>Hệ mã Trapdoor Knapsack</li>
                        <li>Hệ mã ElGamal</li>
                        </ul>
                    </li>
                    </ul>
                </div>            
                `,
                tableContent: {}
            },
            ATTT8: {
                title: `Hàm băm mật mã (Cryptographic hash functions)`,
                outside: `
                <div id="tableContent">
                    <h4>Nội dung</h4>

                    <ol>
                    <li>Khái niệm hàm băm</li>
                    <li>Phương pháp băm</li>
                    <li>Các hàm băm thông dụng</li>
                    <li>Công dụng của hàm băm</li>
                    <li>Hàm băm MD5</li>
                    <li>Hàm băm SHA1</li>
                    </ol>
                </div>
                `,
                tableContent: []
            },
            ATTT9: {
                title: `Chữ ký số và chứng thực điện tử (Digital signature)`,
                outside: `
                    <h4>Nội dung</h4>

                    <p>Chữ ký điện tử</p>
                    <ul>
                    <li>Định nghĩa</li>
                    <li>Ứng dụng của chữ ký điện tử</li>
                    </ul>
                `,
                tableContent: []
            }
        }
    },
    {
        id: 'CNPM',
        label: 'Công nghệ phần mềm',
        chapter: {
            CNPM1: {
                title: 'Tổng quan về Công nghệ phần mềm',
                outside: `
                <iframe frameborder="0" style="width:100%;height:800px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#G1I56FCYN20b-HDic6-HWg3SeOrMzAhjvQ"></iframe>
                    <div id="aim">
                        <ul>
                            <li>Nắm được các khái niệm CNPM</li>
                            <li>Hiểu được phần mềm là gì? Các lớp phần mềm?</li>
                            <li>Hiểu được tiến trình phần mềm là gì? Và các công việc trong CNPM?</li>
                            <li>Nắm được một số mô phát triển của phần mềm?</li>
                        </ul>
                    </div>
                
                    <div id="tableContent">
                        <ul>
                            <li>Khái niệm Công nghệ phần mềm</li>
                            <li>Phần mềm và lớp phần mềm</li>
                            <li>Các công việc trong CNPM</li>
                            <li>Mô hình phát triển phần mềm</li>
                        </ul>
                    </div>
                `,
                tableContent: {}
            },
            CNPM2: {
                title: 'Quản lý dự án',
                outside: `
                <iframe frameborder="0" style="width:100%;height:800px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#G1YlnAwEDJSpFNarEHLzufGYswanRJjv2Y"></iframe>
                <div id="aim">
                    <ul>
                        <li>Nắm được các giai đoạn trong quản lý dự án tin học</li>
                        <li>Lập được kế hoạch cho dự án tin học</li>
                        <li>Nắm được các công việc trong quản lý dự án tin học</li>
                        <li>Ứng dụng quản lý nhóm, quản lý dự án</li>
                    </ul>
                </div>

                <div id="tableContent">
                    <ul>
                        <li>Các giai đoạn quản lý dự án phần mềm</li>
                        <li>Các công việc quản lý dự án</li>
                    </ul>
                </div>
                `,
                tableContent: {}
            },
            CNPM3: {
                title: 'Xác định yêu cầu',
                outside: `
                <div id="aim">
                    <iframe frameborder="0" style="width:100%;height:800px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#G1K4a2mhPQN3WST06Z5d8Ks4aVSxIVEbjy"></iframe>
                    <h4>Mục tiêu</h4>
                    <ol>
                        <li>Xác định được các nguyên nhân thất bại của dự án</li>
                        <li>Nắm được quy trình xác định yêu cầu của dự án</li>
                        <li>Phân tích được các yêu cầu trong quá trình phát triển phần mềm</li>
                        <li>Ứng dụng xác định yêu cầu của dự án bài tập</li>
                    </ol>
                </div>

                <div id="IdenticalRequire">
                    <h4>Xác định yêu cầu</h4>

                    <ul>
                        <li>Xác định yêu cầu là 1 bước quan trọng</li>
                        <li>Các yếu tố gây ra thất bại
                            <ul>
                                <li>Không hoàn chỉnh</li>
                                <li>Thiếu sự hỗ trợ về quản lý</li>
                                <li>Thiếu sự quan tâm</li>
                                <li>Thay đổi các yêu cầu và đặc tả</li>
                                <li>Mong muốn không thực tế</li>
                                <li>Thiếu việc lập kế hoạch</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div id="tableContent">
                    <h4>Nội dung</h4>

                    <ul>
                        <li>Quy trình xác định các yêu cầu</li>
                        <li>Thu thập các yêu cầu</li>
                        <li>Phân loại yêu cầu</li>
                        <li>Các đặc trưng của yêu cầu</li>
                        <li>Các ký hiệu mô hình hóa</li>
                        <li>Các ngôn ngữ đặc tả</li>
                        <li>Lập bản mẫu cho các yêu cầu</li>
                    </ul>
                </div>
                `,
                tableContent: {}
            },
            CNPM4: {
                title: 'Phân tích và thiết kế phần mềm',
                outside: `
                    <div id="aim">
                    <h3>Mục tiêu phần 0</h3>
            
                        <ul>
                            <li>Nắm được lý thuyết liên quan đến phân tích và thiết kế phần mềm</li>
                            <li>Nắm được nội dung cơ bản của thiết kế kiến trúc, thiết kế chi tiết, thiết kế giao diện, thiết kế thuật
                                toán làm nền tảng để học các phần tiếp theo</li>
                        </ul>
                    </div>

                    <div class="aim">
                        <h3>Mục tiêu phần 1</h3>
                        <ul>
                            <li>Nắm được các khái niệm cơ bản liên quan đến thiết kế CSDL</li>
                            <li>Ứng dụng bài đã học vào việc thiết kế một chương trình thực tế</li>
                        </ul>
                    </div>

                    <div id="aim">
                        <h3>Mục tiêu phần 2</h3>
                        <ul>
                            <li>Nắm được cơ bản về mô hình dữ liệu mức luận lý, quá trình chuyển đổi từ mô hình CDM sang mô hình dữ liệu
                                mức luận lý</li>
                            <li>Áp dụng các quy tắc chuyển đổi để thực hiện chuyển đổi mô hình</li>
                            <li>Áp dụng giải quyết được bài toán thiết kế dự án</li>
                        </ul>
                    </div>

                    <div id="aim">
                        <h3>Mục tiêu phần 3</h3>
                
                        <ul>
                            <li>Nắm được các khái niệm liên quan đến thiết kế xử lý</li>
                            <li>Xây dựng được sơ đồ xử lý của chương trình ở mức cơ bản cấp 0, cấp 1</li>
                        </ul>
                    </div>

                    <div id="aim">
                    <h3>Mục tiêu phần 4</h3>
                    <ul>
                        <li>Nắm được nguyên lý thiết kế tổng quát cho việc thiết kế giao diện người dùng</li>
                        <li>Nắm được các kiểu tương tác khác nhau và ứng dụng của chúng</li>
                        <li>Biết cách sử dụng các công cụ để biểu diễn thông tin</li>
                        <li>Nắm được các thuộc tính dùng được (usability) và các cách đánh giá hệ thống</li>
                    </ul>
                </div>
                `,
                tableContent: {}
            },
            CNPM5: {
                title: 'Thực thi',
                outside: `
                <div id="aim">
                    <h4>Mục tiêu</h4>
                    <ul>
                        <li>Nắm được các khái niệm liên quan đến thực thi</li>
                        <li>Hiểu được việc lựa chọn ngôn ngữ lập trình, cấu trúc dữ liệu,...</li>
                        <li>Nắm được các nguyên tắc về lập trình</li>
                        <li>Ứng dụng vào việc tìm một chương trình lập trình phù hợp với nhu cầu sử dụng</li>
                    </ul>
                </div>

                `,
                tableContent: {}
            },
            CNPM6: {
                title: 'Kiểm thử phần mềm',
                outside: `
                <div id="aim">
                    <h4>Mục tiêu</h4>

                    <ul>
                        <li>Nắm được các khái niệm về kiểm thử</li>
                        <li>Nắm được các dạng kiểm thử và ứng dụng giải bài tập</li>
                        <li>Nắm được kiểm thử hệ thống và các phương pháp kiểm thử hệ thống</li>
                        <li>Nắm được phương pháp để viết tài liệu kiểm thử</li>
                    </ul>
                </div>

                <div id="tableContent">
                    <h4>Nội dung</h4>
                    <ul>
                        <li>Phần 1: Kiểm thử chương trình</li>
                        <li>Phần 2: Kiểm thử hệ thống</li>
                        <li>Phần 3: Ước lượng lỗi và thời gian kiểm thử (Tìm hiểu thêm)</li>
                    </ul>
                </div>
                `,
                tableContent: {}
            }
        }
    },
    {
        id: 'LTTBDD',
        label: 'Lập trình thiết bị di động',
        chapter: {
            LTTBDD1: {
                title: 'Giới thiệu về Android',
                outside: `
                <div id="init">
                    <h3>Tình huống khởi động bài</h3>

                    <ul>
                    <li>Tú muốn xây dựng một ứng dụng Android, vậy Tú cần phải bắt đầu như thế nào?</li>
                    <li>Trước hết Tú cần hiểu hệ thống Android</li>
                    <li>Hiểu kiến trước hệ thống Android để có thể triển khai ứng dụng</li>
                    <li>Biết cách sử dụng môi trường phát triển Android Studio</li>
                    </ul>

                    <p>=> Bài học này giúp Tú hiểu kiến trúc hệ thống android và sử dụng công cụ phát triển Android Studio</p>
                </div>

                <div id="aim">
                    <ul>
                    <li>Nắm được lịch sử phát triển của Android</li>
                    <li>Xác định được kiến trúc và môi trường phát triển của Android</li>
                    <li>Hiểu được cách tạo project Android trên Eclipse</li>
                    <li>Hiểu và xác định được cấu trúc project</li>
                    <li>Biên dịch và gỡ lỗi ứng dụng</li>
                    </ul>
                </div>

                <div id="tableContent">
                    <h3>Cấu trúc nội dung</h3>

                    <ul>
                    <li>Giới thiệu về Android</li>
                    <li>Sử dụng Android Studio</li>
                    </ul>
                </div>

                `,
                tableContent: {}
            },
            LTTBDD2: {
                title: 'Các thành phần cơ bản của ứng dụng Android',
                outside: `
                <div id="init">
                    <h3>Tình huống khởi động bài</h3>

                    <p>Sau khi Tú hiểu kiến trúc hệ thống Android và sử dụng công cụ phát triển Android Studio, vậy Tú cần làm gì để có
                    thể xây dựng được ứng dụng?</p>

                    <ul>
                    <li>Tú cần tìm hiểu các thành phần cơ bản của hệ thống android</li>
                    <li>Hiểu về vòng đời của Activity</li>
                    <li>Hiểu về vòng đời của Service</li>
                    <li>Hiểu về Intent</li>
                    </ul>

                    <p>=> Bài học này giúp Tú hiểu về các thành phần cơ bản của hệ thống Android cũng như vòng đời của Activity, Service
                    </p>
                </div>

                <div id="aim">
                    <h3>Mục tiêu bài học</h3>
                    <ul>
                    <li>Nắm được các thành phần của android</li>
                    <li>Sử dụng được công cụ activity</li>
                    </ul>
                </div>


                <div id="tableContent">
                    <h3>Cấu trúc nội dung</h3>

                    <ul>
                    <li>Các thành phần cơ bản của Android</li>
                    <li>Activity và vòng đời của Activity</li>
                    </ul>
                </div>
                `,
                tableContent: {}
            },
            LTTBDD3: {
                title: 'Giao diện người dùng',
                outside: `
                <div id="init">
                <ul>
                  <li>Sau khi đã hiểu thành phần của ứng dụng android, giờ đây muốn xây dựng giao diện thì Tú cần phải bắt đầu như
                    thế nào?</li>
                  <li>Đầu tiên Tú nắm được hệ thống layout trong android</li>
                  <li>Tiếp theo Tú phải biết cách sử dụng các widget trong android</li>
                </ul>
            
                <p>=>Bài học này giúp Tú hiểu về các layout cũng như các widget trong ứng dụng android</p>
              </div>
            
              <div id="aiming">
                <ul>
                  <li>Hiểu và thiết kế giao diện Mobile</li>
                  <li>Sử dụng layout của ứng dụng Android, các widget cơ bản</li>
                </ul>
              </div>
                `,
                tableContent: {}
            },
            LTTBDD4: {
                title: 'INTENT, INTENT FILTER, CUSTOM LISVIEW',
                outside: `
                <div id="init">
                <h4>Tình huống khởi động bài</h4>
            
                <p>Sau khi đã thiết kế xong giao diện người dùng. Tú cần thực hiện truyền dữ liệu giữa các Activity, vậy Tú cần làm
                  gì?</p>
            
                <ul>
                  <li>Trước hết Tú cần tìm hiểu về Intent và Intent filter</li>
                  <li>Biết cách sử dụng bundle</li>
                  <li>Biết cách sử dụng bộ lọc filter</li>
                </ul>
            
                <p>-> Bài học này giúp Tú hiểu về Intent và Intent Filter cũng như cách sử dụng Bundle trong android</p>
              </div>
            
              <div id="aim">
                <h4>Mục tiêu bài học</h4>
                <ul>
                  <li>Nắm được khái niệm URI</li>
                  <li>Hiểu được ứng dụng Intent và Intent filter</li>
                  <li>Xác định được các loại Intent, tham số của Intent</li>
                  <li>Hiểu và vận dụng được Action/data trong Intent, Bundle và truyền tải dữ liệu, Custom ListView</li>
                </ul>
              </div>
            
              <div id="tableContent">
                <h4>Cấu trúc nội dung</h4>
                <ol>
                  <li>Intent và Intent filter</li>
                  <li>Custom ListView</li>
                </ol>
              </div>
                `,
                tableContent: {}
            },
            LTTBDD5: {
                title: 'Giới thiệu SQLite',
                outside: `
                <div id="init">
    <h4>Tính huống khởi động bài</h4>

    <p>Sau khi có thể sử dụng Intent thành thạo, vậy Tú cần làm gì để lưu trữ dữ liệu?</p>
    <ul>
      <li>Trước hết Tú hiểu về SQLite</li>
      <li>Biết cách sử dụng kiểu dữ liệu trong SQLite</li>
      <li>Biết cách tạo CSDL, bảng dữ liệu và lớp OpenHelper trong SQLite</li>
    </ul>
    <p>=> Bài học này giúp Tú hiểu về SQLite, tạo CSDL SQLite, tạo bảng dữ liệu và lớp OpenHelper</p>
  </div>

  <div id="aim">
    <h4>Mục tiêu bài học</h4>
    <ul>
      <li>Xác định được tính năng và các kiểu dữ liệu SQLite</li>
      <li>Sử dụng được SQLiteOpenHelper</li>
      <li>Hiểu và biết cách tạo Database và Table</li>
    </ul>
  </div>

  <div id="tableContent">
    <h4>Cấu trúc nội dung</h4>
    <ol>
      <li>SQLite</li>
      <li>SQLiteOpenHelper</li>
      <li>Giới thiệu chung về SharedPreference</li>
    </ol>
  </div>
                `,
                tableContent: {}
            },
            LTTBDD6: {
                title: 'Xử lý dữ liệu với SQLite',
                outside: `
                <div id="init">
    <h4>Khởi động bài</h4>
    <p>Sau khi Tú đã tạo cơ sở dữ liệu và bảng dữ liệu, làm thế nào để Tú có thể lưu trữ dữu liệu trong SQLite?</p>

    <ul>
      <li>Trước hết Tú cần tổ chức theo cấu trúc ứng dụng</li>
      <li>Biết cách viết function trong Class DAO</li>
      <li>Biết xử lý các tác vụ Thêm, Sửa, Xóa, Hiển thị dữ liệu</li>
    </ul>

    <p>-> Bài học này giúp Tú thực hiện các công việc trên</p>
  </div>


  <div id="aim">
    <h4>Mục tiêu bài học</h4>
    <ul>
      <li>Hiểu được cách tổ chức cấu trúc ứng dụng</li>
      <li>Biết cách tạo Class DAO</li>
      <li>Sử dụng được các thao tác xem, thêm, xóa, sửa</li>
      <li>Nắm được webview</li>
    </ul>
  </div>

  <div id="tableContent">
    <ol>
      <li>Tổ chức cấu trúc ứng dụng</li>
      <li>Thao tác với database</li>
      <li>WebView</li>
    </ol>
  </div>
                `,
                tableContent: {}
            }
        }
    }
]







// console.log(Subject[0].chapter.CA_chap0.tableContent.P11.title)
// console.log(Object.keys(Subject[0].chapter.CA_chap0.tableContent))


