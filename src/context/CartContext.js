import { useContext, createContext, useReducer } from "react";
import { cartReducer } from "../reducer/carReducer";

const initialState = { cartList: [], total: 0}

const CartContext = createContext(initialState);

export const CartProvider = ({children}) => {
const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (dog) => {
        const updatedCart = state.cartList.concat(dog);
        updateTotal(updatedCart)
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                dogs: updatedCart
            }
        })
    }

    const remove = (dog) => {
        const updatedCart = state.cartList.filter((t)=> t.id !== dog.id)
        updateTotal(updatedCart)

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                dogs: updatedCart
            }
        })
    }

    const updateTotal = (dogs) => {
        let total = 0;
        dogs.forEach(dog => total = total + dog.price);
        dispatch({
            type: "CART_TOTAL",
            payload: {
                total
            }
        })
    }


    const value = {
        total: state.total,
        cartList: state.cartList,
        addToCart,
        remove
    }
    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);