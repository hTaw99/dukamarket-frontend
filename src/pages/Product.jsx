import { useParams } from "react-router-dom";
import SimilarProducts from "@/components/singleProduct/similarProducts";
import ProductDetail from "@/components/singleProduct/productDetails";
import ProductDescription from "@/components/singleProduct/ProductDescription";
import { useGetSingleProduct } from "@/apis/products";
import Error from "./Error";
import SingleProductSkeleton from "@/components/singleProduct/Skeleton";
import { useSelector } from "react-redux";

const Product = () => {
  const { productId } = useParams();
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useGetSingleProduct(productId);

  if (isError) {
    throw error;
  }


  return (
    <div className="container min-h-screen">
      <div className="grid grid-cols-1 xl:grid-cols-[5fr_2fr] w-full gap-4  mb-8">
        {/* Product */}
        {isLoading ? (
          <SingleProductSkeleton />
        ) : (
          <div className="bg-white p-8 rounded-md">
            <ProductDetail {...product} />
          </div>
        )}
        {/* ---------Similar Products ----------------- */}
        {isLoading ? (
          <div className="bg-white p-8 rounded-md" />
        ) : (
          <div className="bg-white p-8 rounded-md">
            <SimilarProducts productId={product?._id} />
          </div>
        )}
      </div>

      <div className="bg-white p-8 rounded-md">
        <ProductDescription {...product} />
      </div>
    </div>
  );
};

export default Product;
