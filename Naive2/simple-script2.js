    // The Controller
    let handleClick = (previousEngine) => {
      //console.log("previousEngine: ", previousEngine);
      let engineDisplay = document.getElementById("engine-display").children[0];  
      if (engineDisplay.innerText==previousEngine) {
        document.getElementById("engine-display").children[0].innerText = "Electric Dual Motor";
      } else {
        document.getElementById("engine-display").children[0].innerText = previousEngine;
      }
      //document.getElementById("engine-display").children[0].innerText = (engineDisplay.innerText==previousEngine ? "Electric Dual Motor" : previousEngine);
      previousEngine = engineDisplay.innerText;
      //console.log("previousEngine: ", previousEngine);
    };
