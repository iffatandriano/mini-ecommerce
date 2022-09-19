/* eslint-disable react/no-array-index-key */
import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { GrAddCircle } from "react-icons/gr";
import { AiOutlineMinusCircle, AiFillStar } from "react-icons/ai";
import { useQuery } from "react-query";
import MainLayout from "../mainlayout";
import "../../index.css";
import { getProductDetailById } from "../../utils/services";
import Loading from "../Loading";
import ToastError from "../ToastError";
import { CartContext, CartContextType } from "../../utils/context/CartContext";
import { changePriceToDollarTypes } from "../../utils/helpers";

function ProductHomesDetail() {
  const [quantity, setQuantity] = useState(1);
  const [hiddenToast, setHiddenToast] = useState(false);
  const params = useParams();
  const { addProductToCarts } = useContext(CartContext) as CartContextType;

  const { data, isLoading } = useQuery(
    "productsDetail",
    () => getProductDetailById(params?.id as string),
    {
      onError: (err) => {
        setHiddenToast(false);
        <ToastError hidden={hiddenToast} message={`${err}`} />;
        setTimeout(() => {
          setHiddenToast(true);
          <ToastError hidden={hiddenToast} message={`${err}`} />;
        }, 5000);
      },
    },
  );

  return (
    <MainLayout>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation
        modules={[Pagination, Navigation]}
        style={{
          height: 450,
          border: "solid .0625rem #000",
        }}
      >
        {isLoading ? (
          <Loading />
        ) : (
          data?.data?.images.map((imgUrl: string, index: number) => (
            <SwiperSlide key={index}>
              <img
                src={`${imgUrl}`}
                alt={`img-${index}`}
                className="object-cover"
                style={{ height: 300, width: 300 }}
              />
            </SwiperSlide>
          ))
        )}
      </Swiper>
      <div className="flex">
        <div
          className="w-4/5 bg-white"
          style={{ border: "solid .0625rem #000" }}
        >
          {isLoading ? (
            <Loading />
          ) : (
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold p-6">{data?.data?.title}</h1>
              <div className="flex flex-row w-full">
                <span
                  className="basis-1/4 text-xl font-semibold p-4 text-center"
                  style={{ border: "solid .0625rem #000" }}
                >
                  ${changePriceToDollarTypes(data?.data?.price as number)}
                </span>
                <a
                  href={`/products/category/${data?.data?.category}`}
                  className="basis-1/4 text-base font-semibold underline p-4 text-center"
                  style={{ border: "solid .0625rem #000" }}
                >
                  {data?.data?.category}
                </a>
                <span
                  className="basis-1/4 text-base font-semibold p-4"
                  style={{ border: "solid .0625rem #000" }}
                >
                  <span className="flex flex-row gap-2">
                    {data?.data?.stock}
                    <p className="text-gray-600">stocks</p>
                  </span>
                </span>
                <span
                  className="basis-1/2 text-base antialiased p-4"
                  style={{ border: "solid .0625rem #000" }}
                >
                  <div className="flex flex-row items-center gap-1">
                    <AiFillStar />
                    <p>{data?.data?.rating}</p>
                  </div>
                </span>
              </div>
              <article className="mt-4 p-4 prose">
                <p className="text-base antialiased font-normal">
                  {data?.data?.description}
                </p>
              </article>
            </div>
          )}
        </div>
        <div
          className="w-1/3 h-52 bg-white"
          style={{ border: "solid .0625rem #000" }}
        >
          <div className="flex flex-col p-6">
            <h1 className="text-lg font-semibold">Quantity</h1>
            <div
              className="w-full h-12 rounded mt-2"
              style={{ border: "solid .0625rem #000" }}
            >
              <div className="flex flex-row justify-between items-center py-2 px-4">
                <p className="text-lg font-semibold">{quantity}</p>
                <div className="flex flex-row items-center">
                  <AiOutlineMinusCircle
                    className="text-xl hover:cursor-pointer"
                    onClick={() =>
                      quantity === 1 ? {} : setQuantity(quantity - 1)
                    }
                  />
                  <GrAddCircle
                    className="text-xl hover:cursor-pointer"
                    onClick={() => setQuantity(quantity + 1)}
                  />
                </div>
              </div>
              <button
                className="py-2 px-4 w-full h-12 mt-4 bg-black hover:bg-pink-700 hover:shadow-3xl rounded antialiased font-semibold text-md hover:cursor-pointer"
                style={{
                  borderLeft: "solid .0450rem #000",
                  transition: "all .14s ease-out",
                  // backgroundColor: "#FF9587",
                }}
                type="button"
                onClick={() =>
                  addProductToCarts(
                    parseFloat(params?.id as string),
                    data?.data?.title as string,
                    data?.data?.thumbnail as string,
                    data?.data?.price as number,
                    data?.data?.discountPercentage as number,
                    quantity,
                  )
                }
              >
                <div className="flex flex-row items-center gap-2 text-white justify-center">
                  Add to chart
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ProductHomesDetail;
