const defaultState = {
  selectedPage: "exchange",
};

export const commonReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_PAGE":
      return { ...state, selectedPage: action.payload };

    default:
      return state;
  }
};

export const setPageAction = (payload) => ({ type: "SET_PAGE", payload });
