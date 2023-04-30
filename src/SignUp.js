import React, { useState } from "react";
// import * as React from 'react';
import "./signup.css";
import { NavLink ,useNavigate} from "react-router-dom";
import { postData } from "./Api";

const Signup = () => {
   const navigate=useNavigate();
    const [userSignUp, setUserSignUp] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        Re_password: ""
    });
    const [checkBox,setCheckBox]=useState(false);


    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserSignUp({ ...userSignUp, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
            if(userSignUp.password===userSignUp.Re_password){
                const userLogin = async () => {
                    const res = await postData('user/signup',userSignUp, "POST");
                    if (res.status === 200) {
                        navigate('/login')
                    }else{
                       
                        alert(res.message)
                    }
        
                }
                
                userLogin()
            }else{
                alert('wrong password')
            }
           
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
                                value={userSignUp.name}
                                onChange={handleInput}
                                name='name' id='user_name' />
                        </div>

                        <div>
                            <label htmlFor='phone_number'></label>
                            <input type='number' autoComplete='off'
                                placeholder=' Your Phone Number'
                                value={userSignUp.mobile}
                                onChange={handleInput}
                                name='mobile' id='phone_number' />
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
                            <input className="checkbox" type="checkbox" label="" onClick={(e)=>{
                                    setCheckBox(e.target.checked)
                            }} />
                            <p style={{paddingTop:"25px",paddingLeft:"10px"}}>I agree all statements in <u>Terms of service </u></p>
                        </div>
                        {
                            checkBox? <button className='btn' type='submit'><b>Sign Up</b></button>:<></>
                        }
                       
                    </form>

                    <div className="lgin_div">
                        <p>have already an account ?  <NavLink to='/login' className=" login_btn">Login</NavLink></p>

                    </div>
                </div>

            </div>
        </div>
    )

}

export default Signup;