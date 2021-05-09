import React from 'react';
import PropTypes from 'prop-types';

export default function svg(props) {
    return (
        <img
            onClick={props.onClick}
            className={props.className}
            src={props.svgSrc}
            alt={props.alt}
            />
    );
}
svg.propTypes = {
    svgSrc: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
};
