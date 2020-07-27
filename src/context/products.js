//set up context
import React from 'react'
//axios
import axios from 'axios'
//URL
import url from '../utils/URL'
import {featuredProducts} from '../utils/helpers'
export const ProductContext = React.createContext();
//this gives us access to 2 things: Provider and Consumer 
//we can even use useContext we may avoid Consumer


//useEffect() data-fetching/windows event listener
//runs after every render
//get callback function as first parameter
//returns a cleanup function. can't be async
//second args an array of values (dependencies)
export default function ProductProvider({children}) {
    //console.log(React.useState(false))
    const [loading, setLoading]= React.useState(false)
    const [products, setProducts]= React.useState([])
    const [featured, setFeatured]= React.useState([])

    //useEffect
    React.useEffect(()=>{
        //turning loading to true
        setLoading(true)
        //data-fetching
        axios.get(`${url}/products`).then(response =>{
            const featured=featuredProducts(response.data)
            setProducts(response.data);
            setFeatured(featured);
            setLoading(false);
        })
        return ()=>{

        }
    },[]);
    return (
        <ProductContext.Provider value={{products,loading,featured}}>
            {children}
        </ProductContext.Provider>
    )
}
