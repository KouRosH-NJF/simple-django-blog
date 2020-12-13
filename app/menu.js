const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');
            
        //animate links
        navLinks.forEach((link, index) => {
            const delay = (index / 7) + "s";
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = 'navLinkFade 1s ease ' + delay + ' forwards';   
            }
        });
        //burger animation
        burger.classList.toggle("toggle");
        

    });

    
}

navSlide();