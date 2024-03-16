import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/Cart/Cart";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Recipes from "./components/Recipes/Recipes";
import SecondHeader from "./components/SecoundHeader/SecondHeader";

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/items.json')
    .then(res => res.json())
    .then(data => setItems(data))
    .catch(err => console.error(err))
  },[])

  const handleItems = (item) => {
    console.log(item);
  };

  return (
    <>
      <Nav />
      <Hero />
      <SecondHeader/>
      <div className="container mx-auto my-16 flex lg:flex-row flex-col gap-4 px-4">
        <div className="lg:w-2/3 w-full grid lg:grid-cols-2 grid-rows-1 gap-x-5 gap-y-5">          
          {
            items.map((items, idx) => (
              <Recipes 
              key = {idx}
              items = {items}
              handleItems = {handleItems}
              />
            ))
          }
          
        </div>
        <div className="lg:w-1/3 w-full">
          <Cart/>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default App;
