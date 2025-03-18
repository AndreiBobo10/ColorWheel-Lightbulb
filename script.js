const colorWheel = document.querySelector('.color-wheel');
const indicator = document.querySelector('.indicator');
const lightbulb = document.querySelector('.lightbulb');

colorWheel.addEventListener('mousemove', (e) => {
    const rect = colorWheel.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const angle = Math.atan2(y, x) * (180 / Math.PI) + 180;

    const color = `hsl(${angle}, 100%, 50%)`;
    indicator.style.left = `${e.clientX - rect.left}px`;
    indicator.style.top = `${e.clientY - rect.top}px`;
    indicator.style.background = color;

    lightbulb.style.background = color;
});
