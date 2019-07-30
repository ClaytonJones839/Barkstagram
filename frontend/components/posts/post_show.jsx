import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import React from 'react';
import { Link } from 'react-router-dom';

class PostShow extends React.Component {
    constructor(props) {
        super(props)

        this.post = this.props.post;
    }

    componentDidMount() {
        this.props.fetchEvent(this.post.id)
    }
    render() {

        return (
            <div>
                <span>{this.post.body}</span>
                <h3>
                    Post Show Page
                </h3>
            </div>
        );
    }
}

export default PostShow;