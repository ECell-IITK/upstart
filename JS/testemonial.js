const wrapper = document.querySelector('.wrapper-testimonial');
const indicators_testemonal = [...document.querySelectorAll('.indicators button')];

let currentTestimonial = 0; // Default 0

indicators_testemonal.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicators_testemonal[currentTestimonial].classList.remove('active');
        wrapper.style.marginLeft = `-${100 * i}%`;
        item.classList.add('active');
        currentTestimonial = i;
    })
})

