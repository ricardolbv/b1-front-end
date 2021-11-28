import Typography from '@material-ui/core/Typography';
import BuildIcon from '@material-ui/icons/Build';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const VisualizationPage = () => {
    return (
        <Box display='flex' justifyContent='center' m={1} p={2} style={{ width: '90%', height: '70%'}}>
        <div dangerouslySetInnerHTML={{ __html: "<iframe width='1400' height='1000' src='https://app.powerbi.com/reportEmbed?reportId=cc525e6b-b425-4e6e-899e-d1bbedcc9867&autoAuth=true&filterPaneEnabled=False&ctid=080bc023-5e5a-46fb-bbe8-eb548e9873a6&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D frameborder='0' allowFullScreen='true' ></iframe>"}} />
       </Box>
    )
}

export default VisualizationPage;