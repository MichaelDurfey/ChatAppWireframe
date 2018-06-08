import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/Navbar'
import ChatBox from './components/ChatBox';
import MainInput from './components/MainInput';
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: ['a;ksdfj', ';askdfj', 'a;ksdfjh;lk'],
    }
  }

  handleSubmit(text) {
    const messages = this.state.messages.slice();
    messages.push(text);
    this.setState({
      messages,
    })
  }

  render() {
    return (
    <div className="main">
      <NavBar />
      <div className="cIcontainer">
        <MainInput handleSubmit={(text) => this.handleSubmit(text)}/>
        <ChatBox messages={this.state.messages} />
      </div>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
