import Header from "./components/Header"
import "./index.css"

const App = () => {
  return (
    <div className="app">
      <Header/>
      <div className="bg-[url(./imgbg.png)] w-[100%] h-[100vh]  bg-cover bg-auto">
        <h1 className="text-7xl font-bold underline text-center pt-[20%] text-white">KONÍČEK</h1>
      </div>


    </div>
    
  )
}


export default App