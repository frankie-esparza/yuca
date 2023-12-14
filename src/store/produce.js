import produceData from '../mockData/produce.json'

const POPULATE = 'produce/POPULATE';

export function populateProduce() {
    console.log('Action was called')
    return {
        type: POPULATE,
        produce: produceData
    }
}

export default function produceReducer(state = {},
    action) {
    switch (action.type) {
        case POPULATE:
            console.log('Reducer was called')
            const newState = {};
            action.produce.forEach(product => newState[product.id] = product);
            return newState;
        default:
            return state
    }
}
