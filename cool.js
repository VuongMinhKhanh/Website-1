//Scroll down to elements => activate css
$(document).ready(function(){
    window.addEventListener('scroll', reveal);
    function reveal() 
    {
        var revealElement = document.querySelectorAll('.reveal');
        for (let i = 0; i < revealElement.length; i++)
        {
            let windowHeight = window.innerHeight;
            let revealTop = revealElement[i].getBoundingClientRect().top;
            let revealPoint = 100;
            if (revealTop < windowHeight - revealPoint)
                revealElement[i].classList.add('active');
            else 
                revealElement[i].classList.remove('active'); 
        }
    }
    $(".burger-icon").click(function() {
        $(".navMobile").toggleClass("mobile");
        $(this).toggleClass("touched2");
    });
    $(".products > a").click(function() {
        $(".product").toggleClass("open");
        $(".arrow").toggleClass("arrowRotate");
    });
    $(".picFrame > input[type=button]").click(function() {
        $(this).next().addClass("appear");//next = .moreImages
    })
    $(".close, a").click(function() {
        //:not(.picFrame > input[type=button])
        $(".moreImages").removeClass("appear");
    })
    
}); 


// automatically adjust clip-path's percentage