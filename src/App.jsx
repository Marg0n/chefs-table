import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/Cart/Cart";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Recipe from "./components/Recipe/Recipe";
import SecondHeader from "./components/SecoundHeader/SecondHeader";

function App() {
  const [items, setItems] = useState([]);

  const [showCartItem, setShowCartItem] = useState([]);

  useEffect(() => {
    fetch("/items.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  const handleItems = (item) => {
    // console.log(item);
    const newCartItem = [...showCartItem, item];
    setShowCartItem(newCartItem);
    console.log(newCartItem);
  };

  return (
    <>
      <Nav />
      <Hero />
      <SecondHeader />
      <div className="container mx-auto my-16 flex lg:flex-row flex-col gap-4 px-4 lg:px-0">
        <div className="lg:w-3/5 w-full grid lg:grid-cols-2 grid-rows-1 gap-x-5 gap-y-5">
          {items.map((item, idx) => (
            <Recipe key={idx} item={item} handleItems={handleItems} />
          ))}
        </div>
        <div className="lg:w-2/5 w-full">
         
          <Cart item={showCartItem} />
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default App;
