import React from "react";
import Link from "next/link";

function About() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="section-title-bg text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            About Us
          </h4>
          <h1 className="display-4">Brewing Wellness</h1>
        </div>
        <div className="row">
          <div className="col-lg-4 py-0 py-lg-5">
            <h1 className="mb-3">Our Story</h1>
            <h5 className="mb-3">
              We started our journy in 2005 with a passion for herbal tea. Our
              goal is to bring warmth, relaxation, and natural flavors to every
              cup.
            </h5>
            <Link
              href="/about"
              className="btn btn-secondary font-weight-bold py-2 px-4 mt-2"
            >
              Learn More
            </Link>
          </div>
          <div
            className="col-lg-4 py-5 py-lg-0 "
            style={{ minHeight: "500px" }}
          >
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100"
                src="/images/about.png"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-4 py-0 py-lg-5">
            <h1 className="mb-3">A Moment of Calm</h1>
            <p>
              Oue teas are created to help you slow down , relax , and enjoy the
              simple pleasures of life.
            </p>
            <h5 className="mb-3">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <rect
                  width="16"
                  height="16"
                  x="4"
                  y="4"
                  stroke="#0A0A30"
                  strokeWidth="1.5"
                  rx="2.075"
                />
                <path
                  stroke="#3c8525"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M9.215 12.052l1.822 1.805 3.748-3.714"
                  style={{
                    animation:
                      "check 2s infinite cubic-bezier(.99, -.1, .01, 1.02)",
                    strokeDashoffset: "100",
                    strokeDasharray: "100",
                  }}
                />
              </svg>
              Premium Herbal Ingredients
            </h5>
            <h5 className="mb-3">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <rect
                  width="16"
                  height="16"
                  x="4"
                  y="4"
                  stroke="#0A0A30"
                  strokeWidth="1.5"
                  rx="2.075"
                />
                <path
                  stroke="#3c8525"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M9.215 12.052l1.822 1.805 3.748-3.714"
                  style={{
                    animation:
                      "check 2s infinite cubic-bezier(.99, -.1, .01, 1.02)",
                    strokeDashoffset: "100",
                    strokeDasharray: "100",
                  }}
                />
              </svg>
              Natural and Fresh Flavors
            </h5>
            <h5 className="mb-3">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <rect
                  width="16"
                  height="16"
                  x="4"
                  y="4"
                  stroke="#0A0A30"
                  strokeWidth="1.5"
                  rx="2.075"
                />
                <path
                  stroke="#3c8525"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M9.215 12.052l1.822 1.805 3.748-3.714"
                  style={{
                    animation:
                      "check 2s infinite cubic-bezier(.99, -.1, .01, 1.02)",
                    strokeDashoffset: "100",
                    strokeDasharray: "100",
                  }}
                />
              </svg>
              Carefully Crafted Blends
            </h5>
            <Link
              href="/about"
              className="btn btn-secondary font-weight-bold py-2 px-4 mt-2"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
