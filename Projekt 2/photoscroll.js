const scrollers = document.querySelectorAll('.scroller');

if(!window.matchMedia('(prefers-reduced-motiion: reduce)').matches){}

function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', true)
    });
}