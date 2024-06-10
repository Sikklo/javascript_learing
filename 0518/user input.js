let username;


document.getElementById("btn-submit").onclick = function () {
    username = document.getElementById("mytext").value;
    document.getElementById("my_h1").textContent = `Hello ${username}`
}