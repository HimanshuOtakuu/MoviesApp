import { ADD_MOVIES, ADD_FAVOURITE, UN_FAVOURITE, SET_SHOW_FAV } from "../action";


const initisalStoreState = {
    list: [],
    favourite: [],
    showFav: false
}
export default function movies(state = initisalStoreState, action){

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
        default:
            return state;
    }
}
