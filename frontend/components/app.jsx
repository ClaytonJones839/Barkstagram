import React from 'react';
import { Route, Switch } from 'react-router-dom'
// import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import PostIndexContainer from './posts/post_index_container'
import PostShowContainer from './posts/post_show_container'
import PostFormContainer from './posts/post_form_container'
import UserShowContainer from './session_form/user_show_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div className="page">
        <header className="headerBar">
            {/* <GreetingContainer /> */}
        </header>
            <Switch>

                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignUpFormContainer} />
                <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />
                <ProtectedRoute exact path="/posts/:postId" component={PostShowContainer} />
                <ProtectedRoute exact path="/" component={PostIndexContainer} />
                <ProtectedRoute path="/posts" component={PostIndexContainer} />
                <ProtectedRoute path="/new-post" component={PostFormContainer} />
                
            </Switch>
    </div>
)

export default App;