// import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { FaPen } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { FaCakeCandles } from "react-icons/fa6";
import Accordion from "react-bootstrap/Accordion";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";
import AlertDismissible from "../ui/alert";
import { FaPencilAlt } from "react-icons/fa";
import { Button, ButtonGroup, Form, Image } from "react-bootstrap";
import { FaComment } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function SocialMedia() {
  return (
    <>
      <Row className="mx-auto">
        {/* Column 1 */}
        <Col lg={3}>
          {/* card */}
          <Card className="mb-4">
            <Card.Body>
              <Card.Title className="my-2 h5 text-center">
                My Profile
              </Card.Title>
              <Container fluid className="m-auto" style={{ width: " 45%" }}>
                <Card.Img
                  src="./images/avatar2.png"
                  className="rounded-circle"
                />
              </Container>
              <hr />
              <Card.Text className="my-2 text-body-secondary ms-3">
                <p>
                  <span>
                    <FaPen />
                  </span>
                  <span className="ms-3">Designer, UI</span>
                </p>
                <p>
                  <span>
                    <IoHome />
                  </span>
                  <span className="ms-3">London, UK</span>
                </p>
                <p>
                  <span>
                    <FaCakeCandles />
                  </span>
                  <span className="ms-3"> April 1, 1988</span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Accordian */}
          <Card className="border-0 mb-4">
            <Accordion alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <AiOutlineLoading3Quarters className="me-2" />
                  My Group
                </Accordion.Header>
                <Accordion.Body>Some text..</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <BsFillCalendarEventFill className="me-2" />
                  My Events
                </Accordion.Header>
                <Accordion.Body>some other text..</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <BsPeopleFill className="me-2" />
                  My Photos
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col lg={6} className=" my-1">
                      <Image fluid src="./images/mountains.jpg" alt="" />
                    </Col>
                    <Col lg={6} className=" my-1">
                      <Image fluid src="./images/lights.jpg" alt="" />
                    </Col>
                    <Col lg={6} className=" my-1">
                      <Image fluid src="./images/forest.jpg" alt="" />
                    </Col>
                    <Col lg={6} className=" my-1">
                      <Image fluid src="./images/nature.jpg" alt="" />
                    </Col>
                    <Col lg={6} className=" my-1">
                      <Image fluid src="./images/snow.jpg" alt="" />
                    </Col>
                    <Col lg={6} className=" my-1">
                      <Image fluid src="./images/mountains.jpg" alt="" />
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card>

          {/*Badges  */}
          <Card className="mb-4">
            <Card.Body>
              <Card.Title className="mb-2 h5">Interests</Card.Title>
              <Card.Text>
                <Badge className="me-1" bg="secondary ">
                  News
                </Badge>
                <Badge className="me-1" bg="secondary ">
                  W3Schools{" "}
                </Badge>
                <Badge className="me-1" bg="secondary ">
                  Labels
                </Badge>
                <Badge className="me-1" bg="secondary ">
                  Games
                </Badge>
                <Badge className="me-1" bg="secondary ">
                  Friends
                </Badge>
                <Badge className="me-1" bg="secondary ">
                  Games
                </Badge>
                <Badge className="me-1" bg="secondary ">
                  Friends
                </Badge>
                <Badge className="me-1" bg="secondary ">
                  Food
                </Badge>
                <Badge className="me-1" bg="secondary ">
                  Design
                </Badge>
                <Badge className="me-1" bg="secondary ">
                  Art
                </Badge>
                <Badge className="me-1" bg="secondary ">
                  Photos
                </Badge>
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Alert */}
          <AlertDismissible />
        </Col>

        {/* Column2 */}
        <Col lg={7}>
          {/* Post anything  */}
          <Card className="mb-4">
            <Card.Body className="ms-2">
              <Card.Text className="text-secondary">
                <p>Social Media template by w3.css</p>
                <Form>
                  <input
                    type="text"
                    className="form-contole w-100 mb-3"
                    value="Status: Feeling Blue"
                  />
                  <Button variant="secondary" className="mt-3> ">
                    <FaPencilAlt className="me-2" />
                    <span>Post</span>
                  </Button>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>

          {/* First Post */}
          <Card className="mb-4">
            <Card.Body className="ms-2">
              <Card.Title className="mb-3 d-flex justify-content-between">
                <p>
                  <span>
                    <Image
                      src="./images/avatar2.png"
                      fluid
                      className="me-2  rounded-circle"
                      width="10%"
                      alt="..."
                    />
                  </span>
                  <span>John Doe</span>
                </p>
                <p className="text-secondary">1 min </p>
              </Card.Title>
              <hr />
              <Card.Text>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <Row className="text-center">
                  <Col lg={6} className="my-1">
                    <Image fluid src="./images/mountains.jpg" alt="" />
                  </Col>
                  <Col lg={6} className="my-1">
                    <Image fluid src="./images/lights.jpg" alt="" />
                  </Col>
                </Row>

                <Button variant="secondary" className="mt-3 me-2">
                  <AiFillLike className="me-1" />
                  <span>Like</span>
                </Button>
                <Button variant="secondary" className="mt-3">
                  <FaComment className="me-1" />
                  <span>Comment</span>
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Second Post  */}
          <Card className="card mb-4">
            <Card.Body className=" ms-2">
              <Card.Title className="mb-3 d-flex justify-content-between">
                <p>
                  <span>
                    <Image
                      src="./images/avatar3.png"
                      fluid
                      className="me-2  rounded-circle"
                      width="10%"
                      alt="..."
                    />
                  </span>
                  <span>Jane Doe</span>
                </p>
                <p className="text-secondary">1 min </p>
              </Card.Title>
              <hr />
              <Card.Text>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Third Post */}
          <Card className="mb-4">
            <Card.Body className="ms-2">
              <Card.Title className="mb-3 d-flex justify-content-between">
                <p>
                  <span>
                    <Image
                      src="./images/avatar6.png"
                      fluid
                      className="me-2  rounded-circle"
                      width="10%"
                      alt="..."
                    />
                  </span>
                  <span>Sera Doe</span>
                </p>
                <p className="text-secondary">47 min </p>
              </Card.Title>
              <hr />
              <Card.Text>
                <p>Have you seen this?</p>

                <div className=" my-2 text-center">
                  <Image fluid src="./images/nature.jpg" alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <Button variant="secondary" className="mt-3 me-2">
                  <AiFillLike className="me-1" />
                  <span>Like</span>
                </Button>
                <Button variant="secondary" className="mt-3">
                  <FaComment className="me-1" />
                  <span>Comment</span>
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={2}>
        {/* Upcoming Events:*/}
        <Card className="mb-4">
            <Card.Body>
                <Card.Title className="my-2 h6 text-center">
                Upcoming Events:
                </Card.Title>
                <Image fluid src="./images/lights.jpg" alt=".."/>
                <Card.Text className="text-center my-2">
                <p>Holiday</p>
                <p>Friday 15:00</p>
                <Button variant='outline-secondary' className="w-100">INFO</Button>
                </Card.Text>
            </Card.Body>
        </Card>
        
        {/*  Friend Request*/}
        <Card className="mb-4">
            <Card.Body className="text-center">
                <Card.Title className="my-2 h6 text-center">
                Friend Request:
                </Card.Title>
                <Image fluid src="./images/avatar5.png" alt=".."/>
                <Card.Text className="text-center my-2">
                <p>Jane Doe</p>
                <ButtonGroup aria-label="Basic example" className="w-100">
                <Button variant='outline-success' ><FaCheck /></Button>
                <Button variant='outline-danger' ><RiDeleteBin5Line /></Button>
                </ButtonGroup>
                </Card.Text>
            </Card.Body>
        </Card>
    
        {/* ADS */}
        <Card className="mb-4">
            <Card.Title className="text-center p-5">
                ADS
            </Card.Title>
        </Card>

        {/* REACT BOOTSTRAP */}
        <Card>
            <Card.Title className="text-center p-5">
                <Image fluid src="./images/image.png"/>
            </Card.Title>
        </Card>
        </Col>
      </Row>
    </>
  );
}
