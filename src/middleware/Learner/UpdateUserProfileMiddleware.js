import axios from "axios";
// import {
//   PUT_USER_PROFILE_REQUEST,
//   put_user_profile_success,
//   put_user_profile_failure,
//   get_user_profile_failure,
//   get_user_profile_success,
// } from "../actions/Learner/UpdateUserProfileAction";

import {
  GET_USER_PROFILE_REQUEST,
  PUT_USER_PROFILE_REQUEST,
  get_user_profile_failure,
  get_user_profile_success,
  put_user_profile_failure,
  put_user_profile_success,
} from "../../actions/Learner/UpdateUserProfileAction";

///get api
// export const fetchUserData = async (LearnerId) => {
// try {
//   const response = await axios.get(
//     `${API_BASE_URL}/view/learnerProfile/${LearnerId}`
//   );
//   // console.log(response.data.data);
//   return response.data.data;
// } catch (error) {
//   console.error("Error fetching data: ", error);
// }
// };

//  export const fetchUserData = ({dispatch}) => (next) => async (action) =>{
//   if (action.type === get_user_porfile_request){
//     try {
//       console.log("action api", action.payload.LearnerId);

//       const response = await axios.get(
//         `${API_BASE_URL}/view/learnerProfile/${LearnerId}`
//       );
//       // console.log(response.data.data);
//       return response.data.data;
//     } catch (error) {
//       console.error("Error fetching data: ", error);
//     }

//   }
// }

export const updateUserData =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type === PUT_USER_PROFILE_REQUEST) {
      try {
        // console.log("action api", action.payload.LearnerId);
        // console.log("action api pressing button", action.payload.editInfo);
        // Make the HTTP request with formData and the appropriate headers
        const response = await axios.put(
          `http://localhost:5199/lxp/learner/updateProfile`,
          action.payload.editInfo,
          {
            headers: {
              "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
            },
          }
        );

        console.log("api", response.data);
        // return response.data;
        dispatch(put_user_profile_success(response.data));
      } catch (error) {
        console.error("Error updating status: ", error);
        dispatch(put_user_profile_failure(error));
      }
    }
    return next(action);
  };

// export { updateUserData, fetchProfileData };
