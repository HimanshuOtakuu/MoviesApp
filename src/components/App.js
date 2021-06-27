import React from "react";
import { data } from "../data"
import {connect} from "react-redux"
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourite } from "../action";


class App extends React.Component{
  
  componentDidMount(){
    this.props.dispatch(addMovies (data));
  }

  isMovieFavourite = (movie) =>{
    
    const { movies } = this.props;
    
    const index = movies.favourite.indexOf(movie);
 
    if(index !== -1){
      return true;
    }
    return false;
  }

  onChangeTab = (val) =>{
    this.props.dispatch(setShowFavourite(val));
  }

  render(){
    const { movies, search } = this.props;
    console.log("search",search);
    const { list, favourite, showFav } = movies;
    const displayList=showFav?favourite:list;

    return (
      <div className="App">
        <Navbar search={search}/>
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
                dispatch={this.props.dispatch}
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

// class AppWrapper extends React.Component{
//   render(){
//     return(
//       <StoreContext.Consumer>
//         {(store) => <App store={store}/>}
//       </StoreContext.Consumer>
//     );
//   }
// }

function callBack(state){
  return({
    movies: state.movies,
    search: state.movies
  });
}

const connectedAppComponent = connect(callBack)(App);

export default connectedAppComponent;
