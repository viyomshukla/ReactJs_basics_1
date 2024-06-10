import React from 'react';
const arr=["viyom","rahul","rohit"];
//const arr2=arr.map((num,index)=><li key={index}>{num}</li>)//list
const student=[
  {
    name:"viyom",
    rollno:2
  },
  {
    name:"nikhil",
    rollno:3
  }
]
const Greet = (props) => {

  return (
  
    <div>
     {arr.map((name,index)=>( <li key={index}>{name}</li>))}
     {student.map((std,index)=>(<li key={index}>name is {std.name} and rollno is {std.rollno}</li>))}
      <h1>Hello student</h1>
      <h1>{props.name}</h1>
      <h1>{props.batch}</h1>
    </div>
  );
};

export default Greet;
