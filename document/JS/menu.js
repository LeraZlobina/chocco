var hamburger = document.querySelector('.hamburger');
var fullscreen = document.querySelector('.fullscreen-menu');
var close = document.querySelector('.close__icon');

hamburger.addEventListener('click', function(e)
    {
        e.preventDefault();
        fullscreen.style.display = 'flex';
        document.body.classList.add("scroll-none");
    }
);

close.addEventListener('click', function(e)
    {
        e.preventDefault();
        fullscreen.style.display = 'none';
        document.body.classList.remove("scroll-none");

    }
)