import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Addstudent from './Addstudent'

const ViewStudents = () => {
  var[students,setStudents]=useState([])
  var[selected,setSelected]=useState()
  var[update,setUpdate]=useState(false)
  
 useEffect(()=>{
  axios.get('http://localhost:3005/students').then((data)=>{
    setStudents(data.data)
  })
 },[])

const deleteValues =(id)=>{
  console.log("delete clicked"+id)
  axios.delete("http://localhost:3005/students/"+id)
  .then((response)=>{
    console.log(response.idvalue);
    alert("suceessfully deleted");
    window.location.reload(false);
  })

 
  
}
const updateValue = (value) =>{
  setSelected(value);
  setUpdate(true);
}
var view=<TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} aria-label="simple table">
  <TableHead>
    <TableRow>
      <TableCell>ID</TableCell>
      <TableCell >NAME</TableCell>
      <TableCell >GRADE</TableCell>
    
    </TableRow>
  </TableHead>
  <TableBody>
    {students.map((value,index)=>{
      return<TableRow key={index} >
        <TableCell>{value.id}</TableCell>
        <TableCell>{value.name}</TableCell>
        <TableCell>{value.grade}</TableCell>
        <Button
        color='error'
        onClick={()=>deleteValues(value.id)}>DELETE</Button>   

        <Button onClick={()=>updateValue(value)}>UPDATE</Button>  

      </TableRow> //delele the corresponding we pas id
    })
    }
  </TableBody>
 
</Table>
</TableContainer>
if(update)
view=<Addstudent data={selected} method="put"/>


  return (
    <div>
       {view}
    </div>
  )
}

export default ViewStudents
