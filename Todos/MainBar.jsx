/* eslint-disable no-unused-vars */
import { useState } from "react";
import AddTodo from "./AddTodo";
import Update from "./Update";

// eslint-disable-next-line react/prop-types
export default function MainBar() {
  const data = [
    {
      name: " Guvi Task",
      Description: " React Router Dom Task Want",
      status: "Not-Completed",
    },

    {
        name: " Additional Session",
        Description: " Watch Recording of DAY-31",
        status: "Completed",
      },
      {
        name: " Codekata",
        Description: " Practice Codekata Excercise",
        status: "Not-Completed",
      }
  ];
  const [myData, setMyData] = useState(data);
  const [showData,setShowData] = useState(true);
 const [editId,setEditId]=useState("");
 const[status,setStatus]=useState("");
 
 //delete function
   const deleteTodoDetails=(id)=>{
     const remainingDoctors=myData.filter((docInfo,idx)=> idx !== id); 
     setMyData(remainingDoctors);
   };
 
   //update function
   const handleEdit =(id)=>{
 setShowData(false);
 setEditId(id);
   };
   //handle Status
   const handleStatus = (e) => {
    const selectedStatus = e.target.value;
  
    if (selectedStatus === "All") {
      // Show all todos
      setMyData(data);
    } else {
      // Filter todos based on the selected status
      const filteredData = data.filter((item) => item.status === selectedStatus);
      setMyData(filteredData);
    }
  };
  return (
    <div className="main">
      {showData===true ?
        <AddTodo myData={myData} setMyData={setMyData} />:
       <Update myData={myData}
        setMyData={setMyData} 
        showData={showData}
        setShowData={setShowData}
        editId={editId}
        />
      }
      { (
        <>
        <div className="flex justify-between text-xlfont-bold m-4 text-xl font-bold">
        <div>My Todos</div>
        <div>Status Filter
              <span> 
                  <select className="select text-white select-sm w-30 bg-red-400 "
        onChange={(e)=>handleStatus(e)} value={status} >
              <option value="All" >All</option>
              <option value="Completed">Completed</option>
              <option value="Not-Completed">Not-Completed</option>
             
                </select>
              </span>
        </div>
        </div>
      
        <div className="flex flex-wrap m-2 p-1">
        {myData.map((docInfo, idx) => (
            <div
              key={idx}
              className="card w-73 bg-green-200 m-2 tracking-tight p-0 font-small"
            >
              <div className="card-body">
                <p> Name:{docInfo.name} </p>
                <p>Description:{docInfo.Description}</p>
                <p className="">Status 
                <select className={`select select-bordered text-white select-sm w-30 pl-3 m-1  ${docInfo.status == "Not-Completed" ?'bg-red-400':'btn-success'}`}>
                  {docInfo.status == "Completed"? (
                    <option >Completed</option>
                  ) : (
                    <option >Not-Completed</option>
                  )}
                  {docInfo.status == "Not-Completed" ? (
                    <option >Completed</option>
                  ) : (
                    <option >Not-Completed</option>
                  )}
                </select>
                </p>
                
                <div className="card-actions justify-end">
                  <button className="btn btn-success text-white" 
                  onClick={()=>handleEdit(idx)}>Edit</button>
                  <button className="btn bg-orange-600 text-white"
                  onClick={()=>deleteTodoDetails(idx)}
                  >Delete</button>
                 

                </div>
              </div>
            </div>
          ))}
        </div>
          
        </>
      )}
    </div>
  );
}