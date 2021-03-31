export const validateSignup = (fullName, username, email, password) => {
    let errors ={};
    errors.fullName = fullName?"":"Enter your Full Name!";
    errors.username = username?"":"Enter your User Name!";
    errors.email = email?"":"Enter your Email!";
    errors.password = password?"":"Enter your Password!";
    return errors;
}