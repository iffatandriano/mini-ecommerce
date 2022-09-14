import React from "react";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { useQuery } from "react-query";
// import data from "../___mocks___/product.json";
import categories from "../___mocks___/categories.json";
import { getProductsHomes } from "../utils/services";
import { Products } from "../utils/types";

function AppPage() {
  const { data } = useQuery("products", getProductsHomes, {
    onSuccess: () => {
      console.log("success");
    },
  });

  return (
    <div className="container mx-auto p-4">
      <span className="font-bold text-xl">Categories</span>
      <div className="space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-10 mt-4">
        {categories?.types.map((categoryData: any) => (
          <p key={categoryData.key}>{categoryData}</p>
        ))}
      </div>
      <div className="flex flex-row justify-between items-center">
        <span className="font-bold text-xl">Products</span>
        <button
          className="rounded text-black bg-white hover:shadow-3xl py-2 px-4"
          type="button"
          style={{
            border: "solid .0625rem #000",
            borderRadius: ".25rem",
            transition: "all .14s ease-out",
          }}
        >
          View All
        </button>
      </div>
      <div className="space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3 mt-4">
        {/* <div className="grid-cols-3 p-20 space-y-2 gap-3"> */}
        {data?.data?.products?.map((productData: Products) => (
          <div
            className="w-full flex flex-col bg-white text-black rounded hover:shadow-3xl"
            style={{
              border: "solid .0625rem #000",
              borderRadius: ".25rem",
            }}
            key={productData.id}
          >
            <img
              src={productData.thumbnail}
              alt="products-thumbnails"
              className="object-cover w-full h-80"
            />
            <div className="mt-4 p-4">
              <span className="text-lg font-semibold">{productData.title}</span>
              <p className="text-sm subpixel-antialiasedmt mt-2 underline">
                {productData.category}
              </p>
              <p className="text-lg font-bold antialiased mt-2 italic">
                $
                {productData.price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
            </div>
            <div
              className="flex flex-row justify-between"
              style={{
                borderTop: "solid .0450rem #000",
              }}
            >
              <div className="p-4 flex flex-row items-center gap-1">
                <AiFillStar />
                <p>{productData.rating}</p>
              </div>
              <button
                className="p-4 antialiased font-semibold text-md hover:cursor-pointer"
                style={{
                  borderLeft: "solid .0450rem #000",
                  backgroundColor: "#FF9587",
                }}
                type="button"
              >
                <div className="flex flex-row items-center gap-2">
                  <AiOutlineShoppingCart className="text-xl" />
                  ADD TO CHART
                </div>
              </button>
            </div>
          </div>
        ))}
        {/* </div> */}
      </div>
      <footer className="flex justify-center mt-4">
        <p className="font-semibold text-base">
          Write code with <span style={{ color: "red" }}>💙</span>
        </p>
      </footer>
    </div>
  );
}

export default AppPage;
