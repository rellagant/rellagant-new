import "./HomePage.scss";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTumblr } from "react-icons/fa";
import rella from "../../assets/images/Rellasnapseed.jpg";
import shrinefinder from "../../assets/shrinefinder-wht.svg";
//import { loadMicroPayments } from "@todaqmicro/payment-js"
export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // useEffect(() => {
  //     const hotdogs = async function () {
  //       const micro = await loadMicroPayments(
  //         "mp_d98686143fc84e7d932e7004b813749a",
  //         { apiVersion: "main" }
  //       )

  //       const elements = micro.elements()
  //       const element = await elements.create("payment", {
  //         hash: "3c16d3c1-eb77-42a0-8e77-6d37eb885376",
  //         theme: "light",
  //         styles: {
  //           colorPrimary: "#000000",
  //           colorBackground: "#FDB902",
  //           borderRadius: "35%",
  //         },
  //       })
  //       if (element) {
  //         element.mount("#hotdogs")
  //       }
  //     }

  //     hotdogs()
  //   }, [])

  return (
    <div className="home-page pattern-background">
      <div className="home-page__container">
        <div className="home-page__container-left">
          <div className="home-page__content">
            <img src={rella} alt="rella" className="home-page__profile-photo" />
          </div>
        </div>
        <div className="home-page__container-tablet">
          <div className="home-page__container-middle">
            <h1 className="home-page__title">Hi, I'm Rella</h1>
          </div>
          <div className="home-page__container-right">
            <div className="home-page__social-icons">
              <a
                href="https://github.com/rellagant"
                target="_blank"
                rel="noopener noreferrer">
                <FaGithub className="home-page__icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/barbara-csankova"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedin className="home-page__icon" />
              </a>
              <a
                href="https://www.instagram.com/rellac"
                target="_blank"
                rel="noopener noreferrer">
                <FaInstagram className="home-page__icon" />
              </a>
              <a
                href="https://rellac.tumblr.com/"
                target="_blank"
                rel="noopener noreferrer">
                <FaTumblr className="home-page__icon" />
              </a>
            </div>
          </div>
          <div className="home-page__container-bottom">
            <a href="https://shrinefinder.netlify.app">
              <img
                src={shrinefinder}
                alt="shrinefinder"
                className="home-page__shrinefinder-icon"
              />
            </a>
          </div>
          <div className="home-page__container-coffee" id="hotdogs"></div>
          <button onClick={openModal} className="buy-coffee-btn">
            Sponsor my ☕️ habit
          </button>
          <div className="home-page__container-modal">
            <h1 className="home-page__container-title">Give me Money</h1>
            <div className="home-page__container-grid">
              <div className="home-page__container-content">☕️</div>
              <div className="home-page__container-content">🥀</div>
              <div className="home-page__container-content">🛩️</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
