import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../actions/posts_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    let currentUser = state.entities.users[state.session.id]
    return ({
        photo: "",
        body: "",
        // user_id: currentUser.id
    });
};

const mapDispatchToProps = (dispatch) => {

    return ({
        createPost: post => dispatch(createPost(post)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);