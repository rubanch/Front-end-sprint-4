export const PUT_USER_PROFILE_REQUEST = "PUT_USER_PROFILE_REQUEST";
export const PUT_USER_PROFILE_SUCCESS = "PUT_USER_PROFILE_SUCCESS";
export const PUT_USER_PROFILE_FAILURE = "PUT_USER_PROFILE_FAILURE";

////////////////////////////////////////////////////

// export const GET_USER_PROFILE_REQUEST = "GET_USER_PROFILE_REQUEST";
// export const GET_USER_PROFILE_SUCCESS = "GET_USER_PROFILE_SUCCESS";
// export const GET_USER_PROFILE_FAILUTE = "GET_USER_PROFILE_FAILUTE";

////////////////////////////////////////////////////////////////////



export const put_user_profile_request = (LearnerId, editInfo) => ({
  type: PUT_USER_PROFILE_REQUEST,
  payload: { LearnerId, editInfo },
});

//console.log("updateaction",put_user_profile_request());

export const put_user_profile_success = (response) => ({
  type: PUT_USER_PROFILE_SUCCESS,
  payload: response,
});

export const put_user_profile_failure = (error) => ({
  type: PUT_USER_PROFILE_FAILURE,
  payload: error,
});

///////////////////////////////////////////////


// export const get_user_porfile_request = (LearnerId) => ({
//   type: GET_USER_PROFILE_REQUEST,
//   payload: LearnerId,
// });

// export const get_user_profile_success = (response) => ({
//   type: GET_USER_PROFILE_SUCCESS,
//   payload: response,
// });

// export const get_user_profile_failure = (error) => ({
//   type: GET_USER_PROFILE_FAILUTE,
//   payload: error,
// });
