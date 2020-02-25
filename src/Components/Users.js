import React from "react";

class Users extends React.Component {
    state = {
        users: [],
        text: "Follow"
    }
    changeText = (text) => {
        this.setState({ text }); 
    }  
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
            this.setState({ users: data })
            console.log(this.state.users)
        })
        .catch(console.log)
    }
    render() {
        const { text } = this.state
        return (
            <div>
                <div className="row mb-3">
                    <div className="col-md-12 text-md-center">
                        <h2 className="text-poppins font-weight-bold">Users </h2>
                    </div>
                </div>
                <div className="row">
                {this.state.users.map((user) => (
                    <div className="col-md-4">
                        <div className="card card-outline translate-up mb-3">
                            <div className="card-body text-center">
                                <img width="100px" src={`https://i.pravatar.cc/300?${user.id}.png`}
                                alt={`${user.username}`} title={`${user.username}`} className="border-radius-50 mb-3"></img>
                                <h5 className="font-weight-bold text-primary">{user.username}</h5>
                                <h6 className="subtitle-1 text-muted text-lowercase">{user.email}</h6>
                                <button className="btn btn-primary"
                                    onClick={ () => { this.changeText("Following")}  }> {text} </button>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        );
    }
}

export default Users;