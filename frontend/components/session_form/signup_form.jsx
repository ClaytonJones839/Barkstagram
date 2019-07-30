import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
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

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
                <div className="signup-page">
                <div className="signup-form-container">
                    <form onSubmit={this.handleSubmit} className="signup-form-box">
                        <h1 className="login-logo">
                            Barkstagram
                        </h1>
                        {this.renderErrors()}
                        <div className="signup-form">
                            <span className="form-header">
                                Sign up to see photos and videos from your friends.
                            </span>
                            <br />
                            <label>
                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="login-input"
                                    placeholder="Email"
                                />
                            </label>                            
                            <br />
                            <label>
                                <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="login-input"
                                    placeholder="Username"
                                />
                            </label>
                            <br />
                            <label>
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                    placeholder="Password"
                                />
                            </label>
                            <br />
                            <input
                                className="new-user-submit"
                                type="submit"
                                value="Sign up"
                            />
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