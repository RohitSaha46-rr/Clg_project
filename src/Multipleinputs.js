import React, { useState } from 'react'
import "./UserLogin.css"
import pic from './login_img.png'
import google_pic from './gg-pic3.png';
import fb_pic from './ff_pic.png';
import { NavLink,useNavigate } from 'react-router-dom';
import { postData } from './Api';
const Multipleinputs = () => {

    const navigate=useNavigate();

    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserLogin({ ...userLogin, [name]: value });

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const apiCall = async () => {
            const res = await postData('user/signin',userLogin, "POST");
            if (res.status === 200) {
                localStorage.setItem('access_token',res.data.access_token)
                localStorage.setItem('user_id',res.data.userId)
                localStorage.setItem('user_name',res.data.userName)
                navigate('/')
            }else{
               
                alert(res.message)
            }

        }
        
        apiCall()
    }




    return (
        <div className='login'>
            <div className='content'>
                <div className='left'>
                    <img src={pic} />
                </div>

                <div className='form'>
                    <h1>Member login</h1>

                    <form action='' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='email'></label>
                            <input type='text' autoComplete='off'
                                placeholder='&#xF199; Email'
                                value={userLogin.email}
                                onChange={handleInput}
                                name='email' id='email' />


                        </div>

                        <div>
                            <label htmlFor='password'></label>
                            <input type='password' autoComplete='off'
                                placeholder="&#xf023; password"
                                value={userLogin.password}
                                onChange={handleInput}
                                name='password' id='password' />
                        </div>
                        <button className='btn' type='submit'><b>Login</b></button>
                    </form>

                    <div className='frgt_div'>

                        <span className='frgt'>
                            Forgot
                            <button className='forgot' type='submit'>Username</button>
                            /<button className='forgot'>Password</button>
                        </span>
                    </div>



                    <p className='or_login'>Or login with</p>
                    <div className='icons'>
                        <div className='icon1'>
                            <button className='gg' type="submit">
                                <img src={google_pic} alt="Submit" />
                            </button></div>

                        <div className='icon1'>
                            <button className='fb' type="submit">
                                <img src={fb_pic} alt="Submit" />
                            </button>
                        </div>

                    </div>
                    <NavLink to='/signup' className='create frgt_div' type='submit' > Create your Account &#xf061;</NavLink>



                </div>
            </div>
        </div >
    )
}

export default Multipleinputs




































  // const [userRegistration, setUserRegistration] = useState({
    //     username: "",
    //     email: "",
    //     phone: "",
    //     password: ""
    // });

    // const [records, setRecords] = useState([]);

    // const handleInput = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     console.log(name, value);

    //     setUserRegistration({ ...userRegistration, [name]: value });
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const newRecord = { ...userRegistration, id: new Date().getTime().toString() }
    //     console.log(records);
    //     setRecords([...records, newRecord]);
    //     console.log(records);
    // }

    // return (
    //     <>
    //         <form action='' onSubmit={handleSubmit}>
    //             <div>
    //                 <label htmlFor='username'>Fullname</label>
    //                 <input type='text' autoComplete='off'
    //                     value={userRegistration.username}
    //                     onChange={handleInput}
    //                     name='username' id='username' />

    //                 <button type='submit'>Registration</button>
    //             </div>
    //         </form>

    //         <div>
    //             {
    //                 records.map((curElem) => {
    //                     const { id, username, email, phone, password } = curElem
    //                     return (
    //                         <div className="showDataStyle" key={id}>
    //                             <p>{username}</p>
    //                             <p>{email}</p>
    //                             <p>{phone}</p>
    //                             <p>{password}</p>
    //                         </div>
    //                     )
    //                 })
    //             }
    //         </div>
    //     </>
    // )

