import path from "./assets/muc.jpg";
import TextSlide from "./slide/TextSlide";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./comp/NavBar";
import Slider from "./slide/Slider";
import  "./slide/Slider.css"
function App() {
  return (
    <div>
      <NavBar znamka="Muc sp" path={path} />
  	  <TextSlide />
    </div>
  );
}

export default App;
