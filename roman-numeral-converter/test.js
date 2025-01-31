const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
roman_string = []
let value = 250;


for (let i = 0; i < arabic.length; i++) {
    while (value >= arabic[i]){
        roman_string.push(roman[i])
        value -= arabic[i];
    }
}

console.log(roman_string.join(""))

