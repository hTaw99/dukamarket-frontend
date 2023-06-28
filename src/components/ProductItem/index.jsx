import { AiOutlineHeart } from "react-icons/ai";
import { BiLayer } from "react-icons/bi";
import { Link } from "react-router-dom";
import RatingStars from "@/utils/RatingStars";
import AddToCartButton from "@/utils/AddToCartButton";
import QuickViewButton from "@/utils/QuickViewButton";
import { formatPrice } from "@/utils/formatPrice";
import CompareButton from "@/utils/CompareButton";

const ProductItem = ({
  _id,
  name,
  price,
  images,
  description,
  numReviews,
  colors,
  averageRating,
  priceAfterDiscount,
}) => {
  return (
    <div className="flex group flex-col border-r p-4">
      <div className="relative overflow-hidden flex flex-col mb-2 ">
        {priceAfterDiscount && (
          <div className="absolute z-10 text-sm px-3 text-white rounded-md bg-green-600">
            <p>-{(((price - priceAfterDiscount) / price) * 100).toFixed()}%</p>
          </div>
        )}

        <Link to={`/${_id}`} className=" mx-auto ">
          <img
            className=" cursor-pointer object-contain group-hover:scale-110 transition-all duration-300 w-[230px] h-[230px]"
            src={images[0]}
            alt="product-img"
          />
        </Link>
        {/* onHover Container */}
        <div className="flex flex-col gap-2 absolute top-0 -right-10 group-hover:right-0 transition-all duration-300 text-gray-500">
          <div className="relative group/wishlist">
            <div className="bg-gray-100 rounded-md p-2 hover:bg-red-500 hover:text-white cursor-pointer">
              <AiOutlineHeart size={24} />
            </div>
            <span className="bg-gray-500 text-white absolute top-8 right-[43px] -translate-y-full whitespace-nowrap  invisible opacity-0 px-2 py-1 text-sm rounded-md group-hover:visible group-hover/wishlist:opacity-100 transition pointer-events-none">
              WishList
            </span>
          </div>
          <CompareButton
            title={name}
            image={images[0]}
            price={price}
            id={_id}
            description={description}
            colors={colors}
            priceAfterDiscount={priceAfterDiscount}
            averageRating={averageRating}
            numReviews={numReviews}
          />
        </div>
      </div>
      {/* ---------- Title & Stars ------------ */}
      <div className="flex flex-col gap-2 mb-2">
        {/* ---------- Title ------------ */}
        <h1 className="text-blue-700 font-semibold capitalize line-clamp-2">
          {name}
        </h1>
        {/* ---------- Stars ------------ */}
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-500 ">
            <RatingStars averageRating={averageRating} />
          </div>
          <div className="text-gray-400 text-sm">
            <p>{numReviews} review</p>
          </div>
        </div>
      </div>
      {/* price */}
      <div className="flex items-center gap-2">
        <h3 className="text-neutral-900 font-semibold text-xl mb-4 flex items-start gap-1">
          <span className="text-sm font-light">EGP</span>{" "}
          {formatPrice(priceAfterDiscount ? priceAfterDiscount : price)}
        </h3>
        {priceAfterDiscount ? (
          <h3 className="text-neutral-500  text-lg line-through  mb-4 flex items-start gap-1">
            {/* <span className="text-sm font-light">EGP</span>{" "} */}
            {formatPrice(price)}
          </h3>
        ) : null}
      </div>

      {/* Buttons */}
      <div className="mt-auto flex flex-col gap-2">
        <AddToCartButton color={colors[0]._id} productId={_id} />
        <QuickViewButton
          id={_id}
          title={name}
          price={price}
          image={images[0]}
          description={description}
          numReviews={numReviews}
          colors={colors}
          averageRating={averageRating}
          priceAfterDiscount={priceAfterDiscount}
        />
      </div>
    </div>
  );
};

export default ProductItem;
