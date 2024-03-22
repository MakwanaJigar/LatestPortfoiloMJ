import React from "react";

function Features() {
  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "#212428",
        width: "100vw",
      }}
    >
      <div className="container">
        <p style={{ color: "#801438", fontWeightL: "bold" }}>FEATURES</p>
        <p
          style={{
            color: "#C4CFDE",
            fontWeightL: "700",
            fontSize: "60px",
            fontFamily: "sans-serif",
          }}
        >
          What I Do
        </p>
      </div>

      <div
        className="container-fluid"
        style={{
          height: "100vh",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          width: "100vw",
          alignItems: "center",
          justifyContent: "space-around",
          gap: 20,
        }}
      >
        {/* ...box section...... */}

        <div
          className="fisrtbox shadow-lg"
          style={{
            height: "40vh",
            width: "25vw",
            backgroundColor: "$202327",
            alignSelf: "center",
            display: "flex",
          }}
        >
          <div
            className=""
            style={{
              alignItems: "flex-start",
              justifyContent: "space-evenly",
              display: "flex",
              flexDirection: "column",
              padding: "10%",
            }}
          >
            <i
              class="fa-solid fa-bars"
              style={{ color: "#801438", fontSize: "50px" }}
            ></i>
            <h3 style={{ color: "#C4CFDE" }}>Business Stratagy</h3>
            <p style={{ color: "#C4CFDE" }}>
              I throw myself down among the tall grass by the stream as Ilie
              close to the earth.
            </p>
          </div>
        </div>

        <div
          className="fisrtbox shadow-lg"
          style={{
            height: "40vh",
            width: "25vw",
            backgroundColor: "$202327",
            alignSelf: "center",
            display: "flex",
          }}
        >
          <div
            className=""
            style={{
              alignItems: "flex-start",
              justifyContent: "space-evenly",
              display: "flex",
              flexDirection: "column",
              padding: "10%",
            }}
          >
            <i
              class="fa fa-book"
              style={{ color: "#801438", fontSize: "50px" }}
            ></i>
            <h3 style={{ color: "#C4CFDE" }}>App Development</h3>
            <p style={{ color: "#C4CFDE" }}>
              We’ll handle everything from to app development process until it
              is time to make your project live.
            </p>
          </div>
        </div>

        <div
          className="fisrtbox shadow-lg"
          style={{
            height: "40vh",
            width: "25vw",
            backgroundColor: "$202327",
            alignSelf: "center",
            display: "flex",
          }}
        >
          <div
            className=""
            style={{
              alignItems: "flex-start",
              justifyContent: "space-evenly",
              display: "flex",
              flexDirection: "column",
              padding: "10%",
            }}
          >
            <i
              class="fa fa-tv"
              style={{ color: "#801438", fontSize: "50px" }}
            ></i>
            <h3 style={{ color: "#C4CFDE" }}>Business Stratagy</h3>
            <p style={{ color: "#C4CFDE" }}>
              We’ll help you optimize your business processes to maximize
              profitability and eliminate unnecessary costs.
            </p>
          </div>
        </div>

        <div
          className="fisrtbox shadow-lg"
          style={{
            height: "40vh",
            width: "25vw",
            backgroundColor: "$202327",
            alignSelf: "center",
            display: "flex",
          }}
        >
          <div
            className=""
            style={{
              alignItems: "flex-start",
              justifyContent: "space-evenly",
              display: "flex",
              flexDirection: "column",
              padding: "10%",
            }}
          >
            <i
              class="fa-solid fa-mobile-screen-button"
              style={{ color: "#801438", fontSize: "50px" }}
            ></i>
            <h3 style={{ color: "#C4CFDE" }}>Mobile App</h3>
            <p style={{ color: "#C4CFDE" }}>
              Using our expertise in mobile application development to create
              beautiful pixel-perfect designs.
            </p>
          </div>
        </div>

        <div
          className="fisrtbox shadow-lg"
          style={{
            height: "40vh",
            width: "25vw",
            backgroundColor: "$202327",
            alignSelf: "center",
            display: "flex",
          }}
        >
          <div
            className=""
            style={{
              alignItems: "flex-start",
              justifyContent: "space-evenly",
              display: "flex",
              flexDirection: "column",
              padding: "10%",
            }}
          >
            <i
              class="fa-solid fa-ranking-star"
              style={{ color: "#801438", fontSize: "50px" }}
            ></i>
            <h3 style={{ color: "#C4CFDE" }}>SEO Optimisation</h3>
            <p style={{ color: "#C4CFDE" }}>
              Your website ranking matters. Our SEO services will help you get
              to the top of the ranks and stay there!
            </p>
          </div>
        </div>

        <div
          className="fisrtbox shadow-lg"
          style={{
            height: "40vh",
            width: "25vw",
            backgroundColor: "$202327",
            alignSelf: "center",
            display: "flex",
          }}
        >
          <div
            className=""
            style={{
              alignItems: "flex-start",
              justifyContent: "space-evenly",
              display: "flex",
              flexDirection: "column",
              padding: "10%",
            }}
          >
            <i
              class="fa-solid fa-box"
              style={{ color: "#801438", fontSize: "50px" }}
            ></i>
            <h3 style={{ color: "#C4CFDE" }}>UX Consulting</h3>
            <p style={{ color: "#C4CFDE" }}>
              A UX consultant is responsible for many of the same tasks as a UX
              designer, but they typically.
            </p>
          </div>
        </div>

      </div>

      
    </div>
  );
}

export default Features;
