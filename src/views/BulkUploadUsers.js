import React, {useMemo} from 'react';
import {useDropzone} from 'react-dropzone';
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
const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

function StyledDropzone(props) {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({accept: {'text/html': ['.csv']}});

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  function handleSubmit(event) {
      
    event.preventDefault();
    const data = new FormData();
    data.append('file', acceptedFiles[0]);
    data.append('filename', acceptedFiles[0].name);

    fetch('http://94.237.57.185:5000/addmultipleusers/', {
      method: 'POST',
      body: data,
    }).then((response) => {console.log(response);});
  
  }

  
  return (
    <>
    <Container fluid>
        <Row>
            <Col md="12">
                <Card>
                    <Card.Header>
                        <Card.Title as="h4">Add CSV of Users</Card.Title>
                    </Card.Header>
                    <Card.Body>
                    <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col md="12">
                                    
                                        <div {...getRootProps({style})}>
                                            <input {...getInputProps()} />
                                            <p>Drag 'n' drop some files here, or click to select files</p>
                                        </div> 
                                    
                                </Col>
                            </Row>
                            <Row>
                                <div>
                                    <ul>
                                        {files}
                                    </ul>
                                </div>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <div className="btn-fill pull-right" type="submit" variant="info">
                                        <button type='submit' class="btn">Upload a file</button>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                            
                
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    </>
  );
}

export default StyledDropzone;