import { combineReducers } from "redux";
import { ADD_MOVIES, ADD_FAVOURITE, UN_FAVOURITE, SET_SHOW_FAV, ADD_MOVIES_TO_LIST, ADD_SEARCH_RESULT } from "../action";


const initialMoviesState = {
    list: [],
    favourite: [],
    showFav: false
}
export function movies(state = initialMoviesState, action){

    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_FAVOURITE:
            return {
                ...state,
                favourite: [action.movie, ...state.favourite]
            }
        case UN_FAVOURITE:
            return {
                ...state,
                favourite: state.favourite.filter(item => item !== action.movie)
            }
        case SET_SHOW_FAV:
            return {
                ...state,
                showFav : action.val
            }
        case ADD_MOVIES_TO_LIST:
            return {
                ...state,
                list: [action.movie, ...state.list]
            }
        default:
            return state;
    }
}
const initialSearchStat = {
    result: {},
    showSearchResult:false
}

export function search (state = initialSearchStat, action){
    switch(action.type){
        case ADD_SEARCH_RESULT:
            return{
                ...state,
                result: action.movie, 
                showSearchResult: true
            }
            case ADD_MOVIES_TO_LIST:
                return {
                    ...state,
                    showSearchResult:false
                }
        default:
            return state;
    }
}

// const initialRootState = {
//     movies: initialMoviesState,
//     search: initialSearchStat
// }

// export default function rootReducer(state = initialRootState, action){
//     return{
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }
// }

export default combineReducers({
    movies,
    search
});