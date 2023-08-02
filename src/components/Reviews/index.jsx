import Comment from "../Comment";
import RatingStars from "@/utils/RatingStars";
import { useGetAllReviews } from "@/apis/reviews";
import ReviewForm from "../ReviewForm";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Reviews = ({ averageRating, numReviews, _id }) => {
  const { data, isLoading } = useGetAllReviews(_id);
  const { isAuthenticated } = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const location = useLocation();
  

  return (
    <div className="grid md:grid-cols-[2fr_4fr]  gap-20 ">
      <div className="flex flex-col">
        <h1 className="md:text-xl text-lg text-gray-700 font-semibold">
          Customer reviews
        </h1>
        <div className="pb-6 mb-6 border-b border-gray-300">
          <div className="flex gap-4 items-start mb-4">
            <div>
              <h1 className="md:text-lg text-neutral-700">
                {averageRating} <span className="">out of 5</span>{" "}
              </h1>
              <h3 className="text-xs md:text-sm text-gray-500">{numReviews} Reviews</h3>
            </div>
            <div className="flex  text-yellow-500 ">
              <RatingStars size={24} averageRating={averageRating} />
            </div>
          </div>

          <div className="flex gap-4 items-center mb-2">
            <h3>5 Star</h3>

            <div className="w-36  h-2 bg-gray-200 rounded-full">
              <div className="w-4/5 h-full bg-yellow-500 rounded-full"></div>
            </div>
            <h3>84%</h3>
          </div>
          <div className="flex gap-4 items-center mb-2">
            <h3>4 Star</h3>

            <div className="w-36  h-2 bg-gray-200 rounded-full">
              <div className="w-1/2 h-full bg-yellow-500 rounded-full"></div>
            </div>
            <h3>84%</h3>
          </div>
          <div className="flex gap-4 items-center mb-2">
            <h3>3 Star</h3>

            <div className="w-36  h-2 bg-gray-200 rounded-full">
              <div className="w-1/3 h-full bg-yellow-500 rounded-full"></div>
            </div>
            <h3>84%</h3>
          </div>
          <div className="flex gap-4 items-center mb-2">
            <h3>2 Star</h3>

            <div className="w-36  h-2 bg-gray-200 rounded-full">
              <div className="w-1/4 h-full bg-yellow-500 rounded-full"></div>
            </div>
            <h3>84%</h3>
          </div>
          <div className="flex gap-4 items-center mb-2">
            <h3>1 Star</h3>

            <div className="w-36  h-2 bg-gray-200 rounded-full">
              <div className=" w-0 h-full bg-yellow-500 rounded-full"></div>
            </div>
            <h3>84%</h3>
          </div>
        </div>
        <div className="flex flex-col gap-1 mb-4 ">
          <h1 className="text-lg md:text-xl text-gray-700 font-semibold">
            Review this product
          </h1>
          <p className="text-sm md:text-base">Share your thoughts with other customers</p>
        </div>
        {isAuthenticated ? (
          <ReviewForm _id={_id} />
        ) : (
          <button
            onClick={() =>
              navigate("/login", {
                state: { from: location, fromReview: true },
              })
            }
            className="text-white bg-red-500 py-3 rounded-md self-stretch"
          >
            Add review
          </button>
        )}
      </div>

      <div className="flex flex-col gap-6">
        {/* {isLoading && <h1>Loading...</h1>} */}
        {data?.reviews.length === 0 ? (
          <div className="flex flex-col h-full gap-4 justify-center items-center">
            <img
              src="images/noReviewsFound.svg"
              className="w-[8%]  "
              alt="No reviews on this product"
            />
            <h1 className="text-gray-800 text-center">
              No reviews on this product
            </h1>
          </div>
        ) : (
          data?.reviews?.map((review) => (
            <Comment {...review} key={review._id} />
          ))
        )}
      </div>
    </div>
  );
};

export default Reviews;
