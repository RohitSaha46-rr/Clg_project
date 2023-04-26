import React, { useState } from "react";
// import * as React from 'react';
import "./signup.css";

const Signup = () => {

    const [userSignUp, setUserSignUp] = useState({
        user_name: "",
        email: "",
        phone_number: "",
        password: "",
        Re_password: ""
    });

    const [records, setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setUserSignUp({ ...userSignUp, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = { ...userSignUp, id: new Date().getTime().toString() }
        console.log(records);
        setRecords([...records, newRecord]);
        console.log(records);
    }

    return (
        <div className="signup">
            <div className="form">


                <div className="sgin__form">
                    <h1>CREATE ACCOUNT</h1>

                    <form action='' onSubmit={handleSubmit}>

                        <div>
                            <label htmlFor='user_name'></label>
                            <input type='text' autoComplete='off'
                                placeholder=' Your Name'
                                value={userSignUp.user_name}
                                onChange={handleInput}
                                name='user_name' id='user_name' />
                        </div>

                        <div>
                            <label htmlFor='phone_number'></label>
                            <input type='number' autoComplete='off'
                                placeholder=' Your Phone Number'
                                value={userSignUp.phone_number}
                                onChange={handleInput}
                                name='phone_number' id='phone_number' />
                        </div>

                        <div>
                            <label htmlFor='email'></label>
                            <input type='text' autoComplete='off'
                                placeholder=' Email'
                                value={userSignUp.email}
                                onChange={handleInput}
                                name='email' id='email' />
                        </div>

                        <div>
                            <label htmlFor='password'></label>
                            <input type='password' autoComplete='off'
                                placeholder=" password"
                                value={userSignUp.password}
                                onChange={handleInput}
                                name='password' id='password' />
                        </div>

                        <div>
                            <label htmlFor='Re_password'></label>
                            <input type='Re_password' autoComplete='off'
                                placeholder=" Re-enter your password"
                                value={userSignUp.Re_password}
                                onChange={handleInput}
                                name='Re_password' id='Re_password' />
                        </div>

                        <div className="check_div">
                            <input className="checkbox" type="checkbox" label="" />
                            <p style={{paddingTop:"25px",paddingLeft:"10px"}}>I agree all statements in <u>Terms of service </u></p>
                        </div>
                        <button className='btn' type='submit'><b>Sign Up</b></button>
                    </form>

                    <div className="lgin_div">
                        <p>have already an account ?  <button className=" login_btn">Login</button></p>

                    </div>
                </div>

            </div>
        </div>
    )

}

export default Signup;