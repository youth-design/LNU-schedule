import {
  FETCH_GROUPS,
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUPS_ERROR
} from "./constants";

const fetchGroups = collectionToFetch => ({
  type: FETCH_GROUPS,
  collectionToFetch
});

const fetchGroupsSuccess = groups => ({
  type: FETCH_GROUPS_SUCCESS,
  groups
});

const fetchGroupsError = message => ({
  type: FETCH_GROUPS_ERROR,
  message
});

export { fetchGroups, fetchGroupsSuccess, fetchGroupsError };
