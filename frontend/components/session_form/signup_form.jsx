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

        if (this.props.map) {
            return (
                <ul className="login-errors">
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            )
        };
    }

    render() {
        return (
                <div className="signup-page">
                <div className="login-page-left">
                    <div className="login-left-image-container">
                        <img className="login-left-image" src="https://www.instagram.com/static/images/homepage/home-phones@2x.png/9364675fb26a.png" />
                        <img className="login-left-image-inner" src="https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg" />
                        <img className="login-left-image-inner-2" src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/66584318_10216687664477948_8152920814933508096_n.jpg?_nc_cat=102&_nc_oc=AQnEPH6-7NxFpkyMnw_BXmTU2rzKrFZBSczf4Z-Hoi6Nvnke87caQJHW3OFvd9LIcAI&_nc_ht=scontent-mia3-2.xx&oh=9be3dd7aeb2785cfde4691c9b4f0d4b2&oe=5DAA76BD" />
                    </div>
                </div>
                <div className="login-page-right">
                    {this.renderErrors()}
                    <form onSubmit={this.handleSubmit} className="signup-form-box">
                        <h1 className="login-logo">
                            Barkstagram
                        </h1>
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