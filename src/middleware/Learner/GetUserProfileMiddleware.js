// import axios from "axios";
// import {
//   GET_USER_PROFILE_REQUEST,
//   get_user_profile_failure,
//   get_user_profile_success,
// } from "../../actions/Learner/GetUpdateUserProfileAction";

// const fetchProfileData =({ dispatch }) =>  (next) =>  async (action) => {
//     if (action.type === GET_USER_PROFILE_REQUEST) {
//       try {
//         const response = await axios.get(`http://localhost:5199/lxp/view/learnerProfile/${action.payload}`);
//         if (response.status === 200 ) {

//           debugger;
//        const XX =    dispatch(get_user_profile_success(response.data.data));
//        console.log("xx", XX);



//         } else {
//           console.error("No data received from API");
//           debugger
//           dispatch(get_user_profile_failure(response.data.data));
//         }
//         // Dispatch success action with the response data
//         // Corrected: Removed ".data.data"
//       } catch (error) {
//         console.error("Error fetching data: ", error);

//         // Dispatch failure action with the error
//         dispatch(get_user_profile_failure(error));
//       }
//     }
//     return next(action);
//   };

// export default fetchProfileData;



// import axios from "axios";
// import {
//   GET_USER_PROFILE_REQUEST,
//   get_user_profile_failure,
//   get_user_profile_success,
// } from "../../actions/Learner/GetUpdateUserProfileAction";

// const fetchProfileData = ({ dispatch }) => (next) => async (action) => {
//   if (action.type === GET_USER_PROFILE_REQUEST) {
//     try {
//       // Make the API call
//       const response = await axios.get(`http://localhost:5199/lxp/view/learnerProfile/${action.payload}`);

//       // Check if the response is successful
//       if (response.status === 200) {
//         // Dispatch the success action with the received data
//         const XX = dispatch(get_user_profile_success(response.data.data));
//         console.log("xx", XX); // Log the result of the dispatch
//       } else {
//         // Log error and dispatch failure action if no data is received
//         console.error("No data received from API");
//         dispatch(get_user_profile_failure(response.data.data));
//       }
//     } catch (error) {
//       // Log and dispatch failure action in case of an error
//       console.error("Error fetching data: ", error);
//       dispatch(get_user_profile_failure(error));
//     }
//   }
//   // Pass the action to the next middleware
//   return next(action);
// };

// export default fetchProfileData;




// import axios from "axios";
// import {
//   GET_USER_PROFILE_REQUEST,
//   get_user_profile_failure,
//   get_user_profile_success,
// } from "../../actions/Learner/GetUpdateUserProfileAction";

// const fetchProfileData = ({ dispatch }) => (next) => async (action) => {
//   if (action.type === GET_USER_PROFILE_REQUEST) {
//     try {
//       debugger;
//       console.log("learner" , action.payload);
//       const response = await axios.get(`http://localhost:5199/lxp/view/learnerProfile/${action.payload}`);

//       console.log("response",response);
//       if (response.status === 200) {
//         // Dispatch the success action and log the action object



//         const actionReturned = dispatch(get_user_profile_success(response.data));
//         console.log("actionreturn", actionReturned);





//       } 
//       else {
//         console.error("No data received from API");
//         dispatch(get_user_profile_failure(response.data.data));
//       }
//     } 
//     catch (error) {
//       console.error("Error fetching data:", error);
//       dispatch(get_user_profile_failure(error));
//     }
//   }
//   return next(action);
// };

// export default fetchProfileData;







// import axios from "axios";
// import {
//   GET_USER_PROFILE_REQUEST,
//  getUserProfileFailure

// } from "../../actions/Learner/GetUpdateUserProfileAction";
// import { getUserProfileSuccess } from "../../actions/Learner/GetUpdateUserProfileAction";



// const fetchProfileData = ({ dispatch }) => (next) => async (action) => {
//    if (action.type === GET_USER_PROFILE_REQUEST) {
//     try{
//      console.log("learner", action.payload);



//     const response= await axios.get(`http://localhost:5199/lxp/view/learnerProfile/${action.payload}`)

//       //  .then(response => {
//        console.log("response", response.data.data);



//          if (response.data.statusCode === 200) {

//           console.log("responce inside",response.data.data);

//            // Dispatch the success action and log the action object

//            debugger;
//            dispatch(getUserProfileSuccess(response.data.data));   // not working 

//            console.log("actionreturn",dispatch(getUserProfileSuccess(response.data)) );
//          }

//         // else {
//         //   console.error("No data received from API");
//         //   // dispatch(get_user_profile_failure(response.data.data));
//         // }

//       }

//       catch(error){
//         console.error("Error fetching data:", error);
//         dispatch(getUserProfileFailure(error));
//       };


//   }
//   return next(action);
// };

// export default fetchProfileData;









import axios from "axios";
import { getUserProfileFailure, getUserProfileSuccess } from "../../actions/Learner/GetUpdateUserProfileAction";
import { GET_USER_PROFILE_REQUEST, GET_USER_PROFILE_SUCCESS } from "../../actions/Learner/GetUpdateUserProfileAction";



const fetchProfileData = ({ dispatch }) => (next) => async(action) => {
  //const dispatch = useDispatch();
  if (action.type === GET_USER_PROFILE_REQUEST) {
    
    
    try {
      console.log(" learner id" ,action.payload)
      const response = await axios.get(`http://localhost:5199/lxp/view/learnerProfile/${action.payload}`);

              console.log("response", response);

      if (response.data.statusCode === 200) {
        
        // console.log("inside" ,response);
        dispatch({type: GET_USER_PROFILE_SUCCESS,
                  payload: Promise.resolve(response)});  // not working
        console.log('dispatch', dispatch({type: GET_USER_PROFILE_SUCCESS,
          payload: Promise.resolve(response.data.data)}));
        console.log("action value", dispatch(getUserProfileSuccess(response.data.data)));
      } 
      
      
      else {
        console.error("No data received from API");
        // dispatch(getUserProfileFailure(response.data.data));
      }


    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch(getUserProfileFailure(error));
    }
 
 
  }

  return next(action);
};

export default fetchProfileData;
