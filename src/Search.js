import React, { Component } from 'react';
import './Search.css';
import { Input, Row } from 'react-materialize';

class Search extends Component {
    render() {
        return (
            <Row>
                <Input s={6} type="search" placeholder="Search" />
            </Row>
        )
    }
}

export default Search;
