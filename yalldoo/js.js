$(document).ready(function() {
$("a.scroll").click(function () {
     elementClick = $(this).attr("href");
     destination = $(elementClick).offset().top;
       $('html').animate( { scrollTop: destination }, 800 );
     return false;
   });
 });
