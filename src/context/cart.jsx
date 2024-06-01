import { createContext, useReducer } from "react"
import { cartReducer, cartInitialState } from "../reducer/cart"

//Crear contexto
export const CartContext = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)  

  const addToCart = product => dispatch({
     type: 'ADD_TO_CART',
     payload: product
  })

  const removeFromCart = product => dispatch ({
     type: 'REMOVE_FROM_CART',
     payload: product
  })

  const decreaseFromCart = product => dispatch ({
    type: 'DECREASE_FROM_CART',
    payload: product
 })
  

 const clearCart = () => dispatch({ type: 'CLEAR_CART' })   

 return { state, addToCart, decreaseFromCart, removeFromCart, clearCart }
 
}

// eslint-disable-next-line react/prop-types
export function CartProvider ({ children}) {
  const  { state, addToCart, decreaseFromCart, removeFromCart, clearCart } = useCartReducer()
  
    return (        
        <CartContext.Provider value={{
              cart: state,
              addToCart,
              decreaseFromCart,
              removeFromCart,
              clearCart
        }}
        >
            {children}
        </CartContext.Provider>       
        
    )
}
