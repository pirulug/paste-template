const headerBtn = document.querySelector(".header-btn")
const sidebarElement = document.querySelector(".sidebar")

if(headerBtn){
  headerBtn.onclick = function () {
    headerBtn.classList.toggle("toggle")
    sidebarElement.classList.toggle("collapsed")
  }
}

// document.onclick = function(e) {
//   if(e.target.id !== "header-btn" && e.target.id !== "sidebar"){
//     headerBtn.classList.remove("toggle")
//     sidebarElement.classList.remove("collapsed")
//     // console.log("click")
//   }
// }