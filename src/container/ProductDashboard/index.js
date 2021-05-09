import React, {useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {useDispatch, useSelector} from 'react-redux';
import Table from '../../component/table';
import Modal from '../../component/modal';
import Button from '../../component/Button';
import Container from '../../component/Container';
import Form from '../Form';
import ViewPort from '../ViewPort';
import {themes, nameConstants} from '../../constant';
import {currencyFormate} from '../../utils/currencyFormate';
import {getIventory, deleteItemAction, editItemAction, addItemAction} from '../../action';
import './index.css';

let tablehead = ['Name', 'Desciprtion', 'Price'];
let modalButton = ['Cancel', 'Delete'];

function createData(keyId, cell1, cell2, cell3, cell4) {
    return { keyId, cell1, cell2, cell3, cell4 }
}

export default function Index(props) {
    const [inventoryData, setInventoryData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteId, setDeleteId] = useState('');
    const [editableItem, setItem] = useState();
    const [isAddItem, setIsAddItem] = useState(false);
    const [isViewStatus, setViewStatus] = useState(false);
    const dispatch = useDispatch();
    const invetoryData = useSelector(state => state.inventoryProduct.inventoryItems);

    useEffect(() => {
        dispatch(getIventory());
    }, []);

    useEffect(() => {
        if (invetoryData && invetoryData.length > 0) {
          const  tableData = invetoryData.map((item, index) => {
                return createData(item.id,item.description, item.name, currencyFormate(item.price));
        });
        setInventoryData(tableData);
      }else{
        setInventoryData(null);
      }
    }, [invetoryData])

  const handleModalClose = () => {
    setIsModalOpen(!isModalOpen)
  }

    const handleDeleteRow= (keyId) => {
        handleModalClose(); 
        setDeleteId(keyId); 
      } 

  const onEditItem = (keyId) => {
    setIsAddItem(!isAddItem);
    let editObj  = filterData(keyId);
    setItem(editObj);
  }

  const onDelete = () => {
    handleModalClose();
    dispatch(deleteItemAction(deleteId));
  }

  const onView = (keyId) => {
    setViewStatus(!isModalOpen);
    let editObj  = filterData(keyId);
    setItem(editObj);
  }
  const handleFormModal = () => {
    setIsAddItem(!isAddItem);
    setItem(null);
  }
const filterData = (keyId) =>{
  let filterData = null;
  invetoryData.filter( item=>{
    if(keyId === item.id){
       filterData = item;
    }
  });
  return filterData;
}
  const formSubmit = (reqPayload) => {
    if(reqPayload.id){
      dispatch(editItemAction(reqPayload));
    }else{        
        reqPayload.id = uuidv4();
        dispatch(addItemAction(reqPayload));
    }
    
  }

  const closeView = () => {
    setViewStatus(!isViewStatus);
  }
    return (
        <div>
        <div><h3 className='title'>ProductDashboard</h3></div>
            <Container className='mt-5 dashboardContainer'>
            <div className='flexBox'>
                <h4>{nameConstants.PRODUCTLIST}   {inventoryData ? `${inventoryData.length}` : null}</h4>
                <Button className={['addiItem', themes.PRIMARY_BUTTON].join(' ')} onClick={handleFormModal}>
                    <i className={themes.PLUS_CIRCLE} aria-hidden="true"></i>{nameConstants.ADDITEMS}
                </Button>
            </div>
           {inventoryData && inventoryData.length > 0 && <Table data = {inventoryData} tablehead={tablehead} deleteAction={handleDeleteRow} actionsRequire={true} editAction={onEditItem} onView={onView}/>}
            {isAddItem && <Form isAddItem={isAddItem} handleFormModal={handleFormModal} editableItem={editableItem} formSubmit={formSubmit}/>}
            {isViewStatus && <ViewPort isView={isViewStatus} viewItems={editableItem} closeView={closeView}/>}
            <Modal onclose={handleModalClose} open={isModalOpen} >
                <h5> {nameConstants.SUREMSG} </h5>
                <div>
                    {modalButton.map(item => <Button key={item}  className={['m-2', item === 'Cancel' ? themes.SECONDARY_BUTTON :  themes.PRIMARY_BUTTON].join(' ')} onClick={item === 'Cancel' ? handleModalClose : onDelete}>{item}</Button>)}
                </div>
            </Modal>
            </Container>
        </div>
    );
}
