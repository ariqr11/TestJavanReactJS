const INITIAL_STATE = {
    cart: [
        {
            name: "Blue Denim Shirt",
            type: "SHIRT",
            color: "BLUE",
            size: "M",
            image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//85/MTA-14230362/no-brand_no-brand_full01.jpg",
            qty: "1",
            price: 17.9
        },
        {
            name: "Red Hoodie",
            type: "HOODIE",
            color: "RED ",
            size: "M",
            image: "https://m.media-amazon.com/images/I/81R+x4-S7qL._AC_SL1500_.jpg",
            qty: "1",
            price: 35.9
        }
    ]
}


export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":
            const nextAddCart = state.cart
            let index = nextAddCart.findIndex((val) => val.name == action.payload)
            nextAddCart[index].qty = parseInt(nextAddCart[index].qty) + 1
            return {
                ...INITIAL_STATE,
                cart: nextAddCart
            };
        case "DEC_CART":
            const nextDecCart = state.cart
            let indexDec = nextDecCart.findIndex((val) => val.name == action.payload)
            nextDecCart[indexDec].qty = parseInt(nextDecCart[indexDec].qty) - 1
            return {
                ...INITIAL_STATE,
                cart: nextDecCart
            };
        case "DEL_CART":
            const nextDelCart = state.cart.filter((val) => val.name != action.payload)
            return {
                ...INITIAL_STATE,
                cart: nextDelCart
            };
        case "CHK_CART":
            const nextChkCart = []
            return {
                ...INITIAL_STATE,
                cart: nextChkCart
            };
        default:
            return state;
    }

}