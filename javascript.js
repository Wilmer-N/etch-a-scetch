const container = document.querySelector(".container")
const resetBtn = document.querySelector(".reset")

const width = 40


for(let i = 0; i < width**2; i++){   
    createGrid();
}

function createGrid(){
    const newDiv = document.createElement("div")
    container.appendChild(newDiv)
    newDiv.addEventListener("mouseover", function(){
        newDiv.classList = ("black")
    })
    resetBtn.addEventListener("click", () =>{
        newDiv.classList.remove("black")})
    
    newDiv.style.width = `calc(100% / ${width})`
    newDiv.style.height = `calc(100% / ${width})`
    }