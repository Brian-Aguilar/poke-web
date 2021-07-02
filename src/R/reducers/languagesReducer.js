const languagesReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_LANGUAGE":
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export default languagesReducer;
