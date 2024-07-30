import React from 'react'
import { useState } from 'react'
import axios from 'axios'
// import './App.css';
import  {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCard,
    MDBCardImage,
    MDBCardBody
  }
  from 'mdb-react-ui-kit';


const Register = () => {

  const [data,setData] = useState({
    username : '',
    password : '',
    email : '',
    confirmPassword : '',
  })

  const {username,password,email,confirmPassword} = data
  const changeHandler =(e)=> setData(
    {
      ...data,
      [e.target.name] :e.target.value,
    })

    const SubmitHandler = e =>{
      e.preventDefault();
      if(password === confirmPassword){
        axios.post('https://sample-2aa4b-default-rtdb.firebaseio.com/signupform.json', {
          username,
          password,
        }).then(() => {
          alert('Registration Successful');
               });
      }
      else {
        alert('Passwords do not match');
      }

    }

  return (
    <form onSubmit={SubmitHandler}>
       
    <MDBContainer className="my-5">

    <MDBCard>
      <MDBRow className='g-0'>

        <MDBCol md='6'>
          <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
        </MDBCol>

        <MDBCol md='6'>
          <MDBCardBody className='d-flex flex-column'>

          <div className='d-flex flex-row align-items-center justify-content-center mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                <span className="h1 fw-bold" style={{ letterSpacing: '1px' }}>MobileCart</span>
              </div>

            <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

              <MDBInput wrapperClass='mb-4' type='text' name='username' label='username' value={username} onChange={changeHandler} size="lg"/>
              <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' name='password'  value={password} onChange={changeHandler} type='password' size="lg"/>
              <MDBInput wrapperClass='mb-4' type='email' name='email' label='Email' value={email} onChange={changeHandler} size="lg"/>
              <MDBInput wrapperClass='mb-4' label='Confirm password' id='formControlLg' name='confirmPassword'  value={confirmPassword} onChange={changeHandler} type='password' size="lg"/>
              
            <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Register</MDBBtn>
            
           
            <div className='d-flex flex-row justify-content-start'>
              <a href="#!" className="small text-muted me-1">Terms of use.</a>
              <a href="#!" className="small text-muted">Privacy policy</a>
            </div>

          </MDBCardBody>
        </MDBCol>

      </MDBRow>
    </MDBCard>

  </MDBContainer>
    
    </form>
  )
}


export default Register
