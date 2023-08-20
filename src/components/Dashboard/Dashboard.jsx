import React from "react";
import "./dashboard.css";
import slide3 from "../../images/slide-3.jpg";
import Header from "../Header/Header";

function Dashboard() {
  return (
    <div>
        <Header/>
        <div className="slider-container-fluid">
            <img src={slide3} alt="" style={{width:'100%'}}/>
        </div>
    </div>
  );
}
export default Dashboard;
