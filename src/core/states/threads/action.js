import { getAllThreads } from "../../api/threadsApi";

const ActionType = {
  RECEIVE_THREADS: "RECEIVE_THREADS",
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: { threads },
  };
}

function asyncReceiveThreads() {
  return async (dispatch) => {
    try {
      const { data } = await getAllThreads();
      dispatch(receiveThreadsActionCreator(data.data.threads));
    } catch (error) {
      alert(error);
    }
  };
}

export { ActionType, receiveThreadsActionCreator, asyncReceiveThreads };
