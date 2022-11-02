import React, {useState} from "react";
import Employees from './Employees'
import {v4 as uuid} from 'uuid'

import {Link, useNavigate} from 'react-router-dom'
function Edit(){
    const[name, setName]=useState('');
    const[age, setAge]=useState('')  
    const[id, setId]=useState('')  
    let history = useNavigate();
    var index = Employees.map(function(e){
        return e.id
      }).indexOf(id)
      const handleSubmit = (e) =>{
        e.preventDefault()
       let a=Employees[index]
       a.name=name
       a.age=age
        history('/')
    }  
    
    return(
        <div>
            <form>
                <label>Enter name</label>
                <input type='text' placeholder="Enter name" value={name} required onChange={(e)=>setName(e.target.value)}>
                </input>
                <label>Enter age</label>
                <input type='text' placeholder="Enter age" value={age} required onChange={(e)=>setAge(e.target.value)}>
                </input>
                <Link>
                <button onClick={(e)=>handleSubmit(e)} type="submit">Update</button>
                </Link>
            </form>


        </div>
    )
}
export default Edit;