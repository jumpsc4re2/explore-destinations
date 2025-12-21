document.addEventListener('DOMContentLoaded', () => {
    const headerHTML = `
    <header class="site-header">
        <nav class="navbar container">
            <a href="index.html" class="logo" aria-label="Go to home">ExploreTheWorld 🌎</a>

            <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
                <i class="ph ph-list"></i>
            </button>

            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="destinations.html">Destinations</a></li>
                <li><a href="tips.html">Tips</a></li>
                <li><a href="facts.html">Facts</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="faq.html">FAQ</a></li>
                <li><a href="newsletter.html">Newsletter</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    `;

    const footerHTML = `
    <footer class="site-footer">
        <div class="container footer-grid">
            <p>© <span id="year">${new Date().getFullYear()}</span> ExploreTheWorld. All rights reserved.</p>
            <div class="socials">
                <a href="#" aria-label="Instagram"><i class="ph ph-instagram-logo"></i></a>
                <a href="#" aria-label="Twitter"><i class="ph ph-twitter-logo"></i></a>
                <a href="#" aria-label="YouTube"><i class="ph ph-youtube-logo"></i></a>
            </div>
        </div>
    </footer>
    <button id="backToTop" aria-label="Back to top"><i class="ph ph-arrow-up"></i></button>
    `;

    // Insert Header at the start of body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // Insert Footer at the end of body
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // Re-initialize any script logic that depends on the header (like the toggle)
    initNavToggle();
    initBackToTop();
});

function initNavToggle() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('nav-open');
        });
    }
}

function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}
