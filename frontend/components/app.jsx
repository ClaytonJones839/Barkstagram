import React from 'react';
import { Route, Switch } from 'react-router-dom'
import LoginFormContainer from './user/login_form_container';
import SignUpFormContainer from './user/signup_form_container';
import PostIndexContainer from './posts/feed/feed_container'
import ExploreIndexContainer from './posts/feed/explore_container'
import PostShowContainer from './posts/post/post_show_container'
import PostFormContainer from './posts/post/post_form_container'
import UserShowContainer from './user/user_show_container'
import MainProfileContainer from './user/main_profile_container'
import UserUpdateFormContainer from './user/user_update_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div className="page">
        <header className="headerBar">
        </header>
            <Switch>

                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignUpFormContainer} />
                <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />
                <ProtectedRoute exact path="/my-profile" component={MainProfileContainer} />
                <ProtectedRoute exact path="/posts/:postId" component={PostShowContainer} />
                <ProtectedRoute exact path="/" component={PostIndexContainer} />
                <ProtectedRoute exact path="/feed" component={PostIndexContainer} />
                <ProtectedRoute exact path="/explore" component={ExploreIndexContainer} />
                <ProtectedRoute exact path="/new-post" component={PostFormContainer} />
                <ProtectedRoute exact path="/edit-profile" component={UserUpdateFormContainer} />
                
            </Switch>
    </div>
)

export default App;