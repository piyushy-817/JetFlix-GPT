export const validateForm = (email,password, fullName)=>{
   
    const validateEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const validatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const validateFullName  = /([a-zA-Z0-9_\s]+)/.test(fullName) 
   // const validateLastName  = /([a-zA-Z0-9_\s]+)/.test(lastName) 
   // const validateNumber = /^\d{10}$/.test(number);

   
    if(!validateEmail )return "Email is not valid"
    if(!validatePassword )return "Password is not valid" 
   // if (confirmPassword && password !== confirmPassword) return "Passwords do not match";
    if(!validateFullName )return "Name is not valid" 
   // if(!validateLastName )return "Last Name is not valid" 
    //if(!validateNumber )return "Number is not valid" 

    return null
    

}

export default validateForm