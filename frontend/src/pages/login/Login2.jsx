import React from 'react'
import styles from "./Login2.module.css"
const Login2 = () => {
 
    return (
        <div className="flex h-screen">
          {/* Left side with image or design */}
          {/* <div className="w-1/2 bg-blue-500 flex items-center justify-center backdrop-filter backdrop-blur-lg bg-opacity-0"> */}
          <div className={`${styles.leftBox} w-1/2 flex items-center justify-center backdrop-filter backdrop-blur-lg bg-opacity-0`}>
      
            {/* You can add any design or image here */}
            <div className="text-center">
              <h2 className="text-white text-4xl font-bold">Welcome Back!</h2>
              <p className="text-white mt-4">Join the community and start connecting.</p>
            </div>
          </div>
    
          {/* Right side with login form */}
          <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100" >
            <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-white ">
              <h1 className="text-3xl font-semibold text-center text-gray-700">
                Login
                <span className="text-blue-500"> VibeTalk</span>
              </h1>
    
              <form>
                <div className="mt-4">
                  <label className="label">
                    <span className="text-base label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    className="w-full input input-bordered h-10"
                  />
                </div>
    
                <div className="mt-4 ">
                  <label className="label">
                    <span className="text-base label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="w-full input input-bordered h-10"
                  />
                </div>
    
                <a
                  href="#"
                  className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
                >
                  {"Don't"} have an account?
                </a>
    
                <div className="mt-4">
                  <button className="btn btn-block btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
}

export default Login2
