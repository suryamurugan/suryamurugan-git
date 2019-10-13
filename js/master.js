$(document).ready(function() {
    $('body').addClass('ready')
 })
 
 $(document).scroll(function() {
    showOnScroll('.featured-work');
    showOnScroll('.services .item');
    showOnScroll('.skills .item');
    showOnScroll('.work .list tr');
    showOnScroll('.lazy-loading')
 })
 
 function showOnScroll(item) {
    $(item).each(function() {
       if(($(this).offset().top - $(window).scrollTop()) <= $(window).height() - 100) {
          $(this).addClass('show');
       }
    })
 }
 
 $('.burger-icon').click(function() {
    $(this).toggleClass('toggled');
    $('nav.main .list').toggleClass('toggled');
    $('header').toggleClass('scale-down');
    $('main.content').toggleClass('scale-down');
 })
 
 $('.home-link').click(function() {
    location.href = '/';
 })
 