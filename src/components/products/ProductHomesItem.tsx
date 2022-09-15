import React from "react";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { useQuery } from "react-query";
import { getProductsHomes } from "../../utils/services";
import { Products } from "../../utils/types";
import Loading from "../Loading";

export default function ProductHomesItem() {
  const { data, isLoading } = useQuery("products", getProductsHomes);

  return (
    <>
      <div className="flex flex-row justify-between items-center mt-10">
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
      {isLoading ? (
        <Loading />
      ) : (
        <div className="space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3 mt-4">
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
                <a
                  className="text-lg font-semibold hover:cursor-pointer"
                  href={`/products/${productData?.id}`}
                >
                  {productData.title}
                </a>
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
        </div>
      )}
    </>
  );
}
