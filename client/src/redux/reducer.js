import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS } from "./actions";

const initialState = {
  allCharacters: [],
  favoriteCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      console.log(action.payload);
      return {
        ...state,
        favoriteCharacters: [...state.favoriteCharacters, action.payload],
        allCharacters: [...state.favoriteCharacters, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        favoriteCharacters: state.favoriteCharacters.filter(
          (character) => character.id !== action.payload
        ),
      };
    case FILTER_CARDS:
      if (action.payload === "All")
        return { ...state, favoriteCharacters: state.allCharacters };
      const allCharactersCopy = [...state.allCharacters];
      const filteredCharacters = allCharactersCopy.filter(
        (char) => char.gender === action.payload
      );
      return { ...state, favoriteCharacters: filteredCharacters };
    case ORDER_CARDS:
      let orderedCharacters = [];
      if (action.payload === "A") {
        orderedCharacters = state.allCharacters.sort((a, b) => a.id - b.id);
      } else if (action.payload === "D") {
        orderedCharacters = state.allCharacters.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        favoriteCharacters: orderedCharacters,
      };
    default:
      return state;
  }
};

export default reducer;
