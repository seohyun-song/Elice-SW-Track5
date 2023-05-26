// import close from "./assets/close_icon.svg";
// import media from "./assets/media_icon.svg";
// import arrow from "./assets/arrow_back_icon.svg";
import close from "./assets/close_icon.svg";
import media from "./assets/media_icon.svg";
import arrow from "./assets/arrow_back_icon.svg";

const modal = `
                <div class="modal__close">
                  <img
                  width="22px"
                  height="22px"
                  src=${close}
                  alt="close_icon_logo"
                  />
                </div>
                <div class="modal__card">
                  <div class="modal__header">
                    <div class="modal__back">
                      <img width="32px" height="24px" src=${arrow} alt="arrow_back_icon" />
                    </div>
                    <h2>새 게시물 만들기</h2>
                    <p>공유하기</p>
                  </div>
                  <div class="modal__main">
                    <img src=${media} alt="media_icon" />
                    <h3>사진과 동영상을 업로드 해보세요.</h3>
                    <label for="file">
                      <p>컴퓨터에서 선택</p>
                    </label>
                    <input type="file" name="file" id="file" />
                  </div>
                </div>
              `;

// 지시사항에 맞춰 자바스크립트 코드를 작성하세요.
const $modalOpenBtn = document.getElementById("add-post");

function modalOpen() {
    const $modalLayout = document.createElement("div");
    $modalLayout.setAttribute("class", "modal__layout");
    $modalLayout.innerHTML = modal;

    document.body.prepend($modalLayout);

    const $modalClose = document.querySelector(".modal__close > img");
    function modalClose() {
        document.body.removeChild($modalLayout);
    }

    $modalClose.addEventListener("click", modalClose);
}

$modalOpenBtn.addEventListener("click", modalOpen);
