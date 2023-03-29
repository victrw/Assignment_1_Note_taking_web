const darkthemebutton = document.querySelector(".theme")
const darksidebar = document.querySelector('.my-notes-container')
const txtarea = document.querySelector("textarea")
darkthemebutton.textContent = "Dark Theme"


function darktheme(e) {
    console.log(e.target)   
    if (e.target.tagName === "BUTTON") {
        document.body.classList.toggle("darkBG")
        darksidebar.classList.toggle('sidebardarkBG')
        darkthemebutton.classList.toggle("lightthemebutton");
        txtarea.classList.toggle("darktextarea");
        txtarea.classList.toggle("darktextareatxt")
        if (darkthemebutton.textContent === "Dark Theme") {
            darkthemebutton.textContent = "Light Theme";

        } else {
            darkthemebutton.textContent = "Dark Theme";
        }
    }
}


darkthemebutton.addEventListener("click", darktheme)
