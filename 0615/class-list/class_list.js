// const myButton = document.getElementById("myButton");
// const myH1 = document.getElementById("myH1");
// myButton.classList.add("hover");

// myButton.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
// })
// myButton.addEventListener("mouseover", event => {
//     event.target.classList.add("hover");
// })
// myButton.addEventListener("mouseout", event => {
//     event.target.classList.toggle("hover");
// })
// myButton.classList.remove("enabled");
// myH1.classList.add("enabled");
// myButton.classList.add("enabled");
// myButton.addEventListener("click", event => {

//     if (myButton.classList.contains("disabled")) {
//         myButton.textContent += "😫😪";
//     }
//     else {
//         event.target.classList.replace("enabled", "disabled");
//     }


// })

// -------------------------------------------------------------------

let myClassButton = document.querySelectorAll(".myButton");

myClassButton.forEach(button => {
    button.classList.add("enabled");
});


myClassButton.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    })
});

myClassButton.forEach(button => {
    button.addEventListener("click", event => {
        if (event.target.classList.contains("disabled")) {
            event.target.textContent += "😚";
        }
        else {
            event.target.classList.replace("enabled", "disabled");
        }
    })
})