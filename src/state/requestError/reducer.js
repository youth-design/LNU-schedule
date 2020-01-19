import { REQUEST_ERROR_HIDE, REQUEST_ERROR_SHOW } from "./constants";

const INIT_STATE = {
  isShow: false
};
export default function requestErrorReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case REQUEST_ERROR_SHOW:
      return {
        ...state,
        isShow: true
      };
    case REQUEST_ERROR_HIDE:
      return {
        ...state,
        isShow: false
      };
    default:
      return state;
  }
}
