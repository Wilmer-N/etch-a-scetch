const container = document.querySelector(".container")
const resetBtn = document.querySelector(".reset")
const canvasSize = document.querySelector(".chooseWidth")
const erase = document.querySelector(".white");
const blackColor = document.querySelector(".black-color")


let width = 16




function color(newDiv){
    blackColor.addEventListener("click", ()=>{
    newDiv.addEventListener("mouseover", function(){
        newDiv.classList.add("black");
    })})
    resetBtn.addEventListener("click", () =>{
        newDiv.classList.remove("black")})
        erase.addEventListener("click", ()=>{
            newDiv.addEventListener("mouseover", function(){
            newDiv.classList.remove("black");
            })}) 
}

function createGrid(width){
    const newDiv = document.createElement("div")
    newDiv.classList.add("pixel")
    container.appendChild(newDiv)
    color(newDiv)
    newDiv.style.width = `calc(100% / ${width})`
    newDiv.style.height = `calc(100% / ${width})`
    
}

function createLoop(width){
for(let i = 0; i < width**2; i++){   
    createGrid(width); 
}}
createLoop(width)

const pixels = document.querySelectorAll(".pixel")

canvasSize.addEventListener("click", ()=>{
    let width = prompt("Choose canvas width")
    if(width > 100){
        alert("To large of a number")
        return
    }else if(width < 1){
        alert("Please enter a positive number")
        return
    }
    const pixels = document.querySelectorAll(".pixel")
    pixels.forEach(pixel => {
        pixel.classList.remove("black")
        pixel.remove()
});
createLoop(width)
})