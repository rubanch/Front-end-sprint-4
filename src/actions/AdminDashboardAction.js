export const FETCH_COUNT_REQUEST = "FETCH_COUNT_REQUEST";
export const FETCH_COUNT_SUCCESS = "FETCH_COUNT_SUCCESS";
export const FETCH_COUNT_FAILURE = "FETCH_COUNT_FAILURE";

export const fetchCountRequest = () => ({
  type: FETCH_COUNT_REQUEST,
 
});

export const fetchCountSuccess = (data) => ({
  type: FETCH_COUNT_SUCCESS,
  payload: data,
});

export const fetchCountFailure = (error) => ({
  type: FETCH_COUNT_FAILURE,
  payload: error,
});
