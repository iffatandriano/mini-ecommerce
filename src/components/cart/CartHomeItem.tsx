import React from "react";
import { AiOutlineDelete, AiOutlineShoppingCart } from "react-icons/ai";

function CartHomeItem() {
  return (
    <div className="group block sm:group sm:block mb-10">
      <div className="flex">
        <AiOutlineShoppingCart className="lg:text-2xl sm:text-xl hover:cursor-pointer hover:text-blue-500" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
      </div>
      <div className="absolute hidden text-gray-700 pt-1 right-0 group-hover:block sm:pt-1 sm:w-60 sm:p-4 sm:group-hover:block md:pt-1 md:w-96 md:p-10 md:group-hover:block lg:pt-1 lg:w-96 lg:p-12">
        <div
          className="rounded-t bg-white py-2 px-4 block shadow-3xl w-full"
          style={{
            border: "solid .0625rem #000",
            borderRadius: ".25rem",
            // transition: "all .14s ease-out",
          }}
        >
          <span className="text-md font-bold text-gray-700">Shopping cart</span>
          {/* <p className="text-md font-bold text-gray-700">Your chart is empty</p>
          <p className="text-sm font-normal text-gray-400">
            Time to start shopping!
          </p> */}
          <div className="flex flex-col overflow-y-auto max-h-56 w-full">
            <div className="flex flex-row mt-2 max-w-full">
              <img
                src="https://dummyjson.com/image/i/products/1/thumbnail.jpg"
                alt="img-cart"
                className="object-contain border-2"
                style={{ height: 80, width: 80 }}
              />
              <div className="flex flex-col pl-2 ">
                <span className="text-md font-semibold">Playstation 5</span>
                <div className="flex flex-row justify-between max-w-full">
                  <p className="text-base font-semibold">$1,550</p>
                  <p className="text-md text-gray-400">Qty:10</p>
                </div>
                <span className="flex flex-end justify-end mt-4">
                  <AiOutlineDelete className="text-xl" />
                </span>
              </div>
            </div>
            <div className="flex flex-row mt-2 w-max-full">
              <img
                src="https://dummyjson.com/image/i/products/1/thumbnail.jpg"
                alt="img-cart"
                className="object-contain border-2"
                style={{ height: 80, width: 80 }}
              />
              <div className="flex flex-col pl-2 ">
                <span className="text-md font-semibold">
                  Playstation 5 refurbish
                </span>
                <div className="flex flex-row justify-between max-w-full">
                  <p className="text-base font-semibold">$1,550</p>
                  <p className="text-md text-gray-400">Qty:10</p>
                </div>
                <span className="flex flex-end justify-end mt-4">
                  <AiOutlineDelete className="text-xl" />
                </span>
              </div>
            </div>
            <div className="flex flex-row mt-2 w-max-full">
              <img
                src="https://dummyjson.com/image/i/products/1/thumbnail.jpg"
                alt="img-cart"
                className="object-contain border-2"
                style={{ height: 80, width: 80 }}
              />
              <div className="flex flex-col pl-2 ">
                <span className="text-md font-semibold">
                  Playstation 5 refurbish
                </span>
                <div className="flex flex-row justify-between max-w-full">
                  <p className="text-base font-semibold">$1,550</p>
                  <p className="text-md text-gray-400">Qty:10</p>
                </div>
                <span className="flex flex-end justify-end mt-4">
                  <AiOutlineDelete className="text-xl" />
                </span>
              </div>
            </div>
            <div className="flex flex-row mt-2 w-max-full">
              <img
                src="https://dummyjson.com/image/i/products/1/thumbnail.jpg"
                alt="img-cart"
                className="object-contain border-2"
                style={{ height: 80, width: 80 }}
              />
              <div className="flex flex-col pl-2 ">
                <span className="text-md font-semibold">
                  Playstation 5 refurbish
                </span>
                <div className="flex flex-row justify-between max-w-full">
                  <p className="text-base font-semibold">$1,550</p>
                  <p className="text-md text-gray-400">Qty:10</p>
                </div>
                <span className="flex flex-end justify-end mt-4">
                  <AiOutlineDelete className="text-xl" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-4">
            <span className="text-lg font-semibold">Total</span>
            <p className="text-md font-normal">$2,550</p>
          </div>
          <div className="flex flex-col mt-8">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Checkout
            </button>
            <button
              type="button"
              className="bg-white-500 text-blue-700 font-bold py-2 px-4 rounded border-blue-700 border mt-2"
            >
              View chart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartHomeItem;
