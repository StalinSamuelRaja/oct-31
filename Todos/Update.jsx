/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */


import { useEffect, useState } from "react";
const Update= ({myData,setMyData,showData,setShowData,editId})=>{
const[myName,setmyName]=useState("");
const[Description,setDescription]=useState("");    
const[todoStatus,setTodoStatus] =useState("");
useEffect(()=>{
    const SelectedTodo=myData.filter((doc,idx)=> idx ==editId); 
    setmyName(SelectedTodo[0].name);
    setDescription(SelectedTodo[0].Description);
   setTodoStatus(SelectedTodo[0].status)
 },[editId]) 
//update
    const updateTodos =()=>{
        const editedTodo ={
            name:myName,
            Description,
            status:todoStatus,
        };
    myData[editId]=editedTodo;
   // console.log(myData[editId])
        setShowData(!showData);
        //setEditId(id);
     console.log(setShowData(!showData))

          };
return(
    <div className="grid grid-rows m-6">
    <h1 className=" flex justify-center m-7 text-xl
     text-accent font-medium ">My Todo</h1>
  <div className="grid grid-cols-3  justify-items-center gap-x-8">

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
            <button className="btn bg-blue-500 w-48 gap-1 text-white "
            onClick={()=>updateTodos()}>
                Edit Todo</button>
        </div>
        </div>   
        
    );
  };
  export default Update;