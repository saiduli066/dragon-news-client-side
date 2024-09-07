import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import RightSide from '../Shared/RightSide';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';


const NewsLayout = () => {
    return (
      <div>
        <Header />
        <Container>
          <Row>

            <Col lg={9}>
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

export default NewsLayout;