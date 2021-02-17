let nav = document.getElementById("nav");
let head = document.getElementsByTagName("head")[0];

head.innerHTML = '<link rel="stylesheet" href="style.css">'

let pages = [
    {
        "name": "Home",
        "path": "index.html",
    },
    {
        "name": "Another Page",
        "path": "another.html"
    },
    {
        "name": "Last Page",
        "path": "last.html"
    }
]

for (i = 0; i < pages.length; i++) {
    link = document.createElement("a");

    let address = document.location.href;
    let n = address.lastIndexOf('/');
    let livePage = address.substring(n + 1);

    if (livePage.length == 0) {
        livePage = "index.html";
    }

    if (livePage.substr(livePage.length - 5) != ".html") {
        livePage = livePage + ".html";
    }

    if (pages[i].path == livePage) {
        link.classList.add("active");

        title = document.createElement("title");
        title.innerHTML = pages[i].name;
        head.appendChild(title)
    }
    link.setAttribute("href", `${pages[i].path}`)
    link.innerHTML = `${pages[i].name}`;
    nav.appendChild(link);
}