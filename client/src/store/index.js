import {applyMiddleware, createStore} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk))  //thunk nos sirve para crear acciones con promesas

export default store