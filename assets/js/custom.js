$('.contless-button').click(function() {
    var $this = $(this);
    var $moreText = $this.closest('.biographies-text').find('.moretextt');
  
    $moreText.slideToggle();
    if ($this.text() == "Read Less") {
      $this.text("Read More");
    } else {
      $this.text("Read Less");
    }
  });

  $(".toggle").click(function() {
    $("header").addClass("menuToggle");
});
$(".close").click(function() {
    $("header").removeClass("menuToggle");
});


$(window).scroll(function(){
  if ($(window).scrollTop() >= 1) {
      $('header').addClass('fixed-header');
      $('header').addClass('visible-title');
  }
  else {
      $('header').removeClass('fixed-header');
      $('header').removeClass('visible-title');
  }
});