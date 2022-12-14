
var templateContent = `
    <div id="content">
        <center><iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSUYWqsDpb03q_fsrCXr-sHLuPTmUP55IfEmictGyVZzRy9tAodF4oXXrjH8S--wgYkCuSB2L0W7OCC/pubhtml?widget=true&amp;headers=false" style="width: 100%; height: 400px;" scrolling="no"></iframe></center>
    </div>
`
// var templateTableContent = `
//     <ul>
//         <li>Text 1</li>
//         <li>Text 2</li>
//         <li>Text 3</li>
//     </ul>
// `;




function GetContent(dataAPI, subjectid, chapid) {
    var content = new Vue ({
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

GetContent(templateContent)
// GetTableContent(tableContentTemplate)

var subjectList = new Vue ({
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
            console.log(el.children[0].className)
            // console.log(el.childNodes[1].className)
            if ($('div#'+id)[0].className.includes('show-not')) {
                $('div#'+id).removeClass('show-not').addClass('show');
                el.children[0].className = 'fa fa-angle-down';
            } else {
                $('div#'+id).removeClass('show').addClass('show-not');
                el.children[0].className = 'fa fa-angle-right';
            }
        },
        GetTemplate(subjectID, ChapID) {
            // console.log(ChapID);
            // console.log(subjectID)
            var tableContentTemplate = `
                    <div id="tableContent">
                        <center><h3>M???c l???c</h3></center>
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
                                    </??iv>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                `
                GetContent(content, subjectID, ChapID)
        }
    },
    computed: {
        
    }
})