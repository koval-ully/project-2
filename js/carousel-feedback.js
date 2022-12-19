(function() {

    const slides = [
        `
                <div class="feedback_slide">
                <h2 class="title">— FEEDBACK</h2>
        <p class="menu_title">Testimonials</p>
        <p class="items_text">Every day, dozens of people go to work or travel by cars rented with FASTCAR.</p>
                    <img src="img/feedback/daniel.png" alt=" daniel">
                    <div class="menu_title">Jane McCallan</div>
                    <div class="faq-description">I am completely satisfied with the services of this company. I often
                        rent cars with FASTCAR for business meetings, driving to work, etc. I am pleased with the
                        excellent technical condition of the cars, favorable rental conditions. And the staff is
                        always friendly.</div>
                </div>`,
        `<div class="feedback_slide">
                <h2 class="title">— FEEDBACK</h2>
        <p class="menu_title">Testimonials</p>
        <p class="items_text">Every day, dozens of people go to work or travel by cars rented with FASTCAR.</p>
                    <img src="img/feedback/elizabeth.png" alt="elzabet">
                    <div class="menu_title">Daniel Gordons</div>
                    <div class="faq-description">I am completely satisfied with the services of this company. I often
                        rent cars with FASTCAR for business meetings, driving to work, etc. I am pleased with the
                        excellent technical condition of the cars, favorable rental conditions. And the staff is
                        always friendly.</div>
                </div>`,
        `<div class="feedback_slide">
                <h2 class="title">— FEEDBACK</h2>
        <p class="menu_title">Testimonials</p>
        <p class="items_text">Every day, dozens of people go to work or travel by cars rented with FASTCAR.</p>
                    <img src="img/feedback/jane.png" alt=" jane">
                    <div class="menu_title">Elizabeth Smith</div>
                    <div class="faq-description">I am completely satisfied with the services of this company. I often rent
                        cars with FASTCAR for business meetings, driving to work, etc. I am pleased with the excellent
                        technical condition of the cars, favorable rental conditions. And the staff is always friendly.
                    </div>
                </div>
             `
    ]
    let currentSlideIdx = 0;

    function renderCarousel() {
        const slideContainer = document.querySelector('.feedback__carousel__slides');
        slideContainer.innerHTML = slides[currentSlideIdx];
        /*  if (currentSlideIdx <= 0) {
             currentSlideIdx = 0;
             slideContainer.innerHTML = slides[currentSlideIdx];
         } */
        /*    if (window.innerWidth > 600) {
               const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
               slideContainer.innerHTML += slides[secondSlideIdx];
               if (window.innerWidth > 900) {
                   const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                   slideContainer.innerHTML += slides[thirdSlideIdx];
               }
           } */
    }

    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderCarousel();
    }

    function prevSlide() {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        renderCarousel();
    }
    const nextButton = document.querySelector('.feedback-btn__next');
    nextButton.addEventListener('click', nextSlide);

    const prevButton = document.querySelector('.feedback-btn__prev');
    prevButton.addEventListener('click', prevSlide);
    //setInterval(nextSlide, 3000);
    renderCarousel();
    window.addEventListener('resize', renderCarousel);
})();