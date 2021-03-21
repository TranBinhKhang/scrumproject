export const valiSubmitform = (title, description) => {
    let errors ={};
    errors.title = title?"":"Enter your Title";
    errors.description = description?"":"Enter your description!";
    return errors;
}