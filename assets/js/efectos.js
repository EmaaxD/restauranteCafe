$(document).ready(function () {

   // Efecto Menu
   $('.menu a').each(function(index, elements) {
       $(this).css({
            'top': '-200px'
       });

       $(this).animate({ top: 0 }, 2000 + (index * 500));
   });

   // Efecto Header
   if ($(window).width() > 800) {
       $('header .textos').css({
           'opacity': 0,
           'marginTop':0
       });

       $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
   }

   // Scroll Elementos Menu
   var acercade = $('#acerca-de').offset().top,
       menu = $('#platillos').offset().top,
       galeria = $('#galeria').offset().top,
       ubicacion = $('#ubicacion').offset().top;

   $('#btn-acerca-de').on('click', function (event) {
       event.preventDefault();
       $('html, body').animate({
            scrollTop: acercade - 35
       }, 500);
   });

   $('#btn-menu').on('click', function (event) {
       event.preventDefault();
       $('html, body').animate({
            scrollTop: menu - 10
       }, 500);
   });

   $('#btn-galeria').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: galeria
        }, 500);
    });

    $('#btn-ubicacion').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
             scrollTop: ubicacion
        }, 500);
    });
});