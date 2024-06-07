import { getDetailThread } from "../../api/threadsApi";

const ActionType = {
  RECEIVE_THREAD_DETAIL: "RECEIVE_THREAD_DETAIL",
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function asyncThreadDetail(threadId) {
  return async (dispatch) => {
    const { detailThread } = await getDetailThread(threadId);
    dispatch(receiveThreadDetailActionCreator(detailThread));
  };
}

export { ActionType, receiveThreadDetailActionCreator, asyncThreadDetail };
