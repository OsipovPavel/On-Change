import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      famousInfo: '',
      gender: '',
      favColor: 'yellow',
      isFriendly: true
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    const {name, value, type, checked} = event.target
    type==='checkbox' ? this.setState({[name]: checked}) : this.setState({[name]: value})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.firstName} name='firstName' placeholder="First Name" onChange={this.handleChange}/>
        <br/>
        <input type='text' value={this.state.lastName} name='lastName' placeholder='Last Name' onChange={this.handleChange}/>
        <br/>
        <textarea name='famousInfo' value={'Что-то важное и нужное'} onChange={this.handleChange}/>
        <br/>
        <input type='checkbox' name='isFriendly' checked={this.state.isFriendly} onChange={this.handleChange}/>is Friendly?
        <br/>
        <label><input name='gender' value='male' checked={this.state.gender === 'male'} onChange={this.handleChange} type='radio'/>Male</label>
        <br/>
        <label><input name='gender' value='female' checked={this.state.gender === 'female'} onChange={this.handleChange} type='radio'/>Female</label>
        <br/>
        <label>Favourite Color:</label>
        <select value={this.state.favColor} onChange={this.handleChange} name='favColor'>
          <option value='red'>Red</option>
          <option value='blue'>Blue</option>
          <option value='green'>Green</option>
          <option value='yellow'>Yellow</option>
          <option value='orange'>Orange</option>
          </select>
        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <h2><font color='#DAD1EF'>You are a {this.state.gender}</font></h2>
        <h2><font color='#2120EF'>Your favourite color is {this.state.favColor}</font></h2>
      </form>
    );
  }


  
}

export default App;
