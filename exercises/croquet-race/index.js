// 1) Scroll Navigation
const $aTags = document.querySelectorAll("#header a");

[...$aTags].forEach((el) => {
    el.onclick = function (e) {
        // 해당 이벤트에 대한 사용자 에이전트의 기본 동작 실행하지 않도록 지정
        e.preventDefault();
        const $target = document.querySelector(this.getAttribute("href"));

        window.scrollTo({
            behavior: "smooth",
            top: $target.offsetTop,
        });
    };
});

// 2) Image Auto Slider
const $slider = document.getElementById("slider");
const $slides = $slider.querySelector(".slides");
const $slide = $slides.querySelectorAll(".slide");

let currentSlide = 0;

// 일정 시간마다 반복적으로 코드 실행
setInterval(function () {
    let from = -(1024 * currentSlide);
    let to = from - 1024;

    // animate(keyframe, options)
    $slides.animate(
        {
            marginLeft: [from + "px", to + "px"], // [from, to]
        },
        {
            duration: 1000,
            easing: "ease",
            iterations: 1,
            fill: "both",
        }
    );

    currentSlide++;
    if (currentSlide === $slide.length - 1) currentSlide = 0;
}, 3000);

// 3) Tabs
const $tabBtns = document.querySelectorAll(".tabs-list > li a");
const $tabConts = document.querySelectorAll(".tabs .tab");

$tabBtns.forEach((tab) => {
    tab.addEventListener("click", function (e) {
        e.preventDefault();
        const $target = e.currentTarget;
        const tabId = $target.getAttribute("href");
        $tabBtns.forEach((tab) => {
            tab.parentNode.classList.remove("active");
        });
        $tabConts.forEach((cont) => {
            cont.classList.remove("active");
        });

        document.querySelector(tabId).classList.add("active");
        $target.parentNode.classList.add("active");
    });
});

// 4) FadeInOut Image Slider
const $rightArrow = document.querySelector(".right-arrow");
$rightArrow.addEventListener("click", function () {
    const $currentSlide = document.querySelector("#photo .slide.active");

    let $nextSlide = $currentSlide.nextElementSibling;

    if ($nextSlide === null)
        $nextSlide = $currentSlide.parentElement.firstElementChild;

    $currentSlide.animate(
        {
            opacity: [1, 0],
        },
        {
            duration: 500,
            easing: "ease",
            iterations: 1,
            fill: "both",
        }
    );

    $currentSlide.classList.remove("active");

    $nextSlide.animate(
        {
            opacity: [0, 1],
        },
        {
            duration: 500,
            easing: "ease",
            iterations: 1,
            fill: "both",
        }
    );

    $nextSlide.classList.add("active");
});

const $leftArrow = document.querySelector(".left-arrow");
$leftArrow.addEventListener("click", function () {
    const $currentSlide = document.querySelector("#photo .slide.active");

    let $previousSlide = $currentSlide.previousElementSibling;

    if ($previousSlide === null)
        $previousSlide = $currentSlide.parentElement.lastElementChild;

    $currentSlide.animate(
        {
            opacity: [1, 0],
        },
        {
            duration: 500,
            easing: "ease",
            iterations: 1,
            fill: "both",
        }
    );

    $currentSlide.classList.remove("active");

    $previousSlide.animate(
        {
            opacity: [0, 1],
        },
        {
            duration: 500,
            easing: "ease",
            iterations: 1,
            fill: "both",
        }
    );

    $previousSlide.classList.add("active");
});
