document.addEventListener('DOMContentLoaded', () => {
    const words = [
        'System.out.println("joshua"); }',
        'print("engineering student") }',
        '{scientist: true} }',
        'console.log("designer"); }',
        'fmt.Println("psychologist") }',
        'echo("human") }',
        '{ developer: true }',
        'if(brain != empty) { keepCoding(); }'
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentWord = words[wordIndex];
    
    const typedTextElement = document.querySelector('.typed-text');
    
    if (!typedTextElement) {
        console.error('Could not find element with class .typed-text');
        return;
    }
    
    function typeEffect() {
        currentWord = words[wordIndex];
        let textToDisplay = currentWord.substring(0, charIndex);
        
        typedTextElement.textContent = textToDisplay;
        
        let typeSpeed = 100; // Faster base typing speed
        
        if (isDeleting) {
            typeSpeed = 50; // Even faster when deleting
            charIndex--;
        } else {
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000; // Longer pause at end of word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }
        
        setTimeout(typeEffect, typeSpeed);
    }
    
    typeEffect();
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navItems = document.querySelector('.nav-items');
    const body = document.body;
    
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    body.appendChild(overlay);

    function toggleMenu() {
        hamburger.classList.toggle('active');
        navItems.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Toggle aria-expanded
        const isExpanded = hamburger.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isExpanded);
        
        // Toggle body scroll
        body.style.overflow = isExpanded ? 'hidden' : '';
    }

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', toggleMenu);

    // Close menu when clicking overlay
    overlay.addEventListener('click', toggleMenu);

    // Close menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && hamburger.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && hamburger.classList.contains('active')) {
            toggleMenu();
        }
    });
});




  

