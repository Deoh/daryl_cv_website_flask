$(document).ready(function () {
    // Landing page animation
    $(".fadeIn").fadeIn(3000);
    
    $(".homepage-bg").delay(100).animate({ height: "50vh" }, 1500);

    // Navbar anchor link animation
    // $("a[href*='#']").click(function () {
        
        // Transferable skills animation
        // $(".skill-per").delay(1500).each(function () {
        //     let per = $(this).attr("per")
        //     $(this).animate({ width: `${per}%` }, 1500) // for reference per+"%" 
        // });
        // Language skills animation
        // $(".lang-skill-per").each(function () {
        //     let per = $(this).attr("per")
        //     $(this).css({ width: `${per}%` }, 1500) // for reference per+"%" 
        // });
        // return false // stops anchor refreshing the page
    // });

    // Navbar colour change on scrolling
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $(".skill-per").each(function () {
                let per = $(this).attr("per")
                $(this).animate({ width: `${per}%` }, 1500) // for reference per+"%" 
            });
        };
        if ($(document).scrollTop() > 150) {
            $(".cv-nav").addClass("bg-color-nav");
        } else {
            $(".cv-nav").removeClass("bg-color-nav");
        };
        if ($(document).scrollTop() > 200) {
            $(".lang-skill-per").each(function () {
                let per = $(this).attr("per")
                $(this).css({ width: `${per}%` }) // for reference per+"%" 
            });
        };
    });
});