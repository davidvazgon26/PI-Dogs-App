import { FETCH_DOGS, SEARCH_DOGS, SORT } from "../actions";
import { ASCENDENTE } from "../../constantes/sort";

const initialState = {
    dogs: [],
    filteredDogs: []
}

export default function reducer (state = initialState, action){
    switch (action.type) {
        case FETCH_DOGS:
            return {
            ...state,
            dogs: action.payload,
            filteredDogs: action.payload
        }
        case SEARCH_DOGS:
            return {
            ...state,
            filteredDogs: action.payload
        }
        case SORT:
            let orderedDogs  = [...state.dogs] 
            orderedDogs = orderedDogs.sort((a,b)=>{
                if (a.name<b.name) {
                    return action.payload === ASCENDENTE ? -1 : 1;
                }
                if (a.name>b.name) {
                    return action.payload === ASCENDENTE ? 1: -1
                }
                return 0
            })
            return {
            ...state,
            filteredDogs: orderedDogs
        }
            
        default:
            return state
    }
}