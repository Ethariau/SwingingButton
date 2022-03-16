const leftRound = document.querySelector(".leftRound");
const rightRound = document.querySelector(".rightRound");
const article = document.querySelectorAll("article")
console.log(article);
deg=0;
article[0].addEventListener("mouseover", ()=>{
  if (article[0].classList == "leftSide") {
    deg+=360;
  leftRound.style.transform = 'rotate('+deg+'deg)';
  article[0].classList.add("flexThree");
  article[1].classList.remove("flexThree");
  }else{
    deg=deg-360;
    leftRound.style.transform = 'rotate('+deg+'deg)';
    article[0].classList.remove("flexThree");
  }
})
article[1].addEventListener("mouseover", ()=>{
  if (article[1].classList == "rightSide") {
    deg=deg-360;
  rightRound.style.transform = 'rotate('+deg+'deg)';
  article[1].classList.add("flexThree");
  article[0].classList.remove("flexThree");
  }else{
    deg+=360;
    rightRound.style.transform = 'rotate('+deg+'deg)';
    article[1].classList.remove("flexThree");
  }
})