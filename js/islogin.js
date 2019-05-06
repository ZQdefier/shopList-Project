var unlogin = document.querySelector("#unlogin");
var onlogin = document.querySelector("#onlogin");
var span = onlogin.querySelector("span");

var username = tools.cookie("username");
console.log(username)
if(username){
    unlogin.classList.add("hidden");
    span.innerHTML = username;
    onlogin.classList.remove("hidden");
}