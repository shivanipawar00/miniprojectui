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
  Alert
} from "react-bootstrap";
import { CardFooter } from "reactstrap";
function AddUser()
{
  const [alertmessage, setalertMessage] = useState("");
  const [data, setData] = useState({
    "deptCode": "",
    "loginId": "",
    "name": "",
    "onboardingDate": "",
    "isActive": "",
    "isBusinessAdmin": "",
  });

  const [deptCode,setDeptCode] = useState('');

  const handleChange = (event) =>
  {
    event.preventDefault(); // prevent the default action
    let value = event.target.value;
    let name = event.target.name;
    console.log(name, value)
    setData((prevalue) => {
      return {
        ...prevalue,   // Spread Operator               
        [name]: String(value)
      }
    })
    
  }


  function handleSubmit(event)
  {
    event.preventDefault();

    data.deptCode = deptCode
    fetch("http://94.237.57.185:5000/employees/",
      {method: 'POST',body: JSON.stringify(data), headers: {"Content-Type": "application/json; charset=UTF-8"}}
    )
    .then(
      (response) => { console.log(response); response.json().then((data)=> {console.log(data);
          if(data["status_code"] == 200)
          { 
            setalertMessage(<Alert key="success" variant="success">{data.message}</Alert>);
            
          }
        else
          {
            setalertMessage(<Alert key="danger" variant="danger">{data.message}</Alert>)
          } })}
    )

  }
  
    return(
        <>
        <Container fluid>
          <Row>
         <Col md="12">
        {alertmessage}
        </Col> 
        </Row>
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
                              DeptCode
                              <Form.Control
                              as="select"
                              custom
                              onChange={e => {
                                console.log("e.target.value", e.target.value);
                                setDeptCode(e.target.value);
                              }}
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
                        <Form.Group>
                          <Row>
                            <Col md="4">
                              <label>Employee Onboarding Date</label>
                            </Col>
                            <Col md="8">
                              <Form.Control 
                                name="onboardingDate"
                                onChange={handleChange} 
                                type="date"/>  
                            </Col>
                          </Row>
                        </Form.Group>
                    </Row>
                    <Row>
                      <Col md="12">
                        <Form.Group>
                          <Row>
                          <Col>
                          <label>Active User ?</label>
                          </Col>
                          <Col>
                          <Form.Check 
                            type='radio' 
                            label={`Yes`}
                            name="isActive"
                            value="true"
                            onChange={handleChange}
                          />
                          </Col>
                          <Col>
                          <Form.Check 
                            type='radio'
                            label={`No`}
                            name="isActive"
                            value="false"
                            onChange={handleChange}
                          /> 
                          </Col>
                           </Row>
                        </Form.Group>
                      </Col>
                    </Row>     
                    <Row>
                      <Col md="12">
                        <Form.Group>
                          <Row>
                            <Col>
                              <label>BUSINESS ADMIN User?</label>
                            </Col>
                            <Col>
                              <Form.Check 
                                type='radio'                                
                                label={`Yes`}
                                name="isBusinessAdmin"
                                value="true"
                                onChange={handleChange}
                              />
                            </Col>
                            <Col>
                              <Form.Check 
                                type='radio'
                                label={`No`}
                                name="isBusinessAdmin"
                                value="false"
                                onChange={handleChange}
                              /> 
                            </Col> 
                          </Row>
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
export default AddUser;