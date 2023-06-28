import React, { useState, useEffect } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { openPictureModel } from "../../../store/features/modelSlice";
import {
  setShownPicture,
  showReview,
} from "../../../store/features/productDetailSlice";
import RatingStars from "@/utils/RatingStars";
import AddToCartButton from "@/utils/AddToCartButton";
import { formatPrice } from "@/utils/formatPrice";

const ProductDetail = ({
  _id,
  category,
  description,
  images,
  name,
  numReviews,
  price,
  colors,
  priceAfterDiscount,
  averageRating,
}) => {
 

  const [amount, setAmount] = useState(1);
  const [colorChoosed, setColorChoosed] = useState(colors[0].name);

  const dispatch = useDispatch();
  const addReviewHandler = () => {
    dispatch(showReview());

    setTimeout(() => {
      window.scroll({
        top: 860,
        behavior: "smooth",
      });
    }, 1);
  };

  const shownPicture = useSelector((state) => state.detail.shownPicture);

  useEffect(() => {
    dispatch(setShownPicture(images[0]));
    setColorChoosed(colors[0].name);
  }, [images[0], colors[0].name]);

  return (
    <>
      <div className="grid grid-cols-2 gap-8">
        {/* --------- IMG ----------- */}
        <div className="flex flex-col gap-4 ">
          <div
            className=" w-full border p-4 border-gray-300 rounded-md overflow-hidden cursor-zoom-in "
            onClick={() => dispatch(openPictureModel())}
          >
            <img
              className="w-[505px] h-[505px] object-contain"
              src={shownPicture}
              alt=""
            />
          </div>
          <div className="flex gap-4">
            {images.map((image) => (
              <div
                key={image}
                className={`border rounded-md cursor-pointer p-2 w-[70px] h-[70px] overflow-hidden ${
                  image === shownPicture ? "border-red-500" : "border-gray-300"
                }`}
                onClick={() => {
                  dispatch(setShownPicture(image));
                }}
              >
                <img
                  className="w-full h-full object-contain"
                  src={image}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        {/* --------- Details ----------- */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold text-blue-700 mb-2">{name}</h1>
          <div className="flex mb-4 items-center gap-4">
            <div className="flex text-yellow-500 ">
              <RatingStars averageRating={averageRating} />
            </div>
            <p className="text-gray-400 text-sm px-4 border-r border-l">
              {numReviews} review
            </p>
            <button
              className="text-gray-400 text-sm capitalize hover:text-red-500"
              onClick={addReviewHandler}
            >
              Add your review
            </button>
          </div>
          <div className="flex items-center gap-2 mb-6 pb-6 border-b border-gray-200">
            <h3 className="text-gray-800 font-semibold text-3xl flex justify-start gap-1">
              <span className="text-base font-medium">EGP</span>{" "}
              {formatPrice(priceAfterDiscount || price)}
            </h3>
            {priceAfterDiscount && (
              <h3 className="text-gray-500 line-through text-xl">
                {formatPrice(price)}
                <span className="">EGP</span>
              </h3>
            )}
          </div>
          <ul className="mb-6 text-gray-500">
            <li>{description}</li>
          </ul>
          <div className=" mb-6 pb-6 border-b border-gray-200 flex flex-col gap-4">
            <div className="flex justify-between gap-4">
              <AddToCartButton
                amount={amount}
                color={colors.find((color) => color.name === colorChoosed)?._id}
                productId={_id}
              />
              <div className="flex items-center gap-4">
                <button
                  onClick={() =>
                    setAmount((perv) => {
                      if (perv > 1) {
                        return perv - 1;
                      } else {
                        return 1;
                      }
                    })
                  }
                  className=" hover:bg-gray-100 cursor-pointer h-full border border-gray-300 rounded-md flex justify-center items-center w-[48px]"
                >
                  -
                </button>
                <h3>{amount}</h3>
                <button
                  onClick={() => setAmount((perv) => perv + 1)}
                  className=" hover:bg-gray-100 cursor-pointer h-full border border-gray-300 rounded-md flex justify-center items-center w-[48px]"
                >
                  +
                </button>
              </div>
            </div>

            {/* colors */}
            <div>
              <h1 className="mb-1">Colors</h1>
              <div className="flex ">
                {colors.map((color) => (
                  <div
                    key={color._id}
                    style={{
                      border:
                        colorChoosed === color.name
                          ? `solid 2px ${color.name}`
                          : "none",
                    }}
                    className={`p-1 rounded-lg `}
                  >
                    <div
                      onClick={() => setColorChoosed(color.name)}
                      style={{
                        backgroundColor: color.name,
                      }}
                      className={`cursor-pointer w-6 h-6 border-red-500 rounded-md`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            {/* colors */}
          </div>

          <div className="grid grid-cols-[1fr_2fr]">
            <p>SKU:</p>
            <p className="text-gray-500">{_id}</p>
            <p>Category:</p>
            <p className="text-gray-500 capitalize">{category.name}</p>
            <p>Tags:</p>
            <p className="text-gray-500">Digital, Headphone</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
