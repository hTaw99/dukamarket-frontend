import { setStep } from "@/store/features/checkoutSlice";
import { formatPrice } from "@/utils/formatPrice";
import { useQueryClient } from "@tanstack/react-query";
import { BsTruck, BsCash, BsCheck } from "react-icons/bs";
import { useDispatch } from "react-redux";

const Delivery = () => {
  const dispatch = useDispatch();

  // #########################################
  const queryClient = useQueryClient();
  const cartQuery = queryClient.getQueryData(["get-cart"]);
  // #########################################

  return (
    <>
      <div className="text-gray-700 p-2 rounded-md bg-gray-100">
        <h1 className="font-semibold">Billing and Shipping Address</h1>
      </div>
      <section className="border border-gray-300 rounded-lg ">
        <div className="text-white p-2 rounded-t-lg bg-gray-800">
          <h1 className="font-semibold">Delivery and cash</h1>
        </div>
        <div className=" p-10">
          <div className="flex justify-center items-center gap-8 pb-8 border-b border-gray-300">
            {/* ############## input ########## */}

            <div className=" flex justify-center items-center gap-4 p-4 rounded border border-gray-300">
              <div className="relative flex gap-2 ">
                <input
                  className="cursor-pointer appearance-none w-5 h-5 accent-red-500 rounded-full border border-neutral-300 checked:bg-red-500 checked:border-0"
                  type="radio"
                  id="delivery"
                  value="false"
                  name="shipping"
                />
                <BsCheck
                  size={20}
                  className=" text-white absolute pointer-events-none left-0 top-0"
                />
              </div>
              <label className="cursor-pointer" htmlFor="delivery">
                <div className="flex justify-center items-center gap-4">
                  <BsTruck size={32} />
                  <div>
                    <h3 className="text-gray-800 capitalize font-semibold text-sm">
                      delivery
                    </h3>
                    <p className="text-gray-400 text-xs">
                      Ship order to my address
                    </p>
                  </div>
                </div>
              </label>
            </div>

            {/* ############## input ########## */}

            <div className=" flex justify-center items-center gap-4 p-4 rounded border border-gray-300">
              <div className="relative flex gap-2 ">
                <input
                  className="cursor-pointer appearance-none w-5 h-5 accent-red-500 rounded-full border border-neutral-300 checked:bg-red-500 checked:border-0"
                  type="radio"
                  id="cash"
                  value="false"
                  name="shipping"
                />
                <BsCheck
                  size={20}
                  className=" text-white absolute pointer-events-none left-0 top-0"
                />
              </div>
              <label className="cursor-pointer" htmlFor="cash">
                <div className="flex justify-center items-center gap-4">
                  <BsCash size={32} />
                  <div>
                    <h3 className="text-gray-800 capitalize font-semibold text-sm">
                      Cash
                    </h3>
                    <p className="text-gray-400 text-xs">
                      Pay order when it arrived
                    </p>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div className="py-4 px-10 mb-8">
            {cartQuery?.cart.items.map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-center mb-4 pb-4 border-b border-gray-300 "
              >
                <div className="flex justify-center items-center gap-4">
                  <div className=" w-[60px] p-2 h-[60px] border rounded-md border-gray-300 flex justify-center aspect-square">
                    <img
                      src={item.product.images[0]}
                      alt=""
                      className="mix-blend-multiply w-[80%] aspect-square object-contain"
                    />
                  </div>
                  <div className="text-sm ">
                    <h1 className="line-clamp-1">{`${item.amount} X ${item.product.name}`}</h1>
                    <span className="font-bold">
                      {item.product.priceAfterDiscount
                        ? formatPrice(item.product.priceAfterDiscount)
                        : formatPrice(item.product.price)}{" "}
                      EGP
                    </span>
                  </div>
                </div>
                <span className="font-bold text-sm">
                  {formatPrice(item.totalProductPrice)} EGP
                </span>
              </div>
            ))}

            <div className="text-sm w-1/4 ml-auto">
              <div className="flex justify-between">
                <h1>Item Sub-Total:</h1>
                <span>{formatPrice(cartQuery?.cart.totalPrice)} EGP</span>
              </div>
              <div className="flex justify-between">
                <h1>Shipping: </h1>
                <span>{formatPrice(cartQuery?.cart.shippingFee)} EGP</span>
              </div>
              <div className="flex justify-between">
                <h1>Order Total:</h1>
                <span className="font-bold">
                  {formatPrice(
                    cartQuery?.cart.totalPrice + cartQuery?.cart.shippingFee
                  )}
                  EGP
                </span>
              </div>
            </div>
          </div>

          <div className="justify-between flex items-center">
            <button
              onClick={() => dispatch(setStep(1))}
              className="text-sm font-bold rounded-md bg-gray-200 text-gray-800 p-2 uppercase w-1/4"
            >
              back
            </button>
            <button
              onClick={() => dispatch(setStep(3))}
              className="text-sm font-bold rounded-md bg-red-500 text-white p-2 uppercase w-1/4"
            >
              continue
            </button>
          </div>
        </div>
      </section>
      <div className="text-gray-700 p-2 rounded-md bg-gray-100">
        <h1 className="font-semibold">Review and confirm</h1>
      </div>
    </>
  );
};

export default Delivery;