$('body').bind('wheel', e => {
    const delta = e.deltaY;
    const section = $(window).height();
    const item = $('.fixed-menu__item');

    if(delta===section) {
        item.addClass('active')
    }
})