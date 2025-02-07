const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const responseText = document.getElementById("response");

yesBtn.addEventListener("click", () => {
    responseText.textContent = "Yay! ❤ Can't wait to celebrate together!";
});

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.left = ${x}px;
    noBtn.style.top = ${y}px;
});