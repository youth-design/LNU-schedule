import {
  FETCH_FACULTIES,
  FETCH_FACULTIES_SUCCESS,
  FETCH_FACULTIES_ERROR
} from "./constants";

const fetchFaculties = () => ({
  type: FETCH_FACULTIES
});

const fetchFacultiesSuccess = faculties => ({
  type: FETCH_FACULTIES_SUCCESS,
  faculties
});

const fetchFacultiesError = message => ({
  type: FETCH_FACULTIES_ERROR,
  message
});

export { fetchFaculties, fetchFacultiesSuccess, fetchFacultiesError };
