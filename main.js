document.addEventListener("DOMContentLoaded", () => {
    const background = document.querySelector(".background");

    for (let i = 0; i < 15; i++) {
        let circle = document.createElement("div");
        circle.classList.add("circle");

        let size = Math.random() * 150 + 50;
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;

        circle.style.background = `rgba(255, 255, 255, ${Math.random() * 0.5})`;
        circle.style.top = `${Math.random() * 100}%`;
        circle.style.left = `${Math.random() * 100}%`;

        circle.style.animationDuration = `${Math.random() * 5 + 3}s`;
        background.appendChild(circle);
    }
});
