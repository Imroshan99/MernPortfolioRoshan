import React from 'react';
import "./Home.css"
const Home = () => {
    return (
        <>
        <div className='homepage'>
        <h1>Welcome</h1>
        <h1>I am The Mern Stack DEveLOpeR</h1>   
            <form id="first_name">
                <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control input-lg" />
                </div>
            </form>             
        </div>
        
       
        
         
        </>
    );
};

export default Home;
