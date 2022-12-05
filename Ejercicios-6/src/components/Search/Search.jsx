import React, { useState } from "react";
import s from './Search.module.css' 
import {BiSearch} from 'react-icons/bi'
import {RxCross2} from 'react-icons/rx'
import { useProductContext } from "~/Hook/productContext";



const Search = () => {

  const [productState, productCopia, setProductCopia] = useProductContext() 
  

  const [search, setSearch] = useState("")
  const [searchCopia, setSearchCopia] = useState(search) //Me creo un estado copia para mostrar lo que escribo como boton


  const onSearchChange = (event) => setSearch((event.target.value).toUpperCase())

  const onHandleReset = () => {
    setProductCopia(productState)
    setSearchCopia("")
  }

  const filtrar = (search) => {

    const funcion = (e) =>  e.code.toString().toUpperCase().includes(search) || e.name.toString().toUpperCase().includes(search)

    if (productCopia && productCopia.length === productState.length){  //Caso: Busco por primera vez

      const resultados = productCopia?.filter( (e) => funcion(e)) 

      resultados.length > 0 ? setProductCopia(resultados) :  setProductCopia("")  //Busco y NO hay coincidencias --> Esto utilizo para el boton de TRY AGAIN
                                 //Busco y hay concidencias: Muestro la copia con los resultados 

    } else {  //Caso: Busco por segunda vez o más

      const resultados = productState.filter( (e) => funcion(e)) //Filtro el original
      
      resultados.length > 0 ? setProductCopia(resultados) :  setProductCopia("")
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault(); 
	  filtrar(search.trim()); //le paso lo que escribo en el input a la funcion filtrar. Esta va a recorrer el array con los datos de productos y los va a filtrar de acuerdo al dato que escriba en el input
    setSearch("");
    setSearchCopia(search.trim().toUpperCase())
  };


  return (

    <div className={s.container}>

    <form onSubmit={handleSubmit} className={s.form}>
      <input 
        type="text"
        placeholder="Buscar por código o nombre de producto"
        value={search}
        onChange={onSearchChange}
        className={s.input}
        disabled={!productCopia}  //Impide que pueda escribir en el input hasta que se carguen todos los productos
      />

      <button title="Search" type="submit" className={s.boton}><BiSearch /><p>BUSCAR</p></button> 

    </form>

    { (productCopia !== null && productCopia?.length !== 9) ? 
    (<button className={s.tryAgain} onClick={onHandleReset}><RxCross2 /><p>{searchCopia}</p></button>): null
    }

    </div>
  );
};

export default Search;
