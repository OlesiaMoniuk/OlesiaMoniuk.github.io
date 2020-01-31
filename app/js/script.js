
console.log("Load script.js");


var app = {};


jQuery(document).ready(function ($) {
    var gadgetSlider = $(".slider");

    gadgetSlider.each(function() {
        if ($(this).is(".sliderType1")) {
            $(this).slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    dots: true,
                    arrows: false,
                    infinite: true,
                    cssEase: 'linear',
                    // responsive: [{
                        //     breakpoint: 600,
                        //     settings: {
                        //       slidesToShow: 2,
                        //       slidesToScroll: 1
                        //     }
                        //   },
                        //   {
                        //      breakpoint: 400,
                        //      settings: {
                        //         arrows: false,
                        //         slidesToShow: 1,
                        //         slidesToScroll: 1
                        //      }
                        //   }]
          });
        } 
        else if ($(this).is(".sliderType2")){
          $(this).slick({
                slidesToShow: 4,
                slidesToScroll: 4,
                speed: 500,
                autoplay: true,
                autoplaySpeed: 5000,
                dots: false,
                arrows: true,
                infinite: true,
                cssEase: 'linear',
                prevArrow: '<button class="slide-arrow prev-arrow"></button>',
                nextArrow: '<button class="slide-arrow next-arrow"></button>'
                // responsive: [{
                //     breakpoint: 600,
                //     settings: {
                //       slidesToShow: 2,
                //       slidesToScroll: 1
                //     }
                //   },
                //   {
                //      breakpoint: 400,
                //      settings: {
                //         arrows: false,
                //         slidesToShow: 1,
                //         slidesToScroll: 1
                //      }
                //   }]
          });
        }
        else {
          $(this).slick();
        }
      })   
    });
$(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});

// Cookies script start
(function () {
    "use strict";

    var cookieAlert = document.querySelector(".cookiealert");
    var acceptCookies = document.querySelector(".acceptcookies");

    if (!cookieAlert) {
       return;
    }

    cookieAlert.offsetHeight;

    if (!getCookie("acceptCookies")) {
        cookieAlert.classList.add("show");
    }

    acceptCookies.addEventListener("click", function () {
        setCookie("acceptCookies", true, 365);
        cookieAlert.classList.remove("show");
    });

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
})();
// Cookies script end
function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}

$(document).ready(function(){

    var quantitiy=0;
       $('.quantity-right-plus').click(function(e){
            
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity').val());
            
            // If is not undefined
                
                $('#quantity').val(quantity + 1);
    
              
                // Increment
            
        });
    
         $('.quantity-left-minus').click(function(e){
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity').val());
            
            // If is not undefined
          
                // Increment
                if(quantity>0){
                $('#quantity').val(quantity - 1);
                }
        });
        
    });
// read more button start
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
// read more button end