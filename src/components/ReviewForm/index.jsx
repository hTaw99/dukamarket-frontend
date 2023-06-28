import { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { useAddReview } from "@/apis/reviews";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ReviewForm = ({ _id }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const { isAuthenticated } = useSelector((state) => state.auth.user);

  const [comment, setComment] = useState("");
  const [title, setTitle] = useState("");
  const [isRecommended, setIsRecommended] = useState(true);
  const [accept, setAccept] = useState(false);
  const [acceptError, setAcceptError] = useState(false);

  

  const { mutate: addReview, error } = useAddReview();

  const submitHandler = (e) => {
    e.preventDefault();

    if (accept) {
      addReview({ rating, comment, title, isRecommended, product: _id });
    } else {
      setAcceptError(true);
    }
  };

  return (
    <>
      {error && (
        <h1 className="text-red-500 mb-4 -mt-2 pt-2 border-t border-neutral-300">
          {error?.response?.data?.msg}
        </h1>
      )}
      <div className={error ? `opacity-50 pointer-events-none` : ""}>
        <div className="flex gap-2 text-gray-400 mb-1">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label key={i}>
                <div
                  onClick={() => setRating(ratingValue)}
                  className={
                    ratingValue <= (rating || hover)
                      ? "cursor-pointer p-2 border border-neutral-300 rounded-md group "
                      : "cursor-pointer p-2 border border-neutral-300 rounded-md"
                  }
                  //   onMouseEnter={() => setHover(ratingValue)}
                  //   onMouseLeave={() => setHover(null)}
                >
                  {ratingValue <= (rating || hover) ? (
                    <AiFillStar className={"text-yellow-500 "} size={24} />
                  ) : (
                    <AiOutlineStar
                      className={"group-hover:text-white"}
                      size={24}
                    />
                  )}
                </div>
                <input
                  type="radio"
                  className="hidden"
                  name="rating"
                  value={ratingValue}
                />
              </label>
            );
          })}
        </div>
        {rating ? (
          <p className="text-sm text-gray-400 mb-6">
            Your rating is {rating} star
          </p>
        ) : (
          <p className="text-sm text-gray-400 mb-6">Click To Rate</p>
        )}
        <form
          action=""
          onSubmit={submitHandler}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col ">
            <label
              className="font-semibold text-gray-700 mb-1"
              htmlFor="review-title"
            >
              Review Title
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              className="border border-neutral-300 p-2 rounded-md outline-none"
              type="text"
              id="review-title"
              placeholder="Example: Easy To Use"
            />
          </div>
          <h3 className="font-semibold text-gray-700">
            Would you Recommend this product to a friend
          </h3>
          <div className="flex gap-6">
            <div className="relative flex gap-2">
              <input
                className="cursor-pointer appearance-none w-5 h-5 accent-red-500 rounded-full border border-neutral-300 checked:bg-red-500 checked:border-0"
                type="radio"
                id="yes"
                value="true"
                name="recommended"
                onChange={(e) => setIsRecommended(/true/.test(e.target.value))}
              />
              <div className="pointer-events-none absolute w-2 h-2 bg-white rounded-full left-[6px] top-[6px]" />
              <label
                className="cursor-pointer  font-semibold text-gray-700"
                htmlFor="yes"
              >
                Yes
              </label>
            </div>
            <div className="relative flex gap-2">
              <input
                className="cursor-pointer appearance-none w-5 h-5 accent-red-500 rounded-full border border-neutral-300 checked:bg-red-500 checked:border-0"
                type="radio"
                id="no"
                value="false"
                name="recommended"
                onChange={(e) => setIsRecommended(/true/.test(e.target.value))}
              />
              <div className="pointer-events-none absolute w-2 h-2 bg-white rounded-full left-[6px] top-[6px]" />
              <label
                className="cursor-pointer  font-semibold text-gray-700"
                htmlFor="no"
              >
                No
              </label>
            </div>
          </div>
          <div className="flex flex-col ">
            <label
              className="font-semibold text-gray-700 mb-1"
              htmlFor="review-comment"
            >
              Product Review
            </label>
            <textarea
              onChange={(e) => setComment(e.target.value)}
              className="border border-neutral-300 p-2 rounded-md outline-none pb-8 flex-wrap"
              type="text"
              id="review-comment"
              name="comment"
              //   value={comment}
              placeholder="Example: Easy To Use"
            />
          </div>

          <div className="flex gap-2 items-center relative">
            <input
              className=" appearance-none  w-5 h-5 checked:bg-red-500 checked:border-red-500 focus:outline-none rounded-md border border-neutral-300 cursor-pointer"
              type="checkbox"
              id="accept"
              value="Accept"
              onChange={(e) => {
                setAcceptError(false);
                setAccept(!accept);
              }}
            />
            <FaCheck
              size={12}
              className="text-white absolute left-[4px] pointer-events-none"
            />
            <label className="font-semibold text-gray-700" htmlFor="accept">
              I accept the
              <span className="underline underline-offset-1">
                terms and condition
              </span>
            </label>
          </div>
          {acceptError && (
            <p className="text-orange-400 text-sm -mt-5">
              Please agree to all the terms and conditions before placing review
            </p>
          )}
          <button
            type="submit"
            className="text-white font-semibold bg-red-500 py-3 rounded-md self-stretch"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ReviewForm;
