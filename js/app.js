var CarouselNavigator = {
  bindNavLinks: function() {
    $('header nav .carousel-nav-trigger').click(function(ev) {
      ev.preventDefault();
      var slideIndex = parseInt(this.dataset.targetSlideIndex);
      CarouselNavigator.moveTo(slideIndex);
      if (slideIndex == 2) {
        $('.skill-circle').circleProgress('redraw');
      }
      $('nav a.selected').removeClass('selected');
      $(this).addClass('selected');
    });
  },
  carouselElement: function() {
    return $('#nsg-carousel');
  },
  init: function() {
    CarouselNavigator.carouselElement().carousel('pause');
    CarouselNavigator.bindNavLinks();
  },
  moveTo: function(i) {
    CarouselNavigator.carouselElement().carousel(i);
    CarouselNavigator.carouselElement().carousel('pause');
  }
};

var SkillDisplayer = {
  init: function() {
    $.circleProgress.defaults.size = 1000;
    $.circleProgress.defaults.startAngle = -Math.PI/2;
    $('.skill-circle').circleProgress();
  }
}

new WOW().init();

$(document).ready(function() {
  CarouselNavigator.init();
  SkillDisplayer.init();
});
