import PropTypes from "prop-types";
import { AiOutlineFire } from "react-icons/ai";
import { LuClock2 } from "react-icons/lu";

const Recipes = ({ item, handleItems }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = item;

  return (
    <div className="container mx-auto">
      <div className="card bg-gray-200 shadow-xl min-h-[80vh]">
        <figure className="px-4 pt-8">
          <img
            src={recipe_image}
            alt="Shoes"
            className="rounded-xl h-56 w-80"
          />
        </figure>
        <div className="card-body items-center text-center">
          <div className="h-16">
            <h2 className="text-xl font-semibold text-center">{recipe_name}</h2>
            <p className="text-base">{short_description}</p>
          </div>
          <div className="divider"></div>
          <div className="w-full text-start h-36">
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

          <div className="w-full flex justify-between">
            <small className="flex gap-2 items-center">
              <LuClock2 />
              {preparing_time} minutes
            </small>
            <small className="flex gap-2 items-center">
              <AiOutlineFire />
              {calories} calories
            </small>
          </div>

          <div className="card-actions w-full mt-4">
            <button
              className="btn btn-accent border-none text-black   rounded-3xl"
              onClick={() => handleItems(item)}
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
  item: PropTypes.object,
  handleItems: PropTypes.func,
};

export default Recipes;
