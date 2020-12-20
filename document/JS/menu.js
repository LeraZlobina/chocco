var hamburger = document.querySelector('.hamburger');
var fullscreen = document.querySelector('.fullscreen-menu');
var close = document.querySelector('.close__icon');

hamburger.addEventListener('click', function(e)
    {
        e.preventDefault();
        fullscreen.style.display = 'flex';
    }
);

close.addEventListener('click', function(e)
    {
        e.preventDefault();
        fullscreen.style.display = 'none';
    }
)