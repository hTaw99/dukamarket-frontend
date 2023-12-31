import React from "react";
import { Link } from "react-router-dom";
import { FiChevronsRight } from "react-icons/fi";
import { useGetCategories } from "../../../apis/public";
import { setFilters } from "@/store/features/filterSlice";
import { useDispatch } from "react-redux";

const CategoryList = ({ images }) => {
  const dispatch = useDispatch();
  const { data: categories } = useGetCategories();
  return (
    <div className="bg-white flex flex-col border-r">
      <div className="overflow-hidden h-48 flex justify-center  items-center ">
        <img className="object-cover h-full w-full" src={images?.[0]} alt="" />
      </div>
      <div className="p-8">
        <ul className="flex flex-col gap-y-2 pb-6 mb-6 border-b border-gray-200">
          {categories?.map((category, i) => (
            <li
              key={i}
              className="hover:text-red-500 hover:translate-x-2 transition-all"
            >
              <Link
                to={"/products"}
                onClick={() =>
                  dispatch(
                    setFilters({
                      name: "category",
                      value: [`${category._id},${category.name}`],
                    })
                  )
                }
                className="capitalize"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1 text-red-500">
          <Link to={"/products"}>See All Products</Link>
          <FiChevronsRight />
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
