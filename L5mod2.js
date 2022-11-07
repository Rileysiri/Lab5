let image = document.getElementById("imge")
let Previous = document.getElementById("prev")
let Next = document.getElementById("next")

let index = 1
let max = 6

//sets first image
image.src = "img/" + index + ".jpg" 

Previous.addEventListener("mousedown", function() {
    if (event.button == 0) {
        index--
        if (index == 0) {index = max}
        image.src = "img/" + index + ".jpg" 
    }
})
Next.addEventListener("mousedown", function() {
    if (event.button == 0) {
        index++
        if (index > max) {index = 1}
        image.src = "img/" + index + ".jpg" 
    }
})