export const registerValidation = (username, password, confirmPassword, email) => {
    const errors = {}
    if (password === "") {
        errors.password = "password cant be empty"
    } else if (password !== confirmPassword) {
        errors.password = "password must match"
    }
    if (email.trim() === "") {
        errors.email = "email cant be empty"
    } else {
        const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!email.match(regEx)) {
            errors.email = "invalid email"
        }
    }
    if (username.trim() === "") {
        errors.username = "username cant be empty"
    }


    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}

export const loginValidation = (username, password) => {
    const errors = {}
    if (username.trim() === "") {
        errors.username = "username cant be empty"
    }
    if (password === "") {
        errors.password = "password cant be empty"
    }
    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}