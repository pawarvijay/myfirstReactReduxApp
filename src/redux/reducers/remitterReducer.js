const remitterReducer = (state = [], action) => {

    switch (action.type) {

        case 'CREATE_REMITTER':
            return [...state, Object.assign({}, action.remitter)];

        case 'ADD_ITEM' : {
            let remitter = Object.assign({}, action.item.fullState);
            let newItem = Object.assign({}, action.item.newItem);
            remitter.items.push(newItem);
            return [...state, remitter]
        }

        case 'COMPUTE_AMOUNT_IN_REDUCER': {
            let remitter = action.remitter;
            remitter.amount = remitter.rate * remitter.quantity;
            return [...state, Object.assign({}, remitter)];
        }

        case 'COMPUTE_ITEM_AMOUNT_IN_REDUCER': {
            let remitter = action.data.fullState;
            remitter.items.forEach((item) => {
                if (item.id == action.data.item.id) {
                    action.data.item.yooAmount = action.data.item.yooRate * action.data.item.yooQuantity;
                    Object.assign(item, action.data.item)
                }
            });

            //Compute Header level Amount
            remitter.itemAmountTotal = remitter.items.reduce((sum, currentItem) => { return sum + currentItem.yooAmount;}, 0);

            return [...state, Object.assign({}, remitter)];
        }

        default:
            return state;
    }
}

export default remitterReducer;


//
// let initialState = [];
//
// export const createRemitter = (state = initialState, action) => {
//
//     switch (action.type) {
//
//         case 'CREATE_REMITTER':
//             return [...state, Object.assign({}, action.remitter)];
//
//         default:
//             return state;
//     }
// }
//
// export const computeAmountInReducer = (state = initialState, action) => {
//
//     switch (action.type) {
//
//         case 'COMPUTE_AMOUNT_IN_REDUCER':
//
//             let remitter = action.remitter;
//             let amount = remitter.rate * remitter.quantity;
//             return [...state, Object.assign({}, state, {
//                     rate: remitter.rate,
//                     remitter: remitter.quantity,
//                     amount: amount
//                 }
//             )];
//
//         default:
//             return state;
//     }
// }

