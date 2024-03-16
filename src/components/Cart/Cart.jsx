import PropTypes from "prop-types";

const Cart = ({ item }) => {
  console.log("from cart", item);

  //   item.map((item) => (console.log(item.recipe_name)))

  return (
    <div className="bg-gray-200 shadow-xl p-8 rounded-2xl">
      <div className="">
        <h3 className="text-xl font-semibold text-center">
          Want to cook: {item.length}
        </h3>
        <div className="divider"></div>
        <table className="table-fixed w-full text-base  text-left">
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
            {item.map((item, idx) => (
              <tr key={idx} className="">
                <td>{idx + 1}. </td>
                <td>{item.recipe_name}</td>
                <td>
                  {item.preparing_time} <small>minutes</small>
                </td>
                <td>
                  {item.calories} <small>calories</small>
                </td>
                <td>
                  <button className="btn btn-accent rounded-3xl">
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className=""></div>
    </div>
  );
};

Cart.propTypes = {
  item: PropTypes.array,
};

export default Cart;
