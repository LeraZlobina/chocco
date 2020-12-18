const openItem = item => {
    

    const container = item.closest('.team__item');
    const wrapper = container.find('.team__desc-wrapper');
    const block = wrapper.find(".team__desc");
    const result = block.height();
    

    container.addClass('active');

    wrapper.height(result);
    
}

const closeAllItem = container => {
    const items = container.find('.team__desc-wrapper');
    const itemBlock = container.find('.team__item');

    itemBlock.removeClass('active');


    items.height(0)
}

$('.team__link').on('click', e =>{
    e.preventDefault();

    const $this = $(e.currentTarget);
    const container = $this.closest('.team');
    const elemBlock = $this.closest('.team__item');
    const elemTriangle = $this.find('.team__link-triangle');

    if(elemBlock.hasClass('active')){
        closeAllItem(container);
    } else {
        closeAllItem(container);
        openItem($this);
    }   
    
})







/*$('.employee__header-link').on('click', e => {

    let pic = $('.employee__header-triangle');
    let block = $('.employee__desc-wrapper');
    let result = $('.employee__desc').height();

    pic.css('transform','rotate(180deg)');

    block.height(result);


})*/
