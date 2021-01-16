import React from 'react';
import PropTypes from "prop-types";
const movieList = [
  {name:"iron man", year: 2010},
  {name:"iron man2", year: 2012},
  {name:"iron man3", year: 2014}
  ]


function Movie(params) {
  return (
    <li>  
      <h2>
        Movie Name:  {params.name}    
      </h2>
      <h3> Movie year: {params.year} </h3>
    </li>
  )
}

Movie.prototype= {
  name: PropTypes.string.isRequired,
  year: PropTypes.number
}

class App extends React.Component{
  
  state= {
    count : 0 
  };
  add = () => {
    
    this.setState( current => ({count: current.count + 1}) );
    // setstate 함수를 호출할때마다 react는 새로운 react와 함께 render함수를 호출 할 것이다.
  };
  minus = () => {
    this.setState( current => ({count: current.count - 1}) )
  };
  
  render() {
    return (
      <div> 
        <h1> number is {this.state.count} </h1>
        <button onClick ={this.add}> add </button>
        <button onClick = {this.minus}>minus</button>
      </div>      
    );
  }
}
export default App;
