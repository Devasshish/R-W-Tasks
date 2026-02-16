function Slider() {
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">

        <div className="carousel-item active position-relative">
          <img
            src="https://picsum.photos/1600/500"
            className="d-block w-100"
            alt="slide"
          />
          <div className="hero-text d-flex flex-column justify-content-center align-items-center            ">
            <h1 className="fw-bold display-4">
              Build Modern Websites
            </h1>
            <p className="lead">
              Clean Design. Fast Performance.
            </p>
            <button className="btn btn-primary btn-lg">
              Get Started
            </button>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="https://picsum.photos/1600/501"
            className="d-block w-100"
            alt="slide"
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://picsum.photos/1600/502"
            className="d-block w-100"
            alt="slide"
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;
