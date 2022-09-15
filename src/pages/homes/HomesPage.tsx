import React from "react";
import { useQuery } from "react-query";
import { getAllCategories } from "../../utils/services";
import CategoriesContentItem from "../../components/categories/CategoriesContentItem";
import MainLayout from "../../components/mainlayout";
import ProductHomesItem from "../../components/products/ProductHomesItem";
import Loading from "../../components/Loading";

function HomesPage() {
  const { data, isLoading } = useQuery("categories", getAllCategories);

  return (
    <MainLayout>
      {isLoading ? (
        <Loading />
      ) : (
        <CategoriesContentItem categoryData={data?.data} />
      )}
      <ProductHomesItem />
    </MainLayout>
  );
}

export default HomesPage;
