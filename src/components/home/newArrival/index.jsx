import CardItem from "../../CardItem";
import { useGetProducts } from "@/apis/products";
import Skeleton from "../../CardItem/Skeleton";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { Link } from "react-router-dom";
const NewArrival = () => {
  const queries = {
    sort: "-createdAt",
    limit: 5,
  };
  const { data, isLoading } = useGetProducts({ queries });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 100,
        y: 0,
      }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="mb-12 border-4 bg-red-500  border-red-500 rounded-md text-white flex flex-col lg:grid lg:grid-cols-[0.5fr_2fr]"
    >
      <div className=" p-6 md:p-10">
        <h1 className="text-2xl font-semibold mb-2">
          Week Deals <br />
          Limited, Just Now!
        </h1>
        <h2 className="text-8xl lg:text-9xl mb-6">50%</h2>
        <Link
          to={"/products"}
          className="font-semibold py-2 px-4 text-sm md:text-base md:py-4 md:px-8 rounded-md text-red-500 bg-white "
        >
          See More
        </Link>
      </div>

      <div className="w-full bg-gray-200">
        <Swiper
          spaceBetween={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            465: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },

            1535: {
              slidesPerView: 5,
            },
          }}
          // modules={[FreeMode]}
          className="  rounded-lg gap-[1px] flex flex-col lg:grid lg:grid-cols-5 sm:grid sm:grid-cols-2 bg-gray-200"
          // className="w-full"
        >
          {isLoading
            ? [...Array(5)].map((_, idx) => <Skeleton key={idx} />)
            : data?.pages
                .flatMap((page) => page.products)
                .map((p) => (
                  <SwiperSlide key={p._id}>
                    <CardItem {...p} />
                  </SwiperSlide>
                ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default NewArrival;
