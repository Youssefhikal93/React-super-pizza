// /* eslint-disable react/prop-types */
// import { useDispatch, useSelector } from "react-redux";
// import { formatCurrency } from "../../utils/helpers";
// import Button from "../ui/Button";
// import { deleteItem } from "./cartSlice";
// import UpdateItemQuantity from "./UpdateItemQuantity";

// function CartItem({ item }) {
//   const { pizzaId, name, quantity, totalPrice } = item;
//   const dispatch = useDispatch();
//   const currentQuantity = useSelector(
//     (state) =>
//       state.cart.cart.find((item) => item.pizzaId === pizzaId).quantity,
//   );
//   return (
//     <li className="py-3 sm:flex sm:items-center sm:justify-between">
//       <p className="mb-1 sm:mb-0">
//         {quantity}&times; {name}
//       </p>
//       <div className="flex items-center justify-between sm:gap-6">
//         <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
//         <UpdateItemQuantity
//           pizzaId={pizzaId}
//           currentQuantity={currentQuantity}
//         />
//         {/* <p>{isLoadingIngredients && ingredients.join(" ,")}</p> */}
//         <Button onClick={() => dispatch(deleteItem(pizzaId))} type="small">
//           Delete
//         </Button>
//         {/* <DeleteItem pizzaId={pizzaId} /> */}
//       </div>
//     </li>
//   );
// }

// export default CartItem;
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import Button from "../ui/Button";
import DeleteItem from "./DeleteItem";
import { deleteItem } from "./cartSlice";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(
    (state) =>
      state.cart.cart.find((item) => item.pizzaId === pizzaId).quantity,
  );

  return (
    <li className="group rounded-lg border border-gray-100 bg-white px-4 py-4 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md sm:px-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        {/* Pizza Info */}
        <div className="mb-3 flex items-center space-x-3 sm:mb-0">
          <div>
            <p className="text-base font-semibold text-gray-800">
              <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-white">
                {quantity}
              </span>
              {name}
            </p>
            <p className="text-sm text-gray-500">
              {formatCurrency(totalPrice / quantity)} each
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between space-x-4 sm:justify-end">
          {/* Total Price */}
          <div className="text-right">
            <p className="text-lg font-bold text-gray-900">
              {formatCurrency(totalPrice)}
            </p>
            <p className="text-xs text-gray-500">Total</p>
          </div>

          {/* Quantity Controls */}
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <UpdateItemQuantity
                pizzaId={pizzaId}
                currentQuantity={currentQuantity}
              />
            </div>

            {/* Delete Button */}
            <Button
              onClick={() => dispatch(deleteItem(pizzaId))}
              type="small"
              className="border-red-200 bg-red-50 text-red-600 transition-colors duration-200 hover:bg-red-100 hover:text-red-700"
            >
              <span className="hidden sm:inline">Delete</span>
              <span className="sm:hidden">Remove 🗑️</span>
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
