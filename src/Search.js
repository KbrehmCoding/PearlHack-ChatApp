import React, { Component } from 'react';
import './Search.css';
import { Input } from 'react-materialize';

class Search extends Component {
    render() {
        return (
            <div>
                <row>
                    <Input s={6} type="search" placeholder="Search" />
                </row>
            </div>
        )
    }
}

export default Search;