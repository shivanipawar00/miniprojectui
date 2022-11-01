import React, { useState, useEffect }  from "react";
import axios from "axios";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { CardFooter } from "reactstrap";
function RemoveUser()
{
    const [loginId, setloginId] = useState("");

    function handleChange(event)
    {
      event.preventDefault();
      let value = event.target.value;
      setloginId(value);
    }

    function handleSubmit(event)
    {
      event.preventDefault();
      fetch( 
        "http://127.0.0.1:5000/employees/",
        {method: 'DELETE',body: JSON.stringify({"loginId" : loginId}), headers: {"Content-Type": "application/json; charset=UTF-8"}})
      .then(
        (response) => {console.log(response);})
    }
    
    return(
        <>
        <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Remove User</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>LoginId</label>
                        <Form.Control
                          name="loginId"
                          onChange={handleChange}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Add User
                  </Button>
                  <div className="clearfix"></div>
                  
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
        </>
    );
}
export default RemoveUser;