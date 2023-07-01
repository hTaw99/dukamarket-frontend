import React from "react";
import { Link, NavLink } from "react-router-dom";
import CardItem from "../CardItem";
import CategoryList from "./CategoryList";
import CategoryProduct from "./CategoryProduct";
import { useGetProducts } from "../../apis/products";
import Skeleton from "../CardItem/Skeleton";

const Category = ({ _id, name, images }) => {
  const queries = {
    category: _id,
    limit: 7,
    sort: "-sold",
  };
  const { data, isLoading } = useGetProducts({ queries });

  const topSellerProduct = data?.pages
    .flatMap((page) => page.products)
    .slice(0, 1)[0];

  const restProducts = data?.pages.flatMap((page) => page.products).slice(1);

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-900 capitalize">
          {name}
        </h1>
        <ul className="lg:flex gap-10 hidden select-none pointer-events-none">
          <li className="hover:text-red-500">
            <NavLink>Best Seller </NavLink>
          </li>
          <li className="hover:text-red-500">
            <NavLink>Top Rate </NavLink>
          </li>
          <li className="hover:text-red-500">
            <NavLink>Special Products </NavLink>
          </li>
          <li className="hover:text-red-500">
            <NavLink>Featured Product </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1fr_1fr] rounded-md overflow-hidden">
        <CategoryList images={images} />
        <div className=" grid grid-cols-1 md:grid-cols-3 bg-gray-200 gap-[1px] border-r">
          {isLoading
            ? [...Array(3)].map((_, idx) => <Skeleton key={idx} />)
            : restProducts.map((p) => <CardItem key={p._id} {...p} />)}
        </div>

        {isLoading ? (
          <span>loading</span>
        ) : (
          <CategoryProduct {...topSellerProduct} />
        )}
      </div>
    </div>
  );
};

export default Category;
