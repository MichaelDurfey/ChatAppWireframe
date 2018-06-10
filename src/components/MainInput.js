import React from 'react';
import Background from './Background';

class MainInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    })
  }

  handleSubmit(){
    this.props.handleSubmit(this.state.input);
    this.setState({
      input: '',
    })
  }

  render() {
    return (
      <div className="input">
        <Background />
          <div className="inputField">
            <input 
            type="text" 
            placeholder="New Message!"
            value={this.state.input}
            onChange={this.handleChange}
            autoFocus
            onKeyPress={event => {
                    if (event.key === 'Enter') {
                      this.handleSubmit()
                    }
                  }}
            />
            <button
              value="Submit"
              onClick={this.handleSubmit}>
              Submit</button>
          </div>
      </div>
    );
  }
}

export default MainInput;