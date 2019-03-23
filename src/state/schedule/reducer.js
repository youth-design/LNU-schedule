import {
  FETCH_SCHEDULE,
  FETCH_SCHEDULE_ERROR,
  FETCH_SCHEDULE_SUCCESS
} from "./constants";

const initialState = {
  isFetching: false,
  isError: false,
  schedule: []
};

function scheduleReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SCHEDULE:
      return {
        ...state,
        isFetching: true,
        isError: false
      };
    case FETCH_SCHEDULE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        schedule: action.newSchedule
      };
    case FETCH_SCHEDULE_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true
      };
    default:
      return state;
  }
}

export default scheduleReducer;
