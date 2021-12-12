import React from "react";

function FeatureBox(props) {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} />
      </div>
      <div className="s-b-text">
        <h2>{props.title}</h2>
        <button>
          <a href="https://razorpay.com/payment-button/pl_IQKQYAMeDqkjcN/view/?utm_source=payment_button&utm_medium=button&utm_campaign=payment_button">
           <b> Donate Now</b>
          </a>
        </button>
      </div>
    </div>
  );
}
export default FeatureBox;
