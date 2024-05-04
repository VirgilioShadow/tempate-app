import React, { useState } from "react";
import { Button, Offcanvas, Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
// import "../assets/styles/datepicker.css";
// import { setDate } from "../slices/dateSlice";
import { LinkContainer } from "react-router-bootstrap";

const CustomOffCanvas = ({ name, ...props }) => {
  const [show, setShow] = useState(false);
  const selectedDate = useSelector((state) => state.date);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const handleDateChange = (date) => {
    dispatch(setDate(date.toISOString()));
  };

  const handleButtonClick = () => {
    navigate("/hero");
  };

  return (
    <>
      <Button variant="primary" onClick={toggleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        className="custom-offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Calendar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <DatePicker
            selected={selectedDate ? new Date(selectedDate) : new Date()}
            onChange={handleDateChange}
          />
          <div>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </div>

          <div>
            {/* <Link to="../screens/HomeScreen" style={{ width: "100%" }}>
              <Button variant="primary" block onClick={handleButtonClick}>
                Go to Hero Page
              </Button>
            </Link> */}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const SideBar = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const options = [
    {
      name: "Show SideBar",
      scroll: true,
      backdrop: true,
    },
  ];

  return (
    <>
      {options.map((props, idx) => (
        <CustomOffCanvas key={idx} {...props} />
      ))}
    </>
  );
};

export default SideBar;
