import React from "react";
import Header from "../Header/Header";
import petcard from "../../images/DogShower.jpg";
import nailcutter from "../../images/nailcutter.jpg";
import grommingKit from "../../images/grommingKit.jpg";
import "./list.css";

function UserList() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="cardGrid">
        <div className="card">
          <img className="card-image" src={petcard} alt="Pet Shower" />
          <h2 className="mb-0">Pet Shower</h2>
          <p className="description">
            The Waterpik Pet Wand Pro professional grade dog shower unique wand
            shape provides full coverage to wash dogs of all sizes
          </p>
          <h3>$200</h3>
        </div>
        <div className="card">
          <img src={nailcutter} alt="Pet Shower" className="card-image" />
          <h2 className="mb-0">Pet Nail cutter</h2>
          <p className="description">
            It is powerful enough to trim your dog's or cat's nails with just
            one cut; these durable clippers won't bend, scratch or rust, and the
            blades still keep sharp
          </p>
          <h3>$100</h3>
        </div>
        <div className="card">
          <img src={grommingKit} alt="Pet Shower" className="card-image" />
          <h2 className="mb-0">Pet Gromming Kit</h2>
          <p className="description">
            Pet Clippers Professional Dog Grooming kit Adjustable Low Noise High
            Power Rechargeable Cordless Pet Grooming Tools , Hair Trimmers for
            Dogs and Cats, Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nullam non leo nec justo bibendum iaculis in vel ex. Vivamus
            congue libero eu mauris faucibus, non eleifend libero convallis.
          </p>
          <h3>$250</h3>
        </div>
      </div>
    </div>
  );
}

export default UserList;
