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
function AddUser()
{
  const [data, setData] = useState({
    "deptCode" : "",
    "loginId" : "",
    "name" : "",
    "isOnboarded" : "",
    "isActive" : ""
  });

  const handleChange = (event) =>
  {
    event.preventDefault(); // prevent the default action
    let value = event.target.value;
    let name = event.target.name;
  
    setData((prevalue) => {
      return {
        ...prevalue,   // Spread Operator               
        [name]: value
      }
    })
    
  }


  function handleSubmit(event)
  {
    event.preventDefault();

    
    fetch("http://127.0.0.1:5000/employees/",
      {method: 'POST',body: JSON.stringify(data), headers: {"Content-Type": "application/json; charset=UTF-8"}}
    )
    .then(
      (response) => 
        {console.log(response);}
    )

  }
    return(
        <>
        <Container fluid>
          <Row>
            <Col md="12">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Add New User</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md="12">
                        <Form.Group>
                          <label>LoginId</label>
                          <Form.Control
                            type="text"
                            name="loginId"
                            onChange={handleChange}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <Form.Group>
                          <label>Name</label>
                          <Form.Control
                            type="text"
                            name="name"
                            onChange={handleChange}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                          <Form.Group>
                              DeptID
                              <Form.Control
                              as="select"
                              custom
                              onChange={handleChange}
                              name="deptCode"
                              >
                                  <option value="it">it</option>
                                  <option value="eng">eng</option>
                                  <option value="hr">hr</option>
                                  <option value="mgt">mgt</option>
                                  <option value="fin">fin</option>
                                  <option value="log">log</option>
                              </Form.Control>
                          </Form.Group>
                      </Col>
                    </Row> 
                    <Row>
                      <Col md="12">
                        <Form.Group>
                          <label>Is the User Onboarded?</label>
                          <Form.Check 
                            type='radio'
                            id={`true-onboarded`}
                            label={`True`}
                            name="isOnboarded"
                            value="true"
                            onChange={handleChange}
                          />
                          <Form.Check 
                            type='radio'
                            id={`false-onboarded`}
                            label={`False`}
                            name="isOnboarded"
                            value="false"
                            onChange={handleChange}
                          />  
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <Form.Group>
                          <label>Is the user Active?</label>
                          <Form.Check 
                            type='radio'
                            id={`true-active`}
                            label={`True`}
                            name="isActive"
                            value="true"
                            onChange={handleChange}
                          />
                          <Form.Check 
                            type='radio'
                            id={`false-active`}
                            label={`False`}
                            name="isActive"
                            value="false"
                            onChange={handleChange}
                          />  
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
        <Row>
          
          <h1>The Data</h1>
          <p>DeptID : {data.deptCode}</p>
          <p>Login Id: {data.loginId}</p>
          <p>Name : {data.name}</p>
          <p>isOnboarded : {data.isOnboarded}</p>
          <p>isActive : {data.isActive}</p>
          
        </Row>
      </Container>
        </>
    );
}
export default AddUser;