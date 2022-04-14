import { END_LOADING, SET_FAV, SET_HOTELS, SET_REQUEST, START_LOADING } from "../contants";

const initialState = {
  hotels: [],
  loading: true,
  favs: [],
  request: {
    location: 'Санкт-Петербург',
    date: (new Date()).toISOString().split('T')[0],
    days: 3,
  },
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
    case SET_FAV:
      const hotel = payload
      const hotelIndex = state.favs.findIndex(hotel => hotel.hotelId === payload.hotelId)
      if (hotelIndex < 0) {
        const newItem = {
          ...hotel,
        }
        return { ...state, favs: [...state.favs, newItem] }
      } else {
        const filteredFavs = state.favs.filter(hotel => hotel.hotelId !== payload.hotelId)
        // console.log(filtered)
        return { ...state, favs: filteredFavs }
      }
    default: return state;
  }
};

export default homepage;