import React from 'react';
import Modal from '../../component/modal';
import {nameConstants} from '../../constant';
import {currencyFormate} from '../../utils/currencyFormate';
import './index.css';

export default function Index(props) {
    const {viewItems} = props;
    return (
        <div>
            <Modal open={props.isView} onclose={props.closeView} className='modalStyle'>
                <div>
                    <h1 className={'mt-4'}>{ nameConstants.VIEWPRODUCT}</h1>
                </div>
                <div className='viewportStle'>
                   {viewItems.title &&<h3> <p>Title : {viewItems.title}</p></h3>}
                    {viewItems.name && <h5><p>Name : {viewItems.name}</p></h5>}
                    {viewItems.description &&<h5> <p>Description : {viewItems.description}</p></h5>}
                    {viewItems.price && <h5> <p>Price :  {currencyFormate(viewItems.price)}</p></h5>}
                    { viewItems.offer && <h5><p>Offer :  { viewItems.offer}</p></h5>}
                </div>
            </Modal>
        </div>
    );
}


