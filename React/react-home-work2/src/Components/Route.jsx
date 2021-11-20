import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CityInfo } from "./CityInfo";
import { Landmark } from "./MainLandmark";
import { Otherland } from "./Otherlandmarks";
import { Photo } from "./Photo";

export const Rou = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">CityInfo</Link>
            </li>
            <li>
              <Link to="/mainlandmark">Main LandMark</Link>
            </li>
            <li>
              <Link to="/otherlandmarks">Other LandMarks</Link>
            </li>
          </ul>
          <Link to="/photo">Photos of the City</Link>
        </nav>

        <Routes>
          <Route exact path="/" element={<CityInfo />}></Route>
          <Route exact path="/mainlandmark" element={<Landmark />}></Route>
          <Route
            exact
            path="/otherlandmarks/:id" element={<Otherland />}></Route>
          <Route exact path="/photo" element={<Photo />}></Route>
        </Routes>
      </div>
      <hr></hr>
    </Router>
  );
};
