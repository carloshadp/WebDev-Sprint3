import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "/public/font.css"
import "/src/scripts/Login.js";
import "/src/scripts/Registrar.js";

function App() {


  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/> 
    </>
  )
}

export default App
