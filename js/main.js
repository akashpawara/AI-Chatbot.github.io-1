

$(window).on("load",function(){
    // preloader 
$(".preloader").fadeOut("slow")
})






$(document).ready(function(){
// Nav bar shrink
$(window).on("scroll",function(){
if($(this).scrollTop() >90){
    $(".navbar").addClass("navbar-shrink")
}
else{
    $(".navbar").removeClass("navbar-shrink")
}
});





// video popup 
const videoSrc=$("#player-1").attr("src");
$(".video-play-btn,.video-popup").on("click",function(){
if($(".video-popup").hasClass("open")){
$(".video-popup").removeClass("open");
$("#player-1").attr("src","")
}
else{
    $(".video-popup").addClass("open");
    if($("#player-1").attr("src")==''){
        $("#player-1").attr("src",videoSrc);
    }
    
}


});

//feature owl carousel
$('.features-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})

//app screenshot carousel 
$('.screenshots-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})

//testimonial carousel 
$('.testimonials-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})

//team carousle
$('.team-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})


//page scrolling scroll it
$.scrollIt({
    topOffset:-50
});

// navbar collapse 
$(".nav-link").on("click",function(){
    $(".navbar-collapse").collapse("hide");
})

// toggle theme -light and dark mode

function toggleTheme(){
    if(localStorage.getItem("chatbot-theme") !==null){
        if(localStorage.getItem("chatbot-theme") ==="dark") {
            $("body").addClass("dark");
        }  
        else{
            $("body").removeClass("dark");
        }

    }
    updateIcon();
}

toggleTheme();
$(".toggle-theme").on("click",function(){
    $("body").toggleClass("dark");
    if($("body").hasClass("dark")){
        localStorage.setItem("chatbot-theme","dark");

    }
    else{
        localStorage.setItem("chatbot-theme","light");
    }
    updateIcon();
})

function updateIcon(){
    if($("body").hasClass("dark")){
        $(".toggle-theme i").removeClass("fa-moon");
        $(".toggle-theme i").addClass("fa-sun");
    }
    else{
        $(".toggle-theme i").removeClass("fa-sun");
        $(".toggle-theme i").addClass("fa-moon");

    }

}


});