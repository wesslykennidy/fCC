const submit = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const user = document.getElementById("user-input");

function check(phone){
    const regex = /^1?\s*(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    return regex.test(phone);
}
function submitInput() {
    const phoneValue = user.value.trim();
    const result = document.getElementById("results-div");

    result.innerHTML = ""

    if (!phoneValue){
        alert("Please provide a phone number");
        return;
    }


    if (check(phoneValue)){
        result.innerHTML = `Valid US number: ${phoneValue}`
        result.style.color = "green";
    }else{
        result.innerHTML = `Invalid US number: ${phoneValue}`
        result.style.color = "red";
    }

}

function clearInput(){
    document.getElementById("user-input").value = ""
    const result = document.getElementById("results-div");
    result.innerHTML = ""

}

submit.addEventListener("click", submitInput);
clear.addEventListener("click", clearInput);
