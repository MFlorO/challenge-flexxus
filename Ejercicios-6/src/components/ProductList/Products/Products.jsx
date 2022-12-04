import React from "react";
import s from "./Products.module.css";

const Products = ({ p }) => {
  const { id, code, name, cost, img } = p;

  return (
    <div key={id} className={s.container}>
      <img src={img} />

      <div className={s.textos}>
        <div className={s.textosPrincipales}>
           <h3>{name}</h3>
           <p>CODE{code}</p>
        </div>
        <div>
          <span>{cost}</span>
        </div>
      </div>
    </div>
  );
};

export default Products;
