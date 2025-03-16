import { BrowserRouter, Route, Routes } from "react-router-dom"

import axios from "axios";
import "./index.css"
import AdminPage from "./components/AdminPage"
import MainPage from "./components/MainPage"
import AdminLogin from "./components/AdminLogin"
import TermsAndConditions from "./components/TermsAndConditions"
import { useState } from "react"


const App = () => {
  
  axios.defaults.baseURL=process.env.REACT_APP_BACKEND_URL || "http://localhost:4000"
  console.log(axios.defaults.baseURL);

const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/admin"  element={<AdminLogin setIsAdminLoggedIn={setIsAdminLoggedIn} />}/>
          <Route path="/adminPage" element={<AdminPage isAdminLoggedIn={isAdminLoggedIn} />}/>
          <Route path="/podminky" element={<TermsAndConditions/>} />
        </Routes>
    </BrowserRouter>
  )
}


export default App