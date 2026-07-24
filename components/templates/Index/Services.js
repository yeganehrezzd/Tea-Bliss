import ServiceItem from "../../../components/modules/ServiceItem/ServiceItem";
import React from "react";
import Link from "next/link";

function Services({ services }) {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="section-title-bg text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Our Services
          </h4>
          <h1 className="display-4">Benefits in Every Cup</h1>
        </div>
        <div className="row">
          {services.slice(0,4).map((service) => (
            <ServiceItem
              title={service.title}
              desc={service.desc}
              img={service.img}
             
            />
          ))}
          <Link
              href="/Services"
              className="col btn btn-secondary font-weight-bold py-2 px-4 mt-2"
            >
               More Services
            </Link>
          
        </div>
      </div>
    </div>
  );
}

export default Services;
