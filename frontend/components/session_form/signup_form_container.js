import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SignUpForm from './signup_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);