let memoryValue = 0;
let displayValue = 0;

//number functions

function one() {
    if (displayValue == 0) {
        return displayValue = 1;
    } else 
        displayValue = displayValue + "1"
        return displayValue;
}

function two() {
    if (displayValue == 0) {
        return displayValue = 2;
    } else 
        displayValue = displayValue + "2"
        return displayValue;
}

function three() {
    if (displayValue == 0) {
        return displayValue = 3;
    } else 
        displayValue = displayValue + "3"
        return displayValue;
}

function four() {
    if (displayValue == 0) {
        return displayValue = 4;
    } else 
        displayValue = displayValue + "4"
        return displayValue;
}

function five() {
    if (displayValue == 0) {
        return displayValue = 5;
    } else 
        displayValue = displayValue + "5"
        return displayValue;
}

function six() {
    if (displayValue == 0) {
        return displayValue = 6;
    } else 
        displayValue = displayValue + "6"
        return displayValue;
}

function seven() {
    if (displayValue == 0) {
        return displayValue = 7;
    } else 
        displayValue = displayValue + "7"
        return displayValue;
}

function eight() {
    if (displayValue == 0) {
        return displayValue = 8;
    } else 
        displayValue = displayValue + "8"
        return displayValue;
}

function nine() {
    if (displayValue == 0) {
        return displayValue = 9;
    } else 
        displayValue = displayValue + "9"
        return displayValue;
}

function zero() {
    if (displayValue == 0) {
        return displayValue = 1;
    } else 
        displayValue = displayValue + "0"
        return displayValue;
}


function add() {                                                                
    if (memoryValue == 0) {
        memoryValue = displayValue
    } else
        displayValue = Number(memoryValue) + Number(displayValue);                  
        memoryValue = displayValue
        displayValue = 0
        return displayValue;
} 

function subtract() {
    if (memoryValue == 0) {
        memoryValue = displayValue
    } else
        displayValue = Number(memoryValue) - Number(displayValue);
        memoryValue = displayValue
        displayValue = 0
        return displayValue;
}

function multiply() {
    if (memoryValue == 0) {
        memoryValue = displayValue
    } else
        displayValue = Number(memoryValue) * Number(displayValue);
        memoryValue = displayValue
        displayValue = 0
        return displayValue;
}

function divide() {
    if (memoryValue == 0) {
        memoryValue = displayValue
    } else
        displayValue = Number(memoryValue) / Number(displayValue);
        memoryValue = displayValue
        displayValue = 0
        return displayValue;
}
