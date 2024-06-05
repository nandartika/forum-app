import { getAllUsers } from "../../api/usersApi";

const ActionType = {
  RECEIVE_USERS: "RECEIVE_USERS",
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
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

export { ActionType, receiveUsersActionCreator, asyncReceiveUsers };
