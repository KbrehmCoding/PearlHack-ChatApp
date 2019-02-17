import React, { Component } from 'react';
import './UserProfile.css';
import Chat from './Chat';
import ForumCollection from './ForumCollection';
import Search from './Search';
import UserNavbar from './UserNavbar';

class UserProfile extends Component {
    state = {
        selectedForumId: null,
    };

    render() {
        if (this.state.selectedForumId) {
            return (
                <div>
                    <UserNavbar />
                    <Chat forum={this.props.forums.find(forum => forum.id = this.state.selectedForumId)} />
                </div>
            );
        }
        return (
            <div className="UserProfile">
                <UserNavbar />
                <Search />
                <div className="ForumCollection">
                    <ForumCollection forums={this.props.forums} onSelect={forumId => {
                        this.setState({
                            selectedForumId: forumId,
                        });
                    }} />
                </div>
            </div>
        );
    }
}

export default UserProfile;
