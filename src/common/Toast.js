import { useState } from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import SnackBar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { closeToast } from './actions';

const useStyles = makeStyles({
    root: {
        width: '50%',
        position: 'absolute',
        top:'5%',
        left: '65%'
    }
})

const Toast = props => {
    const [toast, setToast] = useState({open: false});
    const classes = useStyles();
    const handleClose = () => { 
        props.onCloseToast(toast);
    }

    return (
        <div >
        <SnackBar open={props.toast.open} className={classes.root}  onClick={handleClose} autoHideDuration={6000}>
        <Alert severity={props.toast.status} variant='filled' className={classes.root} open={props.open} onClose={handleClose} >
            <AlertTitle>{props.toast.message}</AlertTitle>
        </Alert>
        </SnackBar>
        </div>
    )
}

const mapStateToProps = state => ({
    toast: state.toast,
  })

const mapDispatchToProps = dispatch => ({
    onCloseToast: toast => dispatch(closeToast(toast)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Toast);