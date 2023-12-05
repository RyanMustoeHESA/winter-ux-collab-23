/*!
 * JUSP v2.0
 * Copyright The University of Manchester 2014
 */
// +TOC ("On this page")
// -ScrollSpy
// -Affix

$(function () {


    if ($('#myTab').length > 0) {
        $('#myTab a:last').tab('show');
    }

    if ($('.nav-toc').length > 0) {
        $('#nav-wrapper').height($("#nav2").height());
        $('.nav-toc').affix({
            offset: {
                top: 94,
                bottom: function () {
                    return (this.bottom = $('.footer').outerHeight(true))
                }
            }
        });

    }
});
//Animated scroll function 
$("nav ul li a[href^='#']").on('click', function(e) {
   e.preventDefault();
   var hash = this.hash;
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top
     }, 350, function(){
       window.location.hash = hash;
     });
});
$("nav a[href^='#']").on('click', function(e) {
   e.preventDefault();
   var hash = this.hash;
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top
     }, 350, function(){
       window.location.hash = hash;
     });
});
