import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import profile from "./profile.jpg";
import avtar from "./avatar.png";
import Button from "react-bootstrap/Button";
import TempIcon from "./tempratureIcon.png";
import RespIcon from "./respirationIcon.png";
import HeartIcon from "./heartIcon.png";
import BP from "./bp.png";
import Profile from "./Profile";
import ReactDOM from "react-dom";
import reactDom from "react-dom";

function pCard(props) {
  return (
    <div>
      <br />
      <br />
      <br />
      <Card className="Card">
        <div>
          <div className="Card-image-div">
            <img className="Card-image" src={avtar}></img>
          </div>

          <div className="Card-data-div">
            <img className="dataIcon" src={TempIcon} /> Temperature ={" "}
            {props.temp + "C"} <br />
            <img className="dataIcon" src={RespIcon} /> Respiration Rate = null{" "}
            <br />
            <img className="dataIcon" src={HeartIcon} /> Heart Rate = null{" "}
            <br />
            <img className="dataIcon" src={BP} /> Blood Pressure = null
          </div>
        </div>

        <Card.Body>
          <Card.Title> Mashooque Ali PID:0014 </Card.Title>
        </Card.Body>
        <Button name="cardButton" btn="primary" onClick={newWindow}>
          {" "}
          Show Profile{" "}
        </Button>
      </Card>
    </div>
  );
}

export default pCard;

function newWindow() {
  ReactDOM.render(<Profile />, document.getElementById("root"));
}
