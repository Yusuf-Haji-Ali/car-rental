import React from "react";
import ChooseCar from "../assets/choose-car.png";
import ChooseFeature from "./ui/ChooseFeature";
import ChooseFeature1 from "../assets/choose-1.png";
import ChooseFeature2 from "../assets/choose-2.png";
import ChooseFeature3 from "../assets/choose-3.png";

const Choose = () => {
  return (
    <section id="choose">
      <div className="container">
        <div className="row choose__row">
          <figure className="chose__img__wrapper">
            <img src={ChooseCar} alt="" className="choose__img" />
          </figure>

          <div className="choose__content">
            <div className="choose__text">
              <h3 className="choose__text__subtitle">Why Choose Us</h3>
              <h2 className="choose__text__title">
                Best valued deals you will ever find
              </h2>
              <p className="chooose__text__para">
                Discover the best deals you'll ever find with our unbeatable
                offers. We're dedicated to providing you with the best value for
                your money, so you can enjoy top-quality services and products
                wihtout breaking the bank. Our deals are designed to give you
                the ultimate renting experience, so don't miss out on your
                chance to save big.
              </p>
              <button className="choose__text__btn">Find Details</button>
            </div>

            <div className="choose__features">
              <ChooseFeature
                image={ChooseFeature1}
                title={"Cross Country Drive"}
                paragraph={
                  "Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures"
                }
              />
              <ChooseFeature
                image={ChooseFeature1}
                title={"All Inclusive Pricing"}
                paragraph={
                  "Get everything you need in one convenient, transparent price with our all-inclusive pricing policy"
                }
              />
              <ChooseFeature
                image={ChooseFeature1}
                title={"No Hidden Charges"}
                paragraph={
                  "Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
