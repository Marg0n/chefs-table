import { AiOutlineFire } from "react-icons/ai";
import { LuClock2 } from "react-icons/lu";
import PropTypes from 'prop-types';

const Recipes = ({ items, handleItems }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = items;

  return (
    <div className="container mx-auto">
      <div className="card bg-gray-200 shadow-xl min-h-[80vh]">
        <figure className="px-10 pt-10">
          <img
            src={recipe_image}
            alt="Shoes"
            className="rounded-xl h-56 w-80"
          />
        </figure>
        <div className="card-body items-center text-center">

          <h2 className="card-title">{recipe_name}</h2>
          <p>{short_description}</p>

          <div className="divider"></div>
          <div className="w-full text-start ">
            <h3 className="text-lg font-semibold mb-2">
              Ingredients: {ingredients.length}
            </h3>
            <ol className="list-disc pl-4">
              {ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ol>
          </div>
          <div className="divider"></div>

          <div className="w-full flex justify-between mb-4">
            <small className="flex gap-2 items-center">
              <LuClock2 />
              {preparing_time} minutes
            </small>
            <small className="flex gap-2 items-center">
              <AiOutlineFire />
              {calories} calories
            </small>
          </div>

          <div className="card-actions w-full">
            <button
              className="btn bg-accent border-none text-black hover:text-white btn-outline rounded-3xl"
              onClick={() => handleItems(items)}
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


Recipes.propTypes = {
  items: PropTypes.object,
  handleItems: PropTypes.func
}

export default Recipes;
