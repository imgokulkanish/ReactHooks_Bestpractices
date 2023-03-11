import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Form from './pages/Form'
import Drag from './pages/Drag'
import UseEffect from './pages/Hooks BestPractices/Useeffect/UseEffect'
import UseState from './pages/Hooks BestPractices/Usestate/UseState'
import Derivedstates from './pages/Hooks BestPractices/Usestate/Derivedstates'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Form />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/drag" element={<Drag />}></Route>
          <Route exact path="/usestate" element={<UseState />}></Route>
          <Route exact path="/useeffect" element={<UseEffect />}></Route>
          <Route exact path="/usestatederived" element={<Derivedstates />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
