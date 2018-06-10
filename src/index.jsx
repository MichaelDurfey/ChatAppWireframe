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
      messages: ['a;ksdfj', ';askdfj', 'hi there'],
      messagesMap: {},
      searchResults: [],
      index: 0,
    }
  }

  componentDidMount() {
    this.setState({index: this.state.messages.length})
  }

  buildHashMap(text) {
    const map = Object.assign({}, this.state.messagesMap);
    text.toLowerCase().replace(/[^\w ]/gi, '').split(' ').forEach(word => {
      if (word in map) {
        if (!map[word].includes(this.state.index)) {
          map[word].push(this.state.index);
        }
      } else {
        map[word] = [this.state.index];
      }
    })
    return map;
  }

  handleSubmit(text) {
    const messagesMap = this.buildHashMap(text);
    const messages = this.state.messages.slice();
    messages.push(text);
    this.setState({
      messages,
      messagesMap,
      index: this.state.index += 1,
    })
  }

  searchSubmit(text) {
    const result = [];
    const map = this.state.messagesMap;
    text.toLowerCase().replace(/[^\w ]/gi, '').split(' ').forEach(word => {
      if (word in map) {
        result.push(map[word]);
      }
    })
    let reducedResult = result.reduce((final, currIndex) => {
      let current = [];
      let reduced = currIndex.reduce((acc, curr) => {
        acc[curr] = acc[curr] + 1 || 1
        return acc;
      }, {})
      for (let x in reduced) {
        current.push(Number(x))
      }
      return [...final, ...current]
    }, [])

    let resultMap = {};
    let results = [];
    let messages = this.state.messages.slice();
    for (let i = 0; i < reducedResult.length; i++) {
      if (!(reducedResult[i] in map)) {
        results.push(messages[reducedResult[i]])
      }
    }
    this.setState({ searchResults: results})
  }

  render() {
    return (
    <div className="main">
      <NavBar searchSubmit={(term) => this.searchSubmit(term)} />
      <div className="cIcontainer">
        <MainInput handleSubmit={(text) => this.handleSubmit(text)}/>
        <ChatBox searchResult={this.state.searchResults} messages={this.state.messages} />
      </div>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
