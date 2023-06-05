export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER_CARDS = "FILTER_CARDS";
export const ORDER_CARDS = "ORDER_CARDS";

export const addFav = (character) => ({
  type: ADD_FAV,
  payload: character,
});
export const removeFav = (id) => ({
  type: REMOVE_FAV,
  payload: id,
});
export const filterCards = (gender) => {
  return {
    type: FILTER_CARDS,
    payload: gender,
  };
};
export const orderCards = (order) => {
  return {
    type: ORDER_CARDS,
    payload: order,
  };
};
