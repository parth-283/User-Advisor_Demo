let initialState = {
  user: [],
};

const handleUserData = (state = initialState, action) => {
  switch (action.type) {
    case "ADDDATA":
      return { ...state, user: [...state?.user, action.payload] };
    case "EDITDATA":
      let editData = state?.user?.map((item) => {
        if (item?.id == action?.payload?._id) {
          item.status = action?.payload?.status;
          {
            action?.payload?.status === "Re-Request"
              ? (item.messages = action?.payload?.messages)
              : action?.payload?.status == "Accept"
              ? (item.messages = "User Accepted ")
              : (item.messages = "User Rejected ");
          }
        }
        return item;
      });
      return {
        ...state,
        user: editData,
      };

    case "UPDATEUSERDATA":
      let updateData = state?.user?.map((item) => {
        if (item?.id == action?.payload?.id) {
          item.email = action?.payload?.email;
          item.mobile = action?.payload?.mobile;
          item.name = action?.payload?.name;
          item.messages = "";
          item.status = "";
        }
        return item;
      });
      return {
        ...state,
        user: updateData,
      };
    default:
      return state;
  }
};
export default handleUserData;
