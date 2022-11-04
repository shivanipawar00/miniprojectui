

  import React, { useState, useEffect }  from "react";
import ChartistGraph from "react-chartist";
import { CDBIframe, CDBContainer } from 'cdbreact';
import { useHistory } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
// react-bootstrap components
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
} from "react-vis";
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
import '../../node_modules/react-vis/dist/style.css'

function Dashboard() {
  
  const [currentChartData, setCurrentChartData] = useState([]);
  const [departmentEmployee, setDepartmentEmployee] = useState([]);
  const history = useHistory();
  let generalComponent = '';
  useEffect(() => {
    const loadData = async () => {
      await getDepartmentUsers();
    };
    loadData();
  }, []);

  async function getDepartmentUsers(){
    let loginId = localStorage.getItem('loginId');
    await fetch("http://94.237.57.185:5000//department/get_all_employees/",
      {method: 'POST',body: JSON.stringify({"loginId":loginId}), headers: {"Content-Type": "application/json; charset=UTF-8"}}
    )
    .then(
      (response) => { console.log(response); response.json().then((data)=> {console.log(data);
          if(data["status_code"] == 500){
            setalertMessage(<Alert key="danger" variant="danger">{data.message}</Alert>)
          } 
          else{
            console.log("DATAAAAAAAAAA", data)
            setDepartmentEmployee(data).then(
              () => console.log("AFTER SAVINGGG",departmentEmployee)
            )
          }
        })}
    )
  }

  return (
    <>
      <Container fluid>
        {(() => {
          if (localStorage.getItem('deptCode') === 'it') {
            return (
              <div>
              <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Disk Space Usage</Card.Title>
                <p className="card-category">24 Hours performance</p>
              </Card.Header>
              <Card.Body>
                <CDBContainer>
                <CDBIframe src="http://94.237.54.137:3000/d/gP7AsuHVz/user-disk-usage?orgId=3&viewPanel=1" frameborder="0"/>
                </CDBContainer>
              </Card.Body>
            </Card>
          </Col>
        </Row>  
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">RAG Status</Card.Title>
                <p className="card-category">Red Amber and Green</p>
              </Card.Header>
              <Card.Body>
                <CDBContainer>
                <CDBIframe src="http://94.237.54.137:3000/d-solo/4238MzD4k/new-dashboard?orgId=3&panelId=2" frameborder="0"/>
                </CDBContainer>
              </Card.Body>
            </Card>
          </Col>
        </Row>  
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">All Users RAG Status</Card.Title>
                <p className="card-category">Red Amber and Green</p>
              </Card.Header>
              <Card.Body>
                <CDBContainer>
                <CDBIframe src="http://94.237.54.137:3000/d-solo/gP7AsuHVz/user-disk-usage?orgId=3&panelId=2" frameborder="0"/>
                </CDBContainer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </div>
            )
          } 
        })()}
        <Row>
          <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h4">Employees of Your Department : {localStorage.getItem('deptCode')}</Card.Title>
              <p></p>
            </Card.Header>
          </Card>
          </Col>
        </Row>
        <Row>
        {departmentEmployee.map((employee) => 
          <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>{employee.name } ({employee.loginId})</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col md="6">
                    <CDBContainer>
                      <CDBIframe src={`http://94.237.54.137:3000/d-solo/CSLQRzDVk/user-stats?Panel=2&var-username=${employee.loginId}&orgId=3&panelId=2`}  frameborder="0"/>
                    </CDBContainer>
                  </Col>
                  <Col md="6">
                    <CDBContainer>
                      <CDBIframe src={`http://94.237.54.137:3000/d-solo/CSLQRzDVk/user-stats?Panel=2&var-username=${employee.loginId}&orgId=3&panelId=3`}  frameborder="0"/>
                    </CDBContainer>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        )}
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
