import React from "react";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
import { Col, Container, Row } from "react-bootstrap";
import RightSide from "./Shared/RightSide";
import LeftSideNav from "./Shared/LeftSideNav";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg={3}>
            <LeftSideNav />
          </Col>

          <Col lg={6}>
            <Outlet />
          </Col>

          <Col lg={3}>
            <RightSide />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
