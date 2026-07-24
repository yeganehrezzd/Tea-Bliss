import React from "react";
import Card from "../../modules/Card/Card";
function Result({ searchResult }) {
  const herbalTeas = searchResult
    .filter((item) => item.type === "hot")
    .slice(0, 3);
  const fruitInfusions = searchResult
    .filter((item) => item.type === "cold")
    .slice(0, 3);
  if (!searchResult || searchResult.length === 0) {
    return (
      <div className="text-center py-5">
        <img className="mb-4" src="/images/Tea-logo.png" />
        <h3> sorry, the item you searched could not be found.</h3>
        <p>Please search for another item.</p>
      </div>
    );
  }

  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="mb-5">Herbal Teas</h1>
            {herbalTeas.length > 0 ? (
              herbalTeas.map((item) => <Card {...item} key={item.id} />)
            ) : (
              <p> No items found in this category. </p>
            )}
          </div>
          <div className="col-lg-6">
            <h1 className="mb-5">Fruit Infusions</h1>
            {fruitInfusions.length > 0 ? (
              fruitInfusions.map((item) => <Card {...item} key={item.id} />)
            ) : (
              <p>No items found in this category. </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
