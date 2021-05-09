import React,{useState, useEffect} from 'react';
import InputBox from  '../../component/InputBox';
import Button from '../../component/Button';
import Modal from '../../component/modal';
import './index.css';

import {themes, nameConstants} from '../../constant';
// import {addItemAction, editItemAction} from '../../action';

const createForm = [{text:'title', label: 'title', placeHolder: 'Enter title', type:'text'}, {text:'name', label:'Name', placeHolder: 'Enter Name',  type:'text'}, {text:'description', label:'Description', placeHolder: 'Enter Description',  type:'text'},  {text:'offer', label:'offer', placeHolder: 'Enter offer',  type:'text'},{text:'price',label: 'Price', placeHolder: 'Enter Price',  type:'number'}];

export default function Index(props) {
    const [state, setState] = useState({
        id: '',
        title: '',
        name: '',
        description: '',
        price: '',
        offer: ''
    });

    const {editableItem} = props;

    const handleChange = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;
        setState({ ...state,  [name]: value });
    }

    const onSubmitItems = (evt) => {
        evt.preventDefault();
        const reqPayload = state;
        props.formSubmit(reqPayload);
        props.handleFormModal();

    }
    useEffect(() => {
        if(editableItem){
            const {name, description, price, id, offer, title} = editableItem;
            setState(prevState => {
                return {
                    ...prevState,
                    name: name,
                    description: description,
                    price: price,
                    id: id,
                    title: title,
                    offer: offer
                };
            });
        }
    }, [editableItem])

    const handleValidation  = () => {
        if(state.title && state.name && state.description && state.price && state.offer){
            return false
        }else {
            return true
        }

    }

    const onCancel = (evt) => {
        evt.preventDefault();
        props.handleFormModal();
        
    }

    return (
        <Modal open={props.isAddItem} onclose={props.handleFormModal} className='modalStyle'>
            <div>
                <h1 className={'mt-4'}>{state.id ? nameConstants.UPDATEPRODUCT : nameConstants.ADDPRODUCT}</h1>
                <form className='pd-2 formStyle'>
                    {createForm.map((item, index)=> <div className= {['m-2',  item.text === 'description' ? 'desflex':'flexInner'].join(' ')}  key={index.toString()}><InputBox variant='outlined'  type={item.type} label={item.label} key={item.text} name={item.text} value={state[item.text]} placeholder={item.placeHolder} onChange={handleChange}/></div>)}
                    <div className='btnContainer'>
                        <Button className={['m-2' ,themes.SECONDARY_BUTTON].join(' ')} onClick={onCancel} > Cancel </Button>
                        <Button  className={themes.PRIMARY_BUTTON} disable = {handleValidation()} onClick={onSubmitItems}> {state.id ?  'Update' :'Save'} </Button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
