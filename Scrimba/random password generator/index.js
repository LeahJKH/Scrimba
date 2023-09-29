const onlyLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const onlyNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const onlySymbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let letterNumbers = [];
let letterSymbols = [];
let numbersSymbols = [];
let letterNumberSymbol = [];

let passFieldOne = document.getElementById("pass-field-one")
let passFieldTwo = document.getElementById("pass-field-two")
let warnUser = document.getElementById("warning")

let lettersYN = false;
let numbersYN = false;
let symbolsYN = false;


function letterYes() {
     lettersYN = !lettersYN;
}

function numberYes() {
  
     numbersYN = !numbersYN;
}

function symbolYes() {
  
    symbolsYN = !symbolsYN;
}




function passwordCreate() {
    
    passFieldOne.textContent = ''
    passFieldTwo.textContent = ''
    warnUser.textContent = ''
    
    if (lettersYN === true && numbersYN === true && symbolsYN === true) {
        
     for (pushAll = 0; pushAll < onlyLetters.length; pushAll++) {
        letterNumberSymbol.push(onlyLetters[pushAll])
        }
        for (pushAll = 0; pushAll < onlyNumbers.length; pushAll++) {
        letterNumberSymbol.push(onlyNumbers[pushAll])
        }
        for (pushAll = 0; pushAll < onlySymbols.length; pushAll++) {
        letterNumberSymbol.push(onlySymbols[pushAll])
        }
        
        for (i = 0; i < 16; i++) {
            let random = Math.floor(Math.random() * letterNumberSymbol.length)
            passFieldOne.textContent += letterNumberSymbol[random]
        }
        for (i = 0; i < 16; i++) {
            let random = Math.floor(Math.random() * letterNumberSymbol.length)
            passFieldTwo.textContent += letterNumberSymbol[random]  
        }
        
    } else if (lettersYN === true && numbersYN === true && symbolsYN === false) {
        
        for (pushAll = 0; pushAll < onlyNumbers.length; pushAll++) {
        letterNumbers.push(onlyNumbers[pushAll])
        }
        for (pushAll = 0; pushAll < onlyLetters.length; pushAll++) {
        letterNumbers.push(onlyLetters[pushAll])
        }
        
        for (i = 0; i < 16; i++) {
            let random = Math.floor(Math.random() * letterNumbers.length)
            passFieldOne.textContent += letterNumbers[random]
        }
        for (i = 0; i < 16; i++) {
            let random = Math.floor(Math.random() * letterNumbers.length)
            passFieldTwo.textContent += letterNumbers[random]  
        }
        
    } else if (lettersYN === true && numbersYN === false && symbolsYN === true) {
        
        for (pushAll = 0; pushAll < onlyLetters.length; pushAll++) {
        letterSymbols.push(onlyLetters[pushAll])
        }
        for (pushAll = 0; pushAll < onlySymbols.length; pushAll++) {
        letterSymbols.push(onlySymbols[pushAll])
        }
        
        for (i = 0; i < 16; i++) {
            let random = Math.floor(Math.random() * letterSymbols.length)
            passFieldOne.textContent += letterSymbols[random]
        }
        for (i = 0; i < 16; i++) {
            let random = Math.floor(Math.random() * letterSymbols.length)
            passFieldTwo.textContent += letterSymbols[random]  
        }
        
    } else if (lettersYN === false && numbersYN === true && symbolsYN === true) {
      
        for (pushAll = 0; pushAll < onlyNumbers.length; pushAll++) {
        numbersSymbols.push(onlyNumbers[pushAll])
        }
        for (pushAll = 0; pushAll < onlySymbols.length; pushAll++) {
        numbersSymbols.push(onlySymbols[pushAll])
        }
        
        for (i = 0; i < 16; i++) {
            let random = Math.floor(Math.random() * numbersSymbols.length)
            passFieldOne.textContent += numbersSymbols[random]
        }
        for (i = 0; i < 16; i++) {
            let random = Math.floor(Math.random() * numbersSymbols.length)
            passFieldTwo.textContent += numbersSymbols[random]  
        }
        
    } else if (lettersYN === false && numbersYN === false && symbolsYN === false) {
        
        warnUser.textContent = 'you must choose either letter, number or symbol'
    } else if (lettersYN === true && numbersYN === false && symbolsYN === false) {
       
        for (i = 0; i < 16; i++) {
            let random = Math.floor(Math.random() * onlyLetters.length)
            passFieldOne.textContent += onlyLetters[random]
        }
        for (i = 0; i < 16; i++) {
            let random = Math.floor(Math.random() * onlyLetters.length)
            passFieldTwo.textContent += onlyLetters[random]  
        }
    } else if (lettersYN === false && numbersYN === true && symbolsYN === false) {
        for (i = 0; i < 16; i++) {
            let random = Math.floor(Math.random() * onlyNumbers.length)
            passFieldOne.textContent += onlyNumbers[random]
        }
        for (i = 0; i < 16; i++) {
            let random = Math.floor(Math.random() * onlyNumbers.length)
            passFieldTwo.textContent += onlyNumbers[random]
        }
    } else if (lettersYN === false && numbersYN === false && symbolsYN === true) {
        
        for (i = 0; i < 16; i++) {
            let random = Math.floor(Math.random() * onlySymbols.length)
            passFieldOne.textContent += onlySymbols[random]
        }
        for (i = 0; i < 16; i++) {
            let random = Math.floor(Math.random() * onlySymbols.length)
            passFieldTwo.textContent += onlySymbols[random]
        }
    } 
}


