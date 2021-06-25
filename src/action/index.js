// {
//     type: "Please host your work on a private link",
//     movies: [m1,m2,m2]
// }

export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const UN_FAVOURITE = "UN_FAVOURITE";
export const SET_SHOW_FAV = "SET_SHOW_FAV";

export function addMovies (movies){
    return{
        type: ADD_MOVIES,
        movies
    }
} 

export function addFavourite (movie){
    return{
        type: ADD_FAVOURITE,
        movie
    }
} 

export function unFavourite (movie){
    return{
        type: UN_FAVOURITE,
        movie
    }
} 

export function setShowFavourite (val){
    return{
        type: SET_SHOW_FAV,
        val
    }
} 