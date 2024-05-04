import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "./SideBar";

const initialStyle = {
  opacity: 0,
  transition: "opacity 0.5s ease-in-out",
};

const finalStyle = {
  opacity: 1,
  transition: "opacity 0.5s ease-in-out",
};

const AllFormCanvas = ({ children }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const showSideBar = true;
  // const showSideBar = useSelector((state) => state.procObj.showSideBar);
  const [style, setStyle] = useState(initialStyle);

  //Use transition state for nicer effect
  useEffect(() => {
    const initiateTransition = () => {
      setStyle(finalStyle);
    };

    const frameId = requestAnimationFrame(() => {
      requestAnimationFrame(initiateTransition);
    });

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <Container className={`${showSideBar ? "shift-content" : "shifted"}`}>
      <Row className={"justify-content-start mt-5"}>
        {userInfo ? <SideBar /> : null}
      </Row>
    </Container>
  );
};

export default AllFormCanvas;
