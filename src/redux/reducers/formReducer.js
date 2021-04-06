const initialState = {
  name: "",
  password: "",
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NAME_INPUT":
      return {
        ...state,
        name: action.payload,
      };
    case "PASSWORD_INPUT":
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
