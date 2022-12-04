import { useEffect, useState, createContext, useContext } from "react";
import data from "~/api/data.json"


export const ProductContext = createContext({})

export const ProductProvider = ({ children }) =>{

  const [productState, setProductState] = useState()
  const [productCopia, setProductCopia] = useState(null) //Creo una copia de la "data" para trabajar
  

  useEffect(() => { 
      setTimeout( () => {
          setProductState(data)
          setProductCopia(data)
      }, 3000)
  }, [])

  console.log(productState)

  return <ProductContext.Provider value={[productState,productCopia, setProductCopia]}>{children}</ProductContext.Provider>
}



export const useProductContext = () => {   //Cuando se quiera utilizar el context y esta fuera tira un Error

  const Context = useContext(ProductContext);

  if (Context === undefined){
    throw Error('Esta fuera del contexto')
  }

  return Context;
}
