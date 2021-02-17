let nav = document.getElementById("nav");

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

    if (pages[i].path == livePage) {
        link.classList.add("active");
    }
    link.setAttribute("href", `${pages[i].path}`)
    link.innerHTML = `${pages[i].name}`;
    nav.appendChild(link);
}

