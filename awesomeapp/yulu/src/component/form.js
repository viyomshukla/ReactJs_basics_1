import React, { useState } from "react";
function Form(){
    const [text,settext]=useState(" ");
    const [country,setcountry]=useState("india");
    const [checkbox,setcheckbox]=useState(false);
    const [fruitarary,setfruitarray]=useState([]);
    const texte=(e)=>{
    console.log(e.target.value);
    settext(e.target.value);
    }
    const submit=(e)=>{
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        console.log(e.target[2].checked);
        console.log(fruitarary);
    }
    const dropdown=(e)=>{
        console.log(e.target.value);
        setcountry(e.target.value);
    }
    const checkbo=(e)=>{
        const{name}=e.target
        console.log(e.target.checked)
        setcheckbox(e.target.checked)
        if(e.target.checked){
            setfruitarray([...fruitarary,e.target.name])
        }
        else{
          setfruitarray(fruitarary.filter((e)=>e!=name));

        }
    }
    return(
        <div>
            <form onSubmit={submit}>
            <label style={{ textAlign: "left" }}>Text</label>
            <textarea rows='4' value={text} placeholder="write some text"onChange={text}></textarea>
            <br/>
            <br/>
            <select value={country} onChange={dropdown}>
                <option>usa</option>
                <option>uk</option>
                <option>india</option>
                <option>england</option>
            </select>
            <br/>
            <br/>
            <input type="checkbox" checked={checkbox} name="orange" onChange={checkbo} />
            <label>Orange</label>
            <input type="checkbox" checked={checkbox} name="mango" onChange={checkbo}/>
            <label>mango</label>
            <input type="checkbox" checked={checkbox} name="banana" onChange={checkbo}/>
            <label>banana</label>
            <input type="checkbox" checked={checkbox} name="pineapple" onChange={checkbo} />
            <label>pineapple</label>

            <input type="submit"></input>
            </form>
        </div>
    )
}
export default Form