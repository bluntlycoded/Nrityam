document.addEventListener('DOMContentLoaded', () => {
    // Slider functionality
    const slides = document.querySelector('.slides');
    let index = 0;
    setInterval(() => {
        index = (index + 1) % slides.children.length;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }, 3000);

    // Counter animation
    const counters = document.querySelectorAll('.count');
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 200;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});
