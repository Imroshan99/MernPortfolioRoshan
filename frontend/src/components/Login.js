import React, { useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const emailRef=useRef("")
  const passRef=useRef("");
  
  const loginDataHandler=async(e)=>{
    e.preventDefault();
     let email=emailRef.current.value;
     let password=passRef.current.value;
    //  console.log(email,"email",password,"pass");
    try {
      const response=await fetch("http://localhost:5000/signin",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
          email,password
        })
      })
      const data=await response.json()
      if(response.status===404 ||!data){
        alert("Not Valid");
      }else{
      //  console.log( response.json())
      
      console.log(data,"data");
      navigate("/")
      }

    } catch (error) {
      console.log(error);
    }
      
  }
    return (
        <>
         <section className="vh-100"  >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{borderRadius:"1rem"}} >
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form"
                className="img-fluid" style={{borderRadius:"1 rem 0 0 1rem"}} 
              />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form method='POST'>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style={{color:"#ff6219"}} ></i>
                    <span className="h1 fw-bold mb-0">R0shan iT SERViCES</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}} >Sign into your account</h5>

                  <div className="form-outline mb-4" >
                    <input ref={emailRef} type="email" id="form2Example17" className="form-control form-control-lg" autoComplete='off' />
                    <label className="form-label" htmlFor="form2Example17">Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input ref={passRef} type="password" id="form2Example27" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example27">Password</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button onClick={loginDataHandler} className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                  </div>

                  <a className="small text-muted" href="#!">Forgot password?</a>
                  <p className="mb-5 pb-lg-2" style={{color:"#393f81"}} >Don't have an account? <NavLink to="/signup" style={{color:"#393f81"}}>Register here</NavLink></p>
                  <a href="#!" className="small text-muted">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    );
};

export default Login;
