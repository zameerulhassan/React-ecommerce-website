//set up context
import React from 'react'

export const ProductContext = React.createContext();
//this gives us access to 2 things: Provider and Consumer 
//we can even use useContext we may avoid Consumer
export default function ProductProvider({children}) {
    return (
        <ProductContext.Provider value="hello there">
            {children}
        </ProductContext.Provider>
    )
}
