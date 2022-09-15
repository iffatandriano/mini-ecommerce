/* eslint-disable react/no-array-index-key */
import React from "react";

type CategoriesContentItemProps = {
  categoryData: any;
};

function CategoriesContentItem({ categoryData }: CategoriesContentItemProps) {
  return (
    <>
      <span className="font-bold text-xl">Categories</span>
      <div className="space-y-2 grid gap-2 grid-cols-3 md:grid md:space-y-0 md:gap-2 md:grid-cols-3 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-10 mt-4">
        {categoryData.map((category: any, index: number) => (
          <button
            type="button"
            className="flex rounded-full py-1 px-4 items-center justify-center text-sm hover:shadow-3xl"
            style={{
              border: "solid .0625rem #000",
              transition: "all .14s ease-in-out",
            }}
            key={index}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
}

export default CategoriesContentItem;
