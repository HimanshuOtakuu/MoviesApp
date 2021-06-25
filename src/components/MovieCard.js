import React from "react";
import { addFavourite, unFavourite } from "../action";

class MovieCard extends React.Component {
    handleAddFavourite = () => {
        const {movie} = this.props;
        this.props.dispatch(addFavourite(movie));
       // console.log("added", this.props.store.getState());
    }
    handleRemoveFavourite = () => {
        const {movie} = this.props;
        this.props.dispatch(unFavourite(movie));
        //console.log("removed", this.props.store.getState());
    }
    
    render(){ 
        const {movie, isMovieFavourite} = this.props;
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
                {
                    isMovieFavourite
                    ?<button className="unfavourite-btn" onClick={this.handleRemoveFavourite}>Unfavourite</button>
                    :<button className="favourite-btn" onClick={this.handleAddFavourite}>Favourite</button>
                }
                
            </div>
        </div>
    );
    }
}

export default MovieCard;
