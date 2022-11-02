import React, {useState} from "react";
import Employees from './Employees'
import {v4 as uuid} from 'uuid'

import {Link, useNavigate} from 'react-router-dom'
function Create(){
    const[name, setName]=useState('');
    const[age, setAge]=useState('')  
    let history=useNavigate()    
    const handleSubmit = (e) =>{
        e.preventDefault()
        const ids=uuid();
        let uniqueId=ids.slice(0,8)
        let a = name,
         b= age;
        Employees.push({id: uniqueId, name:a, age:b})
        history('/')
    }  
    return(
        <div>
            <form>
                <label>Enter name</label>
                <input type='text' placeholder="Enter name" required onChange={(e)=>setName(e.target.value)}>
                </input>
                <label>Enter age</label>
                <input type='text' placeholder="Enter age" required onChange={(e)=>setAge(e.target.value)}>
                </input>
                <Link>
                <button onClick={(e)=>handleSubmit(e)} type="submit">Submit</button>
                </Link>
            </form>

        </div>
    )
}
export default Create;