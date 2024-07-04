/// <reference types="../@types/jquery" />;

let max = 100;
const countDate = new Date("Dec 31, 2024 23:59:59").getTime();

$(".toogleSide").on("click", function () {
  $(".links").animate({ width: "toggle" }, 1000);
});
$(".exit").on("click", function () {
  $(".links").animate({ width: "toggle" }, 1000);
});

$(".cardsdetail h2").on("click", function (e) {
  $(".cardsdetail p").not($(e.target).next()).slideUp(500);
  $(e.target).next().slideToggle(500);
});

window.addEventListener("load", function () {
  const counter = setInterval(() => {
    const nowDate = new Date().getTime();
    let difference = countDate - nowDate;
    let day = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hour = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let min = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((difference % (1000 * 60)) / 1000);
    $(".day").html(`${day} d`);
    $(".hour").html(`${hour} h`);
    $(".min").html(`${min} m`);
    $(".sec").html(`${sec} s`);

    if (difference < 0) {
      clearInterval(counter);
      $(".day").html(`The `);
      $(".hour").html(`Counter `);
      $(".min").html(`Is `);
      $(".sec").html(`End `);
    }
  }, 1000);
});

$("textarea").on("input", function () {
  let letterNeeded = max - $("textarea").val().length;
  if (letterNeeded >= 0) {
    $(".textChange").html(letterNeeded);
  } else {
    $(".textChange").html("Letter Is Finished");
  }
});

$(window).on("scroll", function () {
  let currentScroll = $(window).scrollTop();
  if (currentScroll > 230) {
    $(".toogle").css("display", "none");
  } else {
    $(".toogle").css("display", "block");
  }
});

$("a").on("click", function (e) {
  let href = e.target.getAttribute("href");
  let sectionOffset = $(href).offset().top;
  $("body,html").animate({ scrollTop: sectionOffset }, 1000);
});
