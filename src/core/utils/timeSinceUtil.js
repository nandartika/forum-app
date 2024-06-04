import moment from "moment";

function timeSinceUtil(date) {
  return moment(date).locale("de").fromNow();
}

export default timeSinceUtil;
