
import "react-toastify/dist/ReactToastify.css";

const Recipes = () => {
  return (
    <div className="container mx-auto mt-16">
      <div className="text-center mt-4 space-y-4">
        <h3 className="text-3xl font-semibold">Our Recipes</h3>
        <p>
          Choose the items of your liking. We have more items than you like! Try
          it or order it!
        </p>
      </div>

      <div className="my-16 flex">
        <div className="w-2/3">
          <div className="card w-96 bg-gray-200 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/3">Want to cook: 01</div>
      </div>
    </div>
  );
};

export default Recipes;
