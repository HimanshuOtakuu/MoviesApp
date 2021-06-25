import React from "react";
import { data } from "../data"
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../action";

class App extends React.Component{
  
  componentDidMount(){
    const { store } = this.props;

    store.subscribe(() =>{
      this.forceUpdate();
    });

    store.dispatch(addMovies (data));

    console.log(store.getState());
  }

  isMovieFavourite = (movie) =>{
    const { favourite } = this.props.store.getState();
    
    const index = favourite.indexOf(movie);
 
    if(index !== -1){
      return true;
    }
    return false;
  }


  render(){
    const { list } = this.props.store.getState();
    console.log("state",this.props.store.getState());
    return (
      <div className="App">
        <Navbar/>
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourite</div>
          </div>
          <div className="list">
            {
              list.map((movie,index) =>(
                <MovieCard movie ={movie} 
                key={`movies-${index}`} 
                dispatch={this.props.store.dispatch}
                isMovieFavourite={this.isMovieFavourite(movie)}
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
