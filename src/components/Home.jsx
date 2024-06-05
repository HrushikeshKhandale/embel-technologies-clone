import React, { useState, useEffect } from "react";
import "../App.css";
import bgImg from "./images/artificial-intelligence.jpg";
import chooseUs from "./images/Choose-US.png";
import check1 from "./images/chek_b.png";
import check2 from "./images/chek_g.png";
import check3 from "./images/chek_o.png";
import Achievements from "./Achievements";

const Home = () => {
  // eslint-disable-next-line
  const phrases = [
    "IOT Products",
    "Billing Software",
    "Websites Design",
    "Software Solution",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedPhrase, setDisplayedPhrase] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    
    const interval = setInterval(() => {
      if (isTyping) {
        const phrase = phrases[currentPhraseIndex];
        if (letterIndex < phrase.length) {
          setDisplayedPhrase((prevPhrase) => prevPhrase + phrase[letterIndex]);
          setLetterIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(false);
            setLetterIndex(0);
          }, 1000); // Wait 1 second before erasing the phrase
        }
      } else {
        if (displayedPhrase.length > 0) {
          setDisplayedPhrase((prevPhrase) => prevPhrase.slice(0, -1));
        } else {
          setCurrentPhraseIndex(
            (prevIndex) => (prevIndex + 1) % phrases.length
          );
          setIsTyping(true); // Start typing the next phrase
          setLetterIndex(0); // Reset letter index
        }
      }
    }, 100); // Typing speed, change to adjust speed

    return () => clearInterval(interval);
  }, [currentPhraseIndex, displayedPhrase, isTyping, letterIndex, phrases]);

  return (
    <>
      <div className="home">
        <img src={bgImg} alt="background img" />

        <p
          className="mb-auto mx embel1"
          style={{
            fontSize: "1.5rem",
            color: "#f88634",
            fontFamily: '"Saira", sans-serif',
            fontWeight: "600",
            position: "absolute",
            left: "34.9%",
            top: "13.7rem",
          }}
        >
          Best end to end IOT & Software solutions
        </p>
        <h1
          className="embel-animation"
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: '"Saira", sans-serif',
            fontSize: "5.1rem",
            fontWeight: "bold",
            position: "absolute",
            left: "25.6%",
            top: "18rem",
          }}
        >
          Embel Technologies
        </h1>

        <p className="embel2"
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "1.4rem",
            marginTop: "1.2rem",
            fontWeight: "400",
            position: "absolute",
            left: "43.1%",
            top: "24rem",
          }}
        >
          Innovating for future...
        </p>
      </div>
      <Achievements />
      {/*  */}
      <div className="us" style={{ textAlign: "center", marginTop: "2rem" }}>
        <p className="wma" style={{ fontFamily: '"Saira", sans-serif' }}>
          We Make Amazing
        </p>
        <div id="content">
          <div className="typewriter-container">
            <p
              className="typewriter"
              style={{
                color: "brown",
                fontSize: "3rem",
                fontWeight: "bold",
                marginTop: "2rem",
                height: "2.1rem",
              }}
            >
              {displayedPhrase}
            </p>
          </div>
        </div>
        <p style={{ fontSize: "1.2rem",color:'gray',width:'65em',margin:'0 auto',paddingTop:'3rem' }}>
          We are passionate, results-oriented to Build Product based application
          & IOT Products. Team working on your business for connecting dots in
          Marketing, Products Design & Development.
        </p>
      </div>

      <div
        className="why-choose-us"
        style={{ marginLeft: "3rem", paddingBottom: "8rem" }}
      >
        <p
          style={{
            textAlign: "center",
            marginTop: "5rem",
            fontFamily: '"Saira", sans-serif',
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          WHY CHOOSE EMBEL?
        </p>
        <img
          src={chooseUs}
          alt="choose-us"
          style={{ marginLeft: "5rem", float: "left" }}
        />
        {/* Texts of why choose us */}
        <div
          className="wcs"
          style={{
            marginTop: "3rem",
            marginRight: "5.4rem",
          }}
        >
          <div
            className="texts"
            style={{ position: "relative", left: "2.3rem" }}
          >
            <h2
              style={{
                fontFamily: '"Saira", sans-serif',
                fontWeight: "bold",
                color: "#000d9b",
                paddingBottom: "2rem",
              }}
            >
              Save Time & Effort with Embel Technologies
            </h2>
            {/*1  */}
            <span>
              <img src={check1} style={{ height: "1rem" }} alt="check1" />{" "}
              <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
                First Working Process
              </span>
              {/*  */}
              <p style={{ color: "gray", fontSize: "1rem" }}>
                Our dedicated team of qualified technical engineers, developers
                and project managers will provide proactive services and deliver
                smart and tailored IT solutions to support your growth and
                optimize your business processes.
              </p>
            </span>
            {/*  */}
            <span>
              <img src={check2} style={{ height: "1rem" }} alt="check1" />{" "}
              <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
                {" "}
                Dedicated Team Member{" "}
              </span>
              <p style={{ color: "gray", fontSize: "1rem" }}>
                We are committed to providing the highest quality support and
                customer services through a collaborative client relationships.
                Our team of qualified experts deliver proactive services and
                professional advise to support your business plan.
              </p>
            </span>
            {/*  */}
            <span>
              <img src={check3} style={{ height: "1rem" }} alt="check1" />{" "}
              <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
                {" "}
                24/7 Hours Support
              </span>{" "}
              <p style={{ color: "gray", fontSize: "1rem" }}>
                We provide our customers with live help at 24/7 Hours.
              </p>
            </span>
          </div>
        </div>
      </div>

      {/* our services */}
      <div className="our-services">
        <h5
          style={{
            textAlign: "center",
            fontFamily: '"Saira",sans-serif',
            fontWeight: "600",
            color: "black",
          }}
        >
          Our Services
        </h5>
      </div>
    </>
  );
};

export default Home;
