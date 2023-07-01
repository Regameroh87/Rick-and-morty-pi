import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions"

const initialState = {
    myFavorites:[],
    allCharacters:[]
};

const rootReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return {
                myFavorites:[...state.myFavorites, payload],
                allCharacters:[...state.allCharacters, payload]
            }
        case REMOVE_FAV:
            let copy = state.allCharacters.filter((character) => {
            return parseInt(character.id) !== parseInt(payload);
                });
                return {
                  ...state,
                  myFavorites: copy,
                  allCharacters: copy,
                };
        /* case FILTER:
            return {
                    ...state,
                    myFavorites:state.allCharacters.filter((e) => {return e.gender === payload})
            } */
         case FILTER:
                let copy2 = [...state.allCharacters];
                let filterGender = copy2.filter((character) => {
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
