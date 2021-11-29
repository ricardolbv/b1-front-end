import Typography from '@material-ui/core/Typography';
import BuildIcon from '@material-ui/icons/Build';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import { useUser } from '../../auth/useUser';

const renderSwitch = (cargoId) => {
    switch(cargoId){
        case 1: // Admin
            return  <div dangerouslySetInnerHTML={{ __html: "<iframe width='1400' height='1000' src='https://app.powerbi.com/reportEmbed?reportId=21805115-baf0-4559-9069-fc9c7ebf2794&autoAuth=true&ctid=080bc023-5e5a-46fb-bbe8-eb548e9873a6&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D frameborder='0' allowFullScreen='true' ></iframe>"}} />

        case 2:
            return <div dangerouslySetInnerHTML={{ __html: "<iframe width='1400' height='1000' src='https://app.powerbi.com/reportEmbed?reportId=cc525e6b-b425-4e6e-899e-d1bbedcc9867&autoAuth=true&filterPaneEnabled=False&ctid=080bc023-5e5a-46fb-bbe8-eb548e9873a6&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D frameborder='0' allowFullScreen='true' ></iframe>"}} />

        case 3:
            return <div dangerouslySetInnerHTML={{ __html: "<iframe width='1400' height='1000' src='https://app.powerbi.com/reportEmbed?reportId=667ff4c3-9b6b-485e-93be-5cf62da7e2b2&autoAuth=true&ctid=080bc023-5e5a-46fb-bbe8-eb548e9873a6&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D frameborder='0' allowFullScreen='true' ></iframe>"}} />


        default:
            return <div dangerouslySetInnerHTML={{ __html: "<iframe width='1400' height='1000' src='https://app.powerbi.com/reportEmbed?reportId=cc525e6b-b425-4e6e-899e-d1bbedcc9867&autoAuth=true&filterPaneEnabled=False&ctid=080bc023-5e5a-46fb-bbe8-eb548e9873a6&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D frameborder='0' allowFullScreen='true' ></iframe>"}} />

    }
}

const VisualizationPage = () => {
    const user = useUser();
    const {cargoId} = user;

    return (
        <Box display='flex' justifyContent='center' m={1} p={2} style={{ width: '90%', height: '70%'}}>
            {renderSwitch(cargoId)}
       </Box>
    )
}

export default VisualizationPage;