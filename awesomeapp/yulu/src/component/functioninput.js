import React, { useState } from 'react'
import func from './bootstap';
function Functioninput(){
    const [name,setname]=useState(" ");
    const [email,setemail]=useState(" ");
    const[data,setdata]=useState({
        name:" ",
        email:" "
    })
    const func=(p)=>{
        console.log(p.target.value)
        setname(p.target.value)
    }
    const fun2=(p)=>{
        console.log(p.target.value)
        setemail(p.target.value)       
    }
    const handle=(p)=>{
    p.preventDefault();
    console.log(data);
    }
    const Handleboth = (e) => {
        setdata((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };
    return(

        <div>
            <form onSubmit={handle}>
                <label>enter your name</label>
                <input type='text' value={data.name} name='name' onChange={Handleboth}></input><br/><br/>
                <label>enter your email</label>
                <input type='email' value={data.email} name='email' onChange={Handleboth}></input><br/><br/>
                <input type='submit'></input>
            </form>
        </div>
    )
}
export default Functioninput