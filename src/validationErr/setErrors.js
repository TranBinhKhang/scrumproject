export const setErrors = (email, password) => {
    let errors ={};
    errors.email = email?"":"Enter your Email!";
    errors.password = password?"":"Enter your Password!";
    return errors;
}