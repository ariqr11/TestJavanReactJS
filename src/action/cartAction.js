export const cartAction = (data, task) => {
    console.log('UPDATE CART TERBARU', data)
    if (task == "plus") {
        return {
            type: "ADD_CART",
            payload: data
        }
    } else if (task == "minus") {
        return {
            type: "DEC_CART",
            payload: data
        }
    } else if (task == "delete") {
        return {
            type: "DEL_CART",
            payload: data
        }
    } else {
        return {
            type: "CHK_CART",
            payload: data
        }
    }

}