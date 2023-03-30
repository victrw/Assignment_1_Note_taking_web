const darkthemebutton = document.querySelector(".theme")
const darksidebar = document.querySelector('.my-notes-container')
const txtarea = document.querySelector("textarea")
const cancel_button = document.querySelector(".cancel")
const save_button = document.querySelector("#save")
darkthemebutton.textContent = "Dark Theme"


function darktheme(e) {
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


function hidecontent(e) {
    if (e.target.tagName === "BUTTON") {
        console.log(e)
        cancel_button.classList.add("hidecontent");
        txtarea.classList.add("hidecontent");
        save_button.classList.add("hidecontent")
    }
}

cancel_button.addEventListener("click", hidecontent)