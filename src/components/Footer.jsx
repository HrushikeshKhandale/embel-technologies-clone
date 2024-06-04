import React from "react";

const Footer = () => {
  return (
    <div>
      {/* <!-- Footer --> */}
      <footer
        className="text-center text-lg-start body bg-dark text-muted"
        style={{ color: "white" }}
      >
        {/* <!-- Section: Social media --> */}
        <section className="d-flex justify-content-center justify-content-lg-between p-3 ">
          {/* <!-- Left --> */}

          {/* <!-- Right --> */}

          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section>
          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h2 className="text-uppercase fw-bold mb-4">
                  <span style={{ color: "darkorange" }}>Embel</span>{" "}
                  <span style={{ color: "white" }}>Technologies</span>
                </h2>
                <p>Innovating for future.</p>
                <div className="social">
                  <div>
                    <a href="/" className="mx-4 text-reset">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/" className="me-4 text-reset">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/" className="me-4 text-reset">
                      <i className="fab fa-google"></i>
                    </a>
                    <a href="/" className="me-4 text-reset">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="/" className="me-4 text-reset">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="/" className="me-4 text-reset">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>

                <span class="pb-3 text-light">
                  <i
                    class="fas fa-map-marker-alt footer-link me-2"
                    style={{ color: "green" }}
                  ></i>
                  <b>Branch 1 :-</b> 507, 46 DownTown, Behind Audi Showroom,
                  Pashan-Sus road, Mohan Nagar, Baner 411045 Pune,
                  Maharashtra-411058
                </span>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h3 className="text-uppercase fw-bold mb-4">Short Link</h3>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                   <span><i class="fas fa-angle-right footer-link me-2" ></i></span> About Us
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                   <span><i class="fas fa-angle-right footer-link me-2"></i></span> Our Services
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                   <span><i class="fas fa-angle-right footer-link me-2"></i></span> Our Blogs
                  </a>
                </p>
                
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h3 className="text-uppercase fw-bold mb-4">Help link</h3>
                <p>
                  <a
                    href="/"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                   <span><i class="fas fa-angle-right footer-link me-2" ></i></span> FAQ's
                  </a>
                </p>
                <p>
                  <a
                    href="/"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Career
                  </a>
                </p>
                <p>
                  <a
                    href="/"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Partner With Us
                  </a>
                </p>
                <p>
                  <a
                    href="/"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Contact
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h3 className="text-uppercase fw-bold mb-4">Contact Us</h3>

                <p>
                  <i className="fas fa-envelope me-3"></i>
                  career.embel@co.in
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> +91 8888741044
                </p>

                <span class="py-3 text-light">
                  <i class="fas fa-map-marker-alt footer-link me-2" style={{color:'green'}}></i>
                  <b>Branch 2 :-</b> 2nd floor, Vanashree Palace, Above Chate
                  Classes, Near Tapodham Bus Stop, NDA Road, Warje Naka, Pune,
                  Maharashtra-411058
                </span>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          <a
            href="https://embel.co.in/"
            style={{
              textDecoration: "none",
              float: "left",
              marginLeft: "6.8rem",
              color: "green",
              fontSize: "1.2rem",
              marginBottom: "1rem",
            }}
          >
            EMBEL Technologies Pvt Ltd
          </a>
          <span
            style={{
              color: "white",
              fontSize: "1.1rem",
              marginRight: "25cm",
              marginTop: "1rem",
            }}
          >
            , All Right Reserved.
          </span>
        </div>

        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </div>
  );
};

export default Footer;
