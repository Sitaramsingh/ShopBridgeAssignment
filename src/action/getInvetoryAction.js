import {actionTypes} from '../constant';

export const getIventory = () => {
    return (dispatch => {
       return fetch('inventory.json',{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }) .then(function(response){
            return response.json();
          })
          .then(function(myJson) {
            if(myJson.status === 'success'){
              dispatch(invengtoryResponse(myJson.data.invetory));
            }
          }).catch(err => {
            throw (err);
        });
    })}

    const invengtoryResponse = (payload) => {
      return { type: actionTypes.GET_INVENTORY_PRODUCT, data: payload };
    }


    export const addItemAction = (payload) => {
      return { type: actionTypes.ADD_ITEMS, data: payload };
    }

    export const editItemAction = (payload) => {
      return { type: actionTypes.UPDATE_ITEMS, data: payload };
    }

    export const deleteItemAction = (payload) => {
      return { type: actionTypes.DELETE_ITEMS, id: payload };
    }