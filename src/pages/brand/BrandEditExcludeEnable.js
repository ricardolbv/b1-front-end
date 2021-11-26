import { React, useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Switch from '@material-ui/core/Switch';
import { connect } from 'react-redux';
import { deleteBrand, updateBrandStatus } from './thunks';
import { openToast } from '../../common/actions'
import DeletAlertDialog from '../../common/DeletAlertDialog';
import { useHistory } from 'react-router-dom';

const BrandEditAndExcludeEnable = (props) => {
    const [openDialog, setHandleDialog] = useState(false);
    const handleCloseDialog = () => setHandleDialog(false);
    const history = useHistory();

    async function handleClickSlide () {
        const _brand = {
            email: props.email, 
            status: props.status == 0 ? 1 : 0 
        }
        props.setLoading(true);
        await props.onUpdateBrandStatus(_brand);
        props.setLoading(false);
    }

    async function handleExclude (){
        const _brand = {
            email: props.email,
        }
        props.setLoading(true);
        await props.onExcludeBrand(_brand);
        props.setLoading(false);

        handleCloseDialog();
    }

    function handleEdit (){
       history.push(`/home/brand/edit/${props.email}`)
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
   onExcludeBrand: brand => dispatch(deleteBrand(brand)),
   onUpdateBrandStatus: brand => dispatch(updateBrandStatus(brand)),
   onToastOpen: toast => dispatch(openToast(toast)),
})

export default connect(null, mapDispatchToProps)(BrandEditAndExcludeEnable);