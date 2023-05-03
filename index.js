document.title ="COLOR FLIPPER"
const main = document.querySelector(".main")
const background = document.querySelector(".background")
const btn = document.querySelector(".btn")
background.style.color = ""
let colorArr = ["Red", "Green", "Blue", "Pink", "Aqua", "Orange"];

btn.addEventListener('click', function(){
   let randomColor = colorArr[getRandomColor()];
   main.style.backgroundColor = randomColor;
   background.textContent = randomColor
   background.style.color = randomColor
   btn.style.backgroundColor = randomColor

});

function getRandomColor(){
    return Math.floor(Math.random()*colorArr.length);
}
