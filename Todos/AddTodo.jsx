/* eslint-disable react/prop-types */

import { useState } from "react";
const AddTodo= ({myData,setMyData})=>{
const[myName,setmyName]=useState("");
const[Description,setDescription]=useState("");    

const addNewTodo=()=>{
       const newDetails={
          name:myName,
          Description,
           status:"Completed",
       };
        setMyData([...myData, newDetails]);
      
    }
    return(
            <div className="grid grid-rows m-6">
              <h1 className=" flex justify-center m-7 text-xl
               text-accent font-medium ">My Todo List</h1>
            <div className="grid grid-cols-3 justify-items-center ">

 
            <input
            type="text"
            placeholder="Todo Name"
            className="input input-bordered w-80 "
            value={myName}
            onChange={(e)=>setmyName(e.target.value)}
            />
            <input
            type="text"
            placeholder="Todo Description"
            className="input input-bordered w-80"
            value={Description}
            onChange={(e)=>setDescription(e.target.value)}
            />
            <button className="btn btn-success w-48 gap-1 text-white "
            onClick={addNewTodo}>
                Add Todo</button>
        </div>
        </div>   
        
    );
  };
  export default AddTodo;