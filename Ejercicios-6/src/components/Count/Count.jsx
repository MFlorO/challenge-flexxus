import React from 'react';
import s from './Count.module.css'
import { useProductContext } from "~/Hook/productContext";


const Count = () => {

	const [, productCopia ] = useProductContext()

	return <div className={s.container}>{ productCopia && productCopia.length} productos</div>;
};

export default Count;
