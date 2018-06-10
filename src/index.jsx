import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/Navbar'
import ChatBox from './components/ChatBox';
import MainInput from './components/MainInput';
// import Background from './components/Background';

import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: ['a;ksdfj', ';askdfj', 'a;ksdfjh;lk'],
      mesagesMap: {},
      index: 0,
    }
  }

  buildHashMap(text) {
    const map = Object.assign({}, this.state.mesagesMap);
    text.split(' ').forEach(word => {
      if (word in map) {
        if (!map[word].includes(this.state.index)) {
          map[word].push(index);
        }
      } else {
        map[word] = [];
      }
    })
  }

  handleSubmit(text) {
    this.buildHashMap(text)
    const messages = this.state.messages.slice();
    messages.unshift(text);
    this.setState({
      messages,
      index: this.state.index += 1,
    })
  }

  searchSubmit() {

  }

  render() {
    return (
    <div className="main">
      <NavBar searchSubmit={(term) => this.searchSubmit(term)} />
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
