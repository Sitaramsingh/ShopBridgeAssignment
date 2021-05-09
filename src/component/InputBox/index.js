import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

function inputType(props) {
    return (
        <TextField
            id={props.id}
            error={props.error}
            style={props.style}
            onChange = {props.onChange}
            variant = {props.variant}
            name = {props.name}
            value={props.value}
            label = {props.label}
            type = {props.type}
            helperText = {props.helpertext}
            onKeyPress={props.onKeyPress}
            InputProps = {props.InputProps}
            InputLabelProps = {props.InputLabelProps}
            defaultValue = {props.defaultValue}
            value = {props.value}
            FormHelperTextProps = {props.FormHelperTextProps}
            classes = {props.classes}
            inputProps = {props.inputProps}
            multiline = {props.multiline}
            placeholder = {props.placeholder}
        />
    );
}

inputType.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.string,
    helpertext: PropTypes.string,
    variant: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.bool,
    inputstyle: PropTypes.string,
    name: PropTypes.string,
    onKeyPress: PropTypes.func,
    InputProps: PropTypes.object,
    InputLabelProps: PropTypes.object,
    defaultValue: PropTypes.any,
    value: PropTypes.any,
    FormHelperTextProps: PropTypes.object,
    multiline: PropTypes.bool,
    placeholder: PropTypes.string,
};

export default inputType;