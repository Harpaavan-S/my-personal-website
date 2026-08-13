const dot = document.querySelector('.cursor-dot');

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function updateCursor() {
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    requestAnimationFrame(updateCursor);
}

updateCursor();

const link = document.querySelectorAll('a');

link.forEach((link) => {
    link.addEventListener('mouseenter', () => {
        dot.classList.add('hover-active');
    });
});

link.forEach((link) => {
    link.addEventListener('mouseleave', () => {
        dot.classList.remove('hover-active');
    });
});

const skillrow = document.querySelectorAll('.bloops');

skillrow.forEach((row) => {
    const icons = row.querySelectorAll('.skill-icon')
    const firstRowTop = icons[0].offsetTop;

    icons.forEach((icon) => {
        if (icon.offsetTop > firstRowTop) {
            icon.classList.add('below');
        }
    })
})