const numberInput = document.getElementById("number");
const submitButton = document.getElementById("convert-btn");
const result =document.getElementById("output");

const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

const checkValue = () => {
    result.innerText = ""
    let roman_string = [];
    let value = parseInt(numberInput.value)

    if (numberInput.value < 0){
        result.innerText = "Please enter a number greater than or equal to 1";
        result.style.display = "block"
        return;
    }else if (numberInput.value >= 4000){
        result.innerText = "Please enter a number less than or equal to 3999";
        result.style.display = "block"
        return;
    }else if (numberInput.value === ''){
        result.innerText = "Please enter a valid number";
        result.style.display = "block"
        return;
    }
    
    

    for (let i = 0; i < arabic.length; i++){
        while (value >= arabic[i]){
            roman_string.push(roman[i]);
            value -= arabic[i];
        } 
    }
    result.innerText = roman_string.join("");
    result.style.display = "block";
}
    

document.getElementById("convert-btn").addEventListener("click", checkValue);
