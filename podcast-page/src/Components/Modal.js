import React, { useState } from "react";
import ApplePodcast from "../assets/desktop/apple-podcast.svg";
import GooglePodcast from "../assets/desktop/google-podcasts.svg";
import SpotifyPodcast from "../assets/desktop/spotify.svg";
import PocketCasts from "../assets/desktop/pocket-casts.svg";

import "./Modal.css";

const icons = [SpotifyPodcast, ApplePodcast, GooglePodcast, PocketCasts];

const Modal = () => {
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    email: "",
  });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const validInputEmail = emailRegex.test(e.target.value);
    if (!validInputEmail) {
      setErrorMessage((prevErrors) => ({
        ...prevErrors,
        email: "Oops! Check your email",
      }));
    } else {
      setErrorMessage((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }
  };
  return (
    <div className="modal">
      <h1 className="modal__title">
        <span className="modal__title-green">Publish your podcasts </span>
        everywhere.
      </h1>
      <p className="modal__text">
        Upload your audio to Pod with a single click. We’ll then distribute your
        podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and
        more!
      </p>
      <div className="modal__email">
        <input
          type="email"
          placeholder="Email address"
          className="modal__input"
          onChange={handleEmailChange}
        />
        <button type="submit" className="modal__button">
          Request Access
        </button>
        <p className="modal__error">{errorMessage.email}</p>
      </div>
      <div className="modal__icons">
        {icons.map((icon, index) => (
          <img src={icon} key={index} alt="icons" className="modal__icon" />
        ))}
      </div>
    </div>
  );
};

export default Modal;
