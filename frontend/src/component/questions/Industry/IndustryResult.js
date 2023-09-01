import React, { useEffect, useState } from "react";
// import logo from '../';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import logo from '../images/logo.png';

const IndustryResult = ({
  setToggleQuestion,
  setHomeQuestion,
  inArr,
  opArrIndustry,
}) => {


  return (
    <div className="resultDiv">
      <ArrowBackIosIcon onClick={() => setToggleQuestion(4)} />
      {/* <img className="resultLogo" src={logo} alt="React Logo" /> */}
      <div className="resultSubDiv">
        <div className="resultLeft">
          <h2
            style={{
              padding: "5%",
              marginTop: "6%",
              marginLeft: "5%",
              color: "white",
            }}
          >
            Result
          </h2>
          <div
            className="resultInputInfo"
            style={{ marginLeft: "10%", color: "white" }}
          >
            <p className="resultInputEachInfo">
            Total number of floors in the building: {inArr[0]}
            </p>

            <p className="resultInputEachInfo">Building's Parking Gross Floor Area(M) : {inArr[1]}</p>
            <p className="resultInputEachInfo">Building's Gross Floor Area(M) : {inArr[2]}</p>
            <p className="resultInputEachInfo">Building's SiteEUI Consumption(kBtu/sf) : {inArr[3]}</p>
            <p className="resultInputEachInfo">
            Building's SourceEUI Consumption(kBtu/sf) : {inArr[4]}
            </p>
            <p className="resultInputEachInfo">
            Total SteamUsage Consumption(kBtu) : {inArr[5]}
            </p>
            <p className="resultInputEachInfo">
            Total Electricity Consumption(kBtu) : {inArr[6]}
            </p>
            <p className="resultInputEachInfo">
            Total Natural Gas Consumption(kBtu) : {inArr[7]}
            </p>
          </div>
        </div>
        <div className="resultRight">
          <div className="carbonEmissionResult">
            <div style={{marginTop:"59%"}}>
            <p>Your Average Carbon Emission is :</p>
            <h1> {opArrIndustry[0]}K.Tonnes</h1>
            </div>

            <button className="recommendButton" onClick={()=>{setToggleQuestion(6)} }> VIEW RECOMMENDATIONS</button>
          </div>

        </div>
      </div>
      <img className="recLogo" src={logo} onClick={() => setHomeQuestion(3)} /> 
    </div>
  );
};
export default IndustryResult;
