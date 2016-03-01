$(function() {


    /* STEP TABS */
    var controls = $('.step-tabs').find('li');

    var content  = $('.step');

    controls.on('click', function() {

        $(this).addClass('active').siblings().removeClass('active');

        var el = $(this).data('href');

        content.hide();

        $.each(content, function(index, item) {
           $(item).hasClass(el) ? $(item).fadeIn() : false;
        });

    });



    /* PACKAGES TOGGLE */
    var packagesToggles = $('.package-toggle a');

    packagesToggles.on('click', function(e) {
        e.preventDefault();

        var href1 = $(this).attr('href');
        var href2 = $(this).siblings().attr('href');

        $(href2).hide();
        $(href1).fadeIn();

        $(this).siblings().removeClass('active');

        $(this).hasClass('active') ? false : $(this).addClass('active');
    });


    // OWL CAROUSEL

    $("#owl-example").owlCarousel({
        singleItem:true,
        lazyLoad : true
    });

    $(window).resize(function() {
        if ( $(window).width() < 768 ) {
            $("#owl-example").css('display', 'none');
        } else {
            $("#owl-example").css('display', 'block');
        }
    });




}());