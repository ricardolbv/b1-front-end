import Pagination from '@material-ui/lab/Pagination';
import { React, useState } from'react';

const RetailPagination = (props) => {
    return (
        <Pagination count={parseInt(1 + (props.amountItens / 10), 10)} page={props.page} onChange={props.handleChange} color='primary'/>
    )
}

export default RetailPagination;