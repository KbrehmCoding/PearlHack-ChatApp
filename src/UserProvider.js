import React, { Component } from 'react';
import Auth from './Auth';
import UserProfile from './UserProfile';

const forumMessages = [
    {
        id: 'message11',
        user: 'Test User 1',
        message: 'Test Message 1',
    },
    {
        id: 'message12',
        user: 'Test User 2',
        message: 'Test Message 2',
    },
    {
        id: 'message13',
        user: 'Test User 3',
        message: 'Test Message 3',
    },
    {
        id: 'message14',
        user: 'Test User 4',
        message: 'Test Message 4',
    },
    {
        id: 'message15',
        user: 'Test User 5',
        message: 'Test Message 5',
    }
];

const forums = [
    {
        id: 'abc11',
        user: 'Test User 1',
        name: 'Test Forum 1',
        messages: forumMessages,
    },
    {
        id: 'abc12',
        user: 'Test User 2',
        name: 'Test Forum 2',
        messages: [],
    },
    {
        id: 'abc13',
        user: 'Test User 3',
        name: 'Test Forum 3',
        messages: [],
    },
    {
        id: 'abc14',
        user: 'Test User 4',
        name: 'Test Forum 4',
        messages: [],
    },
    {
        id: 'abc15',
        user: 'Test User 5',
        name: 'Test Forum 5',
        messages: [],
    }
];

class UserProvider extends Component {
    state = {
        userData: null,
        forumData: [],
    };

    onAuthChanged = (action) => {
        switch (action.type) {
            case 'LOGIN':
                this.setState({
                    userData: {
                        id: action.username,
                        name: action.username,
                    },
                    forumData: forums,
                });
                return;
            case 'LOGOUT':
                this.setState({
                    userData: null,
                    forumData: [],
                });
                return;
            case 'SIGNED_UP':
                this.setState({
                    userData: {
                        id: action.username,
                        name: action.username,
                    },
                    forumData: [],
                });
                return;
            default:
                return;
        }
    };

    render() {
        if (this.state.userData) {
            return <UserProfile user={this.state.userData} forums={this.state.forumData} onAuthChanged={this.onAuthChanged} />;
        }
        return <Auth onAuthChanged={this.onAuthChanged} />;
    }
}

export default UserProvider;
