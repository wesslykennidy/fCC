function testRegex (phone){
    const regex = /^1?\s*(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    return regex.test(phone);
}

function result(phone){
    if (testRegex(phone)){
        console.log("Valid number ");
    }else{
        console.log("Invalid number");
    }
}

result("1 555-555-5555")
result("1 (555) 555-5555")
result("1(555)555-5555")  
result("1 555 555 5555")  
result("5555555555") 
result("555-555-5555")  
result("(555)555-5555")
result("123**&!!asdf#")
