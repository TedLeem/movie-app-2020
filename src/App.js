import React from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movies";
class App extends React.Component{
  
  state ={
    isLoading : true,
    movies : []
  };

  getMovies = async() =>{
    const {
      data:{
          data:{
            movies
          }
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
    this.setState({isLoading:false, movies})
  };
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;
    return (
      <div> 
        {isLoading ? "Loading" : movies.map( movie =>{
          return <Movie key= {movie.id}id= {movie.id}  title= {movie.title} year= {movie.year} summary ={movie.summary} poster = {movie.medium_cover_image}/>
        })}
      </div>      
    );
  }

}
export default App;
