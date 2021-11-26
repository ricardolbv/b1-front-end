import React from 'react'
import profile from '../../imgs/Profile.PNG';
import Container from '@material-ui/core/Container';



export default function ProfileImg() {
    return (
        <Container maxWidth='sm' >
            <img src={profile}  alt="" style={{ height: '70%', width: '70%', borderRadius: '50%'}}/>
        </Container>
    )
}
