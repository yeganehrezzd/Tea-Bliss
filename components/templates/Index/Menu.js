import React from "react";
import Card from "../../modules/Card/Card";;

function Menu({ data }) {
  console.log("Menu =>", data);

  return (
    <div class="container-fluid pt-5">
      <div class="container">
        <div class="section-title">
          <h4
            class="section-title-bg text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Menu
          </h4>
          <h1 class="my-4 display-4">Signature Herbal Teas </h1>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <h1 class="mb-5">Herbal Teas</h1>

            {data
              .filter((item) => item.type === "Herbal")
              .slice(0, 3)
              .map((item) => (
                <Card {...item} />
              ))}
          </div>

          <div class="col-lg-6">
            <h1 class="mb-5">Fruit Infusions </h1>
            {data
              .filter((item) => item.type === "Fruit")
              .slice(0, 3)
              .map((item) => (
                <Card {...item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
