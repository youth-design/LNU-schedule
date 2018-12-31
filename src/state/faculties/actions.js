import {
  GET_FACULTIES,
  GET_FACULTIES_SUCCESS,
  GET_FACULTIES_ERROR
} from "./constants";

const getFaculties = () => ({
  type: GET_FACULTIES
});

const getFacultiesSuccess = faculties => ({
  type: GET_FACULTIES_SUCCESS,
  faculties
});

const getFacultiesError = message => ({
  type: GET_FACULTIES_ERROR,
  message
});

export { getFaculties, getFacultiesSuccess, getFacultiesError };
