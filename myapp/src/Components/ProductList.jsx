import React, { useState } from "react";
import { useEffect } from "react";

export function ProductList() {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    fetch("./data/products.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => {
        console.log(resp, "at fetched data");
        return resp.json();
      })
      .then((jsonResponse) => {
        console.log(jsonResponse, "response converted into json");
        setProducts(jsonResponse);
      })
      .catch((err) => {
        console.error("error in fetching data", err);
      });
  };
  useEffect(() => {
    const prod = getProducts();
    console.log(prod);
  }, []);
  return (
    <>
      {products.map((prod) => {
        return <li key={prod.id}>{prod.isAdded} </li>;
      })}
    </>
  );
}
