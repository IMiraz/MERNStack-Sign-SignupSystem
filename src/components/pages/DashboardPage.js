import React from 'react'
import {connect} from 'react-redux'
import propTypes from 'prop-types'
import ConfirmEmailMessage from '../messages/confirmEmailMessage'

const DashboardPage =({isconfirmed})=> (
<div>
{!isconfirmed && <ConfirmEmailMessage/>}
</div>

);

DashboardPage.propTypes = {
    isconfirmed:propTypes.bool.isRequired
};
function mapStateToProps(state) {
    return{

    isconfirmed: !!state.user.confirmed
    }

}

export default connect(mapStateToProps)(DashboardPage);
