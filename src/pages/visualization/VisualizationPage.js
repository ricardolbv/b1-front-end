import Typography from '@material-ui/core/Typography';
import BuildIcon from '@material-ui/icons/Build';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const VisualizationPage = () => {
    return (
        <Box display='flex' justifyContent='center' m={1} p={3} style={{ width: '90%', height: '80%'}}>
        <div dangerouslySetInnerHTML={{ __html: "<iframe height='800' width='1000' src='https://app.powerbi.com/reportEmbed?reportId=9af1e9cf-af2a-409c-af4b-e905d8906a49&autoAuth=true&ctid=610e9057-3c4f-4b45-b8a0-095ac9ef7121&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D' frameborder='0' allowFullScreen='true'></iframe>"}} />
       </Box>
    )
}

export default VisualizationPage;