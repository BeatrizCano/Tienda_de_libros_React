/* eslint-disable react/prop-types */
import '../styles/Cart.css'
import { CartIcon,  ClearCartIcon } from './Icons.jsx'
import { useId } from 'react'
import { useCart } from '../hooks/useCart.js'

function CartItem ({ coverImageUrl, price, title, quantity, addToCart, decreaseFromCart }) {
    return (
        <li>
            <img 
                src={coverImageUrl}
                alt={title}
            />
            <div>
                <strong>{title}</strong> - ${price}
            </div>
            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
                <button onClick={decreaseFromCart}>-</button>
            </footer>
        </li>
    )
}


export function Cart () {

    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart, decreaseFromCart } = useCart()

 return (
    <>
        <label className='cart-button' htmlFor={cartCheckboxId}>
            <CartIcon />
        </label>
        <input  id={cartCheckboxId} type='checkbox' hidden />

        <aside className='cart'>
            <ul>
              { 
              cart.map(product => (
                <CartItem 
                    key={product.id}
                    addToCart={() => addToCart(product)}
                    decreaseFromCart={() => decreaseFromCart(product)}
                    { ...product}
                />
              ))
              
              }
            </ul>

            <button onClick={clearCart}>
                <ClearCartIcon />
            </button>
        </aside>
    </>
 )
    
}
