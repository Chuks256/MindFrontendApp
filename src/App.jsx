
import { useState } from 'react'
import {Routes,Route} from "react-router-dom";
import AuthenticationScreen from "./pages/authenticationScreen.jsx";
import MainScreen from "./pages/mainScreen.jsx";
import SplashScreen from "./pages/splashScreen.jsx";
import CreatePostScreen from "./pages/createPostScreen.jsx";
import ProfileScreen from "./pages/profileScreen.jsx"
import OnboardScreen from './pages/onboardScreen.jsx';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const getLocation=useLocation()

  return (
    <>
    <Routes>
      <Route exact  path='/' element={<SplashScreen/>}  />
      <Route  path='/onboard' element={<OnboardScreen />}  />
      <Route path='/app' element={<MainScreen/>}  />
      <Route  path='/newPost' element={<CreatePostScreen/>}  />
      <Route  path='/:profilename' element={<ProfileScreen/>}  /> 
      <Route  path='/authenticate' element={<AuthenticationScreen/>}  />
    </Routes>

       </>
  )
}

export default App
