import React, { useState } from "react";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { FaRecycle } from "react-icons/fa";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../images/logo.png";

const Recommend = ({ setToggleQuestion, opArr, setHomeQuestion, inArr }) => {
  const [recommendToggle, setRecommendToggle] = useState(1);

  const progressBar = document.getElementsByClassName("progressDiv")[0];
  // const leftPart = document.getElementsByClassName("recLeft")[0];
  const left11 = document.getElementsByClassName("left1")[0];
  const left12 = document.getElementsByClassName("left1")[1];
  const left21 = document.getElementsByClassName("left2")[0];
  const left22 = document.getElementsByClassName("left2")[1];
  const left3 = document.getElementsByClassName("left3")[0];
  const left4 = document.getElementsByClassName("left4")[0];

  const handleClick = () => {
    setRecommendToggle(1);
    progressBar.style.top = "3%";
    left11.style.color = "white";
    left12.style.color = "white";
    left21.style.color = "#ccc";
    left22.style.color = "#ccc";
    left3.style.color = "#ccc";
    left4.style.color = "#ccc";
  };

  const handleClick2 = () => {
    setRecommendToggle(2);
    progressBar.style.top = "28%";
    left11.style.color = "#ccc";
    left12.style.color = "#ccc";
    left21.style.color = "white";
    left22.style.color = "white";
    left3.style.color = "#ccc";
    left4.style.color = "#ccc";
  };

  const handleClick3 = () => {
    setRecommendToggle(3);
    progressBar.style.top = "48%";
    left11.style.color = "#ccc";
    left12.style.color = "#ccc";
    left21.style.color = "#ccc";
    left22.style.color = "#ccc";
    left3.style.color = "white";
    left4.style.color = "#ccc";
  };

  const handleClick4 = () => {
    setRecommendToggle(4);
    progressBar.style.top = "68%";
    left11.style.color = "#ccc";
    left12.style.color = "#ccc";
    left21.style.color = "#ccc";
    left22.style.color = "#ccc";
    left3.style.color = "#ccc";
    left4.style.color = "white";
  };
  console.log(inArr);
  //////////Electricity///////////////////

  if (inArr[0] >= 0 && inArr[0] <= 6600) {
    opArr[1] =
      "Your electricity consumption is below the average rate which is contributing minimal amounts of carbon emission. Try maintaining this level and help reduce Carbon Emission! ";
  } else if (inArr[0] >= 6601 && inArr[0] <= 11880) {
    opArr[1] =
      "Your electricity consumption is contributing towards an average amount of carbon emission. Try to maintain your energy usage by making slight changes in your lifestyle like: Taking shorter showers, Washing dishes by hand etc.";
  } else {
    opArr[1] =
      "Your electricity consumption is contributing towards high amount of carbon emission. Try to maintain your energy usage by making changes in your lifestyle like: Switching to LED Bulbs, Unplugging Electronics when not in use etc.";
  }
  /////////////Car Milage//////////////////////////////

  if (inArr[3] >= 0 && inArr[3] <= 22000) {
    opArr[2] =
      "Your fuel consumption is below the average rate which is contributing minimal amounts of carbon emission. Try maintaining this level and help reduce Carbon Emission!";
  } else if (inArr[3] >= 22001 && inArr[3] <= 50000) {
    opArr[2] =
      "Your fuel consumption is contributing towards an average amount of carbon emission. Try to maintain your fuel consumption by making slight changes in your lifestyle like: Using public transportation or carpool when possible, reducing unnecessary driving etc.";
  } else {
    opArr[2] =
      "Your fuel consumption is contributing towards high amount of carbon emission. Try to maintain your fuel consumption by making changes in your lifestyle like: Switching to EV, keeping your vehicle maintained.";
  }
  //////////////////////////recycle newspaper/////////////////////////////

  if (inArr[6] == "1") {
    opArr[3] =
      "Great Job! You are helping reduce greenhouse gas emissions. Also, did you know that the amount of energy and materials it takes to make a ton of office paper is reduced by 4.3 tons of CO2 when recycling paper. Keep on recycling newspapers and help reduce Carbon Emission!";
  } else {
    opArr[3] =
      "Recycling newspapers help reduce carbon emissions. Recycling one ton of newspaper can save approximately 3.3 cubic yards of landfill space, 17 trees, 7,000 gallons of water, and 4,100 kilowatt-hours of electricity. So, please start recycling Newspapers!";
  }

  /////////////////////////recycle tin//////////////////////////////////////

  if (inArr[7] == "1") {
    opArr[4] =
      "Great Job! Recycling aluminum and tin can significantly reduce carbon emissions and is an important step towards a more sustainable and environmentally friendly future. Keep on recycling aluminum & tin and help reduce Carbon Emission!";
  } else {
    opArr[4] =
      "Recycling aluminum can save up to 95% of the energy required to produce aluminum from raw materials and recycling tin can save up to 60% of the energy required to produce tin from raw materials.So, please start Recycling Aluminum and Tin!";
  }

  return (
    <div className="recMain">
      <div className="recChild">
        <div className="recLeft">
          <div>
            <TipsAndUpdatesIcon className="left1" />
            <h3 className="left1" onClick={handleClick}>
              Electricity
            </h3>
          </div>
          <div>
            <DirectionsCarIcon className="left2" />
            <h3 className="left2" onClick={handleClick2}>
              Car Mileage
            </h3>
          </div>
          <div className="left3">
            <NewspaperIcon />
            <h3 onClick={handleClick3}>Newspapers</h3>
          </div>

          <div className="left4">
            <FaRecycle style={{ fontSize: "1.7rem" }} />
            <h3 onClick={handleClick4}>Aluminium & Tin</h3>
          </div>
        </div>
        <div className="recProgressBar">
          <div className="progressDiv"></div>
        </div>
        <div className="recRight">
          {recommendToggle === 1 ? (
            <div>
              <h1>Electricity Bill</h1>
              <div>
                {opArr[1]} <br />
                {inArr[0] > 6600 ? (
                  <div>
                    You can gather more information by visiting:{" "}
                    <a
                      style={{ color: "white" }}
                      href="https://www.energysage.com/energy-efficiency/101/ways-to-save-energy/"
                    >
                      https://www.energysage.com/energy-efficiency/101/ways-to-save-energy/
                    </a>
                  </div>
                ) : (
                  <> </>
                )}
              </div>
            </div>
          ) : recommendToggle === 2 ? (
            <div>
              <h1>Car Mileage</h1>

              <div>
                {opArr[2]} <br />
                {inArr[3] > 22000 ? (
                  <div>
                    You can gather more information by visiting:{" "}
                    <a
                      style={{ color: "white" }}
                      href="https://www.mobil.com/en/sap/personal-vehicles/car/vehicle-maintenance/reduce-fuel-consumption"
                    >
                      https://www.mobil.com/en/sap/personal-vehicles/car/vehicle-maintenance/reduce-fuel-consumption
                    </a>
                  </div>
                ) : (
                  <> </>
                )}
              </div>
            </div>
          ) : recommendToggle === 3 ? (
            <div>
              <h1>Recycling Newspapers</h1>
              <div>{opArr[3]}</div>
            </div>
          ) : (
            <div>
              <h1>Recycling Aluminium & Tin</h1>
              <div>{opArr[4]}</div>
            </div>
          )}
        </div>
        <CloseIcon className="closeIcon" onClick={() => setToggleQuestion(5)} />
      </div>
      {/* <button onClick={() => setToggleQuestion(5)}> wapas aa ja </button> */}
      <img className="recLogo" src={logo} onClick={() => setHomeQuestion(3)} />
    </div>
  );
};

export default Recommend;
