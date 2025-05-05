import "./ThankYou.css";

const ThankYou = ({ value }) => {
  return (
    <div className="thanks__container">
      <div className="thanks__content">
        <img
          src="../../assets/illustration-thank-you.svg"
          alt="thank you"
          className="thanks__image"
        />
        <p className="thanks__selection">You selected {value} out of 5</p>
        <h1 className="thanks__title">Thank you!</h1>
        <p className="thanks__text">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
