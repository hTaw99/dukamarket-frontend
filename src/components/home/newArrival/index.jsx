import CardItem from "../../CardItem";
import { useGetProducts } from "@/apis/products";
import Skeleton from "../../CardItem/Skeleton";
import { motion } from "framer-motion";
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
      className="mb-12 border-4 bg-red-500 overflow-hidden border-red-500 rounded-md text-white flex flex-col  lg:grid lg:grid-cols-[1fr_minmax(1130px,_2fr)]"
    >
      <div className=" p-6 md:p-10">
        <h1 className="text-2xl font-semibold mb-2">
          Week Deals <br />
          Limited, Just Now!
        </h1>
        <h2 className="text-8xl lg:text-9xl mb-6">50%</h2>
        <button className="font-semibold py-2 px-4 text-sm md:text-base md:py-4 md:px-8 rounded-md text-red-500 bg-white ">
          See More
        </button>
      </div>

      <div className="overflow-hidden rounded-lg gap-[1px] flex flex-col lg:grid lg:grid-cols-5 sm:grid sm:grid-cols-2 bg-gray-200">
        {isLoading
          ? [...Array(5)].map((_, idx) => <Skeleton key={idx} />)
          : data?.pages
              .flatMap((page) => page.products)
              .map((p) => <CardItem key={p._id} {...p} />)}
      </div>
    </motion.div>
  );
};

export default NewArrival;
