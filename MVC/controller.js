import { CarModel } from './model.js';
import { CarView } from './view.js';

class CarController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // 1. Initial UI Render
    this.view.renderEngine(this.model.engineType);

    // 2. Bind Model changes -> updates View automatically
    this.model.onEngineChange = (newEngine) => {
      this.view.renderEngine(newEngine);
    };

    // 3. Bind View events -> updates Model
    this.view.bindUpdateButton(() => this.handleUpdateClick());
  }

  handleUpdateClick() {
    // Simulating a data change (e.g., swapping engines)
    this.model.engineType = "Electric Dual Motor";
  }
}

// Initialize the MVC application once the script loads
let mercedes = new CarModel(2023);
mercedes.print();
const app = new CarController(new CarModel(2026), new CarView());
