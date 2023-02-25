import "./App.css";
import elephant from "./images/elephant.jpeg";

const imageData = () => {
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

function App() {
  // code here
  return (
    <div className="main">
      <h1>Kalvium</h1>
      <div className="container">
        {imageData.map((item) => (
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

export default App;
