document.addEventListener("DOMContentLoaded", function() {
    const colorPicker = document.getElementById('color-picker');
    const colorPreview = document.getElementById('color-preview');

    colorPicker.addEventListener('click', function(event) {
        if (event.target.classList.contains('color')) {
            colorPreview.style.backgroundColor = event.target.style.backgroundColor;
        }
    });
});
