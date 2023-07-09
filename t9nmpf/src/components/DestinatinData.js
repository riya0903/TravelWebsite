import Img1 from "../assets/phuket1.jpg";
import Img2 from "../assets/phuket2.jpg";
import Img3 from "../assets/bangkok1.jpg";
import Img4 from "../assets/bangkok2.jpg";
import { Component } from "react";
import "./DestinationStyles.css";
class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img alt="img" src={this.props.img01} />
          <img alt="img" src={this.props.img02} />
        </div>
      </div>
    );
  }
}
export default DestinationData;
