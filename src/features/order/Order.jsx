// // Test ID: IIDSAT

// import { useLoaderData, useFetcher } from "react-router-dom";
// import { getOrder } from "../../services/apiRestaurant";
// import {
//   calcMinutesLeft,
//   formatCurrency,
//   formatDate,
// } from "../../utils/helpers";
// import OrderItem from "./OrderItem";
// import { useEffect } from "react";
// import UpdateOrder from "./UpdateOrder";

// function Order() {
//   const order = useLoaderData();
//   const fetcher = useFetcher();

//   useEffect(function () {
//     if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
//   }, []);
//   // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
//   const {
//     id,
//     status,
//     priority,
//     priorityPrice,
//     orderPrice,
//     estimatedDelivery,
//     cart,
//   } = order;
//   const deliveryIn = calcMinutesLeft(estimatedDelivery);

//   return (
//     <div className="space-y-6 px-4 py-6">
//       <div className="flex flex-wrap items-center justify-between gap-2">
//         <h2>Order # {id} status</h2>

//         <div className="space-x-2">
//           {priority && (
//             <span className="rounded-full bg-red-500 p-2 text-sm font-semibold tracking-wider text-white uppercase">
//               Priority
//             </span>
//           )}
//           <span className="rounded-full bg-green-500 p-2 text-sm font-semibold tracking-wider text-white uppercase">
//             {status} order
//           </span>
//         </div>
//       </div>

//       <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 p-6">
//         <p className="text-meduim">
//           {deliveryIn >= 0
//             ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
//             : "Order should have arrived "}
//         </p>
//         <p className="text-xs font-semibold text-stone-700">
//           (Estimated delivery: {formatDate(estimatedDelivery)})
//         </p>
//       </div>
//       <ul className="space-y-2 divide-y-1 divide-stone-400 border-t border-b border-stone-200">
//         {cart.map((item) => (
//           <OrderItem
//             item={item}
//             key={item.id}
//             ingredients={
//               fetcher?.data?.find((el) => el.id === item.pizzaId).ingredients ||
//               []
//             }
//             isLoadingIngredients={fetcher.state === "loading"}
//           />
//         ))}
//       </ul>

//       <div className="space-y-2 bg-stone-300 p-5">
//         <p className="text-sm font-medium text-stone-600">
//           Price pizza: {formatCurrency(orderPrice)}
//         </p>
//         {priority && (
//           <p className="text-sm font-medium text-stone-600">
//             Price priority: {formatCurrency(priorityPrice)}
//           </p>
//         )}
//         <p className="font-bold">
//           To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
//         </p>
//       </div>
//       {!priority && <UpdateOrder order={order} />}
//     </div>
//   );
// }

// export async function loader({ params }) {
//   const order = await getOrder(params.orderId);
//   return order;
// }

// export default Order;
// Test ID: IIDSAT

import { useLoaderData, useFetcher } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";
import { useEffect } from "react";
import UpdateOrder from "./UpdateOrder";

function Order() {
  const order = useLoaderData();
  const fetcher = useFetcher();

  useEffect(function () {
    if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
  }, []);
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-8 px-4 py-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-stone-800">Order #{id} status</h2>

        <div className="flex gap-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white shadow-sm transition-transform hover:scale-105 sm:text-sm">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white shadow-sm transition-transform hover:scale-105 sm:text-sm">
            {status} order
          </span>
        </div>
      </div>

      <div className="rounded-lg bg-stone-100 p-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-stone-700">
            {deliveryIn >= 0
              ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
              : "Order should have arrived"}
          </p>
          <p className="text-xs font-semibold text-stone-500">
            (Estimated delivery: {formatDate(estimatedDelivery)})
          </p>
        </div>
      </div>

      <ul className="divide-y divide-stone-200 rounded-lg border border-stone-200">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            ingredients={
              fetcher?.data?.find((el) => el.id === item.pizzaId)
                ?.ingredients ?? []
            }
            isLoadingIngredients={fetcher.state === "loading"}
          />
        ))}
      </ul>

      <div className="space-y-3 rounded-lg bg-stone-100 p-4 shadow-sm">
        <p className="text-sm text-stone-600">
          <span className="font-medium">Pizza price:</span>{" "}
          {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm text-stone-600">
            <span className="font-medium">Priority fee:</span>{" "}
            {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold text-stone-800">
          <span className="font-medium">To pay:</span>{" "}
          {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>

      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
