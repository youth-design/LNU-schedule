import {
  FETCH_SCHEDULE,
  FETCH_SCHEDULE_SUCCESS,
  FETCH_SCHEDULE_ERROR,
  FETCH_SCHEDULE_FROM_CACHE,
  FETCH_SCHEDULE_FROM_CACHE_SUCCESS,
  FETCH_SCHEDULE_FROM_CACHE_ERROR,
  RECONNECT,
  RECONNECT_SUCCESS,
  RECONNECT_ERROR
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

const fetchScheduleFromCache = groupToFetch => ({
  type: FETCH_SCHEDULE_FROM_CACHE,
  groupToFetch
});

const fetchScheduleFromCacheSuccess = newSchedule => ({
  type: FETCH_SCHEDULE_FROM_CACHE_SUCCESS,
  newSchedule
});

const fetchScheduleFromCacheError = () => ({
  type: FETCH_SCHEDULE_FROM_CACHE_ERROR
});

const reconnect = () => ({
  type: RECONNECT
});

const reconnectSuccess = () => ({
  type: RECONNECT_SUCCESS
});

const reconnectError = () => ({
  type: RECONNECT_ERROR
});

export {
  fetchSchedule,
  fetchScheduleSuccess,
  fetchScheduleError,
  fetchScheduleFromCache,
  fetchScheduleFromCacheSuccess,
  fetchScheduleFromCacheError,
  reconnect,
  reconnectSuccess,
  reconnectError
};
