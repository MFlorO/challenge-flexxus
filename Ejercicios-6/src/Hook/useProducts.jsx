  import { useState, useEffect } from "react"
  
  import data from "~/api/data.json"


  export const useProduct = () =>{


    const [productState, setProductState] = useState()
    const [productCopia, setProductCopia] = useState(null) //Creo una copia de la "data" para trabajar
    
  
    useEffect(() => { 
        setTimeout( () => {
            setProductState(data)
            setProductCopia(data)
        }, 3000)
    }, [])


  
    return [productState,productCopia, setProductCopia];
  }
  
  