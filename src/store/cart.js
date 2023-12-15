const ADD = 'cart/ADD';
const REMOVE = 'cart/REMOVE';
const INCREMENT = 'cart/increment';
const DECREMENT = 'cart/decrement';

export function addProduce(id) {
    return {
        type: ADD,
        id: id
    }
}

export function removeProduce(id) {
    return {
        type: REMOVE,
        id: id
    }
}

export function incrementProduce(id) {
    return {
        type: INCREMENT,
        id: id
    }
}

export function decrementProduce(id) {
    return {
        type: DECREMENT,
        id: id
    }
}

export default function cartReducer(state = {},
    action) {
    let id = action.id;
    let newState = { ...state };

    switch (action.type) {
        case ADD:
            // if item is already in the cart, increment count
            // else, add item to cart & set count to 1
            if (state[id]) newState[id].count++;
            else newState[id] = {
                id: id,
                count: 1
            };
            return newState;

        case REMOVE:
            delete newState[id];
            return newState;
        default:
            return state;

        // item is already in cart if these buttons are clicked
        case INCREMENT:
            console.log('plus button clicked');
            newState[id].count++;
            return newState;

        case DECREMENT:
            console.log('minus button clicked');
            // if item count is === 1, remove from cart
            // else decrement count
            if (state[id].count === 1) delete newState[id];
            else newState[id].count--;
            return newState;
    }
}
