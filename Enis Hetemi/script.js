 
const galleryImages = document.querySelectorAll('#gallery img');
galleryImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.1)';
        image.style.transition = 'transform 0.3s ease-in-out';
    });
    
    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
});


window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    const header = document.querySelector('header');

    
    if (scrollPosition > 100) {
        header.style.backgroundColor = 'rgba(0, 79, 133, 0.9)'; 
    } else {
        header.style.backgroundColor = '#004f85'; 
    }
});


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thanky.Your message has been sent successfully!");
    this.reset();
});


let backgrounds = [
    'url("img/sunset1.jpg")',
    'url("img/sunset2.jpg")',
    'url("img/sunset3.jpg")',
    'url("img/sunset4.jpg")'
];

let currentIndex = 0;
let body = document.body;

function changeBackground() {
    body.style.transition = 'background-image 1s ease-in-out';
    body.style.backgroundImage = backgrounds[currentIndex];
    
   
    currentIndex = (currentIndex + 1) % backgrounds.length;
}


setInterval(changeBackground, 10000);


const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach((item, index) => {
    item.style.transition = 'transform 0.5s ease-out';
    item.style.transform = `translateX(${index * 100}px)`;
    
    item.addEventListener('mouseenter', () => {
        item.style.transform = `translateX(0)`;
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = `translateX(${index * 100}px)`;
    });
});


const performanceIcons = document.querySelectorAll('.performance-icon');
performanceIcons.forEach(icon => {
    icon.style.transition = 'transform 0.3s ease';
    
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.2)';
    });

    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
    });
});


const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#003366'; 
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#ff4747'; 
    });
});



  

