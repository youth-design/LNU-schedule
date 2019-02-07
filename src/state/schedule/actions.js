import {
  FETCH_SCHEDULE,
  FETCH_SCHEDULE_SUCCESS,
  FETCH_SCHEDULE_ERROR
} from "./constants";

const fetchSchedule = groupToFetch => ({
  type: FETCH_SCHEDULE,
  groupToFetch
});

const fetchScheduleSuccess = newSchedule => ({
  type: FETCH_SCHEDULE_SUCCESS,
  newSchedule
});

const fetchScheduleError = () => ({
  type: FETCH_SCHEDULE_ERROR
});

export { fetchSchedule, fetchScheduleSuccess, fetchScheduleError };
