import React, { createContext } from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './component/function_component';
import Hello from './component/class_component';
//import hell2 from './component/constructor';
import Constru from './component/constructor'; /// capital letter 1st letter
import Pratice from './component/set';
import Child from './component/ChildComponenet';
import Parent from './component/parentComponent';
import Inline from './component/inlinecss';
import External from './component/externallcss';
import Func from './component/bootstap';
import Functionstate from './component/functionstate';
import Classstate from './component/classstate';
import Useobj from './component/useobj';
import Comp1 from './component/comp1';
import Classinput from './component/classinput';
import Functioninput from './component/functioninput';
import Form from './component/form';
import Uncontrolled from './component/uncontrolledRef';
import Controlled from './component/controlled';
import Funcref from './component/funcref';
export const namecontext=createContext();

function App() {
  return (
/*
<div >
      { <Greet name="XYZ" batch="W2"/> }
      <Hello name="viyom" batch="B12" >
      <button>click</button>
      </Hello>
      <Constru name="virat kholi" hobbies="cricket"/>
      <Pratice />
      <Parent/>
      <Inline/>
      <External bool={true}/>
      <Func/>
      <Functionstate/>
      <Classstate/>
      <Useobj/>
        // <Comp1 name="himanshu">
     <namecontext.Provider value={'himanshu'}>
      <Comp1/>
     </namecontext.Provider>
    <Classinput/>
    <Functioninput/>
   
    <Form/>
      </div>*/
    <div>
    {/* <Uncontrolled/> */}
    {/* <Controlled/> */}
    <Funcref/>


    </div>
    
  );
}

export default App;
