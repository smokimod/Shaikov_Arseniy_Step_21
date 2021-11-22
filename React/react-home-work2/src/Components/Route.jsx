import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CityInfo } from "./CityInfo";
import { Landmark } from "./MainLandmark";
// import { Otherland } from "./Otherlandmarks";
// import { Photo } from "./Photo";

export const Rou = () => {
  const data = [
    {
      title: "CityInfo",
      discription: "This is CityInfo",
    },
    {
      title: "MainLandmark",
      discription: "This is MainLandmark",
    },
    {
      title: "Otherlandmarks",
      discription: "This is Otherlandmarks",
    },
    {
      title: "Photo",
      discription: "This is Photo",
    },
  ];
  return (
    <Router>
      <div>
        <nav>
          <div>
            <Link to="/cityinfo">CityInfo</Link>
          </div>
          <div>
            <Link to="/mainlandmark">Main LandMark</Link>
          </div>
          {/* <Link to="/otherlandmarks">Other LandMarks</Link> */}
          {/* <Link to="/photo">Photos of the City</Link> */}
        </nav>
        <Routes>
          <Route exact path="/cityinfo" element={<CityInfo />} />
          <Route exact path="/mainlandmark/:prodID" element={<Landmark />} />

          {/* <Route exact path="/otherlandmarks/:id" element={<Otherland />}></Route>
          <Route exact path="/photo" element={<Photo />}></Route>  */}
        </Routes>
      </div>
    </Router>
  );
};
