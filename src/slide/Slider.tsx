interface SliderProps{
    slika1: string;
    slika2: string;
    slika3: string;
}

function Slider({slika1, slika2, slika3}:SliderProps) {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src={slika1} alt="First slide" />
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={slika2} alt="Second slide" />
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={slika3} alt="Third slide" />
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
  )
}

export default Slider