import React, { Component } from 'react';
import './UserProfile.css';
import ForumCollection from './ForumCollection';
import Search from './Search';

const forums = [
    {
        id: 'abc11',
        user: 'Test User 1',
        name: 'Test Forum 1',
    },
    {
        id: 'abc12',
        user: 'Test User 2',
        name: 'Test Forum 2',
    },
    {
        id: 'abc13',
        user: 'Test User 3',
        name: 'Test Forum 3',
    },
    {
        id: 'abc14',
        user: 'Test User 4',
        name: 'Test Forum 4',
    },
    {
        id: 'abc15',
        user: 'Test User 5',
        name: 'Test Forum 5',
    }
];

class UserProfile extends Component {
    render() {
        return (
            <div>
                <Search />
                <ForumCollection forums={forums} />
            </div>
        );
    }
}

export default UserProfile;
