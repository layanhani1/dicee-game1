document.addEventListener("DOMContentLoaded", function () {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  const img1 = document.querySelector(".img1");
  const img2 = document.querySelector(".img2");

  img1.src = "./images/dice" + randomNumber1 + ".png";
  img2.src = "./images/dice" + randomNumber2 + ".png";

  console.log("Player1:", randomNumber1, img1.src);
  console.log("Player2:", randomNumber2, img2.src);



let title = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  title.textContent = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  title.textContent = "Player 2 Wins! 🚩";
} else {
  title.textContent = "🤝 Draw!";
}
});
