import React from "react";
import img from "../../images/1.jpg";

export default function AboutUs() {
  return (
    <div>
      <h1>About Page</h1>
      <img
        src={img}
        alt="Hofars image"
        style={{
          border: "1px solid #ddd",
          padding: "5px",
          position: "relative",
          width: "25vh",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <p>
        At Hofars, competency meets precision, and the real magic happens When
        it comes to business, precision is treasured. Precision is what provides
        a business with a set of defined objectives that it can meet to
        accomplish greatness. However, precision is inadequate without
        competency. Competency is what makes you stand out from the rest. At
        Hofars, we strive to provide the best solutions to your business’s
        needs. We do this by employing our competent team of experts who will
        determine your requirements and provide ample solutions to those with
        pinpoint precision so you save not only time but also the capital.
      </p>
      <br />
      <h2 style={{ letterSpacing: "5px", textAlign: "center" }}>Contact Us</h2>
      <br />
      <h3 style={{ letterSpacing: "3px" }}>Our Social Handles </h3>
      {/* Various social handles here */}
    </div>
  );
}
