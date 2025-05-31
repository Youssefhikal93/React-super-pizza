// import { Link, useFetcher } from "react-router-dom";
// import LInkButton from "../ui/LInkButton";
// import Button from "../ui/Button";
// import CartItem from "./CartItem";
// import { useDispatch, useSelector } from "react-redux";
// import { clearCart } from "./cartSlice";
// import EmptyCart from "./EmptyCart";
// import { use, useEffect } from "react";
// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

// function Cart() {
//   const userName = useSelector((state) => state.user.userName);
//   const cart = useSelector((state) => state.cart.cart);
//   const dispatch = useDispatch();
//   const fetcher = useFetcher();

//   useEffect(function () {
//     if (fetcher.state === "idle") fetcher.load("/menu");
//   }, []);

//   if (!cart.length) return <EmptyCart />;

//   return (
//     <div className="px-4 py-3">
//       <LInkButton to={"/menu"}>&larr; Back to menu</LInkButton>
//       <h2 className="mt-6 text-2xl font-semibold">Your cart, {userName}</h2>

//       <ul className="mt-4 divide-y divide-stone-200 border-b border-stone-200">
//         {cart.map((item) => (
//           <CartItem key={item.pizzaId} item={item} />
//         ))}
//       </ul>

//       <div className="mt-5 space-x-2">
//         <Button type="primary" to="/order/new">
//           Order pizzas
//         </Button>
//         <Button onClick={() => dispatch(clearCart())} type="secondary">
//           Clear cart
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default Cart;
import { Link, useFetcher } from "react-router-dom";
import LInkButton from "../ui/LInkButton";
import Button from "../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";
import { useEffect } from "react";

function Cart() {
  const userName = useSelector((state) => state.user.userName);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const fetcher = useFetcher();

  useEffect(function () {
    if (fetcher.state === "idle") fetcher.load("/menu");
  }, []);

  if (!cart.length) return <EmptyCart />;

  const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="mx-auto max-w-4xl px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <LInkButton to={"/menu"} className="mb-4">
            <span className="flex items-center space-x-2">
              <span>←</span>
              <span>Back to menu</span>
            </span>
          </LInkButton>

          <div className="mt-4 mb-4 flex items-center space-x-4">
            <div className="text-4xl">🛒</div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Your Cart, {userName}
              </h2>
              <p className="text-sm text-gray-600">
                {totalItems} item{totalItems !== 1 ? "s" : ""} • $
                {totalPrice.toFixed(2)} total
              </p>
            </div>
          </div>
        </div>

        {/* Cart Summary Card */}
        <div className="mx-auto mb-6 w-[dwh] rounded-2xl border border-white/20 bg-white/80 p-6 shadow-xl backdrop-blur-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="flex items-center space-x-2 text-xl font-semibold text-gray-800">
              <span>🍕</span>
              <span>Order Summary</span>
            </h3>
            <div className="text-2xl font-bold text-green-600">
              ${totalPrice.toFixed(2)}
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex">
              <span>Total Items:</span>
              <span className="font-semibold">{totalItems}</span>
            </div>
            <div className="flex">
              <span>Subtotal:</span>
              <span className="font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Cart Items */}
        <div className="mb-6 rounded-2xl border border-white/20 bg-white/60 shadow-lg backdrop-blur-sm">
          <div className="p-6">
            <h3 className="mb-4 flex items-center space-x-2 text-lg font-semibold text-gray-800">
              <span>📝</span>
              <span>Your Items</span>
            </h3>

            <ul className="space-y-4">
              {cart.map((item) => (
                <CartItem key={item.pizzaId} item={item} />
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            type="primary"
            to="/order/new"
            className="flex items-center justify-center space-x-2 px-8 py-4 text-lg"
          >
            <span>🚀</span>
            <span className="text-center">Order Pizzas</span>
          </Button>

          <Button
            onClick={() => dispatch(clearCart())}
            type="secondary"
            className="flex items-center justify-center space-x-2 border-red-200 bg-red-50 px-8 py-4 text-lg text-red-600 hover:bg-red-100"
          >
            <span>🗑️</span>
            <span>Clear Cart</span>
          </Button>
        </div>

        {/* Additional Info */}
      </div>
    </div>
  );
}
export default Cart;
