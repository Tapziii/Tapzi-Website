// Scroll Animation Trigger (Scroll down effect)
document.getElementById('scrollDown').addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

// WOW Text Animation on Scroll
document.addEventListener('scroll', () => {
    const wowText = document.querySelectorAll('.wow-text');
    wowText.forEach(text => {
        const rect = text.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            text.classList.add('fade-in');
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".request-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    cards.forEach(card => observer.observe(card));
});
document.addEventListener("DOMContentLoaded", () => {
    const requestCards = document.querySelectorAll(".request-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-card");
            }
        });
    }, { threshold: 0.3 });

    requestCards.forEach(card => observer.observe(card));
});

