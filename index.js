function createGrid(size) {
    const container = document.querySelector(".container")
    let square
    for (let i = 0; i < size * size; i++) {
        square = document.createElement("div")
        square.classList.add("item")
        square.style.flex = `0 0 calc(100% / ${size}`
        container.appendChild(square)
    }

    return document.querySelectorAll(".item")
}

function addHoverListener(grid) {
    grid.forEach(square => {
        square.addEventListener("mouseenter", () => {
            square.style.background = "orange"
        })
    })
}

const SIZE = 16

addHoverListener(createGrid(SIZE))

const button = document.querySelector("button")
button.addEventListener("click", () => {
    const container = document.querySelector(".container")
    let size = parseInt(prompt("Size?"))
    
    while (Number.isNaN(size) || size > 100) {
        alert("Please pick a size less than or equal to 100")
        size = parseInt(prompt("Size?"))
    }
    
    if (!Number.isNaN(size)) {
        container.innerHTML = ""
        addHoverListener(createGrid(size))
    }
})