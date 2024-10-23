
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