const darkthemebutton = document.querySelector(".theme")
const darksidebar = document.querySelector('.my-notes-container')
const txtarea = document.querySelector("textarea")
const cancel_button = document.querySelector(".cancel")
const bottom_buttons = document.querySelector(".bottombuttons")
const new_button = document.querySelector("#new")
const save_button = document.querySelector(".save")
const ullist = document.querySelector("ul")
darkthemebutton.textContent = "Dark Theme"
let userinput 
const bodytxt = txtarea.value

const notesarray = [
    {title: "note one", body: "this is my first note"},
    {title: "note two", body: "this is my second note"}
]

// dark theme button 
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


//cancel button, hides content
function hidecontent(e) {
    if (e.target.tagName === "BUTTON") {
        bottom_buttons.classList.add("hidecontent");
        txtarea.classList.add("hidecontent");
    } 
}

cancel_button.addEventListener("click", hidecontent);


//reveal content again when new button is clicked
function revealcontent(e) {
    if (e.target.tagName === "BUTTON") {
        bottom_buttons.classList.remove("hidecontent");
        //checks to see if hidecontent is there or not, and if there is content in txtarea, erase
        if (!txtarea.classList.contains("hidecontent") && txtarea.value.length > 0) {
            txtarea.value = '';
        }
        //reveals txtarea with content still attached 
        txtarea.classList.remove("hidecontent");

    }
}

new_button.addEventListener("click", revealcontent);


function savenotes(e) {
    userinput = prompt("Please add a title!")
    const bodytxt = txtarea.value;
    notesarray.push(
        {title: userinput,
        body: bodytxt}
    )
    console.log(notesarray)
    const new_note = document.createElement("li")
    new_note.textContent = userinput
    ullist.appendChild(new_note)

}

save_button.addEventListener("click", savenotes)
