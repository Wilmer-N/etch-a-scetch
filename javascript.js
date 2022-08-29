const container = document.querySelector(".container")
const resetBtn = document.querySelector(".reset")
const canvasSize = document.querySelector(".chooseWidth")


let width = 16




function color(newDiv){
    newDiv.addEventListener("mouseover", function(){
        newDiv.classList.add("black");
    })
    resetBtn.addEventListener("click", () =>{
        newDiv.classList.remove("black")})
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
    let width = prompt("choose")
    const pixels = document.querySelectorAll(".pixel")
    pixels.forEach(pixel => {
        pixel.classList.remove("black")
        pixel.remove()
});
createLoop(width)
})