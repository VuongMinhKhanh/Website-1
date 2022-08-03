//Scroll down to sponsors h3 => activate animation
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
}); 

// automatically adjust clip-path's percentage