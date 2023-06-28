import React from "react";
import { Link } from "react-router-dom";
import ListItem from "../../ListItem";
import { TbChevronsRight } from "react-icons/tb";
import { useGetSimilarProducts } from "../../../apis/products";
import ListItemSkeleton from "@/components/ListItem/ListItemSkeleton";

const SimilarProducts = ({ productId }) => {
  const { data: similarProducts, isLoading } = useGetSimilarProducts({
    productId,
    limit: 3,
  });
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl text-gray-800 font-semibold ">
          Similar Products
        </h3>
        <div className="flex items-center text-red-500 font-semibold text-sm gap-1">
          <Link to="/products">See all products</Link>
          <TbChevronsRight />
        </div>
      </div>
      <div className="grid grid-rows-[repeat(3,minmax(150px,33%))] gap-4">
        {isLoading
          ? Array.from({ length: 3 }, () => <ListItemSkeleton />)
          : similarProducts?.map((product) => (
              <ListItem key={product._id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
