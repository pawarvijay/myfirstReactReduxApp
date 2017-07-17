/**
 * Created by vijaypawar on 06/07/17.
 */

export function createRemitter(remitter){
    return { type : 'CREATE_REMITTER' , remitter};
}

export function addItem(item){
    return { type : 'ADD_ITEM' , item};
}

export function computeAmountInReducer(remitter){
    return { type : 'COMPUTE_AMOUNT_IN_REDUCER' , remitter};
}

export function computeItemAmountInReducer(data) {
    return { type : 'COMPUTE_ITEM_AMOUNT_IN_REDUCER' , data};
}