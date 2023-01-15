import { useState } from "react";
import { AsideNav } from "../Components/AsideNav";
import { Navbar } from "../Components/Navbar";
import { ProductList } from "../Components/ProductList";

export function Home() {
  const [toggleSideNav, setToggleSideNav] = useState(false);

  return (
    <>
      <Navbar setToggleSideNav={setToggleSideNav} />
      <AsideNav toggleSideNav={toggleSideNav} />
      <ProductList />
    </>
  );
}
