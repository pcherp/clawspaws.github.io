let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.display = (i === currentIndex) ? 'block' : 'none';
    });

    updateIndicators();
}

function changeSlide(n) {
    showSlide(currentIndex + n);
}

function currentSlide(n) {
    showSlide(n - 1);
}

function updateIndicators() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.className = dot.className.replace(' active', '');
        if (i === currentIndex) {
            dot.className += ' active';
        }
    });
}

showSlide(currentIndex);
