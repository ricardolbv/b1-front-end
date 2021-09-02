import React from 'react'
import { connect } from 'react-redux'
import NewCampaignForm from './NewCampaignForm'

export const ManageCampaingForm = (props) => {
    return (
        <>
         <NewCampaignForm />   
        </>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCampaingForm)
