// Usage: https://github.com/Grsmto/simplebar
import SimpleBar from "simplebar";

document.addEventListener("DOMContentLoaded", () => {
  const simpleBarElement = document.getElementsByClassName("js-simplebar")[0];

  // console.log(simpleBarElement)
  if(simpleBarElement){
    /* Initialize simplebar */
    new SimpleBar(document.getElementsByClassName("js-simplebar")[0])
  }
})