import { BrowserRouter, Route, Routes } from "react-router-dom"


import "./index.css"
import AdminPage from "./components/AdminPage"
import MainPage from "./components/MainPage"
import AdminLogin from "./components/AdminLogin"

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/admin" element={<AdminLogin/>}/>
          <Route path="/adminPage" element={<AdminPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}


export default App