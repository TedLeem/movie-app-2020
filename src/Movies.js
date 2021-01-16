import React from "react";
import PropTypes from "prop-types";

function Movie({title,year,summary,poster}) {
    return (
        <div>
            <h1>movie title: {title}</h1>
            <h2>movie year: {year}</h2>
            <p>movie content: {summary} </p>
            <img src={poster} />
        </div>        
    );
}
Movie.propTypes = {
    id : PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};
export default Movie