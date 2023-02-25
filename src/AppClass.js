import { Component } from "react";
import "./App.css";
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component {
  imageData = () => {
    let data = [
      {
        id: 1,
        img: elephant,
      },
      {
        id: 2,
        img: elephant,
      },
      {
        id: 3,
        img: elephant,
      },
      {
        id: 4,
        img: elephant,
      },
    ];
    return data;
  };

  render() {
    const data = this.imageData();
    return (
      <div className="main">
        <h2>Kalvium Gallery</h2>
        <div className="container">
          {data.map((item) => (
            <img
              key={item.id}
              src={item.img}
              alt={`Elephant ${item.id}`}
              className="image"
            />
          ))}
        </div>
      </div>
    );
  }
}
