export const loginValidation = (username, password) => {
    const errors = {};

    if (username.trim() === "") {
        errors.username = "username cant be empty"
    }
    if (password === "") {
        errors.password = "password cant be empty"
    }
    return {
        errors,
        invalid: Object.keys(errors).length > 1
    }
}