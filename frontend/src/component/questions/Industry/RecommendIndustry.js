import React, { useState } from "react";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { FaRecycle } from "react-icons/fa";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../images/logo.png";

const RecommendIndustry = ({
  setToggleQuestion,
  opArrIndustry,
  setHomeQuestion,
  inArr,
}) => {
  const [recommendToggle, setRecommendToggle] = useState(1);

  const progressBar = document.getElementsByClassName("progressDiv")[0];
  // const leftPart = document.getElementsByClassName("recLeft")[0];
  const left11 = document.getElementsByClassName("left1")[0];
  const left12 = document.getElementsByClassName("left1")[1];
  const left2 = document.getElementsByClassName("left2")[0];
  // const left3 = document.getElementsByClassName("left3")[0];
  // const left4 = document.getElementsByClassName("left4")[0];

  const handleClick = () => {
    setRecommendToggle(1);
    progressBar.style.top = "27%";
    left11.style.color = "white";
    left12.style.color = "white";
    left2.style.color = "#ccc";
  };

  const handleClick2 = () => {
    setRecommendToggle(2);
    progressBar.style.top = "59%";
    left11.style.color = "#ccc";
    left12.style.color = "#ccc";
    left2.style.color = "white";
  };
  //////////////Site EUI/////////////////
  if (inArr[3] >= 0 && inArr[3] <= 75) {
    opArrIndustry[1] =
      "Your Site EUI is below the average rate which is contributing minimal amounts of carbon emission. Try maintaining this level and help reduce Carbon Emission!";
  } else if (inArr[3] >= 76 && inArr[3] <= 150) {
    opArrIndustry[1] =
      "Your Site EUI is contributing towards an average amount of carbon emission. Try to maintain your Site EUI levels by making slight changes like: Improving insulation in bulidings, using energy efficient appliances etc.";
  } else {
    opArrIndustry[1] =
      "Your Site EUI is contributing towards high amount of carbon emission. Try to maintain your Site EUI levels by making changes like: Upgrading HVAC (Heating, Ventilation, Air Conditioning) systems, installing energy-efficient windows etc.";
  }
  /////////////Source EUI//////////////////////////////

  if (inArr[4] >= 0 && inArr[4] <= 75) {
    opArrIndustry[2] =
      "Your Source EUI is below the average rate which is contributing minimal amounts of carbon emission. Try maintaining this level and help reduce Carbon Emission!";
  } else if (inArr[4] >= 76 && inArr[4] <= 300) {
    opArrIndustry[2] =
      "Your Source EUI is contributing towards an average amount of carbon emission. Try to maintain your Source EUI levels by making slight changes like: Using renewable energy when possible, installing energy efficient lightings etc.";
  } else {
    opArrIndustry[2] =
      "Your Source EUI is contributing towards high amount of carbon emission. Try to maintain your Source EUI levels by making changes like: implementing builiding automation system, improving building envelope etc.";
  }

  return (
    <div className="recMain">
      <div className="recChild">
        <div className="recLeft" style={{ gap: "30px" }}>
          <div>
            <TipsAndUpdatesIcon className="left1" />
            <h3 onClick={handleClick} className="left1">
              Site EUI
            </h3>
          </div>
          <div className="left2">
            <DirectionsCarIcon />
            <h3 onClick={handleClick2}>Source EUI</h3>
          </div>
        </div>
        <div className="recProgressBar" style={{ height: "60%" }}>
          <div className="progressDiv"></div>
        </div>
        <div className="recRight">
          {recommendToggle === 1 ? (
            <div>
              <h1>Site EUI</h1>
              <div>
                {opArrIndustry[1]} <br />
                {inArr[3] > 75 ? (
                  <div>
                    You can gather more information by visiting:{" "}
                    <a
                      style={{ color: "white" }}
                      href="https://www.fmlink.com/articles/reducing-energy-use-intensity-to-achieve-net-zero-the-role-of-facilities-management/"
                    >
                      https://www.fmlink.com/articles/reducing-energy-use-intensity-to-achieve-net-zero-the-role-of-facilities-management/
                    </a>
                  </div>
                ) : (
                  <> </>
                )}
              </div>
            </div>
          ) : (
            <div>
              <h1>Source EUI</h1>

              <div>
                {opArrIndustry[2]} <br />
                {inArr[4] > 75 ? (
                  <div>
                    You can gather more information by visiting:{" "}
                    <a
                      style={{ color: "white" }}
                      href="https://help.covetool.com/en/articles/4533792-6-ways-to-lower-your-eui"
                    >
                      https://www.fmlink.com/articles/reducing-energy-use-intensity-to-achieve-net-zero-the-role-of-facilities-management/
                    </a>
                  </div>
                ) : (
                  <> </>
                )}
              </div>
            </div>
          )}
        </div>
        <CloseIcon className="closeIcon" onClick={() => setToggleQuestion(5)} />
      </div>

      <img className="recLogo" src={logo} onClick={() => setHomeQuestion(3)} />
    </div>
  );
};

export default RecommendIndustry;
