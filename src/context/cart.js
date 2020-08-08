// cart context
import React from "react";
import localCart from "../utils/localCart";

//getting cart from local storage
function getCartFromLocalStorage(){
  return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')) :[]
}

const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cart, setCart] = React.useState(getCartFromLocalStorage());
  const [total, setTotal] = React.useState(0);
  const [cartItems, setCartItems] = React.useState(0);

  //useEffect
  React.useEffect(()=>{
      //local storage
      localStorage.setItem('cart',JSON.stringify(cart))
      //accumulator=total & current=cartItem
      let newCartItems = cart.reduce((total,cartItem)=>{
          //console.log({total, cartItem})
          return total +=cartItem.amount
      },0)
      console.log(newCartItems)
      setCartItems(newCartItems)
      //cart totla
      let newTotal = cart.reduce((total,cartItem)=>{
        return total+=(cartItem.amount * cartItem.price)
      },0)
      newTotal =  parseFloat(newTotal.toFixed(2))
      setTotal(newTotal)
  },[cart])
  //remove item
  const removeItem = (id) => {
    setCart([...cart].filter(item =>item.id !==id))
  };
  //increase amount
  const increaseAmount = (id) => {
    const newCart= [...cart].map(item=>{
      return item.id === id ? {...item,amount:item.amount+1} :  {...item}
    })
    setCart(newCart)
  };
  //decrease amount
  const decreaseAmount = (id,amount) => {
    if(amount === 1){
      removeItem(id)
      return;
    }
    else{
      const newCart= [...cart].map(item=>{
        return item.id === id ? {...item,amount:item.amount-1} :  {...item}
      })
      setCart(newCart)
    }
  };
  //add to cart
  const addToCart = (product) => {
    //console.log(product)
    const {id,image:{url},title,price}=product;
    const item = [...cart].find(item=>item.id===id)
    if(item){
      increaseAmount(id)
      return;
    }
    else{
      const newItem ={id,image:url,title,price,amount:1}
      const newCart = [...cart,newItem]
      setCart(newCart)
    }
  };
  //clear cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItems,
        clearCart,
        addToCart,
        increaseAmount,
        decreaseAmount,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
