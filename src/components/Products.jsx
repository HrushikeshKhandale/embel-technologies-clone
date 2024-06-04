import React from "react";
import bgImg from "./images/artificial-intelligence.jpg";
import "../App.css";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div className="products">
        <img src={bgImg} alt="background img" className="bg-image" />
        <p className="product-title">Embel Products</p>
        <p className="breadcrumb">
          <Link to="/" className="breadcrumb-link">
            Home
          </Link>
          <span> /Products</span>
        </p>
      </div>
      <section className="cards">
        <div className="prodCard">
          <h5 className="card-title">IOT Product</h5>
        </div>
        <div className="prodCard">
          <h5 className="card-title">Billing Software/POS</h5>
        </div>
        <div className="prodCard">
          <h5 className="card-title">Hardware Products</h5>
        </div>
        <div className="prodCard">
          <h5 className="card-title">Software Product</h5>
        </div>
      </section>
    </>
  );
};

export default Products;
