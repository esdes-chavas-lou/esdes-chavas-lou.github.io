var lineDrawing = anime({
    targets: 'path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: 200,
    direction: 'alternate',
    loop: true
  });