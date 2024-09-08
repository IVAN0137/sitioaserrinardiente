document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelector('.carousel-indicators');
    const fullscreenBtn = document.querySelector('.fullscreen-btn');
    let index = 0;

    function createIndicators() {
        items.forEach((_, i) => {
            const button = document.createElement('button');
            button.addEventListener('click', () => setIndex(i));
            indicators.appendChild(button);
        });
        updateIndicators();
    }

    function updateIndicators() {
        indicators.querySelectorAll('button').forEach((btn, i) => {
            btn.classList.toggle('active', i === index);
        });
    }

    function moveCarousel() {
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
        updateIndicators();
    }

    function setIndex(newIndex) {
        index = newIndex;
        moveCarousel();
    }

    setInterval(() => {
        index = (index + 1) % items.length;
        moveCarousel();
    }, 4000); // Cambia la imagen cada 4 segundos

    createIndicators();

    // Animaciones del video
    const video = document.querySelector('.video');
    video.addEventListener('mouseover', () => {
        video.style.boxShadow = '0 0 30px rgba(0, 0, 0, 0.5)';
        video.style.transform = 'scale(1.03)';
    });
    video.addEventListener('mouseout', () => {
        video.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.3)';
        video.style.transform = 'scale(1)';
    });

    // Animaciones de las imágenes en la galería
    const images = document.querySelectorAll('.images-section img');
    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.08)';
            img.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
            img.style.boxShadow = '0 6px 30px rgba(0, 0, 0, 0.3)';
        });
    });

    // Pantalla completa del carrusel
    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            carousel.parentElement.requestFullscreen().catch(err => {
                alert(`Error al intentar activar el modo de pantalla completa: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    });
});
