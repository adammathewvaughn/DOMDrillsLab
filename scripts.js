document.addEventListener("DOMContentLoaded", function () {
    let div = document.createElement("div");
    div.classList.add("header-container");
    document.body.appendChild(div);
    let colorSelection = ["red", "orange", "yellow", "green", "blue", "purple", "maroon", "gold"];
    let listNumber = 1;
    
    let button = document.getElementsByClassName("button");
    button[0].addEventListener("click", newList);

    let h1 = document.createElement("h1");
    let h1Text = document.createTextNode("This is an h1");
    h1.classList.add("h1");
    h1.appendChild(h1Text);
    h1.addEventListener("dblclick", function () {
        changeColors(h1);
    });
    div.appendChild(h1);

    let h2 = document.createElement("h2");
    let h2Text = document.createTextNode("This is an h2");
    h2.classList.add("h2");
    h2.appendChild(h2Text);
    h2.addEventListener("dblclick", function () {
        changeColors(h2);
    });
    div.appendChild(h2);

    let h3 = document.createElement("h3");
    let h3Text = document.createTextNode("This is an h3");
    h3.classList.add("h3");
    h3.appendChild(h3Text);
    h3.addEventListener("dblclick", function () {
        changeColors(h3);
    });
    div.appendChild(h3);

    let h4 = document.createElement("h4");
    let h4Text = document.createTextNode("This is an h4");
    h4.classList.add("h4");
    h4.appendChild(h4Text);
    h4.addEventListener("dblclick", function () {
        changeColors(h4);
    });
    div.appendChild(h4);

    let h5 = document.createElement("h5");
    let h5Text = document.createTextNode("This is an h5");
    h5.classList.add("h5");
    h5.appendChild(h5Text);
    h5.addEventListener("dblclick", function () {
        changeColors(h5);
    });
    div.appendChild(h5);

    let h6 = document.createElement("h6");
    let h6Text = document.createTextNode("This is an h6");
    h6.classList.add("h6");
    h6.appendChild(h6Text);
    h6.addEventListener("dblclick", function () {
        changeColors(h6);
    });
    div.appendChild(h6);

    function newList() {
        let list = document.createElement("li");
        let div = document.createElement("div");
        // div.classList.add("list-Container");
        document.body.appendChild(div);
        list.classList.add("li");
        let nodeList = document.createTextNode("This is list item number " + listNumber);
        list.addEventListener("click", function () {
            changeColors(list);
        });
        list.addEventListener("dblclick", function () {
            document.body.removeChild(list);
        });
        list.appendChild(nodeList);
        document.body.appendChild(list);
        listNumber++
    }

    function changeColors(element) {
        let changeNumbers = Math.ceil((Math.random() * colorSelection.length));
        element.style.color = colorSelection[changeNumbers];
    }
});
