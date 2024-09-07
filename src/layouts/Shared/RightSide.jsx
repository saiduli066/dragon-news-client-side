import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import QZone from "./QZone";
import bgImg from "../../assets/bg.png";

const RightSide = () => {
  return (
    <div>
      <h2>Login with</h2>
      <Button variant="outline-secondary" className="mb-2">
        <FaGoogle /> Login with google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub /> Login with GIthub
      </Button>
      <div>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src={bgImg} alt="" />
      </div>
    </div>
  );
};

export default RightSide;
