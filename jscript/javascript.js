const darkthemebutton = document.querySelector(".theme")
const darksidebar = document.querySelector('.my-notes-container')
darkthemebutton.textContent = "Dark Theme"


function darktheme(e) {
    console.log(e.target)   
    if (e.target.tagName === "BUTTON") {
        document.body.classList.toggle("darkBG")
        darksidebar.classList.toggle('sidebardarkBG')
        if (darkthemebutton.textContent === "Dark Theme") {
            darkthemebutton.textContent = "Light Theme";
            darkthemebutton.classList.add("lightthemebutton") 
        } else {
            darkthemebutton.textContent = "Dark Theme";
            darkthemebutton.classList.remove("lightthemebutton")
        }
    }
}


darkthemebutton.addEventListener("click", darktheme)
