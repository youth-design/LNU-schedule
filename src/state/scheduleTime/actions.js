import {
  FETCH_SCHEDULE_TIME,
  FETCH_SCHEDULE_TIME_SUCCESS,
  FETCH_SCHEDULE_TIME_ERROR
} from "./constants";

const fetchScheduleTime = () => ({
  type: FETCH_SCHEDULE_TIME
});

const fetchScheduleTimeSuccess = newScheduleTime => ({
  type: FETCH_SCHEDULE_TIME_SUCCESS,
  newScheduleTime
});

const fetchScheduleTimeError = message => ({
  type: FETCH_SCHEDULE_TIME_ERROR,
  message
});

export { fetchScheduleTime, fetchScheduleTimeSuccess, fetchScheduleTimeError };
