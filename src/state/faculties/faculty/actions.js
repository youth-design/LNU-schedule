import {
  SET_FACULTY,
  GET_FACULTY,
  GET_FACULTY_SUCCESS,
  GET_FACULTY_ERROR
} from "./constants";

const setFaculty = faculty => ({
  type: SET_FACULTY,
  faculty
});

const getFaculty = history => ({
  type: GET_FACULTY,
  history
});

const getFacultySuccess = faculty => ({
  type: GET_FACULTY_SUCCESS,
  faculty
});

const getFacultyError = () => ({
  type: GET_FACULTY_ERROR
});

export { setFaculty, getFaculty, getFacultySuccess, getFacultyError };
