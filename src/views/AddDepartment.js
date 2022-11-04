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
function AddDepartment()
{
  const [alertmessage, setalertMessage] = useState("");
  const [data, setData] = useState({
    "deptId": "",
    "deptCode": "",
    "deptName": "",
  });

  const handleChange = (event) =>
  {
    event.preventDefault(); // prevent the default action
    let value = event.target.value;
    let name = event.target.name;
  
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

    
    fetch("http://94.237.57.185:5000/department/",
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
                  <Card.Title as="h4">Add New Department</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md="12">
                        <Form.Group>
                          <label>Department Id</label>
                          <Form.Control
                            type="text"
                            name="deptId"
                            onChange={handleChange}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <Form.Group>
                          <label>Department Code</label>
                          <Form.Control
                            type="text"
                            name="deptCode"
                            onChange={handleChange}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row> 
                    <Row>
                      <Col md="12">
                        <Form.Group>
                          <label>Department Name</label>
                          <Form.Control
                            type="text"
                            name="deptName"
                            onChange={handleChange}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>                      
                    <Button
                      className="btn-fill pull-right"
                      type="submit"
                      variant="info"
                    >
                      Add Department
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
export default AddDepartment;