import React from "react";
import ServiceItem from "../../modules/ServiceItem/ServiceItem";

function ServicesDetails({ data }) {
  return (
    <div class="container-fluid pt-5">
      <div class="container">
        <div class="section-title">
          <h4
            class="section-title-bg text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Our Services
          </h4>
        </div>
        <div class="row">
          {data.map((service) => (
            <ServiceItem key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesDetails;
