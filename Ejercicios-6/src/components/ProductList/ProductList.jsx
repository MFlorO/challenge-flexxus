import React from "react";
import s from "./ProductList.module.css";
import Products from "./Products/Products";
import { useProductContext } from "~/Hook/productContext";


const ProductList = () => {
	const [, productCopia] = useProductContext()

	return(
		<div className={s.container}>
		{ productCopia ? 
			productCopia?.map((p) => (
			  <div key={p.id} >
				<Products p={p} />
			  </div>
			))
			: <h1 className={s.loading}>Cargando...</h1>
		}
	   </div>
	)
};

export default ProductList;
