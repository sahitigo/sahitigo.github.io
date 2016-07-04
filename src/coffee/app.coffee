CarouselNavigator =
  bindNavLinks: ->
    $('header nav .carousel-nav-trigger').click (ev) ->
      ev.preventDefault()
      slideIndex = parseInt(@dataset.targetSlideIndex)
      CarouselNavigator.moveTo slideIndex
      if slideIndex == 2
        $('.skill-circle').circleProgress 'redraw'
      $('nav a.selected').removeClass 'selected'
      $(this).addClass 'selected'
  carouselElement: ->
    $ '#nsg-carousel'
  init: ->
    CarouselNavigator.carouselElement().carousel 'pause'
    CarouselNavigator.bindNavLinks()
  moveTo: (i) ->
    CarouselNavigator.carouselElement().carousel i
    CarouselNavigator.carouselElement().carousel 'pause'

SkillDisplayer = init: ->
  $.circleProgress.defaults.size = 1000
  $.circleProgress.defaults.startAngle = -Math.PI / 2
  $('.skill-circle').circleProgress()

ProjectDisplayer = init: ->
  $('#portfolio .project').click (ev) ->
    ev.preventDefault()
    $('#project-details-modal').modal('show')
    $('#projects-carousel').carousel(parseInt(@dataset.targetSlide))
    $('#projects-carousel').carousel('pause')

(new WOW).init()

$ ->
  CarouselNavigator.init()
  SkillDisplayer.init()
  ProjectDisplayer.init()
