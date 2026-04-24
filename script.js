function nextPage(page) {
  window.location.href = page;
}

// Make NO button avoid clicks 😏
const noBtns = document.querySelectorAll(".no-btn");

noBtns.forEach(btn => {
  btn.addEventListener("mouseover", () => {
    btn.style.position = "absolute";
    btn.style.top = Math.random() * 300 + "px";
    btn.style.left = Math.random() * 300 + "px";
  });
});

// ❤️ Heart + Kiss animation
function showLove() {
  const container = document.getElementById("hearts");

  for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️💋";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "20px";
    heart.style.animation = "floatUp 3s linear";

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
}
