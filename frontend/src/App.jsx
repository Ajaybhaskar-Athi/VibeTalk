// // import './App.css'
// import Home from './pages/home/home'
// import Login from './pages/login/Login'
// import SignUp from './pages/signup/SignUp'
// function App() {

//   return (
//     <div className='p-4 h-screen flex items-center justify-center'>
      
//       <Home/>
//     </div>  
//   )
// }

// export default App






// App2.jsx


import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'

import Login2 from './pages/login/Login2'
import SignUp2 from './pages/signup/SignUp2'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'


function App() {
    const {authUser}=useAuthContext();
  return (
    <div className='h-screen  flex items-center justify-center'>
      <Routes>
        <Route path="/" element={  authUser? <Home/> : <Navigate to ="/login"/>} />
        <Route path="/login" element={ authUser ?<Navigate to="/"/> : <Login/>} />
        <Route path="/signup" element={ authUser ? <Navigate to='/'/> :  <SignUp/>} />
      </Routes>
      <Toaster/>
    </div>  
  )
}

export default App



