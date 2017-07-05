$(function (){
  $('.hamburger').click(() => {
    $('.mainMenu').toggle();
  });

  $('#Cref').click(() => {
    $('#HowITWorks').hide();
    $('#courses').toggle();
  });

  $('#hiwref').click(() => {
    $('#courses').hide();
    $('#HowITWorks').toggle();
  });
});
