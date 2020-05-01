$('.header__navbar-toggle').click(function(e) {
    e.preventDefault();
    $('.header__navbar').toggleClass('is-open')
    $('.article').toggleClass('is-open')
    
})