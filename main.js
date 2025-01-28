document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    // Navigation click handler
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            
            // Update active states
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });

            // Close mobile menu if open
            nav.classList.remove('active');
        });
    });

     // Navigation avec le lien en savoir plus
     const navigate= document.querySelectorAll('.navigate a');
     //const targetSection3 = document.querySelectorAll('section');
 
     navigate.forEach(link => {
         link.addEventListener('click', (e) => {
             e.preventDefault();
             const targetId = link.getAttribute('href').substring(1);
             
             // Update active states
             navigate.forEach(l => l.classList.remove('active'));
             link.classList.add('active');
             
             sections.forEach(section => {
                 section.classList.remove('active');
                 if (section.id === targetId) {
                     section.classList.add('active');
                 }
             });
 
             // Close mobile menu if open
             nav.classList.remove('active');
         });
     });




    // Mobile menu toggle
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            alert('Message envoyé ! Nous vous contacterons bientôt.');
            contactForm.reset();
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Button click inscription
    const button = document.getElementById('inscription-btn'); // Sélectionne le bouton
    const targetSection = document.getElementById('inscription'); // Sélectionne la section "Présentation"

    if (button && targetSection) {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Empêche le comportement par défaut
            targetSection.scrollIntoView({
                behavior: 'smooth', // Défilement fluide
                block: 'start' // Aligne le haut de la section avec le haut de la fenêtre
            });

            // Mise à jour des états actifs
            sections.forEach(section => section.classList.remove('active'));
            targetSection.classList.add('active');

            navLinks.forEach(link => link.classList.remove('active'));
            const correspondingLink = document.querySelector(`.nav-links a[href="#${targetSection.id}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        });
    }

    const button2 = document.getElementById('ensavoirplus-btn'); // Sélectionne le bouton
    const targetSection2 = document.getElementById('presentation'); // Sélectionne la section "Présentation"

    if (button2 && targetSection2) {
        button2.addEventListener('click', (e) => {
            e.preventDefault(); // Empêche le comportement par défaut
            targetSection2.scrollIntoView({
                behavior: 'smooth', // Défilement fluide
                block: 'start' // Aligne le haut de la section avec le haut de la fenêtre
            });

            // Mise à jour des états actifs
            sections.forEach(section => section.classList.remove('active'));
            targetSection2.classList.add('active');

            navLinks.forEach(link => link.classList.remove('active'));
            const correspondingLink = document.querySelector(`.nav-links a[href="#${targetSection2.id}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        });
    }


    // Sélectionner les éléments nécessaires
const images = document.querySelectorAll('.clickable');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Ajouter un événement de clic sur chaque image
images.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = image.src; // Utiliser la source de l'image cliquée
    });
});

// Fermer le lightbox en cliquant à l'extérieur de l'image
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.classList.remove('active');
    }
});

    
});
