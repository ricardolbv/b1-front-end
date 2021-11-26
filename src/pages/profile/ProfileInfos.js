import React, { useEffect } from 'react'
import { Button, Box, Grid, Typography, TextField } from '@material-ui/core';
import ProfileImg from './ProfileImg';

import { useUser } from '../../auth/useUser';

export default function ProfileInfos() {
    const user = useUser();
    const { usuarioId, cargoId, email } = user;
    var _cargo = "";

    useEffect(()=> {
        _cargo = getTypeUser(usuarioId)
    }, [])


    function getTypeUser(idCargo){
        if (idCargo === 1)
            return 'Admin';
    
        else if (idCargo === 2) 
            return 'Varejo';
    
        else if (idCargo === 3)
            return 'Marca';
    }

    return (
        <Box boxShadow={3} m={2} p={2}>
            <Box display='flex' justifyContent='center'>
                <Typography variant='h6'> Minhas informações</Typography>
            </Box>
            <Grid container spacing={1}>
                <Grid item xs={7}>
                    <Box p={1}>
                        <TextField label="E-mail" id="email" variant="outlined" fullWidth value={email}/>
                    </Box>
                    <Box p={1}>
                        <TextField label="Cargo" id="cargo" variant="outlined" fullWidth value={getTypeUser(cargoId)}/>
                    </Box>
                    <Box p={1}>
                        <TextField label="Telefone" id="telefone" variant="outlined" fullWidth value="(19) 9 9897-2287"/>
                    </Box>
                    <Box p={1}>
                        <TextField label="Senha" id="senha" variant="outlined" fullWidth value="senha" type="password" />
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Box paddingLeft={8}>
                        <ProfileImg />
                            <Box paddingRight={4} paddingTop={20} display='flex' justifyContent='center'>
                                <Button variant="contained" color="primary" style={{ backgroundColor: "#0D0B23" }}> Atualizar</Button>
                            </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
