import './cart-icon.styles.scss';
import { ReactComponent as  ShoppingIcon} from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.contexts';
import { useContext } from 'react';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartItemCount} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);


    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartItemCount}</span>
        </div>
    )
}

export default CartIcon;