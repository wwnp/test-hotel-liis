import { SET_TEST } from "../contants";

const initialState = {
  test: false,
};

const test = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TEST:
      return {
        ...state,
        test: true,
      };
    default: return state;
  }
};

export default test;