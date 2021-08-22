import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/')
      .then((res) => {
        console.log(res.json());
      })
      .then((data) => {
        this.setState({ username: data });
        console.log(data);
      });
  }

  render() {
    const { username } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {username ? `Hello ${username.results}` : 'Hello World'}
        </header>
      </div>
    );
  }
}

export default App;
