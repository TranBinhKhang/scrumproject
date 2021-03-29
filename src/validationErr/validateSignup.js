export const validateSignup = (fullName, username, faculty, email, password) => {
    let errors ={};
    errors.fullName = fullName?"":"Enter your Full Name!";
    errors.username = username?"":"Enter your User Name!";
    errors.email = email?"":"Enter your Email!";
    errors.password = password?"":"Enter your Password!";
    errors.faculty = faculty?"":"Chose your faculty!";
    return errors;
}