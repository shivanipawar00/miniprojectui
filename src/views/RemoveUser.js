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
function RemoveUser()
{
    const [loginId, setloginId] = useState("");
    const [alertmessage, setalertMessage] = useState("");
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
        "http://127.0.0.1:5000/get_employee_by_login_id/"+loginId)
      .then(
        (response) => { 
          response.json()
          .then(
            (data) =>
            {
              if(data["status_code"] == 200)
              {
                fetch(
                  "http://127.0.0.1:5000/employees/"+data.employee_id)
                .then(
                  (res) => 
                  {
                    res.json()
                    .then(
                      (d) => 
                      {
                        if(d.status_code==200)
                        {
                          setalertMessage(<Alert key="success" variant="success">{d.message}</Alert>)
                        }
                        else
                        {
                          setalertMessage(<Alert key="danger" variant="danger">{data.message}</Alert>);
                        }
                      }
                    )
                  }
                )
              }
              else
              {
                setalertMessage(<Alert key="danger" variant="danger">{data.message}</Alert>);
              }
            }
          )
        }
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
                    Remove User
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