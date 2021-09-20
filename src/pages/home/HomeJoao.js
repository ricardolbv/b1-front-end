import React from 'react';
import Button from '@material-ui/core/Button';

const HomeJoao = (props) => {
    return (
        <>
            <Button variant="contained"> {props.nome} </Button>
        </>
    )
}

export default HomeJoao;