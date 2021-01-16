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

function App() {
  return (
    <div>
      <h1>
        hello this is a Movie list
      </h1>
      <ul>  
        {movieList.map(params => <Movie 
        id = {params.key}
        name={params.name} 
        year={params.year} 
        
        />)}
      </ul>
    </div>
  );
}

export default App;
