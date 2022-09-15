/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
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

function ProductHomesDetail() {
  const [quantity, setQuantity] = useState(1);
  const params = useParams();

  const { data, isLoading } = useQuery("productsDetail", () =>
    getProductDetailById(params?.id as string),
  );

  return (
    <MainLayout>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation
        modules={[Pagination, Navigation]}
        style={{ height: 450, border: "solid .0625rem #000" }}
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
                  $
                  {data?.data?.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
                <span
                  className="basis-1/4 text-base font-semibold underline p-4 text-center"
                  style={{ border: "solid .0625rem #000" }}
                >
                  {data?.data?.category}
                </span>
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
