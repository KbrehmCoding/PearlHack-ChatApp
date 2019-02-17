import React, { Component } from 'react';
import ForumItem from './ForumItem';
import './ForumCollection.css';

class ForumCollection extends Component {
    render() {
        return (this.props.forums.map(forum => (<ForumItem key={forum.id} id={forum.id} user={forum.user} name={forum.name} onClick={forumId => {
            this.props.onSelect(forumId);
        }}/>)));
    }
}

export default ForumCollection;
