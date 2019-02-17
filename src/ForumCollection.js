import React, { Component } from 'react';
import ForumItem from './ForumItem';
import './ForumCollection.css';

class ForumCollection extends Component {
    render() {
        return (this.props.forums.map(forum => (<ForumItem key={forum.id} user={forum.user} name={forum.name} />)));
    }
}

export default ForumCollection;
