import React from 'react';
// import styles from './button.css';
import PropTypes from 'prop-types';


function button(props) {
    return (
        <button className={['butn', props.className].join(' ')}
            onClick={props.onClick}
            disabled={props.disable}
        >{props.children}</button>
    );
}

button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    disable: PropTypes.bool,
    children: PropTypes.any
};

export default button;