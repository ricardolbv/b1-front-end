import { Alert, AlertTitle } from '@material-ui/lab';
import SnackBar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        width: '50%',
        position: 'absolute',
        top:'5%',
        left: '65%'
    }
})

const Toast = props => {
    const classes = useStyles();

    return (
        <div >
        <SnackBar open={props.open} className={classes.root}  onClick={props.handleClose} autoHideDuration={6000}>
        <Alert severity={props.status} variant='filled' className={classes.root} open={props.open} onClose={props.handleClose} >
            <AlertTitle>{props.message}</AlertTitle>
        </Alert>
        </SnackBar>
        </div>
    )
}

export default Toast;