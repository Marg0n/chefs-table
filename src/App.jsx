import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/Cart/Cart";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Recipe from "./components/Recipe/Recipe";
import SecondHeader from "./components/SecoundHeader/SecondHeader";

function App() {
  const [items, setItems] = useState([]);

  const [showCartItem, setShowCartItem] = useState([]);
  const [preparing, setPreparing] = useState([]);
  const [cooking, setCooking] = useState([]);

  useEffect(() => {
    fetch("/items.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  const handleItems = (item) => {
    // console.log('from app handle1',item);

    const isExists = showCartItem.find(
      (i) => i.recipe_name == item.recipe_name
    );
    // console.log('is exists app',isExists);
    if (isExists) {
      toast.warning(`${item.recipe_name} Already Preparing!`);
    } else {
      const newCartItem = [...showCartItem, item];
      setShowCartItem(newCartItem);
    }

    // console.log('from app handle2',newCartItem);
  };

  const handlePreparing = (i) => {
    const isExists = preparing.find(
      (preparing) => preparing.recipe_name == i.recipe_name
    );

    // alert(i.recipe_name);

    if (!isExists) {
      const newPreparing = [...preparing, i];
      const newCooking = [...cooking, i];
      setPreparing(newPreparing);
      setCooking(newCooking);
      // toast.success("Preparing!");

      const removeItem = showCartItem.filter(
        (r) => r.recipe_name !== i.recipe_name
        // (r) => console.log(i.recipe_name)
      );
      console.log("remove b4", removeItem);
      setShowCartItem(removeItem);
      // toast.success("deleted!");
      toast.success("Preparing! Have a good meal!");
      console.log("remove", removeItem);

    } 
    else {
      return toast.warning("Already Cooking!");
    }
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
          <Cart
            item={showCartItem}
            handlePreparing={handlePreparing}
            cooking={cooking}
          />
        </div>
      </div>

      <ToastContainer stacked />
    </>
  );
}

export default App;
