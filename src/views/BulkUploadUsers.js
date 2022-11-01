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
  } = useDropzone({accept: {'image/*': []}});

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

  fetch('http://localhost:5000/uploadFile', {
    method: 'POST',
    body: data,
  }).then((response) => {
      response.json().then((body) => {
          console.log(body);
    });
  
  });
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
                        <form onSubmit={handleSubmit}>
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
                                        <button type='button' class="btn">Upload a file</button>
                                    </div>
                                </Col>
                            </Row>
                        </form>
                            
                
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    </>
  );
}

export default StyledDropzone;