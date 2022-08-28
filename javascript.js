const container = document.querySelector(".container")
const newDiv = document.createElement("div")
for(let i = 0; i < 16**2; i++){   
    const newDiv = document.createElement("div")
    container.appendChild(newDiv)
    newDiv.addEventListener("mouseover", function(){
        newDiv.classList = ("black")
    })
}









