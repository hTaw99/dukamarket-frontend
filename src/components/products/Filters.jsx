import React from "react";
import { useGetBrands, useGetCategories } from "@/apis/public";
import Menu from "../Menu";

export default React.memo(function FiltersComponent() {
  // const swiper = new Swiper(".swiper", {
  //   // Optional parameters
  //   direction: "vertical",
  //   loop: true,

  //   // If we need pagination
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },

  //   // Navigation arrows
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },

  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },
  // });

  const { data: categories, isLoading: loadCategories } = useGetCategories();
  const { data: brands, isLoading: loadBrands } = useGetBrands();
  if (loadCategories || loadBrands) return <div>Loading ...</div>;
  return (
    <div className="flex gap-2 ">
        <Menu
          name="sort"
          multiple={false}
          options={[
            { _id: "-averageRating", name: "customer rating" },
            { _id: "name", name: "name" },
            { _id: "-createdAt", name: "newest" },
            { _id: "-price", name: "price-high to low" },
            { _id: "price", name: "price-low to high" },
            { _id: "-sold", name: "top-seller" },
          ]}
        />
      <Menu name="category" multiple={true} options={categories} />
      <Menu name="brand" multiple={true} options={brands} />
    </div>
  );
});
