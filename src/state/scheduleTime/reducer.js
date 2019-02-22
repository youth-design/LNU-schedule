import {
  FETCH_SCHEDULE_TIME,
  FETCH_SCHEDULE_TIME_SUCCESS,
  FETCH_SCHEDULE_TIME_ERROR
} from "./constants";

const initialState = {
  isFetching: false,
  isError: false,
  scheduleTime: []
};

function ScheduleTimeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SCHEDULE_TIME:
      return {
        ...state,
        isFetching: true,
        isError: false
      };
    case FETCH_SCHEDULE_TIME_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        scheduleTime: action.newScheduleTime
      };
    case FETCH_SCHEDULE_TIME_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true
      };
    default:
      return state;
  }
}

export default ScheduleTimeReducer;
