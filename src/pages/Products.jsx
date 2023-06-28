import { Fragment, useMemo } from "react";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";
import { useGetProducts } from "../apis/products";
import FiltersComponent from "../components/products/Filters";
import SelectedFiltersComponent from "@/components/products/SelectedFilters";
import ProductSkeleton from "@/components/CardItem/Skeleton";
import Error from "./Error";
import { FaSpinner } from "react-icons/fa";

const Products = () => {
  const { filters } = useSelector((state) => state.filter);

  const selectedFilters = useMemo(() => {
    // console.log('useMemo selectedFilters');
    let arr = [];
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        if (Array.isArray(value)) {
          value.forEach((v) => arr.push([key, v.split(",")[1]]));
        } else arr.push([key, value.split(",")[1]]);
      }
    });
    return arr;
  }, [filters]);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  } = useGetProducts({ filters, queries: { limit: 12 } });
  if (error) return <Error />;
  return (
    <div className="2xl:w-[1570px] w-11/12 m-auto min-h-screen bg-white rounded-md p-6">
      <h1 className="mb-12 text-3xl font-semibold">All Products</h1>
      <div className="pb-4 border-b border-gray-300 ">
        <div className="flex items-center justify-between mb-2">
          <FiltersComponent />
          {data && (
            <p className="text-gray-400 ">{data.pages[0].totalCount} Items</p>
          )}
        </div>
        <SelectedFiltersComponent filters={selectedFilters} />
      </div>

      <div className="grid grid-cols-4 mb-8">
        {isLoading
          ? Array.from({ length: 12 }).map((_, idx) => (
              <ProductSkeleton key={idx} />
            ))
          : data.pages.map((group, i) => (
              <Fragment key={i}>
                {group.products.map((p) => (
                  <ProductItem {...p} key={p._id} />
                ))}
              </Fragment>
            ))}
      </div>
      {hasNextPage && (
        <div className="flex justify-center  ">
          <button
            onClick={() => fetchNextPage()}
            className="px-4 py-2 text-white bg-gray-600 rounded-md "
          >
            {isFetchingNextPage ? (
              <FaSpinner className=" animate-spin" />
            ) : (
              "Load More"
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
