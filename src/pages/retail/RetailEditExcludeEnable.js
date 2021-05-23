import { React, useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Switch from '@material-ui/core/Switch';
import { connect } from 'react-redux';
import { updateNewStatus } from './thunks';

const RetailEditAndExcludeEnable = (props) => {
    function handleClick () {
        const _retail = {
            email: props.emailVarejo, 
            status: props.status == 0? 1 : 0 
        }
        props.onUpdateStatus(_retail);
        props.setToast(true);
        props.setStatus("success");
        props.setMessage('Usuario Varejo '+ props.emailVarejo +' Atualizado!') 
    }
    return (
            <div>
                <Switch color='primary' checked={props.status} onClick={handleClick}/>
                <EditIcon style={{ position:'relative', top:'1vh'}} />
                <DeleteIcon style={{ position:'relative', top:'1vh' }}/>
            </div>
          )
}

const mapDispatchToProps = dispatch => ({
    onUpdateStatus: retail => dispatch(updateNewStatus(retail))
})

export default connect(null, mapDispatchToProps)(RetailEditAndExcludeEnable);