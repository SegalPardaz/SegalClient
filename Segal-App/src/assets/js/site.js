
  $( document ).ready(function() {
    const swiper = new Swiper('.swiper-container', {
        autoplay: {
          delay: 1000,
        },
      });
      $(".tabs").click(function () {
        const swiper = new Swiper('.swiper-container', {
          autoplay: {
            delay: 1000,
          },
        });
      });
    console.log( "ready!" );
});
  !function () { var i = "y1iTgc", a = window, d = document; function g() { var g = d.createElement("script"), s = "https://www.goftino.com/widget/" + i, l = localStorage.getItem("goftino_" + i); g.async = !0, g.src = l ? s + "?o=" + l : s; d.getElementsByTagName("head")[0].appendChild(g); } "complete" === d.readyState ? g() : a.attachEvent ? a.attachEvent("onload", g) : a.addEventListener("load", g, !1); }();
