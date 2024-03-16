import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Recipes from "./components/Recipes/Recipes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Recipes />

      <ToastContainer />
    </>
  );
}

export default App;
