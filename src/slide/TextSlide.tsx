function TextSlide() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            width={250}
            height={250}
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.diymontreal.com%2Fhow-to-make-twin-cutting-boards%2F&psig=AOvVaw2wRhGU9igip3NU2aSaR4hz&ust=1709904456280000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKiYzdGg4oQDFQAAAAAdAAAAABAE"
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            width={250}
            height={250}
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fnorthcastlehw.com%2Fproducts%2Fcutting-board-kit-ash-walnut-cherry-medium&psig=AOvVaw2wRhGU9igip3NU2aSaR4hz&ust=1709904456280000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKiYzdGg4oQDFQAAAAAdAAAAABAV"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            width={250}
            height={250}
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fnorthcastlehw.com%2Fproducts%2Fcutting-board-kit-walnut-maple-cherry-large&psig=AOvVaw2wRhGU9igip3NU2aSaR4hz&ust=1709904456280000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKiYzdGg4oQDFQAAAAAdAAAAABAd"
            alt="Third slide"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default TextSlide;
