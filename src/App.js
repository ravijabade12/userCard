import React from "react";
import { useState } from "react";
import axios from 'axios';
import './App.css';

function App(){

  const[user,setUser]=useState([]);
  const[loading,setLoading]=useState(false);

  function getUsers(){
    setLoading(true);

    

    axios.get("https://reqres.in/api/users?page=1").then(res =>{
      setLoading(false);
      console.log(res.data.data);
      setUser(res.data.data);
    }).catch(err =>{
      console.log(err)
    })
    
  }

  if(loading){
    return(
      <span>Loading....</span>
    )
    
  }


  return(
    <>
    <div className="nav">
      <h1>API CALL</h1>

      <button onClick={getUsers} className="btn">Get Users</button>

    </div>


    <div className="product">
      {
      user.map((ele)=>{
        return(
          <div className="design">
            <img className="imgProduct" src={ele.avatar}></img>
            <p>FirstName : <strong>{ele.first_name}</strong> </p>
            <p>LastName : <strong> {ele.last_name}</strong></p>
            <p>EmailId : <strong>{ele.email}</strong> </p>



          </div>
        )
      })
      }





    </div>
    </>
  )

}
export default App;


