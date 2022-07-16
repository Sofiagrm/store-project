import {createStore} from 'redux'
import { reducer } from './reducer'

const initialState = {
    movies: [],
    movie: [],
    catId: "",
    products: [],
    product: []
}

export const store = createStore(reducer, initialState);