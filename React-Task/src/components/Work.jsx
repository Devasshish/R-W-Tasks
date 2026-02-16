function Work() {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5">Our Work</h2>

      <div className="row g-4">
        {[1, 2, 3].map((item) => (
          <div className="col-md-4" key={item}>
            <div className="card work-card border-0 shadow-sm h-100">
              <img
                src={`https://picsum.photos/400/30${item}`}
                className="card-img-top"
                alt="project"
              />
              <div className="card-body">
                <h5 className="fw-bold">Project {item}</h5>
                <p className="text-muted">
                  A modern responsive website built with latest technologies.
                </p>
                <button className="btn btn-outline-primary">
                  View Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
