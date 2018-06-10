import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
  }

  handleChange(e) {
    this.setState({
      text: e.target.value,
    })
  }

  handleSubmit() {
    this.props.searchSubmit(this.state.text);
    this.setState({
      text: '',
    })
  }

  render() {
    return (
      <div className="navBar">
        <div className="title">Chatify</div>
        <input 
          type="text" 
          className="Search"
          value={this.state.text}
          placeholder='Search'
          onChange={(e) => this.handleChange(e)}
        >
        </input>
        <button 
          className="SearchSubmit"
          onClick={() => this.handleSubmit()} 
        >
        </button>
        <button className="navButton">
          Login
        </button>
        <button className="navButton">
          Logout
        </button>
      </div>
    )
  }
}

export default Navbar;
