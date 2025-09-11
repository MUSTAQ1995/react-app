export const fetchUserRequest = () => ({ type: "FETCH_USERS_REQUEST" });
export const fetchUserSuccess = (users) => ({ type: "FETCH_USERS_SUCCESS", payload: users  });
export const fetchUserFailed = (error) => ({ type: "FETCH_USERS_FAILURE", payload: error });

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_USERS_REQUEST" });
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      dispatch(fetchUserSuccess(data));
    } catch (error) {
      dispatch(fetchUserFailed(error.message));
    }
  };
};
