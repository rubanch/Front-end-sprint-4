import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import courseReducer from "../reducers/courseReducer";
import apiMiddleware from "../middleware/apiMiddleware";
import ForgotPasswordreducer from "../reducers/ForgotPasswordReducer";
import userReducer from "../reducers/loginReducer";
import AllcourseReducer from "../reducers/AllcourseReducer";
import apiviewallcourse from "../middleware/apiviewallcourse";
import loginUser from "../middleware/Admin/apiLogin";
import apiDeletecourse from "../middleware/Admin/apiDeletecourse";
import DeletecourseReducer from "../reducers/Admin/DeletecourseReducer";
import UpdateCourse from "../middleware/Admin/apiUpdatecourse";
import courseupdateReducer from "../reducers/Admin/Updatecourse";
import AllLearnerReducer from "../reducers/AllLearnerReducer";
import apiViewAllLearners from "../middleware/apiViewAllLearners";
import ProfileCardReducer from "../reducers/Admin/IndividualLearnerReducer";
import GetProfileCard from "../middleware/Admin/apiIndividualLearners";
import ProfileCoursesReducer from "../reducers/Admin/ProfileCoursesReducers";
import GetProfileCourses from "../middleware/Admin/apiProfileCourses";
import LastEnrolledCourseReducer from "../reducers/Admin/LastEnrolledCourseReducer";
import LastEnrolledCourse from "../middleware/Admin/apiLastEnrolledCourse";
import EnableDisableCourseReducer from "../reducers/Admin/EnableDisbaleCourseReducer";
import EnableDisableCourse from "../middleware/Admin/apiEnableDisbaleCourse";
import fetchDataReducer from "../reducers/DashboardReducer";
import FetchdashboardData from "../middleware/apiDashboard";
import PasswordChangeReducer from "../reducers/Learner/PasswordChangeReducer";
import updatePasswordApi from "../../src/middleware/Learner/PasswordChangeApi";
import UpdateUserProfileReducer from "../../src/reducers/Learner/UpdateUserProfileReducer";
import GetUserProfileReducer from "../reducers/Learner/GetUserProfileReducer";
import fetchProfileData from "../middleware/Learner/GetUserProfileMiddleware";

import LearnerGetCourseReducer from "../reducers/Learner/LearnerGetCourseReducer";
import LearnerGetCourse from "../middleware/Learner/LearnerGetCourse";

import LearnerPostEnrollReducer from "../reducers/Learner/LearnerPostEnrollReducer";
import LearnerPostEnroll from "../middleware/Learner/LearnerPostEnroll";

const rootReducer = combineReducers({
  getuserprofile: GetUserProfileReducer,
  updateUserprofile: UpdateUserProfileReducer,
  forgotPassword: ForgotPasswordreducer,
  user: userReducer,
  course: courseReducer,
  allcourse: AllcourseReducer,
  deletecourse: DeletecourseReducer,
  updatecourse: courseupdateReducer,
  alllearner: AllLearnerReducer,
  profilecard: ProfileCardReducer,
  profilecourses: ProfileCoursesReducer,
  enrolledcourse: LastEnrolledCourseReducer,
  enabledisablecourse: EnableDisableCourseReducer,
  fetchdashboard: fetchDataReducer,
  fetchcourse: LearnerGetCourseReducer,
  enrolledCourses: LearnerPostEnrollReducer,
  passwordchangereducer: PasswordChangeReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    fetchProfileData,
    updatePasswordApi,
    apiMiddleware,
    apiviewallcourse,
    loginUser,
    apiDeletecourse,
    UpdateCourse,
    apiViewAllLearners,
    GetProfileCard,
    GetProfileCourses,
    LastEnrolledCourse,
    EnableDisableCourse,
    FetchdashboardData,
    LearnerGetCourse,
    LearnerPostEnroll
  )
);

export default store;
