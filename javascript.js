const container = document.querySelector(".container")
const newDiv = document.createElement("div")
const resetBtn = document.querySelector(".reset")

const width = 16
for(let i = 0; i < width**2; i++){   
    const newDiv = document.createElement("div")
    container.appendChild(newDiv)
    newDiv.addEventListener("mouseover", function(){
        newDiv.classList = ("black")
    })
    resetBtn.addEventListener("click", ()=>{
        newDiv.classList.remove("black")
    })
}











