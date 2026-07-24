import React, { useState } from "react";

function Offer() {
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
    <div class="custom-radius offer container-fluid my-6 py-5 text-center position-relative overlay-top overlay-bottom">
      <div class="container py-5">
        <h1 class="display-3 text-primary mt-3">25% OFF</h1>
        <h1 class="text-white mb-3">Weekend Special</h1>
        <h4 class="text-white font-weight-normal mb-4 pb-3">
          Enjoy 25% off on selected menu items every Friday and Saturday.
        </h4>
        <form class="form-inline justify-content-center mb-4">
          <div class="input-group">
            <input
              type="text"
              class="custom-input-radius form-control p-4 "
              placeholder="Your Email"
              style={{ height: "60px" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div class="input-group-append">
              <button
                onClick={addEmail}
                class="custom-btn-radius btn btn-primary font-weight-bold px-4"
                type="submit"
              >
                JOIN
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Offer;
