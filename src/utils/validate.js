export const validateData=(email, password)=>{
    const isEmailValid=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
    const isValidPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(password);
    console.log(email,' ',password);
    console.log('isValidPassword=',isValidPassword, 'isEmailValid=',isEmailValid);
    if(!isEmailValid) return 'Email ID is not valid';
    else if(!isValidPassword) return 'Password is not correct';
    return null;
}