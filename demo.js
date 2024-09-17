// demo.js
document.addEventListener('DOMContentLoaded', function() {
    const flipButton = document.getElementById('flipButton');
    const img = document.querySelector('img');

    flipButton.addEventListener('click', function() {
        if (img.style.transform === 'rotateY(180deg)') {
            img.style.transform = 'rotateY(0deg)';
        } else {
            img.style.transform = 'rotateY(180deg)';
        }
    });
});
