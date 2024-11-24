var queryString = window.location.search;
var params = new URLSearchParams(queryString);
function login() {
  let newUrl = "index.html" + queryString;
  document.location = newUrl;
}
let keys_pressed = 0;
function press(key) {
  if (key < 10) {
    keys_pressed++;
    let circle = document.getElementById("c" + keys_pressed);
    circle.style.background = "black";
  } else if (key == 10 && keys_pressed > 0) {
    let circle = document.getElementById("c" + keys_pressed);
    circle.style.background = "none";
    keys_pressed--;
  }
  if (keys_pressed == 5) {
    login();
  }
}
var isApp = false;
// const hti = document.getElementById("hti");
// if (window.navigator.standalone) {
  hti.style.display = "none";
  document.getElementById("hello").classList.add("active");
  isApp = true;
// } else {
//   hti.style.display = "flex";
//   document.getElementById("hello").style.display = "none";
//   document.getElementById("login_screen").style.display = "none";
// }
setTimeout(showLogin, 2100);
function showLogin() {
  if (isApp) {
    document.getElementById("login_screen").style.display = "flex";
    document.getElementById("login_screen").style.zIndex = 3;
  }
}
