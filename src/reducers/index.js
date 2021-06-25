import { ADD_MOVIES, ADD_FAVOURITE, UN_FAVOURITE } from "../action";


const initisalStoreState = {
    list: [],
    favourite: []
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
        default:
            return state;
    }
}
