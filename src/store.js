import {createStore} from 'redux'
import { reducer } from './reducer'

const initialState = {
    movies: [],
    movie: [],
    catId: "",
    products: [],
    product: [],
    categories: [],
    category: [],
    basket_lines: 0,
    basket: []
}

export const store = createStore(reducer, initialState);