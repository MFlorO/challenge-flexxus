import React from "react";
import { useProductContext } from "~/Hook/productContext";
import { Search, ProductList, Count } from "~/components";
import s from "./Body.module.css";



const Body = () => {
  const [productState, productCopia, setProductCopia] = useProductContext()

  return (
    <div className={s.container}>

      <Search />

      { productCopia !== "" ? <ProductList /> : <h3 className={s.noResultados}>No existe nada con ese nombre. ¡INTENTA NUEVAMENTE!</h3> }

       <Count/>

    </div>
  );
};

export default Body;
