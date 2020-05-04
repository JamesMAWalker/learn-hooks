import React, { Component } from 'react';
import axios from 'axios';


class GHUserInfo extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      pic: '',
      name: 'James',
      repos: null
    };
  }
  
  async componentDidMount() {
    const url = `https://api.github.com/users/${this.props.username}`;
    let response = await axios.get(url);
    let data = response.data;
    console.log(data.login);
    
    this.setState({ pic: data.avatar_url, name: data.login, repos: data.repos_url.length })
  }
  

  render() {
    const { pic, name, repos } = this.state;

    let border = repos > 40 ? '5px solid chartreuse' : '25px solid red';

    const style = {
      height: "400px",
      width: "400px",
      margin: "2rem",
      padding: "1rem",
      border: `${border}`,
    }

    return (
      name !== '' ?
      <div>
        <img style={style} src={pic} alt={name}/>
        <h1>GH User: {name}</h1>
        <p>Number of repositories: {repos}</p>
      </div>
      :
      null
    );
  }
}

export default GHUserInfo;