import { getAllUsers, getProfile, login } from "../../api/usersApi";

const ActionType = {
  RECEIVE_USERS: "RECEIVE_USERS",
  SET_PROFILE: "SET_PROFILE",
  SET_IS_PRELOAD: "SET_IS_PRELOAD",
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: users,
  };
}

function setProfileActionCreator(profile) {
  return {
    type: ActionType.SET_PROFILE,
    payload: profile,
  };
}

function setIsPreloadActionCreator(isPrelaod) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: isPrelaod,
  };
}

function asyncReceiveUsers() {
  return async (dispatch) => {
    try {
      const { data } = await getAllUsers();
      dispatch(receiveUsersActionCreator(data.users));
    } catch (error) {
      alert(error);
    }
  };
}

function asyncLogin(email, password) {
  return async (dispatch) => {
    try {
      const request = { email, password };
      const { token } = await login(request);
      localStorage.setItem("token", token);

      const { user } = await getProfile();
      dispatch(setProfileActionCreator(user));
    } catch (error) {
      alert(error);
    }
  };
}

function asyncSetIsPreload() {
  return async (dispatch) => {
    try {
      const { user } = await getProfile();
      dispatch(setProfileActionCreator(user));
    } catch (error) {
      dispatch(setProfileActionCreator(null));
    } finally {
      dispatch(setIsPreloadActionCreator(false));
    }
  };
}

export {
  ActionType,
  receiveUsersActionCreator,
  setProfileActionCreator,
  asyncReceiveUsers,
  asyncLogin,
  asyncSetIsPreload,
};
