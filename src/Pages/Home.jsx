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
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  function addOne() {
    // console.log(numb);
    setNumb(numb + 1);
  }

  return (
    <div className={` ${darkMode && "dark"}`}>
      <main className="bg-neutral-100 dark:bg-blue-950 ">
        <Navigation />
        <h1 className="text-3xl font-bold underline bg-red-800">Home</h1>
        <div>
          <button className="bg-blue-600 text-white rounded-xl p-4">
            buy me coffee
          </button>
          <p className="text-blue-600 dark:text-neutral-300 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit id
            laudantium tenetur nihil culpa perferendis. Nisi voluptatum
            perferendis saepe tempora deserunt doloribus iusto, officia cum
            magnam, accusantium quidem quae nihil voluptas rerum dolorem nobis
            labore? Delectus rerum omnis, quidem repellendus animi dolorum
            voluptatem quibusdam? Minus vitae veniam perferendis reiciendis
            omnis!
          </p>
        </div>
        <Products className="dark:text-neutral-300 " />
        <MyButton numb={numb} onClick={addOne} />
        <MyButton numb={numb} onClick={addOne} />
        <div className="card dark:text-neutral-300 ">{listEvents}</div>
        <section>
          <p className="dark:text-neutral-300 pt-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rerum
            ducimus fuga quis repellendus perferendis nihil? Aspernatur labore
            expedita blanditiis neque sequi unde ipsum iste excepturi,
            laudantium eius. Vel molestiae atque perferendis sequi ex
            perspiciatis obcaecati inventore nemo expedita necessitatibus non
            dolore in nihil animi magnam laudantium doloremque asperiores
            quibusdam, earum enim sed. Labore commodi, facere nostrum doloremque
            consequatur quam laboriosam perspiciatis. Enim necessitatibus quos
            praesentium nemo obcaecati dicta? Itaque voluptatem blanditiis quod
            repudiandae. Consequatur nemo libero recusandae, commodi natus,
            delectus eius quo nulla expedita aliquid provident porro, deleniti
            laboriosam illum impedit exercitationem corrupti placeat. Quo
            voluptate aperiam consequuntur. Hic.
          </p>
          <p className="dark:text-neutral-300 pt-6">
            Aspernatur velit deleniti facere harum. Laboriosam, ipsam odio. Illo
            ut, nemo distinctio sed, eum doloribus non ea quidem nisi quibusdam
            fugit laudantium. Iste doloribus velit quas consequatur, aut
            quisquam et beatae maxime voluptatum vel, tenetur reprehenderit
            aperiam nobis cumque est ratione impedit! Saepe in ab, laborum
            perspiciatis quidem voluptates aliquid sed laudantium voluptatem
            facilis nobis et est dolor id neque dicta repellat facere quas,
            tempore dolores excepturi commodi sit voluptas? Accusamus nihil rem
            tempore, optio autem voluptatum laborum possimus libero veritatis!
            Iste provident delectus odio in doloremque quos, aperiam reiciendis
            dolore ea aut harum iusto libero autem. Possimus, magni unde.
          </p>
          <p className="dark:text-neutral-300 pt-6">
            Consequuntur temporibus sit vitae blanditiis pariatur vero natus
            nostrum error adipisci rem doloribus unde maxime odio alias harum
            quibusdam, iste cupiditate, dolorem sequi nobis ratione
            necessitatibus obcaecati cum illo? Blanditiis consequatur
            consectetur animi deleniti nostrum porro neque, sed possimus
            reprehenderit quod officiis modi voluptatum inventore magnam laborum
            ipsa fugiat rerum vitae minima, quibusdam eveniet, maxime impedit
            deserunt. Nam tempora, consectetur incidunt corporis repellendus
            aspernatur in adipisci soluta, unde sit accusamus dolores
            perspiciatis et reiciendis perferendis explicabo, voluptatibus animi
            debitis doloremque minus quia dolorem. Qui, nesciunt, cum possimus
            doloremque corrupti adipisci eos aliquam nostrum deleniti nam
            aliquid dolor neque mollitia molestias.
          </p>
        </section>
        <button
          onClick={toggleDarkMode}
          className=" absolute w-16 h-16 bottom-8 right-16 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold"
        >
          {darkMode ? "🌞" : "🌚"}
        </button>
      </main>
    </div>
  );
}

export default Home;
