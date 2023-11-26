const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// yesBtn.addEventListener("click", () => {
//   question.innerHTML = "Knew it!";
//   gif.src =
//     "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
// });

noBtn.addEventListener("click", () => {
  question.innerHTML = "Knew it! You never will be able to😜";
  gif.src =
    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

// noBtn.addEventListener("mouseover", () => {
//   const noBtnRect = noBtn.getBoundingClientRect();
//   const maxX = window.innerWidth - noBtnRect.width;
//   const maxY = window.innerHeight - noBtnRect.height;

//   const randomX = Math.floor(Math.random() * maxX);
//   const randomY = Math.floor(Math.random() * maxY);

//   noBtn.style.left = randomX + "px";
//   noBtn.style.top = randomY + "px";
// });

yesBtn.addEventListener("mouseover", () => {
  const yesBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - yesBtnRect.width;
  const maxY = window.innerHeight - yesBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  yesBtn.style.left = randomX + "px";
  yesBtn.style.top = randomY + "px";
});