import React from 'react'
import {connect} from 'react-redux'
import propTypes from 'prop-types'
import confirmEmailMeassage from '../messages/confirmEmailMessage'

const DashboardPage =(isconfirmed)=> (
<div>
{!isconfirmed && <confirmEmailMessage/>}
</div>

);

DashboardPage.propsTypes = {
 isconfirmed:propsTypes.bool.isRequired
};
function mapStateToProps(state) {
    isconfirmed:state.user.confirmed

}

export default connect(mapStateToProps) (DashboardPage);
