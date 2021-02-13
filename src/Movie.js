import React from "react";
import Proptypes from "prop-types"
import "./Movie.css"
function Movie({id, year, title, summary, poster}){

    return <div class = "movie">
        <img src={poster} alt = {title} title={title} />
        <div class="movie__data">
            <h3 class="movie__title" style={{backgroundColor: "red"}}>{title}</h3>
            <h5 class="movie__year">{year}</h5>
            <p class="movie__summary">{summary}</p>
        </div>
    </div>;
}

Movie.propType={
    id : Proptypes.number.isRequired,
    year: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    summary: Proptypes.string.isRequired,
    poster: Proptypes.string.isRequired
};

export default Movie;