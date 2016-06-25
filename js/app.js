var CarouselNavigator = {
  bindNavLinks: function() {
    $('header nav .carousel-nav-trigger').click(function(ev) {
      ev.preventDefault();
      CarouselNavigator.moveTo(parseInt(this.dataset.targetSlideIndex));
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
  }
};

new WOW().init();

$(document).ready(function() {
  CarouselNavigator.init();
});
