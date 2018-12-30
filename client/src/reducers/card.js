import axios from "axios";

const CARD = "CARD";
const ADD_CARD = "ADD_CARD";
const UPDATE_CARD = "UPDATE_CARD";
const DELETE_CARD = "DELETE_CARD";

export const getCards = id => {
  return dispatch => {
    axios
      .get(`/api/categories/${id}/cards`)
      .then(res => dispatch({ type: CARD, cards: res.data }));
  };
};

export const addCard = (card, id) => {
  return dispatch => {
    axios
      .post(`/api/categories/${id}/cards`, { card })
      .then(res => dispatch({ type: ADD_CARD, card: res.data }));
  };
};

export const deleteCard = (categoryId, id) => {
  return dispatch => {
    axios
      .delete(`/api/categories/${categoryId}/cards/${id}`)
      .then(() => dispatch({ type: DELETE_CARD, id }));
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case CARD:
      return action.cards;
    case ADD_CARD:
      return [action.card, ...state];
    case UPDATE_CARD:
      return state.map(c => {
        if (c.id === action.card.id) return action.card;
        return c;
      });
    case DELETE_CARD:
      return state.filter(c => c.id !== action.id);
    default:
      return state;
  }
};
