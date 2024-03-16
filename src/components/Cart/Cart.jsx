
import PropTypes from 'prop-types';

const Cart = ({ item }) => {
  console.log('from cart', item);

//   item.map((item) => (console.log(item.recipe_name)))


  return (
    <div className="bg-gray-200 shadow-xl p-8 rounded-2xl">
      <div className="">
        <h3 className="text-xl font-semibold">Want to cook: 01</h3>
        <div className="divider"></div>
        <table className="table-fixed w-full text-base">
          <thead>
            <tr>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>

          <tbody className='list-decimal text-center'>
            {
                item.map((item, idx) => 
                <tr key={idx} className=''>                
                    <td>{item.recipe_name}</td>
                    <td>{item.preparing_time}</td>
                    <td>{item.calories}</td>
                </tr>
                )
            }
          </tbody>
        </table>
      </div>

      <div className=""></div>
    </div>
  );
};


Cart.propTypes = {
    item: PropTypes.array,
  }

export default Cart;
