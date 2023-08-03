import {useState, createContext, useEffect} from "react";

export const addCartItem = (cartItems, product) => {
    //find if cartItems contain product
    const existingCartItem = cartItems.find((item) => item.id === product.id);
    //if found increment product
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === product.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        );
    }
    //return new array with modified card items / new card items;
    return [...cartItems, {...product, quantity: 1}];
};

export const removeCartItem = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find((item) => item.id === itemToRemove.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
    }

    return cartItems.map((cartItem) => cartItem.id === itemToRemove.id ?
        {...cartItem, quantity: cartItem.quantity - 1}
        :
        cartItem);
};

export const clearCartItem = (cartItems, itemToRemove) => {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {
    },
    cartItems: [],
    addItemToCart: () => {
    },
    removeItemFromCart: () => {
    },
    clearItemFromCart: () => {
    },
    cartItemCount: 0,
    cartItemTotal: 0
});


export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemCount, setCartCount] = useState(0);
    const [cartItemTotal, setCartTotal] = useState(0);


    //set count
    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);

    }, [cartItems]);

    //set total
    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity*cartItem.price, 0);
        setCartTotal(newCartTotal);

        }
    , [cartItems]);

    const addItemToCart = (product) => setCartItems(addCartItem(cartItems, product));
    const removeItemFromCart = (itemToRemove) => setCartItems(removeCartItem(cartItems, itemToRemove));
    const clearItemFromCart = (itemToRemove) => setCartItems(clearCartItem(cartItems, itemToRemove));
    const value = {isCartOpen, setIsCartOpen, cartItems, cartItemCount, cartItemTotal ,addItemToCart, removeItemFromCart, clearItemFromCart};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
