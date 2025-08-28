const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

let value = 0

// Toggle design function for button

function toggleOn(btn,toggle) { 
    let el = document.getElementById(toggle);
    el.classList.toggle('on');
    console.log('on');
}

// setting number input back to max

let numberInput = document.getElementById("character-count")

// preventing the user from using the e key in the number input

  numberInput.addEventListener('keydown', (e) => { 
    if (e.key === 'e' || e.key === 'E') { 
        e.preventDefault();
    }
  })

// preventing the user from going above or below in the number input

  numberInput.addEventListener("input", () => {
    value = parseInt(numberInput.value, 10);
    let valueString = numberInput.value;
    let min   = parseInt(numberInput.min, 10);
    let max   = parseInt(numberInput.max, 10);

    // if blank return none
    if (isNaN(value)) return;

    // if above or below return blank
    if (value < min) {
      numberInput.value = "";
    } else if (value > max) {
      numberInput.value = "";
    } 
  });

console.log(numberValue)