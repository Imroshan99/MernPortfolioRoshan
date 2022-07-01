import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Registration = () => {
    const nevigate=useNavigate();
    const [user,setUser]=useState({name:"",email:"",phone:"",work:"",password:"",cpassword:""});
    let name,value;
    const userHandler=(event)=>{
        // console.log(event)
            name=event.target.name;
            // console.log("I am in name",name)
            value=event.target.value;
            // console.log("I am in values",value)
            setUser({...user,[name]:value});
            console.log(`hellow ${[name]}:${value}`)
            // console.log(user,"user")
    }
    const submitHandler=async(event)=>{
        event.preventDefault();
        const {name,email,phone,work,password,cpassword}=user;
        const response=await fetch("http://localhost:5000/register",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({
                name,email,phone,work,password,cpassword
            })
        })
        const result=response.json();
        if(response.status===422 || !result){
            alert("not get ");
        }else{
            alert("successfully Login");
            console.log("data",result);
            nevigate("/login");
        }
       
    }
    return (
        <>
            <section className="vh-100" style={{backgroundColor:"#eee"}}>
                <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{borderRadius:"25px"}} >
                <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                        <form className="mx-1 mx-md-4" method='POST'>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input type="text"  className="form-control" autoComplete='off'
                            value={user.name} onChange={userHandler} name="name" />
                            <label className="form-label" htmfor="name">Your Name</label>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input type="email" id="email" className="form-control" autoComplete='off'
                            value={user.email} onChange={userHandler} name="email" />
                            <label className="form-label" htmlfor="email">Your Email</label>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            {/* <i className="fas fa-user fa-lg me-3 fa-fw"></i> */}
                            <i class="zmdi zmdi-phone  zmdi-hc-2x"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input type="text" id="phone" className="form-control" autoComplete='off'
                            value={user.phone} onChange={userHandler} name="phone" />
                            <label className="form-label" htmlfor="phone">Phone</label>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input type="text" id="profession" className="form-control" autoComplete='off'
                            value={user.work} onChange={userHandler} name="work" />
                            <label className="form-label" htmlfor="work">Work</label>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input type="password" id="password" className="form-control" autoComplete='off'
                            value={user.password} onChange={userHandler} name="password" />
                            <label className="form-label" htmlfor="password">Password</label>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input type="password" id="cpassword" className="form-control" autoComplete='off'
                            value={user.cpassword} onChange={userHandler} name="cpassword" />
                            <label className="form-label" htmlfor="cpassword">Repeat your password</label>
                            </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                            <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                            />
                            <label className="form-check-label" htmlfor="form2Example3">
                            I agree all statements in <NavLink to="#!">Terms of service</NavLink>
                            </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={submitHandler}>Register</button>
                        </div>
                              {/* <NavLink to="/login" >Already Register</NavLink> */}
                        </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image"/>

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

export default Registration;
