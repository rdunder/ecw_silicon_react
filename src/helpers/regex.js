// Jag beslutade att göra "helpers" för att dessa skulle användas på fler än 1 plats
// detta hade säkert kunnat göras på ett mer "react" mässigt sätt, men de fungerar och föenklar koden en del där de används.

function validateEmail(str) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(str);
}

function validateName(str) {
    const regex = /^[a-zA-Z' -]{1,15}$/;
    return regex.test(str);
}

function validatePassword(str) {
    const regex = /^[A-z0-9]+$/;
    return regex.test(str);
}

function validatePhoneNumber(str) {
    return false;
}


export {validateEmail, validateName, validatePassword, validatePhoneNumber}


