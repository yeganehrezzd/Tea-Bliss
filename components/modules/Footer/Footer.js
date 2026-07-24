import React from "react";
import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");

  const addEmail = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:4000/newsletters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.status === 201) {
      setEmail("");
      alert("Join Successfully :))");
    }
  };

  return (
    <div className="container-fluid footer text-white mt-5 pt-5 px-0 position-relative overlay-top">
      <div className="row mx-0 pt-5 px-sm-3 px-lg-5 mt-4">
        <div className="col-lg-3 col-md-6 mb-5">
          <h4
            className="text-white text-uppercase mb-4"
            style={{ letterSpacing: "3px" }}
          >
            Get In Touch
          </h4>
          <p>
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <g className="heart-animation" strokeWidth="1.5">
                <path
                  stroke="#fff"
                  d="M17 10.193c0 2.867-4.5 8.307-5 8.307s-5-5.44-5-8.307C7 7.325 9.239 5 12 5s5 2.325 5 5.193z"
                />
                <circle cx="12" cy="10" r="2" stroke="#fff" />
              </g>
            </svg>
            123 Street, New York, USA
          </p>
          <p>
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                className="phone-animation"
                fill="#fff"
                d="M15.758 19a10.761 10.761 0 01-7.603-3.162A10.805 10.805 0 015 8.22c0-.854.339-1.673.941-2.277A3.21 3.21 0 018.214 5c.18-.001.36.015.537.05.172.024.34.067.503.125a.699.699 0 01.455.525l.957 4.2a.7.7 0 01-.182.644c-.09.098-.098.105-.957.553a6.93 6.93 0 003.402 3.423c.454-.868.461-.875.559-.966a.699.699 0 01.643-.182l4.191.959a.699.699 0 01.503.455A3.046 3.046 0 0119 15.829a3.223 3.223 0 01-.968 2.255 3.21 3.21 0 01-2.274.916zM8.215 6.4a1.822 1.822 0 00-1.817 1.82 9.396 9.396 0 002.744 6.63 9.36 9.36 0 006.617 2.75 1.821 1.821 0 001.817-1.82v-.231l-3.242-.75-.202.386c-.315.609-.545 1.05-1.132.812a8.276 8.276 0 01-5.016-5.047c-.251-.546.224-.798.824-1.113l.385-.189L8.444 6.4h-.23z"
              />
            </svg>
            +012 345 67890
          </p>
          <p className="m-0">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <rect
                width="12"
                height="10"
                x="6"
                y="8.804"
                stroke="#fff"
                strokeWidth="1.5"
                rx="2"
              />
              <path
                fill="#fff"
                stroke="#fff"
                strokeWidth="1.5"
                d="M9 6.196a1 1 0 011-1h4a1 1 0 011 1v5.082a1 1 0 01-.37.777l-2.006 1.628a1 1 0 01-1.263-.002l-1.993-1.626A1 1 0 019 11.28V6.196z"
                className="open-animation"
              />
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M8.465 11.413l3.573 2.783 3.497-2.783"
              />
            </svg>
            info@example.com
          </p>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h4
            className="text-white text-uppercase mb-4"
            style={{ letterSpacing: "3px" }}
          >
            Follow Us
          </h4>
          <p>
            Stay connected for the latest herba blends, wellness tips, and
            exclusive offers.
          </p>
          <div className="d-flex justify-content-start">
            <a
              className="btn btn-lg btn-outline-light btn-lg-square mr-2"
              href="#"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <rect
                  width="14.5"
                  height="14.5"
                  x="4.75"
                  y="4.75"
                  stroke="#fff"
                  strokeWidth="1.5"
                  rx="4.25"
                />
                <rect
                  width="6"
                  height="6"
                  x="9"
                  y="9"
                  stroke="#fff"
                  strokeWidth="1.5"
                  rx="3"
                  style={{
                    animation: "instagram 2s linear infinite both",
                    transformOrigin: "center center",
                  }}
                />
                <circle cx="16" cy="8" r="1" fill="#fff" />
              </svg>
            </a>
            <a
              className="btn btn-lg btn-outline-light btn-lg-square mr-2"
              href="#"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  fill="#fff"
                  d="M7.361 7.111a1.556 1.556 0 110-3.111 1.556 1.556 0 010 3.111z"
                  className="linkedin-animation"
                />
                <path
                  fill="#fff"
                  d="M10.473 18h3.11v-5.25a1.411 1.411 0 011.364-1.512 1.762 1.762 0 011.748 1.512V18h3.11v-5.639a3.5 3.5 0 00-3.48-3.51 3.592 3.592 0 00-2.741 1.371V8.667h-3.111V18zm-4.667 0h3.111V8.667H5.806V18z"
                />
              </svg>
            </a>
            <a
              className="btn btn-lg btn-outline-light btn-lg-square mr-2"
              href="#"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M13.246 11.693a.645.645 0 010 1.054l-2.23 1.574A.645.645 0 0110 13.794v-3.148c0-.523.59-.828 1.017-.527l2.229 1.574z"
                  clipRule="evenodd"
                  className="youtube-animation"
                />
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M16.613 6.666a41.132 41.132 0 00-9.226 0l-1.155.13c-1.052.119-1.847 1.022-1.847 2.096v6.216c0 1.074.795 1.977 1.847 2.096l1.155.13c3.066.346 6.16.346 9.226 0l1.155-.13c1.052-.119 1.847-1.022 1.847-2.096V8.892c0-1.074-.795-1.977-1.847-2.096l-1.155-.13zM7.234 5.268a42.495 42.495 0 019.531 0l1.156.13C19.674 5.596 21 7.101 21 8.892v6.216c0 1.79-1.326 3.296-3.08 3.494l-1.155.13a42.484 42.484 0 01-9.53 0l-1.156-.13C4.326 18.404 3 16.899 3 15.108V8.892c0-1.79 1.326-3.296 3.08-3.494l1.154-.13z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a className="btn btn-lg btn-outline-light btn-lg-square" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M7.828 11.63c0-.549.113-1.093.341-1.632.229-.54.555-1.04.98-1.502.425-.46.983-.835 1.675-1.122.693-.287 1.46-.431 2.3-.431 1.367 0 2.488.427 3.365 1.28.876.852 1.314 1.857 1.314 3.015 0 1.488-.37 2.718-1.114 3.688-.744.97-1.704 1.455-2.881 1.455a2.26 2.26 0 01-1.089-.274c-.339-.183-.577-.405-.715-.666l-.516 2.063a4.1 4.1 0 01-.167.502c-.069.17-.145.333-.226.49a10.32 10.32 0 01-.245.444 8.62 8.62 0 01-.458.698c-.06.082-.115.154-.167.216l-.077.104a.094.094 0 01-.103.04.094.094 0 01-.078-.08 31.2 31.2 0 01-.058-.542 13.918 13.918 0 01-.038-.488 6.84 6.84 0 01.025-1.201 5.24 5.24 0 01.097-.627c.094-.409.412-1.771.954-4.086a2.215 2.215 0 01-.168-.503 2.368 2.368 0 01-.064-.476l-.013-.196c0-.557.14-1.02.419-1.39.28-.37.616-.555 1.011-.555.319 0 .565.107.742.32.176.213.264.48.264.803 0 .2-.036.446-.11.737-.073.291-.17.627-.29 1.005-.12.379-.206.686-.258.92-.086.392-.01.732.226 1.019.236.287.552.43.947.43.68 0 1.24-.388 1.682-1.168.442-.779.664-1.72.664-2.826 0-.844-.27-1.534-.812-2.069-.541-.535-1.298-.803-2.268-.803-1.083 0-1.962.353-2.636 1.058a3.537 3.537 0 00-1.012 2.532c0 .584.164 1.075.49 1.475.112.13.146.27.103.418a2.728 2.728 0 00-.077.3 2.73 2.73 0 01-.077.3c-.017.096-.061.16-.13.19a.289.289 0 01-.231-.007 2.167 2.167 0 01-1.14-1.077c-.255-.509-.381-1.103-.381-1.782z"
                  className="pinterest-animation"
                />
                <circle
                  cx="12.816"
                  cy="12"
                  r="8"
                  stroke="#fff"
                  strokeWidth="1.5"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h4
            className="text-white text-uppercase mb-4"
            style={{ letterSpacing: "3px" }}
          >
            Open Hours
          </h4>
          <div>
            <h6 className="text-white text-uppercase">Monday - Friday</h6>
            <p>8.00 AM - 8.00 PM</p>
            <h6 className="text-white text-uppercase">Saturday - Sunday</h6>
            <p>2.00 PM - 8.00 PM</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h4
            className="text-white text-uppercase mb-4"
            style={{ letterSpacing: "3px" }}
          >
            Newsletter
          </h4>
          <p>
            Subscribe to receive exclusive offers, new herbal blends, and
            wellness updates.
          </p>
          <div className="w-100">
            <div className="input-group">
              <input
                type="text"
                className="custom-input-radius form-control border-light"
                style={{ padding: "25px" }}
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="input-group-append">
                <button
                  className="custom-btn-radius  btn btn-primary font-weight-bold px-3"
                  onClick={addEmail}
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid text-center text-white border-top mt-4 py-4 px-sm-3 px-md-5"
        style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
      >
        <p className="mb-2 text-white">
          Copyright ©{" "}
          <a className="font-weight-bold" href="#">
            Domain
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
