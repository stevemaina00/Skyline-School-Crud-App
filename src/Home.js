import React from 'react'
import './App.css'
import Employees from './Employees'
import {Link, useNavigate} from 'react-router-dom'

function Home(){
  let history = useNavigate()
 
const handleDelete = (id) =>{
  var index = Employees.map(function(e){
    return e.id
  }).indexOf(id)
  Employees.splice(index, 1)
  history('/')
}
  
  return (
    <div>
    <table>
  <tr>
    <th>Names</th>
    <th>Age</th>
    <th>Actions</th>
  </tr>
  <tr>
    <td>{Employees && Employees.length>0? Employees.map(item=><p>{item.name}</p>) :"No data"}</td>
    <td>{Employees && Employees.length>0? Employees.map(item=><p>{item.age}</p>) :"No data"}</td>
    <td>{Employees && Employees.length>0? Employees.map(item=><p><Link to={'/edit'}><button onClick={()=>alert("Edit")} >Edit</button></Link>
   &nbsp;
    <button onClick={()=>handleDelete(item.id)}>Delete</button></p>) :"No data"}</td>
  </tr>


</table>
<br>
</br>
<Link to={'create'}>
  <button>Create</button>
</Link>
</div>
  )
}

export default Home