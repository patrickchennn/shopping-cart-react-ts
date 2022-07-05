import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Link } from "react-router-dom"

import {Navbar} from "./components/Navbar"
import {Home} from "./pages/Home"
import {About} from "./pages/About"
import {Store} from "./pages/Store"


export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </div>
    </div>
  )
}