export const validate = (email, password, name) => {
    // console.log(name);
    const emailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
    const passwordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g.test(password);
    const nameValidate = /^[a-zA-Z][a-zA-Z0-9_-]{2,15}$/.test(name);
    // console.log(nameValidate)
    if(!nameValidate) return "Enter a valid name";
    if(!emailValidate) return "Email address is not valid";
    if(!passwordValidate) return "Password is not valid";
    return null;
}