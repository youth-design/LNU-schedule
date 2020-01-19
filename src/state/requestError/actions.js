import { REQUEST_ERROR_SHOW, REQUEST_ERROR_HIDE } from "./constants";

const showRequestError = () => ({
  type: REQUEST_ERROR_SHOW
});

const hideRequestError = () => ({
  type: REQUEST_ERROR_HIDE
});

export { showRequestError, hideRequestError };
