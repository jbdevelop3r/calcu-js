const displayInput = document.querySelector('#display');

document.querySelector('#all-clear').addEventListener('click', () => {
    displayInput.value = ``;
});

document.querySelector('#delete').addEventListener('click', ()  => {
        if(displayInput.value.includes("Error")) {
            displayInput.value = ``;
        } else {
            displayInput.value = displayInput.value.toString().slice(0, -1)
        }
});

document.querySelector('#evaluate').addEventListener('click', () => {
    try {
        const resultValue = new Function(`return ${displayInput.value}`)();
        if (Number.isInteger(resultValue)) {
            displayInput.value = resultValue.toString(); 
        } else {
          displayInput.value = resultValue.toString(); 
        }
      } catch (err) {
        displayInput.value = `Error`;
    }  
});