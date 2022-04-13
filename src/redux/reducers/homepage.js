import { END_LOADING, SET_HOTELS, SET_REQUEST, START_LOADING } from "../contants";
// import { SET_LOCATION, SET_DAYS } from './../contants';

const initialState = {
  hotels: [],
  loading: true,
  favs: 4,
  // location: 'Moscow',
  // date: '2022-04-14',
  // days: 1,
  request: {
    location: 'Moscow',
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
    // case SET_LOCATION:
    //   return {
    //     ...state,
    //     location: payload,
    //   };
    // case SET_DATE:
    //   return {
    //     ...state,
    //     date: payload,
    //   };
    // case SET_DAYS:
    //   return {
    //     ...state,
    //     days: payload,
    //   };
    default: return state;
  }
};

export default homepage;