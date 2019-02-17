import React, { Component } from 'react';
import './UserProfile.css';
import ForumCollection from './ForumCollection';
import Search from './Search';

class UserProfile extends Component {
    render() {
        return (
            <div>
                <Search />
                <ForumCollection forums={this.props.forums} />
            </div>
        );
    }
}

export default UserProfile;
