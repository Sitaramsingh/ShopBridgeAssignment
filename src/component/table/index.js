import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import {themes, nameConstants} from '../../constant';
import './index.css';

const createActionBtn = [{icon:'FA_PENCIL' , btn:'INFO_BTN'},{icon: 'FA_EYE', btn:'PRIMARY_BUTTON'},{icon:'FA_TRASH',btn:'DANGER_BTN'}]


export default function TableComponent(props) {
    const [data, setData] = useState(props.data);

    useEffect(() => {
        setData(props.data);
    },[props.data]);

    
    const handleAction = (btnname,keyId) => {
        if(btnname === 'DANGER_BTN'){
            props.deleteAction(keyId);
        }else if(btnname ==='PRIMARY_BUTTON'){
          props.onView(keyId);
        }else{
          props.editAction(keyId);
        }

    }
    
    return (
        <Table  stickyHeader = {props.stickyHeader} aria-label="simple table">
            <TableHead className='headbgcolor'>
                <TableRow>
                    {props.tablehead ? props.tablehead.map((headname, index) => {
                        return (
                            <TableCell key={index.toString()} align="center">{headname}</TableCell>
                        );
                    }) : ''}
                      {props.actionsRequire &&
                    <TableCell>
                        {nameConstants.ACTION}
                    </TableCell>}
                </TableRow>
            </TableHead>
            <TableBody >
                {data ? data.map((row, rowindex) => {
                    return (
                        <React.Fragment key={rowindex.toString()}>
                            <TableRow key={rowindex.toString()}>
                                {props.tablehead.map((headname, index) => {
                                    return (
                                        <TableCell key={index.toString()} align="center">{row['cell' + (index + 1)] ? row['cell' + (index + 1)] : 'Not Available'}</TableCell>
                                    );
                                })}
                                {props.actionsRequire &&
                                <TableCell>
                                    {createActionBtn.map(themesitem => <button className={['m-1', themes[themesitem.btn]].join(' ')} onClick={() => handleAction(themesitem.btn, row.keyId)}>
                                          <i className={themes[themesitem.icon]} ></i>
                                      </button>
                                    )}
                                </TableCell>}
                            </TableRow>
                        </React.Fragment>
                    )
                }) : null}
            </TableBody>
        </Table >
    );
}

TableComponent.propTypes = {
    data: PropTypes.array,
    tablehead: PropTypes.array,
    tableclass: PropTypes.string,
    stickyHeader: PropTypes.bool,
}
