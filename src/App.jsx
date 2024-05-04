import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Container, Row, Col } from "react-bootstrap";

import AngleTop from "./components/AppPageComponents/Public/AngleTop";
import Bottom from "./components/AppPageComponents/Public/Bottom";

import AlignmentGrid from "./components/AlignmentGrid";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col>
          {/* Main App Content Here */}
          <AngleTop />
          <Bottom />
          <AlignmentGrid />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
