import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import axios from 'axios' 

class Home extends Component {
  state = { characters: [] }

  componentDidMount = () => {
      axios.get('https://api.got.show/api/characters/')
      .then( res => {
        console.log(res.data) 
        this.setState({ characters: res.data }) 
        }
      )
    }


  render() {
    return (
      <Header as='h1' textAlign='center'>Game of Thrones Role Playing Game</Header>

    );
  }
}

export default Home;
