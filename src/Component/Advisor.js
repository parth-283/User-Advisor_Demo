import React, { useState } from "react";
import { Button, Card, Form, InputGroup, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EditUserData } from "../actions";
import "../Style/Advisor.css";

function Advisor() {
  const [show, setShow] = useState(false);
  const [reRequest, setReRequest] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setReRequest({ ...reRequest, _id: id });
    setShow(true);
  };

  const userData = useSelector((state) => state.handleUserData.user);

  const handleSelectAdvisorStatus = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    setReRequest(
      key === "status" && value === "Re-Request"
        ? { ...reRequest, [key]: value }
        : { ...reRequest, [key]: value }
    );
  };

  const handleAdvisorMessages = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setReRequest({
      ...reRequest,
      ["messages"]: { ...reRequest.messages, [name]: value },
    });
  };

  const handleAdvisorChenge = (e) => {
    dispatch(EditUserData(reRequest));
    handleClose();
    {
      reRequest?.status == "Re-Request" &&
        navigate("/user", { state: reRequest?._id });
    }
  };

  return (
    <div>
      <div>
        <label className="advisor-heading">User's Data</label>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Mobile</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
            <th scope="col">Activity</th>
          </tr>
        </thead>
        <tbody>
          {userData?.reverse().map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <th>{item?.id}</th>
              <td>{item?.name}</td>
              <td>{item?.mobile}</td>
              <td>{item?.email}</td>
              <td
                style={
                  item?.status == "Accept"
                    ? { color: "green" }
                    : item?.status == "Re-Request"
                    ? { color: "yellow" }
                    : { color: "red" }
                }
              >
                {item?.status}
              </td>
              <td>
                <button
                  className="btn btn-advisor"
                  type="button"
                  onClick={() => handleShow(item?.id)}
                >
                  view
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select
            onChange={(e) => handleSelectAdvisorStatus(e)}
            aria-label="Default select example"
            name="status"
          >
            <option>Select Status</option>
            <option value="Accept">Accept</option>
            <option value="Rejected">Rejected</option>
            <option value="Re-Request">Re-Request</option>
          </Form.Select>
          {reRequest?.status == "Re-Request" ? (
            <Card>
              <form name="messages">
                <InputGroup
                  className="mb-3"
                  onChange={(e) => handleAdvisorMessages(e)}
                >
                  <InputGroup.Checkbox
                    aria-label="Checkbox for following text input"
                    value="Enter Valid Name"
                    name="name"
                  />
                  <Form.Control
                    aria-label="Text input with checkbox"
                    value="Enter Valid Name"
                  />
                </InputGroup>
                <InputGroup
                  className="mb-3"
                  onChange={(e) => handleAdvisorMessages(e)}
                >
                  <InputGroup.Checkbox
                    aria-label="Checkbox for following text input"
                    value="Enter Valid Mobile"
                    name="mobile"
                  />
                  <Form.Control
                    aria-label="Text input with checkbox"
                    value="Enter Valid Mobile"
                  />
                </InputGroup>
                <InputGroup
                  className="mb-3"
                  onChange={(e) => handleAdvisorMessages(e)}
                >
                  <InputGroup.Checkbox
                    aria-label="Checkbox for following text input"
                    value="Enter Valid Email"
                    name="email"
                  />
                  <Form.Control
                    aria-label="Text input with checkbox"
                    value="Enter Valid Email"
                  />
                </InputGroup>
              </form>
            </Card>
          ) : (
            <div></div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={(e) => handleAdvisorChenge(e)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <div style={{ display: "flex", justifyContent: "end", margin: "0 1rem" }}>
        <button style={{ width: "9%" }} onClick={() => navigate("/user")}>
          User
        </button>
      </div>
    </div>
  );
}

export default Advisor;
