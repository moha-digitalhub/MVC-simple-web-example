function getEngine() {
  return document.getElementById("engine-text").innerText;
}

function setEngine(value) {
  document.getElementById("engine-text").innerText = value;
}

function handleClick(previousEngine) {
  let engineDisplay = getEngine();
  setEngine(engineDisplay==previousEngine ? "Electric Dual Motor" : previousEngine);
  previousEngine = getEngine();
}
let previousEngine = document.getElementById("engine-display").children[0].innerText; 
document.getElementById("update-btn")
  .addEventListener("click", () => handleClick(previousEngine));