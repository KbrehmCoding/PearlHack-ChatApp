import React, { Component } from 'react';
import ForumItem from './ForumItem';
//connect forum collection to database of forums
import './ForumCollection.css';


class ForumCollection extends Component {
    render() {
        return (this.props.ForumItem.map(Forum => (<ForumItem user={ForumItem.user} Forum={ForumItem.Forum} />)));
    }
}

export default ForumCollection;