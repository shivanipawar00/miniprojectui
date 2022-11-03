

  import React, { useState, useEffect }  from "react";
import ChartistGraph from "react-chartist";
import { CDBIframe, CDBContainer } from 'cdbreact';
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  useEffect(() => {
    console.log(localStorage.getItem('loginId'));
    fetch("http://127.0.0.1:5000/api/chart_data")
      .then((res) => res.json())
      .then((data) => {
        console.log("chart data is", data);
        setCurrentChartData(data);
      });
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Allocated Space</p>
                      <Card.Title as="h4">150GB</Card.Title>
                    </div>
                  </Col>
                </Row>
                
              </Card.Body>
          <Card.Footer>
            <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  In the last hour
                </div>
          </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-light-3 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Quota Utilization(Percentage)</p>
                      <Card.Title as="h4">$ 1,345</Card.Title>
                    </div>
                  </Col>
                </Row>
                
              </Card.Body>
              <Card.Footer><hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  In the last hour
                </div></Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Quota Utilization(Mbs Remaining)</p>
                      <Card.Title as="h4">23</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  In the last hour
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">RAG status</p>
                      <Card.Title as="h4">+45K</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update now
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Disk Space Usage</Card.Title>
                <p className="card-category">24 Hours performance</p>
              </Card.Header>
              <Card.Body>
                <CDBContainer>
                <CDBIframe src="http://94.237.54.137:3000/d-solo/gP7AsuHVz/user-disk-usage?orgId=3&panelId=1" frameborder="0"/>
                </CDBContainer>
              </Card.Body>
            </Card>
          </Col>
        </Row>  
        <Row>
          <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h4">New Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <div>
                <XYPlot xType="linear" width={300} height={300}>
                  <HorizontalGridLines />
                  <VerticalGridLines />
                  <XAxis title="X Axis" />
                  <YAxis title="Y Axis" />
                  <LineSeries data={currentChartData} />
                </XYPlot>
              </div>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        
      </Container>
    </>
  );
}

export default Dashboard;
