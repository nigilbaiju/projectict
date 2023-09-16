import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addstudent = (props) => {
    var [input,setInput]=useState(props.data)
       console.log("add page props"+props.data)
    

    const inputHandler =(e)=>{
        const{name,value}=e.target
        setInput({ ...input,[name]:value})
    }
    const readValues =() =>{

    console.log("clicked")//whenver butten clicked it will show in console
    console.log(input);
    if(props.method === "post"){
    axios.post("http://localhost:3005/students",input)//only in post method we pass 
    .then(response=>{
      console.log("post data"+response.data)
        alert("sucess")
    })
    .catch(err=>console.log(err))
    }else if(props.method==='put'){
      axios.put("http://localhost:3005/students/"+input.id,input)//only in post method we pass 
      .then(response=>{
        console.log("post data"+response.data)
          alert("sucess")
          window.location.reload(false);
      })
      .catch(err=>console.log(err))
    }}
  
  return (
    
    <div>
    
    <br/>
    <TextField  label="Name" name='name'  variant="outlined"
    value={input.name}onChange={inputHandler} />
    <br/>
    <br/>
    <TextField  label="Grade" name='grade' variant="outlined"
    value={input.grade} onChange={inputHandler} />
    <br/>
    <br/>
    <Button variant="contained"  onClick={readValues}color="success">
  SUBMIT
  <br/>
</Button>
    </div>
    
  )
}

export default Addstudent
