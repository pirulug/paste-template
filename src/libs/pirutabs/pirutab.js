const inputPesta1 = document.getElementById("inputPesta1");
const inputPesta2 = document.getElementById("inputPesta2");
const inputPesta3 = document.getElementById("inputPesta3");
const inputPesta4 = document.getElementById("inputPesta4");
const inputPesta5 = document.getElementById("inputPesta5");
const inputPesta6 = document.getElementById("inputPesta6");

const titlePesta1 = document.getElementById("titlePesta1");
const titlePesta2 = document.getElementById("titlePesta2");
const titlePesta3 = document.getElementById("titlePesta3");
const titlePesta4 = document.getElementById("titlePesta4");
const titlePesta5 = document.getElementById("titlePesta5");
const titlePesta6 = document.getElementById("titlePesta6");

inputPesta1.addEventListener("input", (e) => {
  titlePesta1.textContent = e.target.value;
  inputPesta1.value === "" ?  titlePesta1.textContent = "Desactivado" : titlePesta1.textContent = e.target.value;
});
inputPesta2.addEventListener("input", (e) => {
  titlePesta2.textContent = e.target.value;
  inputPesta2.value === "" ?  titlePesta2.textContent = "Desactivado" : titlePesta2.textContent = e.target.value;
});
inputPesta3.addEventListener("input", (e) => {
  titlePesta3.textContent = e.target.value;
  inputPesta3.value === "" ?  titlePesta3.textContent = "Desactivado" : titlePesta3.textContent = e.target.value;
});
inputPesta4.addEventListener("input", (e) => {
  titlePesta4.textContent = e.target.value;
  inputPesta4.value === "" ?  titlePesta4.textContent = "Desactivado" : titlePesta4.textContent = e.target.value;
});
inputPesta5.addEventListener("input", (e) => {
  titlePesta5.textContent = e.target.value;
  inputPesta5.value === "" ?  titlePesta5.textContent = "Desactivado" : titlePesta5.textContent = e.target.value;
});
inputPesta6.addEventListener("input", (e) => {
  titlePesta6.textContent = e.target.value;
  inputPesta6.value === "" ?  titlePesta6.textContent = "Desactivado" : titlePesta6.textContent = e.target.value;
});
