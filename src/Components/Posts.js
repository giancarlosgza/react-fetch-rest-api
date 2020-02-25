import React from "react";

class Posts extends React.Component {
    state = {
        posts: []
    }
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then((data) => {
            this.setState({ posts: data })
            console.log(this.state.posts)
        })
        .catch(console.log)
    }
    render() {
        return (
            <div>
                <div className="row mb-3">
                    <div className="col-md-12 text-md-center">
                        <h2 className="text-poppins font-weight-bold">Posts</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {this.state.posts.map((post) => (
                        <div className="col-md-8">
                        <div className="card card-outline translate-up mb-3">
                            <div className="card-body">
                                <h5 className="card-title"><strong className="text-primary">{post.userId}</strong> | {post.title}</h5>
                                <h6 className="body-1 text-muted">{post.body}</h6>
                            </div>
                            <div className="card-footer text-right">
                                <h6 className="subtitle-1 text-muted">Hace 1 min.</h6>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Posts;