// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { getTotalCartQuantity } from "./cartSlice";
// function CartOverview() {
//   const totalPizzasCount = useSelector(getTotalCartQuantity);
//   const totalPrice = useSelector((state) =>
//     state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0),
//   );
//   const isCartHasItems = useSelector((state) => state.cart.cart.length);

//   if (!isCartHasItems) return;
//   return (
//     <div className="flex items-center justify-between bg-stone-700 p-4 text-stone-200 uppercase sm:px-6">
//       <p className="space-x-4 text-sm font-semibold text-stone-300 sm:space-x-6 md:text-xl">
//         <span>{totalPizzasCount} pizzas</span>
//         <span>${totalPrice}</span>
//       </p>
//       <Link to="/cart">Open cart &rarr;</Link>
//     </div>
//   );
// }

// export default CartOverview;
// CartOverview.jsx
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const totalPizzasCount = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0),
  );
  const isCartHasItems = useSelector((state) => state.cart.cart.length);

  if (!isCartHasItems) return;

  return (
    <div className="z-50 border-t-4 border-orange-400 bg-gradient-to-r from-stone-800 to-stone-700 shadow-2xl">
      <div className="flex items-center justify-between p-4 text-stone-100 sm:px-6">
        <div className="flex items-center space-x-6">
          {/* Cart Icon with Count */}
          <div className="relative">
            <span className="text-2xl">🛒</span>
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
              {totalPizzasCount}
            </span>
          </div>

          {/* Cart Summary */}
          <div className="space-y-1">
            <p className="text-sm font-semibold text-stone-300 sm:text-base">
              <span className="flex items-center space-x-4">
                <span className="flex items-center space-x-1">
                  <span>🍕</span>
                  <span>
                    {totalPizzasCount} pizza{totalPizzasCount !== 1 ? "s" : ""}
                  </span>
                </span>
                <span className="flex items-center space-x-1">
                  <span>💰</span>
                  <span className="font-bold text-green-400">
                    ${totalPrice.toFixed(2)}
                  </span>
                </span>
              </span>
            </p>
          </div>
        </div>

        {/* Open Cart Button */}
        <Link
          to="/cart"
          className="flex transform items-center space-x-2 rounded-full bg-yellow-500 px-6 py-2 font-semibold text-stone-800 transition-all duration-200 hover:scale-105 hover:bg-yellow-300 hover:shadow-lg"
        >
          <span>Open Cart</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
export default CartOverview;
