export class CarView {
  constructor() {
    // Grab elements from the DOM
    this.display = document.getElementById("engine-display");
    this.button = document.getElementById("update-btn");
  }

  // Purely renders the passed data into the HTML tag
  renderEngine(engineType) {
    this.display.innerHTML = `<p>${engineType}</p>`;
  }

  // Links user clicks to the Controller
  bindUpdateButton(handler) {
    this.button.addEventListener("click", handler);
  }
}
