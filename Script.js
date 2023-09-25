// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add a fun animation to the header
const header = document.querySelector('header');
header.addEventListener('mouseover', function () {
    this.classList.add('header-bounce');
});
header.addEventListener('animationend', function () {
    this.classList.remove('header-bounce');
});

// Display a random inspirational quote in the footer
const quotes = [
    "Creativity is intelligence having fun. - Albert Einstein",
    "Art is not freedom from discipline, but disciplined freedom. - John F. Kennedy",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Every artist was first an amateur. - Ralph Waldo Emerson"
];
const footer = document.querySelector('footer');
const quoteText = document.createElement('p');
quoteText.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
footer.appendChild(quoteText);

// Add a hover effect to portfolio cards
const portfolioCards = document.querySelectorAll('.portfolio-card');
portfolioCards.forEach(card => {
    card.addEventListener('mouseover', function () {
        this.classList.add('card-hover');
    });
    card.addEventListener('mouseout', function () {
        this.classList.remove('card-hover');
    });
});

// Slideshow variables
const slideshowImages = ['https://drive.google.com/file/d/1gWyHNy-LEBOG91-BDw_cMQZbUELSBe4X/view?usp=share_link', 'https://drive.google.com/file/d/1nTACul6Wv0Vl0BlUeFYDi72R5Dsmijk4/view?usp=share_link', 
'https://drive.google.com/file/d/1nTACul6Wv0Vl0BlUeFYDi72R5Dsmijk4/view?usp=share_link', 'https://drive.google.com/file/d/1nTACul6Wv0Vl0BlUeFYDi72R5Dsmijk4/view?usp=share_link', 'https://drive.google.com/file/d/1DX3_5Jmb1MrhnDNsJsfHDirOaN_sByDH/view?usp=share_link', 'https://drive.google.com/file/d/1DX3_5Jmb1MrhnDNsJsfHDirOaN_sByDH/view?usp=share_link']; // Replace with your image URLs
const slideshowElement = document.getElementById('slideshow-image');
let currentImageIndex = 0;

// Function to update the slideshow image
function updateSlideshow() {
    slideshowElement.src = slideshowImages[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
}

// Update the slideshow image every 3 seconds (adjust the time as needed)
setInterval(updateSlideshow, 3000);
