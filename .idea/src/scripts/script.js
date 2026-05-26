/**
 * Two-Column Resume Template - Navy & Golden Bronze Edition
 * Features: Dark Mode Toggle, PDF Export, Print Optimization, Interactive Animations
 */

(function() {
    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {

        // === 1. DARK MODE TOGGLE ===
        const darkModeToggle = document.getElementById('darkModeToggle');

        // Check localStorage for saved theme preference
        if (localStorage.getItem('resumeTheme') === 'dark') {
            document.body.classList.add('dark');
            if (darkModeToggle) {
                darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
            }
        } else {
            if (darkModeToggle) {
                darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
            }
        }

        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', function() {
                document.body.classList.toggle('dark');
                const isDark = document.body.classList.contains('dark');
                localStorage.setItem('resumeTheme', isDark ? 'dark' : 'light');
                darkModeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i> Light Mode' : '<i class="fas fa-moon"></i> Dark Mode';
            });
        }

        // === 2. PRINT FUNCTIONALITY ===
        const printBtn = document.getElementById('printBtn');
        if (printBtn) {
            printBtn.addEventListener('click', function() {
                window.print();
            });
        }



        // === 4. INTERACTIVE ANIMATIONS ===

        // Skill tags: click feedback
        const allSkillTags = document.querySelectorAll('.skill-tag');
        allSkillTags.forEach(function(tag) {
            tag.addEventListener('click', function() {
                tag.style.transform = 'scale(0.98)';
                setTimeout(function() {
                    tag.style.transform = '';
                }, 120);
            });
        });

        // Job sections: console log on click (helpful for analytics)
        const jobs = document.querySelectorAll('.job');
        jobs.forEach(function(job) {
            job.addEventListener('click', function() {
                console.log("Job section clicked — customize content in HTML");
            });
        });

        // === 5. PLACEHOLDER LINK HANDLERS ===
        const repoLink = document.getElementById('repoLinkPlaceholder');
        if (repoLink) {
            repoLink.addEventListener('click', function(e) {
                e.preventDefault();
                alert("✨ Replace with your actual GitHub repository URL.\nExample: https://github.com/yourusername/project-name");
            });
        }

        const githubProfileBtn = document.getElementById('githubProfileBtn');
        if (githubProfileBtn) {
            githubProfileBtn.addEventListener('click', function(e) {
                e.preventDefault();
                alert("🔗GitHub profile: https://github.com/L2025S");
            });
        }

        const contactEmailBtn = document.getElementById('contactEmailBtn');
        if (contactEmailBtn) {
            contactEmailBtn.addEventListener('click', function(e) {
                e.preventDefault();
                alert("📧 Replace the href attribute with mailto:your.email@example.com");
            });
        }

        // === 6. SCROLL REVEAL ANIMATION ===
        const sections = document.querySelectorAll('.right-section, .sidebar-section');

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(8px)';
                    entry.target.style.transition = 'opacity 0.3s ease, transform 0.3s';
                    setTimeout(function() {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, 50);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.05 });

        sections.forEach(function(section) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
            observer.observe(section);
        });

        // === 7. CONSOLE GREETING ===
        console.log('%c✨ Two-Column Resume Template | Navy & Golden Bronze Edition ✨',
            'color: #CFAA7A; font-size: 14px; font-family: monospace;');
        console.log('%c📝 Customization Tips:', 'color: #B77D3A; font-weight: bold;');
        console.log('1. Replace all [text in brackets] with your actual information');
        console.log('2. Update href attributes in GitHub and email buttons');
        console.log('3. Modify avatar icon or replace with image if desired');
        console.log('4. Adjust colors in CSS variables for custom branding');
        console.log('5. Use Print or PDF export to save your resume');

    });
})();