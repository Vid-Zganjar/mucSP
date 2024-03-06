import path from './assets/muc.jpg'
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from "./comp/NavBar"
function App() {
  return ( 
    <div><NavBar znamka="Muc sp" path={path} /> </div>
  )
}

export default App