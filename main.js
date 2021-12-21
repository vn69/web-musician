const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const header = $(".header-top");
const menuTouch = $(".menu-bar__body");
const menuBtn = $("#menu-btn");

window.onscroll = () => {
  showHeader();
};

function showHeader() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    header.classList.add("header-scroll-sticky");
    return;
  }
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    header.classList.add("header-scroll");
    return;
  } else {
    header.classList.remove("header-scroll", "header-scroll-sticky");
  }
}

menuBtn.onclick = () => {
  menuTouch.classList.toggle("menu-bar__body-show");
};
