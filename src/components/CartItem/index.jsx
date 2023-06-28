import { useRemoveItemFromCart } from "@/apis/cart";
import { formatPrice } from "@/utils/formatPrice";
import { BiTrash } from "react-icons/bi";

const CartItem = ({ amount, product, totalProductPrice, _id }) => {
  const { mutate: removeItemFromCart } = useRemoveItemFromCart();

  return (
    <div className=" p-4 pb-8 border-b border-gray-300 rounded-md flex gap-4">
      <div className="w-[150px] flex items-center border rounded-md">
        <img
          src={product.images[0]}
          alt=""
          className="object-cover p-2 max-w-[90%]"
        />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between  items-start">
          <h1 className="text-gray-800 text-lg font-semibold">
            {product.name}
          </h1>
          <button
            onClick={() => removeItemFromCart(_id)}
            className=" text-gray-600"
          >
            <BiTrash size={24} />
          </button>
        </div>
        <p className="text-gray-500 mb-4">
          Monohydrate <br /> 30 serve <br /> micronized
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className=" hover:bg-gray-300 cursor-pointer border rounded-md flex justify-center items-center aspect-square w-[40px]">
              -
            </div>
            <h3>{amount}</h3>
            <div className=" hover:bg-gray-300 cursor-pointer border rounded-md flex justify-center items-center aspect-square w-[40px]">
              +
            </div>
          </div>
          <span className="text-lg text-gray-800">
            {formatPrice(totalProductPrice)} <span className="ml ">EGP</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
