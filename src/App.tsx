import path from "./assets/muc.jpg";
import slika1 from "./assets/bookshelf-wood-project-diy-shelves-books-4WrXU0udKWeBlXbpMSK3Bu-ef59921d11d64c30bfc15e764055a5fe.jpg"
import slika2 from "./assets/diy-cutting-board-17.webp"
import slika3 from "./assets/download.jpg"
import TextSlide from "./slide/TextSlide";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./comp/NavBar";
import Slider from "./slide/Slider";
function App() {
  return (
    <div>
      <NavBar znamka="Muc sp" path={path} />
  	  <Slider slika1={slika1} slika2={slika2} slika3={slika3} />
      <TextSlide />
    </div>
  );
}

export default App;
