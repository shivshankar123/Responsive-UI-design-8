import React from "react";

function responsiveCardGird() {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://github.com/AnshSinghSonkhia/Nike-Shoe-Product-Card-UI-Page-Using-TailwindCSS/blob/master/dist/assets/Nike-Shoe.5e208645.png?raw=true"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>
            Step up your game with Nike—where unmatched comfort and iconic style
            propel you to new heights.
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default responsiveCardGird;
