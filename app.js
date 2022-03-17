const leftRound = document.querySelector(".leftRound");
const rightRound = document.querySelector(".rightRound");
const article = document.querySelectorAll("article");
const leftText = document.querySelector(".leftSide .displayFluid");
const rightText = document.querySelector(".rightSide .displayFluid");
degLeft = 0;
degRight = 0;
leftText.style.display = "none";
rightText.style.display = "none";

console.log(article[0].style.display);
article[0].addEventListener("mouseover", () => {
  if (article[0].classList == "leftSide") {
    degLeft += 360;
    leftRound.style.transform = "rotate(" + degLeft + "deg)";
    article[0].classList.add("flexThree");
    article[1].classList.remove("flexThree");
    leftText.style.display = "block";
    rightText.style.display = "none";
  }
});

article[1].addEventListener("mouseover", () => {
  if (article[1].classList == "rightSide") {
    degRight = degRight - 360;
    rightRound.style.transform = "rotate(" + degRight + "deg)";
    article[1].classList.add("flexThree");
    article[0].classList.remove("flexThree");
    rightText.style.display = "block";
    leftText.style.display = "none";
  }
});
