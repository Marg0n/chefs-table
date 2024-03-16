import PropTypes from "prop-types";
import { useState } from "react";

const Cart = ({ item }) => {
//   console.log("from cart", item);

  //   item.map((item) => (console.log(item.recipe_name)))

  const [preparing, setPreparing] = useState([]);

  const handlePreparing = (i) => {

    // cost isExists = item.find
    const newPreparing = [...preparing, i];
    setPreparing(newPreparing);
  };

  return (
    <div className="bg-gray-200 shadow-xl p-8 rounded-2xl">
      <div className="">
        <h3 className="text-xl font-semibold text-center">
          Want to cook: {item.length}
        </h3>
        <div className="divider"></div>
        <table className="table-fixed w-full text-base  text-left border-spacing-y-4 border-separate">
          <thead>
            <tr>
              <th className="w-8"></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>

          <tbody className="">
            {item.map((i, idx) => (
              <tr key={idx} className="">
                <td>{idx + 1}. </td>
                <td>{i.recipe_name}</td>
                <td>
                  {i.preparing_time} <small>minutes</small>
                </td>
                <td>
                  {i.calories} <small>calories</small>
                </td>
                <td>
                  <button
                    onClick={() => handlePreparing(i)}
                    className="btn btn-accent rounded-3xl"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold text-center">
          Currently cooking: 02
        </h3>
        <div className="divider"></div>
        <table className="table-fixed w-full text-base  text-left border-spacing-y-4 border-separate">
          <thead>
            <tr>
              <th className="w-10"></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>

          <tbody className="">
            {preparing.map((p, idx) => (
              <tr key={idx} className="">
                <td>{idx + 1}. </td>
                <td>{p.recipe_name}</td>
                <td>
                  {p.preparing_time} <small>minutes</small>
                </td>
                <td>
                  {p.calories} <small>calories</small>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot className="">
            <tr>
              <td></td>
              <td></td>
              <td>
                Total Time = {preparing.reduce((p, c) => p + c.preparing_time, 0)} minutes
              </td>
              <td>Total Calories = {preparing.reduce((p, c) => p + c.calories, 0)} calories</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

Cart.propTypes = {
  item: PropTypes.array,
};

export default Cart;
