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
            let revealPoint = 150;
            if (revealTop < windowHeight - revealPoint)
                revealElement[i].classList.add('active');
            else 
                revealElement[i].classList.remove('active'); 
        }
    }
    $(".burger-icon").click(function() {
        $(".navMobile").toggleClass("mobile");
    });
    $(".burger-icon").click(function() {
        $(".topBun").toggleClass("topBunRotate").toggleClass("afterTop");
    });
    $(".burger-icon").click(function() {
        $(".patty").toggleClass("pattyRotate").toggleClass("afterPatty");
    });
    $(".burger-icon").click(function() {
        $(".bottomBun").toggleClass("bottomBunRotate").toggleClass("afterBottom");
    });
    $(".products > a").click(function() {
        $(".product").toggleClass("open");
    //    if ($(".navMobile.product").css('display') === 'none' ) $(".navMobile.product").css('display','block !important');
    //    else $(".navMobile.product").css('display','none !important');
    });
    
}); 


// automatically adjust clip-path's percentage