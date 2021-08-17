import { React, useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Switch from '@material-ui/core/Switch';
import { connect } from 'react-redux';
import { updateNewStatus, excludeRetail, fetchRetails } from './thunks';
import DeletAlertDialog from '../../common/DeletAlertDialog';
import { useHistory } from 'react-router-dom';

const RetailEditAndExcludeEnable = (props) => {
    const [openDialog, setHandleDialog] = useState(false);
    const handleCloseDialog = () => setHandleDialog(false);
    const history = useHistory();

    function handleClickSlide () {
        const _retail = {
            email: props.email, 
            status: props.status == 0 ? 1 : 0 
        }
        props.onUpdateStatus(_retail);
        props.setToast(true);
        props.setStatus("success");
        props.setMessage('Usuario Varejo '+ props.email +' Atualizado!');
    }

    function handleExclude (){
        const _retail = {
            email: props.email,
        }
        props.onExcludeRetail(_retail);
        handleCloseDialog();
        props.setToast(true);
        props.setStatus("success");
        props.setMessage('Usuario Varejo '+ props.email +' Excluido!') 
    }

    function handleEdit (){
        history.push(`/home/retail/edit/${props.email}`)
    }

    function handleClickDelete () {
        setHandleDialog(true);
    }

    return (
            <div>
                <Switch color='primary' checked={props.status} onClick={handleClickSlide} value={props.status}/>
                <EditIcon style={{ position:'relative', top:'1vh'}} onClick={handleEdit}/>
                <DeleteIcon style={{ position:'relative', top:'1vh' }} onClick={handleClickDelete}/>
                <DeletAlertDialog openDialog={openDialog} handleCloseDialog={handleCloseDialog} handleExclude={handleExclude} {...props}/>
            </div>
          )
}

const mapDispatchToProps = dispatch => ({
    onUpdateStatus: retail => dispatch(updateNewStatus(retail)),
    onExcludeRetail: retail => dispatch(excludeRetail(retail)),
    retailLoad: () => dispatch(fetchRetails()),
})

export default connect(null, mapDispatchToProps)(RetailEditAndExcludeEnable);