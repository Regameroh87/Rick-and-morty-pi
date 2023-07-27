import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions"

const initialState = {
    myFavorites:[],
    allCharacters:[]
};

const rootReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites:payload,
                allCharacters: payload
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites:payload,
                allCharacters: payload
            }
         case FILTER:
                let copyAllCharacters = [...state.allCharacters];
                let filterGender = copyAllCharacters.filter((character) => {
                  return character.gender === payload
                })
                return {
                  ...state,
                  myFavorites: filterGender
                };    
        case ORDER:
            return {
                    ...state,
                    myFavorites:state.myFavorites.sort((a,b) =>{return payload === "a" ? a.id - b.id :b.id - a.id})
            }
        default:
            return {... state}
    }

}

export default rootReducer
