export const CheckData=(email,password)=>{
 const isEmailValide=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
 const isPasswordValide=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/.test(password)
 if(!isEmailValide&&isPasswordValide) return "Email Id is not Valid"
 if(!isPasswordValide&&isEmailValide) return "Password Id is not Valid"
 if((!isPasswordValide)&&(!isEmailValide)) return " Both Email and Password Id is not Valid"
 
 return null;
}