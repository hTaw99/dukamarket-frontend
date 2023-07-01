import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useQueryClient } from "@tanstack/react-query";
import { formatPrice } from "@/utils/formatPrice";

const Cart = () => {
  // #######################################################
  const queryclient = useQueryClient();
  const cartQuery = queryclient.getQueryData(["get-cart"]);
  // #######################################################

  return (
    <div className="container flex flex-col lg:grid lg:grid-cols-[3fr_1fr] gap-4">
      <div className="bg-white rounded-md p-6 ">
        <h1 className="text-2xl capitalize font-semibold text-gray-800 mb-6">
          your cart
        </h1>
        <div className="flex justify-between items-center pb-4 border-b border-gray-300 mb-4">
          <p className="text-gray-400">
            {cartQuery?.cart?.totalItems || 0} items in total
          </p>
          {/* <span>
            Total Price: {formatPrice(cartQuery?.cart?.totalPrice)}{" "}
            <span className="ml font-medium text-sm">EGP</span>
          </span> */}
        </div>
        {!cartQuery?.cart?.totalItems || cartQuery?.cart?.totalItems === 0 ? (
          <div className="flex flex-col mt-8 gap-4 justify-center items-center">
            <img
              src="images/noCartFound.svg"
              className="w-1/12  "
              alt="SVG logo image"
            />
            <h1 className="text-gray-800 text-center">Your cart is empty</h1>
          </div>
        ) : (
          <div className="grid gap-4">
            {cartQuery?.cart?.items.map((product) => (
              <CartItem key={product._id} {...product} />
            ))}
          </div>
        )}
      </div>

      <div className="bg-white rounded-md p-6 flex flex-col justify-between h-max">
        <h1 className="text-2xl capitalize font-semibold text-gray-800 pb-4 border-b mb-4">
          cart summary
        </h1>

        <div className="capitalize flex justify-between items-center mb-2">
          <p>products</p>
          <span>{formatPrice(cartQuery?.cart?.totalPrice || 0)} EGP</span>
        </div>
        <div className="text-sm text-gray-400 pb-4 border-b border-gray-300 mb-4">
          Shipping and taxes calculated at checkout.
        </div>
        <div className="flex text-red-500 justify-between font-semibold items-center capitalize mb-4">
          <p className="text-black">Sub-total inc. VAT</p>
          <span className="font-semibold text-lg">
            {formatPrice(cartQuery?.cart?.totalPrice || 0)} EGP
          </span>
        </div>
        <Link
          to="/checkout"
          className={` text-center capitalize font-medium   ${
            !cartQuery?.cart?.totalItems || cartQuery?.cart?.totalItems === 0
              ? "bg-gray-200 text-gray-400 pointer-events-none"
              : "bg-red-500 text-white"
          } py-3 rounded-md`}
        >
          proceed to checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
