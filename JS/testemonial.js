const wrapper = document.querySelector('.wrapper-testimonial');
const indicators_testimonial = [...document.querySelectorAll('.indicators button')];

let currentTestimonial = 0; // Default index
let testimonialInterval = setInterval(nextTestimonial, 4000); // Automatic slide every 2 seconds

// Function to move to the next testimonial
function nextTestimonial() {
    indicators_testimonial[currentTestimonial].classList.remove('active');
    
    // Update the current testimonial index (loop back to the first if on the last slide)
    currentTestimonial = (currentTestimonial + 1) % indicators_testimonial.length;
    
    // Update the carousel position and active indicator
    wrapper.style.marginLeft = `-${100 * currentTestimonial}%`;
    indicators_testimonial[currentTestimonial].classList.add('active');
}

// Automatic slide only, no click event
