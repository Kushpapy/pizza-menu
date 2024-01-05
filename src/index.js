import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast Food Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const pizzasNum = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzasNum > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>{" "}
        </>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}
      {/* <Pizza
        ingredients="Tomato, mozarella and spinaci"
        photoName="pizzas/spinaci.jpg"
        name="Pizza Spinaci"
        price={10}
      />

      <Pizza
        ingredients="Tomato, mushrooms"
        photoName="pizzas/funghi.jpg"
        name="Pizza Funghi"
        price= {12}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  // if(pizzaObj.soldOut) return null
  return (
    <li className = {`pizza ${pizzaObj.soldOut ? "sold-out" : "" }`} >
      <img src={pizzaObj.photoName} alt="Spinaci Pizza" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const openHours = 7;
  const closeHours = 22;
  const hour = new Date().getHours();
  const isOpen = hour >= openHours && hour <= closeHours;
  console.log(isOpen);

  // if() alert("we're open!!!"); else alert("we're closed")

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHours={closeHours} openHours={openHours} />
      ) : (
        <p>
          We're happy to have you from {openHours}:00 to {closeHours}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHours, openHours }) {
  return (
    <div className="order">
      <p>
        {" "}
        We're open from {openHours}:00 until {closeHours}:00. Please swing by
        and grab a box of delicious pizza!
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//Before 18
// React.render(<App />)
