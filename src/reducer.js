export function reducer(state, action){

    if ( action.type === 'MOVIES_LIST_PAGE'){
        return {
            movies: action.movie_list,
            catId: action.catId
        }
    } else if ( action.type === 'SET_MOVIE'){
        return {
            ...state,
            movie: [action.movie]
        }
    }
    else if ( action.type === 'PRODUCT_LIST_PAGE' ){
        return {
            products: action.product_list,
        }
    }
    return state;

}