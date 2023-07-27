import axios from "axios"
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addFav = (character) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.post(`http://localhost:3001/rickandmorty/fav`, character)
            return dispatch({
                type: 'ADD_FAV',
                payload: data,
              })
        } catch (error) {
            window.alert(error.message)
        }
    }
};

export const removeFav = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
            return dispatch ({
                type: 'REMOVE_FAV',
                payload: data,
            })
        } catch (error) {
            window.alert(error.message)
        }
    }
};

export const filterCard = (gender) => {
    return {
        type: FILTER,
        payload:gender
    }
}

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload:order
    }
}