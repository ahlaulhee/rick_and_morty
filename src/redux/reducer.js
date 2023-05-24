import { ADD_FAV, REMOVE_FAV } from "./actions";

const initialState = {
  favoriteCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        favoriteCharacters: [...state.favoriteCharacters, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        favoriteCharacters: state.favoriteCharacters.filter(
          (character) => character.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default reducer;
