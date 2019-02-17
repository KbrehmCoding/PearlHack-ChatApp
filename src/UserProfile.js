import React, { Component } from 'react';
import './UserProfile.css';
import Chat from './Chat';
import ForumCollection from './ForumCollection';
import Search from './Search';

class UserProfile extends Component {
    state = {
        selectedForumId: null,
    };

    render() {
        if (this.state.selectedForumId) {
            return <Chat forum={this.props.forums.find(forum => forum.id = this.state.selectedForumId)} />;
        }
        return (
            <div>
                <Search />
                <ForumCollection forums={this.props.forums} onSelect={forumId => {
                    this.setState({
                        selectedForumId: forumId,
                    });
                }} />
            </div>
        );
    }
}

export default UserProfile;
