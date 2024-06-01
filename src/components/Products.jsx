/* eslint-disable react/prop-types */
import '../styles/Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons';
import { useCart } from '../hooks/useCart.js'

export function Products ({ products}) {

    const { cart, removeFromCart,  addToCart } = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className='products'>
            <ul>
                {   // Aquí delimita los productos que se ven en la vista, en este caso 10
                    products.slice(0, 10).map(product => {
                        const isProductInCart = checkProductInCart(product)
                        return (
                            <li key={product.id}>
                            <img 
                                src={product.coverImageUrl}
                                alt={product.title} 
                            />
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <div>
                                <button 
                                    style={{ backgroundColor : isProductInCart ? 'darkred' : '#1976D2'}}
                                    onClick={() => {
                                        isProductInCart
                                            ? removeFromCart(product)
                                            : addToCart(product)
                                    }}>        
                                        {
                                            isProductInCart
                                                ? <RemoveFromCartIcon/>
                                                : <AddToCartIcon />
                                        }
                                   
                                </button>
                            </div>
                        </li>
                        )
                    })}
            </ul>
        </main>
    )
}