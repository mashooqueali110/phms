import "./App.css";
// import { useState, useEffect } from "react";
// import Card from "react-bootstrap/Card";
// import PatientCard from "./components/pCard";
// import Profile from "./components/Profile";
import Homepage from "./components/Homepage";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Login from "./components/Login";
import DoctorLogin from "./components/DoctorLogin";

function App() {
  // const [names, setNames] = useState([]);

  // setInterval(async () => {
  //   const json = await fetch(
  //     "https://api.thingspeak.com/channels/1363767/fields/1.json?api_key=6C1EN33MYSAQ4L1U&results=2"
  //   ).then((res) => res.json());

  //   const names = json.feeds.map((item) => item.field1);

  //   setNames(names[0]);

  //   console.log(json.feeds[0].field1);
  // }, 1000);

  return (
    <div className="App">
      <center>
        {/* <PatientCard temp={names}/> */}
        {/* <Homepage /> */}
      </center>
      <DoctorLogin />
    </div>
  );
}

export default App;
