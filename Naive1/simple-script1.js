    // The Controller
    let previousEngine = document.getElementById("engine-display").children[0].innerText; 
    let handleClick = (previousEngine) => {
      let engineDisplay = document.getElementById("engine-display").children[0];  
      document.getElementById("engine-display").children[0].innerText = (engineDisplay.innerText==previousEngine ? "Electric Dual Motor" : previousEngine);
    };  
    const button = document.getElementById("update-btn");
    button.addEventListener("click", () => {
        handleClick(previousEngine)}
    );