import React from 'react';
import { Route, Link } from 'react-router-dom'
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
// import SearchContainer from './bench/search_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <header className="headerBar">
            <Link to="/">
                <h1 id="heading">Barkstagram</h1>
            </Link>
            <GreetingContainer />
        </header>

        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
        {/* <Route exact path="/" component={SearchContainer} /> */}
    </div>
)

export default App;