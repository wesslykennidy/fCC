const checkBtn = document.getElementById("check-btn");


function isPalindrome(input){
  const cleanString = input.toLowerCase().replace(/[^a-z0-9]/g,'');
  const reverseString = cleanString.split('').reverse().join('');
  return cleanString === reverseString;
}

function checkPalindrome(){
  const input = document.getElementById('text-input').value.trim();
  const result = document.getElementById('result');

  if (input === ''){
    alert("Please input a value");
    return ;
  }

  if(isPalindrome(input)){
    result.textContent = `${input} is a palindrome`;
  }else{
    result.textContent = `${input} is not a palindrome`;
  }

}
document.getElementById("check-btn").addEventListener("click", checkPalindrome)