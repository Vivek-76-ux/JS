function changeButtonText() {
    const button = document.querySelector("button");
  
    if (button.textContent === "Click Me!") {
      button.textContent = "Clicked!";
    } else {
      button.textContent = "Click Me!";
    }
  }
  
  const button = document.querySelector("button");
  button.addEventListener("click", changeButtonText);