import React ,  { useState, useEffect }from 'react';
import { useHistory } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import {Form } from "react-bootstrap";
function LoginComponent() {
  
  const [loginId, setloginId] = useState();
  const history = useHistory();
  function handleChange(event)
  {
    event.preventDefault();
    let value = event.target.value;
    setloginId(value);
  }

  async function handleSubmit(event)
  {
    event.preventDefault();
    localStorage.setItem('loginId',loginId);
    console.log("login id",loginId)
    await fetch("http://94.237.57.185:5000/employees/get-department-code/",
      {method: 'POST',body: JSON.stringify({"loginId":loginId}), headers: {"Content-Type": "application/json; charset=UTF-8"}}
    )
    .then(
      (response) => { console.log(response); response.json().then((data)=> {console.log(data);
          if(data["status_code"] == 200)
          { 
            // setalertMessage(<Alert key="success" variant="success">{data.message}</Alert>);
            // console.log("GOOTTT", data.deptCode)
            localStorage.setItem('deptCode',data.deptCode);
          }
        else
          {
            setalertMessage(<Alert key="danger" variant="danger">{data.message}</Alert>)
            localStorage.setItem('deptCode',"it");
          } })}
    )

    
    history.push("/admin/dashboard");
  }
  
  return (
    <MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
            <span className="h1 fw-bold mb-0">SABH</span>
          </div>
          <Form onSubmit={handleSubmit}>
          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>

            <MDBInput wrapperClass='mb-4 mx-5 w-100' name="loginId" onChange={handleChange} label='loginId' id='formControlLg' type='text' size="lg"/>
            
            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg'>Login</MDBBtn>
            
          </div>
        </Form>
        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
            alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default LoginComponent;