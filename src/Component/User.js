import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { AddUserData, UpdateUserData } from "../actions";
import "../Style/User.css";

function User() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const userData = useSelector((state) => state.handleUserData.user);

  const [userdata, setUserData] = useState({
    id: Math.random().toString().substr(9, 6),
    name: "",
    mobile: "",
    email: "",
    status: "",
    messages: "",
  });

  const filterData = userData?.filter((item) => item?.id === location?.state);

  useEffect(() => {
    if (filterData.length > 0) {
      setUserData(filterData[0]);
    }
  }, []);

  const handleAddUserData = (e) => {
    let key = e.target.name;
    let value = e.target.value;

    setUserData({ ...userdata, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (filterData.length > 0) {
      dispatch(UpdateUserData(userdata));
    } else {
      dispatch(AddUserData(userdata));
    }
    navigate("/advisor");
  };

  return (
    <div>
      <div>
        <form className="user-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="form-div">
            <label>Name</label>
            <label style={{ color: "red" }}>
              {filterData[0]?.messages?.name !== undefined &&
                filterData[0]?.messages?.name}
            </label>
            <input
              type="text"
              name="name"
              value={userdata.name}
              onChange={(e) => handleAddUserData(e)}
            />
          </div>

          <div className="form-div">
            <label>Mobile</label>
            <label style={{ color: "red" }}>
              {filterData[0]?.messages?.mobile !== undefined &&
                filterData[0]?.messages?.mobile}
            </label>
            <input
              type="number"
              name="mobile"
              value={userdata.mobile}
              onChange={(e) => handleAddUserData(e)}
            />
          </div>
          <div className="form-div">
            <label>Email</label>
            <label style={{ color: "red" }}>
              {filterData[0]?.messages?.email !== undefined &&
                filterData[0]?.messages?.email}
            </label>
            <input
              type="email"
              name="email"
              value={userdata.email}
              onChange={(e) => handleAddUserData(e)}
            />
          </div>
          <button type="submit">Save</button>
        </form>
        <div style={{display:"flex",justifyContent:"end",margin:"0 1rem"}}>
          <button style={{ width: "9%" }} onClick={() => navigate("/advisor")}>
            Advisor
          </button>
        </div>
      </div>
    </div>
  );
}

export default User;
