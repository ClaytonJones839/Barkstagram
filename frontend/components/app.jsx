import React from 'react';
import { Route, Link } from 'react-router-dom'
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import UserShowContainer from './session_form/user_show_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div className="page">
        <header className="headerBar">
            {/* <GreetingContainer /> */}
        </header>

        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute exact path="/" component={UserShowContainer} />
        {/* <Redirect to='/login' /> */}
        {/* <Route exact path="/" component={SearchContainer} /> */}
    </div>
)

export default App;