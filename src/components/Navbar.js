import React from "react";
import { connect } from "react-redux";
import { addMoviesTolist, handleMovieSearch } from "../action";



class Navbar extends React.Component {
    constructor(props){
        super (props);
        this.state={
            searchText: ''
        }
    }

    handleAddToMovies = (movie) =>{
        this.props.dispatch(addMoviesTolist(movie));
        this.setState({
            showSearchResult: false
        });
    }

    handleSearch = () => {
        const {searchText} = this.state;
        this.props.dispatch(handleMovieSearch(searchText));
    };
    handleChange = (e) => {
        this.setState({
            searchText: e.target.value
        })
    };

    render(){
    const { result, showSearchResult } = this.props.search;
    console.log("showresult",result);
    return (
        <div className="nav"> 
        <div className="search-container">
            <input onChange={this.handleChange}></input>
            <button id="search-btn" onClick= {this.handleSearch}>search</button>
            <div>
            {showSearchResult && 
                <div className="search-results">
                    <div className="search-result">
                        <img src={result.Poster} alt="search-pic"></img>
                        <div children="movie-info">
                            <span>{result.Title}</span>
                            <button onClick= {() => this.handleAddToMovies(result)}>
                                Add to Movies
                            </button>
                        </div>
                    </div>
                </div>  
            }
            </div>
        </div>
        </div>
    );
    }
}

// class NavbarWrapper extends React.Component{
//     render(){
//         return(
//             <StoreContext.Consumer>
//                 {(store) => <Navbar dispatch={store.dispatch} search={this.props.search}/>}
//             </StoreContext.Consumer>
//         )
//     }
// }

function callBack (state){
    return {
        search: state.search
    };
}

const ConnectedNavbarComponent = connect(callBack)(Navbar);

export default ConnectedNavbarComponent;
