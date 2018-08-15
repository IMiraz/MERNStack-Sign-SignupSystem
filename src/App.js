import React from 'react';
import {Route} from 'react-router-dom'
import Homepage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'
import DashboradPage from './components/pages/DashboardPage'
import UserRoute from './components/Router/UserRoute'



const App = () => (
<div className="ui container">
<Route path="/" exact component={Homepage} />
<Route path="/login"  component={LoginPage} />
<UserRoute path="/dashborad"  component={DashboradPage} />
</div>
);

export default App;
