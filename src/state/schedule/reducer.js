import {
  FETCH_SCHEDULE,
  FETCH_SCHEDULE_ERROR,
  FETCH_SCHEDULE_SUCCESS,
  FETCH_SCHEDULE_FROM_CACHE,
  FETCH_SCHEDULE_FROM_CACHE_ERROR,
  FETCH_SCHEDULE_FROM_CACHE_SUCCESS,
  RECONNECT_SUCCESS,
  RECONNECT,
  RECONNECT_ERROR
} from "./constants";

const initialState = {
  isFetching: false,
  isError: false,
  fetchFromCacheError: false,
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
    case FETCH_SCHEDULE_FROM_CACHE:
      return {
        ...state,
        isFetching: true,
        isError: false,
        fetchFromCacheError: false
      };
    case FETCH_SCHEDULE_FROM_CACHE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        fetchFromCacheError: false,
        schedule: action.newSchedule
      };
    case FETCH_SCHEDULE_FROM_CACHE_ERROR:
      console.log(state.fetchFromCacheError);
      return {
        ...state,
        isFetching: false,
        isError: true,
        fetchFromCacheError: true
      };
    case RECONNECT:
      return {
        ...state,
        isFetching: true,
        isError: false
      };
    case RECONNECT_SUCCESS:
      return {
        ...initialState
      };
    case RECONNECT_ERROR:
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
