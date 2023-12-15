const ADD = 'cart/ADD';
const REMOVE = 'cart/REMOVE';
const INCREMENT = 'cart/increment';
const DECREMENT = 'cart/decrement';

export const addProduce = (id) => ({ type: ADD, id: id });
export const removeProduce = (id) => ({ type: REMOVE, id: id });
export const incrementProduce = (id) => ({ type: INCREMENT, id: id });
export const decrementProduce = (id) => ({ type: DECREMENT, id: id });

export const getAllCartItems = (state) => {
    let produce = state.produce;
    let cartItems = Object.values(state.cart);
    return cartItems.map(item => ({ ...item, ...produce[item.id] }));
};

// Note: this is NOT the num items currently in the cart so that when an
// item is removed, the items in the cart still show up in the order they were added
let numItemsAddedToCart = 1;

export default function cartReducer(state = {}, action) {
    let id = action.id;
    let newState = { ...state };

    switch (action.type) {
        case ADD:
            if (state[id]) newState[id].count++;
            else newState[id] = { id: id, count: 1, order: numItemsAddedToCart++ };
            return newState;

        case REMOVE:
            delete newState[id];
            return newState;

        case INCREMENT:
            newState[id].count++;
            return newState;

        case DECREMENT:
            if (state[id].count === 1) delete newState[id];
            else newState[id].count--;
            return newState;

        default:
            return state;
    }
}
