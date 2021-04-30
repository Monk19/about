const pElement = document.getElementById("typer");
const toRenderContent = `Hello I am Ravi and i am web Developer
Intrested in UI/UX and all round web development`;
let i = 0;
let timeFunction = setInterval(dynamicType, 100);
function dynamicType() {
  if (i >= toRenderContent.length) {
    clearInterval(timeFunction);
  } else {
    pElement.innerHTML += toRenderContent[i];
  }
  i++;
}
