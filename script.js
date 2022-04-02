const dice = document.querySelector(".dice");
const adviceText = document.querySelector("p");
const divider = document.querySelector(".divider");
const code = document.querySelector("span");

const showAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => { const dataSlip = data.slip
        const { id, advice } = dataSlip;
        adviceText.innerHTML = `"${advice}"`;
        code.innerHTML = `Advice #${id}`;
    });
}

function myFunction(x) {
    if (x.matches) { // If media query matches
      divider.setAttribute("src", "./images/pattern-divider-desktop.svg");
    } else {
      divider.setAttribute("src","images/pattern-divider-mobile.svg")
    }
  }

dice.addEventListener('click', showAdvice);


  
  var x = window.matchMedia("(min-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

