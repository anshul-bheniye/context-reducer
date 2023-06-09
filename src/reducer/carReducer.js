
    export const cartReducer = (state, action) => {
        const {type, payload} = action;

        switch (type) {
            case "ADD_TO_CART":
                return {...state, cartList: payload.dogs}
            
            case "REMOVE_FROM_CART":
                return {...state, cartList: payload.dogs};

            case "CART_TOTAL":
                return {...state, total:payload.total}
        
            default:
                throw new Error("case not matched");
        }
    }