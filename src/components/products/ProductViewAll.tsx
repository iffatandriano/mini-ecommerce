import React, { useState, useContext } from "react";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { useQuery } from "react-query";
import { CartContext, CartContextType } from "../../utils/context/CartContext";
import { changePriceToDollarTypes } from "../../utils/helpers";
import { getProductsHomesAll } from "../../utils/services";
import { Products } from "../../utils/types";
import Loading from "../Loading";
import MainLayout from "../mainlayout";
import SidebarCategories from "../mainlayout/Sidebar/SidebarCategories";
import ToastError from "../ToastError";

export default function ProductViewAll() {
  const [hiddenToast, setHiddenToast] = useState(false);
  const { addProductToCarts } = useContext(CartContext) as CartContextType;

  const { data, isLoading } = useQuery("products", getProductsHomesAll, {
    onError: (err) => {
      setHiddenToast(false);
      <ToastError hidden={hiddenToast} message={`${err}`} />;
      setTimeout(() => {
        setHiddenToast(true);
        <ToastError hidden={hiddenToast} message={`${err}`} />;
      }, 5000);
    },
  });

  return (
    <MainLayout>
      <div className="container w-full">
        <div className="flex flex-row gap-2">
          <div
            className="w-1/4 h-full bg-white"
            style={{ border: "solid .0450rem #000" }}
          >
            <SidebarCategories />
          </div>
          <div className="w-3/4">
            {isLoading ? (
              <Loading />
            ) : (
              <div className="space-y-2 lg:space-y-0 lg:gap-4 lg:grid lg:grid-cols-2">
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
                    <div className="mt-4 p-4 flex flex-col">
                      <a
                        className="text-lg font-semibold hover:cursor-pointer"
                        href={`/products/${productData.id}`}
                      >
                        {productData.title}
                      </a>
                      <a
                        href={`/products/category/${productData.category}`}
                        className="text-sm subpixel-antialiasedmt mt-2 underline"
                      >
                        {productData.category}
                      </a>
                      <p className="text-lg font-bold antialiased mt-2 italic">
                        ${changePriceToDollarTypes(productData.price)}
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
                        <p>{productData?.rating}</p>
                      </div>
                      <button
                        className="p-4 antialiased font-semibold text-md hover:cursor-pointer"
                        style={{
                          borderLeft: "solid .0450rem #000",
                          backgroundColor: "#FF9587",
                        }}
                        type="button"
                        onClick={() =>
                          addProductToCarts(
                            productData.id,
                            productData.title,
                            productData.thumbnail,
                            productData.price,
                            productData.discountPercentage,
                            1,
                          )
                        }
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
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
