$(document).ready(function(){

// efecto menu
    $('.menu a').each(function(index, elemento){
    	$(this).css({
    		'top': '-200px'
    	});
    	$(this).animate({
    		top: '0'
    	}, 2000 + (index * 500));
    });

//efecto header
   if($(window).width() > 800){
      $('header .textos').css({
         opacity: 0,
         marginTop: 0

      });

       $('header .textos').animate({
         opacity: 1,
         marginTop: '-52'
        },1000);
   }

   //Scroll Elementos Menu

   var acercaDe = $('#acerca-de').offset().top,
   menu = $('#platillos').offset().top,
   galeria = $('#galeria').offset().top,
   ubicacion = $('#ubicacion').offset().top;
   app = $('#app').offset().top;

   $('#btn-acerca-de').on('click', function(e){
   	e.preventDefault();
    $('html, body').animate({
    	scrollTop: 380
    }, 500);
   });

    $('#btn-menu').on('click', function(e){
   	e.preventDefault();
    $('html, body').animate({
    	scrollTop: menu
    }, 500);
   });

     $('#btn-galeria').on('click', function(e){
   	e.preventDefault();
    $('html, body').animate({
    	scrollTop: galeria
    }, 500);
   });

      $('#btn-ubicacion').on('click', function(e){
   	e.preventDefault();
    $('html, body').animate({
    	scrollTop: ubicacion
    }, 500);
   });


$('#btn-app').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: app
    }, 500);
   });
}); 