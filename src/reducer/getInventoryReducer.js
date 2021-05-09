import {actionTypes} from '../constant';

let initialState = {
    inventoryItems: []
};

const handleInventoryItems = (state, action) => {
    let newState = {...state};
    newState.inventoryItems = action.data;
    return newState;
}

const handleAddItems = (state, action) => {
    let newState = {...state};
    newState.inventoryItems = newState.inventoryItems.concat([action.data]);
    return  newState;
}
const handleDelete = (state, action) => {
    let newState = {...state};
    newState.inventoryItems = newState.inventoryItems.filter((items)=>items.id !== action.id);
    return newState;
}

const handleUpdate = (state, action)  => {
    let newState = {...state};
    newState.inventoryItems =   newState.inventoryItems.map((item)=>{
        if(item.id === action.data.id) {
          return {
             ...item,
             name:action.data.name,
             description:action.data.description,
             price: action.data.price
          }
        }else{
            return item;
        }
    })
    return newState;
}



export default function getInventoryReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_INVENTORY_PRODUCT:
            return handleInventoryItems(state, action)
        case actionTypes.ADD_ITEMS:
            return handleAddItems(state, action);
        case actionTypes.DELETE_ITEMS:
            return handleDelete(state, action);
        case actionTypes.UPDATE_ITEMS:
            return handleUpdate(state, action);
        default:
            return state;
    }
}