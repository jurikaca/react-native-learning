import {
  ADD_PLACE,
  DELETE_PLACE
} from "../actions/actionTypes";

const initialState = {
  places: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: [{
            key: Math.random(),
            name: action.place.name,
            description: action.place.description,
            numLikes: action.place.numLikes,
            numComments: action.place.numComments,
            image: action.place.image,
            location: action.place.location
        }].concat(state.places)
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.placeKey;
        })
      };
    default:
      return state;
  }
};

export default reducer;
