// import { loginRequest, loginSuccess, loginError } from '../../actions/loginAction';
// import Swal from "sweetalert2";
// import axios from "axios";
// import { baseUrl } from "../../middleware/api"; 


// export const loginUser = (userData) => {
//     return (dispatch) => {
//       dispatch(loginRequest());
//       axios.post(`${baseUrl}api/Login`, userData)
//         .then(response => {
//           console.log(response.data);
//           if(response.data.email === true && response.data.password === false) {
//             const Toast = Swal.mixin({
//               toast: true,
//               position: "top-end",
//               showConfirmButton: false,
//               timer: 1000,
//               timerProgressBar: true,
//               didOpen: (toast) => {
//                 toast.onmouseenter = Swal.stopTimer;
//                 toast.onmouseleave = Swal.resumeTimer;
//               }
//             });
//             Toast.fire({
//               icon: "error",
//               title: "Invalid Password"
//             });
//           } else if(response.data.email === false && response.data.password === false) {
//             const Toast = Swal.mixin({
//               toast: true,
//               position: "top-end",
//               showConfirmButton: false,
//               timer: 1000,
//               timerProgressBar: true,
//               didOpen: (toast) => {
//                 toast.onmouseenter = Swal.stopTimer;
//                 toast.onmouseleave = Swal.resumeTimer;
//               }
//             });
//             Toast.fire({
//               icon: "error",
//               title: "Invalid Email id"
//             });
//           } else if(response.data.email === true && response.data.password === true && response.data.role === "Admin") {
//             const Toast = Swal.mixin({
//               toast: true,
//               position: "top-end",
//               showConfirmButton: false,
//               timer: 1000,
//               timerProgressBar: true,
//               didOpen: (toast) => {
//                 toast.onmouseenter = Swal.stopTimer;
//                 toast.onmouseleave = Swal.resumeTimer;
//               }
//             });
//             Toast.fire({
//               icon: "success",
//               title: "Signed in successfully"
//             });
//           }
//           // Handle success
//           dispatch(loginSuccess(response.data));
//         })
//         .catch(error => {
//           // Handle failure
//           dispatch(loginError(error.response.data));
//           const Toast = Swal.mixin({
//             toast: true,
//             position: "top-end",
//             showConfirmButton: false,
//             timer: 3000,
//             timerProgressBar: true,
//             didOpen: (toast) => {
//               toast.onmouseenter = Swal.stopTimer;
//               toast.onmouseleave = Swal.resumeTimer;
//             }
//           });
//           Toast.fire({
//             icon: "error",
//             title: "Login failed"
//           });
//         });
//     };
// };


import { LOGIN_REQUEST, loginSuccessadmin, loginSuccessuser, loginError } from '../../actions/loginAction';
import axios from "axios";

import { baseUrl } from "../../middleware/api";


const loginUser = ({ dispatch }) => (next) => async (action) => {

  if (action.type === LOGIN_REQUEST) {
    try {
      const response = await axios.post(`${baseUrl}/api/Login`, action.payload);

      console.log('API Response:', response.data); // Log the response data 

      if (response.data.email === true && response.data.password === true && response.data.role === "Admin") {
        console.log("Admin", response.data)
        dispatch(loginSuccessadmin(response.data));
      }
      else if (response.data.email === true && response.data.password === true && response.data.role === "User") {
        console.log("user", response.data)
        dispatch(loginSuccessuser(response.data))
      }
      else {
        console.error('No data received from API');
      }
    } catch (error) {
      console.error('API Error:', error.message);
      dispatch(loginError(error.message));
    }
  }
  return next(action)
};


export default loginUser;

//   {
//   return async (dispatch) => {
//     dispatch(loginRequest());
//     try {
//       const response = await axios.post(`${baseUrl}api/Login`, userData);
//       console.log('Login API Response:', response.data);

//       // Assuming response.data has properties email, password, and role
//       if (response.data.email && response.data.password) {
//         if (response.data.role === "Admin") {
//           // Admin login success
//           // Handle admin login success if needed
//         } else {
//           // Non-admin login success
//           // Handle non-admin login success if needed
//         }
//         dispatch(loginSuccess(response.data));
//       } else {
//         // Login failed due to invalid credentials
//         dispatch(loginError('Invalid credentials'));
//       }
//     } catch (error) {
//       console.error('Login API Error:', error.message);
//       dispatch(loginError(error.message));
//     }
//   };
// };
