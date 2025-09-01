
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


// random numbers 

function randomNumbers(minValue,maxValue){ 
    let array = new Uint32Array(1)
    window.crypto.getRandomValues(array)
    return minValue + (array[0] % (maxValue - minValue))
}


// Generating the Password 
const generatePassword = document.getElementById('btn-generate')
const passwordText = document.getElementById('password-text')

generatePassword.addEventListener('click', () => { 
    const value = parseInt(numberInput.value, 10);

    let passwordArray = Array.from({length: 26},(_,i) => 
    String.fromCharCode(65 + i));
    
    if (document.getElementById('toggle1').classList.contains('on')) { 
        passwordArray = passwordArray.concat(Array.from({length: 47-33 + 1},(_,i) =>
        String.fromCharCode(33+i)));
    }

    if (document.getElementById('toggle2').classList.contains('on')) { 
        passwordArray = passwordArray.concat(Array.from({length: 57 - 48 + 1},(_,i) => 
        String.fromCharCode(48 + i) ))
    }
    
    let out = ""
    for (let i = 0 ; i < value ; i ++) { 
        let randomNumber = randomNumbers(0,passwordArray.length)
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