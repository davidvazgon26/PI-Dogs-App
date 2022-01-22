import axios from 'axios'
export const FETCH_DOGS = 'FECH_DOGS'
export const SEARCH_DOGS = 'SEARCH_DOGS'
export const SORT = 'SORT'

export function fetchDogs(){
    return function(dispatch){
        axios.get('http://localhost:3001/dogs')
        .then((dogs)=>{
            dispatch({   //en lugar de retornar el objeto hago el dispatch con la librerira de readux thunk
                type: FETCH_DOGS,
                payload: dogs.data
            })
        })
        .catch ((error)=>{
            console.error(error)
        })
    }
}

export function searchDogs(search){
    return function(dispatch){
        axios.get('http://localhost:3001/dogs?name='+ search)
        .then((dogs)=>{
            dispatch({   //en lugar de retornar el objeto hago el dispatch con la librerira de readux thunk
                type: SEARCH_DOGS,
                payload: dogs.data
            })
        })
        .catch ((error)=>{
            console.error(error)
        })
    }
}

export function sort(order) {
    return {
        type: SORT,
        payload: order
    }
}

