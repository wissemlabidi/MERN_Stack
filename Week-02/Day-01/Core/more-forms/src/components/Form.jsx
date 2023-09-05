import React, {useState} from 'react'

const Form = () => {
  const [firstName, setFirstName] = useState("")
  const [firstNameError, setFirstNameError] = useState("")
  const [lastName, setLastName] = useState("")
  const [lastNameError, setLastNameError] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")

  const handleFirstName = (e) =>{
    setFirstName(e.target.value)
    if (e.target.value.length<2){
      setFirstNameError("The field must be at least 2 characters")
    }
    else{
      setFirstNameError("")
    }
  }

  const handleLastName = (e) =>{
    setLastName(e.target.value)
    if (e.target.value.length<2){
      setLastNameError("The field must be at least 2 characters")
    }
    else{
      setLastNameError("")
    }
  }

  const handleEmail = (e) =>{
    setEmail(e.target.value)
    if (e.target.value.length<5){
      setEmailError("The field must be at least 5 characters")
    }
    else{
      setEmailError("")
    }
  }

  const handlePassword = (e) =>{
    setPassword(e.target.value)
    if (e.target.value.length<8){
      setPasswordError("Password too short")
    }
    else{
      setPasswordError("")
    }
  }

  const handleConfirmPassword = (e) =>{
    setConfirmPassword(e.target.value)
    if (e.target.value.length =! password){
      setConfirmPasswordError("Password incorrect")
    }
    else{
      setConfirmPasswordError("")
    }
  }

  const formHandler = (e)=> {
    e.preventDefault()
    console.log(`
    First Name : ${firstName}\n 
    Last Name : ${lastName}\n
    Email : ${email}\n
    Password : ${password}\n
    Confirm Password : ${confirmPassword}\n
    `);
    e.target.reset()
  }

  return (
    <fieldset>
        <legend>
            <h2>Form</h2>
        </legend>
        <form onSubmit={formHandler}>
            <p style={{color:"red"}}>{firstNameError}</p>
            <p>First Name : <input 
            onChange={(e)=>handleFirstName(e)}
            /></p>
            <p style={{color:"red"}}>{lastNameError}</p>
            <p>Last Name : <input 
            onChange={(e)=>handleLastName(e)}
            /></p>
            <p style={{color:"red"}}>{emailError}</p>
            <p>Email : <input 
            onChange={(e)=>handleEmail(e)}
            /></p>
            <p style={{color:"red"}}>{passwordError}</p>
            <p>Password : <input 
            onChange={(e)=>handlePassword(e)}
            /></p>
            <p style={{color:"red"}}>{confirmPasswordError}</p>
            <p>Confirm Password : <input 
            onChange={(e)=>handleConfirmPassword(e)}
            /></p>
            <button>Create user</button>
        </form>
    </fieldset>
  )
}

export default Form