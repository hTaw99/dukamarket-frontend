import AddToCartButton from "@/utils/AddToCartButton";
import QuickViewButton from "@/utils/QuickViewButton";
import { formatPrice } from "@/utils/formatPrice";
import { Link } from "react-router-dom";

const ListItem = ({ product }) => {
  return (
    <div className="group grid grid-cols-[2fr_4fr]  gap-4 p-4  border border-gray-300 rounded-md">
      <div className="overflow-hidden rounded-md">
        <Link to={`/${product?._id}`}>
          <img
            className="w-full h-full object-contain group-hover:scale-110 transition-all duration-300"
            src={product?.images[0]}
            alt=""
          />
        </Link>
      </div>
      <div className="flex flex-col ">
        <div className="flex justify-between gap-2 ">
          <Link
            to={`/${product?._id}`}
            className="hover:text-red-500 text-gray-700 font-semibold capitalize mb-4 text-base block line-clamp-2"
          >
            {product?.name}
          </Link>
          <p className="hidden lg:inline-block text-green-600 text-xs flex-shrink-0">
            {product.quantity} in stock
          </p>
        </div>

        {/* ----------- price ------------- */}
        <div className="flex items-center mb-2 gap-2">
          <h3 className="text-gray-700 font-semibold text-base flex gap-1">
            {formatPrice(product?.priceAfterDiscount || product?.price)}
            <span className="font-medium">EGP</span>{" "}
          </h3>

          {product.priceAfterDiscount && (
            <h3 className="text-gray-500 line-through flex justify-start gap-1">
              {formatPrice(product?.price)}
              <span className=" text-base">EGP</span>{" "}
            </h3>
          )}
        </div>
        {/* ----------- price ------------- */}

        {/* ----------- buttons ------------- */}
        <div className="hidden  justify-between gap-2 mt-auto">
          <div className="hidden">
            <AddToCartButton
              color={product.colors[0]._id}
              productId={product._id}
            />
          </div>
          <div className="hidden">
            <QuickViewButton
              title={product.name}
              image={product.images[0]}
              price={product.price}
              id={product._id}
              description={product.description}
              colors={product.colors}
              priceAfterDiscount={product.priceAfterDiscount}
              averageRating={product.averageRating}
              numReviews={product.numReviews}
            />
          </div>
        </div>
        {/* ----------- buttons ------------- */}
      </div>
    </div>
  );
};

export default ListItem;
