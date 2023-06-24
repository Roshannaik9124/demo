import React from 'react'
import { useState } from 'react'
import {validEmail,validPassword} from "./regex"

const Form = () => {
  const[name,setname]=useState();
  const[errname,seterrname]=useState("");
  const[email,setemail]=useState();
  const[erremail,seterremail]=useState("");
  const[Password,setPassword]=useState();
  const[errPassword,seterrPassword]=useState();
  const[cofPassword,setcofPassword]=useState();
  const[errcofPassword,seterrcofPassword]=useState();

  const namevalidation=(e)=>{
   const name = e.target.value ;
   if(!name){
    seterrname("please enter your name");
   }else{
    seterrname("");
   }
    setname(name)
  }

  const eamilvalidation=(e)=>{
    const name = e.target.value ;
    if(!name){
    seterremail("please enter your email");
    }else if(!validEmail.test(email)){
      seterremail("please enter your valid email");
    }
    else{
     seterremail("");
    }
     setemail(name)
   }

   const Passwordvalidation=(e)=>{
    const password=e.target.value;
    if(!validPassword.test(password)) {
      seterrPassword("follow connection");
    }else{
      seterrPassword("");
    }
    setPassword(password)
    console.log(errPassword);
   }

   const CRPasswordvalidation=(e)=>{
    const password=e.target.value;
    if(!validPassword.test(password)) {
      seterrcofPassword("follow connection");
    }else if(Password.value==cofPassword.value){
      seterrcofPassword("Plz enter correct password");
    }else{
      seterrcofPassword("");
    }
    setcofPassword(password)
    console.log(errcofPassword);
   }


const submithander=()=>{
  console.log('handeler');
    alert("from submite")
    if(!name){
      seterrname("please enter your name");
     }else{
      seterrname("");
     }
     console.log(errname);
     if(!email){
      seterremail("please enter your name");
     }else{
      seterremail("")
     }  
}
  return (
    <div>
      <div>
      <label>name :</label>
      <input type="text" placeholder='name'  name="name" onChange={namevalidation}/><spam>{errname}</spam><br/>
      <label>email :</label>
      <input type="email" placeholder='email'  onChange={eamilvalidation} /><spam>{erremail}</spam><br/>
      <label>Password:</label>
      <input type="password" placeholder='psw' onChange={Passwordvalidation} /><spam>{errPassword}</spam><br/>
      <label>cof. Password:</label>
      <input type="Password" placeholder='psw' onChange={CRPasswordvalidation} /><spam>{errcofPassword}</spam><br/>
      <button onClick={submithander}>con</button>
      </div>
    </div>

  )
}

export default Form
