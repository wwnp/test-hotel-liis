import { END_LOADING, SET_HOTELS, SET_REQUEST, START_LOADING } from "../contants";

const initialState = {
  hotels: [],
  loading: true,
  favs: 4,
  request: {
    location: 'Санкт-Петербург',
    date: (new Date()).toISOString().split('T')[0],
    days: 3,
  }
};

const homepage = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_HOTELS:
      return {
        ...state,
        hotels: payload,
      };
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case END_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SET_REQUEST:
      return {
        ...state,
        request: payload,
      };
    default: return state;
  }
};

export default homepage;