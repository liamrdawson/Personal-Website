
/* 
    Use JQuery to control skills card animation 
*/
var $cell = $('.card');
var $header = $('header');

$header.find();

$cell.find('.js-expander').click(function() {

    var $thisCell = $(this).closest('.card');
  
    if ($thisCell.hasClass('is-collapsed')) {
      $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
      $thisCell.removeClass('is-collapsed').addClass('is-expanded');
      
      if ($cell.not($thisCell).hasClass('is-inactive')) {
        //do nothing
      } else {
        $cell.not($thisCell).addClass('is-inactive');
      }
  
    } else {
      $thisCell.removeClass('is-expanded').addClass('is-collapsed');
      $cell.not($thisCell).removeClass('is-inactive');
    }
});



/*
      Use vanilla JS to control nav animation on mobile
*/

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const navMenu = document.querySelector('.nav-menu');

  burger.addEventListener('click', () => {
    //nav menu animation
    navMenu.classList.toggle('ul-active');
    //burger animation
    burger.classList.toggle('toggle');
  });
}

navSlide();

