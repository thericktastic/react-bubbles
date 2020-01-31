import React, { Component, Fragment as Frag } from "react";
import axios from "axios";

class Login extends Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state = {
    credentials: {
      username: "",
      password: ""
    },
    isLoading: false
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.setState({
      isLoading: true
    });
    console.log("This is this.state.isLoading: ", this.state.isLoading);
    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        console.log("This is axios.post res: ", res)})
      .catch(err => console.log("This is axios.post err: ", err));
  };

  render() {
    return (
      <Frag>
        <h1>Welcome to the Bubble App!</h1>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            label="Username"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            label="Password"
            placeholder="Password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </Frag>
    );
  }
}

export default Login;
