import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container } from "react-bootstrap";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <Container className="mb-5">
      <div className="text-center m-4">
        <img src={logo} alt="" />
        <p>
          <small>Journalism without fear and favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D,YYYY")}</p>
      </div>

      <div className="d-flex ">
        <Button variant="danger">Latest</Button>
        <Marquee speed={80} className="text-danger">
          I can be a React component, multiple React components, or just some
          text...
        </Marquee>
      </div>
      <NavBar></NavBar>
    </Container>
  );
};

export default Header;
