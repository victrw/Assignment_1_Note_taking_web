const darkthemebutton = document.querySelector("#theme")


function darktheme(e) {
    console.log(e.target)   
    if (e.target.tagName === "BUTTON") {
        document.body.classList.add("darkBG")
        const darksidebar = document.querySelector('.my-notes-container')
        darksidebar.classList.add('darkBG')
    }
}

darkthemebutton.addEventListener("click", darktheme)

