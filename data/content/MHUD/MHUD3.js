let url_MHUD3 = `https://s3.cloud.cmctelecom.vn/tvu/IT/220248_MayHocUngDung/Video/Bai3/`

let MHUD3 = {
    MHUD01: {
        title: 'Giới thiệu về phương trình đường thẳng',
        index: [
            ['Nhận xét đường thẳng', 'MHUD011', VideoScript(`${url_MHUD3}3.1.mp4#t=0,45`)],
            ['Phương trình tổng quát của đường thẳng', 'MHUD012', VideoScript(`${url_MHUD3}3.1.mp4#t=45,112`)],
            ['Xét trường hợp 2 đường thẳng khác nhau hệ số bias', 'MHUD013', VideoScript(`${url_MHUD3}3.1.mp4#t=112`)],
        ]
    },
    MHUD02: {
        title: 'Giới thiệu về mạng nơ-ron nhân tạo',
        index: [
            ['Phân lớp bằng phương trình đường thẳng', 'MHUD021', VideoScript(`${url_MHUD3}3.2.mp4#t=41,316`)],
            ['Hoạt động của một noron thần kinh', 'MHUD022', `${VideoScript(`${url_MHUD3}3.2.mp4#t=316,400`)}`],
            ['Mạng nơ-ron nhân tạo', 'MHUD023', `
            <p class="d-inline-flex gap-1">
    <a 
      class="btn btn-primary" 
      data-bs-toggle="collapse" 
      href="#collapse1" 
      role="button" 
      aria-expanded="false"  
      aria-controls="collapse1"
    >
      Khái niệm mạng nơ-ron nhân tạo
    </a>
    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse2" role="button" aria-expanded="false"
      aria-controls="collapse2">
      Cấu trúc nơ-ron nhân tạo
    </a>
    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse3" role="button" aria-expanded="false"
      aria-controls="collapse3">
      Các thành phần của một nơ-ron nhân tạo
    </a>
    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse4" role="button" aria-expanded="false"
      aria-controls="collapse4">
      Hàm kích hoạt
    </a>
    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse5" role="button" aria-expanded="false"
      aria-controls="collapse5">
      Cấu trúc mạng nơ-ron cơ bản
    </a>
    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse6" role="button" aria-expanded="false"
      aria-controls="collapse6">
      Phân loại kiến trúc mạng
    </a>
  </p>
  <div>
    <div class="collapse" id="collapse1">
      <div class="card card-body">
        ${VideoScript(`${url_MHUD3}3.2.mp4#t=400,441`)}
      </div>
    </div>
    <div class="collapse" id="collapse2">
      <div class="card card-body">
        ${VideoScript(`${url_MHUD3}3.2.mp4#t=441,521`)}
      </div>
    </div>
    <div class="collapse" id="collapse3">
      <div class="card card-body">
        ${VideoScript(`${url_MHUD3}3.2.mp4#t=521,636`)}
      </div>
    </div>
    <div class="collapse" id="collapse4">
      <div class="card card-body">
        <p class="d-inline-flex gap-1">
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse41" role="button" aria-expanded="false" aria-controls="collapseExample">
            Hàm truyền hard limit
          </a>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse42" role="button" aria-expanded="false" aria-controls="collapseExample">
            Hàm truyền đạt log-sigmoid
          </a>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse43" role="button" aria-expanded="false" aria-controls="collapseExample">
            Một số hàm kích hoạt khác
          </a>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse44" role="button" aria-expanded="false" aria-controls="collapseExample">
            Ví dụ 1. Nơ-ron (một nút) một đầu vào và một đầu ra
          </a>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse45" role="button" aria-expanded="false" aria-controls="collapseExample">
            Ví dụ 2. Nơ-ron (một nút) hai đầu vào và một đầu ra
          </a>
        </p>
        <div>
          <div class="collapse" id="collapse41">
            <div class="card card-body">
              ${VideoScript(`${url_MHUD3}3.2.mp4#t=636,709`)}
            </div>
          </div>
          <div class="collapse" id="collapse42">
            <div class="card card-body">
              ${VideoScript(`${url_MHUD3}3.2.mp4#t=709,752`)}
            </div>
          </div>
          <div class="collapse" id="collapse43">
            <div class="card card-body">
              ${VideoScript(`${url_MHUD3}3.2.mp4#t=752,775`)}
            </div>
          </div>
          <div class="collapse" id="collapse44">
            <div class="card card-body">
              ${VideoScript(`${url_MHUD3}3.2.mp4#t=775,917`)}
            </div>
          </div>
          <div class="collapse" id="collapse45">
            <div class="card card-body">
              ${VideoScript(`${url_MHUD3}3.2.mp4#t=917,1000`)}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="collapse" id="collapse5">
      <div class="card card-body">
        ${VideoScript(`${url_MHUD3}3.2.mp4#t=1000,1152`)}
      </div>
    </div>
    <div class="collapse" id="collapse6">
      <div class="card card-body">
        
        <p class="d-inline-flex gap-1">
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse61" role="button" aria-expanded="false" aria-controls="collapse61">
            Phân loại kiến trúc mạng
          </a>
          
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse62" role="button" aria-expanded="false" aria-controls="collapse62">
            Single-layer feed forward
          </a>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse63" role="button" aria-expanded="false" aria-controls="collapse63">
            Multi-layer feed-forward
          </a>
        </p>
        <div>
          <div class="collapse" id="collapse61">
            <div class="card card-body">
              ${VideoScript(`${url_MHUD3}3.2.mp4#t=1152,1185`)}
            </div>
          </div>
          <div class="collapse" id="collapse62">
            <div class="card card-body">
              ${VideoScript(`${url_MHUD3}3.2.mp4#t=1185,1221`)}
            </div>
          </div>
          <div class="collapse" id="collapse63">
            <div class="card card-body">
              ${VideoScript(`${url_MHUD3}3.2.mp4#t=1221,1256`)}
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
            `],
        ]
    },
    MHUD03: {
        title: 'Biểu diễn các tham số của mạng nơ-ron',
        index: [
            ['Video', 'MHUD031', VideoScript(`${url_MHUD3}3.3.mp4`)]
        ]
    },
    MHUD04: {
        title: 'Mạng Perceptron',
        index: [
            ['Video', 'MHUD041', VideoScript(`${url_MHUD3}3.4.mp4`)]
        ]
    },
    MHUD05: {
        title: 'Hồi quy tuyến tính P1',
        index: [
            ['Video 1', 'MHUD051', VideoScript(`${url_MHUD3}3.5_P1.mp4`)],
            ['Video 2', 'MHUD052', VideoScript(`${url_MHUD3}3.5_P2.mp4`)],
        ]
    },
    MHUD06: {
        title: 'Kết thúc bài',
        index: [
            ['Video', 'MHUD061', VideoScript(`${url_MHUD3}KTB.mp4`)]
        ]
    }
}