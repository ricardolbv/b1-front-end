import Typography from '@material-ui/core/Typography';
import BuildIcon from '@material-ui/icons/Build';
import Container from '@material-ui/core/Container';

const HomeDisplay = () => {
    return (
        <Container>
            <Typography variant='h2' textAlign='center'> Pagina Inicial </Typography>
            <BuildIcon />
       </Container>
    )
}

export default HomeDisplay;