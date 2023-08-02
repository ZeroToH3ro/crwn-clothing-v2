import "./cart-dropdown.styles.scss";
import Button from "../button/button.components";
import CartItem from "../cart-item/cart-item.components";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.contexts";
import {useNavigate} from "react-router-dom";

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();
  const onChangeHandler = () => {
      navigate('/checkout');
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Button onClick={onChangeHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
