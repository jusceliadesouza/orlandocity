$(document).ready(function () {
  $("#logo").on("mouseover", function () {
    $("#banner h1").addClass("efeito")
  }).on("mouseout", function () {
    $("#banner h1").removeClass("efeito")
  });

  $("#input-search").on("focus", function () {
    $("li.search").addClass('active')
  }).on("blur", function () {
    $("li.search").removeClass('active')
  });

  $(".thumbnails").owlCarousel({
    loop: true,
    margin: 10,
    // nav: true,
    // navText: ["Anterior", "Próximo"],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 3
      },
      768: {
        items: 4
      }
    }
  })
});