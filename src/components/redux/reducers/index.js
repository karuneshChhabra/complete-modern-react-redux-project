import {
  ADD_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  LOADING_IN_PROGRESS,
  LOADING_SUCCESS,
  LOADING_FAILED,
} from "../constant";

export const isLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case LOADING_SUCCESS:
      return false;
    case LOADING_FAILED:
    case LOADING_IN_PROGRESS:
      return true;
    default:
      return state;
  }
};

export const todoReducers = (state = [], action) => {
    console.log(state);
    console.log(action.payload);

  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        completed: false,
        title: action.payload,
      });
    case REMOVE_TODO:
      return state.filter((value) => value.title !== action.payload);
    case COMPLETE_TODO:
      return state.filter((value) => {
        if (value.title === action.payload) {
          value.completed = !value.completed;
        }
        return value;
      });
    case LOADING_SUCCESS:
      return action.payload.res;
      
    //   state.concat({
    //     isComplete: false,
    //     values: action.payload.res,
    //   });
    case LOADING_FAILED:
    case LOADING_IN_PROGRESS:
      return [];

    default:
      return state;
  }
};
