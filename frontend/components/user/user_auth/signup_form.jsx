import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import AnimationComponent from './animation_component';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            dupEmail: '',
            dupUsername: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
    }


    update(field) {
        return e => this.setState({

            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderUniqueErrors() {
        let unqiueErrors = [];

        if (this.props.errors.includes("Username has already been taken")) {
            unqiueErrors.push("Username has already been taken")
        } 
        if (this.props.errors.includes("Email has already been taken")) {
            unqiueErrors.push("Email has already been taken")
        } 

        if (unqiueErrors) {
        return (
            <ul className="login-errors">
                {unqiueErrors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )};
    }

    renderUserNameError() {
        if (this.props.errors.includes("Username can't be blank")) {
            return (
                <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="signin-error"
                    placeholder="Username is required"
                />
            )
        } else if (this.props.errors.includes("Username has already been taken")) {
            return (
                <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="signin-error"
                    placeholder="Username has already been taken"
                />
            )
        } else {
            return (
                <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="login-input"
                    placeholder="Username"
                />
            )
        }
    }

    renderEmailError() {
        if (this.props.errors.includes("Email can't be blank")) {
            return (
                <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="signin-error"
                    placeholder="Email is required"
                />
            )
        } else if (this.props.errors.includes("Email has already been taken")) {
            return (
                <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="signin-error"
                    placeholder="Email has already been taken"
                />
            )
        } else {
            return (
            <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                placeholder="Email"
            />
        )}
    }

    renderPasswordError() {
        if (this.props.errors.includes("Password is too short (minimum is 6 characters)")) {
            return (
                <input type="text"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="signin-error"
                    placeholder="Password minimum 6 characters"
                />
            )
        } else {
            return (
                <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                    placeholder="Password"
                />
            )
        }
    }



    render() {

        return (
                <div className="signup-page">
                <div className="login-page-left">
                    <AnimationComponent />
                </div>
                <div className="signin-page-right">

                    <form onSubmit={this.handleSubmit} className="signup-form-box">
                        <h1 className="login-logo">
                            Barkstagram
                        </h1>
                        <div className="signup-form">
                            <span className="form-header">
                                Sign up to see photos and videos from your friends.
                            </span>
                            <div className="signin-errors-ul">
                            {this.renderUniqueErrors()}
                            </div>
                            <label>
                                {this.renderEmailError()}
                            </label>                            
                            <br />
                            <label>
                                {this.renderUserNameError()}
                            </label>
                            <br />
                            <label>
                                {this.renderPasswordError()}                                
                            </label>
                            <br />
                            {/* <input
                                className="new-user-submit"
                                type="submit"
                                value="Sign up"
                            /> */}
                            <button
                                className="new-user-submit"
                                type="submit">
                                    Sign Up 
                            </button>
                            <br />
                            <span className="form-footer">
                                By signing up, you agree to our
                                <br />
                                <strong>Terms , Data Policy</strong> and <strong>Cookies 
                                <br />    
                                Policy</strong> .
                            </span>
                        </div>
                    </form>
                    <div className="login-signup-link">
                        <div className="center">
                            Have an account?
                            &nbsp;
                            <Link to="/login"> Log in</Link>
                        </div>
                    </div>
                </div>

                </div>

        );
    }
}


export default withRouter(SignUpForm);