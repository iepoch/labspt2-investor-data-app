import axios from "axios";

// Export action types

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

// Action creator to get current account type

export const getAcct = acct => {
  return dispatch => {
    // Dispatch to reducer that current account type are being obtained from API
    dispatch({ type: FETCHING });
    axios
      .get(`https://pickemm.herokuapp.com/api/billing/${acct}`)
      .then(response => {
        console.log("TCL: response", response);
        // Dispatch to reducer that account type have been successfully obtained, pass API response as payload
        dispatch({
          type: SUCCESS,
          payload: response.data
        });
      })
      .catch(err => {
        // Dispatch to reducer that error has occurred, pass error message
        dispatch({
          type: ERROR,
          error: `The user's account type could not be obtained at this time.`
        });
      });
  };
};