import React, { Component } from 'react';
import Post from "./Post";
import axios from "axios";

class Posts extends Component {
    state = {
        posts: []
    };

    getData = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts/")
            .then(result => {

                this.setState({
                    posts: result.data
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
        return this.state.posts.map(post => {
            return <Post key={post.id} title={post.title} body={post.body} />;
        });
    }
}

export default Posts;