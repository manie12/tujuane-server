export const registerValidation = (username, password, confirmPassword, email) => {
    const errors = {};
    if (username.trim() === "") {
        errors.username = "username cant be empty"
    }

    if (email.trim() === "") {
        errors.email = "email cant be empt"
    } else {
        const regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!email.match(regExp)) {
            errors.email = "invalid email"
        }
    }
    if (password === "") {
        errors.password = "password cant be empty p"
    } else
        if (password !== confirmPassword) {
            errors.confirmPassword = "password must match"
        }



    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}

