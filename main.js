let button = document.getElementById("trad");

let changeCSS = () => {
    document.getElementById("css").setAttribute("href", "./oldstyle.css");
    document.getElementById("trad").setAttribute("href", "./oldstyle.css");
}

button.onclick = changeCSS;

if (document.getElementById("css").getAttribute("href") === "./oldstyle.css") {
    button.innerHTML = "Return to Modernity";
}