const ADD = 'cart/ADD';
const REMOVE = 'cart/REMOVE';

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
            return state
    }
}
