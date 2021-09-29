import React from "react";
import "./index.css";
export default function Cards(props) {
  return (
    <>
      {props.userData.map((user, index) => {
        return (
       
            <div className="cardcontainer">
              <img  className="proimg" src={user.avatar} alt=""/>
              <div className="cardtext">
                <h2>
                  {user.first_name}
                  <span id="lname">{user.last_name}</span>
                </h2>
                <p className="id">{user.email}</p>
                <div>
                  <button  className="Resume">
                  <a href="#index.html">
                   Resume
                   </a>
                  </button>
                  
                </div>
            
            </div>
          </div>
        
        );
      })}
    </>
  );
}