anime({
    targets: '.heart path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function(el, i) { return i * 50 },
});

setTimeout(function () {
    anime({
        targets: '.heart path',
        fill: '#000',
        easing: 'linear',
    });
}, 500);

anime({
    targets: '.boho-heading path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function(el, i) { return i * 100 },
});

anime({
    targets: '.first',
    translateX: [-1500, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: 600
});

anime({
    targets: '.last',
    translateX: [1500, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: 600
});

anime({
    targets: '.center',
    translateY: [1500, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: 600
});

anime({
    targets: '.cta',
    opacity: [0, 1],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: 1500
});