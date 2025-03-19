$(function () {
  //*********** */
  //*tab 메뉴
  //*********** */

  const tabMenu = $(".tab-menu a");

  tabMenu.on("click", function (e) {
    e.preventDefault();
    let activeTabCon = $(this).attr("data-tab");
    console.log(activeTabCon);
    $(".tab-con").hide();
    $("#" + activeTabCon).show();

    tabMenu.removeClass("on");
    $(this).addClass("on");

    tabMenu.attr("title", "");
    $(this).attr("title", "선택됨");
  });

  console.log(tabMenu);

  //*********** */
  //*gnb 메뉴
  //*********** */

  const mainHeader = $(".main-header"),
    gnb = $("#gnb"),
    gnbLi = gnb.children("li"),
    dep1 = gnbLi.children("a"),
    dep2 = gnbLi.children("ul.depth2");

  /* gnbLi.mouseenter(function(){
            console.log('마우스 들어감')
        })

        gnbLi.mouseleave(function(){
            console.log('마우스 떠남')
        }) */

  gnbLi
    .on("mouseenter", function () {
      mainHeader.addClass("on");
      $(this).children(".depth2").fadeIn(300);
    })
    .on("mouseleave", function () {
      mainHeader.removeClass("on");
      $(this).children(".depth2").fadeOut(300);
    });

  console.log(dep2);

  /* **************
        swiper 슬라이드
        // ************** */

  let swiper = new Swiper("#main-slide", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  });

  /* ************
      quick-menu
    **************/
}); /////문서가 준비되면 작업 끝
