import React from "react";
import { render } from "react-dom";

class MovieCard extends React.Component {
    render(){
        const {movie} = this.props;
    return (
        <div className="movie-card"> 
        <div className="left">
            <img alt="Movie Poster" src={movie.Poster}></img>
        </div>
        <div className="right"></div>
            <div className="title">{movie.Title}</div>
            <div className="plot">{movie.Plot}</div>
            <div className="footer">
                <div className="rating">{movie.imdbRating}</div>
                <button className="favourite-btn">Favourite</button>
            </div>
        </div>
    );
    }
}

export default MovieCard;
