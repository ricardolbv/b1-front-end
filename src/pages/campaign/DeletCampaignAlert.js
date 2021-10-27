import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const DeletCampaignAlert = (props) => {
    return (
    <div>
    <Dialog
        open={props.openDialog}
        onClose={props.handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">{`Excluindo a ${props.campanha}`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Ao excluir a campanha {props.campanha} não estará mais disponível no sistema.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleCloseDialog} color="primary">
            Cancelar
          </Button>
          <Button onClick={props.handleExclude} color="primary">
            Prosseguir
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    )
}

export default DeletCampaignAlert;

