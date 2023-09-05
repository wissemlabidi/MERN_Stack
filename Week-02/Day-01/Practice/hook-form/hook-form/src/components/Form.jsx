import React, {useState} from 'react'

const Form = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
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
            <p>First Name : <input 
            onChange={(e)=>setFirstName(e.target.value)}
            /></p>
            <p>Last Name : <input 
            onChange={(e)=>setLastName(e.target.value)}
            /></p>
            <p>Email : <input 
            onChange={(e)=>setEmail(e.target.value)}
            /></p>
            <p>Password : <input 
            onChange={(e)=>setPassword(e.target.value)}
            /></p>
            <p>Confirm Password : <input 
            onChange={(e)=>setConfirmPassword(e.target.value)}
            /></p>
            <button>Create user</button>
        </form>
        <legend><h2>Your Form Data</h2></legend>
        <h4>
            First Name : {firstName} <br />
            Last Name : {lastName} <br />
            Email : {email} <br />
            Password : {password} <br />
            Confirm Password : {confirmPassword} <br />
          </h4>
    </fieldset>
  )
}

export default Form