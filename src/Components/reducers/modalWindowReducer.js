const SET_ACTIVE = "SET_ACTIVE";

const defaultState = {
  isActive: false,
};

export default function modalWindowReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_ACTIVE:
      if (!state.isActive) {
        return {
          ...state,
          isActive: true,
        };
      } else {
        return {
          ...state,
          isActive: false,
        };
      }

    default:
      return state;
  }
}

export const setActive = () => ({ type: SET_ACTIVE });
