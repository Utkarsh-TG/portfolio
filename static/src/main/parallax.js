const parallax_scroll_elems = document.querySelectorAll(".parallax-scroll");
const parallax_opacity_elems = document.querySelectorAll(".parallax-opacity");

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    
    parallax_scroll_elems.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    parallax_opacity_elems.forEach(element => {
        //element.style.opacity = scroll / (sectionY.top + section_height);
    })
})

