import React, { PropsWithChildren } from "react";
import CartHomeItem from "../cart/CartHomeItem";

function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="container mx-auto p-4">
      <header>
        <div className="flex flex-row justify-between sm:max-w-full items-center mb-10">
          <div />
          <h1 className="lg:text-3xl sm:text-xl font-bold">Mini E-Commerce</h1>
          <CartHomeItem />
        </div>
      </header>
      <main>{children}</main>
      <footer className="flex justify-center mt-4">
        <p className="font-semibold text-base">
          Write code with <span style={{ color: "red" }}>💙</span>
        </p>
      </footer>
    </div>
  );
}

export default MainLayout;
