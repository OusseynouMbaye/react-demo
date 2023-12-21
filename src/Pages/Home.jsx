import MyButton from "../Components/MyButton.jsx";
import Products from "../Components/Products.jsx";
import { useState } from "react";
import "../css/Card.css";
import Navigation from "../Components/Navigation.jsx";

// import './App.css'

const events = [
  {
    id: 1,
    title: "Event 1",
    description: "Lorem ipsum",
    date: "2021-07-01",
    imageUrl: "https://picsum.photos/200",
  },
  {
    id: 2,
    title: "Event 2",
    description: "Lorem ipsum",
    date: "2021-07-02",
    imageUrl: "https://picsum.photos/200",
  },
  {
    id: 3,
    title: "Event 3",
    description: "Lorem ipsum",
    date: "2021-07-03",
    imageUrl: "https://picsum.photos/200",
  },
];

const listEvents = events.map((event) => (
  <div className="add-border" key={event.id}>
    <h3>{event.title}</h3>
    <p>{event.description}</p>
    <img src={event.imageUrl} alt={`photo of ${event.title}`} />
  </div>
));

function Home() {
  const [numb, setNumb] = useState(0);
  function addOne() {
    // console.log(numb);
    setNumb(numb + 1);
  }

  return (
    <div>
      <Navigation />
      <h1>Home</h1>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          quisquam!
        </p>
        <button>ici</button>
      </div>
      <Products />
      <MyButton numb={numb} onClick={addOne} />
      <MyButton numb={numb} onClick={addOne} />

      <div className="card">{listEvents}</div>
    </div>
  );
}

export default Home;
