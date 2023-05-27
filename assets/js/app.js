
window.onscroll = function () { PosScroll() };

function PosScroll() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("tableContent").className = "fixed-pos";
    } else {
        document.getElementById("tableContent").className = "";
    }
}

const GetPracticeQuestion = async (sheetname) => {
    let query = "SELECT A,B, C"

    // https://docs.google.com/spreadsheets/d/e/2PACX-1vSUYWqsDpb03q_fsrCXr-sHLuPTmUP55IfEmictGyVZzRy9tAodF4oXXrjH8S--wgYkCuSB2L0W7OCC/pubhtml
    let id = "1EbxWHV84ZAz_2CiycP_R4MVWIzxq2qhMpqzdnrG0Fqc"
    query = encodeURIComponent(query);
    try {
        let api = await axios({
            url: 'https://docs.google.com/spreadsheets/d/' + id + '/gviz/tq?sheet={sheetname}&tq=' + query,
            data: {},
            method: 'get',
            headers: {
                Accept: 'application/json'
            }
        })

        console.log(api)
        console.log(JSON.parse(api.data.substr(47).slice(0, -2)).table);

        let col = JSON.parse(api.data.substr(47).slice(0, -2)).table.cols;
        let row = JSON.parse(api.data.substr(47).slice(0, -2)).table.rows;
        row.shift()

        var temp = `<div class="accordion" id="content">`;
            row.map((element, index) => {
                temp += `
                    <div class="accordion-item">\n
                        <h2 class="accordion-header">\n
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#`+ element.c[1].v + `" aria-expanded="true" aria-controls="` + element.c[1].v + `">
                                `+ element.c[0].v + `
                            </button>
                        </h2>\n
                        <div id="`+ element.c[1].v + `" class="accordion-collapse collapse" data-bs-parent="#content">
                            <div class="accordion-body">\n        
                                <center>
                                    <iframe class="col-12" src="`+ element.c[2].v + `" height="300px" scrolling="no"></iframe>
                                </center>
                            </div>\n
                        </div>\n
                    </div>    
                `;

                
            });
        temp += `</div>`;
        


        Home(dataAPI = temp)
    } catch (err) {
        console.log(err);
    }
}

// GetPracticeQuestion(sheetname = 'General')
// console.log(GetQuestion("LTUDWindows"))

// https://docs.google.com/spreadsheets/d/e/2PACX-1vSUYWqsDpb03q_fsrCXr-sHLuPTmUP55IfEmictGyVZzRy9tAodF4oXXrjH8S--wgYkCuSB2L0W7OCC
var templateContent = `
    <div id="content">
        <center><iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSUYWqsDpb03q_fsrCXr-sHLuPTmUP55IfEmictGyVZzRy9tAodF4oXXrjH8S--wgYkCuSB2L0W7OCC/pubhtml?widget=true&amp;headers=false" style="width: 100%; height: 400px;" scrolling="no"></iframe></center>
    </div>
`




async function Home(dataAPI, subjectid, chapid) {
    $('#left-col').css('display', 'none');
    $('#middle-col').attr('class', 'col-sm-9 col-lg-9');
    // console.log(dataAPI)
    var content = new Vue({
        el: "#content",
        template: dataAPI,
        data: {
            chapid: chapid,
            subjectid: subjectid,
            Subjects: Subject
        }
    })


}


function GetContent(dataAPI, subjectid, chapid) {
    $('#left-col').css('display', 'block');
    $('#middle-col').attr('class', 'col-sm-6 col-lg-6');
    var content = new Vue({
        el: "#content",
        template: dataAPI,
        data: {
            chapid: chapid,
            subjectid: subjectid,
            Subjects: Subject
        }
    })
}

function GetTableContent(dataAPI, subjectid, chapid) {
    var tableContent = new Vue({
        el: "#tableContent",
        template: dataAPI,
        data: {
            chapid: chapid,
            subjectid: subjectid,
            Subjects: Subject
        },
    })
}


// GetTableContent(tableContentTemplate)

var subjectList = new Vue({
    el: "#subject-list",
    template: subjectTemplate,
    data: {
        Subjects: Subject,
        count: 0
    },
    methods: {
        countplus() {
            this.count = this.count + 1;
            console.log(this.count);
            return this.count;
        },
        collapsible(el, id) {
            el = document.getElementById(el)
            if ($('div#' + id)[0].className.includes('show-not')) {
                $('div#' + id).removeClass('show-not').addClass('show');
                el.children[0].className = 'fa fa-angle-down';
            } else {
                $('div#' + id).removeClass('show').addClass('show-not');
                el.children[0].className = 'fa fa-angle-right';
            }
        },
        GetTemplate(subjectID, ChapID) {

            var tableContentTemplate = `
                    <div id="tableContent">
                        <center><h3>Mục lục</h3></center>
                        <div v-for="subject in Subjects">
                            <div v-if="subject.id == subjectid" id="accordion">
                                <div class="card" v-for="item in Object.keys(subject.chapter[chapid].tableContent)">
                                    <div class="card-header">
                                        <a class="text-decoration-none" data-bs-toggle="collapse" :href="'#'+item">
                                            {{ subject.chapter[chapid].tableContent[item].title }}
                                        </a>
                                    </div>
                                    <div :id="item" class="collapse" data-bs-parent="#accordion">
                                        <div class="card-body">
                                            <ul class="list-group">
                                                <li v-for="ele in subject.chapter[chapid].tableContent[item].index" class="list-group-item">
                                                    <a :href="'#'+ele[1]" class="text-decoration-none">{{ ele[0] }}</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            GetTableContent(tableContentTemplate, subjectID, ChapID)


            content = `
                    <div id="content">
                        
                        <div v-for="subject in Subjects">
                            <center v-if="subject.id == subjectid"><h2>{{ subject.chapter[chapid].title }}</h2></center>
                            <div v-if="subject.id == subjectid" id="accordion">
                            <div v-if="subject.id == subjectid" v-html="subject.chapter[chapid].outside"></div>
                            <div class="card mb-2" v-for="item in Object.keys(subject.chapter[chapid].tableContent)">
                                        
                                        <div class="card-header">
                                            <a :href="'#'+item+'_c'" class="card-link text-decoration-none" data-bs-toggle="collapse">
                                                {{ subject.chapter[chapid].tableContent[item].title }}
                                            </a>
                                        </div>
                                        <div :id="item+'_c'" class="collapse" data-bs-parent="#accordion">
                                            <div class="card-body">
                                                <ul class="list-group">
                                                    <li v-for="ele in subject.chapter[chapid].tableContent[item].index" class="list-group-item">
                                                        <a :href="'#'+ele[1]" class="text-decoration-none" data-bs-toggle="collapse">{{ ele[0] }}</a>
                                                        <br>
                                                        <div :id="ele[1]" class="collapse">
                                                            <div v-html="ele[2]"></div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </điv>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                `
            GetContent(content, subjectID, ChapID)

        },
        UpdateData(subjectID, ChapID) {
            $('loading').css('visibility', 'visible')
            if ($('#' + ChapID).length == 0) {
                $("<script />", {
                    id: ChapID,
                    src: ListData[subjectID][ChapID].src
                }).appendTo("head");
            }
            var i = 0
            for (i = 0; i < Subject.length; i++) {
                if (Subject[i].id == subjectID) {
                    if ($('#' + ChapID).length != 0) {
                        this.Subjects[i].chapter[ChapID].tableContent = eval(ListData[subjectID][ChapID].varName)
                        Subject[i].chapter[ChapID].tableContent = eval(ListData[subjectID][ChapID].varName)
                    }
                    break;
                }
            }

            this.GetTemplate(subjectID, ChapID)

        }
    }
})

window.onload = function () { GetPracticeQuestion(sheetname = 'General'); }