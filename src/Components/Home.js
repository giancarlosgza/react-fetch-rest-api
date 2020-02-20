import React from "react";
import ReactLogo from "../react-logo.svg"
import { Link } from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="row justify-content-center mb-3">
                    <div className="col-md-12 text-center">
                        <img src={ReactLogo} className="my-3" alt="React Logo" title="React Logo" width="200px"></img>
                        <h1 className="text-poppins font-weight-bold">Home</h1>
                        <h3 className="text-poppins font-weight-bold text-primary">ReactJs Router with Fetch Rest API</h3>
                    </div>
                    <div className="col-md-4 mt-5">
                        <Link to="/posts">
                            <div className="card card-outline bg-secondary translate-up ripple ripple-dark">
                                <div className="card-body text-center">
                                    <h4 className="font-weight-bold">Posts</h4>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 mt-5">
                        <Link to="/users">
                            <div className="card card-outline bg-secondary translate-up ripple ripple-dark">
                                <div className="card-body text-center">
                                    <h4 className="font-weight-bold">Users</h4>
                                </div>
                            </div>
                        </Link>
                    </div>                        
                </div>
            </div>
        );
    }
}

export default Home;