export const AddUserData = (Data) => {
  return {
    type: "ADDDATA",
    payload: Data,
  };
};

export const EditUserData = (Data) => {
  return {
    type: "EDITDATA",
    payload: Data
  };
};

export const UpdateUserData = (Data) => {
  return {
    type: "UPDATEUSERDATA",
    payload: Data
  };
};


export const AddListText = (List) => {
  return {
    type: "Listing",
    payload: List,
  };
};

export const DeleteListText = (id) => {
  return {
    type: "DeleteListing",
    payload: id,
  };
};

export const EditListText = (id) => {
  return {
    type: "EditListing",
    payload: id,
  };
};
