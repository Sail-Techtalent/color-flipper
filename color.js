const background = document.querySelector(".background")
const theMain = document.querySelector(".main")
const theBtn = document.querySelector(".btn")

let generatorArray = [1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"]

theBtn.addEventListener("click" , function(){

    let hexGenerated = "#";
    for(i=0; i<6; i++){
        hexGenerated += generatorArray[generate()]
    }
    console.log(hexGenerated);
    theMain.style.backgroundColor = hexGenerated
    background.textContent = hexGenerated
    background.style.color = hexGenerated
})

const generate = () =>{
   return Math.floor(Math.random()*generatorArray.length)
}

