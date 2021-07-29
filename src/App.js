import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgDog: '',      
    }
  }

  fetchImg = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data =>  this.setState({
      imgDog: data.message,
    }));
  }

  componentDidMount() {
    this.fetchImg();
  }

  render() {
    const loading = <h1>Loading...</h1>;
    if (!this.state.imgDog) return loading;
    return (
      <div>
        <img src={ this.state.imgDog } alt="doguinho" />
        <button type="button" onClick={ this.fetchImg }>Buscar doguinho</button>
      </div>
    );
  }
}

export default App;
