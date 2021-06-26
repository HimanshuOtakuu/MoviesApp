import React from "react";
import { data } from "../data"
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourite } from "../action";

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
    
    const { movies } = this.props.store.getState();
    
    const index = movies.favourite.indexOf(movie);
 
    if(index !== -1){
      return true;
    }
    return false;
  }

  onChangeTab = (val) =>{
    this.props.store.dispatch(setShowFavourite(val));
  }

  render(){
    const { movies, search } =this.props.store.getState();
    console.log("search",search);
    const { list, favourite, showFav } = movies;
    console.log("state",this.props.store.getState());
    const displayList=showFav?favourite:list;
    return (
      <div className="App">
        <Navbar dispatch={this.props.store.dispatch} search={search}/>
        <div className="main"> 
          <div className="tabs">
            <div className={`tab ${showFav?'':'active-tabs'}`} onClick= {() => this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFav?'active-tabs':''}`}  onClick= {() => this.onChangeTab(true)}>Favourite</div>
          </div>
          <div className="list">
            {
              displayList.map((movie,index) =>(
                <MovieCard movie ={movie} 
                key={`movies-${index}`} 
                dispatch={this.props.store.dispatch}
                isMovieFavourite={this.isMovieFavourite(movie)}
                />
              ))
            }
          </div>
          <div>
            {displayList.length === 0 ? <div className="no-movies">NO Moives To Show </div> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
