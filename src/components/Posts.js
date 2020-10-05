import React, { Component } from 'react';
import Post from "./Post"
import axios from "axios";

class Posts extends Component {
    state = {
        posts: []
    };

    getData = () => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/')
            .then(result => {
                this.setState({
                    post: result.data
                });
            })
            .catch(err => {
                throw err;
            });
    };

    componentDidMount() {
        this.getData();
    }


    render() {
        return (
            <div>
                {console.log(this.state.posts)}
                <Post title="Hallo react" />
            </div>
        )
    }
}

export default Posts;