import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import AllFormCanvas from "../components/AllFormCanvas";
import Hero from "../components/Hero.jsx";

const HomeScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <Container>
      <Row className="justify-content-start mt-5">
        {userInfo ? <AllFormCanvas /> : <AnonymizedResume />}
      </Row>
    </Container>
  );

  // return <AllFormCanvas>{userInfo ? <WeatherPage /> : <Hero />}</AllFormCanvas>;
};

export default HomeScreen;
