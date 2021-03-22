export const valiCreateacount = (fullName, username, email, password, faculty ,role) => {
    let errors ={};
    errors.fullName = fullName?"":"Enter your Full Name";
    errors.username = username?"":"Enter your User Name!";
    errors.email = email?"":"Enter your Email!";
    errors.password = password?"":"Enter your Password!";
    errors.faculty = faculty?"":"Chose your Faculty!";
    errors.role = role?"":"Chose your Role!";
    return errors;
}