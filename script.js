const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const symbols = [ "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];
const numbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];

// Toggle design function for button

function toggleOn(toggle) { 
    let el = document.getElementById(toggle);
    el.classList.toggle('on');
    console.log(el.classList.contains('on'));
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
    let value = parseInt(numberInput.value, 10);
    const min   = parseInt(numberInput.min, 10);
    const max   = parseInt(numberInput.max, 10);

    if (isNaN(value) || value < min || value > max) { 
        numberInput.value = " ";
    }
  });


// Generating the Password 
const generatePassword = document.getElementById('btn-generate')
const passwordText = document.getElementById('password-text')

generatePassword.addEventListener('click', () => { 
    const value = parseInt(numberInput.value, 10);
    let passwordArray = letters;
    
    if (document.getElementById('toggle1').classList.contains('on')) { 
        passwordArray = passwordArray.concat(symbols);
    }

    if (document.getElementById('toggle2').classList.contains('on')) { 
        passwordArray = passwordArray.concat(numbers)
    }
    
    let out = ""
    for (let i = 0 ; i < value ; i ++) { 
        let randomNumber = Math.floor(Math.random() * passwordArray.length)
        out += passwordArray[randomNumber]
    }

    passwordText.value = out
})

// copy buttom 

const copyBtn = document.getElementById('copy')

copyBtn.addEventListener('click', () => { 
    navigator.clipboard.writeText(passwordText.value)
    document.getElementById('copied').textContent = "Password Copied"

    setTimeout(() => {
        document.getElementById('copied').textContent = ""
    },1500)
})