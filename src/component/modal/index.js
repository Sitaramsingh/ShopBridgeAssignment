import React from 'react';
import PropTypes from 'prop-types';

// components
import Svg from '../Svg';
import { Modal } from '@material-ui/core';
//svg
import closesvg from '../../assests/svg/close.svg';

import  './index.css';

export default function modal(props) {
    return (
        <Modal
            open={props.open}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div className={['paper', props.className].join(' ')}>
                <p className='modalHeader'>
                    <Svg className='closesvg' onClick={props.onclose} svgSrc={closesvg} />
                </p>
                <p className = 'modalTitle' id="simple-modal-title">{props.modalTitle}</p>
                <p id="simple-modal-description" className = 'modalDescription'>
                    {props.modalDescription}
                </p>
                <div className='modalBody'>{props.children}</div>
            </div>
        </Modal>
    );
}

modal.propTypes = {
    onclose: PropTypes.func,
    children: PropTypes.any,
    open: PropTypes.bool,
    className: PropTypes.string,
};
