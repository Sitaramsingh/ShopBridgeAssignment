import { combineReducers } from 'redux';
import httpRequestReducer from './httpRequestReducer';
import getInventoryReducer from './getInventoryReducer';

const appReducer = combineReducers({
    isLoading: httpRequestReducer,
    inventoryProduct: getInventoryReducer
});

export default appReducer;