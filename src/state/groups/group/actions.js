import {
  SET_GROUP,
  GET_GROUP,
  GET_GROUP_SUCCESS,
  GET_GROUP_ERROR
} from "./constants";

const setGroup = group => ({
  type: SET_GROUP,
  group
});

const getGroup = history => ({
  type: GET_GROUP,
  history
});

const getGroupSuccess = group => ({
  type: GET_GROUP_SUCCESS,
  group
});

const getGroupError = () => ({
  type: GET_GROUP_ERROR
});

export { setGroup, getGroup, getGroupSuccess, getGroupError };
