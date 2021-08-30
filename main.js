let dino = document.querySelector(".dino");
let cactus = document.querySelector(".cactus");

function jump() {
  if (dino.classList !== "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

function gameOver() {
  setInterval(function () {
    let dinoTop = parseInt(
      window.getComputedStyle(dino).getPropertyValue("top")
    );
    let cactusLeft = parseInt(
      window.getComputedStyle(cactus).getPropertyValue("left")
    );

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
      alert("Game Over!");
    }
  });
}

document.addEventListener("keydown", function () {
  jump();
});

gameOver();
