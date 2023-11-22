export const formValidator = (email,password)=>{

    const isEmailValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/.test(password);
    if(!isEmailValid) return "Email is is not valid";
    if(!isPasswordValid) return "Password is not valid";
    if(isEmailValid && isPasswordValid) return null;
}