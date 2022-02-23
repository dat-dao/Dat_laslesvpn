$(document).ready(function () {
  $(".commet--all__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: false,
    autoplay: true,
    autoplaySpeed: 3000,
    Infinity: true,
    centerMode: true,
    dots: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],

    prevArrow: `<button type='button' class='slick-prev pull-left'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
  });
});

$(".counter").each(function () {
  var $this = $(this),
    countTo = $this.attr("data-count");

  $({ countNum: $this.text() }).animate(
    {
      countNum: countTo,
    },
    {
      duration: 5000,
      easing: "linear",
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
        //alert('finished');
      },
    }
  );
});

$(document).ready(function () {
  //khi lăn chuột
  $(window).scroll(function () {
    // kiểm tra điều kiện > 300 thì mới addClass
    if ($(window).scrollTop() > 50) {
      $(".container-header").addClass("active");
    } else {
      $(".container-header").removeClass("active");
    }
  });
});

// Menu rp
$(document).ready(function () {
  $(".btn--menu__res").click(function () {
    $(".header--menu__responsive").slideToggle();
  });
});
