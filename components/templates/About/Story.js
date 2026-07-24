import React from "react";

function Story() {
  return (
    <div class="container-fluid py-5">
      <div class="container">
        <div class="section-title">
          <h4
            class="section-title-bg  text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            About Us
          </h4>
        </div>
        <div class="row">
          <div class="col-lg-4 py-0 py-lg-5">
            <h1 class="mb-3">Our Story</h1>
            <p class="mb-3">
              We started our journy in 2005 with a passion for herbal tea. Our
              goal is to bring warmth, relaxation, and natural flavors to every
              cup.
            </p>
            <p>
              Our journey began with a simple idea: to bring the goodness of
              nature into every cup of tea. Since 2005, we have been carefully
              selecting herbs and natural ingredients to create blends that
              inspire relaxation, comfort, and well-being. Every cup we serve is
              crafted with passion, turning everyday moments into peaceful tea
              experiences.
            </p>
          </div>

          <div className="col-lg-4 py-0 py-lg-5">
            <h1 className="mb-3">A Moment of Calm</h1>
            <p>
              Oue teas are created to help you slow down , relax , and enjoy the
              simple pleasures of life.
            </p>
            <p>
              In the middle of busy days, we believe everyone deserves a
              peaceful moment. Our herbal tea blends are carefully created to
              help you relax, slow down, and enjoy the simple pleasure of a warm
              cup of tea. Take a break, breathe, and let every sip bring comfort
              and calm to your day.
            </p>
          </div>
          <div class="col-lg-4 py-0 py-lg-5">
            <h1 class="mb-3">Our Team</h1>

            <p>
              Behind every cup of tea, there is a team of passionate people who
              care about quality and natural wellness. Our team carefully
              selects ingredients, creates unique blends, and works together to
              bring you a relaxing and memorable tea experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
