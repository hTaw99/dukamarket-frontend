import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

export default function RatingStars({ averageRating, size = 20 }) {
  const rating = Array.from({ length: 5 }, (elem, i) => {
    const halfNumber = i + 0.5; // [0.5, 1.5 , 2.5, 3.5 , 4.5]
    return (
      <span key={i}>
        {averageRating >= i + 1 ? (
        <IoMdStar size={size} />
        ) : averageRating >= halfNumber ? (
        <IoMdStarHalf size={size} />
        ) : (
        <IoMdStarOutline size={size} />
        )}
      </span>
    );
  });
  return rating;
}
