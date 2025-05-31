import { useState } from "react";
import {
  Form,
  redirect,
  useActionData,
  useFetcher,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";
import { clearCart, getTotalCartPrice } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { fetchAddress } from "../user/userSlice";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const dispatch = useDispatch();
  const {
    userName,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === "loading";
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formError = useActionData();
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priortyPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priortyPrice;
  if (!cart.length) return <EmptyCart />;
  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Lets go!</h2>

      <Form method="POST" action="/order/new">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="w-50">First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="input"
            defaultValue={userName}
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input" />
            {formError?.phone && (
              <p className="text-xsm mt-2 rounded-md bg-red-100 text-center text-red-700">
                {formError.phone}
              </p>
            )}
          </div>
        </div>

        {/* <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="relative grow">
            <input
              type="text"
              name="address"
              required
              className="input"
              disabled={isLoadingAddress}
              defaultValue={address}
            />
            {addressStatus === "error" && (
              <p className="text-xsm mt-2 rounded-md bg-red-100 text-center text-red-700">
                {errorAddress}
              </p>
            )}

            {!position.latitude && !position.langtitude && (
              <button
                className="absolute top-0 right-0 z-50 h-full rounded-r-full bg-yellow-500 px-4 text-xs font-bold hover:cursor-pointer hover:bg-yellow-300"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
                disabled={isLoadingAddress}
              >
                {isLoadingAddress ? "Loading..." : "Get position"}
              </button>
            )}
          </div>
        </div> */}
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-start">
          {/* Changed to items-start to allow vertical expansion */}
          <label className="sm:basis-40">Address</label>
          <div className="grow space-y-2">
            {/* Added space-y-2 for gap between input and error */}
            <div className="relative">
              <input
                type="text"
                name="address"
                required
                className="input w-full"
                disabled={isLoadingAddress}
                defaultValue={address}
              />
              {!position.latitude && !position.longitude && (
                <button
                  className="absolute top-0 right-0 h-full rounded-r-full bg-yellow-500 px-4 text-xs font-bold hover:bg-yellow-300"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(fetchAddress());
                  }}
                  disabled={isLoadingAddress}
                >
                  {isLoadingAddress ? "Loading..." : "Get position"}
                </button>
              )}
            </div>
            {addressStatus === "error" && (
              <p className="text-xs text-red-600">{errorAddress}</p>
            )}
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
            className="ocus:ring h-6 w-6 accent-yellow-400 focus:ring-amber-400 focus:ring-offset-2 focus:outline-none"
          />
          <label className="font-medium" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.longitude && position.latitude
                ? `${position.latitude}, ${position.longtitude}`
                : ""
            }
          />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting
              ? "Placing Your order.."
              : `Order now for ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true" ? true : false,
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "Please provide your correct phone number!";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
