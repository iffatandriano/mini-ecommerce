/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getAllSidebarCategories } from "../../../utils/services";
import Loading from "../../Loading";

export default function SidebarCategories() {
  const params = useParams();
  const { data, isLoading } = useQuery("categories", getAllSidebarCategories);

  return (
    <div className="flex flex-col py-2 px-4">
      <h3 className="text-lg font-bold">Category</h3>
      {isLoading ? (
        <Loading />
      ) : data?.data?.indexOf(params?.category as never) !== -1 ? (
        data?.data
          ?.filter((category: any) => category !== params?.category)
          .map((categoryData: any, index: number) => (
            <div key={index}>
              <a
                href={`/products/category/${categoryData}`}
                className="text-base font-semibold hover:text-gray-600 hover:underline"
              >
                {categoryData}
              </a>
            </div>
          ))
      ) : (
        data?.data?.map((categoryData: any, index: number) => (
          <div key={index}>
            <a
              href={`/products/category/${categoryData}`}
              className="text-base font-semibold hover:text-gray-600 hover:underline"
            >
              {categoryData}
            </a>
          </div>
        ))
      )}
    </div>
  );
}
