import './checkout-item.styles.scss';
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.contexts";

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, quantity, price} = cartItem;
    const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext);
    const clearHandler = () => clearItemFromCart(cartItem);
    const addHandler = () => addItemToCart(cartItem);
    const removeHandler = () => removeItemFromCart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
            <span className='quantity'>
                <div className="arrow" onClick={removeHandler}>
                    &#10094;
                </div>
                    <span className='value'> {quantity} </span>
                <div className="arrow" onClick={addHandler}>
                    &#10095;
                </div>
            </span>
            <div className="remove-button" onClick={clearHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;
