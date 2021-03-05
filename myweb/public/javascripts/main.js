let bindMenu = function (btnId, pageSelector, column ) {
    if(!column) column= false
    $(btnId).click(function () {
        $('section').removeClass('active').addClass('inactive');
        $(pageSelector).removeClass('inactive');
        $('.menu-btn').trigger('click');
        $('.menu-nav__item').removeClass('active');
        $('.menu-nav__item.' + btnId.slice(1)).addClass('active');
        $("html, body").animate({scrollTop: 0}, "fast");
        if (column) {
            $('.social-icons').addClass('column');
            $('footer').addClass('column');
        } else {
            $('.social-icons').removeClass('column');
            $('footer').removeClass('column');
        }
    });
};

$(document).ready(function () {
    let showMenu = true;
    $('.menu-btn').click(function () {
        if (showMenu) {
            $('.menu-btn__burger').addClass('open');
            $('.nav').addClass('open');
            $('.menu-nav').addClass('open');
            $('.menu-nav__item').addClass('open');
            showMenu = false;
        } else {
            $('.menu-btn__burger').removeClass('open');
            $('.nav').removeClass('open');
            $('.menu-nav').removeClass('open');
            $('.menu-nav__item').removeClass('open');
            showMenu = true;
        }
    });


    bindMenu('#toHome', 'section.home');
    bindMenu('#toAbout', 'section.about', true);
    bindMenu('#toProjects', 'section.projects', true);
    bindMenu('#toContact', 'section.contact');

});




