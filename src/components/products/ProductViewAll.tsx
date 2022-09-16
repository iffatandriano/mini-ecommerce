/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import MainLayout from "../mainlayout";

export default function ProductViewAll() {
  return (
    <MainLayout>
      <div className="container w-full">
        <div className="flex flex-row gap-2">
          <div
            className="w-1/4 h-40 bg-white"
            style={{ border: "solid .0450rem #000" }}
          >
            <div className="flex flex-col py-2 px-4">
              <h3 className="text-lg font-bold">Categories</h3>
              <label className="mt-4">
                <input
                  type="checkbox"
                  checked
                  className="checkbox checkbox-xs"
                  id="flexCheckDefault"
                />
                <span className="pl-2 font-semibold text-base">
                  All products
                </span>
              </label>
              <label className="">
                <input
                  type="checkbox"
                  checked={false}
                  className="checkbox checkbox-xs"
                  id="flexCheckDefault"
                />
                <span className="pl-2 font-semibold text-base">
                  smartphones
                </span>
              </label>
              <label className="">
                <input
                  type="checkbox"
                  checked={false}
                  className="checkbox checkbox-xs"
                  id="flexCheckDefault"
                />
                <span className="pl-2 font-semibold text-base">laptops</span>
              </label>
            </div>
          </div>
          <div className="w-3/4">
            <div className="space-y-2 lg:space-y-0 lg:gap-4 lg:grid lg:grid-cols-2">
              <div
                className="w-full flex flex-col bg-white text-black rounded hover:shadow-3xl"
                style={{
                  border: "solid .0625rem #000",
                  borderRadius: ".25rem",
                }}
                //   key={productData.id}
              >
                <img
                  // src={productData.thumbnail}
                  src="https://dummyjson.com/image/i/products/2/thumbnail.jpg"
                  alt="products-thumbnails"
                  className="object-cover w-full h-80"
                />
                <div className="mt-4 p-4">
                  <div
                    className="text-lg font-semibold hover:cursor-pointer"
                    // href="/"
                  >
                    {/* {productData.title} */}
                    Iphones X
                  </div>
                  <p className="text-sm subpixel-antialiasedmt mt-2 underline">
                    {/* {productData.category} */}
                    smartphones
                  </p>
                  <p className="text-lg font-bold antialiased mt-2 italic">
                    $1.350
                    {/* {productData.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} */}
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
                    <p>4.09</p>
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
              <div
                className="w-full flex flex-col bg-white text-black rounded hover:shadow-3xl"
                style={{
                  border: "solid .0625rem #000",
                  borderRadius: ".25rem",
                }}
                //   key={productData.id}
              >
                <img
                  // src={productData.thumbnail}
                  src="https://dummyjson.com/image/i/products/2/thumbnail.jpg"
                  alt="products-thumbnails"
                  className="object-cover w-full h-80"
                />
                <div className="mt-4 p-4">
                  <div
                    className="text-lg font-semibold hover:cursor-pointer"
                    // href="/"
                  >
                    {/* {productData.title} */}
                    Iphones X
                  </div>
                  <p className="text-sm subpixel-antialiasedmt mt-2 underline">
                    {/* {productData.category} */}
                    smartphones
                  </p>
                  <p className="text-lg font-bold antialiased mt-2 italic">
                    $1.350
                    {/* {productData.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} */}
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
                    <p>4.09</p>
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
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
