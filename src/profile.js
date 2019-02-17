import React, { Component } from 'react';
import './profile.css';
import ForumCollection from './ForumCollection';
import Search from './Search';

const Forums = [
    {
        'Test Forum 1',
    },
    {
        'Test Forum 2',
    },
    {
        'Test Forum 3',
    },
    {
        'Test Forum 4',
    },
    {
        'Test Forum 5',
    }
];

class Chat extends Component {
    render() {
        return (
            <div>
                <Search />
                <ForumCollection />
            </div>
        );
    }
}

export default Chat;