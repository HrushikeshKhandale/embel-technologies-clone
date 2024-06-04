import React from "react";
import bgImg from "./images/artificial-intelligence.jpg";
import "../App.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="services">
        <img
          src={bgImg}
          alt="background img"
          className="bg-image"
        />

        <p className="services-title">
          Embel Services
        </p>
        <h1 className="services-title2">
          Built Specifically For Your Business
        </h1>
        <p className="breadcrumb">
          <Link to="/services" className="breadcrumb-link">
            Home
          </Link> 
          <span> /Services</span>{" "}
        </p>
      </div>
      <section className="cards">
        <div className="card">
          <div className="iotDev">
            <i className="fa-solid fa-wifi fa-3x"></i>
          </div>
          <div className="card-body">
            <h5 className="card-title">Circuit Design</h5>
            <p className="card-text">
              Circuit design is the first step for every electronics design
              project. This requires the creation of a schematic diagram which
              defines how electronic components are logically connected on a
              printed circuit board.
            </p>
            <ul>
              <li>Design enablement.</li>
              <li>Agile transformation.</li>
              <li>Product management.</li>
              <li>Cultural transformation.</li>
            </ul>
            <div className="card-button">
              <a href="/" className="btn btn-warning read-more-btn">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="iotDev">
            <i className="fa-solid fa-microchip fa-3x"></i>
          </div>
          <div className="card-body">
            <h5 className="card-title">IOT Development</h5>
            <p className="card-text">
              IoT development means combining hardware parts and software
              programs in such a way that the final product could monitor
              specific values, collect and transfer data, analyze given data and
              cause the physical.
            </p>
            <ul>
              <li>Connectivity, Analyzing.</li>
              <li>Artificial Intelligence, Sensing.</li>
              <li>Active Engagement.</li>
              <li>Endpoint Management.</li>
            </ul>
            <div className="card-button">
              <a href="/" className="btn btn-warning read-more-btn">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="iotDev">
            <i className="fa-solid fa-window-maximize fa-3x"></i>
          </div>
          <div className="card-body">
            <h5 className="card-title">Application Development</h5>
            <p className="card-text">
              Application development is the process of creating a computer
              program different tasks that a business requires.Every
              app-building process follows the same steps: gathering
              requirements, designing prototypes.
            </p>
            <ul>
              <li>Requirements analysis.</li>
              <li>Architecture design.</li>
              <li>Implementation, Testing.</li>
              <li>Deployment, Maintenance.</li>
            </ul>
            <div className="card-button">
              <a href="/" className="btn btn-warning read-more-btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
