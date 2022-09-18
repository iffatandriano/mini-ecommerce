import React from "react";

export default function Cart() {
  return (
    <div
      className="w-3/5 flex flex-col bg-white p-2 shadow-3xl"
      style={{ border: "solid .0450rem #000", borderRadius: "0.25rem" }}
    >
      <div className="flex flex-col mt-4 w-full">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row py-2 gap-4">
            <img
              src="https://dummyjson.com/image/i/products/2/thumbnail.jpg"
              alt="img-cartlist-1"
              style={{ width: 100, height: 70 }}
            />
            <div className="flex flex-col">
              <span className="text-base font-semibold underline">
                Iphone XS
              </span>
            </div>
          </div>
          <div className="py-2">
            <span className="text-base font-normal">Qty 2</span>
          </div>
          <div className="py-2 px-4 flex flex-col">
            <span className="text-base font-semibold">US $12.99</span>
            <span className="justify-items-end text-end line-through text-sm font-semibold text-gray-400">
              US $12.99
            </span>
            <button
              type="button"
              className="justify-items-end text-end underline mt-8 text-blue-700 hover:text-blue-400"
            >
              Delete
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row py-2 gap-4">
            <img
              src="https://dummyjson.com/image/i/products/2/thumbnail.jpg"
              alt="img-cartlist-1"
              style={{ width: 100, height: 70 }}
            />
            <div className="flex flex-col">
              <span className="text-base font-semibold underline">
                Iphone XS
              </span>
            </div>
          </div>
          <div className="py-2">
            <span className="text-base font-normal">Qty 2</span>
          </div>
          <div className="py-2 px-4 flex flex-col">
            <span className="text-base font-semibold">US $12.99</span>
            <span className="justify-items-end text-end line-through text-sm font-semibold text-gray-400">
              US $12.99
            </span>
            <button
              type="button"
              className="justify-items-end text-end underline mt-8 text-blue-700 hover:text-blue-400"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
