import axios from "axios";

const CATEGORY = "CATEGORY";
const ADD_CATEGORY = "ADD_CATEGORY";
const UPDATE_CATEGORY = "UPDATE_CATEGORY";
const DELETE_CATEGORY = "DELETE_CATEGORY";

export const getCategories = () => {
  return dispatch => {
    axios
      .get("/api/categories")
      .then(res => dispatch({ type: CATEGORY, categories: res.data }));
  };
};

export const addCategory = category => {
  return dispatch => {
    axios
      .post("/api/categories", { category })
      .then(res => dispatch({ type: ADD_CATEGORY, category: res.data }));
  };
};

export const deleteCategory = id => {
  return dispatch => {
    debugger;
    axios
      .delete(`/api/categories/${id}`)

      .then(() => dispatch({ type: DELETE_CATEGORY, id }));
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case CATEGORY:
      return action.categories;
    case ADD_CATEGORY:
      return [action.category, ...state];
    case UPDATE_CATEGORY:
      return state.map(c => {
        if (c.id === action.category.id) return action.category;
        return c;
      });
    case DELETE_CATEGORY:
      return state.filter(c => c.id !== action.id);
    default:
      return state;
  }
};
