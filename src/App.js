import Header from "./components/Header"
import Introduction from "./components/Introduction"
import Main from "./components/Main"
// import Offer from "./components/Offer"
import "./index.css"

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main/>
      <Introduction/>


    </div>
    
  )
}


export default App