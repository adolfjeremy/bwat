import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick-theme.scss";
import "slick-carousel/slick/slick.scss";

$(".projects_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    easing: "ease-in-out",
    speed: 1000,
    arrows: false,
    autoplaySpeed: 3000,
});
