$('.Works_slider').slick({
        dots: true,
        adaptiveHeight: true
    }
);

$('.team__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1
});
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTheTop').fadeIn();
        } else {
            $('#toTheTop').fadeOut();

        }
    });

    $('#toTheTop').click(function () {

        $('body,html').animate({scrollTop: 0}, 800);
    });
});

function initMap() {
    var uluru = {lat: 46.44672145, lng: 30.74932142};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}