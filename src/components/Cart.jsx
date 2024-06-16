/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import '../styles/Cart.css';
import { CartIcon,  ClearCartIcon } from './Icons.jsx';
import { useId } from 'react';
import { useCart } from '../hooks/useCart.js';

function CartItem({ id, coverImageUrl, price, title, quantity, addToCart, decreaseFromCart, removeFromCart }) {
    const handleRemoveFromCart = () => {
        removeFromCart({ id });
    };

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
                <button onClick={handleRemoveFromCart}>Eliminar</button>
            </footer>
        </li>
    );
}

export function Cart() {
    const cartCheckboxId = useId();
    const { cart, clearCart, addToCart, decreaseFromCart, removeFromCart } = useCart();
    const [isCartCleared, setIsCartCleared] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        if (isCartCleared) {
            const timer = setTimeout(() => {
                document.getElementById(cartCheckboxId).checked = false;
                setIsCartCleared(false);
                setIsCartOpen(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isCartCleared, cartCheckboxId]);

    const handleDecreaseFromCart = product => {
        decreaseFromCart(product);
    };

    const handleClearCart = () => {
        clearCart();
        setIsCartCleared(true);
    };

    const handleCartButtonClick = () => {
        const checkbox = document.getElementById(cartCheckboxId);
        checkbox.checked = !checkbox.checked;
        setIsCartOpen(checkbox.checked);
    };

    const handleOverlayClick = () => {
        document.getElementById(cartCheckboxId).checked = false;
        setIsCartOpen(false);
    };

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId} onClick={handleCartButtonClick}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <div className={isCartOpen ? 'cart-open' : ''}>
                <div className='overlay' onClick={handleOverlayClick}></div>
                <aside className='cart'>
                    <ul>
                        {cart.map(product => (
                            <CartItem 
                                key={product.id}
                                addToCart={() => addToCart(product)}
                                decreaseFromCart={() => handleDecreaseFromCart(product)}
                                removeFromCart={removeFromCart}
                                {...product}
                            />
                        ))}
                    </ul>

                    <button onClick={handleClearCart}>
                        <ClearCartIcon />
                    </button>
                </aside>
            </div>
        </>
    );
}