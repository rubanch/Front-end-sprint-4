// import { enrollRequest, enrollSuccess, enrollFailure } from '../../actions/Learner/LearnerPostEnrollAction';

// export default function LearnerPostEnroll({ dispatch, getState }) {
//     return (next) => (action) => {
//         next(action);

//         if (action.type === enrollRequest().type) {
//             const { courseId } = action;
//            // const learnerId = "d7b792f7-9432-4bfa-ad51-33c07a974916"; // Hardcoded learner ID
//             const enrollmentEndpoint = "http://localhost:5199/lxp/enroll";
//             const request = {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     courseId: courseId,
//                     learnerId: 'd7b792f7-9432-4bfa-ad51-33c07a974916', // Use hardcoded learnerId
//                     enrollmentDate: new Date().toISOString(),
//                     enrollStatus: true,
//                     enrollRequestStatus: true,
//                 }),
//             };

//             fetch(enrollmentEndpoint, request)
//                 .then((response) => {
//                     if (response.ok) {
//                         return response.json().then((data) => {
//                             dispatch(enrollSuccess(courseId, learnerId)); // Include learnerId
//                             return data;
//                         });
//                     } else {
//                         return response.json().then((errorData) => {
//                             throw new Error(errorData.message || "Enrollment failed. Please try again later.");
//                         });
//                     }
//                 })
//                 .catch((error) => {
//                     console.error("Enrollment Error:", error);
//                     dispatch(enrollFailure(error));
//                 });
//         }
//     };
// }
































import { enrollRequest, enrollSuccess, enrollFailure } from '../../actions/Learner/LearnerPostEnrollAction';

export default function LearnerPostEnroll({ dispatch, getState }) {
    return (next) => (action) => {
        next(action);

        if (action.type === enrollRequest().type) {
            const { courseId, learnerId } = action;
            const enrollmentEndpoint = "http://localhost:5199/lxp/enroll";
            const request = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    courseId: courseId,
                    learnerId: 'd7b792f7-9432-4bfa-ad51-33c07a974916', // Use learnerId from action
                    enrollmentDate: new Date().toISOString(),
                    enrollStatus: true,
                    enrollRequestStatus: true,
                }),
            };

            
            fetch(enrollmentEndpoint, request)
                .then((response) => {
                    if (response.ok) {
                        return response.json().then((data) => {
                            dispatch(enrollSuccess(courseId, learnerId)); // Include learnerId
                            return data;
                        });
                    } else {
                        return response.text().then((errorText) => {
                            console.error("Server Error Response:", errorText); // Log the error response text
                            throw new Error(errorText || "Enrollment failed. Please try again later.");
                        });
                    }
                })
                .catch((error) => {
                    console.error("Enrollment Error:", error);
                    dispatch(enrollFailure(error));
                });
        }
    };
}