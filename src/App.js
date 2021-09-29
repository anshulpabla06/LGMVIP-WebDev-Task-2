import React from "react";
import Cards from "./cards";
import "./App.css";

function Detail() {
  const [isDate, setIsDate] = React.useState(false);
  const [getData, setUserData] = React.useState([]);
  const [isbtnclicked, setisbtnclicked] = React.useState(false);
  const userdata = () => {
    setisbtnclicked(true);
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((res) => {
        setUserData(res.data);
        setInterval(() => { 
          setIsDate(true);
         }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
          <div id="navsection" >
            <h1 id="logo">
              ZIPPY
            </h1>
            <button  className="getbtn" onClick={userdata}>
          Get Users
            </button>
          </div>
          <div className="rowsection"> 
            <div>
              { isbtnclicked ? (     isDate? (
                <div className="wrapper">
                  <Cards userData={getData} />
                  </div>
                ) : (
                  <div className="preloader">
                     <img alt=""src="https://c.tenor.com/5o2p0tH5LFQAAAAi/hug.gif"/>
                  </div>
                )  ) :  (
                <div className="guide">
                  <p>To get the users detail, click on "Get Users" button</p>
                </div>
              )}
            </div>
         
          </div>
    </>
  );
}

export default Detail;