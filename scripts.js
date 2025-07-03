document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Get the fixed navigation bar height
                const navHeight = document.querySelector('nav').offsetHeight;
                // Calculate the position to scroll to, accounting for the fixed nav
                const offsetPosition = targetElement.offsetTop - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Optional: Update active link in navigation
                // This will add an 'active' class to the current link in view
                // For a single page, this might be handled by the scroll event listener below
                // or can be removed if not desired for click events specifically.
                // document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
                // this.classList.add('active');
            }
        });
    });

    // Add a scroll listener to highlight active nav link based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    const navHeight = document.querySelector('nav').offsetHeight; // Get nav height once

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            // Get the top position of the section, accounting for the fixed nav bar
            // and a small offset to ensure the section is well into view
            const sectionTop = section.offsetTop - navHeight - 50; // 50px buffer
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active'); // Remove active from all links
            if (link.getAttribute('href').includes(currentSectionId)) {
                link.classList.add('active'); // Add active to the current section's link
            }
        });
    });

    // Trigger the scroll event once on load to set the initial active link (e.g., if page loads at top)
    window.dispatchEvent(new Event('scroll'));
});