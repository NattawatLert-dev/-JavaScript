// Accept User Input

let username;

// 1.
//username = window.prompt("Enter your name:");

// 2.
document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = "Hello " + username;
    console.log(username);
}