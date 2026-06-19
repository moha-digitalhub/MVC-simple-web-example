export class CarModel {
  constructor(year) {
    // Initial data state
    this._engineType = "V8 Turbo";
    this._color = "Red";
    this.year = year;
    this.onEngineChange = null; // Callback function link
  }

  get engineType() {
    return this._engineType;
  }

  // Updating the data triggers the UI update
  set engineType(newType) {
    this._engineType = newType;
    if (this.onEngineChange) {
      this.onEngineChange(newType); 
    }
  }
   print() {
    console.log("Engine Type: " + this.year + " " + this._engineType);
  }

}