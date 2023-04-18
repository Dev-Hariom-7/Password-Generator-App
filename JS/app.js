const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "!@#$%^&*()_=+-></|";

// selectors--
const passBox = document.querySelector("#pass-box");
const totalChar = document.querySelector("#total-char");
const upperInput = document.querySelector("#upper-case");
const lowerInput = document.querySelector("#lower-case");
const numberInput = document.querySelector("#numbers");
const symbolInput = document.querySelector("#symbols");


const getrandomData = (dataSet) => {
return dataSet[Math.floor(Math.random() * dataSet.length)]
}


const generatePassword = (password = "") => {
if(upperInput.checked) {
    password += getrandomData(upperSet)
}

if(lowerInput.checked) {
    password += getrandomData(lowerSet)
}

if(numberInput.checked) {
    password += getrandomData(numberSet)
}

if(symbolInput.checked) {
    password += getrandomData(symbolSet)
}

if(password.length < totalChar.value){
    return generatePassword(password)
}
passBox.innerText = (truncateString(password, totalChar.value));
}

generatePassword();


document.querySelector("#btn").addEventListener(
    "click",
    function() {
        generatePassword();
    }
)


function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}