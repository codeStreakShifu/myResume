document.addEventListener("DOMContentLoaded", function() {
    const circles = document.querySelectorAll('.progress-circle');

    circles.forEach(circle => {
        const percentage = circle.getAttribute('data-percentage');
        circle.style.setProperty('--percentage', percentage);
    });
});
